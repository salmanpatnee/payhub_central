# 0011. Edit, pause and remove deployments

**Date**: 2026-10-28
**Status**: In Progress

## Summary

An admin can now look after a deployment after adding it. The Deployment page gets a one click Pause or Resume button and an Edit button. Edit opens its own page where the name, the base URL and, if needed, a new token can be changed. At the bottom of that page a Remove button opens a confirm dialog. Removing keeps the saved history but wipes the token for good and hides the deployment everywhere. No new table or column is needed, because spec 0002 already planned for all of this.

## Context

Spec 0005 let an admin add a deployment and spec 0009 shows it, but nothing can be changed afterward. A typo in the URL, a token that PayHub has rotated, or a client that has left cannot be fixed without touching the database. Spec 0005 also left two open points for this feature: share the form rules with the add form, and what to do about two deployments with the same URL. Decision: two deployments may still share a URL (as spec 0005 allows), and either one can now be removed on its own.

Rules already in force from earlier specs. Removing is a soft delete (the row stays), the token column is nullable so it can be wiped, and the key (slug) is reserved forever because it must match the key inside PayHub's reply and links old pulls. Paused means `is_active` is off, and the scheduler and the manual pull already skip paused deployments. A removed deployment is already a 404 on its page and shows nowhere. The token is encrypted, hidden, never sent to the browser and never loaded for pages that do not need it.

Workspace: one Laravel app with Vue and Inertia, web only. Every logged in user is an admin (AGENTS.md), so there is no role check to design.

## Requirements

**User stories**:
- As an admin, I want to change a deployment's name or URL so that a typo or a moved address can be fixed.
- As an admin, I want to replace a deployment's token without retyping everything else so that a rotated token can be updated.
- As an admin, I want to pause and resume a deployment in one click so that pulls stop while a PayHub is being worked on.
- As an admin, I want to remove a deployment with a clear warning so that a client that has left no longer shows and no longer has a usable token here.

**Acceptance criteria** (the contract, each one independently checkable):
- **AC-1**: `GET /deployments/{key}/edit` shows the edit form to a logged in, verified user: name and base URL filled in, the key shown as read only text, and an empty token field with a hint that a blank field keeps the current token. The page title and its one `h1` read "Edit {name}", the breadcrumbs are Home, the deployment name, Edit, and a Cancel link goes back to the Deployment page. A guest is sent to login. An unknown or removed key gives a 404. The Deployment page has an Edit button that opens it.
- **AC-2**: Saving name and base URL uses the same rules as the add form (spec 0005 AC-4 and AC-5: name required, trimmed, at most 255; URL `https://`, a host, no username, password, query or fragment, trailing slashes removed). A good save updates the row, redirects to that Deployment page and shows the success toast "Deployment saved." A save that changes nothing still saves and shows the same toast. The key cannot be changed: a key sent in the request is ignored.
- **AC-3**: The token field is optional on edit. Blank keeps the stored token untouched. A value of exactly 64 characters after trimming replaces it, stored encrypted. Any other length is refused with a message that never repeats what was typed.
- **AC-4**: When a save changes the base URL or gives a token, `do_not_pull_before` is cleared. "Changes the URL" means the text differs from the stored one after trailing slashes are removed, compared exactly, so a change of letter case counts. "Gives a token" means any non blank value, even one equal to the stored token (the stored token is never read to compare). A save that changes only the name leaves the wait as it is. Saving makes no call to PayHub and queues no job (the next scheduled run does the first pull with the new settings).
- **AC-5**: The Deployment page shows a Pause button when the deployment is on and a Resume button when it is paused. One click saves at once, with no confirm step, stays on the page and shows the success toast "Deployment paused." or "Deployment resumed." The page keeps its state and scroll (the chosen period and the open Recent pulls stay as they are), and the button is disabled while the request runs. Sending the same request twice gives the same result and never a 404 for a deployment that exists. The request needs a real `is_active` true or false, and a missing or other value gives a 422. Resuming makes no call to PayHub and queues no job.
- **AC-6**: A paused deployment is not pulled by the schedule or by the manual command (already true, checked again here). Editing never turns a deployment on or off, and a paused deployment can still be edited and stays paused. Pause and Resume never change the name, URL, token or wait time.
- **AC-7**: The edit page has a "Remove deployment" area at the bottom. Its button opens a dialog that names the deployment and says three things: the token will be wiped here, the key can never be used again, and this does not revoke the token inside PayHub. The dialog title is "Remove {name}?", the three statements read "The token is wiped here and cannot be recovered.", "The key can never be used again." and "This does not revoke the token inside PayHub. Revoke it there too.", and the buttons are Cancel (focused first) and a danger styled Remove, which shows a loading state while it runs. Remove sets the token to null and soft deletes the row in one statement, redirects to Home and shows the success toast "Deployment removed."
- **AC-8**: After removal the deployment is gone from Home, and its Deployment page, edit page, update, pause and remove requests all give a 404. Saved pulls stay in the database and show nowhere. The add form still refuses the removed key (spec 0005 AC-3). The stored token column is null.
- **AC-9**: The token never reaches the browser, the session, a log line, or the `jobs` and `failed_jobs` tables. Edit, pause and remove never load the stored token. The edit page data holds only the key, the name and the base URL. After a refused save the token field is empty again. The token input uses `autocomplete="new-password"` plus the same ignore attributes as the add form, which is a manual check because browsers may still offer to save it. Edit, pause and remove run no select that lists the `token` column.
- **AC-10**: All four new routes (edit, update, pause or resume, remove) send a guest to login. Any logged in, verified user may use them.
- **AC-11**: The Deployment page header shows the Pause or Resume button (labels "Pause" and "Resume", outline style) and the Edit button beside the status badge, wrapping under it at 375px. If the page's 60 second poll gets a 404 because the deployment was removed in another tab, the admin is sent Home. The edit page and the dialog work with the keyboard alone, show each error next to its field, fit a 375px width without sideways scroll, stay light only, and follow spec 0003. The dialog traps focus, closes with Escape and returns focus to the Remove button.

