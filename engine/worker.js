// Prisqo report engine — small Cloudflare Worker.
// Asks Groq's gpt-oss-20b (live web search) whether a business gets
// recommended, for 6 buyer-style prompts, and returns a report with
// the raw answers stored so any score can be audited.
//
// NOT deployed by this file. Kiwi deploys it.
//
// Free-plan shape: there is NO background work (no waitUntil).
// POST /check only creates a job. The page calls POST /step/:jobId
// repeatedly, and each call runs exactly ONE unit of work — one
// prompt, or one fallback parse — then returns progress. On a
// Groq 429 the step returns "retry_later" and the page waits; the
// worker never sleeps, because a sleeping Worker burns its own
// time limit and still cannot out-wait a rate-limit window.
//
// Secrets (wrangler secret put, never in this file):
// GROQ_API_KEY — Groq API key
// CHECK_TOKEN — REQUIRED. POST /check and POST /step both
// require header X-Prisqo-Token with that value, and the
// worker refuses to start a check at all if it is not set.
// Without it, anyone who finds the endpoint can burn the cap.
// Binding: KV namespace PRISQO_KV (jobs, reports, daily spend).
// CORS: this Worker answers browsers only from
// https://prisqo.vilouraai.com, and only that origin. Every other
// origin gets no Access-Control-Allow-Origin header, so a browser
// on any other site cannot read a response. The token is still
// never in public JS: the normal path is the same-origin proxy
// on prisqo.vilouraai.com, which adds the token server-side.
// Direct browser calls (if ever used) must send X-Check-Token;
// the Worker also accepts the older X-Prisqo-Token name, and
// accepts `url` as an alias for `website` in POST /check.
// Var: DAILY_SPEND_CAP_USD, default "1.00" (see README).
//
// STRIPE (test mode only, added Nov 5): one paid report via
// Stripe Checkout, hosted Stripe page. No Groq check runs until
// Stripe says the payment succeeded. Flow:
//   POST /create-checkout-session -> Stripe Checkout Session
//     (mode=payment, one STRIPE_PRICE_ID line item), browser is
//     redirected to the session URL. The paid inputs are stored
//     in KV under checkout:<sessionId> (paid:false, used:false).
//   Stripe webhook POST /webhook/stripe (signature verified
//     with STRIPE_WEBHOOK_SECRET) marks checkout.session.completed
//     as paid:true. Or, if the webhook has not landed yet when
//     the buyer returns, /check verifies the session directly
//     with Stripe's API before running anything.
//   POST /check requires { paidSessionId }; it uses the STORED
//     inputs (never the browser's), marks the session used:true
//     before creating the job, and rejects a missing, unpaid, or
//     already-used session with 402. There is no free /check path.
//   Safe retry: marking used before the job runs must not burn
//     a payment when Groq then fails. If the job never produced
//     a report (status "failed", or the job record is gone), the
//     same paidSessionId may start ONE replacement job
//     (retries: 1). If that job is still running, /check resumes
//     it instead of starting another. A finished job (report
//     exists, status "done") never reuses.
//   Double-submit: KV has no atomic compare-and-swap, so two
//     tabs hitting /check at once cannot be locked out for
//     certain. The tightening is a claim + re-read: /check
//     writes used:true with its own jobId, re-reads the record,
//     and if another /check's jobId is stored instead, it
//     discards its own jobId and resumes the stored job — so
//     at most one job is ever created from one payment. This
//     is best-effort (it relies on KV read-after-write in the
//     same region), not a guarantee; it is not a Durable Object
//     and adds no new binding.
// Secrets (wrangler secret put, never in this file):
//   STRIPE_SECRET_KEY — Stripe test secret key (sk_test_...)
//   STRIPE_WEBHOOK_SECRET — webhook endpoint secret (whsec_...)
// Vars (wrangler.toml, not secrets):
//   STRIPE_PRICE_ID — test-mode Price id (price_...) for one report
//   SITE_URL — default https://prisqo.vilouraai.com
// No Stripe publishable key is used anywhere: Checkout is hosted,
// the browser only ever follows a server-generated session URL.
//
// Lessons from the Nov 4 mini-report, baked in:
// 1. One browser_search prompt used ~29,000 tokens, not a few hundred.
// Cost per prompt is estimated at $0.0035 and replaced with the
// actual Groq usage cost after each call.
// 2. The old LLM parse step failed on all 6 prompts and silently
// emptied the competitor list. Extraction here is deterministic
// FIRST (numbered lists and tables in the raw answer). The LLM
// parse is only a fallback, and its error is recorded, never
// swallowed.
// 3. A prose mention is not a recommendation. Firms named only in
// prose get rank null and method "prose_mention" and never count
// as top-3.
// 4. This is ONE Groq model, 6 answers. It is NOT ChatGPT,
// Perplexity, Claude, Grok, or Google AI Overviews. The report
// says that plainly; do not remove the disclosure.
// 5. Six prompts fit Groq's free tier: ~29,000 tokens each is
// ~174,000 tokens per report, under the 200,000/day cap (one
// full report a day; parse fallbacks are small non-search calls).
// 6. Nov 5 live check: the first vilouraai.com job failed after
// prompt 1 with Groq 400 context_length_exceeded ("Please reduce
// the length of the messages or completion"), and a retry of the
// same inputs then finished all 6 prompts. Cause: gpt-oss-20b's
// context window is 131,072 tokens, and one browser_search call
// already pulls ~29,000 prompt tokens of search results; a long
// browsing session can push a single call over the window. The
// fix is in the prompt, not the model: one search only, a short
// answer (at most 5 businesses, name + website only, no
// descriptions), a 512-token completion cap, and — if Groq still
// says context_length_exceeded — one retry with an even shorter
// prompt (top 3 only, 256 tokens). Groq's browser_search tool
// takes no max-results parameter, so there is no server-side
// knob to turn; the instruction is the knob. The parse fallback
// also truncates its input, so a long answer can never blow the
// window on a later step either.

