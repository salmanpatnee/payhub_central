import {
    $t as e,
    An as t,
    Bt as n,
    Dt as r,
    Et as i,
    Ft as a,
    Pn as o,
    Sn as s,
    Vt as c,
    Yt as l,
    ar as u,
    at as d,
    br as f,
    cn as p,
    cr as m,
    gt as h,
    hr as g,
    it as _,
    kn as v,
    n as y,
    ot as b,
    pt as x,
    q as S,
    rn as C,
    rt as w,
    s as T,
    st as E,
    tn as D,
    vr as O,
    xr as k,
    yr as A,
} from './wayfinder-DOENF6-v.js';
import { n as j, t as M } from './useForwardPropsEmits-BQsdb9GW.js';
import { s as N } from './shared-CHjORj-0.js';
import { _ as ee, g as te, m as P, p as F } from './app-DCCfXFlv.js';
var I = `
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`,
    L = h({
        props: { fallback: { type: String, required: !0 } },
        setup(e) {
            return () =>
                r(`noscript`, { innerHTML: `<style>${e.fallback}</style>` });
        },
    }),
    R = Symbol(`vue-otp-context`);
function z(e) {
    return [setTimeout(e, 0), setTimeout(e, 10), setTimeout(e, 50)];
}
var B = 18,
    V = 40,
    H = `${V}px`,
    U = `[data-lastpass-icon-root],com-1password-button,[data-dashlanecreated],[style$="2147483647 !important;"]`;
