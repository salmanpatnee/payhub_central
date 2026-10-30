# UI registry

Visual patterns for PayHub Central. Read this before building any component, and match it. Token values live in `resources/css/app.css`. Spec: `docs/specs/0003-design-system-ui-foundation.md`. The app is light only, so there are no `dark:` classes.

## Page shell

### Page container and header

File: `resources/js/pages/Dashboard.vue`, `resources/js/components/PageHeader.vue`
Last updated: 2026-10-30

| Property | Class |
| --- | --- |
| Page wrapper | `mx-auto w-full max-w-7xl space-y-6 p-4 md:p-6` |
| Title (the only `h1`) | `text-xl font-semibold tracking-tight` |
| Description | `text-sm text-muted-foreground` |
| Header layout | `flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between` |
| Actions | `flex shrink-0 flex-wrap items-center gap-2` |

**Pattern notes:** every page starts with `PageHeader`. Exactly one `h1` per page. Breadcrumbs come from the layout, not the page. The blue and peach `page-glow` background comes from the shell (`AppShell`), not from pages. Cards sit on it as white objects.

### Scheduler banner

File: `resources/js/components/SchedulerBanner.vue`
Last updated: 2026-10-27

| Property | Class |
| --- | --- |
| Background | `bg-warning-soft` |
| Border | `border-b border-warning-border` |
| Text | `text-sm font-medium text-warning` |
| Spacing | `px-4 py-2 md:px-6`, icon `mt-0.5 size-4`, `gap-2` |
| Role | `role="status"`, no dismiss button |

**Pattern notes:** amber means status only. Always an icon plus words, never colour alone.

### Logo

File: `resources/js/components/AppLogo.vue`
Last updated: 2026-10-30

| Property | Class |
| --- | --- |
| Mark | `hidden size-7 rounded-[10px] bg-linear-to-br from-brand to-primary shadow-sm group-data-[collapsible=icon]:grid`, white dot `size-2.5 rounded-full` |
| "Pay" | `text-foreground`, semibold |
| "Hub", "Central" | `font-light text-muted-foreground` |
| Text size | `text-lg font-semibold tracking-tight`, hidden when the sidebar is collapsed |

**Pattern notes:** the mark shows only when the sidebar is collapsed to icons; expanded, the wordmark stands alone (also on the login page). The brand orange is for the mark and large shapes only. It fails contrast for text.

### Sidebar (floating)

File: `resources/js/components/AppSidebar.vue`, `NavMain.vue`, `NavUser.vue`, `AppShell.vue`
Last updated: 2026-10-30

| Property | Class |
| --- | --- |
| Variant | `variant="floating"` `collapsible="icon"` |
| Panel | `[data-variant='floating'] [data-sidebar='sidebar']` in `app.css`: white at 85% with blur, `rounded-[1.375rem]`, soft blue shadow |
| Tokens | `--sidebar-foreground` blue grey, `--sidebar-border` `hsl(225 30% 91%)`, `--sidebar-accent` soft orange, `--sidebar-accent-foreground` deep orange |
| Nav item | `rounded-xl hover:bg-muted`, active `data-[active=true]:bg-sidebar-accent font-semibold`, active keeps its tint on hover |
| User button | `rounded-2xl border border-sidebar-border bg-muted/60 hover:bg-muted data-[state=open]:bg-muted` |
| Page behind | `SidebarProvider` carries `page-glow`; `AppContent` is `bg-transparent` |

**Pattern notes:** the sidebar floats over the glow, content sits straight on it (no white inset card). Orange appears only on the active item. No count badges.

## Cards and numbers

### StatCard

File: `resources/js/components/StatCard.vue`, `StatCardSkeleton.vue`
Last updated: 2026-10-27

| Property | Class |
| --- | --- |
| Background | `bg-card` (kit `Card`) |
| Border | `border border-border/70` |
| Border radius | `rounded-xl` |
| Label | `text-[11px] font-semibold tracking-widest text-muted-foreground uppercase` |
| Icon | `size-4 text-muted-foreground` |
| Spacing | `gap-0 p-4`, value area `mt-2 min-h-24`, footer `mt-3 border-t border-border/50 pt-2 text-xs` |
| Shadow | `shadow-sm` (from `Card`) |
| Accent usage | none |

