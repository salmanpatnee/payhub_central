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
import { t as y } from './Checkbox-BbO0q4o4.js';
import { t as b } from './Label-SQSUbFPK.js';
import { t as x } from './PasswordInput-D0pNVU_V.js';
import { n as S, t as C } from './InputError-NcKxWgl1.js';
import { t as w } from './Spinner-CE_plhl7.js';
var T = (e) => ({ url: T.url(e), method: `post` });
((T.definition = { methods: [`post`], url: `/login` }),
    (T.url = (e) => T.definition.url + u(e)),
    (T.post = (e) => ({ url: T.url(e), method: `post` })));
var E = (e) => ({ action: T.url(e), method: `post` });
((E.post = (e) => ({ action: T.url(e), method: `post` })),
    (T.form = E),
    Object.assign(T, T));
var D = {
        key: 0,
        class: `mb-4 text-center text-sm font-medium text-green-600`,
    },
    O = { class: `grid gap-6` },
    k = { class: `grid gap-2` },
    A = { class: `grid gap-2` },
    j = { class: `flex items-center justify-between` },
    M = o({
        layout: {
            title: `Log in to your account`,
            description: `Enter your email and password below to log in`,
        },
        __name: `Login`,
        props: { status: {} },
        setup(o) {
            return (u, E) => {
                let M = _(`focus`);
                return (
                    g(),
                    h(
                        p,
                        null,
                        [
                            l(s(a), { title: `Log in` }),
                            o.status
                                ? (g(), h(`div`, D, v(o.status), 1))
                                : d(``, !0),
                            l(
                                s(i),
                                n(s(T).form(), {
                                    'reset-on-success': [`password`],
                                    class: `flex flex-col gap-6`,
                                }),
                                {
                                    default: t(
                                        ({ errors: n, processing: i }) => [
                                            c(`div`, O, [
                                                c(`div`, k, [
                                                    l(
                                                        s(b),
                                                        { for: `email` },
                                                        {
                                                            default: t(() => [
                                                                ...(E[0] ||= [
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
                                                            s(S),
                                                            {
                                                                id: `email`,
                                                                type: `email`,
                                                                name: `email`,
                                                                required: ``,
                                                                tabindex: 1,
                                                                autocomplete: `email`,
                                                                placeholder: `email@example.com`,
                                                            },
                                                            null,
                                                            512,
                                                        ),
                                                        [[M]],
                                                    ),
                                                    l(
                                                        C,
                                                        { message: n.email },
                                                        null,
                                                        8,
                                                        [`message`],
                                                    ),
                                                ]),
                                                c(`div`, A, [
                                                    l(
                                                        s(b),
                                                        { for: `password` },
                                                        {
                                                            default: t(() => [
                                                                ...(E[1] ||= [
                                                                    f(
                                                                        `Password`,
                                                                        -1,
                                                                    ),
                                                                ]),
                                                            ]),
                                                            _: 1,
                                                        },
                                                    ),
                                                    l(x, {
                                                        id: `password`,
                                                        name: `password`,
                                                        required: ``,
                                                        tabindex: 2,
                                                        autocomplete: `current-password`,
                                                        placeholder: `Password`,
                                                    }),
                                                    l(
                                                        C,
                                                        { message: n.password },
                                                        null,
                                                        8,
                                                        [`message`],
                                                    ),
                                                ]),
                                                c(`div`, j, [
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
                                                                (E[2] ||= c(
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
                                                                  r(s(w), {
                                                                      key: 0,
                                                                  }))
                                                                : d(``, !0),
                                                            (E[3] ||= f(
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
export { M as default };
