# Community posts, round 3: value-first drafts for next week

**Status:** Drafts only. Nothing here has been posted, sent, joined, signed up for, commented on, or DMed. Jilsha posts each one herself, from her own accounts. Hark never posts.
**Written:** 2026-11-26 (America/Chicago), Thanksgiving. For the week of Mon 2026-11-30.
**Builds on (no repeats):** `communities.md` (2026-11-11), `posts.md`, `leaderboard-posts.md`, `community-posts-2.md` (2026-11-21), `community-posts-hm-08.md`. `sent-log.md` logs no community posts yet, so none of those has gone up. Every post here uses a new observation. None reuses round 2's points: short lists, Baker Brothers in 5 cities, "nearby" labels, the Castle Hills tag, or named people.

## Why these, for a first paying customer
- Owner audiences come first (the Facebook DFW owner groups and Alignable city communities). Consumer subreddits come last, as backups.
- Three angles that are new here: **missed calls** (sourced), a **10-minute website check** (from a scan we ran ourselves), and **fresh local Gemini patterns** (city names in business names, franchises taking a whole answer, one clinic filed under two categories).
- No main post has a link, the Prisqo name, a price, "DM me", or "comment your email". The path to a customer is the comments. Someone asks "how did you check?" or "can you check mine?", and Jilsha answers in a comment where the rules allow it (see the checklist).

## Where the facts come from
- **Gemini answers:** `data/ai-answers.json`, saved Google Gemini answers to "best <category> in <city>, TX", checked 2026-11-13. That's 71 answers across 17 DFW cities, and each question was asked once. These are past snapshots from one AI, not live and not a ranking. Every post says so, and no post claims ChatGPT was checked.
- **Website scan:** Hark fetched the home pages of the 40 businesses in `ops/leads/verified-leads-2026-11-24.csv` on 2026-11-26. 39 loaded; one returned 403. The read covered the raw HTML only, with no scripts run. Per-site results are in `ops/leads/site-scan-2026-11-26.csv` (internal; never name these businesses in a post). Script: `/workspace/work/cp3/scan.py`. Of the 39:
  - 8 page titles didn't include the city.
  - 20 had no business-type JSON-LD (LocalBusiness, Dentist, Plumber and similar). Sites that add schema with scripts would show as "none" here, so this is an upper bound.
  - 6 had no meta description.
  - 2 had no tap-to-call `tel:` link.
  - All 39 used HTTPS and had a mobile viewport tag.
- **Missed calls:** ADA, "Inquiries from Prospective Patients" (read 2026-11-26): "Some practices lose as many as 30-50% of the initial contacts. A loss of more than 20% could indicate that your staff and your practice would benefit from some additional training on managing calls." The ADA also suggests sending a "missed call" text. https://www.ada.org/resources/practice/practice-management/marketing_inquiriesprospectivepatients
- **AI use by consumers:** BrightLocal, Local Consumer Review Survey 2026 (1,002 US adults, read 2026-11-26). Use of ChatGPT and other AI tools for local recommendations rose "from 6% last year to 45%". After reading positive reviews, 54% go on to check the business's website. https://www.brightlocal.com/research/local-consumer-review-survey
- No made-up stats, customers, results or testimonials. Tips are framed as guesses or questions.

## Rules status
- Facebook and Reddit rules below are the 2026-11-21 recaps from `community-posts-2.md`, with their sources. On 2026-11-26 the Reddit mirrors were behind a bot check, and the Alignable guidelines page didn't load signed out, so **nothing could be re-verified today**. Re-open the live rules on the day you post.
- The Alignable city communities were confirmed live on 2026-11-26: https://www.alignable.com/carrollton-tx , /frisco-tx and /flower-mound-tx returned 200 with "<City>, TX Small Business Networking - Alignable".

## Posting order (one community a day, nothing on 11-26 or 11-27)
| Day | # | Community | Angle |
|---|---|---|---|
| Mon 2026-11-30 | 1 | FB: DFW Business Professionals Networking | Missed calls |
| Tue 2026-12-01 | 2 | Alignable: Carrollton | Franchises filled one answer; one clinic under two categories |
| Wed 2026-12-02 | 3 | FB: Small Business DFW | 10-minute website check |
| Thu 2026-12-03 | 4 | Alignable: Frisco | City in the name |
| Fri 2026-12-04 | 5 | Local Search Forum | Data post for local-SEO people |
| Mon 2026-12-07 | 6 | Alignable: Flower Mound | Mobile detailers, short chiro list |
| Tue 2026-12-08 | 7 | r/DFW (backup) | Same names across cities and categories |
| Wed 2026-12-09 | 8 | r/flowermound (backup) | Locals: who's missing? |

