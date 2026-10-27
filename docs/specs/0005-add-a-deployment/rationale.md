# 0005. Add a deployment: rationale

## Context

Scope feature 6 is the first step of Slice 1: before anything can be pulled, shown or scheduled, a deployment must exist. The table, the model, the encrypted `token` cast and the unique `slug` already exist from spec 0002 (the `Deployment` model also lowercases the slug on write). Login (spec 0004) is built, and every logged in user is an admin, so this feature adds no role check. The design system (spec 0003) provides the sidebar shell, form parts and toasts.

The token opens a live payment system, so this feature is tiered `GA`. Spec 0001 already fixed the rules this feature must honor: base URLs are `https://` only, tokens are encrypted, hidden from serialization, never sent to the browser, never logged, and a blank token field on edit keeps the old token (that edit part belongs to feature 12). The PayHub contract says a token is a 64 character random string and the key is a short id such as `payhub1`.

One leak that is easy to miss: when a form is refused, Laravel flashes the typed input into the session, and this project stores sessions in the database. Without a guard, a mistyped URL would write the plain token into the `sessions` table.

Prerequisites with no spec yet: none. Edit, pause and remove (feature 12) and the audit log (deferred in the scope) are separate.

## Options considered

### Option 1: Own add page, save only

A single page at `/deployments/create` with five fields. Saving writes the row and goes to Home. No call to PayHub.

**Pros**:
- Smallest change, and it fits the Tracer Bullet slice (add, pull by hand, show a card).
- A PayHub that is down never blocks adding a deployment.

**Cons**:
- A wrong URL or token is only noticed at the first pull in feature 7.
- Home shows no list until feature 8 builds the card, so the toast is the only proof of success for a while.

### Option 2: Add page that tests the connection before saving

Same page, but saving first calls `/api/central/v1/summary` and refuses the save when it fails.

**Pros**:
- The admin learns about a bad URL or token at once.

**Cons**:
- Repeats the call, the contract check and the failure mapping that feature 7 owns.
- A PayHub outage or a 429 blocks adding a deployment.
- The token would be used in a web request, widening the places it can leak.

### Option 3: A Deployments list page with an Add button

A list page now, with the form on the same page or behind a button.

**Pros**:
- One home for deployments from the start.

**Cons**:
- Overlaps feature 8 (the card), feature 10 (deployment page) and feature 12 (edit, pause, remove), and makes this slice bigger.
- Needs list, empty state and pagination decisions that are not needed yet.

## Rationale

The decision record for this feature is short, so it stays here in one file.

The scope says feature 7 is where the first call, the contract check and every failure code live, so a test call here would build the same thing twice and tie adding a deployment to PayHub being up. The token rules in spec 0001 are the real risk for a `GA` feature, and a plain form that never uses the token in a web request keeps the leak points few: the form post, the database column and the session. Those three are all guarded (encrypted cast, no token in page data, token kept out of flashed input).

A list page (Option 3) was left out because features 8, 10 and 12 already own the places where deployments are listed and changed, and a list built now would be rebuilt then. Capital letters in the key are refused, not lowercased, because the key must match the reply's `deployment.key` exactly (spec 0002) and a silent change could hide a typo that would later fail every pull as `key_mismatch`.
