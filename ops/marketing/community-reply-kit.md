# Community comment reply kit (HM-29)

**Status:** Drafts only. Nothing here has been posted, commented, sent, or DMed. Jilsha writes every comment herself, from her own accounts.
**Written:** 2026-11-26 (America/Chicago). **For:** comments on the posts in `community-posts-3.md` (HM-28), `community-posts-hm-08.md` and `community-posts-2.md`, from Mon 2026-11-30 on.
**Why this is the revenue item:** the posts have no link, product, or price by design, so the only path to a first customer runs through the comments. A fast, honest reply to "can you check mine?" turns that interest into a free check, and the free check leads to a $19 report. Cold emails got 0 replies (`ops/research/reply-autopsy.md`). Someone who comments has already raised a hand. This is not a cold batch: every reply answers a person who spoke first.

## Ground rules (every reply)
- Answer the question asked first. Keep it short and use your own voice.
- **Links:** only when someone asks, and only where comment links are allowed (table below). Never in a main post. Never DM first. If someone DMs you, the reply-in-DM templates are fine.
- **Price:** only if someone asks. Say "$19, one time, with a 14-day refund if the report fails or comes back empty, no subscription" (pricing.html, checked 2026-11-26).
- **Facts:** only names and counts from the lookup table below (Gemini, saved 2026-11-11/13), the scan totals in `community-posts-3.md`, or the ADA and BrightLocal lines cited there. Never claim ChatGPT was checked, and never promise results.
- Never name a business from `ops/leads/site-scan-2026-11-26.csv`. Never say a commenter's business "isn't recommended" unless you just ran their free check and it showed that.
- Always use `ref=community3` so the lead can be traced back to the community posts.
- Log every "check mine" in `sent-log.md` → "Community posts" → "Leads" (date CST, community, name or handle, business, city/category, what you sent).

## Where a link is allowed in a comment
| Community | Link in a comment when asked? | Source / note |
|---|---|---|
| FB DFW Business Professionals Networking | Yes, if asked (no pitch unprompted) | "Unsolicited sales pitches are not allowed": an answer to a direct ask isn't unsolicited. |
| FB Small Business DFW | Yes, if asked | Only "No Spam Posts" rule. |
| Alignable (any city) | **No.** Say "happy to share how. Send me a message here on Alignable" and reply inside Alignable messages | Guidelines ban links that take members off platform. |
| r/Dallas, r/LewisvilleTX, r/Denton, r/McKinney | **No** (self-promo rules). Answer the how-to in the comment and offer to DM only if they ask | community-posts-2.md rule recaps |
| r/plano, r/frisco, r/FortWorth, r/DFW, r/flowermound | Treat as no. r/frisco rule 2 bans unsolicited offers. Same as above | community-posts-2.md, community-posts-3.md |
| r/Dallas Freedom Friday thread | Yes (that thread allows promo) | community-posts-2.md |
| Local Search Forum | **No** (self-promo only in signatures) | community-posts-3.md |

## Free-check link format
- Prefilled: `https://prisqo.vilouraai.com/free-check?category=<slug>&city=<City>%2C+TX&name=<Business+Name>&ref=community3` (`free-check.js` reads `category`, `city`, `name`).
- The form only covers 10 cities (Allen, Carrollton, Dallas, Denton, Frisco, Garland, Irving, Lewisville, McKinney, Plano) and 15 categories (accountant, chiropractor, coffee-shop, dentist, electrician, family-law, gym, hair-salon, hvac, med-spa, personal-injury, plumber, real-estate-agent, roofer, veterinarian).
- Outside those (for example Flower Mound, Fort Worth, The Colony, auto detailing, house cleaning, physical therapy), use `https://prisqo.vilouraai.com/free-seo-audit?ref=community3`, or answer from the lookup table if the city and category pair is there.

## Reply templates

**R1. "How did you check this?"** (works everywhere, no link)
```
I just asked Google's Gemini the plain question, "best [category] in [city], TX," and saved what it said on Nov 13. One AI, one day, so it's a snapshot. You can try it yourself on your phone in about 30 seconds.
```

