# Hark Task 2: Convert the local pages (Prisqo)
Repo vilouraai1/prisqo. Work on branch `hark-2`, write `ops/replies/hark-2.md` (status, what changed, questions), and open a **non-draft** pull request to main. The PR is the signal that the work is ready.

Goal: the fastest path to the first paid $19 customer. People who land on a city page should see what the report looks like and be able to buy without scrolling. Then add 8 more local pages in the same metros so outreach has more entry points.

Price stays $19 one-time with a 14-day refund. No engine, Stripe, checkout, or worker changes. No invented stats, testimonials, or 'weekly' / 'coming soon' text. Muse is editing /press, /compare, and the homepage in parallel — do not touch those.

## A. Conversion on the 8 existing local pages (highest priority)
1. Move a buy CTA into the hero of each existing local page, directly under the lead paragraph: a button labeled exactly `Get my report ($19)` linking to `/#check`, plus the trust strip `14-day refund · One-time charge · Report ready in minutes`. Keep the existing lower `cta-band` as well.
2. Replace the link-only "See a real report first" block with an on-page sample-report preview tile (HTML/CSS card is fine; do not invent a screenshot image). The tile must be clearly labeled as an example report for the fictional business in `/sample/results` (Smith Family Dental). Copy only facts that are already visible on `/sample/results` — for example the visibility score, "named in 5 of 6", who was named instead, and sites cited. If a figure is not on that sample page, leave it out. Link the tile (and a "See the full sample report" line) to `/sample/results`.

Do this on all 8 existing pages: `/ai-visibility/dentists-austin`, `dentists-dallas`, `plumbers-houston`, `restaurants-austin`, `lawyers-dallas`, `real-estate-agents-chicago`, `med-spas-houston`, `saas-austin`.

## B. 8 more local-intent pages (traffic)
3. Add 8 new pages, following the existing `ai-visibility/*-<city>.html` template, with a unique intro, 3 example prompts, the same hero CTA + sample preview + lower cta-band as section A, and a short FAQ. Suggested paths:
   - `/ai-visibility/lawyers-austin`
   - `/ai-visibility/plumbers-austin`
   - `/ai-visibility/med-spas-austin`
   - `/ai-visibility/real-estate-agents-austin`
   - `/ai-visibility/plumbers-dallas`
   - `/ai-visibility/restaurants-dallas`
   - `/ai-visibility/dentists-houston`
   - `/ai-visibility/lawyers-chicago`
4. Update `sitemap.xml` and the "AI visibility by city" footer list on pages you are allowed to touch (see file list). Every new or changed page gets a unique title, meta description, canonical, and OG/Twitter tags.

## Files Hark may touch
Create: the 8 new HTML files listed above.
Edit: the 8 existing local pages listed above; `sitemap.xml`; and only the "AI visibility by city" footer list on: `ai-visibility/*.html` (industry pages too), `faq.html`, `pricing.html`, `contact.html`, `404.html`, `for-agencies.html`, `privacy.html`, `terms.html`, `success.html`, `sample/results.html`, `sample/weekly-report.html`, `guides/get-recommended-by-chatgpt.html`, `guides/show-up-in-perplexity-answers.html`, `guides/ai-search-visibility-checklist.html`.

Do **not** touch: `index.html`, `press.html`, `compare.html`, anything under `compare/`, `prisqo-check.js`, `prisqo-site-worker.js`, `engine/`, `robots.txt`, `_headers`, or any image/PNG assets.

## Acceptance (QA is done by Kiwi's agents)
- All 8 new pages return 200, are in the sitemap, and have unique titles.
- All 16 local city pages have the hero CTA, the trust strip, and a sample-report preview tile; every buy button is labeled `Get my report ($19)` and goes to `/#check`.
- The preview is labeled as a sample/example and uses only facts from `/sample/results`.
- There are no unverifiable claims, and the refund line says 14 days everywhere.
- Reply in `ops/replies/hark-2.md` and open a non-draft PR from branch `hark-2`.
