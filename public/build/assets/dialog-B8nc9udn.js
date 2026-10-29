import {
    Et as e,
    Pn as t,
    Vt as n,
    at as r,
    cn as i,
    gt as a,
    hr as o,
    it as s,
    mt as c,
    ot as l,
    pt as u,
    r as d,
    s as f,
    st as p,
    tn as m,
    vr as h,
    yr as g,
} from './wayfinder-DOENF6-v.js';
import { n as _, t as v } from './useForwardPropsEmits-BQsdb9GW.js';
import { s as y } from './shared-CHjORj-0.js';
import {
    F as b,
    I as x,
    L as S,
    M as C,
    N as w,
    P as T,
    R as E,
    y as D,
} from './app-D8hkYQeO.js';
var O = a({
        __name: `Dialog`,
        props: {
            open: { type: Boolean },
            defaultOpen: { type: Boolean },
            modal: { type: Boolean },
            unmountOnHide: { type: Boolean },
        },
        emits: [`update:open`],
        setup(a, { emit: s }) {
            let c = v(a, s);
            return (a, s) => (
                m(),
                r(
                    o(E),
                    n({ 'data-slot': `dialog` }, o(c)),
                    {
                        default: t((t) => [i(a.$slots, `default`, g(e(t)))]),
                        _: 3,
                    },
                    16,
                )
            );
        },
    }),
    k = a({
        __name: `DialogOverlay`,
        props: {
            forceMount: { type: Boolean },
            asChild: { type: Boolean },
            as: {},
            class: { type: [Boolean, null, String, Object, Array] },
        },
        setup(e) {
            let a = e,
                s = y(a, `class`);
            return (e, c) => (
                m(),
                r(
                    o(T),
                    n({ 'data-slot': `dialog-overlay` }, o(s), {
                        class: o(f)(
                            `data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80`,
                            a.class,
                        ),
                    }),
                    { default: t(() => [i(e.$slots, `default`)]), _: 3 },
                    16,
                    [`class`],
                )
            );
        },
    }),
    A = a({
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
        setup(e, { emit: a }) {
            let u = e,
                d = a,
                p = y(u, `class`),
                h = v(p, d);
            return (a, d) => (
                m(),
                r(o(w), null, {
                    default: t(() => [
                        c(k),
                        c(
                            o(x),
                            n(
                                { 'data-slot': `dialog-content` },
                                { ...a.$attrs, ...o(h) },
                                {
                                    class: o(f)(
                                        `bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg`,
                                        u.class,
                                    ),
                                },
                            ),
                            {
                                default: t(() => [
                                    i(a.$slots, `default`),
                                    e.showCloseButton
                                        ? (m(),
                                          r(
                                              o(S),
                                              {
                                                  key: 0,
                                                  'data-slot': `dialog-close`,
                                                  class: `ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
                                              },
                                              {
                                                  default: t(() => [
                                                      c(o(D)),
                                                      (d[0] ||= s(
                                                          `span`,
                                                          { class: `sr-only` },
                                                          `Close`,
                                                          -1,
                                                      )),
                                                  ]),
                                                  _: 1,
                                              },
                                          ))
                                        : l(``, !0),
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
    j = a({
        __name: `DialogDescription`,
        props: {
            asChild: { type: Boolean },
            as: {},
            class: { type: [Boolean, null, String, Object, Array] },
        },
        setup(e) {
            let a = e,
                s = y(a, `class`),
                c = _(s);
            return (e, s) => (
                m(),
                r(
                    o(b),
                    n({ 'data-slot': `dialog-description` }, o(c), {
                        class: o(f)(`text-muted-foreground text-sm`, a.class),
                    }),
                    { default: t(() => [i(e.$slots, `default`)]), _: 3 },
                    16,
                    [`class`],
                )
            );
        },
    }),
    M = a({
        __name: `DialogFooter`,
        props: {
            class: { type: [Boolean, null, String, Object, Array] },
            showCloseButton: { type: Boolean, default: !1 },
        },
        setup(e) {
            let n = e;
            return (a, s) => (
                m(),
                p(
                    `div`,
                    {
                        'data-slot': `dialog-footer`,
                        class: h(
                            o(f)(
                                `flex flex-col-reverse gap-2 sm:flex-row sm:justify-end`,
                                n.class,
                            ),
                        ),
                    },
                    [
                        i(a.$slots, `default`),
                        e.showCloseButton
                            ? (m(),
                              r(
                                  o(S),
                                  { key: 0, 'as-child': `` },
                                  {
                                      default: t(() => [
                                          c(
                                              o(d),
                                              { variant: `outline` },
                                              {
                                                  default: t(() => [
                                                      ...(s[0] ||= [
                                                          u(` Close `, -1),
                                                      ]),
                                                  ]),
                                                  _: 1,
                                              },
                                          ),
                                      ]),
                                      _: 1,
                                  },
                              ))
                            : l(``, !0),
                    ],
                    2,
                )
            );
        },
    }),
    N = a({
        __name: `DialogHeader`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                m(),
                p(
                    `div`,
                    {
                        'data-slot': `dialog-header`,
                        class: h(
                            o(f)(
                                `flex flex-col gap-2 text-center sm:text-left`,
                                t.class,
                            ),
                        ),
                    },
                    [i(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    P = a({
        __name: `DialogTitle`,
        props: {
            asChild: { type: Boolean },
            as: {},
            class: { type: [Boolean, null, String, Object, Array] },
        },
        setup(e) {
            let a = e,
                s = y(a, `class`),
                c = _(s);
            return (e, s) => (
                m(),
                r(
                    o(C),
                    n({ 'data-slot': `dialog-title` }, o(c), {
                        class: o(f)(
                            `text-lg leading-none font-semibold`,
                            a.class,
                        ),
                    }),
                    { default: t(() => [i(e.$slots, `default`)]), _: 3 },
                    16,
                    [`class`],
                )
            );
        },
    });
export { A as a, j as i, N as n, O as o, M as r, P as t };
