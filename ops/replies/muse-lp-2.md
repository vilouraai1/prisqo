# Landing page revamp — muse-lp-2

- **Date:** 2026-11-12
- **Branch:** `muse-lp-2` (from main `17dd501`), local only — **nothing pushed,
  nothing deployed**. Parent pushes to GitHub and opens the PR.
- **Goal:** sleek, minimal, premium landing page, unique to Prisqo — inspired
  by (not copying) Semrush's AI Toolkit page and Search Engine People's
  AI/GEO page. Less text, more whitespace, one clear action.
- **What changed (files):** `index.html` and `prisqo-lp.css` fully rewritten;
  `free-check.js` gained a 6-line prefill (see below). No engine, Worker,
  checkout, or `_headers` changes. No paid APIs, no invented numbers — every
  number on the page comes from the repo's Smith Family Dental sample.

## References studied (structure only — no copy copied)

- **Semrush AI Toolkit** (`semrush.com/lp/ai-toolkit`, read 2026-11-12):
  one bold hero ("Take control of your AI visibility"), a single CTA
  ("Try free for 7 days"), a product visual, then 3 feature blocks
  (measure / shape narrative / monitor) with graphs, and trust stats as
  proof (28M marketers, 317M+ prompts, awards). Lesson taken: one hero,
  one CTA, proof as numbers, feature blocks with visuals.
- **Search Engine People AI/GEO**
  (`solutions.searchenginepeople.com/canadian-ai-geo-llm-company`, read
  2026-11-12): the opposite lesson — very long page (logo wall of 20+
  client logos, testimonial, 226%/315%/59% result stats, 4.5-star review
  badges, many sections, repeated CTAs). We deliberately did the opposite:
  no logo wall, no testimonial, no review badges, 5 sections max.

## What changed

- **Full rewrite, not a patch.** Old `index.html` (29,478 bytes, 1,316
  visible words) replaced with a new 16,971-byte page; old `prisqo-lp.css`
  (3,484 bytes, an extension of a dead Next.js chunk stylesheet that 404s
  live) replaced with a complete 10,692-byte self-contained stylesheet.
  The dead `/_next/static/chunks/…css` link is gone — the new page depends
  on nothing but `/prisqo-lp.css` and Google Fonts.
- **Copy cut 64.7%: 1,316 → 464 visible words** (same counting method both
  times: strip `<script>`/`<style>`, strip tags, split on whitespace).
  Removed: the pain section, the comparison table, the "what you get"
  cards, the checklist email capture, the second free-SEO-audit card, the
  CTA band, and the long industry/city footer lists. That content lives on
  its own pages (compare, guides, best, free-seo-audit), linked from the
  footer.
- **Hero (8 words or fewer):** eyebrow "Prisqo · AI visibility check",
  H1 "Does AI recommend your business?" (5 words), one-sentence subline,
  one pill input group (business name + city, styled as a single pill with
  a divider), button "Check free", and under it "Or get the full report —
  $19, pay once" linking to `/pricing`.
- **Hero visual:** a clean mock AI-answer card, no stock photos:
  "Best dentist in Austin?" → "Smith Family Dental is a strong pick —
  named in 5 of 6 answers we asked", score 83 / 100, labelled "Sample
  data" with a footnote that Smith Family Dental is a fictional sample.
- **5 sections max:** 1 hero, 2 how it works (3 steps, inline SVG icons),
  3 sample result preview, 4 pricing ($19 one-time + free SEO audit),
  5 FAQ with exactly 4 questions. Then the footer.
