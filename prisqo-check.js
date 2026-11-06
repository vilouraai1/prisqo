// Prisqo live check — client JS for prisqo.vilouraai.com.
// Include once on the homepage, after the form:
//   <script src="/prisqo-check.js" defer></script>
//
// PAID flow (Stripe Checkout, test mode):
//   1. Form submit -> POST /api/create-checkout-session with
//      {url, category, city, businessName}. The server returns a
//      Stripe Checkout URL; the browser is redirected there.
//      No Groq check runs at this point.
//   2. After payment, Stripe redirects back to
//      /?paid=1&session_id={CHECKOUT_SESSION_ID}. On load, this
//      file sees session_id and calls POST /api/check with
//      {paidSessionId}. The server verifies the payment with
//      Stripe (webhook, or a direct Stripe lookup) and only
//      then creates the job, using the inputs stored at
//      checkout time. Then it polls POST /api/step/:jobId until
//      done or retry_later (wait retry_after_seconds), shows
//      progress "Prompt N of 6", loads GET /api/report/:id and
//      renders it.
//   A session pays for ONE report: a second /check with the
//   same session id resumes the running job, or starts one
//   replacement if the job failed before producing a report;
//   a finished report is rejected (402).
//
// This file contains NO token, NO Stripe key, and NO engine URL.
// It only talks to same-origin /api/*, and the site Worker adds
// the check token server-side. Never add a token or a key here.
// Hosted Checkout needs no publishable key in JS.

(function () {
  "use strict";

  var MAX_STEPS = 60;
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

  // Copy corrections, in place, only where the old wording is
  // still present. The homepage source should carry the new
  // wording (see homepage-copy.md); this is a safety net.
  function fixDemoCopy() {
    var replacements = [
      ["about 12 buyer-style questions", "6 buyer-style questions"],
      ["We ask ~12 real buyer questions", "We ask 6 real buyer questions"],
      ["~12 real buyer questions", "6 real buyer questions"],
      ["No sign-up and nothing is for sale yet.",
       "One report, pay once at checkout. No subscription."],
      ["nothing is for sale yet", "pay once at checkout for one report"],
      ["Demo only: this static preview does not run checks and sends nothing.",
       "This runs a real 6-question check after checkout."],
      ["Demo only: this static preview does not run checks",
       "This runs a real 6-question check after checkout"],
      ["Run free check", "Continue to checkout"],
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
  // Pre-payment errors only: nothing was charged yet.
  function showError(box, message, jobId) {
    showStatus(box,
      '<p role="alert"><strong>That check did not finish.</strong> ' + escapeHtml(message) + "</p>" +
      (jobId ? "<p>Your check id is <code>" + escapeHtml(jobId) + "</code>. " +
        "It may still be running — try loading the report again in a minute.</p>" : "") +
      "<p>Nothing was charged for a check that did not run. Try again, or use the sample report.</p>");
  }
  // Errors after payment: the buyer may already have paid, so never
  // claim nothing was charged. One payment covers one report, with
  // one retry when the job failed before producing a report.
  function showPaidError(box, message, jobId) {
    showStatus(box,
      '<p role="alert"><strong>That check did not finish.</strong> ' + escapeHtml(message) + "</p>" +
      (jobId ? "<p>Your check id is <code>" + escapeHtml(jobId) + "</code>. " +
        "It may still be running — try loading the report again in a minute.</p>" : "") +
      "<p>If your payment went through, it still covers one report: reload the page Stripe sent you back to and it retries once if the job failed before producing a report. A session that already produced a report cannot be reused.</p>");
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

  // Step 1: form -> Stripe Checkout. No check runs here.
  async function startCheckout(form, box, submitBtn) {
    var websiteEl = field(["website", "url"]);
    var categoryEl = field(["category"]);
    var cityEl = field(["city"]);
    var nameEl = field(["businessName", "business_name", "name"]);
    var website = websiteEl ? websiteEl.value.trim() : "";
    var category = categoryEl ? categoryEl.value.trim() : "";
    var city = cityEl ? cityEl.value.trim() : "";
    var businessName = nameEl ? nameEl.value.trim() : "";
    if (!website || !category) {
      showError(box, "Enter your website and what you do (category) first.");
      return;
    }
    submitBtn.disabled = true;
    showStatus(box, "<p>Taking you to secure checkout…</p>");
    try {
      var created = await postJson("/api/create-checkout-session", {
        url: website, category: category, city: city, businessName: businessName || undefined,
      });
      if (!created.ok || !created.data || !created.data.url) {
        var msg = (created.data && created.data.error) ||
          ("Checkout could not start (HTTP " + created.status + ").");
        showError(box, msg);
        submitBtn.disabled = false;
        return;
      }
      // Hosted Stripe page. Nothing is charged until the buyer
      // completes payment there.
      window.location.href = created.data.url;
    } catch (e) {
      showError(box, "Checkout could not start. Check your connection and try again.");
      submitBtn.disabled = false;
    }
  }

  // Step 2: back from Stripe with ?session_id=... -> start the
  // paid check, then poll it. The server verifies the payment;
  // a 402 here means Stripe has not confirmed it (or the
  // session was already used for a report).
  async function runPaidCheck(box, sessionId) {
    showStatus(box, "<p>Payment received. Starting your check…</p>");
    var startedAt = Date.now();
    var jobId = null;
    var created = await postJson("/api/check", { paidSessionId: sessionId });
    if (!created.ok || !created.data || !created.data.jobId) {
      var msg = (created.data && created.data.error) ||
        ("The check could not start (HTTP " + created.status + ").");
      showPaidError(box, msg + " Session: " + sessionId);
      return;
    }
    jobId = created.data.jobId;

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
          "<p>Groq is rate-limiting the check. Waiting " + waitS + " seconds, then continuing automatically.</p>" +
          "<p>Prompt " + (d.progress || 0) + " of 6 done.</p>" +
          (d.groq_error ? "<p><small>" + escapeHtml(String(d.groq_error).slice(0, 200)) + "</small></p>" : ""));
        await sleep(waitS * 1000);
        continue;
      }
      if (!step.ok) {
        showPaidError(box, (d.error || "The check failed (HTTP " + step.status + ")."), jobId);
        return;
      }
      if (d.status === "done") {
        await loadReport(box, jobId, d.report || null);
        return;
      }
      if (d.status === "failed") {
        showPaidError(box, d.error || "The check failed.", jobId);
        return;
      }
      var done = d.progress == null ? 0 : d.progress;
      var total = d.total || 6;
      var extra = "";
      if (d.parse_progress != null) {
        extra = "<p>Reading the answers… " + d.parse_progress + " of " + (d.parse_total || done) + ".</p>";
      }
      showStatus(box,
        "<p>Checking… prompt " + done + " of " + total + " done.</p>" + extra +
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
    var form = document.querySelector("form");
    if (!form) return;
    var submitBtn = form.querySelector('[type="submit"]') || form.querySelector("button");
    var box = resultBox(form);
    var params = new URLSearchParams(window.location.search);
    if (params.get("cancelled") === "1") {
      showStatus(box, "<p>Checkout was cancelled. Nothing was charged. You can try again whenever you like.</p>");
    } else if (params.get("session_id")) {
      // Back from Stripe after payment. Start the paid check.
      runPaidCheck(box, params.get("session_id"));
    }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      startCheckout(form, box, submitBtn);
    });
  });
})();
