# 0007. Home page with a deployment card

**Date**: 2026-10-27
**Updated**: 2026-10-28 (card redesigned to the Balanced layout)
**Status**: Accepted

## Summary

The Home page is the first real page. It shows one card for every deployment. Each card has the deployment name, its domain, a status badge, four numbers (links, completed, pending, failed) with the success rate, a small table of paid and pending money per currency, and the time of the last update. One switch above the cards picks Today, This month or Last 30 days for every card at once. Cards warn when failed or expired links are high. If the last pull failed, the card keeps the last good numbers and says why, and it never shows zero for missing data. The server prepares a small, safe set of display values for each card, so no token or raw reply can reach the browser, and the page reloads its own cards every 60 seconds.

## Requirements

**User stories**:
- As a staff member, I want one card per deployment so that I can see how each one is doing at a glance.
- As a staff member, I want to switch every card between Today, This month and Last 30 days so that I can compare deployments for the same period.
- As a staff member, I want links, completed, pending and failed counts with a success rate so that I can tell busy from healthy.
- As a staff member, I want each currency on its own row so that I never read a mixed total.
- As a staff member, I want to see when numbers are old, when a pull failed and why, and when failed or expired links are high, so that I know where to look first.
- As a staff member, I want the page to refresh by itself so that I do not have to reload it.

**Acceptance criteria** (the contract, each one independently checkable):
- **AC-1**: The Home page (`dashboard` route, login required) shows one card for every deployment that is not removed, paused ones included, sorted by name A to Z (ties by id). With no deployments it shows the existing "No deployments yet" empty state with its Add deployment link, and no switch.
- **AC-2**: Each card shows the deployment name and one status badge, always a word with a dot, never colour alone. Rules, first match wins: not active → **Paused** (neutral); no pull at all → no badge; latest pull failed → **Unavailable** (danger); otherwise → **Live** (success).
- **AC-3**: Each card shows numbers for the period picked by the switch (AC-13), taken from the latest good pull.
  - Four cells in a row: **Links** (links created), **Completed** (links completed) with "N% of links", **Pending** with "N expired" or "none expired", and **Failed** with "N% of links". The Failed count is in the danger colour when it is above zero, and always keeps its word.
  - Under the cells, a table with the columns Paid and Pending (money) and one row per currency that has activity in the period (paid money or pending money above zero). A currency with no activity is not listed. When no currency has activity, the table is replaced by the empty line for the period: "No payments today", "No payments this month" or "No payments in the last 30 days".
  - Cents are formatted only by `formatMoney`. A percentage is "–" when links created is 0, and is formatted only by a `formatPercent` helper in `resources/js/lib`: a whole number at 10% and above, one decimal below 10%, rounded half up (`62.5` shows `63%`, `8.75` shows `8.8%`).
  - The success rate is Completed divided by Links, both in the same period. It is never a money ratio.
  - A period with no links created shows `0` in each cell. The "No payments" line follows the currency rule above only, because money is dated by paid date and can exist when no link was created in the period. "No data yet" is only for a card with no good pull.
  - Cancelled links are not shown, so Completed, Pending and Failed can add up to less than Links.