function W({
    containerRef: t,
    inputRef: n,
    pushPasswordManagerStrategy: r,
    isFocused: i,
}) {
    let a = u({ done: !1, refocused: !1 }),
        o = u(!1),
        s = u(!1),
        c = u(!1),
        d = w(
            () =>
                r !== `none` &&
                (r === `increase-width` ||
                    r === `experimental-no-flickering`) &&
                o.value &&
                s.value,
        ),
        f = () => {
            let e = t.value,
                i = n.value;
            if (!e || !i || c.value || r === `none`) return;
            let s = e,
                l = s.getBoundingClientRect().left + s.offsetWidth,
                u = s.getBoundingClientRect().top + s.offsetHeight / 2,
                d = l - B,
                f = u;
            if (
                (document.querySelectorAll(U).length !== 0 ||
                    document.elementFromPoint(d, f) !== e) &&
                ((o.value = !0),
                (c.value = !0),
                !a.value.refocused && document.activeElement === i)
            ) {
                let e = [i.selectionStart, i.selectionEnd];
                (i.blur(),
                    i.focus(),
                    i.setSelectionRange(e[0], e[1]),
                    (a.value.refocused = !0));
            }
        },
        p = () => {
            let e = t.value;
            e &&
                r !== `none` &&
                (s.value =
                    window.innerWidth - e.getBoundingClientRect().right >= V);
        },
        m;
    return (
        l(() => {
            (p(), (m = setInterval(p, 1e3)));
        }),
        e(() => {
            clearInterval(m);
        }),
        v([i, n], (e, t, n) => {
            let [i, a] = e,
                o = i || document.activeElement === a;
            if (r === `none` || !o) return;
            let s = setTimeout(f, 0),
                l = setTimeout(f, 2e3),
                u = setTimeout(f, 5e3),
                d = setTimeout(() => {
                    c.value = !0;
                }, 6e3);
            n(() => {
                (clearTimeout(s),
                    clearTimeout(l),
                    clearTimeout(u),
                    clearTimeout(d));
            });
        }),
        { hasPWMBadge: o, willPushPWMBadge: d, PWM_BADGE_SPACE_WIDTH: H }
    );
}
var ne = {
        style: { position: `absolute`, inset: `0`, 'pointer-events': `none` },
    },
    re = [
        `value`,
        `data-input-otp-placeholder-shown`,
        `data-input-otp-mss`,
        `data-input-otp-mse`,
        `aria-placeholder`,
        `pattern`,
    ],
    G = h({
        name: `OTPInput`,
        inheritAttrs: !1,
        __name: `OTPInput`,
        props: n(
            {
                maxlength: {},
                textAlign: { default: `left` },
                inputmode: { default: `numeric` },
                containerClass: {},
                pushPasswordManagerStrategy: { default: `increase-width` },
                noScriptCssFallback: { default: I },
                defaultValue: { default: `` },
                pasteTransformer: {},
                accept: {},
                alt: {},
                autocomplete: { default: `one-time-code` },
                autofocus: { type: Boolean },
                capture: { type: [Boolean, String] },
                checked: { type: [Boolean, Array, Set] },
                crossorigin: {},
                disabled: { type: Boolean },
                enterKeyHint: {},
                form: {},
                formaction: {},
                formenctype: {},
                formmethod: {},
                formnovalidate: { type: Boolean },
                formtarget: {},
                height: {},
                indeterminate: { type: Boolean },
                list: {},
                max: {},
                min: {},
                minlength: {},
                multiple: { type: Boolean },
                name: {},
                pattern: {},
                placeholder: {},
                readonly: { type: Boolean },
                required: { type: Boolean },
                size: {},
                src: {},
                step: {},
                type: {},
                value: {},
                width: {},
            },
            {
                modelValue: {
                    default(e) {
                        return e.defaultValue;
                    },
                },
                modelModifiers: {},
            },
        ),
        emits: n(
            [
                `complete`,
                `change`,
                `select`,
                `input`,
                `focus`,
                `blur`,
                `mouseover`,
                `mouseleave`,
                `paste`,
            ],
            [`update:modelValue`],
        ),
        setup(n, { expose: r, emit: i }) {
            let a = n,
                o = i,
                [u] = s(n, `modelValue`),
                h = ee(u),
                y = w(() =>
                    a.pattern
                        ? typeof a.pattern == `string`
                            ? new RegExp(a.pattern)
                            : a.pattern
                        : null,
                ),
                x = m(!1),
                T = m(!1),
                k = m(null),
                A = m(null),
                M = m(null),
                I = m(null),
                B = P?.CSS?.supports?.(`-webkit-touch-callout`, `none`),
                V = {
                    prev: [
                        M.value?.selectionStart,
                        M.value?.selectionEnd,
                        M.value?.selectionDirection,
                    ],
                };
            function H(e, t) {
                try {
                    e.insertRule(t);
                } catch {
                    console.error(`input-otp could not insert CSS rule:`, t);
                }
            }
            (l(() => {
                let t = M.value,
                    n = I.value;
                if (!t || !n) return;
                V.prev = [
                    t.selectionStart,
                    t.selectionEnd,
                    t.selectionDirection ?? `none`,
                ];
                let r = te(F, `selectionchange`, i, { capture: !0 });
                function i() {
                    if (!t) return;
                    if (F?.activeElement !== t) {
                        ((k.value = null), (A.value = null));
                        return;
                    }
                    let e = t.selectionStart,
                        n = t.selectionEnd,
                        r = t.selectionDirection,
                        i = t.maxLength,
                        a = t.value,
                        o = V.prev,
                        s = -1,
                        c = -1,
                        l;
                    if (a.length !== 0 && e !== null && n !== null) {
                        let r = e === n,
                            u = e === a.length && a.length < i;
                        if (r && !u) {
                            let t = e;
                            if (t === 0) ((s = 0), (c = 1), (l = `forward`));
                            else if (t === i)
                                ((s = t - 1), (c = t), (l = `backward`));
                            else if (i > 1 && a.length > 1) {
                                let e = 0;
                                if (o[0] !== null && o[1] !== null) {
                                    l = t < o[1] ? `backward` : `forward`;
                                    let n = o[0] === o[1] && o[0] < i;
                                    l === `backward` && !n && (e = -1);
                                }
                                ((s = e + t), (c = e + t + 1));
                            }
                        }
                        s !== -1 &&
                            c !== -1 &&
                            s !== c &&
                            t.setSelectionRange(s, c, l);
                    }
                    let u = s === -1 ? e : s,
                        d = c === -1 ? n : c,
                        f = l ?? r;
                    ((k.value = u), (A.value = d), (V.prev = [u, d, f]));
                }
                if (
                    (i(),
                    F?.activeElement === t && (T.value = !0),
                    !F?.getElementById(`input-otp-style`))
                ) {
                    let e = F?.createElement(`style`);
                    if (
                        ((e.id = `input-otp-style`),
                        F?.head.appendChild(e),
                        e.sheet)
                    ) {
                        let t = `background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;`;
                        (H(
                            e.sheet,
                            `[data-input-otp]::selection { background: transparent !important; color: transparent !important; }`,
                        ),
                            H(e.sheet, `[data-input-otp]:autofill { ${t} }`),
                            H(
                                e.sheet,
                                `[data-input-otp]:-webkit-autofill { ${t} }`,
                            ),
                            H(
                                e.sheet,
                                `@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }`,
                            ),
                            H(
                                e.sheet,
                                `[data-input-otp] + * { pointer-events: all !important; }`,
                            ));
                    }
                }
                let a = () => {
                    n &&
                        n.style.setProperty(
                            `--root-height`,
                            `${t.clientHeight}px`,
                        );
                };
                a();
                let o = new ResizeObserver(a);
                (o.observe(t),
                    e(() => {
                        (r(), o.disconnect());
                    }));
            }),
                v(
                    [u],
                    () => {
                        z(() => {
                            if (!M.value) return;
                            M.value?.dispatchEvent(new Event(`input`));
                            let e = M.value?.selectionStart,
                                t = M.value?.selectionEnd,
                                n = M.value?.selectionDirection;
                            e !== null &&
                                t !== null &&
                                ((k.value = e ?? null),
                                (A.value = t ?? null),
                                (V.prev = [e, t, n]));
                        });
                    },
                    { immediate: !0 },
                ),
                t(() => {
                    h.value !== void 0 &&
                        u.value !== h.value &&
                        h.value.length < a.maxlength &&
                        u.value.length === a.maxlength &&
                        o(`complete`, u.value);
                }));
            let U = W({
                containerRef: I,
                inputRef: M,
                pushPasswordManagerStrategy: a.pushPasswordManagerStrategy,
                isFocused: T,
            });
            function G(e) {
                if (e.inputType === `insertText` && e.data !== null) {
                    let t = e.currentTarget,
                        n = t.selectionStart ?? 0,
                        r = t.selectionEnd ?? 0,
                        i = t.value,
                        o = (
                            n === r
                                ? i.slice(0, n) + e.data + i.slice(n)
                                : i.slice(0, n) + e.data + i.slice(r)
                        ).slice(0, a.maxlength);
                    o.length > 0 &&
                        y.value &&
                        !y.value.test(o) &&
                        e.preventDefault();
                }
            }
            function K(e) {
                let t = e.currentTarget.value.slice(0, a.maxlength);
                t.length > 0 && y.value && !y.value.test(t)
                    ? e.preventDefault()
                    : (typeof h.value == `string` &&
                          t.length < h.value.length &&
                          F?.dispatchEvent(new Event(`selectionchange`)),
                      (u.value = t),
                      o(`input`, t));
            }
            function q() {
                let e = M.value;
                if (e) {
                    let t = Math.min(e.value.length, a.maxlength - 1),
                        n = e.value.length;
                    (e.setSelectionRange(t, n), (k.value = t), (A.value = n));
                }
                T.value = !0;
            }
            function J(e) {
                let t = M.value;
                if (
                    !t ||
                    (!a.pasteTransformer && (!B || !e.clipboardData || !t))
                )
                    return;
                let n = e?.clipboardData?.getData(`text/plain`),
                    r = a?.pasteTransformer ? a.pasteTransformer(n) : n;
                e.preventDefault();
                let i = M.value?.selectionStart,
                    s = M.value?.selectionEnd,
                    c = (
                        i === s
                            ? u.value.slice(0, i) + r + u.value.slice(i)
                            : u.value.slice(0, i) + r + u.value.slice(s)
                    ).slice(0, a.maxlength);
                if (c.length > 0 && y.value && !y.value.test(c)) return;
                ((u.value = c), o(`input`, c));
                let l = Math.min(c.length, a.maxlength - 1),
                    d = c.length;
                (t?.setSelectionRange(l, d), (k.value = l), (A.value = d));
            }
            let Y = j(
                    N(
                        a,
                        `containerClass`,
                        `value`,
                        `pattern`,
                        `defaultValue`,
                        `pushPasswordManagerStrategy`,
                        `noScriptCssFallback`,
                        `modelValue`,
                    ),
                ),
                X = w(() => ({
                    position: `relative`,
                    cursor: a.disabled ? `default` : `text`,
                    userSelect: `none`,
                    WebkitUserSelect: `none`,
                    pointerEvents: `none`,
                })),
                Z = w(() => ({
                    position: `absolute`,
                    inset: 0,
                    width: U.willPushPWMBadge.value
                        ? `calc(100% + ${U.PWM_BADGE_SPACE_WIDTH})`
                        : `100%`,
                    clipPath: U.willPushPWMBadge.value
                        ? `inset(0 ${U.PWM_BADGE_SPACE_WIDTH} 0 0)`
                        : void 0,
                    height: `100%`,
                    display: `flex`,
                    textAlign: a.textAlign,
                    opacity: `1`,
                    color: `transparent`,
                    pointerEvents: `all`,
                    background: `transparent`,
                    caretColor: `transparent`,
                    border: `0 solid transparent`,
                    outline: `0 solid transparent`,
                    boxShadow: `none`,
                    lineHeight: `1`,
                    letterSpacing: `-.5em`,
                    fontSize: `var(--root-height)`,
                    fontFamily: `monospace`,
                    fontVariantNumeric: `tabular-nums`,
                })),
                Q = w(() => ({
                    slots: Array.from({ length: Number(a.maxlength) }).map(
                        (e, t) => {
                            let n =
                                    T.value &&
                                    k.value !== null &&
                                    A.value !== null &&
                                    ((k.value === A.value && t === k.value) ||
                                        (t >= k.value && t < A.value)),
                                r = u.value[t] === void 0 ? null : u.value[t];
                            return {
                                char: r,
                                placeholderChar:
                                    r ?? a?.placeholder?.[t] ?? null,
                                isActive: n,
                                hasFakeCaret: n && r === null,
                            };
                        },
                    ),
                    isFocused: T.value,
                    isHovering: !a.disabled && x.value,
                }));
            return (
                C(R, Q),
                r(
                    Object.defineProperty({}, '$el', {
                        enumerable: !0,
                        configurable: !0,
                        get: () => M,
                    }),
                ),
                (e, t) => (
                    D(),
                    E(
                        S,
                        null,
                        [
                            n.noScriptCssFallback === null
                                ? b(`v-if`, !0)
                                : (D(),
                                  d(
                                      g(L),
                                      {
                                          key: 0,
                                          fallback: n.noScriptCssFallback,
                                      },
                                      null,
                                      8,
                                      [`fallback`],
                                  )),
                            _(
                                `div`,
                                {
                                    ref_key: `containerRef`,
                                    ref: I,
                                    'data-input-otp-container': ``,
                                    style: f(X.value),
                                    class: O(n.containerClass),
                                },
                                [
                                    p(e.$slots, `default`, {
                                        slots: Q.value.slots,
                                        isFocused: T.value,
                                        isHovering: !n.disabled && x.value,
                                    }),
                                    _(`div`, ne, [
                                        _(
                                            `input`,
                                            c(
                                                {
                                                    ref_key: `inputRef`,
                                                    ref: M,
                                                    value: g(u),
                                                    'data-input-otp': ``,
                                                    'data-input-otp-placeholder-shown':
                                                        g(u).length === 0 ||
                                                        void 0,
                                                    'data-input-otp-mss':
                                                        k.value,
                                                    'data-input-otp-mse':
                                                        A.value,
                                                    'aria-placeholder':
                                                        n.placeholder,
                                                    style: Z.value,
                                                    pattern: y.value?.source,
                                                },
                                                { ...e.$attrs, ...g(Y) },
                                                {
                                                    onBeforeinput: G,
                                                    onMouseover: (t[0] ||= (
                                                        e,
                                                    ) => {
                                                        ((x.value = !0),
                                                            o(`mouseover`, e));
                                                    }),
                                                    onMouseleave: (t[1] ||= (
                                                        e,
                                                    ) => {
                                                        ((x.value = !1),
                                                            o(`mouseleave`, e));
                                                    }),
                                                    onPaste: (t[2] ||= (e) => {
                                                        (J(e), o(`paste`, e));
                                                    }),
                                                    onInput: K,
                                                    onFocus: (t[3] ||= (e) => {
                                                        (q(), o(`focus`, e));
                                                    }),
                                                    onBlur: (t[4] ||= (e) => {
                                                        ((T.value = !1),
                                                            o(`blur`, e));
                                                    }),
                                                },
                                            ),
                                            null,
                                            16,
                                            re,
                                        ),
                                    ]),
                                ],
                                6,
                            ),
                        ],
                        64,
                    )
                )
            );
        },
    });
