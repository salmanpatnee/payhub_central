# 0009. Deployment page

**Date**: 2026-10-28
**Status**: Proposed

## Summary

The Deployment page is the detail view for one deployment. Staff reach it by clicking the card name on Home. It shows the same header facts as the card (name, domain, status, last updated), then two tables with all four windows side by side: Links (counted by created date) and Money (counted by paid date, one group per currency). Plain sentences on the page explain why the two views can differ. The server prepares a small, safe set of values, so no token or raw reply can reach the browser, and the page reloads its own data every 60 seconds.

## Requirements

**User stories**:
- As a staff member, I want to open one deployment so that I can see all four windows (all time, today, this month, last 30 days) in one place.
- As a staff member, I want links and money shown as two separate views with a plain explanation, so that I do not read them as the same thing.
- As a staff member, I want each currency on its own, so that I never read a mixed total.
- As a staff member, I want to see when the numbers are old, when a pull failed and why, and which dates each window covers, so that I know how far to trust what I see.
- As a staff member, I want the page to refresh by itself so that I do not have to reload it.

**Acceptance criteria** (the contract, each one independently checkable):
- **AC-1**: `GET /deployments/{slug}` (route name `deployments.show`, login required) shows the page for the deployment with that slug. An unknown slug, or a removed (soft deleted) deployment, gives a 404 page. A logged out request is sent to login.
- **AC-2**: On Home, the card name (the `h2`) becomes a link to the deployment's page, reachable and activated by keyboard, with a visible focus ring. The link is a ready made path sent as `href`. Nothing else on Home changes. The slug appears in the Home page data only inside `href`.
- **AC-3**: The header shows the deployment name as the page's one `h1`, the domain host (same rule as Home, hidden when there is no host), one status badge and the "Last updated" time. The badge states, their words and their look are the same as Home (Live, Unavailable, Paused, none for a new deployment), and both pages get them from the same code (one shared PHP class for `state`, `reason` and `domain`, and one shared front end file for the badge map and the status notes), so they can never disagree. "Last updated" uses `RelativeTime` with the `pulled_at` and timezone of the latest good pull, and is hidden when there is no good pull. The breadcrumbs read Home, then the deployment name, with Home as a link. The browser tab title is the deployment name. The name, badge and breadcrumb all come from the one polled prop, so a rename shows after the next poll. The release version and the payment provider are not shown.
- **AC-4**: The Links table has four columns, in this order: All time, Today, This month, Last 30 days. It has six rows, in this order: Links created, Completed, Pending, Failed, Cancelled, Expired. Each cell is the saved count of that window and is shown as a plain whole number. A window with a count of zero shows `0`. Links are counted by the date they were created.
- **AC-5**: The Money table has the same four columns. For each currency it shows a group with two rows, Paid (the saved `completed` money) and Pending, in cents formatted only by `formatMoney`. A currency gets a group when it has paid or pending money above zero in at least one of the four windows, and groups are sorted by currency code. Inside a shown group a window with no money shows `0.00`. A currency with no money in any window is not shown. An unknown currency is shown like any other, with its code. Different currencies are never added together. After the groups, one row "Payments (all currencies)" shows each window's `paid_count` as a whole number (`paid_count` is one number for the whole window, not per currency). When no currency has money in any window, the groups are replaced by the line "No payments yet" and the Payments row still shows. Money is counted by the date it was paid.
- **AC-6**: Each column heading shows the window name. Under the name of Today, This month and Last 30 days it shows the date range the window covers, taken from the saved `starts_at` and `ends_at`: one day shows as `28 Oct`, a longer range as `1 Oct to 31 Oct` (the end is excluded in the data, so the shown last day is the day before it). A year is added to both dates only when the two dates are in different years, such as `28 Dec 2025 to 3 Jan 2026`. The dates are the calendar dates as received, with no time zone shift: the `YYYY-MM-DD` part is read from the text with a pattern, the maths uses `Date.UTC`, and the month names are a fixed English list (never `toLocale*`). One day is subtracted from the end only when its time part is `00:00:00`. If the text cannot be read or the end is not after the start, the heading shows the name only. All time shows no range.
- **AC-7**: A visible sentence sits under each table title. Links: "Counted by the date each link was created." Money: "Counted by the date each payment was paid. This includes links created earlier." One note sits under both tables: "A link made yesterday and paid today counts in yesterday's links and in today's money, so the completed links and the payments of a window can differ." Each currency is shown on its own.
- **AC-8**: States, using the same rules and the same words as Home:
  - Latest pull failed and an older good pull exists: the tables keep the last good numbers, with the note "Showing the last good numbers." and the failure reason.
  - No good pull exists, or any of the four windows is missing from it: `windows` is null (a missing window is never filled with zero) and both tables are replaced by "No data yet", never zero. An active deployment whose latest pull failed shows the Unavailable badge and the reason. An active deployment with no pull at all shows no badge and the note "Waiting for the first pull."
  - Paused: the Paused badge and the note "Not being pulled." with no failure reason, even if the latest pull failed. Last good numbers stay visible, or "No data yet" when there are none.
  - The numbers are never faded, so contrast stays at 4.5:1 or better.
