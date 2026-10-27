# 0004. Invite only login

**Date**: 2026-10-27
**Status**: Proposed

## Summary

Staff sign in with an account that already exists. There is no public sign up. The kit's login, password reset and optional two factor stay as they are, and we trim the kit's leftovers: the Welcome page, the delete account button, and the ability to change your own login email. The first admin comes from the existing `DatabaseSeeder`. Everyone who can log in is an admin, so there is no role column yet. Inviting new people is a later feature (13).

## Context

**Workspace**: single repo. Scope feature "5. Invite only login" (Foundation phase). It follows specs 0001 (stack), 0002 (data model) and 0003 (UI foundation).

- **What the kit already gives.** Fortify (the Laravel login backend) is set up with password reset, email verification and two factor. Public sign up is not turned on in `config/fortify.php`, and the login page has no sign up link. Login is limited to 5 tries per minute per email and IP. Session settings already match spec 0001 (encrypted, `http_only`, lax, 120 minutes). Passwords must be 12 characters with mixed case, numbers, symbols and not leaked, in production.
- **What is left over from a general purpose app.** A public Welcome page at `/`, a "delete my account" button, and an editable email on the profile page.
- **Who uses it.** A few internal staff who can see payment numbers and (as admins) save tokens that open live payment systems. A stranger must never get in, and one stolen login is serious.
- **Conflicting notes found.** Spec 0001 says the first admin comes from an `app:create-admin` command with no default password and that admins must use two factor. Spec 0002 assumes a `users.is_admin` flag from this feature. The engineer chose differently for all three (see Decision).
- **Prerequisite.** The users table and Fortify already exist. Mail (SMTP in production, `log` locally) is needed for password reset only. Invite emails belong to feature 13.

## Requirements

**User stories**:
- As an admin, I want to sign in with the account made for me so that I can see the numbers.
- As the owner, I want nobody without an account to get in, so that payment data stays private.
- As staff, I want to reset a forgotten password myself so that I am not locked out.
- As staff, I want to turn on two factor if I choose so that my login is safer.

