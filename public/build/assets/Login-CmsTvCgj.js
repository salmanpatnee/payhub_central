import {
    Bt as e,
    Fn as t,
    K as n,
    Nn as r,
    at as i,
    br as a,
    d as o,
    en as s,
    ft as c,
    ht as l,
    it as u,
    ln as d,
    mr as f,
    n as p,
    ot as m,
    pt as h,
    rt as g,
    u as _,
} from './wayfinder-BZPu7hPl.js';
import { t as v } from './Checkbox-DywbYGUJ.js';
import { t as y } from './Label-DoYAx_a7.js';
import { t as b } from './createLucideIcon-B933959x.js';
import { t as x } from './PasswordInput-b6r2X-8c.js';
import { n as S, t as C } from './InputError-Ctqc1R_X.js';
import { p as w } from './app-DTu1UyN-.js';
import { t as T } from './Spinner-Dkf-B2--.js';
var E = b({
        name: `log-in`,
        size: 24,
        node: [
            [`path`, { d: `m10 17 5-5-5-5`, key: `1bsop3` }],
            [`path`, { d: `M15 12H3`, key: `6jk70r` }],
            [
                `path`,
                {
                    d: `M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4`,
                    key: `u53s6r`,
                },
            ],
        ],
    }),
    D = (e) => ({ url: D.url(e), method: `post` });
((D.definition = { methods: [`post`], url: `/login` }),
    (D.url = (e) => D.definition.url + p(e)),
    (D.post = (e) => ({ url: D.url(e), method: `post` })));
var O = (e) => ({ action: D.url(e), method: `post` });
((O.post = (e) => ({ action: D.url(e), method: `post` })),
    (D.form = O),
    Object.assign(D, D));
var k = { key: 0, class: `mb-4 text-center text-sm font-medium text-success` },
    A = { class: `grid gap-6` },
    j = { class: `grid gap-2` },
    M = { class: `grid gap-2` },
    N = { class: `flex items-center justify-between` },
    P = l({
        layout: {
            title: `Log in to your account`,
            description: `Enter your email and password below to log in`,
        },
        __name: `Login`,
        props: { status: {} },
        setup(l) {
            return (p, b) => {
                let O = d(`focus`);
                return (
                    s(),
                    m(
                        n,
                        null,
                        [
                            h(f(o), { title: `Log in` }),
                            l.status
                                ? (s(), m(`div`, k, a(l.status), 1))
                                : i(``, !0),
                            h(
                                f(_),
                                e(f(D).form(), {
                                    'reset-on-success': [`password`],
                                    class: `flex flex-col gap-6`,
                                }),
                                {
                                    default: r(
                                        ({ errors: e, processing: n }) => [
                                            g(`div`, A, [
                                                g(`div`, j, [
                                                    h(
                                                        f(y),
                                                        { for: `email` },
                                                        {
                                                            default: r(() => [
                                                                ...(b[0] ||= [
                                                                    c(
                                                                        `Email address`,
                                                                        -1,
                                                                    ),
                                                                ]),
                                                            ]),
                                                            _: 1,
                                                        },
                                                    ),
                                                    t(
                                                        h(
                                                            f(S),
                                                            {
                                                                id: `email`,
                                                                type: `email`,
                                                                name: `email`,
                                                                required: ``,
                                                                tabindex: 1,
                                                                autocomplete: `email`,
                                                                class: `h-11 rounded-xl bg-auth-field`,
                                                                placeholder: `email@example.com`,
                                                            },
                                                            null,
                                                            512,
                                                        ),
                                                        [[O]],
                                                    ),
                                                    h(
                                                        C,
                                                        { message: e.email },
                                                        null,
                                                        8,
                                                        [`message`],
                                                    ),
                                                ]),
                                                g(`div`, M, [
                                                    h(
                                                        f(y),
                                                        { for: `password` },
                                                        {
                                                            default: r(() => [
                                                                ...(b[1] ||= [
                                                                    c(
                                                                        `Password`,
                                                                        -1,
                                                                    ),
                                                                ]),
                                                            ]),
                                                            _: 1,
                                                        },
                                                    ),
                                                    h(x, {
                                                        id: `password`,
                                                        name: `password`,
                                                        required: ``,
                                                        tabindex: 2,
                                                        autocomplete: `current-password`,
                                                        class: `h-11 rounded-xl bg-auth-field`,
                                                        placeholder: `Password`,
                                                    }),
                                                    h(
                                                        C,
                                                        { message: e.password },
                                                        null,
                                                        8,
                                                        [`message`],
                                                    ),
                                                ]),
                                                g(`div`, N, [
                                                    h(
                                                        f(y),
                                                        {
                                                            for: `remember`,
                                                            class: `flex items-center space-x-3`,
                                                        },
                                                        {
                                                            default: r(() => [
                                                                h(f(v), {
                                                                    id: `remember`,
                                                                    name: `remember`,
                                                                    tabindex: 3,
                                                                }),
                                                                (b[2] ||= g(
                                                                    `span`,
                                                                    null,
                                                                    `Remember me`,
                                                                    -1,
                                                                )),
                                                            ]),
                                                            _: 1,
                                                        },
                                                    ),
                                                ]),
                                                h(
                                                    f(w),
                                                    {
                                                        type: `submit`,
                                                        class: `mt-4 h-11 w-full rounded-xl text-base font-semibold`,
                                                        tabindex: 4,
                                                        disabled: n,
                                                        'data-test': `login-button`,
                                                    },
                                                    {
                                                        default: r(() => [
                                                            n
                                                                ? (s(),
                                                                  u(f(T), {
                                                                      key: 0,
                                                                  }))
                                                                : (s(),
                                                                  u(f(E), {
                                                                      key: 1,
                                                                  })),
                                                            (b[3] ||= c(
                                                                ` Log in `,
                                                                -1,
                                                            )),
                                                        ]),
                                                        _: 2,
                                                    },
                                                    1032,
                                                    [`disabled`],
                                                ),
                                            ]),
                                        ],
                                    ),
                                    _: 1,
                                },
                                16,
                            ),
                        ],
                        64,
                    )
                );
            };
        },
    });
export { P as default };
