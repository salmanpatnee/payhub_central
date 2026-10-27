# 0005. Add a deployment

**Date**: 2026-10-27
**Status**: In Progress

## Summary

An admin opens one page, fills in five fields (key, name, base URL, token, on or off) and saves. The server checks every field, stores the token encrypted, and sends the admin to Home with a "Deployment added" message. Saving never calls PayHub, because the first real call belongs to feature 7 (pull by hand). The main risk is the token leaking, so the token is also kept out of the session, the logs and every page the browser receives.

## Requirements

**User stories**:
- As an admin, I want to add a deployment with its key, name, base URL, token and on or off setting so that the dashboard knows which PayHub to pull from.
- As an admin, I want a clear message beside any field that is wrong so that I can fix it without guessing.
- As an admin, I want the token to be unreadable after I save it so that a stolen screen, log or database copy cannot reveal it.

**Acceptance criteria** (the contract, each one checkable on its own):
- **AC-1**: `GET /deployments/create` shows the add form to a logged in, verified user. A guest is sent to the login page.
- **AC-2**: Saving a valid form creates one deployment (key, name, base URL, token, on or off), stores the token encrypted, and redirects to Home with the toast "Deployment added." The new deployment has no "do not pull before" time.
- **AC-3**: The key is required and must match `^[a-z0-9-]{1,32}$` exactly as typed (after trimming). Capital letters are refused with a message, never changed silently. A key already used by any deployment, including a removed one, is refused with the message "That key is already used (it may belong to a removed deployment)." Messages call the field "key", never "slug".
- **AC-4**: The name is required, trimmed, and at most 255 characters.
- **AC-5**: The base URL is required, at most 255 characters, must start with `https://` (capital letters in the scheme are accepted), must have a host, may have a port, and must have no username or password, no query and no fragment. A path is allowed. Every trailing slash is removed before saving. Two deployments may share the same base URL.
- **AC-6**: The token is required and must be exactly 64 characters after trimming. The message never repeats what was typed.
- **AC-7**: The on or off switch starts on, and the saved value is what the admin chose.
- **AC-8**: The token never comes back. It is not in any page data sent to the browser, not in the flashed old input kept in the session, not in any log line, and not in the `jobs` or `failed_jobs` tables. After a refused save the token field is empty in the browser too and must be typed again, and the form never uses browser form memory (`remember`).
- **AC-9**: Saving makes no call to PayHub and queues no job.
- **AC-10**: The form works with the keyboard alone, shows each error next to its field, and fits a phone width of 375px, following spec 0003.

## Decision

**Chosen option**: Option 1: Own add page, save only.

Add `GET /deployments/create` and `POST /deployments`, a form request that holds all the rules, and a Vue page with five fields. A good save creates the row and redirects Home with a toast. Nothing calls PayHub.

**Implementation skills**: none installed (see spec 0001).

## Feature design

**Data model sketch**: no change. Uses `deployments` from spec 0002.

| Column | Set by this feature |
|---|---|
| slug | The typed key (AC-3) |
| name | The typed name (AC-4) |
| base_url | The typed URL with the trailing slash removed (AC-5) |
| token | The typed token, stored through the `encrypted` cast (AC-6, AC-8) |
| is_active | The switch (AC-7) |
| do_not_pull_before | Left null |

**State transitions**: none. This feature only creates.

**API surface**:

| Endpoint | Method | Key inputs | Key outputs | Auth | Key errors |
|---|---|---|---|---|---|
| /deployments/create (`deployments.create`) | GET | none | Inertia page `deployments/Create` with no deployment data | logged in and verified | redirect to login |
| /deployments (`deployments.store`) | POST | `slug` string (req), `name` string (req), `base_url` string (req), `token` string (req), `is_active` bool (default true) | redirect to Home with the success toast | logged in and verified | 422 with field messages, 419 expired session |

**Files** (smallest set, layout follows the starter kit):
- `app/Http/Controllers/DeploymentController.php`: `create()` returns the page, `store()` calls `Deployment::create($request->validated())`, flashes the toast with `Inertia::flash('toast', ...)` as the profile controller does, and redirects to `dashboard`. No action class, because the save is one line. If two saves race and the database unique key fires (`UniqueConstraintViolationException`), `store()` turns it into the same validation error on the key, so no error page ever shows the request body.
- `app/Http/Requests/StoreDeploymentRequest.php`: all rules (AC-3 to AC-7), written out in full: key `required|string|regex:/^[a-z0-9-]{1,32}$/|unique:deployments,slug`, name `required|string|max:255`, base URL `required|string|max:255|url` plus one closure using `parse_url` (https scheme compared without letter case, host present, no user, pass, query or fragment), token `required|string|size:64`, `is_active` `required|boolean`. `attributes()` names the fields "key" and "base URL", and a custom `slug.unique` message is set. Trimming of every field already comes from Laravel's `TrimStrings` middleware, so `prepareForValidation` only removes trailing slashes from the URL (`rtrim($url, '/')`).
- `resources/js/pages/deployments/Create.vue`: the form built from the existing `PageHeader`, `Input`, `PasswordInput` and button parts. On a server error it resets the token field (`form.reset('token')`). The token input gets `autocomplete="off"`, `data-1p-ignore`, `data-lpignore="true"` and an `aria-label`.
- `routes/web.php`: the two routes inside the existing `auth` and `verified` group.
- `bootstrap/app.php`: `$exceptions->dontFlash(['token'])` (AC-8).
- `resources/js/components/AppSidebar.vue`: one nav item labelled "Add deployment" (plus icon, route helper from the generated routes). The Home empty state gets a link to the form in the `actions` slot that `EmptyState` already has.

