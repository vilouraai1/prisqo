# Reply: muse-seo-1 — SEO & UI/UX Redesign for VilouraAI & Prisqo

**Task:** `ops/tasks/muse-seo-1.md` (Kiwi, Nov 12, 2026)
**Status:** Audit done Nov 12, 2026. Prisqo PR DONE locally on branch `muse-seo-1` (not pushed, no PR opened yet — parent pushes + opens the PR, then comments "ready"). vilouraai-web PR in progress (separate agent).
**Method:** Illyism SEO Skills + Claude SEO (no paid APIs, no invented numbers, no Search Console on either domain, no CWV measured). Live pages re-checked Nov 12, 2026 ~19:00 CT; source checked against main HEADs below.

## 0. Baseline audit (Nov 12, 2026)

### Target 1 — prisqo.vilouraai.com (homepage)
- **Baseline: ~80/100** (prior audit ~78/100; LP-2 redesign + PR #29 fixes landed since).
- Source: main HEAD `72ba19b` (PR #30 muse-lp-2 merged, live verified Nov 12).
- Title 40 chars "Prisqo: Does AI Recommend Your Business?" — good. Description 127 chars — good.
- Canonical `https://prisqo.vilouraai.com` (no trailing slash) — good. OG title/description/image + Twitter summary_large_image — all present.
- JSON-LD `@graph`: Organization + Product ($19 Offer) + FAQPage — parses, Product price 19 USD confirmed live.
- `/success` noindexed — good. robots.txt Allow + sitemap (205 URLs). llms.txt present.
- **Gap 1 — cross-links MISSING:** homepage has ZERO links to vilouraai.com. Brief §3 requires header/footer links back to vilouraai.com for web redesign + AI receptionist.
- **Gap 2 — long titles/descriptions (site-wide):** 154 of 208 pages have titles >60 chars (worst 83, guides + ai-visibility long-tail); 61 have descriptions >155 chars (worst 210, compare pages). 0 pages missing a description.
- **Gap 3 — `/apple-icon.png` referenced on all 208 pages but not in the repo** (local-only file, never pushed). Either deploy the file or point the reference at an asset that ships (`/icon.svg` exists in repo). The `/_next/static/...` CSS + font references (207/204 pages) are live build artifacts, not repo files — not real breakage.
- Internal page links: 23,887 checked, **0 broken page links**.
- LP-2 design: keep as-is (brief §0). Mobile sticky CTA, 44px targets, contrast 4.97:1 from the Nov 12 UI/UX pass.

### Target 2 — prisqo.vilouraai.com/free-seo-audit
- **Baseline: ~82/100.**
- Title 41 chars, description 136 chars, canonical correct, JSON-LD Organization + WebSite + FAQPage — all good.
- Form intact: `action="https://formsubmit.co/vilouraai1@gmail.com"`, fields business name / website / email, all required. First FormSubmit submission still needs activation via vilouraai1@gmail.com.
- **Gap 1:** only 1 vilouraai.com link (to /pricing). No link to the redesign/receptionist services.
- **Gap 2:** copy is thin on what the audit delivers and when; trust strip is minimal (only the 14-day refund line for the $19 report, which is live but still needs Jilsha's yes as policy).
- **Gap 3:** no GEO Q&A block answering buyer queries ("Why does ChatGPT recommend my competitor?").

### Target 3 — vilouraai.com (live + vilouraai-web source)
- **Baseline: 48/100 live (unchanged), 62/100 source (prior audit). Target >90/100.**
- Live site is still the old forecast-first site: title "VilouraAI: Know your next 12 weeks of bookings", hero "Get my free forecast", $495 Forecast Sprint, ~$1k/mo Partner, McKinsey industry stats. No Prisqo, no free SEO audit, no $497/$149/$597 pricing, no address, no phone/hours.
- Source: vilouraai-web main `789593c` (initial import). `src/app/layout.tsx` SITE_TITLE is the old forecast title. robots.ts + sitemap.ts exist (Next.js generated) but sitemap lastModified dates are Oct 12–15, 2026 (stale) and it lists only /, /compare, /checklist, /demo, /locations + 6 cities.
- **Bundle wording source (brief: "existing wording/contents only"):** `src/app/_components/offers.ts` on branch `muse-viloura-services` (PR #1, not merged). Exact contents: Website Launch $497 one-time (mobile-first 5-page site, booking button, GBP tune-up, basic local SEO, live in 7 days; optional care plan $29/mo); AI Receptionist $149/mo (no setup, cancel anytime, first 14 days free); Launch Bundle $597 = Website Launch + first month of AI Receptionist ($149 value) + Prisqo report ($19 value), one call to set up. Contact vilouraai1@gmail.com; booking https://calendly.com/vilouraai.
- **Conflict noted:** PR #1's founding offer (first 10 clients: bundle $497, receptionist $129/mo locked 12 months) is NOT in the brief's price list. The redesign uses the brief's standard prices ($497 / $149 / $597) and notes the founding offer in this reply only; it does not show a countdown or remaining-spots number (we do not track it live).
- **Conflict noted:** the brief's homepage sections do not include the booking forecast service, but offers.ts keeps it as a third service (free 12-week forecast, $495 Sprint) and main has /demo live. The redesign follows the brief's sections and keeps the forecast reachable from /demo; it does not delete the service.
- **Amendment (Kiwi, Nov 12, commit 0547608 on branch muse-seo-1, after this PR's first push):** KEEP the existing forecasting feature/section on vilouraai.com exactly as it works today — the redesigned homepage highlights three things: Prisqo, the free SEO audit/optimization offer, and the existing forecasting. Routes, logic and data stay intact; restyle only to match the new design. This supersedes the conflict note above for the vilouraai-web PR (forecast gets a homepage highlight, not just a /demo link). The Prisqo half is unaffected.
- **Address:** the brief gives "VilouraAI, 357 E Corporate Dr, Lewisville, TX" for LocalBusiness schema. This address was not on the site before; used as instructed, flagged here because it comes from the brief, not a live listing check.
- Env vars: `.env.example` lists only DATABASE_URL (Prisma). Build needs it per `src/env.js` schema — documented in the vilouraai-web PR reply.

## 1. Prisqo PR (branch muse-seo-1 → main)
- Status: DONE locally Nov 12, 2026 (branch `muse-seo-1`, from main `72ba19b`). NOT pushed, NO PR opened yet — parent pushes + opens the PR, then comments "ready".
- What changed:
  1. **Homepage cross-links (the main gap — was ZERO vilouraai.com links):** header nav gains `VilouraAI` → https://vilouraai.com; footer Company nav gains `Website redesign ($497)` and `AI Receptionist ($149/mo)` → https://vilouraai.com/pricing; footer legal `Viloura AI` → https://vilouraai.com. LP-2 design untouched — no CSS changes, no restyle. Homepage now has 10 vilouraai.com references (1 header, 2 footer service links, 1 footer legal, 6 in schema).
  2. **Homepage JSON-LD @graph extended with 3 Service nodes** (Website Launch $497, AI Receptionist $149/mo, Launch Bundle $597; provider VilouraAI, url https://vilouraai.com/pricing; wording from vilouraai-web `offers.ts` via the audit baseline §0). Organization + Product ($19) + FAQPage kept. No LocalBusiness on Prisqo — that belongs on vilouraai.com.
  3. **/free-seo-audit:** lead now states the honest timeframe ("usually within a few business days", matching the thanks text); trust strip added under the form — `Free · No account · No obligation · Delivered by email · $19 report: 14-day refund if it fails or comes back empty` (the refund line exactly as it already appears on the site, NOT presented as approved policy — it still needs Jilsha's yes); GEO Q&A block added ("Why does ChatGPT recommend my competitor?", "How do I get listed in AI search results?", "Does the free audit include AI visibility?") with matching FAQPage entries (3 → 6 questions). Footer Company nav + legal line cross-links added, same as the homepage. Form, field names, hidden fields and FormSubmit action byte-identical to main.
  4. **Title/description trim, all 208 HTML files:** 154 titles >60 chars (worst 83) → 0; 61 descriptions >155 chars (worst 210) → 0. Word-boundary trims, keyword-first, og:/twitter: mirrors trimmed to the same values. 172 files changed, 1 line each; 5 titles then ended on a dangling word (and/by/a) and were trimmed one word further. Post-review cleanup (main agent, Nov 12): a second pass found 31 titles still ending on a dangling `|` separator and 21 descriptions ending on a dangling word (One/no/and/for) — all re-trimmed (93 title fields, 63 description fields incl. og:/twitter: mirrors); re-check: 0 dangling, all lengths still within limits. No other copy changes. Titles still unique (0 duplicates).
  5. **press.html:** its 2 download links pointed at `/twitter-image.png`, a file that is not in the repo (resolves live only from Kiwi's deploy copy). Repointed at `/opengraph-image.png` — byte-identical content live (both are the original OG image). These were the only broken internal page links in the whole site.
  6. **/apple-icon.png:** checked live Nov 12 — resolves (180×180 PNG). No change; the reference stays. Baseline Gap 3 is closed: the file is deployed live even though it is not in the repo.
  7. **Sitemap/robots/llms.txt:** no changes needed. Sitemap has 205 URLs, all `lastmod` 2026-11-12 already (today); `/success` stays out of the sitemap and noindexed. robots.txt Allow + sitemap pointer verified. llms.txt verified current.
- Verification (all run Nov 12, 2026 on branch `muse-seo-1`):
  - Titles: 0 >60 chars; descriptions: 0 >155; og:/twitter: mirrors the same; 0 duplicate titles; 0 missing titles/descriptions.
  - JSON-LD: every block on all 208 pages parses (0 failures); homepage @graph types are Organization, Product, Service ×3, FAQPage.
  - Internal page links: 23,059 checked, **0 broken** (before the press.html fix: 2 broken — both the twitter-image links). Asset refs: the `/_next/static/...` CSS + font references (207/204 pages) are live build artifacts, not repo files — not real breakage, unchanged from the baseline.
  - No "coming soon" / "not built" / "not set yet" text anywhere (0 rows).
  - Checkout form contract byte-identical to main: form tag, ids `domain`/`category`/`cats`/`city`/`brand`, names `website`/`category`/`city`/`businessName`, `action="#" method="post"`, notice, both secondary links, "Not ready to pay?" line, refund hint line — all OK. `data-testid="sample-preview"` ×1, `data-testid="home-more"` ×1. Hero form fields `name` + `city` unchanged. `free-check.html`, `prisqo-check.js`, `free-check.js`, `prisqo-lp.css` byte-identical to main.
  - Free-seo-audit form byte-identical: form tag, all 3 fields, all 4 hidden fields, FormSubmit action, thanks div, sent script; title 41 / description 136 unchanged; canonical unchanged.
  - No secrets in any changed file (no Price ids, KV ids, keys). `CF_BEACON_TOKEN` is the pre-existing placeholder, unchanged.
  - Renders: headless Chrome via local HTTP, 1280px + 375px — header shows all 6 nav links + CTA on one line, no wrap/overflow; mobile nav hidden + sticky CTA as designed; footer columns intact. (Hero text looks faded in the screenshots — the 0.5s rise animation caught mid-flight, not a defect. Google Fonts did not load in the sandbox, so screenshots use fallback fonts.)
- Files changed: **175** (172 title/description trims + `index.html` + `free-seo-audit.html` + `press.html`) + this reply file. `index.html` diff is 7 additions / 1 deletion (3 schema lines, header link, 2 footer links, legal-line link); `free-seo-audit.html` 7/2; `press.html` 2/2.
- Open questions:
  1. **https://vilouraai.com/pricing returns 404 on the live site today** (old forecast-first site; verified Nov 12). The service links use it anyway, matching the existing free-seo-audit link and the companion vilouraai-web redesign PR, which creates `/pricing`. If that PR slips, these links 404 until it lands.
  2. **The shared old header (207 pages) was NOT given a VilouraAI link** — only the LP-2 homepage header and the free-seo-audit footer. Adding a 6th item to the shared header touches 207 files; say the word if wanted.
  3. **`_headers` sets CSP `form-action 'self'`, but the free-seo-audit form POSTs to formsubmit.co.** The form page returns 200 live and the markup is intact; whether the POST is blocked live is unverified — worth one live submission test after the first FormSubmit activation.
  4. **`/apple-icon.png`, `/twitter-image.png` and the compressed `/opengraph-image.png` (114,721 bytes, local-only) are not in the repo.** If Kiwi ever deploys from the repo alone, the apple-touch-icon reference and the press downloads would 404. Consider committing the 180×180 `apple-icon.png` (1,859 bytes) to the repo.

## 2. vilouraai-web PR (branch muse-seo-1 → main)
- Status: in progress. (Agent fills in: what changed, files, build evidence, env vars.)
- Must contain this reply file. Open as non-draft PR, then comment "ready".

## 3. Measurement setup (for Jilsha — manual steps)
- Google Search Console: Domain verification for vilouraai.com and prisqo.vilouraai.com (DNS TXT via Cloudflare), then submit each sitemap (vilouraai.com/sitemap.xml, prisqo.vilouraai.com/sitemap.xml).
- Bing Webmaster Tools: import from GSC or verify with a meta tag; submit sitemaps the same way.
- Cloudflare / GA Analytics: Cloudflare Web Analytics (snippet or proxy) or GA4 via the existing Cloudflare beacon token if set; no new tracking scripts were added by either PR.

## 4. Checklist (brief §8)
- [x] Audit of all 3 targets, baseline in this reply
- [ ] Prisqo PR: homepage SEO + /free-seo-audit + cross-links (open, non-draft, "ready" commented) — work DONE on branch `muse-seo-1`, push + PR by parent
- [ ] vilouraai-web PR: full redesign, `npm run build` clean (open, non-draft, "ready" commented)
- [x] Titles <60 chars, descriptions <155 chars on the 3 target pages (site-wide long-tail trim done on Prisqo: 154 titles / 61 descriptions → 0; vilouraai.com is the other PR)
- [x] Canonicals, OG/Twitter, JSON-LD (Organization, Product $19, Service $497/$149/$597 on Prisqo homepage; LocalBusiness + FAQPage are vilouraai-web's)
- [x] Sitemap/robots/llms.txt current on Prisqo (205 URLs, all lastmod 2026-11-12, /success out; vilouraai.com is the other PR)
- [x] Cross-domain links both ways (Prisqo side done: homepage header/footer + free-seo-audit footer; vilouraai.com side is the other PR)
- [x] Hard constraints kept (checkout form contract, /free-check name+city, testids, no engine/Stripe/keys, noindex only success/thank-you, no prisma/dev.db, nothing sent or posted)