**Pattern notes:** the skeleton uses the same padding, label row and `min-h-24` value area, so nothing jumps on load. Grid for stat cards: `grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4`. Deployment cards use 2 columns, see below.

### MoneyByCurrency

File: `resources/js/components/MoneyByCurrency.vue`
Last updated: 2026-10-27

| Property | Class |
| --- | --- |
| Row layout | `flex items-baseline justify-between gap-4`, rows `space-y-1` |
| Currency code | `text-[10px] font-semibold tracking-wider text-muted-foreground uppercase` |
| Amount | `text-xl font-semibold tracking-tight tabular-nums` |
| Empty text | `text-sm text-muted-foreground` ("No payments") |

**Pattern notes:** one row per currency, never a total. Text comes only from `formatMoney`. Use `text-2xl` for headline cards. The Home card no longer uses it.

### RelativeTime

File: `resources/js/components/RelativeTime.vue`
Last updated: 2026-10-27

| Property | Class |
| --- | --- |
| Trigger | `<time tabindex="0" class="cursor-help rounded-sm underline decoration-dotted underline-offset-4">` |
| Popover | `w-auto px-3 py-2 text-xs tabular-nums` |
| Empty | `text-muted-foreground` ("Never") |

**Pattern notes:** exact time shows on hover, focus and tap, and is also in screen reader text. Text comes only from `formatRelative` and `formatExactTime`.

## Status and states

### Badge status variants

File: `resources/js/components/ui/badge/index.ts`
Last updated: 2026-10-27

| Property | Class |
| --- | --- |
| Shape | `rounded-full border-transparent ring-1 ring-inset` |
| Text | `text-[11px] font-bold uppercase tracking-widest` |
| Dot | `before:size-1.5 before:rounded-full before:bg-current` |
| success | `bg-success-soft text-success ring-success-border` |
| warning | `bg-warning-soft text-warning ring-warning-border` |
| danger | `bg-danger-soft text-danger ring-danger-border` |
| neutral | `bg-muted text-muted-foreground ring-border` |

**Pattern notes:** green, amber and red mean status and nothing else. A badge always carries a word.

### EmptyState

File: `resources/js/components/EmptyState.vue`
Last updated: 2026-10-27

| Property | Class |
| --- | --- |
| Container | `rounded-xl border border-dashed border-border px-6 py-12 text-center`, `gap-3` |
| Icon chip | `size-10 rounded-full bg-muted text-muted-foreground`, icon `size-5` |
| Title | `text-base font-medium` (`h2`) |
| Reason | `max-w-md text-sm text-muted-foreground` |

**Pattern notes:** icon, title, short reason and at most one next step.

### DeploymentCard (Sunrise)

File: `resources/js/components/DeploymentCard.vue`
Last updated: 2026-10-30

| Property | Class |
| --- | --- |
| Background | `bg-card` (kit `Card`) |
| Border | `border-border/70`, hover `hover:border-brand/50` |
| Border radius | `rounded-2xl` |
| Spacing | `group relative gap-3.5 p-4` |
| Hover state | `hover:-translate-y-0.5 hover:shadow-lg transition duration-200`, off under `motion-reduce` |
| Shadow | `shadow-sm` |
| Name (`h2`) | `text-lg font-semibold tracking-tight break-words`, the `Link` stretches over the card with `after:absolute after:inset-0 after:z-10 after:rounded-2xl` |
| Under the name | `text-xs text-muted-foreground` ("View deployment details") |
| Arrow button | `size-9 rounded-full bg-primary/10 text-primary`, `group-hover:bg-brand group-hover:text-white`, icon moves `group-hover:translate-x-0.5` |
| Stat tiles | `grid-cols-2 gap-2 xl:grid-cols-4`, tile `rounded-xl px-3 py-2.5`, value `text-2xl font-bold tracking-tight tabular-nums`, label `text-[11px] font-semibold tracking-widest uppercase` |
| Tile tones | Links `bg-info-soft text-info`, Completed `bg-success-soft text-success`, Pending `bg-warning-soft text-warning`, Failed `bg-danger-soft text-danger` |
| Currency table | in `overflow-hidden rounded-xl border border-border`, head `bg-muted/60`, code chip `rounded-md bg-muted px-2 py-0.5 text-xs font-bold tracking-wider`, paid `text-sm font-medium tabular-nums` |
| Empty line | `rounded-xl bg-muted px-4 py-3 text-sm text-muted-foreground` |
| Footer | `space-y-2 text-xs text-muted-foreground` |
| Warning chip | `inline-flex items-center gap-1 rounded-full bg-warning-soft px-2 py-0.5 font-medium text-warning ring-1 ring-warning-border ring-inset`, `TriangleAlert size-3` |

