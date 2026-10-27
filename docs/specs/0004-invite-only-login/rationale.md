# 0004. Invite only login: rationale

## Context

**Workspace**: single repo. Scope feature "5. Invite only login" (Foundation phase). It follows specs 0001 (stack), 0002 (data model) and 0003 (UI foundation).

- **What the kit already gives.** Fortify (the Laravel login backend) is set up with email verification and two factor. Public sign up is not turned on in `config/fortify.php`, and the login page has no sign up link. Login is limited to 5 tries per minute per email and IP. Session settings already match spec 0001 (encrypted, `http_only`, lax, 120 minutes). Passwords must be 12 characters with mixed case, numbers, symbols and not leaked, in production.
- **What is left over from a general purpose app.** A public Welcome page at `/`, a "delete my account" button, and an editable email on the profile page.
- **Who uses it.** A few internal staff who can see payment numbers and (as admins) save tokens that open live payment systems. A stranger must never get in, and one stolen login is serious.
- **Conflicting notes found.** Spec 0001 says the first admin comes from an `app:create-admin` command with no default password and that admins must use two factor. Spec 0002 assumes a `users.is_admin` flag from this feature. The engineer chose differently for all three (see Decision).
- **Prerequisite.** The users table and Fortify already exist. Mail is not needed by this feature. Invite emails belong to feature 13.

## Options considered

### Option 1: Keep the kit's Fortify setup, trim the leftovers

Fortify is already installed with sign up off. We only remove the extra kit pieces and lock the email. Admins create accounts later (feature 13).

**Pros**:
- Almost nothing new to build, so least risk.
- Uses the proven login code, throttling and two factor from spec 0001.

**Cons**:
- Fortify has no invite flow, so feature 13 must add one.
- Two factor stays optional, so a person can skip it.

### Option 2: Add a roles package now (spatie/laravel-permission)

Install roles and permissions at the start so viewers and per deployment access are ready.

**Pros**:
- No later change when viewer roles arrive.

**Cons**:
- Adds tables and checks for something the scope explicitly defers.
- Every login is an admin today, so it would do nothing yet.

### Option 3: Write our own login

Build the forms, sessions and reset ourselves.

**Pros**:
- Full control of every screen.

**Cons**:
- Authentication is easy to get subtly wrong (session fixation, throttling, reset tokens) and already solved by Fortify.

## Rationale

Spec 0001 already chose Fortify and a small team will run this, so the smallest working change wins. The kit covers every acceptance criterion except the leftovers, which are only deletions. Roles stay out because the scope says everyone is an admin for now (AGENTS.md also says do the smallest thing). The engineer chose a fixed seeded password, optional two factor and the remember me box over the safer options in spec 0001 and the recommendation here; those are accepted tradeoffs, recorded under Consequences, not oversights. Locking the email follows from the same idea: an admin is the only one who decides who can sign in, so a person should not move their login to another address.
