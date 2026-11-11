# Hark Task 17: Keep agencies on the $19 checkout path (Prisqo)
Repo vilouraai1/prisqo. Work on branch `hark-17`, write `ops/replies/hark-17.md` (status, what changed, questions; if you can't write that file, put the same content in the PR body), and open a **non-draft** pull request to main.

Goal: the fastest path to the first paid $19 customer. Agencies are the most likely buyers of more than one report, but `for-agencies.html` currently tells anyone who needs 5 or more reports to email first and "we'll set it up," including asking "how often." That delays a payment we already support: they can buy each report now for $19 at checkout. Fix that copy so the $19 check is the default path. Do not add city, industry or guide pages in this task. Do not invent a volume price, discount, subscription, or new offer.

Price stays $19 one-time. No engine, Stripe, checkout, or worker changes. No invented stats, testimonials, or 'weekly' / 'coming soon' / monitoring claims. No new offers, discounts or free checks. Leave refund wording as it is. Muse is editing the homepage, /press, /compare, compare/* and best/* pages in parallel; do not touch those. Do not change the `CF_BEACON_TOKEN` placeholder (analytics stays a later, approved settings change). Keep the city footer at most 8 links, including `/ai-visibility/`.

## A. `for-agencies.html`
1. Rewrite the "Five or more reports?" block so it does **not** gate purchase on an email. The default next step remains paying $19 per report at `/#check`. Email (`vilouraai1@gmail.com`) may stay as an optional way to ask a question, not as something they must do before buying.
2. Remove "how often" and "We will set it up with you directly." Those imply a custom or recurring setup that is not for sale. Do not replace them with a weekly, monthly, or bulk plan.
3. Keep the existing 3-step flow, trust strip, sample-report link, `/guides/ai-visibility-for-agencies` link if present, FAQ, and every `/#check` "Get my report ($19)" / "Run a check for a client ($19)" CTA. If a visible FAQ answer mentions the 5+ email-first flow, update that answer and the matching FAQPage JSON-LD so they still match.

## B. `pricing.html` (link-list / short copy only if needed)
4. The line "Running checks for several clients? Email vilouraai1@gmail.com" may stay only if it is clearly optional. If a reader could take it as "email us instead of paying," add a few words so the $19 checkout stays the path, and/or add a link to `/for-agencies`. Do not add a new price or plan. If you change any visible FAQ question or answer, update the matching FAQPage JSON-LD. If the line is already clearly optional, you may leave `pricing.html` unchanged.

## Files Hark may touch
Only `for-agencies.html`, `pricing.html` (only if step 4 requires it), and `ops/replies/hark-17.md`.

Do **not** touch: `index.html`, `press.html`, `compare.html`, anything under `compare/` or `best/`, `README.md`, `prisqo-check.js`, `prisqo-site-worker.js`, `engine/`, `robots.txt`, `_headers`, `sitemap.xml`, any image/PNG assets, `faq.html`, `sample/results.html`, `sample/weekly-report.html`, or anything under `guides/` or `ai-visibility/`.

## Acceptance (QA is done by Kiwi's agents)
- Only the allowed files changed (plus `ops/replies/hark-17.md`). Non-draft PR from branch `hark-17`.
- `for-agencies.html` no longer tells people to email before buying, and no longer contains "how often" or "We will set it up with you directly."
- Both pages still have a `/#check` CTA that reads "Get my report ($19)" or "Run a check for a client ($19)". `for-agencies.html` still links to `/sample/results`. Canonicals, titles and meta stay unique and unchanged; do not change page titles or canonical URLs.
- All JSON-LD on the touched pages parses (python json.loads). If FAQ copy changed, FAQPage JSON-LD questions/answers match the visible FAQ.
- Refund wording is unchanged. No new figures, testimonials, offers, discounts, free checks, or weekly/monitoring/coming-soon claims. `CF_BEACON_TOKEN` is unchanged. City footer still has at most 8 links including `/ai-visibility/`.
