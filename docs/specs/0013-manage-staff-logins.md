# 0013. Manage staff logins

**Date**: 2026-10-29
**Status**: Accepted

## Summary

An admin gets a Staff page where they can see every login, add a person, change a person's name or email, set a new password for them, and remove them. The admin types the password when adding or resetting and passes it to the person themselves. No email is sent, so this feature does not depend on SMTP (the mail server). It reuses the existing `users` table with no new columns. Removing a person deletes them and ends their open sessions at once.

## Context

Spec 0004 made login invite only: there is no sign up and no forgot password, and every logged in person is an admin. It left three things for this feature: a way to create logins, a way to set a password for someone who forgot it, and a way for an admin to change a login email (people cannot change their own).

Spec 0001 planned invite emails with a "set your password" link. The engineer chose a simpler path: no email, the admin types the password. The team is small and internal, so the cost of sharing a password in person is low, and the app does not need working SMTP on Hostinger to onboard anyone.

Constraints that shape the design: the app is a read only payment dashboard that stores encrypted live PayHub tokens, so access control matters; sessions are stored in the database (`SESSION_DRIVER=database`); Fortify's password reset is off; the kit's email verification stays on, so new logins must be marked verified.

## Requirements

**User stories**:
- As an admin, I want to add a login for a new colleague so that they can see the numbers.
- As an admin, I want to set a new password for someone who forgot theirs so that they are not locked out.
- As an admin, I want to fix a wrong name or email on a login.
- As an admin, I want to remove a login so that someone who left can no longer get in.

**Acceptance criteria** (the contract, each one independently checkable):
- **AC-1**: A "Staff" item in the sidebar opens a page listing every login in a table with name, email and date added, ordered by name. The logged in admin's own row shows a "You" label and has no Edit or Remove action. A logged out visitor is sent to login.
- **AC-2**: "Add staff" takes name, email and password. Saving creates the login, marked email verified, and sends the admin back to the Staff list with a success message. The new person can sign in at once with that email and password. No email is sent.
- **AC-3**: Add refuses an empty name, an empty or badly formed email, an email that already exists (compared in lowercase, ignoring spaces around it) and a password that breaks the project password rules. Each error shows next to its field and no login is created.
- **AC-4**: The Edit page changes a person's name and email. An email used by another login is refused with the same message as Add. Their password, two factor and sessions are not touched, and they sign in with the new email afterwards. Edit never changes `email_verified_at` (a login with an empty value gets it set to now on save), so an edited person never lands on the verify page.
- **AC-5**: The Edit page has a "Set new password" form with one password field (with the show or hide eye). Saving makes the old password stop working and the new one work. All of that person's sessions end and their remember me token is cleared. Their two factor setting is not changed.
- **AC-6**: Remove opens a dialog that names the person. Confirming deletes the login and their sessions in one step, returns to the Staff list with a success message, and the person can no longer sign in. A person who had a tab open is sent to login on their next request.
- **AC-7**: A hand made request to edit, set a password for, or remove the logged in admin's own login returns 403 and changes nothing. Remove also refuses (403) if fewer than 2 logins would remain, even when two admins remove each other at the same moment. So the last admin can never be removed or locked out through this page.
- **AC-8**: A request about a login that was already removed returns 404. Two saves that race on the same email show the normal "email taken" message, not a server error.
- **AC-9**: A password typed in a form is never returned in page data, never flashed back, never logged, and the form field is cleared after a successful save.
- **AC-10**: The Staff list, Add, Edit and the Remove dialog work on a phone and by keyboard alone, in the light theme.

## Options considered

### Option 1: Admin types the password, no email, edit through a Staff page

The admin sets the password when adding or resetting and tells the person. One page, one controller, no mail.

**Pros**:
- No SMTP dependency, so it works on day one on Hostinger.
- Smallest code: no signed link, no notification, no queue job.
- One mechanism covers both a first password and a forgotten password.

**Cons**:
- The admin knows the password, and it travels by chat or word of mouth.
- Nothing makes the person change it, so some will keep it.

### Option 2: Emailed "set your password" link (the spec 0001 plan)

The admin enters name and email; the app emails a signed link valid for 48 hours where the person picks their own password. Reset sends a fresh link.

**Pros**:
- No one but the person ever knows the password.
- Matches the plan in spec 0001.

**Cons**:
- Needs working SMTP, a mail class, a signed route, a set password page and expiry handling. If mail fails, nobody can be onboarded.
- Fortify's reset is off, so the link flow must be built by hand.

### Option 3: App generates a one time password shown once

Same as Option 1 but the app makes the password and shows it once in a dialog.

**Pros**:
- Strong passwords by default.

**Cons**:
- Needs a show once dialog and flash handling for a secret. The engineer asked for a plain password field instead.

## Decision

**Chosen option**: Option 1: Admin types the password, no email, a Staff page

The Staff page lists logins and offers Add, Edit (name, email, set new password) and Remove, with every action blocked for the admin's own row.

**Implementation skills**: none installed for this area.

## Rationale

