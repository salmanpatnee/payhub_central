# 0008. Scheduled pulls

**Date**: 2026-10-28
**Status**: Proposed

## Summary

Every 5 minutes the server queues one small job for each active deployment. Each job runs the same pull code that `pulls:run` already uses, and saves a good or failed pull marked as `scheduled`. A failed pull is not retried inside the job, because the next 5 minute run is the retry. The warning banner that is already built now switches on when the scheduler stops, when a queued job has waited too long, or when jobs are failing.

## Requirements

**User stories**:
- As an admin, I want every active deployment pulled about every 5 minutes without a click so that the numbers stay fresh.
- As an admin, I want one slow or failing deployment to leave the others alone so that one bad server never hides the rest.
- As an admin, I want a clear warning when pulling has stopped so that I do not trust old numbers by mistake.

**Acceptance criteria** (the contract, each one checkable on its own):
- **AC-1**: Every 5 minutes the scheduler queues one pull job for each deployment that is on (`is_active`), not removed, and not waiting (`do_not_pull_before` empty or already past). Paused, removed and waiting deployments get no job.
- **AC-2**: Each job pulls through the existing `PullDeployment` action. The saved pull has source `scheduled` and `triggered_by` empty, for a good pull and for a failed pull alike. A manual pull still saves `manual`.
- **AC-3**: A job carries only the deployment id. A deployment that already has a job waiting or running does not get a second one. If a manual pull holds the lock, or the deployment was paused, started waiting, or removed after the job was queued, or the deployment is already gone, the job ends quietly: nothing is saved and one fixed log line (level info, one text per reason) is written.
- **AC-4**: A job never retries itself. It runs once (`$tries` is 1) and a failed pull is saved as is. The next 5 minute run is the retry.
- **AC-5**: One deployment cannot delay or break another. Each deployment is its own job, a job stops after at most 20 seconds, and an exception in one job does not stop the worker from taking the next job.
- **AC-6**: A deployment that answered 429 is skipped until its `do_not_pull_before` time. Scheduled pulls make at most one call per deployment per run, so the rate stays far under 6 calls a minute per token.
- **AC-7**: The scheduler starts one queue worker every minute. The worker stops when the queue is empty or after 50 seconds. Two workers never run at once, and a worker that died cannot block the next one for more than 2 minutes.
- **AC-8**: The dispatcher writes a heartbeat time at the end of every run (every 5 minutes), so a dispatcher that crashes writes none. For a logged in user, `scheduler.stale` is true when the heartbeat is missing or older than 10 minutes, when a waiting job has been in the queue for more than 10 minutes, or when `failed_jobs` has a row from the last 10 minutes. Otherwise it is false. A guest on the login page gets no `scheduler` data.
- **AC-9**: The token never appears in the `jobs` or `failed_jobs` tables, in a log line, or in the Inertia page data. The log lines this feature writes are fixed text. Errors that Laravel itself reports for a failed job are left as they are, because `PullDeployment` already catches every fetch error and the token is passed as a `#[\SensitiveParameter]`.

## Decision

**Chosen option**: Option 1: A scheduled dispatcher, one queued job per deployment, and a cron started worker.

Add a small dispatcher that runs every 5 minutes and queues a `PullDeploymentJob` for each due deployment. Add a minute by minute heartbeat and a minute by minute worker start. The job calls the existing `PullDeployment` action and adds no pull logic of its own. This follows the queue and scheduler plan already settled in spec 0001.

**Implementation skills**: none installed (see spec 0001).

## Feature design

**Data model sketch**: no change and no migration. Uses `deployments` (`is_active`, `do_not_pull_before`) and `pulls` (`source`, `triggered_by`) from spec 0002, plus the `jobs`, `failed_jobs` and `cache` tables the starter kit already created. The heartbeat is one cache key, `scheduler:heartbeat`, holding a Unix timestamp.

**State transitions**: none. A pull row is still written once and never changed.

