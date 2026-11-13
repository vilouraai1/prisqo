# hark-mkt-auto-home — tailor offers and drafts for Auto & Home Services

Goal: for every lead in this segment, pick the offer that matches their real need, and write a tailored email or phone/visit script. Research and drafts only. Do NOT send, post, call, visit, or contact anyone. Jilsha sends every message herself.

Branch: `hark-mkt-auto-home`. Open ONE non-draft PR to main when the out file is complete.
Input: `ops/marketing/crm/seg-auto-home.csv` (30 leads; 9 have a public_email, 21 do not).
Offers and decision rule: `ops/marketing/crm/offers.md`.
Output: `ops/marketing/crm/out-auto-home.md`. Also fill the empty `chosen_offer` column in `ops/marketing/crm/seg-auto-home.csv`.
Save to the files as you go and commit often so nothing is lost.

## For every lead in the CSV

1. Read `need_signals` first. Use `recommended_service` and `pitch_angle` as hints, not a script to copy. Choose the best offer from offers.md and write a one-line reason.
2. Set `chosen_offer` on that row in the CSV (for example `Prisqo $19 report`, `Website build`, `AI Receptionist`, `Website + AI Receptionist`, or `AI Agent`).
3. Add a section to `ops/marketing/crm/out-auto-home.md` in CSV order, using this shape:

```
## VL-009 — Bryant's Tire Shop #2 (city)
- chosen_offer: ...
- reason: one line, tied to a specific need signal
- public_email: address, or "none in CRM" (plus any email you found and its source URL)
- draft:
```

### Leads with a public_email
Write a tailored email:
- Under 100 words, plain language, no jargon.
- From Jilsha at vilouraai@gmail.com.
- Cite their specific need signal (a real detail from this lead, not a generic line).
- One clear ask. For the $19 report, point to https://prisqo.vilouraai.com or the free check https://prisqo.vilouraai.com/free-check?ref=email. For website, receptionist, or AI agent, ask for a "quick call to scope it" — do not invent a price.
- Last line, exactly: `Not interested? Reply stop and I won't email again.`
- Include a Subject line and the body.

### Leads without a public_email
Write a short phone or visit script (a few spoken sentences, one clear ask, same offer rules). If you find a real public email on that business's own site, add it to the out file with the source URL, also put it in the CSV `public_email` field, and write the email draft too. Only real emails you saw on their site. Do not guess or invent addresses.

## Finish
End `ops/marketing/crm/out-auto-home.md` with `## Summary` (lead count, how many emails, how many scripts, offer mix) and a final line `DONE`.
Then open one non-draft PR to main.