**R2. "Can you check mine?" / "What did it say for [category] in [city]?"**
- If the pair is in the lookup table, give the names first (no link needed):
```
For "best [category] in [city]" on Nov 13, Gemini named: [names from the table]. It's one AI on one day, so it moves around. Want me to run a fresh check on your business by name?
```
- If they say yes, and links are allowed there (FB groups):
```
Here you go, it's free and already filled in for you: [prefilled free-check link]. It shows which businesses Gemini names for your category and city, and whether you're one of them.
```
- If links aren't allowed (Alignable, Reddit, Local Search Forum):
```
Happy to. Links aren't allowed in comments here, so send me a message and I'll send it over.
```

**R3. "Is this an ad? What are you selling?"**
```
Fair question. I work in local marketing and build a free check that shows who AI names for a category and city. I didn't link it here because the post is about what the AI says, not about me. Happy to share it if you want it.
```

**R4. "What should I fix?"** (no link)
```
The free stuff first: say your city and what you do plainly on your homepage and in the browser tab title, make sure your phone number taps to call on mobile, keep your Google profile categories and hours right, and ask happy customers to mention the service and town in their reviews. No guarantee any AI picks it up, but those are the basics it can read.
```

**R5. "AI answers are random / nobody uses that."**
```
They do change, which is why I call it a snapshot. On the "nobody uses it" part, BrightLocal's 2026 consumer survey had 45% of people saying they'd used ChatGPT or another AI tool for local recommendations, up from 6% the year before. Still early, but it's moving fast.
```