- **AC-4**: When a good pull exists, the card footer shows "Last updated" with `RelativeTime` using `pulled_at` of the latest good pull and its timezone for the exact time on hover, focus and tap. It never uses the time of a failed pull. With no good pull the "Last updated" line is hidden (no "Never"). The footer also shows "N payments" for the period (the count of payments paid in it, "1 payment" for one, "0 payments" for none) on every card that has a good pull, whatever its state.
- **AC-5**: When the latest pull failed and an older good pull exists, the card keeps the last good numbers and shows a note: "Showing the last good numbers." plus the failure reason (the saved `failure_message`). The time appears once, in the footer. The numbers are not faded, so contrast stays at 4.5:1 or better.
- **AC-6**: When no good pull exists, the numbers area shows "No data yet" and never zero. For an active deployment whose latest pull failed, the badge is Unavailable and the failure reason shows. If there is no pull at all and the deployment is active, there is no badge and the note says "Waiting for the first pull."
- **AC-7**: A paused deployment shows the Paused badge and the note "Not being pulled." and no failure reason, even if its latest pull failed. Its last good numbers stay visible with the time of that pull in the footer. With no good pull it shows "No data yet".
- **AC-8**: The page reloads only its card data every 60 seconds (Inertia polling), with no flash, no scroll jump and no loss of focus. The period picked in the switch stays as it was after a reload. A tab hidden in the background may slow or pause the polling.
- **AC-9**: The browser receives only the display fields listed under Value sourcing. The domain is the host name only, such as `pay.example.com`, with no scheme, port, path or query. The token, the full base URL, the raw reply and the failure body never appear in the page data, the HTML or the polling replies. The slug appears only inside each card's `href` (the path to the deployment page, spec 0009), and nowhere else in the page data. The page does not show the payment provider or the release code. The domain relies on the https URL check of spec 0005, so a missing host is the only edge case.
- **AC-10**: The page shows this exact line under the cards: "Links are counted by the date they were created. Money is counted by the date it was paid. Each currency is shown on its own."
- **AC-11**: Cards sit in a grid of 1 column on phones and 2 columns from `sm`. There is no sideways scroll at 375px. The four number cells sit 2 by 2 until `xl`, and in one row of four from `xl`. The page has one `h1` (the page title) and each card name is an `h2`. The time is reachable by keyboard. The Paused, Unavailable, Live and warning badges meet the 4.5:1 text contrast rule.
- **AC-12**: Building the cards runs a fixed number of queries, however many deployments exist (no query per card).
- **AC-13**: One switch above the cards, a group of three buttons named Today, This month and Last 30 days, sets the period for every card. This month is selected when the page opens. The selected button shows its state to assistive tools (`aria-pressed`). The choice is kept in the page only, so a full reload goes back to This month. Changing it makes no request, because all three periods are already in the page data.
- **AC-14**: A card with good data shows a warning chip, always a word with an icon, for each rule that is true in the picked period. **Failed** rule: at least 3 failed links and failed is 5% or more of links created, text "N% of links failed". **Expired** rule: at least 3 expired links and expired is 25% or more of pending links, text "N of M pending links expired". Both rules compare the raw ratio, not the rounded one. The chip uses the warning colour tokens (the same amber as the scheduler banner) and the `TriangleAlert` icon. The limits are constants in one file, `resources/js/lib/cardWarnings.ts`. A card with no good data shows no warning chips. The status notes of AC-5 to AC-7 are separate and still show.

## Decision

**Chosen option**: Option 1: Server builds each card's display data, one reworked `DeploymentCard` Vue part shows it in the Balanced layout.

A small action class turns each deployment into a plain array of safe display values (including the domain host, the badge state, the note and all three periods), one controller passes them to the page, and the page renders cards. The period switch and the warnings run in the browser on the numbers already sent, so switching needs no request.

**Implementation skills**: none installed.

## Rationale

Reasoning and options: see `rationale.md`.

## Feature design

**Design source**: the engineer picked **Option 3, Balanced Dashboard** from three viewable options (2026-10-28), with three changes: no payment provider, no release code, and 2 cards per row. Option 3 is in the artifact "Cards Balanced Dashboard". The rest follows spec 0003, `docs/design-reference-payhub.md` and `ui-registry.md`.

**Page composition** (top to bottom): `PageHeader` (title "Home", the existing description, no actions) → period switch, aligned right on `sm` and up → card grid → one footnote line (AC-10). No deployments → the existing `EmptyState` instead of the switch, grid and footnote.

**Card layout** (`DeploymentCard`, on the kit `Card` with `rounded-xl border-border/70`):

```
┌────────────────────────────────────────────┐
│ Karachi Collections             ● LIVE     │  h2 name, Badge
│ pay.karachicollect.pk                      │  domain host, text-xs muted
├──────────┬──────────┬──────────┬───────────┤
│ 240      │ 150      │ 58       │ 21        │  four cells (2 by 2 until xl)
│ LINKS    │ COMPLETED│ PENDING  │ FAILED    │
│          │ 63% links│ 19 expired│ 8.8% links│
├──────────┴──────────┴──────────┴───────────┤
│ THIS MONTH      PAID          PENDING      │  table header
│ PKR         4,123,000.00   1,510,000.00    │  one row per active currency
│ USD                88.00          0.00     │
├────────────────────────────────────────────┤
│ Last updated 7 min ago     156 payments    │  footer
│ ▲ 8.8% of links failed  ▲ 19 of 58 expired │  warning chips
│ <status note and reason>                   │
└────────────────────────────────────────────┘
```

