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
} from './wayfinder-BZPu7hPl.js';
import { t as v } from './inbox-DWr_PkQC.js';
import { c as y, d as b, p as x, s as S } from './app-CPSAOrcH.js';
import {
    a as C,
    i as w,
    n as T,
    o as E,
    r as D,
    s as O,
    t as k,
} from './TableRow-C0myH0NN.js';
import { t as A } from './TableCaption-M4KzGuv1.js';
import { t as j } from './deploymentStatus-DAZueO0e.js';
import { t as M } from './EmptyState-s-EDe2hW.js';
import { t as N } from './PageHeader-D9oPzwwI.js';
import { t as P } from './Spinner-HKBXW4sQ.js';
import { t as F } from './RemoveDeploymentDialog-ZkrYP0UL.js';
var I = { class: `mx-auto w-full max-w-7xl space-y-6 p-4 md:p-6` },
    L = {
        key: 1,
        class: `overflow-hidden rounded-xl border border-border/70 bg-card shadow-sm`,
    },
    R = { class: `overflow-x-auto` },
    z = { key: 0, class: `text-xs text-muted-foreground` },
    B = { key: 1, class: `text-muted-foreground` },
    V = { class: `flex items-center justify-end gap-2` },
    H = u({
        layout: {
            breadcrumbs: [
                { title: `Home`, href: b() },
                { title: `Deployments`, href: y() },
            ],
        },
        __name: `Index`,
        props: { deployments: {} },
        setup(u) {
            let y = d(null),
                b = d(!1),
                H = d(null);
            function U(e) {
                ((y.value = e), (b.value = !0));
            }
            function W() {
                n.reload({ only: [`deployments`] });
            }
            function G(e) {
                n.patch(
                    e.activeHref,
                    { is_active: e.state === `paused` },
                    {
                        preserveState: !0,
                        preserveScroll: !0,
                        onStart: () => (H.value = e.id),
                        onHttpException: (e) => {
                            if (e.status === 404) return (W(), !1);
                        },
                        onFinish: () => (H.value = null),
                    },
                );
            }
            function K() {
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
                        g(p(o), { title: `Deployments` }),
                        _(`div`, I, [
                            g(
                                N,
                                {
                                    title: `Deployments`,
                                    description: `Every PayHub deployment, with its status and the actions you can take.`,
                                },
                                {
                                    actions: t(() => [
                                        g(
                                            p(x),
                                            { 'as-child': `` },
                                            {
                                                default: t(() => [
                                                    g(
                                                        p(c),
                                                        { href: p(S)() },
                                                        {
                                                            default: t(() => [
                                                                ...(r[1] ||= [
                                                                    l(
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
                            u.deployments.length === 0
                                ? (s(),
                                  f(
                                      M,
                                      {
                                          key: 0,
                                          icon: p(v),
                                          title: `No deployments yet.`,
                                          description: `Add a PayHub deployment to start pulling its payment numbers.`,
                                      },
                                      {
                                          actions: t(() => [
                                              g(
                                                  p(x),
                                                  { 'as-child': `` },
                                                  {
                                                      default: t(() => [
                                                          g(
                                                              p(c),
                                                              { href: p(S)() },
                                                              {
                                                                  default: t(
                                                                      () => [
                                                                          ...(r[2] ||=
                                                                              [
                                                                                  l(
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
                                : (s(),
                                  h(`section`, L, [
                                      _(`div`, R, [
                                          g(p(E), null, {
                                              default: t(() => [
                                                  g(
                                                      p(A),
                                                      { class: `sr-only` },
                                                      {
                                                          default: t(() => [
                                                              ...(r[3] ||= [
                                                                  l(
                                                                      ` Every deployment, by name. `,
                                                                      -1,
                                                                  ),
                                                              ]),
                                                          ]),
                                                          _: 1,
                                                      },
                                                  ),
                                                  g(
                                                      p(T),
                                                      { class: `bg-muted/40` },
                                                      {
                                                          default: t(() => [
                                                              g(
                                                                  p(k),
                                                                  {
                                                                      class: `hover:bg-transparent`,
                                                                  },
                                                                  {
                                                                      default:
                                                                          t(
                                                                              () => [
                                                                                  g(
                                                                                      p(
                                                                                          D,
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
                                                                                          D,
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
                                                                                                                  ` Status `,
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
                                                                                          D,
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
                                                  g(p(C), null, {
                                                      default: t(() => [
                                                          (s(!0),
                                                          h(
                                                              e,
                                                              null,
                                                              m(
                                                                  u.deployments,
                                                                  (e) => (
                                                                      s(),
                                                                      f(
                                                                          p(k),
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
                                                                                                  w,
                                                                                              ),
                                                                                              {
                                                                                                  class: `px-4 py-3`,
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
                                                                                                                      href: e.href,
                                                                                                                      class: `text-sm font-medium text-foreground underline-offset-4 hover:underline focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:outline-none`,
                                                                                                                  },
                                                                                                                  {
                                                                                                                      default:
                                                                                                                          t(
                                                                                                                              () => [
                                                                                                                                  l(
                                                                                                                                      a(
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
                                                                                                                  ? (s(),
                                                                                                                    h(
                                                                                                                        `p`,
                                                                                                                        z,
                                                                                                                        a(
                                                                                                                            e.domain,
                                                                                                                        ),
                                                                                                                        1,
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
                                                                                                  w,
                                                                                              ),
                                                                                              {
                                                                                                  class: `px-4 py-3 text-sm`,
                                                                                              },
                                                                                              {
                                                                                                  default:
                                                                                                      t(
                                                                                                          () => [
                                                                                                              p(
                                                                                                                  j,
                                                                                                              )(
                                                                                                                  e.state,
                                                                                                              )
                                                                                                                  ? (s(),
                                                                                                                    f(
                                                                                                                        p(
                                                                                                                            O,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            key: 0,
                                                                                                                            variant:
                                                                                                                                p(
                                                                                                                                    j,
                                                                                                                                )(
                                                                                                                                    e.state,
                                                                                                                                )
                                                                                                                                    ?.variant,
                                                                                                                        },
                                                                                                                        {
                                                                                                                            default:
                                                                                                                                t(
                                                                                                                                    () => [
                                                                                                                                        l(
                                                                                                                                            a(
                                                                                                                                                p(
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
                                                                                                                  : (s(),
                                                                                                                    h(
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
                                                                                          g(
                                                                                              p(
                                                                                                  w,
                                                                                              ),
                                                                                              {
                                                                                                  class: `px-4 py-3`,
                                                                                              },
                                                                                              {
                                                                                                  default:
                                                                                                      t(
                                                                                                          () => [
                                                                                                              _(
                                                                                                                  `div`,
                                                                                                                  V,
                                                                                                                  [
                                                                                                                      g(
                                                                                                                          p(
                                                                                                                              x,
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
                                                                                                                                                  href: e.editHref,
                                                                                                                                                  'aria-label': `Edit ${e.name}`,
                                                                                                                                              },
                                                                                                                                              {
                                                                                                                                                  default:
                                                                                                                                                      t(
                                                                                                                                                          () => [
                                                                                                                                                              ...(r[7] ||=
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
                                                                                                                              x,
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
                                                                                                                                  t(
                                                                                                                                      () => [
                                                                                                                                          H.value ===
                                                                                                                                          e.id
                                                                                                                                              ? (s(),
                                                                                                                                                f(
                                                                                                                                                    p(
                                                                                                                                                        P,
                                                                                                                                                    ),
                                                                                                                                                    {
                                                                                                                                                        key: 0,
                                                                                                                                                    },
                                                                                                                                                ))
                                                                                                                                              : i(
                                                                                                                                                    ``,
                                                                                                                                                    !0,
                                                                                                                                                ),
                                                                                                                                          l(
                                                                                                                                              ` ` +
                                                                                                                                                  a(
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
                                                                                                                      g(
                                                                                                                          p(
                                                                                                                              x,
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
                                                                                                                                  t(
                                                                                                                                      () => [
                                                                                                                                          ...(r[8] ||=
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
                            y.value
                                ? (s(),
                                  f(
                                      F,
                                      {
                                          key: 2,
                                          open: b.value,
                                          'onUpdate:open': (r[0] ||= (e) =>
                                              (b.value = e)),
                                          name: y.value.name,
                                          'remove-href': y.value.href,
                                          onMissing: W,
                                          onRemoved: K,
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
export { H as default };
