# Scope: PayHub Central Dashboard

A separate, read only web app for internal staff. It asks every PayHub deployment for a small payment summary every 5 minutes, saves the answers, and shows them in one place. It never changes anything in PayHub and never sees client names, emails or reference codes. The agreement with PayHub is `docs/central-dashboard-api.md` (contract v1), with `docs/central-dashboard-sample.json` as the sample reply.

**Build approach:** Tracer Bullet (build one thin working thread through every layer first, then thicken one strand at a time).
**Workflow:** Beta (after develop, run check verify, then test). The project default level of rigor. `/architect` is the recommended first stop for a feature with a real decision, but skippable when you already know the build. Any feature can carry its own tag (e.g. `· GA`) to do more or less.

_These are recommendations to keep your build orderly, not requirements. Skip anything that does not fit: if you already know how to build a feature, use `/develop` and skip `/architect`. You decide when a feature is `done`._

**Rules every feature must follow** (from the brief, kept here so no slice forgets them):
- Never add different currencies together. Show each one on its own.
- Links are counted by created date, money by paid date. Show them as two views and explain it on screen.
- Each reply is a full recount. Combine deployments by adding the latest good reply of each, never replies over time.
- Accept unknown extra keys and currency keys. Any `contract_version` other than `v1` is an error.
- Any reply that is not 200 means "unavailable": keep the last good reply, mark it stale, never show zero.
- On 429, wait for `Retry-After`. PayHub allows 6 calls per minute per token.
- Money is whole cents everywhere, no floats.
- Tokens are stored encrypted, never shown again after saving, never logged, never sent to the browser.

## At a glance

| # | Feature | Phase | Status |
|---|---------|-------|--------|
| 1 | Stack & architecture | Foundation | done |
| 2 | Coding standards & tooling | Foundation | done |
| 3 | Data model | Foundation | done |
| 4 | Design system & UI foundation | Foundation | done |
| 5 | Invite only login | Foundation | done |
| 6 | Add a deployment | Slice 1 | done |
| 7 | Pull a summary by hand | Slice 1 | done |
| 8 | Home page with a deployment card | Slice 1 | done |
| 9 | Scheduled pulls | Slice 2 | done |
| 10 | Deployment page | Slice 3 | done |
| 11 | Recent pull history | Slice 3 | done |
| 12 | Edit, pause and remove deployments | Slice 3 | in-progress |
| 13 | Manage staff logins | Slice 3 | in-progress |
| 14 | Deployments list page | Slice 3 | done |

## Foundations

### 1. Stack & architecture · done
Record the stack from the brief (Laravel, Vue with Inertia, Tailwind, MySQL, queued jobs) as a decision, then scaffold a project that boots.
**Done when:** the stack is recorded in a spec and the empty scaffold boots locally and passes its build.
- [x] Decide the stack (spec): `/architect stack & architecture`
- [x] Scaffold from the decision: `/develop stack & architecture`
- [ ] Verify it: `/check verify stack & architecture` (skipped)
- [ ] Test it: `/test stack & architecture` (skipped)
Spec [0001](../specs/0001-stack-and-architecture/index.md) · code in the repo root (`app/`, `resources/js/`, `tests/`)

### 2. Coding standards & tooling
Capture conventions, then install lint, format and pre commit checks from the real scaffolded project.
**Done when:** root `AGENTS.md` reflects the real stack, and lint, format and pre commit run clean.
- [x] Capture conventions + tooling choices: `/audit`
- [x] Install lint, format and pre commit: `/develop tooling`
code in `vite.config.ts`, `.vite-hooks/`, `package.json`

### 3. Data model · done
Deployments, saved pulls (good and failed, with the reason and the pull time), and the encrypted token. Money is whole cents. Shaped so many deployments and a retention rule can come later without a breaking change.
**Done when:** the shape holds one reply per pull for each deployment, keeps failed pulls with a reason, and stores a token that is encrypted and never readable back.
- [x] Design it (spec): `/architect data model`
- [x] Build it: `/develop data model`
  - [x] Migrations for the four tables (AC-1 to AC-10)
  - [x] Enums, models, relations and the encrypted token cast (AC-1 to AC-4, AC-7, AC-8)
  - [x] Factories from the sample JSON and the all or nothing save action (AC-5, AC-6, AC-11)
  - [x] Pest tests for every critical scenario (AC-1 to AC-11)
- [ ] Verify it: `/check verify data model` (skipped)
- [ ] Test it: `/test data model` (skipped)
Spec [0002](../specs/0002-data-model.md) · code in `app/Models/`, `app/Enums/`, `app/Actions/Pulls/`, `database/migrations/`, `database/factories/`, `tests/Feature/DataModel/`

