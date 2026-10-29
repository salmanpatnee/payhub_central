import {
    Bt as e,
    Cr as t,
    Ht as n,
    Pn as r,
    Sn as i,
    ar as a,
    at as o,
    f as s,
    gt as c,
    hr as l,
    it as u,
    mt as d,
    ot as f,
    p,
    pt as m,
    q as h,
    r as g,
    sn as _,
    st as v,
    tn as y,
    xr as b,
} from './wayfinder-DOENF6-v.js';
import {
    a as x,
    b as S,
    d as C,
    i as w,
    o as T,
    r as E,
} from './app-B5f9dLA_.js';
import { t as D } from './formatRelative-D-S37FvD.js';
import {
    a as O,
    i as k,
    n as A,
    o as j,
    r as M,
    s as N,
    t as P,
} from './TableRow-Cik-p-BP.js';
import { t as F } from './TableCaption-BVMgFzHw.js';
import { t as I } from './EmptyState-D52fbywp.js';
import { t as L } from './PageHeader-aqdbQGDc.js';
import { t as R } from './Spinner-DjPLrkEB.js';
import {
    a as z,
    i as B,
    n as V,
    o as H,
    r as U,
    t as W,
} from './dialog-BL8Sqzta.js';
var G = c({
        __name: `RemoveStaffDialog`,
        props: e(
            { name: {}, removeHref: {} },
            { open: { type: Boolean, default: !1 }, openModifiers: {} },
        ),
        emits: e([`missing`, `removed`], [`update:open`]),
        setup(e, { emit: n }) {
            let s = e,
                c = n,
                p = i(e, `open`),
                h = a(!1),
                _ = a(!1);
            function v() {
                t.delete(s.removeHref, {
                    preserveState: !0,
                    onStart: () => (h.value = !0),
                    onSuccess: () => (_.value = !0),
                    onHttpException: (e) => {
                        if (e.status === 404) return (c(`missing`), !1);
                    },
                    onFinish: () => {
                        ((h.value = !1), (p.value = !1));
                    },
                });
            }
            function x(e) {
                _.value && (e.preventDefault(), (_.value = !1), c(`removed`));
            }
            return (t, n) => (
                y(),
                o(
                    l(H),
                    {
                        open: p.value,
                        'onUpdate:open': (n[1] ||= (e) => (p.value = e)),
                    },
                    {
                        default: r(() => [
                            d(
                                l(z),
                                { onCloseAutoFocus: x },
                                {
                                    default: r(() => [
                                        d(l(V), null, {
                                            default: r(() => [
                                                d(l(W), null, {
                                                    default: r(() => [
                                                        m(
                                                            `Remove ` +
                                                                b(e.name) +
                                                                `?`,
                                                            1,
                                                        ),
                                                    ]),
                                                    _: 1,
                                                }),
                                                d(
                                                    l(B),
                                                    { as: `div` },
                                                    {
                                                        default: r(() => [
                                                            ...(n[2] ||= [
                                                                u(
                                                                    `ul`,
                                                                    {
                                                                        class: `list-disc space-y-1 pl-5`,
                                                                    },
                                                                    [
                                                                        u(
                                                                            `li`,
                                                                            null,
                                                                            `The login is deleted and cannot be recovered.`,
                                                                        ),
                                                                        u(
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
                                        d(l(U), null, {
                                            default: r(() => [
                                                d(
                                                    l(g),
                                                    {
                                                        variant: `outline`,
                                                        disabled: h.value,
                                                        onClick: (n[0] ||= (
                                                            e,
                                                        ) => (p.value = !1)),
                                                    },
                                                    {
                                                        default: r(() => [
                                                            ...(n[3] ||= [
                                                                m(
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
                                                d(
                                                    l(g),
                                                    {
                                                        variant: `destructive`,
                                                        disabled: h.value,
                                                        onClick: v,
                                                    },
                                                    {
                                                        default: r(() => [
                                                            h.value
                                                                ? (y(),
                                                                  o(l(R), {
                                                                      key: 0,
                                                                  }))
                                                                : f(``, !0),
                                                            (n[4] ||= m(
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
    X = c({
        layout: {
            breadcrumbs: [
                { title: `Home`, href: C() },
                { title: `Staff`, href: T() },
            ],
        },
        __name: `Index`,
        props: { staff: {} },
        setup(e) {
            let i = a(null),
                c = a(!1);
            function C(e) {
                ((i.value = e), (c.value = !0));
            }
            function T() {
                t.reload({ only: [`staff`] });
            }
            function R() {
                n(() => {
                    let e = document.querySelector(`h1`);
                    (e?.setAttribute(`tabindex`, `-1`), e?.focus());
                });
            }
            return (t, n) => (
                y(),
                v(
                    h,
                    null,
                    [
                        d(l(s), { title: `Staff` }),
                        u(`div`, K, [
                            d(
                                L,
                                {
                                    title: `Staff`,
                                    description: `Everyone who can sign in to this dashboard.`,
                                },
                                {
                                    actions: r(() => [
                                        d(
                                            l(g),
                                            { 'as-child': `` },
                                            {
                                                default: r(() => [
                                                    d(
                                                        l(p),
                                                        { href: l(E)() },
                                                        {
                                                            default: r(() => [
                                                                ...(n[1] ||= [
                                                                    m(
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
                            e.staff.length === 0
                                ? (y(),
                                  o(
                                      I,
                                      {
                                          key: 0,
                                          icon: l(S),
                                          title: `No staff yet.`,
                                          description: `Add a login for a colleague.`,
                                      },
                                      null,
                                      8,
                                      [`icon`],
                                  ))
                                : (y(),
                                  v(`section`, q, [
                                      u(`div`, J, [
                                          d(l(j), null, {
                                              default: r(() => [
                                                  d(
                                                      l(F),
                                                      { class: `sr-only` },
                                                      {
                                                          default: r(() => [
                                                              ...(n[2] ||= [
                                                                  m(
                                                                      ` Every login, by name. `,
                                                                      -1,
                                                                  ),
                                                              ]),
                                                          ]),
                                                          _: 1,
                                                      },
                                                  ),
                                                  d(
                                                      l(A),
                                                      { class: `bg-muted/40` },
                                                      {
                                                          default: r(() => [
                                                              d(
                                                                  l(P),
                                                                  {
                                                                      class: `hover:bg-transparent`,
                                                                  },
                                                                  {
                                                                      default:
                                                                          r(
                                                                              () => [
                                                                                  d(
                                                                                      l(
                                                                                          M,
                                                                                      ),
                                                                                      {
                                                                                          scope: `col`,
                                                                                          class: `px-4`,
                                                                                      },
                                                                                      {
                                                                                          default:
                                                                                              r(
                                                                                                  () => [
                                                                                                      ...(n[3] ||=
                                                                                                          [
                                                                                                              m(
                                                                                                                  `Name`,
                                                                                                                  -1,
                                                                                                              ),
                                                                                                          ]),
                                                                                                  ],
                                                                                              ),
                                                                                          _: 1,
                                                                                      },
                                                                                  ),
                                                                                  d(
                                                                                      l(
                                                                                          M,
                                                                                      ),
                                                                                      {
                                                                                          scope: `col`,
                                                                                          class: `px-4`,
                                                                                      },
                                                                                      {
                                                                                          default:
                                                                                              r(
                                                                                                  () => [
                                                                                                      ...(n[4] ||=
                                                                                                          [
                                                                                                              m(
                                                                                                                  ` Email `,
                                                                                                                  -1,
                                                                                                              ),
                                                                                                          ]),
                                                                                                  ],
                                                                                              ),
                                                                                          _: 1,
                                                                                      },
                                                                                  ),
                                                                                  d(
                                                                                      l(
                                                                                          M,
                                                                                      ),
                                                                                      {
                                                                                          scope: `col`,
                                                                                          class: `px-4`,
                                                                                      },
                                                                                      {
                                                                                          default:
                                                                                              r(
                                                                                                  () => [
                                                                                                      ...(n[5] ||=
                                                                                                          [
                                                                                                              m(
                                                                                                                  `Added`,
                                                                                                                  -1,
                                                                                                              ),
                                                                                                          ]),
                                                                                                  ],
                                                                                              ),
                                                                                          _: 1,
                                                                                      },
                                                                                  ),
                                                                                  d(
                                                                                      l(
                                                                                          M,
                                                                                      ),
                                                                                      {
                                                                                          scope: `col`,
                                                                                          class: `px-4 text-right`,
                                                                                      },
                                                                                      {
                                                                                          default:
                                                                                              r(
                                                                                                  () => [
                                                                                                      ...(n[6] ||=
                                                                                                          [
                                                                                                              m(
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
                                                  d(l(O), null, {
                                                      default: r(() => [
                                                          (y(!0),
                                                          v(
                                                              h,
                                                              null,
                                                              _(
                                                                  e.staff,
                                                                  (e) => (
                                                                      y(),
                                                                      o(
                                                                          l(P),
                                                                          {
                                                                              key: e.id,
                                                                              class: `border-border/50`,
                                                                          },
                                                                          {
                                                                              default:
                                                                                  r(
                                                                                      () => [
                                                                                          d(
                                                                                              l(
                                                                                                  k,
                                                                                              ),
                                                                                              {
                                                                                                  class: `px-4 py-3 text-sm font-medium`,
                                                                                              },
                                                                                              {
                                                                                                  default:
                                                                                                      r(
                                                                                                          () => [
                                                                                                              m(
                                                                                                                  b(
                                                                                                                      e.name,
                                                                                                                  ) +
                                                                                                                      ` `,
                                                                                                                  1,
                                                                                                              ),
                                                                                                              e.isYou
                                                                                                                  ? (y(),
                                                                                                                    o(
                                                                                                                        l(
                                                                                                                            N,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            key: 0,
                                                                                                                            class: `ml-2`,
                                                                                                                        },
                                                                                                                        {
                                                                                                                            default:
                                                                                                                                r(
                                                                                                                                    () => [
                                                                                                                                        ...(n[7] ||=
                                                                                                                                            [
                                                                                                                                                m(
                                                                                                                                                    `You`,
                                                                                                                                                    -1,
                                                                                                                                                ),
                                                                                                                                            ]),
                                                                                                                                    ],
                                                                                                                                ),
                                                                                                                            _: 1,
                                                                                                                        },
                                                                                                                    ))
                                                                                                                  : f(
                                                                                                                        ``,
                                                                                                                        !0,
                                                                                                                    ),
                                                                                                          ],
                                                                                                      ),
                                                                                                  _: 2,
                                                                                              },
                                                                                              1024,
                                                                                          ),
                                                                                          d(
                                                                                              l(
                                                                                                  k,
                                                                                              ),
                                                                                              {
                                                                                                  class: `px-4 py-3 text-sm`,
                                                                                              },
                                                                                              {
                                                                                                  default:
                                                                                                      r(
                                                                                                          () => [
                                                                                                              m(
                                                                                                                  b(
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
                                                                                          d(
                                                                                              l(
                                                                                                  k,
                                                                                              ),
                                                                                              {
                                                                                                  class: `px-4 py-3 text-sm`,
                                                                                              },
                                                                                              {
                                                                                                  default:
                                                                                                      r(
                                                                                                          () => [
                                                                                                              m(
                                                                                                                  b(
                                                                                                                      l(
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
                                                                                          d(
                                                                                              l(
                                                                                                  k,
                                                                                              ),
                                                                                              {
                                                                                                  class: `px-4 py-3`,
                                                                                              },
                                                                                              {
                                                                                                  default:
                                                                                                      r(
                                                                                                          () => [
                                                                                                              e.isYou
                                                                                                                  ? f(
                                                                                                                        ``,
                                                                                                                        !0,
                                                                                                                    )
                                                                                                                  : (y(),
                                                                                                                    v(
                                                                                                                        `div`,
                                                                                                                        Y,
                                                                                                                        [
                                                                                                                            d(
                                                                                                                                l(
                                                                                                                                    g,
                                                                                                                                ),
                                                                                                                                {
                                                                                                                                    variant: `outline`,
                                                                                                                                    size: `sm`,
                                                                                                                                    'as-child': ``,
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    default:
                                                                                                                                        r(
                                                                                                                                            () => [
                                                                                                                                                d(
                                                                                                                                                    l(
                                                                                                                                                        p,
                                                                                                                                                    ),
                                                                                                                                                    {
                                                                                                                                                        href: l(
                                                                                                                                                            x,
                                                                                                                                                        )(
                                                                                                                                                            e.id,
                                                                                                                                                        ),
                                                                                                                                                        'aria-label': `Edit ${e.name}`,
                                                                                                                                                    },
                                                                                                                                                    {
                                                                                                                                                        default:
                                                                                                                                                            r(
                                                                                                                                                                () => [
                                                                                                                                                                    ...(n[8] ||=
                                                                                                                                                                        [
                                                                                                                                                                            m(
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
                                                                                                                            d(
                                                                                                                                l(
                                                                                                                                    g,
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
                                                                                                                                            C(
                                                                                                                                                e,
                                                                                                                                            ),
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    default:
                                                                                                                                        r(
                                                                                                                                            () => [
                                                                                                                                                ...(n[9] ||=
                                                                                                                                                    [
                                                                                                                                                        m(
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
                            i.value
                                ? (y(),
                                  o(
                                      G,
                                      {
                                          key: 2,
                                          open: c.value,
                                          'onUpdate:open': (n[0] ||= (e) =>
                                              (c.value = e)),
                                          name: i.value.name,
                                          'remove-href': l(w)(i.value.id).url,
                                          onMissing: T,
                                          onRemoved: R,
                                      },
                                      null,
                                      8,
                                      [`open`, `name`, `remove-href`],
                                  ))
                                : f(``, !0),
                        ]),
                    ],
                    64,
                )
            );
        },
    });
export { X as default };