export const MODEL = "openai/gpt-oss-20b";
export const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
// Groq list prices, Oct 2026, per 1M tokens. Re-check before launch.
export const PRICE_IN = 0.075;
export const PRICE_OUT = 0.30;
export const ESTIMATE_PER_PROMPT_USD = 0.0035;
// Context budget: gpt-oss-20b has a 131,072-token window, and one
// browser_search call already pulls ~29,000 prompt tokens of
// search results (measured Nov 4). Keep everything we send small
// and cap the answer, so one prompt + its search results stays
// under the window. See lesson 6 in the header.
export const MAX_ANSWER_TOKENS = 512;
export const MAX_SHORT_ANSWER_TOKENS = 256;
export const MAX_PARSE_TOKENS = 256;
export const PARSE_INPUT_CHARS = 4000;
export const ANSWER_SYSTEM =
"Use live web search once, then answer. List at most 5 businesses as a numbered list, one per line, exactly as: 1. **Name** https://example.com — no descriptions. If you cannot find a clear recommendation, say so in one line. Do not invent businesses, addresses or ratings.";
export const SHORT_ANSWER_SYSTEM =
"Use live web search once. List at most 3 businesses as a numbered list, exactly as: 1. **Name** https://example.com — no descriptions.";
export const PARSE_SYSTEM =
"Extract the businesses named in the answer, in the order named. Output one per line exactly as: NAME | URL-or-blank | RANK (1, 2, 3...). Do not add businesses that are not in the answer. If no business is named, output: None | | 0";

export const PROMPT_TEMPLATES = [
"best {category} in {city}",
"top rated {category} in {city}",
"who is the most trusted {category} in {city}?",
"affordable {category} near {city}",
"recommend a good {category} in {city} with great reviews",
"best {category} in {city} for families",
];

export function buildPrompts(category, city) {
const place = city || "near me";
return PROMPT_TEMPLATES.map((t) =>
t.replaceAll("{category}", category).replaceAll("{city}", place),
);
}

export function costOfUsage(usage) {
const u = usage || {};
return (
((u.prompt_tokens || 0) * PRICE_IN + (u.completion_tokens || 0) * PRICE_OUT) /
1_000_000
);
}

function norm(s) {
return String(s || "")
.toLowerCase()
.replace(/[^a-z0-9]+/g, " ")
.replace(/\s+/g, " ")
.trim();
}

function cleanUrl(u) {
if (!u) return null;
// Strip Groq citation markers, e.g. deftlocal.ai
return u.trim().replace(/[).,]+$/, "").split("【")[0].trim() || null;
}

function baseName(name) {
let n = String(name || "").trim();
const paren = n.match(/\(([^)]+)\)/);
if (paren && paren[1].length > 3) n = paren[1];
else n = n.replace(/\s*\([^)]*\)/, "");
n = n.split(/\s+[-–—]\s+/)[0].trim();
for (const suf of [" inc.", " inc", " llc", " ltd", " co", " company"]) {
if (n.toLowerCase().endsWith(suf)) {
n = n.slice(0, -suf.length).trim();
break;
}
}
return n.replace(/\s+/g, " ").replace(/[ *,.:]+$/, "");
}

function domainOf(url) {
try {
return new URL(url).hostname.replace(/^www\./, "");
} catch {
return "";
}
}