### 4. Design system & UI foundation · done
Layout, base components and states (loading and empty now; stale and unavailable are designed in later features) so every page feels the same.
**Done when:** the base components cover type, colour, spacing and keyboard focus, and the Home page uses them (no preview artifact, skipped by the engineer).
- [x] Design it (spec): `/architect design system & UI foundation`
- [x] Build it: `/develop design system & UI foundation`
  - [x] Tokens, Instrument Sans font, light only and the sidebar shell with banner (AC-1, AC-2, AC-3, AC-9, AC-10, AC-12)
  - [x] Page header, empty state and the Home page thread (AC-4, AC-7, AC-13)
  - [x] Money, time and stat card parts with formatter tests (AC-5, AC-6, AC-7)
  - [x] Badge variants, table part, keyboard and phone pass (AC-8, AC-10, AC-11)
  - [x] Preview artifact: skipped, engineer did not want one (AC-13)
- [x] Verify it: checked by hand in the browser on 2026-10-27 (focus, 375px, no dark mode), no `/check verify` run
- [ ] Test it: `/test design system & UI foundation` (skipped, engineer asked for no tests yet)
Spec [0003](../specs/0003-design-system-ui-foundation.md) · code in `resources/css/app.css`, `resources/js/components/`, `resources/js/lib/`, `resources/js/layouts/`

### 5. Invite only login · done
Staff sign in with an account an admin created for them. No public sign up and no forgot password. Everyone who can log in is an admin for now.
**Done when:** a seeded first admin can sign in and out, a stranger cannot register, and every page below needs a login.
- [x] Design it (spec): `/architect invite only login`
- [x] Build it: `/develop invite only login`
  - [x] Prove the kit login thread with the seeded admin (AC-1, AC-2, AC-4, AC-5, AC-7)
  - [x] Redirect `/` to the dashboard and remove the Welcome page (AC-3, AC-10)
  - [x] Lock the profile email and put profile routes behind verified (AC-8)
  - [x] Remove delete account, refresh route helpers, fix old tests (AC-9, AC-10)
- [ ] Verify it: `/check verify invite only login` (skipped)
- [ ] Test it: `/test invite only login` (skipped)
Spec [0004](../specs/0004-invite-only-login/index.md) · code in `routes/`, `app/Http/Controllers/Settings/`, `resources/js/pages/settings/`

## Slice 1: Pull one deployment end to end

This slice is the walking skeleton: one deployment, added by an admin, pulled by hand, saved, and shown on the home page.

### 6. Add a deployment · done · GA
An admin adds one deployment: key, name, base URL, token and on or off. The token is stored encrypted and never shown again. Raised to `GA` because it holds secrets for live payment systems.
**Done when:** an admin can save a deployment, the token never appears again on screen, in logs or in the browser, and a bad URL or empty token is refused with a clear message.
- [x] Design it (spec): `/architect add a deployment`
- [x] Build it: `/develop add a deployment`
  - [x] Thin thread: routes, controller, plain form, save and redirect Home with the toast (AC-1, AC-2, AC-7, AC-9)
  - [x] Full rules for key, name, https URL and 64 character token, with field messages (AC-3 to AC-6)
  - [x] Keep the token from leaking: no flashed input, empty field after an error, no token in page data (AC-8)
  - [x] Sidebar item, Home empty state link, keyboard and phone pass (AC-10)
- [x] Verify it: `/check verify add a deployment` (steps in verify.md ticked by the engineer, 2026-10-27)
- [ ] Test it: `/test add a deployment`
- [ ] Review it (fresh model): `/check review add a deployment`
- [ ] Document it: `/document add a deployment`
Spec [0005](../specs/0005-add-a-deployment/index.md) · code in `app/Http/Controllers/DeploymentController.php`, `app/Http/Requests/StoreDeploymentRequest.php`, `resources/js/pages/deployments/Create.vue`

### 7. Pull a summary by hand · done
Call `GET /api/central/v1/summary` for one deployment, check the reply against contract v1, and save it with the pull time. Save failed pulls with the reason. Build and test it against the sample JSON and faked replies.
**Done when:** a good reply is saved as is, unknown keys and currencies are accepted, a version other than `v1`, a 401, 403, 404, 429 or 503 is saved as a failed pull, and the last good reply is kept.
- [x] Design it (spec): `/architect pull a summary by hand`
- [x] Build it: `/develop pull a summary by hand`
  - [x] Thin thread: `pulls:run` command, the pull action and the call, a good pull saved from the sample JSON (AC-1, AC-2, AC-3)
  - [x] Failed pulls: status mapping, redirect, timeout, network, and the 429 wait (AC-4, AC-5, AC-7)
  - [x] Reply checks: version, key, required fields, lengths and sums, with the 2 KB body cut (AC-6)
  - [x] Guards: paused, waiting, lock, removed, unreadable token, no token leaks, last good kept (AC-8 to AC-11)
