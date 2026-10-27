# Verify: invite only login · spec 0004 · updated 2026-10-27
_Steps derived from spec 0004 acceptance criteria. `/check verify` runs these; `/test` locks the durable ones._
## UI / manual
- [ ] Run `php artisan migrate:fresh --seed`, open `/login`, sign in as `admin@payhub.test` / `password` → lands on dashboard; sign out → login page, `/dashboard` redirects to login → AC-1
- [ ] Visit `/register` (GET) and POST to it → 404, and no sign up link on the login page → AC-2
- [ ] Logged out, visit `/`, `/dashboard`, `/settings/profile` → each ends on the login page → AC-3
- [ ] Try a wrong password and an unknown email → same `auth.failed` message; 6 tries in a minute → `auth.throttle` text → AC-4
- [ ] Read `config/session.php` (`SESSION_LIFETIME` 120) or set it to 1 and wait → session ends; "Remember me" box still on login → AC-5
- [ ] Login page has no \"Forgot your password?\" link; `/forgot-password` and `/reset-password/x` return 404 → AC-6
- [ ] Settings > Security: turn two factor on, sign out, sign in → asked for code; turn off → never forced → AC-7
- [ ] Profile page: email is shown but greyed out; change the name and save → saved. Send a PATCH with a different email → email unchanged → AC-8
- [ ] Profile page has no delete account button → AC-9
## Commands
- [ ] `php artisan route:list | grep register` → no output → AC-2
- [ ] `curl -X DELETE /settings/profile` (logged in) → 405 → AC-9
- [ ] `/` redirects to `/dashboard`, no `Welcome.vue` in `resources/js/pages` → AC-10
## Acceptance-criteria coverage
- AC-1, AC-2, AC-3, AC-4, AC-5, AC-6, AC-7, AC-8, AC-9, AC-10 covered above (one step each, AC-9 and AC-2 twice)
