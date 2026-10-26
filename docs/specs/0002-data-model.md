# 0002. Data model for deployments and saved pulls

**Date**: 2026-10-26
**Status**: Accepted

## Summary

The dashboard saves every pull as one row, good or failed, and keeps the numbers from a good reply in real database columns, not in one block of text. A deployment is a small record with an encrypted token. Four tables hold everything: deployments, pulls, the four windows of each good pull, and the money per currency inside each window. Money is whole cents in integer columns, so totals can be added up in SQL and a new currency needs no schema change.

## Context

The dashboard pulls a small summary from each PayHub deployment about every 5 minutes (contract v1, `docs/central-dashboard-api.md`). A good reply has four windows (`all_time`, `today`, `this_month`, `last_30_days`). Each window has link counts, a paid count, and money per currency for two kinds (completed and pending). Unknown currencies and unknown extra keys must be accepted.

Every pull must be kept, including failed ones with a reason, because the last good reply is shown as stale when a later pull fails, and the history page needs both. Combined totals add up the latest good reply of each deployment, so the latest good pull must be easy to find.

Spec 0001 already fixed: money is a whole cents integer, the token is an encrypted TEXT column hidden from serialization, times are stored in UTC, window edges are stored exactly as received, the raw reply is kept beside the parsed fields, and a 429 saves a "do not pull before" time on the deployment. At 288 pulls a day per deployment, a retention rule will be needed later (deferred in the scope), so the shape must allow pruning without a breaking change.

Assumption without a spec: the users table and its `is_admin` flag come from the login feature (scope 5). This spec only links to `users` for the staff member who started a manual pull.

## Requirements

**User stories**:
- As an admin, I want each deployment saved with an encrypted token so that the token is never readable again.
- As a staff member, I want every pull saved, good or failed, so that the last good numbers survive a bad pull and problems can be seen.
- As a developer, I want the money in integer columns per currency so that totals are exact and a new currency needs no change.

**Acceptance criteria** (the contract, each one checkable on its own):
- **AC-1**: A deployment stores a unique `slug` (lowercase, `^[a-z0-9-]{1,32}$`), a name, a base URL, a token, an on or off flag and a nullable "do not pull before" time. A slug can never be used twice, even after the deployment is removed.
- **AC-2**: The token is encrypted in the database (the stored value is not the plain token), is hidden from array and JSON output of the model, and the column is nullable so it can be wiped when a deployment is removed.
- **AC-3**: Every pull attempt is one `pulls` row linked to its deployment. A deployment can have many pulls, good and failed.
- **AC-4**: A failed pull stores a failure code from the fixed list, the HTTP status when there was one, a short message built from a fixed template per code, and for `invalid_reply`, `bad_version` and `key_mismatch` a cut down copy of the body. It stores no windows and no raw reply. The message never holds headers, the token, a URL or an exception message.
- **AC-5**: A good pull stores the raw reply body as received, the contract version, the generated time, the timezone and the app release. It has exactly four windows, each with `starts_at` and `ends_at` as received (null only for `all_time`), six link counts and a paid count.
- **AC-6**: Money from a good reply is stored as integer cents in one row per window, kind (`completed` or `pending`) and lowercase currency, including zero values. An unknown currency is saved like any other, and the sample JSON round trips with every cent unchanged.
- **AC-7**: The latest good pull and the latest pull of any status of a deployment can each be found with one indexed query, and a newer failed pull does not hide the latest good one.
- **AC-8**: Removing a deployment is a soft delete: its pulls stay, and a deployment that still has pulls cannot be hard deleted (the database refuses it).
- **AC-9**: A pull and its windows and amounts can be deleted together (cascade) so a retention rule can prune later without a schema change.
- **AC-10**: A manual pull records the staff member who started it. A scheduled pull records none. Removing that user keeps the pull.
- **AC-11**: A good pull is saved all or nothing: the pull, its four windows and its money rows are written in one database transaction, so a `success` pull never exists without its windows.

