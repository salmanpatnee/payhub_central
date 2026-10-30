import {
    Bt as e,
    K as t,
    Nn as n,
    Sr as r,
    at as i,
    br as a,
    d as o,
    en as s,
    f as c,
    ft as l,
    ht as u,
    ir as d,
    it as f,
    kn as p,
    mr as m,
    ot as h,
    p as g,
    pt as _,
    rt as v,
    u as y,
} from './wayfinder-BZPu7hPl.js';
import { t as b } from './Label-DoYAx_a7.js';
import { t as x } from './PasswordInput-Cu8e63-6.js';
import { n as S, t as C } from './InputError-uoSIkkZA.js';
import { c as w, d as T, l as E, p as D } from './app-B62nLDgs.js';
import { t as O } from './PageHeader-D9oPzwwI.js';
import { t as k } from './Spinner-DrEYD93f.js';
import { t as A } from './DeploymentController-11eEqESw.js';
import { t as j } from './RemoveDeploymentDialog-DWlWhT0S.js';
var M = { class: `mx-auto w-full max-w-7xl space-y-8 p-4 md:p-6` },
    N = { class: `grid gap-2` },
    P = { class: `text-sm font-medium` },
    F = { class: `grid gap-2` },
    I = { class: `grid gap-2` },
    L = { class: `grid gap-2` },
    R = { class: `flex flex-wrap items-center gap-3` },
    z = {
        class: `max-w-xl space-y-3 rounded-xl border border-danger-border bg-danger-soft p-4`,
        'aria-labelledby': `remove-title`,
    },
    B = u({
        __name: `Edit`,
        props: { deployment: {} },
        setup(u) {
            let B = u,
                V = d(!1);
            return (
                p(() => {
                    g({
                        breadcrumbs: [
                            { title: `Dashboard`, href: T() },
                            { title: `Deployments`, href: w() },
                            {
                                title: B.deployment.name,
                                href: E(B.deployment.key),
                            },
                            { title: `Edit`, href: `#` },
                        ],
                    });
                }),
                (d, p) => (
                    s(),
                    h(
                        t,
                        null,
                        [
                            _(
                                m(o),
                                { title: `Edit ${u.deployment.name}` },
                                null,
                                8,
                                [`title`],
                            ),
                            v(`div`, M, [
                                _(
                                    O,
                                    {
                                        title: `Edit ${u.deployment.name}`,
                                        description: `Change the name, the address or the token. Leave the token blank to keep the current one.`,
                                    },
                                    null,
                                    8,
                                    [`title`],
                                ),
                                _(
                                    m(y),
                                    e(m(A).update.form(u.deployment.key), {
                                        'reset-on-error': [`token`],
                                        class: `max-w-xl space-y-6`,
                                    }),
                                    {
                                        default: n(
                                            ({ errors: e, processing: t }) => [
                                                v(`div`, N, [
                                                    _(m(b), null, {
                                                        default: n(() => [
                                                            ...(p[3] ||= [
                                                                l(`Key`, -1),
                                                            ]),
                                                        ]),
                                                        _: 1,
                                                    }),
                                                    v(
                                                        `p`,
                                                        P,
                                                        a(u.deployment.key),
                                                        1,
                                                    ),
                                                    (p[4] ||= v(
                                                        `p`,
                                                        {
                                                            class: `text-sm text-muted-foreground`,
                                                        },
                                                        ` The key cannot be changed. `,
                                                        -1,
                                                    )),
                                                ]),
                                                v(`div`, F, [
                                                    _(
                                                        m(b),
                                                        { for: `name` },
                                                        {
                                                            default: n(() => [
                                                                ...(p[5] ||= [
                                                                    l(
                                                                        `Name`,
                                                                        -1,
                                                                    ),
                                                                ]),
                                                            ]),
                                                            _: 1,
                                                        },
                                                    ),
                                                    _(
                                                        m(S),
                                                        {
                                                            id: `name`,
                                                            name: `name`,
                                                            required: ``,
                                                            autofocus: ``,
                                                            maxlength: `255`,
                                                            autocomplete: `off`,
                                                            'default-value':
                                                                u.deployment
                                                                    .name,
                                                        },
                                                        null,
                                                        8,
                                                        [`default-value`],
                                                    ),
                                                    _(
                                                        C,
                                                        { message: e.name },
                                                        null,
                                                        8,
                                                        [`message`],
                                                    ),
                                                ]),
                                                v(`div`, I, [
                                                    _(
                                                        m(b),
                                                        { for: `base_url` },
                                                        {
                                                            default: n(() => [
                                                                ...(p[6] ||= [
                                                                    l(
                                                                        `Base URL`,
                                                                        -1,
                                                                    ),
                                                                ]),
                                                            ]),
                                                            _: 1,
                                                        },
                                                    ),
                                                    _(
                                                        m(S),
                                                        {
                                                            id: `base_url`,
                                                            name: `base_url`,
                                                            type: `url`,
                                                            required: ``,
                                                            maxlength: `255`,
                                                            autocomplete: `off`,
                                                            'default-value':
                                                                u.deployment
                                                                    .baseUrl,
                                                        },
                                                        null,
                                                        8,
                                                        [`default-value`],
                                                    ),
                                                    _(
                                                        C,
                                                        { message: e.base_url },
                                                        null,
                                                        8,
                                                        [`message`],
                                                    ),
                                                ]),
                                                v(`div`, L, [
                                                    _(
                                                        m(b),
                                                        { for: `token` },
                                                        {
                                                            default: n(() => [
                                                                ...(p[7] ||= [
                                                                    l(
                                                                        `New token`,
                                                                        -1,
                                                                    ),
                                                                ]),
                                                            ]),
                                                            _: 1,
                                                        },
                                                    ),
                                                    _(x, {
                                                        id: `token`,
                                                        name: `token`,
                                                        autocomplete: `new-password`,
                                                        'data-1p-ignore': `true`,
                                                        'data-lpignore': `true`,
                                                        'aria-label': `New token`,
                                                        placeholder: `64 character token`,
                                                    }),
                                                    (p[8] ||= v(
                                                        `p`,
                                                        {
                                                            class: `text-sm text-muted-foreground`,
                                                        },
                                                        ` Leave blank to keep the current token. `,
                                                        -1,
                                                    )),
                                                    _(
                                                        C,
                                                        { message: e.token },
                                                        null,
                                                        8,
                                                        [`message`],
                                                    ),
                                                ]),
                                                v(`div`, R, [
                                                    _(
                                                        m(D),
                                                        {
                                                            type: `submit`,
                                                            disabled: t,
                                                        },
                                                        {
                                                            default: n(() => [
                                                                t
                                                                    ? (s(),
                                                                      f(m(k), {
                                                                          key: 0,
                                                                      }))
                                                                    : i(``, !0),
                                                                (p[9] ||= l(
                                                                    ` Save `,
                                                                    -1,
                                                                )),
                                                            ]),
                                                            _: 2,
                                                        },
                                                        1032,
                                                        [`disabled`],
                                                    ),
                                                    _(
                                                        m(D),
                                                        {
                                                            variant: `outline`,
                                                            'as-child': ``,
                                                        },
                                                        {
                                                            default: n(() => [
                                                                _(
                                                                    m(c),
                                                                    {
                                                                        href: m(
                                                                            E,
                                                                        )(
                                                                            u
                                                                                .deployment
                                                                                .key,
                                                                        ),
                                                                    },
                                                                    {
                                                                        default:
                                                                            n(
                                                                                () => [
                                                                                    ...(p[10] ||=
                                                                                        [
                                                                                            l(
                                                                                                `Cancel`,
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
                                            ],
                                        ),
                                        _: 1,
                                    },
                                    16,
                                ),
                                v(`section`, z, [
                                    (p[12] ||= v(
                                        `h2`,
                                        {
                                            id: `remove-title`,
                                            class: `text-sm font-semibold tracking-tight text-danger`,
                                        },
                                        ` Remove deployment `,
                                        -1,
                                    )),
                                    (p[13] ||= v(
                                        `p`,
                                        { class: `text-sm text-foreground` },
                                        ` The token is wiped here and the deployment disappears from every page. This cannot be undone. `,
                                        -1,
                                    )),
                                    _(
                                        m(D),
                                        {
                                            variant: `destructive`,
                                            onClick: (p[0] ||= (e) =>
                                                (V.value = !0)),
                                        },
                                        {
                                            default: n(() => [
                                                ...(p[11] ||= [
                                                    l(
                                                        ` Remove deployment `,
                                                        -1,
                                                    ),
                                                ]),
                                            ]),
                                            _: 1,
                                        },
                                    ),
                                    _(
                                        j,
                                        {
                                            open: V.value,
                                            'onUpdate:open': (p[1] ||= (e) =>
                                                (V.value = e)),
                                            name: u.deployment.name,
                                            'remove-href': m(E)(
                                                u.deployment.key,
                                            ).url,
                                            'preserve-state': !1,
                                            onMissing: (p[2] ||= (e) =>
                                                m(r).visit(m(w)())),
                                        },
                                        null,
                                        8,
                                        [`open`, `name`, `remove-href`],
                                    ),
                                ]),
                            ]),
                        ],
                        64,
                    )
                )
            );
        },
    });
export { B as default };
