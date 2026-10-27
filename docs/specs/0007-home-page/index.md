# 0007. Home page with a deployment card

**Date**: 2026-10-27
**Status**: Proposed

## Summary

The Home page becomes the first real page. It shows one card for every deployment, with the Today and This month numbers (completed and pending money, one row per currency), a status badge, and "last updated". If the last pull failed, the card keeps the last good numbers and says so with the reason, and it never shows zero for missing data. The server prepares a small, safe set of display values for each card, so no token or raw reply can reach the browser, and the page reloads its own cards every 60 seconds.

## Requirements

**User stories**:
- As a staff member, I want one card per deployment with today and this month so that I can see how payments are going at a glance.
- As a staff member, I want each currency on its own row so that I never read a mixed total.
- As a staff member, I want to see when numbers are old or a pull failed, and why, so that I do not trust a wrong number.
- As a staff member, I want the page to refresh by itself so that I do not have to reload it.

**Acceptance criteria** (the contract, each one independently checkable):
- **AC-1**: The Home page (`dashboard` route, login required) shows one card for every deployment that is not removed, paused ones included, sorted by name A to Z (ties by id). With no deployments it shows the existing "No deployments yet" empty state with its Add deployment link.
- **AC-2**: Each card shows the deployment name and one status badge, always a word with a dot, never colour alone. Rules, first match wins: not active → **Paused** (neutral); no pull at all → no badge; latest pull failed → **Unavailable** (danger); otherwise → **Live** (success).
- **AC-3**: Each card shows two sections, **Today** and **This month**, taken from the latest good pull. Each section lists **Completed** money and **Pending** money, one row per currency through `MoneyByCurrency` (default size for Completed, small size for Pending), so currencies are never added together. Cents are formatted only by `formatMoney`. A real zero shows `0.00`. A section with no currency rows shows "No payments".
- **AC-4**: When a good pull exists, the card footer shows "Last updated" with `RelativeTime` using `pulled_at` of the latest good pull and its timezone for the exact time on hover, focus and tap. It never uses the time of a failed pull. With no good pull the "Last updated" line is hidden (no "Never").
- **AC-5**: When the latest pull failed and an older good pull exists, the card keeps the last good numbers and shows a note: "Showing the last good numbers." plus the failure reason (the saved `failure_message`). The time appears once, in the footer. The numbers are not faded, so contrast stays at 4.5:1 or better.
- **AC-6**: When no good pull exists, the numbers area shows "No data yet" and never zero. If the latest pull failed, the badge is Unavailable and the failure reason shows. If there is no pull at all and the deployment is active, there is no badge and the note says "Waiting for the first pull."
- **AC-7**: A paused deployment shows the Paused badge and the note "Not being pulled." and no failure reason, even if its latest pull failed. Its last good numbers stay visible with the time of that pull in the footer. With no good pull it shows "No data yet".
- **AC-8**: The page reloads only its card data every 60 seconds (Inertia polling), with no flash, no scroll jump and no loss of focus. A tab hidden in the background may slow or pause the polling.
- **AC-9**: The browser receives only the display fields listed under Value sourcing. The token, base URL, slug, raw reply and failure body never appear in the page data, the HTML or the polling replies.
- **AC-10**: The page shows this exact line under the cards: "Money is counted by the date it was paid. Each currency is shown on its own."
- **AC-11**: Cards sit in a grid of 1 column on phones, 2 from `sm` and 3 from `xl`. There is no sideways scroll at 375px. The page has one `h1` (the page title), each card name is an `h2`, section labels are `h3`, the time is reachable by keyboard, and the Paused, Unavailable and Live badges meet the 4.5:1 text contrast rule.
- **AC-12**: Building the cards runs a fixed number of queries, however many deployments exist (no query per card).

## Decision

**Chosen option**: Option 1: Server builds each card's display data, one new `DeploymentCard` Vue part shows it.

A small action class turns each deployment into a plain array of safe display values (including the badge state and note), one controller passes them to the page, and the page renders cards with the parts that already exist.

**Implementation skills**: none installed.

## Rationale

Reasoning and options: see `rationale.md`.

## Feature design

**Design source**: the existing UI. Spec 0003, `docs/design-reference-payhub.md`, `ui-registry.md`, and the built parts `PageHeader`, `EmptyState`, `Badge`, `MoneyByCurrency`, `RelativeTime` and `Card`. No `design.md`, screenshot or design tool.

