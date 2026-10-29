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
    ot as l,
    pt as u,
    q as d,
    r as f,
    st as p,
    tn as m,
} from './wayfinder-DOENF6-v.js';
import { t as h } from './Checkbox-CYI7C4Tb.js';
import { t as g } from './Label-SQSUbFPK.js';
import { t as _ } from './PasswordInput-ChcXxl0b.js';
import { n as v, t as y } from './InputError-DnaVBwgj.js';
import { c as b, d as x, s as S } from './app-B5f9dLA_.js';
import { t as C } from './PageHeader-aqdbQGDc.js';
import { t as w } from './Spinner-DjPLrkEB.js';
import { t as T } from './DeploymentController-ByDKyI4z.js';
var E = { class: `mx-auto w-full max-w-7xl space-y-6 p-4 md:p-6` },
    D = { class: `grid gap-2` },
    O = { class: `grid gap-2` },
    k = { class: `grid gap-2` },
    A = { class: `grid gap-2` },
    j = { class: `grid gap-2` },
    M = `https://payhub.example.com`,
    N = a({
        layout: {
            breadcrumbs: [
                { title: `Home`, href: x() },
                { title: `Deployments`, href: b() },
                { title: `Add deployment`, href: S() },
            ],
        },
        __name: `Create`,
        setup(a) {
            return (a, b) => (
                m(),
                p(
                    d,
                    null,
                    [
                        c(o(i), { title: `Add deployment` }),
                        s(`div`, E, [
                            c(C, {
                                title: `Add deployment`,
                                description: `Connect one PayHub deployment. The token is stored encrypted and is never shown again.`,
                            }),
                            c(
                                o(r),
                                t(o(T).store.form(), {
                                    'reset-on-error': [`token`],
                                    class: `max-w-xl space-y-6`,
                                }),
                                {
                                    default: e(
                                        ({ errors: t, processing: r }) => [
                                            s(`div`, D, [
                                                c(
                                                    o(g),
                                                    { for: `slug` },
                                                    {
                                                        default: e(() => [
                                                            ...(b[0] ||= [
                                                                u(`Key`, -1),
                                                            ]),
                                                        ]),
                                                        _: 1,
                                                    },
                                                ),
                                                c(o(v), {
                                                    id: `slug`,
                                                    name: `slug`,
                                                    required: ``,
                                                    autofocus: ``,
                                                    maxlength: `32`,
                                                    autocomplete: `off`,
                                                    placeholder: `payhub1`,
                                                }),
                                                (b[1] ||= s(
                                                    `p`,
                                                    {
                                                        class: `text-sm text-muted-foreground`,
                                                    },
                                                    ` Must match the key PayHub sends back. Lowercase letters, numbers and hyphens only. `,
                                                    -1,
                                                )),
                                                c(
                                                    y,
                                                    { message: t.slug },
                                                    null,
                                                    8,
                                                    [`message`],
                                                ),
                                            ]),
                                            s(`div`, O, [
                                                c(
                                                    o(g),
                                                    { for: `name` },
                                                    {
                                                        default: e(() => [
                                                            ...(b[2] ||= [
                                                                u(`Name`, -1),
                                                            ]),
                                                        ]),
                                                        _: 1,
                                                    },
                                                ),
                                                c(o(v), {
                                                    id: `name`,
                                                    name: `name`,
                                                    required: ``,
                                                    maxlength: `255`,
                                                    autocomplete: `off`,
                                                    placeholder: `PayHub Main`,
                                                }),
                                                c(
                                                    y,
                                                    { message: t.name },
                                                    null,
                                                    8,
                                                    [`message`],
                                                ),
                                            ]),
                                            s(`div`, k, [
                                                c(
                                                    o(g),
                                                    { for: `base_url` },
                                                    {
                                                        default: e(() => [
                                                            ...(b[3] ||= [
                                                                u(
                                                                    `Base URL`,
                                                                    -1,
                                                                ),
                                                            ]),
                                                        ]),
                                                        _: 1,
                                                    },
                                                ),
                                                c(o(v), {
                                                    id: `base_url`,
                                                    name: `base_url`,
                                                    type: `url`,
                                                    required: ``,
                                                    maxlength: `255`,
                                                    autocomplete: `off`,
                                                    placeholder: M,
                                                }),
                                                c(
                                                    y,
                                                    { message: t.base_url },
                                                    null,
                                                    8,
                                                    [`message`],
                                                ),
                                            ]),
                                            s(`div`, A, [
                                                c(
                                                    o(g),
                                                    { for: `token` },
                                                    {
                                                        default: e(() => [
                                                            ...(b[4] ||= [
                                                                u(`Token`, -1),
                                                            ]),
                                                        ]),
                                                        _: 1,
                                                    },
                                                ),
                                                c(_, {
                                                    id: `token`,
                                                    name: `token`,
                                                    required: ``,
                                                    autocomplete: `off`,
                                                    'data-1p-ignore': `true`,
                                                    'data-lpignore': `true`,
                                                    'aria-label': `Token`,
                                                    placeholder: `64 character token`,
                                                }),
                                                c(
                                                    y,
                                                    { message: t.token },
                                                    null,
                                                    8,
                                                    [`message`],
                                                ),
                                            ]),
                                            s(`div`, j, [
                                                c(
                                                    o(g),
                                                    {
                                                        for: `is_active`,
                                                        class: `flex items-center space-x-3`,
                                                    },
                                                    {
                                                        default: e(() => [
                                                            c(o(h), {
                                                                id: `is_active`,
                                                                name: `is_active`,
                                                                'default-value':
                                                                    !0,
                                                                value: `1`,
                                                            }),
                                                            (b[5] ||= s(
                                                                `span`,
                                                                null,
                                                                `Pull this deployment`,
                                                                -1,
                                                            )),
                                                        ]),
                                                        _: 1,
                                                    },
                                                ),
                                                c(
                                                    y,
                                                    { message: t.is_active },
                                                    null,
                                                    8,
                                                    [`message`],
                                                ),
                                            ]),
                                            c(
                                                o(f),
                                                { type: `submit`, disabled: r },
                                                {
                                                    default: e(() => [
                                                        r
                                                            ? (m(),
                                                              n(o(w), {
                                                                  key: 0,
                                                              }))
                                                            : l(``, !0),
                                                        (b[6] ||= u(
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
