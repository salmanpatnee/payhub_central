# Verify: Add a deployment · spec 0005 · updated 2026-10-27
_Steps derived from spec 0005 acceptance criteria. `/check verify` runs these; `/test` locks the durable ones._

## UI / manual
- [x] Logged out, open `/deployments/create` → redirected to the login page → AC-1
- [x] Logged in, open `/deployments/create` (or click "Add deployment" in the sidebar, or the button on the empty Home) → the form shows with the switch on → AC-1, AC-7, AC-10
- [x] Fill key `payhub1`, a name, `HTTPS://host.example:8443/app//`, a 64 character token, then save → redirected to Home with the toast "Deployment added." → AC-2
- [x] Check the new row → `slug` is `payhub1`, `base_url` is `HTTPS://host.example:8443/app`, `do_not_pull_before` is empty, and the `token` column holds an encrypted value, not the typed one → AC-2, AC-5
- [x] Save with the switch turned off → the row has `is_active` false → AC-7
- [x] Type a key with capital letters, a bad character, or 33 characters → refused with a message that says "key", the capitals are not changed → AC-3
- [x] Reuse a key already saved, and one belonging to a soft deleted deployment → refused with "That key is already used (it may belong to a removed deployment)." → AC-3
- [x] Leave the name empty, then type 256 characters → refused each time → AC-4
- [x] Try `http://x.com`, `https://`, `https://user:pw@x.com`, `https://x.com/?a=1`, `https://x.com/#a` → each refused next to the URL field → AC-5
- [x] Save a second deployment with the same URL and a different key → saved → AC-5
- [x] Type a token of 63 characters, 65 characters, and none → refused, and the message does not repeat what was typed → AC-6
- [x] After any refused save → the token field is empty and must be typed again → AC-8
- [x] After a refused save, look at the `sessions` table payload → the typed token is not in it → AC-8
- [x] View the page source and Inertia page data on the form and on Home → no token and no deployment data → AC-8
- [x] Use Tab and Enter only to fill and submit the form → every field and the button can be reached, and each error shows beside its field → AC-10
- [x] Narrow the window to 375px → the form fits with no sideways scroll → AC-10

## Commands
- [x] `php artisan tinker --execute="echo App\Models\Deployment::count();"` after a good save → count goes up by one → AC-2
- [x] Search `storage/logs/laravel.log` for the typed token after a refused save → no match → AC-8
- [x] `php artisan tinker --execute="echo DB::table('jobs')->count() + DB::table('failed_jobs')->count();"` after saves → unchanged, and no token in any payload → AC-8, AC-9
- [x] Watch the network and `Http::fake()` style check during a save → no outbound call to the saved base URL → AC-9

## Value sourcing checks
- [x] Key typed with capitals → stays as typed in the error (not lowercased) and is refused → slug source: form input
- [x] URL with trailing slashes → stored without them → `base_url` source: derived in the form request
- [x] Open the form after a save → token field is empty → token source: never read back
- [x] Save → toast text is "Deployment added." and the redirect is Home → fixed text in the controller, `dashboard` route

## Acceptance-criteria coverage
- AC-1 covered by steps 1 and 2 · AC-2 by steps 3 and 4 and the count command · AC-3 by the key steps · AC-4 by the name step · AC-5 by the URL steps · AC-6 by the token length step · AC-7 by steps 2 and 5 · AC-8 by the empty token, `sessions`, page data, log and jobs steps · AC-9 by the jobs and network steps · AC-10 by the keyboard and 375px steps
