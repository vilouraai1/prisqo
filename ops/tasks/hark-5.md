# Hark Task 5: Clean up off-message copy, buyer reassurance, and 8 more local pages (Prisqo)
Repo vilouraai1/prisqo. Work on branch `hark-5`, write `ops/replies/hark-5.md` (status, what changed, questions; if you can't write that file, put the same content in the PR body), and open a **non-draft** pull request to main.

Goal: the fastest path to the first paid $19 customer. Remove copy that sells something we don't offer, make the moment after payment feel safe, and keep adding local pages that bring searchers in.

Price stays $19 one-time. No engine, Stripe, checkout, or worker changes. No invented stats, testimonials, or 'weekly' / 'coming soon' / monitoring claims. Leave the refund wording as it is (Jilsha is deciding it). Muse is editing /press, /compare, and the homepage in parallel; do not touch those.

## A. Remove off-message copy (answers your hark-4 questions)
1. `pricing.html`: reword "Want weekly monitoring or agency volume? Email…" to an agency/volume line with no monitoring promise, e.g. "Running checks for several clients? Email us."
2. `faq.html`: reword the "re-check weekly" answer and the "weekly monitoring" mention in the agencies answer so they only describe the one-time $19 report (you can say people can run a new check any time for another $19, if that's already true on the site; otherwise just drop it).
3. `faq.html`: sync the FAQPage JSON-LD so every visible question (including cost, how often, agencies, data) is in it, in the same order and with matching text.
4. Grep every file you're allowed to edit for `weekly`, `monitor`, `coming soon`, `not built`, `prototype`, `demo` and fix any that promise something not for sale. List anything you find in files you can't edit in your reply.

## B. After-payment reassurance
5. `success.html`: make it clear what happens next, using only facts already on the site: the report is being prepared, it opens at a link, **bookmark or copy that link** to reopen it later, and how to contact us (existing contact email). Add a link to `/sample/results` ("What your report will look like").
6. `sample/weekly-report.html`: if it still exists and describes a weekly email product, either make it clearly a one-time example or note it in your reply for Kiwi (do not delete the file).

## C. 8 more local pages (traffic)
7. Create, with the exact layout of the existing city pages (hero CTA → `/#check`, trust strip, sample tile, FAQ + FAQPage JSON-LD, unique title/description/canonical/OG/Twitter, links to the parent industry page and `/sample/results`), city-specific copy, no invented local stats:
   `dentists-chicago`, `dentists-denver`, `plumbers-san-antonio`, `lawyers-phoenix`, `med-spas-phoenix`, `real-estate-agents-houston`, `restaurants-dallas`, `restaurants-austin` (all in `ai-visibility/`). Skip any that already exist and say so.
8. Add them to `sitemap.xml`, the matching industry page's "Local pages" list, and the "AI visibility by city" footer list on the pages that already carry it (now including the 8 industry pages' footers).

## Files Hark may touch
Create: the 8 new city pages. Edit: `pricing.html`, `faq.html`, `success.html`, `sample/weekly-report.html`, `sitemap.xml`, the 8 industry pages (Local pages list + footer city list only), and only footer/city link lists on `contact.html`, `404.html`, `privacy.html`, `terms.html`, `sample/results.html`, `for-agencies.html`, the existing city pages and the guides.

Do **not** touch: `index.html`, `press.html`, `compare.html`, anything under `compare/`, `prisqo-check.js`, `prisqo-site-worker.js`, `engine/`, `robots.txt`, `_headers`, or any image/PNG assets.

## Acceptance (QA is done by Kiwi's agents)
- No `weekly`/`monitoring`/`coming soon` promises left in pricing.html, faq.html, success.html; FAQ JSON-LD question count equals the visible FAQ count and the texts match.
- success.html tells the buyer to bookmark/copy the report link, links `/sample/results`, and shows the contact email.
- All 8 new city pages return 200, are in the sitemap and their industry page's Local pages list; all titles site-wide stay unique; all JSON-LD parses; no new broken internal links.
- No new figures beyond `/sample/results`; refund wording unchanged. Only the allowed files changed. Non-draft PR from branch `hark-5`.
