import {
    Bt as e,
    K as t,
    Nn as n,
    at as r,
    d as i,
    en as a,
    ft as o,
    ht as s,
    it as c,
    mr as l,
    n as u,
    ot as d,
    pt as f,
    rt as p,
    u as m,
} from './wayfinder-BZPu7hPl.js';
import { t as h } from './Label-DoYAx_a7.js';
import { t as g } from './PasswordInput-Cu8e63-6.js';
import { t as _ } from './InputError-uoSIkkZA.js';
import { p as v } from './app-B62nLDgs.js';
import { t as y } from './Spinner-DrEYD93f.js';
var b = (e) => ({ url: b.url(e), method: `post` });
((b.definition = { methods: [`post`], url: `/user/confirm-password` }),
    (b.url = (e) => b.definition.url + u(e)),
    (b.post = (e) => ({ url: b.url(e), method: `post` })));
var x = (e) => ({ action: b.url(e), method: `post` });
((x.post = (e) => ({ action: b.url(e), method: `post` })),
    (b.form = x),
    Object.assign(b, b));
var S = { class: `space-y-6` },
    C = { class: `grid gap-2` },
    w = { class: `flex items-center` },
    T = s({
        layout: {
            title: `Confirm password`,
            description: `This is a secure area of the application. Please confirm your password before continuing.`,
        },
        __name: `ConfirmPassword`,
        setup(s) {
            return (s, u) => (
                a(),
                d(
                    t,
                    null,
                    [
                        f(l(i), { title: `Confirm password` }),
                        f(
                            l(m),
                            e(l(b).form(), { 'reset-on-success': `` }),
                            {
                                default: n(({ errors: e, processing: t }) => [
                                    p(`div`, S, [
                                        p(`div`, C, [
                                            f(
                                                l(h),
                                                { htmlFor: `password` },
                                                {
                                                    default: n(() => [
                                                        ...(u[0] ||= [
                                                            o(`Password`, -1),
                                                        ]),
                                                    ]),
                                                    _: 1,
                                                },
                                            ),
                                            f(g, {
                                                id: `password`,
                                                name: `password`,
                                                class: `mt-1 block w-full`,
                                                required: ``,
                                                autocomplete: `current-password`,
                                                autofocus: ``,
                                            }),
                                            f(
                                                _,
                                                { message: e.password },
                                                null,
                                                8,
                                                [`message`],
                                            ),
                                        ]),
                                        p(`div`, w, [
                                            f(
                                                l(v),
                                                {
                                                    class: `w-full`,
                                                    disabled: t,
                                                    'data-test': `confirm-password-button`,
                                                },
                                                {
                                                    default: n(() => [
                                                        t
                                                            ? (a(),
                                                              c(l(y), {
                                                                  key: 0,
                                                              }))
                                                            : r(``, !0),
                                                        (u[1] ||= o(
                                                            ` Confirm password `,
                                                            -1,
                                                        )),
                                                    ]),
                                                    _: 2,
                                                },
                                                1032,
                                                [`disabled`],
                                            ),
                                        ]),
                                    ]),
                                ]),
                                _: 1,
                            },
                            16,
                        ),
                    ],
                    64,
                )
            );
        },
    });
export { T as default };
