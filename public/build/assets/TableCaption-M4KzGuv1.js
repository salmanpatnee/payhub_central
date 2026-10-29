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
    __name: `TableCaption`,
    props: { class: { type: [Boolean, null, String, Object, Array] } },
    setup(n) {
        let s = n;
        return (n, c) => (
            t(),
            a(
                `caption`,
                {
                    'data-slot': `table-caption`,
                    class: e(
                        r(i)(`text-muted-foreground mt-4 text-sm`, s.class),
                    ),
                },
                [o(n.$slots, `default`)],
                2,
            )
        );
    },
});
export { s as t };
