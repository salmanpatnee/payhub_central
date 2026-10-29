# 0012. Deployments list page

**Date**: 2026-10-28
**Status**: Accepted

## Summary

The sidebar item "Add deployment" becomes "Deployments". It opens a new page with a table of every deployment: its name (a link to its page), its domain, its status, and three row actions (Edit, Pause or Resume, Remove). "Add deployment" moves to a button at the top of that page. Removing a deployment from the table uses the same confirm dialog as the edit page, which becomes one shared part. Nothing new is stored, and no new secret reaches the browser.

## Requirements

**User stories**:
- As an admin, I want one page that lists all deployments with their status so that I can see at a glance what exists and what is paused.
- As an admin, I want to edit, pause, resume or remove a deployment straight from that list so that I do not have to open each one first.
- As an admin, I want the sidebar to point to that list so that deployments have one clear home in the menu.

**Acceptance criteria** (the contract, each one independently checkable):
- **AC-1**: `GET /deployments` (route `deployments.index`) shows the Deployments page to a logged in, verified user. A guest is sent to login. The page title and its one `h1` read "Deployments", the breadcrumbs are Home, Deployments, and a header button "Add deployment" opens the add form.
- **AC-2**: The page shows one table row for each deployment that is not removed, paused ones included, ordered by name and then by id. The columns are Name, Status and Actions. The Name cell holds the name as a link to that Deployment page, with the domain (host only) under it. The Status cell shows the same badge as Home and the Deployment page (Live, Unavailable, Paused). A deployment that has never pulled has no badge, so its cell shows the muted text "Waiting for the first pull." instead of staying blank.
- **AC-3**: Each row has three actions, labelled "Edit", "Pause" or "Resume" (Resume when paused), and "Remove". Each one has an accessible name that includes the deployment name (for example "Edit PayHub Main"). Edit opens that deployment's edit page. Pause and Resume save at once with no confirm step, stay on this list, keep its scroll, show the toast "Deployment paused." or "Deployment resumed.", and only that row's Pause or Resume button is disabled while its request runs (Remove and other rows stay usable). The row's badge then shows the new state. A stale button is harmless: the request sends the wanted state, not a flip, so a row paused in another tab that still says "Pause" just sends the same state again. Remove opens the confirm dialog (AC-4).
- **AC-4**: The Remove dialog is one shared part used by both this list and the edit page, with the exact words of spec 0011 AC-7 (title "Remove {name}?", the three statements, Cancel focused first, a danger styled Remove with a loading state). Closing it with Escape or Cancel returns focus to the button that opened it. Confirming wipes the token and soft deletes the row as in spec 0011, shows the toast "Deployment removed." and leaves you on this list with that row gone, and focus moves to the page `h1` (the row that opened the dialog no longer exists). Removing from the edit page now also sends you to this list instead of Home. The list holds one dialog instance and a "selected row", not one dialog per row.
- **AC-5**: Pause and Resume return to the page that sent the request, decided by the server from the request's referer path: exactly the list path (`/deployments`) goes to the list, anything else (including no referer) goes to the Deployment page for that key. These are the only two targets, so there is no open redirect and no reliance on the session. From the Deployment page this is the same GET as today, so the toast, the chosen period and the open Recent pulls all stay as spec 0011 AC-5 requires. The same request sent twice gives the same result and never a 404 for a deployment that exists. A missing or non boolean `is_active` still gives a 422.
- **AC-6**: When there are no deployments, the page shows an empty state "No deployments yet." with an "Add deployment" action instead of an empty table.
- **AC-7**: In the sidebar, "Add deployment" is replaced by "Deployments" (list icon, linking to the list). It is highlighted on the list, add, show and edit pages. "Home" is highlighted only on Home. The Home empty state link to the add form stays as it is.
- **AC-8**: The breadcrumbs gain a "Deployments" step that links to the list: the Deployment page reads Home, Deployments, {name}; the edit page reads Home, Deployments, {name}, Edit; the add page reads Home, Deployments, Add deployment.
- **AC-9**: The page data for each row holds only an id, the name, the domain (host only, empty when it cannot be read), the state, and three ready made paths: `href` (the Deployment page, which is also the path Remove sends DELETE to), `editHref` and `activeHref`. It holds no token, no full base URL and no reason text. The slug appears only inside those paths, never as its own field. The list is built with exactly two queries that do not grow with the number of rows (the deployments, and the newest pull of each with only `pulls.id, pulls.deployment_id, pulls.pulled_at, pulls.status`), and none selects the `token` column.
- **AC-10**: If Pause, Resume or Remove gets a 404 because the deployment was already removed in another tab, no error screen appears and no toast shows. On the list the dialog closes and the rows reload. On the edit page the admin is sent to the list. One shared handler does this for the row toggle and the shared dialog.
- **AC-12**: Three older redirects now end at the list. Saving a new deployment (spec 0005) lands on the list with the toast "Deployment added." And if the Deployment page's 60 second poll gets a 404 because the deployment was removed in another tab, the admin is sent to the list, not Home (spec 0011 AC-11).
- **AC-11**: At 375px the table scrolls sideways inside its own box and the page does not. Everything works with the keyboard alone, the table has a screen reader caption and column headers, the page stays light only, and it follows spec 0003.