- [x] Verify it: `/check verify pull a summary by hand` (all steps in verify.md ticked, real pull on payhub-staging good, 2026-10-27)
- [x] Test it: `/test pull a summary by hand` (121 Pest tests in tests/Unit/Pulls and tests/Feature/Pulls, all passing, 2026-10-27)
Spec [0006](../specs/0006-pull-a-summary-by-hand/index.md) · code in `app/Actions/Pulls/PullDeployment.php`, `app/Actions/Pulls/FetchSummary.php`, `app/Console/Commands/PullDeploymentCommand.php`

### 8. Home page with a deployment card
The first real page. A card for the deployment showing today, this month, status and last updated, with money shown per currency.
**Done when:** after a pull the card shows the saved numbers per currency in cents formatted as money, shows "last updated", and shows an unavailable state instead of zero when the last pull failed.
- [x] Design it (spec): `/architect home page`
- [x] Build it: `/develop home page`
  - [x] Thin thread: `HomeController`, route, a plain card with Today completed money (AC-1, AC-3)
  - [x] Card builder with safe fields, both windows, fixed query count (AC-3, AC-4, AC-9, AC-12)
  - [x] Live, Unavailable, Paused and new states with notes and "No data yet" (AC-2, AC-5, AC-6, AC-7)
  - [x] Final `DeploymentCard` layout, grid, footnote, headings (AC-10, AC-11)
  - [x] 60 second polling (AC-8)
  - [x] Rework to the Balanced card: builder with domain and three periods, new card, period switch, warnings, 2 column grid (AC-3, AC-9, AC-10, AC-11, AC-13, AC-14)
- [x] Verify it: `/check verify home page` (all 14 ACs met, real page checked, 2026-10-28)
- [ ] Test it: `/test home page`
Spec [0007](../specs/0007-home-page/index.md) � code in `app/Actions/Home/BuildDeploymentCards.php`, `app/Http/Controllers/HomeController.php`, `resources/js/components/DeploymentCard.vue`, `resources/js/pages/Dashboard.vue`

## Slice 2: Scheduled pulls

### 9. Scheduled pulls · done
Pull every active deployment about every 5 minutes, one queued job per deployment so a slow one does not block the others. Short timeout, limited retries, and wait for `Retry-After` on 429.
**Done when:** active deployments are pulled on the schedule without a click, paused ones are skipped, one slow or failing deployment does not delay the rest, and the call rate stays under 6 per minute per token.
- [x] Design it (spec): `/architect scheduled pulls`
- [x] Build it: `/develop scheduled pulls`
  - [x] Thin thread: pass the source through `PullDeployment`, the job, the dispatcher and its schedule entry, a scheduled pull saved (AC-1, AC-2)
  - [x] Due rules, one unique job per deployment, quiet ends for refused jobs (AC-1, AC-3, AC-6)
  - [x] Safe failures: no retry, 20 second limit, 1 hour unique backstop, fixed log lines (AC-3, AC-4, AC-5)
  - [x] Cron started worker with the 2 minute overlap expiry (AC-7)
  - [x] Heartbeat and the banner: `SchedulerHealth` and the shared `scheduler` prop, `schedule:work` for local dev (AC-8)
  - [x] Leak check: job payload, `failed_jobs`, logs, page data (AC-9)
- [x] Verify it: `/check verify scheduled pulls`
- [x] Test it: `/test scheduled pulls`
Spec [0008](../specs/0008-scheduled-pulls/index.md) � code in `app/Actions/Pulls/DispatchDuePulls.php`, `app/Jobs/PullDeploymentJob.php`, `app/Actions/Scheduler/SchedulerHealth.php`, `routes/console.php`

## Slice 3: Deployment page and admin care