- **AC-9**: The browser receives only the display fields listed under Value sourcing. The token, the full base URL, the raw reply, the failure body, the release and the provider never appear in the page data, the HTML or the polling replies. Only the domain host of the base URL leaves the server. The page data does not hold the slug.
- **AC-10**: The page reloads only its deployment data every 60 seconds (Inertia polling) with no flash, no scroll jump and no loss of focus.
- **AC-11**: At 375px width the page has no sideways scroll. Each table scrolls sideways inside its own box, and its first column stays in place with a solid background so nothing shows through it. Each table has a caption for assistive tools and proper column and row headings. The page has one `h1`. Every part is reachable by keyboard, the time is reachable by keyboard, and badge text meets 4.5:1 contrast. The page is light only.
- **AC-12**: Building the page runs a fixed number of queries, however many windows, currencies or pulls exist. It never reads `raw_reply` or `failure_body`.

## Decision

**Chosen option**: Option 1: A dedicated page with its own small builder action, sharing the status rules with Home on both the PHP and the front end side.

A new action class builds one deployment's safe display values (all four windows), a `show(string $slug)` method on the existing deployments controller passes them to a new `deployments/Show` page, and the badge, reason and domain rules move to one small shared PHP class (`App\Actions\Deployments\DeploymentStatus` with `state()`, `reason()` and `domain()`), while the badge map and status notes move to one shared front end file (`resources/js/lib/deploymentStatus.ts`), both used by Home and the new page.

**Implementation skills**: none installed.

## Rationale

Reasoning and options: see `rationale.md`.

## Feature design

**Design source**: the existing UI and docs (the engineer picked this on 2026-10-28): spec 0003, `ui-registry.md`, `docs/design-reference-payhub.md`, and the look of the Home card. No new visual direction.

**Page composition** (top to bottom): `PageHeader`-like block (name as `h1`, domain, badge, Last updated) → status note when there is one (reason, "Not being pulled.", "Waiting for the first pull.", "Showing the last good numbers.") → Links table with its title and sentence → Money table with its title and sentence → the note about why they can differ. With no good pull, the two tables and their sentences stay and the table bodies are replaced by "No data yet" (one line under each title), so the page keeps its shape.

```
Home > Karachi Collections
Karachi Collections                                   ● LIVE
pay.karachicollect.pk                    Last updated 7 min ago
[note, when there is one]

Links
Counted by the date each link was created.
┌────────────────┬──────────┬────────────┬────────────┬────────────────┐
│                │ All time │ Today      │ This month │ Last 30 days   │
│                │          │ 28 Oct     │ 1 Oct to 31│ 29 Sep to 28   │
├────────────────┼──────────┼────────────┼────────────┼────────────────┤
│ Links created  │ 1820     │ 14         │ 240        │ 231            │
│ Completed      │ ...      │            │            │                │
│ Pending / Failed / Cancelled / Expired               │                │
└────────────────┴──────────┴────────────┴────────────┴────────────────┘

Money
Counted by the date each payment was paid. This includes links created earlier.
┌────────────────┬──────────┬────────────┬────────────┬────────────────┐
│ PKR            │          │            │            │                │
│   Paid         │ ...      │            │            │                │
│   Pending      │ ...      │            │            │                │
│ USD  (same)    │          │            │            │                │
│ Payments (all currencies)  │ whole numbers per window              │
└────────────────┴──────────┴────────────┴────────────┴────────────────┘
A link made yesterday and paid today counts in ... can differ.
```

