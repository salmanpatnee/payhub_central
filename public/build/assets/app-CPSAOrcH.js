const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/Dashboard-Bg4L7KSX.js',
            'assets/wayfinder-BZPu7hPl.js',
            'assets/formatPercent-C2UIZrJR.js',
            'assets/Presence-CKGYlb9k.js',
            'assets/useForwardExpose-B78G7oXS.js',
            'assets/Teleport-fCOREVeW.js',
            'assets/useForwardPropsEmits-CqoMAl8h.js',
            'assets/shared-D-a4oNoz.js',
            'assets/formatRelative-D-S37FvD.js',
            'assets/inbox-DWr_PkQC.js',
            'assets/createLucideIcon-B933959x.js',
            'assets/TableRow-C0myH0NN.js',
            'assets/Card-G-5AElBS.js',
            'assets/deploymentStatus-DAZueO0e.js',
            'assets/EmptyState-s-EDe2hW.js',
            'assets/PageHeader-D9oPzwwI.js',
            'assets/ConfirmPassword-CjOwR-U-.js',
            'assets/Label-DoYAx_a7.js',
            'assets/PasswordInput-f5h6RjSk.js',
            'assets/InputError-195jRyWD.js',
            'assets/Spinner-HKBXW4sQ.js',
            'assets/Login-B-s37gE1.js',
            'assets/Checkbox-9QygNHE3.js',
            'assets/check-GUSC4Bfv.js',
            'assets/TwoFactorChallenge-C7BKQ3YZ.js',
            'assets/login-DIv-PHxX.js',
            'assets/VerifyEmail-C56f9AJh.js',
            'assets/Create-uJft1BWO.js',
            'assets/DeploymentController-11eEqESw.js',
            'assets/Edit-DI7ALhGr.js',
            'assets/RemoveDeploymentDialog-ZkrYP0UL.js',
            'assets/dialog-BJUVjlBY.js',
            'assets/Index-JA1MyBOM.js',
            'assets/TableCaption-M4KzGuv1.js',
            'assets/Show-Ck0vmjH7.js',
            'assets/Profile-DimxKII4.js',
            'assets/Security-B9ym3CnU.js',
            'assets/Create-BECMmqew.js',
            'assets/StaffController-C09qeu_l.js',
            'assets/Edit-Ci5cbUWq.js',
            'assets/Index-CMsQgkFR.js',
        ]),
) => i.map((i) => d[i]);
import { a as e, i as t, n, t as r } from './Presence-CKGYlb9k.js';
import {
    $n as i,
    An as a,
    B as o,
    Bt as s,
    Ct as c,
    Et as l,
    Fn as u,
    Gn as d,
    In as f,
    Jt as p,
    K as m,
    Lt as h,
    Nn as g,
    On as _,
    Ot as v,
    Pt as y,
    Qn as b,
    Qt as x,
    R as S,
    Rt as C,
    Sr as w,
    Tt as T,
    Vt as ee,
    Wt as te,
    Xn as ne,
    _n as re,
    _r as E,
    at as D,
    br as O,
    c as ie,
    dr as ae,
    en as k,
    f as oe,
    fr as A,
    ft as se,
    h as ce,
    ht as j,
    i as le,
    ir as M,
    it as N,
    kn as P,
    l as ue,
    lr as de,
    mr as F,
    n as I,
    nn as fe,
    nt as L,
    o as R,
    on as pe,
    or as me,
    ot as z,
    pt as B,
    r as V,
    rr as he,
    rt as H,
    s as ge,
    sn as U,
    sr as _e,
    t as ve,
    un as ye,
    vr as W,
    yn as be,
    yr as xe,
    z as Se,
} from './wayfinder-BZPu7hPl.js';
import {
    a as Ce,
    i as we,
    n as Te,
    o as Ee,
    r as De,
    t as Oe,
} from './Teleport-fCOREVeW.js';
import {
    _ as ke,
    a as Ae,
    c as je,
    d as Me,
    g as Ne,
    i as Pe,
    m as Fe,
    s as Ie,
    t as G,
    u as Le,
} from './useForwardExpose-B78G7oXS.js';
import { t as Re } from './useDirection-B2jAzrcg.js';
import { n as ze, r as Be, t as Ve } from './useForwardPropsEmits-CqoMAl8h.js';
import { t as K } from './createLucideIcon-B933959x.js';
import {
    a as He,
    c as Ue,
    d as We,
    f as Ge,
    i as Ke,
    l as qe,
    n as Je,
    o as Ye,
    r as Xe,
    s as Ze,
    t as Qe,
    u as $e,
} from './shared-D-a4oNoz.js';
var et = `modulepreload`,
    tt = function (e) {
        return `/build/` + e;
    },
    nt = {},
    rt = function (e) {
        return e.pathname.endsWith(`.css`);
    },
    it = function (e, t, n) {
        if (t in e) return e[t];
        let r = n();
        if (!r) {
            e[t] = void 0;
            return;
        }
        let i = r.then(
            () => {
                e[t] = void 0;
            },
            (n) => {
                throw ((e[t] = void 0), n);
            },
        );
        return ((e[t] = i), i);
    },
    at = function (e, t, n) {
        let r = Promise.resolve();
        if (t && t.length > 0) {
            let e,
                i = document.querySelector(`meta[property=csp-nonce]`),
                a = i?.nonce || i?.getAttribute(`nonce`);
            function o(e) {
                return Promise.all(
                    e.map((e) =>
                        Promise.resolve(e).then(
                            (e) => ({ status: `fulfilled`, value: e }),
                            (e) => ({ status: `rejected`, reason: e }),
                        ),
                    ),
                );
            }
            function s(e) {
                return import.meta.resolve
                    ? new URL(import.meta.resolve(e))
                    : new URL(e, import.meta.url);
            }
            r = o(
                t
                    .map((t) => {
                        t = tt(t, n);
                        let r = s(t),
                            i = rt(r);
                        return it(nt, r.href, () => {
                            if (e === void 0) {
                                e = { all: new Set(), styles: new Set() };
                                let t = document.getElementsByTagName(`link`);
                                for (let n = t.length - 1; n >= 0; n--) {
                                    let r = t[n];
                                    (e.all.add(r.href),
                                        r.rel === `stylesheet` &&
                                            e.styles.add(r.href));
                                }
                            }
                            if ((i ? e.styles : e.all).has(r.href)) return;
                            let t = document.createElement(`link`);
                            if (
                                ((t.rel = i ? `stylesheet` : et),
                                i || (t.as = `script`),
                                (t.crossOrigin = ``),
                                (t.href = r.href),
                                a && t.setAttribute(`nonce`, a),
                                document.head.appendChild(t),
                                i)
                            )
                                return new Promise((e, n) => {
                                    (t.addEventListener(`load`, e),
                                        t.addEventListener(`error`, () =>
                                            n(
                                                Error(
                                                    `Unable to preload CSS for ${r}`,
                                                ),
                                            ),
                                        ));
                                });
                        });
                    })
                    .filter((e) => e !== void 0),
            );
        }
        function i(e) {
            let t = new Event(`vite:preloadError`, { cancelable: !0 });
            if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
                throw e;
        }
        return r.then((t) => {
            for (let e of t || []) e.status === `rejected` && i(e.reason);
            return e().catch(i);
        });
    },
    ot = [`INPUT`, `TEXTAREA`];
function st(e, t, n, r = {}) {
    if (!t || (r.enableIgnoredElement && ot.includes(t.nodeName))) return null;
    let {
            arrowKeyOptions: i = `both`,
            attributeName: a = `[data-reka-collection-item]`,
            itemsArray: o = [],
            loop: s = !0,
            dir: c = `ltr`,
            preventScroll: l = !0,
            focus: u = !1,
        } = r,
        [d, f, p, m, h, g] = [
            e.key === `ArrowRight`,
            e.key === `ArrowLeft`,
            e.key === `ArrowUp`,
            e.key === `ArrowDown`,
            e.key === `Home`,
            e.key === `End`,
        ],
        _ = p || m,
        v = d || f;
    if (
        !h &&
        !g &&
        ((!_ && !v) || (i === `vertical` && v) || (i === `horizontal` && _))
    )
        return null;
    let y = n ? Array.from(n.querySelectorAll(a)) : o;
    if (!y.length) return null;
    l && e.preventDefault();
    let b = null;
    return (
        v || _
            ? (b = ct(y, t, {
                  goForward: _ ? m : c === `ltr` ? d : f,
                  loop: s,
              }))
            : h
              ? (b = y.at(0) || null)
              : g && (b = y.at(-1) || null),
        u && b?.focus(),
        b
    );
}
function ct(e, t, n, r = e.includes(t) ? e.length : e.length + 1) {
    if (--r === 0) return null;
    let i = e.indexOf(t),
        a;
    if (
        ((a =
            i === -1
                ? n.goForward
                    ? 0
                    : e.length - 1
                : n.goForward
                  ? i + 1
                  : i - 1),
        !n.loop && (a < 0 || a >= e.length))
    )
        return null;
    let o = e[(a + e.length) % e.length];
    return o
        ? o.hasAttribute(`disabled`) && o.getAttribute(`disabled`) !== `false`
            ? ct(e, o, n, r)
            : o
        : null;
}
var lt = 0;
function ut() {
    P((e) => {
        if (!Me) return;
        let t = document.querySelectorAll(`[data-reka-focus-guard]`);
        (document.body.insertAdjacentElement(`afterbegin`, t[0] ?? dt()),
            document.body.insertAdjacentElement(`beforeend`, t[1] ?? dt()),
            lt++,
            e(() => {
                (lt === 1 &&
                    document
                        .querySelectorAll(`[data-reka-focus-guard]`)
                        .forEach((e) => e.remove()),
                    lt--);
            }));
    });
}
function dt() {
    let e = document.createElement(`span`);
    return (
        e.setAttribute(`data-reka-focus-guard`, ``),
        (e.tabIndex = 0),
        (e.style.outline = `none`),
        (e.style.opacity = `0`),
        (e.style.position = `fixed`),
        (e.style.pointerEvents = `none`),
        e
    );
}
function ft(e, t) {
    let n = Fe(!1, 300);
    Ne(() => {
        n.value = !1;
    });
    let r = M(null),
        i = je();
    function a() {
        ((r.value = null), (n.value = !1));
    }
    function o(e, t) {
        if (!t) return;
        let i = e.currentTarget,
            a = { x: e.clientX, y: e.clientY },
            o = mt(a, pt(a, i.getBoundingClientRect()), 1),
            s = ht(t.getBoundingClientRect()),
            c = _t([...o, ...s]);
        ((r.value = c), (n.value = !0));
    }
    return (
        P((n) => {
            if (e.value && t.value) {
                let r = e.value,
                    i = t.value,
                    a = (e) => o(e, i),
                    s = (e) => o(e, r);
                (r.addEventListener(`pointerleave`, a),
                    i.addEventListener(`pointerleave`, s),
                    n(() => {
                        (r.removeEventListener(`pointerleave`, a),
                            i.removeEventListener(`pointerleave`, s));
                    }));
            }
        }),
        P((n) => {
            if (r.value) {
                let o = (n) => {
                        if (!r.value || !(n.target instanceof Element)) return;
                        let o = n.target,
                            s = { x: n.clientX, y: n.clientY },
                            c = e.value?.contains(o) || t.value?.contains(o),
                            l = !gt(s, r.value),
                            u = !!o.closest(`[data-grace-area-trigger]`);
                        c ? a() : (l || u) && (a(), i.trigger());
                    },
                    s = e.value?.ownerDocument;
                (s?.addEventListener(`pointermove`, o),
                    n(() => s?.removeEventListener(`pointermove`, o)));
            }
        }),
        { isPointerInTransit: n, onPointerExit: i.on }
    );
}
function pt(e, t) {
    let n = Math.abs(t.top - e.y),
        r = Math.abs(t.bottom - e.y),
        i = Math.abs(t.right - e.x),
        a = Math.abs(t.left - e.x);
    switch (Math.min(n, r, i, a)) {
        case a:
            return `left`;
        case i:
            return `right`;
        case n:
            return `top`;
        case r:
            return `bottom`;
        default:
            throw Error(`unreachable`);
    }
}
function mt(e, t, n = 5) {
    let r = [];
    switch (t) {
        case `top`:
            r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
            break;
        case `bottom`:
            r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
            break;
        case `left`:
            r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
            break;
        case `right`:
            r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
    }
    return r;
}
function ht(e) {
    let { top: t, right: n, bottom: r, left: i } = e;
    return [
        { x: i, y: t },
        { x: n, y: t },
        { x: n, y: r },
        { x: i, y: r },
    ];
}
function gt(e, t) {
    let { x: n, y: r } = e,
        i = !1;
    for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
        let o = t[e].x,
            s = t[e].y,
            c = t[a].x,
            l = t[a].y;
        s > r != l > r && n < ((c - o) * (r - s)) / (l - s) + o && (i = !i);
    }
    return i;
}
function _t(e) {
    let t = e.slice();
    return (
        t.sort((e, t) =>
            e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : +(e.y > t.y),
        ),
        vt(t)
    );
}
function vt(e) {
    if (e.length <= 1) return e.slice();
    let t = [];
    for (let n = 0; n < e.length; n++) {
        let r = e[n];
        for (; t.length >= 2;) {
            let e = t.at(-1),
                n = t[t.length - 2];
            if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
            else break;
        }
        t.push(r);
    }
    t.pop();
    let n = [];
    for (let t = e.length - 1; t >= 0; t--) {
        let r = e[t];
        for (; n.length >= 2;) {
            let e = n.at(-1),
                t = n[n.length - 2];
            if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
            else break;
        }
        n.push(r);
    }
    return (
        n.pop(),
        t.length === 1 &&
        n.length === 1 &&
        t[0].x === n[0].x &&
        t[0].y === n[0].y
            ? t
            : t.concat(n)
    );
}
function yt(e) {
    let t = M(),
        n = L(() => t.value?.width ?? 0),
        r = L(() => t.value?.height ?? 0),
        i;
    return (
        p(() => {
            let n = Pe(e);
            n
                ? ((t.value = { width: n.offsetWidth, height: n.offsetHeight }),
                  (i = new ResizeObserver((e) => {
                      if (!Array.isArray(e) || !e.length) return;
                      let r = e[0],
                          i,
                          a;
                      if (`borderBoxSize` in r) {
                          let e = r.borderBoxSize,
                              t = Array.isArray(e) ? e[0] : e;
                          ((i = t.inlineSize), (a = t.blockSize));
                      } else ((i = n.offsetWidth), (a = n.offsetHeight));
                      t.value = { width: i, height: a };
                  })),
                  i.observe(n, { box: `border-box` }))
                : (t.value = void 0);
        }),
        x(() => {
            (i?.disconnect(), (i = void 0));
        }),
        { width: n, height: r }
    );
}
function bt(e) {
    let n = Fe(``, 1e3);
    return {
        search: n,
        handleTypeaheadSearch: (r, i) => {
            if (((n.value += r), e)) e(r);
            else {
                let e = t(),
                    r = i.map((e) => ({
                        ...e,
                        textValue:
                            e.value?.textValue ??
                            e.ref.textContent?.trim() ??
                            ``,
                    })),
                    a = r.find((t) => t.ref === e),
                    o = St(
                        r.map((e) => e.textValue),
                        n.value,
                        a?.textValue,
                    ),
                    s = r.find((e) => e.textValue === o);
                return (s && s.ref.focus(), s?.ref);
            }
        },
        resetTypeahead: () => {
            n.value = ``;
        },
    };
}
function xt(e, t) {
    return e.map((n, r) => e[(t + r) % e.length]);
}
function St(e, t, n) {
    let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
        i = n ? e.indexOf(n) : -1,
        a = xt(e, Math.max(i, 0));
    r.length === 1 && (a = a.filter((e) => e !== n));
    let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
    return o === n ? void 0 : o;
}
function Ct() {
    let e = M();
    return {
        primitiveElement: e,
        currentElement: L(() =>
            [`#text`, `#comment`].includes(e.value?.$el.nodeName)
                ? e.value?.$el.nextElementSibling
                : Pe(e),
        ),
    };
}
var [wt, Tt] = e(`DialogRoot`),
    Et = j({
        inheritAttrs: !1,
        __name: `DialogRoot`,
        props: {
            open: { type: Boolean, required: !1, default: void 0 },
            defaultOpen: { type: Boolean, required: !1, default: !1 },
            modal: { type: Boolean, required: !1, default: !0 },
            unmountOnHide: { type: Boolean, required: !1, default: !0 },
        },
        emits: [`update:open`],
        setup(e, { emit: t }) {
            let n = e,
                r = Ie(n, `open`, t, {
                    defaultValue: n.defaultOpen,
                    passive: n.open === void 0,
                }),
                i = M(),
                a = M(),
                { modal: o, unmountOnHide: s } = ae(n);
            return (
                Tt({
                    open: r,
                    modal: o,
                    unmountOnHide: s,
                    openModal: () => {
                        r.value = !0;
                    },
                    onOpenChange: (e) => {
                        r.value = e;
                    },
                    onOpenToggle: () => {
                        r.value = !r.value;
                    },
                    contentId: ``,
                    titleId: ``,
                    descriptionId: ``,
                    triggerElement: i,
                    contentElement: a,
                }),
                (e, t) =>
                    U(e.$slots, `default`, {
                        open: F(r),
                        close: () => (r.value = !1),
                    })
            );
        },
    }),
    Dt = j({
        __name: `DialogClose`,
        props: {
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1, default: `button` },
        },
        setup(e) {
            let t = e;
            G();
            let n = wt();
            return (r, i) => (
                k(),
                N(
                    F(V),
                    s(t, {
                        type: e.as === `button` ? `button` : void 0,
                        onClick: (i[0] ||= (e) => F(n).onOpenChange(!1)),
                    }),
                    { default: g(() => [U(r.$slots, `default`)]), _: 3 },
                    16,
                    [`type`],
                )
            );
        },
    }),
    Ot = `menu.itemSelect`,
    kt = [`Enter`, ` `],
    At = [`ArrowDown`, `PageUp`, `Home`],
    jt = [`ArrowUp`, `PageDown`, `End`],
    Mt = [...At, ...jt];
([...kt], [...kt]);
function Nt(e) {
    return e ? `open` : `closed`;
}
function Pt(e) {
    let { onEntryFocus: t, onEntryFocusOnce: n, ...r } = e;
    return r;
}
function Ft(e) {
    let n = t();
    for (let r of e) if (r === n || (r.focus(), t() !== n)) return;
}
function It(e, t) {
    let { x: n, y: r } = e,
        i = !1;
    for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
        let o = t[e].x,
            s = t[e].y,
            c = t[a].x,
            l = t[a].y;
        s > r != l > r && n < ((c - o) * (r - s)) / (l - s) + o && (i = !i);
    }
    return i;
}
function Lt(e, t) {
    return t ? It({ x: e.clientX, y: e.clientY }, t) : !1;
}
function Rt(e) {
    return e.pointerType === `mouse`;
}
var zt = j({
        __name: `DialogContentImpl`,
        props: {
            forceMount: { type: Boolean, required: !1 },
            trapFocus: { type: Boolean, required: !1 },
            disableOutsidePointerEvents: { type: Boolean, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
            present: { type: Boolean, required: !1 },
        },
        emits: [
            `escapeKeyDown`,
            `pointerDownOutside`,
            `focusOutside`,
            `interactOutside`,
            `openAutoFocus`,
            `closeAutoFocus`,
        ],
        setup(e, { emit: r }) {
            let i = e,
                a = r,
                o = wt(),
                { forwardRef: c, currentElement: l } = G();
            return (
                (o.titleId ||= n(void 0, `reka-dialog-title`)),
                (o.descriptionId ||= n(void 0, `reka-dialog-description`)),
                p(() => {
                    ((o.contentElement = l),
                        t() !== document.body &&
                            (o.triggerElement.value = t()));
                }),
                (t, n) => (
                    k(),
                    N(
                        F(Te),
                        {
                            'as-child': ``,
                            loop: ``,
                            trapped: i.trapFocus,
                            present: i.present,
                            onMountAutoFocus: (n[5] ||= (e) =>
                                a(`openAutoFocus`, e)),
                            onUnmountAutoFocus: (n[6] ||= (e) =>
                                a(`closeAutoFocus`, e)),
                        },
                        {
                            default: g(() => [
                                B(
                                    F(De),
                                    s(
                                        {
                                            id: F(o).contentId,
                                            ref: F(c),
                                            as: e.as,
                                            'as-child': e.asChild,
                                            present: i.present,
                                            'disable-outside-pointer-events':
                                                e.disableOutsidePointerEvents,
                                            role: `dialog`,
                                            'aria-describedby':
                                                F(o).descriptionId,
                                            'aria-labelledby': F(o).titleId,
                                            'data-state': F(Nt)(
                                                F(o).open.value,
                                            ),
                                        },
                                        t.$attrs,
                                        {
                                            onDismiss: (n[0] ||= (e) =>
                                                F(o).onOpenChange(!1)),
                                            onEscapeKeyDown: (n[1] ||= (e) =>
                                                a(`escapeKeyDown`, e)),
                                            onFocusOutside: (n[2] ||= (e) =>
                                                a(`focusOutside`, e)),
                                            onInteractOutside: (n[3] ||= (e) =>
                                                a(`interactOutside`, e)),
                                            onPointerDownOutside: (n[4] ||= (
                                                e,
                                            ) => a(`pointerDownOutside`, e)),
                                        },
                                    ),
                                    {
                                        default: g(() => [
                                            U(t.$slots, `default`),
                                        ]),
                                        _: 3,
                                    },
                                    16,
                                    [
                                        `id`,
                                        `as`,
                                        `as-child`,
                                        `present`,
                                        `disable-outside-pointer-events`,
                                        `aria-describedby`,
                                        `aria-labelledby`,
                                        `data-state`,
                                    ],
                                ),
                            ]),
                            _: 3,
                        },
                        8,
                        [`trapped`, `present`],
                    )
                )
            );
        },
    }),
    Bt = j({
        __name: `DialogContentModal`,
        props: {
            forceMount: { type: Boolean, required: !1 },
            trapFocus: { type: Boolean, required: !1 },
            disableOutsidePointerEvents: {
                type: Boolean,
                required: !1,
                default: !0,
            },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
            present: { type: Boolean, required: !0 },
        },
        emits: [
            `escapeKeyDown`,
            `pointerDownOutside`,
            `focusOutside`,
            `interactOutside`,
            `openAutoFocus`,
            `closeAutoFocus`,
        ],
        setup(e, { emit: t }) {
            let n = e,
                r = t,
                i = wt(),
                a = Be(r),
                { forwardRef: o, currentElement: c } = G(),
                l = L(() => (n.present ? c.value : void 0));
            we(l);
            let u = L(() => {
                let { present: e, ...t } = n;
                return t;
            });
            return (
                _(
                    () => n.present,
                    (e, t) => {
                        !e && t && i.triggerElement.value?.focus();
                    },
                ),
                (t, r) => (
                    k(),
                    N(
                        zt,
                        s(
                            { ...u.value, ...F(a) },
                            {
                                ref: F(o),
                                present: e.present,
                                'trap-focus': F(i).open.value,
                                'disable-outside-pointer-events':
                                    n.disableOutsidePointerEvents,
                                onCloseAutoFocus: (r[0] ||= (e) => {
                                    e.defaultPrevented ||
                                        (e.preventDefault(),
                                        F(i).triggerElement.value?.focus());
                                }),
                                onPointerDownOutside: (r[1] ||= (e) => {
                                    let t = e.detail.originalEvent,
                                        n = t.button === 0 && t.ctrlKey === !0;
                                    (t.button === 2 || n) && e.preventDefault();
                                }),
                                onFocusOutside: (r[2] ||= (e) => {
                                    e.preventDefault();
                                }),
                            },
                        ),
                        { default: g(() => [U(t.$slots, `default`)]), _: 3 },
                        16,
                        [
                            `present`,
                            `trap-focus`,
                            `disable-outside-pointer-events`,
                        ],
                    )
                )
            );
        },
    }),
    Vt = j({
        __name: `DialogContentNonModal`,
        props: {
            forceMount: { type: Boolean, required: !1 },
            trapFocus: { type: Boolean, required: !1 },
            disableOutsidePointerEvents: { type: Boolean, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
            present: { type: Boolean, required: !0 },
        },
        emits: [
            `escapeKeyDown`,
            `pointerDownOutside`,
            `focusOutside`,
            `interactOutside`,
            `openAutoFocus`,
            `closeAutoFocus`,
        ],
        setup(e, { emit: t }) {
            let n = e,
                r = Be(t);
            G();
            let i = wt(),
                a = M(!1),
                o = M(!1),
                c = L(() => {
                    let { present: e, ...t } = n;
                    return t;
                });
            return (
                _(
                    () => n.present,
                    (e, t) => {
                        !e &&
                            t &&
                            (a.value || i.triggerElement.value?.focus(),
                            (a.value = !1),
                            (o.value = !1));
                    },
                ),
                (t, n) => (
                    k(),
                    N(
                        zt,
                        s(
                            { ...c.value, ...F(r) },
                            {
                                present: e.present,
                                'trap-focus': !1,
                                'disable-outside-pointer-events': !1,
                                onCloseAutoFocus: (n[0] ||= (e) => {
                                    (e.defaultPrevented ||
                                        (a.value ||
                                            F(i).triggerElement.value?.focus(),
                                        e.preventDefault()),
                                        (a.value = !1),
                                        (o.value = !1));
                                }),
                                onInteractOutside: (n[1] ||= (e) => {
                                    e.defaultPrevented ||
                                        ((a.value = !0),
                                        e.detail.originalEvent.type ===
                                            `pointerdown` && (o.value = !0));
                                    let t = e.target;
                                    (F(i).triggerElement.value?.contains(t) &&
                                        e.preventDefault(),
                                        e.detail.originalEvent.type ===
                                            `focusin` &&
                                            o.value &&
                                            e.preventDefault());
                                }),
                            },
                        ),
                        { default: g(() => [U(t.$slots, `default`)]), _: 3 },
                        16,
                        [`present`],
                    )
                )
            );
        },
    }),
    Ht = j({
        __name: `DialogContent`,
        props: {
            forceMount: { type: Boolean, required: !1 },
            disableOutsidePointerEvents: {
                type: Boolean,
                required: !1,
                default: void 0,
            },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
        },
        emits: [
            `escapeKeyDown`,
            `pointerDownOutside`,
            `focusOutside`,
            `interactOutside`,
            `openAutoFocus`,
            `closeAutoFocus`,
        ],
        setup(e, { emit: t }) {
            let n = e,
                i = t,
                a = wt(),
                o = Be(i),
                { forwardRef: c } = G(),
                l = L(() => n.forceMount || !a.unmountOnHide.value);
            return (t, i) => (
                k(),
                N(
                    F(r),
                    { present: F(a).open.value, 'force-mount': l.value },
                    {
                        default: g(({ present: r }) => [
                            F(a).modal.value
                                ? u(
                                      (k(),
                                      N(
                                          Bt,
                                          s(
                                              {
                                                  key: 0,
                                                  ref: F(c),
                                                  present: !l.value || r,
                                              },
                                              { ...n, ...F(o), ...t.$attrs },
                                          ),
                                          {
                                              default: g(() => [
                                                  U(t.$slots, `default`),
                                              ]),
                                              _: 3,
                                          },
                                          16,
                                          [`present`],
                                      )),
                                      [
                                          [
                                              S,
                                              e.forceMount ||
                                                  F(a).unmountOnHide.value ||
                                                  r,
                                          ],
                                      ],
                                  )
                                : u(
                                      (k(),
                                      N(
                                          Vt,
                                          s(
                                              {
                                                  key: 1,
                                                  ref: F(c),
                                                  present: !l.value || r,
                                              },
                                              { ...n, ...F(o), ...t.$attrs },
                                          ),
                                          {
                                              default: g(() => [
                                                  U(t.$slots, `default`),
                                              ]),
                                              _: 3,
                                          },
                                          16,
                                          [`present`],
                                      )),
                                      [
                                          [
                                              S,
                                              e.forceMount ||
                                                  F(a).unmountOnHide.value ||
                                                  r,
                                          ],
                                      ],
                                  ),
                        ]),
                        _: 3,
                    },
                    8,
                    [`present`, `force-mount`],
                )
            );
        },
    }),
    Ut = j({
        __name: `DialogDescription`,
        props: {
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1, default: `p` },
        },
        setup(e) {
            let t = e;
            G();
            let n = wt();
            return (e, r) => (
                k(),
                N(
                    F(V),
                    s(t, { id: F(n).descriptionId }),
                    { default: g(() => [U(e.$slots, `default`)]), _: 3 },
                    16,
                    [`id`],
                )
            );
        },
    }),
    Wt = j({
        __name: `DialogOverlayImpl`,
        props: {
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
            present: { type: Boolean, required: !1, default: !0 },
        },
        setup(e) {
            let t = e,
                n = wt(),
                r = Ce(t.present);
            return (
                _(
                    () => t.present,
                    (e) => (r.value = e),
                ),
                G(),
                (t, r) => (
                    k(),
                    N(
                        F(V),
                        {
                            as: e.as,
                            'as-child': e.asChild,
                            'data-state': F(n).open.value ? `open` : `closed`,
                            style: { 'pointer-events': `auto` },
                            onPointerdown: (r[0] ||= o(() => {}, [
                                `left`,
                                `self`,
                                `prevent`,
                            ])),
                        },
                        { default: g(() => [U(t.$slots, `default`)]), _: 3 },
                        8,
                        [`as`, `as-child`, `data-state`],
                    )
                )
            );
        },
    }),
    Gt = j({
        __name: `DialogOverlay`,
        props: {
            forceMount: { type: Boolean, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
        },
        setup(e) {
            let t = e,
                n = wt(),
                { forwardRef: i } = G(),
                a = L(() => t.forceMount || !n.unmountOnHide.value);
            return (t, o) =>
                F(n)?.modal.value
                    ? (k(),
                      N(
                          F(r),
                          {
                              key: 0,
                              present: F(n).open.value,
                              'force-mount': a.value,
                          },
                          {
                              default: g(({ present: r }) => [
                                  u(
                                      B(
                                          Wt,
                                          s(t.$attrs, {
                                              ref: F(i),
                                              as: e.as,
                                              'as-child': e.asChild,
                                              present: !a.value || r,
                                          }),
                                          {
                                              default: g(() => [
                                                  U(t.$slots, `default`),
                                              ]),
                                              _: 3,
                                          },
                                          16,
                                          [`as`, `as-child`, `present`],
                                      ),
                                      [
                                          [
                                              S,
                                              e.forceMount ||
                                                  F(n).unmountOnHide.value ||
                                                  r,
                                          ],
                                      ],
                                  ),
                              ]),
                              _: 3,
                          },
                          8,
                          [`present`, `force-mount`],
                      ))
                    : D(`v-if`, !0);
        },
    }),
    Kt = j({
        __name: `DialogPortal`,
        props: {
            to: { type: null, required: !1 },
            disabled: { type: Boolean, required: !1 },
            defer: { type: Boolean, required: !1 },
            forceMount: { type: Boolean, required: !1 },
        },
        setup(e) {
            let t = e;
            return (e, n) => (
                k(),
                N(
                    F(Oe),
                    W(T(t)),
                    { default: g(() => [U(e.$slots, `default`)]), _: 3 },
                    16,
                )
            );
        },
    }),
    qt = j({
        __name: `DialogTitle`,
        props: {
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1, default: `h2` },
        },
        setup(e) {
            let t = e,
                n = wt();
            return (
                G(),
                (e, r) => (
                    k(),
                    N(
                        F(V),
                        s(t, { id: F(n).titleId }),
                        { default: g(() => [U(e.$slots, `default`)]), _: 3 },
                        16,
                        [`id`],
                    )
                )
            );
        },
    }),
    Jt = `data-reka-collection-item`;
function Yt(e = {}) {
    let { key: t = ``, isProvider: n = !1 } = e,
        r = `${t}CollectionProvider`,
        i;
    if (n) {
        let e = M(new Map());
        ((i = { collectionRef: M(), itemMap: e }), fe(r, i));
    } else i = y(r);
    let a = (e, t = !1) => {
            if (!i.collectionRef.value) return;
            let n = i.itemMap.value.get(e);
            return n && (t || n.ref.dataset.disabled !== ``) ? n : void 0;
        },
        o = (e = !1) => {
            let t = i.collectionRef.value;
            if (!t) return [];
            let n = Array.from(t.querySelectorAll(`[${Jt}]`)),
                r = new Map(n.map((e, t) => [e, t])),
                a = Array.from(i.itemMap.value.values()).sort(
                    (e, t) => (r.get(e.ref) ?? -1) - (r.get(t.ref) ?? -1),
                );
            return e ? a : a.filter((e) => e.ref.dataset.disabled !== ``);
        },
        s = j({
            name: `CollectionSlot`,
            inheritAttrs: !1,
            setup(e, { slots: t, attrs: n }) {
                let { primitiveElement: r, currentElement: a } = Ct();
                return (
                    _(a, () => {
                        i.collectionRef.value = a.value;
                    }),
                    () => l(le, { ref: r, ...n }, t)
                );
            },
        }),
        c = j({
            name: `CollectionItem`,
            inheritAttrs: !1,
            props: { value: { validator: () => !0 } },
            setup(e, { slots: t, attrs: n }) {
                let { primitiveElement: r, currentElement: a } = Ct();
                return (
                    P((t) => {
                        if (a.value) {
                            let n = b(a.value);
                            (i.itemMap.value.set(n, {
                                ref: a.value,
                                value: e.value,
                            }),
                                t(() => i.itemMap.value.delete(n)));
                        }
                    }),
                    () => l(le, { ...n, [Jt]: ``, ref: r }, t)
                );
            },
        });
    return {
        getItems: o,
        getItem: a,
        reactiveItems: L(() => Array.from(i.itemMap.value.values())),
        itemMapSize: L(() => i.itemMap.value.size),
        CollectionSlot: s,
        CollectionItem: c,
    };
}
var Xt = j({
        __name: `VisuallyHidden`,
        props: {
            feature: { type: String, required: !1, default: `focusable` },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1, default: `span` },
        },
        setup(e) {
            return (t, n) => (
                k(),
                N(
                    F(V),
                    {
                        as: e.as,
                        'as-child': e.asChild,
                        'aria-hidden':
                            e.feature === `fully-hidden` ? `true` : void 0,
                        'data-hidden':
                            e.feature === `fully-hidden` ? `` : void 0,
                        tabindex: e.feature === `fully-hidden` ? `-1` : void 0,
                        style: {
                            position: `absolute`,
                            border: 0,
                            width: `1px`,
                            height: `1px`,
                            padding: 0,
                            margin: `-1px`,
                            overflow: `hidden`,
                            clip: `rect(0, 0, 0, 0)`,
                            clipPath: `inset(50%)`,
                            whiteSpace: `nowrap`,
                            wordWrap: `normal`,
                            top: `-1px`,
                            left: `-1px`,
                        },
                    },
                    { default: g(() => [U(t.$slots, `default`)]), _: 3 },
                    8,
                    [
                        `as`,
                        `as-child`,
                        `aria-hidden`,
                        `data-hidden`,
                        `tabindex`,
                    ],
                )
            );
        },
    }),
    Zt = `rovingFocusGroup.onEntryFocus`,
    Qt = { bubbles: !1, cancelable: !0 },
    $t = {
        ArrowLeft: `prev`,
        ArrowUp: `prev`,
        ArrowRight: `next`,
        ArrowDown: `next`,
        PageUp: `first`,
        Home: `first`,
        PageDown: `last`,
        End: `last`,
    };
