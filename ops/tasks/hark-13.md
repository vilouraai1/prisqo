# Hark Task 13: 3 buyer-intent guides, 4 more industries, 8 city pages (Prisqo)
Repo vilouraai1/prisqo. Work on branch `hark-13`, write `ops/replies/hark-13.md` (status, what changed, questions; if you can't write that file, put the same content in the PR body), and open a **non-draft** pull request to main.

Goal: the fastest path to the first paid $19 customer. Catch owners searching how AI tools pick businesses and land every one of them on "Get my report ($19)".

Price stays $19 one-time. No engine, Stripe, checkout, or worker changes. No invented stats, testimonials, or 'weekly' / 'coming soon' / monitoring claims. No new offers, discounts or free checks. Leave refund wording as it is. Muse is editing the homepage, /press, /compare, compare/* and best/* pages in parallel; do not touch those.

## A. 3 new guides (under `guides/`)
1. `guides/chatgpt-has-wrong-info-about-my-business.html`: what an owner can do when ChatGPT/Perplexity/Gemini show an old address, wrong hours or a closed location (fix the website, Google Business Profile and main listings so they agree), and how the $19 report shows what AI tools say about them today (link `/sample/results`), CTA → `/#check`.
2. `guides/ai-visibility-for-restaurants.html`: how diners ask AI tools for places to eat, what tends to get cited (menus on the site, reviews, local food lists), links to `/ai-visibility/restaurants` and 2 other guides.
3. `guides/ai-visibility-for-law-firms.html`: how people ask AI tools for a lawyer by practice area and city, what tends to get cited (practice-area pages, attorney bios, reviews, directory profiles), links to `/ai-visibility/lawyers` and 2 other guides.
Each guide: same layout as the existing guides (e.g. `guides/what-is-ai-visibility.html`), hero + end CTA "Get my report ($19)" → `/#check`, trust strip `14-day refund · One-time charge · Report ready in minutes`, sample tile → `/sample/results`, FAQ (3–4 Qs) + matching FAQPage JSON-LD, breadcrumb JSON-LD (Home → Guides `/guides/` → page), unique title/description/canonical/OG/Twitter, 2–3 related-guide links plus `/ai-visibility/`. No invented stats.

## B. 4 new industry pages
4. `ai-visibility/real-estate-agents.html`, `ai-visibility/mortgage-brokers.html`, `ai-visibility/interior-designers.html`, `ai-visibility/daycares.html`, with the exact layout of the existing industry pages (e.g. `ai-visibility/movers.html`): hero CTA → `/#check`, trust strip, sample tile, breadcrumb to `/ai-visibility/`, 3 example buyer questions, what AI tends to cite, 3 fixes, "Local pages" list, FAQ + FAQPage JSON-LD, unique title/description/canonical/OG/Twitter. Industry-specific copy, no invented stats.

## C. 8 city pages
5. Same layout as existing city pages, all in `ai-visibility/`: `real-estate-agents-austin`, `real-estate-agents-dallas`, `mortgage-brokers-houston`, `mortgage-brokers-phoenix`, `interior-designers-chicago`, `interior-designers-denver`, `daycares-austin`, `daycares-san-antonio`. City-specific copy, no invented local stats.

## D. Links
6. Add all 15 new pages to `sitemap.xml`. Add the 3 guides to `guides/index.html` (one-line summary each) and to the related-guide lists you're allowed to edit. Add the 4 industries + 8 city pages to `ai-visibility/index.html` (city pages under their industry), to each industry's "Local pages" list, and to the "AI visibility by industry" / "AI visibility by city" footer lists on every page you're allowed to edit that carries them.

## Files Hark may touch
Create: the 15 new pages above. Edit: `sitemap.xml`, `for-agencies.html` (link lists only), `ai-visibility/index.html`, `guides/index.html`, and only footer/breadcrumb/"Local pages"/related-guide link lists on the existing pages under `ai-visibility/` and `guides/`, plus `pricing.html`, `faq.html`, `success.html`, `contact.html`, `404.html`, `privacy.html`, `terms.html`, `sample/results.html`, `sample/weekly-report.html`.

Do **not** touch: `index.html`, `press.html`, `compare.html`, anything under `compare/` or `best/`, `README.md`, `prisqo-check.js`, `prisqo-site-worker.js`, `engine/`, `robots.txt`, `_headers`, or any image/PNG assets. Keep any `best/` or `compare/` URLs Muse has added to `sitemap.xml`.

## Acceptance (QA is done by Kiwi's agents)
- All 15 new pages return 200 at their clean URL, are in the sitemap, carry a `/#check` "Get my report ($19)" CTA + `/sample/results` link and FAQPage JSON-LD matching the visible FAQ; hubs list every existing industry, city and guide page; each city page is in its industry page's Local pages list; all titles site-wide stay unique; canonicals match their own path; all JSON-LD parses; no new broken internal links.
- No new figures beyond `/sample/results`, `$19`, `14-day`; refund wording unchanged. Only the allowed files changed (plus `ops/replies/hark-13.md`). Non-draft PR from branch `hark-13`.
