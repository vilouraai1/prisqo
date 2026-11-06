// Prisqo site Worker — prisqo.vilouraai.com (Cloudflare free plan).
// Serves the static demo site AND proxies the real check to the
// report engine, so the secret never reaches public JS.
//
// How it works:
// - GET / and other static paths -> the site's static assets
//   (env.ASSETS, Workers Static Assets). X-Robots-Tag: noindex
//   is added to every response, so the demo stays noindexed.
// - POST /api/check, POST /api/step/:jobId, GET /api/report/:id,
//   GET /api/spend, POST /api/create-checkout-session ->
//   forwarded to the engine at ENGINE_URL,
//   with X-Check-Token added here, server-side, from the
//   CHECK_TOKEN secret. Any token a browser sends is stripped
//   first, so a visitor cannot substitute their own.
// - The browser only ever talks to same-origin /api/*, so no
//   CORS dance is needed on this side. The engine still only
//   allows https://prisqo.vilouraai.com as a CORS origin, as
//   defence in depth for any direct call.
//
// Secrets (wrangler secret put, never in this file):
//   CHECK_TOKEN — the SAME token the engine Worker requires.
//     Set it on BOTH Workers to the same value.
// Vars (wrangler.toml):
//   ENGINE_URL — default https://prisqo-api.vilouraai.com
// Binding: ASSETS (static site). If ASSETS is not bound, static
// paths return 503 and /api/* still works.
//
// No Stripe, no payments, no email sending in this file.

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/api/")) {
      return proxyToEngine(request, env, url);
    }

    if (!env.ASSETS) {
      return new Response("Static assets are not configured on this Worker.", {
        status: 503,
        headers: { "content-type": "text/plain" },
      });
    }
    const res = await env.ASSETS.fetch(request);
    const out = new Response(res.body, res);
    // Keep the demo noindexed, whatever the static files say.
    out.headers.set("X-Robots-Tag", "noindex, nofollow");
    return out;
  },
};

async function proxyToEngine(request, env, url) {
  if (!env.CHECK_TOKEN) {
    return json({ error: "CHECK_TOKEN is not set on the site Worker." }, 500);
  }
  const engine = (env.ENGINE_URL || "https://prisqo-api.vilouraai.com").replace(/\/$/, "");
  const upstreamPath = url.pathname.replace(/^\/api/, "") || "/";
  const upstream = `${engine}${upstreamPath}${url.search}`;

  // Only the four engine routes, nothing else is forwarded.
  const allowed =
    (request.method === "POST" && upstreamPath === "/check") ||
    (request.method === "POST" && upstreamPath === "/create-checkout-session") ||
    (request.method === "POST" && upstreamPath.startsWith("/step/")) ||
    (request.method === "GET" && upstreamPath.startsWith("/report/")) ||
    (request.method === "GET" && upstreamPath === "/spend");
  if (!allowed) return json({ error: "Not found." }, 404);

  let body = undefined;
  if (request.method === "POST" && (upstreamPath === "/check" || upstreamPath === "/create-checkout-session")) {
    let input;
    try {
      input = await request.json();
    } catch {
      return json({ error: "Body must be JSON." }, 400);
    }
    // Accept `url` (the form's field) as an alias for `website`.
    if (input.url && !input.website) input.website = input.url;
    body = JSON.stringify(input);
  } else if (request.method === "POST") {
    body = await request.text();
  }

  const headers = new Headers();
  headers.set("content-type", "application/json");
  // The token is added here, server-side. Any token the browser
  // sent is deliberately NOT forwarded.
  headers.set("X-Check-Token", env.CHECK_TOKEN);

  let upstreamRes;
  try {
    upstreamRes = await fetch(upstream, {
      method: request.method,
      headers,
      body,
    });
  } catch (e) {
    return json({ error: `Engine unreachable: ${String(e.message || e)}` }, 502);
  }

  // Pass the engine's status and body through unchanged, so the
  // page sees the same retry_later / capped / error shapes.
  const out = new Response(upstreamRes.body, upstreamRes);
  out.headers.set("content-type", "application/json");
  return out;
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}
