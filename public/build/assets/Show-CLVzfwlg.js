import { a as e, n as t, t as n } from './Presence-CKGYlb9k.js';
import {
    Bt as r,
    Jt as i,
    K as a,
    Nn as o,
    On as s,
    Sr as c,
    Tt as l,
    Vt as u,
    _r as d,
    at as f,
    br as p,
    d as m,
    dr as h,
    en as g,
    ft as _,
    g as v,
    h as y,
    ht as b,
    ir as x,
    it as S,
    kn as C,
    mr as w,
    nt as T,
    on as E,
    ot as D,
    p as ee,
    pt as O,
    r as k,
    rt as A,
    sn as j,
    vr as M,
    yr as te,
} from './wayfinder-BZPu7hPl.js';
import { a as N, s as P, t as F } from './useForwardExpose-B78G7oXS.js';
import { t as ne } from './useForwardPropsEmits-CqoMAl8h.js';
import { n as I, t as L } from './formatPercent-DS8JK34D.js';
import { t as R } from './createLucideIcon-B933959x.js';
import { c as z, d as re, w as ie } from './app-DTu1UyN-.js';
import { i as B } from './formatRelative-D-S37FvD.js';
import {
    a as V,
    i as H,
    n as U,
    o as W,
    r as G,
    s as K,
    t as q,
} from './TableRow-IBlTE7rH.js';
import { t as J } from './TableCaption-M4KzGuv1.js';
import { n as ae, t as oe } from './deploymentStatus-DAZueO0e.js';
var [Y, se] = e(`CollapsibleRoot`),
    ce = b({
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
                i = P(r, `open`, n, {
                    defaultValue: r.defaultOpen,
                    passive: r.open === void 0,
                }),
                { disabled: a, unmountOnHide: s } = h(r);
            return (
                se({
                    contentId: ``,
                    disabled: a,
                    open: i,
                    unmountOnHide: s,
                    onOpenToggle: () => {
                        a.value || (i.value = !i.value);
                    },
                }),
                t({ open: i }),
                F(),
                (t, n) => (
                    g(),
                    S(
                        w(k),
                        {
                            as: e.as,
                            'as-child': r.asChild,
                            'data-state': w(i) ? `open` : `closed`,
                            'data-disabled': w(a) ? `` : void 0,
                        },
                        {
                            default: o(() => [
                                j(t.$slots, `default`, { open: w(i) }),
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
    le = b({
        inheritAttrs: !1,
        __name: `CollapsibleContent`,
        props: {
            forceMount: { type: Boolean, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
        },
        emits: [`contentFound`],
        setup(e, { emit: a }) {
            let c = e,
                l = a,
                d = Y();
            d.contentId ||= t(void 0, `reka-collapsible-content`);
            let p = x(),
                { forwardRef: m, currentElement: h } = F(),
                _ = x(0),
                v = x(0),
                y = T(() => d.open.value),
                b = x(y.value),
                C = x();
            s(
                () => [y.value, p.value?.present],
                async () => {
                    await u();
                    let e = h.value;
                    if (!e) return;
                    ((C.value = C.value || {
                        transitionDuration: e.style.transitionDuration,
                        animationName: e.style.animationName,
                    }),
                        (e.style.transitionDuration = `0s`),
                        (e.style.animationName = `none`));
                    let t = e.getBoundingClientRect();
                    ((v.value = t.height),
                        (_.value = t.width),
                        b.value ||
                            ((e.style.transitionDuration =
                                C.value.transitionDuration),
                            (e.style.animationName = C.value.animationName)));
                },
                { immediate: !0 },
            );
            let E = T(() => b.value && d.open.value);
            return (
                i(() => {
                    requestAnimationFrame(() => {
                        b.value = !1;
                    });
                }),
                N(h, `beforematch`, (e) => {
                    requestAnimationFrame(() => {
                        (d.onOpenToggle(), l(`contentFound`));
                    });
                }),
                (t, i) => (
                    g(),
                    S(
                        w(n),
                        {
                            ref_key: `presentRef`,
                            ref: p,
                            present: e.forceMount || w(d).open.value,
                            'force-mount': !0,
                        },
                        {
                            default: o(({ present: n }) => [
                                O(
                                    w(k),
                                    r(t.$attrs, {
                                        id: w(d).contentId,
                                        ref: w(m),
                                        'as-child': c.asChild,
                                        as: e.as,
                                        hidden: n
                                            ? void 0
                                            : w(d).unmountOnHide.value
                                              ? ``
                                              : `until-found`,
                                        'data-state': E.value
                                            ? void 0
                                            : w(d).open.value
                                              ? `open`
                                              : `closed`,
                                        'data-disabled': w(d).disabled?.value
                                            ? ``
                                            : void 0,
                                        style: {
                                            '--reka-collapsible-content-height': `${v.value}px`,
                                            '--reka-collapsible-content-width': `${_.value}px`,
                                        },
                                    }),
                                    {
                                        default: o(() => [
                                            !w(d).unmountOnHide.value || n
                                                ? j(
                                                      t.$slots,
                                                      `default`,
                                                      {},
                                                      void 0,
                                                      void 0,
                                                      0,
                                                  )
                                                : f(`v-if`, !0),
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
    ue = b({
        __name: `CollapsibleTrigger`,
        props: {
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1, default: `button` },
        },
        setup(e) {
            let t = e;
            F();
            let n = Y();
            return (r, i) => (
                g(),
                S(
                    w(k),
                    {
                        type: e.as === `button` ? `button` : void 0,
                        as: e.as,
                        'as-child': t.asChild,
                        'aria-controls': w(n).contentId,
                        'aria-expanded': w(n).open.value,
                        'data-state': w(n).open.value ? `open` : `closed`,
                        'data-disabled': w(n).disabled?.value ? `` : void 0,
                        disabled: w(n).disabled?.value,
                        onClick: w(n).onOpenToggle,
                    },
                    { default: o(() => [j(r.$slots, `default`)]), _: 3 },
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
    de = R({
        name: `chevron-down`,
        size: 24,
        node: [[`path`, { d: `m6 9 6 6 6-6`, key: `qrunsl` }]],
    }),
    fe = R({
        name: `external-link`,
        size: 24,
        node: [
            [`path`, { d: `M15 3h6v6`, key: `1q9fwt` }],
            [`path`, { d: `M10 14 21 3`, key: `gplh6r` }],
            [
                `path`,
                {
                    d: `M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,
                    key: `a6xqqp`,
                },
            ],
        ],
    }),
    pe = b({
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
            let n = ne(e, t);
            return (e, t) => (
                g(),
                S(
                    w(ce),
                    r({ 'data-slot': `collapsible` }, w(n)),
                    {
                        default: o((t) => [j(e.$slots, `default`, M(l(t)))]),
                        _: 3,
                    },
                    16,
                )
            );
        },
    }),
    me = b({
        __name: `CollapsibleContent`,
        props: {
            forceMount: { type: Boolean },
            asChild: { type: Boolean },
            as: {},
        },
        setup(e) {
            let t = e;
            return (e, n) => (
                g(),
                S(
                    w(le),
                    r({ 'data-slot': `collapsible-content` }, t),
                    { default: o(() => [j(e.$slots, `default`)]), _: 3 },
                    16,
                )
            );
        },
    }),
    he = b({
        __name: `CollapsibleTrigger`,
        props: { asChild: { type: Boolean }, as: {} },
        setup(e) {
            let t = e;
            return (e, n) => (
                g(),
                S(
                    w(ue),
                    r({ 'data-slot': `collapsible-trigger` }, t),
                    { default: o(() => [j(e.$slots, `default`)]), _: 3 },
                    16,
                )
            );
        },
    }),
    ge = { class: `mx-auto w-full max-w-7xl space-y-6 p-4 md:p-6` },
    _e = { class: `space-y-2.5` },
    ve = {
        class: `flex flex-wrap items-center justify-between gap-x-4 gap-y-3`,
    },
    ye = { class: `flex min-w-0 flex-wrap items-center gap-3` },
    be = {
        class: `text-3xl leading-tight font-bold tracking-tight break-words`,
    },
    xe = {
        key: 0,
        role: `group`,
        'aria-label': `Period`,
        class: `inline-flex w-full max-w-full gap-0.5 overflow-x-auto rounded-xl border border-border bg-card p-1 shadow-sm sm:w-auto`,
    },
    Se = [`aria-pressed`, `onClick`],
    Ce = {
        class: `flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground`,
    },
    we = [`href`, `aria-label`],
    Te = {
        key: 0,
        class: `size-1 rounded-full bg-border`,
        'aria-hidden': `true`,
    },
    Ee = {
        key: 0,
        class: `rounded-xl border border-dashed border-border p-6 text-sm text-muted-foreground`,
    },
    De = { class: `grid gap-4 md:grid-cols-[1.5fr_1fr_1fr]` },
    Oe = {
        class: `space-y-3 rounded-xl border border-border/70 bg-card p-4 shadow-sm`,
        'aria-labelledby': `paid-title`,
    },
    ke = { key: 0, class: `text-sm text-muted-foreground` },
    Ae = { key: 1, class: `divide-y divide-border/50` },
    je = {
        class: `w-9 shrink-0 text-xs font-semibold tracking-wider text-muted-foreground uppercase`,
    },
    Me = {
        class: `mr-auto text-2xl font-semibold tracking-tight tabular-nums`,
    },
    Ne = { class: `text-xs text-muted-foreground tabular-nums` },
    Pe = {
        class: `space-y-3 rounded-xl border border-border/70 bg-card p-4 shadow-sm`,
        'aria-labelledby': `links-title`,
    },
    Fe = { class: `text-4xl font-semibold tracking-tight tabular-nums` },
    Ie = {
        class: `space-y-3 rounded-xl border border-border/70 bg-card p-4 shadow-sm`,
        'aria-labelledby': `attention-title`,
    },
    Le = { class: `text-4xl font-semibold tracking-tight tabular-nums` },
    Re = { class: `flex flex-wrap gap-2` },
    ze = { key: 1, class: `flex items-center gap-3` },
    Be = {
        class: `flex size-11 shrink-0 items-center justify-center rounded-full bg-success-soft ring-1 ring-success-border ring-inset`,
    },
    Ve = { class: `grid gap-4 lg:grid-cols-[1fr_1.25fr]` },
    He = {
        class: `space-y-4 rounded-xl border border-border/70 bg-card p-4 shadow-sm`,
        'aria-labelledby': `outcomes-title`,
    },
    Ue = {
        class: `flex h-2.5 gap-0.5 overflow-hidden rounded-full bg-muted`,
        'aria-hidden': `true`,
    },
    We = { class: `divide-y divide-border/50` },
    Ge = { class: `text-sm` },
    Ke = { class: `text-base font-semibold tabular-nums` },
    qe = { class: `text-right text-xs text-muted-foreground tabular-nums` },
    Je = {
        class: `space-y-3 rounded-xl border border-border/70 bg-card p-4 shadow-sm`,
        'aria-labelledby': `compare-title`,
    },
    Ye = { class: `overflow-x-auto` },
    Xe = { id: `pulls-title`, class: `m-0` },
    Ze = {
        type: `button`,
        class: `group flex w-full items-center justify-between gap-4 px-4 py-3 text-left outline-none hover:bg-muted/40 focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:ring-inset`,
    },
    Qe = { class: `space-y-0.5` },
    $e = { key: 0, class: `block text-sm font-normal text-muted-foreground` },
    et = { class: `overflow-x-auto border-t border-border/60` },
    tt = {
        class: `inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-semibold text-foreground`,
    },
    nt = { key: 2, class: `text-xs text-muted-foreground` },
    X = `text-[11px] font-semibold tracking-widest text-muted-foreground uppercase`,
    Z = `inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset`,
    rt = `h-auto px-3 py-2 text-right`,
    Q = `px-3 py-2 text-right text-sm tabular-nums`,
    $ = `px-3 py-2 text-sm font-normal tracking-normal text-muted-foreground normal-case`,
    it = b({
        __name: `Show`,
        props: { deployment: {}, pulls: {} },
        setup(e) {
            let t = e,
                n = y(),
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
                s = x(`today`),
                l = T(() => oe(t.deployment.state)),
                u = T(() =>
                    ae(
                        t.deployment.state,
                        t.deployment.reason,
                        t.deployment.windows !== null,
                    ),
                ),
                h = T(() => t.deployment.windows?.[s.value]),
                b = T(() => r.find((e) => e.key === s.value)?.label ?? ``),
                k = T(() => {
                    let e = h.value;
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
                                  paid: B(e.completed[t] ?? 0, t).amount,
                                  pending: e.pending[t] ?? 0,
                                  pendingText: B(e.pending[t] ?? 0, t).amount,
                              }))
                        : [];
                }),
                j = T(() =>
                    h.value ? h.value.links.failed + h.value.links.pending : 0,
                ),
                M = T(() => {
                    let e = t.deployment.windows;
                    if (!e) return [];
                    let n = r.map((t) => e[t.key]);
                    return [
                        ...new Set(n.flatMap((e) => Object.keys(e.completed))),
                    ]
                        .filter((e) => n.some((t) => (t.completed[e] ?? 0) > 0))
                        .sort();
                });
            function N(e) {
                let t = h.value?.links.total ?? 0;
                return t > 0 ? `${(e / t) * 100}%` : `0%`;
            }
            (C(() => {
                ee({
                    breadcrumbs: [
                        { title: `Dashboard`, href: re() },
                        { title: `Deployments`, href: z() },
                        { title: t.deployment.name, href: n.url },
                    ],
                });
            }),
                v(6e4, {
                    only: [`deployment`],
                    onHttpException: (e) => {
                        if (e.status === 404) return (c.visit(z()), !1);
                    },
                }));
            let P = { scheduled: `Scheduled`, manual: `Manual` };
            function F(e) {
                return e.ok ? `None` : (e.reason ?? `No reason saved`);
            }
            return (t, n) => (
                g(),
                D(
                    a,
                    null,
                    [
                        O(w(m), { title: e.deployment.name }, null, 8, [
                            `title`,
                        ]),
                        A(`div`, ge, [
                            A(`header`, _e, [
                                A(`div`, ve, [
                                    A(`div`, ye, [
                                        A(`h1`, be, p(e.deployment.name), 1),
                                        l.value
                                            ? (g(),
                                              S(
                                                  w(K),
                                                  {
                                                      key: 0,
                                                      variant: l.value.variant,
                                                  },
                                                  {
                                                      default: o(() => [
                                                          _(
                                                              p(l.value.label),
                                                              1,
                                                          ),
                                                      ]),
                                                      _: 1,
                                                  },
                                                  8,
                                                  [`variant`],
                                              ))
                                            : f(``, !0),
                                    ]),
                                    e.deployment.windows && h.value
                                        ? (g(),
                                          D(`div`, xe, [
                                              (g(),
                                              D(
                                                  a,
                                                  null,
                                                  E(r, (e) =>
                                                      A(
                                                          `button`,
                                                          {
                                                              key: e.key,
                                                              type: `button`,
                                                              'aria-pressed':
                                                                  s.value ===
                                                                  e.key,
                                                              class: `flex-1 rounded-lg px-4 py-1.5 text-sm font-semibold whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:outline-none aria-pressed:bg-linear-to-br aria-pressed:from-brand-from aria-pressed:to-brand-to aria-pressed:text-white aria-pressed:shadow-sm sm:flex-none`,
                                                              onClick: (t) =>
                                                                  (s.value =
                                                                      e.key),
                                                          },
                                                          p(e.label),
                                                          9,
                                                          Se,
                                                      ),
                                                  ),
                                                  64,
                                              )),
                                          ]))
                                        : f(``, !0),
                                ]),
                                A(`div`, Ce, [
                                    e.deployment.domain
                                        ? (g(),
                                          D(
                                              `a`,
                                              {
                                                  key: 0,
                                                  href: `https://${e.deployment.domain}`,
                                                  target: `_blank`,
                                                  rel: `noopener noreferrer`,
                                                  'aria-label': `Open ${e.deployment.domain} in a new tab`,
                                                  class: `group/link inline-flex items-center gap-1.5 rounded-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:outline-none`,
                                              },
                                              [
                                                  _(
                                                      p(e.deployment.domain) +
                                                          ` `,
                                                      1,
                                                  ),
                                                  O(w(fe), {
                                                      class: `size-3.5 opacity-80 transition-transform group-hover/link:translate-x-px group-hover/link:-translate-y-px motion-reduce:transition-none`,
                                                      'aria-hidden': `true`,
                                                  }),
                                              ],
                                              8,
                                              we,
                                          ))
                                        : f(``, !0),
                                    e.deployment.updatedAt
                                        ? (g(),
                                          D(
                                              a,
                                              { key: 1 },
                                              [
                                                  e.deployment.domain
                                                      ? (g(), D(`span`, Te))
                                                      : f(``, !0),
                                                  A(`p`, null, [
                                                      (n[0] ||= _(
                                                          ` Last updated `,
                                                          -1,
                                                      )),
                                                      O(
                                                          I,
                                                          {
                                                              at: e.deployment
                                                                  .updatedAt,
                                                              timezone:
                                                                  e.deployment
                                                                      .timezone,
                                                          },
                                                          null,
                                                          8,
                                                          [`at`, `timezone`],
                                                      ),
                                                  ]),
                                              ],
                                              64,
                                          ))
                                        : f(``, !0),
                                ]),
                                (g(!0),
                                D(
                                    a,
                                    null,
                                    E(
                                        u.value,
                                        (e) => (
                                            g(),
                                            D(
                                                `p`,
                                                {
                                                    key: e,
                                                    class: `text-sm text-muted-foreground`,
                                                },
                                                p(e),
                                                1,
                                            )
                                        ),
                                    ),
                                    128,
                                )),
                            ]),
                            !e.deployment.windows || !h.value
                                ? (g(), D(`p`, Ee, ` No data yet `))
                                : (g(),
                                  D(
                                      a,
                                      { key: 1 },
                                      [
                                          A(`div`, De, [
                                              A(`section`, Oe, [
                                                  A(
                                                      `h2`,
                                                      {
                                                          id: `paid-title`,
                                                          class: d(X),
                                                      },
                                                      ` Money paid · ` +
                                                          p(b.value),
                                                      1,
                                                  ),
                                                  k.value.length === 0
                                                      ? (g(),
                                                        D(
                                                            `p`,
                                                            ke,
                                                            ` No payments `,
                                                        ))
                                                      : (g(),
                                                        D(`ul`, Ae, [
                                                            (g(!0),
                                                            D(
                                                                a,
                                                                null,
                                                                E(
                                                                    k.value,
                                                                    (e) => (
                                                                        g(),
                                                                        D(
                                                                            `li`,
                                                                            {
                                                                                key: e.code,
                                                                                class: `flex items-baseline justify-between gap-3 py-2 first:pt-0 last:pb-0`,
                                                                            },
                                                                            [
                                                                                A(
                                                                                    `span`,
                                                                                    je,
                                                                                    p(
                                                                                        e.code,
                                                                                    ),
                                                                                    1,
                                                                                ),
                                                                                A(
                                                                                    `span`,
                                                                                    Me,
                                                                                    p(
                                                                                        e.paid,
                                                                                    ),
                                                                                    1,
                                                                                ),
                                                                                A(
                                                                                    `span`,
                                                                                    Ne,
                                                                                    p(
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
                                                  (n[1] ||= A(
                                                      `p`,
                                                      {
                                                          class: `text-xs text-muted-foreground`,
                                                      },
                                                      ` Counted by the date each payment was paid. This includes links created earlier. `,
                                                      -1,
                                                  )),
                                              ]),
                                              A(`section`, Pe, [
                                                  A(
                                                      `h2`,
                                                      {
                                                          id: `links-title`,
                                                          class: d(X),
                                                      },
                                                      `Links created`,
                                                  ),
                                                  A(
                                                      `p`,
                                                      Fe,
                                                      p(h.value.links.total),
                                                      1,
                                                  ),
                                                  A(`p`, null, [
                                                      h.value.links.total > 0
                                                          ? (g(),
                                                            D(
                                                                `span`,
                                                                {
                                                                    key: 0,
                                                                    class: d([
                                                                        Z,
                                                                        `bg-success-soft text-success tabular-nums ring-success-border`,
                                                                    ]),
                                                                },
                                                                p(
                                                                    w(L)(
                                                                        h.value
                                                                            .links
                                                                            .completed,
                                                                        h.value
                                                                            .links
                                                                            .total,
                                                                    ),
                                                                ) +
                                                                    ` completed `,
                                                                3,
                                                            ))
                                                          : (g(),
                                                            D(
                                                                `span`,
                                                                {
                                                                    key: 1,
                                                                    class: d([
                                                                        Z,
                                                                        `bg-muted text-muted-foreground ring-border`,
                                                                    ]),
                                                                },
                                                                ` No links yet `,
                                                                2,
                                                            )),
                                                  ]),
                                                  (n[2] ||= A(
                                                      `p`,
                                                      {
                                                          class: `text-xs text-muted-foreground`,
                                                      },
                                                      ` Counted by the date each link was created. `,
                                                      -1,
                                                  )),
                                              ]),
                                              A(`section`, Ie, [
                                                  A(
                                                      `h2`,
                                                      {
                                                          id: `attention-title`,
                                                          class: d(X),
                                                      },
                                                      ` Needs attention `,
                                                  ),
                                                  j.value > 0
                                                      ? (g(),
                                                        D(
                                                            a,
                                                            { key: 0 },
                                                            [
                                                                A(
                                                                    `p`,
                                                                    Le,
                                                                    p(j.value),
                                                                    1,
                                                                ),
                                                                A(`p`, Re, [
                                                                    h.value
                                                                        .links
                                                                        .failed >
                                                                    0
                                                                        ? (g(),
                                                                          D(
                                                                              `span`,
                                                                              {
                                                                                  key: 0,
                                                                                  class: d(
                                                                                      [
                                                                                          Z,
                                                                                          `bg-danger-soft text-danger tabular-nums ring-danger-border`,
                                                                                      ],
                                                                                  ),
                                                                              },
                                                                              p(
                                                                                  h
                                                                                      .value
                                                                                      .links
                                                                                      .failed,
                                                                              ) +
                                                                                  ` failed `,
                                                                              3,
                                                                          ))
                                                                        : f(
                                                                              ``,
                                                                              !0,
                                                                          ),
                                                                    h.value
                                                                        .links
                                                                        .pending >
                                                                    0
                                                                        ? (g(),
                                                                          D(
                                                                              `span`,
                                                                              {
                                                                                  key: 1,
                                                                                  class: d(
                                                                                      [
                                                                                          Z,
                                                                                          `bg-warning-soft text-warning tabular-nums ring-warning-border`,
                                                                                      ],
                                                                                  ),
                                                                              },
                                                                              p(
                                                                                  h
                                                                                      .value
                                                                                      .links
                                                                                      .pending,
                                                                              ) +
                                                                                  ` pending `,
                                                                              3,
                                                                          ))
                                                                        : f(
                                                                              ``,
                                                                              !0,
                                                                          ),
                                                                ]),
                                                            ],
                                                            64,
                                                        ))
                                                      : (g(),
                                                        D(`div`, ze, [
                                                            A(`span`, Be, [
                                                                O(w(ie), {
                                                                    class: `size-6 text-success`,
                                                                    'aria-hidden': `true`,
                                                                }),
                                                            ]),
                                                            (n[3] ||= A(
                                                                `div`,
                                                                null,
                                                                [
                                                                    A(
                                                                        `p`,
                                                                        {
                                                                            class: `text-2xl leading-tight font-semibold tracking-tight text-success`,
                                                                        },
                                                                        ` All clear `,
                                                                    ),
                                                                    A(
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
                                                  (n[4] ||= A(
                                                      `p`,
                                                      {
                                                          class: `text-xs text-muted-foreground`,
                                                      },
                                                      ` Failed links and links still waiting for payment. `,
                                                      -1,
                                                  )),
                                              ]),
                                          ]),
                                          A(`div`, Ve, [
                                              A(`section`, He, [
                                                  A(
                                                      `h2`,
                                                      {
                                                          id: `outcomes-title`,
                                                          class: d(X),
                                                      },
                                                      `Link outcomes`,
                                                  ),
                                                  A(`div`, Ue, [
                                                      (g(),
                                                      D(
                                                          a,
                                                          null,
                                                          E(
                                                              i,
                                                              (e) => (
                                                                  g(),
                                                                  D(
                                                                      a,
                                                                      {
                                                                          key: e.key,
                                                                      },
                                                                      [
                                                                          h
                                                                              .value
                                                                              .links[
                                                                              e
                                                                                  .key
                                                                          ] > 0
                                                                              ? (g(),
                                                                                D(
                                                                                    `span`,
                                                                                    {
                                                                                        key: 0,
                                                                                        class: d(
                                                                                            [
                                                                                                `block min-w-[3px]`,
                                                                                                e.bar,
                                                                                            ],
                                                                                        ),
                                                                                        style: te(
                                                                                            {
                                                                                                width: N(
                                                                                                    h
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
                                                                              : f(
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
                                                  A(`ul`, We, [
                                                      (g(),
                                                      D(
                                                          a,
                                                          null,
                                                          E(i, (e) =>
                                                              A(
                                                                  `li`,
                                                                  {
                                                                      key: e.key,
                                                                      class: `grid grid-cols-[auto_1fr_auto_3.5rem] items-center gap-3 py-2 first:pt-0 last:pb-0`,
                                                                  },
                                                                  [
                                                                      A(
                                                                          `span`,
                                                                          {
                                                                              class: d(
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
                                                                      A(
                                                                          `span`,
                                                                          Ge,
                                                                          p(
                                                                              e.label,
                                                                          ),
                                                                          1,
                                                                      ),
                                                                      A(
                                                                          `span`,
                                                                          Ke,
                                                                          p(
                                                                              h
                                                                                  .value
                                                                                  .links[
                                                                                  e
                                                                                      .key
                                                                              ],
                                                                          ),
                                                                          1,
                                                                      ),
                                                                      A(
                                                                          `span`,
                                                                          qe,
                                                                          p(
                                                                              w(
                                                                                  L,
                                                                              )(
                                                                                  h
                                                                                      .value
                                                                                      .links[
                                                                                      e
                                                                                          .key
                                                                                  ],
                                                                                  h
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
                                              A(`section`, Je, [
                                                  A(
                                                      `h2`,
                                                      {
                                                          id: `compare-title`,
                                                          class: d(X),
                                                      },
                                                      `All periods`,
                                                  ),
                                                  A(`div`, Ye, [
                                                      O(w(W), null, {
                                                          default: o(() => [
                                                              O(
                                                                  w(J),
                                                                  {
                                                                      class: `sr-only`,
                                                                  },
                                                                  {
                                                                      default:
                                                                          o(
                                                                              () => [
                                                                                  ...(n[5] ||=
                                                                                      [
                                                                                          _(
                                                                                              ` Links and money for every period `,
                                                                                              -1,
                                                                                          ),
                                                                                      ]),
                                                                              ],
                                                                          ),
                                                                      _: 1,
                                                                  },
                                                              ),
                                                              O(w(U), null, {
                                                                  default: o(
                                                                      () => [
                                                                          O(
                                                                              w(
                                                                                  q,
                                                                              ),
                                                                              null,
                                                                              {
                                                                                  default:
                                                                                      o(
                                                                                          () => [
                                                                                              O(
                                                                                                  w(
                                                                                                      G,
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
                                                                                                                          A(
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
                                                                                              (g(),
                                                                                              D(
                                                                                                  a,
                                                                                                  null,
                                                                                                  E(
                                                                                                      r,
                                                                                                      (
                                                                                                          e,
                                                                                                      ) =>
                                                                                                          O(
                                                                                                              w(
                                                                                                                  G,
                                                                                                              ),
                                                                                                              {
                                                                                                                  key: e.key,
                                                                                                                  scope: `col`,
                                                                                                                  class: d(
                                                                                                                      [
                                                                                                                          rt,
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
                                                                                                                              _(
                                                                                                                                  p(
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
                                                              O(w(V), null, {
                                                                  default: o(
                                                                      () => [
                                                                          O(
                                                                              w(
                                                                                  q,
                                                                              ),
                                                                              null,
                                                                              {
                                                                                  default:
                                                                                      o(
                                                                                          () => [
                                                                                              O(
                                                                                                  w(
                                                                                                      G,
                                                                                                  ),
                                                                                                  {
                                                                                                      scope: `row`,
                                                                                                      class: d(
                                                                                                          $,
                                                                                                      ),
                                                                                                  },
                                                                                                  {
                                                                                                      default:
                                                                                                          o(
                                                                                                              () => [
                                                                                                                  ...(n[7] ||=
                                                                                                                      [
                                                                                                                          _(
                                                                                                                              ` Links created `,
                                                                                                                              -1,
                                                                                                                          ),
                                                                                                                      ]),
                                                                                                              ],
                                                                                                          ),
                                                                                                      _: 1,
                                                                                                  },
                                                                                              ),
                                                                                              (g(),
                                                                                              D(
                                                                                                  a,
                                                                                                  null,
                                                                                                  E(
                                                                                                      r,
                                                                                                      (
                                                                                                          t,
                                                                                                      ) =>
                                                                                                          O(
                                                                                                              w(
                                                                                                                  H,
                                                                                                              ),
                                                                                                              {
                                                                                                                  key: t.key,
                                                                                                                  class: d(
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
                                                                                                                              _(
                                                                                                                                  p(
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
                                                                          O(
                                                                              w(
                                                                                  q,
                                                                              ),
                                                                              null,
                                                                              {
                                                                                  default:
                                                                                      o(
                                                                                          () => [
                                                                                              O(
                                                                                                  w(
                                                                                                      G,
                                                                                                  ),
                                                                                                  {
                                                                                                      scope: `row`,
                                                                                                      class: d(
                                                                                                          $,
                                                                                                      ),
                                                                                                  },
                                                                                                  {
                                                                                                      default:
                                                                                                          o(
                                                                                                              () => [
                                                                                                                  ...(n[8] ||=
                                                                                                                      [
                                                                                                                          _(
                                                                                                                              ` Completed rate `,
                                                                                                                              -1,
                                                                                                                          ),
                                                                                                                      ]),
                                                                                                              ],
                                                                                                          ),
                                                                                                      _: 1,
                                                                                                  },
                                                                                              ),
                                                                                              (g(),
                                                                                              D(
                                                                                                  a,
                                                                                                  null,
                                                                                                  E(
                                                                                                      r,
                                                                                                      (
                                                                                                          t,
                                                                                                      ) =>
                                                                                                          O(
                                                                                                              w(
                                                                                                                  H,
                                                                                                              ),
                                                                                                              {
                                                                                                                  key: t.key,
                                                                                                                  class: d(
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
                                                                                                                              _(
                                                                                                                                  p(
                                                                                                                                      w(
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
                                                                          O(
                                                                              w(
                                                                                  q,
                                                                              ),
                                                                              null,
                                                                              {
                                                                                  default:
                                                                                      o(
                                                                                          () => [
                                                                                              O(
                                                                                                  w(
                                                                                                      G,
                                                                                                  ),
                                                                                                  {
                                                                                                      scope: `row`,
                                                                                                      class: d(
                                                                                                          $,
                                                                                                      ),
                                                                                                  },
                                                                                                  {
                                                                                                      default:
                                                                                                          o(
                                                                                                              () => [
                                                                                                                  ...(n[9] ||=
                                                                                                                      [
                                                                                                                          _(
                                                                                                                              ` Failed `,
                                                                                                                              -1,
                                                                                                                          ),
                                                                                                                      ]),
                                                                                                              ],
                                                                                                          ),
                                                                                                      _: 1,
                                                                                                  },
                                                                                              ),
                                                                                              (g(),
                                                                                              D(
                                                                                                  a,
                                                                                                  null,
                                                                                                  E(
                                                                                                      r,
                                                                                                      (
                                                                                                          t,
                                                                                                      ) =>
                                                                                                          O(
                                                                                                              w(
                                                                                                                  H,
                                                                                                              ),
                                                                                                              {
                                                                                                                  key: t.key,
                                                                                                                  class: d(
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
                                                                                                                              _(
                                                                                                                                  p(
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
                                                                          (g(
                                                                              !0,
                                                                          ),
                                                                          D(
                                                                              a,
                                                                              null,
                                                                              E(
                                                                                  M.value,
                                                                                  (
                                                                                      t,
                                                                                  ) => (
                                                                                      g(),
                                                                                      S(
                                                                                          w(
                                                                                              q,
                                                                                          ),
                                                                                          {
                                                                                              key: t,
                                                                                          },
                                                                                          {
                                                                                              default:
                                                                                                  o(
                                                                                                      () => [
                                                                                                          O(
                                                                                                              w(
                                                                                                                  G,
                                                                                                              ),
                                                                                                              {
                                                                                                                  scope: `row`,
                                                                                                                  class: d(
                                                                                                                      $,
                                                                                                                  ),
                                                                                                              },
                                                                                                              {
                                                                                                                  default:
                                                                                                                      o(
                                                                                                                          () => [
                                                                                                                              _(
                                                                                                                                  ` Paid ` +
                                                                                                                                      p(
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
                                                                                                          (g(),
                                                                                                          D(
                                                                                                              a,
                                                                                                              null,
                                                                                                              E(
                                                                                                                  r,
                                                                                                                  (
                                                                                                                      n,
                                                                                                                  ) =>
                                                                                                                      O(
                                                                                                                          w(
                                                                                                                              H,
                                                                                                                          ),
                                                                                                                          {
                                                                                                                              key: n.key,
                                                                                                                              class: d(
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
                                                                                                                                          _(
                                                                                                                                              p(
                                                                                                                                                  w(
                                                                                                                                                      B,
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
                                                                          O(
                                                                              w(
                                                                                  q,
                                                                              ),
                                                                              null,
                                                                              {
                                                                                  default:
                                                                                      o(
                                                                                          () => [
                                                                                              O(
                                                                                                  w(
                                                                                                      G,
                                                                                                  ),
                                                                                                  {
                                                                                                      scope: `row`,
                                                                                                      class: d(
                                                                                                          $,
                                                                                                      ),
                                                                                                  },
                                                                                                  {
                                                                                                      default:
                                                                                                          o(
                                                                                                              () => [
                                                                                                                  ...(n[10] ||=
                                                                                                                      [
                                                                                                                          _(
                                                                                                                              ` Payments `,
                                                                                                                              -1,
                                                                                                                          ),
                                                                                                                      ]),
                                                                                                              ],
                                                                                                          ),
                                                                                                      _: 1,
                                                                                                  },
                                                                                              ),
                                                                                              (g(),
                                                                                              D(
                                                                                                  a,
                                                                                                  null,
                                                                                                  E(
                                                                                                      r,
                                                                                                      (
                                                                                                          t,
                                                                                                      ) =>
                                                                                                          O(
                                                                                                              w(
                                                                                                                  H,
                                                                                                              ),
                                                                                                              {
                                                                                                                  key: t.key,
                                                                                                                  class: d(
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
                                                                                                                              _(
                                                                                                                                  p(
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
                            O(
                                w(pe),
                                {
                                    as: `section`,
                                    class: `overflow-hidden rounded-xl border border-border/70 bg-card shadow-sm`,
                                    'aria-labelledby': `pulls-title`,
                                },
                                {
                                    default: o(() => [
                                        A(`h2`, Xe, [
                                            O(
                                                w(he),
                                                { 'as-child': `` },
                                                {
                                                    default: o(() => [
                                                        A(`button`, Ze, [
                                                            A(`span`, Qe, [
                                                                A(
                                                                    `span`,
                                                                    {
                                                                        class: d(
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
                                                                    ? (g(),
                                                                      D(
                                                                          `span`,
                                                                          $e,
                                                                          ` No pulls yet. `,
                                                                      ))
                                                                    : f(``, !0),
                                                            ]),
                                                            O(w(de), {
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
                                            ? (g(),
                                              S(
                                                  w(me),
                                                  { key: 0 },
                                                  {
                                                      default: o(() => [
                                                          A(`div`, et, [
                                                              O(w(W), null, {
                                                                  default: o(
                                                                      () => [
                                                                          O(
                                                                              w(
                                                                                  J,
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
                                                                                                      _(
                                                                                                          ` The 10 most recent pulls, newest first. `,
                                                                                                          -1,
                                                                                                      ),
                                                                                                  ]),
                                                                                          ],
                                                                                      ),
                                                                                  _: 1,
                                                                              },
                                                                          ),
                                                                          O(
                                                                              w(
                                                                                  U,
                                                                              ),
                                                                              {
                                                                                  class: `bg-muted/40`,
                                                                              },
                                                                              {
                                                                                  default:
                                                                                      o(
                                                                                          () => [
                                                                                              O(
                                                                                                  w(
                                                                                                      q,
                                                                                                  ),
                                                                                                  {
                                                                                                      class: `hover:bg-transparent`,
                                                                                                  },
                                                                                                  {
                                                                                                      default:
                                                                                                          o(
                                                                                                              () => [
                                                                                                                  O(
                                                                                                                      w(
                                                                                                                          G,
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
                                                                                                                                              _(
                                                                                                                                                  `Time`,
                                                                                                                                                  -1,
                                                                                                                                              ),
                                                                                                                                          ]),
                                                                                                                                  ],
                                                                                                                              ),
                                                                                                                          _: 1,
                                                                                                                      },
                                                                                                                  ),
                                                                                                                  O(
                                                                                                                      w(
                                                                                                                          G,
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
                                                                                                                                              _(
                                                                                                                                                  `Result`,
                                                                                                                                                  -1,
                                                                                                                                              ),
                                                                                                                                          ]),
                                                                                                                                  ],
                                                                                                                              ),
                                                                                                                          _: 1,
                                                                                                                      },
                                                                                                                  ),
                                                                                                                  O(
                                                                                                                      w(
                                                                                                                          G,
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
                                                                                                                                              _(
                                                                                                                                                  ` How it started `,
                                                                                                                                                  -1,
                                                                                                                                              ),
                                                                                                                                          ]),
                                                                                                                                  ],
                                                                                                                              ),
                                                                                                                          _: 1,
                                                                                                                      },
                                                                                                                  ),
                                                                                                                  O(
                                                                                                                      w(
                                                                                                                          G,
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
                                                                                                                                              _(
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
                                                                          O(
                                                                              w(
                                                                                  V,
                                                                              ),
                                                                              null,
                                                                              {
                                                                                  default:
                                                                                      o(
                                                                                          () => [
                                                                                              (g(
                                                                                                  !0,
                                                                                              ),
                                                                                              D(
                                                                                                  a,
                                                                                                  null,
                                                                                                  E(
                                                                                                      e.pulls,
                                                                                                      (
                                                                                                          t,
                                                                                                      ) => (
                                                                                                          g(),
                                                                                                          S(
                                                                                                              w(
                                                                                                                  q,
                                                                                                              ),
                                                                                                              {
                                                                                                                  key: t.id,
                                                                                                                  class: d(
                                                                                                                      t.ok
                                                                                                                          ? `border-border/50`
                                                                                                                          : `border-danger-border/60 bg-danger-soft hover:bg-danger-soft`,
                                                                                                                  ),
                                                                                                              },
                                                                                                              {
                                                                                                                  default:
                                                                                                                      o(
                                                                                                                          () => [
                                                                                                                              O(
                                                                                                                                  w(
                                                                                                                                      H,
                                                                                                                                  ),
                                                                                                                                  {
                                                                                                                                      class: d(
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
                                                                                                                                                  O(
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
                                                                                                                              O(
                                                                                                                                  w(
                                                                                                                                      H,
                                                                                                                                  ),
                                                                                                                                  {
                                                                                                                                      class: `px-4 py-3`,
                                                                                                                                  },
                                                                                                                                  {
                                                                                                                                      default:
                                                                                                                                          o(
                                                                                                                                              () => [
                                                                                                                                                  O(
                                                                                                                                                      w(
                                                                                                                                                          K,
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
                                                                                                                                                                      _(
                                                                                                                                                                          p(
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
                                                                                                                              O(
                                                                                                                                  w(
                                                                                                                                      H,
                                                                                                                                  ),
                                                                                                                                  {
                                                                                                                                      class: `px-4 py-3 text-sm`,
                                                                                                                                  },
                                                                                                                                  {
                                                                                                                                      default:
                                                                                                                                          o(
                                                                                                                                              () => [
                                                                                                                                                  A(
                                                                                                                                                      `span`,
                                                                                                                                                      tt,
                                                                                                                                                      p(
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
                                                                                                                              O(
                                                                                                                                  w(
                                                                                                                                      H,
                                                                                                                                  ),
                                                                                                                                  {
                                                                                                                                      class: d(
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
                                                                                                                                                  _(
                                                                                                                                                      p(
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
                                            : f(``, !0),
                                    ]),
                                    _: 1,
                                },
                            ),
                            e.deployment.windows && h.value
                                ? (g(),
                                  D(
                                      `p`,
                                      nt,
                                      ` A link made yesterday and paid today counts in yesterday's links and in today's money, so the completed links and the payments of a window can differ. `,
                                  ))
                                : f(``, !0),
                        ]),
                    ],
                    64,
                )
            );
        },
    });
export { it as default };