**Value sourcing**:

| Action | Value produced / displayed | Source |
|---|---|---|
| Save | `slug`, `name`, `base_url`, `token`, `is_active` | Form inputs. `is_active` defaults to true in the form |
| Save | `base_url` without a trailing slash | Derived from the typed URL in the form request |
| Save | `do_not_pull_before`, `deleted_at` | Left null, decided in spec 0002 |
| Save | `id`, `created_at`, `updated_at` | Database and Laravel |
| Refused save | Message per field | Laravel validation messages, with the key message worded "That key is already used (it may belong to a removed deployment)" |
| After save | Toast text "Deployment added." | Fixed text in the controller |
| After save | Redirect target | The `dashboard` route (Home) |
| Show the form | The token field | Always empty, nothing is ever read back |

**Key invariants**:
- The token is saved only through the model's `encrypted` cast, and the `Deployment` model keeps it in `$hidden`.
- No page, flash value, log line or job payload contains the token. The page for this feature receives no deployment data at all.
- The key is unique across removed deployments too, so the unique rule must not use `withoutTrashed()`. The database unique key is the last guard if two saves race.
- The stored base URL is always `https`, has a host, and has no credentials, query or fragment.
- Saving a deployment never makes a network call.

**Security model**:
- Any logged in, verified user may add a deployment, because every logged in user is an admin (AGENTS.md). Guests are redirected to login. CSRF protection stays on.
- The token is the only secret. It is encrypted with `APP_KEY`, never echoed, and kept out of flashed input with `dontFlash(['token'])`, since sessions are stored in the database.
- The token field uses the existing `PasswordInput`, masked while typed. `PasswordInput` only passes attributes through, so the form sets `autocomplete="off"` and the 1Password and LastPass ignore attributes. Chrome may still offer to save it, which is a small leak risk that is accepted.
- Production must run with `APP_DEBUG=false`, because the debug error page prints the request body, which holds the plain token.
- No regulated personal data is handled. The token opens a payment system, so spec 0001's token rules apply in full.

**Configuration required**: none. Uses the existing `APP_KEY` and database.

**Critical test scenarios** (for `/test` later, each maps to an acceptance criterion):
- Happy path: a valid post creates the row, the stored token column differs from the typed token, and the response redirects Home with the toast, verifies **AC-2**, **AC-7**.
- Happy path: a guest is sent to login and a logged in user sees the form, verifies **AC-1**.
- Failure case: a key with capitals, too long, or using a bad character is refused, and a key already used (also by a removed deployment) is refused with the key message, verifies **AC-3**.
- Failure case: a URL with `http://`, no host, a username, a query or a fragment is refused, `HTTPS://host:8443/app//` is accepted and saved as `HTTPS://host:8443/app`, and trailing slashes are removed on a good one, verifies **AC-5**.
- Failure case: a token of 63 or 65 characters, or a missing one, is refused, and the message does not contain the typed value, verifies **AC-6**.
- Failure case: a database unique violation on the key during a race becomes the normal key error and shows no request body, verifies **AC-3**, **AC-8**.
- Failure case: two deployments with the same URL and different keys can both be saved, verifies **AC-5**.
- Security: after a refused post the session's flashed old input has no `token`, the page data holds no token, and the log holds no token, verifies **AC-8**.
- Failure case: a good save makes no outbound HTTP call (`Http::fake()` records nothing) and queues nothing, verifies **AC-9**.

## Build plan

Approach is Tracer Bullet: first a thin working thread (open the form, save, land on Home), then thicken one strand at a time. No migration is needed because the table exists.

1. Add the two routes, the controller, a form request with only "required" rules, and the page with the five fields, so a save creates a row and redirects Home with the toast, satisfies **AC-1**, **AC-2**, **AC-7**, **AC-9**
2. Add the real rules: key format and unique across removed ones, name length, the https URL check with the trailing slash removed, and the 64 character token, with the field messages, satisfies **AC-3**, **AC-4**, **AC-5**, **AC-6**
3. Keep the token from leaking: add `dontFlash(['token'])`, make sure the page sends no deployment data and the token field comes back empty after a refused save, satisfies **AC-8**
4. Add the sidebar item and the Home empty state link, then check keyboard use, error placement and the 375px width, satisfies **AC-10**

## Consequences

**Positive**:
- Small and fast to build, and it unblocks features 7 and 8.
- The token has one short, guarded path from the form to an encrypted column.
- No duplicate work with feature 7.

**Negative / tradeoffs**:
- A wrong URL or token is only discovered at the first pull, so the admin may add a deployment that fails until feature 7 shows the reason.
- Until feature 8, Home shows no deployments, so the toast is the only sign of success.
- There is no audit record of who added which deployment. Adding a secret for a live payment system is the kind of change an audit log should capture, but the scope defers it (Deferred list), so this is a known gap.
- A mistyped token must be fully retyped after any error, because the field is never refilled.
- Two deployments with the same URL are allowed, so adding the same PayHub twice is possible until feature 12 can remove one.

**Neutral**:
- Feature 12 will reuse the same rules in an update request and add "blank token keeps the old one".
- A key race between two simultaneous saves ends in a database error page, which is accepted for an internal tool with a handful of admins.

## Follow-up

- [ ] Feature 12 should share the key, name and URL rules with this form request instead of copying them.
- [ ] Decide on an audit log for deployment changes before the dashboard holds many live tokens (scope Deferred: audit log of admin actions).
- [ ] Feature 7 sends the token to whatever host is saved here, so a typo in the domain would send the token to the wrong place. Show the saved URL clearly to the admin and consider a confirm step on first pull.