The team is small and internal, and the engineer chose it, so the cost of passing a password on in person is low. Option 2 adds the most moving parts for a problem this team does not have yet, and it makes onboarding depend on SMTP, which spec 0001 already listed as a risk. Option 1 gives the first password and the forgotten password with the same small piece of code.

The cost is that the admin knows the password and nothing forces a change. The engineer accepted both. People can change it themselves in Security settings. If the team grows, Option 2 can replace the form later without changing the data model. The runner up is Option 2.

Remove deletes the row because nothing else points at `users` today and there is no audit log yet, so a switched off row would only add a check to every login. Own row actions are blocked so there is always at least one admin.

## Feature design

**Data model sketch**: no migration. Uses the existing tables.
| Entity | Fields used | Notes |
|---|---|---|
| `users` | id (PK), name, email (unique), password (hashed by the model cast), `email_verified_at`, two factor columns, `remember_token`, `created_at` | Add sets `email_verified_at` to now. Email is stored in lowercase. |
| `sessions` | `user_id` (nullable FK to `users.id`) | 1:N from users. Rows are deleted on reset and remove. |

**State transitions**: none. A person has a login or does not.

**API surface** (all behind `auth` and `verified`; route name prefix `staff`; the user is bound by id):
| Endpoint | Method | Key inputs | Key outputs | Auth | Key errors |
|---|---|---|---|---|---|
| `/staff` | GET | none | page with rows `{id, name, email, createdAt, isYou}` | logged in | none |
| `/staff/create` | GET | none | Add form (no data) | logged in | none |
| `/staff` | POST | name, email, password | redirect to `/staff`, success toast | logged in | 422 field errors |
| `/staff/{user}/edit` | GET | none | Edit page with `{id, name, email}` | logged in | 403 own row, 404 unknown |
| `/staff/{user}` | PATCH | name, email | redirect to `/staff`, success toast | logged in | 403 own row, 404, 422 |
| `/staff/{user}/password` | PUT | password | redirect to `/staff`, success toast | logged in | 403 own row, 404, 422 |
| `/staff/{user}` | DELETE | none | redirect to `/staff`, success toast | logged in | 403 own row, 404 |

**Value sourcing**:
| Action | Value produced / displayed | Source |
|---|---|---|
| Add | name, email, password | form inputs; email trimmed and lowercased before validation |
| Add | `email_verified_at` | `now()` set by the create action with `forceFill([...])->save()` (the model only allows name, email and password to be filled), not a form input |
| Edit | `email_verified_at` | left as it is; set to `now()` only if it is empty |
| Add, Edit | the "email taken" text | one constant, `EMAIL_TAKEN`, shared by both requests and both unique catch blocks |
| Add, Edit | email cleanup and rules | one shared trait: trim and lowercase in `prepareForValidation`; `required, string, email, max:255` plus unique |
| Add, Reset | password rule hint on the form | `Password::default()` is 8 characters locally and 12+ with mixed case and a leaks check in production; pass the rule description to the page like `SecurityController::edit` does |
| Add | `created_at` | Eloquent timestamp |
| Add, Reset | stored password hash | the model's `hashed` cast on the typed password |
| Add, Reset | password rules | `Password::default()` without `confirmed` (the project helper adds `confirmed`, so do not reuse `passwordRules()` as is) |
| Edit | the unique email check | `Rule::unique('users','email')->ignore($user->id)` |
| List | `isYou` | `$row->id === $request->user()->id` |
| List | date added | `users.created_at`, formatted by a helper in `resources/js/lib` |
| Reset, Remove | sessions to end | `sessions.user_id = $user->id` |
| Reset | new remember token | `Str::random(60)`, written with `forceFill()` |
| Edit page | person data | an explicit `{id, name, email}` array, never the model |
| List | row order | `orderBy('name')->orderBy('id')` |
| List | date added helper | `formatExactTime` in `resources/js/lib/formatRelative.ts` if it fits, else one small new helper |
| Remove dialog | the person's name | the row's `name` from the list data |
| Toasts | message text | literal strings: "Staff added.", "Staff saved.", "Password changed.", "Staff removed." |

**Key invariants**:
- A request about the logged in admin's own id for edit, update, password or destroy is always 403: `abort_if($user->is($request->user()), 403)` at the top of those four methods. Route binding runs first, so an unknown id is 404 before 403.
- Remove never leaves fewer than 2 logins: inside the transaction, lock the acting admin's row and the target's row (`lockForUpdate()`), and refuse with 403 if the actor is gone or fewer than 2 would remain.
- The `staff` routes sit in a group with Laravel's `auth.session` middleware, so a session whose password hash is old is logged out even if a request in flight wrote its row back. The row delete stays as well.
- The password input is named `password`, so Laravel neither trims it nor flashes it back.
- Every login created here has `email_verified_at` set, so it passes the `verified` middleware.
- Email is unique, lowercase, and the database unique index is the last line of defence (catch `UniqueConstraintViolationException` like `DeploymentController::store`).
- Reset and Remove delete the person's `sessions` rows in the same database transaction as the change.
- The password is never in page props, flash data, logs or the toast text.

