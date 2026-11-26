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
- 15 of 24 have an email. 9 rows use Gmail or other personal addresses, or carry notes, so read `email_check` before sending. Smith Family Dentistry (VL-008) is the open name mismatch. Creekview's `fdesk@dentaloffice.com` sits on a shared vendor domain, so confirm it.
- 9 have no email. Their result goes by a phone callback, or Jilsha uses their site's form herself.

## Success bar (scaled to 24)
- Keep: at least 4 replies and at least 1 paid $49 check within 7 days of the result emails.
- Kill or rework: 0 replies.
- Record the missed-call rate either way.