**R6. Missed-call replies (post #1 in round 3)**
- To "we use an answering service / it's fine":
```
Nice. Have you ever checked it from the outside? A couple of test calls at lunch and after close tell you a lot, and it's the same test the ADA suggests (count calls vs bookings for a month).
```
- To "we miss a ton, any fix?":
```
The cheapest fix I've seen is a "missed call" text back (the ADA suggests it too), plus a rule that every missed call gets a callback the same hour. Track it for a week before and after so you know it worked.
```

**R7. "How much is it?"** (only when asked)
```
The check is free. If you want the full report (6 buyer questions, your score, who's named instead, and what they cite), it's $19 one time, with a 14-day refund if it fails or comes back empty. No subscription.
```

**R8. A DM after a post** (any platform; a DM they started is fine to answer)
```
Hi [name], thanks for reaching out. Here's the free check, filled in for [business] in [city]: [prefilled link]. It takes about 10 seconds. If anything in it looks off, reply here and I'll take a look.
```

## Follow-through after a free check (only if they reply)
- If they say "it didn't name us" or "what now?", use `replies-variant-a-1.md` Reply 2 (the $19 report) in the same thread or DM. Don't start a new thread, and send one reply only.
- If they don't answer after the link, don't chase them in comments. One reminder in a DM they started, at most, after 3 days.

## Lookup table: every saved Gemini answer (71 checks)
Use this to answer "what did it say for X in Y?" fast. Answers saved from Google Gemini on the date shown; one AI, one day, not live.

| City | Category | Checked | Names | Gemini named | Link to give (when allowed) |
|---|---|---|---|---|---|
| Allen | HVAC company | 2026-11-13 | 5 | Jupitair HVAC; Colony Air Conditioning & Heating; Harris Air Services; Rescue Air, LLC; Team Enoch | `/free-check?category=hvac&city=Allen%2C+TX&ref=community3` |
| Allen | Plumber | 2026-11-13 | 5 | Bewley Plumbing, LLC; James Plumbing; Micah's Honest Plumbing; AugerPros Plumbing & Drain LLC; Plumbing Solutions, LLC | `/free-check?category=plumber&city=Allen%2C+TX&ref=community3` |
| Arlington | Auto repair shop | 2026-11-13 | 6 | Dubsquared; Cooper Pit Stop; McGaw's Automotive, Inc.; Advanced Tire & Auto Service; Christian Brothers Automotive; Sun Auto Tire & Service | `/free-seo-audit?ref=community3` |
| Arlington | Dentist | 2026-11-13 | 5 | All Dental Arlington; Park Row Dental Services; Dentists of Arlington; Premier Craft Dental Care; Arlington Dental Associates | `/free-seo-audit?ref=community3` |
| Arlington | HVAC company | 2026-11-13 | 5 | Hightower Service, Inc.; Arlington AC & Heating; Cool Tech Mechanical; NewRise Heating & Cooling; Willard Cooling, Heating, Plumbing, & Electrical | `/free-seo-audit?ref=community3` |
| Arlington | Med spa | 2026-11-13 | 4 | Skinwerx; Glo & Glam MedSpa (Viridian Location); Euro Image Med Spa; Bex Laser Aesthetix | `/free-seo-audit?ref=community3` |
| Carrollton | Auto detailing | 2026-11-13 | 7 | Perfection Auto Detail; Carnation Auto Spa (Hebron); RAC Performance (Detail Shop); Top Mobile Detailing Services (Come to You); Zak's Car Detailing; Dallas Best Car Detailing; Panda Hub | `/free-seo-audit?ref=community3` |
| Carrollton | Body shop | 2026-11-13 | 5 | Xtreme Collision Repair; Gerber Collision & Glass; Crash Champions Collision Repair; CARSTAR Mr. Collision Inc.; Texas Collision Centers | `/free-seo-audit?ref=community3` |
| Carrollton | Chiropractor | 2026-11-13 | 6 | Elevation Spine & Sports Medicine; Texas Spine Center; Weir Family Chiropractic; Carrollton Family Chiropractic; Manfre Chiropractic; Carrollton Spine & Wellness | `/free-check?category=chiropractor&city=Carrollton%2C+TX&ref=community3` |
| Carrollton | Dentist | 2026-11-13 | 4 | Carrollton Smiles; Carrollton Dentistry (Carrollton Dental Group); Celebration Family Dental of Carrollton; Marc Dandois DDS | `/free-check?category=dentist&city=Carrollton%2C+TX&ref=community3` |
| Carrollton | Hair salon | 2026-11-13 | 5 | Chadâm Hair Lounge and CO2 Spa; Roman Hair Salon; Cutting Edge Hair; Champagne Hair Studio; Perfect Hair Salon | `/free-check?category=hair-salon&city=Carrollton%2C+TX&ref=community3` |
| Carrollton | House cleaning | 2026-11-13 | 4 | The Cleaning Authority (Coppell / Carrollton); MaidPro (Carrollton / Plano); CottageCare (Carrollton / Lewisville); Merry Maids (Serving Carrollton) | `/free-seo-audit?ref=community3` |
| Carrollton | Med spa | 2026-11-13 | 5 | Original Skin; St. Mary’s Aesthetics & Wellness Center; Modern Line Med Spa; NWME Aesthetics; Charm Laser Skin Center | `/free-check?category=med-spa&city=Carrollton%2C+TX&ref=community3` |
| Carrollton | Physical therapist | 2026-11-13 | 5 | Green Oaks Physical Therapy (Carrollton Location); Baylor Scott & White Institute for Rehabilitation; Greater Therapy Centers; Elevation Spine & Sports Medicine; Results Physiotherapy | `/free-seo-audit?ref=community3` |
| Dallas | Chiropractor | 2026-11-13 | 5 | Apex Chiropractic; Trinity Mills Chiropractic; Uptown Chiropractic; Woodward Chiropractic & Massage; FreeForm Chiropractic (North Dallas) | `/free-check?category=chiropractor&city=Dallas%2C+TX&ref=community3` |
| Dallas | Dentist | 2026-11-13 | 5 | Dallas Dental Group; Highland Park Dental; Central Dentist; Lakewood Dental Group; Keith W. Brewster, DDS PLLC | `/free-check?category=dentist&city=Dallas%2C+TX&ref=community3` |
| Dallas | Hair salon | 2026-11-13 | 5 | Salon Culture; House of Dear (Uptown); Salon D; Lure Salon (Uptown); Ceron Highland Park | `/free-check?category=hair-salon&city=Dallas%2C+TX&ref=community3` |
| Dallas | Med spa | 2026-11-13 | 5 | Viva Day Spa + Med Spa (Preston Center); Total Med Solutions; Dallas Associated Dermatologists; UPKEEP Med Spa; Renew Beauty Med Spa | `/free-check?category=med-spa&city=Dallas%2C+TX&ref=community3` |
| Dallas | Personal injury lawyer | 2026-11-13 | 5 | Mullen & Mullen Law Firm; Hamilton Wingo, LLP; Miller Weisbrod Olesky, LLP; Lyons & Simmons, LLP; Thompson Law LLP | `/free-check?category=personal-injury&city=Dallas%2C+TX&ref=community3` |
| Dallas | Plumber | 2026-11-13 | 4 | Baker Brothers Plumbing, Air & Electric; Milestone Electric, A/C, & Plumbing; Mr. Rooter Plumbing of Dallas; Berkeys Air Conditioning, Plumbing & Electrical | `/free-check?category=plumber&city=Dallas%2C+TX&ref=community3` |
| Dallas | Roofer | 2026-11-13 | 6 | T Rock Roofing & Contracting; Arrington Roofing; Priority Roofing; New View Roofing; Phillips Home Improvements; KPost Roofing & Waterproofing | `/free-check?category=roofer&city=Dallas%2C+TX&ref=community3` |
| Denton | Dentist | 2026-11-13 | 5 | Garden Oaks Family & Cosmetic Dentistry; Denton Family Dentistry; MINT dentistry; Ideal Dental of Denton; Denton Modern Dentistry and Orthodontics | `/free-check?category=dentist&city=Denton%2C+TX&ref=community3` |
| Denton | HVAC company | 2026-11-13 | 5 | Cogburn’s Heating and Air Conditioning; Work Environmental Systems; Aaron’s Air Conditioning; Morrison’s Heating and Air; Cote’s Mechanical | `/free-check?category=hvac&city=Denton%2C+TX&ref=community3` |
| Denton | Med spa | 2026-11-13 | 5 | Serenity Med Spa (at North Texas Breast & Plastic Surgery Center); The Filling Station Med Spa; Beleza MedSpa; Ma’Belle Med Spa; Lisa Rux Medical Aesthetician | `/free-check?category=med-spa&city=Denton%2C+TX&ref=community3` |
| Denton | Roofer | 2026-11-13 | 5 | Over The Top Roofing; Presidio Roofing Company of Denton; Elite Roofing LLC; Denton Trinity Roofing, Inc.; Gillean Brothers Roofing LLC | `/free-check?category=roofer&city=Denton%2C+TX&ref=community3` |
| Flower Mound | Auto detailing | 2026-11-13 | 5 | My Detail Guys (Mobile Detailing); Panda Hub (Mobile Detailing); EcoPal Mobile Detail; Kwik Kar Wash & Detail Center; Precision Auto Detail & Tint | `/free-seo-audit?ref=community3` |
| Flower Mound | Chiropractor | 2026-11-13 | 4 | FreeForm Chiropractic; Best Life Chiropractic and Wellness Center; New Leaf Chiropractic; Bradley Chiropractic Clinic | `/free-seo-audit?ref=community3` |
| Flower Mound | Nail salon | 2026-11-13 | 5 | Milano Nail Spa Flower Mound; Majestic Nail Spa (Lakeside); Fancy Nails Spa; Texas Nail Lounge; Fiore Nail Bar | `/free-seo-audit?ref=community3` |
| Flower Mound | Plumber | 2026-11-13 | 5 | Absolute Plumbing of Flower Mound; AugerPros Plumbing & Drain LLC; Jensen Plumbing LLC; Legacy Plumbing; Baker Brothers Plumbing, Air & Electric | `/free-seo-audit?ref=community3` |
| Fort Worth | Chiropractor | 2026-11-13 | 5 | Active Spine & Sport Therapy; Prime Spine & Wellness; Bronson Chiropractic Clinic; HealthSource Chiropractic of Southwest Fort Worth; Kare Clinic Chiropractic & Rehab | `/free-seo-audit?ref=community3` |
| Fort Worth | Dentist | 2026-11-13 | 4 | Fort Worth Dental; Brown Family Dentistry; Paulus Dental; Alliance Dental Care | `/free-seo-audit?ref=community3` |
| Fort Worth | HVAC company | 2026-11-13 | 5 | Webb Air Heating & Cooling; Lawrence Air Conditioning & Heating; Air Worth Heating & Cooling; Comfort Experts; Baker Brothers Plumbing, Air & Electric | `/free-seo-audit?ref=community3` |
| Fort Worth | Med spa | 2026-11-13 | 5 | Kalos Medical Spa at Kirby Plastic Surgery; Hanami Medspa; Skin Deep Laser MD; Vitalyc Medspa; It’s A Secret Med Spa | `/free-seo-audit?ref=community3` |
| Fort Worth | Roofer | 2026-11-13 | 6 | Lon Smith Roofing & Construction; Tarrant Roofing; High Pointe Roofing and Construction; Team Enoch; Veritas Roofing; T Rock Roofing & Construction | `/free-seo-audit?ref=community3` |
| Frisco | Chiropractor | 2026-11-13 | 5 | Breakaway Chiropractic & Wellness; FreeForm Chiropractic (Frisco); Global Chiropractic Plano Frisco; Frisco Chiropractic Center; Viva Chiropractic Center | `/free-check?category=chiropractor&city=Frisco%2C+TX&ref=community3` |
| Frisco | Dentist | 2026-11-13 | 5 | Dental Care of Frisco; Smile Lounge; Tribute Family Dentistry; Spectacular Smiles Dental; Frisco Smiles Dentistry | `/free-check?category=dentist&city=Frisco%2C+TX&ref=community3` |
| Frisco | Med spa | 2026-11-13 | 6 | Starwood Med Spa; Hush MedSpa; Geneva Med Spa; Harmoni Health & Beauty; Avanti Skin Center of Willow Bend; Le Beau Visage Medical Spa | `/free-check?category=med-spa&city=Frisco%2C+TX&ref=community3` |
| Grapevine | Chiropractor | 2026-11-13 | 6 | Hands On Health Chiropractic; The Vine Family Chiropractic; Innovate Health; Kreamer Family Chiropractic; The Chiro Co.; Spine Health & Wellness (Grapevine Clinic) | `/free-seo-audit?ref=community3` |
| Grapevine | Dentist | 2026-11-13 | 4 | Grapevine Family Dentistry; Daaboul Family Dentistry; Grapevine Dental; Grapevine Dental Center | `/free-seo-audit?ref=community3` |
| Highland Village | Chiropractor | 2026-11-13 | 5 | Elite Body Chiropractic; Trinity Wellness Center, P.C.; Rooted Chiropractic and Wellness Center; Six One Clinic; Village Chiropractic Center (and Medical Massage Rx) | `/free-seo-audit?ref=community3` |
| Highland Village | Physical therapist | 2026-11-13 | 3 | PeakRx PT & Wellness; Fortitude Performance Physical Therapy; Triumph Physical Therapy & Wellness Center | `/free-seo-audit?ref=community3` |
| Irving | Auto repair shop | 2026-11-13 | 10 | Christian Brothers Automotive; Lakeshore Automotive; K3S Auto Repair; One Stop Automotive; Johnny's Automotive; Lopez Automotive; Hondura & Honcura; AMD Transmissions & Auto Repairs; All American Transmissions & Foreign Auto Repair; SDR Diesel Engine & Performance (Soto Diesel Repair) | `/free-seo-audit?ref=community3` |
| Irving | Chiropractor | 2026-11-13 | 5 | Ethos Chiropractic; Dynamic Sports Medicine (Irving Clinic); City Chiro Sports Center; Newton Chiropractic; Spine Health & Wellness | `/free-check?category=chiropractor&city=Irving%2C+TX&ref=community3` |
| Irving | Dentist | 2026-11-13 | 5 | Advanced Dental Care of Las Colinas; Gentle Dentistry of Las Colinas; Irving Family Dental; Cosmetic and Family Dentistry of Las Colinas; Story Dental | `/free-check?category=dentist&city=Irving%2C+TX&ref=community3` |
| Irving | Family law attorney | 2026-11-13 | 5 | KoonsFuller, P.C. (Dallas/DFW Metroplex); The Law Office of Bryan Fagan, PLLC; Bale Law Firm, PLLC; The Law Offices of Rita M. Boyd, P.C.; Guest and Gray Law Firm (DFW Metroplex) | `/free-check?category=family-law&city=Irving%2C+TX&ref=community3` |
| Irving | HVAC company | 2026-11-13 | 4 | Spencer Air Conditioning & Heating; Reliant Air Conditioning; Berkeys Air Conditioning, Plumbing & Electrical; Aval Air Conditioning & Heating | `/free-check?category=hvac&city=Irving%2C+TX&ref=community3` |
| Irving | Med spa | 2026-11-13 | 5 | The Beauty Clinic MedSpa; A&M Skin & Laser Clinic; Dr. Reddy Medspa; Facial Mania Med Spa; Irving Health and Wellness Clinic | `/free-check?category=med-spa&city=Irving%2C+TX&ref=community3` |
| Irving | Personal injury lawyer | 2026-11-13 | 5 | Domingo Garcia Law Office; Eberstein Witherite, LLP; The Barber Law Firm; Frenkel & Frenkel, LLP; Rad Law Firm | `/free-check?category=personal-injury&city=Irving%2C+TX&ref=community3` |
| Irving | Roofer | 2026-11-13 | 6 | Kidd Roofing; IntegriBuilt Roofing; Hybrid Roofing; Golden Nail Roofing LLC; Simmons & Sons Roofing LLC; Blue Hammer Roofing | `/free-check?category=roofer&city=Irving%2C+TX&ref=community3` |
| Keller | Chiropractor | 2026-11-13 | 4 | Keller Family Chiropractic; Performance Chiropractic Clinic; Thrive Chiropractic; Alpha & Omega Chiropractic | `/free-seo-audit?ref=community3` |
| Keller | Plumber | 2026-11-13 | 5 | Big Blade Plumbing & Rooter; Hat Plumbing, Heating and Air; Longhorn Plumbing; Mother Modern Plumbing, Sewer & Drain; Baker Brothers Plumbing, Air & Electric | `/free-seo-audit?ref=community3` |
| Lewisville | Auto detailing | 2026-11-13 | 5 | Masterpiece Auto Appearance; NTX Mobile Detailing; Carnation Auto Spa; Main Street Car Wash; Bees Mobile Detailing (BMD) | `/free-seo-audit?ref=community3` |
| Lewisville | Barbershop | 2026-11-13 | 5 | Flocka Fadez; Old Town Barbershop; Troy Cuts Barber Shop; Ray's Barber Shop; Barbers @ 101 E | `/free-seo-audit?ref=community3` |
| Lewisville | Chiropractor | 2026-11-13 | 5 | Atchley Chiropractic Centers (Castle Hills location); Shine Chiropractic; HealthSource Chiropractic of Lewisville; Byroad Chiropractic; Curis Functional Health | `/free-check?category=chiropractor&city=Lewisville%2C+TX&ref=community3` |
| Lewisville | Dentist | 2026-11-13 | 4 | Sehnert Precision Dentistry; Capehart Dental of Lewisville; SolidSMILES Dental; Round Grove Family Dentistry | `/free-check?category=dentist&city=Lewisville%2C+TX&ref=community3` |
| Lewisville | Family law attorney | 2026-11-11 | 2 | Jennifer Ilarraza (Ilarraza Law); William F. Neal | `/free-check?category=family-law&city=Lewisville%2C+TX&ref=community3` |
| Lewisville | Hair salon | 2026-11-13 | 5 | Salons of Volterra; Change Hair & Beauty; Salon Thairapy; Tommy Hair Salon; Meraki Luxe & Natural Hair Studios | `/free-check?category=hair-salon&city=Lewisville%2C+TX&ref=community3` |
| Lewisville | House cleaning | 2026-11-13 | 5 | Buckets & Bows Maid Service; MaidPro (Lewisville / Flower Mound); Merry Maids of Lewisville; Full Scope Cleaning, LLC; Green Feather Cleaning Services | `/free-seo-audit?ref=community3` |
| Lewisville | HVAC company | 2026-11-13 | 6 | Advent Air Conditioning; Colony Air Conditioning & Heating; Southern Comfort Mechanical; Aire Serv of Flower Mound / Lewisville; Lex Air Conditioning, Heating, Plumbing & Electrical; Northside Air Conditioning | `/free-check?category=hvac&city=Lewisville%2C+TX&ref=community3` |
| Lewisville | Med spa | 2026-11-13 | 4 | Boutique MedSpa (MD Skin and Laser); Doctor Slim Med Spa; ROOT Med Spa; Stuart Lipton, MD (Medical Spa Services) | `/free-check?category=med-spa&city=Lewisville%2C+TX&ref=community3` |
| Lewisville | Pediatric dentist | 2026-11-13 | 4 | Smile Magic Family Dental; Burst Dental + Kids (Nearby in Carrollton); Hillside Dental; KidSmiles Dental & Orthodontics (Nearby in Flower Mound) | `/free-seo-audit?ref=community3` |
| Lewisville | Personal injury lawyer | 2026-11-11 | 3 | Kuzmich Law Firm; Shuster Law; Just Wrecked Law | `/free-check?category=personal-injury&city=Lewisville%2C+TX&ref=community3` |
| Lewisville | Plumber | 2026-11-13 | 6 | Imperial Plumbing; Master Fix Plumbing; All Metroplex Plumbing; RHD Primary Plumbing; Legacy Plumbing; Berkeys Plumbing | `/free-check?category=plumber&city=Lewisville%2C+TX&ref=community3` |
| McKinney | HVAC company | 2026-11-13 | 3 | Bill Joplin's Air Conditioning & Heating; Airview AC; Harris Air Services | `/free-check?category=hvac&city=McKinney%2C+TX&ref=community3` |
| McKinney | Plumber | 2026-11-13 | 4 | Genzel Plumbing Company; Hackler Plumbing; Baker Brothers Plumbing, Air Conditioning, & Electric; Murley Plumbing | `/free-check?category=plumber&city=McKinney%2C+TX&ref=community3` |
| Plano | Chiropractor | 2026-11-13 | 5 | Epic Chiropractic; Farrar Family Chiropractic; Prime Life Chiropractic; ChiroConcepts of Plano; Whole Body Chiropractic | `/free-check?category=chiropractor&city=Plano%2C+TX&ref=community3` |
| Plano | Dentist | 2026-11-13 | 5 | Parkhaven Dental Care; Texas Dental Specialists; Darren K. Dickson, DDS; The Danna Smile (Jodi Danna, DDS & Mariya Volvovsky, DDS); Advanced Dental Care (Christine C. Hopkins, DDS) | `/free-check?category=dentist&city=Plano%2C+TX&ref=community3` |
| Plano | Personal injury lawyer | 2026-11-13 | 5 | Mullen & Mullen Law Firm; Burress Injury Law; Snellings Law PLLC; Ted B. Lyon & Associates; Jose Robles Jr Law Firm | `/free-check?category=personal-injury&city=Plano%2C+TX&ref=community3` |
| Southlake | Family law attorney | 2026-11-13 | 6 | Varghese Summersett PLLC; Law Office of Dana L. White, PLLC; Beal Law Firm, PLLC; McNulty Law Firm; The Mohr Law Firm, PLLC; KoonsFuller, PC | `/free-seo-audit?ref=community3` |
| Southlake | HVAC company | 2026-11-13 | 5 | Gentry Air Conditioning; Berkeys Plumbing, AC & Electrical; billyGO Air Conditioning & Plumbing; Select Air Conditioning; AirCo Air Conditioning, Heating & Plumbing | `/free-seo-audit?ref=community3` |
| The Colony | Tire shop | 2026-11-13 | 4 | Discount Tire; NTB Tire & Service Centers; Midas; Regio Tire & Shop | `/free-seo-audit?ref=community3` |

## Summary
- Comment and DM reply kit for the community posts (HM-08, round 2, round 3): 8 templates, a per-community link rule, the free-check prefill format, a lead log, and a lookup table of every saved Gemini answer with the right link for each.
- No new outreach. Every reply answers someone who spoke first.
- Nothing posted, commented, sent, or DMed.

DONE
