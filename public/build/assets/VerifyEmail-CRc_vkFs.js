import {
    Pn as e,
    Vt as t,
    at as n,
    cn as r,
    d as i,
    f as a,
    gt as o,
    hr as s,
    mt as c,
    n as l,
    ot as u,
    p as d,
    pt as f,
    q as p,
    r as m,
    st as h,
    t as g,
    tn as _,
} from './wayfinder-DOENF6-v.js';
import { f as v } from './app-B5f9dLA_.js';
import { t as y } from './Spinner-DjPLrkEB.js';
var b = o({
        __name: `TextLink`,
        props: { href: {}, tabindex: {}, method: {}, as: {} },
        setup(t) {
            return (i, a) => (
                _(),
                n(
                    s(d),
                    {
                        href: t.href,
                        tabindex: t.tabindex,
                        method: t.method,
                        as: t.as,
                        class: `text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500`,
                    },
                    { default: e(() => [r(i.$slots, `default`)]), _: 3 },
                    8,
                    [`href`, `tabindex`, `method`, `as`],
                )
            );
        },
    }),
    x = (e) => ({ url: x.url(e), method: `get` });
((x.definition = { methods: [`get`, `head`], url: `/email/verify` }),
    (x.url = (e) => x.definition.url + l(e)),
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
        (Array.isArray(e) && (e = { id: e[0], hash: e[1] }), (e = g(e)));
        let n = { id: e.id, hash: e.hash };
        return (
            C.definition.url
                .replace(`{id}`, n.id.toString())
                .replace(`{hash}`, n.hash.toString())
                .replace(/\/+$/, ``) + l(t)
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
    (T.url = (e) => T.definition.url + l(e)),
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
    O = o({
        layout: {
            title: `Email verification`,
            description: `Please verify your email address by clicking on the link we just emailed to you.`,
        },
        __name: `VerifyEmail`,
        props: { status: {} },
        setup(r) {
            return (o, l) => (
                _(),
                h(
                    p,
                    null,
                    [
                        c(s(a), { title: `Email verification` }),
                        r.status === `verification-link-sent`
                            ? (_(),
                              h(
                                  `div`,
                                  D,
                                  ` A new verification link has been sent to the email address you provided during registration. `,
                              ))
                            : u(``, !0),
                        c(
                            s(i),
                            t(s(T).form(), { class: `space-y-6 text-center` }),
                            {
                                default: e(({ processing: t }) => [
                                    c(
                                        s(m),
                                        { disabled: t, variant: `secondary` },
                                        {
                                            default: e(() => [
                                                t
                                                    ? (_(), n(s(y), { key: 0 }))
                                                    : u(``, !0),
                                                (l[0] ||= f(
                                                    ` Resend verification email `,
                                                    -1,
                                                )),
                                            ]),
                                            _: 2,
                                        },
                                        1032,
                                        [`disabled`],
                                    ),
                                    c(
                                        b,
                                        {
                                            href: s(v)(),
                                            as: `button`,
                                            class: `mx-auto block text-sm`,
                                        },
                                        {
                                            default: e(() => [
                                                ...(l[1] ||= [
                                                    f(` Log out `, -1),
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
