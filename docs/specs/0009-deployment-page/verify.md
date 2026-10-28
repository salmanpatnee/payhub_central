# Verify: deployment page · spec 0009 · updated 2026-10-28
_Steps derived from spec 0009 acceptance criteria. `/check verify` runs these; `/test` locks the durable ones._

## UI / manual
- [ ] Log out, open `/deployments/payhub-staging` → redirected to login → AC-1
- [ ] Log in, open `/deployments/no-such-key` and a removed deployment's key → 404 page → AC-1
- [ ] Open `/deployments/PayHub-Staging` (capital letter) → 404 → AC-1
- [ ] On Home, Tab to a card name → focus ring shows, Enter opens the page → AC-2
- [ ] Header shows one h1, the domain host, one badge and "Last updated"; breadcrumbs read Home > name → AC-3
- [ ] Compare Home card and page for a live, unavailable, paused and new deployment → same badge, words and domain → AC-3
- [ ] Links table: 4 columns, 6 rows in the spec order, zeros shown as `0` → AC-4
- [ ] Money table: one group per currency (Paid, Pending), sorted by code, `0.00` in empty windows, one Payments row → AC-5
- [ ] A currency with no money in any window is hidden; with no money anywhere the groups show "No payments yet" → AC-5
- [ ] Headings show date ranges (`28 Oct`, `1 Oct to 31 Oct`, `29 Sep to 28 Oct`), none under All time → AC-6
- [ ] The three explanation texts are visible exactly as in the spec → AC-7
- [ ] Deployment with only failed pulls → both tables say "No data yet", Unavailable badge and reason → AC-8
- [ ] Failed pull after a good one → last good numbers, "Showing the last good numbers." and the reason → AC-8
- [ ] Paused deployment → Paused badge, "Not being pulled.", no reason, numbers stay → AC-8
- [ ] New deployment (no pull) → no badge, "Waiting for the first pull." → AC-8
- [ ] Change a number in the database, wait 60 seconds → page updates with no flash or scroll jump; rename shows in title and breadcrumb → AC-10
- [ ] At 375px width: no page sideways scroll, each table scrolls inside its box, first column stays and is solid → AC-11
- [ ] Tab through the page: the "Last updated" time takes focus and shows the exact time → AC-11
- [ ] Add deployment form with key `create` → refused with a clear message → AC-2

## Commands
- [ ] View page source and the `deployment` prop on `/deployments/payhub-staging` → no token, slug, full base URL, raw reply, failure body, release or provider → AC-9
- [ ] View the Home page data → slug appears only inside each card's `href` → AC-2, AC-9
- [ ] Count queries for a deployment with 1 pull and one with many pulls → same number, `raw_reply` never selected → AC-12
- [ ] `php artisan test` → all green

## Acceptance-criteria coverage
- AC-1 … covered by steps 1 to 3 · AC-2 … 4, create key, Home data · AC-3 … 5, 6 · AC-4 … 7 · AC-5 … 8, 9 · AC-6 … 10 · AC-7 … 11 · AC-8 … 12 to 15 · AC-9 … leak steps · AC-10 … 16 · AC-11 … 17, 18 · AC-12 … query count
