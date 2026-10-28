# Verify: Deployments list page · spec 0012 · updated 2026-10-28
_Steps derived from spec 0012 acceptance criteria. `/check verify` runs these; `/test` locks the durable ones._

## UI / manual
- [ ] Log in, open the sidebar → "Add deployment" is gone, "Deployments" is there with a list icon → AC-7
- [ ] Click "Deployments" → page title and one h1 read "Deployments", breadcrumbs are Home, Deployments → AC-1, AC-8
- [ ] Log out and visit `/deployments` → sent to login → AC-1
- [ ] Add a second deployment named to sort first, and pause a third → rows are ordered by name, the paused one shows the Paused badge, a never pulled one shows "Waiting for the first pull." → AC-2
- [ ] Click a row name → opens that Deployment page; the Name cell shows the domain only, no scheme or path → AC-2
- [ ] Click Edit on a row → opens that deployment's edit page; its breadcrumbs read Home, Deployments, {name}, Edit → AC-3, AC-8
- [ ] Click Pause on a row → toast "Deployment paused.", you stay on the list, the badge becomes Paused, the button reads Resume, scroll does not jump → AC-3, AC-5
- [ ] Click Resume → toast "Deployment resumed.", badge returns → AC-3, AC-5
- [ ] On a Deployment page click Pause → you stay on that page, the period switch and open Recent pulls are unchanged, toast shows → AC-5
- [ ] Click Remove on a row → dialog title "Remove {name}?", the three statements, Cancel focused first → AC-4
- [ ] Press Escape, then Cancel → dialog closes and focus returns to the Remove button that opened it → AC-4
- [ ] Confirm Remove → toast "Deployment removed.", you stay on the list, the row is gone, focus sits on the page title → AC-4
- [ ] Open a deployment's edit page, click "Remove deployment", confirm → you land on the Deployments list, not Home → AC-4
- [ ] Remove the last deployment → empty state "No deployments yet." with an "Add deployment" button → AC-6
- [ ] Add a deployment from the header button → after saving you land on the list with the toast "Deployment added." → AC-1, AC-12
- [ ] Open the add, show and edit pages → sidebar "Deployments" stays highlighted, "Home" is not → AC-7
- [ ] Breadcrumbs: Deployment page reads Home, Deployments, {name}; add page reads Home, Deployments, Add deployment → AC-8
- [ ] Open the list in two tabs, remove a deployment in tab 1, then click Pause on it in tab 2 → no error screen, the list reloads without that row → AC-10
- [ ] Open the list in two tabs, remove a deployment in tab 1, then confirm Remove for it in tab 2 → dialog closes, the list reloads, no error screen → AC-10
- [ ] Open a Deployment page, remove it in another tab, wait 60 seconds → you are sent to the Deployments list → AC-12
- [ ] On the edit page of an already removed deployment, confirm Remove → you are sent to the list → AC-10
- [ ] At 375px width → the table scrolls sideways inside its own box, the page does not → AC-11
- [ ] Use only the keyboard: Tab to a row's Edit, Pause and Remove, open and close the dialog → every control is reachable and shows a focus ring → AC-11
- [ ] Screen reader or inspect: table has a caption and column headers; row buttons are named like "Edit PayHub Main" → AC-3, AC-11

## Commands
- [ ] `php artisan test` → all existing tests still pass → AC-5, AC-12
- [ ] `composer run types:check` and `npm run types:check` → both clean → AC-9
- [ ] In `php artisan tinker`, dump the queries of `app(App\Actions\Deployments\BuildDeploymentList::class)->handle()` with `DB::listen` → exactly 2 queries, none selects `token`, and the result holds no `slug` or `token` key → AC-9

## Acceptance-criteria coverage
- AC-1 … covered by the login, page title and header button steps · AC-2 … covered by the ordering and badge steps · AC-3 … Edit, Pause, Resume and accessible name steps · AC-4 … the dialog, focus and both remove steps · AC-5 … the Pause on list and on Deployment page steps · AC-6 … the empty state step · AC-7 … the sidebar steps · AC-8 … the breadcrumb steps · AC-9 … the query dump step · AC-10 … the two tab 404 steps · AC-11 … the 375px, keyboard and screen reader steps · AC-12 … the add and poll 404 steps