**Component inventory**: existing `Badge`, `RelativeTime`, `Table` (kit), `Breadcrumbs` (the layout breadcrumb is fixed per page and cannot read props, so the build settles one method, Inertia per page layout props or a breadcrumb drawn in the page, and checks that the name updates after a poll), `PageHeader` if it fits a badge and a time (otherwise a small header block in the page), and `formatMoney`. New: `resources/js/lib/deploymentStatus.ts` (badge map and notes, also used by `DeploymentCard.vue`), `resources/js/pages/deployments/Show.vue` (page, with both tables inside it unless they grow large), `resources/js/lib/formatWindowRange.ts` (the date range text), the `DeploymentCard` type gains `href`, and a `DeploymentDetail` type. The first column of each table stays in place on phones (the project has a sticky table skill, `sticky-table-freeze`, if the build needs help with the solid background). The Home card name becomes a `Link`.

**Assets**: none.

**Data model sketch**: no new tables or columns, no migration. Reads only:

- `deployments`: `id`, `name`, `slug`, `base_url`, `is_active` (soft deleted ones are left out by the model). The token column is never selected. `slug` is used to find the row and to build the Home `href`, and is not copied into the page data.
- `Deployment::latestPull()` → `status`, `failure_message`.
- `Deployment::latestGoodPull()` → `pulled_at`, `timezone`, and all four `windows` (`all_time`, `today`, `this_month`, `last_30_days`), each with `starts_at`, `ends_at`, `links_total`, `links_pending`, `links_completed`, `links_failed`, `links_cancelled`, `links_expired`, `paid_count` and `amounts` (`kind`, `currency`, `cents`).

Both pull relations load only `pulls.id`, `pulls.deployment_id`, `pulls.pulled_at`, `pulls.status`, `pulls.timezone` and `pulls.failure_message` (the same column list as Home), so `raw_reply` and `failure_body` are never read.

**State transitions**: none stored. The badge is derived on every request with the rules of spec 0007 (AC-2 there): not active → paused; no pull → new; latest pull failed → unavailable; otherwise live.

**API surface**:

| Endpoint | Method | Key inputs | Key outputs | Auth | Key errors |
|---|---|---|---|---|---|
| `/deployments/{slug}` (route `deployments.show`, `DeploymentController@show`) | GET | `slug` in the path (Inertia partial reload `only: ['deployment']` when polling) | Inertia page `deployments/Show` with prop `deployment: DeploymentDetail` | `auth`, `verified` | 302 to login when logged out, 404 for an unknown or removed slug |

The route is `deployments/{slug}`, added with `show` on the existing `deployments` resource. It takes a plain string, not model binding (binding would run `select *` and load the encrypted token). The action runs one query, `Deployment::select([...safe columns...])->where('slug', $slug)->with(...)->firstOrFail()`, and a soft deleted row is not found, which gives the 404. The route pattern is `[a-z0-9-]+`, so a capital letter gives a 404. A 404 during polling shows Inertia's default error modal, which is accepted. The add deployment form (spec 0005) must refuse `create` as a key, because the `create` route wins and that deployment's page could never open.

```ts
type Money = Record<string, number>;         // lowercase currency → whole cents. Empty is {} (cast to object in PHP)
type WindowDetail = {
    from: string | null;                     // starts_at as received, null for all time
    to: string | null;                       // ends_at as received (excluded), null for all time
    links: { total: number; completed: number; pending: number; failed: number; cancelled: number; expired: number };
    paidCount: number;                       // payments paid in the window (all currencies)
    completed: Money;                        // paid money per currency
    pending: Money;                          // money on pending links created in the window
};
type DeploymentDetail = {
    name: string;
    domain: string | null;                   // host of base_url only
    state: 'live' | 'unavailable' | 'paused' | 'new';
    reason: string | null;                   // failure_message of the latest pull when it failed and the deployment is active
    updatedAt: string | null;                // pulled_at of the latest good pull, UTC ISO
    timezone: string | null;                 // timezone of the latest good pull
    windows: { allTime: WindowDetail; today: WindowDetail; thisMonth: WindowDetail; last30Days: WindowDetail } | null; // null when there is no good pull
};
```

