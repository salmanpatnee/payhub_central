import {
    Bt as e,
    K as t,
    Nn as n,
    at as r,
    d as i,
    en as a,
    f as o,
    ft as s,
    ht as c,
    it as l,
    mr as u,
    ot as d,
    pt as f,
    rt as p,
    u as m,
} from './wayfinder-BZPu7hPl.js';
import { t as h } from './Label-DoYAx_a7.js';
import { t as g } from './PasswordInput-BxRi6qF1.js';
import { n as _, t as v } from './InputError-COuguPsA.js';
import { d as y, o as b, p as x, r as S } from './app-BodD7Qwi.js';
import { t as C } from './PageHeader-D9oPzwwI.js';
import { t as w } from './Spinner-B65Ey6Ws.js';
import { t as T } from './StaffController-C09qeu_l.js';
var E = { class: `mx-auto w-full max-w-7xl space-y-6 p-4 md:p-6` },
    D = { class: `grid gap-2` },
    O = { class: `grid gap-2` },
    k = { class: `grid gap-2` },
    A = { class: `flex flex-wrap items-center gap-3` },
    j = c({
        layout: {
            breadcrumbs: [
                { title: `Dashboard`, href: y() },
                { title: `Staff`, href: b() },
                { title: `Add staff`, href: S() },
            ],
        },
        __name: `Create`,
        props: { passwordRules: {} },
        setup(c) {
            return (y, S) => (
                a(),
                d(
                    t,
                    null,
                    [
                        f(u(i), { title: `Add staff` }),
                        p(`div`, E, [
                            f(C, {
                                title: `Add staff`,
                                description: `Type a password and pass it to the person yourself. No email is sent.`,
                            }),
                            f(
                                u(m),
                                e(u(T).store.form(), {
                                    'reset-on-success': ``,
                                    'reset-on-error': [`password`],
                                    class: `max-w-xl space-y-6`,
                                }),
                                {
                                    default: n(
                                        ({ errors: e, processing: t }) => [
                                            p(`div`, D, [
                                                f(
                                                    u(h),
                                                    { for: `name` },
                                                    {
                                                        default: n(() => [
                                                            ...(S[0] ||= [
                                                                s(`Name`, -1),
                                                            ]),
                                                        ]),
                                                        _: 1,
                                                    },
                                                ),
                                                f(u(_), {
                                                    id: `name`,
                                                    name: `name`,
                                                    required: ``,
                                                    autofocus: ``,
                                                    maxlength: `255`,
                                                    autocomplete: `off`,
                                                }),
                                                f(
                                                    v,
                                                    { message: e.name },
                                                    null,
                                                    8,
                                                    [`message`],
                                                ),
                                            ]),
                                            p(`div`, O, [
                                                f(
                                                    u(h),
                                                    { for: `email` },
                                                    {
                                                        default: n(() => [
                                                            ...(S[1] ||= [
                                                                s(`Email`, -1),
                                                            ]),
                                                        ]),
                                                        _: 1,
                                                    },
                                                ),
                                                f(u(_), {
                                                    id: `email`,
                                                    name: `email`,
                                                    type: `email`,
                                                    required: ``,
                                                    maxlength: `255`,
                                                    autocomplete: `off`,
                                                }),
                                                f(
                                                    v,
                                                    { message: e.email },
                                                    null,
                                                    8,
                                                    [`message`],
                                                ),
                                            ]),
                                            p(`div`, k, [
                                                f(
                                                    u(h),
                                                    { for: `password` },
                                                    {
                                                        default: n(() => [
                                                            ...(S[2] ||= [
                                                                s(
                                                                    `Password`,
                                                                    -1,
                                                                ),
                                                            ]),
                                                        ]),
                                                        _: 1,
                                                    },
                                                ),
                                                f(
                                                    g,
                                                    {
                                                        id: `password`,
                                                        name: `password`,
                                                        required: ``,
                                                        autocomplete: `new-password`,
                                                        'data-1p-ignore': `true`,
                                                        'data-lpignore': `true`,
                                                        passwordrules:
                                                            c.passwordRules,
                                                    },
                                                    null,
                                                    8,
                                                    [`passwordrules`],
                                                ),
                                                f(
                                                    v,
                                                    { message: e.password },
                                                    null,
                                                    8,
                                                    [`message`],
                                                ),
                                            ]),
                                            p(`div`, A, [
                                                f(
                                                    u(x),
                                                    {
                                                        type: `submit`,
                                                        disabled: t,
                                                    },
                                                    {
                                                        default: n(() => [
                                                            t
                                                                ? (a(),
                                                                  l(u(w), {
                                                                      key: 0,
                                                                  }))
                                                                : r(``, !0),
                                                            (S[3] ||= s(
                                                                ` Add staff `,
                                                                -1,
                                                            )),
                                                        ]),
                                                        _: 2,
                                                    },
                                                    1032,
                                                    [`disabled`],
                                                ),
                                                f(
                                                    u(x),
                                                    {
                                                        variant: `outline`,
                                                        'as-child': ``,
                                                    },
                                                    {
                                                        default: n(() => [
                                                            f(
                                                                u(o),
                                                                {
                                                                    href: u(
                                                                        b,
                                                                    )(),
                                                                },
                                                                {
                                                                    default: n(
                                                                        () => [
                                                                            ...(S[4] ||=
                                                                                [
                                                                                    s(
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
                        ]),
                    ],
                    64,
                )
            );
        },
    });
export { j as default };