**Facebook groups #1 and #3 also have an unposted HM-08 draft.** Keep one post per group per week. I'd post these round-3 versions first: they give owners something to do today and don't overlap with the AI-snapshot post. Post the HM-08 version in the same group a week later, or not at all.

---

## 1. DFW Business Professionals Networking (Facebook group, public, about 48.3k members)

- **URL:** https://www.facebook.com/groups/dfwbpnetwork/
- **Rule recap (2026-11-21):** "Unsolicited sales pitches are not allowed" (Networking Etiquette). No AI-content or link rule visible. Source: https://www.facebook.com/groups/dfwbpnetwork/about
- **Post:** no link, no pitch, no price.

```
For DFW owners whose customers still call first: one number worth knowing.

The American Dental Association tells practices to count new-patient calls for a month and compare them with how many actually got booked. Its own guidance says some practices lose as many as 30 to 50% of those first contacts, and that losing more than 20% means the phones need work.

That's dental, but I suspect it's similar anywhere the first touch is a phone call: HVAC, plumbing, med spas, law offices.

It may matter more now. BrightLocal's 2026 consumer survey found 45% of people used ChatGPT or another AI tool for local recommendations, up from 6% a year earlier. When I've asked Gemini for "best ___ in [DFW city]", it usually names 4 or 5 businesses. If the first one goes to voicemail, my guess is the caller just tries the next.

Free self-check: for one week, tally every call that rang out or hit voicemail, and how long the callback took.

What's worked for you on missed calls? A callback rule, an answering service, a text-back, something else?
```

---

## 2. Alignable: Carrollton, TX community

- **URL:** https://www.alignable.com/carrollton-tx (confirmed live 2026-11-26)
- **Rule recap (2026-11-21, Alignable Group Guidelines, "Updated: November 13, 2026"):** groups are "not to sell". No promoting products or services, no contact details or off-platform links, no copy-pasting the same message across groups. Posts should "lead with local value". Source: https://support.alignable.com/hc/en-us/articles/360055903712-Alignable-Group-Guidelines
- **Gate:** Jilsha's home community is Lewisville. If Alignable won't let her post in Carrollton, skip this one; don't move it into the Lewisville community, which already has the HM-08 post.

```
Carrollton owners, something I noticed that might be useful.

On Nov 13 I asked Google's Gemini (an AI assistant) "best ___ in Carrollton, TX" for 8 kinds of local business. Each answer named 4 to 7 places. Two things surprised me.

House cleaning: all 4 names were national franchise brands (The Cleaning Authority, MaidPro, CottageCare, Merry Maids). No independent cleaner made the answer.

One clinic, Elevation Spine & Sports Medicine, showed up in both the chiropractor answer and the physical therapy answer. So the AI decides what you are from what it reads about you, and it can file you under more than one thing.

It's one AI on one day, not a ranking, and answers change. But if you're independent, it's worth checking that your site and Google profile say plainly what you do and that you serve Carrollton.

Has a customer ever told you they found you through an AI app? What did they ask it?
```

---

## 3. Small Business DFW (Facebook group, public, about 35.6k members)

- **URL:** https://www.facebook.com/groups/1018085996002850/
- **Rule recap (2026-11-21):** "Be kind and courteous", "No hate speech or bullying", "No Spam Posts". The group's featured post asks "How do you optimize your website for local search results?" Source: https://www.facebook.com/groups/1018085996002850/about
- **Post:** no link, no pitch, no price. Never name a site from the scan.

```
A quick website check any owner can do in 10 minutes, based on something I looked at this week.

I read the home pages of 39 DFW practices and home-service companies (dentists, chiropractors, med spas, HVAC, plumbers, roofers). Every one was on HTTPS and set up for phones, so the basics were fine. The gaps were small and free to fix:

• 8 of 39 page titles (the text on the browser tab, often what Google shows) didn't mention the city they serve.
• 20 of 39 had no "business" label in the page code (structured data that tells Google this is a dentist or plumber at this address). Some sites add it another way, so my quick read may have missed a few.
• 6 had no page description, so Google writes its own snippet.
• 2 had no tap-to-call phone number on mobile.

It matters because BrightLocal's 2026 survey found 54% of people check a business's website after reading good reviews.

Your 10 minutes: Does your browser tab say what you do and where? On your phone, does tapping your number dial it? Search Google for your business name. Does the snippet under your site say what you'd want?

What else do you check on your own site?
```

---

## 4. Alignable: Frisco, TX community

