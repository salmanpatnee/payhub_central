# 0010. Recent pull history on the Deployment page

**Date**: 2026-10-28
**Status**: Proposed

## Summary

The Deployment page gets a "Recent pulls" table that lists the 10 newest pulls of that deployment, good and failed, newest first. Each row shows when the pull ran, whether it was Good or Failed, whether it was Scheduled or Manual, and the saved reason when it failed. The data is already saved by spec 0002, so there is no new table or column. The list loads when the page opens and does not refresh with the 60 second poll, by the engineer's choice.

## Context

Pulls run on their own every 5 minutes (spec 0008). When one fails, the Deployment page (spec 0009) shows an Unavailable badge and one reason, taken from the latest pull only. Staff cannot see whether that is a single blip or the tenth failure in a row, when the trouble began, or whether a manual test pull was involved.

Every attempt is already saved as a `pulls` row (spec 0002). It has `pulled_at`, `status`, `source` and a fixed template `failure_message`. The table has an index on `(deployment_id, pulled_at)`, so "the newest rows of one deployment" is a cheap query. A pull takes about 288 rows a day per deployment, and a retention rule is still deferred in the scope.

Rules already in force: a removed deployment gives a 404 and shows nowhere, a failure message is a fixed template (never an exception, URL or token), the browser only gets named safe fields, and a page builds with a fixed number of queries. Spec 0009 left a follow up to put this list on its page, and spec 0002 left a question about pulls of removed deployments.

## Requirements

**User stories**:
- As a staff member, I want to see the latest pulls of a deployment so that I can tell a one off failure from a run of failures.
- As a staff member, I want each failed pull to show its reason and time so that I know what went wrong and when it began.
- As a staff member, I want to see whether a pull was scheduled or started by hand so that I can tell a test from the normal run.
- As a staff member, I want the list to show even when there are no numbers yet, so that I can read the reasons when every pull has failed.

**Acceptance criteria** (the contract, each one independently checkable):
- **AC-1**: The Deployment page has a "Recent pulls" section that lists the 10 newest pulls of that deployment, good and failed, newest first (ordered by `pulled_at`, then `id`). When fewer than 10 exist, it lists them all. It never lists a pull of another deployment. There is no paging and no filter.
- **AC-2**: Each row shows four things. **Time**: the pull time through `RelativeTime`, with the exact time on hover and on keyboard focus, in the timezone of the latest good pull (UTC when there is none). **Result**: a badge with the word Good (success look) or Failed (danger look), never colour alone. **How it started**: the word Scheduled or Manual. **Reason**: for a failed pull, the saved `failure_message` (or "No reason saved" when it is empty); for a good pull, the word "None".
- **AC-3**: The list is a table with a caption for assistive tools and proper column and row headings (Time, Result, How it started, Reason). A long reason wraps inside its cell (the Reason cell has a minimum width) instead of stretching the table. At 375px width the page has no sideways scroll, and the table scrolls sideways inside its own box. Text meets 4.5:1 contrast and nothing is faded. The page still has one `h1`, and every part of the list is reachable by keyboard. The page stays light only.
- **AC-4**: The section sits below the Link outcomes and All periods row and above the closing note. The closing note only shows when numbers exist, so under "No data yet" the section is the last thing on the page. The section always shows, including when the page shows "No data yet" and when the deployment is paused. A deployment with no pulls shows "No pulls yet." in the section. A paused deployment shows its saved rows as they are, including failure reasons.
- **AC-5**: The list is loaded when the page opens. The 60 second poll (spec 0009 AC-10) does not reload it, does not change its rows and does not run its query. A poll does not reset or scroll the table. The exact time on hover can still follow `deployment.timezone`, which comes from the polled prop.
- **AC-6**: The list data holds only `id`, the pull time, the result, the source and the failure message of each pull. The token, raw reply, failure body, HTTP status, who started a manual pull, the base URL and the slug never appear in the `pulls` data. (The slug still appears in the page URL and the breadcrumb link, as spec 0009 allows.)
- **AC-7**: Opening the page runs exactly one extra query for the list, whether the deployment has 3 pulls or 3000. A poll runs none. The query never reads `raw_reply` or `failure_body`. It should use the `(deployment_id, pulled_at)` index, checked once with `EXPLAIN` on MySQL (tests run on SQLite and cannot prove it).
- **AC-8**: Nothing else on the page changes. An unknown or removed slug still gives a 404, a logged out request still goes to login, and the header, status, cards and tables still behave as in spec 0009.