## Decision

**Chosen option**: Option 1: A new Deployments page that reuses the existing routes.

Add `deployments.index`, a small action that builds the rows, a `Index.vue` page, and a shared `RemoveDeploymentDialog`. Pause and Remove return to the right page, and the sidebar and breadcrumbs point at the list.

**Implementation skills**: none installed (see spec 0001).

## Rationale

Reasoning and options: see [rationale.md](rationale.md).

## Feature design

**Data model sketch**: no change. Uses `deployments` and `pulls` from spec 0002.

**State transitions**: none new. The existing on, paused and removed states of spec 0011 apply.

**API surface**:

| Endpoint | Method | Key inputs | Key outputs | Auth | Key errors |
|---|---|---|---|---|---|
| /deployments (`deployments.index`) | GET | none | Inertia page `deployments/Index` with `deployments: [{id, name, domain, state, href, editHref, activeHref}]` | logged in, verified | login redirect |
| /deployments/{key}/active (`deployments.active`) | PATCH | `is_active` true or false (req) | redirect to the list when the referer path is `/deployments`, else to the Deployment page, with a toast | logged in, verified | 422, 404, 419 |
| /deployments/{key} (`deployments.destroy`) | DELETE | none | redirect to `deployments.index`, with a toast | logged in, verified | 404, 419 |
| /deployments (`deployments.store`) | POST | unchanged (spec 0005) | redirect to `deployments.index`, with a toast (was Home) | logged in, verified | unchanged |

The edit page and `deployments.update` are unchanged. The key lookups stay by slug text with the `[a-z0-9-]+` pattern, never by model binding.

**Value sourcing**:

| Action | Value produced / displayed | Source |
|---|---|---|
| List page | which rows | `deployments` rows that are not removed (the soft delete scope), ordered by `name` then `id` |
| List page | name | `deployments.name` |
| List page | domain | `DeploymentStatus::domain()` on `base_url` (host only, as Home does) |
| List page | state | `DeploymentStatus::state()` from `is_active` and the newest pull of any status (`latestPull`), as Home and the Deployment page do |
| List page | badge and "Waiting for the first pull." text | `statusBadge()` in `lib/deploymentStatus.ts` (null for `new`), and the same words `statusNotes()` already uses for `new` |
| List page | the three paths | Built on the server from the slug with `route(..., absolute false)`, like `href` on Home. The slug is not sent as data. Remove sends DELETE to `href` (the same URL) |
| Pause or Resume | new `is_active` | The `is_active` input, not a flip (spec 0011) |
| Pause or Resume | button label | `state === 'paused'` on the row |
| Pause or Resume | where to go after | The path of the request's referer header: equal to the list path means the list, anything else or missing means `deployments.show` for the key |
| Pause or Resume | which button is busy | A `togglingId` ref on the page holding the row id of the request in flight |
| Remove | dialog name | `name` on the selected row (or on the edit page) |
| Remove | where to go after | `deployments.index` |
| Remove | where focus goes after | The page `h1` |
| 404 on pause or remove | recovery | List: close the dialog and `router.reload({ only: ['deployments'] })`. Edit page: `router.visit` the list. Done by `onHttpException` returning false, so no error screen shows |
| Add a deployment | where to go after | `deployments.index` |
| Deployment page poll 404 | where to go | `deployments.index` |
| Sidebar | highlight | A path matches when it equals the item's path or starts with it plus `/`, for every item |

**Key invariants**:
- The list never reads or sends the token. It selects `id`, `name`, `slug`, `base_url`, `is_active` only, and eager loads `latestPull` with the four safe columns in AC-9.
- The slug leaves PHP only inside ready made paths, so nothing gets a new place to hold the key as data.
- The pause redirect never trusts the referer as a target. It only compares its path to the list path and then picks one of two fixed routes.
- State comes only from `DeploymentStatus`, so the list, Home and the Deployment page can never show different states for the same deployment.
- Removing still wipes the token and sets `deleted_at` in one statement (spec 0011). Only the redirect target changes.
- A removed deployment is never listed.

**Security model**: Any logged in, verified user may open the list and use its actions, because every logged in user is an admin (AGENTS.md). Guests are sent to login and CSRF protection stays on. No new secret is read or sent, and no regulated personal data is handled.

**Configuration required**: none.

