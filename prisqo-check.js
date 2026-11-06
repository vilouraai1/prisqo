// Prisqo live check — client JS for prisqo.vilouraai.com.
// Include once on the homepage, after the form:
//   <script src="/prisqo-check.js" defer></script>
//
// Paid flow (Stripe Checkout, hosted):
// 1. Form submit -> POST /api/create-checkout-session
//    {url, category, city, businessName} -> redirect to Stripe url.
// 2. Stripe returns to /?paid=1&session_id=cs_... -> POST
//    /api/check {paidSessionId} -> POST /api/step/:jobId until done
//    or retry_later (wait retry_after_seconds) -> render the report.
//    Progress shows "Prompt N of 6".
// 3. /?cancelled=1 -> a short "nothing was charged" message.
// No check (and no AI call) runs until Stripe says paid.
//
// This file contains NO token and NO engine URL. It only talks to
// same-origin /api/*, and the site Worker adds the token
// server-side. Never add a token here.
//
// Guards against hanging: at most 60 step attempts, at most
// 20 minutes elapsed, at most 3 network retries per step. After
// any of those, it stops and tells the user the job id, so the
// report can be re-loaded later instead of spinning forever.

(function () {
  "use strict";

  var MAX_STEPS = 60;
  var checkoutBusy = false;
  var MAX_ELAPSED_MS = 20 * 60 * 1000;
  var MAX_WAIT_S = 70;

  function $(sel) {
    return document.querySelector(sel);
  }
  function field(names) {
    for (var i = 0; i < names.length; i++) {
      var el = document.querySelector('[name="' + names[i] + '"]') || document.querySelector("#" + names[i]);
      if (el) return el;
    }
    return null;
  }
  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
  function sleep(ms) {
    return new Promise(function (r) { setTimeout(r, ms); });
  }

  // The live check asks 6 questions now, not 12. Correct the
  // demo copy in place if it still says otherwise, and replace
  // the "does not run checks" note. Only exact phrases change.
  function fixDemoCopy() {
    var replacements = [
      ["about 12 buyer-style questions", "6 buyer-style questions"],
      ["We ask ~12 real buyer questions", "We ask 6 real buyer questions"],
      ["~12 real buyer questions", "6 real buyer questions"],
      ["Demo only: this static preview does not run checks and sends nothing.",
       "Pay once at checkout, then your check runs automatically. No subscription. One payment buys one report."],
    ];
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      var text = node.nodeValue;
      var changed = text;
      replacements.forEach(function (pair) {
        changed = changed.split(pair[0]).join(pair[1]);
      });
      if (changed !== text) node.nodeValue = changed;
    });
  }

  function resultBox(form) {
    var box = $("#prisqo-result") || $("[data-prisqo-result]");
    if (box) return box;
    box = document.createElement("div");
    box.id = "prisqo-result";
    box.setAttribute("aria-live", "polite");
    form.parentNode.insertBefore(box, form.nextSibling);
    return box;
  }

  function showStatus(box, html) {
    box.innerHTML = html;
  }
  function isValidUrl(value) {
    var v = value;
    if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(v)) v = "https://" + v;
    try {
      var u = new URL(v);
      return (u.protocol === "http:" || u.protocol === "https:") && u.hostname.indexOf(".") !== -1;
    } catch (e) { return false; }
  }
  // Field errors happen before checkout opens, so no charge is
  // involved and the message just says what is missing.
  function showValidationError(box, problems) {
    showStatus(box,
      '<p role="alert"><strong>Please fix the form first:</strong></p><ul>' +
      problems.map(function (p) { return "<li>" + escapeHtml(p) + "</li>"; }).join("") + "</ul>");
  }
  // Before payment: nothing was charged, so the message stays mild.
  function showError(box, message) {
    showStatus(box,
      '<p role="alert"><strong>Checkout did not start.</strong> ' + escapeHtml(message) + "</p>" +
      "<p>Nothing was charged. Try again, or look at the sample report.</p>");
  }
  // After payment: the money went through, so say so plainly.
  function showPaidError(box, message, jobId) {
    showStatus(box,
      '<p role="alert"><strong>Your payment went through, but the check could not ' +
      (jobId ? "finish" : "start") + ".</strong> " + escapeHtml(message) + "</p>" +
      (jobId ? "<p>Your check id is <code>" + escapeHtml(jobId) + "</code>. " +
        "It may still be running — reload this page in a minute.</p>" : "") +
      "<p>Your payment still covers one report. If no report was produced, " +
      "reloading this page retries the check once automatically — there are no " +
      "unlimited reruns. If it still fails, see the FAQ " +
      "<a href=\"/faq#q15\">\u201cWhat if I pay and the check fails?\u201d</a>.</p>");
  }

  async function postJson(path, body) {
    var res = await fetch(path, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: body === undefined ? undefined : JSON.stringify(body),
    });
    var data = null;
    try { data = await res.json(); } catch (e) { /* non-JSON body */ }
    return { status: res.status, ok: res.ok, data: data };
  }

  async function startCheckout(form, box, submitBtn) {
    var websiteEl = field(["website", "url", "domain"]);
    var categoryEl = field(["category"]);
    var cityEl = field(["city"]);
    var nameEl = field(["businessName", "business_name", "name", "brand"]);
    var website = websiteEl ? websiteEl.value.trim() : "";
    var category = categoryEl ? categoryEl.value.trim() : "";
    var city = cityEl ? cityEl.value.trim() : "";
    var businessName = nameEl ? nameEl.value.trim() : "";
    if (checkoutBusy) return;
    var problems = [];
    if (!website) problems.push("Enter your website.");
    else if (!isValidUrl(website)) problems.push("That website address does not look valid — enter a full address like example.com.");
    if (!category) problems.push("Enter what you do (your niche or category).");
    if (!city) problems.push("Enter your city or location.");
    if (problems.length) {
      showValidationError(box, problems);
      return;
    }
    checkoutBusy = true;
    submitBtn.disabled = true;
    showStatus(box, "<p>Opening secure checkout…</p>");
    var redirecting = false;
    try {
      var created;
      try {
        created = await postJson("/api/create-checkout-session", {
          url: website, category: category, city: city, businessName: businessName || undefined,
        });
      } catch (e) {
        showError(box, "The connection dropped. Please try again.");
        return;
      }
      var d = created.data || {};
      if (!created.ok || !d.url || !/^https:\/\/checkout\.stripe\.com\//.test(d.url)) {
        showError(box, d.error || ("Checkout could not start (HTTP " + created.status + ")."));
        return;
      }
      redirecting = true;
      window.location.assign(d.url);
    } finally {
      if (!redirecting) { submitBtn.disabled = false; checkoutBusy = false; }
    }
  }

  async function runPaidCheck(box, sessionId) {
    showStatus(box, "<p><strong>Your payment went through.</strong> Your check is starting now. Stay on this page until the report finishes, then bookmark this page — this address is your report, and opening it again reloads the same check.</p>");
    var startedAt = Date.now();
    var jobId = null;
    var created;
    try {
      created = await postJson("/api/check", { paidSessionId: sessionId });
    } catch (e) {
      showPaidError(box, "The connection dropped while starting the check. Reload this page to try again.");
      return;
    }
    var c = created.data || {};
    if (created.ok && c.jobId) {
      jobId = c.jobId;
    } else if (created.status === 402 && c.code === "already_used" && c.jobId) {
      // Page refresh after the check started: resume the same job
      // (no new check runs).
      jobId = c.jobId;
    } else if (created.status === 402 && c.code === "not_paid") {
      showStatus(box,
        '<p role="alert"><strong>Stripe has not confirmed this payment yet.</strong> ' +
        "Reload this page in a minute. Your check starts as soon as the payment is confirmed.</p>");
      return;
    } else if (created.status === 402 && (c.code === "unknown_session" || c.code === "payment_required")) {
      showStatus(box,
      '<p role="alert"><strong>That checkout link was not recognised.</strong> ' +
      "If you just paid, your payment may still have gone through — see the FAQ " +
      "<a href=\"/faq#q15\">\u201cWhat if I pay and the check fails?\u201d</a> " +
      "or start again from the form.</p>");
      return;
    } else {
      showPaidError(box, c.error || ("The check could not start (HTTP " + created.status + ")."));
      return;
    }

    var steps = 0;
    var networkRetries = 0;
    while (true) {
      if (steps >= MAX_STEPS || Date.now() - startedAt > MAX_ELAPSED_MS) {
        showPaidError(box, "It is taking longer than expected, so I stopped waiting rather than spinning forever.", jobId);
        return;
      }
      steps += 1;
      var step;
      try {
        step = await postJson("/api/step/" + encodeURIComponent(jobId));
        networkRetries = 0;
      } catch (e) {
        networkRetries += 1;
        if (networkRetries > 3) {
          showPaidError(box, "The connection dropped while waiting for the check.", jobId);
          return;
        }
        await sleep(2000);
        continue;
      }

      var d = step.data || {};
      if (step.status === 429 || d.status === "retry_later") {
        var waitS = Number(d.retry_after_seconds || d.groq_wait_seconds || 65);
        if (!isFinite(waitS) || waitS <= 0) waitS = 65;
        waitS = Math.min(waitS, MAX_WAIT_S);
        showStatus(box,
          "<p>The AI provider is rate-limiting the check. Waiting " + waitS + " seconds, then continuing automatically. Keep this page open.</p>" +
          "<p>Prompt " + (d.progress || 0) + " of 6 done.</p>");
        await sleep(waitS * 1000);
        continue;
      }
      if (d.status === "done") {
        await loadReport(box, jobId, d.report || null);
        return;
      }
      if (!step.ok || d.status === "failed") {
        showPaidError(box, (d.error || "The check failed (HTTP " + step.status + ")."), jobId);
        return;
      }
      var done = d.progress == null ? 0 : d.progress;
      var total = d.total || 6;
      var extra = "";
      if (d.parse_progress != null) {
        extra = "<p>Reading the answers… " + d.parse_progress + " of " + (d.parse_total || done) + ".</p>";
      }
      showStatus(box,
        "<p>Checking… prompt " + done + " of " + total + " done. Keep this page open.</p>" + extra +
        (d.capped ? "<p><strong>Daily spending cap reached.</strong> This is a partial report.</p>" : ""));
      await sleep(1000);
    }
  }

  async function loadReport(box, jobId, inlineReport) {
    var report = inlineReport;
    if (!report) {
      var res = await fetch("/api/report/" + encodeURIComponent(jobId));
      if (!res.ok) {
        showPaidError(box, "The check finished, but the report could not be loaded.", jobId);
        return;
      }
      var data = await res.json();
      report = data.report;
    }
    if (!report) {
      showPaidError(box, "The check finished, but the report came back empty.", jobId);
      return;
    }
    renderReport(box, report);
  }

  function renderReport(box, r) {
    var s = r.score || {};
    var competitors = (r.competitors || []).map(function (c) {
      return "<li><strong>" + escapeHtml(c.name) + "</strong> — named in " + c.count +
        " of " + (s.total || 6) + " answers" +
        (c.url ? ' · <a href="' + escapeHtml(c.url) + '" target="_blank" rel="noopener">' + escapeHtml(c.url) + "</a>" : "") + "</li>";
    }).join("");
    var citations = (r.citations || []).map(function (c) {
      return "<li>" + escapeHtml(c.domain) + " — " + c.count + "×</li>";
    }).join("");
    var answers = (r.answers || []).map(function (a, i) {
      var names = (a.businesses || []).map(function (b) {
        return escapeHtml(b.name) + (b.rank ? " (#" + b.rank + ")" : " (mentioned in prose)");
      }).join(", ");
      return "<details><summary>" + escapeHtml(a.prompt) + "</summary>" +
        (names ? "<p><strong>Named:</strong> " + names + "</p>" : "<p><strong>Named:</strong> nobody</p>") +
        "<p>" + escapeHtml(a.text || "(no answer text saved)") + "</p>" +
        (a.parse_error ? "<p><small>Parse note: " + escapeHtml(a.parse_error) + "</small></p>" : "") +
        "</details>";
    }).join("");

    showStatus(box,
      "<h2>Your visibility report</h2>" +
      "<p><strong>Score: " + (s.score == null ? "—" : s.score + " / 100") + "</strong> — " +
      "named in " + (s.mentioned || 0) + " of " + (s.total || 6) + " answers, " +
      "in the top 3 in " + (s.top3 || 0) + ".</p>" +
      "<p>Bookmark this page to come back to this report — this address is your report.</p>" +
      (r.capped ? "<p><strong>Partial report:</strong> the daily spending cap was reached, so this is not a full 6-prompt report.</p>" : "") +
      (r.complete === false && !r.capped ? "<p><strong>Partial report:</strong> not all prompts completed.</p>" : "") +
      "<h3>Who AI recommends instead</h3>" +
      (competitors ? "<ol>" + competitors + "</ol>" : "<p>Nobody else was named in these answers.</p>") +
      "<h3>Sites the answers cite</h3>" +
      (citations ? "<ul>" + citations + "</ul>" : "<p>No citations were recorded.</p>") +
      "<h3>What AI actually answered</h3>" + (answers || "<p>No answers were saved.</p>") +
      "<p><small>Checked with Groq gpt-oss-20b and live web search — one model, " +
      (s.total || 6) + " buyer-style questions. This is not ChatGPT, Perplexity, Claude, Grok, " +
      "or Google AI Overviews, and results vary between runs. Competitor URLs are as the model returned them, not independently verified.</small></p>");
  }

  document.addEventListener("DOMContentLoaded", function () {
    fixDemoCopy();
    var form = document.querySelector("[data-static-demo-form=\"check\"]") || document.querySelector("form");
    if (!form) return;
    form.querySelectorAll("input, button, select, textarea").forEach(function (el) {
      el.disabled = false;
    });
    var submitBtn = form.querySelector('[type="submit"]') || form.querySelector("button");
    if (!submitBtn) {
      submitBtn = document.createElement("button");
      submitBtn.type = "submit";
      submitBtn.className = "btn";
      var actions = form.querySelector(".form-actions") || form;
      actions.appendChild(submitBtn);
    }
    submitBtn.textContent = "Continue to checkout";
    var box = resultBox(form);
    function onSubmit(e) {
      if (e) e.preventDefault();
      startCheckout(form, box, submitBtn);
    }
    form.addEventListener("submit", onSubmit);
    if (form.tagName !== "FORM") {
      submitBtn.addEventListener("click", onSubmit);
    }

    var params = new URLSearchParams(window.location.search);
    var sessionId = params.get("session_id");
    if (sessionId && /^cs_(test|live)_[A-Za-z0-9]+$/.test(sessionId)) {
      if (box.scrollIntoView) box.scrollIntoView({ block: "start" });
      runPaidCheck(box, sessionId);
    } else if (params.get("cancelled") === "1") {
      showStatus(box, "<p>Checkout was cancelled. Nothing was charged and no check ran. " +
        "You can start again whenever you like.</p>");
      if (box.scrollIntoView) box.scrollIntoView({ block: "start" });
    }
  });

  // Back from Stripe Checkout restores the page from the back-forward
  // cache with the pay button still disabled from the redirect, and
  // checkoutBusy still set. DOMContentLoaded does not fire on that
  // restore, so reset here — unless a paid check is running on this
  // page (/?paid=1&session_id=...), in which case leave it alone.
  window.addEventListener("pageshow", function (e) {
    if (!e.persisted) return;
    var params = new URLSearchParams(window.location.search);
    var sessionId = params.get("session_id");
    if (sessionId && /^cs_(test|live)_[A-Za-z0-9]+$/.test(sessionId)) return;
    var form = document.querySelector("[data-static-demo-form=\"check\"]") || document.querySelector("form");
    if (!form) return;
    var btn = form.querySelector('[type="submit"]') || form.querySelector("button");
    if (btn) btn.disabled = false;
    checkoutBusy = false;
    var box = $("#prisqo-result") || $("[data-prisqo-result]");
    if (box && box.textContent.indexOf("Opening secure checkout") !== -1) {
      showStatus(box, "<p>You came back from checkout. You can try again whenever you like.</p>");
    }
  });
})();