## Options considered

### Option 1: A separate, lazily loaded list prop with its own small action

A new action builds the 10 rows with one query. The controller passes them as a separate `pulls` prop (a closure, so it only runs when the prop is asked for). The existing 60 second poll asks only for `deployment`, so it never runs this query.

**Pros**:
- One cheap query, only when the page opens. No change to the polled reply.
- The safe field list is small and easy to check in one place.
- Matches the engineer's choice of no auto refresh.

**Cons**:
- The list can be older than the numbers above it, which refresh every minute.
- One more action class and one more prop to keep leak free.

### Option 2: Put the pulls inside the polled `deployment` prop

Extend `BuildDeploymentDetail` so the rows ride along with the existing poll.

**Pros**:
- The list is always as fresh as the numbers. No new prop and no stale gap.

**Cons**:
- Every poll (a request a minute per open tab) runs an extra query and carries 10 more rows.
- Grows the one shared builder that Home's rules also lean on.

### Option 3: A separate history page with paging

A new route such as `/deployments/{slug}/pulls` with a paged list.

**Pros**:
- Lets staff go as far back as they like.

**Cons**:
- A new route, new page and paging rules, for a need nobody has shown yet.
- Moves the problem off the page where staff already look, and the scope says the list lives on the Deployment page.

## Decision

**Chosen option**: Option 1: A separate, lazily loaded list prop with its own small action.

Add `App\Actions\Deployments\BuildRecentPulls` (one query, 10 rows, five safe fields), pass its result from `DeploymentController::show` as a lazy `pulls` prop, and render it as a table in `deployments/Show.vue`.

**Implementation skills**: none installed.

## Rationale

The engineer chose the newest 10, no filter, no paging and no auto refresh. Those choices keep this a small read: one indexed query, one table. Option 1 is the cheapest way to honour them, because a lazy prop keeps the work off the 60 second poll, which spec 0009 notes already costs a request a minute per open tab.

Option 2 was the runner up. It would keep the list as fresh as the numbers, and it is the first thing to reach for if staff complain about a stale list. The engineer also declined a "shown as of page open" line. The cost of that is accepted and written in Consequences.

A list this short needs no paging. The usual rule that lists must paginate is met by a hard cap of 10 rows, so the query can never grow. Retention is not needed for this feature to work, so it stays deferred in the scope.

## Feature design

**Data model sketch**: no new tables or columns, no migration. Reads only, from `pulls` (spec 0002):

| Column | Use |
|---|---|
| `id` | Row key and tie breaker for the order |
| `pulled_at` | The time shown, and the main sort (UTC) |
| `status` | `success` shows Good, `failed` shows Failed |
| `source` | `scheduled` shows Scheduled, `manual` shows Manual |
| `failure_message` | The reason, only meaningful for a failed pull (a fixed template per code) |

`deployment_id` is used in the `where` only. The columns `raw_reply`, `failure_body`, `http_status`, `failure_kind`, `triggered_by` and the window tables are never selected. Pulls of a removed deployment show nowhere, because its page is a 404 (this answers the open question in spec 0002).

**State transitions**: none. The list is a read of saved rows.

**API surface**:

| Endpoint | Method | Key inputs | Key outputs | Auth | Key errors |
|---|---|---|---|---|---|
| `/deployments/{slug}` (route `deployments.show`, spec 0009) | GET | `slug` in the path | Existing prop `deployment`, plus a new lazy prop `pulls: PullRow[]` | `auth`, `verified` | 302 to login, 404 for an unknown or removed slug (unchanged) |

No new route. `show()` takes the slug as `string $deployment`. It builds `deployment` first and eagerly, as before (so the 404 still comes first), then passes `pulls` as a closure with `BuildRecentPulls` injected as `$recent`: `'pulls' => fn () => $recent->handle($deployment)`. The poll asks for `only: ['deployment']`, so the closure does not run. The action runs one query (the argument is the same slug):

```php
Pull::query()
    ->select(['id', 'pulled_at', 'status', 'source', 'failure_message'])
    ->whereIn('deployment_id', Deployment::query()->select('id')->where('slug', $slug))
    ->orderByDesc('pulled_at')->orderByDesc('id')
    ->limit(10)
    ->get();
```

The subquery uses the default scope, so a removed deployment matches nothing. The action maps each row to a plain array and never returns a model:

