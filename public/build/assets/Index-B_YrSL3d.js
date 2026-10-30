import {
    K as e,
    Nn as t,
    Sr as n,
    Vt as r,
    at as i,
    br as a,
    d as o,
    en as s,
    f as c,
    ft as l,
    ht as u,
    ir as d,
    it as f,
    mr as p,
    on as m,
    ot as h,
    pt as g,
    rt as _,
    xn as v,
    zt as y,
} from './wayfinder-BZPu7hPl.js';
import {
    a as b,
    d as x,
    i as S,
    o as C,
    p as w,
    r as T,
    x as E,
} from './app-BodD7Qwi.js';
import { t as D } from './formatRelative-D-S37FvD.js';
import {
    a as O,
    i as k,
    n as A,
    o as j,
    r as M,
    s as N,
    t as P,
} from './TableRow-C0myH0NN.js';
import { t as F } from './TableCaption-M4KzGuv1.js';
import { t as I } from './EmptyState-s-EDe2hW.js';
import { t as L } from './PageHeader-D9oPzwwI.js';
import { t as R } from './Spinner-B65Ey6Ws.js';
import {
    a as z,
    i as B,
    n as V,
    o as H,
    r as U,
    t as W,
} from './dialog-CrsaE3vj.js';
var G = u({
        __name: `RemoveStaffDialog`,
        props: y(
            { name: {}, removeHref: {} },
            { open: { type: Boolean, default: !1 }, openModifiers: {} },
        ),
        emits: y([`missing`, `removed`], [`update:open`]),
        setup(e, { emit: r }) {
            let o = e,
                c = r,
                u = v(e, `open`),
                m = d(!1),
                h = d(!1);
            function y() {
                n.delete(o.removeHref, {
                    preserveState: !0,
                    onStart: () => (m.value = !0),
                    onSuccess: () => (h.value = !0),
                    onHttpException: (e) => {
                        if (e.status === 404) return (c(`missing`), !1);
                    },
                    onFinish: () => {
                        ((m.value = !1), (u.value = !1));
                    },
                });
            }
            function b(e) {
                h.value && (e.preventDefault(), (h.value = !1), c(`removed`));
            }
            return (n, r) => (
                s(),
                f(
                    p(H),
                    {
                        open: u.value,
                        'onUpdate:open': (r[1] ||= (e) => (u.value = e)),
                    },
                    {
                        default: t(() => [
                            g(
                                p(z),
                                { onCloseAutoFocus: b },
                                {
                                    default: t(() => [
                                        g(p(V), null, {
                                            default: t(() => [
                                                g(p(W), null, {
                                                    default: t(() => [
                                                        l(
                                                            `Remove ` +
                                                                a(e.name) +
                                                                `?`,
                                                            1,
                                                        ),
                                                    ]),
                                                    _: 1,
                                                }),
                                                g(
                                                    p(B),
                                                    { as: `div` },
                                                    {
                                                        default: t(() => [
                                                            ...(r[2] ||= [
                                                                _(
                                                                    `ul`,
                                                                    {
                                                                        class: `list-disc space-y-1 pl-5`,
                                                                    },
                                                                    [
                                                                        _(
                                                                            `li`,
                                                                            null,
                                                                            `The login is deleted and cannot be recovered.`,
                                                                        ),
                                                                        _(
                                                                            `li`,
                                                                            null,
                                                                            `They are signed out at once.`,
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
                                        g(p(U), null, {
                                            default: t(() => [
                                                g(
                                                    p(w),
                                                    {
                                                        variant: `outline`,
                                                        disabled: m.value,
                                                        onClick: (r[0] ||= (
                                                            e,
                                                        ) => (u.value = !1)),
                                                    },
                                                    {
                                                        default: t(() => [
                                                            ...(r[3] ||= [
                                                                l(
                                                                    ` Cancel `,
                                                                    -1,
                                                                ),
                                                            ]),
                                                        ]),
                                                        _: 1,
                                                    },
                                                    8,
                                                    [`disabled`],
                                                ),
                                                g(
                                                    p(w),
                                                    {
                                                        variant: `destructive`,
                                                        disabled: m.value,
                                                        onClick: y,
                                                    },
                                                    {
                                                        default: t(() => [
                                                            m.value
                                                                ? (s(),
                                                                  f(p(R), {
                                                                      key: 0,
                                                                  }))
                                                                : i(``, !0),
                                                            (r[4] ||= l(
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
    }),
    K = { class: `mx-auto w-full max-w-7xl space-y-6 p-4 md:p-6` },
    q = {
        key: 1,
        class: `overflow-hidden rounded-xl border border-border/70 bg-card shadow-sm`,
    },
    J = { class: `overflow-x-auto` },
    Y = { key: 0, class: `flex items-center justify-end gap-2` },
    X = u({
        layout: {
            breadcrumbs: [
                { title: `Dashboard`, href: x() },
                { title: `Staff`, href: C() },
            ],
        },
        __name: `Index`,
        props: { staff: {} },
        setup(u) {
            let v = d(null),
                y = d(!1);
            function x(e) {
                ((v.value = e), (y.value = !0));
            }
            function C() {
                n.reload({ only: [`staff`] });
            }
            function R() {
                r(() => {
                    let e = document.querySelector(`h1`);
                    (e?.setAttribute(`tabindex`, `-1`), e?.focus());
                });
            }
            return (n, r) => (
                s(),
                h(
                    e,
                    null,
                    [
                        g(p(o), { title: `Staff` }),
                        _(`div`, K, [
                            g(
                                L,
                                {
                                    title: `Staff`,
                                    description: `Everyone who can sign in to this dashboard.`,
                                },
                                {
                                    actions: t(() => [
                                        g(
                                            p(w),
                                            { 'as-child': `` },
                                            {
                                                default: t(() => [
                                                    g(
                                                        p(c),
                                                        { href: p(T)() },
                                                        {
                                                            default: t(() => [
                                                                ...(r[1] ||= [
                                                                    l(
                                                                        `Add staff`,
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
                                    _: 1,
                                },
                            ),
                            u.staff.length === 0
                                ? (s(),
                                  f(
                                      I,
                                      {
                                          key: 0,
                                          icon: p(E),
                                          title: `No staff yet.`,
                                          description: `Add a login for a colleague.`,
                                      },
                                      null,
                                      8,
                                      [`icon`],
                                  ))
                                : (s(),
                                  h(`section`, q, [
                                      _(`div`, J, [
                                          g(p(j), null, {
                                              default: t(() => [
                                                  g(
                                                      p(F),
                                                      { class: `sr-only` },
                                                      {
                                                          default: t(() => [
                                                              ...(r[2] ||= [
                                                                  l(
                                                                      ` Every login, by name. `,
                                                                      -1,
                                                                  ),
                                                              ]),
                                                          ]),
                                                          _: 1,
                                                      },
                                                  ),
                                                  g(
                                                      p(A),
                                                      { class: `bg-muted/40` },
                                                      {
                                                          default: t(() => [
                                                              g(
                                                                  p(P),
                                                                  {
                                                                      class: `hover:bg-transparent`,
                                                                  },
                                                                  {
                                                                      default:
                                                                          t(
                                                                              () => [
                                                                                  g(
                                                                                      p(
                                                                                          M,
                                                                                      ),
                                                                                      {
                                                                                          scope: `col`,
                                                                                          class: `px-4`,
                                                                                      },
                                                                                      {
                                                                                          default:
                                                                                              t(
                                                                                                  () => [
                                                                                                      ...(r[3] ||=
                                                                                                          [
                                                                                                              l(
                                                                                                                  `Name`,
                                                                                                                  -1,
                                                                                                              ),
                                                                                                          ]),
                                                                                                  ],
                                                                                              ),
                                                                                          _: 1,
                                                                                      },
                                                                                  ),
                                                                                  g(
                                                                                      p(
                                                                                          M,
                                                                                      ),
                                                                                      {
                                                                                          scope: `col`,
                                                                                          class: `px-4`,
                                                                                      },
                                                                                      {
                                                                                          default:
                                                                                              t(
                                                                                                  () => [
                                                                                                      ...(r[4] ||=
                                                                                                          [
                                                                                                              l(
                                                                                                                  ` Email `,
                                                                                                                  -1,
                                                                                                              ),
                                                                                                          ]),
                                                                                                  ],
                                                                                              ),
                                                                                          _: 1,
                                                                                      },
                                                                                  ),
                                                                                  g(
                                                                                      p(
                                                                                          M,
                                                                                      ),
                                                                                      {
                                                                                          scope: `col`,
                                                                                          class: `px-4`,
                                                                                      },
                                                                                      {
                                                                                          default:
                                                                                              t(
                                                                                                  () => [
                                                                                                      ...(r[5] ||=
                                                                                                          [
                                                                                                              l(
                                                                                                                  `Added`,
                                                                                                                  -1,
                                                                                                              ),
                                                                                                          ]),
                                                                                                  ],
                                                                                              ),
                                                                                          _: 1,
                                                                                      },
                                                                                  ),
                                                                                  g(
                                                                                      p(
                                                                                          M,
                                                                                      ),
                                                                                      {
                                                                                          scope: `col`,
                                                                                          class: `px-4 text-right`,
                                                                                      },
                                                                                      {
                                                                                          default:
                                                                                              t(
                                                                                                  () => [
                                                                                                      ...(r[6] ||=
                                                                                                          [
                                                                                                              l(
                                                                                                                  ` Actions `,
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
                                                          ]),
                                                          _: 1,
                                                      },
                                                  ),
                                                  g(p(O), null, {
                                                      default: t(() => [
                                                          (s(!0),
                                                          h(
                                                              e,
                                                              null,
                                                              m(
                                                                  u.staff,
                                                                  (e) => (
                                                                      s(),
                                                                      f(
                                                                          p(P),
                                                                          {
                                                                              key: e.id,
                                                                              class: `border-border/50`,
                                                                          },
                                                                          {
                                                                              default:
                                                                                  t(
                                                                                      () => [
                                                                                          g(
                                                                                              p(
                                                                                                  k,
                                                                                              ),
                                                                                              {
                                                                                                  class: `px-4 py-3 text-sm font-medium`,
                                                                                              },
                                                                                              {
                                                                                                  default:
                                                                                                      t(
                                                                                                          () => [
                                                                                                              l(
                                                                                                                  a(
                                                                                                                      e.name,
                                                                                                                  ) +
                                                                                                                      ` `,
                                                                                                                  1,
                                                                                                              ),
                                                                                                              e.isYou
                                                                                                                  ? (s(),
                                                                                                                    f(
                                                                                                                        p(
                                                                                                                            N,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            key: 0,
                                                                                                                            class: `ml-2`,
                                                                                                                        },
                                                                                                                        {
                                                                                                                            default:
                                                                                                                                t(
                                                                                                                                    () => [
                                                                                                                                        ...(r[7] ||=
                                                                                                                                            [
                                                                                                                                                l(
                                                                                                                                                    `You`,
                                                                                                                                                    -1,
                                                                                                                                                ),
                                                                                                                                            ]),
                                                                                                                                    ],
                                                                                                                                ),
                                                                                                                            _: 1,
                                                                                                                        },
                                                                                                                    ))
                                                                                                                  : i(
                                                                                                                        ``,
                                                                                                                        !0,
                                                                                                                    ),
                                                                                                          ],
                                                                                                      ),
                                                                                                  _: 2,
                                                                                              },
                                                                                              1024,
                                                                                          ),
                                                                                          g(
                                                                                              p(
                                                                                                  k,
                                                                                              ),
                                                                                              {
                                                                                                  class: `px-4 py-3 text-sm`,
                                                                                              },
                                                                                              {
                                                                                                  default:
                                                                                                      t(
                                                                                                          () => [
                                                                                                              l(
                                                                                                                  a(
                                                                                                                      e.email,
                                                                                                                  ),
                                                                                                                  1,
                                                                                                              ),
                                                                                                          ],
                                                                                                      ),
                                                                                                  _: 2,
                                                                                              },
                                                                                              1024,
                                                                                          ),
                                                                                          g(
                                                                                              p(
                                                                                                  k,
                                                                                              ),
                                                                                              {
                                                                                                  class: `px-4 py-3 text-sm`,
                                                                                              },
                                                                                              {
                                                                                                  default:
                                                                                                      t(
                                                                                                          () => [
                                                                                                              l(
                                                                                                                  a(
                                                                                                                      p(
                                                                                                                          D,
                                                                                                                      )(
                                                                                                                          e.createdAt,
                                                                                                                      ),
                                                                                                                  ),
                                                                                                                  1,
                                                                                                              ),
                                                                                                          ],
                                                                                                      ),
                                                                                                  _: 2,
                                                                                              },
                                                                                              1024,
                                                                                          ),
                                                                                          g(
                                                                                              p(
                                                                                                  k,
                                                                                              ),
                                                                                              {
                                                                                                  class: `px-4 py-3`,
                                                                                              },
                                                                                              {
                                                                                                  default:
                                                                                                      t(
                                                                                                          () => [
                                                                                                              e.isYou
                                                                                                                  ? i(
                                                                                                                        ``,
                                                                                                                        !0,
                                                                                                                    )
                                                                                                                  : (s(),
                                                                                                                    h(
                                                                                                                        `div`,
                                                                                                                        Y,
                                                                                                                        [
                                                                                                                            g(
                                                                                                                                p(
                                                                                                                                    w,
                                                                                                                                ),
                                                                                                                                {
                                                                                                                                    variant: `outline`,
                                                                                                                                    size: `sm`,
                                                                                                                                    'as-child': ``,
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    default:
                                                                                                                                        t(
                                                                                                                                            () => [
                                                                                                                                                g(
                                                                                                                                                    p(
                                                                                                                                                        c,
                                                                                                                                                    ),
                                                                                                                                                    {
                                                                                                                                                        href: p(
                                                                                                                                                            b,
                                                                                                                                                        )(
                                                                                                                                                            e.id,
                                                                                                                                                        ),
                                                                                                                                                        'aria-label': `Edit ${e.name}`,
                                                                                                                                                    },
                                                                                                                                                    {
                                                                                                                                                        default:
                                                                                                                                                            t(
                                                                                                                                                                () => [
                                                                                                                                                                    ...(r[8] ||=
                                                                                                                                                                        [
                                                                                                                                                                            l(
                                                                                                                                                                                ` Edit `,
                                                                                                                                                                                -1,
                                                                                                                                                                            ),
                                                                                                                                                                        ]),
                                                                                                                                                                ],
                                                                                                                                                            ),
                                                                                                                                                        _: 1,
                                                                                                                                                    },
                                                                                                                                                    8,
                                                                                                                                                    [
                                                                                                                                                        `href`,
                                                                                                                                                        `aria-label`,
                                                                                                                                                    ],
                                                                                                                                                ),
                                                                                                                                            ],
                                                                                                                                        ),
                                                                                                                                    _: 2,
                                                                                                                                },
                                                                                                                                1024,
                                                                                                                            ),
                                                                                                                            g(
                                                                                                                                p(
                                                                                                                                    w,
                                                                                                                                ),
                                                                                                                                {
                                                                                                                                    variant: `outline`,
                                                                                                                                    size: `sm`,
                                                                                                                                    class: `text-danger hover:text-danger`,
                                                                                                                                    'aria-label': `Remove ${e.name}`,
                                                                                                                                    onClick:
                                                                                                                                        (
                                                                                                                                            t,
                                                                                                                                        ) =>
                                                                                                                                            x(
                                                                                                                                                e,
                                                                                                                                            ),
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    default:
                                                                                                                                        t(
                                                                                                                                            () => [
                                                                                                                                                ...(r[9] ||=
                                                                                                                                                    [
                                                                                                                                                        l(
                                                                                                                                                            ` Remove `,
                                                                                                                                                            -1,
                                                                                                                                                        ),
                                                                                                                                                    ]),
                                                                                                                                            ],
                                                                                                                                        ),
                                                                                                                                    _: 1,
                                                                                                                                },
                                                                                                                                8,
                                                                                                                                [
                                                                                                                                    `aria-label`,
                                                                                                                                    `onClick`,
                                                                                                                                ],
                                                                                                                            ),
                                                                                                                        ],
                                                                                                                    )),
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
                                                      ]),
                                                      _: 1,
                                                  }),
                                              ]),
                                              _: 1,
                                          }),
                                      ]),
                                  ])),
                            v.value
                                ? (s(),
                                  f(
                                      G,
                                      {
                                          key: 2,
                                          open: y.value,
                                          'onUpdate:open': (r[0] ||= (e) =>
                                              (y.value = e)),
                                          name: v.value.name,
                                          'remove-href': p(S)(v.value.id).url,
                                          onMissing: C,
                                          onRemoved: R,
                                      },
                                      null,
                                      8,
                                      [`open`, `name`, `remove-href`],
                                  ))
                                : i(``, !0),
                        ]),
                    ],
                    64,
                )
            );
        },
    });
export { X as default };
