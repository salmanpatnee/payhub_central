# 0006. Pull a summary by hand

**Date**: 2026-10-27
**Status**: Accepted

## Summary

An admin runs one command, `php artisan pulls:run payhub1`, and the dashboard asks that PayHub deployment for its summary, checks the reply, and saves it. A good reply is saved exactly as received. Anything else (a wrong password, a slow server, a broken reply) is saved as a failed pull with a short reason, and the last good reply stays untouched. There is no button yet, because Home and the deployment page come in features 8 and 10, and they can call the same code later.

## Requirements

**User stories**:
- As an admin, I want to pull one deployment's summary by hand so that I can see the connection works before anything runs on a schedule.
- As an admin, I want a failed pull to say why in plain words so that I can fix the URL, token or PayHub side.
- As an admin, I want a failed pull to leave the last good numbers alone so that a bad moment never replaces good data.

**Acceptance criteria** (the contract, each one checkable on its own):
- **AC-1**: `php artisan pulls:run {key}` finds the deployment by its key and runs exactly one pull. An unknown key, or the key of a removed deployment, prints an error, makes no call and saves nothing.
- **AC-2**: The call is `GET {base_url}/api/central/v1/summary` with `Authorization: Bearer <token>` and `Accept: application/json`. It waits at most 10 seconds in total (connect included), follows no redirects, and is never retried. Any 3xx status is `redirect`, and its status is saved.
- **AC-3**: A 200 reply that passes the checks in AC-6 is saved by `SaveGoodPull` with source `manual` and `triggered_by` empty. The raw body is saved exactly as received. Unknown keys and unknown currency keys are accepted and saved. A null `app_release` (allowed by the contract) is saved as null.
- **AC-4**: These replies are saved as a failed pull with the failure code, the HTTP status when there was one, and a fixed message for that code: 401 `unauthenticated`, 403 `https_required`, 404 `not_found`, 429 `rate_limited`, any other non 200 (including 201, 204, 500 and 503) `unavailable`. A failed pull has no windows and no raw reply, and leaves `contract_version`, `generated_at`, `timezone` and `app_release` empty.
- **AC-5**: A 3xx reply is not followed and is saved as `redirect`. A call that runs past 10 seconds is saved as `timeout`. Any other connection problem (name not found, refused, TLS error) is saved as `network`.
- **AC-6**: A 200 reply is checked in this order, and the first problem wins. (1) Not valid JSON, not a JSON object, or a body over 64 KB is `invalid_reply`. (2) A `contract_version` that is missing, not text, or not exactly `v1` is `bad_version`. (3) A `deployment.key` that is missing, not text, or not exactly (`===`) equal to the saved key is `key_mismatch`. (4) Anything else wrong is `invalid_reply`: a missing required field, a wrong type, a text longer than its column, a money value that is not whole and non negative cents, or numbers that do not add up. These three codes (and an oversize body) keep the first 2 KB of the body.

  Required fields for step 4: `generated_at` (a date that can be read), `timezone` (not empty, at most 64 characters), `deployment.app_release` (null, or text of at most 64 characters), all four windows, in each window `from` and `to` (null only for `all_time`, otherwise text of at most 40 characters), the six link counts, `paid_count`, and `money.completed` and `money.pending` as objects. No particular currency key is required, and `deployment.name` is ignored.
- **AC-7**: On a 429, the deployment's `do_not_pull_before` is set to now plus the `Retry-After` value. `Retry-After` may be whole seconds or an HTTP date. A missing, unreadable, negative or past value means 60 seconds, and the wait is never more than 1 hour. A removed deployment is not updated.
- **AC-8**: No call is made and nothing is saved when the deployment is paused (`is_active` is off), is waiting (`do_not_pull_before` is in the future, and the message says when), or already has a pull running. The command prints why and ends with a failure exit code. The paused and waiting checks run again after the lock is taken.
- **AC-9**: A failed pull never changes or deletes an earlier good pull. After any failed pull, the deployment's latest good pull is still the one it was before.
- **AC-10**: The token never appears in a saved failure message, a saved body, a log line, the command output or an exception shown to the admin. A null or empty token, or one that cannot be decrypted, is saved as `token_unreadable` and no call is made. An error thrown anywhere in the pull never reaches the default error handler, so no stack trace can carry part of the token.
- **AC-11**: If the deployment is removed while the call is running, nothing is saved.

## Decision

**Chosen option**: Option 1: An Artisan command over one pull action.

Add `pulls:run {key}` and a `PullDeployment` action that checks the rules for pulling, makes the one call, checks the reply and saves either a good or a failed pull. No UI, no route, no queue.

