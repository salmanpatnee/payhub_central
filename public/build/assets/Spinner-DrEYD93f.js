import {
    _r as e,
    en as t,
    ht as n,
    it as r,
    mr as i,
    o as a,
} from './wayfinder-BZPu7hPl.js';
import { C as o } from './app-B62nLDgs.js';
var s = n({
    __name: `Spinner`,
    props: { class: { type: [Boolean, null, String, Object, Array] } },
    setup(n) {
        let s = n;
        return (n, c) => (
            t(),
            r(
                i(o),
                {
                    role: `status`,
                    'aria-label': `Loading`,
                    class: e(i(a)(`size-4 animate-spin`, s.class)),
                },
                null,
                8,
                [`class`],
            )
        );
    },
});
export { s as t };
