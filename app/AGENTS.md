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
| `Http/Controllers/DeploymentController.php`, `Http/Requests/StoreDeploymentRequest.php` | The add a deployment form (spec 0005). The request holds all the rules; saving never calls PayHub |
| `Concerns/` | Shared validation rules from the starter kit (password, profile) |
| `Http/Controllers/Settings/` | Profile and security pages from the starter kit, locked down for invite only login (spec 0004) |

## Commands

```bash
composer run types:check   # PHPStan level 7 over app/, bootstrap/app.php, config/, database/, routes/
composer run lint          # Pint, fixes files
php artisan test           # Pest; data model tests are in tests/Feature/DataModel/
```

## Conventions

- Every PHP file starts with `declare(strict_types=1)`. Models list columns with the `#[Fillable]` and `#[Hidden]` attributes and cast enums in `casts()`.
- Eloquent relation methods carry generic docblocks (`HasMany<Pull, $this>`) so PHPStan level 7 passes.
- Pass a deployment id to jobs, never the token or the model with its token.
- Pages get explicit arrays or resources, never a whole `Deployment` model.

## Gotchas

- `Deployment` lowercases the slug when it is set. Validation must still refuse capital letters rather than rely on this, because the slug has to match the reply's `deployment.key` exactly.
- A deployment is soft deleted, and the `pulls` foreign key is `restrict`, so `forceDelete()` on a deployment that has pulls throws on purpose. The slug stays reserved forever, so unique rules must not use `withoutTrashed()`.
- `Pull::deployment()` includes removed deployments (`withTrashed()`), so old pulls still resolve their deployment.
- `latestGoodPull()` and `latestPull()` use `ofMany` with `id` as a tie breaker, because two pulls can share the same second.
- Do not write good pulls anywhere except `SaveGoodPull`. It enforces "four windows, all or nothing" in code, not in the database.
- `bootstrap/app.php` calls `dontFlash(['token'])` because sessions are stored in the database. Without it a refused form would write the plain token into the `sessions` table. Keep any new form that takes a token on this guard.
- Money is `unsignedBigInteger` cents. Never add different currencies together.

## Related specs

- [0002 Data model](../docs/specs/0002-data-model.md)
- [0004 Invite only login](../docs/specs/0004-invite-only-login/index.md)
- [0005 Add a deployment](../docs/specs/0005-add-a-deployment/index.md)

_Drafted by /audit from the repo, worth a quick human pass. Edit freely: once a line stops matching this draft, later runs treat it as curated and will flag rather than overwrite it._
