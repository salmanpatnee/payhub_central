# Verify: deployment page · spec 0009 · updated 2026-10-28
_Steps derived from spec 0009 acceptance criteria (the Focus view design). `/check verify` runs these; `/test` locks the durable ones._

## UI / manual
- [x] Log out, open `/deployments/payhub-staging` → redirected to login → AC-1 (curl: 302 to /login)
- [x] Log in, open `/deployments/no-such-key` → 404 page → AC-1
- [x] Open `/deployments/PayHub-Staging` (capital letter) → 404 → AC-1
- [x] On Home, Tab to a card name → focus ring shows, Enter opens the page → AC-2 (Tab reached the link, Enter opened it; ring comes from `focus-visible:ring-[3px]`)
- [x] Header shows one h1, the domain host, one badge and "Last updated"; breadcrumbs read Home > name → AC-3
- [ ] Compare Home card and page for a live, unavailable, paused and new deployment → same badge, words and domain → AC-3 (not run)
- [x] Period switch has Today, This month, Last 30 days, All time; Today is selected on open; switching makes no request → AC-4
- [x] Links created card shows the count and "N% completed"; a period with 0 links shows "No links yet" → AC-4
- [x] Needs attention shows failed plus pending with chips, or "All clear" when both are 0 → AC-4
- [x] Link outcomes list has Completed, Pending, Failed, Cancelled, Expired in that order and the five counts add up to Links created → AC-4
- [x] Money paid lists each currency on its own row with its pending amount; no total across currencies → AC-5
- [x] All periods table: rows Links created, Completed rate, Failed, one Paid row per currency, Payments; `0.00` in periods with none; selected column tinted → AC-5
- [x] A period with no payments shows "No payments" in the Money paid card → AC-5
- [x] Range line beside the switch shows `1 Oct to 31 Oct` for This month, `28 Oct` for Today, none for All time ("Since the first link") → AC-6
- [x] The card sentences and the closing note are visible exactly as in the spec → AC-7
- [x] Deployment with only failed pulls → "No data yet", Unavailable badge and reason → AC-8
- [ ] Failed pull after a good one → last good numbers, "Showing the last good numbers." and the reason → AC-8 (not run)
- [ ] Paused deployment → Paused badge, "Not being pulled.", no reason, numbers stay → AC-8 (builder gives state `paused`, no reason, numbers kept; UI not looked at)
- [ ] New deployment (no pull) → no badge, "Waiting for the first pull." → AC-8 (builder gives state `new`; UI not looked at)
- [ ] Change a number in the database, wait 60 seconds → page updates with no flash or scroll jump, the selected period stays; rename shows in title and breadcrumb → AC-10 (the poll ran once at about 62s, the switch and scroll position stayed; DB change and rename not tried)
- [x] At 375px width: no page sideways scroll, the switch and the All periods table scroll inside their own box → AC-11
- [ ] Tab through the page: the "Last updated" time takes focus and shows the exact time; the switch buttons show a focus ring → AC-11 (the time takes focus on Home; not tried on this page)
- [x] Add deployment form with key `create` → refused with a clear message → AC-2 (checked through the real `StoreDeploymentRequest` rules)

## Commands
- [x] View the `deployment` prop on `/deployments/payhub-staging` → no token, full base URL, raw reply, failure body, release or provider → AC-9
- [x] View the Home page data → slug appears only inside each card's `href` → AC-2, AC-9 (hrefs only, slug nowhere else)
- [ ] Count queries for a deployment with 1 pull and one with many pulls → same number, `raw_reply` never selected → AC-12 (5 queries with a good pull, 3 with none, `raw_reply` never selected; the many pulls case is not run)

## Acceptance-criteria coverage
- AC-1 … steps 1 to 3 · AC-2 … Home link, `create` key, Home data · AC-3 … header steps · AC-4 … switch, Links created, Needs attention, outcomes · AC-5 … Money paid, All periods · AC-6 … range line · AC-7 … sentences · AC-8 … state steps · AC-9 … leak steps · AC-10 … poll step · AC-11 … 375px and keyboard · AC-12 … query count