function en(e, t) {
    return t === `rtl`
        ? e === `ArrowLeft`
            ? `ArrowRight`
            : e === `ArrowRight`
              ? `ArrowLeft`
              : e
        : e;
}
function tn(e, t, n) {
    let r = en(e.key, n);
    if (
        !(t === `vertical` && [`ArrowLeft`, `ArrowRight`].includes(r)) &&
        !(t === `horizontal` && [`ArrowUp`, `ArrowDown`].includes(r))
    )
        return $t[r];
}
function nn(e, n = !1) {
    let r = t();
    for (let i of e)
        if (i === r || (i.focus({ preventScroll: n }), t() !== r)) return;
}
function rn(e, t) {
    return e.map((n, r) => e[(t + r) % e.length]);
}
var [an, on] = e(`PopperRoot`),
    sn = j({
        inheritAttrs: !1,
        __name: `PopperRoot`,
        setup(e) {
            let t = M();
            return (
                on({ anchor: t, onAnchorChange: (e) => (t.value = e) }),
                (e, t) => U(e.$slots, `default`)
            );
        },
    }),
    cn = j({
        __name: `PopperAnchor`,
        props: {
            reference: { type: null, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
        },
        setup(e) {
            let t = e,
                { forwardRef: n, currentElement: r } = G(),
                i = an();
            return (
                a(() => {
                    i.onAnchorChange(t.reference ?? r.value);
                }),
                (t, r) => (
                    k(),
                    N(
                        F(V),
                        { ref: F(n), as: e.as, 'as-child': e.asChild },
                        { default: g(() => [U(t.$slots, `default`)]), _: 3 },
                        8,
                        [`as`, `as-child`],
                    )
                )
            );
        },
    }),
    ln = { key: 0, d: `M0 0L6 6L12 0` },
    un = {
        key: 1,
        d: `M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0`,
    },
    dn = j({
        __name: `Arrow`,
        props: {
            width: { type: Number, required: !1, default: 10 },
            height: { type: Number, required: !1, default: 5 },
            rounded: { type: Boolean, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1, default: `svg` },
        },
        setup(e) {
            let t = e;
            return (
                G(),
                (n, r) => (
                    k(),
                    N(
                        F(V),
                        s(t, {
                            width: e.width,
                            height: e.height,
                            viewBox: e.asChild ? void 0 : `0 0 12 6`,
                            preserveAspectRatio: e.asChild ? void 0 : `none`,
                        }),
                        {
                            default: g(() => [
                                U(n.$slots, `default`, {}, () => [
                                    e.rounded
                                        ? (k(), z(`path`, un))
                                        : (k(), z(`path`, ln)),
                                ]),
                            ]),
                            _: 3,
                        },
                        16,
                        [`width`, `height`, `viewBox`, `preserveAspectRatio`],
                    )
                )
            );
        },
    });
function fn(e) {
    return e !== null;
}
function pn(e) {
    return {
        name: `transformOrigin`,
        options: e,
        fn(t) {
            let { placement: n, rects: r, middlewareData: i } = t,
                a = i.arrow?.centerOffset !== 0,
                o = a ? 0 : e.arrowWidth,
                s = a ? 0 : e.arrowHeight,
                [c, l] = mn(n),
                u = {
                    start: e.dir === `rtl` ? `100%` : `0%`,
                    center: `50%`,
                    end: e.dir === `rtl` ? `0%` : `100%`,
                }[l],
                d = { start: `0%`, center: `50%`, end: `100%` }[l],
                f = (i.arrow?.x ?? 0) + o / 2,
                p = (i.arrow?.y ?? 0) + s / 2,
                m = ``,
                h = ``;
            return (
                c === `bottom`
                    ? ((m = a ? u : `${f}px`), (h = `${-s}px`))
                    : c === `top`
                      ? ((m = a ? u : `${f}px`),
                        (h = `${r.floating.height + s}px`))
                      : c === `right`
                        ? ((m = `${-s}px`), (h = a ? d : `${p}px`))
                        : c === `left` &&
                          ((m = `${r.floating.width + s}px`),
                          (h = a ? d : `${p}px`)),
                { data: { x: m, y: h } }
            );
        },
    };
}
function mn(e) {
    let [t, n = `center`] = e.split(`-`);
    return [t, n];
}
var hn = [`top`, `right`, `bottom`, `left`],
    gn = Math.min,
    _n = Math.max,
    vn = Math.round,
    yn = Math.floor,
    bn = (e) => ({ x: e, y: e }),
    xn = { left: `right`, right: `left`, bottom: `top`, top: `bottom` };
function Sn(e, t, n) {
    return _n(e, gn(t, n));
}
function Cn(e, t) {
    return typeof e == `function` ? e(t) : e;
}
function wn(e) {
    return e.split(`-`)[0];
}
function Tn(e) {
    return e.split(`-`)[1];
}
function En(e) {
    return e === `x` ? `y` : `x`;
}
function Dn(e) {
    return e === `y` ? `height` : `width`;
}
function On(e) {
    let t = e[0];
    return t === `t` || t === `b` ? `y` : `x`;
}
function kn(e) {
    return En(On(e));
}
function An(e, t, n) {
    n === void 0 && (n = !1);
    let r = Tn(e),
        i = kn(e),
        a = Dn(i),
        o =
            i === `x`
                ? r === (n ? `end` : `start`)
                    ? `right`
                    : `left`
                : r === `start`
                  ? `bottom`
                  : `top`;
    return (t.reference[a] > t.floating[a] && (o = zn(o)), [o, zn(o)]);
}
function jn(e) {
    let t = zn(e);
    return [Mn(e), t, Mn(t)];
}
function Mn(e) {
    return e.includes(`start`)
        ? e.replace(`start`, `end`)
        : e.replace(`end`, `start`);
}
var Nn = [`left`, `right`],
    Pn = [`right`, `left`],
    Fn = [`top`, `bottom`],
    In = [`bottom`, `top`];
function Ln(e, t, n) {
    switch (e) {
        case `top`:
        case `bottom`:
            return n ? (t ? Pn : Nn) : t ? Nn : Pn;
        case `left`:
        case `right`:
            return t ? Fn : In;
        default:
            return [];
    }
}
function Rn(e, t, n, r) {
    let i = Tn(e),
        a = Ln(wn(e), n === `start`, r);
    return (
        i && ((a = a.map((e) => e + `-` + i)), t && (a = a.concat(a.map(Mn)))),
        a
    );
}
function zn(e) {
    let t = wn(e);
    return xn[t] + e.slice(t.length);
}
function Bn(e) {
    return {
        top: e.top ?? 0,
        right: e.right ?? 0,
        bottom: e.bottom ?? 0,
        left: e.left ?? 0,
    };
}
function Vn(e) {
    return typeof e == `number`
        ? { top: e, right: e, bottom: e, left: e }
        : Bn(e);
}
function Hn(e) {
    let { x: t, y: n, width: r, height: i } = e;
    return {
        width: r,
        height: i,
        top: n,
        left: t,
        right: t + r,
        bottom: n + i,
        x: t,
        y: n,
    };
}
function Un(e, t, n) {
    let { reference: r, floating: i } = e,
        a = On(t),
        o = kn(t),
        s = Dn(o),
        c = wn(t),
        l = a === `y`,
        u = r.x + r.width / 2 - i.width / 2,
        d = r.y + r.height / 2 - i.height / 2,
        f = r[s] / 2 - i[s] / 2,
        p;
    switch (c) {
        case `top`:
            p = { x: u, y: r.y - i.height };
            break;
        case `bottom`:
            p = { x: u, y: r.y + r.height };
            break;
        case `right`:
            p = { x: r.x + r.width, y: d };
            break;
        case `left`:
            p = { x: r.x - i.width, y: d };
            break;
        default:
            p = { x: r.x, y: r.y };
    }
    let m = Tn(t);
    return (m && (p[o] += f * (m === `end` ? 1 : -1) * (n && l ? -1 : 1)), p);
}
async function Wn(e, t) {
    t === void 0 && (t = {});
    let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e,
        {
            boundary: c = `clippingAncestors`,
            rootBoundary: l = `viewport`,
            elementContext: u = `floating`,
            altBoundary: d = !1,
            padding: f = 0,
        } = Cn(t, e),
        p = Vn(f),
        m = o[d ? (u === `floating` ? `reference` : `floating`) : u],
        h = Hn(
            await i.getClippingRect({
                element:
                    ((await (i.isElement == null ? void 0 : i.isElement(m))) ??
                    !0)
                        ? m
                        : m.contextElement ||
                          (await (i.getDocumentElement == null
                              ? void 0
                              : i.getDocumentElement(o.floating))),
                boundary: c,
                rootBoundary: l,
                strategy: s,
            }),
        ),
        g =
            u === `floating`
                ? {
                      x: n,
                      y: r,
                      width: a.floating.width,
                      height: a.floating.height,
                  }
                : a.reference,
        _ = await (i.getOffsetParent == null
            ? void 0
            : i.getOffsetParent(o.floating)),
        v = ((await (i.isElement == null ? void 0 : i.isElement(_))) &&
            (await (i.getScale == null ? void 0 : i.getScale(_)))) || {
            x: 1,
            y: 1,
        },
        y = Hn(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
                ? await i.convertOffsetParentRelativeRectToViewportRelativeRect(
                      { elements: o, rect: g, offsetParent: _, strategy: s },
                  )
                : g,
        );
    return {
        top: (h.top - y.top + p.top) / v.y,
        bottom: (y.bottom - h.bottom + p.bottom) / v.y,
        left: (h.left - y.left + p.left) / v.x,
        right: (y.right - h.right + p.right) / v.x,
    };
}
var Gn = 50,
    Kn = async (e, t, n) => {
        let {
                placement: r = `bottom`,
                strategy: i = `absolute`,
                middleware: a = [],
                platform: o,
            } = n,
            s = o.detectOverflow ? o : { ...o, detectOverflow: Wn },
            c = await (o.isRTL == null ? void 0 : o.isRTL(t)),
            l = await o.getElementRects({
                reference: e,
                floating: t,
                strategy: i,
            }),
            { x: u, y: d } = Un(l, r, c),
            f = r,
            p = 0,
            m = {};
        for (let n = 0; n < a.length; n++) {
            let h = a[n];
            if (!h) continue;
            let { name: g, fn: _ } = h,
                {
                    x: v,
                    y,
                    data: b,
                    reset: x,
                } = await _({
                    x: u,
                    y: d,
                    initialPlacement: r,
                    placement: f,
                    strategy: i,
                    middlewareData: m,
                    rects: l,
                    platform: s,
                    elements: { reference: e, floating: t },
                });
            ((u = v ?? u),
                (d = y ?? d),
                (m[g] = { ...m[g], ...b }),
                x &&
                    p < Gn &&
                    (p++,
                    typeof x == `object` &&
                        (x.placement && (f = x.placement),
                        x.rects &&
                            (l =
                                x.rects === !0
                                    ? await o.getElementRects({
                                          reference: e,
                                          floating: t,
                                          strategy: i,
                                      })
                                    : x.rects),
                        ({ x: u, y: d } = Un(l, f, c))),
                    (n = -1)));
        }
        return { x: u, y: d, placement: f, strategy: i, middlewareData: m };
    },
    qn = (e) => ({
        name: `arrow`,
        options: e,
        async fn(t) {
            let {
                    x: n,
                    y: r,
                    placement: i,
                    rects: a,
                    platform: o,
                    elements: s,
                    middlewareData: c,
                } = t,
                { element: l, padding: u = 0 } = Cn(e, t) || {};
            if (l == null) return {};
            let d = Vn(u),
                f = { x: n, y: r },
                p = kn(i),
                m = Dn(p),
                h = await o.getDimensions(l),
                g = p === `y`,
                _ = g ? `top` : `left`,
                v = g ? `bottom` : `right`,
                y = g ? `clientHeight` : `clientWidth`,
                b = a.reference[m] + a.reference[p] - f[p] - a.floating[m],
                x = f[p] - a.reference[p],
                S = await (o.getOffsetParent == null
                    ? void 0
                    : o.getOffsetParent(l)),
                C = S ? S[y] : 0;
            (C && (await (o.isElement == null ? void 0 : o.isElement(S)))) ||
                (C = s.floating[y] || a.floating[m]);
            let w = b / 2 - x / 2,
                T = C / 2 - h[m] / 2 - 1,
                ee = gn(d[_], T),
                te = gn(d[v], T),
                ne = C - h[m] - te,
                re = C / 2 - h[m] / 2 + w,
                E = Sn(ee, re, ne),
                D =
                    !c.arrow &&
                    Tn(i) != null &&
                    re !== E &&
                    a.reference[m] / 2 - (re < ee ? ee : te) - h[m] / 2 < 0,
                O = D ? (re < ee ? re - ee : re - ne) : 0;
            return {
                [p]: f[p] + O,
                data: {
                    [p]: E,
                    centerOffset: re - E - O,
                    ...(D && { alignmentOffset: O }),
                },
                reset: D,
            };
        },
    }),
    Jn = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: `flip`,
                options: e,
                async fn(t) {
                    var n;
                    let {
                            placement: r,
                            middlewareData: i,
                            rects: a,
                            initialPlacement: o,
                            platform: s,
                            elements: c,
                        } = t,
                        {
                            mainAxis: l = !0,
                            crossAxis: u = !0,
                            fallbackPlacements: d,
                            fallbackStrategy: f = `bestFit`,
                            fallbackAxisSideDirection: p = `none`,
                            flipAlignment: m = !0,
                            ...h
                        } = Cn(e, t);
                    if ((n = i.arrow) != null && n.alignmentOffset) return {};
                    let g = wn(r),
                        _ = On(o),
                        v = wn(o) === o,
                        y = await (s.isRTL == null
                            ? void 0
                            : s.isRTL(c.floating)),
                        b = d || (v || !m ? [zn(o)] : jn(o)),
                        x = p !== `none`;
                    !d && x && b.push(...Rn(o, m, p, y));
                    let S = [o, ...b],
                        C = await s.detectOverflow(t, h),
                        w = [],
                        T = i.flip?.overflows || [];
                    if ((l && w.push(C[g]), u)) {
                        let e = An(r, a, y);
                        w.push(C[e[0]], C[e[1]]);
                    }
                    if (
                        ((T = [...T, { placement: r, overflows: w }]),
                        !w.every((e) => e <= 0))
                    ) {
                        let e = (i.flip?.index || 0) + 1,
                            t = S[e];
                        if (
                            t &&
                            (u !== `alignment` ||
                                _ === On(t) ||
                                T.every(
                                    (e) =>
                                        On(e.placement) !== _ ||
                                        e.overflows[0] > 0,
                                ))
                        )
                            return {
                                data: { index: e, overflows: T },
                                reset: { placement: t },
                            };
                        let n = T.filter((e) => e.overflows[0] <= 0).sort(
                            (e, t) => e.overflows[1] - t.overflows[1],
                        )[0]?.placement;
                        if (!n)
                            switch (f) {
                                case `bestFit`: {
                                    let e = T.filter((e) => {
                                        if (x) {
                                            let t = On(e.placement);
                                            return t === _ || t === `y`;
                                        }
                                        return !0;
                                    })
                                        .map((e) => [
                                            e.placement,
                                            e.overflows
                                                .filter((e) => e > 0)
                                                .reduce((e, t) => e + t, 0),
                                        ])
                                        .sort((e, t) => e[1] - t[1])[0]?.[0];
                                    e && (n = e);
                                    break;
                                }
                                case `initialPlacement`:
                                    n = o;
                            }
                        if (r !== n) return { reset: { placement: n } };
                    }
                    return {};
                },
            }
        );
    };
function Yn(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width,
    };
}
function Xn(e) {
    return hn.some((t) => e[t] >= 0);
}
var Zn = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: `hide`,
                options: e,
                async fn(t) {
                    let { rects: n, platform: r } = t,
                        { strategy: i = `referenceHidden`, ...a } = Cn(e, t);
                    switch (i) {
                        case `referenceHidden`: {
                            let e = Yn(
                                await r.detectOverflow(t, {
                                    ...a,
                                    elementContext: `reference`,
                                }),
                                n.reference,
                            );
                            return {
                                data: {
                                    referenceHiddenOffsets: e,
                                    referenceHidden: Xn(e),
                                },
                            };
                        }
                        case `escaped`: {
                            let e = Yn(
                                await r.detectOverflow(t, {
                                    ...a,
                                    altBoundary: !0,
                                }),
                                n.floating,
                            );
                            return {
                                data: { escapedOffsets: e, escaped: Xn(e) },
                            };
                        }
                        default:
                            return {};
                    }
                },
            }
        );
    },
    Qn = new Set([`left`, `top`]);
async function $n(e, t) {
    let { placement: n, platform: r, elements: i } = e,
        a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)),
        o = wn(n),
        s = Tn(n),
        c = On(n) === `y`,
        l = Qn.has(o) ? -1 : 1,
        u = a && c ? -1 : 1,
        d = Cn(t, e),
        {
            mainAxis: f,
            crossAxis: p,
            alignmentAxis: m,
        } = typeof d == `number`
            ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
            : {
                  mainAxis: d.mainAxis || 0,
                  crossAxis: d.crossAxis || 0,
                  alignmentAxis: d.alignmentAxis,
              };
    return (
        s && typeof m == `number` && (p = s === `end` ? m * -1 : m),
        c ? { x: p * u, y: f * l } : { x: f * l, y: p * u }
    );
}
var er = function (e) {
        return (
            e === void 0 && (e = 0),
            {
                name: `offset`,
                options: e,
                async fn(t) {
                    var n;
                    let { x: r, y: i, placement: a, middlewareData: o } = t,
                        s = await $n(t, e);
                    return a === o.offset?.placement &&
                        (n = o.arrow) != null &&
                        n.alignmentOffset
                        ? {}
                        : {
                              x: r + s.x,
                              y: i + s.y,
                              data: { ...s, placement: a },
                          };
                },
            }
        );
    },
    tr = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: `shift`,
                options: e,
                async fn(t) {
                    let { x: n, y: r, placement: i, platform: a } = t,
                        {
                            mainAxis: o = !0,
                            crossAxis: s = !1,
                            limiter: c = {
                                fn: (e) => {
                                    let { x: t, y: n } = e;
                                    return { x: t, y: n };
                                },
                            },
                            ...l
                        } = Cn(e, t),
                        u = { x: n, y: r },
                        d = await a.detectOverflow(t, l),
                        f = On(i),
                        p = En(f),
                        m = u[p],
                        h = u[f],
                        g = (e, t) =>
                            Sn(
                                t + d[e === `y` ? `top` : `left`],
                                t,
                                t - d[e === `y` ? `bottom` : `right`],
                            );
                    (o && (m = g(p, m)), s && (h = g(f, h)));
                    let _ = c.fn({ ...t, [p]: m, [f]: h });
                    return {
                        ..._,
                        data: {
                            x: _.x - n,
                            y: _.y - r,
                            enabled: { [p]: o, [f]: s },
                        },
                    };
                },
            }
        );
    },
    nr = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                options: e,
                fn(t) {
                    let {
                            x: n,
                            y: r,
                            placement: i,
                            rects: a,
                            middlewareData: o,
                        } = t,
                        {
                            offset: s = 0,
                            mainAxis: c = !0,
                            crossAxis: l = !0,
                        } = Cn(e, t),
                        u = { x: n, y: r },
                        d = On(i),
                        f = En(d),
                        p = u[f],
                        m = u[d],
                        h = Cn(s, t),
                        g =
                            typeof h == `number`
                                ? { mainAxis: h, crossAxis: 0 }
                                : {
                                      mainAxis: h.mainAxis ?? 0,
                                      crossAxis: h.crossAxis ?? 0,
                                  };
                    if (c) {
                        let e = f === `y` ? `height` : `width`,
                            t = a.reference[f] - a.floating[e] + g.mainAxis,
                            n = a.reference[f] + a.reference[e] - g.mainAxis;
                        p < t ? (p = t) : p > n && (p = n);
                    }
                    if (l) {
                        let e = f === `y` ? `width` : `height`,
                            t = Qn.has(wn(i)),
                            n =
                                a.reference[d] -
                                a.floating[e] +
                                ((t && o.offset?.[d]) || 0) +
                                (t ? 0 : g.crossAxis),
                            r =
                                a.reference[d] +
                                a.reference[e] +
                                (t ? 0 : o.offset?.[d] || 0) -
                                (t ? g.crossAxis : 0);
                        m < n ? (m = n) : m > r && (m = r);
                    }
                    return { [f]: p, [d]: m };
                },
            }
        );
    },
    rr = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: `size`,
                options: e,
                async fn(t) {
                    let {
                            placement: n,
                            rects: r,
                            platform: i,
                            elements: a,
                        } = t,
                        { apply: o = () => {}, ...s } = Cn(e, t),
                        c = await i.detectOverflow(t, s),
                        l = wn(n),
                        u = Tn(n),
                        d = On(n) === `y`,
                        { width: f, height: p } = r.floating,
                        m,
                        h;
                    l === `top` || l === `bottom`
                        ? ((m = l),
                          (h =
                              u ===
                              ((await (i.isRTL == null
                                  ? void 0
                                  : i.isRTL(a.floating)))
                                  ? `start`
                                  : `end`)
                                  ? `left`
                                  : `right`))
                        : ((h = l), (m = u === `end` ? `top` : `bottom`));
                    let g = p - c.top - c.bottom,
                        _ = f - c.left - c.right,
                        v = gn(p - c[m], g),
                        y = gn(f - c[h], _),
                        b = t.middlewareData.shift,
                        x = !b,
                        S = v,
                        C = y;
                    (b != null && b.enabled.x && (C = _),
                        b != null && b.enabled.y && (S = g),
                        x &&
                            !u &&
                            (d
                                ? (C = f - 2 * _n(c.left, c.right))
                                : (S = p - 2 * _n(c.top, c.bottom))),
                        await o({
                            ...t,
                            availableWidth: C,
                            availableHeight: S,
                        }));
                    let w = await i.getDimensions(a.floating);
                    return f !== w.width || p !== w.height
                        ? { reset: { rects: !0 } }
                        : {};
                },
            }
        );
    };