**Page composition** (top to bottom): `PageHeader` (title "Home", the existing description, no actions; Add deployment stays in the sidebar) → card grid → one footnote line (AC-10). No deployments → the existing `EmptyState` instead of the grid and footnote.

**Card layout** (`DeploymentCard`, on the kit `Card` with `rounded-xl border-border/70 p-4`, matching `StatCard`):

```
┌──────────────────────────────────────────┐
│ PayHub 1                      ● LIVE     │  h2 name, Badge
│ ──────────────────────────────────────── │
│ TODAY                                    │  h3, uppercase 11px label
│ Completed                                │  text-xs muted
│   USD            6,400.00                │  MoneyByCurrency (default size)
│   GBP                0.00                │
│ Pending                                  │
│   USD            1,800.00                │  MoneyByCurrency (small size)
│ THIS MONTH                               │
│   … same two groups …                    │
│ ──────────────────────────────────────── │
│ Last updated 5 min ago                   │  footer, RelativeTime
│ <note: failure reason or Paused text>    │
└──────────────────────────────────────────┘
```

State view (what shows where):

| State | Badge | Numbers | Footer and note |
|---|---|---|---|
| Live | Live | Today, This month | "Last updated <time>" |
| Unavailable with data | Unavailable | Last good numbers | "Last updated <time>", then "Showing the last good numbers." and the reason |
| Unavailable no data | Unavailable | "No data yet" | The reason only (no "Last updated" line) |
| Paused with data | Paused | Last good numbers | "Last updated <time>", then "Not being pulled." |
| Paused no data | Paused | "No data yet" | "Not being pulled." (no "Last updated" line) |
| New, never pulled (active) | none | "No data yet" | "Waiting for the first pull." (no "Last updated" line) |

**Component inventory**: existing `PageHeader`, `EmptyState`, `Badge` (success, danger, neutral), `Card`, `MoneyByCurrency`, `RelativeTime`. New: `DeploymentCard.vue`. Small change: `MoneyByCurrency` gets an optional `size` prop (`default` or `small`, small is `text-sm font-medium`) for the Pending group. `StatCard` is not reused because its fixed single value slot does not fit two sections. Page code lives in `resources/js/pages/Dashboard.vue` (renamed in place, same file).

**Assets**: none. Icons come from `@lucide/vue`, and badges use their own dot.

**Data model sketch**: no new tables or columns. Reads only:

- `deployments`: `id`, `name`, `is_active` (soft deleted ones are left out by the model).
- `Deployment::latestPull()` → `status`, `failure_message`.
- `Deployment::latestGoodPull()` → `pulled_at`, `timezone`, and its `windows` named `today` and `this_month`, each with `amounts` (`kind`, `currency`, `cents`).

Both pull relations load only `pulls.id`, `pulls.deployment_id`, `pulls.pulled_at`, `pulls.status`, `pulls.timezone` and `pulls.failure_message` (qualified names, because `ofMany` joins), so a poll never reads `raw_reply` or `failure_body`.

