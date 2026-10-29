import {
    In as e,
    Pn as t,
    Vt as n,
    at as r,
    d as i,
    f as a,
    gt as o,
    hr as s,
    it as c,
    mt as l,
    n as u,
    ot as d,
    pt as f,
    q as p,
    r as m,
    st as h,
    tn as g,
    un as _,
    xr as v,
} from './wayfinder-DOENF6-v.js';
import { t as y } from './Checkbox-CYI7C4Tb.js';
import { t as b } from './Label-SQSUbFPK.js';
import { t as x } from './createLucideIcon-BqhoQwIJ.js';
import { t as S } from './PasswordInput-ChcXxl0b.js';
import { n as C, t as w } from './InputError-DnaVBwgj.js';
import { t as T } from './Spinner-DjPLrkEB.js';
var E = x({
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
    (D.url = (e) => D.definition.url + u(e)),
    (D.post = (e) => ({ url: D.url(e), method: `post` })));
var O = (e) => ({ action: D.url(e), method: `post` });
((O.post = (e) => ({ action: D.url(e), method: `post` })),
    (D.form = O),
    Object.assign(D, D));
var k = {
        key: 0,
        class: `mb-4 text-center text-sm font-medium text-green-600`,
    },
    A = { class: `grid gap-6` },
    j = { class: `grid gap-2` },
    M = { class: `grid gap-2` },
    N = { class: `flex items-center justify-between` },
    P = o({
        layout: {
            title: `Log in to your account`,
            description: `Enter your email and password below to log in`,
        },
        __name: `Login`,
        props: { status: {} },
        setup(o) {
            return (u, x) => {
                let O = _(`focus`);
                return (
                    g(),
                    h(
                        p,
                        null,
                        [
                            l(s(a), { title: `Log in` }),
                            o.status
                                ? (g(), h(`div`, k, v(o.status), 1))
                                : d(``, !0),
                            l(
                                s(i),
                                n(s(D).form(), {
                                    'reset-on-success': [`password`],
                                    class: `flex flex-col gap-6`,
                                }),
                                {
                                    default: t(
                                        ({ errors: n, processing: i }) => [
                                            c(`div`, A, [
                                                c(`div`, j, [
                                                    l(
                                                        s(b),
                                                        { for: `email` },
                                                        {
                                                            default: t(() => [
                                                                ...(x[0] ||= [
                                                                    f(
                                                                        `Email address`,
                                                                        -1,
                                                                    ),
                                                                ]),
                                                            ]),
                                                            _: 1,
                                                        },
                                                    ),
                                                    e(
                                                        l(
                                                            s(C),
                                                            {
                                                                id: `email`,
                                                                type: `email`,
                                                                name: `email`,
                                                                required: ``,
                                                                tabindex: 1,
                                                                autocomplete: `email`,
                                                                class: `bg-auth-field`,
                                                                placeholder: `email@example.com`,
                                                            },
                                                            null,
                                                            512,
                                                        ),
                                                        [[O]],
                                                    ),
                                                    l(
                                                        w,
                                                        { message: n.email },
                                                        null,
                                                        8,
                                                        [`message`],
                                                    ),
                                                ]),
                                                c(`div`, M, [
                                                    l(
                                                        s(b),
                                                        { for: `password` },
                                                        {
                                                            default: t(() => [
                                                                ...(x[1] ||= [
                                                                    f(
                                                                        `Password`,
                                                                        -1,
                                                                    ),
                                                                ]),
                                                            ]),
                                                            _: 1,
                                                        },
                                                    ),
                                                    l(S, {
                                                        id: `password`,
                                                        name: `password`,
                                                        required: ``,
                                                        tabindex: 2,
                                                        autocomplete: `current-password`,
                                                        class: `bg-auth-field`,
                                                        placeholder: `Password`,
                                                    }),
                                                    l(
                                                        w,
                                                        { message: n.password },
                                                        null,
                                                        8,
                                                        [`message`],
                                                    ),
                                                ]),
                                                c(`div`, N, [
                                                    l(
                                                        s(b),
                                                        {
                                                            for: `remember`,
                                                            class: `flex items-center space-x-3`,
                                                        },
                                                        {
                                                            default: t(() => [
                                                                l(s(y), {
                                                                    id: `remember`,
                                                                    name: `remember`,
                                                                    tabindex: 3,
                                                                }),
                                                                (x[2] ||= c(
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
                                                l(
                                                    s(m),
                                                    {
                                                        type: `submit`,
                                                        class: `mt-4 w-full`,
                                                        tabindex: 4,
                                                        disabled: i,
                                                        'data-test': `login-button`,
                                                    },
                                                    {
                                                        default: t(() => [
                                                            i
                                                                ? (g(),
                                                                  r(s(T), {
                                                                      key: 0,
                                                                  }))
                                                                : (g(),
                                                                  r(s(E), {
                                                                      key: 1,
                                                                  })),
                                                            (x[3] ||= f(
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