## Options considered

### Option 1: Three tables, money in integer rows

A `pulls` row, four `pull_windows` rows with the counts as columns, and one `pull_window_amounts` row per kind and currency.

**Pros**:
- True integer cents, and totals per currency are a plain SQL sum.
- Unknown currencies need no schema change.
- Daily summaries for a future retention rule are easy to compute.

**Cons**:
- About 28 child rows per good pull (4 windows plus up to 24 money rows), so a heavy table without retention.
- More tables and joins to read one reply.

### Option 2: Two tables, money as JSON per window

A `pulls` row and four window rows with money stored as a JSON object of cents.

**Pros**:
- About 5 rows per pull, far smaller.
- Fewer joins.

**Cons**:
- Money is no longer an integer column, which breaks the rule from spec 0001.
- Cannot be summed in SQL, so every total is computed in PHP.

### Option 3: One table, raw reply only

Save the whole reply and read every number from it at display time.

**Pros**:
- The smallest and simplest, and always faithful to the reply.

**Cons**:
- No real columns, no SQL totals, and every page reparses the body.
- Money fields are never type checked at rest.

### Option 4: All attempts kept, parsed numbers only for the latest good pull

Keep every attempt in `pulls`, but keep windows and amounts only for each deployment's latest good pull, replaced in one transaction.

**Pros**:
- Removes most of the row growth and most of the retention pressure.

**Cons**:
- No history of numbers over time and no daily summaries, which the deferred retention rule may want.

## Decision

**Chosen option**: Option 1: Three tables, money in integer rows.

Save every pull as a row, and save each good reply as one pull, four windows and one money row per kind and currency, next to the raw reply body, all in one transaction.

**Implementation skills**: none installed (see spec 0001).

## Rationale

Spec 0001 requires money in integer cents columns, which rules out Option 2 and the money part of Option 3. Contract v1 allows new currency keys, and a row per currency handles them without a migration. Combined totals across deployments are "sum each currency on its own", which is a one line grouped sum with Option 1.

The row growth is the real cost. It is accepted because the deployment count is small, retention is already on the scope's deferred list, and cascade deletes (AC-9) make pruning a single delete per pull. Option 4 was raised by the cross check and is the fallback if growth hurts, since it only needs the child tables to be emptied for old pulls. The raw body stays on `pulls`, so a parsing mistake can be fixed from saved data.

The engineer chose soft delete for removal. Soft deletes can leave ghost rows and break unique keys, so two guards apply: the slug is unique forever (AC-1), and the pull foreign key is `restrict` (AC-8). Choosing soft delete keeps the history of a removed deployment, which a hard delete would lose.

## Feature design

**Data model sketch**:

Column names avoid MySQL reserved words (`key`, `window`, `from`, `to`, `trigger`), so raw SQL for sums needs no quoting.

`deployments` (soft deletes)

| Column | Type | Notes |
|---|---|---|
| id | bigint, PK | |
| slug | string(32), unique | Lowercase `^[a-z0-9-]{1,32}$`, set by the admin. Compared exactly with the reply's `deployment.key`. Unique across removed ones too, so validation must not use `withoutTrashed()` |
| name | string | What the admin typed |
| base_url | string | The `https://` rule is checked in feature 6 |
| token | TEXT, nullable | `encrypted` cast, in `$hidden`. Wiped on removal |
| is_active | boolean, default true | Off means paused |
| do_not_pull_before | datetime (UTC), nullable | Set from `Retry-After` on a 429, capped at 1 hour from now. Ignored once the time has passed |
| deleted_at, created_at, updated_at | datetime (UTC) | |

`pulls` (one row per attempt, never updated, so no `updated_at`). Many per deployment.

