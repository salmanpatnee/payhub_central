import {
    at as e,
    br as t,
    en as n,
    ht as r,
    ot as i,
    rt as a,
    sn as o,
} from './wayfinder-BZPu7hPl.js';
var s = {
        class: `flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between`,
    },
    c = { class: `min-w-0 space-y-1` },
    l = { class: `text-xl font-semibold tracking-tight` },
    u = { key: 0, class: `text-sm text-muted-foreground` },
    d = { key: 0, class: `flex shrink-0 flex-wrap items-center gap-2` },
    f = r({
        __name: `PageHeader`,
        props: { title: {}, description: {} },
        setup(r) {
            return (f, p) => (
                n(),
                i(`div`, s, [
                    a(`div`, c, [
                        a(`h1`, l, t(r.title), 1),
                        r.description
                            ? (n(), i(`p`, u, t(r.description), 1))
                            : e(``, !0),
                    ]),
                    f.$slots.actions
                        ? (n(), i(`div`, d, [o(f.$slots, `actions`)]))
                        : e(``, !0),
                ])
            );
        },
    });
export { f as t };
