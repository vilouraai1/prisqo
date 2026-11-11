# Hark Task 7: 4 new industry pages + 8 city pages for them (Prisqo)
Repo vilouraai1/prisqo. Work on branch `hark-7`, write `ops/replies/hark-7.md` (status, what changed, questions; if you can't write that file, put the same content in the PR body), and open a **non-draft** pull request to main.

Goal: the fastest path to the first paid $19 customer. Local service businesses with high-ticket jobs are the likeliest buyers, so give four more of them a page that ends in "Get my report ($19)".

Price stays $19 one-time. No engine, Stripe, checkout, or worker changes. No invented stats, testimonials, or 'weekly' / 'coming soon' / monitoring claims. Leave refund wording as it is. Muse is editing /press, /compare, and the homepage in parallel; do not touch those.

## A. 4 new industry pages
1. Create `ai-visibility/hvac.html`, `ai-visibility/roofers.html`, `ai-visibility/chiropractors.html`, `ai-visibility/accountants.html` with the exact layout of the existing industry pages (e.g. `ai-visibility/plumbers.html`): hero CTA → `/#check`, trust strip, sample tile, 3 example buyer questions, what AI tends to cite, 3 fixes, FAQ + FAQPage JSON-LD, unique title/description/canonical/OG/Twitter, a "Local pages" list, link to `/sample/results`. Industry-specific copy, no invented stats.

## B. 8 city pages for them
2. Same layout as existing city pages: `hvac-austin`, `hvac-dallas`, `roofers-houston`, `roofers-dallas`, `chiropractors-austin`, `chiropractors-chicago`, `accountants-houston`, `accountants-phoenix` (all in `ai-visibility/`). City-specific copy, no invented local stats.
3. Add every new page (12) to `sitemap.xml`. List each city page in its industry page's "Local pages" list. Add the 4 industries to the "AI visibility by industry" footer list, and the 8 city pages to the "AI visibility by city" footer list, on every page you're allowed to edit that carries those lists.

## Files Hark may touch
Create: the 12 new pages above. Edit: `sitemap.xml`, and only footer industry/city link lists on the existing industry and city pages under `ai-visibility/`, the guides, `pricing.html`, `faq.html`, `success.html`, `contact.html`, `404.html`, `privacy.html`, `terms.html`, `sample/results.html`, `sample/weekly-report.html`, `for-agencies.html`.

Do **not** touch: `index.html`, `press.html`, `compare.html`, anything under `compare/`, `README.md`, `prisqo-check.js`, `prisqo-site-worker.js`, `engine/`, `robots.txt`, `_headers`, or any image/PNG assets.

## Acceptance (QA is done by Kiwi's agents)
- All 12 new pages return 200, are in the sitemap, carry `/#check` CTA + `/sample/results` link + FAQPage JSON-LD matching the visible FAQ; each city page is in its industry page's Local pages list; all titles site-wide stay unique; canonicals match their own path; all JSON-LD parses; no new broken internal links.
- No new figures beyond `/sample/results`, `$19`, `14-day`; refund wording unchanged. Only the allowed files changed (plus `ops/replies/hark-7.md`). Non-draft PR from branch `hark-7`.
