# Verify: Scheduled pulls · spec 0008 · updated 2026-10-28
_Steps derived from spec 0008 acceptance criteria. `/check verify` runs these; `/test` locks the durable ones. Use `Http::fake()` or a local fake server; never a real PayHub._

## UI / manual
- [ ] Log in with the scheduler stopped (no heartbeat), open Home → the warning banner shows → AC-8
- [x] Run `php artisan schedule:run`, then reload Home → the banner is gone → AC-8
- [x] Log out and open the login page → page data has no `scheduler` key value (null), no banner → AC-8

## Commands
- [x] With 2 active deployments, 1 paused, 1 removed, 1 waiting (`do_not_pull_before` in the future): `php artisan schedule:run` → exactly 2 rows in `jobs` → AC-1
- [x] Run `schedule:run` twice before any worker runs → still 2 rows in `jobs`, not 4 → AC-3
- [x] `php artisan queue:work --stop-when-empty` against a faked 200 built from `docs/central-dashboard-sample.json` → new `pulls` row with `source = scheduled`, `triggered_by` empty, status good → AC-2
- [x] Same run with a faked 503 → failed pull row with `source = scheduled` → AC-2
- [x] `php artisan pulls:run {key}` → saved pull still has `source = manual` → AC-2
- [x] Fake a timeout → one failed pull saved, no second job queued, `failed_jobs` empty → AC-4
- [x] Pause a deployment after its job is queued, then run the worker → no new pull, no request made, one info log line "Scheduled pull skipped: deployment paused." → AC-3
- [x] Hold the `pull:deployment:{id}` lock, then run the job → no pull saved, log line "pull already running" → AC-3
- [x] Delete the deployment after queueing, run the job → no pull saved, log line "deployment removed" or "deployment gone" → AC-3
- [x] Make one job throw, queue a second deployment's job → the worker still runs the second one → AC-5 (accepted by the engineer without a forced throw)
- [x] Fake a 429 with `Retry-After: 120`, then run `schedule:run` → that deployment gets no job until `do_not_pull_before` passes → AC-6
- [x] `php artisan schedule:list` → `pulls:dispatch` every 5 minutes first, then `queue:work --stop-when-empty --max-time=50 --tries=1` every minute; the worker entry uses `withoutOverlapping(2)` → AC-7
- [x] Check `scheduler:heartbeat` in the cache after `schedule:run` → a Unix timestamp near now → AC-8
- [x] Make the dispatcher throw (for example, break the DB query) → no heartbeat is written → AC-8
- [x] `SchedulerHealth::isStale()` returns true for: no heartbeat, heartbeat 11 minutes old, a waiting job 11 minutes old, a `failed_jobs` row 5 minutes old; false with a 2 minute old heartbeat and nothing old → AC-8
- [x] After every case above, search `jobs.payload`, `failed_jobs`, `storage/logs/laravel.log` and the Inertia page JSON for the deployment's token → not found → AC-9
- [x] `composer run test` and `composer run ci:check` → green

## Value sourcing checks
- [x] Choose deployments: toggle `is_active`, soft delete, set `do_not_pull_before` to past and future → only the on, present, not waiting ones are queued → AC-1
- [x] Job payload: decode the `jobs.payload` → class name and deployment id only → AC-3, AC-9
- [x] Save a pull: `source` is always `scheduled`, `triggered_by` always empty for a scheduled run → AC-2
- [ ] `pulled_at` is UTC and set when the call finishes → AC-2
- [ ] Heartbeat: change the app timezone, run the dispatcher → still a Unix timestamp, the banner logic does not shift → AC-8
- [ ] Banner `scheduler.stale` for guests is `null`, for a logged in user a plain boolean → AC-8
- [x] Cadence values (5 min, 20 s timeout, 3600 s backstop, 50 s worker) match the code → AC-4, AC-5, AC-7

## Acceptance-criteria coverage
- AC-1 … dispatcher selection steps · AC-2 … source steps · AC-3 … unique and quiet end steps · AC-4 … timeout step · AC-5 … throwing job step · AC-6 … 429 step · AC-7 … `schedule:list` step · AC-8 … banner, heartbeat and stale steps · AC-9 … leak search step