| Column | Type | Notes |
|---|---|---|
| id | bigint, PK | |
| deployment_id | FK to deployments, restrict | |
| pulled_at | datetime (UTC) | When the call finished |
| status | string(32): `success` or `failed` | |
| source | string(32): `scheduled` or `manual` | How it started |
| triggered_by | FK to users, nullable, null on delete | Manual pulls only |
| failure_kind | string(32), nullable | Fixed list, see below |
| http_status | smallint unsigned, nullable | |
| failure_message | string(255), nullable | Built from a fixed template per code, never from an exception message |
| failure_body | TEXT, nullable | Body cut to about 2 KB, only for `invalid_reply`, `bad_version`, `key_mismatch` |
| contract_version | string(8), nullable | Good pulls |
| generated_at | datetime (UTC), nullable | From the reply |
| timezone | string(64), nullable | From the reply |
| app_release | string(64), nullable | From the reply |
| raw_reply | mediumText, nullable | The body exactly as received, good pulls only, max about 64 KB (bigger becomes `invalid_reply`) |
| created_at | datetime (UTC) | |

Indexes: (deployment_id, status, pulled_at) for the latest good pull, (deployment_id, pulled_at) for the latest pull of any status, and (pulled_at) for pruning.

`pull_windows` (four per good pull). Belongs to a pull, cascade on delete. No timestamps.

| Column | Type | Notes |
|---|---|---|
| id | bigint, PK | |
| pull_id | FK to pulls, cascade | |
| name | string(32) | `all_time`, `today`, `this_month`, `last_30_days` |
| starts_at, ends_at | string(40), nullable | As received, with offset. Null only for `all_time`, required for the other three |
| links_total, links_pending, links_completed, links_failed, links_cancelled, links_expired | unsigned int | |
| paid_count | unsigned int | |

Unique: (pull_id, name).

`pull_window_amounts` (one per kind and currency). Belongs to a window, cascade on delete. No timestamps.

| Column | Type | Notes |
|---|---|---|
| id | bigint, PK | |
| pull_window_id | FK to pull_windows, cascade | |
| kind | string(32) | `completed` or `pending` |
| currency | string(16) | Lowercase, must match `^[a-z0-9_]{1,16}$` (otherwise the pull is `invalid_reply`). Zero values are stored |
| cents | unsigned bigint | Whole cents |

Unique: (pull_window_id, kind, currency).

Relationships: deployment 1:N pulls, pull 1:N pull_windows (4 for a good pull, 0 for a failed one), pull_window 1:N pull_window_amounts, user 1:N pulls (manual only, optional).

**Failure codes** (PHP backed enum `PullFailureKind`, stored as the string value):
`unauthenticated` (401), `https_required` (403), `not_found` (404), `rate_limited` (429), `unavailable` (503 or any other non 200), `redirect` (3xx), `timeout`, `network`, `bad_version`, `key_mismatch`, `invalid_reply`, `token_unreadable`.

**State transitions**: none. A pull row never changes after it is written.

**Interface surface** (no HTTP endpoints in this feature; later features use these):

| Item | Purpose | Notes |
|---|---|---|
| `Deployment`, `Pull`, `PullWindow`, `PullWindowAmount` models | Eloquent models with relations and casts | Token cast `encrypted`, token in `$hidden`. Child models set `$timestamps = false`, `Pull` has no `updated_at` |
| `PullStatus`, `PullSource`, `PullFailureKind`, `WindowName`, `AmountKind` enums | Backed enums cast on the models | No free text in these columns |
| `Deployment::latestGoodPull()` | The newest `success` pull | `ofMany(['pulled_at' => 'max', 'id' => 'max'], fn ($q) => $q->where('status', 'success'))`. The `id` breaks ties in the same second |
| `Deployment::latestPull()` | The newest pull of any status | `ofMany(['pulled_at' => 'max', 'id' => 'max'])` |
| A single save action class | Writes a good pull in one `DB::transaction` and enforces the invariants | Built in feature 7, the rule is set here |
| Factories for all four models | Tests | A good pull factory builds from `docs/central-dashboard-sample.json` |

**Value sourcing**:

| Action | Value produced / displayed | Source |
|---|---|---|
| Save a pull | `pulled_at` | Application clock when the call finishes, stored in UTC |
| Save a pull | `source`, `triggered_by` | Input to the pull job: how it started, and the user id for manual pulls |
| Save a pull | `deployment_id` | The deployment the job was given (id only, never the token). If the deployment is removed or its token is wiped before the job runs, the job exits and saves no row |
| Save a good pull | contract_version, generated_at, timezone, app_release, raw_reply | The v1 reply (body kept as received) |
| Save a good pull | window name, starts_at, ends_at, link counts | `windows.<name>`, its `from`, `to` and `links.*` |
| Save a good pull | paid_count | `windows.<name>.money.paid_count` |
| Save a good pull | kind, currency, cents | `windows.<name>.money.completed.<currency>` and `money.pending.<currency>`; kind from the key, currency from the key (already lowercase) |
| Check a reply | slug match | `deployment.key` of the reply compared exactly with `deployments.slug`; a difference is `key_mismatch` |
| Save a failed pull | failure_kind, http_status | The HTTP status or failure type, mapped by feature 7 |
| Save a failed pull | failure_message | A fixed template per failure code, cut to 255 |
| Save a failed pull | failure_body | The response body cut to about 2 KB, only for three codes |
| Show "stale" | stale flag | Derived from `latestPull()` and `latestGoodPull()`: stale when the latest pull is `failed`, or the deployment is paused or waiting and its latest good pull is old. Time limits are deferred in the scope. No good pull ever means "no data", never zero |
| Combined totals | which deployments count | Active, not removed deployments. Their latest good numbers are included even when stale. A currency missing from one deployment counts as absent, not 0 |
| Show times | display timezone | `pulls.timezone` of the latest good pull |
| Skip a paused or waiting deployment | whether to pull | `is_active` and `do_not_pull_before` (ignored once it has passed) |

**Key invariants**:
- `status = success` means `failure_kind`, `http_status`, `failure_message` and `failure_body` are null, and `raw_reply`, `contract_version` and `generated_at` are set.
- `status = failed` means `failure_kind` is set and the pull has no windows and no raw reply.
- A good pull has exactly four windows, one per window name, and `starts_at`, `ends_at` set for all but `all_time`. This is enforced by the single save action in one transaction (AC-11).
- Money is only ever unsigned integer cents. Different currencies are never added together.
- The token is never stored in plain text and never appears in serialized output.
- Link counts adding up to the total is a check of the reply in feature 7, not a database rule.
- A hard delete of a deployment that has pulls throws a database error. That error is the expected behaviour.

**Security model**:
- Only the token is sensitive. It is encrypted with `APP_KEY`, hidden from serialization, and never passed to a job (jobs get the deployment id).
- Pulls hold counts and amounts only, no client data. Failure messages are fixed templates, so no URL, header or token can leak in. `failure_body` is a short cut of the PayHub reply, which by contract holds no client data.
- Who may read or write is decided in the login and feature specs. Every logged in user is an admin for now.
- No regulated personal data. The numbers describe payment systems, so spec 0001's token rules apply in full.

**Configuration required**: none. The model uses the existing `APP_KEY` and the MySQL connection. The scheduler heartbeat from spec 0001 lives in the cache, not in a table.

**Critical test scenarios**:
- Happy path: load `docs/central-dashboard-sample.json` into a pull with four windows and money rows (zero values included), then read every count and cent back unchanged, verifies AC-5, AC-6.
- Happy path: the latest good pull and the latest pull of a deployment are found, and the good one stays found after a newer failed pull is added, also when two pulls share the same second, verifies AC-7.
- Failure case: a failed pull saves its code, status, templated message and (for three codes) a cut body, with no windows or raw reply, verifies AC-4.
- Failure case: if saving a window fails midway, no `pulls` row remains, verifies AC-11.
- Failure case: an unknown currency such as `eur` is saved and read back, verifies AC-6.
- Failure case: saving a second deployment with an existing slug (also a removed one, or the same slug in another case) is refused, verifies AC-1.
- Failure case: `forceDelete()` on a deployment with pulls fails, and a soft delete keeps its pulls, verifies AC-8.
- Failure case: deleting a pull deletes its windows and amounts, verifies AC-9.
- Security: the stored token column differs from the plain token, and the token is missing from `toArray()` and `toJson()`, verifies AC-2.
- Auth: a manual pull keeps its user id, a scheduled pull has none, and deleting the user keeps the pull, verifies AC-10.