On Home, `DeploymentCard` gains `href: string` (the path `/deployments/{slug}`, built by the route helper on the server).

**Value sourcing**:

| Action | Value produced / displayed | Source |
|---|---|---|
| Find the page | Which deployment | `slug` in the path, matched with `deployments.slug`, soft deleted rows excluded |
| Home link | `href` | `route('deployments.show', $slug, false)` (a relative path) built on the server from `deployments.slug`. The Home query adds `slug` to its select list. This is the only place the slug is sent on Home |
| Header | `name`, `domain` | `deployments.name`, and the host of `deployments.base_url` (lowercase, `parse_url`, null when there is no host), the same code as Home |
| Header | `state`, `reason`, `domain` | The shared `DeploymentStatus` class (see State transitions) from `is_active`, `latestPull.status`, `failure_message` and `base_url` |
| Badge and notes | Look and words | The shared `lib/deploymentStatus.ts` map and notes, used by Home and this page: live → success "Live", unavailable → danger "Unavailable", paused → neutral "Paused", new → none |
| Note | `reason` | `latestPull.failure_message` only when the latest pull failed and the deployment is active (a fixed template per code, so no URL or token). Otherwise null, including every paused deployment |
| Header | "Last updated" | `latestGoodPull.pulled_at` (UTC) through `RelativeTime`, hidden when null |
| Header | Timezone for the exact time | `latestGoodPull.timezone`; missing or invalid falls back to UTC (spec 0003 rule) |
| Tables | Window columns | The four `windows` of `latestGoodPull`, matched by name as enum cases. Null `windows` when there is no good pull |
| Links table | The six counts | `links_total`, `links_completed`, `links_pending`, `links_failed`, `links_cancelled`, `links_expired` of each window |
| Links table | Column heading text | Fixed map in the page: All time, Today, This month, Last 30 days |
| Links and Money tables | Date range under the heading | `starts_at` and `ends_at` of the window through `formatWindowRange`. The date part is read from the text as received (no time zone conversion). The shown last day is `ends_at` minus one day. All time has none |
| Money table | Currency groups | The union of currency keys across the four windows with a paid or pending amount above zero in at least one window, sorted by the uppercased code as Home does |
| Money table | Paid and Pending cells | `amounts` of kind `completed` and `pending` for that currency and window; a currency missing from a window counts as 0 for the cell. Formatted by `formatMoney` (uppercase code, 2 decimals, grouping) |
| Money table | Payments row | `paid_count` of each window |
| Page | Explanation sentences and the note | Fixed text in the page (AC-7) |
| Polling | Interval and scope | `usePoll(60000, { only: ['deployment'] })`. Every shown value (name, badge, breadcrumb) comes from that one prop |
| Page | Browser tab title | `deployment.name` |
| Breadcrumbs | Names | Home (route `dashboard`) and `deployment.name` |

**Key invariants**:
- A missing value is never shown as zero. Only the numbers of a saved good pull show, and a deployment with no good pull shows "No data yet".
- Money is whole cents until `formatMoney`. Different currencies are never added together. The Payments row is a count, not money, so it is not a sum of currencies.
- Links and money use different dates (contract v1). The Links table is by created date, the Money table is by paid date, and the page says so.
- The numbers always come from the latest good pull, never from a newer failed one (spec 0002 `latestGoodPull`).
- The status badge and the domain come from one shared class used by Home and this page.
- The browser only receives the `DeploymentDetail` fields above. The release version and the provider are never sent.
- Status colours mean status only and always come with a word (spec 0003).

