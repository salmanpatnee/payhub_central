import {
    Nn as e,
    Sr as t,
    at as n,
    br as r,
    en as i,
    ft as a,
    ht as o,
    ir as s,
    it as c,
    mr as l,
    pt as u,
    rt as d,
    xn as f,
    zt as p,
} from './wayfinder-BZPu7hPl.js';
import { p as m } from './app-DTu1UyN-.js';
import { t as h } from './Spinner-Dkf-B2--.js';
import {
    a as g,
    i as _,
    n as v,
    o as y,
    r as b,
    t as x,
} from './dialog-D2--eof4.js';
var S = o({
    __name: `RemoveDeploymentDialog`,
    props: p(
        {
            name: {},
            removeHref: {},
            preserveState: { type: Boolean, default: !0 },
        },
        { open: { type: Boolean, default: !1 }, openModifiers: {} },
    ),
    emits: p([`missing`, `removed`], [`update:open`]),
    setup(o, { emit: p }) {
        let S = o,
            C = p,
            w = f(o, `open`),
            T = s(!1),
            E = s(!1);
        function D() {
            t.delete(S.removeHref, {
                preserveState: S.preserveState,
                onStart: () => (T.value = !0),
                onSuccess: () => (E.value = !0),
                onHttpException: (e) => {
                    if (e.status === 404) return (C(`missing`), !1);
                },
                onFinish: () => {
                    ((T.value = !1), (w.value = !1));
                },
            });
        }
        function O(e) {
            E.value && (e.preventDefault(), (E.value = !1), C(`removed`));
        }
        return (t, s) => (
            i(),
            c(
                l(y),
                {
                    open: w.value,
                    'onUpdate:open': (s[1] ||= (e) => (w.value = e)),
                },
                {
                    default: e(() => [
                        u(
                            l(g),
                            { onCloseAutoFocus: O },
                            {
                                default: e(() => [
                                    u(l(v), null, {
                                        default: e(() => [
                                            u(l(x), null, {
                                                default: e(() => [
                                                    a(
                                                        `Remove ` +
                                                            r(o.name) +
                                                            `?`,
                                                        1,
                                                    ),
                                                ]),
                                                _: 1,
                                            }),
                                            u(
                                                l(_),
                                                { as: `div` },
                                                {
                                                    default: e(() => [
                                                        ...(s[2] ||= [
                                                            d(
                                                                `ul`,
                                                                {
                                                                    class: `list-disc space-y-1 pl-5`,
                                                                },
                                                                [
                                                                    d(
                                                                        `li`,
                                                                        null,
                                                                        ` The token is wiped here and cannot be recovered. `,
                                                                    ),
                                                                    d(
                                                                        `li`,
                                                                        null,
                                                                        `The key can never be used again.`,
                                                                    ),
                                                                    d(
                                                                        `li`,
                                                                        null,
                                                                        ` This does not revoke the token inside PayHub. Revoke it there too. `,
                                                                    ),
                                                                ],
                                                                -1,
                                                            ),
                                                        ]),
                                                    ]),
                                                    _: 1,
                                                },
                                            ),
                                        ]),
                                        _: 1,
                                    }),
                                    u(l(b), null, {
                                        default: e(() => [
                                            u(
                                                l(m),
                                                {
                                                    variant: `outline`,
                                                    disabled: T.value,
                                                    onClick: (s[0] ||= (e) =>
                                                        (w.value = !1)),
                                                },
                                                {
                                                    default: e(() => [
                                                        ...(s[3] ||= [
                                                            a(` Cancel `, -1),
                                                        ]),
                                                    ]),
                                                    _: 1,
                                                },
                                                8,
                                                [`disabled`],
                                            ),
                                            u(
                                                l(m),
                                                {
                                                    variant: `destructive`,
                                                    disabled: T.value,
                                                    onClick: D,
                                                },
                                                {
                                                    default: e(() => [
                                                        T.value
                                                            ? (i(),
                                                              c(l(h), {
                                                                  key: 0,
                                                              }))
                                                            : n(``, !0),
                                                        (s[4] ||= a(
                                                            ` Remove `,
                                                            -1,
                                                        )),
                                                    ]),
                                                    _: 1,
                                                },
                                                8,
                                                [`disabled`],
                                            ),
                                        ]),
                                        _: 1,
                                    }),
                                ]),
                                _: 1,
                            },
                        ),
                    ]),
                    _: 1,
                },
                8,
                [`open`],
            )
        );
    },
});
export { S as t };
