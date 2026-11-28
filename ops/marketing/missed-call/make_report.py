#!/usr/bin/env python3
"""HM-38: build the $49 report draft for one paid practice. Drafts only; sends nothing.

Run from the repo root once a practice has paid:
    python3 ops/marketing/missed-call/make_report.py MC-01
Writes ops/marketing/missed-call/reports/MC-01-report.md, following report-template.md.
Section 1 is copied from call-log-template.csv. Section 4 comes from the saved Gemini
table in report-template.md (re-ask it that day before sending). Sections 2 and 3 are
left as "not checked" until Jilsha checks them. Section 5 suggests fixes from the
template's fix menu, picked by rules from the log. Standard library only.
"""
import csv, datetime as dt, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import make_results as mr  # same log rules and wording

TEMPLATE = os.path.join(HERE, "report-template.md")

def saved_answers():
    rows = {}
    for l in open(TEMPLATE):
        if l.startswith("| MC-"):
            c = [x.strip() for x in l.strip().strip("|").split("|")]
            rows[c[0]] = dict(question=c[4], named=c[5], names=c[6])
    return rows

def fix_menu():
    menu, on = {}, False
    for l in open(TEMPLATE):
        if l.startswith("## Fix menu"): on = True; continue
        if on and l.startswith("## "): break
        m = re.match(r"- \*\*(.+?):\*\* (.+)", l.strip())
        if on and m: menu[m.group(1)] = m.group(2)
    return menu

def pick_fixes(rows, named, menu):
    res = {r["call"]: r["result"].strip().lower() for r in rows}
    missed = {c for c, v in res.items() if v != "answered"}
    keys = []
    def add(prefix):
        for k in menu:
            if k.startswith(prefix) and k not in keys: keys.append(k)
    if missed & {"1-lunch", "2-late-afternoon"}: add("Calls going to voicemail")
    if any(r["voicemail_greeting"].strip().lower() in ("no", "partial") for r in rows): add("Voicemail with no hours")
    if missed and not any(r["callback_time_cst"].strip() for r in rows): add("No callback")
    if "3-after-close" in missed: add("After-hours calls lost")
    if named.startswith("no"): add("Not named in the AI answer")
    return keys[:3]

def main(tid):
    test = {r["test_id"]: r for r in csv.DictReader(open(mr.TEST, newline=""))}
    if tid not in test: sys.exit(f"unknown test id {tid}")
    t = test[tid]
    log = [r for r in csv.DictReader(open(mr.LOG, newline="")) if r["test_id"] == tid]
    rows = [r for c in mr.CALLS for r in log if r["call"] == c and r["result"].strip()]
    if len(rows) < 3: sys.exit(f"{tid}: only {len(rows)} of 3 calls logged; no report")
    bad = [r["result"] for r in rows if r["result"].strip().lower() not in mr.RESULTS]
    if bad: sys.exit(f"{tid}: unknown result value(s) {bad}; fix the log")
    a = saved_answers().get(tid, dict(question="no saved answer", named="—", names="—"))
    menu = fix_menu()
    fixes = pick_fixes(rows, a["named"], menu)
    calls = "\n".join(f"   • {mr.when(r)}: {mr.outcome(r)}" for r in rows)
    cb = ", ".join(r["callback_time_cst"].strip() for r in rows if r["callback_time_cst"].strip()) or "none logged"
    vm = [r["voicemail_greeting"].strip().lower() for r in rows if r["result"].strip().lower() == "voicemail" and r["voicemail_greeting"].strip()]
    vmtxt = {"yes": "gives hours and another way to reach you", "partial": "partly (some of your hours and other ways to reach you, not all)", "no": "no hours or other way to reach you"}.get(vm[0], vm[0]) if vm else "no voicemail reached"
    if a["question"].startswith("no saved"):
        s4 = "   not checked (no saved answer for this city and category; ask Gemini the same day and fill this in)"
    else:
        yn = "were" if a["named"].startswith("yes") else ("weren't" if a["named"].startswith("no") else "[confirm: were / weren't]")
        s4 = f"   We asked Gemini {a['question'].split(' (')[0]} on [DATE YOU RE-ASK]. It named: {a['names']}. You {yn} in it.\n   [Re-ask the same question the day you send, and update the names if they changed.]"
    s5 = "\n".join(f"   • {k}: {menu[k]}" for k in fixes) or "   • [pick from the fix menu in report-template.md]"
    while s5.count("•") < 3: s5 += "\n   • [pick one more from the fix menu, matching sections 2 or 3]"
    body = f"""Subject: Your missed-call + AI visibility check: {t['business']}

Hi [first name],

Thanks for ordering. Here's what we found for {t['business']}, {t['city']}.

1. Test calls (we called as a new patient would; no recording)
{calls}
   Callback: {cb}
   Voicemail greeting: {vmtxt}

2. Website contact form
   not checked [Jilsha: test the form once on {t.get('form_url') or t['website']} and write: reply after N hours / no reply / no form]

3. Google reviews
   not checked [Jilsha: latest review date, and how many of the last 10 got an owner reply. Checked (date).]

4. What AI tools say
{s4}

5. The 3 cheapest fixes, in this order
{s5}

Reply with any questions. Happy to talk it through on a call.

Jilsha Jose, VilouraAI
VilouraAI, 357 E Corporate Dr, Lewisville, TX"""
    os.makedirs(os.path.join(HERE, "reports"), exist_ok=True)
    out = os.path.join(HERE, "reports", f"{tid}-report.md")
    open(out, "w").write(f"# $49 report draft: {tid} {t['business']}\n\n**Draft only. Send only after payment is confirmed.** Generated from the call log and report-template.md. Fill every [bracket] and every \"not checked\" you can check; leave \"not checked\" where you didn't. Fixes picked by rule: {', '.join(fixes) or 'none'}.\n\n```\n{body}\n```\n")
    print(out, "| fixes:", fixes)

if __name__ == "__main__":
    if len(sys.argv) != 2: sys.exit("usage: make_report.py MC-NN")
    main(sys.argv[1])
