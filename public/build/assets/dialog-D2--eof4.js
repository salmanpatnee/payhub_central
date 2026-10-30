import {
    Bt as e,
    Nn as t,
    Tt as n,
    _r as r,
    at as i,
    en as a,
    ft as o,
    ht as s,
    it as c,
    mr as l,
    o as u,
    ot as d,
    pt as f,
    rt as p,
    sn as m,
    vr as h,
} from './wayfinder-BZPu7hPl.js';
import { n as g, t as _ } from './useForwardPropsEmits-CqoMAl8h.js';
import { s as v } from './shared-D-a4oNoz.js';
import {
    B as y,
    F as b,
    I as x,
    L as S,
    P as C,
    R as w,
    b as T,
    p as E,
    z as D,
} from './app-DTu1UyN-.js';
var O = s({
        __name: `Dialog`,
        props: {
            open: { type: Boolean },
            defaultOpen: { type: Boolean },
            modal: { type: Boolean },
            unmountOnHide: { type: Boolean },
        },
        emits: [`update:open`],
        setup(r, { emit: i }) {
            let o = _(r, i);
            return (r, i) => (
                a(),
                c(
                    l(y),
                    e({ 'data-slot': `dialog` }, l(o)),
                    {
                        default: t((e) => [m(r.$slots, `default`, h(n(e)))]),
                        _: 3,
                    },
                    16,
                )
            );
        },
    }),
    k = s({
        __name: `DialogOverlay`,
        props: {
            forceMount: { type: Boolean },
            asChild: { type: Boolean },
            as: {},
            class: { type: [Boolean, null, String, Object, Array] },
        },
        setup(n) {
            let r = n,
                i = v(r, `class`);
            return (n, o) => (
                a(),
                c(
                    l(x),
                    e({ 'data-slot': `dialog-overlay` }, l(i), {
                        class: l(u)(
                            `data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80`,
                            r.class,
                        ),
                    }),
                    { default: t(() => [m(n.$slots, `default`)]), _: 3 },
                    16,
                    [`class`],
                )
            );
        },
    }),
    A = s({
        inheritAttrs: !1,
        __name: `DialogContent`,
        props: {
            forceMount: { type: Boolean },
            disableOutsidePointerEvents: { type: Boolean },
            asChild: { type: Boolean },
            as: {},
            class: { type: [Boolean, null, String, Object, Array] },
            showCloseButton: { type: Boolean, default: !0 },
        },
        emits: [
            `escapeKeyDown`,
            `pointerDownOutside`,
            `focusOutside`,
            `interactOutside`,
            `openAutoFocus`,
            `closeAutoFocus`,
        ],
        setup(n, { emit: r }) {
            let o = n,
                s = r,
                d = v(o, `class`),
                h = _(d, s);
            return (r, s) => (
                a(),
                c(l(b), null, {
                    default: t(() => [
                        f(k),
                        f(
                            l(w),
                            e(
                                { 'data-slot': `dialog-content` },
                                { ...r.$attrs, ...l(h) },
                                {
                                    class: l(u)(
                                        `bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg`,
                                        o.class,
                                    ),
                                },
                            ),
                            {
                                default: t(() => [
                                    m(r.$slots, `default`),
                                    n.showCloseButton
                                        ? (a(),
                                          c(
                                              l(D),
                                              {
                                                  key: 0,
                                                  'data-slot': `dialog-close`,
                                                  class: `ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
                                              },
                                              {
                                                  default: t(() => [
                                                      f(l(T)),
                                                      (s[0] ||= p(
                                                          `span`,
                                                          { class: `sr-only` },
                                                          `Close`,
                                                          -1,
                                                      )),
                                                  ]),
                                                  _: 1,
                                              },
                                          ))
                                        : i(``, !0),
                                ]),
                                _: 3,
                            },
                            16,
                            [`class`],
                        ),
                    ]),
                    _: 3,
                })
            );
        },
    }),
    j = s({
        __name: `DialogDescription`,
        props: {
            asChild: { type: Boolean },
            as: {},
            class: { type: [Boolean, null, String, Object, Array] },
        },
        setup(n) {
            let r = n,
                i = v(r, `class`),
                o = g(i);
            return (n, i) => (
                a(),
                c(
                    l(S),
                    e({ 'data-slot': `dialog-description` }, l(o), {
                        class: l(u)(`text-muted-foreground text-sm`, r.class),
                    }),
                    { default: t(() => [m(n.$slots, `default`)]), _: 3 },
                    16,
                    [`class`],
                )
            );
        },
    }),
    M = s({
        __name: `DialogFooter`,
        props: {
            class: { type: [Boolean, null, String, Object, Array] },
            showCloseButton: { type: Boolean, default: !1 },
        },
        setup(e) {
            let n = e;
            return (s, p) => (
                a(),
                d(
                    `div`,
                    {
                        'data-slot': `dialog-footer`,
                        class: r(
                            l(u)(
                                `flex flex-col-reverse gap-2 sm:flex-row sm:justify-end`,
                                n.class,
                            ),
                        ),
                    },
                    [
                        m(s.$slots, `default`),
                        e.showCloseButton
                            ? (a(),
                              c(
                                  l(D),
                                  { key: 0, 'as-child': `` },
                                  {
                                      default: t(() => [
                                          f(
                                              l(E),
                                              { variant: `outline` },
                                              {
                                                  default: t(() => [
                                                      ...(p[0] ||= [
                                                          o(` Close `, -1),
                                                      ]),
                                                  ]),
                                                  _: 1,
                                              },
                                          ),
                                      ]),
                                      _: 1,
                                  },
                              ))
                            : i(``, !0),
                    ],
                    2,
                )
            );
        },
    }),
    N = s({
        __name: `DialogHeader`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                a(),
                d(
                    `div`,
                    {
                        'data-slot': `dialog-header`,
                        class: r(
                            l(u)(
                                `flex flex-col gap-2 text-center sm:text-left`,
                                t.class,
                            ),
                        ),
                    },
                    [m(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    P = s({
        __name: `DialogTitle`,
        props: {
            asChild: { type: Boolean },
            as: {},
            class: { type: [Boolean, null, String, Object, Array] },
        },
        setup(n) {
            let r = n,
                i = v(r, `class`),
                o = g(i);
            return (n, i) => (
                a(),
                c(
                    l(C),
                    e({ 'data-slot': `dialog-title` }, l(o), {
                        class: l(u)(
                            `text-lg leading-none font-semibold`,
                            r.class,
                        ),
                    }),
                    { default: t(() => [m(n.$slots, `default`)]), _: 3 },
                    16,
                    [`class`],
                )
            );
        },
    });
export { A as a, j as i, N as n, O as o, M as r, P as t };
