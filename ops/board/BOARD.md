# Hark + Muse board

Single queue for `vilouraai1/prisqo` and site work on `vilouraai1/vilouraai-web`. Format and pick rules: `ops/playbooks/*.md` and the SYSTEM.md this was drafted with.

WIP limit: 1 Doing item per lane. Agents never send, post, call, spend, or touch `prisqo-report-engine` / Stripe.

How to pick: from `## Next`, first table row whose `Lane` is yours (or `both`), whose details `blocked_on` is `none`, and who has nothing already in `## Doing`. Claim by moving the row + details block into `## Doing` in the same work PR. Items with `blocked_on` other than `none` belong in `## Blocked`, not here.

Updated: 2026-11-23 20:15 America/Chicago (Kiwi: HM-06 moved to Done (PR #51). Muse pack added HM-15–HM-19 to Next; briefs in ops/board/MUSE-PACK.md. Hark HM-10 half already merged in #58; HM-14 stays Blocked.) Hark 2026-11-23: HM-21 (30-lead Variant A list 2, was numbered HM-15 on branch hark-hm-15 before the Muse pack took HM-15–19) added as Done; no drafts.

## Next

| ID | Pri | Lane | Title | Success metric | Inputs |
|----|-----|------|-------|----------------|--------|
| HM-15 | 0 | muse | Free-check result → $19 report conversion | After a successful free check, one obvious click reaches the existing $19 checkout; uncovered cities get an honest fallback, not a fake list | live `/free-check`, `free-check.js`, `replies-variant-a-1.md`, `pricing.html` |
| HM-16 | 0 | muse | Pricing page + checkout-path clarity | A first-time reader can tell free check vs $19 report apart; primary CTA destination is obvious; form contract unchanged | `pricing.html`, `/#check`, `faq.html`, `replies-variant-a-1.md` |
| HM-17 | 0 | muse | Reply-to-report fulfilment path (`ref=reply`) | Reply 1 and Reply 2 URLs still work; a `ref=reply` visitor can go from free result or audit to $19 checkout with truthful copy | `replies-variant-a-1.md`, `/free-check`, `/pricing`, `/free-seo-audit` |
| HM-18 | 1 | muse | Money-path CTAs on existing guides and industry pages | Priority dental/chiro/med-spa/home-service guides each have a truthful CTA to `/free-check` and/or `/pricing`; zero new 404s | existing `/guides/` and `/ai-visibility/` pages, sitemap |
| HM-19 | 1 | muse | Technical SEO leftovers from HM-06 (indexation, speed, durability) | Each HM-06 §8 leftover is fixed or re-stated with evidence; money pages stay indexable and in the sitemap | `ops/replies/HM-06.md` §8, sitemap, live money pages |
| HM-10 | 1 | both | First weekly retro | Each lane updates its playbook, logs 1 experiment with a kill/keep rule, and adds one process-change line | `METRICS.md`, this board, playbooks, sent-log |


### HM-15 — Free-check result → $19 report conversion
- id: HM-15
- status: next
- pri: 0
- lane: muse
- blocked_on: none
- owner: none
- branch: muse-hm-15
- success: After a successful free check, a visitor can reach the existing $19 checkout in one obvious click. Fields `name` and `city`, URL prefill, data-testids, and the checkout form contract stay unchanged. Uncovered cities (e.g. Keller, Grapevine) get an honest fallback, not a fabricated list. New cities may be added only when a dated snapshot already exists in `data/ai-answers.json`.
- inputs: https://prisqo.vilouraai.com/free-check; free-check.html; free-check.js; ops/marketing/replies-variant-a-1.md; pricing.html; ops/board/MUSE-PACK.md
- output: site PR + ops/replies/HM-15.md
- notes: Highest-revenue Muse item. Variant A "yes" replies land on pre-filled /free-check links. Paste-ready brief in ops/board/MUSE-PACK.md. Do not restyle LP-2. Do not deploy. Do not touch engine or Stripe.

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

## Blocked

| ID | Pri | Lane | Title | Success metric | Inputs |
|----|-----|------|-------|----------------|--------|
| HM-02 | 0 | jilsha | 30-practice disclosed test calls + log | 30 practices logged (answered / voicemail / no answer / callback); no recordings | `/workspace/missed-call/` (copy into ops/marketing/missed-call/ when installing) |
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
- inputs: /workspace/missed-call/call-script.md; call-log-template.csv; missed-call-test-30.csv (install path: ops/marketing/missed-call/)
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
- notes: Added by Hark in the HM-10 retro 2026-11-23. Unblocks when sent-log shows all 15 sent (or Jilsha says the batch is done) and 7 days have passed. Counts come from sent-log and Jilsha only; never guess a reply.

## Done

| ID | Pri | Lane | Title | Success metric | Inputs |
|----|-----|------|-------|----------------|--------|
| HM-06 | 0 | muse | Conversion + in-flight SEO QA | Live `/free-check` and $19 checkout still work; muse-seo-3 and footer/dead-link work merged or given a precise leftover list; no engine/Stripe changes | `origin/muse-seo-3`, `origin/muse-footer-fix`, live prisqo.vilouraai.com |
| HM-21 | 1 | hark | 30-lead Variant A list 2 (Lewisville, Flower Mound, Carrollton, Frisco) | 30 leads not in any ops/ file, own-site email + source URL dated 2026-11-23, dated Gemini answer that doesn't name them; no drafts | `data/ai-answers.json`, all `ops/` lead/sent files, `do-not-email.md` |
| HM-13 | 0 | hark | Leads-7 single follow-up in Variant A form | 9 unsent follow-ups (delivered 11-19 cohort, minus bounce), dated AI source, send plan Mon 2026-11-23, read 2026-11-30 | `sent-log.md` Leads-7, `leads-7.csv`, `data/ai-answers.json`, `reply-autopsy.md`, `do-not-email.md` |
| HM-12 | 0 | hark | Variant A reply kit (turn "yes" replies into free checks and $19 reports) | Paste-ready Reply 1 for all 15 HM-11 leads + shared replies (who are you / price / call / no); unsent | `drafts-variant-a-1.md`, `data/ai-answers.json`, `pricing.html`, `free-check.js` |
| HM-08 | 1 | hark | Package 3 community posts from PR #48 for Jilsha | 3 ready-to-post items with community, rules check dated, and a paste body; agents do not post | `ops/marketing/community-posts-2.md` |
| HM-11 | 0 | hark | 15 Variant A first-email drafts (DFW dental/chiro/med spa/home service) | 15 unsent drafts, own-site email source URL + date, dated AI source; playbook edit proposed | `ops/research/reply-autopsy.md`, `data/ai-answers.json`, lead CSVs, sent-log, do-not-email |
| HM-09 | 1 | hark | Bounce and list hygiene | Bounced addresses tagged do-not-email; any replacement is from the business's own site with a source URL | `ops/marketing/sent-log.md`, lead CSVs |
| HM-01 | 0 | hark | Reply-rate autopsy + 2 first-email variants | A written kill/keep on the current cold formula, plus 2 testable variants (one recommended) | `ops/marketing/sent-log.md`, drafts, followups, `ops/playbooks/hark.md` |

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

