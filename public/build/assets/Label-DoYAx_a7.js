import {
    Bt as e,
    Nn as t,
    en as n,
    ht as r,
    it as i,
    mr as a,
    o,
    r as s,
    sn as c,
} from './wayfinder-BZPu7hPl.js';
import { t as l } from './useForwardExpose-B78G7oXS.js';
import { s as u } from './shared-D-a4oNoz.js';
var d = r({
        __name: `Label`,
        props: {
            for: { type: String, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1, default: `label` },
        },
        setup(r) {
            let o = r;
            return (
                l(),
                (r, l) => (
                    n(),
                    i(
                        a(s),
                        e(o, {
                            onMousedown: (l[0] ||= (e) => {
                                !e.defaultPrevented &&
                                    e.detail > 1 &&
                                    e.preventDefault();
                            }),
                        }),
                        { default: t(() => [c(r.$slots, `default`)]), _: 3 },
                        16,
                    )
                )
            );
        },
    }),
    f = r({
        __name: `Label`,
        props: {
            for: {},
            asChild: { type: Boolean },
            as: {},
            class: { type: [Boolean, null, String, Object, Array] },
        },
        setup(r) {
            let s = r,
                l = u(s, `class`);
            return (r, u) => (
                n(),
                i(
                    a(d),
                    e({ 'data-slot': `label` }, a(l), {
                        class: a(o)(
                            `flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50`,
                            s.class,
                        ),
                    }),
                    { default: t(() => [c(r.$slots, `default`)]), _: 3 },
                    16,
                    [`class`],
                )
            );
        },
    });
export { f as t };
