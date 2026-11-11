# Hark Task 9: 3 high-intent guides, agency "check a client" section, 4 more industries, 8 city pages (Prisqo)
Repo vilouraai1/prisqo. Work on branch `hark-9`, write `ops/replies/hark-9.md` (status, what changed, questions; if you can't write that file, put the same content in the PR body), and open a **non-draft** pull request to main.

Goal: the fastest path to the first paid $19 customer. Catch people searching the exact problem ("why doesn't ChatGPT mention my business", "how do I show up in Google AI Overviews") and agencies checking a client, and land every one of them on "Get my report ($19)".

Price stays $19 one-time. No engine, Stripe, checkout, or worker changes. No invented stats, testimonials, or 'weekly' / 'coming soon' / monitoring claims. No new offers, discounts or free checks. Leave refund wording as it is. Muse is editing the homepage, /press, /compare, compare/* and new best/* pages in parallel; do not touch those.

## A. 3 new guides (under `guides/`)
1. `guides/why-chatgpt-doesnt-mention-my-business.html`: common reasons a business is missing from AI answers (thin/unclear site copy, few third-party mentions, inconsistent name/address/phone, no reviews or listings AI can cite, blocked crawlers), what to fix first, and "check where you stand" → `/#check`.
2. `guides/show-up-in-google-ai-overviews.html`: how Google AI Overviews pick sources, practical fixes for a small business, link to the checklist guide.
3. `guides/ai-visibility-for-agencies.html`: how an agency can check a client's AI visibility and present it (one $19 report per client business, show the `/sample/results` format), links to `/for-agencies`.
Each guide: same layout as the existing guides (e.g. `guides/does-chatgpt-recommend-my-business.html`), hero + end CTA "Get my report ($19)" → `/#check`, trust strip `14-day refund · One-time charge · Report ready in minutes`, sample tile → `/sample/results`, FAQ (3–4 Qs) + matching FAQPage JSON-LD, breadcrumb JSON-LD (Home → Guides `/guides/` → page), unique title/description/canonical/OG/Twitter, 2–3 links to related guides and to `/ai-visibility/`. No invented stats.

## B. Agency "check a client" section (`for-agencies.html`)
4. Add a short "Check a client in 3 steps" section near the top: 1) enter the client's business name + site at `/#check`, 2) pay $19 one-time, 3) share the report link with the client. Button "Get my report ($19)" → `/#check`, link to `/sample/results` and to the new agency guide. Text only; no bulk pricing, discounts or claims of agency features that don't exist.

## C. 4 new industry pages
5. `ai-visibility/veterinarians.html`, `ai-visibility/hair-salons.html`, `ai-visibility/gyms.html`, `ai-visibility/house-cleaning.html`, with the exact layout of the existing industry pages (e.g. `ai-visibility/electricians.html`): hero CTA → `/#check`, trust strip, sample tile, breadcrumb to `/ai-visibility/`, 3 example buyer questions, what AI tends to cite, 3 fixes, "Local pages" list, FAQ + FAQPage JSON-LD, unique title/description/canonical/OG/Twitter. Industry-specific copy, no invented stats.

## D. 8 city pages
6. Same layout as existing city pages, all in `ai-visibility/`: `veterinarians-austin`, `veterinarians-dallas`, `hair-salons-houston`, `hair-salons-chicago`, `gyms-austin`, `gyms-denver`, `house-cleaning-dallas`, `house-cleaning-phoenix`. City-specific copy, no invented local stats.

## E. Links
7. Add all 15 new pages to `sitemap.xml`. Add the 3 guides to `guides/index.html` (one-line summary each) and to the guides footer/related lists you're allowed to edit. Add the 4 industries + 8 city pages to `ai-visibility/index.html` (city pages under their industry), to each industry's "Local pages" list, and to the "AI visibility by industry" / "AI visibility by city" footer lists on every page you're allowed to edit that carries them.

## Files Hark may touch
Create: the 15 new pages above. Edit: `sitemap.xml`, `for-agencies.html` (section B + link lists), `ai-visibility/index.html`, `guides/index.html`, and only footer/breadcrumb/"Local pages"/related-guide link lists on the existing pages under `ai-visibility/` and `guides/`, plus `pricing.html`, `faq.html`, `success.html`, `contact.html`, `404.html`, `privacy.html`, `terms.html`, `sample/results.html`, `sample/weekly-report.html`.

Do **not** touch: `index.html`, `press.html`, `compare.html`, anything under `compare/` or `best/`, `README.md`, `prisqo-check.js`, `prisqo-site-worker.js`, `engine/`, `robots.txt`, `_headers`, or any image/PNG assets. If Muse's brief-4 has already added `best/` URLs to `sitemap.xml`, keep them.

## Acceptance (QA is done by Kiwi's agents)
- All 15 new pages return 200 at their clean URL, are in the sitemap, carry a `/#check` "Get my report ($19)" CTA + `/sample/results` link and FAQPage JSON-LD matching the visible FAQ; hubs list every existing industry, city and guide page; each city page is in its industry page's Local pages list; all titles site-wide stay unique; canonicals match their own path; all JSON-LD parses; no new broken internal links.
- `for-agencies.html` has the 3-step section with the `/#check` button and no new offers or figures.
- No new figures beyond `/sample/results`, `$19`, `14-day`; refund wording unchanged. Only the allowed files changed (plus `ops/replies/hark-9.md`). Non-draft PR from branch `hark-9`.
