import {
    Bt as e,
    Cr as t,
    Pn as n,
    Sn as r,
    ar as i,
    at as a,
    gt as o,
    hr as s,
    it as c,
    mt as l,
    ot as u,
    pt as d,
    r as f,
    tn as p,
    xr as m,
} from './wayfinder-DOENF6-v.js';
import { t as h } from './Spinner-CE_plhl7.js';
import {
    a as g,
    i as _,
    n as v,
    o as y,
    r as b,
    t as x,
} from './dialog-DcidMywn.js';
var S = o({
    __name: `RemoveDeploymentDialog`,
    props: e(
        {
            name: {},
            removeHref: {},
            preserveState: { type: Boolean, default: !0 },
        },
        { open: { type: Boolean, default: !1 }, openModifiers: {} },
    ),
    emits: e([`missing`, `removed`], [`update:open`]),
    setup(e, { emit: o }) {
        let S = e,
            C = o,
            w = r(e, `open`),
            T = i(!1),
            E = i(!1);
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
        return (t, r) => (
            p(),
            a(
                s(y),
                {
                    open: w.value,
                    'onUpdate:open': (r[1] ||= (e) => (w.value = e)),
                },
                {
                    default: n(() => [
                        l(
                            s(g),
                            { onCloseAutoFocus: O },
                            {
                                default: n(() => [
                                    l(s(v), null, {
                                        default: n(() => [
                                            l(s(x), null, {
                                                default: n(() => [
                                                    d(
                                                        `Remove ` +
                                                            m(e.name) +
                                                            `?`,
                                                        1,
                                                    ),
                                                ]),
                                                _: 1,
                                            }),
                                            l(
                                                s(_),
                                                { as: `div` },
                                                {
                                                    default: n(() => [
                                                        ...(r[2] ||= [
                                                            c(
                                                                `ul`,
                                                                {
                                                                    class: `list-disc space-y-1 pl-5`,
                                                                },
                                                                [
                                                                    c(
                                                                        `li`,
                                                                        null,
                                                                        ` The token is wiped here and cannot be recovered. `,
                                                                    ),
                                                                    c(
                                                                        `li`,
                                                                        null,
                                                                        `The key can never be used again.`,
                                                                    ),
                                                                    c(
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
                                    l(s(b), null, {
                                        default: n(() => [
                                            l(
                                                s(f),
                                                {
                                                    variant: `outline`,
                                                    disabled: T.value,
                                                    onClick: (r[0] ||= (e) =>
                                                        (w.value = !1)),
                                                },
                                                {
                                                    default: n(() => [
                                                        ...(r[3] ||= [
                                                            d(` Cancel `, -1),
                                                        ]),
                                                    ]),
                                                    _: 1,
                                                },
                                                8,
                                                [`disabled`],
                                            ),
                                            l(
                                                s(f),
                                                {
                                                    variant: `destructive`,
                                                    disabled: T.value,
                                                    onClick: D,
                                                },
                                                {
                                                    default: n(() => [
                                                        T.value
                                                            ? (p(),
                                                              a(s(h), {
                                                                  key: 0,
                                                              }))
                                                            : u(``, !0),
                                                        (r[4] ||= d(
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