**Pattern notes:** the whole card is the link, so keep one link per card. No domain line, no avatar, no outcome bar. Grid is `grid-cols-1 lg:grid-cols-2`. Money uses the table and `formatMoney`. Tile colours are status colours (and blue `info` for the neutral Links count), always with a word. Numbers are never faded on Unavailable or Paused cards.

### Summary tile (Dashboard)

File: `resources/js/pages/Dashboard.vue`
Last updated: 2026-10-30

| Property | Class |
| --- | --- |
| Tile | `flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3.5 shadow-sm` |
| Chip | `size-10 rounded-xl text-xs font-bold`, currency `bg-info-soft text-info`, payments `bg-primary/10 text-primary` |
| Label | `text-xs text-muted-foreground` |
| Value | `text-2xl leading-tight font-bold tracking-tight tabular-nums` |
| Grid | `grid-cols-1 gap-3.5 sm:grid-cols-[repeat(auto-fit,minmax(14rem,1fr))]` |

**Pattern notes:** one tile per currency, never a total across currencies, plus one payments tile.

### Period switch (segmented control)

File: `resources/js/pages/Dashboard.vue`
Last updated: 2026-10-30

| Property | Class |
| --- | --- |
| Track | `inline-flex w-full gap-0.5 rounded-xl border border-border bg-card p-1 shadow-sm sm:w-auto` |
| Button | `flex-1 rounded-lg px-4 py-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground sm:flex-none` |
| Selected | `aria-pressed:bg-foreground aria-pressed:text-background` |
| Focus | `focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:outline-none` |

**Pattern notes:** a plain `role="group"` of `button`s with `aria-pressed`, because the kit has no toggle group. It sits in the `PageHeader` actions slot, so it is full width on phones and right aligned from `sm`. State lives in the page, not the URL. The deployment page (`pages/deployments/Show.vue`) still uses the older grey track (`bg-muted`, selected `bg-card`) with four options; align it when that page is restyled.

### Summary card (deployment page)

File: `resources/js/pages/deployments/Show.vue`
Last updated: 2026-10-28

| Property | Class |
| --- | --- |
| Background | `bg-card` |
| Border | `border border-border/70` |
| Border radius | `rounded-xl` |
| Shadow | `shadow-sm` |
| Spacing | `space-y-3 p-4`, row grid `grid gap-4 md:grid-cols-[1.5fr_1fr_1fr]` |
| Label (`h2`) | `text-[11px] font-semibold tracking-widest text-muted-foreground uppercase` |
| Big count | `text-4xl font-semibold tracking-tight tabular-nums` |
| Money row | code `w-9 text-xs font-semibold tracking-wider uppercase`, amount `text-2xl font-semibold tracking-tight tabular-nums`, pending `text-xs text-muted-foreground`, rows `divide-y divide-border/50 py-2` |
| Footnote | `text-xs text-muted-foreground` |
| Hover state | none |
| Accent usage | none, status chips only |

**Pattern notes:** one period at a time. Three cards in a row: Money paid (widest), Links created, Needs attention. "All clear" replaces the count when nothing failed or is pending. Money text comes only from `formatMoney`, share text only from `formatPercent`.

