# Reply: brief-4 (homepage conversion + "best tools" SEO pages)

Commit: `b6a0ca57f22b8504458135acfc5faf295fd53513`
PR: https://github.com/vilouraai1/prisqo/pull/23 (non-draft)
Branch: `muse-brief-4` (from main `58e02227` — main moved from `6141363` while this ran; the new commit only added `ops/tasks/brief-5.md` and `ops/tasks/hark-20.md`, no conflicts with any file below)
Status: done — items A1–A4, B5–B6, C7. Only the brief's files changed.

## A. Homepage conversion (index.html)

1. Above the fold on mobile (375px): verified with a local 375px render (real live CSS, local server). Badge, headline "Does AI recommend your business?", one-line outcome, and the check form all start above the fold; the header nav also carries a "Get my report ($19)" button. Nothing was added above the form.
2. Sample tile right under the form: "Not ready to pay? See a real sample report — Smith Family Dental, named in 5 of 6 answers, score 83. Example data." (the sample's own verified numbers, labelled example data).
3. "Who it's for" row after the hero: local businesses → `/ai-visibility/`, SaaS → `/ai-visibility/saas`, agencies checking a client → `/for-agencies`. All three pages already exist. Text only, no new claims.
4. Lighthouse accessibility deductions from brief-3, fixed on index.html: identical link text with different targets (footer mailto "Contact" → "Email us"; in-page CTA `#check` → `/#check`), and links relying on color (underlined the in-text links: 3× "See the sample →", the checklist link, and both `link-arrow` links). Also fixed the two remaining deductions the re-run surfaced: the three footer-legal links (mailto/Privacy/Terms) were still color-only, and the checklist email input failed touch-target size (added `min-height:44px`).
   - The same footer-legal underline + "Email us" fix was applied to `compare.html` and all 12 `compare/*.html` pages (same deduction, same footer, all in this brief's file list).
   - Footer links to both new `best/` pages added to the footer of index.html.

## B. "Best tools" SEO pages (new, under best/)

5. Created `best/ai-visibility-tools-small-business.html` (ordered for a small business: Prisqo first as the only one-time check, then by starting price) and `best/cheap-ai-visibility-tools.html` (strictly by starting price, cheapest first). Both: honest roundups of the 12 compare tools plus Prisqo; every price and best-fit note is as stated on that tool's compare page, hedged where the compare page hedges it (Writesonic $99 and Am I On AI $100 and AthenaHQ $295 are third-party-reported; Goodie $295 billing period unclear; Profound has no published price). Unique title/meta/canonical/OG/Twitter, table (tool, starting price, one-time vs subscription, best for) with links to each `/compare/<tool>` page, a `/#check` CTA with "Get my report ($19)", FAQPage JSON-LD plus breadcrumb JSON-LD, and a sources note.
6. Both pages linked from `compare.html` (new "Best-of roundups" section after the tool list) and from the footer of `index.html`; both added to `sitemap.xml` (204 URLs now).

## C. Compare pages CTA

7. Every `compare/*.html` page (all 12): a "Get my report ($19)" button to `/#check` plus the trust strip `14-day refund · One-time charge · Report ready in minutes`, inserted right after the pricing table. Same markup on all 12.

## Verification (all passed)

- All JSON-LD parses on every page in the repo; titles unique site-wide.
- 0 broken internal links in the changed files; both new pages return 200 on a local server.
- Every "Get my report ($19)" button reads exactly that and goes to `/#check` (index 2, compare hub 2, each best/ page 2, each compare page 3).
- No new figures beyond what the compare pages already state; no "coming soon" / "not built" / "not set yet" text; no weekly or monitoring promises for Prisqo (the word "monitoring" appears only in competitors' own descriptions).
- Lighthouse 13.6.0, mobile emulation, run locally against the edited files on a local server with the live CSS (the pages are not deployed yet, so PageSpeed Insights cannot score them until after Kiwi deploys — please re-run there): **home 99/100/96/100, best/ai-visibility-tools-small-business 100/100/96/100** (Performance/Accessibility/Best Practices/SEO). Accessibility is 100 on both after the fixes above. Best Practices 96 on both is the Cloudflare beacon failing to load inside this sandbox (ERR_TUNNEL_CONNECTION_FAILED for static.cloudflareinsights.com); it loads on the live site, so this should clear on a live re-run.

## Notes / questions

- The brief says "brief-3 put the reply in README.md instead" — for the record, brief-3's reply is `ops/replies/brief-3.md` on main (merged). This reply is in `ops/replies/brief-4.md` as asked.
- `press.html` is listed among "your files" but brief-4 has no press task; untouched.
- No engine, site-worker, Stripe, price ($19 one-time unchanged), or refund-wording changes.
- Carried open items (not this brief's): the live Stripe Price amount is still unverified in the Stripe Dashboard, and the 14-day refund line still needs Jilsha's yes before it is policy.