### 10. Deployment page � done
All four windows (all time, today, this month, last 30 days) with link counts, money per currency, paid count and last updated. The release version is not shown (engineer's choice, spec 0009). Links and money are shown as two views with a plain explanation of why they can differ.
**Done when:** every window shows its link counts and per currency money, the two date rules are explained on the page, and an unknown currency still shows.
- [x] Design it (spec): `/architect deployment page`
- [x] Build it: `/develop deployment page`
  - [x] Thin thread: route by slug, controller, action, plain page, Home card name link (AC-1, AC-2)
  - [x] Shared status rules on both sides and the page header (AC-3)
  - [x] Full page data, period switch, summary cards, link outcomes, All periods table and the range line (AC-4, AC-5, AC-6, AC-9, AC-12)
  - [x] Explanations and the no data, unavailable, paused and new states (AC-7, AC-8)
  - [x] Polling, phone and keyboard pass, `create` key rule and spec 0007 slug update (AC-10, AC-11, AC-2, AC-9)
- [x] Verify it: `/check verify deployment page`
- [ ] Test it: `/test deployment page`
Spec [0009](../specs/0009-deployment-page/index.md) � code in `app/Actions/Deployments/`, `resources/js/pages/deployments/Show.vue`, `resources/js/lib/deploymentStatus.ts`

### 11. Recent pull history
A list of recent pulls on the deployment page, good and failed, with time and reason, so problems can be seen.
**Done when:** the latest pulls show with result, time and failure reason, and no token or reply secret appears.
- [x] Design it (spec): `/architect recent pull history`
- [x] Build it: `/develop recent pull history`
  - [x] Thin thread: `BuildRecentPulls`, lazy `pulls` prop, plain list on the page (AC-1, AC-5)
  - [x] Safe fields, stable order and the one query (AC-6, AC-7)
  - [x] The table: caption, Good and Failed badges, Scheduled or Manual, reason rules (AC-2, AC-3)
  - [x] Placement in every state, "No pulls yet." and the closing note moved (AC-4)
  - [x] Poll check, phone and keyboard pass, page checks again (AC-3, AC-5, AC-8)
- [x] Verify it: `/check verify recent pull history`
- [ ] Test it: `/test recent pull history`
Spec [0010](../specs/0010-recent-pull-history.md) - code in `app/Actions/Deployments/BuildRecentPulls.php`, `resources/js/pages/deployments/Show.vue`

### 12. Edit, pause and remove deployments � in-progress
An admin changes a deployment's name or URL, turns it on or off, or removes it. Pausing stops pulls. Removing keeps no usable token.
**Done when:** edits save, a paused deployment is not pulled, a removed deployment disappears from the pages, and the token field never shows the old value.
- [x] Design it (spec): `/architect edit, pause and remove deployments`
- [x] Build it: `/develop edit, pause and remove deployments`
  - [x] Thin thread: the pause route, controller method and Pause or Resume button (AC-5, AC-6, AC-10)
  - [x] Edit page for name and URL with the shared rules (AC-1, AC-2, AC-10)
  - [x] Optional token, wait clearing, no token in page data (AC-3, AC-4, AC-9)
  - [x] Remove with its confirm dialog (AC-7, AC-8, AC-10)
  - [ ] Phone, keyboard and dialog pass, paused skip re check (AC-6, AC-11)
- [x] Verify it: `/check verify edit, pause and remove deployments`
- [ ] Test it: `/test edit, pause and remove deployments`
Spec [0011](../specs/0011-edit-pause-remove-deployments.md) - code in `app/Http/Controllers/DeploymentController.php`, `app/Actions/Deployments/UpdateDeployment.php`, `RemoveDeployment.php`, `resources/js/pages/deployments/Edit.vue`

### 13. Manage staff logins � in-progress
An admin adds staff logins with a password they type, edits a name or email, sets a new password, and removes a login.
**Done when:** an admin can add a person and remove a login, and a removed person can no longer sign in.
- [x] Design it (spec): `/architect manage staff logins`
- [ ] Build it: `/develop manage staff logins`
  - [ ] Thin thread: the Staff route, list page and sidebar item (AC-1)
  - [ ] Add staff with the shared email and password rules (AC-2, AC-3, AC-8, AC-9)
  - [ ] Edit name and email, set a new password with sessions ended (AC-4, AC-5)
  - [ ] Remove with its dialog, own row guard, last admin safety and auth.session (AC-6, AC-7)
  - [ ] Phone and keyboard pass (AC-10)
- [ ] Verify it: `/check verify manage staff logins`
- [ ] Test it: `/test manage staff logins`
Spec [0013](../specs/0013-manage-staff-logins.md) - code in `app/Http/Controllers/StaffController.php`, `app/Actions/Staff/`, `resources/js/pages/staff/`

### 14. Deployments list page
A Deployments page in the sidebar lists every deployment in a table with its status and the actions Edit, Pause or Resume and Remove. Add deployment moves to a button on that page.
**Done when:** the sidebar shows Deployments instead of Add deployment, the page lists all deployments with status, and each row can be edited, paused, resumed or removed without opening the deployment first.
- [x] Design it (spec): `/architect deployments list page`
- [x] Build it: `/develop deployments list page`
  - [x] Thin thread: the list route, row action and page with Name and Status, plus the sidebar item (AC-1, AC-2, AC-7, AC-9)
  - [x] Row actions: Edit, Pause or Resume, and the pause redirect (AC-3, AC-5)
  - [x] Shared Remove dialog, remove redirect and 404 handling (AC-4, AC-10)
  - [x] Empty state, Add button, breadcrumbs and the add and poll redirects (AC-6, AC-8, AC-12)
  - [x] Phone, keyboard and dialog focus pass (AC-11)
- [x] Verify it: `/check verify deployments list page`
- [ ] Test it: `/test deployments list page`
Spec [0012](../specs/0012-deployments-list-page/index.md) - code in `app/Actions/Deployments/BuildDeploymentList.php`, `resources/js/pages/deployments/Index.vue`, `resources/js/components/RemoveDeploymentDialog.vue`

## Deferred

Out of scope for the current build pass, kept so the plan stays honest.
- **Several deployments and combined totals**: combined totals per currency for each window, plus a card per deployment. This is build step 4 of the brief · needs a decision
- **Stale and failing badges**: a clear badge when a deployment has had no good reply for a while (the brief suggests 15 minutes). The time limits are still to be settled · needs a decision
- **Failure alerts**: tell staff when a deployment keeps failing. The channel is not chosen yet · needs a decision
- **Token replacement without a gap**: use PayHub's current and next token slots · needs a decision
- **Pull history retention**: keep every reply, or the latest few plus a daily summary · needs a decision
- **Viewer role and per deployment access**: staff who only look, or only see some deployments · needs a decision
- **Error monitoring**: report crashes to Sentry
- **Audit log of admin actions**: who added, changed, paused or removed what
- **Accessibility target**: WCAG AA across all pages
- **Automated checks (CI)**: run tests and the build on every push, from spec 0001

## Legend

**The decision box.** Every feature carries exactly one, the sub task whose label ends with `(spec)`. Its wording varies (`Design it (spec)` normally, `Decide the stack (spec)` on Stack & architecture), so skills locate it by that `(spec)` suffix, never by an exact label. Every other box is an execution box and `/architect` never ticks one.

**Feature lifecycle**: the scope updates as a feature moves; each row is what it shows and who sets it:

| State | Set by | The feature shows |
|---|---|---|
| `planned` · needs a decision | `/scope` | one box: `Design it (spec): /architect <feature>` |
| `in-progress` (designed) | **`/architect` at spec capture** | `Design it` ticked; spec linked; `Build it: /develop <feature>` + **2 to 5 milestones**; the tier's closing boxes (`Verify it` Alpha+, `Test it` Beta+, `Review it` + `Document it` GA); any surfaced follow up enrolled |
| `in-progress` (building) | `/develop` | milestone sub boxes tick one by one; code pointer filled |
| `in-progress` (verified) | `/check verify` | `Build it` + milestones ticked; `Verify it` ticked |
| `done` | **you, when you decide it is** (any skill sets it when you say so); `/sync` reconciles | boxes you ran ticked, skipped ones marked skipped; the tier's last stage (`Prototype` → after `/develop`; `Alpha` → after `/check verify`; `Beta`/`GA` → after `/test`) is the suggested point to call it done; `/sync` captures conventions |

- **Next step** = the first unticked box (always a command or a tracked milestone).
- **needs a decision** = run `/architect` first; otherwise straight to `/develop` (or `/audit` for standards & tooling). The tag drops once the spec is captured.
- **Atomic build tasks live in the spec's `## Build plan`, not here**: the scope carries only the milestone rollup.
- **Status** `planned` → `in-progress` → `done`, plus `existing` (pre workflow) and `dropped` (de scoped, kept for history).
- **Approach tag** beside a heading (e.g. `· Facade`) overrides the project default for that feature; no tag = inherits it.
- **Workflow tier tag** beside a heading (e.g. `· GA`, `· Prototype`) sets that one feature's rigor above or below the project default; no tag inherits the default. It decides the feature's check boxes and each skill's next suggestion.
- **Workflow** (header line) is the project default, what runs after `/develop`: **Prototype** = nothing (trust develop's own build time self check); **Alpha** = `/check verify`; **Beta** = `/check verify` then `/test`; **GA** = adds a fresh model `/check review` then `/document`. A feature built on an unratified decision (an `Assumed` spec) stays flagged, but that never blocks `done`.
- **Pointer line** (`spec <n> · code in <path>`): the spec link added by `/architect`, the code path by `/develop`.
