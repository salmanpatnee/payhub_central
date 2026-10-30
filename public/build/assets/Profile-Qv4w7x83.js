import {
    Bt as e,
    K as t,
    Nn as n,
    d as r,
    en as i,
    ft as a,
    h as o,
    ht as s,
    mr as c,
    n as l,
    nt as u,
    ot as d,
    pt as f,
    rt as p,
    u as m,
} from './wayfinder-BZPu7hPl.js';
import { t as h } from './Label-DoYAx_a7.js';
import { n as g, t as _ } from './InputError-Ctqc1R_X.js';
import { n as v, p as y, u as b } from './app-DTu1UyN-.js';
var x = (e) => ({ url: x.url(e), method: `get` });
((x.definition = { methods: [`get`, `head`], url: `/settings/profile` }),
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
var C = (e) => ({ url: C.url(e), method: `patch` });
((C.definition = { methods: [`patch`], url: `/settings/profile` }),
    (C.url = (e) => C.definition.url + l(e)),
    (C.patch = (e) => ({ url: C.url(e), method: `patch` })));
var w = (e) => ({
    action: C.url({
        [e?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `PATCH`,
            ...(e?.query ?? e?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
});
((w.patch = (e) => ({
    action: C.url({
        [e?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `PATCH`,
            ...(e?.query ?? e?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
})),
    (C.form = w));
var T = { edit: x, update: C },
    E = { class: `flex flex-col space-y-6` },
    D = { class: `grid gap-2` },
    O = { class: `grid gap-2` },
    k = { class: `flex items-center gap-4` },
    A = s({
        layout: { breadcrumbs: [{ title: `Profile settings`, href: b() }] },
        __name: `Profile`,
        setup(s) {
            let l = o(),
                b = u(() => l.props.auth.user);
            return (o, s) => (
                i(),
                d(
                    t,
                    null,
                    [
                        f(c(r), { title: `Profile settings` }),
                        (s[4] ||= p(
                            `h1`,
                            { class: `sr-only` },
                            `Profile settings`,
                            -1,
                        )),
                        p(`div`, E, [
                            f(v, {
                                variant: `small`,
                                title: `Profile`,
                                description: `Update your name`,
                            }),
                            f(
                                c(m),
                                e(c(T).update.form(), { class: `space-y-6` }),
                                {
                                    default: n(
                                        ({ errors: e, processing: t }) => [
                                            p(`div`, D, [
                                                f(
                                                    c(h),
                                                    { for: `name` },
                                                    {
                                                        default: n(() => [
                                                            ...(s[0] ||= [
                                                                a(`Name`, -1),
                                                            ]),
                                                        ]),
                                                        _: 1,
                                                    },
                                                ),
                                                f(
                                                    c(g),
                                                    {
                                                        id: `name`,
                                                        class: `mt-1 block w-full`,
                                                        name: `name`,
                                                        'default-value':
                                                            b.value.name,
                                                        required: ``,
                                                        autocomplete: `name`,
                                                        placeholder: `Full name`,
                                                    },
                                                    null,
                                                    8,
                                                    [`default-value`],
                                                ),
                                                f(
                                                    _,
                                                    {
                                                        class: `mt-2`,
                                                        message: e.name,
                                                    },
                                                    null,
                                                    8,
                                                    [`message`],
                                                ),
                                            ]),
                                            p(`div`, O, [
                                                f(
                                                    c(h),
                                                    { for: `email` },
                                                    {
                                                        default: n(() => [
                                                            ...(s[1] ||= [
                                                                a(
                                                                    `Email address`,
                                                                    -1,
                                                                ),
                                                            ]),
                                                        ]),
                                                        _: 1,
                                                    },
                                                ),
                                                f(
                                                    c(g),
                                                    {
                                                        id: `email`,
                                                        type: `email`,
                                                        class: `mt-1 block w-full`,
                                                        'model-value':
                                                            b.value.email,
                                                        disabled: ``,
                                                    },
                                                    null,
                                                    8,
                                                    [`model-value`],
                                                ),
                                                (s[2] ||= p(
                                                    `p`,
                                                    {
                                                        class: `text-sm text-muted-foreground`,
                                                    },
                                                    ` Only an admin can change your login email. `,
                                                    -1,
                                                )),
                                            ]),
                                            p(`div`, k, [
                                                f(
                                                    c(y),
                                                    {
                                                        disabled: t,
                                                        'data-test': `update-profile-button`,
                                                    },
                                                    {
                                                        default: n(() => [
                                                            ...(s[3] ||= [
                                                                a(`Save`, -1),
                                                            ]),
                                                        ]),
                                                        _: 1,
                                                    },
                                                    8,
                                                    [`disabled`],
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
export { A as default };
