# Hark Task 16: Strip leftover weekly-product copy on FAQ and the sample report (Prisqo)
Repo vilouraai1/prisqo. Work on branch `hark-16`, write `ops/replies/hark-16.md` (status, what changed, questions; if you can't write that file, put the same content in the PR body), and open a **non-draft** pull request to main.

Goal: the fastest path to the first paid $19 customer. The site sells one one-time report, but two high-intent pages still talk as if Prisqo tracks "this week". That undercuts trust at the moment someone decides to pay. Fix that copy. Do not add city, industry or guide pages in this task.

Price stays $19 one-time. No engine, Stripe, checkout, or worker changes. No invented stats, testimonials, or new 'weekly' / 'coming soon' / monitoring claims. No new offers, discounts or free checks. Leave refund wording as it is. Muse is editing the homepage, /press, /compare, compare/* and best/* pages in parallel; do not touch those. Do not change the `CF_BEACON_TOKEN` placeholder (analytics stays a later, approved settings change). Keep the city footer at most 8 links, including `/ai-visibility/`.

## A. `faq.html`
1. In the "What Prisqo measures (and what it doesn't)" section, replace "we track trends week to week rather than trusting any single answer" with wording that fits a one-time report: we show the exact questions and answers so you can check them, and no single answer should be read as a final verdict. If that sentence also appears in JSON-LD, update it to match.
2. Rewrite the heading "Why 'what changed this week' beats a dashboard you never open" and its body so it argues for a simple one-time $19 report versus a marketing-team dashboard. Do not promise weekly tracking, weekly emails, a weekly digest, or "what changed this week". Keep the existing competitor price citations and their source links as they are. Replace "one fix per week" with wording that does not imply a weekly product (for example, the report gives you one clear next step). Replace "For now, run a paid check and open the sample report." with a direct "Get my report ($19)" CTA to `/#check` and a link to `/sample/results`.
3. If any visible FAQ question or answer changes, update the matching FAQPage JSON-LD so it still matches the on-page FAQ.

## B. `sample/results.html`
4. Remove or replace the "Week of 2026-11-02" label so the sample is clearly one check / one report, not a weekly snapshot. Do not invent a new date or any new numbers. Keep the existing sample figures (including 83 / 100 and 5 / 6) and the fictional Smith Family Dental example exactly as they are, aside from dropping the weekly framing.

## Files Hark may touch
Only `faq.html`, `sample/results.html`, and `ops/replies/hark-16.md`.

Do **not** touch: `index.html`, `press.html`, `compare.html`, anything under `compare/` or `best/`, `README.md`, `prisqo-check.js`, `prisqo-site-worker.js`, `engine/`, `robots.txt`, `_headers`, `sitemap.xml`, any image/PNG assets, or any other HTML page (including `sample/weekly-report.html` and everything under `guides/` or `ai-visibility/`).

## Acceptance (QA is done by Kiwi's agents)
- Only the allowed files changed (plus `ops/replies/hark-16.md`). Non-draft PR from branch `hark-16`.
- `faq.html` and `sample/results.html` no longer contain "week to week", "what changed this week", "one fix per week", or "Week of".
- Both pages still have a `/#check` "Get my report ($19)" CTA and a link to `/sample/results` (the sample page may link to itself; that is fine). Canonicals, titles and meta stay unique and unchanged except where the rewritten body requires a wording fix; do not change page titles or canonical URLs.
- FAQPage JSON-LD still parses (python json.loads) and its questions/answers match the visible FAQ on `faq.html`. All JSON-LD on the two pages parses.
- Refund wording is unchanged. No new figures, testimonials, offers, or weekly/monitoring/coming-soon claims. Existing competitor prices and source links on the FAQ page stay as they are.