### Status chip (solid word chip)

File: `resources/js/pages/deployments/Show.vue`
Last updated: 2026-10-28

| Property | Class |
| --- | --- |
| Shape | `inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset tabular-nums` |
| success | `bg-success-soft text-success ring-success-border` |
| warning | `bg-warning-soft text-warning ring-warning-border` |
| danger | `bg-danger-soft text-danger ring-danger-border` |

**Pattern notes:** always a number or words inside ("22 failed", "76% completed"). Slightly larger than the DeploymentCard warning chip (`px-2`, `font-medium`) because it is a headline element.

### Link outcome bar and list

File: `resources/js/pages/deployments/Show.vue`
Last updated: 2026-10-28

| Property | Class |
| --- | --- |
| Bar track | `flex h-2.5 gap-0.5 overflow-hidden rounded-full bg-muted` |
| Segment | `block min-w-[3px]`, width is the share of links |
| completed / pending / failed | `bg-success` / `bg-warning` / `bg-danger` |
| cancelled / expired | `bg-muted-foreground/60` / `bg-muted-foreground/30` |
| Legend swatch | `size-2 rounded-sm`, same colour as the segment |
| List row | `grid grid-cols-[auto_1fr_auto_3.5rem] gap-3 py-2`, `divide-y divide-border/50` |
| Count / share | count `text-base font-semibold tabular-nums`, share `text-right text-xs text-muted-foreground tabular-nums` |

**Pattern notes:** the bar is `aria-hidden`, the list carries the same numbers in words. Zero segments are not drawn.

### Compare table (selected period highlighted)

File: `resources/js/pages/deployments/Show.vue`
Last updated: 2026-10-28

| Property | Class |
| --- | --- |
| Wrapper | `overflow-x-auto` inside the summary card style |
| Head cell | `h-auto px-3 py-2 text-right` |
| Row label | `px-3 py-2 text-sm font-normal tracking-normal text-muted-foreground normal-case` |
| Number cell | `px-3 py-2 text-right text-sm tabular-nums` |
| Selected column | `bg-primary/5` on cells, plus `text-primary` on the head |
| Failed above zero | `font-semibold text-danger` |

**Pattern notes:** the highlight follows the period switch. `text-primary` is the dark orange (4.8:1), fine for text; `--brand` still never is. Rows: links created, completed rate, failed, one Paid row per currency, payments.

## Tables

### Table

File: `resources/js/components/ui/table/`
Last updated: 2026-10-27

| Property | Class |
| --- | --- |
| Wrapper | `relative w-full overflow-x-auto` (scrolls sideways inside itself) |
| Head cell | `h-10 px-2 text-[11px] font-semibold tracking-widest uppercase text-muted-foreground` |
| Body cell | `p-2 align-middle whitespace-nowrap` |
| Row | `border-b hover:bg-muted/50` |

**Pattern notes:** the page never scrolls sideways. Only the table wrapper does.

### Recent pulls (collapsible ledger table)

File: `resources/js/pages/deployments/Show.vue`
Last updated: 2026-10-28

| Property | Class |
| --- | --- |
| Wrapper | kit `Collapsible` as `section`, `overflow-hidden rounded-xl border border-border/70 bg-card shadow-sm`, closed by default |
| Trigger | full width `button` inside the `h2`: `flex w-full items-center justify-between gap-4 px-4 py-3 hover:bg-muted/40 focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:ring-inset` |
| Title | eyebrow style `text-[11px] font-semibold tracking-widest text-muted-foreground uppercase` |
| Chevron | `ChevronDown size-4 text-muted-foreground`, `group-data-[state=open]:rotate-180` |
| Table box | `overflow-x-auto border-t border-border/60`, header row `bg-muted/40 hover:bg-transparent`, cells `px-4 py-3` |
| Time cell | `text-sm font-medium tabular-nums` with `RelativeTime` |
| Result | `Badge` variant `success` (Good) or `danger` (Failed) |
| Source chip | `rounded-md bg-muted px-2 py-0.5 text-xs font-semibold text-foreground` |
| Reason cell | `min-w-64 text-sm whitespace-normal`, `text-muted-foreground` for "None", `text-foreground` when failed |
| Failed row | `bg-danger-soft border-danger-border/60`, plus `shadow-[inset_3px_0_0_var(--color-danger)]` on the first cell |
| Shadow | `shadow-sm` on the wrapper only |

