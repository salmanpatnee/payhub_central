# PayHub Central Dashboard

A read only internal app. It pulls a payment summary from each PayHub deployment every 5 minutes, saves it, and shows combined and per deployment numbers. The contract with PayHub is `docs/central-dashboard-api.md` (v1).

## Stack

- **Language / Runtime**: PHP 8.3 (pinned with `config.platform.php`), TypeScript, Node for builds only
- **Framework**: Laravel 13 monolith, Vue 3 + Inertia v3, started from the official Vue starter kit (no sign up, no SSR)
- **Key dependencies**: Fortify (invite only login, two factor for admins), Tailwind CSS 4, shadcn-vue (Reka UI), MySQL, Pest 4
- **Package manager**: composer and npm
- **Runtime parts**: database queue, Laravel scheduler started by cron (`schedule:run` every minute), Hostinger hosting
- Full decision and build rules: `docs/specs/0001-stack-and-architecture/index.md`. Scaffolded. Versions: Laravel 13.17, Inertia 3, Vue 3.5, Tailwind 4, Pest 4, Vite+ 1.4.

## Build approach

Tracer Bullet (build one thin working thread through every layer first, then thicken one strand at a time).

## Commands

The scaffold exists, so the basics are confirmed:

```bash
composer install && npm install   # Install
composer run dev                  # Dev server
npm run build                     # Build (run locally, upload public/build)
php artisan test                  # Test (Pest)
```

Scripts that exist now (from `composer.json` and `package.json`):

```bash
composer run setup                # First time setup (install, .env, key, migrate, build)
composer run lint                 # Pint, fixes files (lint:check only reports)
composer run types:check          # PHPStan (Larastan, level 7)
composer run test                 # Pint check, PHPStan, then php artisan test
composer run ci:check             # npm run check, npm run types:check, then composer test
npm run check                     # Front end lint and format (vp check, --fix via check:fix)
npm run types:check               # vue-tsc
npm test                          # Front end unit tests (vp test)
php artisan db:seed               # Create the first admin (see database/seeders/DatabaseSeeder.php)
```

## Specs

Stored in `docs/specs/`. Scope in `docs/scope/scope.md`.

## Rules

- Style: SOLID OOP. Thin controllers, small action or service classes, constructor injection, no service locator. Keep classes small.
- Types are strict: `declare(strict_types=1)` in PHP, TypeScript strict with no `any`.
- Layout follows the starter kit's Laravel layout. Add feature folders only where files cluster.
- Money is whole cents (integers), never floats. Never add different currencies together.
- Tokens are encrypted, hidden from serialization, never sent to the browser, never logged, and never passed to a job (pass the deployment id).
- Any non 200 reply from PayHub means "unavailable": keep the last good reply and mark it stale. Never show zero.
- Light only, no dark mode. Money and time are formatted only by the helpers in `resources/js/lib`.
- Do not write tests (Pest or `vp test`) unless the user asks. Building a feature does not include writing its tests; they come later from `/test` or an explicit request. Running the existing suite to check nothing broke is fine.
- Conventional commit messages (`feat:`, `fix:`, and so on).

## Tooling

Chosen here, installed by `/develop tooling`:
- Lint and format: Laravel Pint (PHP), Vite+ `vp check` (Vue and TypeScript, replaces ESLint and Prettier; markdown and `docs/` are not formatted). PHPStan (Larastan, level 7) for PHP static analysis.
- Pre-commit: `vp staged` (set in `vite.config.ts`, hook in `.vite-hooks/`, installed by `npm run prepare`) runs Pint and PHPStan on staged PHP and `vp check --fix` on staged JS, TS, Vue, CSS and JSON. Tests do not run on commit.
- Tests: Pest unit and feature tests. Pull logic is tested with faked replies built from `docs/central-dashboard-sample.json`.
- CI: not yet (add when a second person works on the code).

## Git

- integration: off

## Context files

- [resources/js/AGENTS.md](resources/js/AGENTS.md): the Vue front end, design tokens, shared parts, money and time formatting

_Drafted by /audit from the repo, worth a quick human pass. Edit freely: once a line stops matching this draft, later runs treat it as curated and will flag rather than overwrite it._
