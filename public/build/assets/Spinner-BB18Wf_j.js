import {
    at as e,
    gt as t,
    hr as n,
    s as r,
    tn as i,
    vr as a,
} from './wayfinder-DOENF6-v.js';
import { S as o } from './app-D8hkYQeO.js';
var s = t({
    __name: `Spinner`,
    props: { class: { type: [Boolean, null, String, Object, Array] } },
    setup(t) {
        let s = t;
        return (t, c) => (
            i(),
            e(
                n(o),
                {
                    role: `status`,
                    'aria-label': `Loading`,
                    class: a(n(r)(`size-4 animate-spin`, s.class)),
                },
                null,
                8,
                [`class`],
            )
        );
    },
});
export { s as t };