- **Design:** Fraunces (display) + Inter (body) via Google Fonts with
  system fallbacks, `display=swap`. One accent colour: `#0b6e4f` (kept
  from the old `prisqo-lp.css`); neutrals are ink/muted/line only. (The
  logo file `/icon.svg` itself carries its pre-existing indigo fill —
  a brand asset, not a page accent; no new second accent was introduced
  in the design.) Generous spacing, fade/rise-on-load motion with a
  `@media (prefers-reduced-motion: reduce)` block that disables all
  animation/transition. Mobile-first; sticky CTA bar ("Get my report
  ($19)" + "$19 once") on mobile only (max-width 700px).
- **Sample preview (section 3):** score ring (83 of 100), "Who AI named
  instead" (Sunrise Dentist 5×, Riverbend 3×, Oak Hill 3×, Hilltop 3×),
  "Sources the answers cited" (forum.example 4×, news-site.example 4×,
  reviews.example 3×, maps-listing.example 3×) — all from the existing
  sample data in `sample/results.html` / the old preview. Link to the
  full sample report.
- **Pricing (section 4):** "One report. $19. Once." + "14-day refund if
  the report fails or comes back empty", the working paid checkout form
  (see below), and "Want the fixes too? Get a free one-page SEO audit"
  linking to `/free-seo-audit`.
- **FAQ (section 5):** exactly 4 questions, matching the FAQ JSON-LD
  word for word (verified by script).

## Hero form → /free-check routing

- The hero form has two fields, business name + city, styled as one pill.
- `free-check.js` accepts `?category=&city=&name=` and only auto-runs
  when all three are present. The hero passes name + city only, so I
  added a 6-line prefill to `free-check.js`: when `name`/`city` are
  present without `category`, it fills those two fields (city only if it
  matches a known option) and the visitor picks a category and submits.
  The check itself does not run until submitted. No other behaviour
  changed; `node --check free-check.js` passes.
- The hero fields use distinct names (`biz-name` / `biz-city`) and a
  small inline script builds `/free-check?name=…&city=…`. This is
  deliberate: `prisqo-check.js` reads `[name="city"]` and `[name="name"]`
  globally for the paid form, so hero fields named `name`/`city` would
  have been picked up by the checkout instead. Without JS the form still
  GETs to `/free-check` (params unrecognised there, visitor types again
  — acceptable fallback, noted here).
- The paid checkout form keeps working: it carries
  `data-static-check-form="check"`, field names `website` / `category` /
  `city` / `businessName` exactly as `prisqo-check.js` expects, the
  submit button it rewrites to "Get my report ($19)", and an explicit
  `#prisqo-result` box for the `?paid=1` / `?cancelled=1` return. It is
  the only `[name="city"]` in the document (verified by grep). The old
  `#check` anchor is preserved (pricing links and the free-check CTA
  point at `/#check`).

## SEO

- Title exactly: `Prisqo: Does AI Recommend Your Business?`
- Meta description 127 chars (≤155).
- JSON-LD: one `@graph` block with Organization (`#org`, logo
  `https://prisqo.vilouraai.com/icon.svg`), Product (Prisqo AI Visibility
  Report, Offer $19 USD) and FAQPage (the same 4 visible questions).
  Parsed with Python `json.loads` — valid.
- OG + Twitter tags (title, description, URL, 1200×630 image with alt
  "Prisqo: Does AI recommend your business?"), canonical
  `https://prisqo.vilouraai.com`.
- Brand "Prisqo": in the H1 area (eyebrow "Prisqo · AI visibility check"
  directly above the H1, which asks about "your business"), in the
  `<title>`, and in the logo alt text (`<img src="/icon.svg"
  alt="Prisqo">`, header and footer).
- Noindex: none in `index.html`. Kept on `success.html`,
  `sample/weekly-report.html`, and `404.html` (verified still present).
- `sitemap.xml`: 205 URLs, unchanged — already lists all public pages
  including `/free-check`, `/free-seo-audit`, `/sample/results`,
  `/guides`; does not list `success`, `weekly-report`, or `404`.
  `robots.txt`: `User-agent: * / Allow: /` + sitemap pointer (verified,
  unchanged).
- Refund line: kept — "14-day refund if the report fails or comes back
  empty" in the pricing section, plus "14-day refund" in the footer
  legal line.

## Before / after

No screenshot: no headless browser is available on this VM (no
Chromium, Firefox, Playwright, or wkhtmltoimage), so this is a precise
description instead of images.

- **Before (hark-lp-1, 1,316 words):** dense page — hero with a 3-field
  free-check form (name + city + category) plus a second full paid
  form, trust chips, a full sample-report preview with score ring and
  bars, a pain section, 3-step how-it-works, 3 "what you get" cards, a
  5-row comparison table, a 5-question FAQ, a checklist email capture,
  a free-SEO-audit card, a "more" link, and a CTA band; footer with
  industry and city link lists. Two forms competed for the same action
  and the page depended on a stylesheet that 404s live.
- **After (muse-lp-2, 459 words):** one screen of hero — eyebrow, 5-word
  headline, one sentence, one pill input, one $19 link, and a single
  sample AI-answer card to the right (stacked below on mobile). Below:
  three icon steps in a row, a compact sample preview (score ring +
  two bar lists), one pricing card with the checkout form, four FAQ
  rows, and a compact 4-column footer. One accent green, one display
  face, wide whitespace throughout, sticky $19 bar on mobile only.

## Comparison

| | Prisqo (new) | Semrush AI Toolkit | Search Engine People AI/GEO |
|---|---|---|---|
| Hero | 5-word headline + 1 sentence + 1 pill input | Bold headline + subline + 1 CTA + product visual | Long headline + paragraph + form + badges |
| Primary CTA | Free 10-second check (hero); $19 report (sticky/pricing) | "Try free for 7 days" | "Get Started" / "Get Better Results" (contact) |
| Section count | 5 + footer | ~5 (hero, features ×3, trust, awards) | 10+ (logos, testimonial, results, journey, FAQ-ish, contact) |
| Pricing clarity | $19 once, on the page, refund line beside it | Free trial, no price on page | No price — "custom SEO plan" |
| Proof used | Real sample data only (Smith Family Dental, 5 of 6, 83/100) | 28M marketers, 317M+ prompts, awards | Client logos, 1 testimonial, 226%/315%/59% stats, review badges |

## Verification checklist (all run, all pass)

- [x] Word count: 1,316 → 464 words, cut 64.7% (≥60% required).
- [x] Title exact: `Prisqo: Does AI Recommend Your Business?`
- [x] Meta description 127 chars; canonical + OG + Twitter present.
- [x] JSON-LD parses with Python `json.loads`; types Organization,
  Product ($19 USD), FAQPage; visible FAQ questions match JSON-LD
  exactly.
- [x] H1 "Does AI recommend your business?"; "Prisqo" in eyebrow above
  it, in `<title>`, in logo `alt="Prisqo"` (header + footer).
- [x] No "noindex" in `index.html`; `success.html`,
  `sample/weekly-report.html`, `404.html` still noindexed.
- [x] Sitemap 205 URLs incl. `/free-check`, `/free-seo-audit`,
  `/sample/results`, `/guides`; no success/weekly-report/404.
  Robots allows all + sitemap pointer.
- [x] All 25 internal links resolve to real files (one checker note:
  `/compare` maps to root `compare.html`, as the old page linked it —
  verified the file exists; no broken link).
- [x] HTML parses with no unclosed/mismatched tags (Python
  `html.parser`); hero inline JS and `free-check.js` pass
  `node --check`.
- [x] Paid form: `data-static-check-form="check"`, fields
  `website`/`category`/`city`/`businessName`, single `[name="city"]`
  in the document, `#prisqo-result` present, `#check` anchor kept.
- [x] 14-day refund line present (pricing section + footer).
- [x] CSS: single accent `#0b6e4f`, reduced-motion block present,
  sticky CTA mobile-only (max-width 700px).
- [x] No fake testimonials, logos, user counts, or ratings anywhere.
- [x] `git status`: only `index.html`, `prisqo-lp.css`,
  `free-check.js` modified on branch `muse-lp-2` (plus the pre-existing
  local-only binaries, untouched and unpushed).

## Notes / things I could not do

- **Screenshot:** no headless browser on this VM, so no before/after
  screenshot — description above instead. Kiwi/adi: please eyeball the
  live preview after deploy, especially the pill form on a real phone
  and the footer on mobile.
- **"Top-3 5 of 6" not used:** the brief mentioned it, but
  `sample/results.html` does not state a top-3 figure, so the page only
  claims "named in 5 of 6 answers" and "score 83 of 100", both verified
  in the sample file.
- **Logo colour:** `/icon.svg` has a pre-existing indigo fill; the page
  design uses one accent (green). If the logo should be green too, that
  is a separate asset change (it is also the favicon).
- **Hero without JS:** the form still GETs to `/free-check`, but the
  name/city prefill needs JS (inline handler + `free-check.js`).
- **Old checklist capture removed:** the homepage checklist email form
  is gone with the copy cut; the guide itself is still at
  `/guides/ai-search-visibility-checklist`, linked from the footer.
  `prisqo-check.js` guards the missing form (`if (!form) return`), so
  nothing breaks.

## Files changed

- `index.html` — full rewrite (29,478 → 16,971 bytes)
- `prisqo-lp.css` — full rewrite, now self-contained (3,484 → 10,692 bytes)
- `free-check.js` — 6-line prefill for `?name=` / `?city=` (no category)

## UI/UX pass (ui-ux-pro-max skill)

- **Skill used:** `~/workspace/custom-skills/ui-ux-pro-max/` (v2.15.0, MIT,
  nextlevelbuilder/ui-ux-pro-max-skill). Entry `SKILL.md` read, then
  `skills/ui-ux-pro-max/SKILL.md` (note: the installed layout is
  `skills/`, not `sub-skills/`), `references/quick-reference.md` (all 10
  rule categories) and `references/pro-rules.md` (pre-delivery checklist).
  Search tool `skills/ui-ux-pro-max/scripts/search.py` (python3, local,
  no key) run for: `--design-system` (Prisqo landing page), `--domain
  landing` (hero/social-proof), `--domain ux` (contrast, mobile-first,
  form labels, reduced motion, touch targets, focus/keyboard),
  `--domain typography` (serif display + sans pairing), `--domain color`
  (green accent palette). Every search returned on-topic results with
  matching domain/category, verified before applying.
- **Design-system query — style pick deliberately NOT followed:** it
  returned Pattern "Product Demo + Features", Style "AI-Native UI" with a
  purple/cyan palette (`#7C3AED` primary, `#0891B2` accent), and the
  `--domain landing` top result was the "Hero + Testimonials + CTA"
  pattern (testimonials carousel). Both were rejected: they would
  rebrand the page away from the LP-2 brief (sleek, minimal, premium,
  one green accent) and would add testimonials Prisqo does not have,
  breaking the no-fake-proof rule. Taken from the skill instead: its
  tokens, spacing, accessibility rules, and the pre-delivery checklist.
  What the searches did validate: the Fraunces (display serif) + Inter
  pairing matches the skill's top serif-display + sans result (Calistoga
  + Inter, same category), and the green-accent direction matches its
  green palette results.
