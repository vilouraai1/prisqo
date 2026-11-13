# muse-viloura-cf: move vilouraai.com from Vercel to Cloudflare Workers (free plan)

Repo: vilouraai1/vilouraai-web (Next.js, already has the merged PR #2 redesign). Pull main first. Branch muse-viloura-cf, one PR to main, reply in ops/replies/muse-viloura-cf.md in that repo, then comment "ready".

Why: Jilsha wants vilouraai.com on Cloudflare (free, commercial use OK). Today the domain's DNS is on Cloudflare (account 959933abc5059170709e3ac1e7cd7829) but the site is served by an old Vercel deploy. Prisqo already runs as Worker "prisqo" on the same account.

Do:
1. Make the app deploy to Cloudflare Workers with the official OpenNext Cloudflare adapter (@opennextjs/cloudflare) and wrangler. Worker name: "vilouraai-web". Add wrangler.jsonc, open-next config, and package.json scripts: build:cf, preview:cf, deploy:cf.
2. Everything must still work on Workers: all 20 pages, the forecasting feature, the FormSubmit forms, tRPC lead.submit and lead.requestChecklist. Prisma with SQLite (prisma/dev.db) can't run on Workers: replace it with Cloudflare D1 (free) via the Prisma D1 adapter, or, if the lead routes only forward data, a simpler path that stores nothing. Explain the choice in the reply. Never commit prisma/dev.db or secrets.
3. List every env var or binding needed in the reply and in .dev.vars.example (no real values).
4. Verify locally with `npm run preview:cf` (wrangler dev) and write the results in the reply (each route, status code, forms).
5. Write DEPLOY.md: the exact deploy command, plus the custom-domain step (attach vilouraai.com and www.vilouraai.com to the Worker, which replaces the Vercel DNS records).

Don't: deploy anything, change DNS, touch the prisqo or prisqo-report-engine Workers, Stripe, or keys, or change design, copy or prices.
Acceptance: `npm run build` and `npm run build:cf` both pass; the preview serves all routes with 200; the forms post; no secrets or dev.db in git; the reply lists the bindings.
