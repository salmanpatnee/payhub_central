import {
    cn as e,
    gt as t,
    hr as n,
    s as r,
    st as i,
    tn as a,
    vr as o,
} from './wayfinder-DOENF6-v.js';
var s = t({
    __name: `TableCaption`,
    props: { class: { type: [Boolean, null, String, Object, Array] } },
    setup(t) {
        let s = t;
        return (t, c) => (
            a(),
            i(
                `caption`,
                {
                    'data-slot': `table-caption`,
                    class: o(
                        n(r)(`text-muted-foreground mt-4 text-sm`, s.class),
                    ),
                },
                [e(t.$slots, `default`)],
                2,
            )
        );
    },
});
export { s as t };
