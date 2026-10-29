import {
    at as e,
    br as t,
    en as n,
    ht as r,
    it as i,
    ot as a,
    rt as o,
    sn as s,
    un as c,
} from './wayfinder-BZPu7hPl.js';
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
                n(),
                a(`div`, l, [
                    r.icon
                        ? (n(),
                          a(`div`, u, [
                              (n(),
                              i(c(r.icon), {
                                  class: `size-5`,
                                  'aria-hidden': `true`,
                              })),
                          ]))
                        : e(``, !0),
                    o(`div`, d, [
                        o(`h2`, f, t(r.title), 1),
                        o(`p`, p, t(r.description), 1),
                    ]),
                    h.$slots.actions
                        ? (n(), a(`div`, m, [s(h.$slots, `actions`)]))
                        : e(``, !0),
                ])
            );
        },
    });
export { h as t };