Eager load: `Deployment::select(['id','name','is_active'])->with(['latestPull', 'latestGoodPull.windows' => whereIn('name', [WindowName::Today->value, WindowName::ThisMonth->value]), 'latestGoodPull.windows.amounts'])`. When grouping, compare `$window->name` and `$amount->kind` as enum cases, not raw strings. The card list in Vue uses `:key="card.id"` so a poll does not rebuild an open time popover->orderBy('name')->orderBy('id')`. This is a fixed number of queries (AC-12).

**State transitions**: none stored. The badge is derived on every request (rules in AC-2).

**API surface**:

| Endpoint | Method | Key inputs | Key outputs | Auth | Key errors |
|---|---|---|---|---|---|
| `/dashboard` (route name `dashboard`, now `HomeController`, invokable) | GET | none (Inertia partial reload `only: ['deployments']` when polling) | Inertia page `Dashboard` with prop `deployments: DeploymentCard[]` | `auth`, `verified` | 302 to login when logged out |

The route is replaced in `routes/web.php`: `Route::inertia('dashboard', 'Dashboard')` becomes `Route::get('dashboard', HomeController::class)->name('dashboard')`. The route name and URL stay, so the sidebar, breadcrumb and Wayfinder helpers keep working.

`DeploymentCard` (TypeScript type, shared with the PHP array shape):

```ts
type Money = Record<string, number>;           // lowercase currency → whole cents. The builder casts each map to (object), so an empty one is {} and a digit only key stays a key
type Section = { completed: Money; pending: Money };
type DeploymentCard = {
    id: number;
    name: string;
    state: 'live' | 'unavailable' | 'paused' | 'new'; // 'new' = active, no pull yet
    reason: string | null;                            // failure_message of the latest pull when it failed
    updatedAt: string | null;                         // pulled_at of the latest good pull, UTC ISO
    timezone: string | null;                          // timezone of the latest good pull
    today: Section | null;                            // null when there is no good pull
    thisMonth: Section | null;
};
```

**Value sourcing**:

| Action | Value produced / displayed | Source |
|---|---|---|
| List cards | Which deployments | `Deployment` rows not soft deleted, paused included. Ordered by `name` then `id` |
| Badge | `state` | Derived: `is_active` false → `paused`; else no `latestPull` → `new`; else `latestPull.status = failed` → `unavailable`; else `live` |
| Badge | Badge look and word | Fixed map in the Vue part: live → success "Live", unavailable → danger "Unavailable", paused → neutral "Paused", new → none |
| Note | `reason` | `latestPull.failure_message` only when `latestPull.status = failed` and the deployment is active (a fixed template per failure code from `PullFailureKind::message()`, so it holds no URL or token). Otherwise null, including every paused deployment |
| Footer | "Last updated" line | Shown only when `updatedAt` is not null |
| Numbers | `today` / `thisMonth` sections | The `today` and `this_month` windows of `latestGoodPull`, null when no good pull |
| Numbers | `completed` / `pending` maps | `amounts` rows grouped by `kind`, key = `currency` (lowercase, as stored), value = `cents`. A currency missing from a kind is simply absent, never 0 |
| Numbers | Currency code and text | `MoneyByCurrency` and `formatMoney` (uppercase, sorted, 2 decimals, grouping) per spec 0003 |
| Footer | Last updated time | `latestGoodPull.pulled_at` (UTC) through `RelativeTime` |
| Footer | Timezone for the exact time | `latestGoodPull.timezone`; missing or invalid falls back to UTC (spec 0003 rule) |
| Polling | Interval | Constant `60000` ms in the page |
| Footnote | Wording | Fixed text in the page (AC-10) |

**Key invariants**:
- A missing value is never shown as zero. Only a stored `0` cents shows `0.00`.
- Money is whole cents until `formatMoney`. No sums across currencies, and no sums at all on this page.
- The last good numbers always come from the latest good pull, never from a newer failed one (spec 0002 `latestGoodPull`).
- The browser only receives the `DeploymentCard` fields above.
- Status colours mean status only and always come with a word (spec 0003).

**Security model**: every logged in user is an admin, so every logged in user may see every card. The route stays behind `auth` and `verified`. The card builder copies named fields into a plain array and never passes a model or relation to Inertia. The query selects only `id`, `name` and `is_active` of the deployment, so the encrypted token is not even loaded. `failure_message` is a fixed template (spec 0002), so it is safe to show. No client data exists in a pull. No regulated personal data.

**Failure and edge cases**:
- Latest pull failed, older good pull exists → AC-5.
- Only failed pulls → AC-6.
- Brand new deployment, no pull → AC-6 ("new").
- Paused (any pull history) → AC-7. Paused wins over Unavailable.
- Rate limited (429) → saved as a failed pull with the rate limited message, so it shows as Unavailable with its reason, like any other failure.
- Good reply with a window that has no currency keys → "No payments", not an error.
- A deployment removed between polls → its card disappears at the next poll.
- A paused deployment that is switched on again keeps its old state and time until the next pull (covered by the accepted "no stale badge" tradeoff).
- Many deployments → fixed query count (AC-12). No pagination: this is an internal tool with a handful of deployments, and the page is one grid.
- Polling gets a 401 or 419 (session ended) → Inertia redirects to login, normal behaviour.
- Time in the future (clock difference) → "just now" (spec 0003).

**Configuration required**: none.

**Critical test scenarios** (each maps to an acceptance criterion; tests are written later by `/test`):
- Happy path: after a good pull from the sample JSON, the page props hold the Today and This month completed and pending cents per currency, and the card renders them as money rows, verifies **AC-1**, **AC-3**, **AC-4**.
- Never zero: a deployment with only failed pulls has `today` null and renders "No data yet", verifies **AC-6**.
- Last good kept: a good pull followed by a failed pull gives the older numbers, state `unavailable` and the failure message, verifies **AC-5**.
- Paused: an inactive deployment with a good pull gives state `paused` and its numbers, verifies **AC-7**.
- Badge rules: live, unavailable, paused and new each map to the right state, and paused beats unavailable, verifies **AC-2**.
- Order and removal: names sort A to Z, and a soft deleted deployment is missing, verifies **AC-1**.
- Currencies: two currencies show two rows with no total, an unknown currency shows its own row, verifies **AC-3**.
- Leak check: the page data and the polling reply contain no `token`, `base_url`, `slug`, `raw_reply` or `failure_body`, verifies **AC-9**.
- Query count: 1 deployment and 10 deployments run the same number of queries, verifies **AC-12**.
- Auth: a logged out request is redirected to login, verifies **AC-1**.
- Phone and keyboard: at 375px no sideways scroll, grid is 1 column, the time takes focus and shows the exact time, verifies **AC-11**.
- Polling: new numbers appear after the interval without a full reload and without losing scroll position, verifies **AC-8**.

## Build plan

Approach is Tracer Bullet: first one thin thread that shows a real saved number on the real page end to end, then thicken one strand at a time. No schema work is needed.

1. Thin thread: add `HomeController` (invokable) and replace the `dashboard` route; load deployments with `latestGoodPull.windows.amounts`, pass `name` and the Today completed money, and render a plain card with `MoneyByCurrency`. Check it by pulling the sample with `php artisan pulls:run {key}`, satisfies **AC-1**, **AC-3**
2. Add the card builder action in `app/Actions/Home/` with the full `DeploymentCard` shape (both sections, completed and pending, `updatedAt`, `timezone`), the select-only query and the fixed eager loads, satisfies **AC-3**, **AC-4**, **AC-9**, **AC-12**
3. Add `state` and `reason` (live, unavailable, paused, new) in the builder, and the badge, the notes and the "No data yet" views in `DeploymentCard.vue`, satisfies **AC-2**, **AC-5**, **AC-6**, **AC-7**
4. Build the final `DeploymentCard.vue` layout: Today and This month sections, Completed and Pending groups, the `size` prop on `MoneyByCurrency`, the 1, 2, 3 column grid, heading levels, the footnote, satisfies **AC-10**, **AC-11**
5. Add 60 second polling with `usePoll` limited to `deployments`, satisfies **AC-8**
6. Keyboard, 375px and contrast pass in the browser. Check the neutral Paused badge first (muted text on a muted fill is the likeliest to fall under 4.5:1), satisfies **AC-11**

## Consequences

**Positive**:
- Staff see real numbers on the first real page, and the unavailable rule from the brief is visible on screen.
- The builder returns a fixed set of display fields, so a token or raw reply cannot reach the browser by accident.
- Feature 10 can reuse the builder idea and feature 9 needs no change here.

**Negative / tradeoffs**:
- **No stale badge.** Until the stale time limits are decided (scope Deferred), a deployment whose last pull was good hours ago still shows Live with an old "Last updated" time. The scheduler banner (feature 9) is the only warning if pulls stop.
- **No combined totals yet.** Staff add up several deployments by eye until the Deferred combined totals feature exists, and must not mix currencies.
- **Failure reason is the saved template text**, written for staff. Changing the wording later means changing `PullFailureKind::message()` only for new pulls, since old pulls keep their saved text.
- **Polling costs a request a minute per open tab.** This is small for a handful of staff, but it is a steady load.
- **Not faded numbers** on Unavailable and Paused cards: the badge and note carry the warning, not dimming, so the card relies on the user reading the note.

**Neutral**:
- Cards are not links until the deployment page (feature 10) exists.
- Pending money shows on the card now, so the "completed vs pending" wording appears on Home before the deployment page explains it in full.
- `MoneyByCurrency` gains one optional prop; existing uses are unchanged.

## Follow-up

- [ ] Feature 10 (deployment page): make the card name a link to it, and decide whether Home keeps pending money.
- [ ] Stale and failing badges (scope Deferred): decide the time limit and add a stale state to the card. Also consider a stale note when a Live card's `updatedAt` is old.
- [ ] Combined totals per currency (scope Deferred): add a block above the cards. The card builder can be reused for its numbers.
- [ ] Feature 12 (pause and remove): confirm the Paused state shows right after a pause, and that a removed card disappears.
- [ ] After the build, run `/imprint` to save the card pattern to `ui-registry.md`.
- [ ] Decide later whether the page needs a manual "Pull now" button (left out on purpose, it is a new action).