## Options considered

### Option 1: Own edit page, one click pause on the Deployment page, confirm dialog for remove

A new edit page holds the name, URL and token, with Remove at the bottom. Pause and Resume sit on the Deployment page as one click buttons.

**Pros**:
- The token field lives on a page of its own, away from the page that refreshes every 60 seconds.
- Pause is fast, which matters most because admins will use it more often than the rest.
- Remove sits behind a deliberate trip and a dialog, so an accidental click is unlikely.

**Cons**:
- Three new surfaces to build and check instead of one.
- Pause state is changed in a different place from the other settings.

### Option 2: One page for everything

The edit page holds name, URL, token, an on or off switch and Remove. No buttons on the Deployment page.

**Pros**:
- One page, one form request, fewer routes.

**Cons**:
- Pausing takes a trip to the form and a save, even though it is the common action.
- A save with a typo in the URL could also flip the switch by accident.

### Option 3: Inline editing on the Deployment page

Fields on the Deployment page turn editable in place.

**Pros**:
- No extra page.

**Cons**:
- Puts a secret field on a page that is polled every 60 seconds, and a poll could disturb a half typed form.
- Harder to fit the form and error messages at 375px.

## Decision

**Chosen option**: Option 1: Own edit page, one click pause on the Deployment page, confirm dialog for remove.

Add an edit page, an update route, a pause or resume route and a remove route. Changes go through small action classes that never load the token unless a new one is being written.

**Implementation skills**: none installed (see spec 0001).

## Rationale

The token is the only secret here, and the Deployment page is polled every 60 seconds (spec 0009), so keeping the token field on a separate page avoids both leaks and lost typing. Pausing is the action admins will repeat, so it gets the cheapest path, and removing is the one that cannot be undone (token wipe plus a key reserved forever), so it gets the most friction. The runner up, Option 2, is smaller to build but makes the common action slow and lets one save change two unrelated things. The engineer chose Option 1 and every part of it was a recommended pick.

## Feature design

**Data model sketch**: no change. Uses `deployments` from spec 0002.

