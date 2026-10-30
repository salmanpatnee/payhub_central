import {
    Bt as e,
    Et as t,
    Jt as n,
    K as r,
    Nn as i,
    On as a,
    Pt as o,
    Qt as s,
    Tt as c,
    _r as l,
    at as u,
    br as d,
    en as f,
    ft as p,
    ht as m,
    ir as h,
    it as g,
    kn as _,
    mr as v,
    n as y,
    nn as b,
    nt as x,
    o as S,
    ot as C,
    rt as w,
    sn as T,
    sr as E,
    vr as D,
    xn as O,
    yr as k,
    zt as A,
} from './wayfinder-BZPu7hPl.js';
import { n as j, t as M } from './useForwardPropsEmits-CqoMAl8h.js';
import { s as N } from './shared-D-a4oNoz.js';
import { _ as ee, h as te, m as P, v as F } from './app-BodD7Qwi.js';
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
    L = m({
        props: { fallback: { type: String, required: !0 } },
        setup(e) {
            return () =>
                t(`noscript`, { innerHTML: `<style>${e.fallback}</style>` });
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
    containerRef: e,
    inputRef: t,
    pushPasswordManagerStrategy: r,
    isFocused: i,
}) {
    let o = h({ done: !1, refocused: !1 }),
        c = h(!1),
        l = h(!1),
        u = h(!1),
        d = x(
            () =>
                r !== `none` &&
                (r === `increase-width` ||
                    r === `experimental-no-flickering`) &&
                c.value &&
                l.value,
        ),
        f = () => {
            let n = e.value,
                i = t.value;
            if (!n || !i || u.value || r === `none`) return;
            let a = n,
                s = a.getBoundingClientRect().left + a.offsetWidth,
                l = a.getBoundingClientRect().top + a.offsetHeight / 2,
                d = s - B,
                f = l;
            if (
                (document.querySelectorAll(U).length !== 0 ||
                    document.elementFromPoint(d, f) !== n) &&
                ((c.value = !0),
                (u.value = !0),
                !o.value.refocused && document.activeElement === i)
            ) {
                let e = [i.selectionStart, i.selectionEnd];
                (i.blur(),
                    i.focus(),
                    i.setSelectionRange(e[0], e[1]),
                    (o.value.refocused = !0));
            }
        },
        p = () => {
            let t = e.value;
            t &&
                r !== `none` &&
                (l.value =
                    window.innerWidth - t.getBoundingClientRect().right >= V);
        },
        m;
    return (
        n(() => {
            (p(), (m = setInterval(p, 1e3)));
        }),
        s(() => {
            clearInterval(m);
        }),
        a([i, t], (e, t, n) => {
            let [i, a] = e,
                o = i || document.activeElement === a;
            if (r === `none` || !o) return;
            let s = setTimeout(f, 0),
                c = setTimeout(f, 2e3),
                l = setTimeout(f, 5e3),
                d = setTimeout(() => {
                    u.value = !0;
                }, 6e3);
            n(() => {
                (clearTimeout(s),
                    clearTimeout(c),
                    clearTimeout(l),
                    clearTimeout(d));
            });
        }),
        { hasPWMBadge: c, willPushPWMBadge: d, PWM_BADGE_SPACE_WIDTH: H }
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
    G = m({
        name: `OTPInput`,
        inheritAttrs: !1,
        __name: `OTPInput`,
        props: A(
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
        emits: A(
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
        setup(t, { expose: i, emit: o }) {
            let c = t,
                d = o,
                [p] = O(t, `modelValue`),
                m = F(p),
                h = x(() =>
                    c.pattern
                        ? typeof c.pattern == `string`
                            ? new RegExp(c.pattern)
                            : c.pattern
                        : null,
                ),
                y = E(!1),
                S = E(!1),
                D = E(null),
                A = E(null),
                M = E(null),
                I = E(null),
                B = te?.CSS?.supports?.(`-webkit-touch-callout`, `none`),
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
            (n(() => {
                let e = M.value,
                    t = I.value;
                if (!e || !t) return;
                V.prev = [
                    e.selectionStart,
                    e.selectionEnd,
                    e.selectionDirection ?? `none`,
                ];
                let n = ee(P, `selectionchange`, r, { capture: !0 });
                function r() {
                    if (!e) return;
                    if (P?.activeElement !== e) {
                        ((D.value = null), (A.value = null));
                        return;
                    }
                    let t = e.selectionStart,
                        n = e.selectionEnd,
                        r = e.selectionDirection,
                        i = e.maxLength,
                        a = e.value,
                        o = V.prev,
                        s = -1,
                        c = -1,
                        l;
                    if (a.length !== 0 && t !== null && n !== null) {
                        let r = t === n,
                            u = t === a.length && a.length < i;
                        if (r && !u) {
                            let e = t;
                            if (e === 0) ((s = 0), (c = 1), (l = `forward`));
                            else if (e === i)
                                ((s = e - 1), (c = e), (l = `backward`));
                            else if (i > 1 && a.length > 1) {
                                let t = 0;
                                if (o[0] !== null && o[1] !== null) {
                                    l = e < o[1] ? `backward` : `forward`;
                                    let n = o[0] === o[1] && o[0] < i;
                                    l === `backward` && !n && (t = -1);
                                }
                                ((s = t + e), (c = t + e + 1));
                            }
                        }
                        s !== -1 &&
                            c !== -1 &&
                            s !== c &&
                            e.setSelectionRange(s, c, l);
                    }
                    let u = s === -1 ? t : s,
                        d = c === -1 ? n : c,
                        f = l ?? r;
                    ((D.value = u), (A.value = d), (V.prev = [u, d, f]));
                }
                if (
                    (r(),
                    P?.activeElement === e && (S.value = !0),
                    !P?.getElementById(`input-otp-style`))
                ) {
                    let e = P?.createElement(`style`);
                    if (
                        ((e.id = `input-otp-style`),
                        P?.head.appendChild(e),
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
                let i = () => {
                    t &&
                        t.style.setProperty(
                            `--root-height`,
                            `${e.clientHeight}px`,
                        );
                };
                i();
                let a = new ResizeObserver(i);
                (a.observe(e),
                    s(() => {
                        (n(), a.disconnect());
                    }));
            }),
                a(
                    [p],
                    () => {
                        z(() => {
                            if (!M.value) return;
                            M.value?.dispatchEvent(new Event(`input`));
                            let e = M.value?.selectionStart,
                                t = M.value?.selectionEnd,
                                n = M.value?.selectionDirection;
                            e !== null &&
                                t !== null &&
                                ((D.value = e ?? null),
                                (A.value = t ?? null),
                                (V.prev = [e, t, n]));
                        });
                    },
                    { immediate: !0 },
                ),
                _(() => {
                    m.value !== void 0 &&
                        p.value !== m.value &&
                        m.value.length < c.maxlength &&
                        p.value.length === c.maxlength &&
                        d(`complete`, p.value);
                }));
            let U = W({
                containerRef: I,
                inputRef: M,
                pushPasswordManagerStrategy: c.pushPasswordManagerStrategy,
                isFocused: S,
            });
            function G(e) {
                if (e.inputType === `insertText` && e.data !== null) {
                    let t = e.currentTarget,
                        n = t.selectionStart ?? 0,
                        r = t.selectionEnd ?? 0,
                        i = t.value,
                        a = (
                            n === r
                                ? i.slice(0, n) + e.data + i.slice(n)
                                : i.slice(0, n) + e.data + i.slice(r)
                        ).slice(0, c.maxlength);
                    a.length > 0 &&
                        h.value &&
                        !h.value.test(a) &&
                        e.preventDefault();
                }
            }
            function K(e) {
                let t = e.currentTarget.value.slice(0, c.maxlength);
                t.length > 0 && h.value && !h.value.test(t)
                    ? e.preventDefault()
                    : (typeof m.value == `string` &&
                          t.length < m.value.length &&
                          P?.dispatchEvent(new Event(`selectionchange`)),
                      (p.value = t),
                      d(`input`, t));
            }
            function q() {
                let e = M.value;
                if (e) {
                    let t = Math.min(e.value.length, c.maxlength - 1),
                        n = e.value.length;
                    (e.setSelectionRange(t, n), (D.value = t), (A.value = n));
                }
                S.value = !0;
            }
            function J(e) {
                let t = M.value;
                if (
                    !t ||
                    (!c.pasteTransformer && (!B || !e.clipboardData || !t))
                )
                    return;
                let n = e?.clipboardData?.getData(`text/plain`),
                    r = c?.pasteTransformer ? c.pasteTransformer(n) : n;
                e.preventDefault();
                let i = M.value?.selectionStart,
                    a = M.value?.selectionEnd,
                    o = (
                        i === a
                            ? p.value.slice(0, i) + r + p.value.slice(i)
                            : p.value.slice(0, i) + r + p.value.slice(a)
                    ).slice(0, c.maxlength);
                if (o.length > 0 && h.value && !h.value.test(o)) return;
                ((p.value = o), d(`input`, o));
                let s = Math.min(o.length, c.maxlength - 1),
                    l = o.length;
                (t?.setSelectionRange(s, l), (D.value = s), (A.value = l));
            }
            let Y = j(
                    N(
                        c,
                        `containerClass`,
                        `value`,
                        `pattern`,
                        `defaultValue`,
                        `pushPasswordManagerStrategy`,
                        `noScriptCssFallback`,
                        `modelValue`,
                    ),
                ),
                X = x(() => ({
                    position: `relative`,
                    cursor: c.disabled ? `default` : `text`,
                    userSelect: `none`,
                    WebkitUserSelect: `none`,
                    pointerEvents: `none`,
                })),
                Z = x(() => ({
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
                    textAlign: c.textAlign,
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
                Q = x(() => ({
                    slots: Array.from({ length: Number(c.maxlength) }).map(
                        (e, t) => {
                            let n =
                                    S.value &&
                                    D.value !== null &&
                                    A.value !== null &&
                                    ((D.value === A.value && t === D.value) ||
                                        (t >= D.value && t < A.value)),
                                r = p.value[t] === void 0 ? null : p.value[t];
                            return {
                                char: r,
                                placeholderChar:
                                    r ?? c?.placeholder?.[t] ?? null,
                                isActive: n,
                                hasFakeCaret: n && r === null,
                            };
                        },
                    ),
                    isFocused: S.value,
                    isHovering: !c.disabled && y.value,
                }));
            return (
                b(R, Q),
                i(
                    Object.defineProperty({}, '$el', {
                        enumerable: !0,
                        configurable: !0,
                        get: () => M,
                    }),
                ),
                (n, i) => (
                    f(),
                    C(
                        r,
                        null,
                        [
                            t.noScriptCssFallback === null
                                ? u(`v-if`, !0)
                                : (f(),
                                  g(
                                      v(L),
                                      {
                                          key: 0,
                                          fallback: t.noScriptCssFallback,
                                      },
                                      null,
                                      8,
                                      [`fallback`],
                                  )),
                            w(
                                `div`,
                                {
                                    ref_key: `containerRef`,
                                    ref: I,
                                    'data-input-otp-container': ``,
                                    style: k(X.value),
                                    class: l(t.containerClass),
                                },
                                [
                                    T(n.$slots, `default`, {
                                        slots: Q.value.slots,
                                        isFocused: S.value,
                                        isHovering: !t.disabled && y.value,
                                    }),
                                    w(`div`, ne, [
                                        w(
                                            `input`,
                                            e(
                                                {
                                                    ref_key: `inputRef`,
                                                    ref: M,
                                                    value: v(p),
                                                    'data-input-otp': ``,
                                                    'data-input-otp-placeholder-shown':
                                                        v(p).length === 0 ||
                                                        void 0,
                                                    'data-input-otp-mss':
                                                        D.value,
                                                    'data-input-otp-mse':
                                                        A.value,
                                                    'aria-placeholder':
                                                        t.placeholder,
                                                    style: Z.value,
                                                    pattern: h.value?.source,
                                                },
                                                { ...n.$attrs, ...v(Y) },
                                                {
                                                    onBeforeinput: G,
                                                    onMouseover: (i[0] ||= (
                                                        e,
                                                    ) => {
                                                        ((y.value = !0),
                                                            d(`mouseover`, e));
                                                    }),
                                                    onMouseleave: (i[1] ||= (
                                                        e,
                                                    ) => {
                                                        ((y.value = !1),
                                                            d(`mouseleave`, e));
                                                    }),
                                                    onPaste: (i[2] ||= (e) => {
                                                        (J(e), d(`paste`, e));
                                                    }),
                                                    onInput: K,
                                                    onFocus: (i[3] ||= (e) => {
                                                        (q(), d(`focus`, e));
                                                    }),
                                                    onBlur: (i[4] ||= (e) => {
                                                        ((S.value = !1),
                                                            d(`blur`, e));
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
    return o(R);
}
var q = m({
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
        setup(t, { emit: n }) {
            let r = t,
                a = n,
                o = N(r, `class`),
                s = M(o, a);
            return (t, n) => (
                f(),
                g(
                    v(G),
                    e(v(s), {
                        'container-class': v(S)(
                            `flex items-center gap-2 has-disabled:opacity-50`,
                            r.class,
                        ),
                        'data-slot': `input-otp`,
                        class: `disabled:cursor-not-allowed`,
                    }),
                    {
                        default: i((e) => [T(t.$slots, `default`, D(c(e)))]),
                        _: 3,
                    },
                    16,
                    [`container-class`],
                )
            );
        },
    }),
    J = m({
        __name: `InputOTPGroup`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(t) {
            let n = t,
                r = N(n, `class`),
                i = j(r);
            return (t, r) => (
                f(),
                C(
                    `div`,
                    e({ 'data-slot': `input-otp-group` }, v(i), {
                        class: v(S)(`flex items-center`, n.class),
                    }),
                    [T(t.$slots, `default`)],
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
    Z = m({
        __name: `InputOTPSlot`,
        props: {
            index: {},
            class: { type: [Boolean, null, String, Object, Array] },
        },
        setup(t) {
            let n = t,
                r = N(n, `class`),
                i = j(r),
                a = K(),
                o = x(() => a?.value.slots[n.index]);
            return (t, r) => (
                f(),
                C(
                    `div`,
                    e(v(i), {
                        'data-slot': `input-otp-slot`,
                        'data-active': o.value?.isActive,
                        class: v(S)(
                            `data-[active=true]:border-ring data-[active=true]:ring-ring data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]`,
                            n.class,
                        ),
                    }),
                    [
                        p(d(o.value?.char) + ` `, 1),
                        o.value?.hasFakeCaret
                            ? (f(),
                              C(`div`, X, [
                                  ...(r[0] ||= [
                                      w(
                                          `div`,
                                          {
                                              class: `animate-caret-blink bg-foreground h-4 w-px duration-1000`,
                                          },
                                          null,
                                          -1,
                                      ),
                                  ]),
                              ]))
                            : u(``, !0),
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