**Changes to existing code** (small):
- `PullDeployment::handle(Deployment $deployment, PullSource $source = PullSource::Manual)` passes the source on through `pull()` and `saveReply()` to every save. `SaveGoodPull` already takes a source, but `saveReply()` hardcodes `PullSource::Manual` today, so it must use the argument. `SaveFailedPull::handle` gets a `PullSource $source` argument (it hardcodes `manual` today), and all its callers inside `PullDeployment` pass it. The command keeps calling `handle($deployment)` and still saves `manual`.
- `HandleInertiaRequests` gets `SchedulerHealth` by its constructor. `share()` adds `'scheduler' => fn () => $request->user() ? ['stale' => $this->health->isStale()] : null`, so guests get nothing and no query runs for them. `SchedulerBanner.vue` already reads `scheduler?.stale`, so no front end change.

**New classes** (small, constructor injection, all under `app/`):
- `Actions/Pulls/DispatchDuePulls.php`: invokable, takes `SchedulerHealth` by its constructor. Selects the ids of due deployments (soft deleted ones are excluded by the model), calls `PullDeploymentJob::dispatch($id)` for each, and then calls `SchedulerHealth::beat()` as its last step. If anything before that throws, no heartbeat is written.
- `Jobs/PullDeploymentJob.php`: `ShouldQueue` and `ShouldBeUnique`. Holds `int $deploymentId`. `$tries = 1`, `$timeout = 20`, `$failOnTimeout = true`, `$uniqueFor = 3600` (a backstop only: the unique lock is normally released when the job finishes, fails or runs out of tries), `uniqueId()` is the deployment id. `handle(PullDeployment $pull)` finds the deployment (gone: log "deployment gone" and return), calls `$pull->handle($deployment, PullSource::Scheduled)`, and catches `PullRefused` to log one fixed line (info) and end. Any other exception is left to Laravel, so it lands in `failed_jobs`.
- `Actions/Scheduler/SchedulerHealth.php`: `beat()` writes the heartbeat. `isStale()` is true when the heartbeat is missing or older than 10 minutes, or when `jobs` holds a row with `reserved_at` empty whose `created_at` is more than 600 seconds before `now()->getTimestamp()` (these columns are Unix seconds, not dates), or when `failed_jobs` has a row with `failed_at` in the last 10 minutes.

**Schedule** (in `routes/console.php`, two entries, in this order so jobs queued at the 5 minute mark are picked up by the worker started in the same run):
1. `Schedule::call(DispatchDuePulls::class)->everyFiveMinutes()`, named `pulls:dispatch`.
2. `Schedule::command('queue:work --stop-when-empty --max-time=50 --tries=1')->everyMinute()->withoutOverlapping(2)`. The `2` makes the overlap lock expire after 2 minutes. The default is 24 hours, so a worker killed by the host would otherwise block all pulls for a day. There is no `runInBackground()`: the worker runs inside its own cron run, and the next minute's cron is a separate process.

**Interface surface**: no HTTP route and no new command. Cron runs `php artisan schedule:run` every minute (spec 0001). Admins can check it with `php artisan schedule:list` and pull one deployment by hand with `pulls:run`.

**Value sourcing**:

| Action | Value produced / displayed | Source |
|---|---|---|
| Choose deployments | Which deployments are due | `deployments.is_active` true, `deployment.deleted_at` empty, `do_not_pull_before` empty or not in the future (read at dispatch) |
| Queue a job | The job payload | The deployment id only |
| Run a job | The token, URL and call rules | Read inside `PullDeployment` as in spec 0006, never in the job |
| Save a pull | `source`, `triggered_by` | Fixed `scheduled` from the job; `triggered_by` empty because no one is logged in |
| Save a pull | `pulled_at` | Application clock when the call finishes, UTC (spec 0006) |
| 429 | `do_not_pull_before` | Set by `PullDeployment` (spec 0006); read again by the dispatcher and by the job |
| Heartbeat | Last run time | `now()->getTimestamp()` written to cache key `scheduler:heartbeat` at the end of `DispatchDuePulls` |
| Banner | `scheduler.stale` | `SchedulerHealth::isStale()` for a logged in user: the cache heartbeat, the oldest `jobs.created_at` where `reserved_at` is empty, and the latest `failed_jobs.failed_at`, against a fixed 10 minutes (decided here). Guests get `null` |
| Dispatch cadence, job timeout, unique backstop, worker length | 5 min, 20 s, 3600 s, 50 s | Fixed values in code (decided here) |