**Security model**:
- Every logged in user is an admin (spec 0004). Any admin can manage any other login. Nobody can act on their own row through this page.
- Guests cannot reach any `/staff` route (redirected to login).
- No compliance scope is added. Passwords are hashed by Laravel. There is no audit log of who added or removed whom (deferred in the scope).

**Configuration required**: none. No mail settings are needed.

**Critical test scenarios** (each maps to an acceptance criterion in ## Requirements):
- Happy path: add a person, sign in as them, set a new password (old one fails, new one works), then remove them (cannot sign in), verifies **AC-2**, **AC-5**, **AC-6**
- Failure case: duplicate email (in a different case) is refused on Add and Edit, and a racing duplicate shows the email message, verifies **AC-3**, **AC-4**, **AC-8**
- Auth/permission: PATCH, PUT and DELETE for your own id return 403 and a logged out request redirects to login, verifies **AC-1**, **AC-7**
- Failure case: a removed person with an open session is redirected to login, and a second remove returns 404, verifies **AC-6**, **AC-8**

## Build plan

Tracer Bullet: one thin thread first (the list, end to end), then each strand on top of it. No migration is needed.

1. Thin thread: add the `staff` routes and `StaffController@index`, a `BuildStaffList` action returning plain arrays (`id`, `name`, `email`, `createdAt`, `isYou`, ordered by name), the Staff sidebar item in `AppSidebar.vue`, and `resources/js/pages/staff/Index.vue` as a table with the "You" label and no actions on that row (follow `deployments/Index.vue`), satisfies **AC-1**
2. Add: `create` and `store`, `StoreStaffRequest` (trim and lowercase email in `prepareForValidation`, unique email, `Password::default()` without `confirmed`), a `CreateStaff` action that sets `email_verified_at`, `staff/Create.vue` with `PasswordInput` (it already has the eye), catch the unique violation, success toast, satisfies **AC-2**, **AC-3**, **AC-8**, **AC-9**
3. Edit name and email: `edit` and `update`, `UpdateStaffRequest` (unique ignoring the person), `staff/Edit.vue` with the details form, satisfies **AC-4**, **AC-8**
4. Set new password: the `staff/{user}/password` route, a `SetStaffPassword` action (update password, new remember token, delete sessions, all in one transaction), and the second form on `Edit.vue` that clears its field on success, satisfies **AC-5**, **AC-9**
5. Remove: `destroy`, a `RemoveStaff` action (delete sessions then user in one transaction), and a `RemoveStaffDialog.vue` that names the person (follow `RemoveDeploymentDialog.vue`, do not refactor it), satisfies **AC-6**, **AC-8**
6. Own row guard and last admin safety: the one line `abort_if` at the top of edit, update, password and destroy; the row locks and the "fewer than 2 would remain" refusal in `RemoveStaff`; and `auth.session` on the `staff` route group, satisfies **AC-5**, **AC-7**
7. Phone and keyboard pass on the list, both forms and the dialog (focus, labels, table at phone width), then `npm run build` for the route helpers, the existing suite and front end checks. Write no new tests, satisfies **AC-10**

## Consequences

**Positive**:
- No new table, column, mail setting or queue job, so little new risk.
- One mechanism handles a first password and a forgotten one.
- Removing a login takes effect at once, because their sessions are deleted too.

**Negative / tradeoffs**:
- **The admin knows every password they set**, and it is shared by hand. Nothing forces the person to change it.
- **No audit log** of who added, changed or removed a login, even though this is access control. The scope defers it (the "Audit log of admin actions" item). Until then, a mistake or misuse cannot be traced.
- **Any admin can add another admin**, and there are no roles, so a new colleague gets full access immediately (spec 0004).
- **No re-enter password step** before Add, Reset or Remove (the engineer's choice). Someone at an unlocked, signed in computer could add a login for themselves.
- **No pagination** on the Staff list. This is fine for a small team and matches the Deployments list. Revisit if the list grows past a few dozen.
- **Reset leaves two factor as it is.** A person who lost their phone and forgot their password needs their saved recovery codes. Otherwise a developer must clear it in the database.
- **A half finished two factor login survives a reset.** That session has no `user_id` yet, so deleting rows by user misses it. `auth.session` covers most of it. Accepted.
- Permanent deletion means the person's name is gone from any future audit trail.

**Neutral**:
- Spec 0001's invite email plan, `app:create-admin` command and mail dependency for invites no longer apply to this feature. Mail stays in the stack for later features such as failure alerts.
- Removing "delete account" (spec 0004) means this page is the only way a login is ever removed.

## Follow-up

- [ ] Update spec 0001 lines on invites and the "set your password" email to match this spec (admin typed password, no email).
- [ ] Mark the spec 0004 follow-up on feature 13's first password as resolved by this spec.
- [ ] Decide when to add an audit log of admin actions (scope Deferred), since this feature changes who has access.
- [ ] Reconsider a forced password change on first sign in, a re-enter password step, and the emailed link (Option 2) once more than a handful of people have logins.