function K() {
    return a(R);
}
var q = h({
        __name: `InputOTP`,
        props: {
            maxlength: {},
            textAlign: {},
            inputmode: {},
            containerClass: {},
            pushPasswordManagerStrategy: {},
            noScriptCssFallback: {},
            defaultValue: {},
            pasteTransformer: { type: Function },
            accept: {},
            alt: {},
            autocomplete: {},
            autofocus: { type: Boolean },
            capture: { type: [Boolean, String] },
            checked: { type: [Boolean, Array, Set] },
            crossorigin: {},
            disabled: { type: Boolean },
            enterKeyHint: {},
            form: {},
            formaction: {},
            formenctype: {},
            formmethod: {},
            formnovalidate: { type: Boolean },
            formtarget: {},
            height: {},
            indeterminate: { type: Boolean },
            list: {},
            max: {},
            min: {},
            minlength: {},
            multiple: { type: Boolean },
            name: {},
            pattern: {},
            placeholder: {},
            readonly: { type: Boolean },
            required: { type: Boolean },
            size: {},
            src: {},
            step: {},
            type: {},
            value: {},
            width: {},
            class: { type: [Boolean, null, String, Object, Array] },
        },
        emits: [
            `complete`,
            `change`,
            `select`,
            `input`,
            `focus`,
            `blur`,
            `mouseover`,
            `mouseleave`,
            `paste`,
        ],
        setup(e, { emit: t }) {
            let n = e,
                r = t,
                a = N(n, `class`),
                s = M(a, r);
            return (e, t) => (
                D(),
                d(
                    g(G),
                    c(g(s), {
                        'container-class': g(T)(
                            `flex items-center gap-2 has-disabled:opacity-50`,
                            n.class,
                        ),
                        'data-slot': `input-otp`,
                        class: `disabled:cursor-not-allowed`,
                    }),
                    {
                        default: o((t) => [p(e.$slots, `default`, A(i(t)))]),
                        _: 3,
                    },
                    16,
                    [`container-class`],
                )
            );
        },
    }),
    J = h({
        __name: `InputOTPGroup`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e,
                n = N(t, `class`),
                r = j(n);
            return (e, n) => (
                D(),
                E(
                    `div`,
                    c({ 'data-slot': `input-otp-group` }, g(r), {
                        class: g(T)(`flex items-center`, t.class),
                    }),
                    [p(e.$slots, `default`)],
                    16,
                )
            );
        },
    }),
    Y = [`data-active`],
    X = {
        key: 0,
        class: `pointer-events-none absolute inset-0 flex items-center justify-center`,
    },
    Z = h({
        __name: `InputOTPSlot`,
        props: {
            index: {},
            class: { type: [Boolean, null, String, Object, Array] },
        },
        setup(e) {
            let t = e,
                n = N(t, `class`),
                r = j(n),
                i = K(),
                a = w(() => i?.value.slots[t.index]);
            return (e, n) => (
                D(),
                E(
                    `div`,
                    c(g(r), {
                        'data-slot': `input-otp-slot`,
                        'data-active': a.value?.isActive,
                        class: g(T)(
                            `data-[active=true]:border-ring data-[active=true]:ring-ring data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]`,
                            t.class,
                        ),
                    }),
                    [
                        x(k(a.value?.char) + ` `, 1),
                        a.value?.hasFakeCaret
                            ? (D(),
                              E(`div`, X, [
                                  ...(n[0] ||= [
                                      _(
                                          `div`,
                                          {
                                              class: `animate-caret-blink bg-foreground h-4 w-px duration-1000`,
                                          },
                                          null,
                                          -1,
                                      ),
                                  ]),
                              ]))
                            : b(``, !0),
                    ],
                    16,
                    Y,
                )
            );
        },
    }),
    Q = (e) => ({ url: Q.url(e), method: `post` });
((Q.definition = { methods: [`post`], url: `/two-factor-challenge` }),
    (Q.url = (e) => Q.definition.url + y(e)),
    (Q.post = (e) => ({ url: Q.url(e), method: `post` })));
var $ = (e) => ({ action: Q.url(e), method: `post` });
(($.post = (e) => ({ action: Q.url(e), method: `post` })), (Q.form = $));
var ie = { store: Object.assign(Q, Q) };
export { q as a, J as i, Q as n, Z as r, ie as t };
