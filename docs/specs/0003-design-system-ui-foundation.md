# 0003. Design system and UI foundation

**Date**: 2026-10-26
**Status**: Accepted

## Summary

This sets the look and the shared building blocks for every page: one set of colours, one font, one page layout, and a few small parts that show money, times, empty pages and loading pages the same way everywhere. It is the Laravel Vue starter kit with PayHub's own look laid on top (orange accent, Instrument Sans, warm cream sidebar, white pages), as tokens (named style values), light mode only. The exact PayHub values are in `docs/design-reference-payhub.md`. Money always shows one row per currency and is never added across currencies. The Home page proves the parts in the real app. There is no separate preview or sample page.

## Context

**Workspace**: single repo, one app. The scope feature is "4. Design system & UI foundation" (Foundation phase). It follows spec 0001 (stack) and 0002 (data model).

- **PayHub is the visual reference.** Central must look like PayHub (same orange, font, sidebar and card style), extracted in `docs/design-reference-payhub.md`. PayHub's orange is too light for white text (about 2.9:1), so brand use and text use need separate values.
- **The starting point.** The Vue starter kit already gives a left sidebar layout, 22 shadcn-vue parts (Reka UI), Tailwind 4, and a plain black and white theme with a dark mode switch and the font Instrument Sans. No `design.md` exists. The kit's Welcome page, Dashboard placeholder and appearance settings are leftovers from a general purpose app.
- **What staff do with the app.** They glance at money and freshness numbers many times a day, often per currency, and some will check from a phone. The wrong number is worse than no number, so the screen must never imply zero or a combined total that is not real.
- **Rules from the brief that reach the UI.** Different currencies are never added together. Links count by created date and money by paid date, and the page must explain this in plain words. Times show in the timezone of each reply. A dead scheduler must be visible (spec 0001 asks for a warning banner in the layout).
- **Why now.** Pages 5 to 13 all depend on the same shell, header, money and time display. If each page decides its own look, money will be formatted in several ways and the states will drift apart.
- **Prerequisites.** Login (feature 5) is not built yet. The kit's own login pages and the `dashboard` route are used as they are. No decision here depends on login.

## Requirements

**User stories**:
- As a staff member, I want every page to look and behave the same so that I can find numbers quickly.
- As a staff member, I want each currency on its own row so that I never read a total that mixes currencies.
- As a staff member, I want to see how fresh a number is, and the exact time when I ask, so that I can trust it.
- As a staff member using a keyboard or a phone, I want every control to be reachable and readable so that I can use the app anywhere.
- As the developer, I want shared parts and tokens so that each later page is quick to build and looks right.

**Acceptance criteria** (the contract, each one independently checkable):
- **AC-1**: Colours, corner radius, font and spacing scale are defined once, as tokens in `resources/css/app.css`. Parts added by this feature use tokens only, with no hard coded colour values.
- **AC-2**: The app is light only. The dark mode switch, the Appearance settings page and its route and menu entry, the `HandleAppearance` middleware, the `appearance` cookie exception, the dark script and class in `app.blade.php`, and the `.dark` token block are removed. No page sets a `dark` class. A computer set to dark mode still shows the light app (the `dark:` classes in kit parts never apply).
- **AC-3**: Every logged in page uses the sidebar shell. On screens 768px wide and up the sidebar can collapse to icons, and it remembers the choice. Below 768px it opens as a slide in menu.
- **AC-4**: `PageHeader` shows the page title (the only `h1` on the page), an optional one line plain description, and an actions area on the right. The breadcrumb comes from the layout above it.
- **AC-5**: `MoneyByCurrency` shows one row per currency, code on the left and amount on the right with tabular digits. It never sums across currencies. An unknown currency code still shows its own row. Amounts come in as whole cents (1500 means 15.00, per the PayHub contract) and are shown with 2 decimals for every currency, as a plain number with thousands grouping and no symbol. Codes show in uppercase. An empty `{}` shows "No payments". A value that is not a whole number shows "—", never 0. A real zero shows as `0.00`.
- **AC-6**: `RelativeTime` shows text such as "5 min ago". The exact date and time, with the timezone, shows on hover, on keyboard focus and on tap (the trigger takes focus and the exact time is also in screen reader text). An empty time shows "Never". It renders a `<time datetime>` element.
- **AC-7**: `EmptyState` shows an icon, a title, a short reason and at most one next step action. Skeleton versions of `StatCard` have the same size as the real card (the value area has a minimum height of 3 currency rows), so nothing jumps when data arrives. Skeleton pulse stops when the person asks for reduced motion.
- **AC-8**: The `Badge` part has `success`, `warning` and `danger` variants (green, amber, red). These colours are reserved for status only. Each use carries a word or icon, never colour alone.
- **AC-9**: `SchedulerBanner` is a full width amber strip under the top bar, shown on every page when a `scheduler.stale` flag is true. It cannot be dismissed. Its fixed text is: "Numbers are not updating: scheduled pulls have stopped. Ask the developer to check the server cron."
- **AC-10**: Every control shows a visible keyboard focus indicator with at least 3:1 contrast. Text has at least 4.5:1 contrast. A "Skip to main content" link is the first tab stop and jumps to `<main id="main-content" tabindex="-1">`. All parts work by keyboard alone.
- **AC-11**: At 375px width there is no sideways scroll on the page. Cards stack in one column. Wide tables scroll inside their own wrapper.
- **AC-12**: The font Instrument Sans (400, 500, 600, the same as PayHub) is self hosted through the kit's font tool, with no outside font request at runtime. Digits are tabular in money, tables and numbers.
- **AC-13**: The `dashboard` route (the Home placeholder) renders in the new shell with `PageHeader` and an `EmptyState` ("No deployments yet"), and needs a login.

