# Reply-rate autopsy: cold email, 2026-11-11 to 2026-11-19

Written 2026-11-21 (America/Chicago). Research and drafts only. Nothing was sent, posted, or called.
Sources: `ops/marketing/sent-log.md` (origin/main `66f0396`), the draft files named in each row below, `ops/board/METRICS.md`, `data/ai-answers.json`.

## 1. What was actually sent

Counted line by line from `sent-log.md`. A "first email" is the first message to an address. Drafted-only rows are not counted.

| Sent | Cohort | First emails | Bounced | Days without a reply (as of 2026-11-21) | Offer in the email | Draft text in repo |
|---|---|---|---|---|---|---|
| 2026-11-11 | Agencies (Fast Hippo, GMP, Thinkit, Aspiro, DigitalZeon) | 5 | 1 (DigitalZeon) | 10 | Resell the $19 report | `agency-pitch.md` "Cold email (90 words)" (subject matches the follow-ups) |
| 2026-11-11 | Kingdom Chiropractic | 1 | 0 | 10 | $19 report | `outreach.md` #1 |
| 2026-11-13 | Leads-3 (dentist, med spa, HVAC, plumber, chiro, law, roofer) | 9 | 0 | 8 | $19 report + free-check link | `drafts-3.md` |
| 2026-11-13 | CRM score 8+ | 6 | 1 (office@drkareed.com) | 8 | Website / AI receptionist, "quick call to scope" | `crm/out-dental.md`, `crm/out-auto-home.md` |
| 2026-11-17 (~10:05 PM CST) | 7 agencies + 3 auto/home | 10 | 0 | 4 | Agencies: $19 resale. Auto/home: website or AI agent, call ask | `drafts-agencies-1.md`, `crm/out-auto-home.md` |
| 2026-11-19 (~2:48 PM CST) | Leads-7 (dentist, chiro) | 10 | 1 (info@fusionchiropracticspa.com) | 2 | "Playbook format": no link, no price, one question (per sent-log) | Exact sent text is not in the repo. `drafts-7.md` holds the longer earlier version. |
| **Total** | | **41** | **3** | | | |

Also sent: 5 follow-ups on 2026-11-15 (CRM thread replies). **41 first emails + 5 follow-ups = 46 sends in sent-log, 38 first emails delivered.** METRICS.md says `sent: 54`. That number doesn't match sent-log, and the difference (8) is unknown. Kiwi should reconcile it. This file uses 46 / 41.

Replies: 0 (METRICS.md and sent-log, as of 2026-11-21).

## 2. Is 0 replies meaningful yet?

Partly.
- The 21 first emails sent 2026-11-11 and 2026-11-13 have had 8 to 10 days. That's long enough to call 0 replies a real result for **those formulas**.
- The 20 sent 2026-11-17 and 2026-11-19 are 2 to 4 days old. Leads-7 (11-19) is the only cohort in the new short playbook format, so it's too early to judge. Its follow-ups are due on or after 2026-11-22.
- 38 delivered emails split across 4 or 5 different formulas is a small sample. No single formula has more than about 15 sends. "0 replies" can't tell us which part failed. The diagnosis below is from the content, not the stats.

## 3. What was wrong (from the drafts themselves)

Each finding cites the file. The deadline for "send more of the same" has passed. None of these is a reason to resend the old formula.

