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
import { t as v } from './createLucideIcon-B933959x.js';
import { t as y } from './inbox-DWr_PkQC.js';
import { n as b, t as x } from './trash-CScu_PuQ.js';
import { c as S, d as C, p as w, s as T } from './app-B62nLDgs.js';
import {
    a as E,
    i as D,
    n as O,
    o as k,
    r as A,
    s as j,
    t as M,
} from './TableRow-IBlTE7rH.js';
import { t as N } from './TableCaption-M4KzGuv1.js';
import { t as P } from './deploymentStatus-DAZueO0e.js';
import { t as F } from './EmptyState-s-EDe2hW.js';
import { t as I } from './PageHeader-D9oPzwwI.js';
import { t as L } from './Spinner-DrEYD93f.js';
import { t as R } from './RemoveDeploymentDialog-DWlWhT0S.js';
var z = v({
        name: `pause`,
        size: 24,
        node: [
            [
                `rect`,
                {
                    x: `14`,
                    y: `3`,
                    width: `5`,
                    height: `18`,
                    rx: `1`,
                    key: `kaeet6`,
                },
            ],
            [
                `rect`,
                {
                    x: `5`,
                    y: `3`,
                    width: `5`,
                    height: `18`,
                    rx: `1`,
                    key: `1wsw3u`,
                },
            ],
        ],
    }),
    B = v({
        name: `play`,
        size: 24,
        node: [
            [
                `path`,
                {
                    d: `M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,
                    key: `10ikf1`,
                },
            ],
        ],
    }),
    V = { class: `mx-auto w-full max-w-7xl space-y-6 p-4 md:p-6` },
    H = {
        key: 1,
        class: `overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm`,
    },
    U = { class: `overflow-x-auto` },
    W = { key: 0, class: `text-xs text-muted-foreground` },
    G = { key: 1, class: `text-muted-foreground` },
    K = { class: `flex items-center justify-end gap-2` },
    q = u({
        layout: {
            breadcrumbs: [
                { title: `Dashboard`, href: C() },
                { title: `Deployments`, href: S() },
            ],
        },
        __name: `Index`,
        props: { deployments: {} },
        setup(u) {
            let v = d(null),
                S = d(!1),
                C = d(null);
            function q(e) {
                ((v.value = e), (S.value = !0));
            }
            function J() {
                n.reload({ only: [`deployments`] });
            }
            function Y(e) {
                n.patch(
                    e.activeHref,
                    { is_active: e.state === `paused` },
                    {
                        preserveState: !0,
                        preserveScroll: !0,
                        onStart: () => (C.value = e.id),
                        onHttpException: (e) => {
                            if (e.status === 404) return (J(), !1);
                        },
                        onFinish: () => (C.value = null),
                    },
                );
            }
            function X() {
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
                        _(`div`, V, [
                            g(
                                I,
                                {
                                    title: `Deployments`,
                                    description: `Every PayHub deployment, with its status and the actions you can take.`,
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
                                      F,
                                      {
                                          key: 0,
                                          icon: p(y),
                                          title: `No deployments yet.`,
                                          description: `Add a PayHub deployment to start pulling its payment numbers.`,
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
                                  h(`section`, H, [
                                      _(`div`, U, [
                                          g(p(k), null, {
                                              default: t(() => [
                                                  g(
                                                      p(N),
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
                                                  g(p(O), null, {
                                                      default: t(() => [
                                                          g(
                                                              p(M),
                                                              {
                                                                  class: `hover:bg-transparent`,
                                                              },
                                                              {
                                                                  default: t(
                                                                      () => [
                                                                          g(
                                                                              p(
                                                                                  A,
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
                                                                                  A,
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
                                                                                  A,
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
                                                  g(p(E), null, {
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
                                                                          p(M),
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
                                                                                                  D,
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
                                                                                                                        W,
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
                                                                                                  D,
                                                                                              ),
                                                                                              {
                                                                                                  class: `px-4 py-3 text-sm`,
                                                                                              },
                                                                                              {
                                                                                                  default:
                                                                                                      t(
                                                                                                          () => [
                                                                                                              p(
                                                                                                                  P,
                                                                                                              )(
                                                                                                                  e.state,
                                                                                                              )
                                                                                                                  ? (s(),
                                                                                                                    f(
                                                                                                                        p(
                                                                                                                            j,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            key: 0,
                                                                                                                            variant:
                                                                                                                                p(
                                                                                                                                    P,
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
                                                                                                                                                    P,
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
                                                                                                                        G,
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
                                                                                                  D,
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
                                                                                                                  K,
                                                                                                                  [
                                                                                                                      g(
                                                                                                                          p(
                                                                                                                              w,
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
                                                                                                                                                  href: e.editHref,
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
                                                                                                                              w,
                                                                                                                          ),
                                                                                                                          {
                                                                                                                              variant: `outline`,
                                                                                                                              size: `icon-sm`,
                                                                                                                              disabled:
                                                                                                                                  C.value ===
                                                                                                                                  e.id,
                                                                                                                              'aria-label': `${e.state === `paused` ? `Resume` : `Pause`} ${e.name}`,
                                                                                                                              title:
                                                                                                                                  e.state ===
                                                                                                                                  `paused`
                                                                                                                                      ? `Resume`
                                                                                                                                      : `Pause`,
                                                                                                                              onClick:
                                                                                                                                  (
                                                                                                                                      t,
                                                                                                                                  ) =>
                                                                                                                                      Y(
                                                                                                                                          e,
                                                                                                                                      ),
                                                                                                                          },
                                                                                                                          {
                                                                                                                              default:
                                                                                                                                  t(
                                                                                                                                      () => [
                                                                                                                                          C.value ===
                                                                                                                                          e.id
                                                                                                                                              ? (s(),
                                                                                                                                                f(
                                                                                                                                                    p(
                                                                                                                                                        L,
                                                                                                                                                    ),
                                                                                                                                                    {
                                                                                                                                                        key: 0,
                                                                                                                                                    },
                                                                                                                                                ))
                                                                                                                                              : e.state ===
                                                                                                                                                  `paused`
                                                                                                                                                ? (s(),
                                                                                                                                                  f(
                                                                                                                                                      p(
                                                                                                                                                          B,
                                                                                                                                                      ),
                                                                                                                                                      {
                                                                                                                                                          key: 1,
                                                                                                                                                      },
                                                                                                                                                  ))
                                                                                                                                                : (s(),
                                                                                                                                                  f(
                                                                                                                                                      p(
                                                                                                                                                          z,
                                                                                                                                                      ),
                                                                                                                                                      {
                                                                                                                                                          key: 2,
                                                                                                                                                      },
                                                                                                                                                  )),
                                                                                                                                      ],
                                                                                                                                  ),
                                                                                                                              _: 2,
                                                                                                                          },
                                                                                                                          1032,
                                                                                                                          [
                                                                                                                              `disabled`,
                                                                                                                              `aria-label`,
                                                                                                                              `title`,
                                                                                                                              `onClick`,
                                                                                                                          ],
                                                                                                                      ),
                                                                                                                      g(
                                                                                                                          p(
                                                                                                                              w,
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
                                                                                                                                      q(
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
                            v.value
                                ? (s(),
                                  f(
                                      R,
                                      {
                                          key: 2,
                                          open: S.value,
                                          'onUpdate:open': (r[0] ||= (e) =>
                                              (S.value = e)),
                                          name: v.value.name,
                                          'remove-href': v.value.href,
                                          onMissing: J,
                                          onRemoved: X,
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
export { q as default };