State view (what shows where):

| State | Badge | Body | Footer and notes |
|---|---|---|---|
| Live | Live | Cells and currency table | "Last updated <time>", payments count, warning chips |
| Unavailable with data | Unavailable | Last good cells and table | "Last updated <time>", payments count, chips, "Showing the last good numbers." and the reason |
| Unavailable no data | Unavailable | "No data yet" | The reason only |
| Paused with data | Paused | Last good cells and table | "Last updated <time>", payments count, chips, "Not being pulled." |
| Paused no data | Paused | "No data yet" | "Not being pulled." |
| New, never pulled (active) | none | "No data yet" | "Waiting for the first pull." |

**Component inventory**: existing `PageHeader`, `EmptyState`, `Badge` (success, danger, neutral), `Card`, `RelativeTime`, `Table` from the kit for the currency table. Reworked: `DeploymentCard.vue`. New small helpers: `formatPercent` in `resources/js/lib`, and `cardWarnings.ts` in `resources/js/lib` (the two limits and one function). The period switch is a plain group of three buttons inside `Dashboard.vue`, styled as the segmented control in the Balanced option, because the kit has no toggle group. `MoneyByCurrency` is no longer used by the card, and its `size` prop (added for the first version) is removed again. Page code lives in `resources/js/pages/Dashboard.vue`.

**Assets**: none. Icons come from `@lucide/vue`, and badges use their own dot. The warning chip uses an icon and a word.

**Data model sketch**: no new tables or columns. Reads only:

- `deployments`: `id`, `name`, `base_url`, `is_active` (soft deleted ones are left out by the model). The token column is never selected.
- `Deployment::latestPull()` → `status`, `failure_message`.
- `Deployment::latestGoodPull()` → `pulled_at`, `timezone`, and its `windows` named `today`, `this_month` and `last_30_days`, each with `links_total`, `links_pending`, `links_completed`, `links_failed`, `links_expired`, `paid_count` and `amounts` (`kind`, `currency`, `cents`).

Both pull relations load only `pulls.id`, `pulls.deployment_id`, `pulls.pulled_at`, `pulls.status`, `pulls.timezone` and `pulls.failure_message` (qualified names, because `ofMany` joins), so a poll never reads `raw_reply` or `failure_body`.

Eager load: `Deployment::select(['id','name','base_url','is_active'])->with(['latestPull', 'latestGoodPull.windows' => whereIn('name', [Today, ThisMonth, Last30Days]), 'latestGoodPull.windows.amounts'])->orderBy('name')->orderBy('id')`. When grouping, compare `$window->name` and `$amount->kind` as enum cases, not raw strings. The card list in Vue uses `:key="card.id"` so a poll does not rebuild an open time popover. This is a fixed number of queries (AC-12).

**State transitions**: none stored. The badge is derived on every request (rules in AC-2).

**API surface**:

| Endpoint | Method | Key inputs | Key outputs | Auth | Key errors |
|---|---|---|---|---|---|
| `/dashboard` (route name `dashboard`, `HomeController`, invokable) | GET | none (Inertia partial reload `only: ['deployments']` when polling) | Inertia page `Dashboard` with prop `deployments: DeploymentCard[]` | `auth`, `verified` | 302 to login when logged out |

The route and controller already exist. The route name and URL do not change.

`DeploymentCard` (TypeScript type, shared with the PHP array shape):

```ts
type Money = Record<string, number>;      // lowercase currency → whole cents. The builder casts each map to (object), so an empty one is {}
type PeriodStats = {
    links: { total: number; pending: number; completed: number; failed: number; expired: number };
    paidCount: number;                    // payments paid in the period (by paid date)
    completed: Money;                     // paid money per currency
    pending: Money;                       // money on pending links created in the period
};
type DeploymentCard = {
    id: number;
    name: string;
    domain: string | null;                // host of base_url only
    state: 'live' | 'unavailable' | 'paused' | 'new'; // 'new' = active, no pull yet
    reason: string | null;                // failure_message of the latest pull when it failed
    updatedAt: string | null;             // pulled_at of the latest good pull, UTC ISO
    timezone: string | null;              // timezone of the latest good pull
    periods: { today: PeriodStats; thisMonth: PeriodStats; last30Days: PeriodStats } | null; // null when there is no good pull
};
```

**Value sourcing**:

