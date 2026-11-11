# Hark Task 14: trim the city footer, 3 buyer-intent guides, 3 industries, 6 city pages (Prisqo)
Repo vilouraai1/prisqo. Work on branch `hark-14`, write `ops/replies/hark-14.md` (status, what changed, questions; if you can't write that file, put the same content in the PR body), and open a **non-draft** pull request to main.

Goal: the fastest path to the first paid $19 customer. Catch owners searching how AI tools pick businesses and land every one of them on "Get my report ($19)".

Price stays $19 one-time. No engine, Stripe, checkout, or worker changes. No invented stats, testimonials, or 'weekly' / 'coming soon' / monitoring claims. No new offers, discounts or free checks. Leave refund wording as it is. Muse is editing the homepage, /press, /compare, compare/* and best/* pages in parallel; do not touch those. Answers to your hark-13 questions: keep the existing real-estate pages; yes, trim the city footer (item 1).

## A. Footer trim
1. On every page you're allowed to edit, replace the long "AI visibility by city" footer list with at most 8 links: `/ai-visibility/` ("All industries and cities") plus 7 city pages of your choice spread across different cities. Keep the "AI visibility by industry" footer list as is (add the 3 new industries below). The hub `ai-visibility/index.html` keeps listing every city page.

## B. 3 new guides (under `guides/`)
2. `guides/ai-visibility-for-dentists.html`: how patients ask AI tools for a dentist (service, insurance, city, emergency), what tends to get cited (service pages, reviews, Google Business Profile, directory profiles), links `/ai-visibility/dentists` and 2 other guides.
3. `guides/ai-visibility-for-med-spas.html`: how clients ask for treatments by name and city, what tends to get cited (treatment pages, provider bios, reviews), links `/ai-visibility/med-spas` and 2 other guides.
4. `guides/ai-visibility-for-home-services.html`: plumbers, HVAC, electricians, roofers and similar; how homeowners ask (urgent repair, service area, licensed/insured), what tends to get cited, links `/ai-visibility/plumbers`, `/ai-visibility/hvac` and 2 other guides.
Each guide: same layout as the existing guides (e.g. `guides/ai-visibility-for-law-firms.html`), hero + end CTA "Get my report ($19)" → `/#check`, trust strip `14-day refund · One-time charge · Report ready in minutes`, sample tile → `/sample/results`, FAQ (3–4 Qs) + matching FAQPage JSON-LD, breadcrumb JSON-LD (Home → Guides `/guides/` → page), unique title/description/canonical/OG/Twitter, 2–3 related-guide links plus `/ai-visibility/`. No invented stats.

## C. 3 new industry pages
5. `ai-visibility/massage-therapists.html`, `ai-visibility/tutors.html`, `ai-visibility/locksmiths.html`, with the exact layout of the existing industry pages (e.g. `ai-visibility/daycares.html`). Industry-specific copy, no invented stats.

## D. 6 city pages
6. Same layout as existing city pages, all in `ai-visibility/`: `massage-therapists-austin`, `massage-therapists-denver`, `tutors-houston`, `tutors-chicago`, `locksmiths-dallas`, `locksmiths-phoenix`. City-specific copy, no invented local stats.

## E. Links
7. Add all 12 new pages to `sitemap.xml`. Add the 3 guides to `guides/index.html` and to the related-guide lists you're allowed to edit. Add the 3 industries + 6 city pages to `ai-visibility/index.html` (city pages under their industry), to each industry's "Local pages" list, and the 3 industries to the "AI visibility by industry" footer list.

## Files Hark may touch
Create: the 12 new pages above. Edit: `sitemap.xml`, `for-agencies.html` (link lists only), `ai-visibility/index.html`, `guides/index.html`, and only footer/breadcrumb/"Local pages"/related-guide link lists on the existing pages under `ai-visibility/` and `guides/`, plus `pricing.html`, `faq.html`, `success.html`, `contact.html`, `404.html`, `privacy.html`, `terms.html`, `sample/results.html`, `sample/weekly-report.html`.

Do **not** touch: `index.html`, `press.html`, `compare.html`, anything under `compare/` or `best/`, `README.md`, `prisqo-check.js`, `prisqo-site-worker.js`, `engine/`, `robots.txt`, `_headers`, or any image/PNG assets. Keep any `best/` or `compare/` URLs Muse has added to `sitemap.xml`.

## Acceptance (QA is done by Kiwi's agents)
- All 12 new pages return 200 at their clean URL, are in the sitemap, carry a `/#check` "Get my report ($19)" CTA + `/sample/results` link and FAQPage JSON-LD matching the visible FAQ; hubs list every existing industry, city and guide page; each city page is in its industry page's Local pages list; the city footer on edited pages has at most 8 links including `/ai-visibility/`; all titles site-wide stay unique; canonicals match their own path; all JSON-LD parses; no new broken internal links.
- No new figures beyond `/sample/results`, `$19`, `14-day`; refund wording unchanged. Only the allowed files changed (plus `ops/replies/hark-14.md`). Non-draft PR from branch `hark-14`.
