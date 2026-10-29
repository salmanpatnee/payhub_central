import {
    Pn as e,
    Vt as t,
    at as n,
    d as r,
    f as i,
    gt as a,
    hr as o,
    it as s,
    mt as c,
    ot as l,
    p as u,
    pt as d,
    q as f,
    r as p,
    st as m,
    tn as h,
} from './wayfinder-DOENF6-v.js';
import { t as g } from './Label-SQSUbFPK.js';
import { t as _ } from './PasswordInput-ChcXxl0b.js';
import { n as v, t as y } from './InputError-DnaVBwgj.js';
import { d as b, o as x, r as S } from './app-B5f9dLA_.js';
import { t as C } from './PageHeader-aqdbQGDc.js';
import { t as w } from './Spinner-DjPLrkEB.js';
import { t as T } from './StaffController-DonmmVnd.js';
var E = { class: `mx-auto w-full max-w-7xl space-y-6 p-4 md:p-6` },
    D = { class: `grid gap-2` },
    O = { class: `grid gap-2` },
    k = { class: `grid gap-2` },
    A = { class: `flex flex-wrap items-center gap-3` },
    j = a({
        layout: {
            breadcrumbs: [
                { title: `Home`, href: b() },
                { title: `Staff`, href: x() },
                { title: `Add staff`, href: S() },
            ],
        },
        __name: `Create`,
        props: { passwordRules: {} },
        setup(a) {
            return (b, S) => (
                h(),
                m(
                    f,
                    null,
                    [
                        c(o(i), { title: `Add staff` }),
                        s(`div`, E, [
                            c(C, {
                                title: `Add staff`,
                                description: `Type a password and pass it to the person yourself. No email is sent.`,
                            }),
                            c(
                                o(r),
                                t(o(T).store.form(), {
                                    'reset-on-success': ``,
                                    'reset-on-error': [`password`],
                                    class: `max-w-xl space-y-6`,
                                }),
                                {
                                    default: e(
                                        ({ errors: t, processing: r }) => [
                                            s(`div`, D, [
                                                c(
                                                    o(g),
                                                    { for: `name` },
                                                    {
                                                        default: e(() => [
                                                            ...(S[0] ||= [
                                                                d(`Name`, -1),
                                                            ]),
                                                        ]),
                                                        _: 1,
                                                    },
                                                ),
                                                c(o(v), {
                                                    id: `name`,
                                                    name: `name`,
                                                    required: ``,
                                                    autofocus: ``,
                                                    maxlength: `255`,
                                                    autocomplete: `off`,
                                                }),
                                                c(
                                                    y,
                                                    { message: t.name },
                                                    null,
                                                    8,
                                                    [`message`],
                                                ),
                                            ]),
                                            s(`div`, O, [
                                                c(
                                                    o(g),
                                                    { for: `email` },
                                                    {
                                                        default: e(() => [
                                                            ...(S[1] ||= [
                                                                d(`Email`, -1),
                                                            ]),
                                                        ]),
                                                        _: 1,
                                                    },
                                                ),
                                                c(o(v), {
                                                    id: `email`,
                                                    name: `email`,
                                                    type: `email`,
                                                    required: ``,
                                                    maxlength: `255`,
                                                    autocomplete: `off`,
                                                }),
                                                c(
                                                    y,
                                                    { message: t.email },
                                                    null,
                                                    8,
                                                    [`message`],
                                                ),
                                            ]),
                                            s(`div`, k, [
                                                c(
                                                    o(g),
                                                    { for: `password` },
                                                    {
                                                        default: e(() => [
                                                            ...(S[2] ||= [
                                                                d(
                                                                    `Password`,
                                                                    -1,
                                                                ),
                                                            ]),
                                                        ]),
                                                        _: 1,
                                                    },
                                                ),
                                                c(
                                                    _,
                                                    {
                                                        id: `password`,
                                                        name: `password`,
                                                        required: ``,
                                                        autocomplete: `new-password`,
                                                        'data-1p-ignore': `true`,
                                                        'data-lpignore': `true`,
                                                        passwordrules:
                                                            a.passwordRules,
                                                    },
                                                    null,
                                                    8,
                                                    [`passwordrules`],
                                                ),
                                                c(
                                                    y,
                                                    { message: t.password },
                                                    null,
                                                    8,
                                                    [`message`],
                                                ),
                                            ]),
                                            s(`div`, A, [
                                                c(
                                                    o(p),
                                                    {
                                                        type: `submit`,
                                                        disabled: r,
                                                    },
                                                    {
                                                        default: e(() => [
                                                            r
                                                                ? (h(),
                                                                  n(o(w), {
                                                                      key: 0,
                                                                  }))
                                                                : l(``, !0),
                                                            (S[3] ||= d(
                                                                ` Add staff `,
                                                                -1,
                                                            )),
                                                        ]),
                                                        _: 2,
                                                    },
                                                    1032,
                                                    [`disabled`],
                                                ),
                                                c(
                                                    o(p),
                                                    {
                                                        variant: `outline`,
                                                        'as-child': ``,
                                                    },
                                                    {
                                                        default: e(() => [
                                                            c(
                                                                o(u),
                                                                {
                                                                    href: o(
                                                                        x,
                                                                    )(),
                                                                },
                                                                {
                                                                    default: e(
                                                                        () => [
                                                                            ...(S[4] ||=
                                                                                [
                                                                                    d(
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
