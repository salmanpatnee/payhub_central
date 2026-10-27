# Verify: Pull a summary by hand · spec 0006 · updated 2026-10-27
_Steps derived from spec 0006 acceptance criteria. `/check verify` runs these; `/test` locks the durable ones._

Use a throwaway deployment (or a rolled back transaction in `php artisan tinker`) and a faked reply from `docs/central-dashboard-sample.json`. Never use a real token while testing failures.

## UI / manual
There is no screen in this feature. Everything runs from the command line.

## Commands
- [x] `php artisan pulls:run payhub1` against a faked 200 built from the sample JSON → prints `Pull #N for payhub1: good`, exit code 0, one success pull with 4 windows → AC-1, AC-3
- [x] `php artisan pulls:run PAYHUB1` (capital letters) → finds the same deployment (key is lowercased) → AC-1
- [x] `php artisan pulls:run nope`, and the key of a soft deleted deployment → `Not pulled: ...`, exit code 1, no call, no pull saved → AC-1
- [x] Check the faked request → `GET {base_url}/api/central/v1/summary`, header `Authorization: Bearer <token>`, `Accept: application/json`, one request only → AC-2
- [x] Fake a 302 with a `Location` header → saved as `redirect` with HTTP 302, and no second request is sent → AC-2, AC-5
- [x] Check the saved good pull → `raw_reply` equals the body byte for byte → AC-3
- [x] Same reply with an extra top level key and an extra currency key (`eur`) → saved as good → AC-3
- [x] Reply with `deployment.app_release` set to null → saved as good, `app_release` is null → AC-3
- [x] Fake 401, 403, 404, 429, 500, 503, 201, 204 → each saved failed with `unauthenticated`, `https_required`, `not_found`, `rate_limited`, `unavailable` (for the last four) and the HTTP status, with 0 windows and an empty `raw_reply` → AC-4
- [x] Check a failed pull row → `contract_version`, `generated_at`, `timezone`, `app_release` are empty, and `failure_message` is the fixed sentence for the code → AC-4
- [x] Fake a timeout → `timeout`, no HTTP status. Fake a refused connection → `network`, no HTTP status → AC-5
- [x] Reply with `contract_version` `v2`, missing, or a number → `bad_version`, body kept to 2 KB → AC-6
- [x] Reply with `deployment.key` different from the saved key (including a different case) → `key_mismatch`, body kept → AC-6
- [x] Reply that is not JSON, is a JSON list, or is over 64 KB → `invalid_reply` → AC-6
- [x] Reply with link counts that do not add up, `expired` above `pending`, a negative or decimal money value, a missing window, or a 65 character `timezone` → `invalid_reply`, no database error shown → AC-6
- [x] A 429 with `Retry-After: 120`, an HTTP date, no header, `-5`, a past date and `99999` → `do_not_pull_before` is about 2 minutes, the date, 60 seconds, 60 seconds, 60 seconds and 1 hour → AC-7
- [x] A 429 for a deployment removed during the call → nothing saved, `do_not_pull_before` not updated → AC-7, AC-11
- [x] Pull a paused deployment, one with `do_not_pull_before` in the future, and one with the lock `pull:deployment:{id}` already held → each prints `Not pulled: ...`, exit code 1, no request, nothing saved. The waiting message names the time → AC-8
- [x] Pull after a good pull, with the next reply failing in each way above → `latestGoodPull()` is still the earlier pull every time → AC-9
- [x] After every failure above → no part of the token or the base URL appears in `failure_message`, `failure_body`, `storage/logs/laravel.log` or the command output → AC-10
- [x] A deployment with a null or empty token, and one whose token cannot be decrypted → `token_unreadable`, no request sent → AC-10
- [x] Force an exception inside the pull (for example a fake that throws) → the command output and `laravel.log` hold no part of the token → AC-10
- [x] Remove the deployment from inside the fake, while the call is running → `Not pulled: ...`, nothing saved → AC-11

## Value sourcing
- [x] Change the deployment's `base_url` and pull → the call goes to the new URL plus `/api/central/v1/summary` → AC-2 (Build the URL)
- [x] Change the saved token and pull → the new token is in the `Authorization` header and only there → AC-2, AC-10 (Make the call)
- [x] Check `pulled_at` on a good pull and a failed one → set when the call finished, in UTC → AC-3 (Save a pull)
- [x] Check `source` and `triggered_by` → `manual` and empty on both good and failed pulls → AC-3 (Save a pull)
- [x] Check `failure_kind` and `http_status` → they follow the mapping in AC-4 and AC-5, and the status is empty for timeout, network and `token_unreadable` → AC-4 (Failed pull)
- [x] Check `failure_body` → set only for `bad_version`, `key_mismatch` and `invalid_reply`, never longer than 2048 bytes, valid UTF-8 even when the reply holds bad bytes → AC-6 (Failed pull)
- [x] Check the 429 wait with the app clock moved forward → it is measured from now, not from the reply's `generated_at` → AC-7 (429)

## Acceptance-criteria coverage
- AC-1 covered by steps 1 to 3 · AC-2 by the request, redirect and base URL steps · AC-3 by the good pull, raw reply, extra keys and null release steps
- AC-4 by the status and failed row steps · AC-5 by the redirect, timeout and network steps · AC-6 by the version, key, shape and sums steps
- AC-7 by the Retry-After steps · AC-8 by the paused, waiting and lock step · AC-9 by the pull after a good pull step
- AC-10 by the leak, token and exception steps · AC-11 by the removed during the call steps