| Column | Changed by this feature |
|---|---|
| name, base_url | Edit (AC-2) |
| token | Replaced on edit when a new one is typed (AC-3), set to null on remove (AC-7) |
| is_active | Pause and Resume only (AC-5) |
| do_not_pull_before | Set to null when the URL changes or a new token is given (AC-4) |
| deleted_at | Set on remove (AC-7) |
| slug | Never changed |

**State transitions**:

| From | To | Trigger |
|---|---|---|
| on | paused | Pause button |
| paused | on | Resume button |
| on or paused | removed (end state) | Remove in the dialog. Cannot be undone |

**API surface**:

| Endpoint | Method | Key inputs | Key outputs | Auth | Key errors |
|---|---|---|---|---|---|
| /deployments/{key}/edit (`deployments.edit`) | GET | none | Inertia page `deployments/Edit` with `deployment: {key, name, baseUrl}` | logged in, verified | login redirect, 404 |
| /deployments/{key} (`deployments.update`) | PUT | `name` string (req), `base_url` string (req), `token` string (optional, 64 chars) | redirect to `deployments.show` for the key, with a toast | logged in, verified | 422 with field messages, 404, 419 |
| /deployments/{key}/active (`deployments.active`) | PATCH | `is_active` true or false (req, `required\|boolean`, sent as JSON) | redirect to `deployments.show` for the key, with a toast | logged in, verified | 422 when missing, 404, 419 |
| /deployments/{key} (`deployments.destroy`) | DELETE | none | redirect to Home with a toast | logged in, verified | 404, 419 |

The key is found by slug text with the same `[a-z0-9-]+` pattern as `deployments.show`, never by model binding, because binding runs `select *` and would load the token. Every route gives a 404 when the scoped lookup (which skips removed rows) finds no row.

**Value sourcing**:

| Action | Value produced / displayed | Source |
|---|---|---|
| Edit page | name, base URL | `deployments` columns, selected by name so the token is never read |
| Edit page | key (read only text) | The `slug` column. The admin already knows it from the add step and the URL, so it is not secret |
| Edit page | token field | Always empty, nothing is read back |
| Save edit | name, base URL | Form inputs. Trailing slashes removed in the form request, as in spec 0005 |
| Save edit | new token or "keep" | Form input. `null` after Laravel trims and empties blank strings means keep |
| Save edit | "URL changed" decision | Compare the submitted URL with the stored `base_url` (a column already selected for the edit) |
| Save edit | `do_not_pull_before` | Set to null when the URL differs or a token was given, else untouched |
| Pause or Resume | new `is_active` | The `is_active` input, not a flip of the stored value, so a double click or two admins cannot undo each other |
| Pause or Resume | button label and action | `deployment.state` on the Deployment page (paused means show Resume), which `BuildDeploymentDetail` already sends |
| Deployment page | Edit and Pause links | Two links built on the server (`editHref`, `activeHref`), sent as a separate prop that the 60 second poll does not reload. The slug stays out of the polled `deployment` data, so spec 0009 AC-9 still holds (the Home page already passes hrefs the same way) |
| Remove | token null, `deleted_at` | Set in code, in one statement |
| Remove | dialog text naming the deployment | `deployment.name` already on the Deployment page and the edit page |
| Toasts | message text and type | Fixed text in the controller, always type `success`, through `Inertia::flash('toast', ...)` as spec 0005 does |
| After remove | redirect target | The `dashboard` route (Home) |

