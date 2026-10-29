import {
    _r as e,
    en as t,
    ht as n,
    mr as r,
    o as i,
    ot as a,
    sn as o,
} from './wayfinder-BZPu7hPl.js';
var s = n({
    __name: `Card`,
    props: { class: { type: [Boolean, null, String, Object, Array] } },
    setup(n) {
        let s = n;
        return (n, c) => (
            t(),
            a(
                `div`,
                {
                    'data-slot': `card`,
                    class: e(
                        r(i)(
                            `bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm`,
                            s.class,
                        ),
                    ),
                },
                [o(n.$slots, `default`)],
                2,
            )
        );
    },
});
export { s as t };
