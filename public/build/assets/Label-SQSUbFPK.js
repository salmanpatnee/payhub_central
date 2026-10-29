import {
    Pn as e,
    Vt as t,
    at as n,
    cn as r,
    gt as i,
    hr as a,
    i as o,
    s,
    tn as c,
} from './wayfinder-DOENF6-v.js';
import { t as l } from './useForwardExpose-BVGbRqkE.js';
import { s as u } from './shared-CHjORj-0.js';
var d = i({
        __name: `Label`,
        props: {
            for: { type: String, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1, default: `label` },
        },
        setup(i) {
            let s = i;
            return (
                l(),
                (i, l) => (
                    c(),
                    n(
                        a(o),
                        t(s, {
                            onMousedown: (l[0] ||= (e) => {
                                !e.defaultPrevented &&
                                    e.detail > 1 &&
                                    e.preventDefault();
                            }),
                        }),
                        { default: e(() => [r(i.$slots, `default`)]), _: 3 },
                        16,
                    )
                )
            );
        },
    }),
    f = i({
        __name: `Label`,
        props: {
            for: {},
            asChild: { type: Boolean },
            as: {},
            class: { type: [Boolean, null, String, Object, Array] },
        },
        setup(i) {
            let o = i,
                l = u(o, `class`);
            return (i, u) => (
                c(),
                n(
                    a(d),
                    t({ 'data-slot': `label` }, a(l), {
                        class: a(s)(
                            `flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50`,
                            o.class,
                        ),
                    }),
                    { default: e(() => [r(i.$slots, `default`)]), _: 3 },
                    16,
                    [`class`],
                )
            );
        },
    });
export { f as t };
