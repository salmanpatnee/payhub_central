import { a as e, n as t, t as n } from './Presence-CKGYlb9k.js';
import {
    B as r,
    Bt as i,
    Ct as a,
    Jt as o,
    K as s,
    Nn as c,
    On as l,
    Qt as u,
    Tt as d,
    Vt as f,
    Wt as p,
    at as m,
    en as h,
    fr as g,
    ht as _,
    it as v,
    mr as y,
    nt as b,
    o as x,
    on as S,
    ot as C,
    pt as w,
    r as T,
    sn as E,
    sr as D,
    un as O,
    vr as k,
    yn as A,
    z as ee,
} from './wayfinder-BZPu7hPl.js';
import {
    a as j,
    i as M,
    s as te,
    t as N,
} from './useForwardExpose-B78G7oXS.js';
import { t as P } from './useForwardPropsEmits-CqoMAl8h.js';
import { t as F } from './check-GUSC4Bfv.js';
import { s as I } from './shared-D-a4oNoz.js';
import {
    A as L,
    M as R,
    N as z,
    T as B,
    V,
    j as H,
    k as U,
} from './app-B62nLDgs.js';
function W(e) {
    return typeof e == `string` ? `'${e}'` : new ne().serialize(e);
}
var G = ` _-,;:!?.'"()[]{}@*/\\&#%\`^+<=>|~$0123456789abcdefghijklmnopqrstuvwxyz`,
    K = (function () {
        let e = new Uint8Array(128);
        for (let t = 0; t < 69; t++) e[G.charCodeAt(t)] = t + 1;
        for (let t = 65; t <= 90; t++) e[t] = e[t + 32];
        return e;
    })();
