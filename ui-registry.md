# UI registry

Visual patterns for PayHub Central. Read this before building any component, and match it. Token values live in `resources/css/app.css`. Spec: `docs/specs/0003-design-system-ui-foundation.md`. The app is light only, so there are no `dark:` classes.

## Page shell

### Page container and header

File: `resources/js/pages/Dashboard.vue`, `resources/js/components/PageHeader.vue`
Last updated: 2026-10-27

| Property | Class |
| --- | --- |
| Page wrapper | `mx-auto w-full max-w-7xl space-y-6 p-4 md:p-6` |
| Title (the only `h1`) | `text-xl font-semibold tracking-tight` |
| Description | `text-sm text-muted-foreground` |
| Header layout | `flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between` |
| Actions | `flex shrink-0 flex-wrap items-center gap-2` |

**Pattern notes:** every page starts with `PageHeader`. Exactly one `h1` per page. Breadcrumbs come from the layout, not the page.

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
Last updated: 2026-10-27

| Property | Class |
| --- | --- |
| Icon | `size-6 text-brand` (the exact PayHub orange, large shape only) |
| "Pay" | `text-foreground`, semibold |
| "Hub", "Central" | `font-light text-muted-foreground` |
| Text size | `text-lg font-semibold tracking-tight`, hidden when the sidebar is collapsed |

**Pattern notes:** `text-brand` is for the logo, the nav marker and large shapes only. It fails contrast for text.

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

**Pattern notes:** the skeleton uses the same padding, label row and `min-h-24` value area, so nothing jumps on load. Grid for cards: `grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4`.

### MoneyByCurrency

File: `resources/js/components/MoneyByCurrency.vue`
Last updated: 2026-10-27

| Property | Class |
| --- | --- |
| Row layout | `flex items-baseline justify-between gap-4`, rows `space-y-1` |
| Currency code | `text-[10px] font-semibold tracking-wider text-muted-foreground uppercase` |
| Amount | `text-xl font-semibold tracking-tight tabular-nums` |
| Empty text | `text-sm text-muted-foreground` ("No payments") |

**Pattern notes:** one row per currency, never a total. Text comes only from `formatMoney`. Use `text-2xl` for headline cards.

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
