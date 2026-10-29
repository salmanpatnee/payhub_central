import {
    Pn as e,
    _ as t,
    ar as n,
    at as r,
    f as i,
    gt as a,
    hr as o,
    it as s,
    mt as c,
    ot as l,
    p as u,
    pt as d,
    q as f,
    r as p,
    rt as m,
    sn as h,
    st as g,
    tn as _,
    vr as v,
    xr as y,
} from './wayfinder-DOENF6-v.js';
import { n as b, t as x } from './formatPercent-DtsaA4u_.js';
import { t as S } from './inbox-BXA07aQU.js';
import { d as C, s as w, x as T } from './app-B5f9dLA_.js';
import { i as E } from './formatRelative-D-S37FvD.js';
import {
    a as D,
    i as O,
    n as k,
    o as ee,
    r as A,
    s as j,
    t as M,
} from './TableRow-Cik-p-BP.js';
import { t as N } from './Card-yrm-h8z5.js';
import { n as P, t as F } from './deploymentStatus-DAZueO0e.js';
import { t as I } from './EmptyState-D52fbywp.js';
import { t as L } from './PageHeader-aqdbQGDc.js';
function R({ links: e }) {
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
    Q = a({
        __name: `DeploymentCard`,
        props: { card: {}, period: {}, periodLabel: {}, emptyLine: {} },
        setup(t) {
            let n = t,
                i = m(() => F(n.card.state)),
                a = m(() => n.card.periods?.[n.period] ?? null),
                p = m(() => (a.value ? R(a.value) : [])),
                S = m(() =>
                    a.value
                        ? [
                              ...new Set([
                                  ...Object.keys(a.value.completed),
                                  ...Object.keys(a.value.pending),
                              ]),
                          ]
                              .map((e) => ({
                                  paidCents: a.value?.completed[e] ?? 0,
                                  pendingCents: a.value?.pending[e] ?? 0,
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
                C = m(() => {
                    if (!a.value) return [];
                    let { links: e } = a.value;
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
                            hint: `${x(e.completed, e.total)} of links`,
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
                            hint: `${x(e.failed, e.total)} of links`,
                            danger: e.failed > 0,
                        },
                    ];
                }),
                w = m(() => {
                    let e = a.value?.paidCount ?? 0;
                    return `${e} ${e === 1 ? `payment` : `payments`}`;
                }),
                I = m(() => P(n.card.state, n.card.reason, a.value !== null));
            return (n, m) => (
                _(),
                r(
                    o(N),
                    { class: `gap-0 rounded-xl border-border/70 p-0` },
                    {
                        default: e(() => [
                            s(`div`, z, [
                                s(`div`, B, [
                                    s(`h2`, V, [
                                        c(
                                            o(u),
                                            {
                                                href: t.card.href,
                                                class: `rounded-sm hover:underline focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:outline-none`,
                                            },
                                            {
                                                default: e(() => [
                                                    d(y(t.card.name), 1),
                                                ]),
                                                _: 1,
                                            },
                                            8,
                                            [`href`],
                                        ),
                                    ]),
                                    t.card.domain
                                        ? (_(), g(`p`, H, y(t.card.domain), 1))
                                        : l(``, !0),
                                ]),
                                i.value
                                    ? (_(),
                                      r(
                                          o(j),
                                          { key: 0, variant: i.value.variant },
                                          {
                                              default: e(() => [
                                                  d(y(i.value.label), 1),
                                              ]),
                                              _: 1,
                                          },
                                          8,
                                          [`variant`],
                                      ))
                                    : l(``, !0),
                            ]),
                            a.value
                                ? (_(),
                                  g(
                                      f,
                                      { key: 1 },
                                      [
                                          s(`dl`, W, [
                                              (_(!0),
                                              g(
                                                  f,
                                                  null,
                                                  h(
                                                      C.value,
                                                      (e, t) => (
                                                          _(),
                                                          g(
                                                              `div`,
                                                              {
                                                                  key: e.label,
                                                                  class: v([
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
                                                                  s(
                                                                      `dd`,
                                                                      {
                                                                          class: v(
                                                                              [
                                                                                  `text-xl font-semibold tracking-tight tabular-nums`,
                                                                                  e.danger
                                                                                      ? `text-danger`
                                                                                      : ``,
                                                                              ],
                                                                          ),
                                                                      },
                                                                      y(
                                                                          e.value,
                                                                      ),
                                                                      3,
                                                                  ),
                                                                  s(
                                                                      `dt`,
                                                                      G,
                                                                      y(
                                                                          e.label,
                                                                      ),
                                                                      1,
                                                                  ),
                                                                  e.hint
                                                                      ? (_(),
                                                                        g(
                                                                            `p`,
                                                                            K,
                                                                            y(
                                                                                e.hint,
                                                                            ),
                                                                            1,
                                                                        ))
                                                                      : l(
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
                                          s(`div`, q, [
                                              S.value.length === 0
                                                  ? (_(),
                                                    g(
                                                        `p`,
                                                        J,
                                                        y(t.emptyLine),
                                                        1,
                                                    ))
                                                  : (_(),
                                                    r(
                                                        o(ee),
                                                        { key: 1 },
                                                        {
                                                            default: e(() => [
                                                                c(o(k), null, {
                                                                    default: e(
                                                                        () => [
                                                                            c(
                                                                                o(
                                                                                    M,
                                                                                ),
                                                                                null,
                                                                                {
                                                                                    default:
                                                                                        e(
                                                                                            () => [
                                                                                                c(
                                                                                                    o(
                                                                                                        A,
                                                                                                    ),
                                                                                                    {
                                                                                                        class: `pl-4`,
                                                                                                    },
                                                                                                    {
                                                                                                        default:
                                                                                                            e(
                                                                                                                () => [
                                                                                                                    d(
                                                                                                                        y(
                                                                                                                            t.periodLabel,
                                                                                                                        ),
                                                                                                                        1,
                                                                                                                    ),
                                                                                                                ],
                                                                                                            ),
                                                                                                        _: 1,
                                                                                                    },
                                                                                                ),
                                                                                                c(
                                                                                                    o(
                                                                                                        A,
                                                                                                    ),
                                                                                                    {
                                                                                                        class: `text-right`,
                                                                                                    },
                                                                                                    {
                                                                                                        default:
                                                                                                            e(
                                                                                                                () => [
                                                                                                                    ...(m[0] ||=
                                                                                                                        [
                                                                                                                            d(
                                                                                                                                `Paid`,
                                                                                                                                -1,
                                                                                                                            ),
                                                                                                                        ]),
                                                                                                                ],
                                                                                                            ),
                                                                                                        _: 1,
                                                                                                    },
                                                                                                ),
                                                                                                c(
                                                                                                    o(
                                                                                                        A,
                                                                                                    ),
                                                                                                    {
                                                                                                        class: `pr-4 text-right`,
                                                                                                    },
                                                                                                    {
                                                                                                        default:
                                                                                                            e(
                                                                                                                () => [
                                                                                                                    ...(m[1] ||=
                                                                                                                        [
                                                                                                                            d(
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
                                                                c(o(D), null, {
                                                                    default: e(
                                                                        () => [
                                                                            (_(
                                                                                !0,
                                                                            ),
                                                                            g(
                                                                                f,
                                                                                null,
                                                                                h(
                                                                                    S.value,
                                                                                    (
                                                                                        t,
                                                                                    ) => (
                                                                                        _(),
                                                                                        r(
                                                                                            o(
                                                                                                M,
                                                                                            ),
                                                                                            {
                                                                                                key: t.code,
                                                                                            },
                                                                                            {
                                                                                                default:
                                                                                                    e(
                                                                                                        () => [
                                                                                                            c(
                                                                                                                o(
                                                                                                                    O,
                                                                                                                ),
                                                                                                                {
                                                                                                                    class: `pl-4 text-xs font-semibold tracking-wider text-muted-foreground uppercase`,
                                                                                                                },
                                                                                                                {
                                                                                                                    default:
                                                                                                                        e(
                                                                                                                            () => [
                                                                                                                                d(
                                                                                                                                    y(
                                                                                                                                        t
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
                                                                                                            c(
                                                                                                                o(
                                                                                                                    O,
                                                                                                                ),
                                                                                                                {
                                                                                                                    class: `text-right text-sm font-medium tabular-nums`,
                                                                                                                },
                                                                                                                {
                                                                                                                    default:
                                                                                                                        e(
                                                                                                                            () => [
                                                                                                                                d(
                                                                                                                                    y(
                                                                                                                                        t
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
                                                                                                            c(
                                                                                                                o(
                                                                                                                    O,
                                                                                                                ),
                                                                                                                {
                                                                                                                    class: `pr-4 text-right text-sm tabular-nums`,
                                                                                                                },
                                                                                                                {
                                                                                                                    default:
                                                                                                                        e(
                                                                                                                            () => [
                                                                                                                                d(
                                                                                                                                    y(
                                                                                                                                        t
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
                                : (_(), g(`p`, U, ` No data yet `)),
                            t.card.updatedAt || p.value.length || I.value.length
                                ? (_(),
                                  g(`div`, Y, [
                                      t.card.updatedAt
                                          ? (_(),
                                            g(`div`, X, [
                                                s(`p`, null, [
                                                    (m[2] ||= d(
                                                        ` Last updated `,
                                                        -1,
                                                    )),
                                                    c(
                                                        b,
                                                        {
                                                            at: t.card
                                                                .updatedAt,
                                                            timezone:
                                                                t.card.timezone,
                                                        },
                                                        null,
                                                        8,
                                                        [`at`, `timezone`],
                                                    ),
                                                ]),
                                                s(`p`, null, y(w.value), 1),
                                            ]))
                                          : l(``, !0),
                                      p.value.length
                                          ? (_(),
                                            g(`ul`, Z, [
                                                (_(!0),
                                                g(
                                                    f,
                                                    null,
                                                    h(
                                                        p.value,
                                                        (e) => (
                                                            _(),
                                                            g(
                                                                `li`,
                                                                {
                                                                    key: e,
                                                                    class: `inline-flex items-center gap-1 rounded-full bg-warning-soft px-2 py-0.5 font-medium text-warning ring-1 ring-warning-border ring-inset`,
                                                                },
                                                                [
                                                                    c(o(T), {
                                                                        class: `size-3`,
                                                                        'aria-hidden': `true`,
                                                                    }),
                                                                    d(
                                                                        ` ` +
                                                                            y(
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
                                          : l(``, !0),
                                      (_(!0),
                                      g(
                                          f,
                                          null,
                                          h(
                                              I.value,
                                              (e) => (
                                                  _(),
                                                  g(`p`, { key: e }, y(e), 1)
                                              ),
                                          ),
                                          128,
                                      )),
                                  ]))
                                : l(``, !0),
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
    ae = a({
        layout: { breadcrumbs: [{ title: `Home`, href: C() }] },
        __name: `Dashboard`,
        props: { deployments: {} },
        setup(a) {
            let l = [
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
                v = n(`thisMonth`),
                b = m(() => l.find((e) => e.key === v.value) ?? l[1]);
            return (
                t(6e4, { only: [`deployments`] }),
                (t, n) => (
                    _(),
                    g(
                        f,
                        null,
                        [
                            c(o(i), { title: `Home` }),
                            s(`div`, te, [
                                c(L, {
                                    title: `Home`,
                                    description: `Payment numbers from every PayHub deployment, in one place.`,
                                }),
                                a.deployments.length === 0
                                    ? (_(),
                                      r(
                                          I,
                                          {
                                              key: 0,
                                              icon: o(S),
                                              title: `No deployments yet`,
                                              description: `Once a PayHub deployment is added, its payment numbers will show up here.`,
                                          },
                                          {
                                              actions: e(() => [
                                                  c(
                                                      o(p),
                                                      { 'as-child': `` },
                                                      {
                                                          default: e(() => [
                                                              c(
                                                                  o(u),
                                                                  {
                                                                      href: o(
                                                                          w,
                                                                      )(),
                                                                  },
                                                                  {
                                                                      default:
                                                                          e(
                                                                              () => [
                                                                                  ...(n[0] ||=
                                                                                      [
                                                                                          d(
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
                                    : (_(),
                                      g(
                                          f,
                                          { key: 1 },
                                          [
                                              s(`div`, $, [
                                                  s(`div`, ne, [
                                                      (_(),
                                                      g(
                                                          f,
                                                          null,
                                                          h(l, (e) =>
                                                              s(
                                                                  `button`,
                                                                  {
                                                                      key: e.key,
                                                                      type: `button`,
                                                                      'aria-pressed':
                                                                          v.value ===
                                                                          e.key,
                                                                      class: `flex-1 rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:outline-none aria-pressed:bg-card aria-pressed:text-foreground aria-pressed:shadow-sm sm:flex-none`,
                                                                      onClick: (
                                                                          t,
                                                                      ) =>
                                                                          (v.value =
                                                                              e.key),
                                                                  },
                                                                  y(e.label),
                                                                  9,
                                                                  re,
                                                              ),
                                                          ),
                                                          64,
                                                      )),
                                                  ]),
                                              ]),
                                              s(`div`, ie, [
                                                  (_(!0),
                                                  g(
                                                      f,
                                                      null,
                                                      h(
                                                          a.deployments,
                                                          (e) => (
                                                              _(),
                                                              r(
                                                                  Q,
                                                                  {
                                                                      key: e.id,
                                                                      card: e,
                                                                      period: v.value,
                                                                      'period-label':
                                                                          b
                                                                              .value
                                                                              .label,
                                                                      'empty-line':
                                                                          b
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
                                              (n[1] ||= s(
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