**Pattern notes:** use this for any "latest N events" log: collapsed by default, a ledger table inside, failed rows tinted. The tint and edge always come with a Failed word badge, never colour alone. No summary counts or strips in the header, by choice. An empty list shows plain muted text under the title and has nothing to open.

## Forms

### Login form (auth pages)

File: `resources/js/pages/auth/Login.vue`, `resources/js/layouts/auth/AuthSimpleLayout.vue`
Last updated: 2026-10-27

| Property | Class |
| --- | --- |
| Page background | `bg-background`, centred with `flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10` |
| Form layout | `flex flex-col gap-6`, fields `grid gap-6`, one field `grid gap-2` (Label, then Input, then `InputError`) |
| Title | `text-xl font-medium` (the layout's only `h1`) |
| Description | `text-sm text-muted-foreground` |
| Submit | kit `Button` (primary), `mt-4 w-full`, `Spinner` while `processing` |
| Remember me | kit `Checkbox` inside a `Label` with `flex items-center space-x-3` |
| Status message | `mb-4 text-center text-sm font-medium text-green-600` |
| Shadow / border | none (no card around the form) |

**Pattern notes:** no "forgot password" or sign up links (invite only, spec 0004). Every auth page uses the same field stack, so new auth forms (such as the two factor code) should match it.

### Read only field (profile email)

File: `resources/js/pages/settings/Profile.vue`
Last updated: 2026-10-27

| Property | Class |
| --- | --- |
| Field wrapper | `grid gap-2`, Label then Input then hint |
| Input | kit `Input`, `mt-1 block w-full`, `disabled`, bound with `:model-value`, no `name` |
| Hint | `text-sm text-muted-foreground` |

**Pattern notes:** use this for any value a person may see but not edit. Say who can change it in the hint.

### Admin form (add deployment)

File: `resources/js/pages/deployments/Create.vue`
Last updated: 2026-10-27

| Property | Class |
| --- | --- |
| Page wrapper | `mx-auto w-full max-w-7xl space-y-6 p-4 md:p-6`, `PageHeader` first |
| Form | Inertia `Form`, `max-w-xl space-y-6`, no card around it |
| One field | `grid gap-2`: `Label`, kit `Input` (no extra classes), optional hint, `InputError` |
| Hint | `text-sm text-muted-foreground` |
| Secret field | `PasswordInput`, `autocomplete="off"`, `data-1p-ignore="true"`, `data-lpignore="true"`, `aria-label`, cleared with `reset-on-error` |
| On or off switch | kit `Checkbox` inside a `Label` with `flex items-center space-x-3`, same as Remember me |
| Submit | kit `Button` (primary) with `Spinner` while `processing`, not full width |
| Shadow / border | none |

**Pattern notes:** use this for every admin form (edit deployment in feature 12, staff in feature 13). Errors sit directly under their field. Never refill a secret field after an error. Put text containing `//` in a script constant, not in a template attribute.

## Global rules

| Property | Rule |
| --- | --- |
| Focus | One rule: `2px solid var(--ring)` outline, offset 2px. Kit parts use `focus-visible:ring-[3px] ring-ring` at full strength, never `ring-ring/50` |
| Primary action | `bg-primary text-primary-foreground` (dark orange, 4.8:1) |
| Muted text | `text-muted-foreground` (5.7:1 on white) |
| Form field border | `--input` (55% grey, 3:1) |
| Radius | controls `rounded-md`, cards `rounded-xl` |
| Numbers | `tabular-nums` on money, tables and counts |
| Colours | tokens only, no hex or raw palette classes in components |
