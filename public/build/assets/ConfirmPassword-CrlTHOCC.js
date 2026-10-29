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
    n as l,
    ot as u,
    pt as d,
    q as f,
    r as p,
    st as m,
    tn as h,
} from './wayfinder-DOENF6-v.js';
import { t as g } from './Label-SQSUbFPK.js';
import { t as _ } from './PasswordInput-CUpQjno6.js';
import { t as v } from './InputError-BZLNDWJz.js';
import { t as y } from './Spinner-BB18Wf_j.js';
var b = (e) => ({ url: b.url(e), method: `post` });
((b.definition = { methods: [`post`], url: `/user/confirm-password` }),
    (b.url = (e) => b.definition.url + l(e)),
    (b.post = (e) => ({ url: b.url(e), method: `post` })));
var x = (e) => ({ action: b.url(e), method: `post` });
((x.post = (e) => ({ action: b.url(e), method: `post` })),
    (b.form = x),
    Object.assign(b, b));
var S = { class: `space-y-6` },
    C = { class: `grid gap-2` },
    w = { class: `flex items-center` },
    T = a({
        layout: {
            title: `Confirm password`,
            description: `This is a secure area of the application. Please confirm your password before continuing.`,
        },
        __name: `ConfirmPassword`,
        setup(a) {
            return (a, l) => (
                h(),
                m(
                    f,
                    null,
                    [
                        c(o(i), { title: `Confirm password` }),
                        c(
                            o(r),
                            t(o(b).form(), { 'reset-on-success': `` }),
                            {
                                default: e(({ errors: t, processing: r }) => [
                                    s(`div`, S, [
                                        s(`div`, C, [
                                            c(
                                                o(g),
                                                { htmlFor: `password` },
                                                {
                                                    default: e(() => [
                                                        ...(l[0] ||= [
                                                            d(`Password`, -1),
                                                        ]),
                                                    ]),
                                                    _: 1,
                                                },
                                            ),
                                            c(_, {
                                                id: `password`,
                                                name: `password`,
                                                class: `mt-1 block w-full`,
                                                required: ``,
                                                autocomplete: `current-password`,
                                                autofocus: ``,
                                            }),
                                            c(
                                                v,
                                                { message: t.password },
                                                null,
                                                8,
                                                [`message`],
                                            ),
                                        ]),
                                        s(`div`, w, [
                                            c(
                                                o(p),
                                                {
                                                    class: `w-full`,
                                                    disabled: r,
                                                    'data-test': `confirm-password-button`,
                                                },
                                                {
                                                    default: e(() => [
                                                        r
                                                            ? (h(),
                                                              n(o(y), {
                                                                  key: 0,
                                                              }))
                                                            : u(``, !0),
                                                        (l[1] ||= d(
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
