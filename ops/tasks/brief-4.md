# Muse Brief 4: Homepage conversion + "best tools" SEO pages (Prisqo)
Repo: vilouraai1/prisqo (main, after brief-3). Deliver one commit/PR on a new branch `muse-brief-4`. Write `ops/replies/brief-4.md` (status, what changed, questions) **as a file on the branch** (brief-3 put the reply in README.md instead; please use the ops/replies file) and open a non-draft pull request to main. Don't touch the engine worker, `prisqo-site-worker.js`, or Stripe keys. Price stays $19 one-time. Leave the refund wording as it is (Jilsha is deciding it). No fake testimonials, numbers, or weekly-product claims.

Goal: the fastest path to the first paid $19 order. Visitors land on the homepage and compare pages; make them buy, and catch "best AI visibility tool for small business" searches.

Hark works in parallel on pricing, faq, success, sample/*, for-agencies, guides, and everything under `ai-visibility/` plus `sitemap.xml` city entries. **Do not touch those files.** Your files: `index.html`, `press.html`, `compare.html`, `compare/*`, new pages under `best/`, and `sitemap.xml` (only to add your new URLs).

## A. Homepage conversion (index.html)
1. Above the fold on mobile (375px): headline, one-line outcome, the check form or a "Get my report ($19)" button, and the trust strip `14-day refund · One-time charge · Report ready in minutes` (use the exact strip already used on other pages). Nothing should push the form below the fold.
2. Add a compact "See a real sample report" link/tile to `/sample/results` right under the form.
3. Add a short "Who it's for" row (local businesses, SaaS, agencies checking a client) linking to `/ai-visibility/` industry pages that already exist. Text only, no new claims.
4. Fix the Lighthouse accessibility deductions you found in brief-3 on index.html (links relying on color; identical link text with different targets).

## B. "Best tools" SEO pages (new, under best/)
5. Create `best/ai-visibility-tools-small-business.html` and `best/cheap-ai-visibility-tools.html`: honest roundups of the 12 tools already on /compare plus Prisqo, reusing only prices and facts already stated (and hedged) on the compare pages. Each: unique title/meta/canonical/OG/Twitter, a table (tool, starting price as stated on our compare page, one-time vs subscription, best for), links to each `/compare/<tool>` page, a `/#check` CTA with "Get my report ($19)", FAQPage JSON-LD, breadcrumb JSON-LD.
6. Link both from `compare.html` and from the footer of `index.html`; add both to `sitemap.xml`.

## C. Compare pages CTA
7. Every `compare/*.html` page: a "Get my report ($19)" button to `/#check` after the pricing table, plus the trust strip. Same markup on all 12.

## Acceptance (QA is done by Kiwi's agents)
- Only your files changed. New pages return 200, are in the sitemap, have unique titles; all JSON-LD parses; no broken internal links.
- Every buy button reads "Get my report ($19)" and goes to `/#check`.
- No new figures beyond what compare pages already state; competitor prices stay hedged where the compare page hedges them; no "weekly"/"coming soon"/"monitoring" promises.
- Lighthouse mobile 90+ on home and one new best/ page (run PageSpeed Insights; don't invent scores).
- Reply in `ops/replies/brief-4.md` and a non-draft PR from branch `muse-brief-4`.