**Key invariants**:
- The stored token is never read by edit, pause or remove. All three write with one scoped query update (`Deployment::query()->where(...)->update([...])`, which skips removed rows), never `save()` or `delete()` on a loaded model. `save()` has no "not removed" guard, so an edit racing a remove could put a token back on a removed row, and `delete()` on a soft delete model writes only `deleted_at`, which would leave the token in place.
- The query builder update skips the `encrypted` cast, so a new token is written with `Crypt::encryptString($token)`, the same call the cast makes and the one `PullDeployment` reads back with `decryptString`. Writing null needs no encryption.
- A removed deployment always has a null token. Remove sets `token` to null and `deleted_at` in the same single statement, so no moment exists where one is set without the other. The edit update is scoped to rows that are not removed, so it cannot undo this.
- The key is never changed and never freed. Unique rules still do not use `withoutTrashed()`.
- Editing and resuming never call PayHub and never queue a job.
- `is_active` is changed only by the pause route, and the edit route never touches it.
- The stored base URL always satisfies the add form rules. Add and edit share one set of rules.
- A pull already running when a deployment is paused finishes and saves its row. A pull running when a deployment is removed checks that the deployment still exists after the call and saves nothing (`PullDeployment` already does this).
- Pause and Resume find the row first (`select id`), then update by id and ignore the count of changed rows, because MySQL reports 0 for an update that changes nothing.

**Security model**: Any logged in, verified user may edit, pause or remove any deployment, because every logged in user is an admin (AGENTS.md). Guests are redirected to login, and CSRF protection stays on. The token is still the only secret and spec 0001's token rules apply in full: encrypted, hidden, never sent, never logged, never passed to a job. `dontFlash(['token'])` already covers the edit form, and the token field uses the same masked input and the same off switches for browser memory as the add form. Removing a deployment here does not revoke the token inside PayHub, so the dialog says so. The edit page is the first page that sends a deployment's full base URL to the browser, a deliberate exception to spec 0009's rule that the full URL stays on the server: an admin cannot fix a URL they cannot see, and the URL is not a secret. No regulated personal data is handled.

**Configuration required**: none.

**Files** (smallest set, layout follows the starter kit):
- `routes/web.php`: extend the existing `deployments` resource to `['create', 'store', 'show', 'edit', 'update', 'destroy']` with the same slug pattern, plus one `PATCH deployments/{deployment}/active` route named `deployments.active`.
- `app/Http/Controllers/DeploymentController.php`: `edit()`, `update()`, `active()` and `destroy()`, each short. `active()` is one line of update plus the toast. Controllers stay thin and call the actions below.
- `app/Http/Requests/UpdateDeploymentRequest.php`: name, base URL and an optional token. It shares the name rule, the URL rules and the trailing slash removal with `StoreDeploymentRequest` through one small trait in `app/Http/Requests/Concerns/` instead of copying them (this closes the spec 0005 follow up). The trait carries only those, never Store's `prepareForValidation` default that turns a missing `is_active` into false, so an edit can never pause a deployment. Token rule: `nullable|string|size:64`.
- `app/Actions/Deployments/UpdateDeployment.php`: reads only `id` and `base_url` for the URL changed check, then writes name, URL, an optional `Crypt::encryptString` token and the cleared wait in one scoped query update.
- `app/Actions/Deployments/RemoveDeployment.php`: one scoped query update that sets `token` to null and `deleted_at` to now, and a 404 when it matches no row.
- `resources/js/pages/deployments/Edit.vue`: the form, built from the same parts as `Create.vue`, plus the Remove area and a `Dialog` (the project has `Dialog`, not `AlertDialog`). On a server error it resets the token field.
- `resources/js/pages/deployments/Show.vue` and `DeploymentController::show()`: an Edit button and a Pause or Resume button in the header, in their own container (the existing actions slot only renders with the badge). The links come from the new `editHref` and `activeHref` prop. The Pause request is sent with `preserveState` and `preserveScroll`, and the poll's error handler sends the admin Home on a 404.

