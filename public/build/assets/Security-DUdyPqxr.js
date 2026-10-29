import {
    $t as e,
    Bt as t,
    Et as n,
    Ht as r,
    Pn as i,
    Sn as a,
    Tn as o,
    Vt as s,
    Yt as ee,
    ar as c,
    at as l,
    cn as u,
    d,
    dn as f,
    f as p,
    gt as m,
    h as te,
    hr as h,
    it as g,
    kn as ne,
    l as _,
    mt as v,
    n as y,
    ot as b,
    pt as x,
    q as S,
    r as C,
    rt as w,
    s as T,
    sn as E,
    st as D,
    tn as O,
    vr as k,
    xr as A,
    yr as re,
} from './wayfinder-DOENF6-v.js';
import { t as j } from './Label-SQSUbFPK.js';
import { t as M } from './createLucideIcon-BqhoQwIJ.js';
import { t as ie } from './check-u3Gy4IT4.js';
import { n as ae, r as oe, t as N } from './PasswordInput-CUpQjno6.js';
import { t as P } from './InputError-BZLNDWJz.js';
import { h as se, n as ce, t as le } from './app-D8hkYQeO.js';
import { t as ue } from './Card-yrm-h8z5.js';
import { t as de } from './Spinner-BB18Wf_j.js';
import { a as fe, i as pe, r as me, t as he } from './login-HNcrD4uR.js';
import {
    a as ge,
    i as _e,
    n as ve,
    o as ye,
    t as be,
} from './dialog-B8nc9udn.js';
var xe = M({
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
    Se = M({
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
    Ce = M({
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
    we = M({
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
    Te = M({
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
    Ee = M({
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
    De = m({
        __name: `CardContent`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                O(),
                D(
                    `div`,
                    {
                        'data-slot': `card-content`,
                        class: k(h(T)(`px-6`, t.class)),
                    },
                    [u(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    Oe = m({
        __name: `CardDescription`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                O(),
                D(
                    `p`,
                    {
                        'data-slot': `card-description`,
                        class: k(
                            h(T)(`text-muted-foreground text-sm`, t.class),
                        ),
                    },
                    [u(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    ke = m({
        __name: `CardHeader`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                O(),
                D(
                    `div`,
                    {
                        'data-slot': `card-header`,
                        class: k(
                            h(T)(
                                `@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6`,
                                t.class,
                            ),
                        ),
                    },
                    [u(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    Ae = m({
        __name: `CardTitle`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                O(),
                D(
                    `h3`,
                    {
                        'data-slot': `card-title`,
                        class: k(h(T)(`leading-none font-semibold`, t.class)),
                    },
                    [u(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    F = (e) => ({ url: F.url(e), method: `get` });
((F.definition = { methods: [`get`, `head`], url: `/settings/security` }),
    (F.url = (e) => F.definition.url + y(e)),
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
    (L.url = (e) => L.definition.url + y(e)),
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
    Ne = m({
        __name: `Alert`,
        props: {
            class: { type: [Boolean, null, String, Object, Array] },
            variant: {},
        },
        setup(e) {
            let t = e;
            return (n, r) => (
                O(),
                D(
                    `div`,
                    {
                        'data-slot': `alert`,
                        class: k(h(T)(h(Ie)({ variant: e.variant }), t.class)),
                        role: `alert`,
                    },
                    [u(n.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    Pe = m({
        __name: `AlertDescription`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                O(),
                D(
                    `div`,
                    {
                        'data-slot': `alert-description`,
                        class: k(
                            h(T)(
                                `text-muted-foreground col-start-2 text-sm [&_p]:leading-relaxed`,
                                t.class,
                            ),
                        ),
                    },
                    [u(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    Fe = m({
        __name: `AlertTitle`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                O(),
                D(
                    `div`,
                    {
                        'data-slot': `alert-title`,
                        class: k(
                            h(T)(
                                `col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight`,
                                t.class,
                            ),
                        ),
                    },
                    [u(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    Ie = _(
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
    Re = m({
        __name: `AlertError`,
        props: { errors: {}, title: { default: `Something went wrong.` } },
        setup(e) {
            let t = e,
                n = w(() => Array.from(new Set(t.errors)));
            return (t, r) => (
                O(),
                l(
                    h(Ne),
                    { variant: `destructive` },
                    {
                        default: i(() => [
                            v(h(xe), { class: `size-4` }),
                            v(h(Fe), null, {
                                default: i(() => [x(A(e.title), 1)]),
                                _: 1,
                            }),
                            v(h(Pe), null, {
                                default: i(() => [
                                    g(`ul`, Le, [
                                        (O(!0),
                                        D(
                                            S,
                                            null,
                                            E(
                                                n.value,
                                                (e, t) => (
                                                    O(),
                                                    D(`li`, { key: t }, A(e), 1)
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
    (R.url = (e) => R.definition.url + y(e)),
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
    (B.url = (e) => B.definition.url + y(e)),
    (B.post = (e) => ({ url: B.url(e), method: `post` })));
var ze = (e) => ({ action: B.url(e), method: `post` });
((ze.post = (e) => ({ action: B.url(e), method: `post` })), (B.form = ze));
var V = (e) => ({ url: V.url(e), method: `post` });
((V.definition = {
    methods: [`post`],
    url: `/user/confirmed-two-factor-authentication`,
}),
    (V.url = (e) => V.definition.url + y(e)),
    (V.post = (e) => ({ url: V.url(e), method: `post` })));
var Be = (e) => ({ action: V.url(e), method: `post` });
((Be.post = (e) => ({ action: V.url(e), method: `post` })), (V.form = Be));
var H = (e) => ({ url: H.url(e), method: `delete` });
((H.definition = {
    methods: [`delete`],
    url: `/user/two-factor-authentication`,
}),
    (H.url = (e) => H.definition.url + y(e)),
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
    (U.url = (e) => U.definition.url + y(e)),
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
    (G.url = (e) => G.definition.url + y(e)),
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
    (q.url = (e) => q.definition.url + y(e)),
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
    (Y.url = (e) => Y.definition.url + y(e)),
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
var X = c([]),
    Z = c(null),
    Q = c(null),
    $ = c([]),
    Ue = w(() => Q.value !== null && Z.value !== null),
    We = () => {
        let e = te(),
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
    Ye = m({
        __name: `TwoFactorRecoveryCodes`,
        setup(e) {
            let {
                    recoveryCodesList: t,
                    fetchRecoveryCodes: n,
                    errors: a,
                } = We(),
                u = c(!1),
                p = o(`recoveryCodeSectionRef`),
                m = async () => {
                    (!u.value && !t.value.length && (await n()),
                        (u.value = !u.value),
                        u.value &&
                            (await r(),
                            p.value?.scrollIntoView({ behavior: `smooth` })));
                };
            return (
                ee(async () => {
                    t.value.length || (await n());
                }),
                (e, r) => (
                    O(),
                    l(
                        h(ue),
                        { class: `w-full` },
                        {
                            default: i(() => [
                                v(h(ke), null, {
                                    default: i(() => [
                                        v(
                                            h(Ae),
                                            { class: `flex gap-3` },
                                            {
                                                default: i(() => [
                                                    v(h(Ce), {
                                                        class: `size-4`,
                                                    }),
                                                    (r[0] ||= x(
                                                        `2FA recovery codes `,
                                                        -1,
                                                    )),
                                                ]),
                                                _: 1,
                                            },
                                        ),
                                        v(h(Oe), null, {
                                            default: i(() => [
                                                ...(r[1] ||= [
                                                    x(
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
                                v(h(De), null, {
                                    default: i(() => [
                                        g(`div`, Ge, [
                                            v(
                                                h(C),
                                                { onClick: m, class: `w-fit` },
                                                {
                                                    default: i(() => [
                                                        (O(),
                                                        l(
                                                            f(
                                                                u.value
                                                                    ? h(oe)
                                                                    : h(ae),
                                                            ),
                                                            { class: `size-4` },
                                                        )),
                                                        x(
                                                            ` ` +
                                                                A(
                                                                    u.value
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
                                            u.value && h(t).length
                                                ? (O(),
                                                  l(
                                                      h(d),
                                                      s(
                                                          { key: 0 },
                                                          h(Y).form(),
                                                          {
                                                              method: `post`,
                                                              options: {
                                                                  preserveScroll:
                                                                      !0,
                                                              },
                                                              onSuccess: h(n),
                                                          },
                                                      ),
                                                      {
                                                          default: i(
                                                              ({
                                                                  processing: e,
                                                              }) => [
                                                                  v(
                                                                      h(C),
                                                                      {
                                                                          variant: `secondary`,
                                                                          type: `submit`,
                                                                          disabled:
                                                                              e,
                                                                      },
                                                                      {
                                                                          default:
                                                                              i(
                                                                                  () => [
                                                                                      v(
                                                                                          h(
                                                                                              we,
                                                                                          ),
                                                                                      ),
                                                                                      (r[2] ||=
                                                                                          x(
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
                                                : b(``, !0),
                                        ]),
                                        g(
                                            `div`,
                                            {
                                                class: k([
                                                    `relative overflow-hidden transition-all duration-300`,
                                                    u.value
                                                        ? `h-auto opacity-100`
                                                        : `h-0 opacity-0`,
                                                ]),
                                            },
                                            [
                                                h(a)?.length
                                                    ? (O(),
                                                      D(`div`, Ke, [
                                                          v(
                                                              Re,
                                                              { errors: h(a) },
                                                              null,
                                                              8,
                                                              [`errors`],
                                                          ),
                                                      ]))
                                                    : (O(),
                                                      D(`div`, qe, [
                                                          g(
                                                              `div`,
                                                              {
                                                                  ref_key: `recoveryCodeSectionRef`,
                                                                  ref: p,
                                                                  class: `grid gap-1 rounded-lg bg-muted p-4 font-mono text-sm`,
                                                              },
                                                              [
                                                                  h(t).length
                                                                      ? (O(!0),
                                                                        D(
                                                                            S,
                                                                            {
                                                                                key: 1,
                                                                            },
                                                                            E(
                                                                                h(
                                                                                    t,
                                                                                ),
                                                                                (
                                                                                    e,
                                                                                    t,
                                                                                ) => (
                                                                                    O(),
                                                                                    D(
                                                                                        `div`,
                                                                                        {
                                                                                            key: t,
                                                                                        },
                                                                                        A(
                                                                                            e,
                                                                                        ),
                                                                                        1,
                                                                                    )
                                                                                ),
                                                                            ),
                                                                            128,
                                                                        ))
                                                                      : (O(),
                                                                        D(
                                                                            `div`,
                                                                            Je,
                                                                            [
                                                                                (O(),
                                                                                D(
                                                                                    S,
                                                                                    null,
                                                                                    E(
                                                                                        8,
                                                                                        (
                                                                                            e,
                                                                                        ) =>
                                                                                            g(
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
                                                          (r[3] ||= g(
                                                              `p`,
                                                              {
                                                                  class: `text-xs text-muted-foreground select-none`,
                                                              },
                                                              [
                                                                  x(
                                                                      ` Each recovery code can be used once to access your account and will be removed after use. If you need more, click `,
                                                                  ),
                                                                  g(
                                                                      `span`,
                                                                      {
                                                                          class: `font-bold`,
                                                                      },
                                                                      `Regenerate codes`,
                                                                  ),
                                                                  x(` above. `),
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
    mt = m({
        __name: `TwoFactorSetupModal`,
        props: t(
            {
                requiresConfirmation: { type: Boolean },
                twoFactorEnabled: { type: Boolean },
            },
            { isOpen: { type: Boolean }, isOpenModifiers: {} },
        ),
        emits: [`update:isOpen`],
        setup(e) {
            let t = e,
                n = a(e, `isOpen`),
                { copy: ee, copied: u } = se(),
                {
                    qrCodeSvg: f,
                    manualSetupKey: p,
                    clearSetupData: m,
                    fetchSetupData: te,
                    errors: _,
                } = We(),
                y = c(!1),
                b = c(``),
                T = o(`pinInputContainerRef`),
                k = w(() =>
                    t.twoFactorEnabled
                        ? {
                              title: `Two-factor authentication enabled`,
                              description: `Two-factor authentication is now enabled. Scan the QR code or enter the setup key in your authenticator app.`,
                              buttonText: `Close`,
                          }
                        : y.value
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
                    t.requiresConfirmation
                        ? ((y.value = !0),
                          r(() => {
                              T.value?.querySelector(`input`)?.focus();
                          }))
                        : (m(), (n.value = !1));
                },
                j = () => {
                    (t.twoFactorEnabled && m(), (y.value = !1), (b.value = ``));
                };
            return (
                ne(
                    () => n.value,
                    async (e) => {
                        e ? f.value || (await te()) : j();
                    },
                ),
                (e, t) => (
                    O(),
                    l(
                        h(ye),
                        {
                            open: n.value,
                            'onUpdate:open': (t[5] ||= (e) => (n.value = e)),
                        },
                        {
                            default: i(() => [
                                v(
                                    h(ge),
                                    { class: `sm:max-w-md` },
                                    {
                                        default: i(() => [
                                            v(
                                                h(ve),
                                                {
                                                    class: `flex items-center justify-center`,
                                                },
                                                {
                                                    default: i(() => [
                                                        g(`div`, Xe, [
                                                            g(`div`, Ze, [
                                                                g(`div`, Qe, [
                                                                    (O(),
                                                                    D(
                                                                        S,
                                                                        null,
                                                                        E(
                                                                            5,
                                                                            (
                                                                                e,
                                                                            ) =>
                                                                                g(
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
                                                                g(`div`, $e, [
                                                                    (O(),
                                                                    D(
                                                                        S,
                                                                        null,
                                                                        E(
                                                                            5,
                                                                            (
                                                                                e,
                                                                            ) =>
                                                                                g(
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
                                                                v(h(Te), {
                                                                    class: `relative z-20 size-6 text-foreground`,
                                                                }),
                                                            ]),
                                                        ]),
                                                        v(h(be), null, {
                                                            default: i(() => [
                                                                x(
                                                                    A(
                                                                        k.value
                                                                            .title,
                                                                    ),
                                                                    1,
                                                                ),
                                                            ]),
                                                            _: 1,
                                                        }),
                                                        v(
                                                            h(_e),
                                                            {
                                                                class: `text-center`,
                                                            },
                                                            {
                                                                default: i(
                                                                    () => [
                                                                        x(
                                                                            A(
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
                                            g(`div`, et, [
                                                y.value
                                                    ? (O(),
                                                      l(
                                                          h(d),
                                                          s(
                                                              { key: 1 },
                                                              h(V).form(),
                                                              {
                                                                  'error-bag': `confirmTwoFactorAuthentication`,
                                                                  'reset-on-error': ``,
                                                                  onFinish:
                                                                      (t[3] ||=
                                                                          (e) =>
                                                                              (b.value = ``)),
                                                                  onSuccess:
                                                                      (t[4] ||=
                                                                          (e) =>
                                                                              (n.value =
                                                                                  !1)),
                                                              },
                                                          ),
                                                          {
                                                              default: i(
                                                                  ({
                                                                      errors: e,
                                                                      processing:
                                                                          n,
                                                                  }) => [
                                                                      g(
                                                                          `input`,
                                                                          {
                                                                              type: `hidden`,
                                                                              name: `code`,
                                                                              value: b.value,
                                                                          },
                                                                          null,
                                                                          8,
                                                                          dt,
                                                                      ),
                                                                      g(
                                                                          `div`,
                                                                          {
                                                                              ref_key: `pinInputContainerRef`,
                                                                              ref: T,
                                                                              class: `relative w-full space-y-3`,
                                                                          },
                                                                          [
                                                                              g(
                                                                                  `div`,
                                                                                  ft,
                                                                                  [
                                                                                      v(
                                                                                          h(
                                                                                              fe,
                                                                                          ),
                                                                                          {
                                                                                              id: `otp`,
                                                                                              modelValue:
                                                                                                  b.value,
                                                                                              'onUpdate:modelValue':
                                                                                                  (t[1] ||=
                                                                                                      (
                                                                                                          e,
                                                                                                      ) =>
                                                                                                          (b.value =
                                                                                                              e)),
                                                                                              maxlength: 6,
                                                                                              disabled:
                                                                                                  n,
                                                                                              autofocus: ``,
                                                                                          },
                                                                                          {
                                                                                              default:
                                                                                                  i(
                                                                                                      () => [
                                                                                                          v(
                                                                                                              h(
                                                                                                                  pe,
                                                                                                              ),
                                                                                                              null,
                                                                                                              {
                                                                                                                  default:
                                                                                                                      i(
                                                                                                                          () => [
                                                                                                                              (O(),
                                                                                                                              D(
                                                                                                                                  S,
                                                                                                                                  null,
                                                                                                                                  E(
                                                                                                                                      6,
                                                                                                                                      (
                                                                                                                                          e,
                                                                                                                                      ) =>
                                                                                                                                          v(
                                                                                                                                              h(
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
                                                                                      v(
                                                                                          P,
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
                                                                              g(
                                                                                  `div`,
                                                                                  pt,
                                                                                  [
                                                                                      v(
                                                                                          h(
                                                                                              C,
                                                                                          ),
                                                                                          {
                                                                                              type: `button`,
                                                                                              variant: `outline`,
                                                                                              class: `w-auto flex-1`,
                                                                                              onClick:
                                                                                                  (t[2] ||=
                                                                                                      (
                                                                                                          e,
                                                                                                      ) =>
                                                                                                          (y.value =
                                                                                                              !1)),
                                                                                              disabled:
                                                                                                  n,
                                                                                          },
                                                                                          {
                                                                                              default:
                                                                                                  i(
                                                                                                      () => [
                                                                                                          ...(t[7] ||=
                                                                                                              [
                                                                                                                  x(
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
                                                                                      v(
                                                                                          h(
                                                                                              C,
                                                                                          ),
                                                                                          {
                                                                                              type: `submit`,
                                                                                              class: `w-auto flex-1`,
                                                                                              disabled:
                                                                                                  n ||
                                                                                                  b
                                                                                                      .value
                                                                                                      .length <
                                                                                                      6,
                                                                                          },
                                                                                          {
                                                                                              default:
                                                                                                  i(
                                                                                                      () => [
                                                                                                          ...(t[8] ||=
                                                                                                              [
                                                                                                                  x(
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
                                                    : (O(),
                                                      D(
                                                          S,
                                                          { key: 0 },
                                                          [
                                                              h(_)?.length
                                                                  ? (O(),
                                                                    l(
                                                                        Re,
                                                                        {
                                                                            key: 0,
                                                                            errors: h(
                                                                                _,
                                                                            ),
                                                                        },
                                                                        null,
                                                                        8,
                                                                        [
                                                                            `errors`,
                                                                        ],
                                                                    ))
                                                                  : (O(),
                                                                    D(
                                                                        S,
                                                                        {
                                                                            key: 1,
                                                                        },
                                                                        [
                                                                            g(
                                                                                `div`,
                                                                                tt,
                                                                                [
                                                                                    g(
                                                                                        `div`,
                                                                                        nt,
                                                                                        [
                                                                                            h(
                                                                                                f,
                                                                                            )
                                                                                                ? (O(),
                                                                                                  D(
                                                                                                      `div`,
                                                                                                      it,
                                                                                                      [
                                                                                                          g(
                                                                                                              `div`,
                                                                                                              {
                                                                                                                  innerHTML:
                                                                                                                      h(
                                                                                                                          f,
                                                                                                                      ),
                                                                                                                  class: `flex aspect-square size-full items-center justify-center`,
                                                                                                              },
                                                                                                              null,
                                                                                                              8,
                                                                                                              at,
                                                                                                          ),
                                                                                                      ],
                                                                                                  ))
                                                                                                : (O(),
                                                                                                  D(
                                                                                                      `div`,
                                                                                                      rt,
                                                                                                      [
                                                                                                          v(
                                                                                                              h(
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
                                                                            g(
                                                                                `div`,
                                                                                ot,
                                                                                [
                                                                                    v(
                                                                                        h(
                                                                                            C,
                                                                                        ),
                                                                                        {
                                                                                            class: `w-full`,
                                                                                            onClick:
                                                                                                re,
                                                                                        },
                                                                                        {
                                                                                            default:
                                                                                                i(
                                                                                                    () => [
                                                                                                        x(
                                                                                                            A(
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
                                                                            (t[6] ||=
                                                                                g(
                                                                                    `div`,
                                                                                    {
                                                                                        class: `relative flex w-full items-center justify-center`,
                                                                                    },
                                                                                    [
                                                                                        g(
                                                                                            `div`,
                                                                                            {
                                                                                                class: `absolute inset-0 top-1/2 h-px w-full bg-border`,
                                                                                            },
                                                                                        ),
                                                                                        g(
                                                                                            `span`,
                                                                                            {
                                                                                                class: `relative bg-card px-2 py-1`,
                                                                                            },
                                                                                            `or, enter the code manually`,
                                                                                        ),
                                                                                    ],
                                                                                    -1,
                                                                                )),
                                                                            g(
                                                                                `div`,
                                                                                st,
                                                                                [
                                                                                    g(
                                                                                        `div`,
                                                                                        ct,
                                                                                        [
                                                                                            h(
                                                                                                p,
                                                                                            )
                                                                                                ? (O(),
                                                                                                  D(
                                                                                                      S,
                                                                                                      {
                                                                                                          key: 1,
                                                                                                      },
                                                                                                      [
                                                                                                          g(
                                                                                                              `input`,
                                                                                                              {
                                                                                                                  type: `text`,
                                                                                                                  readonly: ``,
                                                                                                                  value: h(
                                                                                                                      p,
                                                                                                                  ),
                                                                                                                  class: `h-full w-full bg-background p-3 text-foreground`,
                                                                                                              },
                                                                                                              null,
                                                                                                              8,
                                                                                                              ut,
                                                                                                          ),
                                                                                                          g(
                                                                                                              `button`,
                                                                                                              {
                                                                                                                  onClick:
                                                                                                                      (t[0] ||=
                                                                                                                          (
                                                                                                                              e,
                                                                                                                          ) =>
                                                                                                                              h(
                                                                                                                                  ee,
                                                                                                                              )(
                                                                                                                                  h(
                                                                                                                                      p,
                                                                                                                                  ) ||
                                                                                                                                      ``,
                                                                                                                              )),
                                                                                                                  class: `relative block h-auto border-l border-border px-3 hover:bg-muted`,
                                                                                                              },
                                                                                                              [
                                                                                                                  h(
                                                                                                                      u,
                                                                                                                  )
                                                                                                                      ? (O(),
                                                                                                                        l(
                                                                                                                            h(
                                                                                                                                ie,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                key: 0,
                                                                                                                                class: `w-4 text-green-500`,
                                                                                                                            },
                                                                                                                        ))
                                                                                                                      : (O(),
                                                                                                                        l(
                                                                                                                            h(
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
                                                                                                : (O(),
                                                                                                  D(
                                                                                                      `div`,
                                                                                                      lt,
                                                                                                      [
                                                                                                          v(
                                                                                                              h(
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
    yt = m({
        __name: `ManageTwoFactor`,
        props: {
            canManageTwoFactor: { type: Boolean, default: !1 },
            requiresConfirmation: { type: Boolean, default: !1 },
            twoFactorEnabled: { type: Boolean, default: !1 },
        },
        setup(t) {
            let { hasSetupData: r, clearTwoFactorAuthData: a } = We(),
                o = c(!1);
            return (
                e(() => a()),
                (e, a) =>
                    t.canManageTwoFactor
                        ? (O(),
                          D(`div`, ht, [
                              v(ce, {
                                  variant: `small`,
                                  title: `Two-factor authentication`,
                                  description: `Manage your two-factor authentication settings`,
                              }),
                              t.twoFactorEnabled
                                  ? (O(),
                                    D(`div`, _t, [
                                        (a[7] ||= g(
                                            `p`,
                                            {
                                                class: `text-sm text-muted-foreground`,
                                            },
                                            ` You will be prompted for a secure, random pin during login, which you can retrieve from the TOTP-supported application on your phone. `,
                                            -1,
                                        )),
                                        g(`div`, vt, [
                                            v(
                                                h(d),
                                                re(n(h(H).form())),
                                                {
                                                    default: i(
                                                        ({ processing: e }) => [
                                                            v(
                                                                h(C),
                                                                {
                                                                    variant: `destructive`,
                                                                    type: `submit`,
                                                                    disabled: e,
                                                                },
                                                                {
                                                                    default: i(
                                                                        () => [
                                                                            ...(a[6] ||=
                                                                                [
                                                                                    x(
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
                                        v(Ye),
                                    ]))
                                  : (O(),
                                    D(`div`, gt, [
                                        (a[5] ||= g(
                                            `p`,
                                            {
                                                class: `text-sm text-muted-foreground`,
                                            },
                                            ` When you enable two-factor authentication, you will be prompted for a secure pin during login. This pin can be retrieved from a TOTP-supported application on your phone. `,
                                            -1,
                                        )),
                                        g(`div`, null, [
                                            h(r)
                                                ? (O(),
                                                  l(
                                                      h(C),
                                                      {
                                                          key: 0,
                                                          onClick: (a[0] ||= (
                                                              e,
                                                          ) => (o.value = !0)),
                                                      },
                                                      {
                                                          default: i(() => [
                                                              v(h(Ee)),
                                                              (a[3] ||= x(
                                                                  `Continue setup `,
                                                                  -1,
                                                              )),
                                                          ]),
                                                          _: 1,
                                                      },
                                                  ))
                                                : (O(),
                                                  l(
                                                      h(d),
                                                      s(
                                                          { key: 1 },
                                                          h(B).form(),
                                                          {
                                                              onSuccess:
                                                                  (a[1] ||= (
                                                                      e,
                                                                  ) =>
                                                                      (o.value =
                                                                          !0)),
                                                          },
                                                      ),
                                                      {
                                                          default: i(
                                                              ({
                                                                  processing: e,
                                                              }) => [
                                                                  v(
                                                                      h(C),
                                                                      {
                                                                          type: `submit`,
                                                                          disabled:
                                                                              e,
                                                                      },
                                                                      {
                                                                          default:
                                                                              i(
                                                                                  () => [
                                                                                      ...(a[4] ||=
                                                                                          [
                                                                                              x(
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
                              v(
                                  mt,
                                  {
                                      isOpen: o.value,
                                      'onUpdate:isOpen': (a[2] ||= (e) =>
                                          (o.value = e)),
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
                        : b(``, !0)
            );
        },
    }),
    bt = { class: `space-y-6` },
    xt = { class: `grid gap-2` },
    St = { class: `grid gap-2` },
    Ct = { class: `grid gap-2` },
    wt = { class: `flex items-center gap-4` },
    Tt = m({
        layout: { breadcrumbs: [{ title: `Security settings`, href: le() }] },
        __name: `Security`,
        props: {
            passwordRules: {},
            canManageTwoFactor: { type: Boolean },
            requiresConfirmation: { type: Boolean },
            twoFactorEnabled: { type: Boolean },
        },
        setup(e) {
            let t = e;
            return (n, r) => (
                O(),
                D(
                    S,
                    null,
                    [
                        v(h(p), { title: `Security settings` }),
                        (r[4] ||= g(
                            `h1`,
                            { class: `sr-only` },
                            `Security settings`,
                            -1,
                        )),
                        g(`div`, bt, [
                            v(ce, {
                                variant: `small`,
                                title: `Update password`,
                                description: `Ensure your account is using a long, random password to stay secure`,
                            }),
                            v(
                                h(d),
                                s(h(Me).update.form(), {
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
                                    default: i(
                                        ({ errors: e, processing: n }) => [
                                            g(`div`, xt, [
                                                v(
                                                    h(j),
                                                    { for: `current_password` },
                                                    {
                                                        default: i(() => [
                                                            ...(r[0] ||= [
                                                                x(
                                                                    `Current password`,
                                                                    -1,
                                                                ),
                                                            ]),
                                                        ]),
                                                        _: 1,
                                                    },
                                                ),
                                                v(N, {
                                                    id: `current_password`,
                                                    name: `current_password`,
                                                    class: `mt-1 block w-full`,
                                                    autocomplete: `current-password`,
                                                    placeholder: `Current password`,
                                                }),
                                                v(
                                                    P,
                                                    {
                                                        message:
                                                            e.current_password,
                                                    },
                                                    null,
                                                    8,
                                                    [`message`],
                                                ),
                                            ]),
                                            g(`div`, St, [
                                                v(
                                                    h(j),
                                                    { for: `password` },
                                                    {
                                                        default: i(() => [
                                                            ...(r[1] ||= [
                                                                x(
                                                                    `New password`,
                                                                    -1,
                                                                ),
                                                            ]),
                                                        ]),
                                                        _: 1,
                                                    },
                                                ),
                                                v(
                                                    N,
                                                    {
                                                        id: `password`,
                                                        name: `password`,
                                                        class: `mt-1 block w-full`,
                                                        autocomplete: `new-password`,
                                                        placeholder: `New password`,
                                                        passwordrules:
                                                            t.passwordRules,
                                                    },
                                                    null,
                                                    8,
                                                    [`passwordrules`],
                                                ),
                                                v(
                                                    P,
                                                    { message: e.password },
                                                    null,
                                                    8,
                                                    [`message`],
                                                ),
                                            ]),
                                            g(`div`, Ct, [
                                                v(
                                                    h(j),
                                                    {
                                                        for: `password_confirmation`,
                                                    },
                                                    {
                                                        default: i(() => [
                                                            ...(r[2] ||= [
                                                                x(
                                                                    `Confirm password`,
                                                                    -1,
                                                                ),
                                                            ]),
                                                        ]),
                                                        _: 1,
                                                    },
                                                ),
                                                v(
                                                    N,
                                                    {
                                                        id: `password_confirmation`,
                                                        name: `password_confirmation`,
                                                        class: `mt-1 block w-full`,
                                                        autocomplete: `new-password`,
                                                        placeholder: `Confirm password`,
                                                        passwordrules:
                                                            t.passwordRules,
                                                    },
                                                    null,
                                                    8,
                                                    [`passwordrules`],
                                                ),
                                                v(
                                                    P,
                                                    {
                                                        message:
                                                            e.password_confirmation,
                                                    },
                                                    null,
                                                    8,
                                                    [`message`],
                                                ),
                                            ]),
                                            g(`div`, wt, [
                                                v(
                                                    h(C),
                                                    {
                                                        disabled: n,
                                                        'data-test': `update-password-button`,
                                                    },
                                                    {
                                                        default: i(() => [
                                                            ...(r[3] ||= [
                                                                x(` Save `, -1),
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
                        v(
                            yt,
                            {
                                canManageTwoFactor: e.canManageTwoFactor,
                                requiresConfirmation: e.requiresConfirmation,
                                twoFactorEnabled: e.twoFactorEnabled,
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