- `at` is `$pull->pulled_at->toIso8601String()`, the same as `updatedAt` in `BuildDeploymentDetail` (the app timezone is UTC).
- `ok` is `$pull->status === PullStatus::Success` (an enum compare, not a string compare).
- `reason` is `null` when `ok`, otherwise `$pull->failure_message ?: null`, so an empty message also becomes `null`.
- `source` is `$pull->source->value` (`scheduled` or `manual`).

```ts
type PullRow = {
    id: number;
    at: string;                          // pulled_at, ISO 8601
    ok: boolean;                         // status is success
    source: 'scheduled' | 'manual';
    reason: string | null;               // failure_message of a failed pull, else null
};
```

`PullRow` lives in `resources/js/types/deployment.ts`. `Show.vue` takes `pulls: PullRow[]` as a required prop (the first load always sends it).

**Value sourcing**:

| Action | Value produced / displayed | Source |
|---|---|---|
| Find the rows | Which deployment | `slug` in the path, matched with `deployments.slug`, removed rows excluded (same rule as spec 0009) |
| Choose the rows | The newest 10, in order | `pulls.pulled_at` then `pulls.id`, descending, `limit(10)` |
| Row | Time text and exact time | `PullRow.at` through `RelativeTime` |
| Row | Timezone for the exact time | `deployment.timezone` (the latest good pull's timezone, spec 0009), UTC when null or invalid (spec 0003 rule) |
| Row | Result badge | `PullRow.ok`: true gives Good with the success badge look, false gives Failed with the danger look. Words from a fixed map in the page |
| Row | How it started | `PullRow.source` through a fixed map: `scheduled` gives "Scheduled", `manual` gives "Manual" |
| Row | Reason | `PullRow.reason` for a failed pull, "No reason saved" when a failed pull has none, "None" for a good pull |
| Section | "No pulls yet." | An empty `pulls` array, shown as a plain muted `text-sm` line, not an empty table |
| Section | Look | A `section` with `aria-labelledby`, an `h2` in the existing eyebrow style, and the same card classes as the other sections. The caption is `sr-only`, as in the All periods table |
| Page | Where it renders | In `Show.vue`, the numbers block ends after the Link outcomes and All periods row. The Recent pulls section follows with no condition. The closing note moves out under its own condition (numbers exist) and stays last |
| Section | Heading, caption | Fixed text in the page: heading "Recent pulls", caption "The 10 most recent pulls, newest first." (for assistive tools) |

**Key invariants**:
- The list is the newest 10 only. The query has a hard limit, so its cost never grows.
- A pull that failed shows its reason. A good pull shows none, and a reason is never invented.
- Failure text only comes from `failure_message`, which is a fixed template per code (spec 0002), never from a response, URL, header or exception.
- The browser only receives the five fields of `PullRow`. Models are never passed to the page.
- Status colours always come with a word (spec 0003). Numbers and text are never faded.
- Time and money formats come only from the `resources/js/lib` helpers.

**Security model**: every logged in user is an admin, so every logged in user may read every deployment's pull history. The route stays behind `auth` and `verified`. The query selects five safe columns, so the encrypted token (which is on `deployments`, not `pulls`), the raw reply and the failure body are never loaded. A pull holds no client data and no regulated personal data.

**Failure and edge cases**:
- Fewer than 10 pulls: the rows that exist show, with no empty rows.
- No pulls at all: "No pulls yet." (the header also says "Waiting for the first pull." for an active deployment).
- Every pull failed: the numbers area shows "No data yet" and the list below it shows each failure with its reason.
- Paused deployment: rows show as saved, including old failures. Nothing new is added while paused, because refused pulls are never saved (spec 0008).
- Two pulls in the same second: the `id` tie breaker keeps the order stable.
- A failed row with an empty message: shows "No reason saved".
- Pulls pruned later by a retention rule: the list is shorter, and nothing breaks.
- Removed deployment: the page is a 404, so its pulls are not shown anywhere.
- A pull time in the future (clock difference): `RelativeTime` shows "just now" (spec 0003).
- The list is older than the numbers after a few minutes open: accepted, a reload refreshes it.

**Configuration required**: none.

**Critical test scenarios** (each maps to an acceptance criterion in ## Requirements; tests are written later by `/test`):
- Happy path: a deployment with a good pull, a failed pull and a manual pull gives rows in newest first order with the right result, source and reason, verifies **AC-1**, **AC-2**.
- Cap and order: 12 pulls give only the newest 10, and two pulls with the same `pulled_at` keep a stable order by `id`, verifies **AC-1**.
- Scope: pulls of another deployment never appear, verifies **AC-1**.
- Reasons: a failed pull shows its fixed message, a failed pull with none shows "No reason saved", a good pull shows "None", verifies **AC-2**.
- Empty and failed only: a deployment with no pulls shows "No pulls yet.", and one with only failed pulls shows "No data yet" for the numbers and still lists the failures, verifies **AC-4**.
- Paused: an inactive deployment shows its saved rows including failure reasons, verifies **AC-4**.
- Poll: a poll (`only: ['deployment']`) does not return `pulls` and does not run the list query, verifies **AC-5**, **AC-7**.
- Leak check: the `pulls` data contains no `token`, `raw_reply`, `failure_body`, `http_status`, `triggered_by`, `base_url` or slug, verifies **AC-6**.
- Query count: a deployment with 3 pulls and one with many pulls run the same number of queries on page open, and `raw_reply` is never selected, verifies **AC-7**.
- Not found and auth: an unknown or removed slug still gives 404 and a logged out request still redirects to login, verifies **AC-8**.
- Phone and keyboard: at 375px no page sideways scroll, the table scrolls inside its own box, the time takes focus, verifies **AC-3**.

## Build plan

Approach is Tracer Bullet: first one thin thread that shows a real saved pull on the real page end to end, then thicken one strand at a time. No schema work is needed.

1. Thin thread: add `BuildRecentPulls` with the query and 10 row cap, pass `pulls` from `DeploymentController::show` as a lazy closure, and render a plain list on `deployments/Show.vue` showing each row's time text and result word, satisfies **AC-1**, **AC-5**
2. Safe fields and shape: fix the five column select list, the `PullRow` type and the stable order, and keep models and the other columns out of the page data, satisfies **AC-1**, **AC-6**, **AC-7**
3. The table: kit `Table` with caption and headings, `RelativeTime` with the page timezone, Good and Failed badges, Scheduled and Manual words, and the reason rules, satisfies **AC-2**, **AC-3**
4. Placement and states: end the numbers block after the Link outcomes and All periods row, render the section after it with no condition, move the closing note under its own condition so it stays last, add "No pulls yet.", satisfies **AC-4**
5. Poll behaviour: check the poll skips the list and its query and does not reset the table, satisfies **AC-5**, **AC-7**
6. Phone, keyboard and contrast pass, then run the page checks of spec 0009 again, satisfies **AC-3**, **AC-8**

## Consequences

**Positive**:
- Staff can tell a one off failure from a run of failures, and see when it began.
- Failure reasons stay readable even when every pull has failed and the numbers area shows "No data yet".
- The cost is one indexed query on page open and none on polls. No schema change, no migration.
- Manual and scheduled pulls can be told apart.

**Negative / tradeoffs**:
- **The list can look older than the numbers.** The numbers and "Last updated" refresh every minute, but the list only changes on a reload. The engineer chose no auto refresh and no note, so a long open tab can show a stale list beside fresh numbers.
- **Only 10 pulls of history.** At one pull per 5 minutes that is about 50 minutes, so a problem that began earlier is not visible here. There is no paging to go further back.
- **No HTTP status and no person shown.** Staff see the fixed message only, and not which staff member ran a manual pull.
- **No filter.** In a long good run, a single old failure could fall off the list before anyone looks.

**Neutral**:
- Spec 0002's question is answered: pulls of removed deployments show nowhere, since their page is a 404.
- Pull retention stays deferred in the scope. This list is capped, so it does not depend on it.
- The page has no write actions and never contacts PayHub.

## Follow-up

- [ ] If staff find the list stale, move the rows into the polled `deployment` prop (Option 2) or add the "shown as of page open" note.
- [ ] Pull history retention (scope Deferred) still needs a decision, since pulls grow by about 288 rows a day per deployment.
- [ ] After the build, run `/imprint` to save the pull table pattern to `ui-registry.md`.
- [ ] Spec 0009 follow up "Feature 11 (pull history)" is covered by this spec. Its words "below the Money table" are out of date after the focus view redesign, and this spec's placement wins. Tick it when the feature is built.
- [ ] Run `EXPLAIN` on MySQL once to confirm the list query uses the `(deployment_id, pulled_at)` index.
- [ ] A future `router.reload()` on this page without `only` would run the list query again. Keep reloads limited to `deployment`.
