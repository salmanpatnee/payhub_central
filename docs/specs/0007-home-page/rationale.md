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


## Update 2026-10-28: Balanced card

### Why the first card changed

The first card showed Today and This month as stacked lists of completed and pending money. With three currencies it was tall, it left out the link counts (total, pending, failed, expired) that PayHub already sends, and it gave staff no way to see which deployments had trouble. The engineer called it "not professional looking" and asked for the failed count.

### Options considered

Three card designs were built as viewable artifacts with the same example data, and the engineer picked the third.

- **Executive Overview**: paid money is the headline. Easy to read, but problems get one line, so failed and pending links are easy to miss.
- **Operations & Monitoring**: a summary strip, connection health and a status split bar. Best at spotting problems, but the busiest card, and the connection details it shows (release code, connection state) are mostly not in the data.
- **Balanced Dashboard (chosen)**: four numbers, a currency table and a footer with freshness and warnings. It is compact enough for two cards per row and answers both "how busy" and "how healthy".

### Rationale

The Balanced layout fits the data that exists. Links, paid, pending, expired and failed are all saved per window already, so no PayHub change is needed. The payment provider is not in the contract (it says provider keys and names are never returned), so it was dropped rather than invented. The release code was dropped at the engineer's request. The domain is kept, but only the host of `base_url`, taken on the server, so the rule that no URL or token reaches the browser still holds.

The success rate is completed links divided by links created. Both come from the same window and the same date basis, so the ratio is honest. Dividing paid money by anything would mix the "created date" and "paid date" bases the contract warns about, so it is not used. The "N payments" figure comes from the money side (`paid_count`) and the footnote explains why it can differ from Paid.

The period switch runs in the browser because all three windows are already saved and small, so switching costs no request and the polling reply stays the same shape. Warnings are also computed in the browser from the numbers sent, which lets them follow the picked period. Their limits (5% failed, 25% expired, at least 3 links) are a starting guess, kept in one file so they are easy to tune. Hiding currencies with no activity keeps cards short, at the cost of the earlier rule that a real zero shows as `0.00`; this is a recorded tradeoff in the spec.