| Action | Value produced / displayed | Source |
|---|---|---|
| List cards | Which deployments | `Deployment` rows not soft deleted, paused included. Ordered by `name` then `id` |
| Header | `domain` | The host part of `deployments.base_url`, lowercase, taken with `parse_url(..., PHP_URL_HOST)` in the builder. Null when there is no host. Nothing else of the URL leaves PHP |
| Badge | `state` | Derived: `is_active` false → `paused`; else no `latestPull` → `new`; else `latestPull.status = failed` → `unavailable`; else `live` |
| Badge | Badge look and word | Fixed map in the Vue part: live → success "Live", unavailable → danger "Unavailable", paused → neutral "Paused", new → none |
| Note | `reason` | `latestPull.failure_message` only when `latestPull.status = failed` and the deployment is active (a fixed template per failure code from `PullFailureKind::message()`, so it holds no URL or token). Otherwise null, including every paused deployment |
| Footer | "Last updated" line | Shown only when `updatedAt` is not null |
| Numbers | Period picked | Page state in `Dashboard.vue`, default `thisMonth`. Windows: `today`, `this_month`, `last_30_days` of `latestGoodPull`. Null `periods` when no good pull |
| Numbers | Links, Pending, Failed, expired | `links_total`, `links_pending`, `links_failed`, `links_expired` of the picked window |
| Numbers | Completed | `links_completed` of the picked window (links, by created date) |
| Numbers | Success rate and failed share | Derived in the browser: `links_completed ÷ links_total` and `links_failed ÷ links_total`, "–" when `links_total` is 0, through `formatPercent` |
| Footer | "N payments" | `paid_count` of the picked window (payments, by paid date), "1 payment" for one |
| Switch and table | Period words | Fixed map in `Dashboard.vue`: `today` → "Today", `thisMonth` → "This month", `last30Days` → "Last 30 days". Empty line: "No payments today", "No payments this month", "No payments in the last 30 days". Uppercase is done by CSS only |
| Table | Currency rows | Keys of the paid and pending maps with a sum above zero in the picked window, sorted by code. Key = `currency` as stored, value = `cents`. A currency missing from a kind counts as 0 for the table cell |
| Table | Currency code and text | `formatMoney` (uppercase, 2 decimals, grouping) per spec 0003 |
| Footer | Last updated time | `latestGoodPull.pulled_at` (UTC) through `RelativeTime` |
| Footer | Timezone for the exact time | `latestGoodPull.timezone`; missing or invalid falls back to UTC (spec 0003 rule) |
| Chips | Warning rules | Derived in the browser by `cardWarnings.ts` from the picked window: failed ≥ 3 and ≥ 5% of links; expired ≥ 3 and ≥ 25% of pending. Limits are constants in that file |
| Polling | Interval | Constant `60000` ms in the page |
| Footnote | Wording | Fixed text in the page (AC-10) |

**Key invariants**:
- A missing value is never shown as zero. Only the numbers of a saved good pull show, and a card with no good pull shows "No data yet".
- Money is whole cents until `formatMoney`. No sums across currencies, and no sums at all on this page.
- Links and money use different dates (contract v1). The cells show links by created date, the table shows money by paid date, and the footnote says so. The success rate uses links only.
- The last good numbers always come from the latest good pull, never from a newer failed one (spec 0002 `latestGoodPull`).
- The browser only receives the `DeploymentCard` fields above. Provider and release are never sent.
- Status colours mean status only and always come with a word (spec 0003). A failed count above zero in red and a warning chip both carry a word.

**Security model**: every logged in user is an admin, so every logged in user may see every card. The route stays behind `auth` and `verified`. The card builder copies named fields into a plain array and never passes a model or relation to Inertia. The query selects only `id`, `name`, `base_url` and `is_active` of the deployment, so the encrypted token is not even loaded. `base_url` is loaded to take its host, and only the host is copied out. `failure_message` is a fixed template (spec 0002), so it is safe to show. No client data exists in a pull. No regulated personal data.