**Security model**: every logged in user is an admin, so every logged in user may open every deployment's page. The route stays behind `auth` and `verified`. The builder copies named fields into a plain array and never passes a model or relation to Inertia. The one query selects only `id`, `name`, `slug`, `base_url` and `is_active` (no model binding), so the encrypted token is never loaded. `failure_message` is a fixed template (spec 0002), so it is safe to show. The slug is not secret (it is the deployment key, shared with PayHub), but it is not copied into the page data. No client data exists in a pull. No regulated personal data.

**Failure and edge cases**:
- Latest pull failed, older good pull exists → AC-8, last good numbers with the note.
- Only failed pulls → "No data yet" and the reason.
- Brand new deployment → "Waiting for the first pull."
- Paused (any history) → AC-8. Paused wins over Unavailable.
- Unknown or removed slug → 404. A deployment removed while the page is open gets a 404 on the next poll.
- A window with no links and no money → zeros in the Links table, and no extra line (the currency groups follow the rule in AC-5).
- Rate limited (429) → saved as a failed pull, so it shows as Unavailable with its reason like any other failure.
- Old data with a current window name: the date range under the heading shows which dates the numbers really cover, and "Last updated" shows when they were pulled.
- A `starts_at` or `ends_at` that is not readable, or an end not after the start → the heading shows the name only, with no range.
- A window missing from a good pull → `windows` is null and the page shows "No data yet".
- Currency code made of digits only → still a map key (object cast), shown with its code.
- Session ended during polling → Inertia redirects to login, normal behaviour.
- Time in the future (clock difference) → "just now" (spec 0003).

**Configuration required**: none.

**Critical test scenarios** (each maps to an acceptance criterion; tests are written later by `/test`):
- Happy path: after a good pull from the sample JSON, the page data holds all four windows with six link counts, paid count and paid and pending cents per currency, verifies **AC-4**, **AC-5**, **AC-9**.
- Not found: an unknown slug and a soft deleted deployment give 404, verifies **AC-1**.
- Auth: a logged out request is redirected to login, verifies **AC-1**.
- Home link: the Home card data holds `href` for each deployment, and the slug appears nowhere else in the Home data, verifies **AC-2**.
- Agreement: for the same four deployment situations (live, unavailable, paused, new), Home and this page give the same `state` and `domain`, verifies **AC-3**.
- Never zero: a deployment with only failed pulls has `windows` null and shows "No data yet", verifies **AC-8**.
- Last good kept: a good pull followed by a failed pull gives the older numbers, state `unavailable` and the failure message, verifies **AC-8**.
- Paused: an inactive deployment with a good pull gives state `paused`, its numbers and no reason, verifies **AC-8**.
- Currencies: two currencies show two groups with no total, an unknown currency shows its own group, a currency with money only in one window shows `0.00` in the others, and a currency with no money in any window is hidden, verifies **AC-5**.
- Payments row: the paid count of a window shows once, not per currency, verifies **AC-5**.
- Date range: `2026-10-26T00:00:00+05:00` to `2026-10-27T00:00:00+05:00` shows `26 Oct`; `2026-10-01` to `2026-11-01` shows `1 Oct to 31 Oct`; a range across a year end shows both years; all time has none, verifies **AC-6**.
- Text: the three explanation texts are on the page exactly, verifies **AC-7**.
- Leak check: the page data and the polling reply contain no `token`, `slug`, `raw_reply`, `failure_body`, release or provider, and the full `base_url` does not appear (only its host), verifies **AC-9**.
- Query count: a deployment with 1 pull and one with many pulls and currencies run the same number of queries, and `raw_reply` is never selected, verifies **AC-12**.
- Polling: new numbers appear after the interval without a full reload and without losing scroll position, verifies **AC-10**.
- Phone and keyboard: at 375px no page sideways scroll, each table scrolls inside its box with the first column fixed and solid, the time takes focus, verifies **AC-11**.

## Build plan

Approach is Tracer Bullet: first one thin thread that shows a real saved number on the real page end to end, then thicken one strand at a time. No schema work is needed.

