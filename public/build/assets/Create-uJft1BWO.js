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
    ot as u,
    pt as d,
    rt as f,
    u as p,
} from './wayfinder-BZPu7hPl.js';
import { t as m } from './Checkbox-9QygNHE3.js';
import { t as h } from './Label-DoYAx_a7.js';
import { t as g } from './PasswordInput-f5h6RjSk.js';
import { n as _, t as v } from './InputError-195jRyWD.js';
import { c as y, d as b, p as x, s as S } from './app-CPSAOrcH.js';
import { t as C } from './PageHeader-D9oPzwwI.js';
import { t as w } from './Spinner-HKBXW4sQ.js';
import { t as T } from './DeploymentController-11eEqESw.js';
var E = { class: `mx-auto w-full max-w-7xl space-y-6 p-4 md:p-6` },
    D = { class: `grid gap-2` },
    O = { class: `grid gap-2` },
    k = { class: `grid gap-2` },
    A = { class: `grid gap-2` },
    j = { class: `grid gap-2` },
    M = `https://payhub.example.com`,
    N = s({
        layout: {
            breadcrumbs: [
                { title: `Home`, href: b() },
                { title: `Deployments`, href: y() },
                { title: `Add deployment`, href: S() },
            ],
        },
        __name: `Create`,
        setup(s) {
            return (s, y) => (
                a(),
                u(
                    t,
                    null,
                    [
                        d(l(i), { title: `Add deployment` }),
                        f(`div`, E, [
                            d(C, {
                                title: `Add deployment`,
                                description: `Connect one PayHub deployment. The token is stored encrypted and is never shown again.`,
                            }),
                            d(
                                l(p),
                                e(l(T).store.form(), {
                                    'reset-on-error': [`token`],
                                    class: `max-w-xl space-y-6`,
                                }),
                                {
                                    default: n(
                                        ({ errors: e, processing: t }) => [
                                            f(`div`, D, [
                                                d(
                                                    l(h),
                                                    { for: `slug` },
                                                    {
                                                        default: n(() => [
                                                            ...(y[0] ||= [
                                                                o(`Key`, -1),
                                                            ]),
                                                        ]),
                                                        _: 1,
                                                    },
                                                ),
                                                d(l(_), {
                                                    id: `slug`,
                                                    name: `slug`,
                                                    required: ``,
                                                    autofocus: ``,
                                                    maxlength: `32`,
                                                    autocomplete: `off`,
                                                    placeholder: `payhub1`,
                                                }),
                                                (y[1] ||= f(
                                                    `p`,
                                                    {
                                                        class: `text-sm text-muted-foreground`,
                                                    },
                                                    ` Must match the key PayHub sends back. Lowercase letters, numbers and hyphens only. `,
                                                    -1,
                                                )),
                                                d(
                                                    v,
                                                    { message: e.slug },
                                                    null,
                                                    8,
                                                    [`message`],
                                                ),
                                            ]),
                                            f(`div`, O, [
                                                d(
                                                    l(h),
                                                    { for: `name` },
                                                    {
                                                        default: n(() => [
                                                            ...(y[2] ||= [
                                                                o(`Name`, -1),
                                                            ]),
                                                        ]),
                                                        _: 1,
                                                    },
                                                ),
                                                d(l(_), {
                                                    id: `name`,
                                                    name: `name`,
                                                    required: ``,
                                                    maxlength: `255`,
                                                    autocomplete: `off`,
                                                    placeholder: `PayHub Main`,
                                                }),
                                                d(
                                                    v,
                                                    { message: e.name },
                                                    null,
                                                    8,
                                                    [`message`],
                                                ),
                                            ]),
                                            f(`div`, k, [
                                                d(
                                                    l(h),
                                                    { for: `base_url` },
                                                    {
                                                        default: n(() => [
                                                            ...(y[3] ||= [
                                                                o(
                                                                    `Base URL`,
                                                                    -1,
                                                                ),
                                                            ]),
                                                        ]),
                                                        _: 1,
                                                    },
                                                ),
                                                d(l(_), {
                                                    id: `base_url`,
                                                    name: `base_url`,
                                                    type: `url`,
                                                    required: ``,
                                                    maxlength: `255`,
                                                    autocomplete: `off`,
                                                    placeholder: M,
                                                }),
                                                d(
                                                    v,
                                                    { message: e.base_url },
                                                    null,
                                                    8,
                                                    [`message`],
                                                ),
                                            ]),
                                            f(`div`, A, [
                                                d(
                                                    l(h),
                                                    { for: `token` },
                                                    {
                                                        default: n(() => [
                                                            ...(y[4] ||= [
                                                                o(`Token`, -1),
                                                            ]),
                                                        ]),
                                                        _: 1,
                                                    },
                                                ),
                                                d(g, {
                                                    id: `token`,
                                                    name: `token`,
                                                    required: ``,
                                                    autocomplete: `off`,
                                                    'data-1p-ignore': `true`,
                                                    'data-lpignore': `true`,
                                                    'aria-label': `Token`,
                                                    placeholder: `64 character token`,
                                                }),
                                                d(
                                                    v,
                                                    { message: e.token },
                                                    null,
                                                    8,
                                                    [`message`],
                                                ),
                                            ]),
                                            f(`div`, j, [
                                                d(
                                                    l(h),
                                                    {
                                                        for: `is_active`,
                                                        class: `flex items-center space-x-3`,
                                                    },
                                                    {
                                                        default: n(() => [
                                                            d(l(m), {
                                                                id: `is_active`,
                                                                name: `is_active`,
                                                                'default-value':
                                                                    !0,
                                                                value: `1`,
                                                            }),
                                                            (y[5] ||= f(
                                                                `span`,
                                                                null,
                                                                `Pull this deployment`,
                                                                -1,
                                                            )),
                                                        ]),
                                                        _: 1,
                                                    },
                                                ),
                                                d(
                                                    v,
                                                    { message: e.is_active },
                                                    null,
                                                    8,
                                                    [`message`],
                                                ),
                                            ]),
                                            d(
                                                l(x),
                                                { type: `submit`, disabled: t },
                                                {
                                                    default: n(() => [
                                                        t
                                                            ? (a(),
                                                              c(l(w), {
                                                                  key: 0,
                                                              }))
                                                            : r(``, !0),
                                                        (y[6] ||= o(
                                                            ` Add deployment `,
                                                            -1,
                                                        )),
                                                    ]),
                                                    _: 2,
                                                },
                                                1032,
                                                [`disabled`],
                                            ),
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
export { N as default };
