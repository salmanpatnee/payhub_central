# 0009. Deployment page: rationale

## Context

The Home page (spec 0007) shows one card per deployment with three periods (today, this month, last 30 days) and hides some saved facts: the all time window, cancelled links, and the date range each window covers. Staff who want the full picture of one deployment have nowhere to go, and the cards are not links yet.

The saved data already holds everything needed. Every good pull stores four windows, each with six link counts, one payment count and money per currency in two kinds (paid and pending). The contract (`docs/central-dashboard-api.md`, v1) places links by their created date and money by their paid date, so a link made yesterday and paid today counts in yesterday's links and today's money. Staff can easily misread the two as one number if they sit in the same block.

Constraints that already exist: money is whole cents and currencies are never added, a failed pull never shows zero, the token and the raw reply never reach the browser, the page is light only, and every logged in user is an admin. The project builds with Tracer Bullet, and this feature is Beta tier. This is a web page on the existing Laravel and Vue stack, with no new tool needed.

Assumption: spec 0007 (Home) and spec 0003 (design system) are in force. The page reuses the Home status rules and the formatting helpers, and the slug rule of spec 0007 is changed by the engineer's choice (see Rationale).

## Options considered

### Option 1: A dedicated page with its own builder, sharing the status rules with Home

A new route and page for one deployment, a new small action that builds the four windows, and one small shared class for the badge state and the domain host that Home and the page both use.

**Pros**:
- Each builder stays small and does one job. The page can load all four windows while Home keeps loading three.
- The shared rules mean Home and the page cannot disagree about Live, Unavailable or Paused.
- Fits the existing pattern (controller, action class, Inertia page) and the route already exists as a resource.

**Cons**:
- Two builders to keep in step when the pull data changes.
- Touches Home (the link and the extracted class), so Home's tests and checks must run again.

### Option 2: Extend the Home builder with a one deployment mode

Give `BuildDeploymentCards` a way to return the full detail for a single deployment.

**Pros**:
- One class knows how to turn a deployment into display values.

**Cons**:
- The class would carry two shapes (a light card and a full detail) and grow past a small class, against the project's SOLID and keep classes small rules.
- Home polling replies could grow by accident if a flag is wrong.

### Option 3: A panel on Home instead of a page

Open the detail in a side panel or dialog on the Home page.

**Pros**:
- No new route or page, and no new URL.

**Cons**:
- Staff cannot bookmark or share a deployment's page, and features 11 and 12 (history, edit) need a real page to grow on.
- A wide table with four windows is hard to read in a small panel on a phone.
- Focus and keyboard handling for a dialog is extra work for the same data.

## Rationale

Option 1 is chosen. The saved data is already complete, so the work is only to read it and show it. A separate builder keeps the Home card light and keeps the new window loads (all time, the date range, cancelled links) off the Home polling reply. Pulling the badge and domain rules into one shared class costs one small class and removes the main risk, which is the two pages showing different states for the same deployment. Option 2 would grow one class past its job. Option 3 does not give features 11 and 12 a home, and the scope already plans them on this page.

The engineer chose the address `/deployments/{slug}`. My recommendation was the id (`/deployments/{id}`), because it keeps spec 0007's rule that the slug never reaches the browser. The slug is the deployment key shared with PayHub, not a secret, and it is more readable and stable, so the choice is safe. It does have a cost: Home now sends the slug inside `href`, and spec 0007's rule and leak test must be updated. That cost is accepted and written down in Consequences and Follow-up. The page data itself still holds no slug.

The two table layout (windows as columns, one table for links and one for money) was chosen because it lets staff compare windows at a glance and keeps the two date rules in two visibly separate places, each with a sentence under its title. One group per currency keeps currencies from ever being added. The engineer wanted a Payments row inside each currency group, but PayHub sends one `paid_count` per window across all currencies, so it cannot be split. It sits once below the groups, labelled for all currencies. This is a correction to the answer given in the interview.

Release version was left out because the engineer did not pick it, in line with Home. Warning chips and a success rate were left out to keep the page small, since all six counts and all four windows are visible.

On phones, a table that scrolls sideways inside its own box with a fixed first column was chosen over stacking each window, because stacking removes the main use of the page, which is comparing windows. The Beta tier means the build is followed by `/check verify` and then tests.