1. **Too long, and selling in the first touch.** Every first email sent before 11-19 ran about 63 to 100 body words and named a price ($19) and/or asked for a call. Leads-3 bodies are all 70 words with "$19" (`drafts-3.md`). The agency template is 90 words with "$19" plus a link (`agency-pitch.md`). Kingdom is about 100 words, "$19 once", 2 links (`outreach.md`). This breaks the current playbook (25 to 45 words, no price).
2. **Links in cold first emails.** Leads-3, agencies, and Kingdom all had 1 or 2 links with `?ref=email` tags. From a new free Gmail address, a link plus a price plus a template body sent in a burst of 9 or 10 is a common spam-filter pattern. This is not verified for our sends. Inbox placement is **unknown** (see test in §6).
3. **The ask was big.** "Would you be open to a quick call to scope it?" (all CRM drafts) asks a stranger for a meeting. "Run yours / free check" asks them to click to a site they don't know. Nothing could be answered with one word.
4. **The hook could look wrong when checked.** Leads-3 hooks came from Groq gpt-oss-20b (`drafts-3.md` header), but the free-check link in the same email serves the Gemini 2026-11-13 answers (`data/ai-answers.json`). Example: Prestonbrook's email named mBrace Frisco Orthodontics, EL Dorado Dental, and Endodontic Associates of Frisco. The Gemini Frisco dentist answer in the file today names Dental Care of Frisco, Smile Lounge, Tribute Family Dentistry, Spectacular Smiles Dental, and Frisco Smiles Dentistry. Whether the free check showed the old or new list on the day each email landed is unknown. Either way, a reader who checks may see a different list from the one the email named. Kingdom's email named BBC Health, Shine Chiropractic, and Dr. Newell Smith Estess. The Gemini Lewisville chiropractor answer now names Atchley, Shine, HealthSource, Byroad, and Curis.
5. **Subject lines framed the reader as losing.** "AI names 3 Frisco dentists — Prestonbrook isn't one" (8 of 10 leads-3 subjects follow this pattern). Long, and it reads like a marketing teardown.
6. **Agencies got a resale pitch from an unknown vendor.** That's 14 agency first emails delivered (4 on 11-11, 7 on 11-17, not counting DigitalZeon), all asking an agency to buy and resell a $19 product they'd never heard of. Agencies get this kind of pitch daily. Not on its own a reason for 0 replies, but the lowest-fit audience in the set.
7. **Placeholder risk.** The CRM drafts end with a literal `[postal address]` line (`crm/out-auto-home.md` summary: "Every email keeps a [postal address] placeholder"). The `agency-pitch.md` cold email has no opt-out line and no postal footer. Whether either was fixed before sending is **unknown**. If not, those sends were missing the required footer.
8. **Send timing.** The 11-17 batch went out at about 10:05 PM CST, so it sat under morning mail. This is a minor factor and isn't proven to matter.
9. **Reply-capture is unverified.** Sends were from vilouraai@gmail.com. The contact address on the site is vilouraai1@gmail.com. Whether anyone checked vilouraai@gmail.com's Spam and All Mail for replies or auto-replies is unknown. Jilsha should check once (free, 2 minutes).

What was right and should stay: emails only from the business's own site, dated and sourced hooks (Gemini, 2026-11-13), the opt-out line, the postal footer, one follow-up maximum, and Jilsha sending each one by hand.

## 4. Kill / keep

