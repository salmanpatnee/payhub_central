# 0007. Home page with a deployment card: rationale

## Context

> ⚠️ Premise note: The page can show a deployment as Live while its numbers are old, because the stale time limit is not decided yet (it sits in the scope's Deferred list) and scheduled pulls (feature 9) are not built. Live here only means "the latest pull worked". The footer's "Last updated" time and the later scheduler banner are the safeguards. The right fix is to settle the stale limit soon, which is in Follow-up.

**Workspace**: single repo, one app. This is scope feature 8 (Slice 1), the first real page. It follows spec 0002 (data model), 0003 (design system), 0005 (add a deployment) and 0006 (pull by hand). The Home route already exists as a placeholder with an empty state.

- **The job.** Staff glance at the page many times a day to see how payments are going and whether the numbers can be trusted. A wrong number is worse than no number, so a failed or missing pull must never look like zero.
- **What exists.** A deployment can be added (feature 6) and pulled by hand with `php artisan pulls:run {key}` (feature 7). Each good pull is saved with four windows and money rows per kind and currency (spec 0002). The parts `MoneyByCurrency`, `RelativeTime`, `Badge`, `EmptyState` and `PageHeader` are built (spec 0003). Spec 0003 left the unavailable display to this feature.
- **Rules that reach this page.** Different currencies are never added together. Money counts by paid date. Any failed pull keeps the last good reply and marks it. The token never reaches the browser.
- **Scope of this feature.** The scope row asks for a card with today, this month, status and last updated. Combined totals, the stale badge and the deployment page are separate features.
- **Design source.** The engineer chose to build from the existing UI and design reference, so no screenshot or design tool was used.

## Options considered

### Option 1: Server builds a safe card array, one new card part shows it

A small action class turns each deployment into a plain array of display values (state, reason, times, money maps). The controller hands those to Inertia. One new `DeploymentCard` part renders them.

**Pros**:
- Only named fields leave the server, so a token or raw reply cannot leak by accident.
- The state rules (live, unavailable, paused, new) live in one PHP place and are easy to test.
- Fixed query count with eager loading.

**Cons**:
- One more small class and one TypeScript type to keep in step with the PHP array shape.

### Option 2: Pass the models and relations to Inertia and decide in Vue

Send the deployments with their latest pulls, windows and amounts as they are, and let the Vue part pick fields and work out the state.

**Pros**:
- No builder class, the least PHP.

**Cons**:
- Model attributes such as `raw_reply` and `failure_body` ride along in the page data unless every one is hidden, and a future column would leak by default.
- The "which state is this" rule moves into the browser and is harder to test.
- Much more data is sent on every poll.

### Option 3: Render once, fetch card data from a separate JSON endpoint

The page renders the shell, and Vue calls a new JSON endpoint on load and every minute.

**Pros**:
- Clean split between page and data.

**Cons**:
- A new endpoint to authorise, version and test, plus a loading state on first paint, for no gain over Inertia's built in partial reloads.

## Rationale

Spec 0003 gave the shared parts and left only the card and its states to design, so the smallest solution is one new part plus a data builder. Option 1 wins over Option 2 because the page handles payment numbers behind a token, and `AGENTS.md` says nothing secret may reach the browser. Copying named fields into an array makes that rule hold by construction, where hiding attributes on a model relies on remembering every new column. Option 3 adds an endpoint and a first paint spinner that Inertia partial reloads already avoid, which is not worth it for an internal page with a handful of cards.

The engineer chose three behaviours that shape the design. Completed and pending money both show, so the card has two groups per window and `MoneyByCurrency` needs a small size. Paused deployments get their own neutral badge, because a paused card showing Live would hide that nothing is updating. The numbers on an Unavailable or Paused card are not faded: fading text lowers contrast below the 4.5:1 rule from spec 0003, so the badge and the note carry the warning instead. Polling every 60 seconds matches a pull every 5 minutes with a margin, and Inertia handles the pause for hidden tabs.
