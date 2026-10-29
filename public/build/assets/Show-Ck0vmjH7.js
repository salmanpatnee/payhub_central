import { a as e, n as t, t as n } from './Presence-CKGYlb9k.js';
import {
    Bt as r,
    Jt as i,
    K as a,
    Nn as o,
    On as s,
    Sr as ee,
    Tt as c,
    Vt as l,
    _r as u,
    at as d,
    br as f,
    d as p,
    dr as m,
    en as h,
    ft as g,
    g as _,
    h as v,
    ht as y,
    ir as b,
    it as x,
    kn as S,
    mr as C,
    nt as w,
    on as T,
    ot as E,
    p as te,
    pt as D,
    r as O,
    rt as k,
    sn as A,
    ut as ne,
    vr as j,
    yr as re,
} from './wayfinder-BZPu7hPl.js';
import { a as M, s as N, t as P } from './useForwardExpose-B78G7oXS.js';
import { t as F } from './useForwardPropsEmits-CqoMAl8h.js';
import { n as I, t as L } from './formatPercent-C2UIZrJR.js';
import { t as ie } from './createLucideIcon-B933959x.js';
import { c as R, d as ae, w as oe } from './app-CPSAOrcH.js';
import { i as z } from './formatRelative-D-S37FvD.js';
import {
    a as B,
    i as V,
    n as H,
    o as U,
    r as W,
    s as G,
    t as K,
} from './TableRow-C0myH0NN.js';
import { t as q } from './TableCaption-M4KzGuv1.js';
import { n as se, t as ce } from './deploymentStatus-DAZueO0e.js';
import { t as le } from './PageHeader-D9oPzwwI.js';
var [J, ue] = e(`CollapsibleRoot`),
    de = y({
        __name: `CollapsibleRoot`,
        props: {
            defaultOpen: { type: Boolean, required: !1, default: !1 },
            open: { type: Boolean, required: !1, default: void 0 },
            disabled: { type: Boolean, required: !1 },
            unmountOnHide: { type: Boolean, required: !1, default: !0 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
        },
        emits: [`update:open`],
        setup(e, { expose: t, emit: n }) {
            let r = e,
                i = N(r, `open`, n, {
                    defaultValue: r.defaultOpen,
                    passive: r.open === void 0,
                }),
                { disabled: a, unmountOnHide: s } = m(r);
            return (
                ue({
                    contentId: ``,
                    disabled: a,
                    open: i,
                    unmountOnHide: s,
                    onOpenToggle: () => {
                        a.value || (i.value = !i.value);
                    },
                }),
                t({ open: i }),
                P(),
                (t, n) => (
                    h(),
                    x(
                        C(O),
                        {
                            as: e.as,
                            'as-child': r.asChild,
                            'data-state': C(i) ? `open` : `closed`,
                            'data-disabled': C(a) ? `` : void 0,
                        },
                        {
                            default: o(() => [
                                A(t.$slots, `default`, { open: C(i) }),
                            ]),
                            _: 3,
                        },
                        8,
                        [`as`, `as-child`, `data-state`, `data-disabled`],
                    )
                )
            );
        },
    }),
    fe = y({
        inheritAttrs: !1,
        __name: `CollapsibleContent`,
        props: {
            forceMount: { type: Boolean, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
        },
        emits: [`contentFound`],
        setup(e, { emit: a }) {
            let ee = e,
                c = a,
                u = J();
            u.contentId ||= t(void 0, `reka-collapsible-content`);
            let f = b(),
                { forwardRef: p, currentElement: m } = P(),
                g = b(0),
                _ = b(0),
                v = w(() => u.open.value),
                y = b(v.value),
                S = b();
            s(
                () => [v.value, f.value?.present],
                async () => {
                    await l();
                    let e = m.value;
                    if (!e) return;
                    ((S.value = S.value || {
                        transitionDuration: e.style.transitionDuration,
                        animationName: e.style.animationName,
                    }),
                        (e.style.transitionDuration = `0s`),
                        (e.style.animationName = `none`));
                    let t = e.getBoundingClientRect();
                    ((_.value = t.height),
                        (g.value = t.width),
                        y.value ||
                            ((e.style.transitionDuration =
                                S.value.transitionDuration),
                            (e.style.animationName = S.value.animationName)));
                },
                { immediate: !0 },
            );
            let T = w(() => y.value && u.open.value);
            return (
                i(() => {
                    requestAnimationFrame(() => {
                        y.value = !1;
                    });
                }),
                M(m, `beforematch`, (e) => {
                    requestAnimationFrame(() => {
                        (u.onOpenToggle(), c(`contentFound`));
                    });
                }),
                (t, i) => (
                    h(),
                    x(
                        C(n),
                        {
                            ref_key: `presentRef`,
                            ref: f,
                            present: e.forceMount || C(u).open.value,
                            'force-mount': !0,
                        },
                        {
                            default: o(({ present: n }) => [
                                D(
                                    C(O),
                                    r(t.$attrs, {
                                        id: C(u).contentId,
                                        ref: C(p),
                                        'as-child': ee.asChild,
                                        as: e.as,
                                        hidden: n
                                            ? void 0
                                            : C(u).unmountOnHide.value
                                              ? ``
                                              : `until-found`,
                                        'data-state': T.value
                                            ? void 0
                                            : C(u).open.value
                                              ? `open`
                                              : `closed`,
                                        'data-disabled': C(u).disabled?.value
                                            ? ``
                                            : void 0,
                                        style: {
                                            '--reka-collapsible-content-height': `${_.value}px`,
                                            '--reka-collapsible-content-width': `${g.value}px`,
                                        },
                                    }),
                                    {
                                        default: o(() => [
                                            !C(u).unmountOnHide.value || n
                                                ? A(
                                                      t.$slots,
                                                      `default`,
                                                      {},
                                                      void 0,
                                                      void 0,
                                                      0,
                                                  )
                                                : d(`v-if`, !0),
                                        ]),
                                        _: 2,
                                    },
                                    1040,
                                    [
                                        `id`,
                                        `as-child`,
                                        `as`,
                                        `hidden`,
                                        `data-state`,
                                        `data-disabled`,
                                        `style`,
                                    ],
                                ),
                            ]),
                            _: 3,
                        },
                        8,
                        [`present`],
                    )
                )
            );
        },
    }),
    pe = y({
        __name: `CollapsibleTrigger`,
        props: {
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1, default: `button` },
        },
        setup(e) {
            let t = e;
            P();
            let n = J();
            return (r, i) => (
                h(),
                x(
                    C(O),
                    {
                        type: e.as === `button` ? `button` : void 0,
                        as: e.as,
                        'as-child': t.asChild,
                        'aria-controls': C(n).contentId,
                        'aria-expanded': C(n).open.value,
                        'data-state': C(n).open.value ? `open` : `closed`,
                        'data-disabled': C(n).disabled?.value ? `` : void 0,
                        disabled: C(n).disabled?.value,
                        onClick: C(n).onOpenToggle,
                    },
                    { default: o(() => [A(r.$slots, `default`)]), _: 3 },
                    8,
                    [
                        `type`,
                        `as`,
                        `as-child`,
                        `aria-controls`,
                        `aria-expanded`,
                        `data-state`,
                        `data-disabled`,
                        `disabled`,
                        `onClick`,
                    ],
                )
            );
        },
    }),
    me = ie({
        name: `chevron-down`,
        size: 24,
        node: [[`path`, { d: `m6 9 6 6 6-6`, key: `qrunsl` }]],
    }),
    he = y({
        __name: `Collapsible`,
        props: {
            defaultOpen: { type: Boolean },
            open: { type: Boolean },
            disabled: { type: Boolean },
            unmountOnHide: { type: Boolean },
            asChild: { type: Boolean },
            as: {},
        },
        emits: [`update:open`],
        setup(e, { emit: t }) {
            let n = F(e, t);
            return (e, t) => (
                h(),
                x(
                    C(de),
                    r({ 'data-slot': `collapsible` }, C(n)),
                    {
                        default: o((t) => [A(e.$slots, `default`, j(c(t)))]),
                        _: 3,
                    },
                    16,
                )
            );
        },
    }),
    ge = y({
        __name: `CollapsibleContent`,
        props: {
            forceMount: { type: Boolean },
            asChild: { type: Boolean },
            as: {},
        },
        setup(e) {
            let t = e;
            return (e, n) => (
                h(),
                x(
                    C(fe),
                    r({ 'data-slot': `collapsible-content` }, t),
                    { default: o(() => [A(e.$slots, `default`)]), _: 3 },
                    16,
                )
            );
        },
    }),
    _e = y({
        __name: `CollapsibleTrigger`,
        props: { asChild: { type: Boolean }, as: {} },
        setup(e) {
            let t = e;
            return (e, n) => (
                h(),
                x(
                    C(pe),
                    r({ 'data-slot': `collapsible-trigger` }, t),
                    { default: o(() => [A(e.$slots, `default`)]), _: 3 },
                    16,
                )
            );
        },
    }),
    ve = [
        `Jan`,
        `Feb`,
        `Mar`,
        `Apr`,
        `May`,
        `Jun`,
        `Jul`,
        `Aug`,
        `Sep`,
        `Oct`,
        `Nov`,
        `Dec`,
    ],
    ye = 864e5;
function be(e) {
    let t = e?.match(
        /^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2}):(\d{2}))?/,
    );
    if (!t) return null;
    let [n, r, i] = [t[1], t[2], t[3]].map(Number),
        a = Date.UTC(n, r - 1, i),
        o = new Date(a);
    return o.getUTCFullYear() !== n ||
        o.getUTCMonth() !== r - 1 ||
        o.getUTCDate() !== i
        ? null
        : {
              at: a,
              midnight:
                  t[4] === void 0 ||
                  (t[4] === `00` && t[5] === `00` && t[6] === `00`),
          };
}
function Y(e, t) {
    let n = new Date(e),
        r = `${n.getUTCDate()} ${ve[n.getUTCMonth()]}`;
    return t ? `${r} ${n.getUTCFullYear()}` : r;
}
function xe(e, t) {
    let n = be(e),
        r = be(t);
    if (!n || !r) return null;
    let i = r.midnight ? r.at - ye : r.at;
    if (i < n.at) return null;
    if (i === n.at) return Y(n.at, !1);
    let a = new Date(n.at).getUTCFullYear() !== new Date(i).getUTCFullYear();
    return `${Y(n.at, a)} to ${Y(i, a)}`;
}
var Se = { class: `mx-auto w-full max-w-7xl space-y-6 p-4 md:p-6` },
    Ce = { class: `flex flex-wrap items-start justify-between gap-4` },
    we = { class: `space-y-1` },
    Te = { key: 0, class: `text-sm text-muted-foreground sm:text-right` },
    Ee = {
        key: 0,
        class: `rounded-xl border border-dashed border-border p-6 text-sm text-muted-foreground`,
    },
    De = { class: `flex flex-wrap items-center justify-between gap-3` },
    Oe = {
        role: `group`,
        'aria-label': `Period`,
        class: `inline-flex w-full max-w-full overflow-x-auto rounded-lg bg-muted p-1 sm:w-auto`,
    },
    ke = [`aria-pressed`, `onClick`],
    Ae = { class: `text-sm text-muted-foreground tabular-nums` },
    je = { class: `grid gap-4 md:grid-cols-[1.5fr_1fr_1fr]` },
    Me = {
        class: `space-y-3 rounded-xl border border-border/70 bg-card p-4 shadow-sm`,
        'aria-labelledby': `paid-title`,
    },
    Ne = { key: 0, class: `text-sm text-muted-foreground` },
    Pe = { key: 1, class: `divide-y divide-border/50` },
    Fe = {
        class: `w-9 shrink-0 text-xs font-semibold tracking-wider text-muted-foreground uppercase`,
    },
    Ie = {
        class: `mr-auto text-2xl font-semibold tracking-tight tabular-nums`,
    },
    Le = { class: `text-xs text-muted-foreground tabular-nums` },
    Re = {
        class: `space-y-3 rounded-xl border border-border/70 bg-card p-4 shadow-sm`,
        'aria-labelledby': `links-title`,
    },
    ze = { class: `text-4xl font-semibold tracking-tight tabular-nums` },
    Be = {
        class: `space-y-3 rounded-xl border border-border/70 bg-card p-4 shadow-sm`,
        'aria-labelledby': `attention-title`,
    },
    Ve = { class: `text-4xl font-semibold tracking-tight tabular-nums` },
    He = { class: `flex flex-wrap gap-2` },
    Ue = { key: 1, class: `flex items-center gap-3` },
    We = {
        class: `flex size-11 shrink-0 items-center justify-center rounded-full bg-success-soft ring-1 ring-success-border ring-inset`,
    },
    Ge = { class: `grid gap-4 lg:grid-cols-[1fr_1.25fr]` },
    Ke = {
        class: `space-y-4 rounded-xl border border-border/70 bg-card p-4 shadow-sm`,
        'aria-labelledby': `outcomes-title`,
    },
    qe = {
        class: `flex h-2.5 gap-0.5 overflow-hidden rounded-full bg-muted`,
        'aria-hidden': `true`,
    },
    Je = { class: `divide-y divide-border/50` },
    Ye = { class: `text-sm` },
    Xe = { class: `text-base font-semibold tabular-nums` },
    Ze = { class: `text-right text-xs text-muted-foreground tabular-nums` },
    Qe = {
        class: `space-y-3 rounded-xl border border-border/70 bg-card p-4 shadow-sm`,
        'aria-labelledby': `compare-title`,
    },
    $e = { class: `overflow-x-auto` },
    et = { id: `pulls-title`, class: `m-0` },
    tt = {
        type: `button`,
        class: `group flex w-full items-center justify-between gap-4 px-4 py-3 text-left outline-none hover:bg-muted/40 focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:ring-inset`,
    },
    nt = { class: `space-y-0.5` },
    rt = { key: 0, class: `block text-sm font-normal text-muted-foreground` },
    it = { class: `overflow-x-auto border-t border-border/60` },
    at = {
        class: `inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-semibold text-foreground`,
    },
    ot = { key: 2, class: `text-xs text-muted-foreground` },
    X = `text-[11px] font-semibold tracking-widest text-muted-foreground uppercase`,
    Z = `inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset`,
    st = `h-auto px-3 py-2 text-right`,
    Q = `px-3 py-2 text-right text-sm tabular-nums`,
    $ = `px-3 py-2 text-sm font-normal tracking-normal text-muted-foreground normal-case`,
    ct = y({
        __name: `Show`,
        props: { deployment: {}, pulls: {} },
        setup(e) {
            let t = e,
                n = v(),
                r = [
                    { key: `today`, label: `Today` },
                    { key: `thisMonth`, label: `This month` },
                    { key: `last30Days`, label: `Last 30 days` },
                    { key: `allTime`, label: `All time` },
                ],
                i = [
                    { key: `completed`, label: `Completed`, bar: `bg-success` },
                    { key: `pending`, label: `Pending`, bar: `bg-warning` },
                    { key: `failed`, label: `Failed`, bar: `bg-danger` },
                    {
                        key: `cancelled`,
                        label: `Cancelled`,
                        bar: `bg-muted-foreground/60`,
                    },
                    {
                        key: `expired`,
                        label: `Expired`,
                        bar: `bg-muted-foreground/30`,
                    },
                ],
                s = b(`today`),
                c = w(() => ce(t.deployment.state)),
                l = w(() =>
                    se(
                        t.deployment.state,
                        t.deployment.reason,
                        t.deployment.windows !== null,
                    ),
                ),
                m = w(() => t.deployment.windows?.[s.value]),
                y = w(() => r.find((e) => e.key === s.value)?.label ?? ``),
                O = w(() => {
                    let e = m.value;
                    return e
                        ? [
                              ...new Set([
                                  ...Object.keys(e.completed),
                                  ...Object.keys(e.pending),
                              ]),
                          ]
                              .filter(
                                  (t) =>
                                      (e.completed[t] ?? 0) > 0 ||
                                      (e.pending[t] ?? 0) > 0,
                              )
                              .sort()
                              .map((t) => ({
                                  code: t.toUpperCase(),
                                  paid: z(e.completed[t] ?? 0, t).amount,
                                  pending: e.pending[t] ?? 0,
                                  pendingText: z(e.pending[t] ?? 0, t).amount,
                              }))
                        : [];
                }),
                A = w(() =>
                    m.value ? m.value.links.failed + m.value.links.pending : 0,
                ),
                j = w(() => {
                    let e = t.deployment.windows;
                    if (!e) return [];
                    let n = r.map((t) => e[t.key]);
                    return [
                        ...new Set(n.flatMap((e) => Object.keys(e.completed))),
                    ]
                        .filter((e) => n.some((t) => (t.completed[e] ?? 0) > 0))
                        .sort();
                });
            function M(e) {
                let n = t.deployment.windows?.[e];
                return e === `allTime` || !n
                    ? `Since the first link`
                    : (xe(n.from, n.to) ?? ``);
            }
            function N(e) {
                let t = m.value?.links.total ?? 0;
                return t > 0 ? `${(e / t) * 100}%` : `0%`;
            }
            (S(() => {
                te({
                    breadcrumbs: [
                        { title: `Home`, href: ae() },
                        { title: `Deployments`, href: R() },
                        { title: t.deployment.name, href: n.url },
                    ],
                });
            }),
                _(6e4, {
                    only: [`deployment`],
                    onHttpException: (e) => {
                        if (e.status === 404) return (ee.visit(R()), !1);
                    },
                }));
            let P = { scheduled: `Scheduled`, manual: `Manual` };
            function F(e) {
                return e.ok ? `None` : (e.reason ?? `No reason saved`);
            }
            return (t, n) => (
                h(),
                E(
                    a,
                    null,
                    [
                        D(C(p), { title: e.deployment.name }, null, 8, [
                            `title`,
                        ]),
                        k(`div`, Se, [
                            k(`div`, Ce, [
                                k(`div`, we, [
                                    D(
                                        le,
                                        {
                                            title: e.deployment.name,
                                            description:
                                                e.deployment.domain ?? void 0,
                                        },
                                        ne({ _: 2 }, [
                                            c.value
                                                ? {
                                                      name: `actions`,
                                                      fn: o(() => [
                                                          D(
                                                              C(G),
                                                              {
                                                                  variant:
                                                                      c.value
                                                                          .variant,
                                                              },
                                                              {
                                                                  default: o(
                                                                      () => [
                                                                          g(
                                                                              f(
                                                                                  c
                                                                                      .value
                                                                                      .label,
                                                                              ),
                                                                              1,
                                                                          ),
                                                                      ],
                                                                  ),
                                                                  _: 1,
                                                              },
                                                              8,
                                                              [`variant`],
                                                          ),
                                                      ]),
                                                      key: `0`,
                                                  }
                                                : void 0,
                                        ]),
                                        1032,
                                        [`title`, `description`],
                                    ),
                                    (h(!0),
                                    E(
                                        a,
                                        null,
                                        T(
                                            l.value,
                                            (e) => (
                                                h(),
                                                E(
                                                    `p`,
                                                    {
                                                        key: e,
                                                        class: `text-sm text-muted-foreground`,
                                                    },
                                                    f(e),
                                                    1,
                                                )
                                            ),
                                        ),
                                        128,
                                    )),
                                ]),
                                e.deployment.updatedAt
                                    ? (h(),
                                      E(`p`, Te, [
                                          (n[0] ||= g(` Last updated `, -1)),
                                          D(
                                              I,
                                              {
                                                  at: e.deployment.updatedAt,
                                                  timezone:
                                                      e.deployment.timezone,
                                              },
                                              null,
                                              8,
                                              [`at`, `timezone`],
                                          ),
                                      ]))
                                    : d(``, !0),
                            ]),
                            !e.deployment.windows || !m.value
                                ? (h(), E(`p`, Ee, ` No data yet `))
                                : (h(),
                                  E(
                                      a,
                                      { key: 1 },
                                      [
                                          k(`div`, De, [
                                              k(`div`, Oe, [
                                                  (h(),
                                                  E(
                                                      a,
                                                      null,
                                                      T(r, (e) =>
                                                          k(
                                                              `button`,
                                                              {
                                                                  key: e.key,
                                                                  type: `button`,
                                                                  'aria-pressed':
                                                                      s.value ===
                                                                      e.key,
                                                                  class: `flex-1 rounded-md px-3 py-1.5 text-sm font-medium whitespace-nowrap text-muted-foreground transition-colors focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:outline-none aria-pressed:bg-card aria-pressed:text-foreground aria-pressed:shadow-sm sm:flex-none`,
                                                                  onClick: (
                                                                      t,
                                                                  ) =>
                                                                      (s.value =
                                                                          e.key),
                                                              },
                                                              f(e.label),
                                                              9,
                                                              ke,
                                                          ),
                                                      ),
                                                      64,
                                                  )),
                                              ]),
                                              k(`p`, Ae, f(M(s.value)), 1),
                                          ]),
                                          k(`div`, je, [
                                              k(`section`, Me, [
                                                  k(
                                                      `h2`,
                                                      {
                                                          id: `paid-title`,
                                                          class: u(X),
                                                      },
                                                      ` Money paid · ` +
                                                          f(y.value),
                                                      1,
                                                  ),
                                                  O.value.length === 0
                                                      ? (h(),
                                                        E(
                                                            `p`,
                                                            Ne,
                                                            ` No payments `,
                                                        ))
                                                      : (h(),
                                                        E(`ul`, Pe, [
                                                            (h(!0),
                                                            E(
                                                                a,
                                                                null,
                                                                T(
                                                                    O.value,
                                                                    (e) => (
                                                                        h(),
                                                                        E(
                                                                            `li`,
                                                                            {
                                                                                key: e.code,
                                                                                class: `flex items-baseline justify-between gap-3 py-2 first:pt-0 last:pb-0`,
                                                                            },
                                                                            [
                                                                                k(
                                                                                    `span`,
                                                                                    Fe,
                                                                                    f(
                                                                                        e.code,
                                                                                    ),
                                                                                    1,
                                                                                ),
                                                                                k(
                                                                                    `span`,
                                                                                    Ie,
                                                                                    f(
                                                                                        e.paid,
                                                                                    ),
                                                                                    1,
                                                                                ),
                                                                                k(
                                                                                    `span`,
                                                                                    Le,
                                                                                    f(
                                                                                        e.pending >
                                                                                            0
                                                                                            ? `${e.pendingText} pending`
                                                                                            : `none pending`,
                                                                                    ),
                                                                                    1,
                                                                                ),
                                                                            ],
                                                                        )
                                                                    ),
                                                                ),
                                                                128,
                                                            )),
                                                        ])),
                                                  (n[1] ||= k(
                                                      `p`,
                                                      {
                                                          class: `text-xs text-muted-foreground`,
                                                      },
                                                      ` Counted by the date each payment was paid. This includes links created earlier. `,
                                                      -1,
                                                  )),
                                              ]),
                                              k(`section`, Re, [
                                                  k(
                                                      `h2`,
                                                      {
                                                          id: `links-title`,
                                                          class: u(X),
                                                      },
                                                      `Links created`,
                                                  ),
                                                  k(
                                                      `p`,
                                                      ze,
                                                      f(m.value.links.total),
                                                      1,
                                                  ),
                                                  k(`p`, null, [
                                                      m.value.links.total > 0
                                                          ? (h(),
                                                            E(
                                                                `span`,
                                                                {
                                                                    key: 0,
                                                                    class: u([
                                                                        Z,
                                                                        `bg-success-soft text-success tabular-nums ring-success-border`,
                                                                    ]),
                                                                },
                                                                f(
                                                                    C(L)(
                                                                        m.value
                                                                            .links
                                                                            .completed,
                                                                        m.value
                                                                            .links
                                                                            .total,
                                                                    ),
                                                                ) +
                                                                    ` completed `,
                                                                3,
                                                            ))
                                                          : (h(),
                                                            E(
                                                                `span`,
                                                                {
                                                                    key: 1,
                                                                    class: u([
                                                                        Z,
                                                                        `bg-muted text-muted-foreground ring-border`,
                                                                    ]),
                                                                },
                                                                ` No links yet `,
                                                                2,
                                                            )),
                                                  ]),
                                                  (n[2] ||= k(
                                                      `p`,
                                                      {
                                                          class: `text-xs text-muted-foreground`,
                                                      },
                                                      ` Counted by the date each link was created. `,
                                                      -1,
                                                  )),
                                              ]),
                                              k(`section`, Be, [
                                                  k(
                                                      `h2`,
                                                      {
                                                          id: `attention-title`,
                                                          class: u(X),
                                                      },
                                                      ` Needs attention `,
                                                  ),
                                                  A.value > 0
                                                      ? (h(),
                                                        E(
                                                            a,
                                                            { key: 0 },
                                                            [
                                                                k(
                                                                    `p`,
                                                                    Ve,
                                                                    f(A.value),
                                                                    1,
                                                                ),
                                                                k(`p`, He, [
                                                                    m.value
                                                                        .links
                                                                        .failed >
                                                                    0
                                                                        ? (h(),
                                                                          E(
                                                                              `span`,
                                                                              {
                                                                                  key: 0,
                                                                                  class: u(
                                                                                      [
                                                                                          Z,
                                                                                          `bg-danger-soft text-danger tabular-nums ring-danger-border`,
                                                                                      ],
                                                                                  ),
                                                                              },
                                                                              f(
                                                                                  m
                                                                                      .value
                                                                                      .links
                                                                                      .failed,
                                                                              ) +
                                                                                  ` failed `,
                                                                              3,
                                                                          ))
                                                                        : d(
                                                                              ``,
                                                                              !0,
                                                                          ),
                                                                    m.value
                                                                        .links
                                                                        .pending >
                                                                    0
                                                                        ? (h(),
                                                                          E(
                                                                              `span`,
                                                                              {
                                                                                  key: 1,
                                                                                  class: u(
                                                                                      [
                                                                                          Z,
                                                                                          `bg-warning-soft text-warning tabular-nums ring-warning-border`,
                                                                                      ],
                                                                                  ),
                                                                              },
                                                                              f(
                                                                                  m
                                                                                      .value
                                                                                      .links
                                                                                      .pending,
                                                                              ) +
                                                                                  ` pending `,
                                                                              3,
                                                                          ))
                                                                        : d(
                                                                              ``,
                                                                              !0,
                                                                          ),
                                                                ]),
                                                            ],
                                                            64,
                                                        ))
                                                      : (h(),
                                                        E(`div`, Ue, [
                                                            k(`span`, We, [
                                                                D(C(oe), {
                                                                    class: `size-6 text-success`,
                                                                    'aria-hidden': `true`,
                                                                }),
                                                            ]),
                                                            (n[3] ||= k(
                                                                `div`,
                                                                null,
                                                                [
                                                                    k(
                                                                        `p`,
                                                                        {
                                                                            class: `text-2xl leading-tight font-semibold tracking-tight text-success`,
                                                                        },
                                                                        ` All clear `,
                                                                    ),
                                                                    k(
                                                                        `p`,
                                                                        {
                                                                            class: `text-sm text-muted-foreground`,
                                                                        },
                                                                        ` Nothing failed or waiting `,
                                                                    ),
                                                                ],
                                                                -1,
                                                            )),
                                                        ])),
                                                  (n[4] ||= k(
                                                      `p`,
                                                      {
                                                          class: `text-xs text-muted-foreground`,
                                                      },
                                                      ` Failed links and links still waiting for payment. `,
                                                      -1,
                                                  )),
                                              ]),
                                          ]),
                                          k(`div`, Ge, [
                                              k(`section`, Ke, [
                                                  k(
                                                      `h2`,
                                                      {
                                                          id: `outcomes-title`,
                                                          class: u(X),
                                                      },
                                                      `Link outcomes`,
                                                  ),
                                                  k(`div`, qe, [
                                                      (h(),
                                                      E(
                                                          a,
                                                          null,
                                                          T(
                                                              i,
                                                              (e) => (
                                                                  h(),
                                                                  E(
                                                                      a,
                                                                      {
                                                                          key: e.key,
                                                                      },
                                                                      [
                                                                          m
                                                                              .value
                                                                              .links[
                                                                              e
                                                                                  .key
                                                                          ] > 0
                                                                              ? (h(),
                                                                                E(
                                                                                    `span`,
                                                                                    {
                                                                                        key: 0,
                                                                                        class: u(
                                                                                            [
                                                                                                `block min-w-[3px]`,
                                                                                                e.bar,
                                                                                            ],
                                                                                        ),
                                                                                        style: re(
                                                                                            {
                                                                                                width: N(
                                                                                                    m
                                                                                                        .value
                                                                                                        .links[
                                                                                                        e
                                                                                                            .key
                                                                                                    ],
                                                                                                ),
                                                                                            },
                                                                                        ),
                                                                                    },
                                                                                    null,
                                                                                    6,
                                                                                ))
                                                                              : d(
                                                                                    ``,
                                                                                    !0,
                                                                                ),
                                                                      ],
                                                                      64,
                                                                  )
                                                              ),
                                                          ),
                                                          64,
                                                      )),
                                                  ]),
                                                  k(`ul`, Je, [
                                                      (h(),
                                                      E(
                                                          a,
                                                          null,
                                                          T(i, (e) =>
                                                              k(
                                                                  `li`,
                                                                  {
                                                                      key: e.key,
                                                                      class: `grid grid-cols-[auto_1fr_auto_3.5rem] items-center gap-3 py-2 first:pt-0 last:pb-0`,
                                                                  },
                                                                  [
                                                                      k(
                                                                          `span`,
                                                                          {
                                                                              class: u(
                                                                                  [
                                                                                      `size-2 rounded-sm`,
                                                                                      e.bar,
                                                                                  ],
                                                                              ),
                                                                              'aria-hidden': `true`,
                                                                          },
                                                                          null,
                                                                          2,
                                                                      ),
                                                                      k(
                                                                          `span`,
                                                                          Ye,
                                                                          f(
                                                                              e.label,
                                                                          ),
                                                                          1,
                                                                      ),
                                                                      k(
                                                                          `span`,
                                                                          Xe,
                                                                          f(
                                                                              m
                                                                                  .value
                                                                                  .links[
                                                                                  e
                                                                                      .key
                                                                              ],
                                                                          ),
                                                                          1,
                                                                      ),
                                                                      k(
                                                                          `span`,
                                                                          Ze,
                                                                          f(
                                                                              C(
                                                                                  L,
                                                                              )(
                                                                                  m
                                                                                      .value
                                                                                      .links[
                                                                                      e
                                                                                          .key
                                                                                  ],
                                                                                  m
                                                                                      .value
                                                                                      .links
                                                                                      .total,
                                                                              ),
                                                                          ),
                                                                          1,
                                                                      ),
                                                                  ],
                                                              ),
                                                          ),
                                                          64,
                                                      )),
                                                  ]),
                                              ]),
                                              k(`section`, Qe, [
                                                  k(
                                                      `h2`,
                                                      {
                                                          id: `compare-title`,
                                                          class: u(X),
                                                      },
                                                      `All periods`,
                                                  ),
                                                  k(`div`, $e, [
                                                      D(C(U), null, {
                                                          default: o(() => [
                                                              D(
                                                                  C(q),
                                                                  {
                                                                      class: `sr-only`,
                                                                  },
                                                                  {
                                                                      default:
                                                                          o(
                                                                              () => [
                                                                                  ...(n[5] ||=
                                                                                      [
                                                                                          g(
                                                                                              ` Links and money for every period `,
                                                                                              -1,
                                                                                          ),
                                                                                      ]),
                                                                              ],
                                                                          ),
                                                                      _: 1,
                                                                  },
                                                              ),
                                                              D(C(H), null, {
                                                                  default: o(
                                                                      () => [
                                                                          D(
                                                                              C(
                                                                                  K,
                                                                              ),
                                                                              null,
                                                                              {
                                                                                  default:
                                                                                      o(
                                                                                          () => [
                                                                                              D(
                                                                                                  C(
                                                                                                      W,
                                                                                                  ),
                                                                                                  {
                                                                                                      scope: `col`,
                                                                                                      class: `px-3`,
                                                                                                  },
                                                                                                  {
                                                                                                      default:
                                                                                                          o(
                                                                                                              () => [
                                                                                                                  ...(n[6] ||=
                                                                                                                      [
                                                                                                                          k(
                                                                                                                              `span`,
                                                                                                                              {
                                                                                                                                  class: `sr-only`,
                                                                                                                              },
                                                                                                                              `Measure`,
                                                                                                                              -1,
                                                                                                                          ),
                                                                                                                      ]),
                                                                                                              ],
                                                                                                          ),
                                                                                                      _: 1,
                                                                                                  },
                                                                                              ),
                                                                                              (h(),
                                                                                              E(
                                                                                                  a,
                                                                                                  null,
                                                                                                  T(
                                                                                                      r,
                                                                                                      (
                                                                                                          e,
                                                                                                      ) =>
                                                                                                          D(
                                                                                                              C(
                                                                                                                  W,
                                                                                                              ),
                                                                                                              {
                                                                                                                  key: e.key,
                                                                                                                  scope: `col`,
                                                                                                                  class: u(
                                                                                                                      [
                                                                                                                          st,
                                                                                                                          s.value ===
                                                                                                                              e.key &&
                                                                                                                              `bg-primary/5 text-primary`,
                                                                                                                      ],
                                                                                                                  ),
                                                                                                              },
                                                                                                              {
                                                                                                                  default:
                                                                                                                      o(
                                                                                                                          () => [
                                                                                                                              g(
                                                                                                                                  f(
                                                                                                                                      e.label,
                                                                                                                                  ),
                                                                                                                                  1,
                                                                                                                              ),
                                                                                                                          ],
                                                                                                                      ),
                                                                                                                  _: 2,
                                                                                                              },
                                                                                                              1032,
                                                                                                              [
                                                                                                                  `class`,
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
                                                              }),
                                                              D(C(B), null, {
                                                                  default: o(
                                                                      () => [
                                                                          D(
                                                                              C(
                                                                                  K,
                                                                              ),
                                                                              null,
                                                                              {
                                                                                  default:
                                                                                      o(
                                                                                          () => [
                                                                                              D(
                                                                                                  C(
                                                                                                      W,
                                                                                                  ),
                                                                                                  {
                                                                                                      scope: `row`,
                                                                                                      class: u(
                                                                                                          $,
                                                                                                      ),
                                                                                                  },
                                                                                                  {
                                                                                                      default:
                                                                                                          o(
                                                                                                              () => [
                                                                                                                  ...(n[7] ||=
                                                                                                                      [
                                                                                                                          g(
                                                                                                                              ` Links created `,
                                                                                                                              -1,
                                                                                                                          ),
                                                                                                                      ]),
                                                                                                              ],
                                                                                                          ),
                                                                                                      _: 1,
                                                                                                  },
                                                                                              ),
                                                                                              (h(),
                                                                                              E(
                                                                                                  a,
                                                                                                  null,
                                                                                                  T(
                                                                                                      r,
                                                                                                      (
                                                                                                          t,
                                                                                                      ) =>
                                                                                                          D(
                                                                                                              C(
                                                                                                                  V,
                                                                                                              ),
                                                                                                              {
                                                                                                                  key: t.key,
                                                                                                                  class: u(
                                                                                                                      [
                                                                                                                          Q,
                                                                                                                          s.value ===
                                                                                                                              t.key &&
                                                                                                                              `bg-primary/5`,
                                                                                                                      ],
                                                                                                                  ),
                                                                                                              },
                                                                                                              {
                                                                                                                  default:
                                                                                                                      o(
                                                                                                                          () => [
                                                                                                                              g(
                                                                                                                                  f(
                                                                                                                                      e
                                                                                                                                          .deployment
                                                                                                                                          .windows[
                                                                                                                                          t
                                                                                                                                              .key
                                                                                                                                      ]
                                                                                                                                          .links
                                                                                                                                          .total,
                                                                                                                                  ),
                                                                                                                                  1,
                                                                                                                              ),
                                                                                                                          ],
                                                                                                                      ),
                                                                                                                  _: 2,
                                                                                                              },
                                                                                                              1032,
                                                                                                              [
                                                                                                                  `class`,
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
                                                                          D(
                                                                              C(
                                                                                  K,
                                                                              ),
                                                                              null,
                                                                              {
                                                                                  default:
                                                                                      o(
                                                                                          () => [
                                                                                              D(
                                                                                                  C(
                                                                                                      W,
                                                                                                  ),
                                                                                                  {
                                                                                                      scope: `row`,
                                                                                                      class: u(
                                                                                                          $,
                                                                                                      ),
                                                                                                  },
                                                                                                  {
                                                                                                      default:
                                                                                                          o(
                                                                                                              () => [
                                                                                                                  ...(n[8] ||=
                                                                                                                      [
                                                                                                                          g(
                                                                                                                              ` Completed rate `,
                                                                                                                              -1,
                                                                                                                          ),
                                                                                                                      ]),
                                                                                                              ],
                                                                                                          ),
                                                                                                      _: 1,
                                                                                                  },
                                                                                              ),
                                                                                              (h(),
                                                                                              E(
                                                                                                  a,
                                                                                                  null,
                                                                                                  T(
                                                                                                      r,
                                                                                                      (
                                                                                                          t,
                                                                                                      ) =>
                                                                                                          D(
                                                                                                              C(
                                                                                                                  V,
                                                                                                              ),
                                                                                                              {
                                                                                                                  key: t.key,
                                                                                                                  class: u(
                                                                                                                      [
                                                                                                                          Q,
                                                                                                                          s.value ===
                                                                                                                              t.key &&
                                                                                                                              `bg-primary/5`,
                                                                                                                      ],
                                                                                                                  ),
                                                                                                              },
                                                                                                              {
                                                                                                                  default:
                                                                                                                      o(
                                                                                                                          () => [
                                                                                                                              g(
                                                                                                                                  f(
                                                                                                                                      C(
                                                                                                                                          L,
                                                                                                                                      )(
                                                                                                                                          e
                                                                                                                                              .deployment
                                                                                                                                              .windows[
                                                                                                                                              t
                                                                                                                                                  .key
                                                                                                                                          ]
                                                                                                                                              .links
                                                                                                                                              .completed,
                                                                                                                                          e
                                                                                                                                              .deployment
                                                                                                                                              .windows[
                                                                                                                                              t
                                                                                                                                                  .key
                                                                                                                                          ]
                                                                                                                                              .links
                                                                                                                                              .total,
                                                                                                                                      ),
                                                                                                                                  ),
                                                                                                                                  1,
                                                                                                                              ),
                                                                                                                          ],
                                                                                                                      ),
                                                                                                                  _: 2,
                                                                                                              },
                                                                                                              1032,
                                                                                                              [
                                                                                                                  `class`,
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
                                                                          D(
                                                                              C(
                                                                                  K,
                                                                              ),
                                                                              null,
                                                                              {
                                                                                  default:
                                                                                      o(
                                                                                          () => [
                                                                                              D(
                                                                                                  C(
                                                                                                      W,
                                                                                                  ),
                                                                                                  {
                                                                                                      scope: `row`,
                                                                                                      class: u(
                                                                                                          $,
                                                                                                      ),
                                                                                                  },
                                                                                                  {
                                                                                                      default:
                                                                                                          o(
                                                                                                              () => [
                                                                                                                  ...(n[9] ||=
                                                                                                                      [
                                                                                                                          g(
                                                                                                                              ` Failed `,
                                                                                                                              -1,
                                                                                                                          ),
                                                                                                                      ]),
                                                                                                              ],
                                                                                                          ),
                                                                                                      _: 1,
                                                                                                  },
                                                                                              ),
                                                                                              (h(),
                                                                                              E(
                                                                                                  a,
                                                                                                  null,
                                                                                                  T(
                                                                                                      r,
                                                                                                      (
                                                                                                          t,
                                                                                                      ) =>
                                                                                                          D(
                                                                                                              C(
                                                                                                                  V,
                                                                                                              ),
                                                                                                              {
                                                                                                                  key: t.key,
                                                                                                                  class: u(
                                                                                                                      [
                                                                                                                          Q,
                                                                                                                          s.value ===
                                                                                                                              t.key &&
                                                                                                                              `bg-primary/5`,
                                                                                                                          e
                                                                                                                              .deployment
                                                                                                                              .windows[
                                                                                                                              t
                                                                                                                                  .key
                                                                                                                          ]
                                                                                                                              .links
                                                                                                                              .failed >
                                                                                                                              0 &&
                                                                                                                              `font-semibold text-danger`,
                                                                                                                      ],
                                                                                                                  ),
                                                                                                              },
                                                                                                              {
                                                                                                                  default:
                                                                                                                      o(
                                                                                                                          () => [
                                                                                                                              g(
                                                                                                                                  f(
                                                                                                                                      e
                                                                                                                                          .deployment
                                                                                                                                          .windows[
                                                                                                                                          t
                                                                                                                                              .key
                                                                                                                                      ]
                                                                                                                                          .links
                                                                                                                                          .failed,
                                                                                                                                  ),
                                                                                                                                  1,
                                                                                                                              ),
                                                                                                                          ],
                                                                                                                      ),
                                                                                                                  _: 2,
                                                                                                              },
                                                                                                              1032,
                                                                                                              [
                                                                                                                  `class`,
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
                                                                          (h(
                                                                              !0,
                                                                          ),
                                                                          E(
                                                                              a,
                                                                              null,
                                                                              T(
                                                                                  j.value,
                                                                                  (
                                                                                      t,
                                                                                  ) => (
                                                                                      h(),
                                                                                      x(
                                                                                          C(
                                                                                              K,
                                                                                          ),
                                                                                          {
                                                                                              key: t,
                                                                                          },
                                                                                          {
                                                                                              default:
                                                                                                  o(
                                                                                                      () => [
                                                                                                          D(
                                                                                                              C(
                                                                                                                  W,
                                                                                                              ),
                                                                                                              {
                                                                                                                  scope: `row`,
                                                                                                                  class: u(
                                                                                                                      $,
                                                                                                                  ),
                                                                                                              },
                                                                                                              {
                                                                                                                  default:
                                                                                                                      o(
                                                                                                                          () => [
                                                                                                                              g(
                                                                                                                                  ` Paid ` +
                                                                                                                                      f(
                                                                                                                                          t.toUpperCase(),
                                                                                                                                      ),
                                                                                                                                  1,
                                                                                                                              ),
                                                                                                                          ],
                                                                                                                      ),
                                                                                                                  _: 2,
                                                                                                              },
                                                                                                              1024,
                                                                                                          ),
                                                                                                          (h(),
                                                                                                          E(
                                                                                                              a,
                                                                                                              null,
                                                                                                              T(
                                                                                                                  r,
                                                                                                                  (
                                                                                                                      n,
                                                                                                                  ) =>
                                                                                                                      D(
                                                                                                                          C(
                                                                                                                              V,
                                                                                                                          ),
                                                                                                                          {
                                                                                                                              key: n.key,
                                                                                                                              class: u(
                                                                                                                                  [
                                                                                                                                      Q,
                                                                                                                                      s.value ===
                                                                                                                                          n.key &&
                                                                                                                                          `bg-primary/5`,
                                                                                                                                  ],
                                                                                                                              ),
                                                                                                                          },
                                                                                                                          {
                                                                                                                              default:
                                                                                                                                  o(
                                                                                                                                      () => [
                                                                                                                                          g(
                                                                                                                                              f(
                                                                                                                                                  C(
                                                                                                                                                      z,
                                                                                                                                                  )(
                                                                                                                                                      e
                                                                                                                                                          .deployment
                                                                                                                                                          .windows[
                                                                                                                                                          n
                                                                                                                                                              .key
                                                                                                                                                      ]
                                                                                                                                                          .completed[
                                                                                                                                                          t
                                                                                                                                                      ] ??
                                                                                                                                                          0,
                                                                                                                                                      t,
                                                                                                                                                  )
                                                                                                                                                      .amount,
                                                                                                                                              ),
                                                                                                                                              1,
                                                                                                                                          ),
                                                                                                                                      ],
                                                                                                                                  ),
                                                                                                                              _: 2,
                                                                                                                          },
                                                                                                                          1032,
                                                                                                                          [
                                                                                                                              `class`,
                                                                                                                          ],
                                                                                                                      ),
                                                                                                              ),
                                                                                                              64,
                                                                                                          )),
                                                                                                      ],
                                                                                                  ),
                                                                                              _: 2,
                                                                                          },
                                                                                          1024,
                                                                                      )
                                                                                  ),
                                                                              ),
                                                                              128,
                                                                          )),
                                                                          D(
                                                                              C(
                                                                                  K,
                                                                              ),
                                                                              null,
                                                                              {
                                                                                  default:
                                                                                      o(
                                                                                          () => [
                                                                                              D(
                                                                                                  C(
                                                                                                      W,
                                                                                                  ),
                                                                                                  {
                                                                                                      scope: `row`,
                                                                                                      class: u(
                                                                                                          $,
                                                                                                      ),
                                                                                                  },
                                                                                                  {
                                                                                                      default:
                                                                                                          o(
                                                                                                              () => [
                                                                                                                  ...(n[10] ||=
                                                                                                                      [
                                                                                                                          g(
                                                                                                                              ` Payments `,
                                                                                                                              -1,
                                                                                                                          ),
                                                                                                                      ]),
                                                                                                              ],
                                                                                                          ),
                                                                                                      _: 1,
                                                                                                  },
                                                                                              ),
                                                                                              (h(),
                                                                                              E(
                                                                                                  a,
                                                                                                  null,
                                                                                                  T(
                                                                                                      r,
                                                                                                      (
                                                                                                          t,
                                                                                                      ) =>
                                                                                                          D(
                                                                                                              C(
                                                                                                                  V,
                                                                                                              ),
                                                                                                              {
                                                                                                                  key: t.key,
                                                                                                                  class: u(
                                                                                                                      [
                                                                                                                          Q,
                                                                                                                          s.value ===
                                                                                                                              t.key &&
                                                                                                                              `bg-primary/5`,
                                                                                                                      ],
                                                                                                                  ),
                                                                                                              },
                                                                                                              {
                                                                                                                  default:
                                                                                                                      o(
                                                                                                                          () => [
                                                                                                                              g(
                                                                                                                                  f(
                                                                                                                                      e
                                                                                                                                          .deployment
                                                                                                                                          .windows[
                                                                                                                                          t
                                                                                                                                              .key
                                                                                                                                      ]
                                                                                                                                          .paidCount,
                                                                                                                                  ),
                                                                                                                                  1,
                                                                                                                              ),
                                                                                                                          ],
                                                                                                                      ),
                                                                                                                  _: 2,
                                                                                                              },
                                                                                                              1032,
                                                                                                              [
                                                                                                                  `class`,
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
                                                              }),
                                                          ]),
                                                          _: 1,
                                                      }),
                                                  ]),
                                              ]),
                                          ]),
                                      ],
                                      64,
                                  )),
                            D(
                                C(he),
                                {
                                    as: `section`,
                                    class: `overflow-hidden rounded-xl border border-border/70 bg-card shadow-sm`,
                                    'aria-labelledby': `pulls-title`,
                                },
                                {
                                    default: o(() => [
                                        k(`h2`, et, [
                                            D(
                                                C(_e),
                                                { 'as-child': `` },
                                                {
                                                    default: o(() => [
                                                        k(`button`, tt, [
                                                            k(`span`, nt, [
                                                                k(
                                                                    `span`,
                                                                    {
                                                                        class: u(
                                                                            [
                                                                                X,
                                                                                `block`,
                                                                            ],
                                                                        ),
                                                                    },
                                                                    `Recent pulls`,
                                                                    2,
                                                                ),
                                                                e.pulls
                                                                    .length ===
                                                                0
                                                                    ? (h(),
                                                                      E(
                                                                          `span`,
                                                                          rt,
                                                                          ` No pulls yet. `,
                                                                      ))
                                                                    : d(``, !0),
                                                            ]),
                                                            D(C(me), {
                                                                class: `size-4 shrink-0 text-muted-foreground transition-transform group-data-[state=open]:rotate-180`,
                                                                'aria-hidden': `true`,
                                                            }),
                                                        ]),
                                                    ]),
                                                    _: 1,
                                                },
                                            ),
                                        ]),
                                        e.pulls.length > 0
                                            ? (h(),
                                              x(
                                                  C(ge),
                                                  { key: 0 },
                                                  {
                                                      default: o(() => [
                                                          k(`div`, it, [
                                                              D(C(U), null, {
                                                                  default: o(
                                                                      () => [
                                                                          D(
                                                                              C(
                                                                                  q,
                                                                              ),
                                                                              {
                                                                                  class: `sr-only`,
                                                                              },
                                                                              {
                                                                                  default:
                                                                                      o(
                                                                                          () => [
                                                                                              ...(n[11] ||=
                                                                                                  [
                                                                                                      g(
                                                                                                          ` The 10 most recent pulls, newest first. `,
                                                                                                          -1,
                                                                                                      ),
                                                                                                  ]),
                                                                                          ],
                                                                                      ),
                                                                                  _: 1,
                                                                              },
                                                                          ),
                                                                          D(
                                                                              C(
                                                                                  H,
                                                                              ),
                                                                              {
                                                                                  class: `bg-muted/40`,
                                                                              },
                                                                              {
                                                                                  default:
                                                                                      o(
                                                                                          () => [
                                                                                              D(
                                                                                                  C(
                                                                                                      K,
                                                                                                  ),
                                                                                                  {
                                                                                                      class: `hover:bg-transparent`,
                                                                                                  },
                                                                                                  {
                                                                                                      default:
                                                                                                          o(
                                                                                                              () => [
                                                                                                                  D(
                                                                                                                      C(
                                                                                                                          W,
                                                                                                                      ),
                                                                                                                      {
                                                                                                                          scope: `col`,
                                                                                                                          class: `px-4`,
                                                                                                                      },
                                                                                                                      {
                                                                                                                          default:
                                                                                                                              o(
                                                                                                                                  () => [
                                                                                                                                      ...(n[12] ||=
                                                                                                                                          [
                                                                                                                                              g(
                                                                                                                                                  `Time`,
                                                                                                                                                  -1,
                                                                                                                                              ),
                                                                                                                                          ]),
                                                                                                                                  ],
                                                                                                                              ),
                                                                                                                          _: 1,
                                                                                                                      },
                                                                                                                  ),
                                                                                                                  D(
                                                                                                                      C(
                                                                                                                          W,
                                                                                                                      ),
                                                                                                                      {
                                                                                                                          scope: `col`,
                                                                                                                          class: `px-4`,
                                                                                                                      },
                                                                                                                      {
                                                                                                                          default:
                                                                                                                              o(
                                                                                                                                  () => [
                                                                                                                                      ...(n[13] ||=
                                                                                                                                          [
                                                                                                                                              g(
                                                                                                                                                  `Result`,
                                                                                                                                                  -1,
                                                                                                                                              ),
                                                                                                                                          ]),
                                                                                                                                  ],
                                                                                                                              ),
                                                                                                                          _: 1,
                                                                                                                      },
                                                                                                                  ),
                                                                                                                  D(
                                                                                                                      C(
                                                                                                                          W,
                                                                                                                      ),
                                                                                                                      {
                                                                                                                          scope: `col`,
                                                                                                                          class: `px-4`,
                                                                                                                      },
                                                                                                                      {
                                                                                                                          default:
                                                                                                                              o(
                                                                                                                                  () => [
                                                                                                                                      ...(n[14] ||=
                                                                                                                                          [
                                                                                                                                              g(
                                                                                                                                                  ` How it started `,
                                                                                                                                                  -1,
                                                                                                                                              ),
                                                                                                                                          ]),
                                                                                                                                  ],
                                                                                                                              ),
                                                                                                                          _: 1,
                                                                                                                      },
                                                                                                                  ),
                                                                                                                  D(
                                                                                                                      C(
                                                                                                                          W,
                                                                                                                      ),
                                                                                                                      {
                                                                                                                          scope: `col`,
                                                                                                                          class: `px-4`,
                                                                                                                      },
                                                                                                                      {
                                                                                                                          default:
                                                                                                                              o(
                                                                                                                                  () => [
                                                                                                                                      ...(n[15] ||=
                                                                                                                                          [
                                                                                                                                              g(
                                                                                                                                                  `Reason`,
                                                                                                                                                  -1,
                                                                                                                                              ),
                                                                                                                                          ]),
                                                                                                                                  ],
                                                                                                                              ),
                                                                                                                          _: 1,
                                                                                                                      },
                                                                                                                  ),
                                                                                                              ],
                                                                                                          ),
                                                                                                      _: 1,
                                                                                                  },
                                                                                              ),
                                                                                          ],
                                                                                      ),
                                                                                  _: 1,
                                                                              },
                                                                          ),
                                                                          D(
                                                                              C(
                                                                                  B,
                                                                              ),
                                                                              null,
                                                                              {
                                                                                  default:
                                                                                      o(
                                                                                          () => [
                                                                                              (h(
                                                                                                  !0,
                                                                                              ),
                                                                                              E(
                                                                                                  a,
                                                                                                  null,
                                                                                                  T(
                                                                                                      e.pulls,
                                                                                                      (
                                                                                                          t,
                                                                                                      ) => (
                                                                                                          h(),
                                                                                                          x(
                                                                                                              C(
                                                                                                                  K,
                                                                                                              ),
                                                                                                              {
                                                                                                                  key: t.id,
                                                                                                                  class: u(
                                                                                                                      t.ok
                                                                                                                          ? `border-border/50`
                                                                                                                          : `border-danger-border/60 bg-danger-soft hover:bg-danger-soft`,
                                                                                                                  ),
                                                                                                              },
                                                                                                              {
                                                                                                                  default:
                                                                                                                      o(
                                                                                                                          () => [
                                                                                                                              D(
                                                                                                                                  C(
                                                                                                                                      V,
                                                                                                                                  ),
                                                                                                                                  {
                                                                                                                                      class: u(
                                                                                                                                          [
                                                                                                                                              `px-4 py-3 text-sm font-medium tabular-nums`,
                                                                                                                                              !t.ok &&
                                                                                                                                                  `shadow-[inset_3px_0_0_var(--color-danger)]`,
                                                                                                                                          ],
                                                                                                                                      ),
                                                                                                                                  },
                                                                                                                                  {
                                                                                                                                      default:
                                                                                                                                          o(
                                                                                                                                              () => [
                                                                                                                                                  D(
                                                                                                                                                      I,
                                                                                                                                                      {
                                                                                                                                                          at: t.at,
                                                                                                                                                          timezone:
                                                                                                                                                              e
                                                                                                                                                                  .deployment
                                                                                                                                                                  .timezone,
                                                                                                                                                      },
                                                                                                                                                      null,
                                                                                                                                                      8,
                                                                                                                                                      [
                                                                                                                                                          `at`,
                                                                                                                                                          `timezone`,
                                                                                                                                                      ],
                                                                                                                                                  ),
                                                                                                                                              ],
                                                                                                                                          ),
                                                                                                                                      _: 2,
                                                                                                                                  },
                                                                                                                                  1032,
                                                                                                                                  [
                                                                                                                                      `class`,
                                                                                                                                  ],
                                                                                                                              ),
                                                                                                                              D(
                                                                                                                                  C(
                                                                                                                                      V,
                                                                                                                                  ),
                                                                                                                                  {
                                                                                                                                      class: `px-4 py-3`,
                                                                                                                                  },
                                                                                                                                  {
                                                                                                                                      default:
                                                                                                                                          o(
                                                                                                                                              () => [
                                                                                                                                                  D(
                                                                                                                                                      C(
                                                                                                                                                          G,
                                                                                                                                                      ),
                                                                                                                                                      {
                                                                                                                                                          variant:
                                                                                                                                                              t.ok
                                                                                                                                                                  ? `success`
                                                                                                                                                                  : `danger`,
                                                                                                                                                      },
                                                                                                                                                      {
                                                                                                                                                          default:
                                                                                                                                                              o(
                                                                                                                                                                  () => [
                                                                                                                                                                      g(
                                                                                                                                                                          f(
                                                                                                                                                                              t.ok
                                                                                                                                                                                  ? `Good`
                                                                                                                                                                                  : `Failed`,
                                                                                                                                                                          ),
                                                                                                                                                                          1,
                                                                                                                                                                      ),
                                                                                                                                                                  ],
                                                                                                                                                              ),
                                                                                                                                                          _: 2,
                                                                                                                                                      },
                                                                                                                                                      1032,
                                                                                                                                                      [
                                                                                                                                                          `variant`,
                                                                                                                                                      ],
                                                                                                                                                  ),
                                                                                                                                              ],
                                                                                                                                          ),
                                                                                                                                      _: 2,
                                                                                                                                  },
                                                                                                                                  1024,
                                                                                                                              ),
                                                                                                                              D(
                                                                                                                                  C(
                                                                                                                                      V,
                                                                                                                                  ),
                                                                                                                                  {
                                                                                                                                      class: `px-4 py-3 text-sm`,
                                                                                                                                  },
                                                                                                                                  {
                                                                                                                                      default:
                                                                                                                                          o(
                                                                                                                                              () => [
                                                                                                                                                  k(
                                                                                                                                                      `span`,
                                                                                                                                                      at,
                                                                                                                                                      f(
                                                                                                                                                          P[
                                                                                                                                                              t
                                                                                                                                                                  .source
                                                                                                                                                          ],
                                                                                                                                                      ),
                                                                                                                                                      1,
                                                                                                                                                  ),
                                                                                                                                              ],
                                                                                                                                          ),
                                                                                                                                      _: 2,
                                                                                                                                  },
                                                                                                                                  1024,
                                                                                                                              ),
                                                                                                                              D(
                                                                                                                                  C(
                                                                                                                                      V,
                                                                                                                                  ),
                                                                                                                                  {
                                                                                                                                      class: u(
                                                                                                                                          [
                                                                                                                                              `min-w-64 px-4 py-3 text-sm whitespace-normal`,
                                                                                                                                              t.ok
                                                                                                                                                  ? `text-muted-foreground`
                                                                                                                                                  : `text-foreground`,
                                                                                                                                          ],
                                                                                                                                      ),
                                                                                                                                  },
                                                                                                                                  {
                                                                                                                                      default:
                                                                                                                                          o(
                                                                                                                                              () => [
                                                                                                                                                  g(
                                                                                                                                                      f(
                                                                                                                                                          F(
                                                                                                                                                              t,
                                                                                                                                                          ),
                                                                                                                                                      ),
                                                                                                                                                      1,
                                                                                                                                                  ),
                                                                                                                                              ],
                                                                                                                                          ),
                                                                                                                                      _: 2,
                                                                                                                                  },
                                                                                                                                  1032,
                                                                                                                                  [
                                                                                                                                      `class`,
                                                                                                                                  ],
                                                                                                                              ),
                                                                                                                          ],
                                                                                                                      ),
                                                                                                                  _: 2,
                                                                                                              },
                                                                                                              1032,
                                                                                                              [
                                                                                                                  `class`,
                                                                                                              ],
                                                                                                          )
                                                                                                      ),
                                                                                                  ),
                                                                                                  128,
                                                                                              )),
                                                                                          ],
                                                                                      ),
                                                                                  _: 1,
                                                                              },
                                                                          ),
                                                                      ],
                                                                  ),
                                                                  _: 1,
                                                              }),
                                                          ]),
                                                      ]),
                                                      _: 1,
                                                  },
                                              ))
                                            : d(``, !0),
                                    ]),
                                    _: 1,
                                },
                            ),
                            e.deployment.windows && m.value
                                ? (h(),
                                  E(
                                      `p`,
                                      ot,
                                      ` A link made yesterday and paid today counts in yesterday's links and in today's money, so the completed links and the payments of a window can differ. `,
                                  ))
                                : d(``, !0),
                        ]),
                    ],
                    64,
                )
            );
        },
    });
export { ct as default };