- **KILL:** the pre-11-19 formula. That's 60 to 100+ words, a price or a link in the first email, a "quick call to scope" ask, "X isn't one" subjects, and the agency resale pitch. 21 delivered sends with 8 to 10 days and 0 replies, plus the content problems in §3. Don't send any remaining drafts in that format: `drafts-2.md`, `drafts-3h.md`, the 11-15 Lewisville/CRM drafts, the 11-16 agency drafts, and the round-1 and round-3 follow-ups that carry links and $19.
- **HOLD (don't judge yet):** the 11-19 short playbook format (leads-7). It's 2 days old. Judge it on 2026-11-26, 7 days after its send, together with its single follow-up.
- **KEEP:** the sourced, dated Gemini fact as the "why you" line; own-site emails only; opt-out + footer; one follow-up max.

## 5. Two first-email variants (25–45 words, no link, no price, one question, opt-out, footer)

Both are templates. Every bracket must be filled from a real source: names from `data/ai-answers.json` (with its date) or something seen on the business's own site (with URL and date). If a field can't be filled truthfully, skip the lead.

### Variant A (recommended): "Want the list?" reply-to-receive

Gives one true fact, then offers the useful part by reply. The only action is typing "yes".

```
Subject: best [category] in [city]

Hi [first name],

On [check date] I asked Google's Gemini for the best [category] in [city], TX. It named [N] [category plural], and [Business] wasn't one of them.

Want me to reply with the [N] names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

Body from "Hi" to the question is about 35 to 40 words, depending on names. Why it should beat the old formula: no link, no price, no meeting, and a yes costs nothing. The reply itself is the signal we're measuring. The person replying sees the value (the list) before anything is sold. The follow-up to a "yes" is the list plus one line offering the free check, drafted by Hark and sent by Jilsha.
Only use it where the business is truly not named in the dated answer, and the answer names 3 or more.

### Variant B: owner question, no AI claim about them

For businesses that *were* named, or where the AI data is thin. It asks something an owner can answer from memory.

```
Subject: quick question, [Business]

Hi [first name],

I run a small Lewisville company that looks at how AI assistants recommend local [category plural]. Have any new [patients/customers] told you they found you by asking ChatGPT or Gemini?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

Body from "Hi" to the question is about 30 words. It's weaker on intent but the easiest reply to give. Use it as the second arm, not the default.

Word counts were checked with a script (see §8). Neither variant may add a link, a price, a second question, or a claim we can't source.

## 6. Test design (for HM-05, when the board opens it)

- **Hypothesis:** a 25 to 45 word, link-free, price-free email that offers a sourced list by reply (Variant A) gets replies where the old formula got none.
- **One change:** the first-email format. Same lead types as leads-7 (DFW dentists, chiropractors, med spas), own-site emails, nobody already in sent-log or on the bounce list.
- **Size and split:** 20 sends. 14 of Variant A and 6 of Variant B, or all 20 as A if fewer than 6 named-in-answer leads exist.
- **Send:** by hand, 5 a day on weekdays, 8 to 10 AM Central (not one burst at night).
- **Metric:** human replies, any content including "no". Auto-replies and bounces are counted separately.
- **Threshold / window:** at least 2 human replies out of 20, within 7 days of the last send. **Kill** Variant A at 0 replies. 1 reply = inconclusive: run 10 more, then decide.
- **Before the first send (free):** Jilsha sends one copy to a personal Outlook or Yahoo address she owns and checks whether it lands in the inbox. She also checks vilouraai@gmail.com Spam and All Mail once for missed replies (§3.9).

## 7. Proposed playbook edit (not applied; for review)

In `ops/playbooks/hark.md`:
- `## Never again`: add "First emails with a link, a price, or a call request (0 replies on 21 sends with 8+ days, 2026-11-11 to 11-13; see ops/research/reply-autopsy.md)." Also add "Agency resale pitch as a cold first email."
- `## Draft rules (cold first email)`: add "Default format: Variant A (reply-to-receive list) from reply-autopsy.md. The hook must come from the same source the free check serves (data/ai-answers.json, with its date)."
- `## Default now`: add "Judge the 11-19 leads-7 short format on 2026-11-26."

## 8. Notes

- Word counts: `drafts-3.md` bodies are stated as 70 words each. `drafts-agencies-1.md` bodies run 63 to 75 words before the link line, counted by script. The `agency-pitch.md` cold email is labeled 90 words.
- Unknown: the exact text Jilsha sent for each cohort (Kiwi's cards aren't in the repo), inbox placement, open rates, and what METRICS' 54 counts.
- No new emails were found, drafted, or sent for real businesses in this file.

## Summary

- 41 first emails (+5 follow-ups) in sent-log, 3 bounced, 0 replies. METRICS' 54 doesn't match sent-log.
- KILL the old formula: long, price, links, call ask, loss-framed subjects, agency resale. Its 21 sends have had 8+ days.
- HOLD the 11-19 short format until 2026-11-26.
- Recommend Variant A ("Want me to reply with the N names?"), with Variant B as the second arm. 20-send test: ≥2 human replies in 7 days to keep, 0 to kill.
- Check vilouraai@gmail.com Spam/All Mail and inbox placement before the next send.

DONE
