# Missed-call test pack (HM-30, for HM-02 and HM-04)

**Status:** Prep only. Hark makes no calls, sends nothing, and submits no forms. Jilsha places every call.
**Written:** 2026-11-26 (America/Chicago).
**Why:** This is the launch test from `ops/research/pain-check.md` §4 (a $49 "Missed-Call + AI Visibility Check"). It opens with a finding the owner can verify for themselves. Cold AI-visibility email got 0 replies. HM-02 pointed to a pack in an agent workspace that was never committed, so HM-04 had nothing to build from.

## Files
- `missed-call-test.csv`: **24 practices** (dental, chiropractic, med spa, physical therapy). Lewisville and Denton County first, then Carrollton and Dallas. Selection rules:
  - from `crm/seg-*.csv` and `call-list.csv`, with a phone number
  - skips anyone in `sent-log.md`, `do-not-email.md` or `send-calendar-hm-26.md`
  - phone and email re-checked on each practice's own site on 2026-11-26
  - only 24 qualified, not the 30 in the plan, so the success bar scales down (below)
- `call-script.md`: the disclosed script and the rules.
- `call-log-template.csv`: 72 rows, three calls per practice.
- `make_results.py` (HM-37): after the calls, run `python3 ops/marketing/missed-call/make_results.py` from the repo root. It reads the filled call log and writes `result-drafts.md`, one ready-to-review email, form text or callback line per practice with all 3 calls logged. Facts are copied from the log, all-answered practices get no pitch, and nothing is sent. Hark runs it on Fri 2026-12-04 once the log is in.
- `followup-template.md`: the result email for HM-04. It is gated: only after a completed log, and only after Jilsha decides go on the $49 offer (PR #47).

## Week plan (Central time)
| Day | Slot | What |
|---|---|---|
| Tue 2026-12-01 | 12:10–12:50 PM | Call 1 (lunch) to all 24 |
| Wed 2026-12-02 | 4:40–5:20 PM | Call 2 (late afternoon) to all 24 |
| Thu 2026-12-03 | after each office's posted close (most 5–6 PM) | Call 3 (after close); log any callbacks through Fri noon |
| Fri 2026-12-04 | — | Hark drafts the HM-04 result emails from the log; Jilsha decides which to send (max 5 a day, 8–10 AM) |

These calls don't collide with the 8–10 AM email send slots in `send-calendar-hm-26.md`.

## Phone checks worth knowing
- MC-02 Round Grove Family Dentistry: its own site shows 469-518-4257, but the list had 469-702-2560. Call the site number.
- MC-11 Village Chiropractic: its own site shows 972-317-3146, but the list had 972-460-4420. Call the site number.
- `phone_check` says which numbers had no tel link on their own site.

## Email checks
- Result channel (re-checked on own sites 2026-11-27, HM-32): 12 by email, 6 by the site's contact form (Jilsha submits), 6 by callback. See `result_channel`, `form_url` and `email_check` in the CSV, and `result-by-form-or-phone.md`. Smith Family Dentistry (VL-008) is still the open name mismatch, and Creekview's `fdesk@dentaloffice.com` sits on a shared vendor domain, so confirm both.

## Success bar (scaled to 24)
- Keep: at least 4 replies and at least 1 paid $49 check within 7 days of the result emails.
- Kill or rework: 0 replies.
- Record the missed-call rate either way.