// Deterministic extraction, pass 1: markdown tables, then numbered
// bold entries, with a URL searched in the following few lines.
export function extractRanked(text) {
const lines = String(text || "").split("\n");
const table = [];
for (const line of lines) {
const m = line.match(
/^\s*\|\s*(\d+)\s*\|\s*\*\*([^*]+)\*\*\s*\|\s*(https?:\/\/[^\s|]+)/,
);
if (m) {
table.push({
name: baseName(m[2]),
url: cleanUrl(m[3]),
rank: Number(m[1]),
method: "table",
});
}
}
if (table.length) return table;
const out = [];
for (let i = 0; i < lines.length; i++) {
const m = lines[i].match(/^\s*\d+[.)]\s*\*\*([^*]+)\*\*/);
if (!m) continue;
const rank = Number(lines[i].match(/^\s*(\d+)/)[1]);
const chunk = lines.slice(i, i + 4).join("\n");
const um = chunk.match(/https?:\/\/[^\s)>\]"'【]+/);
out.push({
name: baseName(m[1]),
url: um? cleanUrl(um[0]): null,
rank,
method: "numbered",
});
}
return out;
}

// Pass 2: firms named only in prose, using names established by pass 1
// in other answers. Rank null, never a recommendation.
export function extractProseMentions(text, canonical) {
const found = [];
const hay = norm(text);
for (const c of canonical) {
if (norm(c.name) && hay.includes(norm(c.name))) {
found.push({ name: c.name, url: c.url || null, rank: null, method: "prose_mention"});
}
}
return found;
}

export function extractBusinesses(answers) {
const ranked = answers.map((a) => extractRanked(a.text));
const canonical = new Map();
for (const list of ranked) {
for (const b of list) canonical.set(norm(b.name), b);
}
return answers.map((a, i) => {
if (ranked[i].length) return ranked[i];
return extractProseMentions(a.text, [...canonical.values()]);
});
}

