# HM-22: Deliverability triage after the 2026-11-24 Gmail 5.7.1 rejects

Written 2026-11-25 (America/Chicago) by Hark. Research and a send order only. Nothing sent. Sending stays Jilsha's.

## Why this item, and why now

The reply autopsy (`ops/research/reply-autopsy.md` §3.9 and §6) says to check delivery before the next send. On 2026-11-24, 3 of the 5 HM-20 first emails were rejected within about a minute with "5.7.1 Message blocked / Message rejected". If that rate holds, most of the 34 unsent HM-20 drafts never reach an inbox, and no reply (and no first customer) can come from them. A free check now protects the best lead batch we have. It is not a new cold batch.

## What we know (sources: `ops/marketing/sent-log.md`, DNS MX lookups on 2026-11-25)

| Draft | Business | Mail provider (MX) | Result 2026-11-24 |
|---|---|---|---|
| 1 | HillCrest Dental | Namecheap Private Email | rejected, 5.7.1 |
| 2 | Castle Lake Dental | Microsoft 365 | rejected, 5.7.1 |
| 3 | Hillside Dental | Proofpoint Essentials | rejected, 5.7.1 |
| 4 | Jordan Carl DMD | Microsoft 365 | no bounce logged |
| 5 | Adjusted Life Family Chiropractic | Microsoft 365 | no bounce logged |

Earlier sends from the same Gmail account (2026-11-11 to 2026-11-23), looked up the same way:

- 29 to business domains hosted on Google Workspace: no 5.7.1 reject logged. The 2 bounces (drkareed.com, fusionchiropracticspa.com) were "address not found", not policy blocks.
- 8 to Microsoft 365 domains: no bounce logged, including Jordan Carl and Adjusted Life in the same minute as Castle Lake.
- 1 to Proofpoint Essentials (Fast Hippo, 2026-11-11): no bounce logged.
- DigitalZeon's domain has no MX record and its email failed (2026-11-14).

"No bounce logged" means no bounce reached the inbox. It does not prove the mail reached the inbox instead of spam.

## What it most likely means

The three rejects used three different filters (Namecheap, Microsoft 365, Proofpoint). The same providers accepted other emails from this account, two of them in the same minute. So it is **not** one provider blocking all of us. Two explanations fit, and the bounce text tells them apart:

1. **Recipient policy.** Each practice's own filter refused a new outside sender. Dental offices often run strict filters for patient privacy. The bounce then quotes the *remote* server, for example a name ending in `protection.outlook.com`, `pphosted.com` or `privateemail.com`.
2. **Sending-account reputation.** Gmail itself started refusing some cold sends from vilouraai@gmail.com after about 65 logged sends since 2026-11-11. The bounce then comes from a `google.com` server and mentions "suspicious", "low reputation" or "blocked" without a remote server name.

We can't read that inbox from here, so this is the one check Jilsha must do.

## Check for Jilsha (free, about 5 minutes, before the next send)

1. In vilouraai@gmail.com, open each of the three bounce messages from 2026-11-24 and expand "Technical details" (or "Show original").
2. For each one, note: the server named after "The response from the remote server was" (if any), and the full 5.7.1 line.
3. Reading it:
   - A remote server named (case 1): carry on with the send order below. Treat the three as policy blocks: no re-send, no follow-up.
   - Only Google named, with "suspicious" or "reputation" (case 2): pause all cold sends for 48 hours, then restart at 3 a day, Google-hosted leads only, and send one test to a personal Outlook or Yahoo address first.
4. Also check Spam and All Mail once for any missed reply, as the autopsy already asks.

## Send order for the 34 unsent HM-20 drafts

Full list with MX hosts: `ops/leads/hm-22-mx-check-2026-11-25.csv`. Same drafts, same words. Only the order changes. Keep at most 5 a day, weekdays 8–10 AM Central.

- **Send first (15, Google Workspace):** #7 Koala-T, #8 Prime AC & Heat, #10 FlowMo, #12 Core Chiropractic, #13 Lighthouse, #14 GT Family Dentistry, #20 Forward Health, #23 White Lotus, #24 Elisum, #27 novera, #29 Flow State, #30 Firm Foundation, #35 Top Flow, #38 Red Ladder, #39 423 Roofing.
- **Send second (9, Microsoft 365):** #6 INSPINE, #16 Flink, #17 Pillar, #22 Renew, #25 LV Skin, #26 AestheticFx, #31 Grace, #36 Cooling King, #37 All Source.
- **Hold until the bounce text is read (9, other filters):** #9 Advantage Air (self-hosted), #11 J Hering and #21 DermaPhi (Hostinger), #15 Rosemeade (tntsupport.net), #18 Cha Clinic (msgsys.net), #19 Premier Health (Intermedia), #28 Lopez and #32 Mangum (Proofpoint, like Hillside), #33 Susanne Holmgreen (Network Solutions).
- **Hold, likely undeliverable (1):** #34 Tex Plumbing. texplumbing.com has no MX record, the same as DigitalZeon, which failed. Send only if a working address appears on its own site later.

## List hygiene

- The three 5.7.1 rejects are added to `ops/marketing/do-not-email.md` as policy blocks: no re-send, no follow-up, unless Jilsha decides otherwise after reading the bounce text.
- Nothing else in the lead files changes.

## Later (not part of this item, needs Jilsha's decision)

- vilouraai.com has no MX, SPF or DMARC record today (DNS check 2026-11-25). That doesn't matter while mail goes out from a gmail.com address. If Jilsha ever moves outreach to an @vilouraai.com mailbox, set SPF, DKIM and DMARC first. A mailbox host can cost money, so that is her call.

## Summary

The 3 rejects were not one provider's rule, so most of the 34 drafts can still go out. Send the 15 Google-hosted leads first, then the 9 on Microsoft 365. Hold 9 behind other filters until Jilsha reads the bounce text, and hold Tex Plumbing (no MX). Nothing sent.

DONE