**Implementation skills**: none installed (see spec 0001).

## Feature design

**Data model sketch**: no change and no migration. Uses `deployments` and the `pulls` family from spec 0002. Two small code changes only. `PullFailureKind` gets a `message()` method that returns the fixed text for each code. `SaveGoodPull` accepts a null `app_release` (it now throws on null, which the contract allows).

**Fixed messages** (one per code, at most 255 characters, never built from a response, header, URL or exception):
- `unauthenticated`: "PayHub rejected the token (401)."
- `https_required`: "PayHub refused the request (HTTPS required)." (a firewall 403 maps here too)
- `not_found`: "The summary endpoint was not found (404). It may not be turned on for this deployment."
- `rate_limited`: "PayHub said too many calls (429). Pulls wait before the next try."
- `unavailable`: "PayHub could not give a summary right now."
- `redirect`: "PayHub answered with a redirect. Redirects are not followed."
- `timeout`: "PayHub did not answer within 10 seconds."
- `network`: "Could not connect to PayHub."
- `bad_version`: "The reply is not contract version v1."
- `key_mismatch`: "The key in the reply does not match this deployment's key."
- `invalid_reply`: "The reply could not be read, or its numbers do not add up."
- `token_unreadable`: "The saved token could not be read."

**State transitions**: none. A pull row is written once and never changed. The only update is `deployments.do_not_pull_before` on a 429.

**Interface surface**:

| Surface | Inputs | Output | Who | Key errors |
|---|---|---|---|---|
| `php artisan pulls:run {key}` | `key` (argument, required) | One line, exactly: `Pull #{id} for {slug}: good`, or `Pull #{id} for {slug}: failed ({code}, HTTP {status})` (the `, HTTP {status}` part only when there is a status), or `Not pulled: {reason}`. It never prints the URL or the token. The waiting reason shows the time in the app time zone | Whoever can run Artisan on the server | Exit code 1 for a failed pull, a refusal or an unknown key |

**Classes** (small, constructor injection, all under `app/`):
- `Console/Commands/PullDeploymentCommand.php`: finds the deployment by key (lowercased, as stored), calls the action, prints the result.
- `Actions/Pulls/PullDeployment.php`: refuses when paused, waiting, locked or removed, takes a lock for the deployment, reads the token, makes the call, maps the result, saves the pull. Returns the `Pull`, or throws `PullRefused` with a plain message for the four refusals. A last catch of `Throwable` saves `network` or `invalid_reply` as fits and prints only the fixed message. The token is passed on only as a `#[\SensitiveParameter]` argument.
- `Actions/Pulls/FetchSummary.php`: the one HTTP call (`Http` client with the token, `Accept`, `timeout(10)`, `connectTimeout(10)`, `withoutRedirecting()`, no retry, never `->throw()`). Returns the status, the body and the `Retry-After` header, or a failure code. A `ConnectionException` whose earlier Guzzle error has cURL code 28 is `timeout` (falling back to `cURL error 28` in the message); any other connection or transfer error, TLS included, is `network`. Exception text is never kept.
- `Actions/Pulls/CheckSummaryReply.php`: pure function of the decoded reply. Checks the required fields, the text lengths and the sums in AC-6.
- `Actions/Pulls/SaveFailedPull.php`: writes one failed pull row: `status` failed, `source` manual, `triggered_by` empty, the code, the HTTP status (empty for `timeout`, `network` and `token_unreadable`), the fixed message and, for the three codes that keep it, the body cleaned of bad UTF-8 and cut to 2 KB by bytes (`mb_scrub` then `mb_strcut`).
- `Actions/Pulls/PullRefused.php`: a small exception for the refusals.

**Order of a pull** (the first step that stops it decides the result):
1. Deployment not found, or removed: refuse (AC-1, AC-11 start).
2. `is_active` off: refuse. `do_not_pull_before` in the future: refuse and name the time (AC-8).
3. Take a non blocking lock `pull:deployment:{id}` for 30 seconds (cache store already in the project, `cache_locks` table exists). Lock held: refuse (AC-8). Reload the deployment and repeat step 2. Release the lock in a `finally`. If the process dies the lock expires after 30 seconds, safe because the call stops at 10.
4. Read the token. A null or empty token, or a decrypt error, saves `token_unreadable` and stops (AC-10).
5. Call the endpoint (AC-2). Set `pulled_at` to the application clock when the call finishes, in UTC, the same as spec 0002.
6. Check again that the deployment still exists. If it was removed, stop and save nothing (AC-11).
7. Map the answer: 3xx, non 200, timeout, network (AC-4, AC-5). On 429 also set `do_not_pull_before` with a direct `Deployment::whereKey($id)->update(...)`, never `$deployment->save()` (AC-7). `Retry-After` all digits is seconds, otherwise it is read as an HTTP date (RFC 7231) and now is subtracted; a bad, negative or past value is 60; the result is clamped to 0 to 3600 and stored in UTC. A good pull leaves `do_not_pull_before` alone, since it stops mattering once the time passes.
8. On 200 run the checks in AC-6, then `SaveGoodPull`. If `SaveGoodPull` throws `InvalidArgumentException` or a database `QueryException`, save `invalid_reply` (AC-3, AC-6).

