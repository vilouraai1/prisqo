# Hark Task 4: Convert the high-intent pages + 8 more local pages (Prisqo)
Repo vilouraai1/prisqo. Work on branch `hark-4`, write `ops/replies/hark-4.md` (status, what changed, questions; if you can't write that file, put the same content in the PR body), and open a **non-draft** pull request to main.

Goal: the fastest path to the first paid $19 customer. City pages, industry pages and guides now all push to `/#check`. The pages a buyer opens right before deciding (sample report, pricing, FAQ, for-agencies) need the same clear path, and more local pages bring more searchers in.

Price stays $19 one-time with a 14-day refund. No engine, Stripe, checkout, or worker changes. No invented stats, testimonials, or 'weekly' / 'coming soon' / monitoring claims. Muse is editing /press, /compare, and the homepage in parallel — do not touch those.

## A. Sample report converts (highest priority)
1. `sample/results.html`: directly under the score block, add a CTA box: `Get this report for your business ($19)` → `/#check`, the trust strip `14-day refund · One-time charge · Report ready in minutes`, and one line saying the sample is a fictional business. Keep the existing end-of-page CTA.
2. Add a short "What's in your report" list on the same page that only describes sections the sample already shows (score, who's named instead, cited sources). No new figures.

## B. Pricing, FAQ, for-agencies
3. `pricing.html`: put the `Get my report ($19)` → `/#check` button and the trust strip right under the price, plus a link `See a sample report` → `/sample/results`.
4. `faq.html`: add a CTA box after the first 3 questions (same button + trust strip). Add 2 FAQs, each answered only from facts already on the site: "How long does the report take?" and "Can I check a competitor or a client's business?" — update the FAQPage JSON-LD to match.
5. `for-agencies.html`: hero CTA (`Run a check for a client ($19)` → `/#check`) + trust strip + link to `/sample/results`. No bulk pricing or discounts unless already on the page.

## C. 8 more local pages (traffic)
6. Create, using the exact layout of the existing city pages (hero CTA, trust strip, sample tile, FAQ + FAQPage JSON-LD, unique title/description/canonical/OG/Twitter, links to the parent industry page and `/sample/results`), with city-specific copy and no invented local stats:
   `dentists-phoenix`, `dentists-san-antonio`, `plumbers-phoenix`, `plumbers-denver`, `lawyers-houston`, `med-spas-dallas`, `real-estate-agents-dallas`, `restaurants-houston` (all in `ai-visibility/`).
7. Add them to `sitemap.xml` and to the matching industry page's "Local pages" list.

## Files Hark may touch
Create: the 8 new city pages. Edit: `sample/results.html`, `pricing.html`, `faq.html`, `for-agencies.html`, `sitemap.xml`, the "Local pages" lists on the 8 industry pages, and only footer/guide/city link lists on `contact.html`, `404.html`, `privacy.html`, `terms.html`, `success.html`, `sample/weekly-report.html`, the existing city pages and the 5 guides.

Do **not** touch: `index.html`, `press.html`, `compare.html`, anything under `compare/`, `prisqo-check.js`, `prisqo-site-worker.js`, `engine/`, `robots.txt`, `_headers`, or any image/PNG assets.

## Acceptance (QA is done by Kiwi's agents)
- All 8 new city pages return 200, are in the sitemap and their industry page's Local pages list; all titles site-wide stay unique; all JSON-LD parses.
- sample/results, pricing, faq and for-agencies each have a `/#check` CTA with the trust strip near the top; faq has the 2 new questions in both HTML and JSON-LD.
- No new figures beyond `/sample/results`; no unverifiable claims; refund line says 14 days everywhere.
- Only the allowed files changed. Non-draft PR from branch `hark-4`.