**Files** (smallest set, layout follows the starter kit):
- `routes/web.php`: add `index` to the existing `deployments` resource.
- `app/Actions/Deployments/BuildDeploymentList.php`: one query for rows plus the eager loaded newest pull, returns the plain arrays above. Uses `DeploymentStatus`.
- `app/Http/Controllers/DeploymentController.php`: `index()`; `active()` picks the list or the Deployment page from the referer path (AC-5); `destroy()` and `store()` redirect to `deployments.index`.
- `resources/js/pages/deployments/Index.vue`: header with the Add button, the table, the empty state, one Remove dialog with a selected row, the `togglingId` busy state, and the 404 handling.
- `resources/js/components/RemoveDeploymentDialog.vue`: the dialog moved out of `Edit.vue`. Props: `v-model:open`, `name`, `removeHref`. It emits `missing` when the delete gets a 404, and the parent decides what to do (list: reload, edit page: go to the list). Focus returns to the opener on cancel through the dialog library's focus handling.
- `resources/js/pages/deployments/Edit.vue`: uses the shared dialog. Breadcrumbs gain "Deployments".
- `resources/js/pages/deployments/Show.vue` and `Create.vue`: breadcrumbs gain "Deployments". The Show poll's 404 handler goes to the list.
- `resources/js/components/AppSidebar.vue` and `NavMain.vue`: "Deployments" item, and whole segment prefix matching for every item so it stays highlighted on child pages. `AppSidebar` imports `index` from `@/routes/deployments`, which exists only after `npm run build` regenerates the Wayfinder routes. The `create` import stays for the Home empty state and the header button.
- `resources/js/types/deployment.ts`: a `DeploymentRow` type that mirrors the action's array.

**Critical test scenarios** (for `/test` later, each maps to an acceptance criterion):
- Happy path: the list shows every active and paused deployment by name, none removed, with the four paths and no token, verifies **AC-2**, **AC-9**.
- Happy path: Pause from the list redirects back to the list and the row shows Paused, Resume reverses it, verifies **AC-3**, **AC-5**.
- Rule: Pause from the Deployment page still redirects to that page. With no referer, or a referer from another page, it goes to the Deployment page, never to Home or a stale session page, verifies **AC-5**.
- Rule: saving a new deployment lands on the list, verifies **AC-12**.
- Happy path: Remove from the list wipes the token, soft deletes the row, redirects to the list, and the row is gone. Removing from the edit page also lands on the list, verifies **AC-4**.
- Failure case: Pause or Remove for an already removed key gives a 404, and the page recovers by reloading, verifies **AC-10**.
- Edge: no deployments shows the empty state with an Add action, verifies **AC-6**.
- Security: a `DB::listen` check shows the list runs a fixed number of queries and none selects the `token` column, verifies **AC-9**.
- Auth: a guest is sent to login for the list, verifies **AC-1**.
- Manual: sidebar highlight, breadcrumbs, 375px table scroll, keyboard use and dialog focus return, verifies **AC-7**, **AC-8**, **AC-11**.

## Build plan

Approach is Tracer Bullet: first one thin thread through every layer (the list with name, domain and status, reachable from the sidebar), then thicken one strand at a time. No migration is needed.

1. Add the `deployments.index` route, `BuildDeploymentList`, the controller `index()`, the `DeploymentRow` type, a first `Index.vue` with the table of Name and Status, and the sidebar item with prefix highlight, satisfies **AC-1**, **AC-2**, **AC-7**, **AC-9**
2. Add the Actions column: Edit link, Pause or Resume with its per row busy state, and make `active()` pick the list or the Deployment page from the referer path, satisfies **AC-3**, **AC-5**
3. Move the Remove dialog into `RemoveDeploymentDialog`, use it in `Edit.vue` and `Index.vue`, send `destroy()` to the list, move focus to the `h1` after a remove, and handle a 404 in the shared way, satisfies **AC-4**, **AC-10**
4. Add the empty state and the "Add deployment" header button, add the "Deployments" step to the breadcrumbs of the add, show and edit pages, and send `store()` and the Show poll's 404 to the list, satisfies **AC-6**, **AC-8**, **AC-12**
5. Check the 375px table scroll, keyboard use, dialog focus return and light only, satisfies **AC-11**

## Consequences

**Positive**:
- Every deployment, including paused and never pulled ones, is visible and manageable in one place.
- One Remove dialog means one set of warnings to keep right.
- Status can never disagree between Home, the list and the Deployment page, because all three use the same rule.

**Negative / tradeoffs**:
- This changes two details of spec 0011 (the pause redirect and the remove redirect). That spec should be updated so the record matches the code.
- The list does not refresh itself, so a status badge can be out of date until the page is opened again or an action runs.
- There is no pagination or search. The list loads all deployments at once, as Home does. This is fine for tens of deployments and should be revisited if the number grows into the hundreds.
- The pause redirect depends on the referer. Browsers send it on same site requests by default, but when it is missing a pause from the list lands on the Deployment page, which is less convenient.
- Removing and pausing from a list is one click away from a destructive mistake. The confirm dialog guards Remove, but Pause has no confirm, by choice.

**Neutral**:
- The Home page keeps its own empty state link to the add form.
- There is still no record of who edited, paused or removed a deployment (scope Deferred: audit log).

## Follow-up

- [ ] Update the earlier specs this one changes: spec 0011 AC-1 (breadcrumbs), AC-5 (pause returns to the page that sent it), AC-7 (removal goes to the list) and AC-11 (poll 404 goes to the list); the Deployment page breadcrumbs in spec 0009; and spec 0005 (saving lands on the list).
- [ ] Decide on search and pagination for the list before the number of deployments reaches the hundreds.
- [ ] After building, `/sync` should add the new files to `app/AGENTS.md` and `resources/js/AGENTS.md`, and note the table and shared dialog in `ui-registry.md`.