**Value sourcing**:

| Action | Value produced / displayed | Source |
|---|---|---|
| Find deployment | Which deployment to pull | The `key` argument, lowercased, matched to `deployments.slug` (removed ones excluded) |
| Build the URL | Where to call | `deployments.base_url` (no trailing slash, saved by feature 6) plus the fixed path `/api/central/v1/summary` |
| Make the call | The token | `deployments.token` through the encrypted cast, read only inside the action, sent only in the `Authorization` header |
| Make the call | Wait limit and redirect rule | Fixed values in `FetchSummary`: 10 seconds, no redirects, no retries (decided here) |
| Save a pull | `pulled_at` | Application clock when the call finishes, UTC (as spec 0002) |
| Save a pull | `source`, `triggered_by` | Fixed `manual`; empty because a command has no logged in user |
| Good pull | Everything in the pull, windows and money | The decoded reply and the raw body, through `SaveGoodPull` (spec 0002) |
| Failed pull | `failure_kind`, `http_status` | The mapping in AC-4 and AC-5; the status from the response, empty for timeout, network and `token_unreadable` |
| Failed pull | `failure_message` | `PullFailureKind::message()`, a fixed text per code |
| Failed pull | `failure_body` | The response body cut to 2 KB, only for `bad_version`, `key_mismatch`, `invalid_reply` |
| 429 | `do_not_pull_before` | Now plus `Retry-After`: whole seconds or an HTTP date; missing or unreadable is 60 seconds; at most 3600 |
| Refusal | The message shown | A fixed sentence per refusal; the waiting one includes the time `do_not_pull_before` holds |
| Command | Exit code | 0 for a good pull, 1 for a failed pull, a refusal or an unknown key |

**Key invariants**:
- Only `SaveGoodPull` writes a good pull. Only `SaveFailedPull` writes a failed one.
- A failed pull has no windows and no raw reply, so the latest good pull is always the last one that passed every check.
- The token is read inside `PullDeployment`, passed to `FetchSummary` as a plain argument, and never put in a job, log, message, exception text, saved body or command output.
- No redirect is followed, and the call is made only to a URL that feature 6 already checked as `https`.
- One pull at a time per deployment.
- Every text stored from a reply fits its column (`contract_version` 8, `timezone` and `app_release` 64, window `from` and `to` 40), so a long value becomes `invalid_reply`, never a database error shown to the admin.
- Link counts: `total` equals `pending + completed + failed + cancelled`, and `expired` is not more than `pending`. Every money value is a whole, non negative integer. Currency keys match the pattern `SaveGoodPull` already enforces.

**Security model**:
- There is no web surface. Only someone who can run Artisan on the server can start a pull, and that person already has the server and database.
- The token is the only secret (spec 0001 rules apply in full). Messages are fixed text per code, never built from an exception or a header. The 2 KB body cut is of PayHub's reply, which by contract holds no client data and no token.
- The token goes only to the saved base URL. A typo in that domain would send the token to the wrong host (open item in spec 0005).

**Configuration required**: none. Uses the existing database cache store for the lock.

