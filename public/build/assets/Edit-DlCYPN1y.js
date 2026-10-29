import {
    An as e,
    Cr as t,
    Pn as n,
    Vt as r,
    ar as i,
    at as a,
    d as o,
    f as s,
    gt as c,
    hr as l,
    it as u,
    m as d,
    mt as f,
    ot as p,
    p as m,
    pt as h,
    q as g,
    r as _,
    st as v,
    tn as y,
    xr as b,
} from './wayfinder-DOENF6-v.js';
import { t as x } from './Label-SQSUbFPK.js';
import { t as S } from './PasswordInput-D0pNVU_V.js';
import { n as C, t as w } from './InputError-NcKxWgl1.js';
import { c as T, d as E, l as D } from './app-DCCfXFlv.js';
import { t as O } from './PageHeader-aqdbQGDc.js';
import { t as k } from './Spinner-CE_plhl7.js';
import { t as A } from './DeploymentController-ByDKyI4z.js';
import { t as j } from './RemoveDeploymentDialog-C0mLBD0J.js';
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
    B = c({
        __name: `Edit`,
        props: { deployment: {} },
        setup(c) {
            let B = c,
                V = i(!1);
            return (
                e(() => {
                    d({
                        breadcrumbs: [
                            { title: `Home`, href: E() },
                            { title: `Deployments`, href: T() },
                            {
                                title: B.deployment.name,
                                href: D(B.deployment.key),
                            },
                            { title: `Edit`, href: `#` },
                        ],
                    });
                }),
                (e, i) => (
                    y(),
                    v(
                        g,
                        null,
                        [
                            f(
                                l(s),
                                { title: `Edit ${c.deployment.name}` },
                                null,
                                8,
                                [`title`],
                            ),
                            u(`div`, M, [
                                f(
                                    O,
                                    {
                                        title: `Edit ${c.deployment.name}`,
                                        description: `Change the name, the address or the token. Leave the token blank to keep the current one.`,
                                    },
                                    null,
                                    8,
                                    [`title`],
                                ),
                                f(
                                    l(o),
                                    r(l(A).update.form(c.deployment.key), {
                                        'reset-on-error': [`token`],
                                        class: `max-w-xl space-y-6`,
                                    }),
                                    {
                                        default: n(
                                            ({ errors: e, processing: t }) => [
                                                u(`div`, N, [
                                                    f(l(x), null, {
                                                        default: n(() => [
                                                            ...(i[3] ||= [
                                                                h(`Key`, -1),
                                                            ]),
                                                        ]),
                                                        _: 1,
                                                    }),
                                                    u(
                                                        `p`,
                                                        P,
                                                        b(c.deployment.key),
                                                        1,
                                                    ),
                                                    (i[4] ||= u(
                                                        `p`,
                                                        {
                                                            class: `text-sm text-muted-foreground`,
                                                        },
                                                        ` The key cannot be changed. `,
                                                        -1,
                                                    )),
                                                ]),
                                                u(`div`, F, [
                                                    f(
                                                        l(x),
                                                        { for: `name` },
                                                        {
                                                            default: n(() => [
                                                                ...(i[5] ||= [
                                                                    h(
                                                                        `Name`,
                                                                        -1,
                                                                    ),
                                                                ]),
                                                            ]),
                                                            _: 1,
                                                        },
                                                    ),
                                                    f(
                                                        l(C),
                                                        {
                                                            id: `name`,
                                                            name: `name`,
                                                            required: ``,
                                                            autofocus: ``,
                                                            maxlength: `255`,
                                                            autocomplete: `off`,
                                                            'default-value':
                                                                c.deployment
                                                                    .name,
                                                        },
                                                        null,
                                                        8,
                                                        [`default-value`],
                                                    ),
                                                    f(
                                                        w,
                                                        { message: e.name },
                                                        null,
                                                        8,
                                                        [`message`],
                                                    ),
                                                ]),
                                                u(`div`, I, [
                                                    f(
                                                        l(x),
                                                        { for: `base_url` },
                                                        {
                                                            default: n(() => [
                                                                ...(i[6] ||= [
                                                                    h(
                                                                        `Base URL`,
                                                                        -1,
                                                                    ),
                                                                ]),
                                                            ]),
                                                            _: 1,
                                                        },
                                                    ),
                                                    f(
                                                        l(C),
                                                        {
                                                            id: `base_url`,
                                                            name: `base_url`,
                                                            type: `url`,
                                                            required: ``,
                                                            maxlength: `255`,
                                                            autocomplete: `off`,
                                                            'default-value':
                                                                c.deployment
                                                                    .baseUrl,
                                                        },
                                                        null,
                                                        8,
                                                        [`default-value`],
                                                    ),
                                                    f(
                                                        w,
                                                        { message: e.base_url },
                                                        null,
                                                        8,
                                                        [`message`],
                                                    ),
                                                ]),
                                                u(`div`, L, [
                                                    f(
                                                        l(x),
                                                        { for: `token` },
                                                        {
                                                            default: n(() => [
                                                                ...(i[7] ||= [
                                                                    h(
                                                                        `New token`,
                                                                        -1,
                                                                    ),
                                                                ]),
                                                            ]),
                                                            _: 1,
                                                        },
                                                    ),
                                                    f(S, {
                                                        id: `token`,
                                                        name: `token`,
                                                        autocomplete: `new-password`,
                                                        'data-1p-ignore': `true`,
                                                        'data-lpignore': `true`,
                                                        'aria-label': `New token`,
                                                        placeholder: `64 character token`,
                                                    }),
                                                    (i[8] ||= u(
                                                        `p`,
                                                        {
                                                            class: `text-sm text-muted-foreground`,
                                                        },
                                                        ` Leave blank to keep the current token. `,
                                                        -1,
                                                    )),
                                                    f(
                                                        w,
                                                        { message: e.token },
                                                        null,
                                                        8,
                                                        [`message`],
                                                    ),
                                                ]),
                                                u(`div`, R, [
                                                    f(
                                                        l(_),
                                                        {
                                                            type: `submit`,
                                                            disabled: t,
                                                        },
                                                        {
                                                            default: n(() => [
                                                                t
                                                                    ? (y(),
                                                                      a(l(k), {
                                                                          key: 0,
                                                                      }))
                                                                    : p(``, !0),
                                                                (i[9] ||= h(
                                                                    ` Save `,
                                                                    -1,
                                                                )),
                                                            ]),
                                                            _: 2,
                                                        },
                                                        1032,
                                                        [`disabled`],
                                                    ),
                                                    f(
                                                        l(_),
                                                        {
                                                            variant: `outline`,
                                                            'as-child': ``,
                                                        },
                                                        {
                                                            default: n(() => [
                                                                f(
                                                                    l(m),
                                                                    {
                                                                        href: l(
                                                                            D,
                                                                        )(
                                                                            c
                                                                                .deployment
                                                                                .key,
                                                                        ),
                                                                    },
                                                                    {
                                                                        default:
                                                                            n(
                                                                                () => [
                                                                                    ...(i[10] ||=
                                                                                        [
                                                                                            h(
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
                                u(`section`, z, [
                                    (i[12] ||= u(
                                        `h2`,
                                        {
                                            id: `remove-title`,
                                            class: `text-sm font-semibold tracking-tight text-danger`,
                                        },
                                        ` Remove deployment `,
                                        -1,
                                    )),
                                    (i[13] ||= u(
                                        `p`,
                                        { class: `text-sm text-foreground` },
                                        ` The token is wiped here and the deployment disappears from every page. This cannot be undone. `,
                                        -1,
                                    )),
                                    f(
                                        l(_),
                                        {
                                            variant: `destructive`,
                                            onClick: (i[0] ||= (e) =>
                                                (V.value = !0)),
                                        },
                                        {
                                            default: n(() => [
                                                ...(i[11] ||= [
                                                    h(
                                                        ` Remove deployment `,
                                                        -1,
                                                    ),
                                                ]),
                                            ]),
                                            _: 1,
                                        },
                                    ),
                                    f(
                                        j,
                                        {
                                            open: V.value,
                                            'onUpdate:open': (i[1] ||= (e) =>
                                                (V.value = e)),
                                            name: c.deployment.name,
                                            'remove-href': l(D)(
                                                c.deployment.key,
                                            ).url,
                                            'preserve-state': !1,
                                            onMissing: (i[2] ||= (e) =>
                                                l(t).visit(l(T)())),
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
