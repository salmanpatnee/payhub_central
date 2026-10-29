# Back end (app/)

## Overview

The Laravel side of the dashboard: the models that hold deployments and saved pulls, the enums behind their status columns, and the one action class that writes a good pull. It follows the Laravel Vue starter kit layout, and the data shape is decided in spec 0002.

## Key files

| File | Owns |
|---|---|
| `Models/Deployment.php` | A PayHub deployment. Encrypted `token` (hidden), soft deletes, `latestGoodPull()` and `latestPull()` |
| `Models/Pull.php` | One pull attempt, good or failed. Written once, never changed (no `updated_at`) |
| `Models/PullWindow.php`, `Models/PullWindowAmount.php` | The four windows of a good pull and the money per kind and currency, in whole cents |
| `Enums/` | `PullStatus`, `PullSource`, `PullFailureKind`, `WindowName`, `AmountKind`. Cast on the models, no free text in those columns |
| `Actions/Pulls/SaveGoodPull.php` | The only place that writes a good pull, its four windows and its money rows, in one transaction |
| `Actions/Pulls/PullDeployment.php` | One pull, manual or scheduled (the `PullSource` is passed in): refuses paused, waiting, locked or removed, reads the token, makes the call, maps the answer, saves a good or failed pull. Returns the `Pull` or throws `PullRefused` |
| `Actions/Pulls/FetchSummary.php`, `FetchedSummary.php` | The one HTTP call (10 seconds, no redirects, no retry) and what came back: an answer or a failure code |
| `Actions/Pulls/CheckSummaryReply.php` | Required fields, text lengths and sums for a v1 reply. Pure, no database |
| `Actions/Pulls/SaveFailedPull.php` | The only place that writes a failed pull. Fixed message per code, body cut to 2 KB for three codes |
| `Actions/Pulls/DispatchDuePulls.php` | Every 5 minutes: queues one `PullDeploymentJob` for each active, present deployment that is not waiting, then writes the heartbeat as the last step (spec 0008) |
| `Jobs/PullDeploymentJob.php` | One scheduled pull for one deployment id. Unique per deployment, 20 second limit, one try (the next run is the retry). Refused pulls only log a fixed line (spec 0008) |
| `Actions/Scheduler/SchedulerHealth.php` | The heartbeat in the cache and `isStale()` (no beat for 10 minutes, an old waiting job, or a recent failed job). Feeds the `scheduler` prop that shows the banner (spec 0008) |
| `Actions/Home/BuildDeploymentCards.php` | The Home page cards: one plain array per deployment (domain host only, state, reason, three periods). Selects only safe columns, so the token and raw reply never load. Fixed query count (spec 0007) |
| `Http/Controllers/HomeController.php` | The Home page (the `dashboard` route). Passes the card arrays from `BuildDeploymentCards` to the Dashboard page, never a model (spec 0007) |
| `Console/Commands/PullDeploymentCommand.php` | `php artisan pulls:run {key}`. Prints one line and exits 1 on a failed pull or refusal (spec 0006) |
| `Actions/Deployments/BuildDeploymentDetail.php`, `DeploymentStatus.php` | The Deployment page: one safe array with all four windows (`windows` is null when there is no good pull), and the state, reason and domain rules that Home and the page share (spec 0009) |
| `Actions/Deployments/BuildRecentPulls.php` | The Recent pulls list on the Deployment page: the 10 newest pulls of one deployment (good and failed) in one query, five safe columns only, returned as plain arrays (spec 0010) |
| `Http/Controllers/DeploymentController.php`, `Http/Requests/StoreDeploymentRequest.php` | The add a deployment form (spec 0005) and the `show` page (spec 0009). The request holds all the rules, including refusing the key `create`; saving never calls PayHub |
| `Http/Controllers/StaffController.php`, `Actions/Staff/` | Staff logins (spec 0013): list, add, edit, set password, remove. `BuildStaffList` returns plain arrays with `isYou`. `SetStaffPassword` and `RemoveStaff` delete the person's `sessions` rows in the same transaction |
| `Http/Requests/Concerns/StaffRules.php`, `StoreStaffRequest.php`, `UpdateStaffRequest.php`, `SetStaffPasswordRequest.php` | The shared Staff rules: trimmed lowercase unique email, `Password::default()` with no `confirmed`, and `authorize()` refusing your own row with 403 (spec 0013) |
| `Actions/Deployments/BuildDeploymentList.php`, `UpdateDeployment.php`, `RemoveDeployment.php`, `Http/Requests/UpdateDeploymentRequest.php` | The Deployments list, edit and remove. Remove wipes the token and soft deletes in one statement, so the pulls stay and the slug stays reserved. `DeploymentController@active` pauses or resumes by sending the wanted state, not a flip (specs 0011, 0012) |
| `Concerns/` | Shared validation rules from the starter kit (password, profile) |
| `Http/Controllers/Settings/` | Profile and security pages from the starter kit, locked down for invite only login (spec 0004) |

## Commands

```bash
composer run types:check   # PHPStan level 7 over app/, bootstrap/app.php, config/, database/, routes/
composer run lint          # Pint, fixes files
php artisan test           # Pest; data model tests are in tests/Feature/DataModel/, pull tests in tests/Feature/Pulls/ and tests/Unit/Pulls/
php artisan pulls:run payhub1   # Pull one deployment's summary by hand (needs the deployment's key)
```