## Options considered

### Option 1: Extend the starter kit with our own tokens and a few shared parts

Keep shadcn-vue (Reka UI) and the kit layout. Replace the colour tokens, font and radius with PayHub's values, remove dark mode, and add a small set of parts for the things this app does every page (money rows, relative time, empty state, stat card, banner).

**Pros**:
- Smallest change, and shadcn-vue parts live in the repo so every part can be edited.
- Same family of tools as PayHub, as spec 0001 chose.
- Later pages add almost no new UI code.

**Cons**:
- The kit's focus ring is faint (`ring/50`) and needs a contrast pass.
- Removing dark mode touches several kit files.

### Option 2: Keep the kit's look and style each page by hand

No token changes and no shared parts. Each feature styles its own cards and numbers.

**Pros**:
- Zero work now.

**Cons**:
- Money and time would be formatted differently on each page, which risks a wrong or mixed currency display.
- Redoing the look later means touching every page.

### Option 3: Swap in a different component library or add a component workshop tool

Use a different library (a larger all in one kit) or add Storybook to document parts.

**Pros**:
- Richer parts out of the box, and living docs in Storybook.

**Cons**:
- Drifts from PayHub's tools and adds a new thing to learn and update.
- Storybook is heavy for a small team and a read only internal app with a handful of pages.

## Decision

**Chosen option**: Option 1: Extend the starter kit with our own tokens and a few shared parts.

Keep shadcn-vue and the kit layout, copy PayHub's look (orange accent, Instrument Sans, warm inset sidebar, white pages, `rounded-xl` cards with a soft shadow, pill status badges, uppercase small labels), apply the tokens and rules below, add the shared parts below. There is no preview artifact or sample page (engineer's choice, 2026-10-27); the Home page is the proof in the real app.

**Implementation skills**: none installed.

## Rationale

Staff will move between PayHub and Central, so Central copies PayHub's look; only the orange needed a split into a brand value and a darker text value to pass contrast. The app is small, internal and read only, with a handful of pages and a team of one or two (Context). That points to the least new machinery: the kit already gives the layout, 22 parts, Tailwind 4 and accessible Reka UI behaviour, so only the look and a few repeated displays need work. The shared parts exist for one reason: money and time are the two things the brief says must never be wrong, so they are formatted in exactly one place. Option 2 would spread that rule across nine features. Option 3 adds upkeep without a matching need.

Light only follows the engineer's choice. It removes a whole set of states to test and a settings page. The cost is that people who prefer dark screens cannot switch, which is accepted (see Consequences).

