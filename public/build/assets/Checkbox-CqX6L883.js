import { a as e, n as t, t as n } from './Presence-L0dip4UT.js';
import {
    $t as r,
    B as i,
    Et as a,
    Gt as o,
    Ht as s,
    Pn as c,
    V as l,
    Vt as u,
    Yt as d,
    at as f,
    bn as p,
    cn as m,
    cr as h,
    dn as g,
    gt as _,
    hr as v,
    i as y,
    kn as b,
    mt as x,
    ot as S,
    pr as C,
    q as w,
    rt as T,
    s as E,
    sn as D,
    st as O,
    tn as k,
    wt as A,
    yr as j,
} from './wayfinder-DOENF6-v.js';
import {
    a as M,
    i as N,
    s as ee,
    t as P,
} from './useForwardExpose-BVGbRqkE.js';
import { t as F } from './useForwardPropsEmits-BQsdb9GW.js';
import { t as I } from './check-u3Gy4IT4.js';
import { s as L } from './shared-CHjORj-0.js';
import {
    A as R,
    C as z,
    D as B,
    O as V,
    j as H,
    k as U,
    z as W,
} from './app-D8hkYQeO.js';
function G(e) {
    return typeof e == `string` ? `'${e}'` : new ne().serialize(e);
}
var te = ` _-,;:!?.'"()[]{}@*/\\&#%\`^+<=>|~$0123456789abcdefghijklmnopqrstuvwxyz`,
    K = (function () {
        let e = new Uint8Array(128);
        for (let t = 0; t < 69; t++) e[te.charCodeAt(t)] = t + 1;
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
    return e === t || G(e) === G(t);
}
function Y(e) {
    return e == null;
}
function X(e, t) {
    return Y(e) ? !1 : Array.isArray(e) ? e.some((e) => J(e, t)) : J(e, t);
}
function re(e) {
    return T(() => !C(e) || !!N(e)?.closest(`form`));
}
function ie() {
    let e = A()?.vnode?.scopeId;
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
                { primitiveElement: n, currentElement: r } = W(),
                i = T(() => t.checked ?? t.value);
            return (
                b(i, (e, t) => {
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
                    k(),
                    f(
                        R,
                        u(
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
                n = T(
                    () =>
                        typeof t.value == `object` &&
                        Array.isArray(t.value) &&
                        t.value.length === 0 &&
                        t.required,
                ),
                r = T(() =>
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
            return (i, a) => (
                k(),
                O(
                    w,
                    null,
                    [
                        S(` We render single input if it's required `),
                        n.value
                            ? (k(),
                              f(
                                  Z,
                                  u(
                                      { key: e.name },
                                      { ...t, ...i.$attrs },
                                      { name: e.name, value: e.value },
                                  ),
                                  null,
                                  16,
                                  [`name`, `value`],
                              ))
                            : (k(!0),
                              O(
                                  w,
                                  { key: 1 },
                                  D(
                                      r.value,
                                      (e) => (
                                          k(),
                                          f(
                                              Z,
                                              u(
                                                  { key: e.name },
                                                  { ref_for: !0 },
                                                  { ...t, ...i.$attrs },
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
                i = z(),
                a = t(),
                o = T(() => n.tabStopId || a),
                l = T(() => i.currentTabStopId.value === o.value),
                { getItems: u, CollectionItem: p } = H();
            (d(() => {
                n.focusable && i.onFocusableItemAdd();
            }),
                r(() => {
                    n.focusable && i.onFocusableItemRemove();
                }),
                b(
                    () => n.focusable,
                    (e, t) => {
                        e !== t &&
                            (e
                                ? i.onFocusableItemAdd()
                                : i.onFocusableItemRemove());
                    },
                ));
            function g(e) {
                if (e.defaultPrevented) return;
                if (e.key === `Tab` && e.shiftKey) {
                    i.onItemShiftTab();
                    return;
                }
                if (e.target !== e.currentTarget) return;
                let t = V(e, i.orientation.value, i.dir.value);
                if (t !== void 0) {
                    if (
                        e.metaKey ||
                        e.ctrlKey ||
                        e.altKey ||
                        (!n.allowShiftKey && e.shiftKey)
                    )
                        return;
                    e.preventDefault();
                    let r = [
                        ...u()
                            .map((e) => e.ref)
                            .filter((e) => e.dataset.disabled !== ``),
                    ];
                    if (t === `last`) r.reverse();
                    else if (t === `prev` || t === `next`) {
                        t === `prev` && r.reverse();
                        let n = r.indexOf(e.currentTarget);
                        r = i.loop.value ? U(r, n + 1) : r.slice(n + 1);
                    }
                    s(() => B(r));
                }
            }
            let { forwardRef: _, currentElement: S } = P(),
                C = h();
            (b(
                S,
                (e) => {
                    C.value = e;
                },
                { immediate: !0, flush: `post` },
            ),
                M(C, `keydown`, g));
            function w(e) {
                C.value = e.currentTarget;
            }
            return (t, n) => (
                k(),
                f(v(p), null, {
                    default: c(() => [
                        x(
                            v(y),
                            {
                                ref: v(_),
                                tabindex: l.value ? 0 : -1,
                                'data-orientation': v(i).orientation.value,
                                'data-active': e.active ? `` : void 0,
                                'data-disabled': e.focusable ? void 0 : ``,
                                as: e.as,
                                'as-child': e.asChild,
                                onMousedown: (n[0] ||= (t) => {
                                    e.focusable
                                        ? v(i).onItemFocus(o.value)
                                        : t.preventDefault();
                                }),
                                onFocus: (n[1] ||= (e) =>
                                    v(i).onItemFocus(o.value)),
                                onFocusin: w,
                            },
                            {
                                default: c(() => [m(t.$slots, `default`)]),
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
                r = t,
                { forwardRef: a, currentElement: s } = P(),
                h = se(null),
                _ = le(null),
                x = ee(n, `modelValue`, r, {
                    defaultValue: n.defaultValue ?? n.falseValue,
                    passive: n.modelValue === void 0,
                }),
                C = T(() => {
                    let e = h?.max.value;
                    if (Y(e)) return !1;
                    let t = h.modelValue.value ?? [];
                    return !X(t, n.value) && t.length >= e;
                }),
                E = T(
                    () =>
                        !!(
                            h?.disabled.value ||
                            n.disabled ||
                            _?.disabled.value
                        ),
                ),
                D = T(() => E.value || C.value),
                A = T(() => !!_ && !h),
                j = T(() => n.id ?? (A.value ? _?.fieldId.value : void 0)),
                M = T(() => n.name ?? _?.name.value),
                N = T(() => (_ ? n.required || _.required.value : n.required)),
                F = T(() => J(x.value, n.trueValue)),
                I = T(() =>
                    Y(h?.modelValue.value)
                        ? x.value === `indeterminate`
                            ? `indeterminate`
                            : F.value
                        : X(h.modelValue.value, n.value),
                );
            function L() {
                if (D.value) return;
                let e = I.value !== !0;
                if (Y(h?.modelValue.value))
                    x.value === `indeterminate`
                        ? (x.value = n.trueValue)
                        : (x.value = F.value ? n.falseValue : n.trueValue);
                else {
                    let e = [...(h.modelValue.value || [])];
                    if (X(e, n.value)) {
                        let t = e.findIndex((e) => J(e, n.value));
                        e.splice(t, 1);
                    } else e.push(n.value);
                    h.modelValue.value = e;
                }
                A.value && _?.handleControlInput({ value: e });
            }
            b(I, (e) => {
                A.value && _?.reportControlState({ filled: e === !0 });
            });
            let R = re(s),
                z = ie(),
                B = p(),
                V = T(() => {
                    if (!B[`aria-label`])
                        return j.value && s.value
                            ? document.querySelector(`[for="${j.value}"]`)
                                  ?.innerText
                            : void 0;
                });
            function H() {
                let e = (e, t) => [e, t].filter(Boolean).join(` `) || void 0;
                return {
                    'aria-labelledby': e(
                        B[`aria-labelledby`],
                        A.value ? _?.labelId.value : void 0,
                    ),
                    'aria-describedby': e(
                        B[`aria-describedby`],
                        _?.describedBy.value,
                    ),
                    'aria-invalid':
                        B[`aria-invalid`] ?? (_?.invalid.value || void 0),
                };
            }
            function U() {
                _?.handleControlFocus();
            }
            function W() {
                A.value
                    ? _?.handleControlBlur()
                    : _?.reportControlState({ focused: !1, touched: !0 });
            }
            let G;
            return (
                d(() => {
                    A.value &&
                        (G = _?.registerControl({
                            id: () => j.value,
                            element: () => s.value,
                            getValue: () => I.value,
                            required: () => n.required,
                            isFilled: (e) => e === !0,
                        }));
                }),
                o(() => G?.()),
                fe({ disabled: E, state: I }),
                (t, n) => (
                    k(),
                    O(
                        w,
                        null,
                        [
                            (k(),
                            f(
                                g(v(h)?.rovingFocus.value ? v(oe) : v(y)),
                                u(
                                    {
                                        ...v(_)?.dataAttributes.value,
                                        ...t.$attrs,
                                        ...v(z),
                                        ...H(),
                                    },
                                    {
                                        id: j.value,
                                        ref: v(a),
                                        role: `checkbox`,
                                        'as-child': e.asChild,
                                        as: e.as,
                                        type:
                                            e.as === `button`
                                                ? `button`
                                                : void 0,
                                        'aria-checked': v(Q)(I.value)
                                            ? `mixed`
                                            : I.value,
                                        'aria-required': N.value,
                                        'aria-label':
                                            t.$attrs[`aria-label`] || V.value,
                                        'data-state': v($)(I.value),
                                        'aria-disabled': D.value
                                            ? `true`
                                            : void 0,
                                        'data-disabled': E.value ? `` : void 0,
                                        disabled: E.value,
                                        focusable: v(h)?.rovingFocus.value
                                            ? !E.value
                                            : void 0,
                                        onKeydown: i(
                                            l(() => {}, [`prevent`]),
                                            [`enter`],
                                        ),
                                        onClick: L,
                                        onFocus: U,
                                        onBlur: W,
                                    },
                                ),
                                {
                                    default: c(() => [
                                        m(t.$slots, `default`, {
                                            modelValue: v(x),
                                            state: I.value,
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
                            v(R) && M.value && !v(h)
                                ? (k(),
                                  f(
                                      v(ae),
                                      u(
                                          {
                                              key: 0,
                                              type: `checkbox`,
                                              checked: !!I.value,
                                              name: M.value,
                                              value: e.value,
                                              disabled: E.value,
                                              required: N.value,
                                          },
                                          v(z),
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
                                : S(`v-if`, !0),
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
            let { forwardRef: t } = P(),
                r = de();
            return (i, a) => (
                k(),
                f(
                    v(n),
                    {
                        present:
                            e.forceMount ||
                            v(Q)(v(r).state.value) ||
                            v(r).state.value === !0,
                    },
                    {
                        default: c(() => [
                            x(
                                v(y),
                                u(
                                    {
                                        ref: v(t),
                                        'data-state': v($)(v(r).state.value),
                                        'data-disabled': v(r).disabled.value
                                            ? ``
                                            : void 0,
                                        style: { pointerEvents: `none` },
                                        'as-child': e.asChild,
                                        as: e.as,
                                    },
                                    i.$attrs,
                                ),
                                {
                                    default: c(() => [m(i.$slots, `default`)]),
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
                i = L(n, `class`),
                o = F(i, r);
            return (e, t) => (
                k(),
                f(
                    v(pe),
                    u({ 'data-slot': `checkbox` }, v(o), {
                        class: v(E)(
                            `peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50`,
                            n.class,
                        ),
                    }),
                    {
                        default: c((t) => [
                            x(
                                v(me),
                                {
                                    'data-slot': `checkbox-indicator`,
                                    class: `grid place-content-center text-current transition-none`,
                                },
                                {
                                    default: c(() => [
                                        m(e.$slots, `default`, j(a(t)), () => [
                                            x(v(I), { class: `size-3.5` }),
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
