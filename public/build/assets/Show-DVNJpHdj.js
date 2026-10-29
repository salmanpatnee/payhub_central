import { a as e, n as t, t as n } from './Presence-L0dip4UT.js';
import {
    An as r,
    Cr as i,
    Et as a,
    Ht as o,
    Pn as s,
    Vt as c,
    Yt as l,
    _ as u,
    ar as d,
    at as f,
    br as p,
    cn as m,
    dt as h,
    f as g,
    fr as _,
    g as v,
    gt as y,
    hr as b,
    i as x,
    it as S,
    kn as C,
    m as w,
    mt as T,
    ot as E,
    p as D,
    pt as O,
    q as k,
    r as ee,
    rt as A,
    sn as j,
    st as M,
    tn as N,
    vr as P,
    xr as F,
    yr as te,
} from './wayfinder-DOENF6-v.js';
import { a as I, s as L, t as R } from './useForwardExpose-BVGbRqkE.js';
import { t as ne } from './useForwardPropsEmits-BQsdb9GW.js';
import { n as re, t as z } from './formatPercent-DIJMh_yq.js';
import { t as ie } from './createLucideIcon-BqhoQwIJ.js';
import { c as ae, d as oe } from './app-DCCfXFlv.js';
import { i as B } from './formatRelative-D-S37FvD.js';
import {
    a as se,
    i as V,
    n as H,
    o as U,
    r as W,
    s as G,
    t as K,
} from './TableRow-Cik-p-BP.js';
import { t as q } from './TableCaption-BVMgFzHw.js';
import { n as ce, t as le } from './deploymentStatus-DAZueO0e.js';
import { t as ue } from './PageHeader-aqdbQGDc.js';
import { t as de } from './Spinner-CE_plhl7.js';
var [J, fe] = e(`CollapsibleRoot`),
    pe = y({
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
                i = L(r, `open`, n, {
                    defaultValue: r.defaultOpen,
                    passive: r.open === void 0,
                }),
                { disabled: a, unmountOnHide: o } = _(r);
            return (
                fe({
                    contentId: ``,
                    disabled: a,
                    open: i,
                    unmountOnHide: o,
                    onOpenToggle: () => {
                        a.value || (i.value = !i.value);
                    },
                }),
                t({ open: i }),
                R(),
                (t, n) => (
                    N(),
                    f(
                        b(x),
                        {
                            as: e.as,
                            'as-child': r.asChild,
                            'data-state': b(i) ? `open` : `closed`,
                            'data-disabled': b(a) ? `` : void 0,
                        },
                        {
                            default: s(() => [
                                m(t.$slots, `default`, { open: b(i) }),
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
    me = y({
        inheritAttrs: !1,
        __name: `CollapsibleContent`,
        props: {
            forceMount: { type: Boolean, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
        },
        emits: [`contentFound`],
        setup(e, { emit: r }) {
            let i = e,
                a = r,
                u = J();
            u.contentId ||= t(void 0, `reka-collapsible-content`);
            let p = d(),
                { forwardRef: h, currentElement: g } = R(),
                _ = d(0),
                v = d(0),
                y = A(() => u.open.value),
                S = d(y.value),
                w = d();
            C(
                () => [y.value, p.value?.present],
                async () => {
                    await o();
                    let e = g.value;
                    if (!e) return;
                    ((w.value = w.value || {
                        transitionDuration: e.style.transitionDuration,
                        animationName: e.style.animationName,
                    }),
                        (e.style.transitionDuration = `0s`),
                        (e.style.animationName = `none`));
                    let t = e.getBoundingClientRect();
                    ((v.value = t.height),
                        (_.value = t.width),
                        S.value ||
                            ((e.style.transitionDuration =
                                w.value.transitionDuration),
                            (e.style.animationName = w.value.animationName)));
                },
                { immediate: !0 },
            );
            let D = A(() => S.value && u.open.value);
            return (
                l(() => {
                    requestAnimationFrame(() => {
                        S.value = !1;
                    });
                }),
                I(g, `beforematch`, (e) => {
                    requestAnimationFrame(() => {
                        (u.onOpenToggle(), a(`contentFound`));
                    });
                }),
                (t, r) => (
                    N(),
                    f(
                        b(n),
                        {
                            ref_key: `presentRef`,
                            ref: p,
                            present: e.forceMount || b(u).open.value,
                            'force-mount': !0,
                        },
                        {
                            default: s(({ present: n }) => [
                                T(
                                    b(x),
                                    c(t.$attrs, {
                                        id: b(u).contentId,
                                        ref: b(h),
                                        'as-child': i.asChild,
                                        as: e.as,
                                        hidden: n
                                            ? void 0
                                            : b(u).unmountOnHide.value
                                              ? ``
                                              : `until-found`,
                                        'data-state': D.value
                                            ? void 0
                                            : b(u).open.value
                                              ? `open`
                                              : `closed`,
                                        'data-disabled': b(u).disabled?.value
                                            ? ``
                                            : void 0,
                                        style: {
                                            '--reka-collapsible-content-height': `${v.value}px`,
                                            '--reka-collapsible-content-width': `${_.value}px`,
                                        },
                                    }),
                                    {
                                        default: s(() => [
                                            !b(u).unmountOnHide.value || n
                                                ? m(
                                                      t.$slots,
                                                      `default`,
                                                      {},
                                                      void 0,
                                                      void 0,
                                                      0,
                                                  )
                                                : E(`v-if`, !0),
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
    he = y({
        __name: `CollapsibleTrigger`,
        props: {
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1, default: `button` },
        },
        setup(e) {
            let t = e;
            R();
            let n = J();
            return (r, i) => (
                N(),
                f(
                    b(x),
                    {
                        type: e.as === `button` ? `button` : void 0,
                        as: e.as,
                        'as-child': t.asChild,
                        'aria-controls': b(n).contentId,
                        'aria-expanded': b(n).open.value,
                        'data-state': b(n).open.value ? `open` : `closed`,
                        'data-disabled': b(n).disabled?.value ? `` : void 0,
                        disabled: b(n).disabled?.value,
                        onClick: b(n).onOpenToggle,
                    },
                    { default: s(() => [m(r.$slots, `default`)]), _: 3 },
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
    ge = ie({
        name: `chevron-down`,
        size: 24,
        node: [[`path`, { d: `m6 9 6 6 6-6`, key: `qrunsl` }]],
    }),
    _e = y({
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
                N(),
                f(
                    b(pe),
                    c({ 'data-slot': `collapsible` }, b(n)),
                    {
                        default: s((t) => [m(e.$slots, `default`, te(a(t)))]),
                        _: 3,
                    },
                    16,
                )
            );
        },
    }),
    ve = y({
        __name: `CollapsibleContent`,
        props: {
            forceMount: { type: Boolean },
            asChild: { type: Boolean },
            as: {},
        },
        setup(e) {
            let t = e;
            return (e, n) => (
                N(),
                f(
                    b(me),
                    c({ 'data-slot': `collapsible-content` }, t),
                    { default: s(() => [m(e.$slots, `default`)]), _: 3 },
                    16,
                )
            );
        },
    }),
    ye = y({
        __name: `CollapsibleTrigger`,
        props: { asChild: { type: Boolean }, as: {} },
        setup(e) {
            let t = e;
            return (e, n) => (
                N(),
                f(
                    b(he),
                    c({ 'data-slot': `collapsible-trigger` }, t),
                    { default: s(() => [m(e.$slots, `default`)]), _: 3 },
                    16,
                )
            );
        },
    }),
    be = [
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
    xe = 864e5;
function Se(e) {
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
        r = `${n.getUTCDate()} ${be[n.getUTCMonth()]}`;
    return t ? `${r} ${n.getUTCFullYear()}` : r;
}
function Ce(e, t) {
    let n = Se(e),
        r = Se(t);
    if (!n || !r) return null;
    let i = r.midnight ? r.at - xe : r.at;
    if (i < n.at) return null;
    if (i === n.at) return Y(n.at, !1);
    let a = new Date(n.at).getUTCFullYear() !== new Date(i).getUTCFullYear();
    return `${Y(n.at, a)} to ${Y(i, a)}`;
}
var we = { class: `mx-auto w-full max-w-7xl space-y-6 p-4 md:p-6` },
    Te = { class: `flex flex-wrap items-start justify-between gap-4` },
    Ee = { class: `space-y-1` },
    De = { class: `flex flex-wrap items-center gap-2 pt-1` },
    Oe = { key: 0, class: `text-sm text-muted-foreground sm:text-right` },
    ke = {
        key: 0,
        class: `rounded-xl border border-dashed border-border p-6 text-sm text-muted-foreground`,
    },
    Ae = { class: `flex flex-wrap items-center justify-between gap-3` },
    je = {
        role: `group`,
        'aria-label': `Period`,
        class: `inline-flex w-full max-w-full overflow-x-auto rounded-lg bg-muted p-1 sm:w-auto`,
    },
    Me = [`aria-pressed`, `onClick`],
    Ne = { class: `text-sm text-muted-foreground tabular-nums` },
    Pe = { class: `grid gap-4 md:grid-cols-[1.5fr_1fr_1fr]` },
    Fe = {
        class: `space-y-3 rounded-xl border border-border/70 bg-card p-4 shadow-sm`,
        'aria-labelledby': `paid-title`,
    },
    Ie = { key: 0, class: `text-sm text-muted-foreground` },
    Le = { key: 1, class: `divide-y divide-border/50` },
    Re = {
        class: `w-9 shrink-0 text-xs font-semibold tracking-wider text-muted-foreground uppercase`,
    },
    ze = {
        class: `mr-auto text-2xl font-semibold tracking-tight tabular-nums`,
    },
    Be = { class: `text-xs text-muted-foreground tabular-nums` },
    Ve = {
        class: `space-y-3 rounded-xl border border-border/70 bg-card p-4 shadow-sm`,
        'aria-labelledby': `links-title`,
    },
    He = { class: `text-4xl font-semibold tracking-tight tabular-nums` },
    Ue = {
        class: `space-y-3 rounded-xl border border-border/70 bg-card p-4 shadow-sm`,
        'aria-labelledby': `attention-title`,
    },
    We = { class: `text-4xl font-semibold tracking-tight tabular-nums` },
    Ge = { class: `flex flex-wrap gap-2` },
    Ke = { class: `grid gap-4 lg:grid-cols-[1fr_1.25fr]` },
    qe = {
        class: `space-y-4 rounded-xl border border-border/70 bg-card p-4 shadow-sm`,
        'aria-labelledby': `outcomes-title`,
    },
    Je = {
        class: `flex h-2.5 gap-0.5 overflow-hidden rounded-full bg-muted`,
        'aria-hidden': `true`,
    },
    Ye = { class: `divide-y divide-border/50` },
    Xe = { class: `text-sm` },
    Ze = { class: `text-base font-semibold tabular-nums` },
    Qe = { class: `text-right text-xs text-muted-foreground tabular-nums` },
    $e = {
        class: `space-y-3 rounded-xl border border-border/70 bg-card p-4 shadow-sm`,
        'aria-labelledby': `compare-title`,
    },
    et = { class: `overflow-x-auto` },
    tt = { id: `pulls-title`, class: `m-0` },
    nt = {
        type: `button`,
        class: `group flex w-full items-center justify-between gap-4 px-4 py-3 text-left outline-none hover:bg-muted/40 focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:ring-inset`,
    },
    rt = { class: `space-y-0.5` },
    it = { key: 0, class: `block text-sm font-normal text-muted-foreground` },
    at = { class: `overflow-x-auto border-t border-border/60` },
    ot = {
        class: `inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-semibold text-foreground`,
    },
    st = { key: 2, class: `text-xs text-muted-foreground` },
    X = `text-[11px] font-semibold tracking-widest text-muted-foreground uppercase`,
    Z = `inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset`,
    ct = `h-auto px-3 py-2 text-right`,
    Q = `px-3 py-2 text-right text-sm tabular-nums`,
    $ = `px-3 py-2 text-sm font-normal tracking-normal text-muted-foreground normal-case`,
    lt = y({
        __name: `Show`,
        props: { deployment: {}, pulls: {}, editHref: {}, activeHref: {} },
        setup(e) {
            let t = e,
                n = v(),
                a = [
                    { key: `today`, label: `Today` },
                    { key: `thisMonth`, label: `This month` },
                    { key: `last30Days`, label: `Last 30 days` },
                    { key: `allTime`, label: `All time` },
                ],
                o = [
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
                c = d(`today`),
                l = A(() => le(t.deployment.state)),
                m = A(() =>
                    ce(
                        t.deployment.state,
                        t.deployment.reason,
                        t.deployment.windows !== null,
                    ),
                ),
                _ = A(() => t.deployment.windows?.[c.value]),
                y = A(() => a.find((e) => e.key === c.value)?.label ?? ``),
                x = A(() => {
                    let e = _.value;
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
                C = A(() =>
                    _.value ? _.value.links.failed + _.value.links.pending : 0,
                ),
                te = A(() => {
                    let e = t.deployment.windows;
                    if (!e) return [];
                    let n = a.map((t) => e[t.key]);
                    return [
                        ...new Set(n.flatMap((e) => Object.keys(e.completed))),
                    ]
                        .filter((e) => n.some((t) => (t.completed[e] ?? 0) > 0))
                        .sort();
                });
            function I(e) {
                let n = t.deployment.windows?.[e];
                return e === `allTime` || !n
                    ? `Since the first link`
                    : (Ce(n.from, n.to) ?? ``);
            }
            function L(e) {
                let t = _.value?.links.total ?? 0;
                return t > 0 ? `${(e / t) * 100}%` : `0%`;
            }
            (r(() => {
                w({
                    breadcrumbs: [
                        { title: `Home`, href: oe() },
                        { title: `Deployments`, href: ae() },
                        { title: t.deployment.name, href: n.url },
                    ],
                });
            }),
                u(6e4, {
                    only: [`deployment`],
                    onHttpException: (e) => {
                        if (e.status === 404) return (i.visit(ae()), !1);
                    },
                }));
            let R = d(!1);
            function ne() {
                i.patch(
                    t.activeHref,
                    { is_active: t.deployment.state === `paused` },
                    {
                        preserveState: !0,
                        preserveScroll: !0,
                        onStart: () => (R.value = !0),
                        onFinish: () => (R.value = !1),
                    },
                );
            }
            let ie = { scheduled: `Scheduled`, manual: `Manual` };
            function J(e) {
                return e.ok ? `None` : (e.reason ?? `No reason saved`);
            }
            return (t, n) => (
                N(),
                M(
                    k,
                    null,
                    [
                        T(b(g), { title: e.deployment.name }, null, 8, [
                            `title`,
                        ]),
                        S(`div`, we, [
                            S(`div`, Te, [
                                S(`div`, Ee, [
                                    T(
                                        ue,
                                        {
                                            title: e.deployment.name,
                                            description:
                                                e.deployment.domain ?? void 0,
                                        },
                                        h({ _: 2 }, [
                                            l.value
                                                ? {
                                                      name: `actions`,
                                                      fn: s(() => [
                                                          T(
                                                              b(G),
                                                              {
                                                                  variant:
                                                                      l.value
                                                                          .variant,
                                                              },
                                                              {
                                                                  default: s(
                                                                      () => [
                                                                          O(
                                                                              F(
                                                                                  l
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
                                    S(`div`, De, [
                                        T(
                                            b(ee),
                                            {
                                                variant: `outline`,
                                                size: `sm`,
                                                disabled: R.value,
                                                onClick: ne,
                                            },
                                            {
                                                default: s(() => [
                                                    R.value
                                                        ? (N(),
                                                          f(b(de), { key: 0 }))
                                                        : E(``, !0),
                                                    O(
                                                        ` ` +
                                                            F(
                                                                e.deployment
                                                                    .state ===
                                                                    `paused`
                                                                    ? `Resume`
                                                                    : `Pause`,
                                                            ),
                                                        1,
                                                    ),
                                                ]),
                                                _: 1,
                                            },
                                            8,
                                            [`disabled`],
                                        ),
                                        T(
                                            b(ee),
                                            {
                                                variant: `outline`,
                                                size: `sm`,
                                                'as-child': ``,
                                            },
                                            {
                                                default: s(() => [
                                                    T(
                                                        b(D),
                                                        { href: e.editHref },
                                                        {
                                                            default: s(() => [
                                                                ...(n[0] ||= [
                                                                    O(
                                                                        `Edit`,
                                                                        -1,
                                                                    ),
                                                                ]),
                                                            ]),
                                                            _: 1,
                                                        },
                                                        8,
                                                        [`href`],
                                                    ),
                                                ]),
                                                _: 1,
                                            },
                                        ),
                                    ]),
                                    (N(!0),
                                    M(
                                        k,
                                        null,
                                        j(
                                            m.value,
                                            (e) => (
                                                N(),
                                                M(
                                                    `p`,
                                                    {
                                                        key: e,
                                                        class: `text-sm text-muted-foreground`,
                                                    },
                                                    F(e),
                                                    1,
                                                )
                                            ),
                                        ),
                                        128,
                                    )),
                                ]),
                                e.deployment.updatedAt
                                    ? (N(),
                                      M(`p`, Oe, [
                                          (n[1] ||= O(` Last updated `, -1)),
                                          T(
                                              re,
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
                                    : E(``, !0),
                            ]),
                            !e.deployment.windows || !_.value
                                ? (N(), M(`p`, ke, ` No data yet `))
                                : (N(),
                                  M(
                                      k,
                                      { key: 1 },
                                      [
                                          S(`div`, Ae, [
                                              S(`div`, je, [
                                                  (N(),
                                                  M(
                                                      k,
                                                      null,
                                                      j(a, (e) =>
                                                          S(
                                                              `button`,
                                                              {
                                                                  key: e.key,
                                                                  type: `button`,
                                                                  'aria-pressed':
                                                                      c.value ===
                                                                      e.key,
                                                                  class: `flex-1 rounded-md px-3 py-1.5 text-sm font-medium whitespace-nowrap text-muted-foreground transition-colors focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:outline-none aria-pressed:bg-card aria-pressed:text-foreground aria-pressed:shadow-sm sm:flex-none`,
                                                                  onClick: (
                                                                      t,
                                                                  ) =>
                                                                      (c.value =
                                                                          e.key),
                                                              },
                                                              F(e.label),
                                                              9,
                                                              Me,
                                                          ),
                                                      ),
                                                      64,
                                                  )),
                                              ]),
                                              S(`p`, Ne, F(I(c.value)), 1),
                                          ]),
                                          S(`div`, Pe, [
                                              S(`section`, Fe, [
                                                  S(
                                                      `h2`,
                                                      {
                                                          id: `paid-title`,
                                                          class: P(X),
                                                      },
                                                      ` Money paid · ` +
                                                          F(y.value),
                                                      1,
                                                  ),
                                                  x.value.length === 0
                                                      ? (N(),
                                                        M(
                                                            `p`,
                                                            Ie,
                                                            ` No payments `,
                                                        ))
                                                      : (N(),
                                                        M(`ul`, Le, [
                                                            (N(!0),
                                                            M(
                                                                k,
                                                                null,
                                                                j(
                                                                    x.value,
                                                                    (e) => (
                                                                        N(),
                                                                        M(
                                                                            `li`,
                                                                            {
                                                                                key: e.code,
                                                                                class: `flex items-baseline justify-between gap-3 py-2 first:pt-0 last:pb-0`,
                                                                            },
                                                                            [
                                                                                S(
                                                                                    `span`,
                                                                                    Re,
                                                                                    F(
                                                                                        e.code,
                                                                                    ),
                                                                                    1,
                                                                                ),
                                                                                S(
                                                                                    `span`,
                                                                                    ze,
                                                                                    F(
                                                                                        e.paid,
                                                                                    ),
                                                                                    1,
                                                                                ),
                                                                                S(
                                                                                    `span`,
                                                                                    Be,
                                                                                    F(
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
                                                  (n[2] ||= S(
                                                      `p`,
                                                      {
                                                          class: `text-xs text-muted-foreground`,
                                                      },
                                                      ` Counted by the date each payment was paid. This includes links created earlier. `,
                                                      -1,
                                                  )),
                                              ]),
                                              S(`section`, Ve, [
                                                  S(
                                                      `h2`,
                                                      {
                                                          id: `links-title`,
                                                          class: P(X),
                                                      },
                                                      `Links created`,
                                                  ),
                                                  S(
                                                      `p`,
                                                      He,
                                                      F(_.value.links.total),
                                                      1,
                                                  ),
                                                  S(`p`, null, [
                                                      _.value.links.total > 0
                                                          ? (N(),
                                                            M(
                                                                `span`,
                                                                {
                                                                    key: 0,
                                                                    class: P([
                                                                        Z,
                                                                        `bg-success-soft text-success tabular-nums ring-success-border`,
                                                                    ]),
                                                                },
                                                                F(
                                                                    b(z)(
                                                                        _.value
                                                                            .links
                                                                            .completed,
                                                                        _.value
                                                                            .links
                                                                            .total,
                                                                    ),
                                                                ) +
                                                                    ` completed `,
                                                                3,
                                                            ))
                                                          : (N(),
                                                            M(
                                                                `span`,
                                                                {
                                                                    key: 1,
                                                                    class: P([
                                                                        Z,
                                                                        `bg-muted text-muted-foreground ring-border`,
                                                                    ]),
                                                                },
                                                                ` No links yet `,
                                                                2,
                                                            )),
                                                  ]),
                                                  (n[3] ||= S(
                                                      `p`,
                                                      {
                                                          class: `text-xs text-muted-foreground`,
                                                      },
                                                      ` Counted by the date each link was created. `,
                                                      -1,
                                                  )),
                                              ]),
                                              S(`section`, Ue, [
                                                  S(
                                                      `h2`,
                                                      {
                                                          id: `attention-title`,
                                                          class: P(X),
                                                      },
                                                      ` Needs attention `,
                                                  ),
                                                  C.value > 0
                                                      ? (N(),
                                                        M(
                                                            k,
                                                            { key: 0 },
                                                            [
                                                                S(
                                                                    `p`,
                                                                    We,
                                                                    F(C.value),
                                                                    1,
                                                                ),
                                                                S(`p`, Ge, [
                                                                    _.value
                                                                        .links
                                                                        .failed >
                                                                    0
                                                                        ? (N(),
                                                                          M(
                                                                              `span`,
                                                                              {
                                                                                  key: 0,
                                                                                  class: P(
                                                                                      [
                                                                                          Z,
                                                                                          `bg-danger-soft text-danger tabular-nums ring-danger-border`,
                                                                                      ],
                                                                                  ),
                                                                              },
                                                                              F(
                                                                                  _
                                                                                      .value
                                                                                      .links
                                                                                      .failed,
                                                                              ) +
                                                                                  ` failed `,
                                                                              3,
                                                                          ))
                                                                        : E(
                                                                              ``,
                                                                              !0,
                                                                          ),
                                                                    _.value
                                                                        .links
                                                                        .pending >
                                                                    0
                                                                        ? (N(),
                                                                          M(
                                                                              `span`,
                                                                              {
                                                                                  key: 1,
                                                                                  class: P(
                                                                                      [
                                                                                          Z,
                                                                                          `bg-warning-soft text-warning tabular-nums ring-warning-border`,
                                                                                      ],
                                                                                  ),
                                                                              },
                                                                              F(
                                                                                  _
                                                                                      .value
                                                                                      .links
                                                                                      .pending,
                                                                              ) +
                                                                                  ` pending `,
                                                                              3,
                                                                          ))
                                                                        : E(
                                                                              ``,
                                                                              !0,
                                                                          ),
                                                                ]),
                                                            ],
                                                            64,
                                                        ))
                                                      : (N(),
                                                        M(
                                                            k,
                                                            { key: 1 },
                                                            [
                                                                (n[4] ||= S(
                                                                    `p`,
                                                                    {
                                                                        class: `text-4xl font-semibold tracking-tight`,
                                                                    },
                                                                    ` All clear `,
                                                                    -1,
                                                                )),
                                                                S(`p`, null, [
                                                                    S(
                                                                        `span`,
                                                                        {
                                                                            class: P(
                                                                                [
                                                                                    Z,
                                                                                    `bg-success-soft text-success ring-success-border`,
                                                                                ],
                                                                            ),
                                                                        },
                                                                        ` Nothing failed or waiting `,
                                                                        2,
                                                                    ),
                                                                ]),
                                                            ],
                                                            64,
                                                        )),
                                                  (n[5] ||= S(
                                                      `p`,
                                                      {
                                                          class: `text-xs text-muted-foreground`,
                                                      },
                                                      ` Failed links and links still waiting for payment. `,
                                                      -1,
                                                  )),
                                              ]),
                                          ]),
                                          S(`div`, Ke, [
                                              S(`section`, qe, [
                                                  S(
                                                      `h2`,
                                                      {
                                                          id: `outcomes-title`,
                                                          class: P(X),
                                                      },
                                                      `Link outcomes`,
                                                  ),
                                                  S(`div`, Je, [
                                                      (N(),
                                                      M(
                                                          k,
                                                          null,
                                                          j(
                                                              o,
                                                              (e) => (
                                                                  N(),
                                                                  M(
                                                                      k,
                                                                      {
                                                                          key: e.key,
                                                                      },
                                                                      [
                                                                          _
                                                                              .value
                                                                              .links[
                                                                              e
                                                                                  .key
                                                                          ] > 0
                                                                              ? (N(),
                                                                                M(
                                                                                    `span`,
                                                                                    {
                                                                                        key: 0,
                                                                                        class: P(
                                                                                            [
                                                                                                `block min-w-[3px]`,
                                                                                                e.bar,
                                                                                            ],
                                                                                        ),
                                                                                        style: p(
                                                                                            {
                                                                                                width: L(
                                                                                                    _
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
                                                                              : E(
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
                                                  S(`ul`, Ye, [
                                                      (N(),
                                                      M(
                                                          k,
                                                          null,
                                                          j(o, (e) =>
                                                              S(
                                                                  `li`,
                                                                  {
                                                                      key: e.key,
                                                                      class: `grid grid-cols-[auto_1fr_auto_3.5rem] items-center gap-3 py-2 first:pt-0 last:pb-0`,
                                                                  },
                                                                  [
                                                                      S(
                                                                          `span`,
                                                                          {
                                                                              class: P(
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
                                                                      S(
                                                                          `span`,
                                                                          Xe,
                                                                          F(
                                                                              e.label,
                                                                          ),
                                                                          1,
                                                                      ),
                                                                      S(
                                                                          `span`,
                                                                          Ze,
                                                                          F(
                                                                              _
                                                                                  .value
                                                                                  .links[
                                                                                  e
                                                                                      .key
                                                                              ],
                                                                          ),
                                                                          1,
                                                                      ),
                                                                      S(
                                                                          `span`,
                                                                          Qe,
                                                                          F(
                                                                              b(
                                                                                  z,
                                                                              )(
                                                                                  _
                                                                                      .value
                                                                                      .links[
                                                                                      e
                                                                                          .key
                                                                                  ],
                                                                                  _
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
                                              S(`section`, $e, [
                                                  S(
                                                      `h2`,
                                                      {
                                                          id: `compare-title`,
                                                          class: P(X),
                                                      },
                                                      `All periods`,
                                                  ),
                                                  S(`div`, et, [
                                                      T(b(U), null, {
                                                          default: s(() => [
                                                              T(
                                                                  b(q),
                                                                  {
                                                                      class: `sr-only`,
                                                                  },
                                                                  {
                                                                      default:
                                                                          s(
                                                                              () => [
                                                                                  ...(n[6] ||=
                                                                                      [
                                                                                          O(
                                                                                              ` Links and money for every period `,
                                                                                              -1,
                                                                                          ),
                                                                                      ]),
                                                                              ],
                                                                          ),
                                                                      _: 1,
                                                                  },
                                                              ),
                                                              T(b(H), null, {
                                                                  default: s(
                                                                      () => [
                                                                          T(
                                                                              b(
                                                                                  K,
                                                                              ),
                                                                              null,
                                                                              {
                                                                                  default:
                                                                                      s(
                                                                                          () => [
                                                                                              T(
                                                                                                  b(
                                                                                                      W,
                                                                                                  ),
                                                                                                  {
                                                                                                      scope: `col`,
                                                                                                      class: `px-3`,
                                                                                                  },
                                                                                                  {
                                                                                                      default:
                                                                                                          s(
                                                                                                              () => [
                                                                                                                  ...(n[7] ||=
                                                                                                                      [
                                                                                                                          S(
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
                                                                                              (N(),
                                                                                              M(
                                                                                                  k,
                                                                                                  null,
                                                                                                  j(
                                                                                                      a,
                                                                                                      (
                                                                                                          e,
                                                                                                      ) =>
                                                                                                          T(
                                                                                                              b(
                                                                                                                  W,
                                                                                                              ),
                                                                                                              {
                                                                                                                  key: e.key,
                                                                                                                  scope: `col`,
                                                                                                                  class: P(
                                                                                                                      [
                                                                                                                          ct,
                                                                                                                          c.value ===
                                                                                                                              e.key &&
                                                                                                                              `bg-primary/5 text-primary`,
                                                                                                                      ],
                                                                                                                  ),
                                                                                                              },
                                                                                                              {
                                                                                                                  default:
                                                                                                                      s(
                                                                                                                          () => [
                                                                                                                              O(
                                                                                                                                  F(
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
                                                              T(b(se), null, {
                                                                  default: s(
                                                                      () => [
                                                                          T(
                                                                              b(
                                                                                  K,
                                                                              ),
                                                                              null,
                                                                              {
                                                                                  default:
                                                                                      s(
                                                                                          () => [
                                                                                              T(
                                                                                                  b(
                                                                                                      W,
                                                                                                  ),
                                                                                                  {
                                                                                                      scope: `row`,
                                                                                                      class: P(
                                                                                                          $,
                                                                                                      ),
                                                                                                  },
                                                                                                  {
                                                                                                      default:
                                                                                                          s(
                                                                                                              () => [
                                                                                                                  ...(n[8] ||=
                                                                                                                      [
                                                                                                                          O(
                                                                                                                              ` Links created `,
                                                                                                                              -1,
                                                                                                                          ),
                                                                                                                      ]),
                                                                                                              ],
                                                                                                          ),
                                                                                                      _: 1,
                                                                                                  },
                                                                                              ),
                                                                                              (N(),
                                                                                              M(
                                                                                                  k,
                                                                                                  null,
                                                                                                  j(
                                                                                                      a,
                                                                                                      (
                                                                                                          t,
                                                                                                      ) =>
                                                                                                          T(
                                                                                                              b(
                                                                                                                  V,
                                                                                                              ),
                                                                                                              {
                                                                                                                  key: t.key,
                                                                                                                  class: P(
                                                                                                                      [
                                                                                                                          Q,
                                                                                                                          c.value ===
                                                                                                                              t.key &&
                                                                                                                              `bg-primary/5`,
                                                                                                                      ],
                                                                                                                  ),
                                                                                                              },
                                                                                                              {
                                                                                                                  default:
                                                                                                                      s(
                                                                                                                          () => [
                                                                                                                              O(
                                                                                                                                  F(
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
                                                                          T(
                                                                              b(
                                                                                  K,
                                                                              ),
                                                                              null,
                                                                              {
                                                                                  default:
                                                                                      s(
                                                                                          () => [
                                                                                              T(
                                                                                                  b(
                                                                                                      W,
                                                                                                  ),
                                                                                                  {
                                                                                                      scope: `row`,
                                                                                                      class: P(
                                                                                                          $,
                                                                                                      ),
                                                                                                  },
                                                                                                  {
                                                                                                      default:
                                                                                                          s(
                                                                                                              () => [
                                                                                                                  ...(n[9] ||=
                                                                                                                      [
                                                                                                                          O(
                                                                                                                              ` Completed rate `,
                                                                                                                              -1,
                                                                                                                          ),
                                                                                                                      ]),
                                                                                                              ],
                                                                                                          ),
                                                                                                      _: 1,
                                                                                                  },
                                                                                              ),
                                                                                              (N(),
                                                                                              M(
                                                                                                  k,
                                                                                                  null,
                                                                                                  j(
                                                                                                      a,
                                                                                                      (
                                                                                                          t,
                                                                                                      ) =>
                                                                                                          T(
                                                                                                              b(
                                                                                                                  V,
                                                                                                              ),
                                                                                                              {
                                                                                                                  key: t.key,
                                                                                                                  class: P(
                                                                                                                      [
                                                                                                                          Q,
                                                                                                                          c.value ===
                                                                                                                              t.key &&
                                                                                                                              `bg-primary/5`,
                                                                                                                      ],
                                                                                                                  ),
                                                                                                              },
                                                                                                              {
                                                                                                                  default:
                                                                                                                      s(
                                                                                                                          () => [
                                                                                                                              O(
                                                                                                                                  F(
                                                                                                                                      b(
                                                                                                                                          z,
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
                                                                          T(
                                                                              b(
                                                                                  K,
                                                                              ),
                                                                              null,
                                                                              {
                                                                                  default:
                                                                                      s(
                                                                                          () => [
                                                                                              T(
                                                                                                  b(
                                                                                                      W,
                                                                                                  ),
                                                                                                  {
                                                                                                      scope: `row`,
                                                                                                      class: P(
                                                                                                          $,
                                                                                                      ),
                                                                                                  },
                                                                                                  {
                                                                                                      default:
                                                                                                          s(
                                                                                                              () => [
                                                                                                                  ...(n[10] ||=
                                                                                                                      [
                                                                                                                          O(
                                                                                                                              ` Failed `,
                                                                                                                              -1,
                                                                                                                          ),
                                                                                                                      ]),
                                                                                                              ],
                                                                                                          ),
                                                                                                      _: 1,
                                                                                                  },
                                                                                              ),
                                                                                              (N(),
                                                                                              M(
                                                                                                  k,
                                                                                                  null,
                                                                                                  j(
                                                                                                      a,
                                                                                                      (
                                                                                                          t,
                                                                                                      ) =>
                                                                                                          T(
                                                                                                              b(
                                                                                                                  V,
                                                                                                              ),
                                                                                                              {
                                                                                                                  key: t.key,
                                                                                                                  class: P(
                                                                                                                      [
                                                                                                                          Q,
                                                                                                                          c.value ===
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
                                                                                                                      s(
                                                                                                                          () => [
                                                                                                                              O(
                                                                                                                                  F(
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
                                                                          (N(
                                                                              !0,
                                                                          ),
                                                                          M(
                                                                              k,
                                                                              null,
                                                                              j(
                                                                                  te.value,
                                                                                  (
                                                                                      t,
                                                                                  ) => (
                                                                                      N(),
                                                                                      f(
                                                                                          b(
                                                                                              K,
                                                                                          ),
                                                                                          {
                                                                                              key: t,
                                                                                          },
                                                                                          {
                                                                                              default:
                                                                                                  s(
                                                                                                      () => [
                                                                                                          T(
                                                                                                              b(
                                                                                                                  W,
                                                                                                              ),
                                                                                                              {
                                                                                                                  scope: `row`,
                                                                                                                  class: P(
                                                                                                                      $,
                                                                                                                  ),
                                                                                                              },
                                                                                                              {
                                                                                                                  default:
                                                                                                                      s(
                                                                                                                          () => [
                                                                                                                              O(
                                                                                                                                  ` Paid ` +
                                                                                                                                      F(
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
                                                                                                          (N(),
                                                                                                          M(
                                                                                                              k,
                                                                                                              null,
                                                                                                              j(
                                                                                                                  a,
                                                                                                                  (
                                                                                                                      n,
                                                                                                                  ) =>
                                                                                                                      T(
                                                                                                                          b(
                                                                                                                              V,
                                                                                                                          ),
                                                                                                                          {
                                                                                                                              key: n.key,
                                                                                                                              class: P(
                                                                                                                                  [
                                                                                                                                      Q,
                                                                                                                                      c.value ===
                                                                                                                                          n.key &&
                                                                                                                                          `bg-primary/5`,
                                                                                                                                  ],
                                                                                                                              ),
                                                                                                                          },
                                                                                                                          {
                                                                                                                              default:
                                                                                                                                  s(
                                                                                                                                      () => [
                                                                                                                                          O(
                                                                                                                                              F(
                                                                                                                                                  b(
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
                                                                          T(
                                                                              b(
                                                                                  K,
                                                                              ),
                                                                              null,
                                                                              {
                                                                                  default:
                                                                                      s(
                                                                                          () => [
                                                                                              T(
                                                                                                  b(
                                                                                                      W,
                                                                                                  ),
                                                                                                  {
                                                                                                      scope: `row`,
                                                                                                      class: P(
                                                                                                          $,
                                                                                                      ),
                                                                                                  },
                                                                                                  {
                                                                                                      default:
                                                                                                          s(
                                                                                                              () => [
                                                                                                                  ...(n[11] ||=
                                                                                                                      [
                                                                                                                          O(
                                                                                                                              ` Payments `,
                                                                                                                              -1,
                                                                                                                          ),
                                                                                                                      ]),
                                                                                                              ],
                                                                                                          ),
                                                                                                      _: 1,
                                                                                                  },
                                                                                              ),
                                                                                              (N(),
                                                                                              M(
                                                                                                  k,
                                                                                                  null,
                                                                                                  j(
                                                                                                      a,
                                                                                                      (
                                                                                                          t,
                                                                                                      ) =>
                                                                                                          T(
                                                                                                              b(
                                                                                                                  V,
                                                                                                              ),
                                                                                                              {
                                                                                                                  key: t.key,
                                                                                                                  class: P(
                                                                                                                      [
                                                                                                                          Q,
                                                                                                                          c.value ===
                                                                                                                              t.key &&
                                                                                                                              `bg-primary/5`,
                                                                                                                      ],
                                                                                                                  ),
                                                                                                              },
                                                                                                              {
                                                                                                                  default:
                                                                                                                      s(
                                                                                                                          () => [
                                                                                                                              O(
                                                                                                                                  F(
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
                            T(
                                b(_e),
                                {
                                    as: `section`,
                                    class: `overflow-hidden rounded-xl border border-border/70 bg-card shadow-sm`,
                                    'aria-labelledby': `pulls-title`,
                                },
                                {
                                    default: s(() => [
                                        S(`h2`, tt, [
                                            T(
                                                b(ye),
                                                { 'as-child': `` },
                                                {
                                                    default: s(() => [
                                                        S(`button`, nt, [
                                                            S(`span`, rt, [
                                                                S(
                                                                    `span`,
                                                                    {
                                                                        class: P(
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
                                                                    ? (N(),
                                                                      M(
                                                                          `span`,
                                                                          it,
                                                                          ` No pulls yet. `,
                                                                      ))
                                                                    : E(``, !0),
                                                            ]),
                                                            T(b(ge), {
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
                                            ? (N(),
                                              f(
                                                  b(ve),
                                                  { key: 0 },
                                                  {
                                                      default: s(() => [
                                                          S(`div`, at, [
                                                              T(b(U), null, {
                                                                  default: s(
                                                                      () => [
                                                                          T(
                                                                              b(
                                                                                  q,
                                                                              ),
                                                                              {
                                                                                  class: `sr-only`,
                                                                              },
                                                                              {
                                                                                  default:
                                                                                      s(
                                                                                          () => [
                                                                                              ...(n[12] ||=
                                                                                                  [
                                                                                                      O(
                                                                                                          ` The 10 most recent pulls, newest first. `,
                                                                                                          -1,
                                                                                                      ),
                                                                                                  ]),
                                                                                          ],
                                                                                      ),
                                                                                  _: 1,
                                                                              },
                                                                          ),
                                                                          T(
                                                                              b(
                                                                                  H,
                                                                              ),
                                                                              {
                                                                                  class: `bg-muted/40`,
                                                                              },
                                                                              {
                                                                                  default:
                                                                                      s(
                                                                                          () => [
                                                                                              T(
                                                                                                  b(
                                                                                                      K,
                                                                                                  ),
                                                                                                  {
                                                                                                      class: `hover:bg-transparent`,
                                                                                                  },
                                                                                                  {
                                                                                                      default:
                                                                                                          s(
                                                                                                              () => [
                                                                                                                  T(
                                                                                                                      b(
                                                                                                                          W,
                                                                                                                      ),
                                                                                                                      {
                                                                                                                          scope: `col`,
                                                                                                                          class: `px-4`,
                                                                                                                      },
                                                                                                                      {
                                                                                                                          default:
                                                                                                                              s(
                                                                                                                                  () => [
                                                                                                                                      ...(n[13] ||=
                                                                                                                                          [
                                                                                                                                              O(
                                                                                                                                                  `Time`,
                                                                                                                                                  -1,
                                                                                                                                              ),
                                                                                                                                          ]),
                                                                                                                                  ],
                                                                                                                              ),
                                                                                                                          _: 1,
                                                                                                                      },
                                                                                                                  ),
                                                                                                                  T(
                                                                                                                      b(
                                                                                                                          W,
                                                                                                                      ),
                                                                                                                      {
                                                                                                                          scope: `col`,
                                                                                                                          class: `px-4`,
                                                                                                                      },
                                                                                                                      {
                                                                                                                          default:
                                                                                                                              s(
                                                                                                                                  () => [
                                                                                                                                      ...(n[14] ||=
                                                                                                                                          [
                                                                                                                                              O(
                                                                                                                                                  `Result`,
                                                                                                                                                  -1,
                                                                                                                                              ),
                                                                                                                                          ]),
                                                                                                                                  ],
                                                                                                                              ),
                                                                                                                          _: 1,
                                                                                                                      },
                                                                                                                  ),
                                                                                                                  T(
                                                                                                                      b(
                                                                                                                          W,
                                                                                                                      ),
                                                                                                                      {
                                                                                                                          scope: `col`,
                                                                                                                          class: `px-4`,
                                                                                                                      },
                                                                                                                      {
                                                                                                                          default:
                                                                                                                              s(
                                                                                                                                  () => [
                                                                                                                                      ...(n[15] ||=
                                                                                                                                          [
                                                                                                                                              O(
                                                                                                                                                  ` How it started `,
                                                                                                                                                  -1,
                                                                                                                                              ),
                                                                                                                                          ]),
                                                                                                                                  ],
                                                                                                                              ),
                                                                                                                          _: 1,
                                                                                                                      },
                                                                                                                  ),
                                                                                                                  T(
                                                                                                                      b(
                                                                                                                          W,
                                                                                                                      ),
                                                                                                                      {
                                                                                                                          scope: `col`,
                                                                                                                          class: `px-4`,
                                                                                                                      },
                                                                                                                      {
                                                                                                                          default:
                                                                                                                              s(
                                                                                                                                  () => [
                                                                                                                                      ...(n[16] ||=
                                                                                                                                          [
                                                                                                                                              O(
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
                                                                          T(
                                                                              b(
                                                                                  se,
                                                                              ),
                                                                              null,
                                                                              {
                                                                                  default:
                                                                                      s(
                                                                                          () => [
                                                                                              (N(
                                                                                                  !0,
                                                                                              ),
                                                                                              M(
                                                                                                  k,
                                                                                                  null,
                                                                                                  j(
                                                                                                      e.pulls,
                                                                                                      (
                                                                                                          t,
                                                                                                      ) => (
                                                                                                          N(),
                                                                                                          f(
                                                                                                              b(
                                                                                                                  K,
                                                                                                              ),
                                                                                                              {
                                                                                                                  key: t.id,
                                                                                                                  class: P(
                                                                                                                      t.ok
                                                                                                                          ? `border-border/50`
                                                                                                                          : `border-danger-border/60 bg-danger-soft hover:bg-danger-soft`,
                                                                                                                  ),
                                                                                                              },
                                                                                                              {
                                                                                                                  default:
                                                                                                                      s(
                                                                                                                          () => [
                                                                                                                              T(
                                                                                                                                  b(
                                                                                                                                      V,
                                                                                                                                  ),
                                                                                                                                  {
                                                                                                                                      class: P(
                                                                                                                                          [
                                                                                                                                              `px-4 py-3 text-sm font-medium tabular-nums`,
                                                                                                                                              !t.ok &&
                                                                                                                                                  `shadow-[inset_3px_0_0_var(--color-danger)]`,
                                                                                                                                          ],
                                                                                                                                      ),
                                                                                                                                  },
                                                                                                                                  {
                                                                                                                                      default:
                                                                                                                                          s(
                                                                                                                                              () => [
                                                                                                                                                  T(
                                                                                                                                                      re,
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
                                                                                                                              T(
                                                                                                                                  b(
                                                                                                                                      V,
                                                                                                                                  ),
                                                                                                                                  {
                                                                                                                                      class: `px-4 py-3`,
                                                                                                                                  },
                                                                                                                                  {
                                                                                                                                      default:
                                                                                                                                          s(
                                                                                                                                              () => [
                                                                                                                                                  T(
                                                                                                                                                      b(
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
                                                                                                                                                              s(
                                                                                                                                                                  () => [
                                                                                                                                                                      O(
                                                                                                                                                                          F(
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
                                                                                                                              T(
                                                                                                                                  b(
                                                                                                                                      V,
                                                                                                                                  ),
                                                                                                                                  {
                                                                                                                                      class: `px-4 py-3 text-sm`,
                                                                                                                                  },
                                                                                                                                  {
                                                                                                                                      default:
                                                                                                                                          s(
                                                                                                                                              () => [
                                                                                                                                                  S(
                                                                                                                                                      `span`,
                                                                                                                                                      ot,
                                                                                                                                                      F(
                                                                                                                                                          ie[
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
                                                                                                                              T(
                                                                                                                                  b(
                                                                                                                                      V,
                                                                                                                                  ),
                                                                                                                                  {
                                                                                                                                      class: P(
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
                                                                                                                                          s(
                                                                                                                                              () => [
                                                                                                                                                  O(
                                                                                                                                                      F(
                                                                                                                                                          J(
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
                                            : E(``, !0),
                                    ]),
                                    _: 1,
                                },
                            ),
                            e.deployment.windows && _.value
                                ? (N(),
                                  M(
                                      `p`,
                                      st,
                                      ` A link made yesterday and paid today counts in yesterday's links and in today's money, so the completed links and the payments of a window can differ. `,
                                  ))
                                : E(``, !0),
                        ]),
                    ],
                    64,
                )
            );
        },
    });
export { lt as default };
