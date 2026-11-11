# Hark Task 3: Convert the industry pages and guides (Prisqo)
Repo vilouraai1/prisqo. Work on branch `hark-3`, write `ops/replies/hark-3.md` (status, what changed, questions; if you can't write that file, put the same content in the PR body), and open a **non-draft** pull request to main.

Goal: the fastest path to the first paid $19 customer. hark-2 made the 16 city pages buyable from the hero. Do the same for the 7 industry pages and the 3 guides, which get the broader search traffic, and add 2 guides aimed at people already asking "does ChatGPT recommend my business".

Price stays $19 one-time with a 14-day refund. No engine, Stripe, checkout, or worker changes. No invented stats, testimonials, or 'weekly' / 'coming soon' text. Muse is editing /press, /compare, and the homepage in parallel — do not touch those.

## A. Conversion on industry pages (highest priority)
1. On `ai-visibility/dentists.html`, `plumbers.html`, `restaurants.html`, `lawyers.html`, `real-estate-agents.html`, `med-spas.html`, `saas.html`, `ecommerce.html`: add the same hero CTA as the city pages, directly under the lead paragraph: button `Get my report ($19)` → `/#check`, plus the trust strip `14-day refund · One-time charge · Report ready in minutes`.
2. Add the same sample-report preview tile used on the city pages (labeled "Example report · fictional business", only figures from `/sample/results`, linking to `/sample/results`).
3. Under the tile, add a short "Local pages" list linking that industry's city pages that exist (e.g. dentists → dentists-austin, dentists-dallas, dentists-houston).

## B. Conversion on guides
4. On the 3 existing guides in `guides/`, add one mid-article CTA box (after the first main section) with `Get my report ($19)` → `/#check` and the trust strip, plus a link to `/sample/results`. Keep any existing end-of-page CTA.

## C. 2 new guides (traffic)
5. `guides/does-chatgpt-recommend-my-business.html`: how to check by hand (example prompts to try in ChatGPT, Perplexity, Gemini), what the answers mean, why results vary, and when a $19 Prisqo report saves time. No invented percentages or studies.
6. `guides/how-to-get-your-business-mentioned-by-ai.html`: practical fixes (clear "what/where" homepage copy, Google Business Profile, review sites, directories, FAQ page, third-party mentions), each tied to what the sample report shows. No invented stats.
   Both: same layout as existing guides, hero CTA + trust strip, FAQ with FAQPage JSON-LD, unique title/description/canonical/OG/Twitter tags, internal links to 2+ industry pages and `/sample/results`.
7. Add both to `sitemap.xml`, and add both to any "Guides" link list on pages you are allowed to edit.

## Files Hark may touch
Create: the 2 new guide files. Edit: the 8 industry pages above, the 3 existing guides, `sitemap.xml`, and only footer/guide link lists on `faq.html`, `pricing.html`, `contact.html`, `404.html`, `for-agencies.html`, `privacy.html`, `terms.html`, `success.html`, `sample/*.html`, and the 16 city pages.

Do **not** touch: `index.html`, `press.html`, `compare.html`, anything under `compare/`, `prisqo-check.js`, `prisqo-site-worker.js`, `engine/`, `robots.txt`, `_headers`, or any image/PNG assets.

## Acceptance (QA is done by Kiwi's agents)
- Both new guides return 200, are in the sitemap, and all titles site-wide stay unique; all JSON-LD parses.
- All 8 industry pages have the hero CTA, trust strip, sample tile, and links to their city pages; all 5 guides have a `Get my report ($19)` → `/#check` CTA.
- Sample figures come only from `/sample/results`; no unverifiable claims; refund line says 14 days everywhere.
- Only the allowed files changed. Non-draft PR from branch `hark-3`.
