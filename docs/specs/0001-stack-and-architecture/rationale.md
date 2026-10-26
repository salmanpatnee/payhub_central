# 0001. Stack and architecture: reasoning

## Context

The Central Dashboard is a new, separate app for internal staff. Every 5 minutes it asks each PayHub deployment for a small summary, saves the reply, and shows combined and per deployment numbers. It is read only: it never changes anything in PayHub and never sees client names, emails or reference codes.

Forces that shaped the choice:
- **Small team, small load.** A handful of deployments and a few staff. The work is a scheduled pull plus a few pages, not a high traffic product.
- **Same family as PayHub.** The team already works in PayHub, and the brief asks for matching tools so habits, components and fixes carry across.
- **Shared style hosting.** The dashboard runs where PayHub runs (Hostinger). That host gives MySQL and cron, but long running processes are not guaranteed.
- **Secrets and money.** Each saved token opens a live payment system. Money is whole cents. Mistakes here are costly.
- **A fixed outside contract.** PayHub's contract v1 defines the data. The dashboard only needs to read it, save it and show it.

## Options considered

### Option 1: One Laravel monolith with Inertia and Vue (matches PayHub)

One app, one deploy. Laravel serves pages, Vue renders them through Inertia, and the scheduler and queue live in the same codebase.

**Pros**:
- Smallest number of parts and the best fit with the team's existing skills.
- No separate API to design, secure or version.
- Runs on the current host with only cron and MySQL.

**Cons**:
- Frontend and backend share one deploy. A change to either ships both.
- Inertia v3 support for Laravel 13 was not confirmed on its official site.

### Option 2: Laravel API plus a separate Vue app

A Laravel back end that exposes an API and a separate single page app for staff.

**Pros**:
- Clear split if other clients ever need the data.
- Frontend can deploy on its own.

**Cons**:
- Two codebases, two deploys, and an API that nobody else needs.
- More login and security work (tokens or cookies across two origins).

### Option 3: Laravel with Livewire

Server rendered components with little JavaScript.

**Pros**:
- Less JavaScript to write and ship.

**Cons**:
- Different habits from PayHub, so less carries across.
- Harder to match the shared shadcn-vue components.

### Option 4: A different framework (for example Symfony)

**Pros**:
- Capable and mature.

**Cons**:
- Shares nothing with PayHub, and the team would learn a new tool to build a small app.

## Rationale

Option 1 is the only choice that adds no new moving parts. The load is tiny, the team already knows every tool, and nothing in the brief needs a public API, so a second codebase (Option 2) would be cost with no payoff. Livewire and Symfony would break the "match PayHub" goal for no gain.

Smaller picks follow the same reasoning (boring and proven first):
- **Database queue and cron scheduler.** Volume is roughly one job per deployment every 5 minutes, so a database queue is enough and Redis would be an extra service to run. The scheduler is Laravel's own. The one real risk is the queue worker on shared hosting, which is why the spec asks for a cron driven worker and a proof on Hostinger.
- **Encrypted cast for tokens.** The dashboard must hold the real token to call PayHub, so hashing is not possible. Laravel's built in encryption is the simplest safe option. A separate key or an outside secrets service would be stronger but adds setup the small team would have to operate.
- **`is_admin` instead of a roles package.** You chose admin only for now, so the simplest option wins. The brief preferred `spatie/laravel-permission`, and it is compatible with Laravel 13. The cost is a small migration when viewer roles arrive, and the spec records this as a follow up.
- **Pest 4, not Pest 5.** Pest 5 needs PHP 8.4 or newer. With PHP 8.3 chosen, Pest 4 is the working version, and it is the one named in Laravel 13's upgrade guide.
- **Starter kit, not a hand built scaffold.** The official kit already wires the chosen frontend pieces and login, which removes the most error prone setup work. Its public sign up is removed to keep the app invite only.
- **Queue kept, with a recorded fallback.** A cross check suggested dropping the queue for one scheduled command that calls every deployment at once. That is simpler and removes the worker risk. The queue stays because the brief asks for one job per deployment and the volume is tiny, but the simpler approach is the agreed fallback if the Hostinger worker proof fails.
- **Two factor for admins and invite emails.** Every token opens a payment system, so a second login step is cheap protection. Fortify has no invite flow, so invites reuse its password reset with a longer expiry, which needs mail.
- **Sentry and CI deferred.** Both are small to add later, and you chose to leave them out of the first version.
- **Inertia v3 with a check at scaffold time.** The brief asks for v3. Because its Laravel 13 support was not confirmed on the official site, the scaffold step proves it works and falls back to v2 if it does not.

## Landscape check (research, 2026-10-26)

Done once by a read only helper. Items marked "not verified" were not confirmed on an official page.

- Laravel 13 was released March 17, 2026. It needs PHP 8.3 or newer and supports PHP 8.3 to 8.5. Bug fixes run until Q3 2027 and security fixes until March 17, 2028.
- Laravel 13 upgrade notes: the request forgery middleware was renamed to `PreventRequestForgery`, the cache `serializable_classes` default changed to false, and the session serialization default changed to JSON.
- Inertia v3: the upgrade guide says the Laravel adapter needs PHP 8.2+ and Laravel 11+ and gives the Vue install as `@inertiajs/vue3@^3.0`. Laravel 13 is not mentioned in the guide. Stable status was reported by search results but not confirmed on the Inertia site. Not verified.
- Fortify: Laravel 13.x docs describe it as a headless auth backend. No explicit version line was found. Not verified.
- `spatie/laravel-permission` 8.3.2 supports Laravel 12 and 13 on PHP 8.3 or newer.
- Pest: the official docs name Pest 5 as current and say it needs PHP 8.4+. Laravel 13's upgrade guide names Pest ^4.0.
- shadcn-vue with Tailwind 4 and Reka UI: the official Tailwind 4 page returned 404. Not verified.
- `sentry/sentry-laravel` 4.29.0 supports Laravel 13. Sentry's own docs were not fetched. Not used in this stack.

## References

**Project sources** (verifiable, in this repo):
- `docs/central-dashboard-brief.md` (the suggested stack, the rules, and the build order)
- `docs/central-dashboard-api.md` (contract v1)
- `docs/scope/scope.md` (feature 1, the Beta workflow level, and the deferred items)

**Practices & standards**:
- Monolith first, extract only when a real bottleneck forces it
- A database backed queue before a dedicated broker
- Whole cents as integers for money, never floats
- Encrypt secrets at rest, never show or log them after saving
- Boring and proven tools over new ones

**Links** (web verified only):
- Laravel 13 release notes: https://laravel.com/docs/13.x/releases
- Laravel 13 upgrade guide: https://laravel.com/docs/13.x/upgrade
- Inertia v3 upgrade guide: https://inertiajs.com/docs/v3/getting-started/upgrade-guide
- Laravel Fortify docs: https://laravel.com/docs/13.x/fortify
- spatie/laravel-permission on Packagist: https://packagist.org/packages/spatie/laravel-permission
- Pest installation: https://pestphp.com/docs/installation
