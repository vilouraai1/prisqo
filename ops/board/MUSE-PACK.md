# Muse brief pack — 2026-11-23 (America/Chicago)

Paste-ready work for Meta Muse. Goal: first paying customer for VilouraAI / Prisqo ($19 AI-visibility report at https://prisqo.vilouraai.com). Written 2026-11-23, about 8:10 PM CT, from `origin/main` after PR #58 merged (`fb1d1df`).

Jilsha pastes into the Muse app. Kiwi cannot message Muse. Nothing in this pack was sent, posted, deployed, or spent.

---

## Recurring task (paste this into Muse once, then approve it)

This is the only documented free way to wake Muse on a schedule. Paste, then approve the scheduled task in Muse (Settings → permissions / Upcoming). It runs until cancelled.

```
Every weekday at 8:00 AM America/Chicago, and again at 1:00 PM, pull origin/main on vilouraai1/prisqo, read ops/playbooks/muse.md and ops/board/BOARD.md, and do the top unblocked Muse item (WIP=1). Open or update one non-draft PR to main and comment ready. Do not deploy.
```

Standing session brief (optional, if you open Muse by hand instead of waiting for the recurring task):

```
You are Muse for VilouraAI / Prisqo. Goal: first paying customer. This is a standing brief: on every session, pull origin/main and take the next item. You do not need a new pasted brief each time.

Read: ops/playbooks/muse.md, ops/board/BOARD.md, ops/board/METRICS.md, ops/board/MUSE-PACK.md if present, ops/marketing/sent-log.md, and the hard rules in ops/kiwi-handoff.md.

Pick the top eligible Muse item using the pick rule (WIP = 1). Claim it in your PR (move to Doing). Branch muse-hm-NN (or muse-retro-YYYY-MM-DD for the Muse half of HM-10). Write ops/replies/HM-NN.md ending with ## Summary and DONE. Open or update one non-draft PR and comment ready. Do not deploy; the handoff loop reviews, deploys, and merges.

Hard rules: free only, $0, no paid APIs, never touch prisqo-report-engine or Stripe, never send or post. No invented stats or testimonials. Do not restyle the LP-2 homepage. Do not change /free-check fields (name, city), data-testid attributes, or the $19 checkout form contract (ids, names, action="#", method="post"). Keep existing URLs.

Use UI/UX Pro Max and your SEO skills. Batch the chosen item into one PR. If this pack lists a paste-ready brief for that item, follow it.
```

---

## How to use this pack

1. Set up the recurring task above if it is not already approved.
2. Paste **one** item brief at a time (WIP = 1). Start at the top of the ordered list unless that item is still blocked.
3. After the PR is merged, pull main and take the next unblocked Muse item. Do not start a second Muse PR while one is in Doing.
4. Do **not** skip pri-0 items to do the HM-10 retro early. Hark's half of HM-10 is already merged in https://github.com/vilouraai1/prisqo/pull/58 (2026-11-23). Muse should do HM-15+ first, then the Muse half of HM-10.
5. HM-03 and HM-07 stay blocked until Jilsha names the site for `/missed-call-check` and sets `blocked_on: none` on HM-03. Their briefs are included so they can be pasted the moment that happens.

---

## Context Muse will not have unless you paste it

- Official snapshot: **54 emails sent, 0 replies, 0 paid** (`ops/board/METRICS.md`, still current as of 2026-11-23). sent-log line count is 46; the gap of 8 is unresolved. Do not invent a new total.
- Offer that is live: Prisqo **$19 one-time** AI visibility report (Stripe LIVE). Free check at `/free-check` (fields `name`, `city`). 14-day refund line. Contact `vilouraai1@gmail.com`. Postal identity: VilouraAI, 357 E Corporate Dr, Lewisville, TX.
- Proposed test offer: **$49 missed-call + AI visibility check**. Not a Stripe product. Do not create a Stripe price. CTA must be `mailto:vilouraai@gmail.com` or an existing form until Jilsha separately approves Stripe.
- Current money path: a Variant A "yes" reply gets the dated Gemini list plus a pre-filled `/free-check` link (`ops/marketing/replies-variant-a-1.md`). Price is only mentioned if they ask (Reply 2 points at `https://prisqo.vilouraai.com/pricing?ref=reply`). Keller and Grapevine leads are sent to `/free-seo-audit` because the free check does not cover those cities yet.
- Live money pages (verified in HM-06, 2026-11-21, still the live contract): https://prisqo.vilouraai.com/ , `/free-check`, `/pricing`, `/free-seo-audit`. Pricing CTAs go to `/#check` on the LP-2 homepage. Title on `/pricing`: "Pricing: AI Visibility Report, $19 one-time | Prisqo".
- HM-06 is **done** in substance (PR #51, `muse-hm-06`, merged 2026-11-21) but was left in `## Doing` on the board. This pack's board PR moves it to Done. Leftovers are HM-19.
- No `muse-hm-03` branch or missed-call-check PR was on GitHub as of 2026-11-23 8 PM CT. The page copy exists at `/workspace/missed-call/missed-call-landing-copy.md` and was not yet under `ops/marketing/` on main.
- HM-14 is a Hark read-out of the Variant A batch (added in merged PR #58); do not reuse that ID. Open PR #53 is a stale HM-11 PR with a board conflict; the HM-11 drafts are already on main.
- Search Console baseline (muse-seo-3 brief, Nov 19, 2026): 0 indexed pages / 0 impressions. No newer confirmed count is in METRICS. Do not invent traffic numbers.
- Frozen contracts: see `ops/playbooks/muse.md`. LP-2 homepage: do not restyle. `/free-check` fields stay `name` and `city`. Keep `data-testid` values including `sample-preview` and `home-more`. $19 checkout form keeps original ids (`domain`, `category`, `cats`, `city`, `brand`), names, `action="#"`, `method="post"`, notice and links. 14-day refund line stays.

---

## Ordered Muse work (highest revenue first)

Do these in this order. IDs start at **HM-15** because Hark's open retro PR already reserved **HM-14**.

| Order | ID | Pri | Board | Title | Why this is next for revenue |
|-------|----|-----|-------|-------|------------------------------|
| 1 | HM-15 | 0 | Next | Free-check result → $19 report conversion | Variant A "yes" replies land on `/free-check`. If that result does not make the paid report the obvious next step, a yes never becomes $19. |
| 2 | HM-16 | 0 | Next | Pricing page + checkout-path clarity | Reply 2 and direct visitors go to `/pricing?ref=reply`, then `/#check`. The path from "what does this cost?" to paying must be unmistakable. |
| 3 | HM-17 | 0 | Next | Reply-to-report fulfilment path (`ref=reply`) | Warm leads arriving from email need a short, honest "you saw one question; the $19 report runs six" path, including cities the free check does not cover. |
| 4 | HM-18 | 1 | Next | Money-path CTAs on existing guides and industry pages | Existing SEO pages should point a ready visitor at `/free-check` and `/pricing` without invented claims. |
| 5 | HM-19 | 1 | Next | Technical SEO leftovers from HM-06 (indexation, speed, durability) | Money pages still had a Nov 19 baseline of 0 indexed pages. Indexation and speed help a visitor who searches or is sent a link actually reach checkout. |
| 6 | HM-10 | 1 | Next (both) | Muse half of the first weekly retro | Already on the board. Do after pri-0 items. Hark's half is in PR #58. |
| — | HM-03 | 0 | Blocked | `/missed-call-check` page from existing copy | Blocked on Jilsha naming the site and setting `blocked_on: none`. Brief is ready. |
| — | HM-07 | 1 | Blocked | SEO for the missed-call page | Blocked until HM-03 merges. |

---

## Shared shipping rules (every Muse item)

Copy these into the work, not just this file:

- Branch `muse-hm-NN` (or `muse-retro-2026-11-23` for the Muse half of HM-10).
- Claim the item in the same PR: move the row + details block from Next to Doing, set `owner: muse`, `status: doing`.
- Write `ops/replies/HM-NN.md` as you go. End with `## Summary` and a final line `DONE`.
- Open or update **one non-draft** PR to `main`. Comment `ready`. Do not deploy.
- One item per PR. WIP = 1.
- Free only. $0. No paid APIs. Never touch `prisqo-report-engine` or Stripe. Never send, post, call, or submit forms to real businesses.
- No invented stats, testimonials, client counts, guarantees, or ranking / lead / revenue promises. If a fact is not in the repo or a cited public source with URL + date, write "unknown".
- Do not restyle the LP-2 homepage. Do not change `/free-check` fields (`name`, `city`), existing `data-testid` attributes, or the $19 checkout form contract (ids, names, `action="#"`, `method="post"`, notice and links). Keep the 14-day refund line. Keep existing URLs. Contact stays `vilouraai1@gmail.com`.
- On-page prices: $19 is the live offer. $49 may appear only on the approved missed-call page as a one-time fee, with a mailto/form CTA, and only after HM-03 is unblocked.

---

## Brief 1 — HM-15 (paste this)

```
You are Muse for VilouraAI / Prisqo. Goal: first paying customer. Do only HM-15 in this session (WIP = 1).

Pull origin/main on vilouraai1/prisqo. Read ops/playbooks/muse.md, ops/board/BOARD.md, ops/board/MUSE-PACK.md, ops/marketing/replies-variant-a-1.md, free-check.html, free-check.js, pricing.html, and the homepage checkout section in index.html.

Claim HM-15: move it from Next to Doing in BOARD.md, owner: muse, branch muse-hm-15.

Goal
When someone finishes the free check at https://prisqo.vilouraai.com/free-check (including pre-filled links like /free-check?category=dentist&city=Irving%2C+TX&name=Meridian+Dental&ref=reply), the result must make the $19 AI Visibility Report the obvious, honest next step. This is the page a Variant A "yes" is sent to. Today the paid path is easy to miss because pricing CTAs point at /#check on the homepage and the free result can look like "that's all."

Do
- Live-QA the current free-check flow (name + city still required; category may already exist — do not remove name or city). Note exactly what the result screen says and which CTAs it shows, in ops/replies/HM-15.md.
- Improve the result UI/copy so a first-time visitor understands: this was one question; the $19 report runs 6 buyer-style questions, gives a 0–100 visibility score, shows who AI names instead and which sources it cites, and lists every prompt and answer; it is one-time, no account, no subscription; 14-day refund if the report fails or comes back empty. Those product facts are from live pricing.html as of 2026-11-21 / still on main 2026-11-23. Do not add new claims.
- The primary CTA after a successful result should take them to pay for the $19 report (the existing checkout: /#check or the existing checkout form — do not invent a new Stripe flow or change the checkout form contract). A secondary link to /pricing and to the sample report (/sample/results) is fine if those URLs already exist.
- Prefill checkout fields from the free-check name/city/category when that is already supported; do not break URL prefill (category, city, name) used by the reply kit.
- If the submitted city is not covered (Hark's reply kit already treats Keller and Grapevine this way): do not invent AI answers or silently show another city's list. Show an honest "this city isn't in the free check yet" state and point to /pricing (full report) and /free-seo-audit. Only add a city to the free check if that city+category already has a dated snapshot in data/ai-answers.json. If it does not, leave a leftover note; do not fabricate answers.
- Do not restyle the LP-2 homepage. You may make minimal copy/CTA changes in the checkout section of index.html only if required to keep the result→pay path consistent, and only without breaking the form contract or layout restyle ban.
- Keep data-testid attributes, including sample-preview and home-more if those nodes stay on the page.
- Update sitemap / JSON-LD only if you add or materially change a page. No new URLs unless absolutely necessary; prefer fixing the existing /free-check result.

Acceptance
- /free-check still has fields named name and city, still works with the pre-filled reply-kit query strings, and still returns a truthful result for a covered city.
- After a successful result, a visitor can reach the $19 checkout in one obvious click, with no new price, no new Stripe product, and the checkout form contract unchanged (ids domain, category, cats, city, brand; action="#"; method="post"; notice and links intact).
- Uncovered cities get an honest fallback, not a fake list.
- 14-day refund line still present on the paid path.
- ops/replies/HM-15.md describes before/after, lists files changed, and ends with ## Summary and DONE.
- One non-draft PR, comment ready, do not deploy.

Hard rules: free only, $0, no paid APIs, never touch prisqo-report-engine or Stripe, never send or post. No invented stats or testimonials. Do not restyle the LP-2 homepage. Keep existing URLs. Contact remains vilouraai1@gmail.com.
```

---

## Brief 2 — HM-16 (paste this)

```
You are Muse for VilouraAI / Prisqo. Goal: first paying customer. Do only HM-16 in this session (WIP = 1).

Pull origin/main on vilouraai1/prisqo. Read ops/playbooks/muse.md, ops/board/BOARD.md, ops/board/MUSE-PACK.md, pricing.html, faq.html, index.html (checkout / #check only), and ops/marketing/replies-variant-a-1.md (Reply 2 points at https://prisqo.vilouraai.com/pricing?ref=reply).

Claim HM-16: move it from Next to Doing, owner: muse, branch muse-hm-16.

Goal
Make https://prisqo.vilouraai.com/pricing and the path from that page to paying unmistakable, especially on mobile and when the visitor arrived from an email reply. The live page already states "$19, one-time", lists what is in the report, and has a 14-day refund FAQ. The weak point is the hop: the main button is "Get my report ($19)" → /#check on the LP-2 homepage. A warm lead who asked "what do you charge?" should not have to hunt for the form or confuse the free check with the paid report.

Do
- Live-QA /pricing, /pricing?ref=reply, /faq, and /#check. Record in ops/replies/HM-16.md what is unclear (competing CTAs, free vs paid confusion, mobile fold, missing "what happens after I pay", etc.).
- Tighten pricing.html copy and hierarchy only. Keep the $19 one-time price, the plan card (data-testid="plan-single" must stay), the existing FAQ facts, the 14-day refund line, the sample-report link, and the agencies note. Do not add plans, testimonials, or a $49 price on this page.
- Make the distinction from the free check explicit and short: the free check is one question and no charge; the report is $19 once and runs six questions plus score, competitors, sources, and full prompts/answers. Facts from live pricing.html only.
- The primary CTA may still go to the existing checkout at /#check, or to the existing checkout form if it can be reached without a new URL and without changing the form contract. Do not restyle the LP-2 homepage. If /#check is retained, make it obvious on /pricing what the visitor will see next ("you'll enter your business on the next screen and pay $19 once").
- Optionally add one short "after you pay" step (report runs on the same page in a few minutes; stay until it finishes; bookmark the address) — this is already in the pricing FAQ; surface it near the CTA if it is currently easy to miss.
- Keep Product / Offer / FAQ JSON-LD in sync with visible copy. Price stays "19" USD. Do not mark $49 here.
- Do not change checkout form ids, names, action="#", method="post", notice, or links.

Acceptance
- /pricing still 200, canonical https://prisqo.vilouraai.com/pricing, $19 one-time is the only price, 14-day refund remains, data-testid="plan-single" remains.
- A first-time reader can tell free check vs $19 report apart in one screen, and the primary CTA's destination is obvious.
- Checkout form contract unchanged. LP-2 homepage not restyled. No new Stripe price. No invented stats.
- ops/replies/HM-16.md ends with ## Summary and DONE. One non-draft PR, comment ready, do not deploy.

Hard rules: free only, $0, no paid APIs, never touch prisqo-report-engine or Stripe, never send or post. No invented stats or testimonials. Do not restyle the LP-2 homepage. Keep existing URLs. Contact remains vilouraai1@gmail.com.
```

---

## Brief 3 — HM-17 (paste this)

```
You are Muse for VilouraAI / Prisqo. Goal: first paying customer. Do only HM-17 in this session (WIP = 1).

Pull origin/main on vilouraai1/prisqo. Read ops/playbooks/muse.md, ops/board/BOARD.md, ops/board/MUSE-PACK.md, ops/marketing/replies-variant-a-1.md, ops/research/reply-autopsy.md §5, free-check.html, free-check.js, free-seo-audit.html, pricing.html, index.html.

Claim HM-17: move it from Next to Doing, owner: muse, branch muse-hm-17.

Goal
Build a reply-to-report fulfilment path for people who just said "yes" (or asked the price) in email. Do not create a new public marketing campaign. Prefer enhancing existing URLs over adding a new one.

Context
- Reply 1 (no price) sends covered-city leads to a pre-filled /free-check?...&ref=reply and sends Keller / Grapevine leads to /free-seo-audit?ref=reply.
- Reply 2 (only if they ask how to fix it / what it costs) sends them to /pricing?ref=reply.
- The free check does not cover every DFW city used in the 15 Variant A drafts.

Do
- Detect ref=reply (and keep it through the free-check → pricing → checkout path if you can do so without changing the checkout form contract).
- When ref=reply is present, show a short, honest banner or intro: they already received one dated Gemini list by email; the free check shows that same one-question view; the $19 report is the full six-question check. Do not claim the email list and the live check will always match in the future (answers change; the reply kit already says this).
- On /free-seo-audit?ref=reply, add a clear next step to the $19 report / /pricing, without turning the audit page into a hard sell or adding prices that are not the live $19 offer.
- If you believe a thin dedicated page is cleaner than banners, you may add exactly one URL, /get-report, that only explains the fulfilment path and links to existing /free-check, /pricing, and /#check. If you add it: put it in the sitemap, give it a title and description, noindex is not allowed (this should be findable by the people we send), and do not replace existing URLs. Prefer not adding it if the existing pages can carry the path.
- Do not put a price in any component that would be reached from Reply 1's free-check link in a way that breaks the "no price in Reply 1" rule by surprising them with a pitch before they have seen the free result. Show the $19 offer after the free result, or on /pricing and /free-seo-audit.
- No new Stripe price. No LP-2 restyle. No field or testid or checkout-contract changes.

Acceptance
- Visiting the exact Reply 1 and Reply 2 URLs from ops/marketing/replies-variant-a-1.md still works.
- A ref=reply visitor can go from free result (or audit) to the $19 checkout without confusion, with truthful copy only.
- Keller/Grapevine (and any other uncovered city) are not shown a fake free-check list.
- If /get-report is added, it is in the sitemap, uses existing checkout, and does not 404.
- ops/replies/HM-17.md ends with ## Summary and DONE. One non-draft PR, comment ready, do not deploy.

Hard rules: free only, $0, no paid APIs, never touch prisqo-report-engine or Stripe, never send or post. No invented stats or testimonials. Do not restyle the LP-2 homepage. Keep existing URLs unless you add the single optional /get-report page above. Contact remains vilouraai1@gmail.com.
```

---

## Brief 4 — HM-18 (paste this)

```
You are Muse for VilouraAI / Prisqo. Goal: first paying customer. Do only HM-18 in this session (WIP = 1).

Pull origin/main on vilouraai1/prisqo. Read ops/playbooks/muse.md, ops/board/BOARD.md, ops/board/MUSE-PACK.md, sitemap.xml, and the existing industry/city/guide pages under /ai-visibility/ and /guides/, especially dental, chiropractic, med spa, and home-service pages that match current outreach.

Claim HM-18: move it from Next to Doing, owner: muse, branch muse-hm-18.

Goal
Existing SEO pages should give a ready visitor a truthful path to the free check and the $19 report. Do not chase generic new-page volume. Do not invent research or traffic numbers.

Do
- Audit CTAs on the money-adjacent guides and industry pages (start with: /guides/ai-visibility-for-dentists, /guides/ai-visibility-for-med-spas, /guides/ai-visibility-for-home-services, /guides/what-is-ai-visibility, /guides/does-chatgpt-recommend-my-business, /guides/how-to-check-if-chatgpt-recommends-you, /ai-visibility/dentists, /ai-visibility/chiropractors, /ai-visibility/med-spas, and the DFW-related city pages if present). List current CTAs in ops/replies/HM-18.md.
- Where a page has no clear next step, or points at a dead or vague target, add a consistent, short CTA: free check at /free-check, full report $19 one-time at /pricing. Use only facts already on /pricing. No "we'll get you recommended" or lead/revenue promises.
- Fix any dead money-path links you find on those pages. Do not revive the old vilouraai.com/#contact stopgap (vilouraai.com/pricing is live). Do not restyle the LP-2 homepage.
- Keep existing URLs. Do not mass-rewrite body copy. Do not add new industry or city pages in this item.
- Keep JSON-LD / internal links valid. No new 404s. Titles and descriptions may be tightened only if they are inaccurate or omit a needed CTA; do not stuff keywords.

Acceptance
- The audited priority pages each have at least one truthful CTA to /free-check and/or /pricing.
- Zero new 404s. Existing URLs unchanged. No invented stats or testimonials. Checkout and /free-check contracts untouched.
- ops/replies/HM-18.md includes the before/after CTA table and ends with ## Summary and DONE.
- One non-draft PR, comment ready, do not deploy.

Hard rules: free only, $0, no paid APIs, never touch prisqo-report-engine or Stripe, never send or post. No invented stats or testimonials. Do not restyle the LP-2 homepage. Keep existing URLs. Contact remains vilouraai1@gmail.com.
```

---

## Brief 5 — HM-19 (paste this)

```
You are Muse for VilouraAI / Prisqo. Goal: first paying customer. Do only HM-19 in this session (WIP = 1).

Pull origin/main on vilouraai1/prisqo. Read ops/playbooks/muse.md, ops/board/BOARD.md, ops/board/MUSE-PACK.md, ops/replies/HM-06.md §8, ops/replies/muse-seo-3.md, sitemap.xml, _headers if present, llms.txt or equivalent if present, and the live money pages.

Claim HM-19: move it from Next to Doing, owner: muse, branch muse-hm-19.

Goal
Clear the precise leftovers from HM-06 that still hurt discovery or durability of the money path. Search Console baseline stated in the muse-seo-3 brief (Nov 19, 2026) was 0 indexed pages / 0 impressions; METRICS still has no newer confirmed count. Getting / , /pricing, /free-check, and /faq actually indexed and fast matters more than adding pages.

Leftovers already written in ops/replies/HM-06.md §8 (do not treat as done unless you re-verify):
- Live-only binaries not in the repo: /apple-icon.png, the Inter woff2 chunk font, and the compressed /opengraph-image.png swap (live file was still the original 194,679-byte image as of Nov 21). Add what can be added from the live site or leave a precise leftover if you cannot obtain the files without a paid tool.
- CF_BEACON_TOKEN is still a literal placeholder in pages (pre-existing). Do not invent a token. Do not print secrets. You may note it; only change it if a non-secret, already-approved repo pattern exists. When in doubt, leave it and list it as leftover.
- _headers CSP form-action 'self' may block the /free-seo-audit FormSubmit POST. Diagnose and, if true, fix in a way that does not open form-action to the world and does not touch the engine or Stripe. If you cannot safely test a live submission, document the risk and the proposed header change; do not submit the form to a real inbox as a "test" unless the brief's acceptance allows a same-site dry check.
- No new Search Console numbers unless you can read them from a repo file or a source Jilsha already connected; otherwise write "unknown" and make the site itself easier to index (accurate titles, canonical, sitemap, internal links, no accidental noindex on money pages).

Also do, if they are small enough to fit this PR without a new page program:
- Money-page performance: font-display, oversized OG image, unused third-party, obvious render-blocking on / , /pricing, /free-check. Measure with free tools only (browser, curl, or already-installed Lighthouse). Report numbers you actually measured, with date and URL. Do not invent Core Web Vitals.
- Confirm money pages are in sitemap.xml, have canonicals, are indexable (noindex only on 404.html, sample/weekly-report.html, success.html — already correct per HM-06), and have valid JSON-LD (do not add Review/AggregateRating).
- www vs apex: if prisqo is already on prisqo.vilouraai.com with no www host, do not invent a redirect project. If you find a real www/apex split on vilouraai.com or prisqo that causes duplicate URLs, document it; implement a 301 only if it is a site-level _headers or redirect change on the prisqo site Worker and does not require touching prisqo-report-engine or Cloudflare account settings you cannot safely edit. When in doubt, write the leftover, do not change DNS.

Do not restyle LP-2. Do not change /free-check fields, data-testids, or the checkout form contract. Do not deploy.

Acceptance
- Each HM-06 §8 leftover is either fixed or re-stated with evidence in ops/replies/HM-19.md.
- Money pages remain 200, indexable, in the sitemap, with valid JSON-LD and unchanged frozen contracts.
- Any performance number has a date, URL, and method. No invented traffic or speed scores.
- ops/replies/HM-19.md ends with ## Summary and DONE. One non-draft PR, comment ready, do not deploy.

Hard rules: free only, $0, no paid APIs, never touch prisqo-report-engine or Stripe, never send or post. No invented stats or testimonials. Do not restyle the LP-2 homepage. Keep existing URLs. Never print keys. Contact remains vilouraai1@gmail.com.
```

---

## Brief 6 — HM-10 Muse half (paste this only after pri-0 items, or if Jilsha explicitly wants the retro now)

```
You are Muse for VilouraAI / Prisqo. Goal: first paying customer. Do only the Muse half of HM-10 in this session (WIP = 1). Do not skip this in favor of a second site item, and do not start this if a pri-0 Muse item is still the top unblocked Next row — unless Jilsha pastes this brief anyway.

Pull origin/main on vilouraai1/prisqo. Read ops/playbooks/muse.md, ops/board/BOARD.md, ops/board/METRICS.md, ops/board/MUSE-PACK.md, ops/replies/HM-06.md, and ops/kiwi-handoff.md hard rules. Hark's retro PR #58 is merged. Read the muse_half / hark_half notes and ops/replies/HM-10.md so you do not overwrite Hark's playbook.

Claim the Muse half: branch muse-retro-2026-11-23. Edit only ops/playbooks/muse.md (plus BOARD notes for muse_half, one METRICS experiment row, and ops/replies/HM-10-muse.md or an appended Muse section in ops/replies/HM-10.md if that file is already on main). Do not edit ops/playbooks/hark.md. Do not weaken hard rules.

Required outputs
1. Playbook edit: one process-change line with evidence (for example: always leave precise leftovers, as HM-06 did; or always verify live money-path contracts before commenting ready). Add a Never-again line only with evidence.
2. Exactly one experiment, Muse-lane, site/conversion only. Suggested default, which you may tighten but not replace with a vague SEO volume test:
   - ID: EXP-M1
   - Hypothesis: making the $19 report the primary CTA on the free-check result (HM-15) will produce at least one paid checkout, or at least one recorded "clicked through to checkout" event Jilsha can confirm, within 7 days of HM-15 going live, if any Variant A yes-replies or direct visitors hit /free-check in that window.
   - One change: the result-screen CTA (already specified in HM-15). Do not add a second change.
   - Metric: paid (from Jilsha / METRICS) or a confirmed checkout start she reports. Do not invent analytics.
   - Threshold: 1 paid = keep the CTA pattern as default; 0 paid and 0 confirmed checkout starts in a window where the page had traffic she can confirm = inconclusive, do not kill the money-path work; kill only a specific copy variant if it clearly confuses free vs paid.
   - Window: 7 days after HM-15 is live.
   - If no visitor reached the page in the window, result is "no data," not a kill.
3. Append a METRICS Experiments row for EXP-M1. Do not change sent/replies/paid totals.
4. Kill/keep notes: the old cold-email formula is already killed by Hark — do not re-litigate it in the Muse playbook. The $49 missed-call test has no calls and no result emails as of 2026-11-23; Muse kill/keep on that offer is "no data, page not built (HM-03 still blocked)."
5. Mark muse_half done on the HM-10 board details. Do not move HM-10 to Done until both halves are done.

Hard rules stay untouched. No send, no post, no spend, no engine/Stripe. Comment ready on one non-draft PR. Do not deploy.

End ops/replies/HM-10-muse.md (or the Muse section) with ## Summary and DONE.
```

---

## Brief 7 — HM-03 (paste only after Jilsha names the site and BOARD shows blocked_on: none)

```
You are Muse for VilouraAI / Prisqo. Goal: first paying customer. Do only HM-03 in this session (WIP = 1).

STOP if ops/board/BOARD.md still shows HM-03 blocked_on: jilsha-approve-page. In that case write ops/replies/muse-idle.md explaining you did not build the page, and stop.

If Jilsha has named the site and blocked_on is none, continue.

Pull origin/main. Read ops/playbooks/muse.md, ops/board/BOARD.md, ops/board/MUSE-PACK.md, and the landing copy. The copy lives at missed-call-landing-copy.md when present; as of 2026-11-23 8 PM CT it was not on origin/main under ops/marketing/. If it is still missing, add the approved copy to ops/marketing/missed-call/missed-call-landing-copy.md in this same PR (source: the existing Codex/Kiwi draft used for this offer; do not rewrite claims) and build the page from that file only.

There was no muse-hm-03 branch and no missed-call-check PR on GitHub as of 2026-11-23 8 PM CT. Start fresh on branch muse-hm-03. Do not invent a prior PR to finish.

Site: use the host Jilsha named (prisqo.vilouraai.com in vilouraai1/prisqo, or vilouraai.com in vilouraai1/vilouraai-web). Default if she named prisqo: a new page at /missed-call-check on prisqo. Keep that URL once chosen.

Page rules
- Use only the facts, FAQs, and sourced numbers already in missed-call-landing-copy.md (ADA 30–50% initial contacts, with the ADA URL; BrightLocal 2026 figures with their URLs). Do not add stats, testimonials, local demand estimates, or ranking/lead/revenue promises.
- Headline and scope stay: a one-time missed-call + AI visibility check for dentists, chiropractors and med spas in Lewisville and Denton County.
- Price may appear as a $49 one-time fee on this page only. CTA is mailto:vilouraai@gmail.com (or an existing form). Do not create a Stripe $49 price. Do not add a checkout form for $49.
- Do not touch prisqo-report-engine or Stripe. Do not change /free-check fields, data-testids, or the $19 checkout form contract. Do not restyle the LP-2 homepage. A discreet nav or footer link to the new page is allowed; do not turn the homepage into a missed-call landing.
- Add the page to the sitemap, give it title, description, canonical, and appropriate JSON-LD. Offer schema may state $49 only as an on-page one-time fee, not as a live Stripe product. No Review schema. No 404s. Keep existing URLs.
- Link honestly to /free-check and /pricing ($19 report) so visitors can still buy the live offer, without confusing the two products.

Acceptance
- /missed-call-check (or the approved path on the named site) renders the sourced copy, mailto/form CTA, and $49 as one-time fee only.
- Frozen contracts on the $19 path unchanged. No engine/Stripe changes. No invented stats.
- ops/replies/HM-03.md ends with ## Summary and DONE. One non-draft PR, comment ready, do not deploy.
```

---

## Brief 8 — HM-07 (paste only after HM-03 is merged)

```
You are Muse for VilouraAI / Prisqo. Goal: first paying customer. Do only HM-07 in this session (WIP = 1).

STOP if HM-03 is not merged or the missed-call page is not on main. Write ops/replies/muse-idle.md and stop.

Pull origin/main. Read ops/playbooks/muse.md, ops/board/BOARD.md, the merged HM-03 page, and related dental/chiro/med-spa guides.

Claim HM-07, branch muse-hm-07.

Goal
Make the missed-call page discoverable: sitemap, title/description, JSON-LD, internal links from relevant dental/chiro/med-spa guides. Zero new 404s. No LP-2 restyle, no URL churn, no invented numbers.

Offer schema may state $49 only as an on-page one-time fee, not as a live Stripe product, unless Jilsha has approved Stripe (she has not, as of 2026-11-23). Keep mailto/form CTA. Do not create a Stripe price. Do not touch the engine.

Acceptance
- Page is in the sitemap, indexable, internally linked from at least the relevant existing guides, schema valid, contracts on /free-check and $19 checkout untouched.
- ops/replies/HM-07.md ends with ## Summary and DONE. One non-draft PR, comment ready, do not deploy.

Hard rules: free only, $0, never touch prisqo-report-engine or Stripe, never send or post, no invented stats, keep existing URLs, do not restyle LP-2.
```

---

## Board notes for the kiwi-muse-pack PR

This pack is also saved in the repo as `ops/board/MUSE-PACK.md` on branch `kiwi-muse-pack` (docs-only). That same PR should:

- Move HM-06 from Doing → Done (PR #51 merged 2026-11-21, leftover list in ops/replies/HM-06.md §8).
- Add HM-15, HM-16, HM-17, HM-18, HM-19 to `## Next` above HM-10, Muse lane, `blocked_on: none`.
- Leave HM-10 in Next (Muse half still open; do not skip pri-0).
- Leave HM-03 and HM-07 blocked.
- Not reuse HM-14 (already on main from PR #58, Hark Variant A read-out).
- Not change METRICS totals.

Copy also kept at `/workspace/hark-muse/muse-pack-2026-11-23.md`.