## Build plan

Approach is Tracer Bullet. This is a foundation feature, and the first thread (add a deployment, pull by hand, show a card) needs every table, so the schema is built whole in one pass, then proved by tests. Later features thicken behaviour, not schema.

1. Create the `deployments` migration with soft deletes, the unique `slug` and nullable token, satisfies **AC-1**, **AC-2**, **AC-8**
2. Create the `pulls`, `pull_windows` and `pull_window_amounts` migrations with the foreign keys (restrict, cascade, null on delete), unique keys and the three `pulls` indexes, satisfies **AC-3**, **AC-4**, **AC-5**, **AC-6**, **AC-7**, **AC-9**, **AC-10**
3. Add the backed enums (`PullStatus`, `PullSource`, `PullFailureKind`, `WindowName`, `AmountKind`), satisfies **AC-4**, **AC-5**, **AC-6**
4. Add the four models with casts, relations, the `encrypted` token cast, `$hidden`, soft deletes, `$timestamps` settings, `latestGoodPull()` and `latestPull()`, satisfies **AC-1**, **AC-2**, **AC-3**, **AC-7**, **AC-8**
5. Add factories for all four models, with a good pull built from the sample JSON, satisfies **AC-5**, **AC-6**
6. Add a small action class that saves a good pull, its windows and its amounts in one transaction (feature 7 calls it), satisfies **AC-11**
7. Write Pest tests for each critical scenario above, satisfies **AC-1** to **AC-11**

## Consequences

**Positive**:
- Exact integer money, summable in SQL, new currencies need no migration.
- Failed pulls are first class rows, so the last good reply and a clear reason are always available.
- Pruning is one delete per pull, ready for a retention rule.

**Negative / tradeoffs**:
- **Row growth.** About 28 child rows per good pull at 288 pulls a day is roughly 8,000 rows a day per deployment, millions a year, so retention must be designed before long use (deferred in the scope). Option 4 is the fallback.
- **Soft delete is kept on purpose.** Removed deployments leave a row forever, queries must exclude them, and the slug stays reserved forever.
- **Raw body doubles storage** for good pulls, in return for being able to reparse after a mistake.
- No call duration is stored (not chosen), so slow deployments are not visible until they time out.
- Reading one reply takes a pull, four windows and their amounts, so a card should eager load them.
- The "all or nothing" and "four windows" rules live in one action class, not in the database, so only that class may write good pulls.

**Neutral**:
- Failure codes are an enum list, so a new failure kind means a code change and no migration (the column is a string).
- Contract v2 later would need a new `contract_version` handler, not a new table, unless the shape changes.
- Dates use `datetime` in UTC, so the 2038 limit of `timestamp` does not apply.

## Follow-up

- [ ] Design pull retention (keep all, or the latest few plus a daily summary) before the dashboard runs for months (scope Deferred).
- [ ] Token replacement without a gap (PayHub `current` and `next` slots) may need a second token column. It is deferred and this shape allows adding one.
- [ ] When viewer roles or per deployment access come, link staff to deployments with a new table, not a change here.
- [ ] Feature 7 maps each HTTP status and failure to a `PullFailureKind`, checks that link counts add up, caps `Retry-After`, and exits without saving when the deployment is removed.
- [ ] Feature 11 decides whether pulls of removed deployments show on the history page.
- [ ] Feature 12 wipes the token and soft deletes the deployment together.
- [ ] Settle the stale time limits with the deferred "stale and failing badges" item.
