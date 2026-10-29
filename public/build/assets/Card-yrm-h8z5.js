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
    __name: `Card`,
    props: { class: { type: [Boolean, null, String, Object, Array] } },
    setup(t) {
        let s = t;
        return (t, c) => (
            a(),
            i(
                `div`,
                {
                    'data-slot': `card`,
                    class: o(
                        n(r)(
                            `bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm`,
                            s.class,
                        ),
                    ),
                },
                [e(t.$slots, `default`)],
                2,
            )
        );
    },
});
export { s as t };
