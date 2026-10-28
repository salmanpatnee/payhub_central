# Verify: Home page with a deployment card · spec 0007 · updated 2026-10-28
_Steps from spec 0007 acceptance criteria (the Balanced card). `/check verify` runs these; `/test` locks the durable ones._

## UI / manual
- [x] Log out, visit `/dashboard` → redirected to login (302 to /login, checked with curl) → AC-1
- [x] Log in with several deployments → one card each, sorted A to Z, paused ones included, a removed one missing → AC-1
- [x] Remove every deployment (or use an empty database) → "No deployments yet" with the Add deployment link, no switch, no footnote → AC-1
- [x] Check each state: live, unavailable, paused, never pulled → badge word with a dot (none for never pulled) → AC-2
- [x] Card after a good pull → four cells (Links, Completed with "N% of links", Pending with "N expired" or "none expired", Failed in red above zero), then a Paid and Pending table with one row per currency, no totals → AC-3
- [x] A currency unknown to the app (xyz) → it gets its own row; a currency with zero paid and zero pending (eur) → hidden → AC-3
- [x] A period with no money → "No payments this month", and Today shows "No payments today" → AC-3
- [x] Percent formatting: 71 of 96 shows 74%, 21 of 240 shows 8.8%, 0 links shows "–" → AC-3
- [x] Tab to "Last updated" → the exact time in the pull's timezone shows; "N payments" is in the footer, and a failed pull's time is never used → AC-4
- [x] Good pull then a failed pull → old numbers kept, "Showing the last good numbers." and the reason → AC-5
- [x] Only failed pulls → "No data yet", Unavailable, reason, no "Last updated" → AC-6
- [x] New active deployment, no pull → "No data yet", "Waiting for the first pull.", no badge → AC-6
- [x] Paused deployment whose last pull failed → Paused badge, "Not being pulled.", no failure reason, last good numbers kept → AC-7
- [x] Change a number in the database, wait 60 seconds → the card updates with no full reload, scroll kept at 900, period kept → AC-8
- [x] View the page data → no token, slug, raw reply, failure body, provider, release, port or path; the domain shows the host only → AC-9
- [x] Footnote under the cards reads exactly "Links are counted by the date they were created. Money is counted by the date it was paid. Each currency is shown on its own." → AC-10
- [x] At 375px (same site iframe) → 1 column, cells 2 by 2, no sideways scroll; at 1366px 2 columns and cells in one row of four → AC-11
- [x] Heading outline: one `h1`, card names `h2` → AC-11
- [x] Badge, chip and failed count text reach 4.5:1 contrast (chip 6.84, neutral badge 5.27, danger 6.47) → AC-11
- [x] The switch has Today, This month, Last 30 days with `aria-pressed`, This month selected on open, switching makes no request → AC-13
- [x] Warn card: 21 failed of 240 and 19 of 58 expired → both chips; 1 failed of 9 and 2 expired → no chip; Today (no links) → no chip → AC-14

## Commands
- [ ] `php artisan pulls:run {key}` then reload `/dashboard` → saved numbers show → AC-1, AC-3
- [x] Count queries with 2 and then 7 deployments → the same number (5) → AC-12
- [x] `composer run types:check`, `composer run lint:check`, `npm run types:check`, `npm run check` → all pass
- [x] `php artisan test` → existing suite still passes (178 tests)

## Acceptance-criteria coverage
- AC-1 … steps 1, 2 and the empty state step · AC-2 … state step · AC-3 … steps 5 to 8 · AC-4 … time step · AC-5 … good then failed · AC-6 … failed only and new · AC-7 … paused · AC-8 … polling step · AC-9 … page data step · AC-10 … footnote step · AC-11 … 375px, headings, contrast · AC-12 … query count · AC-13 … switch step · AC-14 … Warn card step
