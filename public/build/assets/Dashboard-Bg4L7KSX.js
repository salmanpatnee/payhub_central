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
} from './wayfinder-BZPu7hPl.js';
import { n as y, t as b } from './formatPercent-C2UIZrJR.js';
import { t as x } from './inbox-DWr_PkQC.js';
import { S, d as C, p as w, s as T } from './app-CPSAOrcH.js';
import { i as E } from './formatRelative-D-S37FvD.js';
import {
    a as D,
    i as O,
    n as k,
    o as ee,
    r as A,
    s as j,
    t as M,
} from './TableRow-C0myH0NN.js';
import { t as N } from './Card-G-5AElBS.js';
import { n as P, t as F } from './deploymentStatus-DAZueO0e.js';
import { t as I } from './EmptyState-s-EDe2hW.js';
import { t as L } from './PageHeader-D9oPzwwI.js';
function R({ links: e }) {
    let t = [];
    return (
        e.failed >= 3 &&
            e.failed >= e.total * 0.05 &&
            t.push(`${b(e.failed, e.total)} of links failed`),
        e.expired >= 3 &&
            e.expired >= e.pending * 0.25 &&
            t.push(`${e.expired} of ${e.pending} pending links expired`),
        t
    );
}
var z = { class: `flex items-start justify-between gap-2 p-4 pb-3` },
    B = { class: `min-w-0` },
    V = { class: `text-base font-semibold tracking-tight break-words` },
    H = { key: 0, class: `text-xs break-all text-muted-foreground` },
    U = {
        key: 0,
        class: `border-t border-border/50 p-4 text-sm text-muted-foreground`,
    },
    W = { class: `grid grid-cols-2 border-t border-border/50 xl:grid-cols-4` },
    G = {
        class: `text-[11px] font-semibold tracking-widest text-muted-foreground uppercase`,
    },
    K = { key: 0, class: `text-xs text-muted-foreground` },
    q = { class: `border-t border-border/50` },
    J = { key: 0, class: `p-4 text-sm text-muted-foreground` },
    Y = {
        key: 2,
        class: `space-y-2 border-t border-border/50 p-4 py-3 text-xs text-muted-foreground`,
    },
    X = {
        key: 0,
        class: `flex flex-wrap items-center justify-between gap-x-4`,
    },
    Z = { key: 1, class: `flex flex-wrap gap-2` },
    Q = u({
        __name: `DeploymentCard`,
        props: { card: {}, period: {}, periodLabel: {}, emptyLine: {} },
        setup(a) {
            let l = a,
                u = m(() => F(l.card.state)),
                d = m(() => l.card.periods?.[l.period] ?? null),
                x = m(() => (d.value ? R(d.value) : [])),
                C = m(() =>
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
                                  paid: E(e.paidCents, e.code),
                                  pending: E(e.pendingCents, e.code),
                              }))
                              .sort((e, t) =>
                                  e.paid.code.localeCompare(t.paid.code),
                              )
                        : [],
                ),
                w = m(() => {
                    if (!d.value) return [];
                    let { links: e } = d.value;
                    return [
                        {
                            label: `Links`,
                            value: e.total,
                            hint: ``,
                            danger: !1,
                        },
                        {
                            label: `Completed`,
                            value: e.completed,
                            hint: `${b(e.completed, e.total)} of links`,
                            danger: !1,
                        },
                        {
                            label: `Pending`,
                            value: e.pending,
                            hint:
                                e.expired > 0
                                    ? `${e.expired} expired`
                                    : `none expired`,
                            danger: !1,
                        },
                        {
                            label: `Failed`,
                            value: e.failed,
                            hint: `${b(e.failed, e.total)} of links`,
                            danger: e.failed > 0,
                        },
                    ];
                }),
                T = m(() => {
                    let e = d.value?.paidCount ?? 0;
                    return `${e} ${e === 1 ? `payment` : `payments`}`;
                }),
                I = m(() => P(l.card.state, l.card.reason, d.value !== null));
            return (l, m) => (
                o(),
                f(
                    p(N),
                    { class: `gap-0 rounded-xl border-border/70 p-0` },
                    {
                        default: t(() => [
                            v(`div`, z, [
                                v(`div`, B, [
                                    v(`h2`, V, [
                                        _(
                                            p(s),
                                            {
                                                href: a.card.href,
                                                class: `rounded-sm hover:underline focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:outline-none`,
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
                                    a.card.domain
                                        ? (o(), g(`p`, H, i(a.card.domain), 1))
                                        : r(``, !0),
                                ]),
                                u.value
                                    ? (o(),
                                      f(
                                          p(j),
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
                            ]),
                            d.value
                                ? (o(),
                                  g(
                                      e,
                                      { key: 1 },
                                      [
                                          v(`dl`, W, [
                                              (o(!0),
                                              g(
                                                  e,
                                                  null,
                                                  h(
                                                      w.value,
                                                      (e, t) => (
                                                          o(),
                                                          g(
                                                              `div`,
                                                              {
                                                                  key: e.label,
                                                                  class: n([
                                                                      `border-border/50 p-4 py-3`,
                                                                      [
                                                                          t %
                                                                              2 ==
                                                                          0
                                                                              ? `border-r`
                                                                              : ``,
                                                                          t < 2
                                                                              ? `border-b xl:border-b-0`
                                                                              : ``,
                                                                          t < 3
                                                                              ? `xl:border-r`
                                                                              : `xl:border-r-0`,
                                                                      ],
                                                                  ]),
                                                              },
                                                              [
                                                                  v(
                                                                      `dd`,
                                                                      {
                                                                          class: n(
                                                                              [
                                                                                  `text-xl font-semibold tracking-tight tabular-nums`,
                                                                                  e.danger
                                                                                      ? `text-danger`
                                                                                      : ``,
                                                                              ],
                                                                          ),
                                                                      },
                                                                      i(
                                                                          e.value,
                                                                      ),
                                                                      3,
                                                                  ),
                                                                  v(
                                                                      `dt`,
                                                                      G,
                                                                      i(
                                                                          e.label,
                                                                      ),
                                                                      1,
                                                                  ),
                                                                  e.hint
                                                                      ? (o(),
                                                                        g(
                                                                            `p`,
                                                                            K,
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
                                          v(`div`, q, [
                                              C.value.length === 0
                                                  ? (o(),
                                                    g(
                                                        `p`,
                                                        J,
                                                        i(a.emptyLine),
                                                        1,
                                                    ))
                                                  : (o(),
                                                    f(
                                                        p(ee),
                                                        { key: 1 },
                                                        {
                                                            default: t(() => [
                                                                _(p(k), null, {
                                                                    default: t(
                                                                        () => [
                                                                            _(
                                                                                p(
                                                                                    M,
                                                                                ),
                                                                                null,
                                                                                {
                                                                                    default:
                                                                                        t(
                                                                                            () => [
                                                                                                _(
                                                                                                    p(
                                                                                                        A,
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
                                                                                                        A,
                                                                                                    ),
                                                                                                    {
                                                                                                        class: `text-right`,
                                                                                                    },
                                                                                                    {
                                                                                                        default:
                                                                                                            t(
                                                                                                                () => [
                                                                                                                    ...(m[0] ||=
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
                                                                                                        A,
                                                                                                    ),
                                                                                                    {
                                                                                                        class: `pr-4 text-right`,
                                                                                                    },
                                                                                                    {
                                                                                                        default:
                                                                                                            t(
                                                                                                                () => [
                                                                                                                    ...(m[1] ||=
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
                                                                _(p(D), null, {
                                                                    default: t(
                                                                        () => [
                                                                            (o(
                                                                                !0,
                                                                            ),
                                                                            g(
                                                                                e,
                                                                                null,
                                                                                h(
                                                                                    C.value,
                                                                                    (
                                                                                        e,
                                                                                    ) => (
                                                                                        o(),
                                                                                        f(
                                                                                            p(
                                                                                                M,
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
                                                                                                                    O,
                                                                                                                ),
                                                                                                                {
                                                                                                                    class: `pl-4 text-xs font-semibold tracking-wider text-muted-foreground uppercase`,
                                                                                                                },
                                                                                                                {
                                                                                                                    default:
                                                                                                                        t(
                                                                                                                            () => [
                                                                                                                                c(
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
                                                                                                                    O,
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
                                                                                                                    O,
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
                                                        },
                                                    )),
                                          ]),
                                      ],
                                      64,
                                  ))
                                : (o(), g(`p`, U, ` No data yet `)),
                            a.card.updatedAt || x.value.length || I.value.length
                                ? (o(),
                                  g(`div`, Y, [
                                      a.card.updatedAt
                                          ? (o(),
                                            g(`div`, X, [
                                                v(`p`, null, [
                                                    (m[2] ||= c(
                                                        ` Last updated `,
                                                        -1,
                                                    )),
                                                    _(
                                                        y,
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
                                      x.value.length
                                          ? (o(),
                                            g(`ul`, Z, [
                                                (o(!0),
                                                g(
                                                    e,
                                                    null,
                                                    h(
                                                        x.value,
                                                        (e) => (
                                                            o(),
                                                            g(
                                                                `li`,
                                                                {
                                                                    key: e,
                                                                    class: `inline-flex items-center gap-1 rounded-full bg-warning-soft px-2 py-0.5 font-medium text-warning ring-1 ring-warning-border ring-inset`,
                                                                },
                                                                [
                                                                    _(p(S), {
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
                                              I.value,
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
    te = { class: `mx-auto w-full max-w-7xl space-y-6 p-4 md:p-6` },
    $ = { class: `flex sm:justify-end` },
    ne = {
        role: `group`,
        'aria-label': `Period`,
        class: `inline-flex w-full rounded-lg bg-muted p-1 sm:w-auto`,
    },
    re = [`aria-pressed`, `onClick`],
    ie = { class: `grid grid-cols-1 gap-4 sm:grid-cols-2` },
    ae = u({
        layout: { breadcrumbs: [{ title: `Home`, href: C() }] },
        __name: `Dashboard`,
        props: { deployments: {} },
        setup(n) {
            let r = [
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
                u = d(`thisMonth`),
                y = m(() => r.find((e) => e.key === u.value) ?? r[1]);
            return (
                l(6e4, { only: [`deployments`] }),
                (l, d) => (
                    o(),
                    g(
                        e,
                        null,
                        [
                            _(p(a), { title: `Home` }),
                            v(`div`, te, [
                                _(L, {
                                    title: `Home`,
                                    description: `Payment numbers from every PayHub deployment, in one place.`,
                                }),
                                n.deployments.length === 0
                                    ? (o(),
                                      f(
                                          I,
                                          {
                                              key: 0,
                                              icon: p(x),
                                              title: `No deployments yet`,
                                              description: `Once a PayHub deployment is added, its payment numbers will show up here.`,
                                          },
                                          {
                                              actions: t(() => [
                                                  _(
                                                      p(w),
                                                      { 'as-child': `` },
                                                      {
                                                          default: t(() => [
                                                              _(
                                                                  p(s),
                                                                  {
                                                                      href: p(
                                                                          T,
                                                                      )(),
                                                                  },
                                                                  {
                                                                      default:
                                                                          t(
                                                                              () => [
                                                                                  ...(d[0] ||=
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
                                              v(`div`, $, [
                                                  v(`div`, ne, [
                                                      (o(),
                                                      g(
                                                          e,
                                                          null,
                                                          h(r, (e) =>
                                                              v(
                                                                  `button`,
                                                                  {
                                                                      key: e.key,
                                                                      type: `button`,
                                                                      'aria-pressed':
                                                                          u.value ===
                                                                          e.key,
                                                                      class: `flex-1 rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:outline-none aria-pressed:bg-card aria-pressed:text-foreground aria-pressed:shadow-sm sm:flex-none`,
                                                                      onClick: (
                                                                          t,
                                                                      ) =>
                                                                          (u.value =
                                                                              e.key),
                                                                  },
                                                                  i(e.label),
                                                                  9,
                                                                  re,
                                                              ),
                                                          ),
                                                          64,
                                                      )),
                                                  ]),
                                              ]),
                                              v(`div`, ie, [
                                                  (o(!0),
                                                  g(
                                                      e,
                                                      null,
                                                      h(
                                                          n.deployments,
                                                          (e) => (
                                                              o(),
                                                              f(
                                                                  Q,
                                                                  {
                                                                      key: e.id,
                                                                      card: e,
                                                                      period: u.value,
                                                                      'period-label':
                                                                          y
                                                                              .value
                                                                              .label,
                                                                      'empty-line':
                                                                          y
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
                                              (d[1] ||= v(
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
export { ae as default };