- **URL:** https://www.alignable.com/frisco-tx (confirmed live 2026-11-26)
- **Rule recap:** same as #2. Different text, so it isn't a copy-paste across groups.
- **Gate:** same as #2. Skip if Alignable won't let her post here.

```
Frisco owners, a small pattern from what Google's Gemini says about local businesses.

On Nov 13 I asked it for the best chiropractor and the best dentist in Frisco, TX. Of the 10 names it gave, 4 had "Frisco" right in the business name: Frisco Chiropractic Center, Global Chiropractic Plano Frisco, Dental Care of Frisco and Frisco Smiles Dentistry. One more got a "(Frisco)" tag after its name, a chiropractor it also named for Dallas and Flower Mound.

I'm not saying rename your business. But it suggests the AI leans on clear location signals. My guess is that saying "Frisco" plainly on your site, your Google profile, and in how customers describe you in reviews helps it place you. That's a guess, not a proven rule, and this is one AI on one day.

Has anyone tested this? Did adding your city to your site or profile change who finds you?
```

---

## 5. Local Search Forum

- **URL:** https://www.localsearchforum.com/
- **Rule recap (2026-11-21):** self-promotion "expressly prohibited except in signatures", and no links in posts. Value posts are fine. Source: https://www.localsearchforum.com/threads/welcome-message-and-forum-rules.45024/
- **Why it's here:** the audience is local-SEO practitioners, not owners, so this is the lowest-priority owner post. It goes in because the replies can test whether the website-scan advice holds up before more owners act on it. No signature link to Prisqo until Jilsha decides.

```
Sharing a small DFW data set and looking for others' experience.

I saved Google Gemini's answers to "best <category> in <city>, TX" for 71 category/city pairs across 17 DFW suburbs (Nov 13, 2026, each asked once, one model). Things I didn't expect:

• 41 of 71 answers named exactly 5 businesses. The range was 2 to 10.
• Cross-category picks: one company was named for HVAC in Allen and for roofing in Fort Worth. One clinic appeared in both the chiropractor and physical therapy answers for Carrollton.
• Franchises can take a whole answer: Carrollton house cleaning was 4 for 4 national brands.
• Descriptors get attached: 3 of 5 Flower Mound auto detailers were labeled mobile, and several names got a neighborhood or city tag in parentheses.

Separately, I read the raw home-page HTML of 39 local practices and service companies in the same area: 20 had no LocalBusiness-type JSON-LD (scripts not run, so that's an upper bound) and 8 had no city in the title tag.

Has anyone seen schema or title/city signals correlate with being named in Gemini or AI Overviews for local queries? Or is it mostly reviews and third-party mentions?
```

---

## 6. Alignable: Flower Mound, TX community

- **URL:** https://www.alignable.com/flower-mound-tx (confirmed live 2026-11-26)
- **Rule recap / gate:** same as #2.

```
Flower Mound owners, I asked Google's Gemini "best ___ in Flower Mound, TX" for four kinds of local business on Nov 13. A few things stood out:

• Chiropractors: it named only 4.
• Auto detailing: 3 of the 5 names were mobile detailers, with "Mobile Detailing" or "Mobile Detail" right in how it listed them. If you come to the customer, saying so clearly seems to count.
• Plumbers: 5 names, and one was a multi-city company that shows up in other DFW cities' answers too. Being local doesn't automatically put you on the list.

It's one AI on one day, not a ranking, and answers change. But when customers ask an AI instead of scrolling a map, that short list is the whole answer.

Has anyone here had a customer say they found you through ChatGPT or another AI app? What did they ask?
```

---

## 7. r/DFW (Reddit, backup), about 22k members

- **URL:** https://www.reddit.com/r/DFW/
- **Rule recap (2026-11-21, from `community-posts-2.md`):** only rule 1, "No advertisements", applies. Source: https://safereddit.com/r/dfw (couldn't be re-read 2026-11-26: bot check). Overlaps r/Dallas, so skip this one if the r/Dallas draft has gone up.
- **Post:** no link, no product, no price.

```
I've been asking Google's Gemini who it recommends for everyday stuff around DFW. Same few names keep coming up in odd places.

From answers I saved on Nov 13, 2026:
- One chiropractor got named in Dallas, Frisco AND Flower Mound answers
- One company came up for HVAC in Allen and for roofing in Fort Worth
- "Best house cleaning in Carrollton" was all national franchises (The Cleaning Authority, MaidPro, CottageCare, Merry Maids)
- Most answers were 5 names, period

One AI, one day, not a ranking. I'm in local marketing so I look at this a lot, but I'm not selling anything here.

Who's your go-to local cleaner or HVAC person that an AI would never think to name?
```

---

## 8. r/flowermound (Reddit, backup), about 2.5k members

