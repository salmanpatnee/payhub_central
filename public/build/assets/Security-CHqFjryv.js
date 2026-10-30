import {
    Bt as e,
    Jt as t,
    K as n,
    Nn as r,
    On as i,
    Qt as a,
    Tt as o,
    Vt as s,
    _r as c,
    at as l,
    br as u,
    c as d,
    d as f,
    en as p,
    ft as m,
    ht as h,
    ir as g,
    it as _,
    m as v,
    mr as y,
    n as b,
    nt as ee,
    o as x,
    on as S,
    ot as C,
    pt as w,
    rt as T,
    sn as E,
    u as D,
    un as O,
    vr as k,
    wn as te,
    xn as ne,
    zt as re,
} from './wayfinder-BZPu7hPl.js';
import { t as A } from './Label-DoYAx_a7.js';
import { t as j } from './createLucideIcon-B933959x.js';
import { t as ie } from './check-GUSC4Bfv.js';
import { n as ae, r as oe, t as M } from './PasswordInput-Cu8e63-6.js';
import { t as N } from './InputError-uoSIkkZA.js';
import { g as se, n as ce, p as P, t as le } from './app-B62nLDgs.js';
import { t as ue } from './Card-G-5AElBS.js';
import { t as de } from './Spinner-DrEYD93f.js';
import { a as fe, i as pe, r as me, t as he } from './login-DwT14Fep.js';
import {
    a as ge,
    i as _e,
    n as ve,
    o as ye,
    t as be,
} from './dialog-w1EAzTkW.js';
var xe = j({
        name: `circle-alert`,
        size: 24,
        node: [
            [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
            [`line`, { x1: `12`, x2: `12`, y1: `8`, y2: `12`, key: `1pkeuh` }],
            [
                `line`,
                { x1: `12`, x2: `12.01`, y1: `16`, y2: `16`, key: `4dfq90` },
            ],
        ],
        aliases: [`alert-circle`],
    }),
    Se = j({
        name: `copy`,
        size: 24,
        node: [
            [
                `rect`,
                {
                    width: `14`,
                    height: `14`,
                    x: `8`,
                    y: `8`,
                    rx: `2`,
                    ry: `2`,
                    key: `17jyea`,
                },
            ],
            [
                `path`,
                {
                    d: `M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,
                    key: `zix9uf`,
                },
            ],
        ],
    }),
    Ce = j({
        name: `lock-keyhole`,
        size: 24,
        node: [
            [`circle`, { cx: `12`, cy: `16`, r: `1`, key: `1au0dj` }],
            [
                `rect`,
                {
                    x: `3`,
                    y: `10`,
                    width: `18`,
                    height: `12`,
                    rx: `2`,
                    key: `6s8ecr`,
                },
            ],
            [`path`, { d: `M7 10V7a5 5 0 0 1 10 0v3`, key: `1pqi11` }],
        ],
    }),
    we = j({
        name: `refresh-cw`,
        size: 24,
        node: [
            [
                `path`,
                {
                    d: `M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8`,
                    key: `v9h5vc`,
                },
            ],
            [`path`, { d: `M21 3v5h-5`, key: `1q7to0` }],
            [
                `path`,
                {
                    d: `M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16`,
                    key: `3uifl3`,
                },
            ],
            [`path`, { d: `M8 16H3v5`, key: `1cv678` }],
        ],
    }),
    Te = j({
        name: `scan-line`,
        size: 24,
        node: [
            [`path`, { d: `M3 7V5a2 2 0 0 1 2-2h2`, key: `aa7l1z` }],
            [`path`, { d: `M17 3h2a2 2 0 0 1 2 2v2`, key: `4qcy5o` }],
            [`path`, { d: `M21 17v2a2 2 0 0 1-2 2h-2`, key: `6vwrx8` }],
            [`path`, { d: `M7 21H5a2 2 0 0 1-2-2v-2`, key: `ioqczr` }],
            [`path`, { d: `M7 12h10`, key: `b7w52i` }],
        ],
    }),
    Ee = j({
        name: `shield-check`,
        size: 24,
        node: [
            [
                `path`,
                {
                    d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,
                    key: `oel41y`,
                },
            ],
            [`path`, { d: `m9 12 2 2 4-4`, key: `dzmm74` }],
        ],
    }),
    De = h({
        __name: `CardContent`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                p(),
                C(
                    `div`,
                    {
                        'data-slot': `card-content`,
                        class: c(y(x)(`px-6`, t.class)),
                    },
                    [E(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    Oe = h({
        __name: `CardDescription`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                p(),
                C(
                    `p`,
                    {
                        'data-slot': `card-description`,
                        class: c(
                            y(x)(`text-muted-foreground text-sm`, t.class),
                        ),
                    },
                    [E(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    ke = h({
        __name: `CardHeader`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                p(),
                C(
                    `div`,
                    {
                        'data-slot': `card-header`,
                        class: c(
                            y(x)(
                                `@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6`,
                                t.class,
                            ),
                        ),
                    },
                    [E(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    Ae = h({
        __name: `CardTitle`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                p(),
                C(
                    `h3`,
                    {
                        'data-slot': `card-title`,
                        class: c(y(x)(`leading-none font-semibold`, t.class)),
                    },
                    [E(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    F = (e) => ({ url: F.url(e), method: `get` });
((F.definition = { methods: [`get`, `head`], url: `/settings/security` }),
    (F.url = (e) => F.definition.url + b(e)),
    (F.get = (e) => ({ url: F.url(e), method: `get` })),
    (F.head = (e) => ({ url: F.url(e), method: `head` })));
var I = (e) => ({ action: F.url(e), method: `get` });
((I.get = (e) => ({ action: F.url(e), method: `get` })),
    (I.head = (e) => ({
        action: F.url({
            [e?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(e?.query ?? e?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (F.form = I));
var L = (e) => ({ url: L.url(e), method: `put` });
((L.definition = { methods: [`put`], url: `/settings/password` }),
    (L.url = (e) => L.definition.url + b(e)),
    (L.put = (e) => ({ url: L.url(e), method: `put` })));
var je = (e) => ({
    action: L.url({
        [e?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `PUT`,
            ...(e?.query ?? e?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
});
((je.put = (e) => ({
    action: L.url({
        [e?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `PUT`,
            ...(e?.query ?? e?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
})),
    (L.form = je));
var Me = { edit: F, update: L },
    Ne = h({
        __name: `Alert`,
        props: {
            class: { type: [Boolean, null, String, Object, Array] },
            variant: {},
        },
        setup(e) {
            let t = e;
            return (n, r) => (
                p(),
                C(
                    `div`,
                    {
                        'data-slot': `alert`,
                        class: c(y(x)(y(Ie)({ variant: e.variant }), t.class)),
                        role: `alert`,
                    },
                    [E(n.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    Pe = h({
        __name: `AlertDescription`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                p(),
                C(
                    `div`,
                    {
                        'data-slot': `alert-description`,
                        class: c(
                            y(x)(
                                `text-muted-foreground col-start-2 text-sm [&_p]:leading-relaxed`,
                                t.class,
                            ),
                        ),
                    },
                    [E(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    Fe = h({
        __name: `AlertTitle`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                p(),
                C(
                    `div`,
                    {
                        'data-slot': `alert-title`,
                        class: c(
                            y(x)(
                                `col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight`,
                                t.class,
                            ),
                        ),
                    },
                    [E(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    Ie = d(
        `relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current`,
        {
            variants: {
                variant: {
                    default: `bg-card text-card-foreground`,
                    destructive: `text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90`,
                },
            },
            defaultVariants: { variant: `default` },
        },
    ),
    Le = { class: `list-inside list-disc text-sm` },
    Re = h({
        __name: `AlertError`,
        props: { errors: {}, title: { default: `Something went wrong.` } },
        setup(e) {
            let t = e,
                i = ee(() => Array.from(new Set(t.errors)));
            return (t, a) => (
                p(),
                _(
                    y(Ne),
                    { variant: `destructive` },
                    {
                        default: r(() => [
                            w(y(xe), { class: `size-4` }),
                            w(y(Fe), null, {
                                default: r(() => [m(u(e.title), 1)]),
                                _: 1,
                            }),
                            w(y(Pe), null, {
                                default: r(() => [
                                    T(`ul`, Le, [
                                        (p(!0),
                                        C(
                                            n,
                                            null,
                                            S(
                                                i.value,
                                                (e, t) => (
                                                    p(),
                                                    C(`li`, { key: t }, u(e), 1)
                                                ),
                                            ),
                                            128,
                                        )),
                                    ]),
                                ]),
                                _: 1,
                            }),
                        ]),
                        _: 1,
                    },
                )
            );
        },
    }),
    R = (e) => ({ url: R.url(e), method: `get` });
((R.definition = { methods: [`get`, `head`], url: `/two-factor-challenge` }),
    (R.url = (e) => R.definition.url + b(e)),
    (R.get = (e) => ({ url: R.url(e), method: `get` })),
    (R.head = (e) => ({ url: R.url(e), method: `head` })));
var z = (e) => ({ action: R.url(e), method: `get` });
((z.get = (e) => ({ action: R.url(e), method: `get` })),
    (z.head = (e) => ({
        action: R.url({
            [e?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(e?.query ?? e?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (R.form = z));
var B = (e) => ({ url: B.url(e), method: `post` });
((B.definition = { methods: [`post`], url: `/user/two-factor-authentication` }),
    (B.url = (e) => B.definition.url + b(e)),
    (B.post = (e) => ({ url: B.url(e), method: `post` })));
var ze = (e) => ({ action: B.url(e), method: `post` });
((ze.post = (e) => ({ action: B.url(e), method: `post` })), (B.form = ze));
var V = (e) => ({ url: V.url(e), method: `post` });
((V.definition = {
    methods: [`post`],
    url: `/user/confirmed-two-factor-authentication`,
}),
    (V.url = (e) => V.definition.url + b(e)),
    (V.post = (e) => ({ url: V.url(e), method: `post` })));
var Be = (e) => ({ action: V.url(e), method: `post` });
((Be.post = (e) => ({ action: V.url(e), method: `post` })), (V.form = Be));
var H = (e) => ({ url: H.url(e), method: `delete` });
((H.definition = {
    methods: [`delete`],
    url: `/user/two-factor-authentication`,
}),
    (H.url = (e) => H.definition.url + b(e)),
    (H.delete = (e) => ({ url: H.url(e), method: `delete` })));
var Ve = (e) => ({
    action: H.url({
        [e?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `DELETE`,
            ...(e?.query ?? e?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
});
((Ve.delete = (e) => ({
    action: H.url({
        [e?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `DELETE`,
            ...(e?.query ?? e?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
})),
    (H.form = Ve));
var U = (e) => ({ url: U.url(e), method: `get` });
((U.definition = { methods: [`get`, `head`], url: `/user/two-factor-qr-code` }),
    (U.url = (e) => U.definition.url + b(e)),
    (U.get = (e) => ({ url: U.url(e), method: `get` })),
    (U.head = (e) => ({ url: U.url(e), method: `head` })));
var W = (e) => ({ action: U.url(e), method: `get` });
((W.get = (e) => ({ action: U.url(e), method: `get` })),
    (W.head = (e) => ({
        action: U.url({
            [e?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(e?.query ?? e?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (U.form = W));
var G = (e) => ({ url: G.url(e), method: `get` });
((G.definition = {
    methods: [`get`, `head`],
    url: `/user/two-factor-secret-key`,
}),
    (G.url = (e) => G.definition.url + b(e)),
    (G.get = (e) => ({ url: G.url(e), method: `get` })),
    (G.head = (e) => ({ url: G.url(e), method: `head` })));
var K = (e) => ({ action: G.url(e), method: `get` });
((K.get = (e) => ({ action: G.url(e), method: `get` })),
    (K.head = (e) => ({
        action: G.url({
            [e?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(e?.query ?? e?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (G.form = K));
var q = (e) => ({ url: q.url(e), method: `get` });
((q.definition = {
    methods: [`get`, `head`],
    url: `/user/two-factor-recovery-codes`,
}),
    (q.url = (e) => q.definition.url + b(e)),
    (q.get = (e) => ({ url: q.url(e), method: `get` })),
    (q.head = (e) => ({ url: q.url(e), method: `head` })));
var J = (e) => ({ action: q.url(e), method: `get` });
((J.get = (e) => ({ action: q.url(e), method: `get` })),
    (J.head = (e) => ({
        action: q.url({
            [e?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(e?.query ?? e?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (q.form = J));
var Y = (e) => ({ url: Y.url(e), method: `post` });
((Y.definition = { methods: [`post`], url: `/user/two-factor-recovery-codes` }),
    (Y.url = (e) => Y.definition.url + b(e)),
    (Y.post = (e) => ({ url: Y.url(e), method: `post` })));
var He = (e) => ({ action: Y.url(e), method: `post` });
((He.post = (e) => ({ action: Y.url(e), method: `post` })),
    (Y.form = He),
    Object.assign(R, he),
    Object.assign(B, B),
    Object.assign(V, V),
    Object.assign(H, H),
    Object.assign(U, U),
    Object.assign(G, G),
    Object.assign(q, q),
    Object.assign(Y, Y));
var X = g([]),
    Z = g(null),
    Q = g(null),
    $ = g([]),
    Ue = ee(() => Q.value !== null && Z.value !== null),
    We = () => {
        let e = v(),
            t = async () => {
                try {
                    let { svg: t } = await e.submit(U());
                    Q.value = t;
                } catch {
                    (X.value.push(`Failed to fetch QR code`), (Q.value = null));
                }
            },
            n = async () => {
                try {
                    let { secretKey: t } = await e.submit(G());
                    Z.value = t;
                } catch {
                    (X.value.push(`Failed to fetch a setup key`),
                        (Z.value = null));
                }
            },
            r = () => {
                ((Z.value = null), (Q.value = null), i());
            },
            i = () => {
                X.value = [];
            };
        return {
            qrCodeSvg: Q,
            manualSetupKey: Z,
            recoveryCodesList: $,
            errors: X,
            hasSetupData: Ue,
            clearSetupData: r,
            clearErrors: i,
            clearTwoFactorAuthData: () => {
                (r(), i(), ($.value = []));
            },
            fetchQrCode: t,
            fetchSetupKey: n,
            fetchSetupData: async () => {
                try {
                    (i(), await Promise.all([t(), n()]));
                } catch {
                    ((Q.value = null), (Z.value = null));
                }
            },
            fetchRecoveryCodes: async () => {
                try {
                    (i(), ($.value = await e.submit(q())));
                } catch {
                    (X.value.push(`Failed to fetch recovery codes`),
                        ($.value = []));
                }
            },
        };
    },
    Ge = {
        class: `flex flex-col gap-3 select-none sm:flex-row sm:items-center sm:justify-between`,
    },
    Ke = { key: 0, class: `mt-6` },
    qe = { key: 1, class: `mt-3 space-y-3` },
    Je = { key: 0, class: `space-y-2` },
    Ye = h({
        __name: `TwoFactorRecoveryCodes`,
        setup(i) {
            let {
                    recoveryCodesList: a,
                    fetchRecoveryCodes: o,
                    errors: d,
                } = We(),
                f = g(!1),
                h = te(`recoveryCodeSectionRef`),
                v = async () => {
                    (!f.value && !a.value.length && (await o()),
                        (f.value = !f.value),
                        f.value &&
                            (await s(),
                            h.value?.scrollIntoView({ behavior: `smooth` })));
                };
            return (
                t(async () => {
                    a.value.length || (await o());
                }),
                (t, i) => (
                    p(),
                    _(
                        y(ue),
                        { class: `w-full` },
                        {
                            default: r(() => [
                                w(y(ke), null, {
                                    default: r(() => [
                                        w(
                                            y(Ae),
                                            { class: `flex gap-3` },
                                            {
                                                default: r(() => [
                                                    w(y(Ce), {
                                                        class: `size-4`,
                                                    }),
                                                    (i[0] ||= m(
                                                        `2FA recovery codes `,
                                                        -1,
                                                    )),
                                                ]),
                                                _: 1,
                                            },
                                        ),
                                        w(y(Oe), null, {
                                            default: r(() => [
                                                ...(i[1] ||= [
                                                    m(
                                                        ` Recovery codes let you regain access if you lose your 2FA device. Store them in a secure password manager. `,
                                                        -1,
                                                    ),
                                                ]),
                                            ]),
                                            _: 1,
                                        }),
                                    ]),
                                    _: 1,
                                }),
                                w(y(De), null, {
                                    default: r(() => [
                                        T(`div`, Ge, [
                                            w(
                                                y(P),
                                                { onClick: v, class: `w-fit` },
                                                {
                                                    default: r(() => [
                                                        (p(),
                                                        _(
                                                            O(
                                                                f.value
                                                                    ? y(oe)
                                                                    : y(ae),
                                                            ),
                                                            { class: `size-4` },
                                                        )),
                                                        m(
                                                            ` ` +
                                                                u(
                                                                    f.value
                                                                        ? `Hide`
                                                                        : `View`,
                                                                ) +
                                                                ` recovery codes `,
                                                            1,
                                                        ),
                                                    ]),
                                                    _: 1,
                                                },
                                            ),
                                            f.value && y(a).length
                                                ? (p(),
                                                  _(
                                                      y(D),
                                                      e(
                                                          { key: 0 },
                                                          y(Y).form(),
                                                          {
                                                              method: `post`,
                                                              options: {
                                                                  preserveScroll:
                                                                      !0,
                                                              },
                                                              onSuccess: y(o),
                                                          },
                                                      ),
                                                      {
                                                          default: r(
                                                              ({
                                                                  processing: e,
                                                              }) => [
                                                                  w(
                                                                      y(P),
                                                                      {
                                                                          variant: `secondary`,
                                                                          type: `submit`,
                                                                          disabled:
                                                                              e,
                                                                      },
                                                                      {
                                                                          default:
                                                                              r(
                                                                                  () => [
                                                                                      w(
                                                                                          y(
                                                                                              we,
                                                                                          ),
                                                                                      ),
                                                                                      (i[2] ||=
                                                                                          m(
                                                                                              ` Regenerate codes `,
                                                                                              -1,
                                                                                          )),
                                                                                  ],
                                                                              ),
                                                                          _: 1,
                                                                      },
                                                                      8,
                                                                      [
                                                                          `disabled`,
                                                                      ],
                                                                  ),
                                                              ],
                                                          ),
                                                          _: 1,
                                                      },
                                                      16,
                                                      [`onSuccess`],
                                                  ))
                                                : l(``, !0),
                                        ]),
                                        T(
                                            `div`,
                                            {
                                                class: c([
                                                    `relative overflow-hidden transition-all duration-300`,
                                                    f.value
                                                        ? `h-auto opacity-100`
                                                        : `h-0 opacity-0`,
                                                ]),
                                            },
                                            [
                                                y(d)?.length
                                                    ? (p(),
                                                      C(`div`, Ke, [
                                                          w(
                                                              Re,
                                                              { errors: y(d) },
                                                              null,
                                                              8,
                                                              [`errors`],
                                                          ),
                                                      ]))
                                                    : (p(),
                                                      C(`div`, qe, [
                                                          T(
                                                              `div`,
                                                              {
                                                                  ref_key: `recoveryCodeSectionRef`,
                                                                  ref: h,
                                                                  class: `grid gap-1 rounded-lg bg-muted p-4 font-mono text-sm`,
                                                              },
                                                              [
                                                                  y(a).length
                                                                      ? (p(!0),
                                                                        C(
                                                                            n,
                                                                            {
                                                                                key: 1,
                                                                            },
                                                                            S(
                                                                                y(
                                                                                    a,
                                                                                ),
                                                                                (
                                                                                    e,
                                                                                    t,
                                                                                ) => (
                                                                                    p(),
                                                                                    C(
                                                                                        `div`,
                                                                                        {
                                                                                            key: t,
                                                                                        },
                                                                                        u(
                                                                                            e,
                                                                                        ),
                                                                                        1,
                                                                                    )
                                                                                ),
                                                                            ),
                                                                            128,
                                                                        ))
                                                                      : (p(),
                                                                        C(
                                                                            `div`,
                                                                            Je,
                                                                            [
                                                                                (p(),
                                                                                C(
                                                                                    n,
                                                                                    null,
                                                                                    S(
                                                                                        8,
                                                                                        (
                                                                                            e,
                                                                                        ) =>
                                                                                            T(
                                                                                                `div`,
                                                                                                {
                                                                                                    key: e,
                                                                                                    class: `h-4 animate-pulse rounded bg-muted-foreground/20`,
                                                                                                },
                                                                                            ),
                                                                                    ),
                                                                                    64,
                                                                                )),
                                                                            ],
                                                                        )),
                                                              ],
                                                              512,
                                                          ),
                                                          (i[3] ||= T(
                                                              `p`,
                                                              {
                                                                  class: `text-xs text-muted-foreground select-none`,
                                                              },
                                                              [
                                                                  m(
                                                                      ` Each recovery code can be used once to access your account and will be removed after use. If you need more, click `,
                                                                  ),
                                                                  T(
                                                                      `span`,
                                                                      {
                                                                          class: `font-bold`,
                                                                      },
                                                                      `Regenerate codes`,
                                                                  ),
                                                                  m(` above. `),
                                                              ],
                                                              -1,
                                                          )),
                                                      ])),
                                            ],
                                            2,
                                        ),
                                    ]),
                                    _: 1,
                                }),
                            ]),
                            _: 1,
                        },
                    )
                )
            );
        },
    }),
    Xe = {
        class: `mb-3 w-auto rounded-full border border-border bg-card p-0.5 shadow-sm`,
    },
    Ze = {
        class: `relative overflow-hidden rounded-full border border-border bg-muted p-2.5`,
    },
    Qe = { class: `absolute inset-0 grid grid-cols-5 opacity-50` },
    $e = { class: `absolute inset-0 grid grid-rows-5 opacity-50` },
    et = {
        class: `relative flex w-auto flex-col items-center justify-center space-y-5`,
    },
    tt = {
        class: `relative mx-auto flex max-w-md items-center overflow-hidden`,
    },
    nt = {
        class: `relative mx-auto aspect-square w-64 overflow-hidden rounded-lg border border-border`,
    },
    rt = {
        key: 0,
        class: `absolute inset-0 z-10 flex aspect-square h-auto w-full animate-pulse items-center justify-center bg-background`,
    },
    it = { key: 1, class: `relative z-10 overflow-hidden border p-5` },
    at = [`innerHTML`],
    ot = { class: `flex w-full items-center space-x-5` },
    st = { class: `flex w-full items-center justify-center space-x-2` },
    ct = {
        class: `flex w-full items-stretch overflow-hidden rounded-xl border border-border`,
    },
    lt = {
        key: 0,
        class: `flex h-full w-full items-center justify-center bg-muted p-3`,
    },
    ut = [`value`],
    dt = [`value`],
    ft = {
        class: `flex w-full flex-col items-center justify-center space-y-3 py-2`,
    },
    pt = { class: `flex w-full items-center space-x-5` },
    mt = h({
        __name: `TwoFactorSetupModal`,
        props: re(
            {
                requiresConfirmation: { type: Boolean },
                twoFactorEnabled: { type: Boolean },
            },
            { isOpen: { type: Boolean }, isOpenModifiers: {} },
        ),
        emits: [`update:isOpen`],
        setup(t) {
            let a = t,
                o = ne(t, `isOpen`),
                { copy: c, copied: l } = se(),
                {
                    qrCodeSvg: d,
                    manualSetupKey: f,
                    clearSetupData: h,
                    fetchSetupData: v,
                    errors: b,
                } = We(),
                x = g(!1),
                E = g(``),
                O = te(`pinInputContainerRef`),
                k = ee(() =>
                    a.twoFactorEnabled
                        ? {
                              title: `Two-factor authentication enabled`,
                              description: `Two-factor authentication is now enabled. Scan the QR code or enter the setup key in your authenticator app.`,
                              buttonText: `Close`,
                          }
                        : x.value
                          ? {
                                title: `Verify authentication code`,
                                description: `Enter the 6-digit code from your authenticator app`,
                                buttonText: `Continue`,
                            }
                          : {
                                title: `Enable two-factor authentication`,
                                description: `To finish enabling two-factor authentication, scan the QR code or enter the setup key in your authenticator app`,
                                buttonText: `Continue`,
                            },
                ),
                re = () => {
                    a.requiresConfirmation
                        ? ((x.value = !0),
                          s(() => {
                              O.value?.querySelector(`input`)?.focus();
                          }))
                        : (h(), (o.value = !1));
                },
                A = () => {
                    (a.twoFactorEnabled && h(), (x.value = !1), (E.value = ``));
                };
            return (
                i(
                    () => o.value,
                    async (e) => {
                        e ? d.value || (await v()) : A();
                    },
                ),
                (t, i) => (
                    p(),
                    _(
                        y(ye),
                        {
                            open: o.value,
                            'onUpdate:open': (i[5] ||= (e) => (o.value = e)),
                        },
                        {
                            default: r(() => [
                                w(
                                    y(ge),
                                    { class: `sm:max-w-md` },
                                    {
                                        default: r(() => [
                                            w(
                                                y(ve),
                                                {
                                                    class: `flex items-center justify-center`,
                                                },
                                                {
                                                    default: r(() => [
                                                        T(`div`, Xe, [
                                                            T(`div`, Ze, [
                                                                T(`div`, Qe, [
                                                                    (p(),
                                                                    C(
                                                                        n,
                                                                        null,
                                                                        S(
                                                                            5,
                                                                            (
                                                                                e,
                                                                            ) =>
                                                                                T(
                                                                                    `div`,
                                                                                    {
                                                                                        key: `col-${e}`,
                                                                                        class: `border-r border-border last:border-r-0`,
                                                                                    },
                                                                                ),
                                                                        ),
                                                                        64,
                                                                    )),
                                                                ]),
                                                                T(`div`, $e, [
                                                                    (p(),
                                                                    C(
                                                                        n,
                                                                        null,
                                                                        S(
                                                                            5,
                                                                            (
                                                                                e,
                                                                            ) =>
                                                                                T(
                                                                                    `div`,
                                                                                    {
                                                                                        key: `row-${e}`,
                                                                                        class: `border-b border-border last:border-b-0`,
                                                                                    },
                                                                                ),
                                                                        ),
                                                                        64,
                                                                    )),
                                                                ]),
                                                                w(y(Te), {
                                                                    class: `relative z-20 size-6 text-foreground`,
                                                                }),
                                                            ]),
                                                        ]),
                                                        w(y(be), null, {
                                                            default: r(() => [
                                                                m(
                                                                    u(
                                                                        k.value
                                                                            .title,
                                                                    ),
                                                                    1,
                                                                ),
                                                            ]),
                                                            _: 1,
                                                        }),
                                                        w(
                                                            y(_e),
                                                            {
                                                                class: `text-center`,
                                                            },
                                                            {
                                                                default: r(
                                                                    () => [
                                                                        m(
                                                                            u(
                                                                                k
                                                                                    .value
                                                                                    .description,
                                                                            ),
                                                                            1,
                                                                        ),
                                                                    ],
                                                                ),
                                                                _: 1,
                                                            },
                                                        ),
                                                    ]),
                                                    _: 1,
                                                },
                                            ),
                                            T(`div`, et, [
                                                x.value
                                                    ? (p(),
                                                      _(
                                                          y(D),
                                                          e(
                                                              { key: 1 },
                                                              y(V).form(),
                                                              {
                                                                  'error-bag': `confirmTwoFactorAuthentication`,
                                                                  'reset-on-error': ``,
                                                                  onFinish:
                                                                      (i[3] ||=
                                                                          (e) =>
                                                                              (E.value = ``)),
                                                                  onSuccess:
                                                                      (i[4] ||=
                                                                          (e) =>
                                                                              (o.value =
                                                                                  !1)),
                                                              },
                                                          ),
                                                          {
                                                              default: r(
                                                                  ({
                                                                      errors: e,
                                                                      processing:
                                                                          t,
                                                                  }) => [
                                                                      T(
                                                                          `input`,
                                                                          {
                                                                              type: `hidden`,
                                                                              name: `code`,
                                                                              value: E.value,
                                                                          },
                                                                          null,
                                                                          8,
                                                                          dt,
                                                                      ),
                                                                      T(
                                                                          `div`,
                                                                          {
                                                                              ref_key: `pinInputContainerRef`,
                                                                              ref: O,
                                                                              class: `relative w-full space-y-3`,
                                                                          },
                                                                          [
                                                                              T(
                                                                                  `div`,
                                                                                  ft,
                                                                                  [
                                                                                      w(
                                                                                          y(
                                                                                              fe,
                                                                                          ),
                                                                                          {
                                                                                              id: `otp`,
                                                                                              modelValue:
                                                                                                  E.value,
                                                                                              'onUpdate:modelValue':
                                                                                                  (i[1] ||=
                                                                                                      (
                                                                                                          e,
                                                                                                      ) =>
                                                                                                          (E.value =
                                                                                                              e)),
                                                                                              maxlength: 6,
                                                                                              disabled:
                                                                                                  t,
                                                                                              autofocus: ``,
                                                                                          },
                                                                                          {
                                                                                              default:
                                                                                                  r(
                                                                                                      () => [
                                                                                                          w(
                                                                                                              y(
                                                                                                                  pe,
                                                                                                              ),
                                                                                                              null,
                                                                                                              {
                                                                                                                  default:
                                                                                                                      r(
                                                                                                                          () => [
                                                                                                                              (p(),
                                                                                                                              C(
                                                                                                                                  n,
                                                                                                                                  null,
                                                                                                                                  S(
                                                                                                                                      6,
                                                                                                                                      (
                                                                                                                                          e,
                                                                                                                                      ) =>
                                                                                                                                          w(
                                                                                                                                              y(
                                                                                                                                                  me,
                                                                                                                                              ),
                                                                                                                                              {
                                                                                                                                                  key: e,
                                                                                                                                                  index:
                                                                                                                                                      e -
                                                                                                                                                      1,
                                                                                                                                              },
                                                                                                                                              null,
                                                                                                                                              8,
                                                                                                                                              [
                                                                                                                                                  `index`,
                                                                                                                                              ],
                                                                                                                                          ),
                                                                                                                                  ),
                                                                                                                                  64,
                                                                                                                              )),
                                                                                                                          ],
                                                                                                                      ),
                                                                                                                  _: 1,
                                                                                                              },
                                                                                                          ),
                                                                                                      ],
                                                                                                  ),
                                                                                              _: 1,
                                                                                          },
                                                                                          8,
                                                                                          [
                                                                                              `modelValue`,
                                                                                              `disabled`,
                                                                                          ],
                                                                                      ),
                                                                                      w(
                                                                                          N,
                                                                                          {
                                                                                              message:
                                                                                                  e?.code,
                                                                                          },
                                                                                          null,
                                                                                          8,
                                                                                          [
                                                                                              `message`,
                                                                                          ],
                                                                                      ),
                                                                                  ],
                                                                              ),
                                                                              T(
                                                                                  `div`,
                                                                                  pt,
                                                                                  [
                                                                                      w(
                                                                                          y(
                                                                                              P,
                                                                                          ),
                                                                                          {
                                                                                              type: `button`,
                                                                                              variant: `outline`,
                                                                                              class: `w-auto flex-1`,
                                                                                              onClick:
                                                                                                  (i[2] ||=
                                                                                                      (
                                                                                                          e,
                                                                                                      ) =>
                                                                                                          (x.value =
                                                                                                              !1)),
                                                                                              disabled:
                                                                                                  t,
                                                                                          },
                                                                                          {
                                                                                              default:
                                                                                                  r(
                                                                                                      () => [
                                                                                                          ...(i[7] ||=
                                                                                                              [
                                                                                                                  m(
                                                                                                                      ` Back `,
                                                                                                                      -1,
                                                                                                                  ),
                                                                                                              ]),
                                                                                                      ],
                                                                                                  ),
                                                                                              _: 1,
                                                                                          },
                                                                                          8,
                                                                                          [
                                                                                              `disabled`,
                                                                                          ],
                                                                                      ),
                                                                                      w(
                                                                                          y(
                                                                                              P,
                                                                                          ),
                                                                                          {
                                                                                              type: `submit`,
                                                                                              class: `w-auto flex-1`,
                                                                                              disabled:
                                                                                                  t ||
                                                                                                  E
                                                                                                      .value
                                                                                                      .length <
                                                                                                      6,
                                                                                          },
                                                                                          {
                                                                                              default:
                                                                                                  r(
                                                                                                      () => [
                                                                                                          ...(i[8] ||=
                                                                                                              [
                                                                                                                  m(
                                                                                                                      ` Confirm `,
                                                                                                                      -1,
                                                                                                                  ),
                                                                                                              ]),
                                                                                                      ],
                                                                                                  ),
                                                                                              _: 1,
                                                                                          },
                                                                                          8,
                                                                                          [
                                                                                              `disabled`,
                                                                                          ],
                                                                                      ),
                                                                                  ],
                                                                              ),
                                                                          ],
                                                                          512,
                                                                      ),
                                                                  ],
                                                              ),
                                                              _: 1,
                                                          },
                                                          16,
                                                      ))
                                                    : (p(),
                                                      C(
                                                          n,
                                                          { key: 0 },
                                                          [
                                                              y(b)?.length
                                                                  ? (p(),
                                                                    _(
                                                                        Re,
                                                                        {
                                                                            key: 0,
                                                                            errors: y(
                                                                                b,
                                                                            ),
                                                                        },
                                                                        null,
                                                                        8,
                                                                        [
                                                                            `errors`,
                                                                        ],
                                                                    ))
                                                                  : (p(),
                                                                    C(
                                                                        n,
                                                                        {
                                                                            key: 1,
                                                                        },
                                                                        [
                                                                            T(
                                                                                `div`,
                                                                                tt,
                                                                                [
                                                                                    T(
                                                                                        `div`,
                                                                                        nt,
                                                                                        [
                                                                                            y(
                                                                                                d,
                                                                                            )
                                                                                                ? (p(),
                                                                                                  C(
                                                                                                      `div`,
                                                                                                      it,
                                                                                                      [
                                                                                                          T(
                                                                                                              `div`,
                                                                                                              {
                                                                                                                  innerHTML:
                                                                                                                      y(
                                                                                                                          d,
                                                                                                                      ),
                                                                                                                  class: `flex aspect-square size-full items-center justify-center`,
                                                                                                              },
                                                                                                              null,
                                                                                                              8,
                                                                                                              at,
                                                                                                          ),
                                                                                                      ],
                                                                                                  ))
                                                                                                : (p(),
                                                                                                  C(
                                                                                                      `div`,
                                                                                                      rt,
                                                                                                      [
                                                                                                          w(
                                                                                                              y(
                                                                                                                  de,
                                                                                                              ),
                                                                                                              {
                                                                                                                  class: `size-6`,
                                                                                                              },
                                                                                                          ),
                                                                                                      ],
                                                                                                  )),
                                                                                        ],
                                                                                    ),
                                                                                ],
                                                                            ),
                                                                            T(
                                                                                `div`,
                                                                                ot,
                                                                                [
                                                                                    w(
                                                                                        y(
                                                                                            P,
                                                                                        ),
                                                                                        {
                                                                                            class: `w-full`,
                                                                                            onClick:
                                                                                                re,
                                                                                        },
                                                                                        {
                                                                                            default:
                                                                                                r(
                                                                                                    () => [
                                                                                                        m(
                                                                                                            u(
                                                                                                                k
                                                                                                                    .value
                                                                                                                    .buttonText,
                                                                                                            ),
                                                                                                            1,
                                                                                                        ),
                                                                                                    ],
                                                                                                ),
                                                                                            _: 1,
                                                                                        },
                                                                                    ),
                                                                                ],
                                                                            ),
                                                                            (i[6] ||=
                                                                                T(
                                                                                    `div`,
                                                                                    {
                                                                                        class: `relative flex w-full items-center justify-center`,
                                                                                    },
                                                                                    [
                                                                                        T(
                                                                                            `div`,
                                                                                            {
                                                                                                class: `absolute inset-0 top-1/2 h-px w-full bg-border`,
                                                                                            },
                                                                                        ),
                                                                                        T(
                                                                                            `span`,
                                                                                            {
                                                                                                class: `relative bg-card px-2 py-1`,
                                                                                            },
                                                                                            `or, enter the code manually`,
                                                                                        ),
                                                                                    ],
                                                                                    -1,
                                                                                )),
                                                                            T(
                                                                                `div`,
                                                                                st,
                                                                                [
                                                                                    T(
                                                                                        `div`,
                                                                                        ct,
                                                                                        [
                                                                                            y(
                                                                                                f,
                                                                                            )
                                                                                                ? (p(),
                                                                                                  C(
                                                                                                      n,
                                                                                                      {
                                                                                                          key: 1,
                                                                                                      },
                                                                                                      [
                                                                                                          T(
                                                                                                              `input`,
                                                                                                              {
                                                                                                                  type: `text`,
                                                                                                                  readonly: ``,
                                                                                                                  value: y(
                                                                                                                      f,
                                                                                                                  ),
                                                                                                                  class: `h-full w-full bg-background p-3 text-foreground`,
                                                                                                              },
                                                                                                              null,
                                                                                                              8,
                                                                                                              ut,
                                                                                                          ),
                                                                                                          T(
                                                                                                              `button`,
                                                                                                              {
                                                                                                                  onClick:
                                                                                                                      (i[0] ||=
                                                                                                                          (
                                                                                                                              e,
                                                                                                                          ) =>
                                                                                                                              y(
                                                                                                                                  c,
                                                                                                                              )(
                                                                                                                                  y(
                                                                                                                                      f,
                                                                                                                                  ) ||
                                                                                                                                      ``,
                                                                                                                              )),
                                                                                                                  class: `relative block h-auto border-l border-border px-3 hover:bg-muted`,
                                                                                                              },
                                                                                                              [
                                                                                                                  y(
                                                                                                                      l,
                                                                                                                  )
                                                                                                                      ? (p(),
                                                                                                                        _(
                                                                                                                            y(
                                                                                                                                ie,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                key: 0,
                                                                                                                                class: `w-4 text-green-500`,
                                                                                                                            },
                                                                                                                        ))
                                                                                                                      : (p(),
                                                                                                                        _(
                                                                                                                            y(
                                                                                                                                Se,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                key: 1,
                                                                                                                                class: `w-4`,
                                                                                                                            },
                                                                                                                        )),
                                                                                                              ],
                                                                                                          ),
                                                                                                      ],
                                                                                                      64,
                                                                                                  ))
                                                                                                : (p(),
                                                                                                  C(
                                                                                                      `div`,
                                                                                                      lt,
                                                                                                      [
                                                                                                          w(
                                                                                                              y(
                                                                                                                  de,
                                                                                                              ),
                                                                                                          ),
                                                                                                      ],
                                                                                                  )),
                                                                                        ],
                                                                                    ),
                                                                                ],
                                                                            ),
                                                                        ],
                                                                        64,
                                                                    )),
                                                          ],
                                                          64,
                                                      )),
                                            ]),
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
                )
            );
        },
    }),
    ht = { key: 0, class: `space-y-6` },
    gt = { key: 0, class: `flex flex-col items-start justify-start space-y-4` },
    _t = { key: 1, class: `flex flex-col items-start justify-start space-y-4` },
    vt = { class: `relative inline` },
    yt = h({
        __name: `ManageTwoFactor`,
        props: {
            canManageTwoFactor: { type: Boolean, default: !1 },
            requiresConfirmation: { type: Boolean, default: !1 },
            twoFactorEnabled: { type: Boolean, default: !1 },
        },
        setup(t) {
            let { hasSetupData: n, clearTwoFactorAuthData: i } = We(),
                s = g(!1);
            return (
                a(() => i()),
                (i, a) =>
                    t.canManageTwoFactor
                        ? (p(),
                          C(`div`, ht, [
                              w(ce, {
                                  variant: `small`,
                                  title: `Two-factor authentication`,
                                  description: `Manage your two-factor authentication settings`,
                              }),
                              t.twoFactorEnabled
                                  ? (p(),
                                    C(`div`, _t, [
                                        (a[7] ||= T(
                                            `p`,
                                            {
                                                class: `text-sm text-muted-foreground`,
                                            },
                                            ` You will be prompted for a secure, random pin during login, which you can retrieve from the TOTP-supported application on your phone. `,
                                            -1,
                                        )),
                                        T(`div`, vt, [
                                            w(
                                                y(D),
                                                k(o(y(H).form())),
                                                {
                                                    default: r(
                                                        ({ processing: e }) => [
                                                            w(
                                                                y(P),
                                                                {
                                                                    variant: `destructive`,
                                                                    type: `submit`,
                                                                    disabled: e,
                                                                },
                                                                {
                                                                    default: r(
                                                                        () => [
                                                                            ...(a[6] ||=
                                                                                [
                                                                                    m(
                                                                                        ` Disable 2FA `,
                                                                                        -1,
                                                                                    ),
                                                                                ]),
                                                                        ],
                                                                    ),
                                                                    _: 1,
                                                                },
                                                                8,
                                                                [`disabled`],
                                                            ),
                                                        ],
                                                    ),
                                                    _: 1,
                                                },
                                                16,
                                            ),
                                        ]),
                                        w(Ye),
                                    ]))
                                  : (p(),
                                    C(`div`, gt, [
                                        (a[5] ||= T(
                                            `p`,
                                            {
                                                class: `text-sm text-muted-foreground`,
                                            },
                                            ` When you enable two-factor authentication, you will be prompted for a secure pin during login. This pin can be retrieved from a TOTP-supported application on your phone. `,
                                            -1,
                                        )),
                                        T(`div`, null, [
                                            y(n)
                                                ? (p(),
                                                  _(
                                                      y(P),
                                                      {
                                                          key: 0,
                                                          onClick: (a[0] ||= (
                                                              e,
                                                          ) => (s.value = !0)),
                                                      },
                                                      {
                                                          default: r(() => [
                                                              w(y(Ee)),
                                                              (a[3] ||= m(
                                                                  `Continue setup `,
                                                                  -1,
                                                              )),
                                                          ]),
                                                          _: 1,
                                                      },
                                                  ))
                                                : (p(),
                                                  _(
                                                      y(D),
                                                      e(
                                                          { key: 1 },
                                                          y(B).form(),
                                                          {
                                                              onSuccess:
                                                                  (a[1] ||= (
                                                                      e,
                                                                  ) =>
                                                                      (s.value =
                                                                          !0)),
                                                          },
                                                      ),
                                                      {
                                                          default: r(
                                                              ({
                                                                  processing: e,
                                                              }) => [
                                                                  w(
                                                                      y(P),
                                                                      {
                                                                          type: `submit`,
                                                                          disabled:
                                                                              e,
                                                                      },
                                                                      {
                                                                          default:
                                                                              r(
                                                                                  () => [
                                                                                      ...(a[4] ||=
                                                                                          [
                                                                                              m(
                                                                                                  ` Enable 2FA `,
                                                                                                  -1,
                                                                                              ),
                                                                                          ]),
                                                                                  ],
                                                                              ),
                                                                          _: 1,
                                                                      },
                                                                      8,
                                                                      [
                                                                          `disabled`,
                                                                      ],
                                                                  ),
                                                              ],
                                                          ),
                                                          _: 1,
                                                      },
                                                      16,
                                                  )),
                                        ]),
                                    ])),
                              w(
                                  mt,
                                  {
                                      isOpen: s.value,
                                      'onUpdate:isOpen': (a[2] ||= (e) =>
                                          (s.value = e)),
                                      requiresConfirmation:
                                          t.requiresConfirmation,
                                      twoFactorEnabled: t.twoFactorEnabled,
                                  },
                                  null,
                                  8,
                                  [
                                      `isOpen`,
                                      `requiresConfirmation`,
                                      `twoFactorEnabled`,
                                  ],
                              ),
                          ]))
                        : l(``, !0)
            );
        },
    }),
    bt = { class: `space-y-6` },
    xt = { class: `grid gap-2` },
    St = { class: `grid gap-2` },
    Ct = { class: `grid gap-2` },
    wt = { class: `flex items-center gap-4` },
    Tt = h({
        layout: { breadcrumbs: [{ title: `Security settings`, href: le() }] },
        __name: `Security`,
        props: {
            passwordRules: {},
            canManageTwoFactor: { type: Boolean },
            requiresConfirmation: { type: Boolean },
            twoFactorEnabled: { type: Boolean },
        },
        setup(t) {
            let i = t;
            return (a, o) => (
                p(),
                C(
                    n,
                    null,
                    [
                        w(y(f), { title: `Security settings` }),
                        (o[4] ||= T(
                            `h1`,
                            { class: `sr-only` },
                            `Security settings`,
                            -1,
                        )),
                        T(`div`, bt, [
                            w(ce, {
                                variant: `small`,
                                title: `Update password`,
                                description: `Ensure your account is using a long, random password to stay secure`,
                            }),
                            w(
                                y(D),
                                e(y(Me).update.form(), {
                                    options: { preserveScroll: !0 },
                                    'reset-on-success': ``,
                                    'reset-on-error': [
                                        `password`,
                                        `password_confirmation`,
                                        `current_password`,
                                    ],
                                    class: `space-y-6`,
                                }),
                                {
                                    default: r(
                                        ({ errors: e, processing: t }) => [
                                            T(`div`, xt, [
                                                w(
                                                    y(A),
                                                    { for: `current_password` },
                                                    {
                                                        default: r(() => [
                                                            ...(o[0] ||= [
                                                                m(
                                                                    `Current password`,
                                                                    -1,
                                                                ),
                                                            ]),
                                                        ]),
                                                        _: 1,
                                                    },
                                                ),
                                                w(M, {
                                                    id: `current_password`,
                                                    name: `current_password`,
                                                    class: `mt-1 block w-full`,
                                                    autocomplete: `current-password`,
                                                    placeholder: `Current password`,
                                                }),
                                                w(
                                                    N,
                                                    {
                                                        message:
                                                            e.current_password,
                                                    },
                                                    null,
                                                    8,
                                                    [`message`],
                                                ),
                                            ]),
                                            T(`div`, St, [
                                                w(
                                                    y(A),
                                                    { for: `password` },
                                                    {
                                                        default: r(() => [
                                                            ...(o[1] ||= [
                                                                m(
                                                                    `New password`,
                                                                    -1,
                                                                ),
                                                            ]),
                                                        ]),
                                                        _: 1,
                                                    },
                                                ),
                                                w(
                                                    M,
                                                    {
                                                        id: `password`,
                                                        name: `password`,
                                                        class: `mt-1 block w-full`,
                                                        autocomplete: `new-password`,
                                                        placeholder: `New password`,
                                                        passwordrules:
                                                            i.passwordRules,
                                                    },
                                                    null,
                                                    8,
                                                    [`passwordrules`],
                                                ),
                                                w(
                                                    N,
                                                    { message: e.password },
                                                    null,
                                                    8,
                                                    [`message`],
                                                ),
                                            ]),
                                            T(`div`, Ct, [
                                                w(
                                                    y(A),
                                                    {
                                                        for: `password_confirmation`,
                                                    },
                                                    {
                                                        default: r(() => [
                                                            ...(o[2] ||= [
                                                                m(
                                                                    `Confirm password`,
                                                                    -1,
                                                                ),
                                                            ]),
                                                        ]),
                                                        _: 1,
                                                    },
                                                ),
                                                w(
                                                    M,
                                                    {
                                                        id: `password_confirmation`,
                                                        name: `password_confirmation`,
                                                        class: `mt-1 block w-full`,
                                                        autocomplete: `new-password`,
                                                        placeholder: `Confirm password`,
                                                        passwordrules:
                                                            i.passwordRules,
                                                    },
                                                    null,
                                                    8,
                                                    [`passwordrules`],
                                                ),
                                                w(
                                                    N,
                                                    {
                                                        message:
                                                            e.password_confirmation,
                                                    },
                                                    null,
                                                    8,
                                                    [`message`],
                                                ),
                                            ]),
                                            T(`div`, wt, [
                                                w(
                                                    y(P),
                                                    {
                                                        disabled: t,
                                                        'data-test': `update-password-button`,
                                                    },
                                                    {
                                                        default: r(() => [
                                                            ...(o[3] ||= [
                                                                m(` Save `, -1),
                                                            ]),
                                                        ]),
                                                        _: 1,
                                                    },
                                                    8,
                                                    [`disabled`],
                                                ),
                                            ]),
                                        ],
                                    ),
                                    _: 1,
                                },
                                16,
                            ),
                        ]),
                        w(
                            yt,
                            {
                                canManageTwoFactor: t.canManageTwoFactor,
                                requiresConfirmation: t.requiresConfirmation,
                                twoFactorEnabled: t.twoFactorEnabled,
                            },
                            null,
                            8,
                            [
                                `canManageTwoFactor`,
                                `requiresConfirmation`,
                                `twoFactorEnabled`,
                            ],
                        ),
                    ],
                    64,
                )
            );
        },
    });
export { Tt as default };