**Failure and edge cases**:
- Latest pull failed, older good pull exists → AC-5.
- Only failed pulls → AC-6.
- Brand new deployment, no pull → AC-6 ("new").
- Paused (any pull history) → AC-7. Paused wins over Unavailable.
- Rate limited (429) → saved as a failed pull with the rate limited message, so it shows as Unavailable with its reason, like any other failure.
- Good reply with a period that has no links created → zeros and "–" for rates. The "No payments" line shows only when no currency has activity.
- A currency that is zero in both kinds for the period → hidden. If every currency is hidden → "No payments".
- A `base_url` with no readable host → no domain line.
- A deployment removed between polls → its card disappears at the next poll.
- A paused deployment that is switched on again keeps its old state and time until the next pull (covered by the accepted "no stale badge" tradeoff).
- Many deployments → fixed query count (AC-12). No pagination: this is an internal tool with a handful of deployments.
- Polling gets a 401 or 419 (session ended) → Inertia redirects to login, normal behaviour.
- Time in the future (clock difference) → "just now" (spec 0003).

**Configuration required**: none.

**Critical test scenarios** (each maps to an acceptance criterion; tests are written later by `/test`):
- Happy path: after a good pull from the sample JSON, the page props hold all three periods with links, paid count and paid and pending cents per currency, and the card renders them, verifies **AC-1**, **AC-3**, **AC-4**.
- Never zero: a deployment with only failed pulls has `periods` null and renders "No data yet", verifies **AC-6**.
- Last good kept: a good pull followed by a failed pull gives the older numbers, state `unavailable` and the failure message, verifies **AC-5**.
- Paused: an inactive deployment with a good pull gives state `paused` and its numbers, verifies **AC-7**.
- Badge rules: live, unavailable, paused and new each map to the right state, and paused beats unavailable, verifies **AC-2**.
- Order and removal: names sort A to Z, and a soft deleted deployment is missing, verifies **AC-1**.
- Currencies: two currencies show two rows with no total, an unknown currency shows its own row, a currency with zero paid and zero pending is hidden, verifies **AC-3**.
- Rates: 71 completed of 96 links shows 74%, and 0 links shows "–", verifies **AC-3**.
- Domain: `https://pay.example.com:8443/api?x=1` gives `pay.example.com` and nothing more, verifies **AC-9**.
- Leak check: the page data and the polling reply contain no `token`, `raw_reply`, `failure_body`, provider or release, and the full `base_url` value does not appear anywhere (only its host), and the slug appears only inside each card's `href`, verifies **AC-9**.
- Query count: 1 deployment and 10 deployments run the same number of queries, verifies **AC-12**.
- Auth: a logged out request is redirected to login, verifies **AC-1**.
- Switch: This month is selected on open, picking Today changes every card with no request, and the choice survives a poll, verifies **AC-8**, **AC-13**.
- Warnings: 21 failed of 240 links shows the failed chip, 1 failed of 9 does not (under 3 failed), verifies **AC-14**.
- Phone and keyboard: at 375px no sideways scroll, grid is 1 column, cells are 2 by 2, the time takes focus and shows the exact time, verifies **AC-11**.
- Polling: new numbers appear after the interval without a full reload and without losing scroll position, verifies **AC-8**.

## Build plan

Approach is Tracer Bullet: first one thin thread that shows a real saved number on the real page end to end, then thicken one strand at a time. No schema work is needed. Tasks 1 to 6 were built for the first card design. Tasks 7 to 12 rework that build to the Balanced design.

1. Thin thread: add `HomeController` (invokable) and replace the `dashboard` route; load deployments with `latestGoodPull.windows.amounts`, pass `name` and the Today completed money, and render a plain card, satisfies **AC-1**, **AC-3** (built)
2. Add the card builder action in `app/Actions/Home/` with the select only query and the fixed eager loads, satisfies **AC-3**, **AC-4**, **AC-9**, **AC-12** (built)
3. Add `state` and `reason` (live, unavailable, paused, new) in the builder, the badge, the notes and the "No data yet" view, satisfies **AC-2**, **AC-5**, **AC-6**, **AC-7** (built)
4. First card layout, the grid and the footnote (built, reworked by tasks 9 and 10)
5. Add 60 second polling with `usePoll` limited to `deployments`, satisfies **AC-8** (built)
6. First keyboard, 375px and contrast pass (built, repeated by task 12)
7. Rework the builder: select `base_url`, load the third window `last_30_days`, return `domain` and `periods` (links, paid count, paid and pending money) in the new shape, and remove the old `today` and `thisMonth` fields, satisfies **AC-3**, **AC-9**, **AC-12** (built)
8. Update the `DeploymentCard` type, add `formatPercent` to `resources/js/lib`, and add `cardWarnings.ts` with the two limits and one function, satisfies **AC-3**, **AC-14** (built)
9. Rework `DeploymentCard.vue` to the Balanced layout: name, domain and badge; four number cells; the paid and pending currency table; the footer with freshness, payments count, warning chips and status notes, satisfies **AC-2**, **AC-3**, **AC-4**, **AC-5**, **AC-6**, **AC-7**, **AC-14** (built)
10. Rework `Dashboard.vue`: the period switch, the 2 column grid (1 on phones), the new footnote, and the period kept across polls, satisfies **AC-8**, **AC-10**, **AC-11**, **AC-13** (built)
11. Remove superseded code: the `size` prop on `MoneyByCurrency` and any unused field or import from the first design, and check nothing still references them, satisfies **AC-3** (built)
12. Keyboard, 375px and contrast pass in the browser. Check the neutral Paused badge and the warning chip first, satisfies **AC-11** (built)

