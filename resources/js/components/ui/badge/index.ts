import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export { default as Badge } from "./Badge.vue"

const statusPill =
  "gap-1.5 border-transparent text-[11px] font-bold uppercase tracking-widest ring-1 ring-inset before:size-1.5 before:shrink-0 before:rounded-full before:bg-current"

export const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
         "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        // Status pills (PayHub look): dot, ring, soft fill, strong text.
        // Colours here mean status only, and a badge always carries a word.
        success: `${statusPill} bg-success-soft text-success ring-success-border`,
        warning: `${statusPill} bg-warning-soft text-warning ring-warning-border`,
        danger: `${statusPill} bg-danger-soft text-danger ring-danger-border`,
        neutral: `${statusPill} bg-muted text-muted-foreground ring-border`,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)
export type BadgeVariants = VariantProps<typeof badgeVariants>
