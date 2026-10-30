import {
    K as e,
    Nn as t,
    _r as n,
    at as r,
    br as i,
    d as a,
    en as o,
    f as s,
    ft as c,
    g as l,
    ht as u,
    ir as d,
    it as f,
    mr as p,
    nt as m,
    on as h,
    ot as g,
    pt as _,
    rt as v,
    ut as y,
} from './wayfinder-BZPu7hPl.js';
import { n as b, t as x } from './formatPercent-DS8JK34D.js';
import { t as S } from './createLucideIcon-B933959x.js';
import { t as C } from './inbox-DWr_PkQC.js';
import { S as w, d as T, p as E, s as ee } from './app-DTu1UyN-.js';
import { i as D } from './formatRelative-D-S37FvD.js';
import {
    a as O,
    i as k,
    n as A,
    o as j,
    r as M,
    s as N,
    t as P,
} from './TableRow-IBlTE7rH.js';
import { t as F } from './Card-G-5AElBS.js';
import { n as I, t as L } from './deploymentStatus-DAZueO0e.js';
import { t as R } from './EmptyState-s-EDe2hW.js';
import { t as z } from './PageHeader-D9oPzwwI.js';
var B = S({
    name: `arrow-right`,
    size: 24,
    node: [
        [`path`, { d: `M5 12h14`, key: `1ays0h` }],
        [`path`, { d: `m12 5 7 7-7 7`, key: `xquz4c` }],
    ],
});
function V({ links: e }) {
    let t = [];
    return (
        e.failed >= 3 &&
            e.failed >= e.total * 0.05 &&
            t.push(`${x(e.failed, e.total)} of links failed`),
        e.expired >= 3 &&
            e.expired >= e.pending * 0.25 &&
            t.push(`${e.expired} of ${e.pending} pending links expired`),
        t
    );
}
var H = { class: `flex items-center gap-3` },
    U = { class: `min-w-0 flex-1` },
    W = { class: `text-lg font-semibold tracking-tight break-words` },
    G = {
        class: `grid size-9 shrink-0 place-items-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-brand group-hover:text-white`,
        'aria-hidden': `true`,
    },
    K = {
        key: 0,
        class: `rounded-xl bg-muted px-4 py-3 text-sm text-muted-foreground`,
    },
    q = { class: `grid grid-cols-2 gap-2 xl:grid-cols-4` },
    J = {
        class: `text-2xl leading-tight font-bold tracking-tight tabular-nums`,
    },
    Y = {
        class: `text-[11px] font-semibold tracking-widest uppercase opacity-85`,
    },
    te = { key: 0, class: `text-xs opacity-85` },
    X = {
        key: 0,
        class: `rounded-xl bg-muted px-4 py-3 text-sm text-muted-foreground`,
    },
    Z = { key: 1, class: `overflow-hidden rounded-xl border border-border` },
    Q = {
        class: `rounded-md bg-muted px-2 py-0.5 text-xs font-bold tracking-wider`,
    },
    ne = { key: 2, class: `space-y-2 text-xs text-muted-foreground` },
    re = {
        key: 0,
        class: `flex flex-wrap items-center justify-between gap-x-4`,
    },
    ie = { key: 1, class: `flex flex-wrap gap-2` },
    ae = u({
        __name: `DeploymentCard`,
        props: { card: {}, period: {}, periodLabel: {}, emptyLine: {} },
        setup(a) {
            let l = a,
                u = m(() => L(l.card.state)),
                d = m(() => l.card.periods?.[l.period] ?? null),
                y = m(() => (d.value ? V(d.value) : [])),
                S = m(() =>
                    d.value
                        ? [
                              ...new Set([
                                  ...Object.keys(d.value.completed),
                                  ...Object.keys(d.value.pending),
                              ]),
                          ]
                              .map((e) => ({
                                  paidCents: d.value?.completed[e] ?? 0,
                                  pendingCents: d.value?.pending[e] ?? 0,
                                  code: e,
                              }))
                              .filter(
                                  (e) => e.paidCents > 0 || e.pendingCents > 0,
                              )
                              .map((e) => ({
                                  code: e.code,
                                  paid: D(e.paidCents, e.code),
                                  pending: D(e.pendingCents, e.code),
                              }))
                              .sort((e, t) =>
                                  e.paid.code.localeCompare(t.paid.code),
                              )
                        : [],
                ),
                C = m(() => {
                    if (!d.value) return [];
                    let { links: e } = d.value;
                    return [
                        {
                            label: `Links`,
                            value: e.total,
                            hint: ``,
                            tone: `bg-info-soft text-info`,
                        },
                        {
                            label: `Completed`,
                            value: e.completed,
                            hint: `${x(e.completed, e.total)} of links`,
                            tone: `bg-success-soft text-success`,
                        },
                        {
                            label: `Pending`,
                            value: e.pending,
                            hint:
                                e.expired > 0
                                    ? `${e.expired} expired`
                                    : `none expired`,
                            tone: `bg-warning-soft text-warning`,
                        },
                        {
                            label: `Failed`,
                            value: e.failed,
                            hint: `${x(e.failed, e.total)} of links`,
                            tone: `bg-danger-soft text-danger`,
                        },
                    ];
                }),
                T = m(() => {
                    let e = d.value?.paidCount ?? 0;
                    return `${e} ${e === 1 ? `payment` : `payments`}`;
                }),
                E = m(() => I(l.card.state, l.card.reason, d.value !== null));
            return (l, m) => (
                o(),
                f(
                    p(F),
                    {
                        class: `group relative gap-3.5 rounded-2xl border-border/70 p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-brand/50 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0`,
                    },
                    {
                        default: t(() => [
                            v(`div`, H, [
                                v(`div`, U, [
                                    v(`h2`, W, [
                                        _(
                                            p(s),
                                            {
                                                href: a.card.href,
                                                class: `rounded-sm after:absolute after:inset-0 after:z-10 after:rounded-2xl after:content-[''] focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:outline-none`,
                                            },
                                            {
                                                default: t(() => [
                                                    c(i(a.card.name), 1),
                                                ]),
                                                _: 1,
                                            },
                                            8,
                                            [`href`],
                                        ),
                                    ]),
                                    (m[0] ||= v(
                                        `p`,
                                        {
                                            class: `text-xs text-muted-foreground`,
                                        },
                                        ` View deployment details `,
                                        -1,
                                    )),
                                ]),
                                u.value
                                    ? (o(),
                                      f(
                                          p(N),
                                          { key: 0, variant: u.value.variant },
                                          {
                                              default: t(() => [
                                                  c(i(u.value.label), 1),
                                              ]),
                                              _: 1,
                                          },
                                          8,
                                          [`variant`],
                                      ))
                                    : r(``, !0),
                                v(`span`, G, [
                                    _(p(B), {
                                        class: `size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none`,
                                    }),
                                ]),
                            ]),
                            d.value
                                ? (o(),
                                  g(
                                      e,
                                      { key: 1 },
                                      [
                                          v(`dl`, q, [
                                              (o(!0),
                                              g(
                                                  e,
                                                  null,
                                                  h(
                                                      C.value,
                                                      (e) => (
                                                          o(),
                                                          g(
                                                              `div`,
                                                              {
                                                                  key: e.label,
                                                                  class: n([
                                                                      `rounded-xl px-3 py-2.5`,
                                                                      e.tone,
                                                                  ]),
                                                              },
                                                              [
                                                                  v(
                                                                      `dd`,
                                                                      J,
                                                                      i(
                                                                          e.value,
                                                                      ),
                                                                      1,
                                                                  ),
                                                                  v(
                                                                      `dt`,
                                                                      Y,
                                                                      i(
                                                                          e.label,
                                                                      ),
                                                                      1,
                                                                  ),
                                                                  e.hint
                                                                      ? (o(),
                                                                        g(
                                                                            `p`,
                                                                            te,
                                                                            i(
                                                                                e.hint,
                                                                            ),
                                                                            1,
                                                                        ))
                                                                      : r(
                                                                            ``,
                                                                            !0,
                                                                        ),
                                                              ],
                                                              2,
                                                          )
                                                      ),
                                                  ),
                                                  128,
                                              )),
                                          ]),
                                          S.value.length === 0
                                              ? (o(),
                                                g(`p`, X, i(a.emptyLine), 1))
                                              : (o(),
                                                g(`div`, Z, [
                                                    _(p(j), null, {
                                                        default: t(() => [
                                                            _(p(A), null, {
                                                                default: t(
                                                                    () => [
                                                                        _(
                                                                            p(
                                                                                P,
                                                                            ),
                                                                            null,
                                                                            {
                                                                                default:
                                                                                    t(
                                                                                        () => [
                                                                                            _(
                                                                                                p(
                                                                                                    M,
                                                                                                ),
                                                                                                {
                                                                                                    class: `pl-4`,
                                                                                                },
                                                                                                {
                                                                                                    default:
                                                                                                        t(
                                                                                                            () => [
                                                                                                                c(
                                                                                                                    i(
                                                                                                                        a.periodLabel,
                                                                                                                    ),
                                                                                                                    1,
                                                                                                                ),
                                                                                                            ],
                                                                                                        ),
                                                                                                    _: 1,
                                                                                                },
                                                                                            ),
                                                                                            _(
                                                                                                p(
                                                                                                    M,
                                                                                                ),
                                                                                                {
                                                                                                    class: `text-right`,
                                                                                                },
                                                                                                {
                                                                                                    default:
                                                                                                        t(
                                                                                                            () => [
                                                                                                                ...(m[1] ||=
                                                                                                                    [
                                                                                                                        c(
                                                                                                                            `Paid`,
                                                                                                                            -1,
                                                                                                                        ),
                                                                                                                    ]),
                                                                                                            ],
                                                                                                        ),
                                                                                                    _: 1,
                                                                                                },
                                                                                            ),
                                                                                            _(
                                                                                                p(
                                                                                                    M,
                                                                                                ),
                                                                                                {
                                                                                                    class: `pr-4 text-right`,
                                                                                                },
                                                                                                {
                                                                                                    default:
                                                                                                        t(
                                                                                                            () => [
                                                                                                                ...(m[2] ||=
                                                                                                                    [
                                                                                                                        c(
                                                                                                                            ` Pending `,
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
                                                            }),
                                                            _(p(O), null, {
                                                                default: t(
                                                                    () => [
                                                                        (o(!0),
                                                                        g(
                                                                            e,
                                                                            null,
                                                                            h(
                                                                                S.value,
                                                                                (
                                                                                    e,
                                                                                ) => (
                                                                                    o(),
                                                                                    f(
                                                                                        p(
                                                                                            P,
                                                                                        ),
                                                                                        {
                                                                                            key: e.code,
                                                                                        },
                                                                                        {
                                                                                            default:
                                                                                                t(
                                                                                                    () => [
                                                                                                        _(
                                                                                                            p(
                                                                                                                k,
                                                                                                            ),
                                                                                                            {
                                                                                                                class: `pl-4`,
                                                                                                            },
                                                                                                            {
                                                                                                                default:
                                                                                                                    t(
                                                                                                                        () => [
                                                                                                                            v(
                                                                                                                                `span`,
                                                                                                                                Q,
                                                                                                                                i(
                                                                                                                                    e
                                                                                                                                        .paid
                                                                                                                                        .code,
                                                                                                                                ),
                                                                                                                                1,
                                                                                                                            ),
                                                                                                                        ],
                                                                                                                    ),
                                                                                                                _: 2,
                                                                                                            },
                                                                                                            1024,
                                                                                                        ),
                                                                                                        _(
                                                                                                            p(
                                                                                                                k,
                                                                                                            ),
                                                                                                            {
                                                                                                                class: `text-right text-sm font-medium tabular-nums`,
                                                                                                            },
                                                                                                            {
                                                                                                                default:
                                                                                                                    t(
                                                                                                                        () => [
                                                                                                                            c(
                                                                                                                                i(
                                                                                                                                    e
                                                                                                                                        .paid
                                                                                                                                        .amount,
                                                                                                                                ),
                                                                                                                                1,
                                                                                                                            ),
                                                                                                                        ],
                                                                                                                    ),
                                                                                                                _: 2,
                                                                                                            },
                                                                                                            1024,
                                                                                                        ),
                                                                                                        _(
                                                                                                            p(
                                                                                                                k,
                                                                                                            ),
                                                                                                            {
                                                                                                                class: `pr-4 text-right text-sm tabular-nums`,
                                                                                                            },
                                                                                                            {
                                                                                                                default:
                                                                                                                    t(
                                                                                                                        () => [
                                                                                                                            c(
                                                                                                                                i(
                                                                                                                                    e
                                                                                                                                        .pending
                                                                                                                                        .amount,
                                                                                                                                ),
                                                                                                                                1,
                                                                                                                            ),
                                                                                                                        ],
                                                                                                                    ),
                                                                                                                _: 2,
                                                                                                            },
                                                                                                            1024,
                                                                                                        ),
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
                                                                    ],
                                                                ),
                                                                _: 1,
                                                            }),
                                                        ]),
                                                        _: 1,
                                                    }),
                                                ])),
                                      ],
                                      64,
                                  ))
                                : (o(), g(`p`, K, ` No data yet `)),
                            a.card.updatedAt || y.value.length || E.value.length
                                ? (o(),
                                  g(`div`, ne, [
                                      a.card.updatedAt
                                          ? (o(),
                                            g(`div`, re, [
                                                v(`p`, null, [
                                                    (m[3] ||= c(
                                                        ` Last updated `,
                                                        -1,
                                                    )),
                                                    _(
                                                        b,
                                                        {
                                                            at: a.card
                                                                .updatedAt,
                                                            timezone:
                                                                a.card.timezone,
                                                        },
                                                        null,
                                                        8,
                                                        [`at`, `timezone`],
                                                    ),
                                                ]),
                                                v(`p`, null, i(T.value), 1),
                                            ]))
                                          : r(``, !0),
                                      y.value.length
                                          ? (o(),
                                            g(`ul`, ie, [
                                                (o(!0),
                                                g(
                                                    e,
                                                    null,
                                                    h(
                                                        y.value,
                                                        (e) => (
                                                            o(),
                                                            g(
                                                                `li`,
                                                                {
                                                                    key: e,
                                                                    class: `inline-flex items-center gap-1 rounded-full bg-warning-soft px-2 py-0.5 font-medium text-warning ring-1 ring-warning-border ring-inset`,
                                                                },
                                                                [
                                                                    _(p(w), {
                                                                        class: `size-3`,
                                                                        'aria-hidden': `true`,
                                                                    }),
                                                                    c(
                                                                        ` ` +
                                                                            i(
                                                                                e,
                                                                            ),
                                                                        1,
                                                                    ),
                                                                ],
                                                            )
                                                        ),
                                                    ),
                                                    128,
                                                )),
                                            ]))
                                          : r(``, !0),
                                      (o(!0),
                                      g(
                                          e,
                                          null,
                                          h(
                                              E.value,
                                              (e) => (
                                                  o(),
                                                  g(`p`, { key: e }, i(e), 1)
                                              ),
                                          ),
                                          128,
                                      )),
                                  ]))
                                : r(``, !0),
                        ]),
                        _: 1,
                    },
                )
            );
        },
    }),
    oe = { class: `mx-auto w-full max-w-7xl space-y-6 p-4 md:p-6` },
    $ = {
        role: `group`,
        'aria-label': `Period`,
        class: `inline-flex w-full gap-0.5 rounded-xl border border-border bg-card p-1 shadow-sm sm:w-auto`,
    },
    se = [`aria-pressed`, `onClick`],
    ce = {
        class: `grid grid-cols-1 gap-3.5 sm:grid-cols-[repeat(auto-fit,minmax(14rem,1fr))]`,
    },
    le = {
        class: `grid size-10 shrink-0 place-items-center rounded-xl bg-info-soft text-xs font-bold text-info`,
    },
    ue = { class: `min-w-0` },
    de = {
        class: `text-2xl leading-tight font-bold tracking-tight tabular-nums`,
    },
    fe = {
        class: `flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3.5 shadow-sm`,
    },
    pe = { class: `min-w-0` },
    me = {
        class: `text-2xl leading-tight font-bold tracking-tight tabular-nums`,
    },
    he = { class: `grid grid-cols-1 gap-4 lg:grid-cols-2` },
    ge = u({
        layout: { breadcrumbs: [{ title: `Dashboard`, href: T() }] },
        __name: `Dashboard`,
        props: { deployments: {} },
        setup(n) {
            let r = n,
                u = [
                    {
                        key: `today`,
                        label: `Today`,
                        empty: `No payments today`,
                    },
                    {
                        key: `thisMonth`,
                        label: `This month`,
                        empty: `No payments this month`,
                    },
                    {
                        key: `last30Days`,
                        label: `Last 30 days`,
                        empty: `No payments in the last 30 days`,
                    },
                ],
                b = d(`today`),
                x = m(() => u.find((e) => e.key === b.value) ?? u[0]),
                S = m(() => {
                    let e = {},
                        t = 0;
                    for (let n of r.deployments) {
                        let r = n.periods?.[b.value];
                        if (r) {
                            t += r.paidCount;
                            for (let [t, n] of Object.entries(r.completed))
                                e[t] = (e[t] ?? 0) + n;
                        }
                    }
                    return {
                        payments: t,
                        paid: Object.entries(e)
                            .map(([e, t]) => D(t, e))
                            .sort((e, t) => e.code.localeCompare(t.code)),
                    };
                });
            return (
                l(6e4, { only: [`deployments`] }),
                (r, l) => (
                    o(),
                    g(
                        e,
                        null,
                        [
                            _(p(a), { title: `Dashboard` }),
                            v(`div`, oe, [
                                _(
                                    z,
                                    { title: `Dashboard` },
                                    y({ _: 2 }, [
                                        n.deployments.length > 0
                                            ? {
                                                  name: `actions`,
                                                  fn: t(() => [
                                                      v(`div`, $, [
                                                          (o(),
                                                          g(
                                                              e,
                                                              null,
                                                              h(u, (e) =>
                                                                  v(
                                                                      `button`,
                                                                      {
                                                                          key: e.key,
                                                                          type: `button`,
                                                                          'aria-pressed':
                                                                              b.value ===
                                                                              e.key,
                                                                          class: `flex-1 rounded-lg px-4 py-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:outline-none aria-pressed:bg-linear-to-br aria-pressed:from-brand-from aria-pressed:to-brand-to aria-pressed:text-white aria-pressed:shadow-sm sm:flex-none`,
                                                                          onClick:
                                                                              (
                                                                                  t,
                                                                              ) =>
                                                                                  (b.value =
                                                                                      e.key),
                                                                      },
                                                                      i(
                                                                          e.label,
                                                                      ),
                                                                      9,
                                                                      se,
                                                                  ),
                                                              ),
                                                              64,
                                                          )),
                                                      ]),
                                                  ]),
                                                  key: `0`,
                                              }
                                            : void 0,
                                    ]),
                                    1024,
                                ),
                                n.deployments.length === 0
                                    ? (o(),
                                      f(
                                          R,
                                          {
                                              key: 0,
                                              icon: p(C),
                                              title: `No deployments yet`,
                                              description: `Once a PayHub deployment is added, its payment numbers will show up here.`,
                                          },
                                          {
                                              actions: t(() => [
                                                  _(
                                                      p(E),
                                                      { 'as-child': `` },
                                                      {
                                                          default: t(() => [
                                                              _(
                                                                  p(s),
                                                                  {
                                                                      href: p(
                                                                          ee,
                                                                      )(),
                                                                  },
                                                                  {
                                                                      default:
                                                                          t(
                                                                              () => [
                                                                                  ...(l[0] ||=
                                                                                      [
                                                                                          c(
                                                                                              `Add deployment`,
                                                                                              -1,
                                                                                          ),
                                                                                      ]),
                                                                              ],
                                                                          ),
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
                                              _: 1,
                                          },
                                          8,
                                          [`icon`],
                                      ))
                                    : (o(),
                                      g(
                                          e,
                                          { key: 1 },
                                          [
                                              v(`div`, ce, [
                                                  (o(!0),
                                                  g(
                                                      e,
                                                      null,
                                                      h(
                                                          S.value.paid,
                                                          (e) => (
                                                              o(),
                                                              g(
                                                                  `div`,
                                                                  {
                                                                      key: e.code,
                                                                      class: `flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3.5 shadow-sm`,
                                                                  },
                                                                  [
                                                                      v(
                                                                          `span`,
                                                                          le,
                                                                          i(
                                                                              e.code,
                                                                          ),
                                                                          1,
                                                                      ),
                                                                      v(
                                                                          `div`,
                                                                          ue,
                                                                          [
                                                                              (l[1] ||=
                                                                                  v(
                                                                                      `p`,
                                                                                      {
                                                                                          class: `text-xs text-muted-foreground`,
                                                                                      },
                                                                                      ` Paid, all deployments `,
                                                                                      -1,
                                                                                  )),
                                                                              v(
                                                                                  `p`,
                                                                                  de,
                                                                                  i(
                                                                                      e.amount,
                                                                                  ),
                                                                                  1,
                                                                              ),
                                                                          ],
                                                                      ),
                                                                  ],
                                                              )
                                                          ),
                                                      ),
                                                      128,
                                                  )),
                                                  v(`div`, fe, [
                                                      (l[3] ||= v(
                                                          `span`,
                                                          {
                                                              class: `grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-xs font-bold text-primary`,
                                                          },
                                                          ` # `,
                                                          -1,
                                                      )),
                                                      v(`div`, pe, [
                                                          (l[2] ||= v(
                                                              `p`,
                                                              {
                                                                  class: `text-xs text-muted-foreground`,
                                                              },
                                                              `Payments`,
                                                              -1,
                                                          )),
                                                          v(
                                                              `p`,
                                                              me,
                                                              i(
                                                                  S.value
                                                                      .payments,
                                                              ),
                                                              1,
                                                          ),
                                                      ]),
                                                  ]),
                                              ]),
                                              v(`div`, he, [
                                                  (o(!0),
                                                  g(
                                                      e,
                                                      null,
                                                      h(
                                                          n.deployments,
                                                          (e) => (
                                                              o(),
                                                              f(
                                                                  ae,
                                                                  {
                                                                      key: e.id,
                                                                      card: e,
                                                                      period: b.value,
                                                                      'period-label':
                                                                          x
                                                                              .value
                                                                              .label,
                                                                      'empty-line':
                                                                          x
                                                                              .value
                                                                              .empty,
                                                                  },
                                                                  null,
                                                                  8,
                                                                  [
                                                                      `card`,
                                                                      `period`,
                                                                      `period-label`,
                                                                      `empty-line`,
                                                                  ],
                                                              )
                                                          ),
                                                      ),
                                                      128,
                                                  )),
                                              ]),
                                              (l[4] ||= v(
                                                  `p`,
                                                  {
                                                      class: `text-xs text-muted-foreground`,
                                                  },
                                                  ` Links are counted by the date they were created. Money is counted by the date it was paid. Each currency is shown on its own. `,
                                                  -1,
                                              )),
                                          ],
                                          64,
                                      )),
                            ]),
                        ],
                        64,
                    )
                )
            );
        },
    });
export { ge as default };
