# 0012 rationale: Deployments list page

The decision record for [spec 0012](index.md). The build never reads this file.

## Context

Workspace: one Laravel app with Vue and Inertia, web only. Every logged in user is an admin (AGENTS.md), so there is no role check to design.

Today the only way to reach the add form from the sidebar is the "Add deployment" item. Edit, pause and remove (spec 0011) can only be reached by first opening a deployment from its Home card. There is no single place that lists every deployment, including paused ones, with their state and the actions an admin needs. A deployment that is paused or has never pulled is easy to lose track of among the Home cards.

Rules already in force from earlier specs. The status words and colours come from one shared rule (spec 0009). A deployment's slug may leave PHP only as a ready made path, never as raw data in the polled `deployment` prop (spec 0009 and 0011). The token is never loaded by pages that do not need it (spec 0001). Edit, pause and remove already exist as routes (spec 0011). Details of earlier specs that change here: pause and resume stay on the page they were clicked from (spec 0011 AC-5, reworded), removing sends you to this list instead of Home (0011 AC-7), the breadcrumbs gain a "Deployments" step (0011 AC-1 and the Deployment page breadcrumbs of spec 0009), a deployment removed in another tab sends the Deployment page to the list instead of Home (0011 AC-11), and saving a new deployment lands on the list instead of Home (spec 0005).

## Options considered

### Option 1: A new Deployments page that reuses the existing routes

A page at `/deployments` with a table. Edit, Pause and Remove call the routes spec 0011 already built. The Remove dialog moves out of the edit page into one shared part.

**Pros**:
- Smallest new surface: one route, one action class, one page, one shared dialog.
- Wording and behaviour of Remove can never drift between the two places.
- Every deployment is reachable in one click from the sidebar.

**Cons**:
- Pause and Remove must now return to the page they came from, which touches two details of spec 0011.
- The Home cards and this table show overlapping facts (name, domain, status).

### Option 2: Add a table view toggle to Home

Home gets a switch between cards and a table, and the sidebar item stays on Home.

**Pros**:
- No new page or sidebar item.

**Cons**:
- Home polls and holds the period switch, so a table with row actions and a confirm dialog would sit on a page that reloads itself.
- Home is for numbers, and this page is for managing deployments. Mixing them blurs both.

### Option 3: A slide in panel for managing deployments

A sheet opened from the sidebar that lists deployments.

**Pros**:
- Reachable from any page without leaving it.

**Cons**:
- Cramped for a table with three actions at 375px, and it has no address to link to or bookmark.

## Rationale

Managing deployments is a different job from reading their numbers, so it gets its own page (Option 2 would put row actions and a confirm dialog on a page that reloads every minute). A real address that can be linked to also rules out Option 3. Everything the table needs already exists as a route or a shared rule, so Option 1 is mostly wiring, and moving the dialog into one part removes the only copy that would otherwise have to be kept in step by hand. The engineer chose every recommended pick except two: they also want Pause or Resume in each row, and they chose not to refresh the list every 60 seconds, so a status badge can stay stale until the page is opened again or an action runs.

