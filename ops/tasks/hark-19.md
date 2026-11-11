# Hark Task 19: Make every SEO page crawlable and linked (Prisqo)
Repo vilouraai1/prisqo. Work on branch `hark-19`, write `ops/replies/hark-19.md` (status, what changed, audit counts, questions; if you can't write that file, put the same content in the PR body), and open a **non-draft** pull request to main.

Goal: the fastest path to the first paid $19 customer. Our ~150 `ai-visibility/*` and ~27 `guides/*` pages only bring buyers if Google, Bing and AI crawlers can find them. This task makes sure every page is in the sitemap, linked from its hub, and free of broken internal links. Do not add new city, industry or guide pages in this task.

Price stays $19 one-time. No engine, Stripe, checkout, or worker changes. No invented stats, testimonials, or 'weekly' / 'coming soon' / monitoring claims. No new offers, discounts or free checks. Leave refund wording as it is. Muse is editing `index.html`, `press.html`, `compare.html`, `compare/*` and `best/*` in parallel; do not touch those. Do not change the `CF_BEACON_TOKEN` placeholder. Keep the hero CTA and trust strip added in hark-18 on every page.

## A. Audit (write a small script, report the counts in your reply)
1. Every HTML page under `ai-visibility/` and `guides/` (except 404-type pages) has a `<loc>` in `sitemap.xml` using its clean URL (no `.html`, matching the page's canonical). List missing and stale entries (sitemap URLs with no matching file).
2. Every page under `ai-visibility/` is linked from `ai-visibility/index.html` (directly, or via its industry page which is linked from the hub). Every page under `guides/` is linked from `guides/index.html`.
3. Every internal `href` (starting with `/`) on pages under `ai-visibility/` and `guides/` resolves to an existing file (clean path → `.html` file or `index.html`), or is `/#check`.
4. Each canonical URL matches the page's own clean path.

## B. Fix
5. Add missing sitemap entries and remove stale ones. Keep the existing sitemap format.
6. Add missing hub links to `ai-visibility/index.html` / `guides/index.html`, reusing the existing list markup.
7. Fix broken internal links by pointing them to the correct existing page (do not create pages).

## Files Hark may touch
Only files under `ai-visibility/` and `guides/`, `sitemap.xml`, and `ops/replies/hark-19.md`.

## Acceptance (QA is done by Kiwi's agents)
- Only the allowed files changed. Non-draft PR from branch `hark-19`.
- After the PR, checks 1–4 above pass for every page; sitemap.xml is valid XML.
- Hero `/#check` "Get my report ($19)" CTA + trust strip still present on every page under `ai-visibility/` and `guides/`.
- Titles, meta descriptions and body copy unchanged; all JSON-LD still parses (python json.loads).
- Refund wording unchanged. No new figures, testimonials, offers, discounts, free checks, or weekly/monitoring/coming-soon claims. `CF_BEACON_TOKEN` unchanged. City footer ≤ 8 links.