**Acceptance criteria** (the contract, each one independently checkable):
- **AC-1**: The seeded admin signs in with email and password and lands on the dashboard. Signing out returns to the login page and the dashboard is no longer reachable.
- **AC-2**: There is no public sign up. `GET` and `POST /register` return 404, and no page shows a sign up link.
- **AC-3**: A logged out visitor to any app page (dashboard, settings) is sent to the login page. `/` redirects to the dashboard, which sends a logged out person on to login (two hops are fine, and logout lands the same way). There is no public page.
- **AC-4**: A wrong password and an unknown email show the same message on the login form (Fortify's `auth.failed` text). After 5 tries in a minute for the same email and IP, further tries are refused with the `auth.throttle` text.
- **AC-5**: "Remember me" stays on the login page. Without it, a session ends after `SESSION_LIFETIME` (120 minutes) with no activity. Check it by reading the config, or by testing with `SESSION_LIFETIME=1`.
- **AC-6**: Forgot password sends a reset link (the `log` mailer locally). Setting a new password uses `Password::defaults()` (strict only when `APP_ENV=production`, so check the strict rules with that setting), and the old password stops working.
- **AC-7**: A person can turn two factor on or off in Security settings. Once on, login asks for the code after the password. It is never forced.
- **AC-8**: The profile page lets a person change their name. The email is shown but cannot be edited, and a hand made request that sends a new email does not change it.
- **AC-9**: The "delete my account" button and its route are gone. A `DELETE settings/profile` request returns 405.
- **AC-10**: The kit's Welcome page and its route are gone.

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

## Decision

**Chosen option**: Option 1: Keep the kit's Fortify setup, trim the leftovers

Login uses Fortify as it is; we remove the Welcome page, the delete account feature and the editable email, and keep everything else.

The engineer's calls on the open points:
- **First admin**: keep the current `DatabaseSeeder` (`admin@payhub.test`, password `password`). Not the `app:create-admin` command from spec 0001.
- **Two factor**: optional, each person chooses. Not forced.
- **Admin flag**: no `is_admin` column. Every logged in user is an admin.
- **Home address**: `/` redirects to the dashboard. The Welcome page and "delete account" go.
- **Own email**: locked on the profile page. Only an admin changes login emails (feature 13).
- **Remember me**: kept as the kit has it.

## Rationale

Spec 0001 already chose Fortify and a small team will run this, so the smallest working change wins. The kit covers every acceptance criterion except the leftovers, which are only deletions. Roles stay out because the scope says everyone is an admin for now (AGENTS.md also says do the smallest thing). The engineer chose a fixed seeded password, optional two factor and the remember me box over the safer options in spec 0001 and the recommendation here; those are accepted tradeoffs, recorded under Consequences, not oversights. Locking the email follows from the same idea: an admin is the only one who decides who can sign in, so a person should not move their login to another address.

## Feature design

**Data model sketch**: no change. The existing `users` table is used as it is (name, email unique, password, `email_verified_at`, two factor columns, remember token). No `is_admin` column. Spec 0002's assumption of an `is_admin` flag no longer holds, and it only needs `users.id` for a manual pull.

**State transitions**: none. A person is either able to sign in or has no account. Removing a login belongs to feature 13.

**API surface** (all Fortify or kit routes; only the changes are marked):
| Endpoint | Method | Key inputs | Key outputs | Auth | Key errors |
|---|---|---|---|---|---|
| `/login` | GET, POST | email, password, remember | redirect to dashboard | guest | 422 same message for wrong email or password, 429 throttled |
| `/logout` | POST | none | redirect to login | logged in | none |
| `/forgot-password`, `/reset-password` | GET, POST | email, token, new password | reset link, then redirect to login | guest | 422 weak password, bad or old token |
| `/two-factor-challenge` | GET, POST | code or recovery code | redirect to dashboard | half signed in | 422 wrong code, 429 throttled (5 a minute) |
| `/register` | GET, POST | none | none | none | 404 (not registered) |
| `/` (route name `home` kept) | GET | none | redirect to `dashboard` (changed: was the Welcome page) | none | none |
| `/settings/profile` | GET, PATCH | name (email is no longer accepted) | saved name | logged in, verified | 422 empty name |
| `/settings/profile` | DELETE | none | none | none | removed (changed), now 405 |
| `/settings/security`, `/settings/password` | kit as is | password, two factor | kit as is | logged in, verified | kit as is |
| `/email/verify/*` | kit as is | none | kit as is | logged in | kept on purpose (verification stays) |

**Value sourcing**:
| Action | Value produced / displayed | Source |
|---|---|---|
| Seed first admin | email, name, password, verified time | `DatabaseSeeder` literal values (`admin@payhub.test`, `Admin`, `password`, now). The password fails the production rules, but login does not check them, so leave the seeder alone |
| Login | where to go after sign in | `config/fortify.php` `home` = `/dashboard` |
| Login | throttle key | lowercased email plus IP, from the `login` limiter in `FortifyServiceProvider` |
| Profile page | the shown email | the logged in `users.email` (displayed, read only) |
| Password rules | length and mix | `Password::defaults()` in `AppServiceProvider` (strict only in production) |

**Key invariants**:
- No route can create a user except the seeder and, later, an admin action (feature 13).
- Every page except the login, reset and email verification pages sits behind `auth` and `verified` (the profile routes move into the `verified` group).
- A person cannot change their own email or delete their own account through the app.

**Security model**:
- Roles: none. Every logged in user is an admin and sees everything.
- Guests can reach only login, forgot password, reset password and the two factor challenge.
- Throttling: 5 login tries a minute per email and IP, 5 two factor tries a minute per session, 6 password changes a minute.
- No compliance scope is added by this feature. Passwords are hashed by Laravel. Session cookies follow spec 0001.

**Configuration required**: none new. Mail settings (SMTP in production) are already planned in spec 0001 for password reset.

**Critical test scenarios** (each maps to an acceptance criterion in ## Requirements):
- Happy path: seeded admin signs in, sees the dashboard, signs out, and the dashboard redirects to login, verifies **AC-1**, **AC-3**
- Failure case: six wrong passwords in a minute are refused on the sixth, and wrong email and wrong password show the same text, verifies **AC-4**
- Auth/permission: `/register` returns 404, a logged out request to `/dashboard` and `/settings/profile` redirects to login, verifies **AC-2**, **AC-3**
- Auth/permission: a PATCH to the profile with a different email leaves the email unchanged, and `DELETE settings/profile` is rejected, verifies **AC-8**, **AC-9**
- Happy path: turning two factor on makes the next login ask for a code, verifies **AC-7**

## Build plan

Tracer Bullet: the login thread already runs end to end in the kit, so the first task proves it, then each strand is a small removal.

1. Run the seeder on a fresh database and sign in and out by hand with the seeded admin. Confirm `/register` is a 404, throttling, the 120 minute session and the reset flow (`log` mailer) work as the kit ships them. Fix only what fails, satisfies **AC-1**, **AC-2**, **AC-4**, **AC-5**, **AC-6**, **AC-7**
2. Change `/` in `routes/web.php` to `Route::redirect('/', '/dashboard')->name('home')` (keep the name, the auth layouts' logo links use it), delete `resources/js/pages/Welcome.vue` and its `Welcome` mention in `resources/js/app.ts`, satisfies **AC-3**, **AC-10**
3. Lock the email: remove `email` from `profileRules()` (or use only the name rules in `ProfileUpdateRequest`), remove the email changed branch in `ProfileController::update` and the unused `mustVerifyEmail` and `status` props in `edit`. In `Profile.vue` show the email as text (or an input with no `name`), and remove the "unverified, re-send" block, the `send` import and the "name and email" heading wording. Move the profile routes into the `verified` group in `routes/settings.php`, satisfies **AC-8**
4. Remove delete account: the `profile.destroy` route, the controller method, `ProfileDeleteRequest`, `resources/js/components/DeleteUser.vue` and its use in the profile page. Keep `PasswordValidationRules`, satisfies **AC-9**
5. Run `npm run build` so the generated route helpers (Wayfinder) drop `profile.destroy` and the Welcome route, then the existing suite and the front end checks. Delete or change only the existing tests that covered the removed features (delete account, email change, and `tests/Feature/ExampleTest.php`, which expects 200 from `/`). Write no new tests, satisfies **AC-9**, **AC-10**

## Consequences

**Positive**:
- Almost no new code, so little new risk.
- A stranger cannot create or find a way in, and no public page exists.
- Feature 13 only has to add invite and remove.

**Negative / tradeoffs**:
- **The seeded password is `password`.** If `db:seed` is run on Hostinger, anyone who knows the email can sign in. Change the password at once after seeding in production, or do not seed there.
- **Two factor is optional**, so spec 0001's "two factor for admins" is not met. One stolen password opens a payment dashboard that can store live tokens.
- **Remember me keeps a browser signed in for weeks**, longer than the 120 minute session. A shared computer stays signed in.
- Forgot password tells a guesser whether an email exists (Fortify default). Throttling limits guessing.
- No role column, so viewer roles later need a small migration and a change to every admin check (already noted in spec 0001).

**Neutral**:
- The kit's email verification stays. Invited users (feature 13) must be marked verified, as spec 0001 says.
- Removing "delete account" means only an admin (feature 13) can remove a login.

## Follow-up

- [ ] Spec 0001 still says two factor for admins, the `app:create-admin` command, and an `is_admin` column. Update those lines to match this spec (the engineer's choices above).
- [ ] Spec 0002 assumes a `users.is_admin` flag from this feature. Update that line.
- [ ] After the first production seed, change the admin password and turn on two factor right away.
- [ ] Reconsider forced two factor and removing "remember me" once more than one person has a login.
- [ ] Feature 13 (manage staff logins) adds invites and removal. Roles stay deferred in the scope.
