# Hark review: PR #38 (free-check snapshots for DFW city and niche pairs)

**Result: PASS, after fixes pushed to this branch.** As first submitted it was a FAIL: the data had junk entries that the free check would have shown to leads as "businesses AI named".

## What was wrong, and what I fixed

1. **Data quality (main problem).** Many `named` lists were parsing leftovers, not business names:
   - Advice headings saved as names, such as "Board Certification" and "Verify Licensing". There were 8 checks like this (PI lawyer in Arlington, Fort Worth and Lewisville; roofer in Arlington; plumber in Carrollton and Irving; HVAC in Dallas; family law in Lewisville). I removed those checks, so those pairs now show "Not checked yet" instead of fake names.
   - Section headings and filler, such as "Top", "Highly", "When looking for top", "Quick Comparison", and `<Carousel>` tags. Removed.
   - Markdown table rows saved as names (Arlington med spa, Carrollton chiropractor and hair salon, McKinney HVAC). I kept only the business name from the first cell and removed duplicates.
   - Addresses in parentheses and cut-off text, such as "(1223 Colorado Ln)", "Eberstein Witherite, LLP (1" and "Carnation Auto Spa (Lewisville". Trimmed.
   - Every check now has at least 2 business names. All of them come from the raw answers. Nothing was added.
2. **Duplicate categories.** The new data used `personal-injury-lawyer` and `family-lawyer`, but the form uses `personal-injury` and `family-law`. That gave two options for the same thing in the dropdown. I merged them into the form's slugs, and the valid Lewisville Nov 11 answers are kept.
3. **Labels and city spelling.** "Hvac" and "Med Spa" now match the form's wording ("HVAC company", "Med spa"). "Mckinney, TX" was a second option next to the form's "McKinney, TX"; it is now "McKinney, TX".
4. **Matching wasn't case or whitespace tolerant.** Lookups and URL prefill used exact string matches. A homepage visitor typing "fort worth" got no city, and an odd `category` value could throw inside `querySelector`. Now:
   - City and category matching ignore case, spacing, punctuation and a trailing "TX". It also takes plurals and common aliases ("roofers", "Auto Repair", "personal injury attorney").
   - A city with no snapshot, such as "Austin", is kept and shows "Not checked yet". The visitor never sees another city's answer.
   - "Not checked yet" now lists the cities that do have a saved answer for that category, then the $19 CTA.
5. Small wording fix on the not-named message ("on Gemini on Nov 13" now reads "In our check with Gemini on Nov 13, 2026").

## Checks run

- `data/ai-answers.json` is valid JSON. 71 checks, each with `category`, `categoryLabel`, `checked`, `city`, `named[]` and `question`, which is what `free-check.js` reads. No duplicate pairs.
- jsdom test against the real page: all 71 pairs return "You showed up" when given their first named business. Fort Worth roofer, Arlington auto repair, "roofers + fort worth", "ARLINGTON, tx", "  arlington  ", "Mckinney", Austin (fallback), accountant/Dallas (fallback), and a quote-injection URL all behave. `node --check` passes.
- Unchanged: the form fields `category`, `city` and `name`; the $19 checkout link `/?ref=freecheck#check` (all 4 occurrences); and the `/free-seo-audit` footer link.
- No invented numbers or testimonials. The only dates are the snapshot dates (Nov 11 and Nov 13, 2026). Business-name data comes only from the saved answers.
- No Worker, engine or Stripe code changed. The PR touches only `data/ai-answers.json`, `free-check.html` and `free-check.js`, plus this file.

## Still worth knowing

- Fort Worth now has chiropractor, dentist, HVAC, med spa and roofer. Auto repair and PI lawyer fall back to "Not checked yet". Arlington roofer and PI lawyer fall back the same way.
- The Lewisville chiropractor answer is now the Nov 13 Gemini one (Atchley, Shine, HealthSource, Byroad, Curis). The Kingdom Chiropractic follow-up draft quotes the Nov 11 answer (BBC Health, Shine, Dr. Newell Smith Estess). Kingdom is still not named either way, but the names a lead sees on the page will differ from the email.
- The homepage hero note still says "Free snapshot from our Nov 11, 2026 check". Out of scope here, so it's left unchanged.

Not merged, not deployed.
