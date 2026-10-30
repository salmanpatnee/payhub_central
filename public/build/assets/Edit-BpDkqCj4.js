import {
    Bt as e,
    K as t,
    Nn as n,
    at as r,
    br as i,
    d as a,
    en as o,
    f as s,
    ft as c,
    ht as l,
    it as u,
    kn as d,
    mr as f,
    ot as p,
    p as m,
    pt as h,
    rt as g,
    u as _,
} from './wayfinder-BZPu7hPl.js';
import { t as v } from './Label-DoYAx_a7.js';
import { t as y } from './PasswordInput-BxRi6qF1.js';
import { n as b, t as x } from './InputError-COuguPsA.js';
import { d as S, o as C, p as w } from './app-BodD7Qwi.js';
import { t as T } from './PageHeader-D9oPzwwI.js';
import { t as E } from './Spinner-B65Ey6Ws.js';
import { t as D } from './StaffController-C09qeu_l.js';
var O = { class: `mx-auto w-full max-w-7xl space-y-8 p-4 md:p-6` },
    k = { class: `grid gap-2` },
    A = { class: `grid gap-2` },
    j = { class: `flex flex-wrap items-center gap-3` },
    M = { class: `max-w-xl space-y-4`, 'aria-labelledby': `password-title` },
    N = { class: `text-sm text-muted-foreground` },
    P = { class: `grid gap-2` },
    F = l({
        __name: `Edit`,
        props: { person: {}, passwordRules: {} },
        setup(l) {
            let F = l;
            return (
                d(() => {
                    m({
                        breadcrumbs: [
                            { title: `Dashboard`, href: S() },
                            { title: `Staff`, href: C() },
                            { title: F.person.name, href: `#` },
                        ],
                    });
                }),
                (d, m) => (
                    o(),
                    p(
                        t,
                        null,
                        [
                            h(
                                f(a),
                                { title: `Edit ${l.person.name}` },
                                null,
                                8,
                                [`title`],
                            ),
                            g(`div`, O, [
                                h(
                                    T,
                                    {
                                        title: `Edit ${l.person.name}`,
                                        description: `Change the name or email. Their password and sessions are not touched.`,
                                    },
                                    null,
                                    8,
                                    [`title`],
                                ),
                                h(
                                    f(_),
                                    e(f(D).update.form(l.person.id), {
                                        options: { preserveState: `errors` },
                                        class: `max-w-xl space-y-6`,
                                    }),
                                    {
                                        default: n(
                                            ({ errors: e, processing: t }) => [
                                                g(`div`, k, [
                                                    h(
                                                        f(v),
                                                        { for: `name` },
                                                        {
                                                            default: n(() => [
                                                                ...(m[0] ||= [
                                                                    c(
                                                                        `Name`,
                                                                        -1,
                                                                    ),
                                                                ]),
                                                            ]),
                                                            _: 1,
                                                        },
                                                    ),
                                                    h(
                                                        f(b),
                                                        {
                                                            id: `name`,
                                                            name: `name`,
                                                            required: ``,
                                                            autofocus: ``,
                                                            maxlength: `255`,
                                                            autocomplete: `off`,
                                                            'default-value':
                                                                l.person.name,
                                                        },
                                                        null,
                                                        8,
                                                        [`default-value`],
                                                    ),
                                                    h(
                                                        x,
                                                        { message: e.name },
                                                        null,
                                                        8,
                                                        [`message`],
                                                    ),
                                                ]),
                                                g(`div`, A, [
                                                    h(
                                                        f(v),
                                                        { for: `email` },
                                                        {
                                                            default: n(() => [
                                                                ...(m[1] ||= [
                                                                    c(
                                                                        `Email`,
                                                                        -1,
                                                                    ),
                                                                ]),
                                                            ]),
                                                            _: 1,
                                                        },
                                                    ),
                                                    h(
                                                        f(b),
                                                        {
                                                            id: `email`,
                                                            name: `email`,
                                                            type: `email`,
                                                            required: ``,
                                                            maxlength: `255`,
                                                            autocomplete: `off`,
                                                            'default-value':
                                                                l.person.email,
                                                        },
                                                        null,
                                                        8,
                                                        [`default-value`],
                                                    ),
                                                    h(
                                                        x,
                                                        { message: e.email },
                                                        null,
                                                        8,
                                                        [`message`],
                                                    ),
                                                ]),
                                                g(`div`, j, [
                                                    h(
                                                        f(w),
                                                        {
                                                            type: `submit`,
                                                            disabled: t,
                                                        },
                                                        {
                                                            default: n(() => [
                                                                t
                                                                    ? (o(),
                                                                      u(f(E), {
                                                                          key: 0,
                                                                      }))
                                                                    : r(``, !0),
                                                                (m[2] ||= c(
                                                                    ` Save `,
                                                                    -1,
                                                                )),
                                                            ]),
                                                            _: 2,
                                                        },
                                                        1032,
                                                        [`disabled`],
                                                    ),
                                                    h(
                                                        f(w),
                                                        {
                                                            variant: `outline`,
                                                            'as-child': ``,
                                                        },
                                                        {
                                                            default: n(() => [
                                                                h(
                                                                    f(s),
                                                                    {
                                                                        href: f(
                                                                            C,
                                                                        )(),
                                                                    },
                                                                    {
                                                                        default:
                                                                            n(
                                                                                () => [
                                                                                    ...(m[3] ||=
                                                                                        [
                                                                                            c(
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
                                g(`section`, M, [
                                    (m[6] ||= g(
                                        `h2`,
                                        {
                                            id: `password-title`,
                                            class: `text-sm font-semibold tracking-tight`,
                                        },
                                        ` Set new password `,
                                        -1,
                                    )),
                                    g(
                                        `p`,
                                        N,
                                        ` The old password stops working and ` +
                                            i(l.person.name) +
                                            ` is signed out everywhere. Pass the new password to them yourself. `,
                                        1,
                                    ),
                                    h(
                                        f(_),
                                        e(f(D).password.form(l.person.id), {
                                            options: {
                                                preserveState: `errors`,
                                            },
                                            'reset-on-success': ``,
                                            'reset-on-error': [`password`],
                                            class: `space-y-6`,
                                        }),
                                        {
                                            default: n(
                                                ({
                                                    errors: e,
                                                    processing: t,
                                                }) => [
                                                    g(`div`, P, [
                                                        h(
                                                            f(v),
                                                            { for: `password` },
                                                            {
                                                                default: n(
                                                                    () => [
                                                                        ...(m[4] ||=
                                                                            [
                                                                                c(
                                                                                    `New password`,
                                                                                    -1,
                                                                                ),
                                                                            ]),
                                                                    ],
                                                                ),
                                                                _: 1,
                                                            },
                                                        ),
                                                        h(
                                                            y,
                                                            {
                                                                id: `password`,
                                                                name: `password`,
                                                                required: ``,
                                                                autocomplete: `new-password`,
                                                                'data-1p-ignore': `true`,
                                                                'data-lpignore': `true`,
                                                                passwordrules:
                                                                    l.passwordRules,
                                                            },
                                                            null,
                                                            8,
                                                            [`passwordrules`],
                                                        ),
                                                        h(
                                                            x,
                                                            {
                                                                message:
                                                                    e.password,
                                                            },
                                                            null,
                                                            8,
                                                            [`message`],
                                                        ),
                                                    ]),
                                                    h(
                                                        f(w),
                                                        {
                                                            type: `submit`,
                                                            disabled: t,
                                                        },
                                                        {
                                                            default: n(() => [
                                                                t
                                                                    ? (o(),
                                                                      u(f(E), {
                                                                          key: 0,
                                                                      }))
                                                                    : r(``, !0),
                                                                (m[5] ||= c(
                                                                    ` Set new password `,
                                                                    -1,
                                                                )),
                                                            ]),
                                                            _: 2,
                                                        },
                                                        1032,
                                                        [`disabled`],
                                                    ),
                                                ],
                                            ),
                                            _: 1,
                                        },
                                        16,
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
export { F as default };
