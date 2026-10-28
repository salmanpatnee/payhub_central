# 0008. Scheduled pulls: rationale

## Context

The dashboard can already pull one deployment by hand (spec 0006), but nothing runs it on its own, so the numbers on Home are only as fresh as the last time someone ran a command. The brief asks for an automatic pull about every 5 minutes, one job per deployment so a slow deployment does not block the others, a short timeout, limited retries, and a wait on 429.

Several forces shape the design. The host is Hostinger, where a permanent queue worker is not guaranteed and only cron is. Spec 0001 chose a database queue and a scheduler started by a once a minute cron, and named the cron started worker as the biggest unproven risk. Spec 0006 built `PullDeployment` as one action meant to serve manual pulls and this job, with no retries inside the call. PayHub allows 6 calls a minute per token and returns `Retry-After` on 429, which `PullDeployment` already turns into `do_not_pull_before`. Cron failing silently is the worst case, because old numbers would look normal. Sentry and stale badges are both deferred, so the banner is the only safety net.

If this is not decided, the worker start, the dedupe rule, the retry rule and the meaning of the warning banner would be invented during the build.

## Options considered

### Option 1: A scheduled dispatcher, one queued job per deployment, and a cron started worker

The scheduler runs a dispatcher every 5 minutes that queues one unique job per due deployment and writes a heartbeat. A second scheduled entry starts `queue:work --stop-when-empty --max-time=50` every minute. The job calls `PullDeployment`.

**Pros**:
- Matches the brief and spec 0001, and keeps one pull path for manual and scheduled pulls.
- A failing deployment is its own job with its own saved result.
- Fits Hostinger, which only needs one cron line.
- Becomes easy to extend: the "Pull now" button can dispatch the same job.

**Cons**:
- Needs the cron started worker to be proven on the real host.
- Jobs run one after another, so isolation relies on the short call limit rather than parallel workers.
- Two schedule entries and one job class to keep working.

### Option 2: One scheduled command that calls every deployment directly

A single `everyFiveMinutes()` command loops over the due deployments, or uses `Http::pool`, and calls `PullDeployment` in the same process. No queue.

**Pros**:
- Fewest moving parts and no worker to keep alive.
- Nothing to prove about queues on the host.

**Cons**:
- All deployments share one process and one time budget, so a few slow servers delay the rest.
- A crash partway through skips every deployment after it.
- Gives up the one job per deployment shape the brief asked for, and the later "Pull now" button has nothing to dispatch.

### Option 3: A permanent queue worker under a process supervisor

Run `queue:work` all the time under a supervisor, with the scheduler only dispatching.

**Pros**:
- Jobs start at once and can run in parallel with more than one worker.
- The usual Laravel production setup.

**Cons**:
- Hostinger shared hosting does not promise a supervisor or long running processes.
- Adds a new thing to run and monitor for a handful of jobs every 5 minutes.

## Rationale

Option 1 is chosen because it is the plan spec 0001 already settled and the brief asked for, and it adds the least new code on top of spec 0006. The action already holds the guards, the lock and the 429 wait, so the job is a thin wrapper that passes a deployment id and a source. Option 2 is the fallback if the cron started worker cannot be proven on Hostinger, so the spec keeps that door open instead of closing it. Option 3 asks for a host feature that is not promised.

The engineer chose these details in the conversation, each with a reason:
- **No retry inside the job.** Spec 0001 allowed one retry after 2 seconds, but with one worker that runs jobs in order, a retry makes a failing deployment hold up the ones behind it. The next 5 minute run is already a retry, and a failed pull is saved either way. The cost is up to 5 minutes without fresh numbers after a dropped connection. The runner up was one retry after 2 seconds.
- **No shared rate limiter yet.** Spec 0001 asked for 5 calls a minute per deployment. Scheduled pulls make one call every 5 minutes, and the pull lock plus the 429 wait already guard the limit. A limiter that nothing can trigger is extra code. The "Pull now" button feature should re-check this, which is recorded in Follow-up.
- **The banner watches the heartbeat and the oldest waiting job.** A heartbeat alone only proves cron is alive. If the worker command fails but cron still runs, the banner would stay hidden while pulls are dead. Looking at the oldest waiting job in `jobs` catches that with one cheap query and no new table. The cross check added two more: the dispatcher writes the heartbeat itself (so a crashing dispatcher shows), and a recent row in `failed_jobs` also counts (so jobs that fail before saving show).

The settled details I chose, with the runner up:
- **`withoutOverlapping(2)` on the worker, and no `runInBackground()`.** The default 24 hour lock would let one killed worker stop all pulls for a day. Two minutes is just above the longest a worker should live (50 seconds plus one job). The worker needs no background mode, since the next minute's cron is its own process, and leaving it out is one less thing to prove on Hostinger.
- **Unique lock held until the job finishes, with a 1 hour backstop.** A 5 minute window let jobs pile up (about 12 per deployment after an hour of a dead worker), which then run back to back and hit the 429 limit. Laravel releases the lock on success, failure and max tries, so the backstop only matters for a lost job. Runner up: no expiry at all, which could block a deployment forever.
- **Order of the schedule entries.** The dispatcher is first so its jobs are there when the worker starts in the same run.
- **The dispatcher as an invokable class, not a new Artisan command.** `schedule:run` and `pulls:run` already cover running and checking. Runner up: a `pulls:dispatch` command, which is easier to run by hand but is one more file.
- **A quiet end for refused jobs.** A paused or waiting deployment is not an error, and saving a failed pull for it would blur the history. One fixed log line is enough.
- **The 10 minute banner limit.** It is twice the pull interval and matches spec 0001.
