# PayHub design reference (extracted for the Central Dashboard)

Source: the PayHub app at `C:\Users\salmanabdul.ghani\Herd\payhub` (read only, nothing was changed there). Extracted 2026-10-26 for spec 0003. Review this file, then say what to copy and what to change.

## 1. What PayHub looks like today

| Area | PayHub value | Where it lives in PayHub |
|---|---|---|
| Accent colour | Orange `hsl(24 100% 50%)` (`#FF6600`). Logo icon `#F26522` | `resources/css/app.css` (`--primary`, `--ring`, `--sidebar-primary`), `AppLogo.vue` |
| Font | Instrument Sans, weights 400, 500, 600, from `bunny()` | `vite.config.ts`, `app.css` |
| Page background | White `hsl(0 0% 100%)` | `--background` |
| Text | Near black `hsl(0 0% 3.9%)` | `--foreground` |
| Muted text | `hsl(0 0% 45.1%)` | `--muted-foreground` |
| Muted and accent fills | `hsl(0 0% 96.1%)` | `--muted`, `--accent` |
| Border | `hsl(0 0% 92.8%)`, cards use `border-border/70` | `--border` |
| Corner radius | `0.5rem`. Cards `rounded-xl`, controls `rounded-md` | `--radius`, `Card.vue` |
| Cards | `rounded-xl border bg-card shadow-sm`, KPI card padding `p-4` | `ui/card`, `dashboard/KpiCard.vue` |
| Sidebar | `variant="inset"`, `collapsible="icon"`. Warm cream `hsl(30 25% 96%)`, text `hsl(24 15% 22%)`, hover fill `hsl(30 25% 90%)`, border `hsl(30 25% 86%)`. A faint radial glow and a 24px dot grid sit behind it | `AppSidebar.vue`, bottom of `app.css` |
| Logo | A credit card icon in orange, then the text "Pay" (bold, dark) and "Hub" (light, grey). Text hides when the sidebar is collapsed | `AppLogo.vue` |
| Nav | Lucide icons. Groups with children (Payment Gateways, Banks/Wallets, People). Items depend on role | `AppSidebar.vue`, `NavMain.vue` |
| Status badge | Pill with a small dot and a ring: `text-[10px] font-bold uppercase tracking-widest ring-1`. Green (completed), amber with pulse (pending), red (failed), grey (cancelled). Tints are Tailwind emerald, amber, red and zinc 50/700/200 | `PaymentStatusBadge.vue` |
| KPI card | Label `text-[11px] font-semibold uppercase tracking-widest` muted, small icon at the right, value `text-2xl font-semibold tracking-tight tabular-nums`. Two currencies sit side by side at equal size, with the code above each (`text-[10px] uppercase`). A thin line then small `text-xs` muted sublines | `KpiCard.vue` |
| Section heading | `text-xl font-semibold tracking-tight`, description `text-sm text-muted-foreground` | `Heading.vue` |
| Buttons | shadcn defaults: height 36px (`h-9`), `rounded-md`, `text-sm font-medium`. Focus ring `ring-ring/50` 3px | `ui/button` |
| Layout | Sidebar layout, breadcrumb in the top bar, `Toaster` (sonner). Dashboard grids `sm:grid-cols-3`, `lg:grid-cols-3`, `lg:grid-cols-2`, gaps 3 to 4 | `AppSidebarLayout.vue`, `Dashboard.vue` |
| Dark mode | PayHub has it (warm dark `hsl(24 8% 10%)` sidebar). Central stays light only (spec 0003) | `.dark` in `app.css` |
| Icons | `lucide-vue-next` | everywhere |

## 2. Differences from what spec 0003 proposed

| Topic | Spec 0003 now | PayHub | Effect if we match PayHub |
|---|---|---|---|
| Accent | Blue `#2563EB` | Orange `#FF6600` | Brand match. **Contrast problem, see section 3** |
| Font | Inter | Instrument Sans | Brand match. Digits are less even, so keep `tabular-nums` |
| Sidebar | White, plain | Warm cream, inset, dot pattern | Brand match |
| Page background | Cool grey `#F8FAFC` | White | Cards then rely on border and shadow to stand out |
| Cards | `rounded-lg`, `p-6`, no shadow | `rounded-xl`, `shadow-sm`, `p-4` KPI | Denser and softer |
| Status badge | Sentence case, 12px | Uppercase, 10px bold, dot and ring | Brand match. 10px text is small |
| KPI card | One row per currency, stacked | Currencies side by side, equal size | Both keep currencies apart. Side by side breaks past 2 currencies |
| Logo | Text mark "PayHub Central" | Orange card icon plus "Pay" and "Hub" | Natural to reuse: "Pay" + "Hub" + "Central" |
| Colour of grey | Cool blue greys | Pure neutral greys | Warmer feel with the cream sidebar |

## 3. Things to decide before the spec changes

1. **Orange fails the contrast rule.** White text on `#FF6600` is about 2.9:1, and on `#F26522` about 3.2:1. Spec 0003 AC-10 needs 4.5:1 for text. A button with white text on that orange would fail. Choices:
   - Keep the exact orange for the logo, the focus ring, the active nav marker and large shapes, and use a darker orange for buttons and links. For example `hsl(24 100% 38%)` (`#C24E00`, white text 4.8:1).
   - Use the exact orange everywhere and relax AC-10 for buttons. Not recommended.
   - Keep orange buttons but use dark text on them. Changes the PayHub feel.
2. **Amber warning and orange accent look close.** The scheduler banner and the "stale" colour are amber. Next to an orange accent they may blur. Status colours should keep a word or icon, as AC-8 already requires, and the banner can use a stronger amber border plus an icon.
3. **Light only stays.** PayHub has dark mode. Central was chosen as light only. Say so now if you want dark mode to match PayHub.
4. **Money card layout.** Keep one row per currency (Central's choice) or switch to PayHub's side by side style.

## 4. Prompt to re-extract this later

If PayHub's look changes, paste this into a Claude Code session opened in `C:\Users\salmanabdul.ghani\Herd\payhub`:

> Read `resources/css/app.css`, `resources/css/brand-theme.css`, `vite.config.ts`, `resources/views/app.blade.php`, `resources/js/components/AppSidebar.vue`, `AppLogo.vue`, `PaymentStatusBadge.vue`, `dashboard/KpiCard.vue`, `Heading.vue`, `ui/button/index.ts`, `ui/badge/index.ts`, `ui/card/Card.vue`, and `pages/Dashboard.vue`. Write a markdown file with: every colour token (light and dark), the font and weights, the radius, card and badge classes, the sidebar style and background pattern, the logo markup, the nav structure, the KPI card layout, and the page grid. List exact values and file names, no opinions. Save it as `docs/design-reference.md`.
