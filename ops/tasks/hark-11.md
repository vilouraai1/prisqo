# Hark Task 11: 3 buyer-intent guides, 4 more industries, 8 city pages (Prisqo)
Repo vilouraai1/prisqo. Work on branch `hark-11`, write `ops/replies/hark-11.md` (status, what changed, questions; if you can't write that file, put the same content in the PR body), and open a **non-draft** pull request to main.

Goal: the fastest path to the first paid $19 customer. Catch owners searching how AI tools pick businesses and land every one of them on "Get my report ($19)".

Price stays $19 one-time. No engine, Stripe, checkout, or worker changes. No invented stats, testimonials, or 'weekly' / 'coming soon' / monitoring claims. No new offers, discounts or free checks. Leave refund wording as it is. Muse is editing the homepage, /press, /compare, compare/* and best/* pages in parallel; do not touch those.

## A. 3 new guides (under `guides/`)
1. `guides/reviews-and-ai-recommendations.html`: how customer reviews and review sites feed into AI answers, how to ask for reviews that mention service + city, what an owner can check today, CTA → `/#check`.
2. `guides/chatgpt-vs-google-search-for-local-businesses.html`: plain-English differences between a Google results page and an AI answer for a local buyer question, why ranking in one doesn't guarantee the other, link to the checklist guide.
3. `guides/ai-visibility-for-saas.html`: how SaaS buyers ask AI tools for software picks ("best X tool for Y"), what tends to get cited (docs, comparison pages, reviews on software directories), what the $19 report checks (6 buyer-style questions, link to `/sample/results`), links to `/ai-visibility/saas` and 2 other guides.
Each guide: same layout as the existing guides (e.g. `guides/what-is-ai-visibility.html`), hero + end CTA "Get my report ($19)" → `/#check`, trust strip `14-day refund · One-time charge · Report ready in minutes`, sample tile → `/sample/results`, FAQ (3–4 Qs) + matching FAQPage JSON-LD, breadcrumb JSON-LD (Home → Guides `/guides/` → page), unique title/description/canonical/OG/Twitter, 2–3 related-guide links plus `/ai-visibility/`. No invented stats.

## B. 4 new industry pages
4. `ai-visibility/orthodontists.html`, `ai-visibility/optometrists.html`, `ai-visibility/property-managers.html`, `ai-visibility/wedding-photographers.html`, with the exact layout of the existing industry pages (e.g. `ai-visibility/movers.html`): hero CTA → `/#check`, trust strip, sample tile, breadcrumb to `/ai-visibility/`, 3 example buyer questions, what AI tends to cite, 3 fixes, "Local pages" list, FAQ + FAQPage JSON-LD, unique title/description/canonical/OG/Twitter. Industry-specific copy, no invented stats.

## C. 8 city pages
5. Same layout as existing city pages, all in `ai-visibility/`: `orthodontists-houston`, `orthodontists-phoenix`, `optometrists-dallas`, `optometrists-chicago`, `property-managers-austin`, `property-managers-denver`, `wedding-photographers-austin`, `wedding-photographers-san-antonio`. City-specific copy, no invented local stats.

## D. Links
6. Add all 15 new pages to `sitemap.xml`. Add the 3 guides to `guides/index.html` (one-line summary each) and to the related-guide lists you're allowed to edit. Add the 4 industries + 8 city pages to `ai-visibility/index.html` (city pages under their industry), to each industry's "Local pages" list, and to the "AI visibility by industry" / "AI visibility by city" footer lists on every page you're allowed to edit that carries them.

## Files Hark may touch
Create: the 15 new pages above. Edit: `sitemap.xml`, `for-agencies.html` (link lists only), `ai-visibility/index.html`, `guides/index.html`, and only footer/breadcrumb/"Local pages"/related-guide link lists on the existing pages under `ai-visibility/` and `guides/`, plus `pricing.html`, `faq.html`, `success.html`, `contact.html`, `404.html`, `privacy.html`, `terms.html`, `sample/results.html`, `sample/weekly-report.html`.

Do **not** touch: `index.html`, `press.html`, `compare.html`, anything under `compare/` or `best/`, `README.md`, `prisqo-check.js`, `prisqo-site-worker.js`, `engine/`, `robots.txt`, `_headers`, or any image/PNG assets. Keep any `best/` or `compare/` URLs Muse has added to `sitemap.xml`.

## Acceptance (QA is done by Kiwi's agents)
- All 15 new pages return 200 at their clean URL, are in the sitemap, carry a `/#check` "Get my report ($19)" CTA + `/sample/results` link and FAQPage JSON-LD matching the visible FAQ; hubs list every existing industry, city and guide page; each city page is in its industry page's Local pages list; all titles site-wide stay unique; canonicals match their own path; all JSON-LD parses; no new broken internal links.
- No new figures beyond `/sample/results`, `$19`, `14-day`; refund wording unchanged. Only the allowed files changed (plus `ops/replies/hark-11.md`). Non-draft PR from branch `hark-11`.