- **URL:** https://www.reddit.com/r/flowermound/
- **Rule recap (2026-11-21, from `community-posts-2.md`):** "No spam or self-promotion" and "Low effort posts" may be removed. Allowed with care. Source: https://redlib.nadeko.net/r/flowermound (couldn't be re-read 2026-11-26: bot check).
- **Post:** no link, no product, no price.

```
Asked Google's Gemini for the best plumber and best chiropractor in Flower Mound (Nov 13, 2026). Here's what it said:

Plumbers: Absolute Plumbing of Flower Mound, AugerPros Plumbing & Drain, Jensen Plumbing, Legacy Plumbing, Baker Brothers Plumbing, Air & Electric

Chiropractors: FreeForm Chiropractic, Best Life Chiropractic and Wellness Center, New Leaf Chiropractic, Bradley Chiropractic Clinic

One AI on one day, not a ranking, and answers change. Curious how it compares with real life: who in town would you actually call, and who's missing?
```

---

## How to post (checklist for Jilsha)

Same as round 2 (`community-posts-2.md`, "How to post"), plus:

- [ ] Re-open each live rules page on the day you post. If it now bans this kind of post, skip it.
- [ ] Rewrite lightly in your own voice. Keep every name, number, date and the "one AI, one day" line. Don't add names or numbers that aren't in `data/ai-answers.json`, the scan file, or the two cited studies.
- [ ] Never name a business from the website scan, in a post or a comment.
- [ ] One community a day. Never the same text twice. Wait at least a week between two posts in the same group.
- [ ] Stay for 2 hours after posting and reply to every comment.
- [ ] **Turning a comment into a customer:** if someone asks "can you check mine?" or "how did you check?", say you asked Gemini and saved its answer, and that you build a free AI-visibility check. Share `https://prisqo.vilouraai.com/free-check?ref=community3` only in a comment, only when asked, and only where links in comments are allowed. That's the Facebook groups #1 and #3. Not Alignable, r/DFW, r/flowermound or Local Search Forum. Never DM first.
- [ ] If they're in a city the free check doesn't cover (it covers Lewisville, Dallas, Plano, Frisco, Denton, Carrollton, McKinney, Allen, Irving and Garland), offer the free SEO audit instead: `https://prisqo.vilouraai.com/free-seo-audit?ref=community3`.
- [ ] Log each post in `sent-log.md` under "Community posts": date (CST), community, post URL, and comment count after 48 hours. Log any "can you check mine?" as a lead.
- [ ] If a mod removes a post, don't repost. Note the reason here.

## Considered but not drafted (2026-11-26)
| Community | Why not |
|---|---|
| r/Dallas, r/LewisvilleTX, r/Denton, r/plano, r/frisco, r/McKinney, r/FortWorth | Already drafted in round 2 and not yet posted. Post those before adding more there. |
| Alignable: Lewisville | HM-08 #3 is queued there. |
| r/SideProject, Indie Hackers, Show HN, r/indiehackers, r/startups | Founder audiences: they give feedback, not customers. Launch posts are already in `posts.md` / `communities.md`. |
| Online Geniuses, Local SEO Community (FB), agency Discords/Slacks | Agency resale pitch is killed (reply autopsy). Peers, not buyers. |
| r/smallbusiness, r/Entrepreneur, r/marketing, r/LocalSEO | Ban promotion or GEO posts (communities.md, community-posts-2.md). |
| Small Business Owners and Entrepreneurs (FB), DFW Business Owners Meetup | Rules not verified (communities.md #21, #25). |

## Unknowns
- Rules couldn't be re-verified today (Reddit mirrors bot-checked; Alignable guidelines didn't load). Re-check live.
- Whether Alignable lets one account post in several city communities is unverified.
- The scan read raw HTML only. Script-injected schema or titles would be missed.
- Whether any of these posts leads to a reply or a customer is untested.

## Summary
- 8 value-first drafts for the week of 2026-11-30, owner audiences first: FB DFW Business Professionals Networking (missed calls), Alignable Carrollton, FB Small Business DFW (10-minute website check), Alignable Frisco, Local Search Forum, Alignable Flower Mound, then the backups r/DFW and r/flowermound.
- Every fact comes from `data/ai-answers.json` (Gemini, 2026-11-13), a home-page scan Hark ran on 2026-11-26 (`ops/leads/site-scan-2026-11-26.csv`, never named in posts), or the ADA and BrightLocal 2026 pages read 2026-11-26.
- No main post has a link, the Prisqo name or a price. The free-check link goes only in comments, when asked, where allowed.
- Nothing was posted, joined, sent, or signed up for.

DONE
