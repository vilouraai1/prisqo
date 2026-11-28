# Hark + Muse board

Single queue for `vilouraai1/prisqo` and site work on `vilouraai1/vilouraai-web`. Format and pick rules: `ops/playbooks/*.md` and the SYSTEM.md this was drafted with.

WIP limit: 1 Doing item per lane. Agents never send, post, call, spend, or touch `prisqo-report-engine` / Stripe.

How to pick: from `## Next`, first table row whose `Lane` is yours (or `both`), whose details `blocked_on` is `none`, and who has nothing already in `## Doing`. Claim by moving the row + details block into `## Doing` in the same work PR. Items with `blocked_on` other than `none` belong in `## Blocked`, not here.

Updated: 2026-11-23 20:15 America/Chicago (Kiwi: HM-06 moved to Done (PR #51). Muse pack added HM-15–HM-19 to Next; briefs in ops/board/MUSE-PACK.md. Hark HM-10 half already merged in #58; HM-14 stays Blocked.) Hark 2026-11-23: HM-21 (30-lead Variant A list 2, was numbered HM-15 on branch hark-hm-15 before the Muse pack took HM-15–19) added as Done; no drafts. Hark 2026-11-25: HM-20 (PR #61) rebased on main after #60 and #62; 5 of 39 drafts sent by Jilsha 2026-11-24, 34 unsent. Hark 2026-11-25: HM-20 marked merged (#61). No eligible Hark item left in Next (HM-10 Hark half done in #58), so Hark added HM-22 (deliverability triage after the 3 Gmail 5.7.1 rejects) under pick-rule step 5 and did it; Done. Hark 2026-11-25: HM-22 merged (#64). No eligible Hark item left, so Hark added HM-23 (7 Variant A follow-ups for the delivered 11-23 Irving and 11-24 HM-20 sends) under pick-rule step 5 and did it; Done. Hark 2026-11-25: HM-23 merged (#65). No eligible Hark item left, so Hark added HM-24 (10 Variant A follow-ups replacing the unsent old-formula drafts for the 11-11/11-13 local sends) under pick-rule step 5 and did it; Done. Hark 2026-11-25: HM-24 merged (#66). No eligible Hark item left, so Hark added HM-25 (Variant A reply kit batch 2: paste-ready Reply 1 for the 36 open threads not in batch 1) under pick-rule step 5 and did it; Done. Hark 2026-11-25: HM-25 merged (#67). No eligible Hark item left, so Hark added HM-26 (one send calendar, 2026-11-30 to 2026-12-10, for the 41 queued unsent emails at 5 a day) under pick-rule step 5 and did it; Done. Hark 2026-11-25: HM-26 merged (#68). No eligible Hark item left, so Hark added HM-27 (24 Variant A follow-ups drafted ahead for the scheduled HM-20 first emails) under pick-rule step 5 and did it; Done. Hark 2026-11-25: HM-27 merged (#69). No eligible Hark item left, and Hark added none: every queued email now has a draft, a reply kit and a date, so the next revenue step is a send. Making more drafts before then would mean a new cold batch (reply-autopsy §6). Hark lane waits on: (1) Jilsha reads one 11-24 bounce's Technical details before Tue 12-01; (2) the 11-30 to 12-10 sends in send-calendar-hm-26.md, each logged in sent-log; (3) any reply, answered from replies-variant-a-1/-2 within 2 business hours. Hark picks up again when a reply, a bounce, or a logged send comes in (HM-20 follow-up dates, EXP-H1 read-out 12-17), or when Jilsha names an item. Hark 2026-11-26: HM-28 (#71), #63 and HM-29 (#72) merged. No eligible Hark item left, and Hark added none. Email: every queued email already has a draft, a reply kit and a date. Community: 21 posts are drafted (HM-08, round 2, round 3) and a comment kit is ready, with none posted yet. Anything more before a send or a post would be a cold batch or unread drafts (reply-autopsy §6). The next Hark work is triggered by a logged post or send, a comment or reply, a bounce, the leads-7/HM-13 read on 2026-11-30, or an item Jilsha names. Hark 2026-11-26: #73 merged. Added HM-30 (missed-call test pack committed to the repo; unblocks HM-02 and HM-04) under pick-rule step 5 and did it; Done. Hark 2026-11-27: #74 (HM-30) and #75 (follow-up check round 12, 0 eligible) merged. Added HM-31 ($49 check reply kit + report template) under pick-rule step 5 and did it; Done. Hark 2026-11-27: #76 (HM-31) merged. Added HM-32 (result channel for all 24 missed-call test practices) under pick-rule step 5 and did it; Done. Hark 2026-11-27: #77 (HM-32) merged. No eligible Hark item left, and Hark added none. The $49 missed-call test is fully prepped (HM-30 to HM-32), the 41 queued emails have drafts, kits and dates, and the community posts have a comment kit. Anything more before Jilsha's calls (Tue 2026-12-01) or her first sends and posts (Mon 2026-11-30) would be unread drafts or a cold batch (reply-autopsy §6). Pre-post check: the Carrollton house-cleaning post's "national franchise brands" claim was verified 2026-11-27 (CottageCare has franchised since 1989, per its listings and its own operations manual). Open for Jilsha: (1) how to take $49 (payment link or invoice) before 12-04; (2) the 11-24 bounce Technical details; (3) calendar approval. Hark restarts on a logged call, send, post, reply or bounce, or on an item Jilsha names.

## Next

| ID | Pri | Lane | Title | Success metric | Inputs |
|----|-----|------|-------|----------------|--------|
| HM-16 | 0 | muse | Pricing page + checkout-path clarity | A first-time reader can tell free check vs $19 report apart; primary CTA destination is obvious; form contract unchanged | `pricing.html`, `/#check`, `faq.html`, `replies-variant-a-1.md` |
| HM-17 | 0 | muse | Reply-to-report fulfilment path (`ref=reply`) | Reply 1 and Reply 2 URLs still work; a `ref=reply` visitor can go from free result or audit to $19 checkout with truthful copy | `replies-variant-a-1.md`, `/free-check`, `/pricing`, `/free-seo-audit` |
| HM-18 | 1 | muse | Money-path CTAs on existing guides and industry pages | Priority dental/chiro/med-spa/home-service guides each have a truthful CTA to `/free-check` and/or `/pricing`; zero new 404s | existing `/guides/` and `/ai-visibility/` pages, sitemap |
| HM-19 | 1 | muse | Technical SEO leftovers from HM-06 (indexation, speed, durability) | Each HM-06 §8 leftover is fixed or re-stated with evidence; money pages stay indexable and in the sitemap | `ops/replies/HM-06.md` §8, sitemap, live money pages |
| HM-10 | 1 | both | First weekly retro | Each lane updates its playbook, logs 1 experiment with a kill/keep rule, and adds one process-change line | `METRICS.md`, this board, playbooks, sent-log |


### HM-16 — Pricing page + checkout-path clarity
- id: HM-16
- status: next
- pri: 0
- lane: muse
- blocked_on: none
- owner: none
- branch: muse-hm-16
- success: /pricing still shows only the $19 one-time offer, keeps data-testid="plan-single" and the 14-day refund line, and makes the free-check vs paid-report distinction plus the CTA destination obvious, including for /pricing?ref=reply. Checkout form contract unchanged. No LP-2 restyle.
- inputs: pricing.html; index.html #check; faq.html; ops/marketing/replies-variant-a-1.md; ops/board/MUSE-PACK.md
- output: site PR + ops/replies/HM-16.md
- notes: Reply 2 already points at /pricing?ref=reply. Primary CTA today goes to /#check. Paste-ready brief in MUSE-PACK.md. Do not add a $49 price or a new Stripe product.

### HM-17 — Reply-to-report fulfilment path
- id: HM-17
- status: next
- pri: 0
- lane: muse
- blocked_on: none
- owner: none
- branch: muse-hm-17
- success: The exact Reply 1 and Reply 2 URLs in replies-variant-a-1.md still work. A ref=reply visitor can go from the free result (or /free-seo-audit for uncovered cities) to the $19 checkout with truthful copy. Prefer existing URLs; at most one optional /get-report page, added to the sitemap, still using the existing checkout.
- inputs: ops/marketing/replies-variant-a-1.md; ops/research/reply-autopsy.md §5; free-check.html; free-seo-audit.html; pricing.html; ops/board/MUSE-PACK.md
- output: site PR + ops/replies/HM-17.md
- notes: Do not put a hard $19 pitch on the free-check page before the free result is shown (Reply 1 has no price). Do not invent coverage for Keller/Grapevine. Do not deploy.

### HM-18 — Money-path CTAs on existing guides and industry pages
- id: HM-18
- status: next
- pri: 1
- lane: muse
- blocked_on: none
- owner: none
- branch: muse-hm-18
- success: Priority dental, chiro, med-spa, and home-service guides/industry pages each have at least one truthful CTA to /free-check and/or /pricing. Zero new 404s, no new pages, no invented stats, existing URLs kept, frozen contracts untouched.
- inputs: existing /guides/ and /ai-visibility/ pages listed in ops/board/MUSE-PACK.md; sitemap.xml
- output: site PR + ops/replies/HM-18.md (includes a before/after CTA table)
- notes: Do not chase generic new-page volume. Do not restyle LP-2. Do not revive the old vilouraai.com/#contact stopgap.

### HM-19 — Technical SEO leftovers from HM-06
- id: HM-19
- status: next
- pri: 1
- lane: muse
- blocked_on: none
- owner: none
- branch: muse-hm-19
- success: Each leftover in ops/replies/HM-06.md §8 is either fixed or re-stated with evidence. Money pages stay 200, indexable, in the sitemap, with valid JSON-LD and unchanged frozen contracts. Any performance number has a date, URL, and method.
- inputs: ops/replies/HM-06.md §8; sitemap.xml; live / , /pricing, /free-check, /faq; ops/board/MUSE-PACK.md
- output: site PR + ops/replies/HM-19.md
- notes: Search Console baseline is still the Nov 19, 2026 figure in METRICS (0 indexed / 0 impressions, or unknown if not re-measured). Do not invent traffic or CWV. Do not print keys or replace CF_BEACON_TOKEN with a guessed value. Do not touch the engine or Stripe. Do not deploy.

### HM-10 — First weekly retro
- id: HM-10
- status: next
- pri: 1
- lane: both
- blocked_on: none
- owner: none
- branch: hark-retro-YYYY-MM-DD or muse-retro-YYYY-MM-DD (one PR per lane)
- success: Each lane edits only its playbook, proposes exactly one experiment (hypothesis, one change, metric, threshold, 7-day window, kill/keep), adds one process-change line, and appends a row to METRICS Experiments. Hard rules stay untouched.
- inputs: ops/board/METRICS.md; ops/board/BOARD.md; ops/playbooks/hark.md; ops/playbooks/muse.md; ops/marketing/sent-log.md
- output: playbook diffs + new experiment board items + METRICS experiment rows
- hark_half: done, PR #58 merged 2026-11-23, branch hark-retro-2026-11-23 (playbook retro section, EXP-H1, HM-14, process line). ops/replies/HM-10.md.
- muse_half: open (muse-retro-YYYY-MM-DD).
- notes: Run Monday after weekly housekeeping, or the Monday after the missed-call test week. Include kill/keep on the old cold-email formula and on the $49 missed-call test if result emails have been sent. Do not skip Pri-0 work to start the retro early. Muse paste-ready brief is in ops/board/MUSE-PACK.md (Brief 6). Hark half merged in PR #58; Muse half still open on branch muse-retro-2026-11-23.

## Doing

| ID | Pri | Lane | Title | Success metric | Inputs |
|----|-----|------|-------|----------------|--------|
| HM-15 | 0 | muse | Free-check result → $19 report conversion | After a successful free check, one obvious click reaches the existing $19 checkout; uncovered cities get an honest fallback, not a fake list | live `/free-check`, `free-check.js`, `replies-variant-a-1.md`, `pricing.html` |

### HM-15 — Free-check result → $19 report conversion
- id: HM-15
- status: doing
- pri: 0
- lane: muse
- blocked_on: none
- owner: muse
- branch: muse-hm-15
- success: After a successful free check, a visitor can reach the existing $19 checkout in one obvious click. Fields `name` and `city`, URL prefill, data-testids, and the checkout form contract stay unchanged. Uncovered cities (e.g. Keller, Grapevine) get an honest fallback, not a fabricated list. New cities may be added only when a dated snapshot already exists in `data/ai-answers.json`.
- inputs: https://prisqo.vilouraai.com/free-check; free-check.html; free-check.js; ops/marketing/replies-variant-a-1.md; pricing.html; ops/board/MUSE-PACK.md
- output: site PR + ops/replies/HM-15.md
- notes: Highest-revenue Muse item. Variant A "yes" replies land on pre-filled /free-check links. Paste-ready brief in ops/board/MUSE-PACK.md. Do not restyle LP-2. Do not deploy. Do not touch engine or Stripe.

## Blocked

| ID | Pri | Lane | Title | Success metric | Inputs |
|----|-----|------|-------|----------------|--------|
| HM-02 | 0 | jilsha | 30-practice disclosed test calls + log | 30 practices logged (answered / voicemail / no answer / callback); no recordings | `ops/marketing/missed-call/` (HM-30: 24 practices, script, call log; calls Tue–Thu 2026-12-01 to 12-03) |
| HM-03 | 0 | muse | `/missed-call-check` page from existing copy | Page live on the approved site; sourced stats only; checkout/free-check contracts untouched; CTA works without a new Stripe price | `missed-call-landing-copy.md` |
| HM-04 | 0 | hark | Personalized free-result + $49 offer drafts | One draft per practice with a usable email and a completed call log; real outcomes only | call log; `followup-template.md`; sent-log |
| HM-05 | 0 | hark | 10–20 first emails in the winning HM-01 variant | Threshold set in HM-01 (default: at least 2 replies from the next 20 sent emails, measured 7 days after the last send) | HM-01 reply file; playbook; sent-log |
| HM-07 | 1 | muse | SEO for the missed-call page | Page in sitemap; Offer schema only if $49 is an approved on-page price; internal links from relevant guides; zero new 404s | HM-03 pages |
| HM-14 | 0 | hark | EXP-H1 read-out: Variant A batch 1 kill/keep | Kill/keep written for the 15 HM-11 sends at 7 days after the last send, using EXP-H1's threshold | sent-log, `drafts-variant-a-1.md`, METRICS EXP-H1 |

### HM-02 — 30-practice disclosed test calls + log
- id: HM-02
- status: blocked
- pri: 0
- lane: jilsha
- blocked_on: jilsha-calls
- owner: jilsha
- branch: (none)
- success: Call log filled for the 30 practices in missed-call-test-30.csv. Disclosed, no recordings, no appointment requests, no patient data.
- inputs: ops/marketing/missed-call/ (README.md, missed-call-test.csv with 24 practices, call-script.md, call-log-template.csv), installed by HM-30 2026-11-26; the earlier /workspace/missed-call/ pack was never committed
- output: completed call-log-template.csv (or the same columns in ops/marketing/missed-call/)
- notes: Prep already exists (Codex, 2026-11-20). Jilsha places the three short calls (about 12:15 PM, about 4:45 PM, after close). Agents do not call or submit web forms. When the log has results, Kiwi sets HM-04 blocked_on to none and moves it to Next.

### HM-03 — `/missed-call-check` page from existing copy
- id: HM-03
- status: blocked
- pri: 0
- lane: muse
- blocked_on: jilsha-approve-page
- owner: none
- branch: muse-hm-03
- success: Page shipped on the site Jilsha names (prisqo.vilouraai.com or vilouraai.com), using missed-call-landing-copy.md only. No invented stats, no ranking/lead promises. Existing /free-check and $19 checkout contracts unchanged. CTA is mailto:vilouraai@gmail.com or an existing form unless she separately approves a $49 Stripe price (do not create that price).
- inputs: missed-call-landing-copy.md; ops/playbooks/muse.md; live LP-2 homepage contracts
- output: the new page, sitemap/llms/nav as needed, ops/replies/HM-03.md
- notes: Do not build until blocked_on is none. Do not touch prisqo-report-engine or Stripe. Paste-ready brief is in ops/board/MUSE-PACK.md (Brief 7). As of 2026-11-23 8 PM CT there was no muse-hm-03 branch or missed-call-check PR on GitHub; the copy still lived at /workspace/missed-call/missed-call-landing-copy.md, not yet under ops/marketing/. Jilsha must name the site (prisqo.vilouraai.com or vilouraai.com) before this moves to Next.

### HM-04 — Personalized free-result + $49 offer drafts
- id: HM-04
- status: blocked
- pri: 0
- lane: hark
- blocked_on: depends:HM-02
- owner: none
- branch: hark-hm-04
- success: Drafts only, one per practice that has both a completed log and a usable public email. Outcomes are copied from the log, never invented. Uses the follow-up template (free result + $49 full check, opt-out, postal footer).
- output: ops/marketing/missed-call-result-drafts.md (and JSON if useful). Kiwi turns these into DraftExternalMessage cards only after Jilsha has logged the calls and asked to send.
- inputs: completed call log; /workspace/missed-call/followup-template.md; known-emails / sent-log
- notes: Skip blank to-addresses. Do not email anyone already on the do-not-email list.

### HM-05 — 10–20 first emails in the winning HM-01 variant
- id: HM-05
- status: blocked
- pri: 0
- lane: hark
- blocked_on: depends:HM-01
- owner: none
- branch: hark-hm-05
- success: Drafts only, 10–20 leads not already sent, playbook-compliant. After Jilsha sends, default success is at least 2 replies from 20 sent within 7 days, or the threshold HM-01 set. Kill the variant if 0 replies at the window.
- inputs: ops/replies/HM-01.md; ops/research/reply-autopsy.md; ops/marketing/sent-log.md; winning variant in ops/playbooks/hark.md
- output: ops/marketing/drafts-hm-05.md plus sent-log entries marked drafted, not sent
- notes: Do not start until HM-01 is Done and this item is moved to Next with blocked_on: none. Skip anyone already sent or bounced. Kiwi shows cards only if Jilsha wants this batch sent.

### HM-07 — SEO for the missed-call page
- id: HM-07
- status: blocked
- pri: 1
- lane: muse
- blocked_on: depends:HM-03
- owner: none
- branch: muse-hm-07
- success: New page discoverable: sitemap, title/description, JSON-LD, internal links from relevant dental/chiro/med-spa guides. No LP-2 restyle, no URL churn, no invented numbers.
- inputs: the merged HM-03 page; ops/playbooks/muse.md
- output: site PR + ops/replies/HM-07.md
- notes: Start only after HM-03 is merged. Offer schema may state $49 only as an on-page one-time fee, not as a live Stripe product, unless Jilsha has approved Stripe.

### HM-14 — EXP-H1 read-out: Variant A batch 1 kill/keep
- id: HM-14
- status: blocked
- pri: 0
- lane: hark
- blocked_on: jilsha-send
- owner: none
- branch: hark-hm-14
- success: Count human replies (and separately auto-replies/bounces) for the 15 HM-11 Variant A emails, 7 days after the last logged send. Keep at ≥2, kill at 0, 1 = send 10 more then decide. Update METRICS EXP-H1 Result + Keep/Kill and ops/playbooks/hark.md defaults.
- inputs: ops/marketing/sent-log.md (dated "sent" lines); ops/marketing/drafts-variant-a-1.md; ops/board/METRICS.md EXP-H1; Jilsha's reply report
- output: METRICS + playbook edit; ops/replies/HM-14.md
- notes: Added by Hark in the HM-10 retro 2026-11-23. Unblocks when sent-log shows all 15 sent (or Jilsha says the batch is done) and 7 days have passed. Counts come from sent-log and Jilsha only; never guess a reply. Hark 2026-11-28: #78 merged (board-only, no item). PR #79 (leads-8: 16 Denton/Lewisville/Highland Village leads with own-site emails + 25–45 word drafts, a request Jilsha named in chat, not a board item) merged 2026-11-28 (ec6a239); Done. No eligible Hark item left in Next (HM-10 Hark half done in #58; HM-04, HM-05, HM-14 blocked), so Hark added HM-33 (leads-8 reply kit + send slots) under pick-rule step 5 and did it; Done. Correction: the 2026-11-27 line's Carrollton check covered CottageCare only. The Cleaning Authority, MaidPro and Merry Maids were checked 2026-11-28 on their own franchise sites, so the post's claim now holds for all 4 (source comment updated in community-posts-3.md). Hark 2026-11-28: #80 (HM-33) merged (cd4193a). No eligible Hark item left, so Hark added HM-34 (leads-8 send days moved off the HM-27 follow-up days, plus one follow-up per leads-8 email) under pick-rule step 5 and did it; Done. Hark 2026-11-28: #81 (HM-34) merged (f411883). No eligible Hark item left, so Hark added HM-35 (one master send calendar; Plan B makes room for the $49 result contacts) under pick-rule step 5 and did it; Done. Hark 2026-11-28: #82 (HM-35) merged (9cddc82). No eligible Hark item left, so Hark added HM-36 (one-page decision sheet for the $49 test week, ops/board/DECISIONS-2026-12-03.md) under pick-rule step 5 and did it; Done. Hark 2026-11-28: #83 (HM-36) merged (e128eec). No eligible Hark item left, so Hark added HM-37 (result-draft generator: filled call log to HM-04 drafts in one run) under pick-rule step 5 and did it; Done.

## Done

| ID | Pri | Lane | Title | Success metric | Inputs |
|----|-----|------|-------|----------------|--------|
| HM-37 | 0 | hark | Result-draft generator for the $49 test (call log → HM-04 drafts in one run) | A stdlib script reads the filled call log and writes one review-ready email / form text / callback line per practice with 3 calls logged, facts copied verbatim, all-answered practices get no pitch; tested on a synthetic log (not committed); nothing sent | `missed-call/call-log-template.csv`, `missed-call-test.csv`, `followup-template.md`, `result-by-form-or-phone.md`, `call-script.md` |
| HM-36 | 0 | hark | One-page decision sheet for the $49 test week | Every open approval between the repo drafts and the first paid $49 check on one page: deadline, one action, what it unlocks, default if unanswered; Payment Link steps from Stripe's docs (Jilsha creates it); nothing sent, no price created | `pain-check.md`, `missed-call/`, `send-master.md`, `deliverability-hm-22.md`, `pricing.html`, Stripe docs |
| HM-35 | 0 | hark | Master send calendar with room for the $49 result contacts | One script-built view of every planned send across the 4 calendar files, max 5 a day, no weekend/holiday sends; Plan B gives the 24 missed-call result contacts the first 5 slots-days after the call log closes and shifts the rest without breaking follow-up gaps; nothing sent | `send-calendar-hm-26.md`, `followups-11.md`, `replies-leads-8.md`, `followups-13.md`, `missed-call/` |
| HM-34 | 0 | hark | Leads-8 send-day fix + one follow-up per lead | Leads-8 first emails moved off the days HM-27 already fills (no day over 5 sends); 16 unsent follow-ups, 25–45 words, no link, no price, one question, opt-out, footer, each gated on its first email being logged sent and not bounced, 4+ business days later | `replies-leads-8.md`, `followups-11.md`, `drafts-8.md`, `leads-8.csv`, `data/ai-answers.json`, `reply-autopsy.md` §4, §6 |
| HM-33 | 0 | hark | Leads-8 reply kit + send slots (turn PR #79's 16 drafts into answered threads) | Every leads-8 email has a weekday slot after the HM-26 calendar (2026-12-11 to 12-16, max 5 a day) and a paste-ready Reply 1 that gives what the email offered plus one free next step; no price; nothing sent | `drafts-8.md`, `leads-8.csv`, `data/ai-answers.json`, `replies-variant-a-1.md`, `send-calendar-hm-26.md`, `reply-autopsy.md` §5 |
| HM-06 | 0 | muse | Conversion + in-flight SEO QA | Live `/free-check` and $19 checkout still work; muse-seo-3 and footer/dead-link work merged or given a precise leftover list; no engine/Stripe changes | `origin/muse-seo-3`, `origin/muse-footer-fix`, live prisqo.vilouraai.com |
| HM-32 | 0 | hark | Result channel for all 24 missed-call test practices | Every MC row has a checked result_channel (email / form / callback) and form_url from its own site, dated 2026-11-27; stale emails removed; paste-ready form text + phone script for the 12 without a usable email. Nothing sent or submitted | `missed-call/missed-call-test.csv`, own sites, `followup-template.md`, `reply-kit.md` |
| HM-31 | 0 | hark | $49 check: reply kit + report template (turn a "yes" into a delivered, paid report) | ops/marketing/missed-call/reply-kit.md (6 replies to result emails, payment gate) + report-template.md (the 5 sections from pain-check §4, a fix menu, saved Gemini answers for all 24 test practices). Unsent; no Stripe price created | `pain-check.md` §4, `missed-call/`, `data/ai-answers.json`, HM-03 notes |
| HM-30 | 0 | hark | Missed-call test pack in repo (unblocks HM-02 → HM-04 $49 test) | ops/marketing/missed-call/: 24 uncontacted practices with own-site-checked phones, disclosed call script, 72-row call log, gated result-email template, week plan 2026-12-01 to 12-04. No calls, sends or forms by Hark | `pain-check.md` §4, `crm/seg-*.csv`, `call-list.csv`, `sent-log.md`, `do-not-email.md`, `send-calendar-hm-26.md` |
| HM-29 | 0 | hark | Community comment reply kit (turn post comments into free checks) | Paste-ready replies for comments/DMs on HM-08, round-2 and round-3 posts: 8 templates, per-community link rules, free-check prefill, lead log, lookup of all 71 saved Gemini answers. No new outreach; nothing posted | `community-posts-3.md`, `community-posts-2.md`, `data/ai-answers.json`, `free-check.js`, `pricing.html` |
| HM-28 | 0 | hark | Community posts round 3 (value-first, owner audiences) | 8 unposted drafts for the week of 2026-11-30 in communities already listed or cleared: missed calls (ADA, BrightLocal sourced), 10-minute website check (Hark home-page scan 2026-11-26), new local Gemini patterns. No link, product name or price in any main post; nothing posted | `communities.md`, `community-posts-2.md`, `community-posts-hm-08.md`, `data/ai-answers.json`, `verified-leads-2026-11-24.csv` |
| HM-27 | 0 | hark | Variant A follow-ups for the 24 scheduled HM-20 first emails | 24 unsent single follow-ups, 25–45 words, no link, no price, one question, opt-out. Each is gated on its first email being logged sent and not bounced, due 4 business days later, and fits the 5-a-day calendar | `HM-20-personalized-drafts.md`, `send-calendar-hm-26.md`, `data/ai-answers.json`, `followups-9.md` |
| HM-26 | 0 | hark | One send calendar for the queued 41 (HM-23, HM-24, HM-20) | Every queued unsent email gets one weekday slot 2026-11-30 to 2026-12-10, at most 5 a day, 8–10 AM CT. Order: due follow-ups, HM-20 Google, HM-24, HM-20 M365. Gates: bounce check, daily reply check, sent-log line. Held leads stay held; unsent | `followups-9.md`, `followups-10.md`, `HM-20-personalized-drafts.md`, `deliverability-hm-22.md`, `playbooks/hark.md` |
| HM-25 | 0 | hark | Variant A reply kit, batch 2 (HM-20 + HM-24 threads) | Paste-ready Reply 1 for every open Variant A thread not in replies-variant-a-1.md (36): dated Gemini names, no price, pre-filled free-check link where the live form covers the city, else free SEO audit; unsent | `HM-20-personalized-drafts.md`, `followups-10.md`, `replies-variant-a-1.md`, `data/ai-answers.json`, `free-check.html`, `pricing.html` |
| HM-24 | 0 | hark | Variant A follow-ups for the old-formula 11-11 / 11-13 local sends | 10 unsent single follow-ups replacing the never-sent link/price drafts (followups-1 Kingdom, followups-3 all 9): 25–45 words, no link, no price, one question, opt-out, footer; dated Gemini source; truthful vs the first email; old drafts marked superseded | `sent-log.md`, `followups-1.md`, `followups-3.md`, `drafts-3.md`, `data/ai-answers.json`, `reply-autopsy.md` §4, `do-not-email.md` |
| HM-23 | 0 | hark | Variant A follow-ups for delivered 11-23 / 11-24 first emails | 7 unsent single follow-ups (5 HM-11 Irving, 2 HM-20 delivered): 25–45 words, no link, no price, one question, opt-out, footer; dated Gemini source; send plan after Thanksgiving; logged only as drafted | `sent-log.md`, `drafts-variant-a-1.md`, `HM-20-personalized-drafts.md`, `data/ai-answers.json`, `do-not-email.md`, HM-22 |
| HM-22 | 0 | hark | Deliverability triage after Gmail 5.7.1 rejects | All 39 HM-20 addresses have a dated MX/provider check; 34 unsent drafts get a send order with risky ones held; the 3 rejects are on do-not-email; Jilsha has a 5-minute bounce-text check; nothing sent | `sent-log.md`, `verified-leads-2026-11-24.csv`, `HM-20-personalized-drafts.md`, `reply-autopsy.md` §3.9, DNS |
| HM-20 | 0 | hark | Verified, personalized first emails | Every lead in ops/leads/ + HM-11 #6–15: email confirmed on own site (source URL), owner name + one real detail with source URL, unverified left out; 25–45 word Variant A drafts opening with the detail; unsent | `ops/leads/variant-a-2.csv` (PR #60), `drafts-variant-a-1.md`, `data/ai-answers.json`, `do-not-email.md` |
| HM-21 | 1 | hark | 30-lead Variant A list 2 (Lewisville, Flower Mound, Carrollton, Frisco) | 30 leads not in any ops/ file, own-site email + source URL dated 2026-11-23, dated Gemini answer that doesn't name them; no drafts | `data/ai-answers.json`, all `ops/` lead/sent files, `do-not-email.md` |
| HM-13 | 0 | hark | Leads-7 single follow-up in Variant A form | 9 unsent follow-ups (delivered 11-19 cohort, minus bounce), dated AI source, send plan Mon 2026-11-23, read 2026-11-30 | `sent-log.md` Leads-7, `leads-7.csv`, `data/ai-answers.json`, `reply-autopsy.md`, `do-not-email.md` |
| HM-12 | 0 | hark | Variant A reply kit (turn "yes" replies into free checks and $19 reports) | Paste-ready Reply 1 for all 15 HM-11 leads + shared replies (who are you / price / call / no); unsent | `drafts-variant-a-1.md`, `data/ai-answers.json`, `pricing.html`, `free-check.js` |
| HM-08 | 1 | hark | Package 3 community posts from PR #48 for Jilsha | 3 ready-to-post items with community, rules check dated, and a paste body; agents do not post | `ops/marketing/community-posts-2.md` |
| HM-11 | 0 | hark | 15 Variant A first-email drafts (DFW dental/chiro/med spa/home service) | 15 unsent drafts, own-site email source URL + date, dated AI source; playbook edit proposed | `ops/research/reply-autopsy.md`, `data/ai-answers.json`, lead CSVs, sent-log, do-not-email |
| HM-09 | 1 | hark | Bounce and list hygiene | Bounced addresses tagged do-not-email; any replacement is from the business's own site with a source URL | `ops/marketing/sent-log.md`, lead CSVs |
| HM-01 | 0 | hark | Reply-rate autopsy + 2 first-email variants | A written kill/keep on the current cold formula, plus 2 testable variants (one recommended) | `ops/marketing/sent-log.md`, drafts, followups, `ops/playbooks/hark.md` |

### HM-37 — Result-draft generator for the $49 test
- id: HM-37
- status: done
- pri: 0
- lane: hark
- blocked_on: none
- owner: hark
- branch: hark-hm-37
- success: On Fri 2026-12-04 the 24 result drafts exist minutes after the log is complete, with every fact copied from the log, so Plan B's Mon 2026-12-07 slots are met without hand-writing 24 messages.
- inputs: ops/marketing/missed-call/call-log-template.csv; missed-call-test.csv; followup-template.md; result-by-form-or-phone.md; call-script.md (result values)
- output: ops/marketing/missed-call/make_results.py; README line; ops/replies/HM-37.md
- notes: Added by Hark 2026-11-28 under pick-rule step 5. Revenue reason: the result contacts are the only paid path on the board, and the log is complete Thu evening / Fri noon (callbacks), leaving one working day to draft 24 messages by hand from 72 log rows, where a copied-wrong fact kills trust. The script skips any practice with fewer than 3 logged calls, rejects unknown result values, and gives all-answered practices a no-pitch note (followup-template rule). It doesn't fill HM-04 itself: HM-04 stays blocked on the real log. Tested on a synthetic log in /tmp (23 ready, 1 skipped, 0 problems). Not committed: result-drafts.md.
- done: PR pending.

### HM-36 — One-page decision sheet for the $49 test week
- id: HM-36
- status: done
- pri: 0
- lane: hark
- blocked_on: none
- owner: hark
- branch: hark-hm-36
- success: Jilsha can clear every open approval for the $49 test in one chat reply. Each decision has a deadline, what it unlocks, and the default if unanswered.
- inputs: ops/research/pain-check.md; ops/marketing/missed-call/; ops/marketing/send-master.md; ops/research/deliverability-hm-22.md; pricing.html; https://docs.stripe.com/payment-links/create (read 2026-11-28)
- output: ops/board/DECISIONS-2026-12-03.md; ops/replies/HM-36.md
- notes: Added by Hark 2026-11-28 under pick-rule step 5. Revenue reason: the $49 test is fully drafted (HM-30 to HM-32, HM-35) but blocked on 4 approvals scattered across 6 files and earlier chat replies. The first call is Tue 2026-12-01 12:10 PM, so the go is due Mon 11-30. Hark creates no Stripe price; the sheet gives Stripe's own Payment Link steps for Jilsha. No new drafts.
- done: PR #83 merged 2026-11-28 (e128eec).

### HM-35 — Master send calendar with room for the $49 result contacts
- id: HM-35
- status: done
- pri: 0
- lane: hark
- blocked_on: none
- owner: hark
- branch: hark-hm-35
- success: Every planned send from 2026-11-30 on is in one file, built by script from the 4 files that schedule sends, with no day over 5. If Jilsha gives the $49 go, the result contacts have slots right after the call log closes, and nothing else breaks.
- inputs: ops/marketing/send-calendar-hm-26.md; followups-11.md; replies-leads-8.md; followups-13.md; missed-call/missed-call-test.csv; missed-call/README.md
- output: ops/marketing/send-master.md; ops/replies/HM-35.md
- notes: Added by Hark 2026-11-28 under pick-rule step 5. Revenue reason: the 4 calendars fill every weekday 2026-11-30 to 12-23 at the 5-a-day cap, and the $49 result contacts (Fri 2026-12-04 or later) count toward the same cap, so the only paid offer on the board had no slot until after Christmas. Plan A (no $49 go by Thu 12-03): files stand, 97 sends to Wed 12-30. Plan B: 24 result contacts Mon 12-07 to Fri 12-11 (12 email, 6 form, 6 callback), everything from 12-07 shifts 5 business days (last send Fri 2027-01-08); success read Fri 12-18. Builder /workspace/work/hm35/build.py (rebuild when any calendar file changes).
- done: PR #82 merged 2026-11-28 (9cddc82).

### HM-34 — Leads-8 send-day fix + one follow-up per lead
- id: HM-34
- status: done
- pri: 0
- lane: hark
- blocked_on: none
- owner: hark
- branch: hark-hm-34
- success: No send day carries more than 5 emails once leads-8 is added; every leads-8 first email has one unsent follow-up ready, truthful to its first email, gated on the sent-log.
- inputs: ops/marketing/replies-leads-8.md; ops/marketing/followups-11.md; ops/marketing/drafts-8.md; ops/marketing/leads-8.csv; data/ai-answers.json; ops/research/reply-autopsy.md §4, §6
- output: ops/marketing/followups-13.md; replies-leads-8.md send slots updated; ops/replies/HM-34.md
- notes: Added by Hark 2026-11-28 under pick-rule step 5. Revenue reason: HM-33 put leads-8 on 2026-12-11 to 12-16, the same days the HM-27 follow-ups fill at 5 a day, so following both meant 10 sends a day (the deliverability risk HM-22 was about) or dropping one. Leads-8 now goes Thu 2026-12-17 to Tue 12-22; follow-ups Wed 12-23 to Wed 12-30, skipping 12-24 and 12-25. Option kept for Jilsha: start leads-8 Mon 2027-01-04 instead of Christmas week. No new leads or first emails. Builder /workspace/work/hm34/build.py; slot change in /workspace/work/hm33/build.py.
- done: PR #81 merged 2026-11-28 (f411883).

### HM-33 — Leads-8 reply kit + send slots
- id: HM-33
- status: done
- pri: 0
- lane: hark
- blocked_on: none
- owner: hark
- branch: hark-hm-33
- success: All 16 leads-8 first emails (PR #79) have a send slot after the HM-26 calendar and a paste-ready Reply 1 matched to their hook. Variant A leads get the dated Gemini list; site, SEO and missed-call leads get the answer their question promised. One free next step each, no price, nothing sent.
- inputs: ops/marketing/drafts-8.md; ops/marketing/leads-8.csv; data/ai-answers.json; ops/marketing/replies-variant-a-1.md; ops/marketing/send-calendar-hm-26.md; ops/research/reply-autopsy.md §5
- output: ops/marketing/replies-leads-8.md; ops/replies/HM-33.md
- notes: Added by Hark 2026-11-28 under pick-rule step 5. Revenue reason: leads-8 (PR #79, merged) added 16 drafts with no date and no reply plan; reply-autopsy §5 says a "yes" turns into a free check and then a report only if the list (or promised fix) goes back fast. Not a new cold batch: no new leads or first emails. Slots as first written: Fri 2026-12-11 to Wed 12-16; moved by HM-34 to Thu 2026-12-17 to Tue 12-22 because HM-27 follow-ups already fill 12-11 to 12-16. Free-check links only where the live form and a saved Gemini answer both exist (Denton dentist/med spa, Lewisville med spa); others get the free SEO audit. Missed-call replies offer nothing paid until Jilsha approves the $49 check. Builder /workspace/work/hm33/build.py.
- done: PR #80 merged 2026-11-28 (cd4193a). Slots later moved by HM-34 (they collided with HM-27).

### HM-06 — Conversion + in-flight SEO QA
- id: HM-06
- status: done
- pri: 0
- lane: muse
- blocked_on: none
- owner: muse
- branch: muse-hm-06 (rebased from muse-seo-3; PR #45 superseded)
- success: Money path works live (free-check name/city, $19 checkout form contract, no dead money-page links). In-flight muse-seo-3 is ready or the leftover is written. CSP/stylesheet regressions from muse-seo-2 do not return.
- inputs: origin/muse-seo-3; origin/muse-footer-fix; ops/tasks/muse-seo-3.md; ops/replies/muse-seo-2.md; live site
- output: PR(s) + ops/replies/HM-06.md
- notes: Leftovers in ops/replies/HM-06.md §8 are now HM-19. Board row was still in Doing after the merge; Kiwi moved it to Done on 2026-11-23 with the Muse pack.

- done: PR #51 merged 2026-11-21 (4bfc901). Live money path QA passed; footer stopgap retired in favor of vilouraai.com/pricing; Codex FAIL items on the DFW study page fixed.

### HM-01 — Reply-rate autopsy + 2 first-email variants
- id: HM-01
- status: done
- pri: 0
- lane: hark
- blocked_on: none
- owner: hark
- branch: hark-hm-01
- success: A written kill/keep on the current cold-email formula, and 2 new variants with one recommended default. No new generic batch.
- inputs: ops/marketing/sent-log.md; ops/marketing/drafts-*.md; ops/marketing/followups-*.md; ops/playbooks/hark.md
- output: ops/research/reply-autopsy.md and a short edit proposal for ops/playbooks/hark.md (apply only what review accepts). Optional: 10 sample drafts of the recommended variant, clearly marked unsent.
- notes: 54 sent, 0 replies is the bottleneck (America/Chicago, as of 2026-11-21). Count bounces separately. Look at hook, subject, offer, length, link/price violations, agency vs local, timing, and whether the email asked a real easy question. Do not recommend "send more of the same." Cold drafts still must be 25–45 words, no link, no price, one question, opt-out + postal footer.

- done: PR #50 merged 2026-11-21 (ops/research/reply-autopsy.md). Verdict: kill the old formula; Variant A recommended.

### HM-09 — Bounce and list hygiene
- id: HM-09
- status: done
- pri: 1
- lane: hark
- blocked_on: none
- owner: hark
- branch: hark-hm-09
- success: Every known bounce is marked do-not-email in sent-log (and lead files if present). No drafts to those addresses. Any new address has a source URL on the business's own site.
- inputs: ops/marketing/sent-log.md; ops/marketing/leads-*.csv; crm CSVs
- output: updated sent-log and a short ops/marketing/do-not-email.md list
- notes: Known bounces as of the 2026-11-21 sent-log include contact@digitalzeon.com, office@drkareed.com, and info@fusionchiropracticspa.com. Do not invent replacements.

- done: PR (hark-hm-09), 2026-11-21: ops/marketing/do-not-email.md; bounces tagged in sent-log, seg-dental.csv, out-dental.md, drafts-7.md.

### HM-11 — 15 Variant A first-email drafts
- id: HM-11
- status: done
- pri: 0
- lane: hark
- blocked_on: none
- owner: hark
- branch: hark-hm-11
- success: 15 unsent Variant A drafts for DFW dental/chiro/med spa/home-service leads not in sent-log, each with an own-site email source URL + date and a dated AI-answer source; playbook edit proposed.
- inputs: ops/research/reply-autopsy.md; data/ai-answers.json; ops/marketing/leads-3.csv, leads-7.csv; sent-log; do-not-email.md
- output: ops/marketing/drafts-variant-a-1.md; ops/playbooks/hark.md edit; ops/replies/HM-11.md
- notes: Added by Hark at Jilsha's request 2026-11-21. Overlaps HM-05 (HM-05 = sending a Variant A batch and measuring it); HM-05 can use this file when Jilsha decides to send.
- done: PR (hark-hm-11), 2026-11-21.

### HM-08 — Package 3 community posts from PR #48 for Jilsha
- id: HM-08
- status: done
- pri: 1
- lane: hark
- blocked_on: none
- owner: hark
- branch: hark-hm-08
- success: Exactly 3 posts, each with target community, why it is first, a rules re-check date, and a paste-ready body. No links or prices if the community or playbook forbids them. Agents never post.
- inputs: ops/marketing/community-posts-2.md (merged in PR #48)
- output: ops/marketing/community-posts-hm-08.md
- notes: Packaging only. Pick value-first posts aimed at DFW local-business audiences over generic startup spam.

- done: PR (hark-hm-08), 2026-11-21: ops/marketing/community-posts-hm-08.md (FB DFW BP Networking, FB Small Business DFW, Alignable Lewisville).

### HM-12 — Variant A reply kit
- id: HM-12
- status: done
- pri: 0
- lane: hark
- blocked_on: none
- owner: hark
- branch: hark-hm-12
- success: Every HM-11 lead has a paste-ready Reply 1 (the dated Gemini list + one free next step, no price). Shared replies for questions, price ("$19", facts from live pricing.html), call requests, "no" (→ do-not-email) and auto-replies. Nothing sent.
- inputs: ops/marketing/drafts-variant-a-1.md; data/ai-answers.json; pricing.html; free-check.js (category/city/name URL prefill)
- output: ops/marketing/replies-variant-a-1.md; ops/replies/HM-12.md
- notes: Added by Hark 2026-11-21 at Jilsha's request, as the highest-revenue Hark step left. Variant A only earns money if a "yes" is answered fast and leads to the free check, then the $19 report. Follows reply-autopsy §5 ("the follow-up to a yes is the list plus one line offering the free check"). Not a new cold batch.
- done: PR #55 merged 2026-11-21.

### HM-13 — Leads-7 single follow-up (Variant A form)
- id: HM-13
- status: done
- pri: 0
- lane: hark
- blocked_on: none
- owner: hark
- branch: hark-hm-13
- success: 9 unsent follow-ups, one per delivered 2026-11-19 leads-7 contact (Fusion excluded, bounced). 38–42 words, no link, no price, one question, opt-out, footer, dated Gemini source. Send plan and read date stated.
- inputs: ops/marketing/sent-log.md (Leads-7); ops/marketing/leads-7.csv; data/ai-answers.json; ops/research/reply-autopsy.md §2, §4; ops/marketing/do-not-email.md
- output: ops/marketing/followups-7.md; ops/replies/HM-13.md
- notes: Added by Hark 2026-11-21 at Jilsha's request. The highest-revenue Hark step left that isn't a new cold batch. Autopsy says judge leads-7 "together with its single follow-up". Read first-email replies 2026-11-26, follow-up replies through 2026-11-30.
- done: PR #56 merged 2026-11-21.

### HM-21 — 30-lead Variant A list 2
- id: HM-21
- status: done
- pri: 1
- lane: hark
- blocked_on: none
- owner: hark
- branch: hark-hm-15 (opened as HM-15; renumbered HM-21 because main's Muse pack uses HM-15–HM-19 and HM-20 is Jilsha's verified-drafts item)
- success: 30 new DFW leads (dentist / chiro / med spa / HVAC / plumber in Lewisville, Flower Mound, Carrollton, Frisco). Each has an email read on its own site with a source URL dated 2026-11-23, and a dated Gemini answer in data/ai-answers.json naming 3+ businesses but not this one. None in sent-log, earlier lead files, CRM, drafts, or do-not-email. No drafts.
- inputs: data/ai-answers.json; ops/ (all files, for exclusion); ops/marketing/do-not-email.md; ops/playbooks/hark.md Variant A rule
- output: ops/leads/variant-a-2.csv; ops/leads/variant-a-2.md; ops/replies/HM-21.md
- notes: Added by Hark 2026-11-23 under playbook pick-rule step 5 at Jilsha's request (no generic cold batch). Lead list only. Feeds HM-20 and the next Variant A batch after EXP-H1 reads out.
- done: PR #60, 2026-11-23.

### HM-32 — Result channel for all 24 missed-call test practices
- id: HM-32
- status: done
- pri: 0
- lane: hark
- blocked_on: none
- owner: hark
- branch: hark-hm-32
- success: No test practice is left without a way to receive its free result. Emails are kept only if seen on the practice's own site 2026-11-26/27; forms and callbacks have paste-ready text; nothing sent, submitted or called by Hark.
- inputs: ops/marketing/missed-call/missed-call-test.csv; practice websites (fetched 2026-11-27)
- output: missed-call-test.csv (+ result_channel, form_url; email_check updated), missed-call/result-by-form-or-phone.md, README line, ops/replies/HM-32.md
- notes: Added by Hark 2026-11-27 under pick-rule step 5. Revenue reason: the result is the offer; before this, 9 of 24 practices had no channel and 6 more had emails never re-seen on their own site, so up to 15 of 24 results could have gone nowhere or bounced. Now 12 email, 6 form, 6 callback. Butler Chiropractic's randy.butler@ dropped (site now names Dr. Andre Taylor). Builder /workspace/work/hm32/{crawl,apply}.py.
- done: PR #77 merged 2026-11-27 (25cf0a1).

### HM-31 — $49 check: reply kit + report template
- id: HM-31
- status: done
- pri: 0
- lane: hark
- blocked_on: none
- owner: hark
- branch: hark-hm-31
- success: When a test practice replies to its result email, Jilsha has a paste-ready answer, and when it pays, she has a report she can fill from the call log the same day. No invented results. No price or Stripe object created. Payment method is left to Jilsha, with a dated gate.
- inputs: ops/research/pain-check.md §4; ops/marketing/missed-call/*; data/ai-answers.json; HM-03 notes (no new Stripe price)
- output: ops/marketing/missed-call/reply-kit.md, ops/marketing/missed-call/report-template.md, ops/replies/HM-31.md
- notes: Added by Hark 2026-11-27 under pick-rule step 5. Revenue reason: HM-30 sets up the $49 test (calls 12-01 to 12-03, result drafts 12-04), but nothing existed to turn a "yes" into payment and a delivered report. Open for Jilsha: choose a payment link or an invoice before 2026-12-04. Saved Gemini answers name 3 of the 24 practices, 1 is unclear (Boutique Medspa vs "Boutique MedSpa (MD Skin and Laser)"), and 1 has no saved answer (The Colony med spa). Builder /workspace/work/hm31/build.py.
- done: PR #76 merged 2026-11-27 (c7a4bd1).

### HM-30 — Missed-call test pack in repo
- id: HM-30
- status: done
- pri: 0
- lane: hark
- blocked_on: none (calls are Jilsha's, HM-02)
- owner: hark
- branch: hark-hm-30
- success: HM-02 can start Tue 2026-12-01 from files in the repo. The practices have not been contacted (not in sent-log, do-not-email or send calendar), and their phones and emails were checked on their own sites on 2026-11-26. The script is disclosed. The log covers 3 calls each. The HM-04 result template is gated on a completed log and Jilsha's $49 go. Nothing called, sent or submitted.
- inputs: ops/research/pain-check.md §4; ops/marketing/crm/seg-*.csv; call-list.csv; sent-log.md; do-not-email.md; send-calendar-hm-26.md
- output: ops/marketing/missed-call/{README.md, missed-call-test.csv, call-script.md, call-log-template.csv, followup-template.md}; ops/replies/HM-30.md
- notes: Added by Hark 2026-11-26 under pick-rule step 5 at Jilsha's request. Revenue reason: pain-check's recommended $49 launch was blocked because HM-02's inputs were never committed. A verifiable call result is the one opener that is not a generic cold pitch (reply-autopsy §6). 24 qualified, not 30, so the success bar is scaled to 4 or more replies and 1 or more paid. Builder /workspace/work/hm30/{pool,fetch,build}.py.
- done: PR #74 merged 2026-11-27 (fadb3ef).

### HM-29 — Community comment reply kit
- id: HM-29
- status: done
- pri: 0
- lane: hark
- blocked_on: none (Jilsha comments herself)
- owner: hark
- branch: hark-hm-29
- success: Every likely comment on the queued community posts has a short, honest, sourced reply. Each community's comment-link rule is stated. The "check mine" path goes to a prefilled free check (ref=community3) or the SEO audit outside the form's cities and categories. Leads are logged in sent-log. Nothing posted.
- inputs: ops/marketing/community-posts-3.md; community-posts-2.md; community-posts-hm-08.md; data/ai-answers.json; free-check.js; free-check.html; pricing.html
- output: ops/marketing/community-reply-kit.md; ops/replies/HM-29.md
- notes: Added by Hark 2026-11-26 under pick-rule step 5 at Jilsha's request ("add the next highest-revenue Hark item ... no generic cold batch"). Revenue reason: the posts carry no link or price by design, so a comment is the only route to a free check and a $19 report. Not outreach: every reply answers someone who spoke first. Builder /workspace/work/hm29/build.py.
- done: PR #72 merged 2026-11-26 (f23eb31).

### HM-28 — Community posts round 3
- id: HM-28
- status: done
- pri: 0
- lane: hark
- blocked_on: none (posting is Jilsha's)
- owner: hark
- branch: hark-community-3
- success: 8 value-first drafts, none repeating earlier drafts' communities or points. Each has its URL, rule recap with source, and a paste body. Every fact is sourced. Owner audiences come first. Comment-only free-check path where allowed. Nothing posted.
- inputs: ops/marketing/communities.md; community-posts-2.md; community-posts-hm-08.md; leaderboard-posts.md; posts.md; data/ai-answers.json; ops/leads/verified-leads-2026-11-24.csv
- output: ops/marketing/community-posts-3.md; ops/leads/site-scan-2026-11-26.csv; ops/replies/HM-28.md
- notes: Requested by Kiwi via Jilsha in chat 2026-11-26 ("value-first community post drafts aimed at getting a first paying customer soonest"). Not a cold email batch.
- done: PR #71 merged 2026-11-26 (ca81448). PR #63 (followups-8, sent-log conflict fixed) merged 2026-11-26 (00b3221).

### HM-27 — Variant A follow-ups for the 24 scheduled HM-20 first emails
- id: HM-27
- status: done
- pri: 0
- lane: hark
- blocked_on: none (sending is Jilsha's; each follow-up waits on its first email being sent)
- owner: hark
- branch: hark-hm-27
- success: Each of the 24 HM-20 first emails on send-calendar-hm-26 has one unsent follow-up in HM-23 form: 40–44 words, no link, no price, one question, opt-out, footer, and the dated Gemini count. Each is gated (sent-log shows the first email sent and not bounced; no reply or no), due 4 business days later, and planned inside the 5-a-day cap from 12-08 to 12-16. Nothing sent.
- inputs: ops/marketing/HM-20-personalized-drafts.md; ops/marketing/send-calendar-hm-26.md; data/ai-answers.json; ops/marketing/followups-9.md (format)
- output: ops/marketing/followups-11.md; HM-20 follow-up section in send-calendar-hm-26.md; ops/replies/HM-27.md
- notes: Added by Hark 2026-11-25 under pick-rule step 5 at Jilsha's request (no eligible Hark item left). Revenue reason: reply-autopsy §4/§6 judges a format with its one follow-up. Without drafts, follow-ups to the best batch would lag. Not a cold batch: these are the same 24 contacts. Held HM-22 leads are not included.
- done: PR #69 merged 2026-11-25.

### HM-26 — One send calendar for the queued 41
- id: HM-26
- status: done
- pri: 0
- lane: hark
- blocked_on: none (sending is Jilsha's)
- owner: hark
- branch: hark-hm-26
- success: All 41 queued unsent emails (HM-23 7 follow-ups, HM-24 10 follow-ups, HM-20 15 Google + 9 M365 first emails) have one weekday slot, 2026-11-30 to 2026-12-10. At most 5 a day, 8–10 AM CT, no Thanksgiving sends. Gates are written down: the HM-22 bounce check before HM-20 sends, a daily Inbox/Spam/All Mail check, a sent-log line per send, stop on a bounce. HM-22's held 10 stay held. Drafts are unchanged; HM-24's dates move. Nothing sent.
- inputs: ops/marketing/followups-9.md; ops/marketing/followups-10.md; ops/marketing/HM-20-personalized-drafts.md; ops/research/deliverability-hm-22.md; ops/playbooks/hark.md (5-a-day cadence)
- output: ops/marketing/send-calendar-hm-26.md; send-plan note in followups-10.md; ops/replies/HM-26.md
- notes: Added by Hark 2026-11-25 under pick-rule step 5 at Jilsha's request (no eligible Hark item left). Revenue reason: the three separate send plans overlapped (7 on Tue 12-01) and put the best fresh leads (HM-20, 24 ready) behind two-week-old threads. No send, no reply, no customer. EXP-H1 read-out moves to 2026-12-17 because HM-20 #30–39 replace HM-11 #6–15.
- done: PR #68 merged 2026-11-25 (c40b0c6).

### HM-25 — Variant A reply kit, batch 2
- id: HM-25
- status: done
- pri: 0
- lane: hark
- blocked_on: none (replying is Jilsha's)
- owner: hark
- branch: hark-hm-25
- success: Every open or queued Variant A thread without a Reply 1 has one: HM-20 #4–29 (2 sent, 24 unsent) and HM-24 #1–10. Names and date exactly from data/ai-answers.json (Gemini 2026-11-13); no price; one free next step (pre-filled /free-check where the live form covers the city and category, else /free-seo-audit). Hush MedSpa (named) gets the other names. Reply 2 and reply-by-type stay in batch 1, re-checked against live pricing 2026-11-25. Nothing sent.
- inputs: ops/marketing/HM-20-personalized-drafts.md; ops/marketing/followups-10.md; ops/marketing/replies-variant-a-1.md; data/ai-answers.json; free-check.html; pricing.html; ops/research/reply-autopsy.md §5
- output: ops/marketing/replies-variant-a-2.md; ops/replies/HM-25.md
- notes: Added by Hark 2026-11-25 under pick-rule step 5 at Jilsha's request (no eligible Hark item left). Revenue reason: Variant A's only path to money is a fast, good answer to a "yes"; 36 threads had no paste-ready answer. HM-20 #1–3 left out (5.7.1 rejects); HM-20 #30–39 and the Irving five are already in batch 1.
- done: PR #67 merged 2026-11-25 (ca39e48).

### HM-24 — Variant A follow-ups for the old-formula 11-11 / 11-13 local sends
- id: HM-24
- status: done
- pri: 0
- lane: hark
- blocked_on: none (sending is Jilsha's)
- owner: hark
- branch: hark-hm-24
- success: Each local business that got an old-formula first email on 2026-11-11 or 2026-11-13 and never got a follow-up has one Variant A follow-up draft: 25–45 words, no link, no price, one question, opt-out, footer, using the 2026-11-13 Gemini answers. Drafts stay truthful about what the first email claimed. The old link/price drafts are marked superseded. Agencies and bounces left out. Logged as drafted only; nothing sent.
- inputs: ops/marketing/sent-log.md; ops/marketing/followups-1.md; ops/marketing/followups-3.md; ops/marketing/drafts-3.md; data/ai-answers.json; ops/research/reply-autopsy.md §4; ops/marketing/do-not-email.md; ops/research/deliverability-hm-22.md
- output: ops/marketing/followups-10.md; superseded notes in followups-1.md and followups-3.md; sent-log "Follow-ups (round 10, HM-24)"; ops/replies/HM-24.md
- notes: Added by Hark 2026-11-25 under pick-rule step 5 at Jilsha's request (no eligible Hark item left). 10 contacts: Kingdom + 9 leads-3. Send plan after HM-23: Tue 2026-12-01 (#1–3), Wed 2026-12-02 (#4–8), Thu 2026-12-03 (#9–10), 8–10 AM Central.
- done: PR #66 merged 2026-11-25 (7a98721).

### HM-23 — Variant A follow-ups for delivered 11-23 / 11-24 first emails
- id: HM-23
- status: done
- pri: 0
- lane: hark
- blocked_on: none (sending is Jilsha's)
- owner: hark
- branch: hark-hm-23
- success: One follow-up draft for each delivered Variant A first email with no follow-up yet: the 5 HM-11 Irving sends (2026-11-23) and Jordan Carl DMD and Adjusted Life (HM-20, 2026-11-24). Each 25–45 words, no link, no price, one question, opt-out, footer, same dated Gemini answer as the first email. None to do-not-email. Logged in sent-log only as drafted. Nothing sent.
- inputs: ops/marketing/sent-log.md; ops/marketing/drafts-variant-a-1.md; ops/marketing/HM-20-personalized-drafts.md; data/ai-answers.json; ops/marketing/do-not-email.md; ops/research/deliverability-hm-22.md; ops/research/reply-autopsy.md §4, §6
- output: ops/marketing/followups-9.md; sent-log "Follow-ups (round 9, HM-23)"; ops/replies/HM-23.md
- notes: Added by Hark 2026-11-25 under pick-rule step 5 at Jilsha's request (no eligible Hark item left). Send plan: Irving 5 on Mon 2026-11-30, Lewisville 2 on Tue 2026-12-01, 8–10 AM Central (hold Thanksgiving and the Friday after). Replies count toward EXP-H1 / HM-14.
- done: PR #65 merged 2026-11-25 (35a700b).

### HM-22 — Deliverability triage after Gmail 5.7.1 rejects
- id: HM-22
- status: done
- pri: 0
- lane: hark
- blocked_on: none (sending and reading the bounce text are Jilsha's)
- owner: hark
- branch: hark-hm-22
- success: Every HM-20 address has its mail provider looked up (DNS MX, dated 2026-11-25). The 34 unsent drafts are put in a send order: lowest risk first, risky filters and no-MX domains held. The 3 rejects go on do-not-email. Jilsha gets one free check (bounce "Technical details") that tells recipient policy from a sending-account problem. Drafts unchanged; nothing sent; no generic batch.
- inputs: ops/marketing/sent-log.md (HM-20 section); ops/leads/verified-leads-2026-11-24.csv; ops/marketing/HM-20-personalized-drafts.md; ops/research/reply-autopsy.md §3.9 and §6; public DNS
- output: ops/research/deliverability-hm-22.md; ops/leads/hm-22-mx-check-2026-11-25.csv; ops/marketing/do-not-email.md rows; ops/replies/HM-22.md
- notes: Added by Hark 2026-11-25 under pick-rule step 5 at Jilsha's request (no eligible Hark item left). Highest revenue lever now: 3 of 5 HM-20 sends were rejected, and the 34 remaining drafts are the best leads we have. Result: 15 send first (Google Workspace), 9 second (Microsoft 365), 9 held (other filters), 1 held (Tex Plumbing, no MX).
- done: PR #64 merged 2026-11-25 (737aab5).

### HM-20 — Verified, personalized first emails
- id: HM-20
- status: done
- pri: 0
- lane: hark
- blocked_on: none (sending is Jilsha's)
- owner: hark
- branch: hark-hm-20
- success: For all 30 leads in ops/leads/variant-a-2.csv and the 10 unsent HM-11 leads (#6–15), the email is confirmed on a public page with a source URL, or marked UNVERIFIED and left out. Owner name with source when public. One real detail with source URL. Rewritten first email: 25–45 words, opens with the detail, no link, no price, one question, opt-out line, footer. Nothing sent.
- inputs: ops/leads/variant-a-2.csv (PR #60); ops/marketing/drafts-variant-a-1.md; data/ai-answers.json; ops/marketing/do-not-email.md
- output: ops/leads/verified-leads-2026-11-24.csv; ops/marketing/HM-20-personalized-drafts.md; ops/replies/HM-20.md
- notes: Added by Jilsha 2026-11-23 as top priority ("our emails feel generic and some addresses may not be real"). 39 verified, 1 UNVERIFIED. HM-20 drafts replace HM-11 #6–15; send only one version per contact.
- done: PR #61 merged 2026-11-25 (0499c82).
- update 2026-11-25: Jilsha sent the first 5 drafts on 2026-11-24 ~9:39 AM CT from vilouraai@gmail.com. Gmail rejected 3 (HillCrest Dental, Castle Lake Dental, Hillside Dental; 5.7.1 Message rejected); Jordan Carl DMD and Adjusted Life Family Chiropractic, no bounce. 34 drafts remain unsent. Do not re-send or follow up the 3 rejected.

