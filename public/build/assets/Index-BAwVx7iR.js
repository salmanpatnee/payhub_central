import {
    Cr as e,
    Ht as t,
    Pn as n,
    ar as r,
    at as i,
    f as a,
    gt as o,
    hr as s,
    it as c,
    mt as l,
    ot as u,
    p as d,
    pt as f,
    q as p,
    r as m,
    sn as h,
    st as g,
    tn as _,
    xr as v,
} from './wayfinder-DOENF6-v.js';
import { t as y } from './inbox-BXA07aQU.js';
import { c as b, d as x, s as S } from './app-B5f9dLA_.js';
import {
    a as C,
    i as w,
    n as T,
    o as E,
    r as D,
    s as O,
    t as k,
} from './TableRow-Cik-p-BP.js';
import { t as A } from './TableCaption-BVMgFzHw.js';
import { t as j } from './deploymentStatus-DAZueO0e.js';
import { t as M } from './EmptyState-D52fbywp.js';
import { t as N } from './PageHeader-aqdbQGDc.js';
import { t as P } from './Spinner-DjPLrkEB.js';
import { t as F } from './RemoveDeploymentDialog-B4HZS9Ha.js';
var I = { class: `mx-auto w-full max-w-7xl space-y-6 p-4 md:p-6` },
    L = {
        key: 1,
        class: `overflow-hidden rounded-xl border border-border/70 bg-card shadow-sm`,
    },
    R = { class: `overflow-x-auto` },
    z = { key: 0, class: `text-xs text-muted-foreground` },
    B = { key: 1, class: `text-muted-foreground` },
    V = { class: `flex items-center justify-end gap-2` },
    H = o({
        layout: {
            breadcrumbs: [
                { title: `Home`, href: x() },
                { title: `Deployments`, href: b() },
            ],
        },
        __name: `Index`,
        props: { deployments: {} },
        setup(o) {
            let b = r(null),
                x = r(!1),
                H = r(null);
            function U(e) {
                ((b.value = e), (x.value = !0));
            }
            function W() {
                e.reload({ only: [`deployments`] });
            }
            function G(t) {
                e.patch(
                    t.activeHref,
                    { is_active: t.state === `paused` },
                    {
                        preserveState: !0,
                        preserveScroll: !0,
                        onStart: () => (H.value = t.id),
                        onHttpException: (e) => {
                            if (e.status === 404) return (W(), !1);
                        },
                        onFinish: () => (H.value = null),
                    },
                );
            }
            function K() {
                t(() => {
                    let e = document.querySelector(`h1`);
                    (e?.setAttribute(`tabindex`, `-1`), e?.focus());
                });
            }
            return (e, t) => (
                _(),
                g(
                    p,
                    null,
                    [
                        l(s(a), { title: `Deployments` }),
                        c(`div`, I, [
                            l(
                                N,
                                {
                                    title: `Deployments`,
                                    description: `Every PayHub deployment, with its status and the actions you can take.`,
                                },
                                {
                                    actions: n(() => [
                                        l(
                                            s(m),
                                            { 'as-child': `` },
                                            {
                                                default: n(() => [
                                                    l(
                                                        s(d),
                                                        { href: s(S)() },
                                                        {
                                                            default: n(() => [
                                                                ...(t[1] ||= [
                                                                    f(
                                                                        `Add deployment`,
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
                            o.deployments.length === 0
                                ? (_(),
                                  i(
                                      M,
                                      {
                                          key: 0,
                                          icon: s(y),
                                          title: `No deployments yet.`,
                                          description: `Add a PayHub deployment to start pulling its payment numbers.`,
                                      },
                                      {
                                          actions: n(() => [
                                              l(
                                                  s(m),
                                                  { 'as-child': `` },
                                                  {
                                                      default: n(() => [
                                                          l(
                                                              s(d),
                                                              { href: s(S)() },
                                                              {
                                                                  default: n(
                                                                      () => [
                                                                          ...(t[2] ||=
                                                                              [
                                                                                  f(
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
                                  g(`section`, L, [
                                      c(`div`, R, [
                                          l(s(E), null, {
                                              default: n(() => [
                                                  l(
                                                      s(A),
                                                      { class: `sr-only` },
                                                      {
                                                          default: n(() => [
                                                              ...(t[3] ||= [
                                                                  f(
                                                                      ` Every deployment, by name. `,
                                                                      -1,
                                                                  ),
                                                              ]),
                                                          ]),
                                                          _: 1,
                                                      },
                                                  ),
                                                  l(
                                                      s(T),
                                                      { class: `bg-muted/40` },
                                                      {
                                                          default: n(() => [
                                                              l(
                                                                  s(k),
                                                                  {
                                                                      class: `hover:bg-transparent`,
                                                                  },
                                                                  {
                                                                      default:
                                                                          n(
                                                                              () => [
                                                                                  l(
                                                                                      s(
                                                                                          D,
                                                                                      ),
                                                                                      {
                                                                                          scope: `col`,
                                                                                          class: `px-4`,
                                                                                      },
                                                                                      {
                                                                                          default:
                                                                                              n(
                                                                                                  () => [
                                                                                                      ...(t[4] ||=
                                                                                                          [
                                                                                                              f(
                                                                                                                  `Name`,
                                                                                                                  -1,
                                                                                                              ),
                                                                                                          ]),
                                                                                                  ],
                                                                                              ),
                                                                                          _: 1,
                                                                                      },
                                                                                  ),
                                                                                  l(
                                                                                      s(
                                                                                          D,
                                                                                      ),
                                                                                      {
                                                                                          scope: `col`,
                                                                                          class: `px-4`,
                                                                                      },
                                                                                      {
                                                                                          default:
                                                                                              n(
                                                                                                  () => [
                                                                                                      ...(t[5] ||=
                                                                                                          [
                                                                                                              f(
                                                                                                                  ` Status `,
                                                                                                                  -1,
                                                                                                              ),
                                                                                                          ]),
                                                                                                  ],
                                                                                              ),
                                                                                          _: 1,
                                                                                      },
                                                                                  ),
                                                                                  l(
                                                                                      s(
                                                                                          D,
                                                                                      ),
                                                                                      {
                                                                                          scope: `col`,
                                                                                          class: `px-4 text-right`,
                                                                                      },
                                                                                      {
                                                                                          default:
                                                                                              n(
                                                                                                  () => [
                                                                                                      ...(t[6] ||=
                                                                                                          [
                                                                                                              f(
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
                                                  l(s(C), null, {
                                                      default: n(() => [
                                                          (_(!0),
                                                          g(
                                                              p,
                                                              null,
                                                              h(
                                                                  o.deployments,
                                                                  (e) => (
                                                                      _(),
                                                                      i(
                                                                          s(k),
                                                                          {
                                                                              key: e.id,
                                                                              class: `border-border/50`,
                                                                          },
                                                                          {
                                                                              default:
                                                                                  n(
                                                                                      () => [
                                                                                          l(
                                                                                              s(
                                                                                                  w,
                                                                                              ),
                                                                                              {
                                                                                                  class: `px-4 py-3`,
                                                                                              },
                                                                                              {
                                                                                                  default:
                                                                                                      n(
                                                                                                          () => [
                                                                                                              l(
                                                                                                                  s(
                                                                                                                      d,
                                                                                                                  ),
                                                                                                                  {
                                                                                                                      href: e.href,
                                                                                                                      class: `text-sm font-medium text-foreground underline-offset-4 hover:underline focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:outline-none`,
                                                                                                                  },
                                                                                                                  {
                                                                                                                      default:
                                                                                                                          n(
                                                                                                                              () => [
                                                                                                                                  f(
                                                                                                                                      v(
                                                                                                                                          e.name,
                                                                                                                                      ),
                                                                                                                                      1,
                                                                                                                                  ),
                                                                                                                              ],
                                                                                                                          ),
                                                                                                                      _: 2,
                                                                                                                  },
                                                                                                                  1032,
                                                                                                                  [
                                                                                                                      `href`,
                                                                                                                  ],
                                                                                                              ),
                                                                                                              e.domain
                                                                                                                  ? (_(),
                                                                                                                    g(
                                                                                                                        `p`,
                                                                                                                        z,
                                                                                                                        v(
                                                                                                                            e.domain,
                                                                                                                        ),
                                                                                                                        1,
                                                                                                                    ))
                                                                                                                  : u(
                                                                                                                        ``,
                                                                                                                        !0,
                                                                                                                    ),
                                                                                                          ],
                                                                                                      ),
                                                                                                  _: 2,
                                                                                              },
                                                                                              1024,
                                                                                          ),
                                                                                          l(
                                                                                              s(
                                                                                                  w,
                                                                                              ),
                                                                                              {
                                                                                                  class: `px-4 py-3 text-sm`,
                                                                                              },
                                                                                              {
                                                                                                  default:
                                                                                                      n(
                                                                                                          () => [
                                                                                                              s(
                                                                                                                  j,
                                                                                                              )(
                                                                                                                  e.state,
                                                                                                              )
                                                                                                                  ? (_(),
                                                                                                                    i(
                                                                                                                        s(
                                                                                                                            O,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            key: 0,
                                                                                                                            variant:
                                                                                                                                s(
                                                                                                                                    j,
                                                                                                                                )(
                                                                                                                                    e.state,
                                                                                                                                )
                                                                                                                                    ?.variant,
                                                                                                                        },
                                                                                                                        {
                                                                                                                            default:
                                                                                                                                n(
                                                                                                                                    () => [
                                                                                                                                        f(
                                                                                                                                            v(
                                                                                                                                                s(
                                                                                                                                                    j,
                                                                                                                                                )(
                                                                                                                                                    e.state,
                                                                                                                                                )
                                                                                                                                                    ?.label,
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
                                                                                                                    ))
                                                                                                                  : (_(),
                                                                                                                    g(
                                                                                                                        `span`,
                                                                                                                        B,
                                                                                                                        ` Waiting for the first pull. `,
                                                                                                                    )),
                                                                                                          ],
                                                                                                      ),
                                                                                                  _: 2,
                                                                                              },
                                                                                              1024,
                                                                                          ),
                                                                                          l(
                                                                                              s(
                                                                                                  w,
                                                                                              ),
                                                                                              {
                                                                                                  class: `px-4 py-3`,
                                                                                              },
                                                                                              {
                                                                                                  default:
                                                                                                      n(
                                                                                                          () => [
                                                                                                              c(
                                                                                                                  `div`,
                                                                                                                  V,
                                                                                                                  [
                                                                                                                      l(
                                                                                                                          s(
                                                                                                                              m,
                                                                                                                          ),
                                                                                                                          {
                                                                                                                              variant: `outline`,
                                                                                                                              size: `sm`,
                                                                                                                              'as-child': ``,
                                                                                                                          },
                                                                                                                          {
                                                                                                                              default:
                                                                                                                                  n(
                                                                                                                                      () => [
                                                                                                                                          l(
                                                                                                                                              s(
                                                                                                                                                  d,
                                                                                                                                              ),
                                                                                                                                              {
                                                                                                                                                  href: e.editHref,
                                                                                                                                                  'aria-label': `Edit ${e.name}`,
                                                                                                                                              },
                                                                                                                                              {
                                                                                                                                                  default:
                                                                                                                                                      n(
                                                                                                                                                          () => [
                                                                                                                                                              ...(t[7] ||=
                                                                                                                                                                  [
                                                                                                                                                                      f(
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
                                                                                                                      l(
                                                                                                                          s(
                                                                                                                              m,
                                                                                                                          ),
                                                                                                                          {
                                                                                                                              variant: `outline`,
                                                                                                                              size: `sm`,
                                                                                                                              disabled:
                                                                                                                                  H.value ===
                                                                                                                                  e.id,
                                                                                                                              'aria-label': `${e.state === `paused` ? `Resume` : `Pause`} ${e.name}`,
                                                                                                                              onClick:
                                                                                                                                  (
                                                                                                                                      t,
                                                                                                                                  ) =>
                                                                                                                                      G(
                                                                                                                                          e,
                                                                                                                                      ),
                                                                                                                          },
                                                                                                                          {
                                                                                                                              default:
                                                                                                                                  n(
                                                                                                                                      () => [
                                                                                                                                          H.value ===
                                                                                                                                          e.id
                                                                                                                                              ? (_(),
                                                                                                                                                i(
                                                                                                                                                    s(
                                                                                                                                                        P,
                                                                                                                                                    ),
                                                                                                                                                    {
                                                                                                                                                        key: 0,
                                                                                                                                                    },
                                                                                                                                                ))
                                                                                                                                              : u(
                                                                                                                                                    ``,
                                                                                                                                                    !0,
                                                                                                                                                ),
                                                                                                                                          f(
                                                                                                                                              ` ` +
                                                                                                                                                  v(
                                                                                                                                                      e.state ===
                                                                                                                                                          `paused`
                                                                                                                                                          ? `Resume`
                                                                                                                                                          : `Pause`,
                                                                                                                                                  ),
                                                                                                                                              1,
                                                                                                                                          ),
                                                                                                                                      ],
                                                                                                                                  ),
                                                                                                                              _: 2,
                                                                                                                          },
                                                                                                                          1032,
                                                                                                                          [
                                                                                                                              `disabled`,
                                                                                                                              `aria-label`,
                                                                                                                              `onClick`,
                                                                                                                          ],
                                                                                                                      ),
                                                                                                                      l(
                                                                                                                          s(
                                                                                                                              m,
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
                                                                                                                                      U(
                                                                                                                                          e,
                                                                                                                                      ),
                                                                                                                          },
                                                                                                                          {
                                                                                                                              default:
                                                                                                                                  n(
                                                                                                                                      () => [
                                                                                                                                          ...(t[8] ||=
                                                                                                                                              [
                                                                                                                                                  f(
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
                                                      ]),
                                                      _: 1,
                                                  }),
                                              ]),
                                              _: 1,
                                          }),
                                      ]),
                                  ])),
                            b.value
                                ? (_(),
                                  i(
                                      F,
                                      {
                                          key: 2,
                                          open: x.value,
                                          'onUpdate:open': (t[0] ||= (e) =>
                                              (x.value = e)),
                                          name: b.value.name,
                                          'remove-href': b.value.href,
                                          onMissing: W,
                                          onRemoved: K,
                                      },
                                      null,
                                      8,
                                      [`open`, `name`, `remove-href`],
                                  ))
                                : u(``, !0),
                        ]),
                    ],
                    64,
                )
            );
        },
    });
export { H as default };
