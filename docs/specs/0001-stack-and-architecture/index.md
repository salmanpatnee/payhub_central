# 0001. Stack and architecture for the Central Dashboard

**Date**: 2026-10-26 (login, roles and mail lines updated 2026-10-29 to match specs 0004 and 0013)
**Status**: Accepted

## Summary

The Central Dashboard is one Laravel app with Vue pages served through Inertia (a layer that lets Laravel send pages straight to Vue without a separate API). It uses MySQL, a database backed queue, and a cron driven scheduler on Hostinger, the same family of tools as PayHub. This keeps it small and familiar for a small team and needs no extra servers. The scaffold step installs this stack and proves it boots.

## Decision

**Chosen option**: Option 1: One Laravel monolith with Inertia and Vue, matching PayHub.

Build a single deployable Laravel 13 app on PHP 8.3 with Vue 3, Inertia v3 and TypeScript pages, MySQL storage, queued jobs on the database driver, and the Laravel scheduler started by a once a minute cron entry.

Start from Laravel 13's official Vue starter kit (it already brings Inertia, Vue, TypeScript, Tailwind 4, shadcn-vue and Fortify), remove its public sign up, and turn off server side rendering.

Agent skills: none installed. Discovery was offered and postponed (see Follow-up).

## Proposed stack

| Layer | Choice | Reason |
|---|---|---|
| Architecture | One Laravel monolith, layered as controllers, then action or service classes, then models | One deploy, one codebase, no public API to design. Split nothing until a real bottleneck forces it. |
| Language | PHP 8.3 | Laravel 13's minimum, and what the brief and PayHub use. |
| Framework | Laravel 13 | Same as PayHub, so habits, packages and fixes carry across. |
| Frontend | Vue 3 (`<script setup>`, Composition API) with TypeScript, Inertia v3 | Types protect the money and window shapes from contract v1. Inertia avoids a separate API. |
| Styling and UI | Tailwind CSS 4 with shadcn-vue (Reka UI) | Components live in the repo and look the same as PayHub. |
| Build tool | Vite with npm | Laravel's default. |
| Primary database | MySQL | The brief's choice and what Hostinger offers. Money is stored as whole cents in integer columns. |
| Login | Laravel Fortify, invite only | Headless login backend. Public registration stays off and an admin creates every account. |
| Starting point | Laravel 13 official Vue starter kit, with public sign up removed and no server side rendering | Brings Inertia, Vue, TypeScript, Tailwind 4, shadcn-vue and Fortify already wired, so nothing is built by hand. Keep the kit's default route helper. |
| Roles | No role column. Every logged in user is an admin (spec 0004). | Matches the admin only choice. See Consequences for the cost. |
| Admin protection | Fortify two factor login, optional for each person (spec 0004) | Every saved token opens a live payment system, so it is offered to everyone but never forced. |
| Mail | None needed today. The `log` mailer stays as the default. | An admin types each new login's password (spec 0013), so no email is sent. Add Hostinger SMTP when a feature first needs to send mail. |
| Background jobs | Database queue, one job per deployment pull | Needs no extra service. Volume is a handful of jobs every 5 minutes. |
| Scheduler | Laravel scheduler, started by cron running `php artisan schedule:run` every minute | Hostinger supports cron. The queue worker also runs from cron (see Consequences). |
| Sessions and cache | Database driver for both | No Redis to run or pay for. |
| HTTP calls to PayHub | Laravel HTTP client with a short timeout and a small retry count | Built in and easy to fake in tests. Retries apply only to timeouts and 5xx replies, never to 4xx. |
| Token storage | Laravel `encrypted` cast on the token column, hidden from serialization | Encrypted with `APP_KEY`. See Consequences for the key rule. |
| Tests | Pest 4 | Pest 5 needs PHP 8.4 or newer, which does not match the PHP 8.3 choice. |
| Local development | Laravel Herd on Windows | Already in use. |
| Hosting | Hostinger | Same as PayHub. |
| Observability | Laravel logs only | Sentry was deferred. Add it later as its own small feature. |

Decided here without a question (small details, easy to change):
- No money library. Whole cents stay integers end to end, and formatting happens in the browser with `Intl.NumberFormat`.
- Package manager is npm. Folder layout is Laravel's standard layout. Nothing custom.

## Build rules the scaffold and later features must follow

These close the gaps a cross check found. They are rules, not steps. `/develop` derives the steps.

**Tokens (never reach the browser, logs or job tables)**
- The token column is `TEXT` (ciphertext is long), uses the `encrypted` cast, and is in `$hidden`.
- Pages receive explicit arrays or API Resources, never whole models. The page gets a `has_token` flag only. On edit, a blank token field keeps the old token.
- Jobs receive the deployment id only, never the token, so it is not stored in `jobs` or `failed_jobs`. The token argument is marked `#[\SensitiveParameter]`.
- A test proves the token string appears in no page response and no log line.
- A job that cannot decrypt a token saves the pull as "token unreadable" and does not crash.

**Calls to PayHub**
- Base URLs must be `https://`. Redirects are turned off (`withoutRedirecting()`), and any 3xx counts as unavailable.
- One shared rate limiter per deployment, capped at 5 calls a minute, covers scheduled and manual pulls. A manual "pull now" dispatches the same job. At most one retry, with a backoff of 2 seconds or more, only for timeouts and 5xx.
- On a 429, read `Retry-After` (seconds or an HTTP date), save a "do not pull before" time on the deployment, and have the scheduler skip it until then. The job does not retry inside itself.
- Each pull job is unique per deployment (`ShouldBeUnique`), so a restarted worker cannot pile up calls. The database cache needs its `cache_locks` table.
- Failed pull reasons store only the status code and a short message, never headers.