**Key invariants**:
- Only `PullDeployment` makes the call and saves a pull. The job adds no pull logic.
- A job holds the deployment id and nothing else. The token is read only inside `PullDeployment`.
- One pull at a time per deployment: the unique job at queue time, and the existing `pull:deployment:{id}` lock at run time.
- A refused job saves nothing, so a quiet skip never replaces or hides the last good pull.
- Scheduled and manual pulls use the same rules, so the 429 wait applies to both.

**Security model**:
- There is no web surface. Only the server cron can start a scheduled pull.
- The `jobs` table holds only the class name and the deployment id. Log lines this feature writes are fixed text with the deployment id. Laravel's own report of a failed job is left alone; the token stays out of it because `PullDeployment` catches fetch errors and the token argument is `#[\SensitiveParameter]`.
- `scheduler.stale` is a plain true or false shared with logged in users only. Guests on the login page get `null`. It reveals nothing else.

**Configuration required**:
- Production cron (once, in Hostinger): `* * * * * cd /path/to/app && php artisan schedule:run >> /dev/null 2>&1`.
- `QUEUE_CONNECTION=database` and `CACHE_STORE=database` already match `.env.example`. `DB_QUEUE_RETRY_AFTER` stays at its default of 90, above the 20 second job limit.
- Locally, `composer run dev` (it runs `php artisan dev`) must also run `schedule:work`, so the banner does not stay on. The build checks that command and adds it if missing (build step 5).

**Critical test scenarios** (for `/test` later, each maps to an acceptance criterion):
- Happy path: with two active deployments, one paused, one removed and one waiting, running the dispatcher queues exactly two jobs, verifies **AC-1**.
- Happy path: running a job against a faked 200 built from `docs/central-dashboard-sample.json` saves a good pull with source `scheduled` and `triggered_by` empty; a faked 503 saves a failed pull with source `scheduled`; `pulls:run` still saves `manual`, verifies **AC-2**.
- Failure case: dispatching twice before the first job runs queues one job; a job whose lock is held, whose deployment was paused after queueing, or that was removed, saves nothing, makes no request and does not fail, verifies **AC-3**.
- Failure case: a faked timeout saves one failed pull and the job does not retry or queue another, verifies **AC-4**.
- Failure case: when one deployment's job throws, the next job still runs, verifies **AC-5**.
- Failure case: after a 429 with `Retry-After: 120`, the dispatcher skips that deployment until the time passes, verifies **AC-6**.
- Happy path: `schedule:list` shows the two entries in order (dispatcher, then worker) with the expected cadence, and the worker entry has the 2 minute overlap expiry, verifies **AC-7**.
- Failure case: with no heartbeat, a heartbeat 11 minutes old, a waiting job 11 minutes old, or a `failed_jobs` row 5 minutes old, `scheduler.stale` is true for a logged in user; with a 2 minute old heartbeat and nothing old it is false; a guest gets `null`; a dispatcher that throws writes no heartbeat, verifies **AC-8**.
- Failure case: dispatching with 12 five minute ticks and no worker leaves one waiting job per deployment, verifies **AC-3**.
- Security: after a scheduled run of every failure case, the `jobs` payload, `failed_jobs` row, the log lines this feature writes, and page data hold no token, verifies **AC-9**.

## Build plan

Approach is Tracer Bullet: first one thin working thread (dispatcher, job, one scheduled pull saved), then thicken one strand at a time. No migration is needed. Every test step uses `Http::fake()`; nothing here calls a real PayHub.