## Consequences

**Positive**:
- Staff see real numbers on the first real page, and the unavailable rule from the brief is visible on screen.
- One switch answers "how is everyone doing today, this month, or lately" for every deployment at once.
- Failed and expired links are visible without opening anything, with warnings that say why a card needs a look.
- The builder returns a fixed set of display fields, so a token or raw reply cannot reach the browser by accident, and only the host of the base URL leaves the server.
- Feature 10 can reuse the builder idea and feature 9 needs no change here.

**Negative / tradeoffs**:
- **No stale badge.** Until the stale time limits are decided (scope Deferred), a deployment whose last pull was good hours ago still shows Live with an old "Last updated" time. The scheduler banner (feature 9) is the only warning if pulls stop.
- **No combined totals yet.** Staff add up several deployments by eye until the Deferred combined totals feature exists, and must not mix currencies.
- **Completed and payments can differ.** Completed counts links by created date and "N payments" counts payments by paid date (contract v1). The footnote explains it, but the two numbers will not always match.
- **Old data can carry a current period name.** If the latest good pull is from yesterday (pulls failing, or a paused deployment), its Today window is yesterday's, but the card still says Today. The same happens across a month change. The "Last updated" time is the safeguard, and the stale feature (scope Deferred) should fix it, for example by showing the window date.
- **Cancelled links are not shown.** Completed, Pending and Failed can add up to less than Links.
- **The warning limits are starting guesses.** 5% failed and 25% expired, with at least 3 links, are example values and may need tuning after real use. They live in one file for that reason.
- **Currencies with no activity are hidden.** A staff member cannot tell "no activity" from "currency not used" on a card. This replaces the earlier rule that showed a real zero as `0.00`.
- **Failure reason is the saved template text**, written for staff. Changing the wording later means changing `PullFailureKind::message()` only for new pulls, since old pulls keep their saved text.
- **Polling costs a request a minute per open tab**, and each reply now carries three periods per card. This is small for a handful of staff, but it is a steady load.
- **Not faded numbers** on Unavailable and Paused cards: the badge and note carry the warning, not dimming, so the card relies on the user reading the note.

**Neutral**:
- Cards are not links until the deployment page (feature 10) exists.
- The payment provider and the release code are not shown. If the provider is wanted later, PayHub must send it first (contract change).
- Pending money shows on the card, so the "paid vs pending" wording appears on Home before the deployment page explains it in full.

## Follow-up

- [ ] Feature 10 (deployment page): make the card name a link to it, and decide whether Home keeps pending money.
- [ ] Stale and failing badges (scope Deferred): decide the time limit and add a stale state to the card. Also consider a stale note when a Live card's `updatedAt` is old.
- [ ] Combined totals per currency (scope Deferred): add a block above the cards. The card builder can be reused for its numbers.
- [ ] Feature 12 (pause and remove): confirm the Paused state shows right after a pause, and that a removed card disappears.
- [ ] After the rebuild, run `/imprint` to save the new card pattern to `ui-registry.md`.
- [ ] `verify.md` was written for the first card. `/develop` rewrites its steps for AC-3, AC-9, AC-10, AC-11, AC-13 and AC-14 when the rebuild lands.
- [ ] Review the warning limits after a week of real use.
- [ ] Decide later whether the page needs a manual "Pull now" button (left out on purpose, it is a new action).
- [ ] If a payment provider label is wanted, add the field to contract v2 (or a v1 addition) in PayHub first.
