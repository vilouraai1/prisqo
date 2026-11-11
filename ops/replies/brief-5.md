# brief-5 reply — Marketing copy pack (drafts only, nothing posted)

Status: done. PR: https://github.com/vilouraai1/prisqo/pull/25 (non-draft). Work commit: 4b5b3e8046551c6221ac0c4b40d9aa7a8d28b669.

## 1. ops/marketing/agency-pitch.md
- Short pitch to small SEO/marketing agencies: resell the $19 report as a foot-in-the-door audit for local clients. Buy at $19, resell/bundle at their price; no minimums, no contract.
- Cold email, verified **exactly 90 words** (URL excluded from the count).
- LinkedIn DM version.
- **30 real small agencies in DFW/Texas**, each with a public contact URL verified by loading it (HTTP 200, checked Nov 11, 2026). City mix: Dallas 5, Houston 5, San Antonio 4, Plano 3, Denton 3, Frisco 2, Austin 2, Fort Worth 1, Haltom City 1, Allen 1, Flower Mound 1, Richardson 1, The Colony 1.
- How the list was built: 52 distinct domains checked; 16 dropped in the first pass (homepage unreachable/403, or no contact page under any tried slug); 3 more dropped on a redirect audit (contact URLs that redirect to the homepage or a services page, not a contact page). I re-verified 12 of the 30 contact URLs myself — all 200.
- One swap: Seota Digital Marketing (Frisco) was verified but left out — its contact page is Phoenix-branded despite the Frisco listing. Replaced with ADMIVI (Houston, contact page verified 200, homepage confirms "Digital Marketing Agency ADMIVI in Houston").

## 2. ops/marketing/leaderboard-posts.md
- 5 posts ("Who AI recommends for <category> in Lewisville, TX"): dentists, med spas, HVAC, chiropractors, plumbers. Each in LinkedIn, X and Facebook-group versions — 15 drafts.
- Every fact comes from `ops/marketing/leads-1.csv` hooks only (checked Nov 11, 2026). ChatGPT itself was NOT queried, so no post names ChatGPT. No post says "AI never recommends you".
- All X versions fit the 280-character limit (250–268 chars including the link).
- Every version ends with https://prisqo.vilouraai.com/free-check?ref=post.

## 3. ops/marketing/posts.md — already done, not duplicated
The task's item 3 (r/SideProject, Indie Hackers, free directories, Product Hunt drafts) was already delivered as PR #22 (`muse-posts`) and **merged to main** (commit `d108c626`) while this brief was in progress. Recreating the file on this branch would have conflicted with the merge, so item 3 is satisfied by that merge and no duplicate file was written here.

## Flags for Kiwi
- The leaderboard posts link to `/free-check`, which ships with PR #24 (hark-20) — **not yet merged or live**. If the link 404s when Jilsha goes to post, wait for PR #24 to merge and deploy first. This is noted in the file's posting notes.
- Two agencies on the reseller list — Thinkit Media and Idea Grove (both Dallas) — are the same agencies Prisqo's own Nov 5 live check named as competitors (Thinkit Media 4/6, Idea Grove 1/6). They are real, valid reseller targets; flagging it only because they already know this space.
- Nothing was posted, sent, or contacted anywhere. All three files are drafts.