**Queue and scheduler**
- One cron line only: `schedule:run` every minute.
- The scheduler starts the worker: `queue:work --stop-when-empty --max-time=50`, `everyMinute()->withoutOverlapping()->runInBackground()`.
- Job `$timeout` is about 20 seconds, well below the queue `retry_after` of 90 seconds, with `$tries = 1`.
- The scheduler writes a heartbeat time every minute. The layout shows a warning banner when it is older than 10 minutes. This covers the silent failure of a dead cron while Sentry is deferred.

**Time and data**
- The MySQL connection and app timezone are `UTC`. `pulled_at` and `generated_at` are stored in UTC.
- Window `from` and `to` are stored exactly as received (a string with its offset), never converted.
- Times are shown in the timezone from each reply (`Asia/Karachi` today). Staleness is measured from `pulled_at`, not `generated_at`.
- Money is a `BIGINT` of whole cents. The raw reply JSON is kept next to the parsed fields.

**Login, sessions and accounts**
- Fortify registration is turned off in `config/fortify.php`. Login throttling is on.
- Session cookies: secure, encrypted, `http_only`, `same_site=lax`, 120 minute lifetime. Trusted proxies are set so Hostinger's HTTPS is detected, and URLs are forced to HTTPS in production.
- The first admin comes from the `DatabaseSeeder` (spec 0004), with the default password `password`. Change it after any production seed.
- Staff logins: an admin adds a person with a password the admin types, and passes it to them in person. No email is sent. These users are marked email verified. An admin can later set a new password for a person, which ends all of that person's sessions (spec 0013). Fortify's password reset stays turned off (spec 0004).

**Environment and deploy**
- `composer.json` sets `config.platform.php` to `8.3`, so the lock file installs on Hostinger even if Herd runs PHP 8.4. Confirm Hostinger's PHP and MySQL versions before the first deploy.
- Frontend assets are built locally with `npm run build` and `public/build` is uploaded. Do not rely on Node on the host.
- `LOG_CHANNEL=daily` with a retention period.
- `APP_KEY` can be rotated safely by moving the old key into `APP_PREVIOUS_KEYS`. Production data is never copied to a local machine.

## Consequences

**Positive**:
- One codebase and one deploy. The team already knows every tool.
- No extra services to run (no Redis, no worker server, no API gateway).
- Fakeable HTTP and a fixed contract mean the pull logic can be tested against `docs/central-dashboard-sample.json` before any real deployment exists.

**Negative / tradeoffs**:
- **Queue worker on shared hosting.** A permanent worker is not guaranteed there. The worker should be started by cron (for example `queue:work --stop-when-empty --max-time=55` every minute). Jobs can then wait up to a minute before starting. This is fine for 5 minute pulls but must be proven on Hostinger.
- **`APP_KEY` is now a business secret.** If it is lost, every saved deployment token becomes unreadable, everyone is logged out, and tokens must be entered again. Rotating it is safe only when the old key is kept in `APP_PREVIOUS_KEYS`. Back it up with the other production secrets.
- **The queue is the biggest unproven risk.** If the cron driven worker cannot be proven on Hostinger, the fallback is to drop the queue: one scheduled command (`everyFiveMinutes()->withoutOverlapping()`) calls every active deployment with `Http::pool`, each with a short timeout. The brief asked for one job per deployment, so the queue stays unless the proof fails. Note that a single cron started worker runs jobs one after another, so "one slow deployment does not block the others" comes mostly from the short timeout.
- **No room for roles yet.** Every logged in user is an admin and the `users` table has no role column. Adding a viewer role or access per deployment later means a new column or a roles table, a small migration plus a check on every admin route. The `spatie/laravel-permission` package in the brief would help and is compatible with Laravel 13.
- **Frontend build is manual.** Without CI, assets are built locally and uploaded each deploy, so a forgotten build means stale pages.
- **Passwords are handed over by people.** With no invite email, an admin must pass a new person's password to them safely, and the person should change it. The app has no forced change on first login yet.
- Inertia v3 support for Laravel 13 was not confirmed on its official site (see Follow-up).
- No error monitoring in the first version. A crashing job is visible only in logs.

**Neutral**:
- Sessions and cache in the database add small writes. Fine at this size.
- Contract v1 stays the only link to PayHub. A move to v2 means a code change here.

## Follow-up

- [ ] Scaffold step: start from the official Vue starter kit and confirm it boots on Laravel 13 with a smoke test. If the kit ships Inertia v2 or does not match this spec, record the difference and update this spec.
- [ ] Scaffold step: confirm shadcn-vue with Reka UI works with Tailwind 4 (its Tailwind 4 page could not be fetched during research).
- [ ] Owed to later specs: data retention and pruning, stale and alert thresholds, and token rotation using PayHub's current and next slots (all in the scope's Deferred list).
- [ ] Prove the cron driven queue worker on Hostinger before relying on scheduled pulls (feature 9, scheduled pulls).
- [ ] When viewer roles or per deployment access come (deferred in the scope), add a role column or `spatie/laravel-permission`.
- [ ] Add Sentry as its own small feature when staff start to depend on the dashboard.
- [ ] Add CI (tests and build on each push) when a second person starts working on the code.
- [ ] Optional: find Agent Skills and MCP servers for Laravel, Vue, Inertia, Tailwind, shadcn-vue and Pest once the scaffold exists.

## Rationale

Reasoning and options: see `rationale.md`.