- **Contrast — computed, not guessed** (relative luminance, WCAG ratios):
  accent `#0b6e4f` on white 6.25:1 ✓; white on accent 6.25:1 ✓ (buttons);
  accent-dark `#095c42` on white 8.01:1 ✓; ink `#101828` on white 17.75:1
  ✓; muted `#475467` on white 7.69:1 ✓; accent on soft `#eef6f2` 5.69:1
  ✓; focus ring (3px accent) on white 6.25:1 ✓. **Fixed:** placeholder
  `#98a2b3` on white was 2.58:1 (fail) → darkened to `#667085`, 4.97:1 ✓
  (`prisqo-lp.css`, `--placeholder` token).

### Rules checked — what passed, what changed

| Skill rule | Result |
|---|---|
| Contrast 4.5:1 (P1) | Pass after placeholder fix (see above). All other text pairs ≥5.69:1. |
| Alt text (P1) | Pass — logo `alt="Prisqo"` (header + footer); score ring `role="img"` + `aria-label`; step icons `aria-hidden`. |
| Keyboard nav / focus visibility (P1) | Pass — `:focus-visible` 3px accent outline on a/button/input/summary; skip link present; tab order = visual order; no focus removal anywhere. |
| Aria-labels on icon-only controls (P1) | Pass — there are no icon-only controls; decorative icons are `aria-hidden`. |
| Touch targets 44×44, 8px+ spacing (P2) | **Fixed** — footer links were ~24px tall: now `display:inline-block; padding:10px 0` (44px) with the existing 8px `li` margins kept (`prisqo-lp.css`, `.footer ul a`); nav links gained `padding:10px 2px` (44px, 20px gaps); logo gained `min-height:44px`. Hero button 52px, nav CTA 44px, sticky CTA 48px, pay button 50px+, FAQ summary ~56px — all already ≥44px. |
| Mobile-first, no horizontal scroll (P5) | Pass — base styles are mobile, `min-width` breakpoints only; viewport `width=device-width, initial-scale=1` (zoom not disabled); no `100vw`/fixed widths; pill inputs `min-width:0`. |
| Base 16px / line-height 1.5 (P6) | Pass — body 17px/1.6. |
| Semantic color tokens, no raw hex (P6) | **Fixed** — 15 raw-hex usages centralised into `:root` tokens (`--surface`, `--placeholder`, `--card-line`, `--tag-border`, `--shadow`, `--shadow-bar`); no raw hex remains outside `:root` except the header comment (`prisqo-lp.css`). |
| Animation / reduced motion (P7) | **Fixed + pass** — entrance was applied to every `.hero-copy > *` child (5+ animated elements, against the "1–2 key elements" rule): now scoped to the two groups, `.hero-copy` and `.answer-card` (transform/opacity only, 0.5s). `prefers-reduced-motion` block disables all animation/transition and restores auto scroll. |
| Form labels visible (P8) | **Fixed** — hero inputs had `sr-only` labels (accessible name only, placeholder-only visually). They now have visible labels: "Business name *" / "City *" in a `.hero-field` wrapper — stacked above the input on mobile, inline inside the pill on desktop (`index.html`, `prisqo-lp.css` `.hero-field`). Required fields also marked with a visible `*` (`aria-hidden`, announced via `required`) on the hero and pay-form labels. Placeholders remain as examples only. |
| Sticky CTA not obscuring content (P5/pro-rules) | **Fixed** — `body`/`scroll-padding`/`#pricing` bottom offsets were a fixed 76px while the sticky bar grows by `env(safe-area-inset-bottom)` on notched phones: now `calc(76px + env(safe-area-inset-bottom))` (`prisqo-lp.css`). Focus-not-obscured holds because the reserved space matches the bar height. |
| CLS risks (P3) | Pass — fonts `display=swap`; logo and score-ring SVG have explicit width/height; hero card is static HTML with no async sizing. |
| Heading hierarchy (P1) | Pass — h1 → h2 → h3, no skips; eyebrow and footer heads are `<p>`. |
| Color-not-only (P1) | Pass — score bars pair colour with numeric counts and text labels. |
| Icon discipline (pro-rules) | Pass — inline SVG only, one stroke style (2px, round caps), no emoji. |

