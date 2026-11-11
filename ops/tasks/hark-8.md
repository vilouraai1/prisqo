# Hark Task 8: industry + guides hub pages, 4 more industries, 8 city pages (Prisqo)
Repo vilouraai1/prisqo. Work on branch `hark-8`, write `ops/replies/hark-8.md` (status, what changed, questions; if you can't write that file, put the same content in the PR body), and open a **non-draft** pull request to main.

Goal: the fastest path to the first paid $19 customer. Search visitors who land on any local page should find their own industry/city in one click and end on "Get my report ($19)". Hub pages also help Google find all 76+ pages.

Price stays $19 one-time. No engine, Stripe, checkout, or worker changes. No invented stats, testimonials, or 'weekly' / 'coming soon' / monitoring claims. Leave refund wording as it is. Muse is editing the homepage, /press, /compare, compare/* and new best/* pages in parallel; do not touch those.

## A. Two hub pages
1. `ai-visibility/index.html` (served at `/ai-visibility/`): short intro, a `/#check` "Get my report ($19)" CTA, trust strip `14-day refund · One-time charge · Report ready in minutes`, then every industry page with its city pages listed under it (all existing ones plus the new ones from B and C). Unique title/description/canonical (`https://prisqo.vilouraai.com/ai-visibility/`)/OG/Twitter, breadcrumb JSON-LD, link to `/sample/results`.
2. `guides/index.html` (served at `/guides/`): same pattern, listing all 5 guides with a one-line summary each, CTA, breadcrumb JSON-LD, canonical `https://prisqo.vilouraai.com/guides/`.

## B. 4 new industry pages
3. `ai-visibility/electricians.html`, `ai-visibility/landscapers.html`, `ai-visibility/pest-control.html`, `ai-visibility/auto-repair.html`, with the exact layout of the existing industry pages (e.g. `ai-visibility/hvac.html`): hero CTA → `/#check`, trust strip, sample tile, 3 example buyer questions, what AI tends to cite, 3 fixes, FAQ + FAQPage JSON-LD, unique title/description/canonical/OG/Twitter, a "Local pages" list, link to `/sample/results`. Industry-specific copy, no invented stats.

## C. 8 city pages for them
4. Same layout as existing city pages, all in `ai-visibility/`: `electricians-houston`, `electricians-dallas`, `landscapers-austin`, `landscapers-phoenix`, `pest-control-houston`, `pest-control-san-antonio`, `auto-repair-dallas`, `auto-repair-chicago`. City-specific copy, no invented local stats.
5. Add every new page (14) to `sitemap.xml`. List each city page in its industry page's "Local pages" list. Add the 4 industries plus "All industries" (`/ai-visibility/`) and "All guides" (`/guides/`) to the "AI visibility by industry" footer list, and the 8 city pages to the "AI visibility by city" footer list, on every page you're allowed to edit that carries those lists. Add a breadcrumb link to `/ai-visibility/` on industry and city pages if their breadcrumb has a spot for it.

## Files Hark may touch
Create: the 14 new pages above. Edit: `sitemap.xml`, and only footer/breadcrumb/"Local pages" link lists on the existing industry and city pages under `ai-visibility/`, the guides, `pricing.html`, `faq.html`, `success.html`, `contact.html`, `404.html`, `privacy.html`, `terms.html`, `sample/results.html`, `sample/weekly-report.html`, `for-agencies.html`.

Do **not** touch: `index.html`, `press.html`, `compare.html`, anything under `compare/` or `best/`, `README.md`, `prisqo-check.js`, `prisqo-site-worker.js`, `engine/`, `robots.txt`, `_headers`, or any image/PNG assets.

## Acceptance (QA is done by Kiwi's agents)
- All 14 new pages return 200 at their clean URL (`/ai-visibility/`, `/guides/`, `/ai-visibility/<slug>`), are in the sitemap, carry a `/#check` CTA + `/sample/results` link; the 12 industry/city pages have FAQPage JSON-LD matching the visible FAQ; the hubs list every existing industry, city and guide page; each city page is in its industry page's Local pages list; all titles site-wide stay unique; canonicals match their own path; all JSON-LD parses; no new broken internal links.
- No new figures beyond `/sample/results`, `$19`, `14-day`; refund wording unchanged. Only the allowed files changed (plus `ops/replies/hark-8.md`). Non-draft PR from branch `hark-8`.