## Conventions

- Every PHP file starts with `declare(strict_types=1)`. Models list columns with the `#[Fillable]` and `#[Hidden]` attributes and cast enums in `casts()`.
- Eloquent relation methods carry generic docblocks (`HasMany<Pull, $this>`) so PHPStan level 7 passes.
- Pass a deployment id to jobs, never the token or the model with its token.
- Pages get explicit arrays or resources, never a whole `Deployment` model.
- Card money maps are cast `(object)` so an empty map is `{}` in JSON and a digit only currency code stays a key. Compare `$window->name` and `$amount->kind` as enum cases, not strings.

## Gotchas

- `Deployment` lowercases the slug when it is set. Validation must still refuse capital letters rather than rely on this, because the slug has to match the reply's `deployment.key` exactly.
- A deployment is soft deleted, and the `pulls` foreign key is `restrict`, so `forceDelete()` on a deployment that has pulls throws on purpose. The slug stays reserved forever, so unique rules must not use `withoutTrashed()`.
- `Pull::deployment()` includes removed deployments (`withTrashed()`), so old pulls still resolve their deployment.
- `latestGoodPull()` and `latestPull()` use `ofMany` with `id` as a tie breaker, because two pulls can share the same second.
- Do not write good pulls anywhere except `SaveGoodPull`. It enforces "four windows, all or nothing" in code, not in the database.
- `bootstrap/app.php` calls `dontFlash(['token'])` because sessions are stored in the database. Without it a refused form would write the plain token into the `sessions` table. Keep any new form that takes a token on this guard.
- Money is `unsignedBigInteger` cents. Never add different currencies together.
- Only `SaveGoodPull` writes a good pull and only `SaveFailedPull` writes a failed one. Failed pull text comes from `PullFailureKind::message()`, never from a response, URL or exception.
- `PullDeployment` reads the token with `Crypt::decryptString` on the raw column (the model cast cannot be caught by PHPStan) and passes it only to `FetchSummary` as a `#[SensitiveParameter]`. Anything thrown while saving a reply is caught and saved as `invalid_reply`.
- Set `do_not_pull_before` with `Deployment::whereKey($id)->update(...)`, not `save()`, so a removed deployment is not touched.
- Guzzle 8 has no cURL error number on exceptions. A timeout is a `ConnectTimeoutException`, `NetworkTimeoutException` or `ResponseTimeoutException` (message `cURL error 28` is the fallback).
- The schedule lives in `routes/console.php`: `pulls:dispatch` every 5 minutes, and `queue:work --stop-when-empty --max-time=50` every minute with `withoutOverlapping(2)` so a killed worker cannot block pulls for a day. Cron only needs `schedule:run` every minute.
- `SchedulerHealth` reads the heartbeat and `jobs` / `failed_jobs` timestamps as Unix numbers, so the app timezone does not shift the banner. Guests get `scheduler: null`.
- The `deployments.show` route takes the slug as plain text (pattern `[a-z0-9-]+`, so a capital letter is a 404) and does not use model binding. Binding would run `select *` and load the encrypted token. `BuildDeploymentDetail` selects safe columns only and never sends the slug in its data.
- The `pulls` prop on the Deployment page is a closure, and the page poll asks only for `deployment`, so the list query never runs on a poll. A future `router.reload()` on that page without `only` would run it again (spec 0010).
- Staff routes sit in their own group with `auth.session`, so a person whose password was changed is logged out even if a request was in flight. `edit` and `destroy` run `abort_if($user->is($request->user()), 403)`; the form requests refuse your own row in `authorize()`.
- `RemoveStaff` locks the acting and target rows (ordered by id) and refuses with 403 if the acting admin is gone, 404 if the target is gone. Over HTTP the acting admin check is nearly unreachable (auth fails first), so test it by calling the action directly.
- `StoreStaffRequest::EMAIL_TAKEN` lives on the request class, not the `StaffRules` trait, because PHPStan refuses constants accessed on a trait. A racing duplicate email (`UniqueConstraintViolationException`) is turned into the same message in the controller.
- In tests, `Http::fake()` called twice keeps the first stub. Call `Http::swap(new Factory)` between replies.

## Related specs

- [0002 Data model](../docs/specs/0002-data-model.md)
- [0004 Invite only login](../docs/specs/0004-invite-only-login/index.md)
- [0005 Add a deployment](../docs/specs/0005-add-a-deployment/index.md)
- [0006 Pull a summary by hand](../docs/specs/0006-pull-a-summary-by-hand/index.md)
- [0007 Home page](../docs/specs/0007-home-page/index.md)
- [0008 Scheduled pulls](../docs/specs/0008-scheduled-pulls/index.md)
- [0009 Deployment page](../docs/specs/0009-deployment-page/index.md)
- [0010 Recent pull history](../docs/specs/0010-recent-pull-history.md)
- [0011 Edit, pause and remove deployments](../docs/specs/0011-edit-pause-remove-deployments.md)
- [0012 Deployments list page](../docs/specs/0012-deployments-list-page/index.md)
- [0013 Manage staff logins](../docs/specs/0013-manage-staff-logins.md)

_Drafted by /audit from the repo, worth a quick human pass. Edit freely: once a line stops matching this draft, later runs treat it as curated and will flag rather than overwrite it._