function q(e, t) {
    if (e === t) return 0;
    let n = Math.min(e.length, t.length),
        r = 0;
    for (let i = 0; i < n; i++) {
        let n = e.charCodeAt(i),
            a = t.charCodeAt(i);
        if (n === a) continue;
        let o = n < 128 && K[n] ? K[n] : n + 128,
            s = a < 128 && K[a] ? K[a] : a + 128;
        if (o !== s) return o < s ? -1 : 1;
        r === 0 && (r = n > a ? -1 : 1);
    }
    return e.length === t.length ? r : e.length < t.length ? -1 : 1;
}
var ne = (function () {
    class e {
        #e = new Map();
        compare(e, t) {
            let n = typeof e,
                r = typeof t;
            return n === `string` && r === `string`
                ? q(e, t)
                : n === `number` && r === `number`
                  ? e - t
                  : q(this.serialize(e, !0), this.serialize(t, !0));
        }
        serialize(e, t) {
            if (e === null) return `null`;
            switch (typeof e) {
                case `string`:
                    return t ? e : `'${e}'`;
                case `bigint`:
                    return `${e}n`;
                case `object`:
                    return this.$object(e);
                case `function`:
                    return this.$function(e);
            }
            return String(e);
        }
        serializeObject(e) {
            let t = Object.prototype.toString.call(e);
            if (t !== `[object Object]`)
                return this.serializeBuiltInType(
                    t.length < 10 ? `unknown:${t}` : t.slice(8, -1),
                    e,
                );
            let n = e.constructor,
                r = n === Object || n === void 0 ? `` : n.name;
            if (r !== `` && globalThis[r] === n)
                return this.serializeBuiltInType(r, e);
            if (`toJSON` in e && typeof e.toJSON == `function`) {
                let t = e.toJSON();
                return (
                    r +
                    (typeof t == `object` && t
                        ? this.$object(t)
                        : `(${this.serialize(t)})`)
                );
            }
            let i = Object.keys(e).sort(q),
                a = `${r}{`;
            for (let t = 0; t < i.length; t++) {
                let n = i[t];
                ((a += `${n}:${this.serialize(e[n])}`),
                    t < i.length - 1 && (a += `,`));
            }
            return a + `}`;
        }
        serializeBuiltInType(e, t) {
            let n = this[`$` + e];
            if (n) return n.call(this, t);
            if (typeof t.entries == `function`)
                return this.serializeObjectEntries(e, t.entries());
            throw Error(`Cannot serialize ${e}`);
        }
        serializeObjectEntries(e, t) {
            let n = Array.from(t).sort((e, t) => this.compare(e[0], t[0])),
                r = `${e}{`;
            for (let e = 0; e < n.length; e++) {
                let [t, i] = n[e];
                ((r += `${this.serialize(t, !0)}:${this.serialize(i)}`),
                    e < n.length - 1 && (r += `,`));
            }
            return r + `}`;
        }
        $object(e) {
            let t = this.#e.get(e);
            return (
                t === void 0 &&
                    (this.#e.set(e, `#${this.#e.size}`),
                    (t = this.serializeObject(e)),
                    this.#e.set(e, t)),
                t
            );
        }
        $function(e) {
            let t = Function.prototype.toString.call(e);
            return t.slice(-15) === `[native code] }`
                ? `${e.name || ``}()[native]`
                : `${e.name}(${e.length})${t.replace(/\s*\n\s*/g, ``)}`;
        }
        $Array(e) {
            let t = `[`;
            for (let n = 0; n < e.length; n++)
                ((t += this.serialize(e[n])), n < e.length - 1 && (t += `,`));
            return t + `]`;
        }
        $Date(e) {
            try {
                return `Date(${e.toISOString()})`;
            } catch {
                return `Date(null)`;
            }
        }
        $ArrayBuffer(e) {
            return `ArrayBuffer[${new Uint8Array(e).join(`,`)}]`;
        }
        $Set(e) {
            return `Set${this.$Array(Array.from(e).sort((e, t) => this.compare(e, t)))}`;
        }
        $Map(e) {
            return this.serializeObjectEntries(`Map`, e.entries());
        }
    }
    for (let t of [`Error`, `RegExp`, `URL`])
        e.prototype[`$` + t] = function (e) {
            return `${t}(${e})`;
        };
    for (let t of [
        `Int8Array`,
        `Uint8Array`,
        `Uint8ClampedArray`,
        `Int16Array`,
        `Uint16Array`,
        `Int32Array`,
        `Uint32Array`,
        `Float32Array`,
        `Float64Array`,
    ])
        e.prototype[`$` + t] = function (e) {
            return `${t}[${e.join(`,`)}]`;
        };
    for (let t of [`BigInt64Array`, `BigUint64Array`])
        e.prototype[`$` + t] = function (e) {
            return `${t}[${e.join(`n,`)}${e.length > 0 ? `n` : ``}]`;
        };
    return e;
})();
function J(e, t) {
    return e === t || W(e) === W(t);
}
function Y(e) {
    return e == null;
}
function X(e, t) {
    return Y(e) ? !1 : Array.isArray(e) ? e.some((e) => J(e, t)) : J(e, t);
}
function re(e) {
    return b(() => !g(e) || !!M(e)?.closest(`form`));
}
function ie() {
    let e = a()?.vnode?.scopeId;
    return e ? { [e]: `` } : {};
}
var Z = _({
        inheritAttrs: !1,
        __name: `VisuallyHiddenInputBubble`,
        props: {
            name: { type: String, required: !0 },
            value: { type: null, required: !0 },
            checked: { type: Boolean, required: !1, default: void 0 },
            required: { type: Boolean, required: !1 },
            disabled: { type: Boolean, required: !1 },
            feature: { type: String, required: !1, default: `fully-hidden` },
        },
        setup(e) {
            let t = e,
                { primitiveElement: n, currentElement: r } = V(),
                a = b(() => t.checked ?? t.value);
            return (
                l(a, (e, t) => {
                    if (!r.value) return;
                    let n = r.value,
                        i = window.HTMLInputElement.prototype,
                        a = Object.getOwnPropertyDescriptor(i, `value`).set;
                    if (a && e !== t) {
                        let t = new Event(`input`, { bubbles: !0 }),
                            r = new Event(`change`, { bubbles: !0 });
                        (a.call(n, e), n.dispatchEvent(t), n.dispatchEvent(r));
                    }
                }),
                (e, r) => (
                    h(),
                    v(
                        R,
                        i(
                            { ref_key: `primitiveElement`, ref: n },
                            { ...t, ...e.$attrs },
                            { as: `input` },
                        ),
                        null,
                        16,
                    )
                )
            );
        },
    }),
    ae = _({
        inheritAttrs: !1,
        __name: `VisuallyHiddenInput`,
        props: {
            name: { type: String, required: !0 },
            value: { type: null, required: !0 },
            checked: { type: Boolean, required: !1, default: void 0 },
            required: { type: Boolean, required: !1 },
            disabled: { type: Boolean, required: !1 },
            feature: { type: String, required: !1, default: `fully-hidden` },
        },
        setup(e) {
            let t = e,
                n = b(
                    () =>
                        typeof t.value == `object` &&
                        Array.isArray(t.value) &&
                        t.value.length === 0 &&
                        t.required,
                ),
                r = b(() =>
                    typeof t.value == `string` ||
                    typeof t.value == `number` ||
                    typeof t.value == `boolean` ||
                    t.value === null ||
                    t.value === void 0
                        ? [{ name: t.name, value: t.value }]
                        : typeof t.value == `object` && Array.isArray(t.value)
                          ? t.value.flatMap((e, n) =>
                                typeof e == `object`
                                    ? Object.entries(e).map(([e, r]) => ({
                                          name: `${t.name}[${n}][${e}]`,
                                          value: r,
                                      }))
                                    : { name: `${t.name}[${n}]`, value: e },
                            )
                          : t.value !== null &&
                              typeof t.value == `object` &&
                              !Array.isArray(t.value)
                            ? Object.entries(t.value).map(([e, n]) => ({
                                  name: `${t.name}[${e}]`,
                                  value: n,
                              }))
                            : [],
                );
            return (a, o) => (
                h(),
                C(
                    s,
                    null,
                    [
                        m(` We render single input if it's required `),
                        n.value
                            ? (h(),
                              v(
                                  Z,
                                  i(
                                      { key: e.name },
                                      { ...t, ...a.$attrs },
                                      { name: e.name, value: e.value },
                                  ),
                                  null,
                                  16,
                                  [`name`, `value`],
                              ))
                            : (h(!0),
                              C(
                                  s,
                                  { key: 1 },
                                  S(
                                      r.value,
                                      (e) => (
                                          h(),
                                          v(
                                              Z,
                                              i(
                                                  { key: e.name },
                                                  { ref_for: !0 },
                                                  { ...t, ...a.$attrs },
                                                  {
                                                      name: e.name,
                                                      value: e.value,
                                                  },
                                              ),
                                              null,
                                              16,
                                              [`name`, `value`],
                                          )
                                      ),
                                  ),
                                  128,
                              )),
                    ],
                    2112,
                )
            );
        },
    }),
    oe = _({
        __name: `RovingFocusItem`,
        props: {
            tabStopId: { type: String, required: !1 },
            focusable: { type: Boolean, required: !1, default: !0 },
            active: { type: Boolean, required: !1 },
            allowShiftKey: { type: Boolean, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1, default: `span` },
        },
        setup(e) {
            let n = e,
                r = B(),
                i = t(),
                a = b(() => n.tabStopId || i),
                s = b(() => r.currentTabStopId.value === a.value),
                { getItems: d, CollectionItem: p } = z();
            (o(() => {
                n.focusable && r.onFocusableItemAdd();
            }),
                u(() => {
                    n.focusable && r.onFocusableItemRemove();
                }),
                l(
                    () => n.focusable,
                    (e, t) => {
                        e !== t &&
                            (e
                                ? r.onFocusableItemAdd()
                                : r.onFocusableItemRemove());
                    },
                ));
            function m(e) {
                if (e.defaultPrevented) return;
                if (e.key === `Tab` && e.shiftKey) {
                    r.onItemShiftTab();
                    return;
                }
                if (e.target !== e.currentTarget) return;
                let t = L(e, r.orientation.value, r.dir.value);
                if (t !== void 0) {
                    if (
                        e.metaKey ||
                        e.ctrlKey ||
                        e.altKey ||
                        (!n.allowShiftKey && e.shiftKey)
                    )
                        return;
                    e.preventDefault();
                    let i = [
                        ...d()
                            .map((e) => e.ref)
                            .filter((e) => e.dataset.disabled !== ``),
                    ];
                    if (t === `last`) i.reverse();
                    else if (t === `prev` || t === `next`) {
                        t === `prev` && i.reverse();
                        let n = i.indexOf(e.currentTarget);
                        i = r.loop.value ? H(i, n + 1) : i.slice(n + 1);
                    }
                    f(() => U(i));
                }
            }
            let { forwardRef: g, currentElement: _ } = N(),
                x = D();
            (l(
                _,
                (e) => {
                    x.value = e;
                },
                { immediate: !0, flush: `post` },
            ),
                j(x, `keydown`, m));
            function S(e) {
                x.value = e.currentTarget;
            }
            return (t, n) => (
                h(),
                v(y(p), null, {
                    default: c(() => [
                        w(
                            y(T),
                            {
                                ref: y(g),
                                tabindex: s.value ? 0 : -1,
                                'data-orientation': y(r).orientation.value,
                                'data-active': e.active ? `` : void 0,
                                'data-disabled': e.focusable ? void 0 : ``,
                                as: e.as,
                                'as-child': e.asChild,
                                onMousedown: (n[0] ||= (t) => {
                                    e.focusable
                                        ? y(r).onItemFocus(a.value)
                                        : t.preventDefault();
                                }),
                                onFocus: (n[1] ||= (e) =>
                                    y(r).onItemFocus(a.value)),
                                onFocusin: S,
                            },
                            {
                                default: c(() => [E(t.$slots, `default`)]),
                                _: 3,
                            },
                            8,
                            [
                                `tabindex`,
                                `data-orientation`,
                                `data-active`,
                                `data-disabled`,
                                `as`,
                                `as-child`,
                            ],
                        ),
                    ]),
                    _: 3,
                })
            );
        },
    }),
    [se, ce] = e(`CheckboxGroupRoot`),
    [le, ue] = e(`FieldRoot`);
function Q(e) {
    return e === `indeterminate`;
}
function $(e) {
    return Q(e) ? `indeterminate` : e ? `checked` : `unchecked`;
}
var [de, fe] = e(`CheckboxRoot`),
    pe = _({
        inheritAttrs: !1,
        __name: `CheckboxRoot`,
        props: {
            defaultValue: { type: null, required: !1 },
            modelValue: { type: null, required: !1, default: void 0 },
            disabled: { type: Boolean, required: !1 },
            value: { type: null, required: !1, default: `on` },
            id: { type: String, required: !1 },
            trueValue: { type: null, required: !1, default: () => !0 },
            falseValue: { type: null, required: !1, default: () => !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1, default: `button` },
            name: { type: String, required: !1 },
            required: { type: Boolean, required: !1 },
        },
        emits: [`update:modelValue`],
        setup(e, { emit: t }) {
            let n = e,
                a = t,
                { forwardRef: u, currentElement: d } = N(),
                f = se(null),
                g = le(null),
                _ = te(n, `modelValue`, a, {
                    defaultValue: n.defaultValue ?? n.falseValue,
                    passive: n.modelValue === void 0,
                }),
                x = b(() => {
                    let e = f?.max.value;
                    if (Y(e)) return !1;
                    let t = f.modelValue.value ?? [];
                    return !X(t, n.value) && t.length >= e;
                }),
                S = b(
                    () =>
                        !!(
                            f?.disabled.value ||
                            n.disabled ||
                            g?.disabled.value
                        ),
                ),
                w = b(() => S.value || x.value),
                D = b(() => !!g && !f),
                k = b(() => n.id ?? (D.value ? g?.fieldId.value : void 0)),
                j = b(() => n.name ?? g?.name.value),
                M = b(() => (g ? n.required || g.required.value : n.required)),
                P = b(() => J(_.value, n.trueValue)),
                F = b(() =>
                    Y(f?.modelValue.value)
                        ? _.value === `indeterminate`
                            ? `indeterminate`
                            : P.value
                        : X(f.modelValue.value, n.value),
                );
            function I() {
                if (w.value) return;
                let e = F.value !== !0;
                if (Y(f?.modelValue.value))
                    _.value === `indeterminate`
                        ? (_.value = n.trueValue)
                        : (_.value = P.value ? n.falseValue : n.trueValue);
                else {
                    let e = [...(f.modelValue.value || [])];
                    if (X(e, n.value)) {
                        let t = e.findIndex((e) => J(e, n.value));
                        e.splice(t, 1);
                    } else e.push(n.value);
                    f.modelValue.value = e;
                }
                D.value && g?.handleControlInput({ value: e });
            }
            l(F, (e) => {
                D.value && g?.reportControlState({ filled: e === !0 });
            });
            let L = re(d),
                R = ie(),
                z = A(),
                B = b(() => {
                    if (!z[`aria-label`])
                        return k.value && d.value
                            ? document.querySelector(`[for="${k.value}"]`)
                                  ?.innerText
                            : void 0;
                });
            function V() {
                let e = (e, t) => [e, t].filter(Boolean).join(` `) || void 0;
                return {
                    'aria-labelledby': e(
                        z[`aria-labelledby`],
                        D.value ? g?.labelId.value : void 0,
                    ),
                    'aria-describedby': e(
                        z[`aria-describedby`],
                        g?.describedBy.value,
                    ),
                    'aria-invalid':
                        z[`aria-invalid`] ?? (g?.invalid.value || void 0),
                };
            }
            function H() {
                g?.handleControlFocus();
            }
            function U() {
                D.value
                    ? g?.handleControlBlur()
                    : g?.reportControlState({ focused: !1, touched: !0 });
            }
            let W;
            return (
                o(() => {
                    D.value &&
                        (W = g?.registerControl({
                            id: () => k.value,
                            element: () => d.value,
                            getValue: () => F.value,
                            required: () => n.required,
                            isFilled: (e) => e === !0,
                        }));
                }),
                p(() => W?.()),
                fe({ disabled: S, state: F }),
                (t, n) => (
                    h(),
                    C(
                        s,
                        null,
                        [
                            (h(),
                            v(
                                O(y(f)?.rovingFocus.value ? y(oe) : y(T)),
                                i(
                                    {
                                        ...y(g)?.dataAttributes.value,
                                        ...t.$attrs,
                                        ...y(R),
                                        ...V(),
                                    },
                                    {
                                        id: k.value,
                                        ref: y(u),
                                        role: `checkbox`,
                                        'as-child': e.asChild,
                                        as: e.as,
                                        type:
                                            e.as === `button`
                                                ? `button`
                                                : void 0,
                                        'aria-checked': y(Q)(F.value)
                                            ? `mixed`
                                            : F.value,
                                        'aria-required': M.value,
                                        'aria-label':
                                            t.$attrs[`aria-label`] || B.value,
                                        'data-state': y($)(F.value),
                                        'aria-disabled': w.value
                                            ? `true`
                                            : void 0,
                                        'data-disabled': S.value ? `` : void 0,
                                        disabled: S.value,
                                        focusable: y(f)?.rovingFocus.value
                                            ? !S.value
                                            : void 0,
                                        onKeydown: ee(
                                            r(() => {}, [`prevent`]),
                                            [`enter`],
                                        ),
                                        onClick: I,
                                        onFocus: H,
                                        onBlur: U,
                                    },
                                ),
                                {
                                    default: c(() => [
                                        E(t.$slots, `default`, {
                                            modelValue: y(_),
                                            state: F.value,
                                        }),
                                    ]),
                                    _: 3,
                                },
                                16,
                                [
                                    `id`,
                                    `as-child`,
                                    `as`,
                                    `type`,
                                    `aria-checked`,
                                    `aria-required`,
                                    `aria-label`,
                                    `data-state`,
                                    `aria-disabled`,
                                    `data-disabled`,
                                    `disabled`,
                                    `focusable`,
                                    `onKeydown`,
                                ],
                            )),
                            y(L) && j.value && !y(f)
                                ? (h(),
                                  v(
                                      y(ae),
                                      i(
                                          {
                                              key: 0,
                                              type: `checkbox`,
                                              checked: !!F.value,
                                              name: j.value,
                                              value: e.value,
                                              disabled: S.value,
                                              required: M.value,
                                          },
                                          y(R),
                                      ),
                                      null,
                                      16,
                                      [
                                          `checked`,
                                          `name`,
                                          `value`,
                                          `disabled`,
                                          `required`,
                                      ],
                                  ))
                                : m(`v-if`, !0),
                        ],
                        64,
                    )
                )
            );
        },
    }),
    me = _({
        __name: `CheckboxIndicator`,
        props: {
            forceMount: { type: Boolean, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1, default: `span` },
        },
        setup(e) {
            let { forwardRef: t } = N(),
                r = de();
            return (a, o) => (
                h(),
                v(
                    y(n),
                    {
                        present:
                            e.forceMount ||
                            y(Q)(y(r).state.value) ||
                            y(r).state.value === !0,
                    },
                    {
                        default: c(() => [
                            w(
                                y(T),
                                i(
                                    {
                                        ref: y(t),
                                        'data-state': y($)(y(r).state.value),
                                        'data-disabled': y(r).disabled.value
                                            ? ``
                                            : void 0,
                                        style: { pointerEvents: `none` },
                                        'as-child': e.asChild,
                                        as: e.as,
                                    },
                                    a.$attrs,
                                ),
                                {
                                    default: c(() => [E(a.$slots, `default`)]),
                                    _: 3,
                                },
                                16,
                                [
                                    `data-state`,
                                    `data-disabled`,
                                    `as-child`,
                                    `as`,
                                ],
                            ),
                        ]),
                        _: 3,
                    },
                    8,
                    [`present`],
                )
            );
        },
    }),
    he = _({
        __name: `Checkbox`,
        props: {
            defaultValue: {},
            modelValue: {},
            disabled: { type: Boolean },
            value: {},
            id: {},
            trueValue: {},
            falseValue: {},
            asChild: { type: Boolean },
            as: {},
            name: {},
            required: { type: Boolean },
            class: { type: [Boolean, null, String, Object, Array] },
        },
        emits: [`update:modelValue`],
        setup(e, { emit: t }) {
            let n = e,
                r = t,
                a = I(n, `class`),
                o = P(a, r);
            return (e, t) => (
                h(),
                v(
                    y(pe),
                    i({ 'data-slot': `checkbox` }, y(o), {
                        class: y(x)(
                            `peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50`,
                            n.class,
                        ),
                    }),
                    {
                        default: c((t) => [
                            w(
                                y(me),
                                {
                                    'data-slot': `checkbox-indicator`,
                                    class: `grid place-content-center text-current transition-none`,
                                },
                                {
                                    default: c(() => [
                                        E(e.$slots, `default`, k(d(t)), () => [
                                            w(y(F), { class: `size-3.5` }),
                                        ]),
                                    ]),
                                    _: 2,
                                },
                                1024,
                            ),
                        ]),
                        _: 3,
                    },
                    16,
                    [`class`],
                )
            );
        },
    });
export { he as t };