function ir() {
    return typeof window < `u`;
}
function ar(e) {
    return cr(e) ? (e.nodeName || ``).toLowerCase() : `#document`;
}
function or(e) {
    var t;
    return (
        (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
        window
    );
}
function sr(e) {
    return ((cr(e) ? e.ownerDocument : e.document) || window.document)
        ?.documentElement;
}
function cr(e) {
    return ir() ? e instanceof Node || e instanceof or(e).Node : !1;
}
function lr(e) {
    return ir() ? e instanceof Element || e instanceof or(e).Element : !1;
}
function ur(e) {
    return ir()
        ? e instanceof HTMLElement || e instanceof or(e).HTMLElement
        : !1;
}
function dr(e) {
    return !ir() || typeof ShadowRoot > `u`
        ? !1
        : e instanceof ShadowRoot || e instanceof or(e).ShadowRoot;
}
function fr(e) {
    let { overflow: t, overflowX: n, overflowY: r, display: i } = Cr(e);
    return (
        /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
        i !== `inline` &&
        i !== `contents`
    );
}
function pr(e) {
    return /^(table|td|th)$/.test(ar(e));
}
function mr(e) {
    try {
        if (e.matches(`:popover-open`)) return !0;
    } catch {}
    try {
        return e.matches(`:modal`);
    } catch {
        return !1;
    }
}
var hr = /transform|translate|scale|rotate|perspective|filter/,
    gr = /paint|layout|strict|content/,
    _r = (e) => !!e && e !== `none`,
    vr;
function yr(e) {
    let t = lr(e) ? Cr(e) : e;
    return (
        _r(t.transform) ||
        _r(t.translate) ||
        _r(t.scale) ||
        _r(t.rotate) ||
        _r(t.perspective) ||
        (!xr() && (_r(t.backdropFilter) || _r(t.filter))) ||
        hr.test(t.willChange || ``) ||
        gr.test(t.contain || ``)
    );
}
function br(e) {
    let t = Tr(e);
    for (; ur(t) && !Sr(t);) {
        if (yr(t)) return t;
        if (mr(t)) return null;
        t = Tr(t);
    }
    return null;
}
function xr() {
    return (
        (vr ??=
            typeof CSS < `u` &&
            CSS.supports &&
            CSS.supports(`-webkit-backdrop-filter`, `none`)),
        vr
    );
}
function Sr(e) {
    return /^(html|body|#document)$/.test(ar(e));
}
function Cr(e) {
    return or(e).getComputedStyle(e);
}
function wr(e) {
    return lr(e)
        ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
        : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Tr(e) {
    if (ar(e) === `html`) return e;
    let t = e.assignedSlot || e.parentNode || (dr(e) && e.host) || sr(e);
    return dr(t) ? t.host : t;
}
function Er(e) {
    let t = Tr(e);
    return Sr(t) ? (e.ownerDocument || e).body : ur(t) && fr(t) ? t : Er(t);
}
function Dr(e, t, n) {
    (t === void 0 && (t = []), n === void 0 && (n = !0));
    let r = Er(e),
        i = r === e.ownerDocument?.body,
        a = or(r);
    if (i) {
        let e = Or(a);
        return t.concat(
            a,
            a.visualViewport || [],
            fr(r) ? r : [],
            e && n ? Dr(e) : [],
        );
    }
    return t.concat(r, Dr(r, [], n));
}
function Or(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function kr(e) {
    let t = Cr(e),
        n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0,
        i = ur(e),
        a = i ? e.offsetWidth : n,
        o = i ? e.offsetHeight : r,
        s = vn(n) !== a || vn(r) !== o;
    return (s && ((n = a), (r = o)), { width: n, height: r, $: s });
}
function Ar(e) {
    return lr(e) ? e : e.contextElement;
}
function jr(e) {
    let t = Ar(e);
    if (!ur(t)) return bn(1);
    let n = t.getBoundingClientRect(),
        { width: r, height: i, $: a } = kr(t),
        o = (a ? vn(n.width) : n.width) / r,
        s = (a ? vn(n.height) : n.height) / i;
    return (
        (o && Number.isFinite(o)) || (o = 1),
        (s && Number.isFinite(s)) || (s = 1),
        { x: o, y: s }
    );
}
var Mr = bn(0);
function Nr(e) {
    let t = or(e);
    return !xr() || !t.visualViewport
        ? Mr
        : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Pr(e, t, n) {
    return (t === void 0 && (t = !1), !!n && t && n === or(e));
}
function Fr(e, t, n, r) {
    (t === void 0 && (t = !1), n === void 0 && (n = !1));
    let i = e.getBoundingClientRect(),
        a = Ar(e),
        o = bn(1);
    t && (r ? lr(r) && (o = jr(r)) : (o = jr(e)));
    let s = Pr(a, n, r) ? Nr(a) : bn(0),
        c = (i.left + s.x) / o.x,
        l = (i.top + s.y) / o.y,
        u = i.width / o.x,
        d = i.height / o.y;
    if (a && r) {
        let e = or(a),
            t = lr(r) ? or(r) : r,
            n = e,
            i = Or(n);
        for (; i && t !== n;) {
            let e = jr(i),
                t = i.getBoundingClientRect(),
                r = Cr(i),
                a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
            ((c *= e.x),
                (l *= e.y),
                (u *= e.x),
                (d *= e.y),
                (c += a),
                (l += o),
                (n = or(i)),
                (i = Or(n)));
        }
    }
    return Hn({ width: u, height: d, x: c, y: l });
}
function Ir(e, t) {
    let n = wr(e).scrollLeft;
    return t ? t.left + n : Fr(sr(e)).left + n;
}
function Lr(e, t) {
    let n = e.getBoundingClientRect();
    return { x: n.left + t.scrollLeft - Ir(e, n), y: n.top + t.scrollTop };
}
function Rr(e) {
    let { elements: t, rect: n, offsetParent: r, strategy: i } = e,
        a = i === `fixed`,
        o = sr(r),
        s = t ? mr(t.floating) : !1;
    if (r === o || (s && a)) return n;
    let c = { scrollLeft: 0, scrollTop: 0 },
        l = bn(1),
        u = bn(0),
        d = ur(r);
    if ((d || !a) && ((ar(r) !== `body` || fr(o)) && (c = wr(r)), d)) {
        let e = Fr(r);
        ((l = jr(r)), (u.x = e.x + r.clientLeft), (u.y = e.y + r.clientTop));
    }
    let f = o && !d && !a ? Lr(o, c) : bn(0);
    return {
        width: n.width * l.x,
        height: n.height * l.y,
        x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
        y: n.y * l.y - c.scrollTop * l.y + u.y + f.y,
    };
}
function zr(e) {
    return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function Br(e) {
    let t = wr(e),
        n = e.ownerDocument.body,
        r = _n(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth),
        i = _n(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight),
        a = -t.scrollLeft + Ir(e),
        o = -t.scrollTop;
    return (
        Cr(n).direction === `rtl` &&
            (a += _n(e.clientWidth, n.clientWidth) - r),
        { width: r, height: i, x: a, y: o }
    );
}
var Vr = 25;
function Hr(e, t, n) {
    n === void 0 && (n = `viewport`);
    let r = n === `layoutViewport`,
        i = or(e),
        a = sr(e),
        o = i.visualViewport,
        s = a.clientWidth,
        c = a.clientHeight,
        l = 0,
        u = 0;
    if (o) {
        let e = !xr() || t === `fixed`;
        r
            ? e || ((l = -o.offsetLeft), (u = -o.offsetTop))
            : ((s = o.width),
              (c = o.height),
              e && ((l = o.offsetLeft), (u = o.offsetTop)));
    }
    if (Ir(a) <= 0) {
        let e = a.ownerDocument,
            t = e.body,
            n = getComputedStyle(t),
            r =
                (e.compatMode === `CSS1Compat` &&
                    parseFloat(n.marginLeft) + parseFloat(n.marginRight)) ||
                0,
            i = Math.abs(a.clientWidth - t.clientWidth - r),
            o =
                getComputedStyle(a).scrollbarGutter === `stable both-edges`
                    ? i / 2
                    : i;
        o <= Vr && (s -= o);
    }
    return { width: s, height: c, x: l, y: u };
}
function Ur(e, t) {
    let n = Fr(e, !0, t === `fixed`),
        r = n.top + e.clientTop,
        i = n.left + e.clientLeft,
        a = jr(e);
    return {
        width: e.clientWidth * a.x,
        height: e.clientHeight * a.y,
        x: i * a.x,
        y: r * a.y,
    };
}
function Wr(e, t, n) {
    let r;
    if (t === `viewport` || t === `layoutViewport`) r = Hr(e, n, t);
    else if (t === `document`) r = Br(sr(e));
    else if (lr(t)) r = Ur(t, n);
    else {
        let n = Nr(e);
        r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
    }
    return Hn(r);
}
function Gr(e, t) {
    let n = t.get(e);
    if (n) return n;
    let r = Dr(e, [], !1).filter((e) => lr(e) && ar(e) !== `body`),
        i = null,
        a = Cr(e).position === `fixed`,
        o = a ? Tr(e) : e;
    for (; lr(o) && !Sr(o);) {
        let e = Cr(o),
            t = yr(o),
            n = i ? i.position : a ? `fixed` : ``;
        (!t && (n === `fixed` || (n === `absolute` && e.position === `static`))
            ? (r = r.filter((e) => e !== o))
            : (i = e),
            (o = Tr(o)));
    }
    return (t.set(e, r), r);
}
function Kr(e) {
    let { element: t, boundary: n, rootBoundary: r, strategy: i } = e,
        a = [
            ...(n === `clippingAncestors`
                ? mr(t)
                    ? []
                    : Gr(t, this._c)
                : [].concat(n)),
            r,
        ],
        o = Wr(t, a[0], i),
        s = o.top,
        c = o.right,
        l = o.bottom,
        u = o.left;
    for (let e = 1; e < a.length; e++) {
        let n = Wr(t, a[e], i);
        ((s = _n(n.top, s)),
            (c = gn(n.right, c)),
            (l = gn(n.bottom, l)),
            (u = _n(n.left, u)));
    }
    return { width: c - u, height: l - s, x: u, y: s };
}
function qr(e) {
    let { width: t, height: n } = kr(e);
    return { width: t, height: n };
}
function Jr(e, t, n) {
    let r = ur(t),
        i = sr(t),
        a = n === `fixed`,
        o = Fr(e, !0, a, t),
        s = { scrollLeft: 0, scrollTop: 0 },
        c = bn(0);
    if ((r || !a) && ((ar(t) !== `body` || fr(i)) && (s = wr(t)), r)) {
        let e = Fr(t, !0, a, t);
        ((c.x = e.x + t.clientLeft), (c.y = e.y + t.clientTop));
    }
    !r && i && (c.x = Ir(i));
    let l = i && !r && !a ? Lr(i, s) : bn(0);
    return {
        x: o.left + s.scrollLeft - c.x - l.x,
        y: o.top + s.scrollTop - c.y - l.y,
        width: o.width,
        height: o.height,
    };
}
function Yr(e) {
    return Cr(e).position === `static`;
}
function Xr(e, t) {
    if (!ur(e) || Cr(e).position === `fixed`) return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return (sr(e) === n && (n = n.ownerDocument.body), n);
}
function Zr(e, t) {
    let n = or(e);
    if (mr(e)) return n;
    if (!ur(e)) {
        let t = Tr(e);
        for (; t && !Sr(t);) {
            if (lr(t) && !Yr(t)) return t;
            t = Tr(t);
        }
        return n;
    }
    let r = Xr(e, t);
    for (; r && pr(r) && Yr(r);) r = Xr(r, t);
    return r && Sr(r) && Yr(r) && !yr(r) ? n : r || br(e) || n;
}
var Qr = async function (e) {
    let t = this.getOffsetParent || Zr,
        n = this.getDimensions,
        r = await n(e.floating);
    return {
        reference: Jr(e.reference, await t(e.floating), e.strategy),
        floating: { x: 0, y: 0, width: r.width, height: r.height },
    };
};
function $r(e) {
    return Cr(e).direction === `rtl`;
}
var ei = {
    convertOffsetParentRelativeRectToViewportRelativeRect: Rr,
    getDocumentElement: sr,
    getClippingRect: Kr,
    getOffsetParent: Zr,
    getElementRects: Qr,
    getClientRects: zr,
    getDimensions: qr,
    getScale: jr,
    isElement: lr,
    isRTL: $r,
};
function ti(e, t) {
    return (
        e.x === t.x &&
        e.y === t.y &&
        e.width === t.width &&
        e.height === t.height
    );
}
function ni(e, t, n) {
    let r = null,
        i,
        a = sr(e);
    function o() {
        var e;
        (clearTimeout(i), (e = r) == null || e.disconnect(), (r = null));
    }
    function s(n, c) {
        (n === void 0 && (n = !1), c === void 0 && (c = 1), o());
        let l = e.getBoundingClientRect(),
            { left: u, top: d, width: f, height: p } = l;
        if ((n || t(), !f || !p)) return;
        let m = yn(d),
            h = yn(a.clientWidth - (u + f)),
            g = yn(a.clientHeight - (d + p)),
            _ = yn(u),
            v = {
                rootMargin: -m + `px ` + -h + `px ` + -g + `px ` + -_ + `px`,
                threshold: _n(0, gn(1, c)) || 1,
            },
            y = !0;
        function b(t) {
            let n = t[0].intersectionRatio;
            if (!ti(l, e.getBoundingClientRect())) return s();
            if (n !== c) {
                if (!y) return s();
                n
                    ? s(!1, n)
                    : (i = setTimeout(() => {
                          s(!1, 1e-7);
                      }, 1e3));
            }
            y = !1;
        }
        try {
            r = new IntersectionObserver(b, { ...v, root: a.ownerDocument });
        } catch {
            r = new IntersectionObserver(b, v);
        }
        r.observe(e);
    }
    let c = or(e),
        l = () => s(n);
    return (
        c.addEventListener(`resize`, l),
        s(!0),
        () => {
            (c.removeEventListener(`resize`, l), o());
        }
    );
}
function ri(e, t, n, r) {
    r === void 0 && (r = {});
    let {
            ancestorScroll: i = !0,
            ancestorResize: a = !0,
            elementResize: o = typeof ResizeObserver == `function`,
            layoutShift: s = typeof IntersectionObserver == `function`,
            animationFrame: c = !1,
        } = r,
        l = Ar(e),
        u = i || a ? [...(l ? Dr(l) : []), ...(t ? Dr(t) : [])] : [];
    u.forEach((e) => {
        (i && e.addEventListener(`scroll`, n),
            a && e.addEventListener(`resize`, n));
    });
    let d = l && s ? ni(l, n, a) : null,
        f = -1,
        p = null;
    o &&
        ((p = new ResizeObserver((e) => {
            let [r] = e;
            (r &&
                r.target === l &&
                p &&
                t &&
                (p.unobserve(t),
                cancelAnimationFrame(f),
                (f = requestAnimationFrame(() => {
                    var e;
                    (e = p) == null || e.observe(t);
                }))),
                n());
        })),
        l && !c && p.observe(l),
        t && p.observe(t));
    let m,
        h = c ? Fr(e) : null;
    c && g();
    function g() {
        let t = Fr(e);
        (h && !ti(h, t) && n(), (h = t), (m = requestAnimationFrame(g)));
    }
    return (
        n(),
        () => {
            var e;
            (u.forEach((e) => {
                (i && e.removeEventListener(`scroll`, n),
                    a && e.removeEventListener(`resize`, n));
            }),
                d?.(),
                (e = p) == null || e.disconnect(),
                (p = null),
                c && cancelAnimationFrame(m));
        }
    );
}
var ii = er,
    ai = tr,
    oi = Jn,
    si = rr,
    ci = Zn,
    li = qn,
    ui = nr,
    di = (e, t, n) => {
        let r = new Map(),
            i = n ?? {},
            a = { ...ei, ...i.platform, _c: r };
        return Kn(e, t, { ...i, platform: a });
    };
function fi(e) {
    return typeof e == `object` && !!e && `$el` in e;
}
function pi(e) {
    if (fi(e)) {
        let t = e.$el;
        return cr(t) && ar(t) === `#comment` ? null : t;
    }
    return e;
}
function mi(e) {
    return {
        name: `arrow`,
        options: e,
        fn(t) {
            let n = pi(A(e.element));
            return n == null
                ? {}
                : li({ element: n, padding: e.padding }).fn(t);
        },
    };
}
function hi(e) {
    return typeof window > `u`
        ? 1
        : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function gi(e, t) {
    let n = hi(e);
    return Math.round(t * n) / n;
}
function _i(e, t, n) {
    n === void 0 && (n = {});
    let r = n.whileElementsMounted,
        a = L(() => A(n.open) ?? !0),
        o = L(() => A(n.middleware)),
        s = L(() => A(n.placement) ?? `bottom`),
        c = L(() => A(n.strategy) ?? `absolute`),
        l = L(() => A(n.transform) ?? !0),
        u = L(() => pi(e.value)),
        f = L(() => pi(t.value)),
        p = M(0),
        m = M(0),
        h = M(c.value),
        g = M(s.value),
        v = _e({}),
        y = M(!1),
        b = L(() => {
            let e = { position: h.value, left: `0`, top: `0` };
            if (!f.value) return e;
            let t = gi(f.value, p.value),
                n = gi(f.value, m.value);
            return l.value
                ? {
                      ...e,
                      transform: `translate(` + t + `px, ` + n + `px)`,
                      ...(hi(f.value) >= 1.5 && { willChange: `transform` }),
                  }
                : { position: h.value, left: t + `px`, top: n + `px` };
        }),
        x;
    function S() {
        if (u.value == null || f.value == null) return;
        let e = a.value;
        di(u.value, f.value, {
            middleware: o.value,
            placement: s.value,
            strategy: c.value,
        }).then((t) => {
            ((p.value = t.x),
                (m.value = t.y),
                (h.value = t.strategy),
                (g.value = t.placement),
                (v.value = t.middlewareData),
                (y.value = e !== !1));
        });
    }
    function C() {
        typeof x == `function` && (x(), (x = void 0));
    }
    function w() {
        (C(),
            r === void 0
                ? S()
                : u.value != null &&
                  f.value != null &&
                  (x = r(u.value, f.value, S)));
    }
    function T() {
        a.value || (y.value = !1);
    }
    return (
        _([o, s, c, a], S, { flush: `sync` }),
        _([u, f], w, { flush: `sync` }),
        _(a, T, { flush: `sync` }),
        d() && i(C),
        {
            x: me(p),
            y: me(m),
            strategy: me(h),
            placement: me(g),
            middlewareData: me(v),
            isPositioned: me(y),
            floatingStyles: b,
            update: S,
        }
    );
}
var vi = [`dir`],
    yi = {
        side: `bottom`,
        sideOffset: 0,
        sideFlip: !0,
        align: `center`,
        alignOffset: 0,
        alignFlip: !0,
        arrowPadding: 0,
        hideShiftedArrow: !0,
        avoidCollisions: !0,
        collisionBoundary: () => [],
        collisionPadding: 0,
        sticky: `partial`,
        hideWhenDetached: !1,
        positionStrategy: `fixed`,
        updatePositionStrategy: `optimized`,
        prioritizePosition: !1,
    },
    [bi, xi] = e(`PopperContent`),
    Si = j({
        inheritAttrs: !1,
        __name: `PopperContent`,
        props: C(
            {
                memoDependencies: { type: Array, required: !1 },
                side: { type: null, required: !1 },
                sideOffset: { type: Number, required: !1 },
                sideFlip: { type: Boolean, required: !1 },
                align: { type: null, required: !1 },
                alignOffset: { type: Number, required: !1 },
                alignFlip: { type: Boolean, required: !1 },
                avoidCollisions: { type: Boolean, required: !1 },
                collisionBoundary: { type: null, required: !1 },
                collisionPadding: { type: [Number, Object], required: !1 },
                arrowPadding: { type: Number, required: !1 },
                hideShiftedArrow: { type: Boolean, required: !1 },
                sticky: { type: String, required: !1 },
                hideWhenDetached: { type: Boolean, required: !1 },
                positionStrategy: { type: String, required: !1 },
                updatePositionStrategy: { type: String, required: !1 },
                disableUpdateOnLayoutShift: { type: Boolean, required: !1 },
                prioritizePosition: { type: Boolean, required: !1 },
                reference: { type: null, required: !1 },
                dir: { type: String, required: !1 },
                asChild: { type: Boolean, required: !1 },
                as: { type: null, required: !1 },
            },
            { ...yi },
        ),
        emits: [`placed`],
        setup(e, { emit: t }) {
            let n = e,
                r = t,
                i = an(),
                { forwardRef: o, currentElement: c } = G(),
                l = Re(L(() => n.dir)),
                u = M(),
                d = M(),
                { width: p, height: m } = yt(d),
                h = L(
                    () => n.side + (n.align === `center` ? `` : `-${n.align}`),
                ),
                _ = L(() =>
                    typeof n.collisionPadding == `number`
                        ? n.collisionPadding
                        : {
                              top: 0,
                              right: 0,
                              bottom: 0,
                              left: 0,
                              ...n.collisionPadding,
                          },
                ),
                v = L(() =>
                    Array.isArray(n.collisionBoundary)
                        ? n.collisionBoundary
                        : [n.collisionBoundary],
                ),
                y = L(() => ({
                    padding: _.value,
                    boundary: v.value.filter(fn),
                    altBoundary: v.value.length > 0,
                })),
                b = L(() => ({ mainAxis: n.sideFlip, crossAxis: n.alignFlip })),
                x = L(() => [
                    ii({
                        mainAxis: n.sideOffset + m.value,
                        alignmentAxis: n.alignOffset,
                    }),
                    n.prioritizePosition &&
                        n.avoidCollisions &&
                        oi({ ...y.value, ...b.value }),
                    n.avoidCollisions &&
                        ai({
                            mainAxis: !0,
                            crossAxis: !!n.prioritizePosition,
                            limiter: n.sticky === `partial` ? ui() : void 0,
                            ...y.value,
                        }),
                    !n.prioritizePosition &&
                        n.avoidCollisions &&
                        oi({ ...y.value, ...b.value }),
                    si({
                        ...y.value,
                        apply: ({
                            elements: e,
                            rects: t,
                            availableWidth: n,
                            availableHeight: r,
                        }) => {
                            let { width: i, height: a } = t.reference,
                                o = e.floating.style;
                            (o.setProperty(
                                `--reka-popper-available-width`,
                                `${n}px`,
                            ),
                                o.setProperty(
                                    `--reka-popper-available-height`,
                                    `${r}px`,
                                ),
                                o.setProperty(
                                    `--reka-popper-anchor-width`,
                                    `${i}px`,
                                ),
                                o.setProperty(
                                    `--reka-popper-anchor-height`,
                                    `${a}px`,
                                ));
                        },
                    }),
                    d.value &&
                        mi({ element: d.value, padding: n.arrowPadding }),
                    pn({
                        arrowWidth: p.value,
                        arrowHeight: m.value,
                        dir: l.value,
                    }),
                    n.hideWhenDetached &&
                        ci({ strategy: `referenceHidden`, ...y.value }),
                ]),
                {
                    floatingStyles: S,
                    placement: C,
                    isPositioned: w,
                    middlewareData: T,
                    update: ee,
                } = _i(
                    L(() => n.reference ?? i.anchor.value),
                    u,
                    {
                        strategy: n.positionStrategy,
                        placement: h,
                        whileElementsMounted: (...e) =>
                            ri(...e, {
                                layoutShift: !n.disableUpdateOnLayoutShift,
                                animationFrame:
                                    n.updatePositionStrategy === `always`,
                            }),
                        middleware: x,
                    },
                ),
                te = L(() => mn(C.value)[0]),
                ne = L(() => mn(C.value)[1]);
            a(() => {
                w.value && r(`placed`);
            });
            let re = L(() => {
                    let e = T.value.arrow?.centerOffset !== 0;
                    return n.hideShiftedArrow && e;
                }),
                E = M(``);
            return (
                P(() => {
                    c.value &&
                        (E.value = window.getComputedStyle(c.value).zIndex);
                }),
                xi({
                    placedSide: te,
                    onArrowChange: (e) => (d.value = e),
                    arrowX: L(() => T.value.arrow?.x ?? 0),
                    arrowY: L(() => T.value.arrow?.y ?? 0),
                    shouldHideArrow: re,
                }),
                (e, t) => (
                    k(),
                    z(
                        `div`,
                        {
                            ref_key: `floatingRef`,
                            ref: u,
                            'data-reka-popper-content-wrapper': ``,
                            dir: F(l),
                            style: xe({
                                ...F(S),
                                transform: F(w)
                                    ? F(S).transform
                                    : `translate(0, -200%)`,
                                minWidth: `max-content`,
                                zIndex: E.value,
                                '--reka-popper-transform-origin': [
                                    F(T).transformOrigin?.x,
                                    F(T).transformOrigin?.y,
                                ].join(` `),
                                ...(F(T).hide?.referenceHidden && {
                                    visibility: `hidden`,
                                    pointerEvents: `none`,
                                }),
                            }),
                        },
                        [
                            n.memoDependencies
                                ? f(
                                      [
                                          n.asChild,
                                          n.as,
                                          te.value,
                                          ne.value,
                                          F(w),
                                          ...Object.values(e.$attrs),
                                          ...n.memoDependencies,
                                      ],
                                      () => (
                                          k(),
                                          N(
                                              F(V),
                                              s(
                                                  { key: 0, ref: F(o) },
                                                  e.$attrs,
                                                  {
                                                      'as-child': n.asChild,
                                                      as: n.as,
                                                      'data-side': te.value,
                                                      'data-align': ne.value,
                                                      style: {
                                                          animation: F(w)
                                                              ? void 0
                                                              : `none`,
                                                      },
                                                  },
                                              ),
                                              {
                                                  default: g(() => [
                                                      U(e.$slots, `default`),
                                                  ]),
                                                  _: 3,
                                              },
                                              16,
                                              [
                                                  `as-child`,
                                                  `as`,
                                                  `data-side`,
                                                  `data-align`,
                                                  `style`,
                                              ],
                                          )
                                      ),
                                      t,
                                      0,
                                  )
                                : (k(),
                                  N(
                                      F(V),
                                      s({ key: 1, ref: F(o) }, e.$attrs, {
                                          'as-child': n.asChild,
                                          as: n.as,
                                          'data-side': te.value,
                                          'data-align': ne.value,
                                          dir: F(l),
                                          style: {
                                              animation: F(w) ? void 0 : `none`,
                                          },
                                      }),
                                      {
                                          default: g(() => [
                                              U(e.$slots, `default`),
                                          ]),
                                          _: 3,
                                      },
                                      16,
                                      [
                                          `as-child`,
                                          `as`,
                                          `data-side`,
                                          `data-align`,
                                          `dir`,
                                          `style`,
                                      ],
                                  )),
                        ],
                        12,
                        vi,
                    )
                )
            );
        },
    }),
    Ci = { top: `bottom`, right: `left`, bottom: `top`, left: `right` },
    wi = j({
        inheritAttrs: !1,
        __name: `PopperArrow`,
        props: {
            width: { type: Number, required: !1 },
            height: { type: Number, required: !1 },
            rounded: { type: Boolean, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1, default: `svg` },
        },
        setup(e) {
            let { forwardRef: t } = G(),
                n = bi(),
                r = L(() => Ci[n.placedSide.value]);
            return (i, a) => (
                k(),
                z(
                    `span`,
                    {
                        ref: (e) => {
                            F(n).onArrowChange(e ?? void 0);
                        },
                        style: xe({
                            position: `absolute`,
                            left: F(n).arrowX?.value
                                ? `${F(n).arrowX?.value}px`
                                : void 0,
                            top: F(n).arrowY?.value
                                ? `${F(n).arrowY?.value}px`
                                : void 0,
                            [r.value]: 0,
                            transformOrigin: {
                                top: ``,
                                right: `0 0`,
                                bottom: `center 0`,
                                left: `100% 0`,
                            }[F(n).placedSide.value],
                            transform: {
                                top: `translateY(100%)`,
                                right: `translateY(50%) rotate(90deg) translateX(-50%)`,
                                bottom: `rotate(180deg)`,
                                left: `translateY(50%) rotate(-90deg) translateX(50%)`,
                            }[F(n).placedSide.value],
                            visibility: F(n).shouldHideArrow.value
                                ? `hidden`
                                : void 0,
                        }),
                    },
                    [
                        B(
                            dn,
                            s(i.$attrs, {
                                ref: F(t),
                                style: { display: `block` },
                                as: e.as,
                                'as-child': e.asChild,
                                rounded: e.rounded,
                                width: e.width,
                                height: e.height,
                            }),
                            {
                                default: g(() => [U(i.$slots, `default`)]),
                                _: 3,
                            },
                            16,
                            [`as`, `as-child`, `rounded`, `width`, `height`],
                        ),
                    ],
                    4,
                )
            );
        },
    }),
    [Ti, Ei] = e(`AvatarRoot`),
    Di = j({
        __name: `AvatarRoot`,
        props: {
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1, default: `span` },
        },
        setup(e) {
            return (
                G(),
                Ei({ imageLoadingStatus: M(`idle`) }),
                (t, n) => (
                    k(),
                    N(
                        F(V),
                        { 'as-child': e.asChild, as: e.as },
                        { default: g(() => [U(t.$slots, `default`)]), _: 3 },
                        8,
                        [`as-child`, `as`],
                    )
                )
            );
        },
    }),
    Oi = j({
        __name: `AvatarFallback`,
        props: {
            delayMs: { type: Number, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1, default: `span` },
        },
        setup(e) {
            let t = e,
                n = Ti();
            G();
            let r = M(t.delayMs === void 0);
            return (
                P((e) => {
                    if (t.delayMs && Me) {
                        let n = window.setTimeout(() => {
                            r.value = !0;
                        }, t.delayMs);
                        e(() => {
                            window.clearTimeout(n);
                        });
                    }
                }),
                (t, i) =>
                    r.value && F(n).imageLoadingStatus.value !== `loaded`
                        ? (k(),
                          N(
                              F(V),
                              { key: 0, 'as-child': e.asChild, as: e.as },
                              {
                                  default: g(() => [U(t.$slots, `default`)]),
                                  _: 3,
                              },
                              8,
                              [`as-child`, `as`],
                          ))
                        : D(`v-if`, !0)
            );
        },
    });
function ki(e, t) {
    return e
        ? t
            ? (e.src !== t && (e.src = t),
              e.complete && e.naturalWidth > 0 ? `loaded` : `loading`)
            : `error`
        : `idle`;
}
function Ai(e, { referrerPolicy: t, crossOrigin: n } = {}) {
    let r = M(!1),
        i = M(null),
        a = L(() =>
            r.value
                ? (!i.value && Me && (i.value = new window.Image()), i.value)
                : null,
        ),
        o = M(ki(a.value, e.value)),
        s = (e) => () => {
            r.value && (o.value = e);
        };
    return (
        p(() => {
            ((r.value = !0),
                P((r) => {
                    let i = a.value;
                    if (!i) return;
                    o.value = ki(i, e.value);
                    let c = s(`loaded`),
                        l = s(`error`);
                    (i.addEventListener(`load`, c),
                        i.addEventListener(`error`, l),
                        t?.value && (i.referrerPolicy = t.value),
                        typeof n?.value == `string` &&
                            (i.crossOrigin = n.value),
                        r(() => {
                            (i.removeEventListener(`load`, c),
                                i.removeEventListener(`error`, l));
                        }));
                }));
        }),
        x(() => {
            r.value = !1;
        }),
        o
    );
}
var ji = j({
        __name: `AvatarImage`,
        props: {
            src: { type: String, required: !0 },
            referrerPolicy: { type: null, required: !1 },
            crossOrigin: { type: null, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1, default: `img` },
        },
        emits: [`loadingStatusChange`],
        setup(e, { emit: t }) {
            let n = e,
                r = t,
                { src: i, referrerPolicy: a, crossOrigin: o } = ae(n);
            G();
            let s = Ti(),
                c = Ai(i, { referrerPolicy: a, crossOrigin: o });
            return (
                _(
                    c,
                    (e) => {
                        (r(`loadingStatusChange`, e),
                            e !== `idle` && (s.imageLoadingStatus.value = e));
                    },
                    { immediate: !0 },
                ),
                (t, n) =>
                    u(
                        (k(),
                        N(
                            F(V),
                            {
                                role: `img`,
                                'as-child': e.asChild,
                                as: e.as,
                                src: F(i),
                                referrerpolicy: F(a),
                                crossorigin: F(o),
                            },
                            {
                                default: g(() => [U(t.$slots, `default`)]),
                                _: 3,
                            },
                            8,
                            [
                                `as-child`,
                                `as`,
                                `src`,
                                `referrerpolicy`,
                                `crossorigin`,
                            ],
                        )),
                        [[S, F(c) === `loaded`]],
                    )
            );
        },
    }),
    [Mi, Ni] = e(`RovingFocusGroup`),
    Pi = j({
        __name: `RovingFocusGroup`,
        props: {
            orientation: { type: String, required: !1, default: void 0 },
            dir: { type: String, required: !1 },
            loop: { type: Boolean, required: !1, default: !1 },
            currentTabStopId: { type: [String, null], required: !1 },
            defaultCurrentTabStopId: { type: String, required: !1 },
            preventScrollOnEntryFocus: {
                type: Boolean,
                required: !1,
                default: !1,
            },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
        },
        emits: [`entryFocus`, `update:currentTabStopId`],
        setup(e, { expose: t, emit: n }) {
            let r = e,
                i = n,
                { loop: a, orientation: o, dir: s } = ae(r),
                c = Re(s),
                l = Ie(r, `currentTabStopId`, i, {
                    defaultValue: r.defaultCurrentTabStopId,
                    passive: r.currentTabStopId === void 0,
                }),
                u = M(!1),
                d = M(!1),
                f = M(0),
                { getItems: p, CollectionSlot: m } = Yt({ isProvider: !0 });
            function h(e) {
                let t = !d.value;
                if (
                    e.currentTarget &&
                    e.target === e.currentTarget &&
                    t &&
                    !u.value
                ) {
                    let t = new CustomEvent(Zt, Qt);
                    if (
                        (e.currentTarget.dispatchEvent(t),
                        i(`entryFocus`, t),
                        !t.defaultPrevented)
                    ) {
                        let e = p()
                            .map((e) => e.ref)
                            .filter((e) => e.dataset.disabled !== ``);
                        nn(
                            [
                                e.find(
                                    (e) => e.getAttribute(`data-active`) === ``,
                                ),
                                e.find(
                                    (e) =>
                                        e.getAttribute(`data-highlighted`) ===
                                        ``,
                                ),
                                e.find((e) => e.id === l.value),
                                ...e,
                            ].filter(Boolean),
                            r.preventScrollOnEntryFocus,
                        );
                    }
                }
                d.value = !1;
            }
            function _() {
                setTimeout(() => {
                    d.value = !1;
                }, 1);
            }
            return (
                t({ getItems: p }),
                Ni({
                    loop: a,
                    dir: c,
                    orientation: o,
                    currentTabStopId: l,
                    onItemFocus: (e) => {
                        l.value = e;
                    },
                    onItemShiftTab: () => {
                        u.value = !0;
                    },
                    onFocusableItemAdd: () => {
                        f.value++;
                    },
                    onFocusableItemRemove: () => {
                        f.value--;
                    },
                }),
                (t, n) => (
                    k(),
                    N(F(m), null, {
                        default: g(() => [
                            B(
                                F(V),
                                {
                                    tabindex: u.value || f.value === 0 ? -1 : 0,
                                    'data-orientation': F(o),
                                    as: e.as,
                                    'as-child': e.asChild,
                                    dir: F(c),
                                    style: { outline: `none` },
                                    onMousedown: (n[0] ||= (e) =>
                                        (d.value = !0)),
                                    onMouseup: _,
                                    onFocus: h,
                                    onBlur: (n[1] ||= (e) => (u.value = !1)),
                                },
                                {
                                    default: g(() => [U(t.$slots, `default`)]),
                                    _: 3,
                                },
                                8,
                                [
                                    `tabindex`,
                                    `data-orientation`,
                                    `as`,
                                    `as-child`,
                                    `dir`,
                                ],
                            ),
                        ]),
                        _: 3,
                    })
                )
            );
        },
    }),
    Fi = j({
        __name: `MenuAnchor`,
        props: {
            reference: { type: null, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
        },
        setup(e) {
            let t = e;
            return (e, n) => (
                k(),
                N(
                    F(cn),
                    W(T(t)),
                    { default: g(() => [U(e.$slots, `default`)]), _: 3 },
                    16,
                )
            );
        },
    });
function Ii() {
    let e = M(!1);
    return (
        p(() => {
            (Ae(
                `keydown`,
                () => {
                    e.value = !0;
                },
                { capture: !0, passive: !0 },
            ),
                Ae(
                    [`pointerdown`, `pointermove`],
                    () => {
                        e.value = !1;
                    },
                    { capture: !0, passive: !0 },
                ));
        }),
        e
    );
}
var Li = Le(Ii),
    [Ri, zi] = e([`MenuRoot`, `MenuSub`], `MenuContext`),
    [Bi, Vi] = e(`MenuRoot`),
    Hi = j({
        __name: `MenuRoot`,
        props: {
            open: { type: Boolean, required: !1, default: !1 },
            dir: { type: String, required: !1 },
            modal: { type: Boolean, required: !1, default: !0 },
        },
        emits: [`update:open`],
        setup(e, { emit: t }) {
            let n = e,
                r = t,
                { modal: i, dir: a } = ae(n),
                o = Re(a),
                s = Ie(n, `open`, r),
                c = M(),
                l = Li();
            return (
                zi({
                    open: s,
                    onOpenChange: (e) => {
                        s.value = e;
                    },
                    content: c,
                    onContentChange: (e) => {
                        c.value = e;
                    },
                }),
                Vi({
                    onClose: () => {
                        s.value = !1;
                    },
                    isUsingKeyboardRef: l,
                    dir: o,
                    modal: i,
                }),
                (e, t) => (
                    k(),
                    N(F(sn), null, {
                        default: g(() => [U(e.$slots, `default`)]),
                        _: 3,
                    })
                )
            );
        },
    }),
    [Ui, Wi] = e(`MenuContent`),
    Gi = j({
        __name: `MenuContentImpl`,
        props: C(
            {
                loop: { type: Boolean, required: !1 },
                disableOutsidePointerEvents: { type: Boolean, required: !1 },
                disableOutsideScroll: { type: Boolean, required: !1 },
                trapFocus: { type: Boolean, required: !1 },
                memoDependencies: { type: Array, required: !1 },
                side: { type: null, required: !1 },
                sideOffset: { type: Number, required: !1 },
                sideFlip: { type: Boolean, required: !1 },
                align: { type: null, required: !1 },
                alignOffset: { type: Number, required: !1 },
                alignFlip: { type: Boolean, required: !1 },
                avoidCollisions: { type: Boolean, required: !1 },
                collisionBoundary: { type: null, required: !1 },
                collisionPadding: { type: [Number, Object], required: !1 },
                arrowPadding: { type: Number, required: !1 },
                hideShiftedArrow: { type: Boolean, required: !1 },
                sticky: { type: String, required: !1 },
                hideWhenDetached: { type: Boolean, required: !1 },
                positionStrategy: { type: String, required: !1 },
                updatePositionStrategy: { type: String, required: !1 },
                disableUpdateOnLayoutShift: { type: Boolean, required: !1 },
                prioritizePosition: { type: Boolean, required: !1 },
                reference: { type: null, required: !1 },
                asChild: { type: Boolean, required: !1 },
                as: { type: null, required: !1 },
            },
            { ...yi },
        ),
        emits: [
            `escapeKeyDown`,
            `pointerDownOutside`,
            `focusOutside`,
            `interactOutside`,
            `entryFocus`,
            `openAutoFocus`,
            `closeAutoFocus`,
            `dismiss`,
        ],
        setup(e, { emit: n }) {
            let r = e,
                i = n,
                a = Ri(),
                o = Bi(),
                {
                    trapFocus: s,
                    disableOutsidePointerEvents: c,
                    loop: l,
                } = ae(r);
            (ut(), Ce(c.value));
            let u = M(``),
                d = M(0),
                f = M(0),
                p = M(null),
                m = M(`right`),
                h = M(0),
                v = M(null),
                y = M(),
                { forwardRef: b, currentElement: S } = G(),
                { handleTypeaheadSearch: C } = bt(),
                w = M();
            function T(e) {
                let n = st(e, w.value || t(), S.value, {
                    loop: l.value,
                    arrowKeyOptions: `vertical`,
                    dir: o?.dir.value,
                    focus: !1,
                    attributeName: `[data-reka-collection-item]:not([data-disabled])`,
                });
                n && ((w.value = n), n.scrollIntoView({ block: `nearest` }));
            }
            function ee() {
                w.value && w.value.click();
            }
            let te = M(),
                ne = M();
            (_(w, (e) => {
                if (
                    ne.value &&
                    (e === void 0 || e !== ne.value.trigger.value)
                ) {
                    if (e === void 0) return;
                    (ne.value.onOpenChange(!1), (ne.value = void 0));
                }
            }),
                _(S, (e) => {
                    a.onContentChange(e);
                }),
                x(() => {
                    window.clearTimeout(d.value);
                }));
            function re(e) {
                return m.value === p.value?.side && Lt(e, p.value?.area);
            }
            async function E(e) {
                (i(`openAutoFocus`, e),
                    !e.defaultPrevented &&
                        (e.preventDefault(),
                        S.value?.focus({ preventScroll: !0 })));
            }
            function D(e) {
                if (e.defaultPrevented) return;
                let n = e.target,
                    r =
                        n.closest(`[data-reka-menu-content]`) ===
                        e.currentTarget,
                    i = [`input`, `textarea`].includes(n.tagName.toLowerCase()),
                    a = e.ctrlKey || e.altKey || e.metaKey,
                    s = e.key.length === 1,
                    c = st(e, t(), S.value, {
                        loop: l.value,
                        arrowKeyOptions: `vertical`,
                        dir: o?.dir.value,
                        focus: !0,
                        attributeName: `[data-reka-collection-item]:not([data-disabled])`,
                    });
                if (c) return c?.focus();
                if (e.code === `Space`) return;
                let u = y.value?.getItems() ?? [];
                if (
                    (r &&
                        (e.key === `Tab` && o.modal.value && e.preventDefault(),
                        !a && s && !i && C(e.key, u)),
                    e.target !== S.value || !Mt.includes(e.key))
                )
                    return;
                e.preventDefault();
                let d = [...u.map((e) => e.ref)];
                (jt.includes(e.key) && d.reverse(), Ft(d));
            }
            function O(e) {
                e?.currentTarget?.contains?.(e.target) ||
                    (window.clearTimeout(d.value), (u.value = ``));
            }
            function ie(e) {
                if (!Rt(e)) return;
                let t = e.target,
                    n = h.value !== e.clientX;
                if (e?.currentTarget?.contains(t) && n) {
                    let t = e.clientX > h.value ? `right` : `left`;
                    ((m.value = t), (h.value = e.clientX));
                }
            }
            function oe(e) {
                Rt(e) && te.value && te.value.focus();
            }
            return (
                Wi({
                    onItemEnter: (e) => !!re(e),
                    onItemLeave: (e) =>
                        re(e)
                            ? !0
                            : ([`INPUT`, `TEXTAREA`].includes(
                                  t()?.tagName || ``,
                              ) || S.value?.focus(),
                              (v.value = null),
                              !1),
                    onTriggerLeave: (e) => !!re(e),
                    searchRef: u,
                    highlightedElement: w,
                    onKeydownNavigation: T,
                    onKeydownEnter: ee,
                    filterElement: te,
                    onFilterElementChange: (e) => {
                        te.value = e;
                    },
                    activeSubmenuContext: ne,
                    pointerGraceTimerRef: f,
                    onPointerGraceIntentChange: (e) => {
                        p.value = e;
                    },
                }),
                (t, n) => (
                    k(),
                    N(
                        F(Te),
                        {
                            'as-child': ``,
                            trapped: F(s),
                            onMountAutoFocus: E,
                            onUnmountAutoFocus: (n[7] ||= (e) =>
                                i(`closeAutoFocus`, e)),
                        },
                        {
                            default: g(() => [
                                B(
                                    F(De),
                                    {
                                        'as-child': ``,
                                        'disable-outside-pointer-events': F(c),
                                        onEscapeKeyDown: (n[2] ||= (e) =>
                                            i(`escapeKeyDown`, e)),
                                        onPointerDownOutside: (n[3] ||= (e) =>
                                            i(`pointerDownOutside`, e)),
                                        onFocusOutside: (n[4] ||= (e) =>
                                            i(`focusOutside`, e)),
                                        onInteractOutside: (n[5] ||= (e) =>
                                            i(`interactOutside`, e)),
                                        onDismiss: (n[6] ||= (e) =>
                                            i(`dismiss`)),
                                    },
                                    {
                                        default: g(() => [
                                            B(
                                                F(Pi),
                                                {
                                                    ref_key: `rovingFocusGroupRef`,
                                                    ref: y,
                                                    'current-tab-stop-id':
                                                        v.value,
                                                    'onUpdate:currentTabStopId':
                                                        (n[0] ||= (e) =>
                                                            (v.value = e)),
                                                    'as-child': ``,
                                                    orientation: `vertical`,
                                                    dir: F(o).dir.value,
                                                    loop: F(l),
                                                    onEntryFocus: (n[1] ||= (
                                                        e,
                                                    ) => {
                                                        (i(`entryFocus`, e),
                                                            F(o)
                                                                .isUsingKeyboardRef
                                                                .value ||
                                                                e.preventDefault());
                                                    }),
                                                },
                                                {
                                                    default: g(() => [
                                                        B(
                                                            F(Si),
                                                            {
                                                                ref: F(b),
                                                                role: `menu`,
                                                                as: e.as,
                                                                'as-child':
                                                                    e.asChild,
                                                                'aria-orientation': `vertical`,
                                                                'data-reka-menu-content': ``,
                                                                'data-state': F(
                                                                    Nt,
                                                                )(
                                                                    F(a).open
                                                                        .value,
                                                                ),
                                                                dir: F(o).dir
                                                                    .value,
                                                                side: e.side,
                                                                'side-offset':
                                                                    e.sideOffset,
                                                                align: e.align,
                                                                'align-offset':
                                                                    e.alignOffset,
                                                                'avoid-collisions':
                                                                    e.avoidCollisions,
                                                                'collision-boundary':
                                                                    e.collisionBoundary,
                                                                'collision-padding':
                                                                    e.collisionPadding,
                                                                'arrow-padding':
                                                                    e.arrowPadding,
                                                                'prioritize-position':
                                                                    e.prioritizePosition,
                                                                'position-strategy':
                                                                    e.positionStrategy,
                                                                'update-position-strategy':
                                                                    e.updatePositionStrategy,
                                                                sticky: e.sticky,
                                                                'hide-when-detached':
                                                                    e.hideWhenDetached,
                                                                reference:
                                                                    e.reference,
                                                                onKeydown: D,
                                                                onBlur: O,
                                                                onPointermove:
                                                                    ie,
                                                                onPointerenter:
                                                                    oe,
                                                            },
                                                            {
                                                                default: g(
                                                                    () => [
                                                                        U(
                                                                            t.$slots,
                                                                            `default`,
                                                                        ),
                                                                    ],
                                                                ),
                                                                _: 3,
                                                            },
                                                            8,
                                                            [
                                                                `as`,
                                                                `as-child`,
                                                                `data-state`,
                                                                `dir`,
                                                                `side`,
                                                                `side-offset`,
                                                                `align`,
                                                                `align-offset`,
                                                                `avoid-collisions`,
                                                                `collision-boundary`,
                                                                `collision-padding`,
                                                                `arrow-padding`,
                                                                `prioritize-position`,
                                                                `position-strategy`,
                                                                `update-position-strategy`,
                                                                `sticky`,
                                                                `hide-when-detached`,
                                                                `reference`,
                                                            ],
                                                        ),
                                                    ]),
                                                    _: 3,
                                                },
                                                8,
                                                [
                                                    `current-tab-stop-id`,
                                                    `dir`,
                                                    `loop`,
                                                ],
                                            ),
                                        ]),
                                        _: 3,
                                    },
                                    8,
                                    [`disable-outside-pointer-events`],
                                ),
                            ]),
                            _: 3,
                        },
                        8,
                        [`trapped`],
                    )
                )
            );
        },
    }),
    Ki = j({
        inheritAttrs: !1,
        __name: `MenuItemImpl`,
        props: {
            disabled: { type: Boolean, required: !1 },
            textValue: { type: String, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
        },
        setup(e) {
            let n = e,
                r = Ui(),
                { forwardRef: i, currentElement: a } = G(),
                { CollectionItem: o } = Yt(),
                c = M(!1),
                l = L(
                    () =>
                        c.value ||
                        (a.value != null &&
                            r.highlightedElement.value === a.value),
                );
            async function u(e) {
                if (!e.defaultPrevented && Rt(e)) {
                    if (n.disabled) r.onItemLeave(e);
                    else if (!r.onItemEnter(e)) {
                        let n = e.currentTarget;
                        ((r.highlightedElement.value = n),
                            [`INPUT`, `TEXTAREA`].includes(
                                t()?.tagName || ``,
                            ) || n.focus({ preventScroll: !0 }));
                    }
                }
            }
            async function d(e) {
                (await ee(),
                    !e.defaultPrevented &&
                        Rt(e) &&
                        r.highlightedElement.value === a.value &&
                        !r.onItemLeave(e) &&
                        r.highlightedElement.value === a.value &&
                        (r.highlightedElement.value = void 0));
            }
            return (t, n) => (
                k(),
                N(
                    F(o),
                    { value: { textValue: e.textValue } },
                    {
                        default: g(() => [
                            B(
                                F(V),
                                s(
                                    {
                                        ref: F(i),
                                        role: `menuitem`,
                                        tabindex: `-1`,
                                    },
                                    t.$attrs,
                                    {
                                        as: e.as,
                                        'as-child': e.asChild,
                                        'aria-disabled': e.disabled || void 0,
                                        'data-disabled': e.disabled
                                            ? ``
                                            : void 0,
                                        'data-highlighted': l.value
                                            ? ``
                                            : void 0,
                                        onPointermove: u,
                                        onPointerleave: d,
                                        onFocus: (n[0] ||= async (t) => {
                                            let n = t.currentTarget;
                                            (await ee(),
                                                !(
                                                    t.defaultPrevented ||
                                                    e.disabled
                                                ) &&
                                                    ((c.value = !0),
                                                    (F(
                                                        r,
                                                    ).highlightedElement.value =
                                                        n)));
                                        }),
                                        onBlur: (n[1] ||= async (e) => {
                                            (await ee(),
                                                !e.defaultPrevented &&
                                                    (c.value = !1));
                                        }),
                                    },
                                ),
                                {
                                    default: g(() => [U(t.$slots, `default`)]),
                                    _: 3,
                                },
                                16,
                                [
                                    `as`,
                                    `as-child`,
                                    `aria-disabled`,
                                    `data-disabled`,
                                    `data-highlighted`,
                                ],
                            ),
                        ]),
                        _: 3,
                    },
                    8,
                    [`value`],
                )
            );
        },
    }),
    qi = j({
        __name: `MenuItem`,
        props: {
            disabled: { type: Boolean, required: !1 },
            textValue: { type: String, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
        },
        emits: [`select`],
        setup(e, { emit: t }) {
            let n = e,
                r = t,
                { forwardRef: i, currentElement: a } = G(),
                o = Bi(),
                c = Ui(),
                l = M(!1);
            async function u() {
                let e = a.value;
                if (!n.disabled && e) {
                    let e = new CustomEvent(Ot, {
                        bubbles: !0,
                        cancelable: !0,
                    });
                    (r(`select`, e),
                        await ee(),
                        e.defaultPrevented ? (l.value = !1) : o.onClose());
                }
            }
            return (t, r) => (
                k(),
                N(
                    Ki,
                    s(n, {
                        ref: F(i),
                        onClick: u,
                        onPointerdown: (r[0] ||= () => {
                            l.value = !0;
                        }),
                        onPointerup: (r[1] ||= async (e) => {
                            (await ee(),
                                e.defaultPrevented ||
                                    l.value ||
                                    e.currentTarget?.click());
                        }),
                        onKeydown: (r[2] ||= async (t) => {
                            let n = F(c).searchRef.value !== ``;
                            e.disabled ||
                                (n && t.key === ` `) ||
                                (F(kt).includes(t.key) &&
                                    (t.currentTarget?.click(),
                                    t.preventDefault()));
                        }),
                    }),
                    { default: g(() => [U(t.$slots, `default`)]), _: 3 },
                    16,
                )
            );
        },
    }),
    Ji = j({
        __name: `MenuRootContentModal`,
        props: {
            loop: { type: Boolean, required: !1 },
            memoDependencies: { type: Array, required: !1 },
            side: { type: null, required: !1 },
            sideOffset: { type: Number, required: !1 },
            sideFlip: { type: Boolean, required: !1 },
            align: { type: null, required: !1 },
            alignOffset: { type: Number, required: !1 },
            alignFlip: { type: Boolean, required: !1 },
            avoidCollisions: { type: Boolean, required: !1 },
            collisionBoundary: { type: null, required: !1 },
            collisionPadding: { type: [Number, Object], required: !1 },
            arrowPadding: { type: Number, required: !1 },
            hideShiftedArrow: { type: Boolean, required: !1 },
            sticky: { type: String, required: !1 },
            hideWhenDetached: { type: Boolean, required: !1 },
            positionStrategy: { type: String, required: !1 },
            updatePositionStrategy: { type: String, required: !1 },
            disableUpdateOnLayoutShift: { type: Boolean, required: !1 },
            prioritizePosition: { type: Boolean, required: !1 },
            reference: { type: null, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
        },
        emits: [
            `escapeKeyDown`,
            `pointerDownOutside`,
            `focusOutside`,
            `interactOutside`,
            `entryFocus`,
            `openAutoFocus`,
            `closeAutoFocus`,
        ],
        setup(e, { emit: t }) {
            let n = e,
                r = t,
                i = Ve(n, r),
                a = Ri(),
                { forwardRef: c, currentElement: l } = G();
            return (
                we(l),
                (e, t) => (
                    k(),
                    N(
                        Gi,
                        s(F(i), {
                            ref: F(c),
                            'trap-focus': F(a).open.value,
                            'disable-outside-pointer-events': F(a).open.value,
                            'disable-outside-scroll': !0,
                            onDismiss: (t[0] ||= (e) => F(a).onOpenChange(!1)),
                            onFocusOutside: (t[1] ||= o(
                                (e) => r(`focusOutside`, e),
                                [`prevent`],
                            )),
                        }),
                        { default: g(() => [U(e.$slots, `default`)]), _: 3 },
                        16,
                        [`trap-focus`, `disable-outside-pointer-events`],
                    )
                )
            );
        },
    }),
    Yi = j({
        __name: `MenuRootContentNonModal`,
        props: {
            loop: { type: Boolean, required: !1 },
            memoDependencies: { type: Array, required: !1 },
            side: { type: null, required: !1 },
            sideOffset: { type: Number, required: !1 },
            sideFlip: { type: Boolean, required: !1 },
            align: { type: null, required: !1 },
            alignOffset: { type: Number, required: !1 },
            alignFlip: { type: Boolean, required: !1 },
            avoidCollisions: { type: Boolean, required: !1 },
            collisionBoundary: { type: null, required: !1 },
            collisionPadding: { type: [Number, Object], required: !1 },
            arrowPadding: { type: Number, required: !1 },
            hideShiftedArrow: { type: Boolean, required: !1 },
            sticky: { type: String, required: !1 },
            hideWhenDetached: { type: Boolean, required: !1 },
            positionStrategy: { type: String, required: !1 },
            updatePositionStrategy: { type: String, required: !1 },
            disableUpdateOnLayoutShift: { type: Boolean, required: !1 },
            prioritizePosition: { type: Boolean, required: !1 },
            reference: { type: null, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
        },
        emits: [
            `escapeKeyDown`,
            `pointerDownOutside`,
            `focusOutside`,
            `interactOutside`,
            `entryFocus`,
            `openAutoFocus`,
            `closeAutoFocus`,
        ],
        setup(e, { emit: t }) {
            let n = Ve(e, t),
                r = Ri();
            return (e, t) => (
                k(),
                N(
                    Gi,
                    s(F(n), {
                        'trap-focus': !1,
                        'disable-outside-pointer-events': !1,
                        'disable-outside-scroll': !1,
                        onDismiss: (t[0] ||= (e) => F(r).onOpenChange(!1)),
                    }),
                    { default: g(() => [U(e.$slots, `default`)]), _: 3 },
                    16,
                )
            );
        },
    }),
    Xi = j({
        __name: `MenuContent`,
        props: {
            forceMount: { type: Boolean, required: !1 },
            loop: { type: Boolean, required: !1 },
            memoDependencies: { type: Array, required: !1 },
            side: { type: null, required: !1 },
            sideOffset: { type: Number, required: !1 },
            sideFlip: { type: Boolean, required: !1 },
            align: { type: null, required: !1 },
            alignOffset: { type: Number, required: !1 },
            alignFlip: { type: Boolean, required: !1 },
            avoidCollisions: { type: Boolean, required: !1 },
            collisionBoundary: { type: null, required: !1 },
            collisionPadding: { type: [Number, Object], required: !1 },
            arrowPadding: { type: Number, required: !1 },
            hideShiftedArrow: { type: Boolean, required: !1 },
            sticky: { type: String, required: !1 },
            hideWhenDetached: { type: Boolean, required: !1 },
            positionStrategy: { type: String, required: !1 },
            updatePositionStrategy: { type: String, required: !1 },
            disableUpdateOnLayoutShift: { type: Boolean, required: !1 },
            prioritizePosition: { type: Boolean, required: !1 },
            reference: { type: null, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
        },
        emits: [
            `escapeKeyDown`,
            `pointerDownOutside`,
            `focusOutside`,
            `interactOutside`,
            `entryFocus`,
            `openAutoFocus`,
            `closeAutoFocus`,
        ],
        setup(e, { emit: t }) {
            let n = Ve(e, t),
                i = Ri(),
                a = Bi();
            return (t, o) => (
                k(),
                N(
                    F(r),
                    { present: e.forceMount || F(i).open.value },
                    {
                        default: g(() => [
                            F(a).modal.value
                                ? (k(),
                                  N(
                                      Ji,
                                      W(
                                          s(
                                              { key: 0 },
                                              { ...t.$attrs, ...F(n) },
                                          ),
                                      ),
                                      {
                                          default: g(() => [
                                              U(t.$slots, `default`),
                                          ]),
                                          _: 3,
                                      },
                                      16,
                                  ))
                                : (k(),
                                  N(
                                      Yi,
                                      W(
                                          s(
                                              { key: 1 },
                                              { ...t.$attrs, ...F(n) },
                                          ),
                                      ),
                                      {
                                          default: g(() => [
                                              U(t.$slots, `default`),
                                          ]),
                                          _: 3,
                                      },
                                      16,
                                  )),
                        ]),
                        _: 3,
                    },
                    8,
                    [`present`],
                )
            );
        },
    }),
    [Zi, Qi] = e(`MenuGroup`),
    $i = j({
        __name: `MenuGroup`,
        props: {
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
        },
        setup(e) {
            let t = e,
                r = n(void 0, `reka-menu-group`);
            return (
                Qi({ id: r }),
                (e, n) => (
                    k(),
                    N(
                        F(V),
                        s({ role: `group` }, t, { 'aria-labelledby': F(r) }),
                        { default: g(() => [U(e.$slots, `default`)]), _: 3 },
                        16,
                        [`aria-labelledby`],
                    )
                )
            );
        },
    }),
    ea = j({
        __name: `MenuLabel`,
        props: {
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1, default: `div` },
        },
        setup(e) {
            let t = e,
                n = Zi({ id: `` });
            return (e, r) => (
                k(),
                N(
                    F(V),
                    s(t, { id: F(n).id || void 0 }),
                    { default: g(() => [U(e.$slots, `default`)]), _: 3 },
                    16,
                    [`id`],
                )
            );
        },
    }),
    ta = j({
        __name: `MenuPortal`,
        props: {
            to: { type: null, required: !1 },
            disabled: { type: Boolean, required: !1 },
            defer: { type: Boolean, required: !1 },
            forceMount: { type: Boolean, required: !1 },
        },
        setup(e) {
            let t = e;
            return (e, n) => (
                k(),
                N(
                    F(Oe),
                    W(T(t)),
                    { default: g(() => [U(e.$slots, `default`)]), _: 3 },
                    16,
                )
            );
        },
    }),
    na = j({
        __name: `MenuSeparator`,
        props: {
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
        },
        setup(e) {
            let t = e;
            return (e, n) => (
                k(),
                N(
                    F(V),
                    s(t, {
                        role: `separator`,
                        'aria-orientation': `horizontal`,
                    }),
                    { default: g(() => [U(e.$slots, `default`)]), _: 3 },
                    16,
                )
            );
        },
    }),
    [ra, ia] = e(`DropdownMenuRoot`),
    aa = j({
        __name: `DropdownMenuRoot`,
        props: {
            defaultOpen: { type: Boolean, required: !1 },
            open: { type: Boolean, required: !1, default: void 0 },
            dir: { type: String, required: !1 },
            modal: { type: Boolean, required: !1, default: !0 },
        },
        emits: [`update:open`],
        setup(e, { emit: t }) {
            let n = e,
                r = t;
            G();
            let i = Ie(n, `open`, r, {
                    defaultValue: n.defaultOpen,
                    passive: n.open === void 0,
                }),
                a = M(),
                { modal: o, dir: s } = ae(n),
                c = Re(s);
            return (
                ia({
                    open: i,
                    onOpenChange: (e) => {
                        i.value = e;
                    },
                    onOpenToggle: () => {
                        i.value = !i.value;
                    },
                    triggerId: ``,
                    triggerElement: a,
                    contentId: ``,
                    modal: o,
                    dir: c,
                }),
                (e, t) => (
                    k(),
                    N(
                        F(Hi),
                        {
                            open: F(i),
                            'onUpdate:open': (t[0] ||= (e) =>
                                ne(i) ? (i.value = e) : null),
                            dir: F(c),
                            modal: F(o),
                        },
                        {
                            default: g(() => [
                                U(e.$slots, `default`, { open: F(i) }),
                            ]),
                            _: 3,
                        },
                        8,
                        [`open`, `dir`, `modal`],
                    )
                )
            );
        },
    }),
    oa = j({
        inheritAttrs: !1,
        __name: `DropdownMenuContent`,
        props: {
            forceMount: { type: Boolean, required: !1 },
            loop: { type: Boolean, required: !1 },
            memoDependencies: { type: Array, required: !1 },
            side: { type: null, required: !1 },
            sideOffset: { type: Number, required: !1 },
            sideFlip: { type: Boolean, required: !1 },
            align: { type: null, required: !1 },
            alignOffset: { type: Number, required: !1 },
            alignFlip: { type: Boolean, required: !1 },
            avoidCollisions: { type: Boolean, required: !1 },
            collisionBoundary: { type: null, required: !1 },
            collisionPadding: { type: [Number, Object], required: !1 },
            arrowPadding: { type: Number, required: !1 },
            hideShiftedArrow: { type: Boolean, required: !1 },
            sticky: { type: String, required: !1 },
            hideWhenDetached: { type: Boolean, required: !1 },
            positionStrategy: { type: String, required: !1 },
            updatePositionStrategy: { type: String, required: !1 },
            disableUpdateOnLayoutShift: { type: Boolean, required: !1 },
            prioritizePosition: { type: Boolean, required: !1 },
            reference: { type: null, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
        },
        emits: [
            `escapeKeyDown`,
            `pointerDownOutside`,
            `focusOutside`,
            `interactOutside`,
            `openAutoFocus`,
            `closeAutoFocus`,
        ],
        setup(e, { emit: t }) {
            let r = Ve(e, t);
            G();
            let i = ra(),
                a = M(!1);
            function o(e) {
                e.defaultPrevented ||
                    (a.value ||
                        setTimeout(() => {
                            i.triggerElement.value?.focus();
                        }, 0),
                    (a.value = !1),
                    e.preventDefault());
            }
            return (
                (i.contentId ||= n(void 0, `reka-dropdown-menu-content`)),
                (e, t) => (
                    k(),
                    N(
                        F(Xi),
                        s(
                            {
                                id: F(i).contentId,
                                'aria-labelledby': F(i)?.triggerId,
                                style: {
                                    '--reka-dropdown-menu-content-transform-origin': `var(--reka-popper-transform-origin)`,
                                    '--reka-dropdown-menu-content-available-width': `var(--reka-popper-available-width)`,
                                    '--reka-dropdown-menu-content-available-height': `var(--reka-popper-available-height)`,
                                    '--reka-dropdown-menu-trigger-width': `var(--reka-popper-anchor-width)`,
                                    '--reka-dropdown-menu-trigger-height': `var(--reka-popper-anchor-height)`,
                                },
                            },
                            { ...F(r), ...F(Pt)(e.$attrs) },
                            {
                                onCloseAutoFocus: o,
                                onInteractOutside: (t[0] ||= (e) => {
                                    if (e.defaultPrevented) return;
                                    let t = e.detail.originalEvent,
                                        n = t.button === 0 && t.ctrlKey === !0,
                                        r = t.button === 2 || n;
                                    ((!F(i).modal.value || r) && (a.value = !0),
                                        F(i).triggerElement.value?.contains(
                                            e.target,
                                        ) && e.preventDefault());
                                }),
                            },
                        ),
                        { default: g(() => [U(e.$slots, `default`)]), _: 3 },
                        16,
                        [`id`, `aria-labelledby`],
                    )
                )
            );
        },
    }),
    sa = j({
        __name: `DropdownMenuGroup`,
        props: {
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
        },
        setup(e) {
            let t = e;
            return (
                G(),
                (e, n) => (
                    k(),
                    N(
                        F($i),
                        W(T(t)),
                        { default: g(() => [U(e.$slots, `default`)]), _: 3 },
                        16,
                    )
                )
            );
        },
    }),
    ca = j({
        __name: `DropdownMenuItem`,
        props: {
            disabled: { type: Boolean, required: !1 },
            textValue: { type: String, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
        },
        emits: [`select`],
        setup(e, { emit: t }) {
            let n = e,
                r = Be(t);
            return (
                G(),
                (e, t) => (
                    k(),
                    N(
                        F(qi),
                        W(T({ ...n, ...F(r) })),
                        { default: g(() => [U(e.$slots, `default`)]), _: 3 },
                        16,
                    )
                )
            );
        },
    }),
    la = j({
        __name: `DropdownMenuLabel`,
        props: {
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
        },
        setup(e) {
            let t = e;
            return (
                G(),
                (e, n) => (
                    k(),
                    N(
                        F(ea),
                        W(T(t)),
                        { default: g(() => [U(e.$slots, `default`)]), _: 3 },
                        16,
                    )
                )
            );
        },
    }),
    ua = j({
        __name: `DropdownMenuPortal`,
        props: {
            to: { type: null, required: !1 },
            disabled: { type: Boolean, required: !1 },
            defer: { type: Boolean, required: !1 },
            forceMount: { type: Boolean, required: !1 },
        },
        setup(e) {
            let t = e;
            return (e, n) => (
                k(),
                N(
                    F(ta),
                    W(T(t)),
                    { default: g(() => [U(e.$slots, `default`)]), _: 3 },
                    16,
                )
            );
        },
    }),
    da = j({
        __name: `DropdownMenuSeparator`,
        props: {
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
        },
        setup(e) {
            let t = e;
            return (
                G(),
                (e, n) => (
                    k(),
                    N(
                        F(na),
                        W(T(t)),
                        { default: g(() => [U(e.$slots, `default`)]), _: 3 },
                        16,
                    )
                )
            );
        },
    }),
    fa = j({
        __name: `DropdownMenuTrigger`,
        props: {
            disabled: { type: Boolean, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1, default: `button` },
        },
        setup(e) {
            let t = e,
                r = ra(),
                { forwardRef: i, currentElement: a } = G();
            return (
                p(() => {
                    r.triggerElement = a;
                }),
                (r.triggerId ||= n(void 0, `reka-dropdown-menu-trigger`)),
                (n, a) => (
                    k(),
                    N(
                        F(Fi),
                        { 'as-child': `` },
                        {
                            default: g(() => [
                                B(
                                    F(V),
                                    {
                                        id: F(r).triggerId,
                                        ref: F(i),
                                        type:
                                            e.as === `button`
                                                ? `button`
                                                : void 0,
                                        'as-child': t.asChild,
                                        as: e.as,
                                        'aria-haspopup': `menu`,
                                        'aria-expanded': F(r).open.value,
                                        'aria-controls': F(r).open.value
                                            ? F(r).contentId
                                            : void 0,
                                        'data-disabled': e.disabled
                                            ? ``
                                            : void 0,
                                        disabled: e.disabled,
                                        'data-state': F(r).open.value
                                            ? `open`
                                            : `closed`,
                                        onClick: (a[0] ||= async (t) => {
                                            t.defaultPrevented ||
                                                (!e.disabled &&
                                                    t.button === 0 &&
                                                    t.ctrlKey === !1 &&
                                                    (F(r)?.onOpenToggle(),
                                                    await ee(),
                                                    F(r).open.value &&
                                                        t.preventDefault()));
                                        }),
                                        onKeydown: (a[1] ||= Se(
                                            (t) => {
                                                e.disabled ||
                                                    t.defaultPrevented ||
                                                    ([`Enter`, ` `].includes(
                                                        t.key,
                                                    ) && F(r).onOpenToggle(),
                                                    t.key === `ArrowDown` &&
                                                        F(r).onOpenChange(!0),
                                                    [
                                                        `Enter`,
                                                        ` `,
                                                        `ArrowDown`,
                                                    ].includes(t.key) &&
                                                        t.preventDefault());
                                            },
                                            [`enter`, `space`, `arrow-down`],
                                        )),
                                    },
                                    {
                                        default: g(() => [
                                            U(n.$slots, `default`),
                                        ]),
                                        _: 3,
                                    },
                                    8,
                                    [
                                        `id`,
                                        `type`,
                                        `as-child`,
                                        `as`,
                                        `aria-expanded`,
                                        `aria-controls`,
                                        `data-disabled`,
                                        `disabled`,
                                        `data-state`,
                                    ],
                                ),
                            ]),
                            _: 3,
                        },
                    )
                )
            );
        },
    }),
    pa = j({
        __name: `BaseSeparator`,
        props: {
            orientation: { type: String, required: !1, default: `horizontal` },
            decorative: { type: Boolean, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
        },
        setup(e) {
            let t = e,
                n = [`horizontal`, `vertical`];
            function r(e) {
                return n.includes(e);
            }
            let i = L(() => (r(t.orientation) ? t.orientation : `horizontal`)),
                a = L(() => (i.value === `vertical` ? t.orientation : void 0)),
                o = L(() =>
                    t.decorative
                        ? { role: `none` }
                        : { 'aria-orientation': a.value, role: `separator` },
                );
            return (t, n) => (
                k(),
                N(
                    F(V),
                    s(
                        {
                            as: e.as,
                            'as-child': e.asChild,
                            'data-orientation': i.value,
                        },
                        o.value,
                    ),
                    { default: g(() => [U(t.$slots, `default`)]), _: 3 },
                    16,
                    [`as`, `as-child`, `data-orientation`],
                )
            );
        },
    }),
    ma = j({
        __name: `Separator`,
        props: {
            orientation: { type: String, required: !1, default: `horizontal` },
            decorative: { type: Boolean, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
        },
        setup(e) {
            let t = e;
            return (e, n) => (
                k(),
                N(
                    pa,
                    W(T(t)),
                    { default: g(() => [U(e.$slots, `default`)]), _: 3 },
                    16,
                )
            );
        },
    }),
    ha = j({
        __name: `TooltipArrow`,
        props: {
            width: { type: Number, required: !1, default: 10 },
            height: { type: Number, required: !1, default: 5 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1, default: `svg` },
        },
        setup(e) {
            let t = e;
            return (
                G(),
                (e, n) => (
                    k(),
                    N(
                        F(wi),
                        W(T(t)),
                        { default: g(() => [U(e.$slots, `default`)]), _: 3 },
                        16,
                    )
                )
            );
        },
    }),
    [ga, _a] = e(`TooltipProvider`),
    va = j({
        inheritAttrs: !1,
        __name: `TooltipProvider`,
        props: {
            delayDuration: { type: Number, required: !1, default: 700 },
            skipDelayDuration: { type: Number, required: !1, default: 300 },
            disableHoverableContent: {
                type: Boolean,
                required: !1,
                default: !1,
            },
            disableClosingTrigger: { type: Boolean, required: !1 },
            disabled: { type: Boolean, required: !1 },
            ignoreNonKeyboardFocus: {
                type: Boolean,
                required: !1,
                default: !1,
            },
            content: { type: Object, required: !1 },
        },
        setup(e) {
            let {
                delayDuration: t,
                skipDelayDuration: n,
                disableHoverableContent: r,
                disableClosingTrigger: i,
                ignoreNonKeyboardFocus: a,
                disabled: o,
                content: s,
            } = ae(e);
            G();
            let c = M(!0),
                l = M(!1),
                { start: u, stop: d } = ke(
                    () => {
                        c.value = !0;
                    },
                    n,
                    { immediate: !1 },
                );
            return (
                _a({
                    isOpenDelayed: c,
                    delayDuration: t,
                    onOpen() {
                        (d(), (c.value = !1));
                    },
                    onClose() {
                        u();
                    },
                    isPointerInTransitRef: l,
                    disableHoverableContent: r,
                    disableClosingTrigger: i,
                    disabled: o,
                    ignoreNonKeyboardFocus: a,
                    content: s,
                }),
                (e, t) => U(e.$slots, `default`)
            );
        },
    }),
    ya = `tooltip.open`,
    [ba, xa] = e(`TooltipRoot`),
    Sa = j({
        __name: `TooltipRoot`,
        props: {
            defaultOpen: { type: Boolean, required: !1, default: !1 },
            open: { type: Boolean, required: !1, default: void 0 },
            delayDuration: { type: Number, required: !1, default: void 0 },
            disableHoverableContent: {
                type: Boolean,
                required: !1,
                default: void 0,
            },
            disableClosingTrigger: {
                type: Boolean,
                required: !1,
                default: void 0,
            },
            disabled: { type: Boolean, required: !1, default: void 0 },
            ignoreNonKeyboardFocus: {
                type: Boolean,
                required: !1,
                default: void 0,
            },
        },
        emits: [`update:open`],
        setup(e, { emit: t }) {
            let n = e,
                r = t;
            G();
            let i = ga(),
                a = L(
                    () =>
                        n.disableHoverableContent ??
                        i.disableHoverableContent.value,
                ),
                o = L(
                    () =>
                        n.disableClosingTrigger ??
                        i.disableClosingTrigger.value,
                ),
                s = L(() => n.disabled ?? i.disabled.value),
                c = L(() => n.delayDuration ?? i.delayDuration.value),
                l = L(
                    () =>
                        n.ignoreNonKeyboardFocus ??
                        i.ignoreNonKeyboardFocus.value,
                ),
                u = Ie(n, `open`, r, {
                    defaultValue: n.defaultOpen,
                    passive: n.open === void 0,
                });
            _(u, (e) => {
                i.onClose &&
                    (e
                        ? (i.onOpen(),
                          document.dispatchEvent(new CustomEvent(ya)))
                        : i.onClose());
            });
            let d = M(!1),
                f = M(),
                p = L(() =>
                    u.value
                        ? d.value
                            ? `delayed-open`
                            : `instant-open`
                        : `closed`,
                ),
                { start: m, stop: h } = ke(
                    () => {
                        ((d.value = !0), (u.value = !0));
                    },
                    c,
                    { immediate: !1 },
                );
            function v() {
                (h(), (d.value = !1), (u.value = !0));
            }
            function y() {
                (h(), (u.value = !1));
            }
            function b() {
                m();
            }
            return (
                xa({
                    contentId: ``,
                    open: u,
                    stateAttribute: p,
                    trigger: f,
                    onTriggerChange(e) {
                        f.value = e;
                    },
                    onTriggerEnter() {
                        i.isOpenDelayed.value ? b() : v();
                    },
                    onTriggerLeave() {
                        a.value ? y() : h();
                    },
                    onOpen: v,
                    onClose: y,
                    disableHoverableContent: a,
                    disableClosingTrigger: o,
                    disabled: s,
                    ignoreNonKeyboardFocus: l,
                }),
                (e, t) => (
                    k(),
                    N(F(sn), null, {
                        default: g(() => [
                            U(e.$slots, `default`, { open: F(u) }),
                        ]),
                        _: 3,
                    })
                )
            );
        },
    }),
    Ca = j({
        __name: `TooltipContentImpl`,
        props: {
            ariaLabel: { type: String, required: !1 },
            asChild: { type: Boolean, required: !1, default: void 0 },
            as: { type: null, required: !1 },
            side: { type: null, required: !1 },
            sideOffset: { type: Number, required: !1 },
            align: { type: null, required: !1 },
            alignOffset: { type: Number, required: !1 },
            avoidCollisions: { type: Boolean, required: !1, default: void 0 },
            collisionBoundary: { type: null, required: !1 },
            collisionPadding: { type: [Number, Object], required: !1 },
            arrowPadding: { type: Number, required: !1 },
            sticky: { type: String, required: !1 },
            hideWhenDetached: { type: Boolean, required: !1, default: void 0 },
            positionStrategy: { type: String, required: !1 },
            updatePositionStrategy: { type: String, required: !1 },
        },
        emits: [`escapeKeyDown`, `pointerDownOutside`],
        setup(e, { emit: t }) {
            let n = e,
                r = t,
                i = ba(),
                a = ga(),
                { forwardRef: c, currentElement: l } = G(),
                u = L(() => n.ariaLabel || l.value?.textContent),
                d = L(() => {
                    let { ariaLabel: e, ...t } = n;
                    return Ee(t, a.content.value ?? {}, {
                        side: `top`,
                        sideOffset: 0,
                        align: `center`,
                        avoidCollisions: !0,
                        collisionBoundary: [],
                        collisionPadding: 0,
                        arrowPadding: 0,
                        sticky: `partial`,
                        hideWhenDetached: !1,
                    });
                });
            return (
                p(() => {
                    (Ae(
                        window,
                        `scroll`,
                        (e) => {
                            e.target?.contains(i.trigger.value) && i.onClose();
                        },
                        { capture: !0 },
                    ),
                        Ae(document, ya, i.onClose));
                }),
                (e, t) => (
                    k(),
                    N(
                        F(De),
                        {
                            'as-child': ``,
                            'disable-outside-pointer-events': !1,
                            onEscapeKeyDown: (t[0] ||= (e) =>
                                r(`escapeKeyDown`, e)),
                            onPointerDownOutside: (t[1] ||= (e) => {
                                (F(i).disableClosingTrigger.value &&
                                    F(i).trigger.value?.contains(e.target) &&
                                    e.preventDefault(),
                                    r(`pointerDownOutside`, e));
                            }),
                            onFocusOutside: (t[2] ||= o(() => {}, [`prevent`])),
                            onDismiss: (t[3] ||= (e) => F(i).onClose()),
                        },
                        {
                            default: g(() => [
                                B(
                                    F(Si),
                                    s(
                                        {
                                            ref: F(c),
                                            'data-state':
                                                F(i).stateAttribute.value,
                                        },
                                        { ...e.$attrs, ...d.value },
                                        {
                                            style: {
                                                '--reka-tooltip-content-transform-origin': `var(--reka-popper-transform-origin)`,
                                                '--reka-tooltip-content-available-width': `var(--reka-popper-available-width)`,
                                                '--reka-tooltip-content-available-height': `var(--reka-popper-available-height)`,
                                                '--reka-tooltip-trigger-width': `var(--reka-popper-anchor-width)`,
                                                '--reka-tooltip-trigger-height': `var(--reka-popper-anchor-height)`,
                                            },
                                        },
                                    ),
                                    {
                                        default: g(() => [
                                            U(e.$slots, `default`),
                                            B(
                                                F(Xt),
                                                {
                                                    id: F(i).contentId,
                                                    role: `tooltip`,
                                                },
                                                {
                                                    default: g(() => [
                                                        se(O(u.value), 1),
                                                    ]),
                                                    _: 1,
                                                },
                                                8,
                                                [`id`],
                                            ),
                                        ]),
                                        _: 3,
                                    },
                                    16,
                                    [`data-state`],
                                ),
                            ]),
                            _: 3,
                        },
                    )
                )
            );
        },
    }),
    wa = j({
        __name: `TooltipContentHoverable`,
        props: {
            ariaLabel: { type: String, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
            side: { type: null, required: !1 },
            sideOffset: { type: Number, required: !1 },
            align: { type: null, required: !1 },
            alignOffset: { type: Number, required: !1 },
            avoidCollisions: { type: Boolean, required: !1 },
            collisionBoundary: { type: null, required: !1 },
            collisionPadding: { type: [Number, Object], required: !1 },
            arrowPadding: { type: Number, required: !1 },
            sticky: { type: String, required: !1 },
            hideWhenDetached: { type: Boolean, required: !1 },
            positionStrategy: { type: String, required: !1 },
            updatePositionStrategy: { type: String, required: !1 },
        },
        setup(e) {
            let t = ze(e),
                { forwardRef: n, currentElement: r } = G(),
                { trigger: i, onClose: a } = ba(),
                o = ga(),
                { isPointerInTransit: c, onPointerExit: l } = ft(i, r);
            return (
                (o.isPointerInTransitRef = c),
                l(() => {
                    a();
                }),
                Ae(r, `pointermove`, (e) => {
                    let t = r.value;
                    t &&
                        e.pointerType !== `touch` &&
                        t.ownerDocument
                            .elementsFromPoint?.(e.clientX, e.clientY)
                            .some((e) => {
                                if (t.contains(e)) return !1;
                                let n = e.closest(`[data-grace-area-trigger]`);
                                return !!n && n !== i.value;
                            }) &&
                        a();
                }),
                (e, r) => (
                    k(),
                    N(
                        Ca,
                        s({ ref: F(n) }, F(t)),
                        { default: g(() => [U(e.$slots, `default`)]), _: 3 },
                        16,
                    )
                )
            );
        },
    }),
    Ta = j({
        __name: `TooltipContent`,
        props: {
            forceMount: { type: Boolean, required: !1 },
            ariaLabel: { type: String, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
            side: { type: null, required: !1 },
            sideOffset: { type: Number, required: !1 },
            align: { type: null, required: !1 },
            alignOffset: { type: Number, required: !1 },
            avoidCollisions: { type: Boolean, required: !1 },
            collisionBoundary: { type: null, required: !1 },
            collisionPadding: { type: [Number, Object], required: !1 },
            arrowPadding: { type: Number, required: !1 },
            sticky: { type: String, required: !1 },
            hideWhenDetached: { type: Boolean, required: !1 },
            positionStrategy: { type: String, required: !1 },
            updatePositionStrategy: { type: String, required: !1 },
        },
        emits: [`escapeKeyDown`, `pointerDownOutside`],
        setup(e, { emit: t }) {
            let n = e,
                i = t,
                a = ba(),
                o = Ve(n, i),
                { forwardRef: c } = G();
            return (t, n) => (
                k(),
                N(
                    F(r),
                    { present: e.forceMount || F(a).open.value },
                    {
                        default: g(() => [
                            (k(),
                            N(
                                ye(
                                    F(a).disableHoverableContent.value
                                        ? Ca
                                        : wa,
                                ),
                                s({ ref: F(c) }, F(o)),
                                {
                                    default: g(() => [U(t.$slots, `default`)]),
                                    _: 3,
                                },
                                16,
                            )),
                        ]),
                        _: 3,
                    },
                    8,
                    [`present`],
                )
            );
        },
    }),
    Ea = j({
        __name: `TooltipPortal`,
        props: {
            to: { type: null, required: !1 },
            disabled: { type: Boolean, required: !1 },
            defer: { type: Boolean, required: !1 },
            forceMount: { type: Boolean, required: !1 },
        },
        setup(e) {
            let t = e;
            return (e, n) => (
                k(),
                N(
                    F(Oe),
                    W(T(t)),
                    { default: g(() => [U(e.$slots, `default`)]), _: 3 },
                    16,
                )
            );
        },
    }),
    Da = j({
        __name: `TooltipTrigger`,
        props: {
            reference: { type: null, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1, default: `button` },
        },
        setup(e) {
            let t = e,
                r = ba(),
                i = ga();
            r.contentId ||= n(void 0, `reka-tooltip-content`);
            let { forwardRef: a, currentElement: o } = G(),
                c = M(!1),
                l = M(!1),
                u = L(() =>
                    r.disabled.value
                        ? {}
                        : {
                              click: y,
                              focus: h,
                              pointermove: p,
                              pointerleave: m,
                              pointerdown: f,
                              blur: v,
                          },
                );
            _(
                o,
                (e) => {
                    r.onTriggerChange(e);
                },
                { immediate: !0 },
            );
            function d() {
                setTimeout(() => {
                    c.value = !1;
                }, 1);
            }
            function f() {
                (r.open && !r.disableClosingTrigger.value && r.onClose(),
                    (c.value = !0),
                    document.addEventListener(`pointerup`, d, { once: !0 }));
            }
            function p(e) {
                e.pointerType !== `touch` &&
                    !l.value &&
                    !i.isPointerInTransitRef.value &&
                    (r.onTriggerEnter(), (l.value = !0));
            }
            function m() {
                (r.onTriggerLeave(), (l.value = !1));
            }
            function h(e) {
                c.value ||
                    ((!r.ignoreNonKeyboardFocus.value ||
                        e.target.matches?.(`:focus-visible`)) &&
                        r.onOpen());
            }
            function v() {
                r.onClose();
            }
            function y() {
                r.disableClosingTrigger.value || r.onClose();
            }
            return (n, i) => (
                k(),
                N(
                    F(cn),
                    { 'as-child': ``, reference: e.reference ?? F(o) },
                    {
                        default: g(() => [
                            B(
                                F(V),
                                s(
                                    {
                                        ref: F(a),
                                        'aria-describedby': F(r).open.value
                                            ? F(r).contentId
                                            : void 0,
                                        'data-state': F(r).stateAttribute.value,
                                        as: e.as,
                                        'as-child': t.asChild,
                                        'data-grace-area-trigger': ``,
                                    },
                                    re(u.value),
                                ),
                                {
                                    default: g(() => [U(n.$slots, `default`)]),
                                    _: 3,
                                },
                                16,
                                [
                                    `aria-describedby`,
                                    `data-state`,
                                    `as`,
                                    `as-child`,
                                ],
                            ),
                        ]),
                        _: 3,
                    },
                    8,
                    [`reference`],
                )
            );
        },
    }),
    Oa = j({
        __name: `Sheet`,
        props: {
            open: { type: Boolean },
            defaultOpen: { type: Boolean },
            modal: { type: Boolean },
            unmountOnHide: { type: Boolean },
        },
        emits: [`update:open`],
        setup(e, { emit: t }) {
            let n = Ve(e, t);
            return (e, t) => (
                k(),
                N(
                    F(Et),
                    s({ 'data-slot': `sheet` }, F(n)),
                    {
                        default: g((t) => [U(e.$slots, `default`, W(T(t)))]),
                        _: 3,
                    },
                    16,
                )
            );
        },
    }),
    ka = K({
        name: `chevron-right`,
        size: 24,
        node: [[`path`, { d: `m9 18 6-6-6-6`, key: `mthhwq` }]],
    }),
    Aa = K({
        name: `chevrons-up-down`,
        size: 24,
        node: [
            [`path`, { d: `m7 15 5 5 5-5`, key: `1hf1tw` }],
            [`path`, { d: `m7 9 5-5 5 5`, key: `sgt6xg` }],
        ],
    }),
    ja = K({
        name: `circle-check`,
        size: 24,
        node: [
            [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
            [`path`, { d: `m16 9-5.5 5.5L8 12`, key: `xofnsj` }],
        ],
        aliases: [`check-circle-2`],
    }),
    Ma = K({
        name: `credit-card`,
        size: 24,
        node: [
            [
                `rect`,
                {
                    width: `20`,
                    height: `14`,
                    x: `2`,
                    y: `5`,
                    rx: `2`,
                    key: `ynyp8z`,
                },
            ],
            [`line`, { x1: `2`, x2: `22`, y1: `10`, y2: `10`, key: `1b3vmo` }],
            [`path`, { d: `M6 14h2`, key: `mk7k0u` }],
        ],
    }),
    Na = K({
        name: `info`,
        size: 24,
        node: [
            [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
            [`path`, { d: `M12 16v-4`, key: `1dtifu` }],
            [`path`, { d: `M12 8h.01`, key: `e9boi3` }],
        ],
    }),
    Pa = K({
        name: `layout-grid`,
        size: 24,
        node: [
            [
                `rect`,
                {
                    width: `7`,
                    height: `7`,
                    x: `3`,
                    y: `3`,
                    rx: `1`,
                    key: `1g98yp`,
                },
            ],
            [
                `rect`,
                {
                    width: `7`,
                    height: `7`,
                    x: `14`,
                    y: `3`,
                    rx: `1`,
                    key: `6d4xhi`,
                },
            ],
            [
                `rect`,
                {
                    width: `7`,
                    height: `7`,
                    x: `14`,
                    y: `14`,
                    rx: `1`,
                    key: `nxv5o0`,
                },
            ],
            [
                `rect`,
                {
                    width: `7`,
                    height: `7`,
                    x: `3`,
                    y: `14`,
                    rx: `1`,
                    key: `1bb6yr`,
                },
            ],
        ],
    }),
    Fa = K({
        name: `loader-circle`,
        size: 24,
        node: [[`path`, { d: `M21 12a9 9 0 1 1-6.219-8.56`, key: `13zald` }]],
        aliases: [`loader-2`],
    }),
    Ia = K({
        name: `list`,
        size: 24,
        node: [
            [`path`, { d: `M3 5h.01`, key: `18ugdj` }],
            [`path`, { d: `M3 12h.01`, key: `nlz23k` }],
            [`path`, { d: `M3 19h.01`, key: `noohij` }],
            [`path`, { d: `M8 5h13`, key: `1pao27` }],
            [`path`, { d: `M8 12h13`, key: `1za7za` }],
            [`path`, { d: `M8 19h13`, key: `m83p4d` }],
        ],
    }),
    La = K({
        name: `log-out`,
        size: 24,
        node: [
            [`path`, { d: `m16 17 5-5-5-5`, key: `1bji2h` }],
            [`path`, { d: `M21 12H9`, key: `dn1m92` }],
            [
                `path`,
                { d: `M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`, key: `1uf3rs` },
            ],
        ],
    }),
    Ra = K({
        name: `octagon-x`,
        size: 24,
        node: [
            [`path`, { d: `m15 9-6 6`, key: `1uzhvr` }],
            [
                `path`,
                {
                    d: `M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z`,
                    key: `2d38gg`,
                },
            ],
            [`path`, { d: `m9 9 6 6`, key: `z0biqf` }],
        ],
        aliases: [`x-octagon`],
    }),
    za = K({
        name: `panel-left-close`,
        size: 24,
        node: [
            [
                `rect`,
                {
                    width: `18`,
                    height: `18`,
                    x: `3`,
                    y: `3`,
                    rx: `2`,
                    key: `afitv7`,
                },
            ],
            [`path`, { d: `M9 3v18`, key: `fh3hqa` }],
            [`path`, { d: `m16 15-3-3 3-3`, key: `14y99z` }],
        ],
        aliases: [`sidebar-close`],
    }),
    Ba = K({
        name: `panel-left-open`,
        size: 24,
        node: [
            [
                `rect`,
                {
                    width: `18`,
                    height: `18`,
                    x: `3`,
                    y: `3`,
                    rx: `2`,
                    key: `afitv7`,
                },
            ],
            [`path`, { d: `M9 3v18`, key: `fh3hqa` }],
            [`path`, { d: `m14 9 3 3-3 3`, key: `8010ee` }],
        ],
        aliases: [`sidebar-open`],
    }),
    Va = K({
        name: `settings`,
        size: 24,
        node: [
            [
                `path`,
                {
                    d: `M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`,
                    key: `1i5ecw`,
                },
            ],
            [`circle`, { cx: `12`, cy: `12`, r: `3`, key: `1v7zrd` }],
        ],
    }),
    Ha = K({
        name: `triangle-alert`,
        size: 24,
        node: [
            [
                `path`,
                {
                    d: `m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,
                    key: `wmoenq`,
                },
            ],
            [`path`, { d: `M12 9v4`, key: `juzpu7` }],
            [`path`, { d: `M12 17h.01`, key: `p32p05` }],
        ],
        aliases: [`alert-triangle`],
    }),
    Ua = K({
        name: `users`,
        size: 24,
        node: [
            [
                `path`,
                {
                    d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,
                    key: `1yyitq`,
                },
            ],
            [`path`, { d: `M16 3.128a4 4 0 0 1 0 7.744`, key: `16gr8j` }],
            [`path`, { d: `M22 21v-2a4 4 0 0 0-3-3.87`, key: `kshegd` }],
            [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }],
        ],
    }),
    Wa = K({
        name: `x`,
        size: 24,
        node: [
            [`path`, { d: `M18 6 6 18`, key: `1bl5f8` }],
            [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }],
        ],
    }),
    Ga = Xe ? window : void 0,
    Ka = Xe ? window.document : void 0,
    qa = Xe ? window.navigator : void 0;
Xe && window.location;
function Ja(e) {
    let t = A(e);
    return t?.$el ?? t;
}
function Ya(...e) {
    let t = [],
        n = () => {
            (t.forEach((e) => e()), (t.length = 0));
        },
        r = (e, t, n, r) => (
            e.addEventListener(t, n, r),
            () => e.removeEventListener(t, n, r)
        ),
        i = L(() => {
            let t = Ue(A(e[0])).filter((e) => e != null);
            return t.every((e) => typeof e != `string`) ? t : void 0;
        }),
        a = Ge(
            () => [
                i.value?.map((e) => Ja(e)) ?? [Ga].filter((e) => e != null),
                Ue(A(i.value ? e[1] : e[0])),
                Ue(F(i.value ? e[2] : e[1])),
                A(i.value ? e[3] : e[2]),
            ],
            ([e, i, a, o]) => {
                if ((n(), !e?.length || !i?.length || !a?.length)) return;
                let s = He(o) ? { ...o } : o;
                t.push(
                    ...e.flatMap((e) =>
                        i.flatMap((t) => a.map((n) => r(e, t, n, s))),
                    ),
                );
            },
            { flush: `post` },
        );
    return (
        $e(n),
        () => {
            (a(), n());
        }
    );
}
function Xa() {
    let e = _e(!1),
        t = c();
    return (
        t &&
            p(() => {
                e.value = !0;
            }, t),
        e
    );
}
function Za(e) {
    let t = Xa();
    return L(() => (t.value, !!e()));
}
var Qa = Symbol(`vueuse-ssr-width`);
function $a() {
    let e = v() ? Je(Qa, null) : null;
    return typeof e == `number` ? e : void 0;
}
function eo(e, t = {}) {
    let { window: n = Ga, ssrWidth: r = $a() } = t,
        i = Za(
            () => n && `matchMedia` in n && typeof n.matchMedia == `function`,
        ),
        a = _e(typeof r == `number`),
        o = _e(),
        s = _e(!1);
    return (
        P(() => {
            if (a.value) {
                a.value = !i.value;
                let t = A(e).split(`,`);
                s.value = t.some((e) => {
                    let t = e.includes(`not all`),
                        n = e.match(
                            /\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/,
                        ),
                        i = e.match(
                            /\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/,
                        ),
                        a = !!(n || i);
                    return (
                        n && a && (a = r >= Ye(n[1])),
                        i && a && (a = r <= Ye(i[1])),
                        t ? !a : a
                    );
                });
            } else
                i.value &&
                    ((o.value = n.matchMedia(A(e))),
                    (s.value = o.value.matches));
        }),
        Ya(
            o,
            `change`,
            (e) => {
                s.value = e.matches;
            },
            { passive: !0 },
        ),
        L(() => s.value)
    );
}
function to(e, t = {}) {
    let { controls: n = !1, navigator: r = qa } = t,
        i = Za(() => r && `permissions` in r),
        a = _e(),
        o = typeof e == `string` ? { name: e } : e,
        s = _e(),
        c = () => {
            s.value = a.value?.state ?? `prompt`;
        };
    Ya(a, `change`, c, { passive: !0 });
    let l = Qe(async () => {
        if (i.value) {
            if (!a.value)
                try {
                    a.value = await r.permissions.query(o);
                } catch {
                    a.value = void 0;
                } finally {
                    c();
                }
            if (n) return de(a.value);
        }
    });
    return (l(), n ? { state: s, isSupported: i, query: l } : s);
}
function no(e = {}) {
    let {
            navigator: t = qa,
            read: n = !1,
            source: r,
            copiedDuring: i = 1500,
            legacy: a = !1,
        } = e,
        o = Za(() => t && `clipboard` in t),
        s = to(`clipboard-read`),
        c = to(`clipboard-write`),
        l = L(() => o.value || a),
        u = _e(``),
        d = _e(!1),
        f = We(() => (d.value = !1), i, { immediate: !1 });
    async function p() {
        let e = !(o.value && _(s.value));
        if (!e)
            try {
                u.value = await t.clipboard.readText();
            } catch {
                e = !0;
            }
        e && (u.value = g());
    }
    l.value && n && Ya([`copy`, `cut`], p, { passive: !0 });
    async function m(e = A(r)) {
        if (l.value && e != null) {
            let n = !(o.value && _(c.value));
            if (!n)
                try {
                    await t.clipboard.writeText(e);
                } catch {
                    n = !0;
                }
            (n && h(e), (u.value = e), (d.value = !0), f.start());
        }
    }
    function h(e) {
        let t = document.createElement(`textarea`);
        ((t.value = e ?? ``),
            (t.style.position = `absolute`),
            (t.style.opacity = `0`),
            document.body.appendChild(t),
            t.select(),
            document.execCommand(`copy`),
            t.remove());
    }
    function g() {
        return (
            (document == null ? void 0 : document.getSelection)
                ?.call(document)
                ?.toString() ?? ``
        );
    }
    function _(e) {
        return e === `granted` || e === `prompt`;
    }
    return { isSupported: l, text: u, copied: d, copy: m };
}
function ro(e) {
    return JSON.parse(JSON.stringify(e));
}
function io(e, t) {
    let n = _e(t);
    return (
        _(
            qe(e),
            (e, t) => {
                n.value = t;
            },
            { flush: `sync` },
        ),
        he(n)
    );
}
function ao(e, t, n, r = {}) {
    let {
            clone: i = !1,
            passive: a = !1,
            eventName: o,
            deep: s = !1,
            defaultValue: l,
            shouldEmit: u,
        } = r,
        d = c(),
        f =
            n ||
            d?.emit ||
            d?.$emit?.bind(d) ||
            d?.proxy?.$emit?.bind(d?.proxy),
        p = o;
    ((t ||= `modelValue`), (p ||= `update:${t.toString()}`));
    let m = (e) => (i ? (typeof i == `function` ? i(e) : ro(e)) : e),
        h = () => (Ke(e[t]) ? m(e[t]) : l),
        g = (e) => {
            u ? u(e) && f(p, e) : f(p, e);
        };
    if (a) {
        let n = h(),
            r = M(n),
            i = !1;
        return (
            _(
                () => e[t],
                (e) => {
                    i || ((i = !0), (r.value = m(e)), ee(() => (i = !1)));
                },
            ),
            _(
                r,
                (n) => {
                    !i && (n !== e[t] || s) && g(n);
                },
                { deep: s },
            ),
            r
        );
    }
    return L({
        get() {
            return h();
        },
        set(e) {
            g(e);
        },
    });
}
var oo = j({
        __name: `SheetOverlay`,
        props: {
            forceMount: { type: Boolean },
            asChild: { type: Boolean },
            as: {},
            class: { type: [Boolean, null, String, Object, Array] },
        },
        setup(e) {
            let t = e,
                n = Ze(t, `class`);
            return (e, r) => (
                k(),
                N(
                    F(Gt),
                    s(
                        {
                            'data-slot': `sheet-overlay`,
                            class: F(R)(
                                `data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80`,
                                t.class,
                            ),
                        },
                        F(n),
                    ),
                    { default: g(() => [U(e.$slots, `default`)]), _: 3 },
                    16,
                    [`class`],
                )
            );
        },
    }),
    so = j({
        inheritAttrs: !1,
        __name: `SheetContent`,
        props: {
            class: { type: [Boolean, null, String, Object, Array] },
            side: { default: `right` },
            forceMount: { type: Boolean },
            disableOutsidePointerEvents: { type: Boolean },
            asChild: { type: Boolean },
            as: {},
        },
        emits: [
            `escapeKeyDown`,
            `pointerDownOutside`,
            `focusOutside`,
            `interactOutside`,
            `openAutoFocus`,
            `closeAutoFocus`,
        ],
        setup(e, { emit: t }) {
            let n = e,
                r = t,
                i = Ze(n, `class`, `side`),
                a = Ve(i, r);
            return (t, r) => (
                k(),
                N(F(Kt), null, {
                    default: g(() => [
                        B(oo),
                        B(
                            F(Ht),
                            s(
                                {
                                    'data-slot': `sheet-content`,
                                    class: F(R)(
                                        `bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500`,
                                        e.side === `right` &&
                                            `data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm`,
                                        e.side === `left` &&
                                            `data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm`,
                                        e.side === `top` &&
                                            `data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b`,
                                        e.side === `bottom` &&
                                            `data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t`,
                                        n.class,
                                    ),
                                },
                                { ...t.$attrs, ...F(a) },
                            ),
                            {
                                default: g(() => [
                                    U(t.$slots, `default`),
                                    B(
                                        F(Dt),
                                        {
                                            class: `ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none`,
                                        },
                                        {
                                            default: g(() => [
                                                B(F(Wa), { class: `size-4` }),
                                                (r[0] ||= H(
                                                    `span`,
                                                    { class: `sr-only` },
                                                    `Close`,
                                                    -1,
                                                )),
                                            ]),
                                            _: 1,
                                        },
                                    ),
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
    co = j({
        __name: `SheetDescription`,
        props: {
            asChild: { type: Boolean },
            as: {},
            class: { type: [Boolean, null, String, Object, Array] },
        },
        setup(e) {
            let t = e,
                n = Ze(t, `class`);
            return (e, r) => (
                k(),
                N(
                    F(Ut),
                    s(
                        {
                            'data-slot': `sheet-description`,
                            class: F(R)(
                                `text-muted-foreground text-sm`,
                                t.class,
                            ),
                        },
                        F(n),
                    ),
                    { default: g(() => [U(e.$slots, `default`)]), _: 3 },
                    16,
                    [`class`],
                )
            );
        },
    }),
    lo = j({
        __name: `SheetHeader`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                k(),
                z(
                    `div`,
                    {
                        'data-slot': `sheet-header`,
                        class: E(F(R)(`flex flex-col gap-1.5 p-4`, t.class)),
                    },
                    [U(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    uo = j({
        __name: `SheetTitle`,
        props: {
            asChild: { type: Boolean },
            as: {},
            class: { type: [Boolean, null, String, Object, Array] },
        },
        setup(e) {
            let t = e,
                n = Ze(t, `class`);
            return (e, r) => (
                k(),
                N(
                    F(qt),
                    s(
                        {
                            'data-slot': `sheet-title`,
                            class: F(R)(
                                `text-foreground font-semibold`,
                                t.class,
                            ),
                        },
                        F(n),
                    ),
                    { default: g(() => [U(e.$slots, `default`)]), _: 3 },
                    16,
                    [`class`],
                )
            );
        },
    }),
    fo = `sidebar_state`,
    po = 604800,
    mo = `16rem`,
    ho = `18rem`,
    go = `3rem`,
    [_o, vo] = e(`Sidebar`),
    yo = { class: `flex h-full w-full flex-col` },
    bo = [`data-state`, `data-collapsible`, `data-variant`, `data-side`],
    xo = {
        'data-sidebar': `sidebar`,
        class: `bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm`,
    },
    So = j({
        inheritAttrs: !1,
        __name: `Sidebar`,
        props: {
            side: { default: `left` },
            variant: { default: `sidebar` },
            collapsible: { default: `offcanvas` },
            class: { type: [Boolean, null, String, Object, Array] },
        },
        setup(e) {
            let t = e,
                {
                    isMobile: n,
                    state: r,
                    openMobile: i,
                    setOpenMobile: a,
                } = _o();
            return (o, c) =>
                e.collapsible === `none`
                    ? (k(),
                      z(
                          `div`,
                          s(
                              {
                                  key: 0,
                                  'data-slot': `sidebar`,
                                  class: F(R)(
                                      `bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col`,
                                      t.class,
                                  ),
                              },
                              o.$attrs,
                          ),
                          [U(o.$slots, `default`)],
                          16,
                      ))
                    : F(n)
                      ? (k(),
                        N(
                            F(Oa),
                            s({ key: 1, open: F(i) }, o.$attrs, {
                                'onUpdate:open': F(a),
                            }),
                            {
                                default: g(() => [
                                    B(
                                        F(so),
                                        {
                                            'data-sidebar': `sidebar`,
                                            'data-slot': `sidebar`,
                                            'data-mobile': `true`,
                                            side: e.side,
                                            class: `bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden`,
                                            style: xe({
                                                '--sidebar-width': F(ho),
                                            }),
                                        },
                                        {
                                            default: g(() => [
                                                B(
                                                    lo,
                                                    { class: `sr-only` },
                                                    {
                                                        default: g(() => [
                                                            B(uo, null, {
                                                                default: g(
                                                                    () => [
                                                                        ...(c[0] ||=
                                                                            [
                                                                                se(
                                                                                    `Sidebar`,
                                                                                    -1,
                                                                                ),
                                                                            ]),
                                                                    ],
                                                                ),
                                                                _: 1,
                                                            }),
                                                            B(co, null, {
                                                                default: g(
                                                                    () => [
                                                                        ...(c[1] ||=
                                                                            [
                                                                                se(
                                                                                    `Displays the mobile sidebar.`,
                                                                                    -1,
                                                                                ),
                                                                            ]),
                                                                    ],
                                                                ),
                                                                _: 1,
                                                            }),
                                                        ]),
                                                        _: 1,
                                                    },
                                                ),
                                                H(`div`, yo, [
                                                    U(o.$slots, `default`),
                                                ]),
                                            ]),
                                            _: 3,
                                        },
                                        8,
                                        [`side`, `style`],
                                    ),
                                ]),
                                _: 3,
                            },
                            16,
                            [`open`, `onUpdate:open`],
                        ))
                      : (k(),
                        z(
                            `div`,
                            {
                                key: 2,
                                class: `group peer text-sidebar-foreground hidden md:block`,
                                'data-slot': `sidebar`,
                                'data-state': F(r),
                                'data-collapsible':
                                    F(r) === `collapsed` ? e.collapsible : ``,
                                'data-variant': e.variant,
                                'data-side': e.side,
                            },
                            [
                                H(
                                    `div`,
                                    {
                                        class: E(
                                            F(R)(
                                                `relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear`,
                                                `group-data-[collapsible=offcanvas]:w-0`,
                                                `group-data-[side=right]:rotate-180`,
                                                e.variant === `floating` ||
                                                    e.variant === `inset`
                                                    ? `group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]`
                                                    : `group-data-[collapsible=icon]:w-(--sidebar-width-icon)`,
                                            ),
                                        ),
                                    },
                                    null,
                                    2,
                                ),
                                H(
                                    `div`,
                                    s(
                                        {
                                            class: F(R)(
                                                `fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex`,
                                                e.side === `left`
                                                    ? `left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]`
                                                    : `right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]`,
                                                e.variant === `floating` ||
                                                    e.variant === `inset`
                                                    ? `p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]`
                                                    : `group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l`,
                                                t.class,
                                            ),
                                        },
                                        o.$attrs,
                                    ),
                                    [H(`div`, xo, [U(o.$slots, `default`)])],
                                    16,
                                ),
                            ],
                            8,
                            bo,
                        ));
        },
    }),
    Co = j({
        __name: `SidebarContent`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                k(),
                z(
                    `div`,
                    {
                        'data-slot': `sidebar-content`,
                        'data-sidebar': `content`,
                        class: E(
                            F(R)(
                                `flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden`,
                                t.class,
                            ),
                        ),
                    },
                    [U(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    wo = j({
        __name: `SidebarFooter`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                k(),
                z(
                    `div`,
                    {
                        'data-slot': `sidebar-footer`,
                        'data-sidebar': `footer`,
                        class: E(F(R)(`flex flex-col gap-2 p-2`, t.class)),
                    },
                    [U(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    To = j({
        __name: `SidebarGroup`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                k(),
                z(
                    `div`,
                    {
                        'data-slot': `sidebar-group`,
                        'data-sidebar': `group`,
                        class: E(
                            F(R)(
                                `relative flex w-full min-w-0 flex-col p-2`,
                                t.class,
                            ),
                        ),
                    },
                    [U(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    Eo = j({
        __name: `SidebarHeader`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                k(),
                z(
                    `div`,
                    {
                        'data-slot': `sidebar-header`,
                        'data-sidebar': `header`,
                        class: E(F(R)(`flex flex-col gap-2 p-2`, t.class)),
                    },
                    [U(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    Do = j({
        __name: `SidebarInset`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                k(),
                z(
                    `main`,
                    {
                        'data-slot': `sidebar-inset`,
                        class: E(
                            F(R)(
                                `bg-background relative flex w-full flex-1 flex-col`,
                                `md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2`,
                                t.class,
                            ),
                        ),
                    },
                    [U(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    Oo = j({
        __name: `SidebarMenu`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                k(),
                z(
                    `ul`,
                    {
                        'data-slot': `sidebar-menu`,
                        'data-sidebar': `menu`,
                        class: E(
                            F(R)(`flex w-full min-w-0 flex-col gap-1`, t.class),
                        ),
                    },
                    [U(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    ko = j({
        __name: `Tooltip`,
        props: {
            defaultOpen: { type: Boolean },
            open: { type: Boolean },
            delayDuration: {},
            disableHoverableContent: { type: Boolean },
            disableClosingTrigger: { type: Boolean },
            disabled: { type: Boolean },
            ignoreNonKeyboardFocus: { type: Boolean },
        },
        emits: [`update:open`],
        setup(e, { emit: t }) {
            let n = Ve(e, t);
            return (e, t) => (
                k(),
                N(
                    F(Sa),
                    s({ 'data-slot': `tooltip` }, F(n)),
                    {
                        default: g((t) => [U(e.$slots, `default`, W(T(t)))]),
                        _: 3,
                    },
                    16,
                )
            );
        },
    }),
    Ao = j({
        inheritAttrs: !1,
        __name: `TooltipContent`,
        props: {
            forceMount: { type: Boolean },
            ariaLabel: {},
            asChild: { type: Boolean },
            as: {},
            side: {},
            sideOffset: { default: 4 },
            align: {},
            alignOffset: {},
            avoidCollisions: { type: Boolean },
            collisionBoundary: {},
            collisionPadding: {},
            arrowPadding: {},
            sticky: {},
            hideWhenDetached: { type: Boolean },
            positionStrategy: {},
            updatePositionStrategy: {},
            class: { type: [Boolean, null, String, Object, Array] },
        },
        emits: [`escapeKeyDown`, `pointerDownOutside`],
        setup(e, { emit: t }) {
            let n = e,
                r = t,
                i = Ze(n, `class`),
                a = Ve(i, r);
            return (e, t) => (
                k(),
                N(F(Ea), null, {
                    default: g(() => [
                        B(
                            F(Ta),
                            s(
                                { 'data-slot': `tooltip-content` },
                                { ...F(a), ...e.$attrs },
                                {
                                    class: F(R)(
                                        `bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance`,
                                        n.class,
                                    ),
                                },
                            ),
                            {
                                default: g(() => [
                                    U(e.$slots, `default`),
                                    B(F(ha), {
                                        class: `bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]`,
                                    }),
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
    jo = j({
        __name: `TooltipTrigger`,
        props: { reference: {}, asChild: { type: Boolean }, as: {} },
        setup(e) {
            let t = e;
            return (e, n) => (
                k(),
                N(
                    F(Da),
                    s({ 'data-slot': `tooltip-trigger` }, t),
                    { default: g(() => [U(e.$slots, `default`)]), _: 3 },
                    16,
                )
            );
        },
    }),
    Mo = j({
        __name: `SidebarMenuButtonChild`,
        props: {
            variant: { default: `default` },
            size: { default: `default` },
            isActive: { type: Boolean },
            class: { type: [Boolean, null, String, Object, Array] },
            asChild: { type: Boolean },
            as: { default: `button` },
        },
        setup(e) {
            let t = e;
            return (n, r) => (
                k(),
                N(
                    F(V),
                    s(
                        {
                            'data-slot': `sidebar-menu-button`,
                            'data-sidebar': `menu-button`,
                            'data-size': e.size,
                            'data-active': e.isActive,
                            class: F(R)(
                                F(Bo)({ variant: e.variant, size: e.size }),
                                t.class,
                            ),
                            as: e.as,
                            'as-child': e.asChild,
                        },
                        n.$attrs,
                    ),
                    { default: g(() => [U(n.$slots, `default`)]), _: 3 },
                    16,
                    [`data-size`, `data-active`, `class`, `as`, `as-child`],
                )
            );
        },
    }),
    No = j({
        inheritAttrs: !1,
        __name: `SidebarMenuButton`,
        props: {
            variant: { default: `default` },
            size: { default: `default` },
            isActive: { type: Boolean },
            class: { type: [Boolean, null, String, Object, Array] },
            asChild: { type: Boolean },
            as: { default: `button` },
            tooltip: {},
        },
        setup(e) {
            let t = e,
                { isMobile: n, state: r } = _o(),
                i = Ze(t, `tooltip`);
            return (t, a) =>
                e.tooltip
                    ? (k(),
                      N(
                          F(ko),
                          { key: 1 },
                          {
                              default: g(() => [
                                  B(
                                      F(jo),
                                      { 'as-child': `` },
                                      {
                                          default: g(() => [
                                              B(
                                                  Mo,
                                                  W(
                                                      T({
                                                          ...F(i),
                                                          ...t.$attrs,
                                                      }),
                                                  ),
                                                  {
                                                      default: g(() => [
                                                          U(
                                                              t.$slots,
                                                              `default`,
                                                          ),
                                                      ]),
                                                      _: 3,
                                                  },
                                                  16,
                                              ),
                                          ]),
                                          _: 3,
                                      },
                                  ),
                                  B(
                                      F(Ao),
                                      {
                                          side: `right`,
                                          align: `center`,
                                          hidden: F(r) !== `collapsed` || F(n),
                                      },
                                      {
                                          default: g(() => [
                                              typeof e.tooltip == `string`
                                                  ? (k(),
                                                    z(
                                                        m,
                                                        { key: 0 },
                                                        [se(O(e.tooltip), 1)],
                                                        64,
                                                    ))
                                                  : (k(),
                                                    N(ye(e.tooltip), {
                                                        key: 1,
                                                    })),
                                          ]),
                                          _: 1,
                                      },
                                      8,
                                      [`hidden`],
                                  ),
                              ]),
                              _: 3,
                          },
                      ))
                    : (k(),
                      N(
                          Mo,
                          W(s({ key: 0 }, { ...F(i), ...t.$attrs })),
                          { default: g(() => [U(t.$slots, `default`)]), _: 3 },
                          16,
                      ));
        },
    }),
    Po = j({
        __name: `SidebarMenuItem`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                k(),
                z(
                    `li`,
                    {
                        'data-slot': `sidebar-menu-item`,
                        'data-sidebar': `menu-item`,
                        class: E(F(R)(`group/menu-item relative`, t.class)),
                    },
                    [U(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    Fo = j({
        __name: `SidebarProvider`,
        props: {
            defaultOpen: {
                type: Boolean,
                default: !Ka?.cookie.includes(`${fo}=false`),
            },
            open: { type: Boolean, default: void 0 },
            class: { type: [Boolean, null, String, Object, Array] },
        },
        emits: [`update:open`],
        setup(e, { emit: t }) {
            let n = e,
                r = t,
                i = eo(`(max-width: 768px)`),
                a = M(!1),
                o = ao(n, `open`, r, {
                    defaultValue: n.defaultOpen ?? !1,
                    passive: n.open === void 0,
                });
            function c(e) {
                ((o.value = e),
                    (document.cookie = `${fo}=${o.value}; path=/; max-age=${po}`));
            }
            function l(e) {
                a.value = e;
            }
            function u() {
                return i.value ? l(!a.value) : c(!o.value);
            }
            return (
                Ya(`keydown`, (e) => {
                    e.key === `b` &&
                        (e.metaKey || e.ctrlKey) &&
                        (e.preventDefault(), u());
                }),
                vo({
                    state: L(() => (o.value ? `expanded` : `collapsed`)),
                    open: o,
                    setOpen: c,
                    isMobile: i,
                    openMobile: a,
                    setOpenMobile: l,
                    toggleSidebar: u,
                }),
                (e, t) => (
                    k(),
                    N(
                        F(va),
                        { 'delay-duration': 0 },
                        {
                            default: g(() => [
                                H(
                                    `div`,
                                    s(
                                        {
                                            'data-slot': `sidebar-wrapper`,
                                            style: {
                                                '--sidebar-width': F(mo),
                                                '--sidebar-width-icon': F(go),
                                            },
                                            class: F(R)(
                                                `group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full`,
                                                n.class,
                                            ),
                                        },
                                        e.$attrs,
                                    ),
                                    [U(e.$slots, `default`)],
                                    16,
                                ),
                            ]),
                            _: 3,
                        },
                    )
                )
            );
        },
    }),
    Io = j({
        __name: `Separator`,
        props: {
            orientation: { default: `horizontal` },
            decorative: { type: Boolean, default: !0 },
            asChild: { type: Boolean },
            as: {},
            class: { type: [Boolean, null, String, Object, Array] },
        },
        setup(e) {
            let t = e,
                n = Ze(t, `class`);
            return (e, r) => (
                k(),
                N(
                    F(ma),
                    s({ 'data-slot': `separator` }, F(n), {
                        class: F(R)(
                            `bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px`,
                            t.class,
                        ),
                    }),
                    null,
                    16,
                    [`class`],
                )
            );
        },
    }),
    Lo = j({
        __name: `Button`,
        props: {
            variant: {},
            size: {},
            class: { type: [Boolean, null, String, Object, Array] },
            asChild: { type: Boolean },
            as: { default: `button` },
        },
        setup(e) {
            let t = e;
            return (n, r) => (
                k(),
                N(
                    F(V),
                    {
                        'data-slot': `button`,
                        'data-variant': e.variant,
                        'data-size': e.size,
                        as: e.as,
                        'as-child': e.asChild,
                        class: E(
                            F(R)(
                                F(Ro)({ variant: e.variant, size: e.size }),
                                t.class,
                            ),
                        ),
                    },
                    { default: g(() => [U(n.$slots, `default`)]), _: 3 },
                    8,
                    [`data-variant`, `data-size`, `as`, `as-child`, `class`],
                )
            );
        },
    }),
    Ro = ie(
        `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive`,
        {
            variants: {
                variant: {
                    default: `bg-primary text-primary-foreground hover:bg-primary/90`,
                    destructive: `bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60`,
                    outline: `border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50`,
                    secondary: `bg-secondary text-secondary-foreground hover:bg-secondary/80`,
                    ghost: `hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50`,
                    link: `text-primary underline-offset-4 hover:underline`,
                },
                size: {
                    default: `h-9 px-4 py-2 has-[>svg]:px-3`,
                    sm: `h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5`,
                    lg: `h-10 rounded-md px-6 has-[>svg]:px-4`,
                    icon: `size-9`,
                    'icon-sm': `size-8`,
                    'icon-lg': `size-10`,
                },
            },
            defaultVariants: { variant: `default`, size: `default` },
        },
    ),
    zo = j({
        __name: `SidebarTrigger`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e,
                { isMobile: n, state: r, toggleSidebar: i } = _o();
            return (e, a) => (
                k(),
                N(
                    F(Lo),
                    {
                        'data-sidebar': `trigger`,
                        'data-slot': `sidebar-trigger`,
                        variant: `ghost`,
                        size: `icon`,
                        class: E(F(R)(`h-7 w-7`, t.class)),
                        onClick: F(i),
                    },
                    {
                        default: g(() => [
                            F(n) || F(r) === `collapsed`
                                ? (k(), N(F(Ba), { key: 0 }))
                                : (k(), N(F(za), { key: 1 })),
                            (a[0] ||= H(
                                `span`,
                                { class: `sr-only` },
                                `Toggle sidebar`,
                                -1,
                            )),
                        ]),
                        _: 1,
                    },
                    8,
                    [`class`, `onClick`],
                )
            );
        },
    }),
    Bo = ie(
        `peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0`,
        {
            variants: {
                variant: {
                    default: `hover:bg-sidebar-accent hover:text-sidebar-accent-foreground`,
                    outline: `bg-background shadow-[0_0_0_1px_var(--sidebar-border)] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_var(--sidebar-accent)]`,
                },
                size: {
                    default: `h-8 text-sm`,
                    sm: `h-7 text-xs`,
                    lg: `h-12 text-sm group-data-[collapsible=icon]:p-0!`,
                },
            },
            defaultVariants: { variant: `default`, size: `default` },
        },
    ),
    Vo = j({
        __name: `AppContent`,
        setup(e) {
            return (e, t) => (
                k(),
                N(
                    F(Do),
                    {
                        id: `main-content`,
                        tabindex: `-1`,
                        class: `outline-none`,
                    },
                    { default: g(() => [U(e.$slots, `default`)]), _: 3 },
                )
            );
        },
    }),
    Ho = j({
        __name: `AppShell`,
        setup(e) {
            let t = ce().props.sidebarOpen;
            return (e, n) => (
                k(),
                N(
                    F(Fo),
                    { 'default-open': F(t) },
                    { default: g(() => [U(e.$slots, `default`)]), _: 3 },
                    8,
                    [`default-open`],
                )
            );
        },
    }),
    Uo = { class: `flex items-center gap-2` },
    Wo = j({
        __name: `AppLogo`,
        setup(e) {
            return (e, t) => (
                k(),
                z(`div`, Uo, [
                    B(F(Ma), {
                        class: `size-6 shrink-0 text-brand`,
                        'aria-hidden': `true`,
                    }),
                    (t[0] ||= H(
                        `span`,
                        {
                            class: `text-lg font-semibold tracking-tight group-data-[collapsible=icon]:hidden`,
                        },
                        [
                            H(`span`, { class: `text-foreground` }, `Pay`),
                            H(
                                `span`,
                                { class: `font-light text-muted-foreground` },
                                `Hub`,
                            ),
                            H(
                                `span`,
                                {
                                    class: `ml-1 font-light text-muted-foreground`,
                                },
                                `Central`,
                            ),
                        ],
                        -1,
                    )),
                ])
            );
        },
    }),
    Go = ce(),
    Ko = L(
        () =>
            new URL(
                Go.url,
                typeof window < `u`
                    ? window.location.origin
                    : `http://localhost`,
            ).pathname,
    );
function qo() {
    function e(e, t, n = !1) {
        let r = t ?? Ko.value,
            i = ge(e),
            a = (e) => (n ? r.startsWith(e) : e === r);
        if (!i.startsWith(`http`)) return a(i);
        try {
            return a(new URL(i).pathname);
        } catch {
            return !1;
        }
    }
    function t(t, n) {
        return e(t, n, !0);
    }
    function n(t, n, r = null) {
        return e(t) ? n : r;
    }
    return {
        currentUrl: he(Ko),
        isCurrentUrl: e,
        isCurrentOrParentUrl: t,
        whenCurrentUrl: n,
    };
}
var Jo = j({
        __name: `NavMain`,
        props: { items: {} },
        setup(e) {
            let { currentUrl: t } = qo();
            function n(e) {
                let n = ge(e);
                return t.value === n || t.value.startsWith(`${n}/`);
            }
            return (t, r) => (
                k(),
                N(
                    F(To),
                    { class: `px-2 py-0` },
                    {
                        default: g(() => [
                            B(F(Oo), null, {
                                default: g(() => [
                                    (k(!0),
                                    z(
                                        m,
                                        null,
                                        pe(
                                            e.items,
                                            (e) => (
                                                k(),
                                                N(
                                                    F(Po),
                                                    { key: e.title },
                                                    {
                                                        default: g(() => [
                                                            B(
                                                                F(No),
                                                                {
                                                                    'as-child': ``,
                                                                    'is-active':
                                                                        n(
                                                                            e.href,
                                                                        ),
                                                                    tooltip:
                                                                        e.title,
                                                                },
                                                                {
                                                                    default: g(
                                                                        () => [
                                                                            B(
                                                                                F(
                                                                                    oe,
                                                                                ),
                                                                                {
                                                                                    href: e.href,
                                                                                },
                                                                                {
                                                                                    default:
                                                                                        g(
                                                                                            () => [
                                                                                                (k(),
                                                                                                N(
                                                                                                    ye(
                                                                                                        e.icon,
                                                                                                    ),
                                                                                                )),
                                                                                                H(
                                                                                                    `span`,
                                                                                                    null,
                                                                                                    O(
                                                                                                        e.title,
                                                                                                    ),
                                                                                                    1,
                                                                                                ),
                                                                                            ],
                                                                                        ),
                                                                                    _: 2,
                                                                                },
                                                                                1032,
                                                                                [
                                                                                    `href`,
                                                                                ],
                                                                            ),
                                                                        ],
                                                                    ),
                                                                    _: 2,
                                                                },
                                                                1032,
                                                                [
                                                                    `is-active`,
                                                                    `tooltip`,
                                                                ],
                                                            ),
                                                        ]),
                                                        _: 2,
                                                    },
                                                    1024,
                                                )
                                            ),
                                        ),
                                        128,
                                    )),
                                ]),
                                _: 1,
                            }),
                        ]),
                        _: 1,
                    },
                )
            );
        },
    }),
    Yo = j({
        __name: `DropdownMenu`,
        props: {
            defaultOpen: { type: Boolean },
            open: { type: Boolean },
            dir: {},
            modal: { type: Boolean },
        },
        emits: [`update:open`],
        setup(e, { emit: t }) {
            let n = Ve(e, t);
            return (e, t) => (
                k(),
                N(
                    F(aa),
                    s({ 'data-slot': `dropdown-menu` }, F(n)),
                    {
                        default: g((t) => [U(e.$slots, `default`, W(T(t)))]),
                        _: 3,
                    },
                    16,
                )
            );
        },
    }),
    Xo = j({
        inheritAttrs: !1,
        __name: `DropdownMenuContent`,
        props: {
            forceMount: { type: Boolean },
            loop: { type: Boolean },
            memoDependencies: {},
            side: {},
            sideOffset: { default: 4 },
            sideFlip: { type: Boolean },
            align: {},
            alignOffset: {},
            alignFlip: { type: Boolean },
            avoidCollisions: { type: Boolean },
            collisionBoundary: {},
            collisionPadding: {},
            arrowPadding: {},
            hideShiftedArrow: { type: Boolean },
            sticky: {},
            hideWhenDetached: { type: Boolean },
            positionStrategy: {},
            updatePositionStrategy: {},
            disableUpdateOnLayoutShift: { type: Boolean },
            prioritizePosition: { type: Boolean },
            reference: {},
            asChild: { type: Boolean },
            as: {},
            class: { type: [Boolean, null, String, Object, Array] },
        },
        emits: [
            `escapeKeyDown`,
            `pointerDownOutside`,
            `focusOutside`,
            `interactOutside`,
            `openAutoFocus`,
            `closeAutoFocus`,
        ],
        setup(e, { emit: t }) {
            let n = e,
                r = t,
                i = Ze(n, `class`),
                a = Ve(i, r);
            return (e, t) => (
                k(),
                N(F(ua), null, {
                    default: g(() => [
                        B(
                            F(oa),
                            s(
                                { 'data-slot': `dropdown-menu-content` },
                                { ...e.$attrs, ...F(a) },
                                {
                                    class: F(R)(
                                        `bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md`,
                                        n.class,
                                    ),
                                },
                            ),
                            {
                                default: g(() => [U(e.$slots, `default`)]),
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
    Zo = j({
        __name: `DropdownMenuGroup`,
        props: { asChild: { type: Boolean }, as: {} },
        setup(e) {
            let t = e;
            return (e, n) => (
                k(),
                N(
                    F(sa),
                    s({ 'data-slot': `dropdown-menu-group` }, t),
                    { default: g(() => [U(e.$slots, `default`)]), _: 3 },
                    16,
                )
            );
        },
    }),
    Qo = j({
        __name: `DropdownMenuItem`,
        props: {
            disabled: { type: Boolean },
            textValue: {},
            asChild: { type: Boolean },
            as: {},
            class: { type: [Boolean, null, String, Object, Array] },
            inset: { type: Boolean },
            variant: { default: `default` },
        },
        setup(e) {
            let t = e,
                n = Ze(t, `inset`, `variant`, `class`),
                r = ze(n);
            return (n, i) => (
                k(),
                N(
                    F(ca),
                    s(
                        {
                            'data-slot': `dropdown-menu-item`,
                            'data-inset': e.inset ? `` : void 0,
                            'data-variant': e.variant,
                        },
                        F(r),
                        {
                            class: F(R)(
                                `focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
                                t.class,
                            ),
                        },
                    ),
                    { default: g(() => [U(n.$slots, `default`)]), _: 3 },
                    16,
                    [`data-inset`, `data-variant`, `class`],
                )
            );
        },
    }),
    $o = j({
        __name: `DropdownMenuLabel`,
        props: {
            asChild: { type: Boolean },
            as: {},
            class: { type: [Boolean, null, String, Object, Array] },
            inset: { type: Boolean },
        },
        setup(e) {
            let t = e,
                n = Ze(t, `class`, `inset`),
                r = ze(n);
            return (n, i) => (
                k(),
                N(
                    F(la),
                    s(
                        {
                            'data-slot': `dropdown-menu-label`,
                            'data-inset': e.inset ? `` : void 0,
                        },
                        F(r),
                        {
                            class: F(R)(
                                `px-2 py-1.5 text-sm font-medium data-[inset]:pl-8`,
                                t.class,
                            ),
                        },
                    ),
                    { default: g(() => [U(n.$slots, `default`)]), _: 3 },
                    16,
                    [`data-inset`, `class`],
                )
            );
        },
    }),
    es = j({
        __name: `DropdownMenuSeparator`,
        props: {
            asChild: { type: Boolean },
            as: {},
            class: { type: [Boolean, null, String, Object, Array] },
        },
        setup(e) {
            let t = e,
                n = Ze(t, `class`);
            return (e, r) => (
                k(),
                N(
                    F(da),
                    s({ 'data-slot': `dropdown-menu-separator` }, F(n), {
                        class: F(R)(`bg-border -mx-1 my-1 h-px`, t.class),
                    }),
                    null,
                    16,
                    [`class`],
                )
            );
        },
    }),
    ts = j({
        __name: `DropdownMenuTrigger`,
        props: {
            disabled: { type: Boolean },
            asChild: { type: Boolean },
            as: {},
        },
        setup(e) {
            let t = ze(e);
            return (e, n) => (
                k(),
                N(
                    F(fa),
                    s({ 'data-slot': `dropdown-menu-trigger` }, F(t)),
                    { default: g(() => [U(e.$slots, `default`)]), _: 3 },
                    16,
                )
            );
        },
    }),
    ns = j({
        __name: `Avatar`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                k(),
                N(
                    F(Di),
                    {
                        'data-slot': `avatar`,
                        class: E(
                            F(R)(
                                `relative flex size-8 shrink-0 overflow-hidden rounded-full`,
                                t.class,
                            ),
                        ),
                    },
                    { default: g(() => [U(e.$slots, `default`)]), _: 3 },
                    8,
                    [`class`],
                )
            );
        },
    }),
    rs = j({
        __name: `AvatarFallback`,
        props: {
            delayMs: {},
            asChild: { type: Boolean },
            as: {},
            class: { type: [Boolean, null, String, Object, Array] },
        },
        setup(e) {
            let t = e,
                n = Ze(t, `class`);
            return (e, r) => (
                k(),
                N(
                    F(Oi),
                    s({ 'data-slot': `avatar-fallback` }, F(n), {
                        class: F(R)(
                            `bg-muted flex size-full items-center justify-center rounded-full`,
                            t.class,
                        ),
                    }),
                    { default: g(() => [U(e.$slots, `default`)]), _: 3 },
                    16,
                    [`class`],
                )
            );
        },
    }),
    is = j({
        __name: `AvatarImage`,
        props: {
            src: {},
            referrerPolicy: {},
            crossOrigin: {},
            asChild: { type: Boolean },
            as: {},
        },
        setup(e) {
            let t = e;
            return (e, n) => (
                k(),
                N(
                    F(ji),
                    s({ 'data-slot': `avatar-image` }, t, {
                        class: `aspect-square size-full`,
                    }),
                    { default: g(() => [U(e.$slots, `default`)]), _: 3 },
                    16,
                )
            );
        },
    });
function as(e) {
    return Array.from(e)[0] ?? ``;
}
function os(e) {
    if (!e) return ``;
    let t = e.trim().split(/\s+/u).filter(Boolean);
    return t.length === 0
        ? ``
        : t.length === 1
          ? as(t[0]).toUpperCase()
          : `${as(t[0])}${as(t[t.length - 1])}`.toUpperCase();
}
function ss() {
    return { getInitials: os };
}
var cs = { class: `grid flex-1 text-left text-sm leading-tight` },
    ls = { class: `truncate font-medium` },
    us = { key: 0, class: `truncate text-xs text-muted-foreground` },
    ds = j({
        __name: `UserInfo`,
        props: { user: {}, showEmail: { type: Boolean, default: !1 } },
        setup(e) {
            let t = e,
                { getInitials: n } = ss(),
                r = L(() => t.user.avatar && t.user.avatar !== ``);
            return (t, i) => (
                k(),
                z(
                    m,
                    null,
                    [
                        B(
                            F(ns),
                            { class: `h-8 w-8 overflow-hidden rounded-lg` },
                            {
                                default: g(() => [
                                    r.value
                                        ? (k(),
                                          N(
                                              F(is),
                                              {
                                                  key: 0,
                                                  src: e.user.avatar,
                                                  alt: e.user.name,
                                              },
                                              null,
                                              8,
                                              [`src`, `alt`],
                                          ))
                                        : D(``, !0),
                                    B(
                                        F(rs),
                                        {
                                            class: `rounded-lg text-black dark:text-white`,
                                        },
                                        {
                                            default: g(() => [
                                                se(O(F(n)(e.user.name)), 1),
                                            ]),
                                            _: 1,
                                        },
                                    ),
                                ]),
                                _: 1,
                            },
                        ),
                        H(`div`, cs, [
                            H(`span`, ls, O(e.user.name), 1),
                            e.showEmail
                                ? (k(), z(`span`, us, O(e.user.email), 1))
                                : D(``, !0),
                        ]),
                    ],
                    64,
                )
            );
        },
    }),
    fs = (e) => ({ url: fs.url(e), method: `get` });
((fs.definition = { methods: [`get`, `head`], url: `/login` }),
    (fs.url = (e) => fs.definition.url + I(e)),
    (fs.get = (e) => ({ url: fs.url(e), method: `get` })),
    (fs.head = (e) => ({ url: fs.url(e), method: `head` })));
var ps = (e) => ({ action: fs.url(e), method: `get` });
((ps.get = (e) => ({ action: fs.url(e), method: `get` })),
    (ps.head = (e) => ({
        action: fs.url({
            [e?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(e?.query ?? e?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (fs.form = ps));
var ms = (e) => ({ url: ms.url(e), method: `post` });
((ms.definition = { methods: [`post`], url: `/logout` }),
    (ms.url = (e) => ms.definition.url + I(e)),
    (ms.post = (e) => ({ url: ms.url(e), method: `post` })));
var hs = (e) => ({ action: ms.url(e), method: `post` });
((hs.post = (e) => ({ action: ms.url(e), method: `post` })), (ms.form = hs));
var q = (e) => ({ url: q.url(e), method: `get` });
((q.definition = {
    methods: [
        `get`,
        `head`,
        `post`,
        `put`,
        `patch`,
        `delete`,
        `options`,
        `query`,
    ],
    url: `/`,
}),
    (q.url = (e) => q.definition.url + I(e)),
    (q.get = (e) => ({ url: q.url(e), method: `get` })),
    (q.head = (e) => ({ url: q.url(e), method: `head` })),
    (q.post = (e) => ({ url: q.url(e), method: `post` })),
    (q.put = (e) => ({ url: q.url(e), method: `put` })),
    (q.patch = (e) => ({ url: q.url(e), method: `patch` })),
    (q.delete = (e) => ({ url: q.url(e), method: `delete` })),
    (q.options = (e) => ({ url: q.url(e), method: `options` })),
    (q.query = (e) => ({ url: q.url(e), method: `query` })));
var gs = (e) => ({ action: q.url(e), method: `get` });
((gs.get = (e) => ({ action: q.url(e), method: `get` })),
    (gs.head = (e) => ({
        action: q.url({
            [e?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(e?.query ?? e?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (gs.post = (e) => ({ action: q.url(e), method: `post` })),
    (gs.put = (e) => ({
        action: q.url({
            [e?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `PUT`,
                ...(e?.query ?? e?.mergeQuery ?? {}),
            },
        }),
        method: `post`,
    })),
    (gs.patch = (e) => ({
        action: q.url({
            [e?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `PATCH`,
                ...(e?.query ?? e?.mergeQuery ?? {}),
            },
        }),
        method: `post`,
    })),
    (gs.delete = (e) => ({
        action: q.url({
            [e?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `DELETE`,
                ...(e?.query ?? e?.mergeQuery ?? {}),
            },
        }),
        method: `post`,
    })),
    (gs.options = (e) => ({
        action: q.url({
            [e?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `OPTIONS`,
                ...(e?.query ?? e?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (gs.query = (e) => ({
        action: q.url({
            [e?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `QUERY`,
                ...(e?.query ?? e?.mergeQuery ?? {}),
            },
        }),
        method: `post`,
    })),
    (q.form = gs));
var J = (e) => ({ url: J.url(e), method: `get` });
((J.definition = { methods: [`get`, `head`], url: `/dashboard` }),
    (J.url = (e) => J.definition.url + I(e)),
    (J.get = (e) => ({ url: J.url(e), method: `get` })),
    (J.head = (e) => ({ url: J.url(e), method: `head` })));
var _s = (e) => ({ action: J.url(e), method: `get` });
((_s.get = (e) => ({ action: J.url(e), method: `get` })),
    (_s.head = (e) => ({
        action: J.url({
            [e?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(e?.query ?? e?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (J.form = _s));
var Y = (e) => ({ url: Y.url(e), method: `get` });
((Y.definition = { methods: [`get`, `head`], url: `/settings/profile` }),
    (Y.url = (e) => Y.definition.url + I(e)),
    (Y.get = (e) => ({ url: Y.url(e), method: `get` })),
    (Y.head = (e) => ({ url: Y.url(e), method: `head` })));
var vs = (e) => ({ action: Y.url(e), method: `get` });
((vs.get = (e) => ({ action: Y.url(e), method: `get` })),
    (vs.head = (e) => ({
        action: Y.url({
            [e?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(e?.query ?? e?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (Y.form = vs));
var ys = (e) => ({ url: ys.url(e), method: `patch` });
((ys.definition = { methods: [`patch`], url: `/settings/profile` }),
    (ys.url = (e) => ys.definition.url + I(e)),
    (ys.patch = (e) => ({ url: ys.url(e), method: `patch` })));
var bs = (e) => ({
    action: ys.url({
        [e?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `PATCH`,
            ...(e?.query ?? e?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
});
((bs.patch = (e) => ({
    action: ys.url({
        [e?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `PATCH`,
            ...(e?.query ?? e?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
})),
    (ys.form = bs),
    Object.assign(Y, Y),
    Object.assign(ys, ys));
var xs = { class: `flex items-center gap-2 px-1 py-1.5 text-left text-sm` },
    Ss = j({
        __name: `UserMenuContent`,
        props: { user: {} },
        setup(e) {
            let t = () => {
                w.flushAll();
            };
            return (n, r) => (
                k(),
                z(
                    m,
                    null,
                    [
                        B(
                            F($o),
                            { class: `p-0 font-normal` },
                            {
                                default: g(() => [
                                    H(`div`, xs, [
                                        B(
                                            ds,
                                            { user: e.user, 'show-email': !0 },
                                            null,
                                            8,
                                            [`user`],
                                        ),
                                    ]),
                                ]),
                                _: 1,
                            },
                        ),
                        B(F(es)),
                        B(F(Zo), null, {
                            default: g(() => [
                                B(
                                    F(Qo),
                                    { 'as-child': !0 },
                                    {
                                        default: g(() => [
                                            B(
                                                F(oe),
                                                {
                                                    class: `block w-full cursor-pointer`,
                                                    href: F(Y)(),
                                                    prefetch: ``,
                                                },
                                                {
                                                    default: g(() => [
                                                        B(F(Va), {
                                                            class: `mr-2 h-4 w-4`,
                                                        }),
                                                        (r[0] ||= se(
                                                            ` Settings `,
                                                            -1,
                                                        )),
                                                    ]),
                                                    _: 1,
                                                },
                                                8,
                                                [`href`],
                                            ),
                                        ]),
                                        _: 1,
                                    },
                                ),
                            ]),
                            _: 1,
                        }),
                        B(F(es)),
                        B(
                            F(Qo),
                            { 'as-child': !0 },
                            {
                                default: g(() => [
                                    B(
                                        F(oe),
                                        {
                                            class: `block w-full cursor-pointer`,
                                            href: F(ms)(),
                                            onClick: t,
                                            as: `button`,
                                            'data-test': `logout-button`,
                                        },
                                        {
                                            default: g(() => [
                                                B(F(La), {
                                                    class: `mr-2 h-4 w-4`,
                                                }),
                                                (r[1] ||= se(` Log out `, -1)),
                                            ]),
                                            _: 1,
                                        },
                                        8,
                                        [`href`],
                                    ),
                                ]),
                                _: 1,
                            },
                        ),
                    ],
                    64,
                )
            );
        },
    }),
    Cs = j({
        __name: `NavUser`,
        setup(e) {
            let t = ce(),
                n = L(() => t.props.auth.user),
                { isMobile: r, state: i } = _o();
            return (e, t) => (
                k(),
                N(F(Oo), null, {
                    default: g(() => [
                        B(F(Po), null, {
                            default: g(() => [
                                B(F(Yo), null, {
                                    default: g(() => [
                                        B(
                                            F(ts),
                                            { 'as-child': `` },
                                            {
                                                default: g(() => [
                                                    B(
                                                        F(No),
                                                        {
                                                            size: `lg`,
                                                            class: `data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground`,
                                                            'data-test': `sidebar-menu-button`,
                                                        },
                                                        {
                                                            default: g(() => [
                                                                B(
                                                                    ds,
                                                                    {
                                                                        user: n.value,
                                                                    },
                                                                    null,
                                                                    8,
                                                                    [`user`],
                                                                ),
                                                                B(F(Aa), {
                                                                    class: `ml-auto size-4`,
                                                                }),
                                                            ]),
                                                            _: 1,
                                                        },
                                                    ),
                                                ]),
                                                _: 1,
                                            },
                                        ),
                                        B(
                                            F(Xo),
                                            {
                                                class: `w-(--reka-dropdown-menu-trigger-width) min-w-56 rounded-lg`,
                                                side: F(r)
                                                    ? `bottom`
                                                    : F(i) === `collapsed`
                                                      ? `left`
                                                      : `bottom`,
                                                align: `end`,
                                                'side-offset': 4,
                                            },
                                            {
                                                default: g(() => [
                                                    B(
                                                        Ss,
                                                        { user: n.value },
                                                        null,
                                                        8,
                                                        [`user`],
                                                    ),
                                                ]),
                                                _: 1,
                                            },
                                            8,
                                            [`side`],
                                        ),
                                    ]),
                                    _: 1,
                                }),
                            ]),
                            _: 1,
                        }),
                    ]),
                    _: 1,
                })
            );
        },
    }),
    X = (e) => ({ url: X.url(e), method: `get` });
((X.definition = { methods: [`get`, `head`], url: `/deployments` }),
    (X.url = (e) => X.definition.url + I(e)),
    (X.get = (e) => ({ url: X.url(e), method: `get` })),
    (X.head = (e) => ({ url: X.url(e), method: `head` })));
var ws = (e) => ({ action: X.url(e), method: `get` });
((ws.get = (e) => ({ action: X.url(e), method: `get` })),
    (ws.head = (e) => ({
        action: X.url({
            [e?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(e?.query ?? e?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (X.form = ws));
var Ts = (e) => ({ url: Ts.url(e), method: `get` });
((Ts.definition = { methods: [`get`, `head`], url: `/deployments/create` }),
    (Ts.url = (e) => Ts.definition.url + I(e)),
    (Ts.get = (e) => ({ url: Ts.url(e), method: `get` })),
    (Ts.head = (e) => ({ url: Ts.url(e), method: `head` })));
var Es = (e) => ({ action: Ts.url(e), method: `get` });
((Es.get = (e) => ({ action: Ts.url(e), method: `get` })),
    (Es.head = (e) => ({
        action: Ts.url({
            [e?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(e?.query ?? e?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (Ts.form = Es));
var Ds = (e) => ({ url: Ds.url(e), method: `post` });
((Ds.definition = { methods: [`post`], url: `/deployments` }),
    (Ds.url = (e) => Ds.definition.url + I(e)),
    (Ds.post = (e) => ({ url: Ds.url(e), method: `post` })));
var Os = (e) => ({ action: Ds.url(e), method: `post` });
((Os.post = (e) => ({ action: Ds.url(e), method: `post` })), (Ds.form = Os));
var Z = (e, t) => ({ url: Z.url(e, t), method: `get` });
((Z.definition = {
    methods: [`get`, `head`],
    url: `/deployments/{deployment}`,
}),
    (Z.url = (e, t) => {
        ((typeof e == `string` || typeof e == `number`) &&
            (e = { deployment: e }),
            Array.isArray(e) && (e = { deployment: e[0] }),
            (e = ve(e)));
        let n = { deployment: e.deployment };
        return (
            Z.definition.url
                .replace(`{deployment}`, n.deployment.toString())
                .replace(/\/+$/, ``) + I(t)
        );
    }),
    (Z.get = (e, t) => ({ url: Z.url(e, t), method: `get` })),
    (Z.head = (e, t) => ({ url: Z.url(e, t), method: `head` })));
var ks = (e, t) => ({ action: Z.url(e, t), method: `get` });
((ks.get = (e, t) => ({ action: Z.url(e, t), method: `get` })),
    (ks.head = (e, t) => ({
        action: Z.url(e, {
            [t?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(t?.query ?? t?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (Z.form = ks));
var As = (e, t) => ({ url: As.url(e, t), method: `get` });
((As.definition = {
    methods: [`get`, `head`],
    url: `/deployments/{deployment}/edit`,
}),
    (As.url = (e, t) => {
        ((typeof e == `string` || typeof e == `number`) &&
            (e = { deployment: e }),
            Array.isArray(e) && (e = { deployment: e[0] }),
            (e = ve(e)));
        let n = { deployment: e.deployment };
        return (
            As.definition.url
                .replace(`{deployment}`, n.deployment.toString())
                .replace(/\/+$/, ``) + I(t)
        );
    }),
    (As.get = (e, t) => ({ url: As.url(e, t), method: `get` })),
    (As.head = (e, t) => ({ url: As.url(e, t), method: `head` })));
var js = (e, t) => ({ action: As.url(e, t), method: `get` });
((js.get = (e, t) => ({ action: As.url(e, t), method: `get` })),
    (js.head = (e, t) => ({
        action: As.url(e, {
            [t?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(t?.query ?? t?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (As.form = js));
var Ms = (e, t) => ({ url: Ms.url(e, t), method: `put` });
((Ms.definition = {
    methods: [`put`, `patch`],
    url: `/deployments/{deployment}`,
}),
    (Ms.url = (e, t) => {
        ((typeof e == `string` || typeof e == `number`) &&
            (e = { deployment: e }),
            Array.isArray(e) && (e = { deployment: e[0] }),
            (e = ve(e)));
        let n = { deployment: e.deployment };
        return (
            Ms.definition.url
                .replace(`{deployment}`, n.deployment.toString())
                .replace(/\/+$/, ``) + I(t)
        );
    }),
    (Ms.put = (e, t) => ({ url: Ms.url(e, t), method: `put` })),
    (Ms.patch = (e, t) => ({ url: Ms.url(e, t), method: `patch` })));
var Ns = (e, t) => ({
    action: Ms.url(e, {
        [t?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `PUT`,
            ...(t?.query ?? t?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
});
((Ns.put = (e, t) => ({
    action: Ms.url(e, {
        [t?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `PUT`,
            ...(t?.query ?? t?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
})),
    (Ns.patch = (e, t) => ({
        action: Ms.url(e, {
            [t?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `PATCH`,
                ...(t?.query ?? t?.mergeQuery ?? {}),
            },
        }),
        method: `post`,
    })),
    (Ms.form = Ns));
var Ps = (e, t) => ({ url: Ps.url(e, t), method: `delete` });
((Ps.definition = { methods: [`delete`], url: `/deployments/{deployment}` }),
    (Ps.url = (e, t) => {
        ((typeof e == `string` || typeof e == `number`) &&
            (e = { deployment: e }),
            Array.isArray(e) && (e = { deployment: e[0] }),
            (e = ve(e)));
        let n = { deployment: e.deployment };
        return (
            Ps.definition.url
                .replace(`{deployment}`, n.deployment.toString())
                .replace(/\/+$/, ``) + I(t)
        );
    }),
    (Ps.delete = (e, t) => ({ url: Ps.url(e, t), method: `delete` })));
var Fs = (e, t) => ({
    action: Ps.url(e, {
        [t?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `DELETE`,
            ...(t?.query ?? t?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
});
((Fs.delete = (e, t) => ({
    action: Ps.url(e, {
        [t?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `DELETE`,
            ...(t?.query ?? t?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
})),
    (Ps.form = Fs));
var Is = (e, t) => ({ url: Is.url(e, t), method: `patch` });
((Is.definition = {
    methods: [`patch`],
    url: `/deployments/{deployment}/active`,
}),
    (Is.url = (e, t) => {
        ((typeof e == `string` || typeof e == `number`) &&
            (e = { deployment: e }),
            Array.isArray(e) && (e = { deployment: e[0] }),
            (e = ve(e)));
        let n = { deployment: e.deployment };
        return (
            Is.definition.url
                .replace(`{deployment}`, n.deployment.toString())
                .replace(/\/+$/, ``) + I(t)
        );
    }),
    (Is.patch = (e, t) => ({ url: Is.url(e, t), method: `patch` })));
var Ls = (e, t) => ({
    action: Is.url(e, {
        [t?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `PATCH`,
            ...(t?.query ?? t?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
});
((Ls.patch = (e, t) => ({
    action: Is.url(e, {
        [t?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `PATCH`,
            ...(t?.query ?? t?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
})),
    (Is.form = Ls),
    Object.assign(X, X),
    Object.assign(Ts, Ts),
    Object.assign(Ds, Ds),
    Object.assign(Z, Z),
    Object.assign(As, As),
    Object.assign(Ms, Ms),
    Object.assign(Ps, Ps),
    Object.assign(Is, Is));
var Q = (e) => ({ url: Q.url(e), method: `get` });
((Q.definition = { methods: [`get`, `head`], url: `/staff` }),
    (Q.url = (e) => Q.definition.url + I(e)),
    (Q.get = (e) => ({ url: Q.url(e), method: `get` })),
    (Q.head = (e) => ({ url: Q.url(e), method: `head` })));
var Rs = (e) => ({ action: Q.url(e), method: `get` });
((Rs.get = (e) => ({ action: Q.url(e), method: `get` })),
    (Rs.head = (e) => ({
        action: Q.url({
            [e?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(e?.query ?? e?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (Q.form = Rs));
var zs = (e) => ({ url: zs.url(e), method: `get` });
((zs.definition = { methods: [`get`, `head`], url: `/staff/create` }),
    (zs.url = (e) => zs.definition.url + I(e)),
    (zs.get = (e) => ({ url: zs.url(e), method: `get` })),
    (zs.head = (e) => ({ url: zs.url(e), method: `head` })));
var Bs = (e) => ({ action: zs.url(e), method: `get` });
((Bs.get = (e) => ({ action: zs.url(e), method: `get` })),
    (Bs.head = (e) => ({
        action: zs.url({
            [e?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(e?.query ?? e?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (zs.form = Bs));
var Vs = (e) => ({ url: Vs.url(e), method: `post` });
((Vs.definition = { methods: [`post`], url: `/staff` }),
    (Vs.url = (e) => Vs.definition.url + I(e)),
    (Vs.post = (e) => ({ url: Vs.url(e), method: `post` })));
var Hs = (e) => ({ action: Vs.url(e), method: `post` });
((Hs.post = (e) => ({ action: Vs.url(e), method: `post` })), (Vs.form = Hs));
var Us = (e, t) => ({ url: Us.url(e, t), method: `get` });
((Us.definition = { methods: [`get`, `head`], url: `/staff/{user}/edit` }),
    (Us.url = (e, t) => {
        ((typeof e == `string` || typeof e == `number`) && (e = { user: e }),
            typeof e == `object` &&
                !Array.isArray(e) &&
                `id` in e &&
                (e = { user: e.id }),
            Array.isArray(e) && (e = { user: e[0] }),
            (e = ve(e)));
        let n = { user: typeof e.user == `object` ? e.user.id : e.user };
        return (
            Us.definition.url
                .replace(`{user}`, n.user.toString())
                .replace(/\/+$/, ``) + I(t)
        );
    }),
    (Us.get = (e, t) => ({ url: Us.url(e, t), method: `get` })),
    (Us.head = (e, t) => ({ url: Us.url(e, t), method: `head` })));
var Ws = (e, t) => ({ action: Us.url(e, t), method: `get` });
((Ws.get = (e, t) => ({ action: Us.url(e, t), method: `get` })),
    (Ws.head = (e, t) => ({
        action: Us.url(e, {
            [t?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(t?.query ?? t?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (Us.form = Ws));
var Gs = (e, t) => ({ url: Gs.url(e, t), method: `put` });
((Gs.definition = { methods: [`put`, `patch`], url: `/staff/{user}` }),
    (Gs.url = (e, t) => {
        ((typeof e == `string` || typeof e == `number`) && (e = { user: e }),
            typeof e == `object` &&
                !Array.isArray(e) &&
                `id` in e &&
                (e = { user: e.id }),
            Array.isArray(e) && (e = { user: e[0] }),
            (e = ve(e)));
        let n = { user: typeof e.user == `object` ? e.user.id : e.user };
        return (
            Gs.definition.url
                .replace(`{user}`, n.user.toString())
                .replace(/\/+$/, ``) + I(t)
        );
    }),
    (Gs.put = (e, t) => ({ url: Gs.url(e, t), method: `put` })),
    (Gs.patch = (e, t) => ({ url: Gs.url(e, t), method: `patch` })));
var Ks = (e, t) => ({
    action: Gs.url(e, {
        [t?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `PUT`,
            ...(t?.query ?? t?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
});
((Ks.put = (e, t) => ({
    action: Gs.url(e, {
        [t?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `PUT`,
            ...(t?.query ?? t?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
})),
    (Ks.patch = (e, t) => ({
        action: Gs.url(e, {
            [t?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `PATCH`,
                ...(t?.query ?? t?.mergeQuery ?? {}),
            },
        }),
        method: `post`,
    })),
    (Gs.form = Ks));
var qs = (e, t) => ({ url: qs.url(e, t), method: `delete` });
((qs.definition = { methods: [`delete`], url: `/staff/{user}` }),
    (qs.url = (e, t) => {
        ((typeof e == `string` || typeof e == `number`) && (e = { user: e }),
            typeof e == `object` &&
                !Array.isArray(e) &&
                `id` in e &&
                (e = { user: e.id }),
            Array.isArray(e) && (e = { user: e[0] }),
            (e = ve(e)));
        let n = { user: typeof e.user == `object` ? e.user.id : e.user };
        return (
            qs.definition.url
                .replace(`{user}`, n.user.toString())
                .replace(/\/+$/, ``) + I(t)
        );
    }),
    (qs.delete = (e, t) => ({ url: qs.url(e, t), method: `delete` })));
var Js = (e, t) => ({
    action: qs.url(e, {
        [t?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `DELETE`,
            ...(t?.query ?? t?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
});
((Js.delete = (e, t) => ({
    action: qs.url(e, {
        [t?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `DELETE`,
            ...(t?.query ?? t?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
})),
    (qs.form = Js));
var Ys = (e, t) => ({ url: Ys.url(e, t), method: `put` });
((Ys.definition = { methods: [`put`], url: `/staff/{user}/password` }),
    (Ys.url = (e, t) => {
        ((typeof e == `string` || typeof e == `number`) && (e = { user: e }),
            typeof e == `object` &&
                !Array.isArray(e) &&
                `id` in e &&
                (e = { user: e.id }),
            Array.isArray(e) && (e = { user: e[0] }),
            (e = ve(e)));
        let n = { user: typeof e.user == `object` ? e.user.id : e.user };
        return (
            Ys.definition.url
                .replace(`{user}`, n.user.toString())
                .replace(/\/+$/, ``) + I(t)
        );
    }),
    (Ys.put = (e, t) => ({ url: Ys.url(e, t), method: `put` })));
var Xs = (e, t) => ({
    action: Ys.url(e, {
        [t?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `PUT`,
            ...(t?.query ?? t?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
});
((Xs.put = (e, t) => ({
    action: Ys.url(e, {
        [t?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `PUT`,
            ...(t?.query ?? t?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
})),
    (Ys.form = Xs),
    Object.assign(Q, Q),
    Object.assign(zs, zs),
    Object.assign(Vs, Vs),
    Object.assign(Us, Us),
    Object.assign(Gs, Gs),
    Object.assign(qs, qs),
    Object.assign(Ys, Ys));
var Zs = j({
        __name: `AppSidebar`,
        setup(e) {
            let t = [
                { title: `Home`, href: J(), icon: Pa },
                { title: `Deployments`, href: X(), icon: Ia },
                { title: `Staff`, href: Q(), icon: Ua },
            ];
            return (e, n) => (
                k(),
                z(
                    m,
                    null,
                    [
                        B(
                            F(So),
                            { collapsible: `icon`, variant: `inset` },
                            {
                                default: g(() => [
                                    B(F(Eo), null, {
                                        default: g(() => [
                                            B(F(Oo), null, {
                                                default: g(() => [
                                                    B(F(Po), null, {
                                                        default: g(() => [
                                                            B(
                                                                F(No),
                                                                {
                                                                    size: `lg`,
                                                                    'as-child': ``,
                                                                },
                                                                {
                                                                    default: g(
                                                                        () => [
                                                                            B(
                                                                                F(
                                                                                    oe,
                                                                                ),
                                                                                {
                                                                                    href: F(
                                                                                        J,
                                                                                    )(),
                                                                                    'aria-label': `PayHub Central home`,
                                                                                },
                                                                                {
                                                                                    default:
                                                                                        g(
                                                                                            () => [
                                                                                                B(
                                                                                                    Wo,
                                                                                                ),
                                                                                            ],
                                                                                        ),
                                                                                    _: 1,
                                                                                },
                                                                                8,
                                                                                [
                                                                                    `href`,
                                                                                ],
                                                                            ),
                                                                        ],
                                                                    ),
                                                                    _: 1,
                                                                },
                                                            ),
                                                        ]),
                                                        _: 1,
                                                    }),
                                                ]),
                                                _: 1,
                                            }),
                                        ]),
                                        _: 1,
                                    }),
                                    B(F(Co), null, {
                                        default: g(() => [B(Jo, { items: t })]),
                                        _: 1,
                                    }),
                                    B(F(wo), null, {
                                        default: g(() => [B(Cs)]),
                                        _: 1,
                                    }),
                                ]),
                                _: 1,
                            },
                        ),
                        U(e.$slots, `default`),
                    ],
                    64,
                )
            );
        },
    }),
    Qs = j({
        __name: `Breadcrumb`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                k(),
                z(
                    `nav`,
                    {
                        'aria-label': `breadcrumb`,
                        'data-slot': `breadcrumb`,
                        class: E(t.class),
                    },
                    [U(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    $s = j({
        __name: `BreadcrumbItem`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                k(),
                z(
                    `li`,
                    {
                        'data-slot': `breadcrumb-item`,
                        class: E(
                            F(R)(`inline-flex items-center gap-1.5`, t.class),
                        ),
                    },
                    [U(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    ec = j({
        __name: `BreadcrumbLink`,
        props: {
            asChild: { type: Boolean },
            as: { default: `a` },
            class: { type: [Boolean, null, String, Object, Array] },
        },
        setup(e) {
            let t = e;
            return (n, r) => (
                k(),
                N(
                    F(V),
                    {
                        'data-slot': `breadcrumb-link`,
                        as: e.as,
                        'as-child': e.asChild,
                        class: E(
                            F(R)(
                                `hover:text-foreground transition-colors`,
                                t.class,
                            ),
                        ),
                    },
                    { default: g(() => [U(n.$slots, `default`)]), _: 3 },
                    8,
                    [`as`, `as-child`, `class`],
                )
            );
        },
    }),
    tc = j({
        __name: `BreadcrumbList`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                k(),
                z(
                    `ol`,
                    {
                        'data-slot': `breadcrumb-list`,
                        class: E(
                            F(R)(
                                `text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5`,
                                t.class,
                            ),
                        ),
                    },
                    [U(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    nc = j({
        __name: `BreadcrumbPage`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                k(),
                z(
                    `span`,
                    {
                        'data-slot': `breadcrumb-page`,
                        role: `link`,
                        'aria-disabled': `true`,
                        'aria-current': `page`,
                        class: E(F(R)(`text-foreground font-normal`, t.class)),
                    },
                    [U(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    rc = j({
        __name: `BreadcrumbSeparator`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                k(),
                z(
                    `li`,
                    {
                        'data-slot': `breadcrumb-separator`,
                        role: `presentation`,
                        'aria-hidden': `true`,
                        class: E(F(R)(`[&>svg]:size-3.5`, t.class)),
                    },
                    [U(e.$slots, `default`, {}, () => [B(F(ka))])],
                    2,
                )
            );
        },
    }),
    ic = j({
        __name: `Breadcrumbs`,
        props: { breadcrumbs: {} },
        setup(e) {
            return (t, n) => (
                k(),
                N(F(Qs), null, {
                    default: g(() => [
                        B(F(tc), null, {
                            default: g(() => [
                                (k(!0),
                                z(
                                    m,
                                    null,
                                    pe(
                                        e.breadcrumbs,
                                        (t, n) => (
                                            k(),
                                            z(
                                                m,
                                                { key: n },
                                                [
                                                    B(
                                                        F($s),
                                                        null,
                                                        {
                                                            default: g(() => [
                                                                n ===
                                                                e.breadcrumbs
                                                                    .length -
                                                                    1
                                                                    ? (k(),
                                                                      N(
                                                                          F(nc),
                                                                          {
                                                                              key: 0,
                                                                          },
                                                                          {
                                                                              default:
                                                                                  g(
                                                                                      () => [
                                                                                          se(
                                                                                              O(
                                                                                                  t.title,
                                                                                              ),
                                                                                              1,
                                                                                          ),
                                                                                      ],
                                                                                  ),
                                                                              _: 2,
                                                                          },
                                                                          1024,
                                                                      ))
                                                                    : (k(),
                                                                      N(
                                                                          F(ec),
                                                                          {
                                                                              key: 1,
                                                                              'as-child': ``,
                                                                          },
                                                                          {
                                                                              default:
                                                                                  g(
                                                                                      () => [
                                                                                          B(
                                                                                              F(
                                                                                                  oe,
                                                                                              ),
                                                                                              {
                                                                                                  href: t.href,
                                                                                              },
                                                                                              {
                                                                                                  default:
                                                                                                      g(
                                                                                                          () => [
                                                                                                              se(
                                                                                                                  O(
                                                                                                                      t.title,
                                                                                                                  ),
                                                                                                                  1,
                                                                                                              ),
                                                                                                          ],
                                                                                                      ),
                                                                                                  _: 2,
                                                                                              },
                                                                                              1032,
                                                                                              [
                                                                                                  `href`,
                                                                                              ],
                                                                                          ),
                                                                                      ],
                                                                                  ),
                                                                              _: 2,
                                                                          },
                                                                          1024,
                                                                      )),
                                                            ]),
                                                            _: 2,
                                                        },
                                                        1024,
                                                    ),
                                                    n ===
                                                    e.breadcrumbs.length - 1
                                                        ? D(``, !0)
                                                        : (k(),
                                                          N(F(rc), { key: 0 })),
                                                ],
                                                64,
                                            )
                                        ),
                                    ),
                                    128,
                                )),
                            ]),
                            _: 1,
                        }),
                    ]),
                    _: 1,
                })
            );
        },
    }),
    ac = {
        class: `flex h-16 shrink-0 items-center gap-2 border-b border-sidebar-border/70 px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4`,
    },
    oc = { class: `flex items-center gap-2` },
    sc = j({
        __name: `AppSidebarHeader`,
        props: { breadcrumbs: { default: () => [] } },
        setup(e) {
            return (t, n) => (
                k(),
                z(`header`, ac, [
                    H(`div`, oc, [
                        B(F(zo), { class: `-ml-1` }),
                        e.breadcrumbs && e.breadcrumbs.length > 0
                            ? (k(),
                              N(
                                  ic,
                                  { key: 0, breadcrumbs: e.breadcrumbs },
                                  null,
                                  8,
                                  [`breadcrumbs`],
                              ))
                            : D(``, !0),
                    ]),
                ])
            );
        },
    }),
    cc = {
        key: 0,
        role: `status`,
        class: `flex items-start gap-2 border-b border-warning-border bg-warning-soft px-4 py-2 text-sm font-medium text-warning md:px-6`,
    },
    lc = j({
        __name: `SchedulerBanner`,
        setup(e) {
            let t = ce(),
                n = L(() => t.props.scheduler?.stale === !0);
            return (e, t) =>
                n.value
                    ? (k(),
                      z(`div`, cc, [
                          B(F(Ha), {
                              class: `mt-0.5 size-4 shrink-0`,
                              'aria-hidden': `true`,
                          }),
                          (t[0] ||= H(
                              `p`,
                              null,
                              ` Numbers are not updating: scheduled pulls have stopped. Ask the developer to check the server cron. `,
                              -1,
                          )),
                      ]))
                    : D(``, !0);
        },
    }),
    uc = 1,
    dc = new (class {
        subscribers;
        toasts;
        dismissedToasts;
        constructor() {
            ((this.subscribers = []),
                (this.toasts = []),
                (this.dismissedToasts = new Set()));
        }
        subscribe = (e) => (
            this.subscribers.push(e),
            () => {
                let t = this.subscribers.indexOf(e);
                this.subscribers.splice(t, 1);
            }
        );
        publish = (e) => {
            this.subscribers.forEach((t) => t(e));
        };
        addToast = (e) => {
            (this.publish(e), (this.toasts = [...this.toasts, e]));
        };
        create = (e) => {
            let { message: t, ...n } = e,
                r =
                    typeof e.id == `number` || (e.id && e.id?.length > 0)
                        ? e.id
                        : uc++,
                i = this.toasts.find((e) => e.id === r),
                a = e.dismissible === void 0 || e.dismissible;
            return (
                this.dismissedToasts.has(r) && this.dismissedToasts.delete(r),
                i
                    ? (this.toasts = this.toasts.map((n) =>
                          n.id === r
                              ? (this.publish({ ...n, ...e, id: r, title: t }),
                                { ...n, ...e, id: r, dismissible: a, title: t })
                              : n,
                      ))
                    : this.addToast({ title: t, ...n, dismissible: a, id: r }),
                r
            );
        };
        dismiss = (e) => (
            e
                ? (this.dismissedToasts.add(e),
                  requestAnimationFrame(() =>
                      this.subscribers.forEach((t) =>
                          t({ id: e, dismiss: !0 }),
                      ),
                  ))
                : this.toasts.forEach((e) => {
                      this.subscribers.forEach((t) =>
                          t({ id: e.id, dismiss: !0 }),
                      );
                  }),
            e
        );
        message = (e, t) => this.create({ ...t, message: e, type: `default` });
        error = (e, t) => this.create({ ...t, type: `error`, message: e });
        success = (e, t) => this.create({ ...t, type: `success`, message: e });
        info = (e, t) => this.create({ ...t, type: `info`, message: e });
        warning = (e, t) => this.create({ ...t, type: `warning`, message: e });
        loading = (e, t) => this.create({ ...t, type: `loading`, message: e });
        promise = (e, t) => {
            if (!t) return;
            let n;
            t.loading !== void 0 &&
                (n = this.create({
                    ...t,
                    promise: e,
                    type: `loading`,
                    message: t.loading,
                    description:
                        typeof t.description == `function`
                            ? void 0
                            : t.description,
                }));
            let r = Promise.resolve(e instanceof Function ? e() : e),
                i = n !== void 0,
                a,
                o = r
                    .then(async (e) => {
                        if (((a = [`resolve`, e]), h(e)))
                            ((i = !1),
                                this.create({
                                    id: n,
                                    type: `default`,
                                    message: e,
                                }));
                        else if (pc(e) && !e.ok) {
                            i = !1;
                            let r =
                                    typeof t.error == `function`
                                        ? await t.error(
                                              `HTTP error! status: ${e.status}`,
                                          )
                                        : t.error,
                                a =
                                    typeof t.description == `function`
                                        ? await t.description(
                                              `HTTP error! status: ${e.status}`,
                                          )
                                        : t.description,
                                o =
                                    typeof r == `object` && !h(r)
                                        ? r
                                        : { message: r || ``, id: n || `` };
                            this.create({
                                id: n,
                                type: `error`,
                                description: a,
                                ...o,
                            });
                        } else if (e instanceof Error) {
                            i = !1;
                            let r =
                                    typeof t.error == `function`
                                        ? await t.error(e)
                                        : t.error,
                                a =
                                    typeof t.description == `function`
                                        ? await t.description(e)
                                        : t.description,
                                o =
                                    typeof r == `object` && !h(r)
                                        ? r
                                        : { message: r || ``, id: n || `` };
                            this.create({
                                id: n,
                                type: `error`,
                                description: a,
                                ...o,
                            });
                        } else if (t.success !== void 0) {
                            i = !1;
                            let r =
                                    typeof t.success == `function`
                                        ? await t.success(e)
                                        : t.success,
                                a =
                                    typeof t.description == `function`
                                        ? await t.description(e)
                                        : t.description,
                                o =
                                    typeof r == `object` && !h(r)
                                        ? r
                                        : { message: r || ``, id: n || `` };
                            this.create({
                                id: n,
                                type: `success`,
                                description: a,
                                ...o,
                            });
                        }
                    })
                    .catch(async (e) => {
                        if (((a = [`reject`, e]), t.error !== void 0)) {
                            i = !1;
                            let r =
                                    typeof t.error == `function`
                                        ? await t.error(e)
                                        : t.error,
                                a =
                                    typeof t.description == `function`
                                        ? await t.description(e)
                                        : t.description,
                                o =
                                    typeof r == `object` && !h(r)
                                        ? r
                                        : { message: r || ``, id: n || `` };
                            this.create({
                                id: n,
                                type: `error`,
                                description: a,
                                ...o,
                            });
                        }
                    })
                    .finally(() => {
                        (i && (this.dismiss(n), (n = void 0)), t.finally?.());
                    }),
                s = () =>
                    new Promise((e, t) =>
                        o
                            .then(() => (a[0] === `reject` ? t(a[1]) : e(a[1])))
                            .catch(t),
                    );
            return typeof n != `string` && typeof n != `number`
                ? { unwrap: s }
                : Object.assign(n, { unwrap: s });
        };
        custom = (e, t) => {
            let n = t?.id || uc++,
                r = this.toasts.find((e) => e.id === n),
                i = t?.dismissible === void 0 || t.dismissible;
            return (
                this.dismissedToasts.has(n) && this.dismissedToasts.delete(n),
                r
                    ? (this.toasts = this.toasts.map((r) =>
                          r.id === n
                              ? (this.publish({
                                    ...r,
                                    component: e,
                                    dismissible: i,
                                    id: n,
                                    ...t,
                                }),
                                {
                                    ...r,
                                    component: e,
                                    dismissible: i,
                                    id: n,
                                    ...t,
                                })
                              : r,
                      ))
                    : this.addToast({
                          component: e,
                          dismissible: i,
                          id: n,
                          ...t,
                      }),
                n
            );
        };
        getActiveToasts = () =>
            this.toasts.filter((e) => !this.dismissedToasts.has(e.id));
    })();
function fc(e, t) {
    let n = t?.id || uc++;
    return (dc.create({ message: e, id: n, type: `default`, ...t }), n);
}
var pc = (e) =>
        e &&
        typeof e == `object` &&
        `ok` in e &&
        typeof e.ok == `boolean` &&
        `status` in e &&
        typeof e.status == `number`,
    mc = Object.assign(
        fc,
        {
            success: dc.success,
            info: dc.info,
            warning: dc.warning,
            error: dc.error,
            custom: dc.custom,
            message: dc.message,
            promise: dc.promise,
            dismiss: dc.dismiss,
            loading: dc.loading,
        },
        { getHistory: () => dc.toasts, getToasts: () => dc.getActiveToasts() },
    );
function hc(e) {
    return e.label !== void 0;
}
var gc = 3,
    _c = `24px`,
    vc = `16px`,
    yc = 4e3,
    bc = 356,
    xc = 14,
    Sc = 45,
    Cc = 200;
function wc() {
    let e = M(!1);
    return (
        P(() => {
            let t = () => {
                e.value = document.hidden;
            };
            return (
                document.addEventListener(`visibilitychange`, t),
                () => window.removeEventListener(`visibilitychange`, t)
            );
        }),
        { isDocumentHidden: e }
    );
}
function Tc(...e) {
    return e.filter(Boolean).join(` `);
}
function Ec(e) {
    let [t, n] = e.split(`-`),
        r = [];
    return (t && r.push(t), n && r.push(n), r);
}
function Dc(e, t) {
    let n = {};
    return (
        [e, t].forEach((e, t) => {
            let r = t === 1,
                i = r ? `--mobile-offset` : `--offset`,
                a = r ? vc : _c;
            function o(e) {
                [`top`, `right`, `bottom`, `left`].forEach((t) => {
                    n[`${i}-${t}`] = typeof e == `number` ? `${e}px` : e;
                });
            }
            typeof e == `number` || typeof e == `string`
                ? o(e)
                : typeof e == `object`
                  ? [`top`, `right`, `bottom`, `left`].forEach((t) => {
                        e[t] === void 0
                            ? (n[`${i}-${t}`] = a)
                            : (n[`${i}-${t}`] =
                                  typeof e[t] == `number` ? `${e[t]}px` : e[t]);
                    })
                  : o(a);
        }),
        n
    );
}
var Oc = [
        `data-rich-colors`,
        `data-styled`,
        `data-mounted`,
        `data-promise`,
        `data-swiped`,
        `data-removed`,
        `data-visible`,
        `data-y-position`,
        `data-x-position`,
        `data-index`,
        `data-front`,
        `data-swiping`,
        `data-dismissible`,
        `data-type`,
        `data-invert`,
        `data-swipe-out`,
        `data-swipe-direction`,
        `data-expanded`,
        `data-testid`,
    ],
    kc = [`aria-label`, `data-disabled`, `data-close-button-position`],
    Ac = j({
        __name: `Toast`,
        props: {
            toast: {},
            toasts: {},
            index: {},
            swipeDirections: {},
            expanded: { type: Boolean },
            invert: { type: Boolean },
            heights: {},
            gap: {},
            position: {},
            closeButtonPosition: {},
            visibleToasts: {},
            expandByDefault: { type: Boolean },
            closeButton: { type: Boolean },
            interacting: { type: Boolean },
            style: {},
            cancelButtonStyle: {},
            actionButtonStyle: {},
            duration: {},
            class: {},
            unstyled: { type: Boolean },
            descriptionClass: {},
            loadingIcon: {},
            classes: {},
            icons: {},
            closeButtonAriaLabel: {},
            defaultRichColors: { type: Boolean },
        },
        emits: [`update:heights`, `update:height`, `removeToast`],
        setup(e, { emit: t }) {
            let n = e,
                r = t,
                i = M(null),
                a = M(null),
                o = M(!1),
                c = M(!1),
                l = M(!1),
                u = M(!1),
                d = M(!1),
                f = M(0),
                h = M(0),
                g = M(n.toast.duration || n.duration || yc),
                v = M(null),
                y = M(null),
                b = L(() => n.index === 0),
                x = L(() => n.index + 1 <= n.visibleToasts),
                S = L(() => n.toast.type),
                C = L(() => n.toast.dismissible !== !1),
                w = L(() => n.toast.class || ``),
                T = L(() => n.descriptionClass || ``),
                ne = L(() => {
                    let e = n.toast.position || n.position,
                        t = n.heights
                            .filter((t) => t.position === e)
                            .findIndex((e) => e.toastId === n.toast.id);
                    return t >= 0 ? t : 0;
                }),
                re = L(() => {
                    let e = n.toast.position || n.position;
                    return n.heights
                        .filter((t) => t.position === e)
                        .reduce(
                            (e, t, n) => (n >= ne.value ? e : e + t.height),
                            0,
                        );
                }),
                ie = L(() => ne.value * n.gap + re.value || 0),
                ae = L(() => n.toast.closeButton ?? n.closeButton),
                oe = L(() => n.toast.duration || n.duration || yc),
                A = M(0),
                ce = M(0),
                j = M(null),
                le = L(() => n.position.split(`-`)),
                ue = L(() => le.value[0]),
                de = L(() => le.value[1]),
                I = L(() => typeof n.toast.title != `string`),
                fe = L(() => typeof n.toast.description != `string`),
                { isDocumentHidden: R } = wc(),
                pe = L(() => S.value && S.value === `loading`);
            (p(() => {
                ((o.value = !0), (g.value = oe.value));
            }),
                P(async () => {
                    if (!o.value || !y.value) return;
                    await ee();
                    let e = y.value,
                        t = e.style.height;
                    e.style.height = `auto`;
                    let i = e.getBoundingClientRect().height;
                    ((e.style.height = t),
                        (h.value = i),
                        r(`update:height`, {
                            toastId: n.toast.id,
                            height: i,
                            position: n.toast.position || n.position,
                        }));
                }));
            function me() {
                ((c.value = !0),
                    (f.value = ie.value),
                    setTimeout(() => {
                        r(`removeToast`, n.toast);
                    }, Cc));
            }
            function B() {
                if (pe.value || !C.value) return {};
                (me(), n.toast.onDismiss?.(n.toast));
            }
            function V(e) {
                e.button !== 2 &&
                    !pe.value &&
                    C.value &&
                    ((v.value = new Date()),
                    (f.value = ie.value),
                    e.target.setPointerCapture(e.pointerId),
                    e.target.tagName !== `BUTTON` &&
                        ((l.value = !0),
                        (j.value = { x: e.clientX, y: e.clientY })));
            }
            function he() {
                if (u.value || !C.value) return;
                j.value = null;
                let e = Number(
                        y.value?.style
                            .getPropertyValue(`--swipe-amount-x`)
                            .replace(`px`, ``) || 0,
                    ),
                    t = Number(
                        y.value?.style
                            .getPropertyValue(`--swipe-amount-y`)
                            .replace(`px`, ``) || 0,
                    ),
                    r = new Date().getTime() - (v.value?.getTime() || 0),
                    o = i.value === `x` ? e : t,
                    s = Math.abs(o) / r;
                Math.abs(o) >= Sc || s > 0.11
                    ? ((f.value = ie.value),
                      n.toast.onDismiss?.(n.toast),
                      i.value === `x`
                          ? (a.value = e > 0 ? `right` : `left`)
                          : (a.value = t > 0 ? `down` : `up`),
                      me(),
                      (u.value = !0))
                    : (y.value?.style.setProperty(`--swipe-amount-x`, `0px`),
                      y.value?.style.setProperty(`--swipe-amount-y`, `0px`),
                      (d.value = !1),
                      (l.value = !1),
                      (i.value = null));
            }
            function ge(e) {
                if (
                    !j.value ||
                    !C.value ||
                    (window?.getSelection()?.toString()?.length ?? !1)
                )
                    return;
                let t = e.clientY - j.value.y,
                    r = e.clientX - j.value.x,
                    a = n.swipeDirections ?? Ec(n.position);
                !i.value &&
                    (Math.abs(r) > 1 || Math.abs(t) > 1) &&
                    (i.value = Math.abs(r) > Math.abs(t) ? `x` : `y`);
                let o = { x: 0, y: 0 },
                    s = (e) => 1 / (1.5 + Math.abs(e) / 20);
                if (i.value === `y`) {
                    if (a.includes(`top`) || a.includes(`bottom`)) {
                        if (
                            (a.includes(`top`) && t < 0) ||
                            (a.includes(`bottom`) && t > 0)
                        )
                            o.y = t;
                        else {
                            let e = t * s(t);
                            o.y = Math.abs(e) < Math.abs(t) ? e : t;
                        }
                    }
                } else if (
                    i.value === `x` &&
                    (a.includes(`left`) || a.includes(`right`))
                ) {
                    if (
                        (a.includes(`left`) && r < 0) ||
                        (a.includes(`right`) && r > 0)
                    )
                        o.x = r;
                    else {
                        let e = r * s(r);
                        o.x = Math.abs(e) < Math.abs(r) ? e : r;
                    }
                }
                ((Math.abs(o.x) > 0 || Math.abs(o.y) > 0) && (d.value = !0),
                    y.value?.style.setProperty(`--swipe-amount-x`, `${o.x}px`),
                    y.value?.style.setProperty(`--swipe-amount-y`, `${o.y}px`));
            }
            (p(() => {
                if (((o.value = !0), !y.value)) return;
                let e = y.value.getBoundingClientRect().height;
                h.value = e;
                let t = [
                    {
                        toastId: n.toast.id,
                        height: e,
                        position: n.toast.position,
                    },
                    ...n.heights,
                ];
                r(`update:heights`, t);
            }),
                te(() => {
                    y.value && r(`removeToast`, n.toast);
                }),
                P((e) => {
                    if (
                        (n.toast.promise && S.value === `loading`) ||
                        n.toast.duration === 1 / 0 ||
                        n.toast.type === `loading`
                    )
                        return;
                    let t;
                    (n.expanded || n.interacting || R.value
                        ? (() => {
                              if (ce.value < A.value) {
                                  let e = new Date().getTime() - A.value;
                                  g.value -= e;
                              }
                              ce.value = new Date().getTime();
                          })()
                        : g.value !== 1 / 0 &&
                          ((A.value = new Date().getTime()),
                          (t = setTimeout(() => {
                              (n.toast.onAutoClose?.(n.toast), me());
                          }, g.value))),
                        e(() => {
                            clearTimeout(t);
                        }));
                }),
                _(
                    () => n.toast.delete,
                    (e) => {
                        e !== void 0 &&
                            e &&
                            (me(), n.toast.onDismiss?.(n.toast));
                    },
                    { deep: !0 },
                ));
            function _e() {
                ((l.value = !1), (i.value = null), (j.value = null));
            }
            return (e, t) => (
                k(),
                z(
                    `li`,
                    {
                        tabindex: `0`,
                        ref_key: `toastRef`,
                        ref: y,
                        class: E(
                            F(Tc)(
                                n.class,
                                w.value,
                                e.classes?.toast,
                                e.toast.classes?.toast,
                                e.classes?.[S.value],
                                e.toast?.classes?.[S.value],
                            ),
                        ),
                        'data-sonner-toast': ``,
                        'data-rich-colors':
                            e.toast.richColors ?? e.defaultRichColors,
                        'data-styled': !(
                            e.toast.component ||
                            e.toast?.unstyled ||
                            e.unstyled
                        ),
                        'data-mounted': o.value,
                        'data-promise': !!e.toast.promise,
                        'data-swiped': d.value,
                        'data-removed': c.value,
                        'data-visible': x.value,
                        'data-y-position': ue.value,
                        'data-x-position': de.value,
                        'data-index': e.index,
                        'data-front': b.value,
                        'data-swiping': l.value,
                        'data-dismissible': C.value,
                        'data-type': S.value,
                        'data-invert': e.toast.invert || e.invert,
                        'data-swipe-out': u.value,
                        'data-swipe-direction': a.value,
                        'data-expanded': !!(
                            e.expanded ||
                            (e.expandByDefault && o.value)
                        ),
                        'data-testid': e.toast.testId,
                        style: xe({
                            '--index': e.index,
                            '--toasts-before': e.index,
                            '--z-index': e.toasts.length - e.index,
                            '--offset': `${c.value ? f.value : ie.value}px`,
                            '--initial-height': e.expandByDefault
                                ? `auto`
                                : `${h.value}px`,
                            ...e.style,
                            ...n.toast.style,
                        }),
                        onDragend: _e,
                        onPointerdown: V,
                        onPointerup: he,
                        onPointermove: ge,
                    },
                    [
                        ae.value && !e.toast.component && S.value !== `loading`
                            ? (k(),
                              z(
                                  `button`,
                                  {
                                      key: 0,
                                      'aria-label':
                                          e.closeButtonAriaLabel ||
                                          `Close toast`,
                                      'data-disabled': pe.value,
                                      'data-close-button': `true`,
                                      'data-close-button-position':
                                          e.closeButtonPosition,
                                      class: E(
                                          F(Tc)(
                                              e.classes?.closeButton,
                                              e.toast?.classes?.closeButton,
                                          ),
                                      ),
                                      onClick: B,
                                  },
                                  [
                                      e.icons?.close
                                          ? (k(),
                                            N(ye(e.icons?.close), { key: 0 }))
                                          : U(e.$slots, `close-icon`, {
                                                key: 1,
                                            }),
                                  ],
                                  10,
                                  kc,
                              ))
                            : D(`v-if`, !0),
                        e.toast.component
                            ? (k(),
                              N(
                                  ye(e.toast.component),
                                  s({ key: 1 }, e.toast.componentProps, {
                                      onCloseToast: B,
                                      isPaused:
                                          e.$props.expanded ||
                                          e.$props.interacting ||
                                          F(R),
                                  }),
                                  null,
                                  16,
                                  [`isPaused`],
                              ))
                            : (k(),
                              z(
                                  m,
                                  { key: 2 },
                                  [
                                      S.value !== 'default' ||
                                      e.toast.icon ||
                                      e.toast.promise
                                          ? (k(),
                                            z(
                                                `div`,
                                                {
                                                    key: 0,
                                                    'data-icon': ``,
                                                    class: E(
                                                        F(Tc)(
                                                            e.classes?.icon,
                                                            e.toast?.classes
                                                                ?.icon,
                                                        ),
                                                    ),
                                                },
                                                [
                                                    e.toast.icon
                                                        ? (k(),
                                                          N(ye(e.toast.icon), {
                                                              key: 0,
                                                          }))
                                                        : (k(),
                                                          z(
                                                              m,
                                                              { key: 1 },
                                                              [
                                                                  S.value ===
                                                                  `loading`
                                                                      ? U(
                                                                            e.$slots,
                                                                            `loading-icon`,
                                                                            {
                                                                                key: 0,
                                                                            },
                                                                        )
                                                                      : S.value ===
                                                                          `success`
                                                                        ? U(
                                                                              e.$slots,
                                                                              `success-icon`,
                                                                              {
                                                                                  key: 1,
                                                                              },
                                                                          )
                                                                        : S.value ===
                                                                            `error`
                                                                          ? U(
                                                                                e.$slots,
                                                                                `error-icon`,
                                                                                {
                                                                                    key: 2,
                                                                                },
                                                                            )
                                                                          : S.value ===
                                                                              `warning`
                                                                            ? U(
                                                                                  e.$slots,
                                                                                  `warning-icon`,
                                                                                  {
                                                                                      key: 3,
                                                                                  },
                                                                              )
                                                                            : S.value ===
                                                                                `info`
                                                                              ? U(
                                                                                    e.$slots,
                                                                                    `info-icon`,
                                                                                    {
                                                                                        key: 4,
                                                                                    },
                                                                                )
                                                                              : D(
                                                                                    `v-if`,
                                                                                    !0,
                                                                                ),
                                                              ],
                                                              64,
                                                          )),
                                                ],
                                                2,
                                            ))
                                          : D(`v-if`, !0),
                                      H(
                                          `div`,
                                          {
                                              'data-content': ``,
                                              class: E(
                                                  F(Tc)(
                                                      e.classes?.content,
                                                      e.toast?.classes?.content,
                                                  ),
                                              ),
                                          },
                                          [
                                              H(
                                                  `div`,
                                                  {
                                                      'data-title': ``,
                                                      class: E(
                                                          F(Tc)(
                                                              e.classes?.title,
                                                              e.toast.classes
                                                                  ?.title,
                                                          ),
                                                      ),
                                                  },
                                                  [
                                                      I.value
                                                          ? (k(),
                                                            N(
                                                                ye(
                                                                    e.toast
                                                                        .title,
                                                                ),
                                                                W(
                                                                    s(
                                                                        {
                                                                            key: 0,
                                                                        },
                                                                        e.toast
                                                                            .componentProps,
                                                                    ),
                                                                ),
                                                                null,
                                                                16,
                                                            ))
                                                          : (k(),
                                                            z(
                                                                m,
                                                                { key: 1 },
                                                                [
                                                                    se(
                                                                        O(
                                                                            e
                                                                                .toast
                                                                                .title,
                                                                        ),
                                                                        1,
                                                                    ),
                                                                ],
                                                                64,
                                                            )),
                                                  ],
                                                  2,
                                              ),
                                              e.toast.description
                                                  ? (k(),
                                                    z(
                                                        `div`,
                                                        {
                                                            key: 0,
                                                            'data-description': ``,
                                                            class: E(
                                                                F(Tc)(
                                                                    e.descriptionClass,
                                                                    T.value,
                                                                    e.classes
                                                                        ?.description,
                                                                    e.toast
                                                                        .classes
                                                                        ?.description,
                                                                ),
                                                            ),
                                                        },
                                                        [
                                                            fe.value
                                                                ? (k(),
                                                                  N(
                                                                      ye(
                                                                          e
                                                                              .toast
                                                                              .description,
                                                                      ),
                                                                      W(
                                                                          s(
                                                                              {
                                                                                  key: 0,
                                                                              },
                                                                              e
                                                                                  .toast
                                                                                  .componentProps,
                                                                          ),
                                                                      ),
                                                                      null,
                                                                      16,
                                                                  ))
                                                                : (k(),
                                                                  z(
                                                                      m,
                                                                      {
                                                                          key: 1,
                                                                      },
                                                                      [
                                                                          se(
                                                                              O(
                                                                                  e
                                                                                      .toast
                                                                                      .description,
                                                                              ),
                                                                              1,
                                                                          ),
                                                                      ],
                                                                      64,
                                                                  )),
                                                        ],
                                                        2,
                                                    ))
                                                  : D(`v-if`, !0),
                                          ],
                                          2,
                                      ),
                                      e.toast.cancel
                                          ? (k(),
                                            z(
                                                `button`,
                                                {
                                                    key: 1,
                                                    style: xe(
                                                        e.toast
                                                            .cancelButtonStyle ||
                                                            e.cancelButtonStyle,
                                                    ),
                                                    class: E(
                                                        F(Tc)(
                                                            e.classes
                                                                ?.cancelButton,
                                                            e.toast.classes
                                                                ?.cancelButton,
                                                        ),
                                                    ),
                                                    'data-button': ``,
                                                    'data-cancel': ``,
                                                    onClick: (t[0] ||= (t) => {
                                                        F(hc)(e.toast.cancel) &&
                                                            C.value &&
                                                            (e.toast.cancel.onClick?.(
                                                                t,
                                                            ),
                                                            me());
                                                    }),
                                                },
                                                O(
                                                    F(hc)(e.toast.cancel)
                                                        ? e.toast.cancel?.label
                                                        : e.toast.cancel,
                                                ),
                                                7,
                                            ))
                                          : D(`v-if`, !0),
                                      e.toast.action
                                          ? (k(),
                                            z(
                                                `button`,
                                                {
                                                    key: 2,
                                                    style: xe(
                                                        e.toast
                                                            .actionButtonStyle ||
                                                            e.actionButtonStyle,
                                                    ),
                                                    class: E(
                                                        F(Tc)(
                                                            e.classes
                                                                ?.actionButton,
                                                            e.toast.classes
                                                                ?.actionButton,
                                                        ),
                                                    ),
                                                    'data-button': ``,
                                                    'data-action': ``,
                                                    onClick: (t[1] ||= (t) => {
                                                        F(hc)(e.toast.action) &&
                                                            (e.toast.action.onClick?.(
                                                                t,
                                                            ),
                                                            !t.defaultPrevented &&
                                                                me());
                                                    }),
                                                },
                                                O(
                                                    F(hc)(e.toast.action)
                                                        ? e.toast.action?.label
                                                        : e.toast.action,
                                                ),
                                                7,
                                            ))
                                          : D(`v-if`, !0),
                                  ],
                                  64,
                              )),
                    ],
                    46,
                    Oc,
                )
            );
        },
    }),
    jc = (e, t) => {
        let n = e.__vccOpts || e;
        for (let [e, r] of t) n[e] = r;
        return n;
    },
    Mc = {},
    Nc = {
        xmlns: `http://www.w3.org/2000/svg`,
        width: `12`,
        height: `12`,
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        'stoke-width': `1.5`,
        'stroke-linecap': `round`,
        'stroke-linejoin': `round`,
    };
function Pc(e, t) {
    return (
        k(),
        z(
            `svg`,
            Nc,
            (t[0] ||= [
                H(`line`, { x1: `18`, y1: `6`, x2: `6`, y2: `18` }, null, -1),
                H(`line`, { x1: `6`, y1: `6`, x2: `18`, y2: `18` }, null, -1),
            ]),
        )
    );
}
var Fc = jc(Mc, [[`render`, Pc]]),
    Ic = [`data-visible`],
    Lc = { class: `sonner-spinner` },
    Rc = j({
        __name: `Loader`,
        props: { visible: { type: Boolean } },
        setup(e) {
            let t = Array(12).fill(0);
            return (e, n) => (
                k(),
                z(
                    `div`,
                    {
                        class: `sonner-loading-wrapper`,
                        'data-visible': e.visible,
                    },
                    [
                        H(`div`, Lc, [
                            (k(!0),
                            z(
                                m,
                                null,
                                pe(
                                    F(t),
                                    (e) => (
                                        k(),
                                        z(`div`, {
                                            key: `spinner-bar-${e}`,
                                            class: `sonner-loading-bar`,
                                        })
                                    ),
                                ),
                                128,
                            )),
                        ]),
                    ],
                    8,
                    Ic,
                )
            );
        },
    }),
    zc = {},
    Bc = {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 20 20`,
        fill: `currentColor`,
        height: `20`,
        width: `20`,
    };
function Vc(e, t) {
    return (
        k(),
        z(
            `svg`,
            Bc,
            (t[0] ||= [
                H(
                    `path`,
                    {
                        'fill-rule': `evenodd`,
                        d: `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`,
                        'clip-rule': `evenodd`,
                    },
                    null,
                    -1,
                ),
            ]),
        )
    );
}
var Hc = jc(zc, [[`render`, Vc]]),
    Uc = {},
    Wc = {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 20 20`,
        fill: `currentColor`,
        height: `20`,
        width: `20`,
    };
function Gc(e, t) {
    return (
        k(),
        z(
            `svg`,
            Wc,
            (t[0] ||= [
                H(
                    `path`,
                    {
                        'fill-rule': `evenodd`,
                        d: `M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z`,
                        'clip-rule': `evenodd`,
                    },
                    null,
                    -1,
                ),
            ]),
        )
    );
}
var Kc = jc(Uc, [[`render`, Gc]]),
    qc = {},
    Jc = {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        height: `20`,
        width: `20`,
    };
function Yc(e, t) {
    return (
        k(),
        z(
            `svg`,
            Jc,
            (t[0] ||= [
                H(
                    `path`,
                    {
                        'fill-rule': `evenodd`,
                        d: `M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z`,
                        'clip-rule': `evenodd`,
                    },
                    null,
                    -1,
                ),
            ]),
        )
    );
}
var Xc = jc(qc, [[`render`, Yc]]),
    Zc = {},
    Qc = {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 20 20`,
        fill: `currentColor`,
        height: `20`,
        width: `20`,
    };
function $c(e, t) {
    return (
        k(),
        z(
            `svg`,
            Qc,
            (t[0] ||= [
                H(
                    `path`,
                    {
                        'fill-rule': `evenodd`,
                        d: `M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z`,
                        'clip-rule': `evenodd`,
                    },
                    null,
                    -1,
                ),
            ]),
        )
    );
}
var el = jc(Zc, [[`render`, $c]]),
    tl = [`aria-label`],
    nl = [
        `data-sonner-theme`,
        `dir`,
        `data-theme`,
        `data-rich-colors`,
        `data-y-position`,
        `data-x-position`,
    ],
    rl = typeof window < `u` && typeof document < `u`;
function il() {
    if (typeof window > `u` || typeof document > `u`) return `ltr`;
    let e = document.documentElement.getAttribute(`dir`);
    return e === `auto` || !e
        ? window.getComputedStyle(document.documentElement).direction
        : e;
}
var al = j({
        name: `Toaster`,
        inheritAttrs: !1,
        __name: `Toaster`,
        props: {
            id: {},
            invert: { type: Boolean, default: !1 },
            theme: { default: `light` },
            position: { default: `bottom-right` },
            closeButtonPosition: { default: `top-left` },
            hotkey: { default: () => [`altKey`, `KeyT`] },
            richColors: { type: Boolean, default: !1 },
            expand: { type: Boolean, default: !1 },
            duration: {},
            gap: { default: xc },
            visibleToasts: { default: gc },
            closeButton: { type: Boolean, default: !1 },
            toastOptions: { default: () => ({}) },
            class: { default: `` },
            style: {},
            offset: { default: _c },
            mobileOffset: { default: vc },
            dir: { default: `auto` },
            swipeDirections: {},
            icons: {},
            containerAriaLabel: { default: `Notifications` },
        },
        setup(e) {
            let t = e,
                n = be(),
                r = M([]),
                i = L(() =>
                    t.id
                        ? r.value.filter((e) => e.toasterId === t.id)
                        : r.value.filter((e) => !e.toasterId),
                );
            function a(e, t) {
                return i.value.filter(
                    (n) => (!n.position && t === 0) || n.position === e,
                );
            }
            let o = L(() => {
                    let e = i.value
                        .filter((e) => e.position)
                        .map((e) => e.position);
                    return e.length > 0
                        ? Array.from(new Set([t.position].concat(e)))
                        : [t.position];
                }),
                c = L(() => {
                    let e = {};
                    return (
                        o.value.forEach((t) => {
                            e[t] = r.value.filter((e) => e.position === t);
                        }),
                        e
                    );
                }),
                l = M([]),
                u = M({}),
                d = M(!1);
            P(() => {
                o.value.forEach((e) => {
                    e in u.value || (u.value[e] = !1);
                });
            });
            let f = M(
                    t.theme === `system`
                        ? typeof window < `u` &&
                          window.matchMedia &&
                          window.matchMedia(`(prefers-color-scheme: dark)`)
                              .matches
                            ? `dark`
                            : `light`
                        : t.theme,
                ),
                p = M(null),
                h = M(null),
                _ = M(!1),
                v = t.hotkey
                    .join(`+`)
                    .replace(/Key/g, ``)
                    .replace(/Digit/g, ``);
            function y(e) {
                (r.value.find((t) => t.id === e.id)?.delete || dc.dismiss(e.id),
                    (r.value = r.value.filter(({ id: t }) => t !== e.id)),
                    setTimeout(() => {
                        r.value.find((t) => t.id === e.id) ||
                            (l.value = l.value.filter(
                                (t) => t.toastId !== e.id,
                            ));
                    }, 250));
            }
            function b(e) {
                _.value &&
                    !e.currentTarget?.contains?.(e.relatedTarget) &&
                    ((_.value = !1),
                    (h.value &&= (h.value.focus({ preventScroll: !0 }), null)));
            }
            function x(e) {
                (e.target instanceof HTMLElement &&
                    e.target.dataset.dismissible === `false`) ||
                    _.value ||
                    ((_.value = !0), (h.value = e.relatedTarget));
            }
            function S(e) {
                (e.target &&
                    e.target instanceof HTMLElement &&
                    e.target.dataset.dismissible === `false`) ||
                    (d.value = !0);
            }
            (P((e) => {
                e(
                    dc.subscribe((e) => {
                        e.dismiss
                            ? requestAnimationFrame(() => {
                                  r.value = r.value.map((t) =>
                                      t.id === e.id ? { ...t, delete: !0 } : t,
                                  );
                              })
                            : ee(() => {
                                  let t = r.value.findIndex(
                                      (t) => t.id === e.id,
                                  );
                                  t === -1
                                      ? (r.value = [e, ...r.value])
                                      : (r.value = [
                                            ...r.value.slice(0, t),
                                            { ...r.value[t], ...e },
                                            ...r.value.slice(t + 1),
                                        ]);
                              });
                    }),
                );
            }),
                P((e) => {
                    if (typeof window > `u`) return;
                    if (t.theme !== `system`) {
                        f.value = t.theme;
                        return;
                    }
                    let n = window.matchMedia(`(prefers-color-scheme: dark)`),
                        r = (e) => {
                            f.value = e ? `dark` : `light`;
                        };
                    r(n.matches);
                    let i = (e) => {
                        r(e.matches);
                    };
                    try {
                        n.addEventListener(`change`, i);
                    } catch {
                        n.addListener(i);
                    }
                    e(() => {
                        try {
                            n.removeEventListener(`change`, i);
                        } catch {
                            n.removeListener(i);
                        }
                    });
                }),
                P(() => {
                    p.value &&
                        h.value &&
                        (h.value.focus({ preventScroll: !0 }),
                        (h.value = null),
                        (_.value = !1));
                }),
                P(() => {
                    r.value.length <= 1 &&
                        Object.keys(u.value).forEach((e) => {
                            u.value[e] = !1;
                        });
                }),
                P((e) => {
                    function n(e) {
                        let n = t.hotkey.every((t) => e[t] || e.code === t),
                            r = Array.isArray(p.value) ? p.value[0] : p.value;
                        n &&
                            (o.value.forEach((e) => {
                                u.value[e] = !0;
                            }),
                            r?.focus());
                        let i =
                            document.activeElement === p.value ||
                            r?.contains(document.activeElement);
                        e.code === `Escape` &&
                            i &&
                            o.value.forEach((e) => {
                                u.value[e] = !1;
                            });
                    }
                    rl &&
                        (document.addEventListener(`keydown`, n),
                        e(() => {
                            document.removeEventListener(`keydown`, n);
                        }));
                }));
            function C(e) {
                let t = e.currentTarget,
                    n =
                        t.getAttribute(`data-y-position`) +
                        `-` +
                        t.getAttribute(`data-x-position`);
                u.value[n] = !0;
            }
            function w(e) {
                if (!d.value) {
                    let t = e.currentTarget,
                        n =
                            t.getAttribute(`data-y-position`) +
                            `-` +
                            t.getAttribute(`data-x-position`);
                    u.value[n] = !1;
                }
            }
            function T() {
                Object.keys(u.value).forEach((e) => {
                    u.value[e] = !1;
                });
            }
            function te() {
                d.value = !1;
            }
            function ne(e) {
                l.value = e;
            }
            function re(e) {
                let t = l.value.findIndex((t) => t.toastId === e.toastId);
                if (t !== -1) l.value[t] = e;
                else {
                    let t = l.value.findIndex((t) => t.position === e.position);
                    t === -1 ? l.value.unshift(e) : l.value.splice(t, 0, e);
                }
            }
            return (e, r) => (
                k(),
                z(
                    m,
                    null,
                    [
                        D(
                            ` Remove item from normal navigation flow, only available via hotkey `,
                        ),
                        H(
                            `section`,
                            {
                                'aria-label': `${e.containerAriaLabel} ${F(v)}`,
                                tabIndex: -1,
                                'aria-live': `polite`,
                                'aria-relevant': `additions text`,
                                'aria-atomic': `false`,
                            },
                            [
                                (k(!0),
                                z(
                                    m,
                                    null,
                                    pe(
                                        o.value,
                                        (r, i) => (
                                            k(),
                                            z(
                                                `ol`,
                                                s(
                                                    {
                                                        key: r,
                                                        ref_for: !0,
                                                        ref_key: `listRef`,
                                                        ref: p,
                                                        'data-sonner-toaster': ``,
                                                        'data-sonner-theme':
                                                            f.value,
                                                        class: t.class,
                                                        dir:
                                                            e.dir === `auto`
                                                                ? il()
                                                                : e.dir,
                                                        tabIndex: -1,
                                                        'data-theme': e.theme,
                                                        'data-rich-colors':
                                                            e.richColors,
                                                        'data-y-position':
                                                            r.split(`-`)[0],
                                                        'data-x-position':
                                                            r.split(`-`)[1],
                                                        style: {
                                                            '--front-toast-height': `${l.value[0]?.height || 0}px`,
                                                            '--width': `${F(bc)}px`,
                                                            '--gap': `${e.gap}px`,
                                                            ...e.style,
                                                            ...F(n).style,
                                                            ...F(Dc)(
                                                                e.offset,
                                                                e.mobileOffset,
                                                            ),
                                                        },
                                                    },
                                                    { ref_for: !0 },
                                                    e.$attrs,
                                                    {
                                                        onBlur: b,
                                                        onFocus: x,
                                                        onMouseenter: C,
                                                        onMousemove: C,
                                                        onMouseleave: w,
                                                        onDragend: T,
                                                        onPointerdown: S,
                                                        onPointerup: te,
                                                    },
                                                ),
                                                [
                                                    (k(!0),
                                                    z(
                                                        m,
                                                        null,
                                                        pe(
                                                            a(r, i),
                                                            (n, i) => (
                                                                k(),
                                                                N(
                                                                    Ac,
                                                                    {
                                                                        key: n.id,
                                                                        heights:
                                                                            l.value,
                                                                        icons: e.icons,
                                                                        index: i,
                                                                        toast: n,
                                                                        defaultRichColors:
                                                                            e.richColors,
                                                                        duration:
                                                                            e
                                                                                .toastOptions
                                                                                ?.duration ??
                                                                            e.duration,
                                                                        class: E(
                                                                            e
                                                                                .toastOptions
                                                                                ?.class ??
                                                                                ``,
                                                                        ),
                                                                        descriptionClass:
                                                                            e
                                                                                .toastOptions
                                                                                ?.descriptionClass,
                                                                        invert: e.invert,
                                                                        visibleToasts:
                                                                            e.visibleToasts,
                                                                        closeButton:
                                                                            e
                                                                                .toastOptions
                                                                                ?.closeButton ??
                                                                            e.closeButton,
                                                                        interacting:
                                                                            d.value,
                                                                        position:
                                                                            r,
                                                                        closeButtonPosition:
                                                                            e
                                                                                .toastOptions
                                                                                ?.closeButtonPosition ??
                                                                            e.closeButtonPosition,
                                                                        style: xe(
                                                                            e
                                                                                .toastOptions
                                                                                ?.style,
                                                                        ),
                                                                        unstyled:
                                                                            e
                                                                                .toastOptions
                                                                                ?.unstyled,
                                                                        classes:
                                                                            e
                                                                                .toastOptions
                                                                                ?.classes,
                                                                        cancelButtonStyle:
                                                                            e
                                                                                .toastOptions
                                                                                ?.cancelButtonStyle,
                                                                        actionButtonStyle:
                                                                            e
                                                                                .toastOptions
                                                                                ?.actionButtonStyle,
                                                                        'close-button-aria-label':
                                                                            e
                                                                                .toastOptions
                                                                                ?.closeButtonAriaLabel,
                                                                        toasts: c
                                                                            .value[
                                                                            r
                                                                        ],
                                                                        expandByDefault:
                                                                            e.expand,
                                                                        gap: e.gap,
                                                                        expanded:
                                                                            u
                                                                                .value[
                                                                                r
                                                                            ] ||
                                                                            !1,
                                                                        swipeDirections:
                                                                            t.swipeDirections,
                                                                        'onUpdate:heights':
                                                                            ne,
                                                                        'onUpdate:height':
                                                                            re,
                                                                        onRemoveToast:
                                                                            y,
                                                                    },
                                                                    {
                                                                        'close-icon':
                                                                            g(
                                                                                () => [
                                                                                    U(
                                                                                        e.$slots,
                                                                                        `close-icon`,
                                                                                        {},
                                                                                        () => [
                                                                                            B(
                                                                                                Fc,
                                                                                            ),
                                                                                        ],
                                                                                    ),
                                                                                ],
                                                                            ),
                                                                        'loading-icon':
                                                                            g(
                                                                                () => [
                                                                                    U(
                                                                                        e.$slots,
                                                                                        `loading-icon`,
                                                                                        {},
                                                                                        () => [
                                                                                            B(
                                                                                                Rc,
                                                                                                {
                                                                                                    visible:
                                                                                                        n.type ===
                                                                                                        `loading`,
                                                                                                },
                                                                                                null,
                                                                                                8,
                                                                                                [
                                                                                                    `visible`,
                                                                                                ],
                                                                                            ),
                                                                                        ],
                                                                                    ),
                                                                                ],
                                                                            ),
                                                                        'success-icon':
                                                                            g(
                                                                                () => [
                                                                                    U(
                                                                                        e.$slots,
                                                                                        `success-icon`,
                                                                                        {},
                                                                                        () => [
                                                                                            B(
                                                                                                Hc,
                                                                                            ),
                                                                                        ],
                                                                                    ),
                                                                                ],
                                                                            ),
                                                                        'error-icon':
                                                                            g(
                                                                                () => [
                                                                                    U(
                                                                                        e.$slots,
                                                                                        `error-icon`,
                                                                                        {},
                                                                                        () => [
                                                                                            B(
                                                                                                el,
                                                                                            ),
                                                                                        ],
                                                                                    ),
                                                                                ],
                                                                            ),
                                                                        'warning-icon':
                                                                            g(
                                                                                () => [
                                                                                    U(
                                                                                        e.$slots,
                                                                                        `warning-icon`,
                                                                                        {},
                                                                                        () => [
                                                                                            B(
                                                                                                Xc,
                                                                                            ),
                                                                                        ],
                                                                                    ),
                                                                                ],
                                                                            ),
                                                                        'info-icon':
                                                                            g(
                                                                                () => [
                                                                                    U(
                                                                                        e.$slots,
                                                                                        `info-icon`,
                                                                                        {},
                                                                                        () => [
                                                                                            B(
                                                                                                Kc,
                                                                                            ),
                                                                                        ],
                                                                                    ),
                                                                                ],
                                                                            ),
                                                                        _: 2,
                                                                    },
                                                                    1032,
                                                                    [
                                                                        `heights`,
                                                                        `icons`,
                                                                        `index`,
                                                                        `toast`,
                                                                        `defaultRichColors`,
                                                                        `duration`,
                                                                        `class`,
                                                                        `descriptionClass`,
                                                                        `invert`,
                                                                        `visibleToasts`,
                                                                        `closeButton`,
                                                                        `interacting`,
                                                                        `position`,
                                                                        `closeButtonPosition`,
                                                                        `style`,
                                                                        `unstyled`,
                                                                        `classes`,
                                                                        `cancelButtonStyle`,
                                                                        `actionButtonStyle`,
                                                                        `close-button-aria-label`,
                                                                        `toasts`,
                                                                        `expandByDefault`,
                                                                        `gap`,
                                                                        `expanded`,
                                                                        `swipeDirections`,
                                                                    ],
                                                                )
                                                            ),
                                                        ),
                                                        128,
                                                    )),
                                                ],
                                                16,
                                                nl,
                                            )
                                        ),
                                    ),
                                    128,
                                )),
                            ],
                            8,
                            tl,
                        ),
                    ],
                    2112,
                )
            );
        },
    }),
    ol = j({
        __name: `Sonner`,
        props: {
            id: {},
            invert: { type: Boolean },
            theme: {},
            position: {},
            closeButtonPosition: {},
            hotkey: {},
            richColors: { type: Boolean },
            expand: { type: Boolean },
            duration: {},
            gap: {},
            visibleToasts: {},
            closeButton: { type: Boolean },
            toastOptions: {},
            class: {},
            style: {},
            offset: {},
            mobileOffset: {},
            dir: {},
            swipeDirections: {},
            icons: {},
            containerAriaLabel: {},
        },
        setup(e) {
            let t = e;
            return (e, n) => (
                k(),
                N(
                    F(al),
                    s(
                        {
                            class: F(R)(`toaster group`, t.class),
                            style: {
                                '--normal-bg': `var(--popover)`,
                                '--normal-text': `var(--popover-foreground)`,
                                '--normal-border': `var(--border)`,
                                '--border-radius': `var(--radius)`,
                            },
                        },
                        t,
                    ),
                    {
                        'success-icon': g(() => [
                            B(F(ja), { class: `size-4` }),
                        ]),
                        'info-icon': g(() => [B(F(Na), { class: `size-4` })]),
                        'warning-icon': g(() => [
                            B(F(Ha), { class: `size-4` }),
                        ]),
                        'error-icon': g(() => [B(F(Ra), { class: `size-4` })]),
                        'loading-icon': g(() => [
                            H(`div`, null, [
                                B(F(Fa), { class: `size-4 animate-spin` }),
                            ]),
                        ]),
                        'close-icon': g(() => [B(F(Wa), { class: `size-4` })]),
                        _: 1,
                    },
                    16,
                    [`class`],
                )
            );
        },
    }),
    sl = j({
        __name: `AppSidebarLayout`,
        props: { breadcrumbs: { default: () => [] } },
        setup(e) {
            return (t, n) => (
                k(),
                z(
                    m,
                    null,
                    [
                        (n[0] ||= H(
                            `a`,
                            {
                                href: `#main-content`,
                                class: `sr-only z-50 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus:not-sr-only focus:fixed focus:top-2 focus:left-2`,
                            },
                            ` Skip to main content `,
                            -1,
                        )),
                        B(Ho, null, {
                            default: g(() => [
                                B(Zs),
                                B(
                                    Vo,
                                    { class: `min-w-0 overflow-x-clip` },
                                    {
                                        default: g(() => [
                                            B(
                                                sc,
                                                { breadcrumbs: e.breadcrumbs },
                                                null,
                                                8,
                                                [`breadcrumbs`],
                                            ),
                                            B(lc),
                                            U(t.$slots, `default`),
                                        ]),
                                        _: 3,
                                    },
                                ),
                                B(F(ol)),
                            ]),
                            _: 3,
                        }),
                    ],
                    64,
                )
            );
        },
    }),
    cl = j({
        __name: `AppLayout`,
        props: { breadcrumbs: { default: () => [] } },
        setup(e) {
            return (t, n) => (
                k(),
                N(
                    sl,
                    { breadcrumbs: e.breadcrumbs },
                    { default: g(() => [U(t.$slots, `default`)]), _: 3 },
                    8,
                    [`breadcrumbs`],
                )
            );
        },
    }),
    ll = {
        class: `flex min-h-svh flex-col items-center justify-center gap-6 bg-auth-bg bg-[radial-gradient(var(--auth-dot)_1px,transparent_1px)] bg-[length:20px_20px] p-6 md:p-10`,
    },
    ul = { class: `w-full max-w-sm` },
    dl = { class: `flex flex-col gap-6` },
    fl = { class: `rounded-2xl bg-card p-6 shadow-lg` },
    pl = { class: `mb-6 space-y-1` },
    ml = { class: `text-lg font-semibold` },
    hl = { class: `text-sm text-muted-foreground` },
    gl = j({
        __name: `AuthSimpleLayout`,
        props: { title: {}, description: {} },
        setup(e) {
            return (t, n) => (
                k(),
                z(`div`, ll, [
                    H(`div`, ul, [
                        H(`div`, dl, [
                            B(
                                F(oe),
                                {
                                    href: F(q)(),
                                    class: `flex items-center justify-center gap-2 text-2xl font-bold`,
                                },
                                {
                                    default: g(() => [
                                        B(F(Ma), {
                                            class: `size-7 text-brand`,
                                        }),
                                        (n[0] ||= H(
                                            `span`,
                                            null,
                                            [
                                                se(`Pay`),
                                                H(
                                                    `span`,
                                                    {
                                                        class: `text-muted-foreground`,
                                                    },
                                                    `Hub`,
                                                ),
                                                se(` Central`),
                                            ],
                                            -1,
                                        )),
                                    ]),
                                    _: 1,
                                },
                                8,
                                [`href`],
                            ),
                            H(`div`, fl, [
                                H(`div`, pl, [
                                    H(`h1`, ml, O(e.title), 1),
                                    H(`p`, hl, O(e.description), 1),
                                ]),
                                U(t.$slots, `default`),
                            ]),
                        ]),
                    ]),
                ])
            );
        },
    }),
    _l = j({
        __name: `AuthLayout`,
        props: { title: { default: `` }, description: { default: `` } },
        setup(e) {
            return (t, n) => (
                k(),
                N(
                    gl,
                    { title: e.title, description: e.description },
                    { default: g(() => [U(t.$slots, `default`)]), _: 3 },
                    8,
                    [`title`, `description`],
                )
            );
        },
    }),
    vl = { key: 0, class: `text-sm text-muted-foreground` },
    yl = j({
        __name: `Heading`,
        props: { title: {}, description: {}, variant: { default: `default` } },
        setup(e) {
            return (t, n) => (
                k(),
                z(
                    `header`,
                    {
                        class: E(
                            e.variant === `small` ? `` : `mb-8 space-y-0.5`,
                        ),
                    },
                    [
                        H(
                            `h2`,
                            {
                                class: E(
                                    e.variant === `small`
                                        ? `mb-0.5 text-base font-medium`
                                        : `text-xl font-semibold tracking-tight`,
                                ),
                            },
                            O(e.title),
                            3,
                        ),
                        e.description
                            ? (k(), z(`p`, vl, O(e.description), 1))
                            : D(``, !0),
                    ],
                    2,
                )
            );
        },
    }),
    $ = (e) => ({ url: $.url(e), method: `get` });
(($.definition = { methods: [`get`, `head`], url: `/settings/security` }),
    ($.url = (e) => $.definition.url + I(e)),
    ($.get = (e) => ({ url: $.url(e), method: `get` })),
    ($.head = (e) => ({ url: $.url(e), method: `head` })));
var bl = (e) => ({ action: $.url(e), method: `get` });
((bl.get = (e) => ({ action: $.url(e), method: `get` })),
    (bl.head = (e) => ({
        action: $.url({
            [e?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(e?.query ?? e?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    ($.form = bl),
    Object.assign($, $));
var xl = { class: `px-4 py-6` },
    Sl = { class: `flex flex-col lg:flex-row lg:space-x-12` },
    Cl = { class: `w-full max-w-xl lg:w-48` },
    wl = {
        class: `flex flex-col space-y-1 space-x-0`,
        'aria-label': `Settings`,
    },
    Tl = { class: `flex-1 md:max-w-2xl` },
    El = { class: `max-w-xl space-y-12` },
    Dl = j({
        __name: `Layout`,
        setup(e) {
            let t = [
                    { title: `Profile`, href: Y() },
                    { title: `Security`, href: $() },
                ],
                { isCurrentOrParentUrl: n } = qo();
            return (e, r) => (
                k(),
                z(`div`, xl, [
                    B(yl, {
                        title: `Settings`,
                        description: `Manage your profile and account settings`,
                    }),
                    H(`div`, Sl, [
                        H(`aside`, Cl, [
                            H(`nav`, wl, [
                                (k(),
                                z(
                                    m,
                                    null,
                                    pe(t, (e) =>
                                        B(
                                            F(Lo),
                                            {
                                                key: F(ge)(e.href),
                                                variant: `ghost`,
                                                class: E([
                                                    `w-full justify-start`,
                                                    {
                                                        'bg-muted': F(n)(
                                                            e.href,
                                                        ),
                                                    },
                                                ]),
                                                'as-child': ``,
                                            },
                                            {
                                                default: g(() => [
                                                    B(
                                                        F(oe),
                                                        { href: e.href },
                                                        {
                                                            default: g(() => [
                                                                (k(),
                                                                N(ye(e.icon), {
                                                                    class: `h-4 w-4`,
                                                                })),
                                                                se(
                                                                    ` ` +
                                                                        O(
                                                                            e.title,
                                                                        ),
                                                                    1,
                                                                ),
                                                            ]),
                                                            _: 2,
                                                        },
                                                        1032,
                                                        [`href`],
                                                    ),
                                                ]),
                                                _: 2,
                                            },
                                            1032,
                                            [`class`],
                                        ),
                                    ),
                                    64,
                                )),
                            ]),
                        ]),
                        B(F(Io), { class: `my-6 lg:hidden` }),
                        H(`div`, Tl, [
                            H(`section`, El, [U(e.$slots, `default`)]),
                        ]),
                    ]),
                ])
            );
        },
    });
function Ol() {
    w.on(`flash`, (e) => {
        let t = e.detail?.flash?.toast;
        t && mc[t.type](t.message);
    });
}
var kl = `PayHub Central`;
(ue({
    resolve: async (e, t) => {
        let n = Object.assign({
                './pages/Dashboard.vue': () =>
                    at(
                        () => import(`./Dashboard-Bg4L7KSX.js`),
                        __vite__mapDeps([
                            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
                            15,
                        ]),
                    ),
                './pages/auth/ConfirmPassword.vue': () =>
                    at(
                        () => import(`./ConfirmPassword-CjOwR-U-.js`),
                        __vite__mapDeps([16, 1, 17, 4, 7, 18, 10, 19, 20]),
                    ),
                './pages/auth/Login.vue': () =>
                    at(
                        () => import(`./Login-B-s37gE1.js`),
                        __vite__mapDeps([
                            21, 1, 22, 3, 4, 6, 23, 10, 7, 17, 18, 19, 20,
                        ]),
                    ),
                './pages/auth/TwoFactorChallenge.vue': () =>
                    at(
                        () => import(`./TwoFactorChallenge-C7BKQ3YZ.js`),
                        __vite__mapDeps([24, 1, 19, 25, 6, 7]),
                    ),
                './pages/auth/VerifyEmail.vue': () =>
                    at(
                        () => import(`./VerifyEmail-C56f9AJh.js`),
                        __vite__mapDeps([26, 1, 20]),
                    ),
                './pages/deployments/Create.vue': () =>
                    at(
                        () => import(`./Create-uJft1BWO.js`),
                        __vite__mapDeps([
                            27, 1, 22, 3, 4, 6, 23, 10, 7, 17, 18, 19, 15, 20,
                            28,
                        ]),
                    ),
                './pages/deployments/Edit.vue': () =>
                    at(
                        () => import(`./Edit-DI7ALhGr.js`),
                        __vite__mapDeps([
                            29, 1, 17, 4, 7, 18, 10, 19, 15, 20, 28, 30, 31, 6,
                        ]),
                    ),
                './pages/deployments/Index.vue': () =>
                    at(
                        () => import(`./Index-JA1MyBOM.js`),
                        __vite__mapDeps([
                            32, 1, 9, 10, 11, 7, 33, 13, 14, 15, 20, 30, 31, 6,
                        ]),
                    ),
                './pages/deployments/Show.vue': () =>
                    at(
                        () => import(`./Show-Ck0vmjH7.js`),
                        __vite__mapDeps([
                            34, 3, 1, 4, 6, 2, 5, 7, 8, 10, 11, 33, 13, 15,
                        ]),
                    ),
                './pages/settings/Profile.vue': () =>
                    at(
                        () => import(`./Profile-DimxKII4.js`),
                        __vite__mapDeps([35, 1, 17, 4, 7, 19]),
                    ),
                './pages/settings/Security.vue': () =>
                    at(
                        () => import(`./Security-B9ym3CnU.js`),
                        __vite__mapDeps([
                            36, 1, 17, 4, 7, 10, 23, 18, 19, 12, 20, 25, 6, 31,
                        ]),
                    ),
                './pages/staff/Create.vue': () =>
                    at(
                        () => import(`./Create-BECMmqew.js`),
                        __vite__mapDeps([
                            37, 1, 17, 4, 7, 18, 10, 19, 15, 20, 38,
                        ]),
                    ),
                './pages/staff/Edit.vue': () =>
                    at(
                        () => import(`./Edit-Ci5cbUWq.js`),
                        __vite__mapDeps([
                            39, 1, 17, 4, 7, 18, 10, 19, 15, 20, 38,
                        ]),
                    ),
                './pages/staff/Index.vue': () =>
                    at(
                        () => import(`./Index-CMsQgkFR.js`),
                        __vite__mapDeps([
                            40, 1, 8, 11, 7, 33, 14, 15, 20, 31, 6,
                        ]),
                    ),
            }),
            r = await (n[`./pages/${e}.vue`] || n[`./Pages/${e}.vue`])?.();
        if (!r) throw Error(`Page not found: ${e}`);
        return r.default ?? r;
    },
    title: (e) => (e ? `${e} - ${kl}` : kl),
    layout: (e) => {
        switch (!0) {
            case e.startsWith(`auth/`):
                return _l;
            case e.startsWith(`settings/`):
                return [cl, Dl];
            default:
                return cl;
        }
    },
    withApp: (e) => {
        e.directive(`focus`, {
            mounted: (e, t) => {
                t.value !== !1 && e.focus();
            },
        });
    },
    progress: { color: `#C24E00` },
}),
    Ol());
export {
    tn as A,
    Et as B,
    Fa as C,
    cn as D,
    Si as E,
    Kt as F,
    ut as H,
    Gt as I,
    Ut as L,
    Xt as M,
    Yt as N,
    sn as O,
    qt as P,
    Ht as R,
    Ha as S,
    Mi as T,
    Ct as V,
    Ya as _,
    Us as a,
    Wa as b,
    X as c,
    J as d,
    ms as f,
    no as g,
    Ga as h,
    qs as i,
    rn as j,
    nn as k,
    Z as l,
    Ka as m,
    yl as n,
    Q as o,
    Lo as p,
    zs as r,
    Ts as s,
    $ as t,
    Y as u,
    io as v,
    ja as w,
    Ua as x,
    ao as y,
    Dt as z,
};