### Deliberately left as-is (and why)

- **12–14px label/hint text** (eyebrow 13px, tag 12px, foot/hint 13–14px):
  these are labels and hints, not body copy (body is 17px); the skill's
  anti-pattern is body text under 12px. All of them pass 4.5:1.
- **`.sr-only` class kept in CSS** although no element uses it now: harmless
  utility, may be needed by a later page change; removing it saves nothing.
- **No custom form-error UI:** both forms rely on native `required`
  validation (browser messages) plus `prisqo-check.js` handling; there is
  no custom error state to restyle, and inventing one is out of scope.
- **FOUT from `display=swap`:** accepted per the skill (swap beats
  invisible text); system fallbacks (Georgia/serif) keep layout stable.
- **Logo `/icon.svg` indigo fill:** untouched — a brand asset, not a page
  accent; the page still has exactly one accent colour (`#0b6e4f`).
- **`free-check.js` untouched** (verified `node --check` passes); the hero
  form still routes via its existing inline handler to
  `/free-check?name=&city=` with prefill.

### Verification (re-run after the fixes)

- Word count 459 → **464** (still <500; +5 is the two visible labels
  "Business name"/"City" plus two `*` tokens as counted by the same
  naive counter). H1 still 5 words, title exact, 5 sections, 4 FAQ
  questions matching JSON-LD word for word (Python `json.loads` valid).
