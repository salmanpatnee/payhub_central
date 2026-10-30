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
import { n as b, t as x } from './trash-CScu_PuQ.js';
import {
    a as S,
    d as C,
    i as w,
    o as T,
    p as E,
    r as D,
    x as O,
} from './app-B62nLDgs.js';
import { t as k } from './formatRelative-D-S37FvD.js';
import {
    a as A,
    i as j,
    n as M,
    o as N,
    r as P,
    s as F,
    t as I,
} from './TableRow-IBlTE7rH.js';
import { t as L } from './TableCaption-M4KzGuv1.js';
import { t as R } from './EmptyState-s-EDe2hW.js';
import { t as z } from './PageHeader-D9oPzwwI.js';
import { t as B } from './Spinner-DrEYD93f.js';
import {
    a as V,
    i as H,
    n as U,
    o as W,
    r as G,
    t as K,
} from './dialog-w1EAzTkW.js';
var q = u({
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
                    p(W),
                    {
                        open: u.value,
                        'onUpdate:open': (r[1] ||= (e) => (u.value = e)),
                    },
                    {
                        default: t(() => [
                            g(
                                p(V),
                                { onCloseAutoFocus: b },
                                {
                                    default: t(() => [
                                        g(p(U), null, {
                                            default: t(() => [
                                                g(p(K), null, {
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
                                                    p(H),
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
                                        g(p(G), null, {
                                            default: t(() => [
                                                g(
                                                    p(E),
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
                                                    p(E),
                                                    {
                                                        variant: `destructive`,
                                                        disabled: m.value,
                                                        onClick: y,
                                                    },
                                                    {
                                                        default: t(() => [
                                                            m.value
                                                                ? (s(),
                                                                  f(p(B), {
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
    J = { class: `mx-auto w-full max-w-7xl space-y-6 p-4 md:p-6` },
    Y = {
        key: 1,
        class: `overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm`,
    },
    X = { class: `overflow-x-auto` },
    Z = { key: 0, class: `flex items-center justify-end gap-2` },
    Q = u({
        layout: {
            breadcrumbs: [
                { title: `Dashboard`, href: C() },
                { title: `Staff`, href: T() },
            ],
        },
        __name: `Index`,
        props: { staff: {} },
        setup(u) {
            let v = d(null),
                y = d(!1);
            function C(e) {
                ((v.value = e), (y.value = !0));
            }
            function T() {
                n.reload({ only: [`staff`] });
            }
            function B() {
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
                        _(`div`, J, [
                            g(
                                z,
                                {
                                    title: `Staff`,
                                    description: `Everyone who can sign in to this dashboard.`,
                                },
                                {
                                    actions: t(() => [
                                        g(
                                            p(E),
                                            { 'as-child': `` },
                                            {
                                                default: t(() => [
                                                    g(
                                                        p(c),
                                                        { href: p(D)() },
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
                                      R,
                                      {
                                          key: 0,
                                          icon: p(O),
                                          title: `No staff yet.`,
                                          description: `Add a login for a colleague.`,
                                      },
                                      null,
                                      8,
                                      [`icon`],
                                  ))
                                : (s(),
                                  h(`section`, Y, [
                                      _(`div`, X, [
                                          g(p(N), null, {
                                              default: t(() => [
                                                  g(
                                                      p(L),
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
                                                  g(p(M), null, {
                                                      default: t(() => [
                                                          g(
                                                              p(I),
                                                              {
                                                                  class: `hover:bg-transparent`,
                                                              },
                                                              {
                                                                  default: t(
                                                                      () => [
                                                                          g(
                                                                              p(
                                                                                  P,
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
                                                                                  P,
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
                                                                                  P,
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
                                                                                  P,
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
                                                  }),
                                                  g(p(A), null, {
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
                                                                          p(I),
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
                                                                                                  j,
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
                                                                                                                            F,
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
                                                                                                  j,
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
                                                                                                  j,
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
                                                                                                                          k,
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
                                                                                                  j,
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
                                                                                                                        Z,
                                                                                                                        [
                                                                                                                            g(
                                                                                                                                p(
                                                                                                                                    E,
                                                                                                                                ),
                                                                                                                                {
                                                                                                                                    variant: `outline`,
                                                                                                                                    size: `icon-sm`,
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
                                                                                                                                                            S,
                                                                                                                                                        )(
                                                                                                                                                            e.id,
                                                                                                                                                        ),
                                                                                                                                                        'aria-label': `Edit ${e.name}`,
                                                                                                                                                        title: `Edit`,
                                                                                                                                                    },
                                                                                                                                                    {
                                                                                                                                                        default:
                                                                                                                                                            t(
                                                                                                                                                                () => [
                                                                                                                                                                    g(
                                                                                                                                                                        p(
                                                                                                                                                                            b,
                                                                                                                                                                        ),
                                                                                                                                                                    ),
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
                                                                                                                                    E,
                                                                                                                                ),
                                                                                                                                {
                                                                                                                                    variant: `outline`,
                                                                                                                                    size: `icon-sm`,
                                                                                                                                    class: `text-danger hover:text-danger`,
                                                                                                                                    'aria-label': `Remove ${e.name}`,
                                                                                                                                    title: `Remove`,
                                                                                                                                    onClick:
                                                                                                                                        (
                                                                                                                                            t,
                                                                                                                                        ) =>
                                                                                                                                            C(
                                                                                                                                                e,
                                                                                                                                            ),
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    default:
                                                                                                                                        t(
                                                                                                                                            () => [
                                                                                                                                                g(
                                                                                                                                                    p(
                                                                                                                                                        x,
                                                                                                                                                    ),
                                                                                                                                                ),
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
                                      q,
                                      {
                                          key: 2,
                                          open: y.value,
                                          'onUpdate:open': (r[0] ||= (e) =>
                                              (y.value = e)),
                                          name: v.value.name,
                                          'remove-href': p(w)(v.value.id).url,
                                          onMissing: T,
                                          onRemoved: B,
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
export { Q as default };