- [ ] 1. Pass the source through `PullDeployment` and `SaveFailedPull`, add `PullDeploymentJob` and `DispatchDuePulls`, and schedule the dispatcher, so running `schedule:run` and one worker saves a `scheduled` good pull for an active deployment, satisfies **AC-1**, **AC-2**
- [ ] 2. Add the due rules (paused, removed, waiting), the unique job, and the quiet end for refused jobs, satisfies **AC-1**, **AC-3**, **AC-6**
- [ ] 3. Make failures safe: no retry, 20 second limit, 1 hour unique backstop, fixed log lines for every quiet exit, and one job failing without stopping the next, satisfies **AC-3**, **AC-4**, **AC-5**
- [ ] 4. Add the worker schedule entry after the dispatcher, with `--stop-when-empty --max-time=50` and the 2 minute overlap expiry, satisfies **AC-7**
- [ ] 5. Add `SchedulerHealth` (heartbeat written by the dispatcher, the three stale checks) and the shared `scheduler` prop for logged in users, constructor injected into the middleware, so the banner works. Check `php artisan dev` and add `schedule:work` if missing, satisfies **AC-8**
- [ ] 6. Check that nothing leaks (job payload, `failed_jobs`, the log lines this feature writes, page data), and note the cron line, satisfies **AC-9**

## Consequences

**Positive**:
- Reuses all the pull logic from spec 0006, so scheduled and manual pulls behave the same, including the 429 wait and the guards.
- One deployment's failure is saved on its own and never touches the others.
- The banner catches a dead cron, a crashing dispatcher, a dead worker and jobs that keep failing, which a heartbeat alone would miss.

**Negative / tradeoffs**:
- **Unproven on Hostinger.** Spec 0001 listed the cron started worker as its biggest risk. It must be proven on the real host before anyone relies on it. If it fails, the fallback in spec 0001 is one scheduled command that calls every deployment directly.
- One cron started worker runs jobs one after another, so "a slow deployment does not block the others" depends on the 10 second call limit, not on parallel workers. A job can also wait up to about a minute for the next worker start.
- The 20 second job limit needs the PHP `pcntl` extension to be enforced by the worker. Without it, the 10 second HTTP limit is the real guard.
- No retry means one dropped connection leaves a failed pull and up to 5 minutes without fresh numbers for that deployment.
- Skipping the shared rate limiter from spec 0001 is safe only while manual pulls are rare. The "Pull now" button feature must re-check it.
- At 288 pulls a day per deployment, the database grows quickly until the deferred retention rule exists. This feature is the first one that makes it grow without a person clicking.
- The banner shows on a fresh install and on local machines until the scheduler runs for the first time. That is on purpose, but it can look like a fault.

**Neutral**:
- A new deployment is first pulled at the next 5 minute mark, not when it is saved.
- The Home page already refreshes every 60 seconds, so new pulls appear without any change there.
- Stale badges per deployment and failure alerts stay deferred in the scope.

## Rationale

Reasoning and options: see [rationale.md](rationale.md).

## Follow-up

- [ ] Prove the cron started queue worker on Hostinger (cron line, `pcntl` available, a job picked up within a minute) before calling this feature done. This closes the open item in spec 0001.
- [ ] The "Pull now" feature (features 8 and 10 follow ups from spec 0006) should dispatch the same `PullDeploymentJob` or call `PullDeployment` directly, and decide then whether the shared rate limiter from spec 0001 is needed.
- [ ] Pull history retention (scope Deferred) is more urgent now that pulls run on their own.
- [ ] Per deployment stale badges and failure alerts stay deferred, and will build on the `source` and failure fields saved here.
- [ ] Note the new files in `app/AGENTS.md` once built (`/sync`).
- [ ] A cross check by a second model found gaps now closed in this spec: the source passed through every save, integer `jobs` columns, banner data only for logged in users, constructor injection, the heartbeat moved into the dispatcher, a long unique backstop, entry order, failed jobs counted by the banner, and the reworded AC-9.