**Critical test scenarios** (for `/test` later, each maps to an acceptance criterion):
- Happy path: a faked 200 built from `docs/central-dashboard-sample.json` saves one success pull with four windows and the exact raw body, verifies **AC-3**.
- Happy path: the same reply with an extra top level key and an extra currency key (`eur`) is saved, verifies **AC-3**.
- Failure case: 401, 403, 404, 429, 500 and 503 are each saved with the right code and HTTP status, with no windows, verifies **AC-4**.
- Failure case: a 302, a timeout and a refused connection are saved as `redirect`, `timeout` and `network`, and no second request is sent after the 302, verifies **AC-5**, **AC-2**.
- Failure case: `contract_version` `v2`, a different `deployment.key`, links that do not add up, a negative or decimal money value, a non JSON body and a body over 64 KB are each saved with the right code, and the first three keep a 2 KB body, verifies **AC-6**.
- Failure case: a 429 with `Retry-After: 120`, one with an HTTP date, one with none, and one with `99999` set `do_not_pull_before` to about 2 minutes, the date, 60 seconds and 1 hour, verifies **AC-7**.
- Failure case: a paused deployment, one that is waiting, and one with the lock already held make no request and save nothing, verifies **AC-8**.
- Failure case: a bad pull after a good one leaves `latestGoodPull()` on the earlier pull, verifies **AC-9**.
- Security: after every failure above, the saved message, saved body, the log and the command output hold no token and no URL, and an undecryptable token saves `token_unreadable` with no request, verifies **AC-10**.
- Failure case: removing the deployment during the call (inside the fake) saves nothing, verifies **AC-11**.
- Happy path: a reply with `app_release: null` is saved, and one with a 65 character `timezone` is saved as `invalid_reply` with no database error, verifies **AC-3**, **AC-6**.
- Failure case: a null token and a token that cannot be decrypted each save `token_unreadable` with no request, verifies **AC-10**.
- Security: force an exception inside the action and check `laravel.log` and the command output hold no part of the token, verifies **AC-10**.

## Build plan

Approach is Tracer Bullet: first one thin working thread (command, one call, a good pull saved), then thicken one strand at a time. No migration is needed because the tables exist. Every test step uses `Http::fake()`; nothing here calls a real PayHub.

- [x] 1. Add the command, `PullDeployment` and `FetchSummary` and let `SaveGoodPull` accept a null `app_release`, so a faked 200 from the sample JSON is saved through `SaveGoodPull` and the command prints the result, satisfies **AC-1**, **AC-2**, **AC-3**
- [x] 2. Add `SaveFailedPull`, `PullFailureKind::message()` and the status mapping (401, 403, 404, 429, other non 200, 3xx, timeout, network), satisfies **AC-4**, **AC-5**
- [x] 3. Add the reply checks: JSON and size, version, key, `CheckSummaryReply`, and `invalid_reply` when `SaveGoodPull` throws, with the 2 KB body cut, satisfies **AC-6**
- [x] 4. Add the 429 wait: read `Retry-After`, cap it, set `do_not_pull_before`, satisfies **AC-7**
- [x] 5. Add the refusals and guards: paused, waiting, lock, removed (before and during the call), unreadable token, satisfies **AC-8**, **AC-10**, **AC-11**
- [x] 6. Check that nothing leaks (messages, bodies, logs, output) and that a failed pull leaves the last good one alone, satisfies **AC-9**, **AC-10**

## Consequences

**Positive**:
- Proves the whole path from a saved deployment to saved numbers with the smallest amount of code.
- One action serves the button (features 8 and 10) and the job (feature 9), so those features add no new pull logic.
- A reply that does not add up can never become the number shown on the card.

**Negative / tradeoffs**:
- Only someone with server access can pull until feature 8 or 10 adds a button.
- A manual pull cannot be used to test a paused deployment. It must be turned on first.
- The 64 KB limit is checked after the body arrives, so a hostile host could still make the server read a large body once. This is accepted because the host was typed in by an admin.
- With no retries, one dropped connection is saved as a failed pull. That is correct for a manual run, but feature 9 must decide how scheduled pulls retry.
- Telling a timeout from other connection errors uses the cURL error code (28) with the message as a fallback, which a library update could change. A test covers it.
- A deployment removed between the last check and the save can still get a pull row. This is harmless, because the foreign key only blocks a force delete.
- The failure message is a fixed sentence, so it cannot say which part of a broken reply was wrong. The 2 KB body cut is there for that.

**Neutral**:
- Feature 9 will wrap `PullDeployment` in a queued job and pass only the deployment id.
- Feature 12 (pause, edit) changes the inputs this action reads, not the action.

## Follow-up

- [ ] Feature 9 decides retries and what to do with a held lock when a job runs.
- [ ] Feature 8 and 10 add a "Pull now" button that calls `PullDeployment` and shows the refusal messages.
- [ ] Decide whether the saved URL should be shown to the admin before the first pull sends the token to it (open item from spec 0005).
- [ ] Note the new action folder files in `app/AGENTS.md` once built (`/sync`).
- [ ] A cross check by a second model found gaps now closed in this spec: null `app_release`, column lengths, token in stack traces, required fields, lock and `Retry-After` details, fixed messages and command lines.
