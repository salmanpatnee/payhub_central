import {
    cn as e,
    gt as t,
    it as n,
    ot as r,
    st as i,
    tn as a,
    xr as o,
} from './wayfinder-DOENF6-v.js';
var s = {
        class: `flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between`,
    },
    c = { class: `min-w-0 space-y-1` },
    l = { class: `text-xl font-semibold tracking-tight` },
    u = { key: 0, class: `text-sm text-muted-foreground` },
    d = { key: 0, class: `flex shrink-0 flex-wrap items-center gap-2` },
    f = t({
        __name: `PageHeader`,
        props: { title: {}, description: {} },
        setup(t) {
            return (f, p) => (
                a(),
                i(`div`, s, [
                    n(`div`, c, [
                        n(`h1`, l, o(t.title), 1),
                        t.description
                            ? (a(), i(`p`, u, o(t.description), 1))
                            : r(``, !0),
                    ]),
                    f.$slots.actions
                        ? (a(), i(`div`, d, [e(f.$slots, `actions`)]))
                        : r(``, !0),
                ])
            );
        },
    });
export { f as t };