**Critical test scenarios** (for `/test` later, each maps to an acceptance criterion):
- Happy path: edit name and URL, row updated, token column byte for byte unchanged, redirect with toast, verifies **AC-2**, **AC-3**.
- Happy path: a new 64 character token replaces the old one and the stored value differs from the typed one, verifies **AC-3**.
- Failure case: a 63 or 65 character token, a bad URL, an empty name are refused, and the message does not hold the typed token, verifies **AC-2**, **AC-3**.
- Rule: a name only change leaves `do_not_pull_before`, a URL change or a new token clears it, and no HTTP call is made and no job is queued, verifies **AC-4**.
- Happy path: Pause sets `is_active` false, Resume sets it true, the same request sent twice changes nothing more, verifies **AC-5**.
- Rule: a paused deployment is skipped by the dispatcher and refused by the manual pull, an edit leaves it paused, verifies **AC-6**.
- Happy path: Remove soft deletes and nulls the token in one statement, redirects Home, verifies **AC-7**.
- Failure case: after removal the page, edit, update, pause and remove requests give 404, Home shows no card, adding the same key is refused, verifies **AC-8**.
- Security: page data and flashed session input hold no token after a refused edit, and a `DB::listen` check shows no edit, pause or remove query selects the `token` column, verifies **AC-9**.
- Failure case: a remove committed between an edit's lookup and its write leaves the row removed with a null token, verifies **AC-8**.
- Rule: a name only save keeps the wait, a save with an equal but non blank token clears it, a case only URL change clears it, verifies **AC-4**.
- Failure case: Pause sent twice gives two redirects and no 404, a missing `is_active` gives a 422, verifies **AC-5**.
- Auth: a guest is sent to login on all four routes, verifies **AC-10**.

## Build plan

Approach is Tracer Bullet: first one thin thread through every layer (pause, because it is the smallest), then thicken one strand at a time. No migration is needed because the columns exist.

1. Add the `deployments.active` route, the controller method and the Pause or Resume button on the Deployment page, so one click pauses or resumes with a toast, satisfies **AC-5**, **AC-6**, **AC-10**
2. Add the edit route, the controller `edit()` and `update()`, the shared rules trait, `UpdateDeploymentRequest`, `UpdateDeployment` (name and URL only) and `Edit.vue` with an Edit button on the Deployment page, satisfies **AC-1**, **AC-2**, **AC-10**
3. Add the optional token (blank keeps, 64 characters replaces) and the wait clearing rule, keep the token out of page data and flashed input, satisfies **AC-3**, **AC-4**, **AC-9**
4. Add `RemoveDeployment`, the destroy route and method, and the Remove area with its dialog on the edit page, satisfies **AC-7**, **AC-8**, **AC-10**
5. Check keyboard use, error placement, dialog focus, the 375px width and light only, and re check that the scheduler and manual pull skip paused deployments, satisfies **AC-6**, **AC-11**

## Consequences

**Positive**:
- Admins can fix a typo, rotate a token, pause and retire a deployment without touching the database.
- The token has no new read path. It is only ever written, or set to null.
- Add and edit share one set of rules, so they cannot drift apart.

**Negative / tradeoffs**:
- Removing cannot be undone, and the key can never be reused. A removed deployment that was removed by mistake must be added again under a new key, and its old history stays hidden.
- Removing here does not revoke the token in PayHub, so the admin must also revoke it there.
- A wrong new URL or token is only discovered at the next pull, within 5 minutes, because saving never calls PayHub.
- A pull that was already running with the old URL or token can undo an edit: a 429 can set the wait again after the edit cleared it (up to an hour), and a 401 under the old token saves a failed pull. This is accepted for an internal tool, and the next scheduled run uses the new settings.
- If a URL is edited to point at a different PayHub, the old pulls and the new ones sit together under one deployment and are not separated.
- Two admins editing at once means the last save wins, with no warning. This is accepted for a small internal team.
- There is still no record of who edited, paused or removed a deployment. Changing a live payment system's token is the kind of change an audit log should capture, but the scope defers it.

**Neutral**:
- Saved pulls of a removed deployment stay in the database forever, because the retention rule is still deferred.
- The key stays shown as read only text on the edit page, so it is visible to every admin, as it already is in the page URL.

## Follow-up

- [ ] Decide on an audit log for deployment changes before the dashboard holds many live tokens (scope Deferred: audit log of admin actions). Edit, pause and remove make this gap bigger.
- [ ] After building, `/sync` should add the new files to `app/AGENTS.md` and `resources/js/AGENTS.md`, and note in `ui-registry.md` the Remove dialog and header action buttons.
- [ ] Check that the routes `deployments.edit` and the others reach the Wayfinder generated route helpers the pages use.
