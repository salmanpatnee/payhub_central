import {
    Bt as e,
    Nn as t,
    _r as n,
    c as r,
    en as i,
    ht as a,
    it as o,
    mr as s,
    o as c,
    ot as l,
    r as u,
    rt as d,
    sn as f,
} from './wayfinder-BZPu7hPl.js';
import { s as p } from './shared-D-a4oNoz.js';
var m = a({
        __name: `Badge`,
        props: {
            asChild: { type: Boolean },
            as: {},
            variant: {},
            class: { type: [Boolean, null, String, Object, Array] },
        },
        setup(n) {
            let r = n,
                a = p(r, `class`);
            return (l, d) => (
                i(),
                o(
                    s(u),
                    e(
                        {
                            'data-slot': `badge`,
                            class: s(c)(s(g)({ variant: n.variant }), r.class),
                        },
                        s(a),
                    ),
                    { default: t(() => [f(l.$slots, `default`)]), _: 3 },
                    16,
                    [`class`],
                )
            );
        },
    }),
    h = `gap-1.5 border-transparent text-[11px] font-bold uppercase tracking-widest ring-1 ring-inset before:size-1.5 before:shrink-0 before:rounded-full before:bg-current`,
    g = r(
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
    v = a({
        __name: `Table`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, r) => (
                i(),
                l(`div`, _, [
                    d(
                        `table`,
                        {
                            'data-slot': `table`,
                            class: n(
                                s(c)(`w-full caption-bottom text-sm`, t.class),
                            ),
                        },
                        [f(e.$slots, `default`)],
                        2,
                    ),
                ])
            );
        },
    }),
    y = a({
        __name: `TableBody`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, r) => (
                i(),
                l(
                    `tbody`,
                    {
                        'data-slot': `table-body`,
                        class: n(s(c)(`[&_tr:last-child]:border-0`, t.class)),
                    },
                    [f(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    b = a({
        __name: `TableCell`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, r) => (
                i(),
                l(
                    `td`,
                    {
                        'data-slot': `table-cell`,
                        class: n(
                            s(c)(
                                `p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]`,
                                t.class,
                            ),
                        ),
                    },
                    [f(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    x = a({
        __name: `TableHead`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, r) => (
                i(),
                l(
                    `th`,
                    {
                        'data-slot': `table-head`,
                        class: n(
                            s(c)(
                                `text-muted-foreground h-10 px-2 text-left align-middle text-[11px] font-semibold tracking-widest whitespace-nowrap uppercase [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]`,
                                t.class,
                            ),
                        ),
                    },
                    [f(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    S = a({
        __name: `TableHeader`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, r) => (
                i(),
                l(
                    `thead`,
                    {
                        'data-slot': `table-header`,
                        class: n(s(c)(`[&_tr]:border-b`, t.class)),
                    },
                    [f(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    C = a({
        __name: `TableRow`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, r) => (
                i(),
                l(
                    `tr`,
                    {
                        'data-slot': `table-row`,
                        class: n(
                            s(c)(
                                `hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors`,
                                t.class,
                            ),
                        ),
                    },
                    [f(e.$slots, `default`)],
                    2,
                )
            );
        },
    });
export { y as a, b as i, S as n, v as o, x as r, m as s, C as t };