export function mentionsBusiness(text, business) {
const hay = norm(text);
const candidates = [business.name,...(business.aliases || []), business.domain]
.map((s) => norm(s.replace(/^https?:\/\//, "").replace(/^www\./, "")))
.filter(Boolean);
return candidates.some((c) => hay.includes(c));
}

export function computeScore(answers, businesses, business) {
const total = answers.length || 1;
let mentioned = 0;
let top3 = 0;
answers.forEach((a, i) => {
const list = businesses[i] || [];
const idx = list.findIndex(
(b) =>
norm(b.name) === norm(business.name) ||
(b.url && domainOf(b.url) === norm(business.domain)),
);
if (idx >= 0 || mentionsBusiness(a.text, business)) {
mentioned += 1;
if (idx >= 0 && idx < 3) top3 += 1;
}
});
return {
score: Math.round(100 * (0.7 * (mentioned / total) + 0.3 * (top3 / total))),
mentioned,
total,
top3,
};
}

export function rankCompetitors(businesses, business) {
const counts = new Map();
for (const list of businesses) {
const seen = new Set();
for (const b of list) {
const key = domainOf(b.url) || norm(b.name);
if (!key || seen.has(key)) continue;
seen.add(key);
if (
norm(b.name) === norm(business.name) ||
key === norm(business.domain)
) continue;
const prev = counts.get(key) || { name: b.name, url: b.url || null, count: 0};
prev.count += 1;
counts.set(key, prev);
}
}
return [...counts.values()].sort((a, b) => b.count - a.count).slice(0, 10);
}

function citationDomains(text) {
const counts = new Map();
for (const raw of String(text || "").match(/https?:\/\/[^\s)>\]"'【]+/g) || []) {
const host = domainOf(cleanUrl(raw));
if (host) counts.set(host, (counts.get(host) || 0) + 1);
}
return [...counts.entries()]
.map(([domain, count]) => ({ domain, count}))
.sort((a, b) => b.count - a.count);
}

async function groq(env, messages, tools, maxTokens) {
const res = await fetch(GROQ_URL, {
method: "POST",
headers: {
authorization: `Bearer ${env.GROQ_API_KEY}`,
"content-type": "application/json",
"User-Agent": "Prisqo-report-engine/1.0",
},
body: JSON.stringify({
model: MODEL,
messages,
...(tools? { tools, tool_choice: "required"}: {}),
max_completion_tokens: maxTokens,
reasoning_effort: "low",
}),
});
if (!res.ok) {
const bodyText = await res.text();
const err = new Error(`Groq ${res.status}: ${bodyText.slice(0, 500)}`);
err.status = res.status;
err.bodyText = bodyText;
try {
const parsed = JSON.parse(bodyText);
err.groqMessage = parsed.error && parsed.error.message ? parsed.error.message : null;
} catch {
err.groqMessage = null;
}
const headerRetry = res.headers.get("retry-after");
const m = (err.groqMessage || bodyText).match(/try again in ([0-9.]+)s/i);
err.waitSeconds = headerRetry ? Number(headerRetry) : (m ? Number(m[1]) : null);
throw err;
}
return res.json();
}

// One prompt, at most three Groq calls, all inside this step:
// the first attempt with the short-answer prompt; one retry only
// when Groq returns a 400 saying the output could not be parsed
// (a transient tool-output parse failure, not a bad prompt); and
// one shortened retry only when Groq returns a 400
// context_length_exceeded (a browsing session that pulled too
// much search text into the 131k window — retry with top 3 only
// and a 256-token cap). Any other error throws immediately. On a
// 429 the step caller returns "retry_later" and the page waits
// and retries the same step later; nothing is advanced and
// nothing is charged.
async function runPrompt(env, prompt) {
const attempt = async (system, user, maxTokens) => {
const answer = await groq(
env,
[
{ role: "system", content: system },
{ role: "user", content: user },
],
[{ type: "browser_search" }],
maxTokens,
);
const text = answer.choices?.[0]?.message?.content || "";
return { prompt, text, usage: answer.usage || null };
};
const isContextLength = (e) => {
const hay = `${e.bodyText || ""} ${e.message || ""} ${e.groqMessage || ""}`.toLowerCase();
return e.status === 400 && (hay.includes("context_length_exceeded") || hay.includes("reduce the length of the messages"));
};
const isParseError = (e) => {
const hay = `${e.bodyText || ""} ${e.message || ""}`.toLowerCase();
return e.status === 400 && hay.includes("output could not be parsed");
};
try {
return await attempt(ANSWER_SYSTEM, prompt, MAX_ANSWER_TOKENS);
} catch (e) {
if (isContextLength(e)) {
// One shortened retry: fewer businesses, no descriptions,
// smaller completion cap. If this also overflows, the job
// fails with the real error rather than looping.
return await attempt(SHORT_ANSWER_SYSTEM, `${prompt} Short list only, top 3.`, MAX_SHORT_ANSWER_TOKENS);
}
if (isParseError(e)) {
return await attempt(ANSWER_SYSTEM, prompt, MAX_ANSWER_TOKENS);
}
throw e;
}
}

function spendKeyForToday() {
return `spend:${new Date().toISOString().slice(0, 10)}`;
}

async function finalizeReport(env, kv, job) {
const { website, category, city, businessName} = job.input;
const business = {
name: businessName || new URL(website).hostname.replace(/^www\./, ""),
domain: new URL(website).hostname.replace(/^www\./, ""),
aliases: [],
};
const businesses = job.businesses || extractBusinesses(job.answers);
const citeCounts = new Map();
for (const a of job.answers) {
for (const c of citationDomains(a.text)) {
citeCounts.set(c.domain, (citeCounts.get(c.domain) || 0) + c.count);
}
}
const report = {
version: 1,
createdAt: new Date().toISOString(),
engine: {
model: MODEL,
provider: "Groq",
tool: "browser_search (live web search)",
notChecked: ["ChatGPT", "Perplexity", "Claude", "Grok", "Google AI Overviews"],
note: "A search-grounded stand-in measurement. Results vary between runs and differ from what a logged-in user sees in consumer AI apps.",
},
input: { website, category, city: city || null, businessName: business.name},
prompts_completed: job.answers.length,
prompts_planned: job.prompts.length,
capped:!!job.capped,
rate_limited:!!job.rateLimited,
complete: job.answers.length === job.prompts.length &&!job.capped &&!job.rateLimited,
spend: {
day: spendKeyForToday().slice("spend:".length),
cap_usd: Number(env.DAILY_SPEND_CAP_USD || "1.00"),
spent_usd: Number((await kv.get(spendKeyForToday())) || 0),
},
score: computeScore(job.answers, businesses, business),
competitors: rankCompetitors(businesses, business),
citations: [...citeCounts.entries()]
.map(([domain, count]) => ({ domain, count}))
.sort((a, b) => b.count - a.count),
answers: job.answers.map((a, i) => ({...a, businesses: businesses[i] || []})),
};
await kv.put(`report:${job.id}`, JSON.stringify(report));
await kv.put(`job:${job.id}`, JSON.stringify({...job, status: "done", reportId: job.id}));
return report;
}

// Run exactly ONE unit of work for a job, then save progress.
// Returns { httpStatus, body}. The page drives the job by calling
// this repeatedly until status is "done".
async function runOneStep(env, kv, job) {
const cap = Number(env.DAILY_SPEND_CAP_USD || "1.00");
const spendKey = spendKeyForToday();
const getSpend = async () => Number((await kv.get(spendKey)) || 0);
const save = async (patch) => {
Object.assign(job, patch);
await kv.put(`job:${job.id}`, JSON.stringify(job));
};
const progressBody = (status) => ({
jobId: job.id,
status,
progress: job.answers.length,
total: job.prompts.length,
parse_progress: job.businesses? job.parseIndex || 0: null,
parse_total: job.businesses? job.answers.length: null,
capped:!!job.capped,
});

if (job.status === "done") {
return { httpStatus: 200, body: { jobId: job.id, status: "done", reportId: job.id}};
}

// Phase 1: one answer prompt per step.
if (job.answers.length < job.prompts.length) {
const spent = await getSpend();
if (spent + ESTIMATE_PER_PROMPT_USD > cap) {
await save({ capped: true, status: "running"});
const report = await finalizeReport(env, kv, job);
return { httpStatus: 200, body: {...progressBody("done"), capped: true, report}};
}
let a;
try {
a = await runPrompt(env, job.prompts[job.answers.length]);
} catch (e) {
if (e.status === 429) {
// Do not advance, do not charge, do not sleep. The page
// waits (about 65 seconds on the free tier) and retries
// this same step.
return {
httpStatus: 429,
body: {
...progressBody("retry_later"),
retry_after_seconds: e.waitSeconds ? Math.ceil(e.waitSeconds) : 65,
groq_wait_seconds: e.waitSeconds ?? null,
groq_error: (e.groqMessage || e.bodyText || e.message || "").slice(0, 500),
reason: "Groq rate limit. Wait, then call this same step again.",
},
};
}
await save({ status: "failed", error: String(e.message || e)});
return { httpStatus: 502, body: {...progressBody("failed"), error: String(e.message || e)}};
}
const actual = costOfUsage(a.usage);
await kv.put(spendKey, String((await getSpend()) + actual), { expirationTtl: 86400});
job.answers.push({...a, cost_usd: actual});
await save({ status: "running"});
return { httpStatus: 200, body: progressBody("running")};
}

// Phase 2: compute deterministic extraction once (no Groq call).
if (!job.businesses) {
await save({ businesses: extractBusinesses(job.answers), parseIndex: 0, status: "running"});
return { httpStatus: 200, body: progressBody("running")};
}

// Phase 3: one LLM parse fallback per step, only where
// deterministic extraction found nothing. A parse 429 returns
// retry_later without advancing; any other parse error is
// recorded on that answer and the step moves on, so one bad
// parse can never block the report.
if (job.parseIndex < job.answers.length) {
const i = job.parseIndex;
if (job.businesses[i].length ||!job.answers[i].text) {
await save({ parseIndex: i + 1});
return { httpStatus: 200, body: progressBody("running")};
}
try {
const parsed = await groq(
env,
[
{ role: "system", content: PARSE_SYSTEM },
{ role: "user", content: job.answers[i].text.slice(0, PARSE_INPUT_CHARS) },
],
null,
MAX_PARSE_TOKENS,
);
const list = [];
for (const line of String(parsed.choices?.[0]?.message?.content || "").split("\n")) {
const m = line.match(/^\s*(?:\d+[.)]\s*)?([^|\n]+?)\s*\|\s*([^|\n]*?)\s*\|\s*(\d+)\s*$/);
if (m &&!/^none$/i.test(m[1].trim())) {
list.push({ name: baseName(m[1]), url: cleanUrl(m[2]) || null, rank: Number(m[3]), method: "llm_parse"});
}
}
list.sort((x, y) => x.rank - y.rank);
job.businesses[i] = list;
await kv.put(spendKey, String((await getSpend()) + costOfUsage(parsed.usage)), { expirationTtl: 86400});
} catch (e) {
if (e.status === 429) {
return {
httpStatus: 429,
body: {
...progressBody("retry_later"),
retry_after_seconds: e.waitSeconds ? Math.ceil(e.waitSeconds) : 65,
groq_wait_seconds: e.waitSeconds ?? null,
groq_error: (e.groqMessage || e.bodyText || e.message || "").slice(0, 500),
reason: "Groq rate limit. Wait, then call this same step again.",
},
};
}
job.answers[i].parse_error = String(e.message || e);
}
await save({ parseIndex: i + 1});
return { httpStatus: 200, body: progressBody("running")};
}

const report = await finalizeReport(env, kv, job);
return { httpStatus: 200, body: {...progressBody("done"), report}};
}

// ---- Stripe (test mode) ----
// KV record: checkout:<stripeSessionId> =
// { paid, used, input:{website,category,city,businessName}, createdAt }
function checkoutKey(sessionId) {
return `checkout:${sessionId}`;
}
async function stripeApi(env, path, method, params) {
if (!env.STRIPE_SECRET_KEY) throw new Error("STRIPE_SECRET_KEY is not set.");
const res = await fetch(`https://api.stripe.com/v1${path}`, {
method,
headers: {
authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
"content-type": "application/x-www-form-urlencoded",
"User-Agent": "Prisqo-report-engine/1.0",
},
body: params ? new URLSearchParams(params).toString() : undefined,
});
const text = await res.text();
if (!res.ok) throw new Error(`Stripe ${res.status}: ${text.slice(0, 300)}`);
return JSON.parse(text);
}
// Constant-time hex comparison: the loop never exits early, so how
// long it takes does not reveal how many leading characters matched.
// (A length mismatch returns false at once; lengths are not secret
// here — a valid signature is always 64 hex chars.)
function timingSafeEqualHex(a, b) {
if (a.length !== b.length) return false;
let diff = 0;
for (let i = 0; i < a.length; i++) {
diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
}
return diff === 0;
}
async function verifyStripeSignature(payload, header, secret) {
// Stripe-Signature: t=<timestamp>,v1=<hmac>,v1=<hmac>...
// HMAC-SHA256 over "<t>.<payload>" with the webhook secret.
if (!header || !secret) return false;
const parts = Object.fromEntries(
header.split(",").map((kv) => {
const i = kv.indexOf("=");
return [kv.slice(0, i), kv.slice(i + 1)];
}),
);
const t = Number(parts.t);
if (!t || Math.abs(Date.now() / 1000 - t) > 300) return false;
const key = await crypto.subtle.importKey(
"raw",
new TextEncoder().encode(secret),
{ name: "HMAC", hash: "SHA-256" },
false,
["sign"],
);
const sig = await crypto.subtle.sign(
"HMAC",
key,
new TextEncoder().encode(`${t}.${payload}`),
);
const hex = [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, "0")).join("");
const candidates = header.split(",").filter((kv) => kv.startsWith("v1=")).map((kv) => kv.slice(3));
return candidates.some((c) => timingSafeEqualHex(c, hex));
}
// Returns the checkout record if Stripe says this session is paid,
// marking it paid in KV on the way. Never returns true for an
// unpaid session, and never calls Groq.
async function sessionIsPaid(env, kv, sessionId) {
const raw = await kv.get(checkoutKey(sessionId));
if (!raw) return { ok: false, reason: "unknown session" };
const rec = JSON.parse(raw);
if (rec.paid) return { ok: true, record: rec };
let session;
try {
session = await stripeApi(env, `/checkout/sessions/${encodeURIComponent(sessionId)}`, "GET");
} catch (e) {
return { ok: false, reason: `Stripe lookup failed: ${String(e.message || e)}` };
}
if (session.payment_status !== "paid") return { ok: false, reason: "not paid" };
rec.paid = true;
await kv.put(checkoutKey(sessionId), JSON.stringify(rec));
return { ok: true, record: rec };
}

function json(body, status = 200) {
return new Response(JSON.stringify(body), {
status,
headers: { "content-type": "application/json" },
});
}
export const ALLOWED_ORIGIN = "https://prisqo.vilouraai.com";
function corsHeaders(request) {
const origin = request.headers.get("Origin");
if (origin !== ALLOWED_ORIGIN) return {};
return {
"Access-Control-Allow-Origin": ALLOWED_ORIGIN,
"Access-Control-Allow-Methods": "GET, POST, OPTIONS",
"Access-Control-Allow-Headers": "Content-Type, X-Check-Token, X-Prisqo-Token",
"Access-Control-Max-Age": "86400",
"Vary": "Origin",
};
}
function corsJson(request, body, status = 200) {
return new Response(JSON.stringify(body), {
status,
headers: { "content-type": "application/json", ...corsHeaders(request) },
});
}

function cleanUrlInput(raw) {
try {
let input = String(raw || "").trim();
// A bare domain ("example.com") is a website, not an error:
// add https:// so new URL() accepts it.
if (input && !/^[a-z][a-z0-9+.-]*:\/\//i.test(input)) input = `https://${input}`;
const u = new URL(input);
if (u.protocol!== "http:" && u.protocol!== "https:") return null;
if (["localhost", "127.0.0.1", "[::1]"].includes(u.hostname)) return null;
return u.href;
} catch {
return null;
}
}

// CHECK_TOKEN is required: missing token = 500 config error, wrong
// token = 401. No check or step runs without it.
function checkToken(request, env) {
if (!env.CHECK_TOKEN) return { ok: false, status: 500, error: "CHECK_TOKEN is not set. Set it as a secret before using /check or /step."};
if (request.headers.get("X-Check-Token") !== env.CHECK_TOKEN && request.headers.get("X-Prisqo-Token") !== env.CHECK_TOKEN) {
return { ok: false, status: 401, error: "Unauthorized."};
}
return { ok: true};
}

export default {
async fetch(request, env) {
const url = new URL(request.url);
const kv = env.PRISQO_KV;
if (!kv) return corsJson(request, { error: "PRISQO_KV binding is not configured."}, 500);
if (request.method === "OPTIONS") {
return new Response(null, { status: 204, headers: corsHeaders(request) });
}

if (request.method === "GET" && url.pathname === "/spend") {
const day = spendKeyForToday().slice("spend:".length);
return corsJson(request, {
day,
cap_usd: Number(env.DAILY_SPEND_CAP_USD || "1.00"),
spent_usd: Number((await kv.get(spendKeyForToday())) || 0),
});
}

if (request.method === "POST" && url.pathname === "/create-checkout-session") {
const auth = checkToken(request, env);
if (!auth.ok) return corsJson(request, { error: auth.error}, auth.status);
if (!env.STRIPE_SECRET_KEY) return corsJson(request, { error: "STRIPE_SECRET_KEY is not set."}, 500);
if (!env.STRIPE_PRICE_ID) return corsJson(request, { error: "STRIPE_PRICE_ID is not set."}, 500);
let input;
try {
input = await request.json();
} catch {
return corsJson(request, { error: "Body must be JSON."}, 400);
}
const website = cleanUrlInput(input.website || input.url);
const category = String(input.category || "").trim().slice(0, 100);
const city = String(input.city || "").trim().slice(0, 100);
if (!website ||!category) {
return corsJson(request, { error: "website (or url, http/https URL) and category are required."}, 400);
}
const paidInput = {
website,
category,
city,
businessName: String(input.businessName || "").trim().slice(0, 200) || null,
};
const siteUrl = (env.SITE_URL || "https://prisqo.vilouraai.com").replace(/\/$/, "");
let session;
try {
session = await stripeApi(env, "/checkout/sessions", "POST", {
"mode": "payment",
"line_items[0][price]": env.STRIPE_PRICE_ID,
"line_items[0][quantity]": "1",
"success_url": `${siteUrl}/?paid=1&session_id={CHECKOUT_SESSION_ID}`,
"cancel_url": `${siteUrl}/?cancelled=1`,
});
} catch (e) {
return corsJson(request, { error: `Stripe Checkout could not start: ${String(e.message || e)}`}, 502);
}
await kv.put(checkoutKey(session.id), JSON.stringify({
paid: false,
used: false,
input: paidInput,
createdAt: new Date().toISOString(),
}));
return corsJson(request, { url: session.url, sessionId: session.id });
}

if (request.method === "POST" && url.pathname === "/webhook/stripe") {
// Server-to-server from Stripe. No CHECK_TOKEN, no CORS:
// the Stripe signature is the authentication.
const payload = await request.text();
const ok = await verifyStripeSignature(payload, request.headers.get("Stripe-Signature"), env.STRIPE_WEBHOOK_SECRET);
if (!ok) return new Response(JSON.stringify({ error: "Invalid Stripe signature."}), { status: 400, headers: { "content-type": "application/json"}});
let event;
try {
event = JSON.parse(payload);
} catch {
return new Response(JSON.stringify({ error: "Bad JSON."}), { status: 400, headers: { "content-type": "application/json"}});
}
if (event.type === "checkout.session.completed" && event.data?.object?.id) {
const id = event.data.object.id;
const raw = await kv.get(checkoutKey(id));
if (raw) {
const rec = JSON.parse(raw);
rec.paid = true;
await kv.put(checkoutKey(id), JSON.stringify(rec));
}
}
return new Response(JSON.stringify({ received: true}), { status: 200, headers: { "content-type": "application/json"}});
}

if (request.method === "POST" && url.pathname === "/check") {
const auth = checkToken(request, env);
if (!auth.ok) return corsJson(request, { error: auth.error}, auth.status);
if (!env.GROQ_API_KEY) return corsJson(request, { error: "GROQ_API_KEY is not set."}, 500);
let input;
try {
input = await request.json();
} catch {
return corsJson(request, { error: "Body must be JSON."}, 400);
}
// Paid only: no Groq check runs without a paid Stripe session.
const paidSessionId = String(input.paidSessionId || "").trim();
if (!paidSessionId) {
return corsJson(request, { error: "Payment required: this report is paid. Complete Stripe Checkout first."}, 402);
}
const paid = await sessionIsPaid(env, kv, paidSessionId);
if (!paid.ok) {
return corsJson(request, { error: `Payment required: ${paid.reason}. Complete Stripe Checkout first.`}, 402);
}
let rec = paid.record;
// Safe retry / resume. The record carries used, jobId and
// retries (see the STRIPE header note). A finished job never
// reuses; a running job is resumed; a failed or missing job
// gets exactly one replacement.
if (rec.used && rec.jobId) {
const jobRaw = await kv.get(`job:${rec.jobId}`);
if (jobRaw) {
const existing = JSON.parse(jobRaw);
if (existing.status === "done") {
return corsJson(request, { error: "This payment was already used for a report."}, 402);
}
if (existing.status !== "failed") {
// Still running or queued: resume it, do not start another.
return corsJson(request, { jobId: existing.id, status: existing.status, progress: existing.answers?.length || 0, total: existing.prompts?.length || 6}, 202);
}
if ((rec.retries || 0) >= 1) {
return corsJson(request, { error: "This payment was already used for a report, including its one retry."}, 402);
}
// else: failed job, one retry left — fall through to create it.
} else if ((rec.retries || 0) >= 1) {
return corsJson(request, { error: "This payment was already used for a report, including its one retry."}, 402);
}
}
const isRetry = !!rec.used;
// Claim the payment with this attempt's jobId, then re-read:
// if another /check stored a different jobId first, resume
// that job instead of creating a second one from one payment.
const jobId = crypto.randomUUID();
const claimId = crypto.randomUUID();
rec.used = true;
rec.jobId = jobId;
rec.claimId = claimId;
rec.claimedAt = new Date().toISOString();
if (isRetry) rec.retries = (rec.retries || 0) + 1;
await kv.put(checkoutKey(paidSessionId), JSON.stringify(rec));
const freshRaw = await kv.get(checkoutKey(paidSessionId));
const fresh = freshRaw ? JSON.parse(freshRaw) : null;
if (fresh && fresh.jobId && fresh.jobId !== jobId) {
const otherRaw = await kv.get(`job:${fresh.jobId}`);
if (otherRaw) {
const other = JSON.parse(otherRaw);
return corsJson(request, { jobId: other.id, status: other.status, progress: other.answers?.length || 0, total: other.prompts?.length || 6}, 202);
}
}
// Inputs come from the paid record, never from the browser:
// what was paid for is what gets checked.
const { website, category, city, businessName } = rec.input;
const job = {
id: jobId,
status: "queued",
createdAt: new Date().toISOString(),
paidSessionId,
input: {
website,
category,
city,
businessName: businessName || null,
},
prompts: buildPrompts(category, city),
answers: [],
businesses: null,
parseIndex: 0,
capped: false,
rateLimited: false,
};
await kv.put(`job:${job.id}`, JSON.stringify(job));
// No prompt runs here. The page drives the job with /step.
return corsJson(request, { jobId: job.id, status: "queued", progress: 0, total: job.prompts.length}, 202);
}

if (request.method === "POST" && url.pathname.startsWith("/step/")) {
const auth = checkToken(request, env);
if (!auth.ok) return corsJson(request, { error: auth.error}, auth.status);
if (!env.GROQ_API_KEY) return corsJson(request, { error: "GROQ_API_KEY is not set."}, 500);
const id = url.pathname.slice("/step/".length);
const jobRaw = await kv.get(`job:${id}`);
if (!jobRaw) return corsJson(request, { error: "Job not found."}, 404);
const job = JSON.parse(jobRaw);
if (job.status === "failed") {
return corsJson(request, { jobId: id, status: "failed", error: job.error || "Job failed."}, 502);
}
const result = await runOneStep(env, kv, job);
return corsJson(request, result.body, result.httpStatus);
}

if (request.method === "GET" && url.pathname.startsWith("/report/")) {
const id = url.pathname.slice("/report/".length);
const jobRaw = await kv.get(`job:${id}`);
if (!jobRaw) return corsJson(request, { error: "Report not found."}, 404);
const job = JSON.parse(jobRaw);
if (job.status!== "done") {
return corsJson(request, { jobId: id, status: job.status, progress: job.answers?.length || 0, total: job.prompts?.length || 6});
}
return corsJson(request, { jobId: id, status: "done", report: JSON.parse((await kv.get(`report:${id}`)) || "null")});
}

return corsJson(request, { error: "Not found. Use POST /check, POST /step/:jobId, GET /report/:id, GET /spend. CORS: https://prisqo.vilouraai.com only."}, 404);
},
};
