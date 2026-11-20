# SEO visibility push — Prisqo (muse-seo-2)

Date: Nov 18, 2026. Main at `a4d34a9` (Nov 19). Live site checked Nov 18.
Skills used: claude-seo-agric (`seo-geo`, `seo-technical` checklists) and
illyism-seo-skills. $0 rule kept: no paid APIs, no invented numbers.

## What was checked

- Live homepage + 8 key pages (status, title, description, canonical,
  noindex), response headers, `robots.txt`, `sitemap.xml`, `llms.txt`.
- All 208 HTML files in the repo: titles, descriptions, H1s, duplicates,
  JSON-LD presence, internal-link graph, sitemap coverage.
- Search-index visibility: `site:prisqo.vilouraai.com`, `"prisqo.vilouraai.com"`,
  and the core query "Prisqo AI visibility check does AI recommend your business".
- AI-crawler access (robots.txt), CSP headers, asset availability.

## Findings (verified, not guessed)

| # | Finding | Severity |
|---|---------|----------|
| 1 | **CSP blocks the homepage fonts live.** The live `Content-Security-Policy` header is `style-src 'self'` / `font-src 'self'`, but the LP-2 homepage loads Fraunces + Inter from `fonts.googleapis.com` / `fonts.gstatic.com`. The display type never renders; the site falls back to system fonts. Verified from the live response header. | P0 |
| 2 | **Prisqo is invisible in search.** `site:` and `"prisqo.vilouraai.com"` searches return zero Prisqo pages. The core query returns Prisol and aivisibilitycheck.io instead, and the brand query is dominated by a different product, Priqo (priqo.app, AI shopping assistant). No Search Console has ever been set up for this domain, so indexing was never verified or requested. | P0 (adi step) |
| 3 | **The stylesheet for 207 pages lives only on the deployed Worker, not in the repo.** `/_next/static/chunks/3yytf2z4lgznt.css` (20,797 bytes) returns 200 live but is absent from the repo. A clean redeploy from the repo would leave 207 pages unstyled. Same for the InterVariable woff2 (48 KB, binary). | P0 |
| 4 | `/free-check` description was 163 chars (meta + OG + Twitter copies), just over the ~160 truncation point. | P1 |
| 5 | Homepage `/guides` link used the no-slash form (`href="/guides"`), which 307-redirects to `/guides/`. One occurrence (homepage footer). | P2 |
| 6 | `llms.txt` listed only 8 pages; guides, compare, and the 152 ai-visibility pages were absent from the AI-crawler map. (Google says llms.txt carries no ranking weight; this is for other AI crawlers only.) | P2 |
| 7 | Organization JSON-LD had no description and no `sameAs` — weak entity signal, and the brand is confusable with priqo.app. Footer already links vilouraai.com, so the link is verifiable. | P2 |

## Corrections to my own early reads (checked before acting)

- I first thought the `/_next` chunk CSS 404s live and 207 pages were unstyled.
  Wrong: it returns **200 live** with real CSS. The problem is only that it is
  not in the repo (finding 3), not that it is broken live.
- I first thought `/guides/` and `/ai-visibility/` were missing from the
  sitemap and orphaned. Wrong on both counts: both hubs **are** in the sitemap
  (205 URLs) and are linked from many pages. My first scripts had a
  trailing-slash bug (`guides//`). No sitemap additions were needed; only
  lastmod bumps for the two pages this PR changes.

## What is good already (no change needed)

- Titles/descriptions: 0 duplicates, 0 missing, 1 over-length (fixed here)
  across 208 pages. Every page has JSON-LD. No thin pages: thinnest guides
  ~800 words, thinnest ai-visibility pages ~800 words.
- `robots.txt` allows all crawlers, including OAI-SearchBot, Claude-SearchBot
  and PerplexityBot (search citability). `/success` correctly noindexed and out
  of the sitemap. Sitemap has 0 dead URLs.
- Content is real and specific: 27 guides, 152 ai-visibility pages, 12 compare
  pages, sample report with real sample data.

## Fixes in this PR

1. `_headers` — CSP now allows `https://fonts.googleapis.com` (style-src)
   and `https://fonts.gstatic.com` (font-src). Homepage typography will
   actually load after deploy.
2. `_next/static/chunks/3yytf2z4lgznt.css` (new) — the live stylesheet copied
   verbatim into the repo, so a clean redeploy keeps 207 pages styled.
3. `free-check.html` — description 163 → 157 chars in all 3 copies, keeping
   the "Gemini checks from Nov 13, 2026" fact.
4. `index.html` — `/guides` link now `/guides/` (no 307 hop); Organization
   JSON-LD gains a description and `sameAs: ["https://vilouraai.com"]`.
5. `llms.txt` — 1,211 → 2,736 bytes: added Guides (hub + 6 key guides),
   Compare (hub + 3 vs-pages + best page), and AI visibility by industry and
   city (hub + 5 industries).
6. `sitemap.xml` — lastmod bumped to 2026-11-18 for `/` and `/free-check`
   (the two pages changed); still 205 URLs, valid XML.

Verified after the edits: JSON-LD parses, sitemap is valid XML, no other
files changed (diff vs main shows exactly these 6 paths).

## Not done — needs adi / Kiwi

- **Search Console (biggest lever, adi step).** Verify ownership of
  prisqo.vilouraai.com in Google Search Console and submit the sitemap.
  Nothing here can prove indexing without it, and no one can see clicks,
  queries, or coverage until it exists. Same for Bing Webmaster Tools (free).
- **InterVariable woff2 binary.** The 48 KB font file also lives only on the
  deployed Worker. The snapshot push used for PRs is text-only, so it could
  not go in this PR — Kiwi to add it to the repo from the live asset (or
  accept the system-font fallback if it is ever lost).
- **Backlinks / mentions.** Per the GEO skill, brand mentions correlate ~3x
  more strongly with AI visibility than backlinks. No outreach was done:
  nothing sends outward without adi's exact-words approval. Candidates to
  approve later: free directory listings and the Prisqo free-check link from
  vilouraai.com. Do not expect ranking movement from on-site fixes alone
  without any of this.
- **Brand confusion.** priqo.app (different product) will keep winning
  name searches until Prisqo accumulates its own mentions. The `sameAs` link
  here is a start, not a fix.

## Summary

- Audited live Prisqo (208 pages, sitemap, headers, search index) on Nov 18:
  the site is technically sound except for one live rendering bug (CSP blocks
  its own homepage fonts), one deploy-fragility bug (the 207-page stylesheet
  is not in the repo), and zero verified search presence (no Search Console
  ever set up; brand query dominated by a different Priqo product).
- This PR fixes the font CSP, recovers the stylesheet into the repo, trims
  the one over-long description, fixes the one redirect-hop link, strengthens
  the Organization entity signal, and expands llms.txt — 6 paths, all
  verified. The remaining visibility work is Search Console + mentions, which
  need adi, not code.

DONE
