# Hark Task 6: One-time sample cleanup, ecommerce/SaaS local pages, 8 more city pages (Prisqo)
Repo vilouraai1/prisqo. Work on branch `hark-6`, write `ops/replies/hark-6.md` (status, what changed, questions; if you can't write that file, put the same content in the PR body), and open a **non-draft** pull request to main.

Goal: the fastest path to the first paid $19 customer. Nothing on the site should describe a product we don't sell, and more local searchers should land on pages that end in "Get my report ($19)".

Price stays $19 one-time. No engine, Stripe, checkout, or worker changes. No invented stats, testimonials, or 'weekly' / 'coming soon' / monitoring claims. Leave refund wording as it is. Muse is editing /press, /compare, and the homepage in parallel; do not touch those.

## A. sample/weekly-report.html (answers your hark-5 question)
1. Rewrite it as a clearly one-time example report: remove "Preview of a planned weekly email", "last week" / week-over-week comparisons and any trend arrows. Keep only figures that already appear on `/sample/results`. Retitle it (title, h1, meta, OG/Twitter) as an example of the one-time report, keep it noindex and out of the sitemap, and add a hero CTA to `/#check` plus a link to `/sample/results`. Do not delete the file.
2. Grep your allowed files for any link text that calls it a "weekly report" and reword it.

## B. Local pages for the two industries with none
3. Create, with the exact layout of the existing city pages (hero CTA → `/#check`, trust strip, sample tile, FAQ + FAQPage JSON-LD, unique title/description/canonical/OG/Twitter, links to the parent industry page and `/sample/results`), city-specific copy, no invented local stats:
   `ecommerce-austin`, `ecommerce-dallas`, `ecommerce-houston`, `saas-dallas`, `saas-houston`, `saas-denver` (all in `ai-visibility/`).

## C. 8 more city pages
4. Same layout: `dentists-denver` exists, so do `med-spas-chicago`, `med-spas-denver`, `lawyers-denver`, `lawyers-san-antonio`, `plumbers-chicago`, `real-estate-agents-phoenix`, `restaurants-chicago`, `restaurants-phoenix`. Skip any that already exist and say so.
5. Add every new page to `sitemap.xml`, its industry page's "Local pages" list (add one to ecommerce.html and saas.html if missing, same markup as the others), and the "AI visibility by city" footer list on every page you're allowed to edit that carries it.

## Files Hark may touch
Create: the new city pages above. Edit: `sample/weekly-report.html`, `sitemap.xml`, the 8 industry pages (Local pages list + footer city list only), and only footer/city link lists on `pricing.html`, `faq.html`, `success.html`, `contact.html`, `404.html`, `privacy.html`, `terms.html`, `sample/results.html`, `for-agencies.html`, the existing city pages and the guides.

Do **not** touch: `index.html`, `press.html`, `compare.html`, anything under `compare/`, `README.md`, `prisqo-check.js`, `prisqo-site-worker.js`, `engine/`, `robots.txt`, `_headers`, or any image/PNG assets.

## Acceptance (QA is done by Kiwi's agents)
- sample/weekly-report.html has no "weekly email", "last week", "planned", or week-over-week figures; every number on it also appears on sample/results.html; it links `/#check` and `/sample/results` and stays noindex.
- All 14 new city pages return 200, are in the sitemap and their industry page's Local pages list; all titles site-wide stay unique; all JSON-LD parses; no new broken internal links.
- No new figures beyond `/sample/results`; refund wording unchanged. Only the allowed files changed (plus `ops/replies/hark-6.md`). Non-draft PR from branch `hark-6`.
