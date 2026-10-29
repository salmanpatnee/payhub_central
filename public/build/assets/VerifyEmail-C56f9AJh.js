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
    n as d,
    ot as f,
    pt as p,
    sn as m,
    t as h,
    u as g,
} from './wayfinder-BZPu7hPl.js';
import { f as _, p as v } from './app-CPSAOrcH.js';
import { t as y } from './Spinner-HKBXW4sQ.js';
var b = c({
        __name: `TextLink`,
        props: { href: {}, tabindex: {}, method: {}, as: {} },
        setup(e) {
            return (t, r) => (
                a(),
                l(
                    u(o),
                    {
                        href: e.href,
                        tabindex: e.tabindex,
                        method: e.method,
                        as: e.as,
                        class: `text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500`,
                    },
                    { default: n(() => [m(t.$slots, `default`)]), _: 3 },
                    8,
                    [`href`, `tabindex`, `method`, `as`],
                )
            );
        },
    }),
    x = (e) => ({ url: x.url(e), method: `get` });
((x.definition = { methods: [`get`, `head`], url: `/email/verify` }),
    (x.url = (e) => x.definition.url + d(e)),
    (x.get = (e) => ({ url: x.url(e), method: `get` })),
    (x.head = (e) => ({ url: x.url(e), method: `head` })));
var S = (e) => ({ action: x.url(e), method: `get` });
((S.get = (e) => ({ action: x.url(e), method: `get` })),
    (S.head = (e) => ({
        action: x.url({
            [e?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(e?.query ?? e?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (x.form = S));
var C = (e, t) => ({ url: C.url(e, t), method: `get` });
((C.definition = {
    methods: [`get`, `head`],
    url: `/email/verify/{id}/{hash}`,
}),
    (C.url = (e, t) => {
        (Array.isArray(e) && (e = { id: e[0], hash: e[1] }), (e = h(e)));
        let n = { id: e.id, hash: e.hash };
        return (
            C.definition.url
                .replace(`{id}`, n.id.toString())
                .replace(`{hash}`, n.hash.toString())
                .replace(/\/+$/, ``) + d(t)
        );
    }),
    (C.get = (e, t) => ({ url: C.url(e, t), method: `get` })),
    (C.head = (e, t) => ({ url: C.url(e, t), method: `head` })));
var w = (e, t) => ({ action: C.url(e, t), method: `get` });
((w.get = (e, t) => ({ action: C.url(e, t), method: `get` })),
    (w.head = (e, t) => ({
        action: C.url(e, {
            [t?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(t?.query ?? t?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (C.form = w));
var T = (e) => ({ url: T.url(e), method: `post` });
((T.definition = {
    methods: [`post`],
    url: `/email/verification-notification`,
}),
    (T.url = (e) => T.definition.url + d(e)),
    (T.post = (e) => ({ url: T.url(e), method: `post` })));
var E = (e) => ({ action: T.url(e), method: `post` });
((E.post = (e) => ({ action: T.url(e), method: `post` })),
    (T.form = E),
    Object.assign(x, x),
    Object.assign(C, C),
    Object.assign(T, T));
var D = {
        key: 0,
        class: `mb-4 text-center text-sm font-medium text-green-600`,
    },
    O = c({
        layout: {
            title: `Email verification`,
            description: `Please verify your email address by clicking on the link we just emailed to you.`,
        },
        __name: `VerifyEmail`,
        props: { status: {} },
        setup(o) {
            return (c, d) => (
                a(),
                f(
                    t,
                    null,
                    [
                        p(u(i), { title: `Email verification` }),
                        o.status === `verification-link-sent`
                            ? (a(),
                              f(
                                  `div`,
                                  D,
                                  ` A new verification link has been sent to the email address you provided during registration. `,
                              ))
                            : r(``, !0),
                        p(
                            u(g),
                            e(u(T).form(), { class: `space-y-6 text-center` }),
                            {
                                default: n(({ processing: e }) => [
                                    p(
                                        u(v),
                                        { disabled: e, variant: `secondary` },
                                        {
                                            default: n(() => [
                                                e
                                                    ? (a(), l(u(y), { key: 0 }))
                                                    : r(``, !0),
                                                (d[0] ||= s(
                                                    ` Resend verification email `,
                                                    -1,
                                                )),
                                            ]),
                                            _: 2,
                                        },
                                        1032,
                                        [`disabled`],
                                    ),
                                    p(
                                        b,
                                        {
                                            href: u(_)(),
                                            as: `button`,
                                            class: `mx-auto block text-sm`,
                                        },
                                        {
                                            default: n(() => [
                                                ...(d[1] ||= [
                                                    s(` Log out `, -1),
                                                ]),
                                            ]),
                                            _: 1,
                                        },
                                        8,
                                        [`href`],
                                    ),
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
export { O as default };