1. Thin thread: widen the `deployments` route to allow `show` (binding by slug), add `DeploymentController@show` and an action that returns the name and the four windows' links created; render a plain page with those numbers; make the Home card name a link with `href`, satisfies **AC-1**, **AC-2**
2. Extract the state, reason and domain rules from `BuildDeploymentCards` into `DeploymentStatus`, and the badge map and notes from `DeploymentCard.vue` into `lib/deploymentStatus.ts`, use both from Home and the new page, and add the header: name as `h1`, domain, badge, Last updated, breadcrumbs, satisfies **AC-3**
3. Full page data: all four windows with the six counts, paid count, money maps and `from` and `to`, with the safe column list, the fixed eager loads and the `DeploymentDetail` type, satisfies **AC-9**, **AC-12**
4. Links table with the window headings and `formatWindowRange`, satisfies **AC-4**, **AC-6**
5. Money table: currency groups with the hide rule, `0.00` cells, and the Payments row, satisfies **AC-5**
6. Explanation sentences and the note, satisfies **AC-7**
7. States: "No data yet", Unavailable with the last good numbers, Paused and new notes, satisfies **AC-8**
8. 60 second polling limited to `deployment`, with the tab title and breadcrumb read from that prop, satisfies **AC-10**
9. Phone, keyboard and contrast pass: sideways scroll inside each table with a fixed solid first column, captions, headings, focus order, satisfies **AC-11**
10. Refuse `create` as a key in the add deployment rules (spec 0005), update spec 0007 and its leak test for the slug in `href`, and run the Home checks again, satisfies **AC-2**, **AC-9**

## Consequences

**Positive**:
- Staff can see every window of one deployment, including all time, which Home never loads.
- Cancelled and expired links finally become visible, and the six rows add up to the total.
- Links and money are kept apart and explained on the page, so staff are less likely to read them as the same thing.
- The date range under each heading shows exactly which days the numbers cover, which also softens the old data problem noted in spec 0007.
- Home and this page share one set of status rules, so they cannot disagree.
- Feature 11 (pull history) and feature 12 (edit, pause, remove) have a page to live on.

**Negative / tradeoffs**:
- **The slug is now sent on Home.** Spec 0007 said it never reaches the browser. The engineer chose a readable address, so it appears inside `href`. It is the deployment key shared with PayHub and not a secret, but the rule in spec 0007 must be updated.
- **Payments is one row for all currencies.** PayHub sends one `paid_count` per window, so it cannot sit inside a currency group. It sits once below the groups, and staff must not read it as a per currency count.
- **A wide table on phones scrolls sideways inside its box.** It is comparable, but a person must swipe to see all four windows at 375px.
- **No warning chips and no success rate here.** Staff compare the numbers by eye. Home keeps its quick signals.
- **A hidden currency can look like a missing one.** A currency with no money in any window is not shown at all.
- **No stale badge yet.** A deployment whose last good pull is hours old still shows Live, with an old "Last updated" time and old date ranges (the stale feature is in the scope Deferred list).
- **Polling costs a request a minute per open tab**, and each reply carries four windows with all currencies. That is small for a handful of staff, but it is a steady load.
- **Release version left out.** The scope row mentions it, but the engineer did not pick it, so staff cannot see an old deployment from this page.

**Neutral**:
- The page has no write actions. It never contacts PayHub, it only shows saved pulls.
- Contract v2 would need new fields here. Unknown keys and currencies are already accepted.
- A manual "Pull now" button is not added (left out on purpose, it is a new action).

## Follow-up

- [ ] Spec 0005: the key rules must refuse `create` (built in task 10).
- [ ] Update spec 0007 AC-9 and its invariants: the slug may appear in the Home page data inside `href` only. The leak test changes with it.
- [ ] The scope row for feature 10 mentions the release version. It is not shown on this page. Update the scope row text, or add the release later by choice.
- [ ] Feature 11 (pull history): add the list of recent pulls on this page, below the Money table.
- [ ] Feature 12 (edit, pause, remove): add its actions to the page header and confirm the page returns a 404 right after a removal.
- [ ] Stale and failing badges (scope Deferred): decide the time limit and show it in the header and in the card.
- [ ] Combined totals (scope Deferred) can reuse the money maps built here.
- [ ] After the build, run `/imprint` to save the table pattern to `ui-registry.md`.
