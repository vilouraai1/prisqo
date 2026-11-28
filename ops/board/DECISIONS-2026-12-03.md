# Decisions for Jilsha before the $49 test week (HM-36)

**Nothing here is done by Hark.** Prepared 2026-11-28 (America/Chicago). These are the open approvals that stand between the drafts already in the repo and the first paid $49 check. Each one has a deadline, the one action it needs, and what happens if there's no answer. Reply in chat with the numbers and a yes or no (e.g. "1 yes, 2 link, 3 yes, 4 done") and Hark updates the files the same day.

## The money path, in order

| # | Decision | Deadline (Central) | What it unlocks | If no answer |
|---|---|---|---|---|
| 1 | **Go / no-go on the $49 missed-call test** (pain-check.md, PR #47; HM-02 calls, HM-04 result emails) | Mon 2026-11-30, end of day | Test calls Tue 2026-12-01 12:10 PM to Thu 12-03 (`missed-call/README.md`); 24 result contacts after that | No calls. The test waits a week, and `send-master.md` Plan A stands |
| 2 | **How a "yes" pays $49**: a Stripe Payment Link you create, or an invoice from the tool you already use | Thu 2026-12-03 | `[PAY]` in `missed-call/reply-kit.md` R1; Plan B in `send-master.md` | Replies use R1b ("I'll send the link today"), and Plan A stands |
| 3 | **Refund line on pricing.html** (marked `JILSHA-APPROVE`): "If your report fails or comes back empty, email us within 14 days and we'll refund you in full." | Thu 2026-12-03 | Reply kit R1 and R5 quote it | Hark takes the refund sentence out of the reply kit before Fri 12-04 |
| 4 | **Result route for practices without email** (`missed-call/result-by-form-or-phone.md`: 6 by site form, 6 by callback) | Thu 2026-12-03 | 12 of the 24 result contacts | Only the 12 email practices get results |

## Sending, first week

| # | Decision | Deadline | What it unlocks | If no answer |
|---|---|---|---|---|
| 5 | **Read one 2026-11-24 bounce's "Technical details"** (`ops/research/deliverability-hm-22.md`, "Check for Jilsha", about 5 minutes) | Before the first cold email, Tue 2026-12-01 | Cold first emails from 12-01 (`send-calendar-hm-26.md` gate 1) | Mon 11-30 follow-ups in existing threads still go. Cold first emails wait |
| 6 | **Approve the send calendar**: `send-master.md` (Plan A 97 sends, 2026-11-30 to 12-30, max 5 a day) | Mon 2026-11-30, 8 AM | Every planned send | Nothing is sent |
| 7 | **Leads-8 timing**: Thu 2026-12-17 (as planned) or Mon 2027-01-04 (skip Christmas week) | Wed 2026-12-16 | 16 leads-8 first emails + follow-ups | Goes on 12-17 as planned |

## Data checks (one line each)

| # | Check | Why |
|---|---|---|
| 8 | MC-23 Smith Family Dentistry: the site's email is drprincele@gmail.com, but its owner is Dr. Carmen Smith. Send there or skip? | Result email may reach the wrong person |
| 9 | MC-01 Creekview Family Dentistry: fdesk@dentaloffice.com is on a shared vendor domain. OK to use? | Result email may not reach the office |
| 10 | MC-05 Boutique Medspa: the list phone isn't a tel link on its own site. Call 682-463-9822? | Test call validity |

## How to make the Payment Link (if 2 = link)

Hark doesn't create prices or payment objects. These steps are from Stripe's docs ("Create a payment link", https://docs.stripe.com/payment-links/create, read 2026-11-28):

1. In the Stripe Dashboard, open **Payment Links** and click **+New**.
2. Click **+Add a new product**. Name: the offer name you approve (pain-check suggests "Missed-Call + AI Visibility Check"). Price: $49, one time. Then click **Add product**.
3. Click **Create link** and copy the URL.
4. Paste the URL in chat. Hark puts it in `reply-kit.md` (R1) in one PR. Nothing else changes.

## Already decided, for reference
- Hark never sends, posts, calls, submits forms, merges or spends. Max 5 sends a day, weekdays 8–10 AM Central.
- Success bar for the $49 test: at least 4 replies and at least 1 paid within 7 days of the result contacts. Kill at 0 replies. Read-out under Plan B: Fri 2026-12-18.

DONE
