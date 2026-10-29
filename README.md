# @pipeworx/creative-constraints

Draws from an original, 162-card deck of domain-neutral creative constraints —
each card is one imperative sentence an agent or a team can apply to any task
(a product launch, an essay, an onboarding flow, a dinner), plus one sentence
on why it helps. Meanings are returned separately from interpretation: the
tool hands back what was drawn and the procedure used, and the calling agent
decides what to do with it.

Part of [Pipeworx](https://pipeworx.io) — an MCP gateway connecting AI agents to 1856+ live data sources. This is an independent, unofficial integration — not affiliated with, endorsed by, or published by the upstream provider.

Part of the Pipeworx "chance" family — a shared seeded-RNG and session engine
also used by `dice-roller`, `tarot`, `i-ching` and `random-tables`
(see `docs/chance-packs-plan.md`).

## Tools

- `draw_constraint(count?, categories?, seed?, session_id?)` — draws 1-10
  cards, optionally restricted to one or more of the nine categories. Pass
  `seed` to reproduce an exact draw later (same seed + count + categories
  always returns the same cards); omit it for a fresh random draw, and the
  seed actually used is returned. Pass `session_id` from a previous response
  to continue a no-repeat session (draw-without-replacement across calls).
- `list_constraint_categories()` — lists the nine categories, each with its
  card count and one example title.
- `get_constraint(id)` — fetches one specific card by its id (e.g.
  `"inversion_03"`).

## Auth

Keyless. No upstream API, no third-party dependency.

## Data sources

- Pipeworx — original creative-constraints deck. Every card's title,
  constraint sentence and rationale is written for this pack; there is no
  public-domain or commercial foundation behind it (unlike `tarot`'s
  Rider–Waite–Smith tradition or `i-ching`'s Legge translation).

## The nine categories

`perspective`, `limitation`, `medium`, `time`, `audience`, `inversion`,
`scale`, `process`, `wildcard` — 18 cards each, 162 total.

## Sessions are hosted-only

`draw_constraint`'s `session_id` support depends on the gateway's KV cache
binding (`injectCacheKv: true` on this pack's manifest row). The published npm
standalone has no such binding, so a `session_id` there (or from any caller
without the gateway's cache) gets `session_supported: false` in the response
and falls back to a plain seeded draw — fully reproducible by seed, just not
draw-without-replacement across separate calls. Sessions expire after 24
hours of inactivity.

## Reproducibility

Every draw is seeded. Omit `seed` for a fresh random draw (the seed used is
always returned in `meta.seed`); pass that seed back, with the same `count`
and `categories`, to reproduce the exact same cards. When continuing an
existing session via `session_id`, the session keeps the category filter it
was opened with — `categories` is ignored on that call.

## Errors

An unknown category in `categories` is a loud error listing the valid set.
An unknown `id` to `get_constraint` is a loud error with the id-naming
convention. An expired or unknown `session_id` is a loud error telling you to
omit it to start a new session.

## Quick Start

Add to your MCP client (Claude Desktop, Cursor, Windsurf, etc.):

```json
{
  "mcpServers": {
    "creative-constraints": {
      "url": "https://gateway.pipeworx.io/creative-constraints/mcp"
    }
  }
}
```

### What this endpoint actually serves

`tools/list` at `https://gateway.pipeworx.io/creative-constraints/mcp` returns the tools in the table
above **plus the shared Pipeworx meta-tools** — `ask_pipeworx`,
`discover_tools`, `search_within`, `remember`/`recall` and the rest of the
gateway-wide set. So the tool count you see is larger than this table: a
single-pack endpoint currently lists roughly 30 shared tools alongside the
pack's own. The connection's `initialize` response states its exact scope, and
is the authoritative answer for a given day.

This is deliberate, not multiplexing by accident. The meta-tools are what let a
scoped connection answer a question this pack does not cover — via
`ask_pipeworx`, which routes across the whole catalog — without you adding a
second MCP server. There is currently no way to mount a pack endpoint without
them; if the extra schemas cost you more context than the routing is worth,
connect to the full gateway once rather than to several pack endpoints.

Or connect to the full Pipeworx gateway to get every pack's tools listed
directly, instead of just this one's:

```json
{
  "mcpServers": {
    "pipeworx": {
      "url": "https://gateway.pipeworx.io/mcp"
    }
  }
}
```

Both URLs reach the same gateway and the same 1856+ data sources. The
only difference is which pack's tools are listed **directly**; `ask_pipeworx`
reaches all of them from either one.

## No MCP client? Call it over HTTP

```bash
curl -X POST https://gateway.pipeworx.io/v1/tools/draw_constraint \
  -H 'Content-Type: application/json' \
  -d '{"categories":["inversion"],"count":3,"seed":"pipeworx-demo"}'
```

No account needed for the first calls. Inspect any tool: `GET https://gateway.pipeworx.io/v1/tools/draw_constraint`. Find one: `POST https://gateway.pipeworx.io/v1/tools/search_packs` with `{"query":"..."}`.

## Run it from npm

`@pipeworx/mcp-creative-constraints` is a local stdio bridge to the Pipeworx gateway: your MCP client
starts it with `npx`, and it forwards every call to the same
`https://gateway.pipeworx.io/creative-constraints/mcp` endpoint shown above. It needs network access;
there is no offline mode.

```json
{
  "mcpServers": {
    "creative-constraints": {
      "command": "npx",
      "args": ["-y", "@pipeworx/mcp-creative-constraints"]
    }
  }
}
```

Without a key it calls anonymously, capped at 50 calls a day. A free account
raises that to 200 a day: get a key at https://pipeworx.io/signup and add
`"env": { "PIPEWORX_API_KEY": "<your key>" }` to the server entry.
The key is sent as a Bearer token, the same way a hosted connection sends it,
so calls are metered and billed exactly as they are there.

It lists **only** this pack's tools by default. Set `PIPEWORX_META_TOOLS=1` to
also list `ask_pipeworx` and the other gateway-wide tools.

Behind an HTTPS proxy: Node's built-in `fetch` does not read `HTTPS_PROXY` by
default. Newer Node releases honour it when `NODE_USE_ENV_PROXY=1` is set; check
your Node version's documentation.

## Using with ask_pipeworx

Instead of calling tools directly, you can ask questions in plain English —
this works on the pack endpoint above as well as on the full gateway:

```
ask_pipeworx({ question: "your question about Creative Constraints data" })
```

The gateway picks the right tool and fills the arguments automatically.

## More

- [Docs and guides](https://pipeworx.io/docs)
- [pipeworx.io](https://pipeworx.io)

## License

MIT
