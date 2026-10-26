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
| 3 | Data model | Foundation | in-progress |
| 4 | Design system & UI foundation | Foundation | planned |
| 5 | Invite only login | Foundation | planned |
| 6 | Add a deployment | Slice 1 | planned |
| 7 | Pull a summary by hand | Slice 1 | planned |
| 8 | Home page with a deployment card | Slice 1 | planned |
| 9 | Scheduled pulls | Slice 2 | planned |
| 10 | Deployment page | Slice 3 | planned |
| 11 | Recent pull history | Slice 3 | planned |
| 12 | Edit, pause and remove deployments | Slice 3 | planned |
| 13 | Manage staff logins | Slice 3 | planned |

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

### 3. Data model · in-progress
Deployments, saved pulls (good and failed, with the reason and the pull time), and the encrypted token. Money is whole cents. Shaped so many deployments and a retention rule can come later without a breaking change.
**Done when:** the shape holds one reply per pull for each deployment, keeps failed pulls with a reason, and stores a token that is encrypted and never readable back.
- [x] Design it (spec): `/architect data model`
- [ ] Build it: `/develop data model`
  - [ ] Migrations for the four tables (AC-1 to AC-10)
  - [ ] Enums, models, relations and the encrypted token cast (AC-1 to AC-4, AC-7, AC-8)
  - [ ] Factories from the sample JSON and the all or nothing save action (AC-5, AC-6, AC-11)
  - [ ] Pest tests for every critical scenario (AC-1 to AC-11)
- [ ] Verify it: `/check verify data model`
- [ ] Test it: `/test data model`
Spec [0002](../specs/0002-data-model.md)

### 4. Design system & UI foundation · needs a decision
Layout, base components and states (loading, empty, error, stale) so every page feels the same.
**Done when:** the base components cover type, colour, spacing and keyboard focus, and a sample page shows them.
- [ ] Design it (spec): `/architect design system & UI foundation`

### 5. Invite only login · needs a decision
Staff sign in with an account an admin created for them. No public sign up. Everyone who can log in is an admin for now.
**Done when:** a seeded first admin can sign in and out, a stranger cannot register, and every page below needs a login.
- [ ] Design it (spec): `/architect invite only login`

## Slice 1: Pull one deployment end to end

This slice is the walking skeleton: one deployment, added by an admin, pulled by hand, saved, and shown on the home page.

### 6. Add a deployment · needs a decision · GA
An admin adds one deployment: key, name, base URL, token and on or off. The token is stored encrypted and never shown again. Raised to `GA` because it holds secrets for live payment systems.
**Done when:** an admin can save a deployment, the token never appears again on screen, in logs or in the browser, and a bad URL or empty token is refused with a clear message.
- [ ] Design it (spec): `/architect add a deployment`

### 7. Pull a summary by hand · needs a decision
Call `GET /api/central/v1/summary` for one deployment, check the reply against contract v1, and save it with the pull time. Save failed pulls with the reason. Build and test it against the sample JSON and faked replies.
**Done when:** a good reply is saved as is, unknown keys and currencies are accepted, a version other than `v1`, a 401, 403, 404, 429 or 503 is saved as a failed pull, and the last good reply is kept.
- [ ] Design it (spec): `/architect pull a summary by hand`

### 8. Home page with a deployment card · needs a decision
The first real page. A card for the deployment showing today, this month, status and last updated, with money shown per currency.
**Done when:** after a pull the card shows the saved numbers per currency in cents formatted as money, shows "last updated", and shows an unavailable state instead of zero when the last pull failed.
- [ ] Design it (spec): `/architect home page`

## Slice 2: Scheduled pulls

### 9. Scheduled pulls · needs a decision
Pull every active deployment about every 5 minutes, one queued job per deployment so a slow one does not block the others. Short timeout, limited retries, and wait for `Retry-After` on 429.
**Done when:** active deployments are pulled on the schedule without a click, paused ones are skipped, one slow or failing deployment does not delay the rest, and the call rate stays under 6 per minute per token.
- [ ] Design it (spec): `/architect scheduled pulls`

## Slice 3: Deployment page and admin care

### 10. Deployment page
All four windows (all time, today, this month, last 30 days) with link counts, money per currency, paid count, release version and last updated. Links and money are shown as two views with a plain explanation of why they can differ.
**Done when:** every window shows its link counts and per currency money, the two date rules are explained on the page, and an unknown currency still shows.
- [ ] Build it: `/develop deployment page`

### 11. Recent pull history
A list of recent pulls on the deployment page, good and failed, with time and reason, so problems can be seen.
**Done when:** the latest pulls show with result, time and failure reason, and no token or reply secret appears.
- [ ] Build it: `/develop recent pull history`

### 12. Edit, pause and remove deployments
An admin changes a deployment's name or URL, turns it on or off, or removes it. Pausing stops pulls. Removing keeps no usable token.
**Done when:** edits save, a paused deployment is not pulled, a removed deployment disappears from the pages, and the token field never shows the old value.
- [ ] Build it: `/develop edit, pause and remove deployments`

### 13. Manage staff logins
An admin invites and removes staff accounts.
**Done when:** an admin can invite a person and remove a login, and a removed person can no longer sign in.
- [ ] Build it: `/develop manage staff logins`

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
