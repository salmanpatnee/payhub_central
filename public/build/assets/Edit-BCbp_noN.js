import {
    An as e,
    Pn as t,
    Vt as n,
    at as r,
    d as i,
    f as a,
    gt as o,
    hr as s,
    it as c,
    m as l,
    mt as u,
    ot as d,
    p as f,
    pt as p,
    q as m,
    r as h,
    st as g,
    tn as _,
    xr as v,
} from './wayfinder-DOENF6-v.js';
import { t as y } from './Label-SQSUbFPK.js';
import { t as b } from './PasswordInput-CUpQjno6.js';
import { n as x, t as S } from './InputError-BZLNDWJz.js';
import { d as C, o as w } from './app-D8hkYQeO.js';
import { t as T } from './PageHeader-aqdbQGDc.js';
import { t as E } from './Spinner-BB18Wf_j.js';
import { t as D } from './StaffController-DonmmVnd.js';
var O = { class: `mx-auto w-full max-w-7xl space-y-8 p-4 md:p-6` },
    k = { class: `grid gap-2` },
    A = { class: `grid gap-2` },
    j = { class: `flex flex-wrap items-center gap-3` },
    M = { class: `max-w-xl space-y-4`, 'aria-labelledby': `password-title` },
    N = { class: `text-sm text-muted-foreground` },
    P = { class: `grid gap-2` },
    F = o({
        __name: `Edit`,
        props: { person: {}, passwordRules: {} },
        setup(o) {
            let F = o;
            return (
                e(() => {
                    l({
                        breadcrumbs: [
                            { title: `Home`, href: C() },
                            { title: `Staff`, href: w() },
                            { title: F.person.name, href: `#` },
                        ],
                    });
                }),
                (e, l) => (
                    _(),
                    g(
                        m,
                        null,
                        [
                            u(
                                s(a),
                                { title: `Edit ${o.person.name}` },
                                null,
                                8,
                                [`title`],
                            ),
                            c(`div`, O, [
                                u(
                                    T,
                                    {
                                        title: `Edit ${o.person.name}`,
                                        description: `Change the name or email. Their password and sessions are not touched.`,
                                    },
                                    null,
                                    8,
                                    [`title`],
                                ),
                                u(
                                    s(i),
                                    n(s(D).update.form(o.person.id), {
                                        options: { preserveState: `errors` },
                                        class: `max-w-xl space-y-6`,
                                    }),
                                    {
                                        default: t(
                                            ({ errors: e, processing: n }) => [
                                                c(`div`, k, [
                                                    u(
                                                        s(y),
                                                        { for: `name` },
                                                        {
                                                            default: t(() => [
                                                                ...(l[0] ||= [
                                                                    p(
                                                                        `Name`,
                                                                        -1,
                                                                    ),
                                                                ]),
                                                            ]),
                                                            _: 1,
                                                        },
                                                    ),
                                                    u(
                                                        s(x),
                                                        {
                                                            id: `name`,
                                                            name: `name`,
                                                            required: ``,
                                                            autofocus: ``,
                                                            maxlength: `255`,
                                                            autocomplete: `off`,
                                                            'default-value':
                                                                o.person.name,
                                                        },
                                                        null,
                                                        8,
                                                        [`default-value`],
                                                    ),
                                                    u(
                                                        S,
                                                        { message: e.name },
                                                        null,
                                                        8,
                                                        [`message`],
                                                    ),
                                                ]),
                                                c(`div`, A, [
                                                    u(
                                                        s(y),
                                                        { for: `email` },
                                                        {
                                                            default: t(() => [
                                                                ...(l[1] ||= [
                                                                    p(
                                                                        `Email`,
                                                                        -1,
                                                                    ),
                                                                ]),
                                                            ]),
                                                            _: 1,
                                                        },
                                                    ),
                                                    u(
                                                        s(x),
                                                        {
                                                            id: `email`,
                                                            name: `email`,
                                                            type: `email`,
                                                            required: ``,
                                                            maxlength: `255`,
                                                            autocomplete: `off`,
                                                            'default-value':
                                                                o.person.email,
                                                        },
                                                        null,
                                                        8,
                                                        [`default-value`],
                                                    ),
                                                    u(
                                                        S,
                                                        { message: e.email },
                                                        null,
                                                        8,
                                                        [`message`],
                                                    ),
                                                ]),
                                                c(`div`, j, [
                                                    u(
                                                        s(h),
                                                        {
                                                            type: `submit`,
                                                            disabled: n,
                                                        },
                                                        {
                                                            default: t(() => [
                                                                n
                                                                    ? (_(),
                                                                      r(s(E), {
                                                                          key: 0,
                                                                      }))
                                                                    : d(``, !0),
                                                                (l[2] ||= p(
                                                                    ` Save `,
                                                                    -1,
                                                                )),
                                                            ]),
                                                            _: 2,
                                                        },
                                                        1032,
                                                        [`disabled`],
                                                    ),
                                                    u(
                                                        s(h),
                                                        {
                                                            variant: `outline`,
                                                            'as-child': ``,
                                                        },
                                                        {
                                                            default: t(() => [
                                                                u(
                                                                    s(f),
                                                                    {
                                                                        href: s(
                                                                            w,
                                                                        )(),
                                                                    },
                                                                    {
                                                                        default:
                                                                            t(
                                                                                () => [
                                                                                    ...(l[3] ||=
                                                                                        [
                                                                                            p(
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
                                c(`section`, M, [
                                    (l[6] ||= c(
                                        `h2`,
                                        {
                                            id: `password-title`,
                                            class: `text-sm font-semibold tracking-tight`,
                                        },
                                        ` Set new password `,
                                        -1,
                                    )),
                                    c(
                                        `p`,
                                        N,
                                        ` The old password stops working and ` +
                                            v(o.person.name) +
                                            ` is signed out everywhere. Pass the new password to them yourself. `,
                                        1,
                                    ),
                                    u(
                                        s(i),
                                        n(s(D).password.form(o.person.id), {
                                            options: {
                                                preserveState: `errors`,
                                            },
                                            'reset-on-success': ``,
                                            'reset-on-error': [`password`],
                                            class: `space-y-6`,
                                        }),
                                        {
                                            default: t(
                                                ({
                                                    errors: e,
                                                    processing: n,
                                                }) => [
                                                    c(`div`, P, [
                                                        u(
                                                            s(y),
                                                            { for: `password` },
                                                            {
                                                                default: t(
                                                                    () => [
                                                                        ...(l[4] ||=
                                                                            [
                                                                                p(
                                                                                    `New password`,
                                                                                    -1,
                                                                                ),
                                                                            ]),
                                                                    ],
                                                                ),
                                                                _: 1,
                                                            },
                                                        ),
                                                        u(
                                                            b,
                                                            {
                                                                id: `password`,
                                                                name: `password`,
                                                                required: ``,
                                                                autocomplete: `new-password`,
                                                                'data-1p-ignore': `true`,
                                                                'data-lpignore': `true`,
                                                                passwordrules:
                                                                    o.passwordRules,
                                                            },
                                                            null,
                                                            8,
                                                            [`passwordrules`],
                                                        ),
                                                        u(
                                                            S,
                                                            {
                                                                message:
                                                                    e.password,
                                                            },
                                                            null,
                                                            8,
                                                            [`message`],
                                                        ),
                                                    ]),
                                                    u(
                                                        s(h),
                                                        {
                                                            type: `submit`,
                                                            disabled: n,
                                                        },
                                                        {
                                                            default: t(() => [
                                                                n
                                                                    ? (_(),
                                                                      r(s(E), {
                                                                          key: 0,
                                                                      }))
                                                                    : d(``, !0),
                                                                (l[5] ||= p(
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
