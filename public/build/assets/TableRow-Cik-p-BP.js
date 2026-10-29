import {
    Pn as e,
    Vt as t,
    at as n,
    cn as r,
    gt as i,
    hr as a,
    i as o,
    it as s,
    l as c,
    s as l,
    st as u,
    tn as d,
    vr as f,
} from './wayfinder-DOENF6-v.js';
import { s as p } from './shared-CHjORj-0.js';
var m = i({
        __name: `Badge`,
        props: {
            asChild: { type: Boolean },
            as: {},
            variant: {},
            class: { type: [Boolean, null, String, Object, Array] },
        },
        setup(i) {
            let s = i,
                c = p(s, `class`);
            return (u, f) => (
                d(),
                n(
                    a(o),
                    t(
                        {
                            'data-slot': `badge`,
                            class: a(l)(a(g)({ variant: i.variant }), s.class),
                        },
                        a(c),
                    ),
                    { default: e(() => [r(u.$slots, `default`)]), _: 3 },
                    16,
                    [`class`],
                )
            );
        },
    }),
    h = `gap-1.5 border-transparent text-[11px] font-bold uppercase tracking-widest ring-1 ring-inset before:size-1.5 before:shrink-0 before:rounded-full before:bg-current`,
    g = c(
        `inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden`,
        {
            variants: {
                variant: {
                    default: `border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90`,
                    secondary: `border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90`,
                    destructive: `border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60`,
                    outline: `text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground`,
                    success: `${h} bg-success-soft text-success ring-success-border`,
                    warning: `${h} bg-warning-soft text-warning ring-warning-border`,
                    danger: `${h} bg-danger-soft text-danger ring-danger-border`,
                    neutral: `${h} bg-muted text-muted-foreground ring-border`,
                },
            },
            defaultVariants: { variant: `default` },
        },
    ),
    _ = {
        'data-slot': `table-container`,
        class: `relative w-full overflow-x-auto`,
    },
    v = i({
        __name: `Table`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                d(),
                u(`div`, _, [
                    s(
                        `table`,
                        {
                            'data-slot': `table`,
                            class: f(
                                a(l)(`w-full caption-bottom text-sm`, t.class),
                            ),
                        },
                        [r(e.$slots, `default`)],
                        2,
                    ),
                ])
            );
        },
    }),
    y = i({
        __name: `TableBody`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                d(),
                u(
                    `tbody`,
                    {
                        'data-slot': `table-body`,
                        class: f(a(l)(`[&_tr:last-child]:border-0`, t.class)),
                    },
                    [r(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    b = i({
        __name: `TableCell`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                d(),
                u(
                    `td`,
                    {
                        'data-slot': `table-cell`,
                        class: f(
                            a(l)(
                                `p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]`,
                                t.class,
                            ),
                        ),
                    },
                    [r(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    x = i({
        __name: `TableHead`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                d(),
                u(
                    `th`,
                    {
                        'data-slot': `table-head`,
                        class: f(
                            a(l)(
                                `text-muted-foreground h-10 px-2 text-left align-middle text-[11px] font-semibold tracking-widest whitespace-nowrap uppercase [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]`,
                                t.class,
                            ),
                        ),
                    },
                    [r(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    S = i({
        __name: `TableHeader`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                d(),
                u(
                    `thead`,
                    {
                        'data-slot': `table-header`,
                        class: f(a(l)(`[&_tr]:border-b`, t.class)),
                    },
                    [r(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    C = i({
        __name: `TableRow`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                d(),
                u(
                    `tr`,
                    {
                        'data-slot': `table-row`,
                        class: f(
                            a(l)(
                                `hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors`,
                                t.class,
                            ),
                        ),
                    },
                    [r(e.$slots, `default`)],
                    2,
                )
            );
        },
    });
export { y as a, b as i, S as n, v as o, x as r, m as s, C as t };
