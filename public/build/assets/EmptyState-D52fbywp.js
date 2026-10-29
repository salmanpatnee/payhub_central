import {
    at as e,
    cn as t,
    dn as n,
    gt as r,
    it as i,
    ot as a,
    st as o,
    tn as s,
    xr as c,
} from './wayfinder-DOENF6-v.js';
var l = {
        class: `flex flex-col items-center gap-3 rounded-xl border border-dashed border-border px-6 py-12 text-center`,
    },
    u = {
        key: 0,
        class: `flex size-10 items-center justify-center rounded-full bg-muted text-muted-foreground`,
    },
    d = { class: `space-y-1` },
    f = { class: `text-base font-medium` },
    p = { class: `max-w-md text-sm text-muted-foreground` },
    m = { key: 1, class: `mt-1` },
    h = r({
        __name: `EmptyState`,
        props: { title: {}, description: {}, icon: {} },
        setup(r) {
            return (h, g) => (
                s(),
                o(`div`, l, [
                    r.icon
                        ? (s(),
                          o(`div`, u, [
                              (s(),
                              e(n(r.icon), {
                                  class: `size-5`,
                                  'aria-hidden': `true`,
                              })),
                          ]))
                        : a(``, !0),
                    i(`div`, d, [
                        i(`h2`, f, c(r.title), 1),
                        i(`p`, p, c(r.description), 1),
                    ]),
                    h.$slots.actions
                        ? (s(), o(`div`, m, [t(h.$slots, `actions`)]))
                        : a(``, !0),
                ])
            );
        },
    });
export { h as t };
