# Verify: Home page with a deployment card · spec 0007 · updated 2026-10-27
_Steps from spec 0007 acceptance criteria. `/check verify` runs these; `/test` locks the durable ones._

## UI / manual
- [ ] Log out, visit `/dashboard` → redirected to login → AC-1
- [ ] Log in with two deployments → one card each, sorted A to Z, paused ones included → AC-1
- [ ] Remove every deployment (or use an empty database) → "No deployments yet" with the Add deployment link, no footnote → AC-1
- [ ] Check each state: live, unavailable, paused, never pulled → badge word with a dot (none for never pulled) → AC-2
- [ ] Card after a good pull → Today and This month, Completed and Pending, one row per currency, no totals, `0.00` for a stored zero → AC-3
- [ ] Add a currency the app does not know → it gets its own row → AC-3
- [ ] Window with no currency rows → "No payments" → AC-3
- [ ] Hover, focus (Tab) and tap "Last updated" → exact time in the pull's timezone shows; failed pull time is never used → AC-4
- [ ] Good pull then a failed pull → old numbers kept, "Showing the last good numbers." and the reason → AC-5
- [ ] Only failed pulls → "No data yet", Unavailable, reason, no "Last updated" → AC-6
- [ ] New active deployment, no pull → "No data yet", "Waiting for the first pull.", no badge → AC-6
- [ ] Paused deployment whose last pull failed → Paused badge, "Not being pulled.", no failure reason, last good numbers kept → AC-7
- [ ] Change a number in the database, wait 60 seconds → the card updates with no flash, scroll jump or lost focus → AC-8
- [ ] View page source and the polling reply (network tab) → no token, base URL, slug, raw reply or failure body → AC-9
- [ ] Footnote under the cards reads exactly "Money is counted by the date it was paid. Each currency is shown on its own." → AC-10
- [ ] At 375px → 1 column, no sideways scroll; from `sm` 2 columns; from `xl` 3 columns → AC-11
- [ ] Heading outline: one `h1`, card names `h2`, section labels `h3` → AC-11
- [ ] Paused, Unavailable and Live badge text reaches 4.5:1 contrast (check the neutral Paused badge first) → AC-11

## Commands
- [ ] `php artisan pulls:run {key}` then reload `/dashboard` → saved numbers show → AC-1, AC-3
- [ ] Count queries with 1 and then 10 deployments → the same number (5 with the current build) → AC-12
- [ ] `composer run types:check`, `composer run lint:check`, `npm run types:check`, `npm run check` → all pass
- [ ] `php artisan test` → existing suite still passes

## Acceptance-criteria coverage
- AC-1 … covered by steps 1 to 3 and the pulls:run step · AC-2 … step 4 · AC-3 … steps 5 to 7 · AC-4 … step 8 · AC-5 … step 9 · AC-6 … steps 10 and 11 · AC-7 … step 12 · AC-8 … step 13 · AC-9 … step 14 · AC-10 … step 15 · AC-11 … steps 16 to 18 · AC-12 … query count step