- `node --check free-check.js` passes; HTML tag balance clean (Python
  `html.parser`); hero ids/names (`hero-name`/`biz-name`,
  `hero-city`/`biz-city`) unchanged so the inline handler and prefill
  still work; pay form fields and the single `[name="city"]` form field
  unchanged; `$19`, 14-day refund line, and `/free-seo-audit` links
  present; noindex still absent from `index.html` and still present on
  `success.html`, `sample/weekly-report.html`, `404.html`.
- Files changed by this pass: `index.html` (hero labels, `*` markers,
  answer-card `aria-label` removed — a generic `<div>` ignores
  `aria-label`; the card's visible text is self-describing),
  `prisqo-lp.css` (tokens, placeholder, labels, touch targets,
  safe-area, animation scope).

## Summary

- Replaced the 1,316-word hark-lp-1 homepage with a 464-word, 5-section
  premium landing page (64.7% copy cut): bold 5-word hero with a single
  pill input for the free check, a sample AI-answer card built only from
  the real Smith Family Dental sample (5 of 6, 83/100), 3-step how-it-
  works, compact sample preview, $19-once pricing with the working
  checkout form, and a 4-question FAQ — plus a self-contained stylesheet
  (one accent, Fraunces + Inter, reduced-motion support, mobile sticky
  CTA). SEO: exact title, 127-char description, Organization + Product
  ($19) + FAQ JSON-LD, OG/canonical, noindex removed from the homepage
  and kept on success/weekly-report/404, sitemap (205 URLs) and robots
  verified. Hero routes to `/free-check?name=&city=` with prefill; the
  $19 checkout, `/free-check`, `/free-seo-audit`, and the 14-day refund
  line all still work. Everything verified locally; nothing pushed or
  deployed.

DONE
