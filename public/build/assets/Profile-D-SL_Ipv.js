import {
    Pn as e,
    Vt as t,
    d as n,
    f as r,
    g as i,
    gt as a,
    hr as o,
    it as s,
    mt as c,
    n as l,
    pt as u,
    q as d,
    r as f,
    rt as p,
    st as m,
    tn as h,
} from './wayfinder-DOENF6-v.js';
import { t as g } from './Label-SQSUbFPK.js';
import { n as _, t as v } from './InputError-NcKxWgl1.js';
import { n as y, u as b } from './app-DCCfXFlv.js';
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
    A = a({
        layout: { breadcrumbs: [{ title: `Profile settings`, href: b() }] },
        __name: `Profile`,
        setup(a) {
            let l = i(),
                b = p(() => l.props.auth.user);
            return (i, a) => (
                h(),
                m(
                    d,
                    null,
                    [
                        c(o(r), { title: `Profile settings` }),
                        (a[4] ||= s(
                            `h1`,
                            { class: `sr-only` },
                            `Profile settings`,
                            -1,
                        )),
                        s(`div`, E, [
                            c(y, {
                                variant: `small`,
                                title: `Profile`,
                                description: `Update your name`,
                            }),
                            c(
                                o(n),
                                t(o(T).update.form(), { class: `space-y-6` }),
                                {
                                    default: e(
                                        ({ errors: t, processing: n }) => [
                                            s(`div`, D, [
                                                c(
                                                    o(g),
                                                    { for: `name` },
                                                    {
                                                        default: e(() => [
                                                            ...(a[0] ||= [
                                                                u(`Name`, -1),
                                                            ]),
                                                        ]),
                                                        _: 1,
                                                    },
                                                ),
                                                c(
                                                    o(_),
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
                                                c(
                                                    v,
                                                    {
                                                        class: `mt-2`,
                                                        message: t.name,
                                                    },
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
                                                            ...(a[1] ||= [
                                                                u(
                                                                    `Email address`,
                                                                    -1,
                                                                ),
                                                            ]),
                                                        ]),
                                                        _: 1,
                                                    },
                                                ),
                                                c(
                                                    o(_),
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
                                                (a[2] ||= s(
                                                    `p`,
                                                    {
                                                        class: `text-sm text-muted-foreground`,
                                                    },
                                                    ` Only an admin can change your login email. `,
                                                    -1,
                                                )),
                                            ]),
                                            s(`div`, k, [
                                                c(
                                                    o(f),
                                                    {
                                                        disabled: n,
                                                        'data-test': `update-profile-button`,
                                                    },
                                                    {
                                                        default: e(() => [
                                                            ...(a[3] ||= [
                                                                u(`Save`, -1),
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