Stale and unavailable states were left out of this feature on purpose. They depend on rules still undecided (the time limits are in the scope's Deferred list), and feature 8 owns the unavailable state. This feature only reserves the colours so those states will match.

## Feature design

**Data model sketch**: none. This feature stores nothing and adds no tables or columns.

**State transitions**: none.

**API surface**: no new routes or endpoints. The existing `dashboard` route is reused as the Home placeholder, and the Appearance settings route is removed.

### Design tokens

All tokens live in `resources/css/app.css` (the existing `:root` block and the `@theme inline` map). Remove the `.dark` block. Keep `@custom-variant dark (&:is(.dark *))` so the kit's `dark:` classes never match (nothing sets `.dark`). Deleting it would let Tailwind 4 fall back to the computer's dark setting.

| Token | Value | Use |
|---|---|---|
| `--background`, `--card`, `--popover` | `hsl(0 0% 100%)` | White pages and cards (as PayHub) |
| `--foreground`, `--card-foreground`, `--popover-foreground` | `hsl(0 0% 3.9%)` | Body text (as PayHub) |
| `--muted-foreground` | `hsl(0 0% 40%)` | Secondary text. PayHub's 45.1% is 4.7:1 on white but fails on grey fills, so Central uses 40% (5.7:1) |
| `--brand` | `hsl(24 100% 50%)` (`#FF6600`) | PayHub orange for the logo icon, the active nav marker and large shapes only. Never for text or small controls (2.9:1 on white) |
| `--primary`, `--ring`, `--sidebar-ring` | `hsl(24 100% 38%)` (`#C24E00`) | Buttons, links, focus ring. White text on it is 4.8:1 and the ring is above 3:1 on white |
| `--primary-foreground` | `hsl(0 0% 100%)` | Text on buttons |
| `--secondary` / `--secondary-foreground` | `hsl(0 0% 92.1%)` / `hsl(0 0% 9%)` | Quiet buttons (as PayHub) |
| `--muted`, `--accent` | `hsl(0 0% 96.1%)` | Quiet fills, skeletons, hover (as PayHub) |
| `--accent-foreground` | `hsl(0 0% 9%)` | Text on hover fills |
| `--border` | `hsl(0 0% 92.8%)` | Lines. Cards use `border-border/70` (as PayHub) |
| `--input` | `hsl(0 0% 55%)` | Form field borders. PayHub's 89.8% fails the 3:1 rule for field borders, so Central uses 55% |
| `--radius` | `0.5rem` | Controls `rounded-md`, cards `rounded-xl` (as PayHub) |
| `--sidebar` / `--sidebar-background` | `hsl(30 25% 96%)` | Warm cream sidebar (as PayHub) |
| `--sidebar-foreground` / `--sidebar-accent` / `--sidebar-accent-foreground` / `--sidebar-border` | `hsl(24 15% 22%)` / `hsl(30 25% 90%)` / `hsl(24 15% 18%)` / `hsl(30 25% 86%)` | Sidebar text, hover, border (as PayHub) |
| `--sidebar-primary` | `hsl(24 100% 38%)` | Sidebar active text and links. The active nav marker uses `--brand` |
| `--success` / `--success-soft` / `--success-border` | `#047857` / `#ECFDF5` / `#A7F3D0` | Healthy status only (Tailwind emerald 700, 50, 200, as PayHub) |
| `--warning` / `--warning-soft` / `--warning-border` | `#92400E` / `#FFFBEB` / `#FDE68A` | Stale and scheduler banner only (PayHub uses amber 700; Central uses 800 text for more contrast) |
| `--danger` / `--danger-soft` / `--danger-border` | `#B91C1C` / `#FEF2F2` / `#FECACA` | Failed and unavailable only (red 700, 50, 200, as PayHub) |
| `--destructive` / `--destructive-foreground` | same as `--danger` / `hsl(0 0% 100%)` | Delete buttons |
| `--chart-1` to `--chart-5` | kit defaults (unused) | Not used in this app |

Rule: green, amber and red mean status and nothing else. Orange is the brand and the accent, never a status. The amber banner and the orange accent are far enough apart in lightness, and the banner always carries an icon and words. Register the three status tokens in `@theme inline` so Tailwind classes such as `text-success` work. The kit's `--destructive` stays for delete buttons.

### Type, spacing and layout

- **Font**: Instrument Sans, weights 400, 500, 600, exactly as PayHub (`bunny('Instrument Sans', {weights: [400, 500, 600]})` in `vite.config.ts` and `@fonts` in `resources/views/app.blade.php`). PayHub's blade file rewrites the font addresses to `/build/...`, which suggests the files are served from its own site. Confirm the same for Central, and if the page links to fonts.bunny.net at runtime, switch to the `@fontsource/instrument-sans` package so AC-12 holds. Numbers use `tabular-nums`.
- **Type scale** (as PayHub): page title `text-xl font-semibold tracking-tight`; section title `text-base font-medium`; body and tables `text-sm`; card label `text-[11px] font-semibold uppercase tracking-widest text-muted-foreground`; currency code `text-[10px] font-semibold uppercase tracking-wider`; money value `text-xl font-semibold tracking-tight tabular-nums` (`text-2xl` on headline cards); small meta `text-xs`.
- **Spacing**: Tailwind's 4px scale. Page padding `p-4 md:p-6`. Cards are `rounded-xl border border-border/70 bg-card shadow-sm`, with `p-4` padding for stat cards (as PayHub's KPI card). Gap between cards `gap-4`. Content max width `max-w-7xl`.
- **Card grid**: `grid-cols-1 sm:grid-cols-2 xl:grid-cols-3`.
- **Shell**: the kit's sidebar layout with `variant="inset"` and `collapsible="icon"`, as PayHub. The sidebar has the warm cream background with PayHub's faint glow and 24px dot pattern behind it (`[data-sidebar="sidebar"]` rule in `app.css`). Top bar holds the sidebar trigger and the breadcrumb. The user menu (profile, password, two factor, log out) stays in the sidebar footer. Sidebar items are Home, Deployments and Staff. Only Home exists now. Features 6, 12 and 13 add their own items.
- **App name and logo**: `APP_NAME="PayHub Central"`. The logo copies PayHub's: an orange (`--brand`) credit card icon, then "Pay" (semibold, dark), "Hub" (light, grey) and "Central" (light, grey). The text hides when the sidebar is collapsed. Icons come from `lucide-vue-next`.
- **Messages**: success confirmations use the kit's toast (`sonner`). Field errors show inline under the field with `InputError`. Destructive actions ask first in a `Dialog`.
- **Focus**: one global rule `focus-visible:ring-2 ring-ring ring-offset-2 ring-offset-background` at full strength, applied to the kit parts too (replacing `ring-ring/50`).
- **Dark mode**: PayHub has it, Central does not (engineer's choice, see Consequences).
- **Small clean ups**: remove the kit's footer links (repo and docs), label the `dashboard` route "Home" in the nav and breadcrumb, and delete the unused header layout variant.
- **Motion**: transitions are short, and everything animated has a `motion-reduce:` fallback.

### Shared parts

All new parts go in `resources/js/components/`, in TypeScript with `<script setup>`, and use tokens only.

| Part | Inputs | Behaviour |
|---|---|---|
| `PageHeader` | `title`, `description?`, actions slot | One `h1`, description in muted text, actions right aligned (stack on phone) |
| `StatCard` | `label`, optional `icon`, default slot for the value, footer slot | Same look as PayHub's `KpiCard`: uppercase small label with a small muted icon at the right. Built on the kit `Card`. Has a matching `StatCardSkeleton` |
| `MoneyByCurrency` | `amounts: Record<string, number>` (whole cents by currency code) | One row per currency, sorted by code. Uses `formatMoney` |
| `RelativeTime` | `at: string \| null` (UTC ISO), `timezone?: string` | `<time>` (focusable) with relative text, plus a popover with the exact time in the given timezone. The exact time is also in screen reader text |
| `EmptyState` | `title`, `description`, optional icon, actions slot | Centered block, at most one next step |
| `SchedulerBanner` | none (reads the page prop) | Amber strip, `role="status"`, not dismissible |
| `Badge` (existing) | adds variants `success`, `warning`, `danger`, `neutral` | PayHub's pill look: small dot, `ring-1`, `text-[11px] font-bold uppercase tracking-widest`, soft background, strong text. Always paired with a word, never colour alone |
| `Table` (new shadcn-vue part) | standard | Used later by pull history and staff list. Wrapped in a sideways scroll container |

Library code in `resources/js/lib/`: `formatMoney(cents, currency)` and `formatRelative(at, now)`. A small composable `useNow` gives one shared clock that ticks every 30 seconds, so many `RelativeTime` parts share one timer.

### Value sourcing

| Action | Value produced / displayed | Source |
|---|---|---|
| `MoneyByCurrency` | Currency code on each row | The key of the `amounts` object (the currency key from the saved reply) |
| `MoneyByCurrency` | Amount | Integer cents in the `amounts` value. No arithmetic on money in the browser |
| `MoneyByCurrency` | Decimal places | Always 2. The contract sends hundredths for every currency. A per currency lookup can be added later if PayHub says otherwise |
| `MoneyByCurrency` | Code case and order | Uppercase for display, sorted by the uppercase code (PayHub sends lowercase keys such as `usd`) |
| `MoneyByCurrency` | Output text | Built from the integer by splitting off the last two digits, with grouping and a leading minus for negatives. No float division and no symbol |
| `MoneyByCurrency` | Number style (grouping, separators) | A fixed locale constant `en-US`, the same for every staff member. Decided here |
| `RelativeTime` | The time shown | `pulled_at` (UTC). Freshness is measured from `pulled_at`, never `generated_at` (spec 0001) |
| `RelativeTime` | Timezone for the exact time | The timezone string from the reply (for example `Asia/Karachi`). If missing or invalid (the formatter throws), UTC |
| `RelativeTime` | Exact time text | `Intl.DateTimeFormat('en-US', {dateStyle:'medium', timeStyle:'medium', timeZone})` followed by the zone name, for example `Oct 26, 2026, 2:05:09 PM (Asia/Karachi)` |
| `RelativeTime` | "Now" | The browser clock through `useNow`. A time in the future (clock difference) shows "just now" |
| `SchedulerBanner` | Whether to show | Inertia shared prop `scheduler.stale`, typed as optional `scheduler?: { stale: boolean }` in the shared page props type. Feature 9 owns writing the heartbeat and the prop. If the prop is absent it counts as false, so the banner stays hidden until then |
| `PageHeader` | Title and description | The page's own props. Breadcrumbs come from the page's layout props (kit behaviour) |
| Shell | App name | `config('app.name')`, already shared by the kit as `name` |
| Shell | Sidebar open or collapsed | The kit's `sidebar_state` cookie |

**Relative time rules**: under 45 seconds "just now"; under 60 minutes "N min ago"; under 24 hours "N hours ago"; otherwise "N days ago". A small fixed English formatter, no `Intl.RelativeTimeFormat`. Whole numbers rounded down with a minimum of 1 ("1 min ago", "1 hour ago", "1 day ago").

**Key invariants**:
- No UI part adds amounts across currencies.
- A saved zero from a good reply shows as `0.00`. An absent or unavailable value is never rendered as zero (the unavailable display itself is designed in feature 8).
- Money values are integers on the way in. Only display code turns them into decimals.
- Status colours are used for status only, and never alone.
- Exactly one `h1` per page.
- No part receives or shows a token. Parts take plain display values only.

**Security model**: no new data and no new endpoints. Every page stays behind login (feature 5). Nothing here may render a deployment token or any value from a reply beyond the display fields above. No compliance scope is added by this feature.

**Configuration required**:
- `APP_NAME="PayHub Central"` in `.env.example` and `.env`.
- Instrument Sans font registration (the kit's font tool config, as in PayHub's `vite.config.ts`).

**Critical test scenarios** (each maps to an acceptance criterion in `## Requirements`):
- Happy path: the Home page for a logged in user renders the shell, header and empty state, verifies **AC-3**, **AC-4**, **AC-13**
- Formatting: `formatMoney` for `pkr` 125000000 (`1,250,000.00`, code `PKR`), `jpy` 5000 (`50.00`), an unknown code `zzz`, `0`, a negative, `{}` and a non whole value, verifies **AC-5**
- Never combine: `MoneyByCurrency` with `PKR` and `USD` shows two rows and no total row, verifies **AC-5**
- Time: `formatRelative` at 10 s, 5 min, 3 h, 2 d, null, and a future time, verifies **AC-6**
- Auth: a logged out request to the Home page is redirected to login, verifies **AC-13**
- Dark mode gone: the Appearance route returns 404, no `dark` class is set in the HTML, and with the browser emulating a dark computer the parts still render light, verifies **AC-2**
- Keyboard: tab through the shell and sample parts, every stop shows a focus indicator and the skip link is first, verifies **AC-10**
- Phone: at 375px width the Home page has no sideways scroll, verifies **AC-11**

## Build plan

Order follows Tracer Bullet: first one thin thread that changes how a real page looks end to end (tokens, shell, a Home page using a header and an empty state), then thicken with the parts that later pages need.

1. [x] Set the tokens in `resources/css/app.css`, set the font to Instrument Sans (400, 500, 600) as PayHub does, add the sidebar dot pattern rule and the PayHub logo, set `APP_NAME`, remove the `.dark` block, `useAppearance`, `AppearanceTabs`, the Appearance page, route and menu entry, the `HandleAppearance` middleware and its registration, the `appearance` cookie exception, and the dark script and `@class` in `app.blade.php`, change the inline page background to the new `--background`, keep a never matching `dark` variant, satisfies **AC-1**, **AC-2**, **AC-12**
2. [x] Update the shell: `collapsible="icon"`, text mark in the header, Home nav item, skip link, `SchedulerBanner` slot under the top bar, satisfies **AC-3**, **AC-9**, **AC-10**
3. [x] Add `PageHeader` and `EmptyState`, and rebuild the `dashboard` page with them (the thin thread end to end), satisfies **AC-4**, **AC-7**, **AC-13**
4. [x] Add `formatMoney`, `formatRelative`, `useNow`, `MoneyByCurrency` and `RelativeTime`, with unit tests for the two formatters, satisfies **AC-5**, **AC-6**
5. [x] Add `StatCard`, `StatCardSkeleton` and the reduced motion rule, satisfies **AC-7**
6. [x] Add the `success`, `warning` and `danger` badge variants and the shadcn-vue `Table` part, satisfies **AC-8**, **AC-11**
7. [x] Accessibility and phone pass: strengthen the kit's weak focus ring where needed, check token contrast, tab through everything, check at 375px, satisfies **AC-10**, **AC-11**
8. ~~Publish the preview artifact~~ Dropped by the engineer on 2026-10-27. No preview artifact is built, and nothing replaces it. AC-13 is met by the Home page alone.

## Consequences

**Positive**:
- Money and time are formatted in exactly one place each, so a wrong format is a one line fix.
- Later pages are mostly assembly, with almost no new styling.
- Status colours mean one thing everywhere.

**Negative / tradeoffs**:
- The exact PayHub orange is used only for the logo, the nav marker and large shapes. Buttons and links use a darker orange, so they look slightly deeper than PayHub's. If PayHub changes its orange, `--brand` and `--primary` both need updating.
- Light only, unlike PayHub. Staff who prefer a dark screen cannot switch. The dark tokens are deleted, so bringing dark mode back later is a small piece of work, not a toggle.
- Stale and unavailable states are not designed here. Feature 8 must design the unavailable display, and a later feature the stale badge. The reserved colours and the badge variants make that cheap, but the risk is that the brief's "never show zero" rule is first seen on screen in feature 8.
- A fixed `en-US` style and 2 decimals for every currency may differ from how a local bank writes some currencies (for example yen). Accepted because the contract sends hundredths.
- Changing the font and removing dark mode touches several kit files, so merging future kit updates by hand will need care.

**Neutral**:
- The `Table` part is added now because pull history and staff list both need it.
- Full WCAG AA across all pages stays in the scope's Deferred list. This feature only sets the baseline in AC-10.

## Follow-up

- [x] Scope row for feature 4: "done when" no longer mentions a preview artifact (done in the scope, 2026-10-27).
- [ ] Confirm at build time whether the `bunny()` font tool serves Instrument Sans from our own site, as PayHub appears to. If not, use `@fontsource/instrument-sans` and record it here.
- [x] Confirmed in the PayHub code on 2026-10-27: `payments.amount` is an integer, PayHub divides by 100 with 2 decimals, `CentralSummary` sends the raw sum, and only usd, gbp and pkr are supported. The 2 decimal rule is final.
- [ ] Confirm Vite+ can run unit tests (`vp test`). If not, test `formatMoney` and `formatRelative` through the lightest option available and record the choice.
- [ ] Feature 8 (home page) designs the unavailable state. The stale badge and its time limits stay in the scope's Deferred list.
- [ ] Feature 9 (scheduled pulls) writes the scheduler heartbeat and the `scheduler.stale` shared prop. Until then the banner stays hidden, so a dead cron is not visible before feature 9 ships.
- [ ] Feature 5 (invite only login) removes the kit's Welcome page and sign up pages. This feature does not touch them.
- [ ] After the build, run `/imprint` to save the visual patterns to `ui-registry.md`, so later components match.
- [ ] If PayHub's look changes, re-run the extract prompt at the bottom of `docs/design-reference-payhub.md` and update the tokens.
- [ ] Optional: find Agent Skills and MCP servers for Vue, Tailwind and shadcn-vue (postponed in spec 0001).
