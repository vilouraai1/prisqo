/* Prisqo free check: looks up a past AI-answer snapshot in /data/ai-answers.json.
   No paid API calls, no tracking, no external requests. */
(function () {
  "use strict";
  var form = document.getElementById("free-check-form");
  var result = document.getElementById("free-result");
  if (!form || !result) return;

  var data = null;
  var failed = false;

  function norm(s) {
    return (s || "").toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
  }
  function esc(s) {
    return (s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function matches(typed, named) {
    var t = norm(typed), n = norm(named);
    if (!t || !n) return false;
    if (t === n) return true;
    if (t.length >= 4 && n.indexOf(t) !== -1) return true;
    if (n.length >= 4 && t.indexOf(n) !== -1) return true;
    return false;
  }
  function cityKey(s) {
    return norm(s).replace(/ (tx|texas)$/, "").replace(/ /g, "");
  }
  var CAT_ALIAS = {
    "roofing": "roofer", "roofing company": "roofer", "roofing contractor": "roofer",
    "auto repair": "auto-repair", "auto repair shop": "auto-repair", "auto mechanic": "auto-repair", "mechanic": "auto-repair", "car repair": "auto-repair",
    "hvac company": "hvac", "hvac contractor": "hvac", "ac repair": "hvac",
    "personal injury lawyer": "personal-injury", "personal injury attorney": "personal-injury", "personal injury": "personal-injury",
    "family law attorney": "family-law", "family lawyer": "family-law", "family law": "family-law",
    "medspa": "med-spa", "med spa": "med-spa", "chiropractic": "chiropractor", "dental": "dentist"
  };
  function catKey(s) {
    var n = norm(s);
    if (CAT_ALIAS[n]) n = norm(CAT_ALIAS[n]);
    else if (CAT_ALIAS[n.replace(/s$/, "")]) n = norm(CAT_ALIAS[n.replace(/s$/, "")]);
    return n.replace(/ /g, "").replace(/s$/, "");
  }
  function findOption(select, value, keyFn) {
    if (!value) return null;
    var k = keyFn(value);
    for (var i = 0; i < select.options.length; i++) {
      var o = select.options[i];
      if (keyFn(o.value) === k || keyFn(o.textContent) === k) return o;
    }
    return null;
  }
  function addDataOptions() {
    var categories = form.elements["category"], cities = form.elements["city"];
    var seenCategories = {}, seenCities = {};
    Array.prototype.forEach.call(categories.options, function (o) { seenCategories[catKey(o.value)] = true; });
    Array.prototype.forEach.call(cities.options, function (o) { seenCities[cityKey(o.value)] = true; });
    data.checks.forEach(function (check) {
      if (!seenCategories[catKey(check.category)]) {
        var categoryOption = document.createElement("option");
        categoryOption.value = check.category;
        categoryOption.textContent = check.categoryLabel;
        categories.appendChild(categoryOption);
        seenCategories[catKey(check.category)] = true;
      }
      if (!seenCities[cityKey(check.city)]) {
        var cityOption = document.createElement("option");
        cityOption.value = check.city;
        cityOption.textContent = check.city;
        cities.appendChild(cityOption);
        seenCities[cityKey(check.city)] = true;
      }
    });
  }
  function sourceLabel(check) {
    return check.checked === "2026-11-13" ? "Gemini on Nov 13, 2026" : "an AI search assistant on Nov 11, 2026";
  }
  function ctaHtml() {
    return '<p><a class="btn" href="/?ref=freecheck#check">Get my report ($19)</a></p>' +
      '<p style="font-size:14px">14-day refund · One-time charge · Report ready in minutes</p>';
  }
  function shareHtml(text) {
    var url = encodeURIComponent(window.location.href);
    var t = encodeURIComponent(text);
    return '<p class="hint">Share your result</p><p>' +
      '<a href="https://twitter.com/intent/tweet?text=' + t + '&amp;url=' + url + '" target="_blank" rel="noopener">Post on X</a> · ' +
      '<a href="https://www.facebook.com/sharer/sharer.php?u=' + url + '" target="_blank" rel="noopener">Share on Facebook</a> · ' +
      '<a href="https://www.linkedin.com/sharing/share-offsite/?url=' + url + '" target="_blank" rel="noopener">Share on LinkedIn</a> · ' +
      '<a href="mailto:?subject=' + t + '&amp;body=' + url + '">Share by email</a></p>';
  }
  function run() {
    var category = form.elements["category"].value;
    var city = form.elements["city"].value;
    var name = form.elements["name"].value.trim();
    var label = form.elements["category"].selectedOptions[0].textContent;
    if (!name) {
      result.innerHTML = "<p>Enter your business name to check.</p>";
      return;
    }
    if (failed || !data) {
      result.innerHTML = "<h2>Check unavailable right now</h2><p>We could not load the saved answers. Get your full report instead — 6 buyer questions, one $19 payment, no account.</p>" + ctaHtml();
      return;
    }
    var check = null, otherCities = [];
    for (var i = 0; i < data.checks.length; i++) {
      var c = data.checks[i];
      if (catKey(c.category) !== catKey(category)) continue;
      if (cityKey(c.city) === cityKey(city)) { check = c; break; }
      otherCities.push(c.city);
    }
    var url = "/free-check?category=" + encodeURIComponent(category) + "&city=" + encodeURIComponent(city) + "&name=" + encodeURIComponent(name);
    if (window.history && window.history.replaceState) window.history.replaceState(null, "", url);
    if (!check) {
      var also = otherCities.length ? " We do have saved answers for " + esc(label.toLowerCase()) + " in " + otherCities.map(esc).join(", ") + "." : "";
      result.innerHTML = "<h2>Not checked yet</h2><p>We have not checked “best " + esc(label.toLowerCase()) + " in " + esc(city) + "” yet." + also + " Get your full $19 report — 6 real buyer questions for your business, answered by one AI model with live web search.</p>" + ctaHtml();
      return;
    }
    var named = check.named;
    var found = null;
    for (var j = 0; j < named.length; j++) {
      if (matches(name, named[j])) { found = named[j]; break; }
    }
    var list = named.map(esc).join(", ");
    var shareText = found
      ? "AI named " + found + " for “best " + label.toLowerCase() + " in " + city + "”. Did it name you?"
      : "AI did not name us for “best " + label.toLowerCase() + " in " + city + "”. Did it name you?";
    if (found) {
      result.innerHTML = "<h2>You showed up</h2><p><strong>" + esc(found) + "</strong> was named for “" + esc(check.question) + "” in our check with " + sourceLabel(check) + ". But that is one question — see the 6 buyer questions where you might not show up.</p>" + ctaHtml() + shareHtml(shareText);
    } else {
      result.innerHTML = "<h2>AI did not name you in our last check</h2><p>In our check with " + sourceLabel(check) + ", for “" + esc(check.question) + "” it named: <strong>" + list + "</strong>. Find out where you stand across 6 buyer questions — and what to fix.</p>" + ctaHtml() + shareHtml(shareText);
    }
  }

  form.addEventListener("submit", function (ev) { ev.preventDefault(); run(); });

  var params = new URLSearchParams(window.location.search);
  var pc = params.get("category"), py = (params.get("city") || "").trim(), pn = params.get("name");
  function prefill() {
    var catSel = form.elements["category"], citySel = form.elements["city"];
    var co = findOption(catSel, pc, catKey);
    if (co) catSel.value = co.value;
    var yo = findOption(citySel, py, cityKey);
    if (!yo && py) {
      /* A city we have no snapshot for (typed on the homepage): keep it so the
         visitor sees "Not checked yet" for their own city, not a different one. */
      yo = document.createElement("option");
      yo.value = py;
      yo.textContent = py;
      citySel.appendChild(yo);
    }
    if (yo) citySel.value = yo.value;
    if (pn) form.elements["name"].value = pn;
    /* Homepage hero passes name + city only: fill what we were given and let
       the visitor pick a category. Run only when all three are present. */
    if (co && py && pn) run();
  }
  fetch("/data/ai-answers.json").then(function (r) {
    if (!r.ok) throw new Error("http " + r.status);
    return r.json();
  }).then(function (j) {
    data = j;
    addDataOptions();
  }, function () { failed = true; }).then(prefill);
})();
