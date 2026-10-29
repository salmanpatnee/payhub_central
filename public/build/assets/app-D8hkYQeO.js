const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/Dashboard-B02nNHOV.js',
            'assets/wayfinder-DOENF6-v.js',
            'assets/formatPercent-Zi4dOoHT.js',
            'assets/Presence-L0dip4UT.js',
            'assets/useForwardExpose-BVGbRqkE.js',
            'assets/Teleport-BA16l1x9.js',
            'assets/useForwardPropsEmits-BQsdb9GW.js',
            'assets/shared-CHjORj-0.js',
            'assets/formatRelative-D-S37FvD.js',
            'assets/inbox-BXA07aQU.js',
            'assets/createLucideIcon-BqhoQwIJ.js',
            'assets/TableRow-Cik-p-BP.js',
            'assets/Card-yrm-h8z5.js',
            'assets/deploymentStatus-DAZueO0e.js',
            'assets/EmptyState-D52fbywp.js',
            'assets/PageHeader-aqdbQGDc.js',
            'assets/ConfirmPassword-CrlTHOCC.js',
            'assets/Label-SQSUbFPK.js',
            'assets/PasswordInput-CUpQjno6.js',
            'assets/InputError-BZLNDWJz.js',
            'assets/Spinner-BB18Wf_j.js',
            'assets/Login-BQL4tikK.js',
            'assets/Checkbox-CqX6L883.js',
            'assets/check-u3Gy4IT4.js',
            'assets/TwoFactorChallenge-D0K5A_WX.js',
            'assets/login-HNcrD4uR.js',
            'assets/VerifyEmail-DqtrWDCp.js',
            'assets/Create-Cuaba8_p.js',
            'assets/DeploymentController-ByDKyI4z.js',
            'assets/Edit-B5IWUAIw.js',
            'assets/RemoveDeploymentDialog-CbATGFNa.js',
            'assets/dialog-B8nc9udn.js',
            'assets/Index-1BzhGERv.js',
            'assets/TableCaption-BVMgFzHw.js',
            'assets/Show-CZL51fwp.js',
            'assets/Profile-DvmWCZzG.js',
            'assets/Security-DUdyPqxr.js',
            'assets/Create-DdM91x7U.js',
            'assets/StaffController-DonmmVnd.js',
            'assets/Edit-BCbp_noN.js',
            'assets/Index-B5cc47AA.js',
        ]),
) => i.map((i) => d[i]);
import { a as e, i as t, n, t as r } from './Presence-L0dip4UT.js';
import {
    $n as i,
    $t as a,
    An as o,
    B as s,
    Cr as c,
    Dt as l,
    Et as u,
    Ft as d,
    Gt as f,
    Ht as p,
    In as m,
    Kn as h,
    Ln as g,
    Pn as _,
    Rt as v,
    V as y,
    Vt as b,
    Yt as x,
    Zn as ee,
    a as S,
    ar as C,
    at as w,
    bn as T,
    br as te,
    c as E,
    cn as D,
    cr as O,
    dn as k,
    er as ne,
    fr as re,
    g as ie,
    gt as A,
    hr as j,
    i as M,
    ir as ae,
    it as N,
    jn as oe,
    kn as P,
    kt as se,
    l as ce,
    mt as F,
    n as I,
    ot as le,
    p as ue,
    pr as de,
    pt as fe,
    q as L,
    r as pe,
    rn as me,
    rt as R,
    s as z,
    sn as he,
    sr as ge,
    st as B,
    t as _e,
    tn as V,
    u as ve,
    ur as ye,
    vn as be,
    vr as H,
    wt as xe,
    xr as U,
    yr as W,
    z as Se,
    zt as Ce,
} from './wayfinder-DOENF6-v.js';
import {
    a as we,
    i as Te,
    n as Ee,
    o as De,
    r as Oe,
    t as ke,
} from './Teleport-BA16l1x9.js';
import {
    _ as Ae,
    a as je,
    c as Me,
    d as Ne,
    g as Pe,
    i as Fe,
    m as Ie,
    s as Le,
    t as G,
    u as Re,
} from './useForwardExpose-BVGbRqkE.js';
import { t as ze } from './useDirection-tFzlK2GJ.js';
import { n as Be, r as Ve, t as He } from './useForwardPropsEmits-BQsdb9GW.js';
import { t as K } from './createLucideIcon-BqhoQwIJ.js';
import {
    a as Ue,
    c as We,
    d as Ge,
    f as Ke,
    i as qe,
    l as Je,
    n as Ye,
    o as Xe,
    r as Ze,
    s as Qe,
    t as $e,
    u as et,
} from './shared-CHjORj-0.js';
var tt = `modulepreload`,
    nt = function (e) {
        return `/build/` + e;
    },
    rt = {},
    it = function (e) {
        return e.pathname.endsWith(`.css`);
    },
    at = function (e, t, n) {
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
    ot = function (e, t, n) {
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
                        t = nt(t, n);
                        let r = s(t),
                            i = it(r);
                        return at(rt, r.href, () => {
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
                                ((t.rel = i ? `stylesheet` : tt),
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
    st = [`INPUT`, `TEXTAREA`];
function ct(e, t, n, r = {}) {
    if (!t || (r.enableIgnoredElement && st.includes(t.nodeName))) return null;
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
            ? (b = lt(y, t, {
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
function lt(e, t, n, r = e.includes(t) ? e.length : e.length + 1) {
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
            ? lt(e, o, n, r)
            : o
        : null;
}
var ut = 0;
function dt() {
    o((e) => {
        if (!Ne) return;
        let t = document.querySelectorAll(`[data-reka-focus-guard]`);
        (document.body.insertAdjacentElement(`afterbegin`, t[0] ?? ft()),
            document.body.insertAdjacentElement(`beforeend`, t[1] ?? ft()),
            ut++,
            e(() => {
                (ut === 1 &&
                    document
                        .querySelectorAll(`[data-reka-focus-guard]`)
                        .forEach((e) => e.remove()),
                    ut--);
            }));
    });
}
function ft() {
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
function pt(e, t) {
    let n = Ie(!1, 300);
    Pe(() => {
        n.value = !1;
    });
    let r = C(null),
        i = Me();
    function a() {
        ((r.value = null), (n.value = !1));
    }
    function s(e, t) {
        if (!t) return;
        let i = e.currentTarget,
            a = { x: e.clientX, y: e.clientY },
            o = ht(a, mt(a, i.getBoundingClientRect()), 1),
            s = gt(t.getBoundingClientRect()),
            c = vt([...o, ...s]);
        ((r.value = c), (n.value = !0));
    }
    return (
        o((n) => {
            if (e.value && t.value) {
                let r = e.value,
                    i = t.value,
                    a = (e) => s(e, i),
                    o = (e) => s(e, r);
                (r.addEventListener(`pointerleave`, a),
                    i.addEventListener(`pointerleave`, o),
                    n(() => {
                        (r.removeEventListener(`pointerleave`, a),
                            i.removeEventListener(`pointerleave`, o));
                    }));
            }
        }),
        o((n) => {
            if (r.value) {
                let o = (n) => {
                        if (!r.value || !(n.target instanceof Element)) return;
                        let o = n.target,
                            s = { x: n.clientX, y: n.clientY },
                            c = e.value?.contains(o) || t.value?.contains(o),
                            l = !_t(s, r.value),
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
function mt(e, t) {
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
function ht(e, t, n = 5) {
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
function gt(e) {
    let { top: t, right: n, bottom: r, left: i } = e;
    return [
        { x: i, y: t },
        { x: n, y: t },
        { x: n, y: r },
        { x: i, y: r },
    ];
}
function _t(e, t) {
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
function vt(e) {
    let t = e.slice();
    return (
        t.sort((e, t) =>
            e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : +(e.y > t.y),
        ),
        yt(t)
    );
}
function yt(e) {
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
function bt(e) {
    let t = C(),
        n = R(() => t.value?.width ?? 0),
        r = R(() => t.value?.height ?? 0),
        i;
    return (
        x(() => {
            let n = Fe(e);
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
        a(() => {
            (i?.disconnect(), (i = void 0));
        }),
        { width: n, height: r }
    );
}
function xt(e) {
    let n = Ie(``, 1e3);
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
                    o = Ct(
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
function St(e, t) {
    return e.map((n, r) => e[(t + r) % e.length]);
}
function Ct(e, t, n) {
    let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
        i = n ? e.indexOf(n) : -1,
        a = St(e, Math.max(i, 0));
    r.length === 1 && (a = a.filter((e) => e !== n));
    let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
    return o === n ? void 0 : o;
}
function wt() {
    let e = C();
    return {
        primitiveElement: e,
        currentElement: R(() =>
            [`#text`, `#comment`].includes(e.value?.$el.nodeName)
                ? e.value?.$el.nextElementSibling
                : Fe(e),
        ),
    };
}
var [Tt, Et] = e(`DialogRoot`),
    Dt = A({
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
                r = Le(n, `open`, t, {
                    defaultValue: n.defaultOpen,
                    passive: n.open === void 0,
                }),
                i = C(),
                a = C(),
                { modal: o, unmountOnHide: s } = re(n);
            return (
                Et({
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
                    D(e.$slots, `default`, {
                        open: j(r),
                        close: () => (r.value = !1),
                    })
            );
        },
    }),
    Ot = A({
        __name: `DialogClose`,
        props: {
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1, default: `button` },
        },
        setup(e) {
            let t = e;
            G();
            let n = Tt();
            return (r, i) => (
                V(),
                w(
                    j(M),
                    b(t, {
                        type: e.as === `button` ? `button` : void 0,
                        onClick: (i[0] ||= (e) => j(n).onOpenChange(!1)),
                    }),
                    { default: _(() => [D(r.$slots, `default`)]), _: 3 },
                    16,
                    [`type`],
                )
            );
        },
    }),
    kt = `menu.itemSelect`,
    At = [`Enter`, ` `],
    jt = [`ArrowDown`, `PageUp`, `Home`],
    Mt = [`ArrowUp`, `PageDown`, `End`],
    Nt = [...jt, ...Mt];
([...At], [...At]);
function Pt(e) {
    return e ? `open` : `closed`;
}
function Ft(e) {
    let { onEntryFocus: t, onEntryFocusOnce: n, ...r } = e;
    return r;
}
function It(e) {
    let n = t();
    for (let r of e) if (r === n || (r.focus(), t() !== n)) return;
}
function Lt(e, t) {
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
function Rt(e, t) {
    return t ? Lt({ x: e.clientX, y: e.clientY }, t) : !1;
}
function zt(e) {
    return e.pointerType === `mouse`;
}
var Bt = A({
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
                o = Tt(),
                { forwardRef: s, currentElement: c } = G();
            return (
                (o.titleId ||= n(void 0, `reka-dialog-title`)),
                (o.descriptionId ||= n(void 0, `reka-dialog-description`)),
                x(() => {
                    ((o.contentElement = c),
                        t() !== document.body &&
                            (o.triggerElement.value = t()));
                }),
                (t, n) => (
                    V(),
                    w(
                        j(Ee),
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
                            default: _(() => [
                                F(
                                    j(Oe),
                                    b(
                                        {
                                            id: j(o).contentId,
                                            ref: j(s),
                                            as: e.as,
                                            'as-child': e.asChild,
                                            present: i.present,
                                            'disable-outside-pointer-events':
                                                e.disableOutsidePointerEvents,
                                            role: `dialog`,
                                            'aria-describedby':
                                                j(o).descriptionId,
                                            'aria-labelledby': j(o).titleId,
                                            'data-state': j(Pt)(
                                                j(o).open.value,
                                            ),
                                        },
                                        t.$attrs,
                                        {
                                            onDismiss: (n[0] ||= (e) =>
                                                j(o).onOpenChange(!1)),
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
                                        default: _(() => [
                                            D(t.$slots, `default`),
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
    Vt = A({
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
                i = Tt(),
                a = Ve(r),
                { forwardRef: o, currentElement: s } = G(),
                c = R(() => (n.present ? s.value : void 0));
            Te(c);
            let l = R(() => {
                let { present: e, ...t } = n;
                return t;
            });
            return (
                P(
                    () => n.present,
                    (e, t) => {
                        !e && t && i.triggerElement.value?.focus();
                    },
                ),
                (t, r) => (
                    V(),
                    w(
                        Bt,
                        b(
                            { ...l.value, ...j(a) },
                            {
                                ref: j(o),
                                present: e.present,
                                'trap-focus': j(i).open.value,
                                'disable-outside-pointer-events':
                                    n.disableOutsidePointerEvents,
                                onCloseAutoFocus: (r[0] ||= (e) => {
                                    e.defaultPrevented ||
                                        (e.preventDefault(),
                                        j(i).triggerElement.value?.focus());
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
                        { default: _(() => [D(t.$slots, `default`)]), _: 3 },
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
    Ht = A({
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
                r = Ve(t);
            G();
            let i = Tt(),
                a = C(!1),
                o = C(!1),
                s = R(() => {
                    let { present: e, ...t } = n;
                    return t;
                });
            return (
                P(
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
                    V(),
                    w(
                        Bt,
                        b(
                            { ...s.value, ...j(r) },
                            {
                                present: e.present,
                                'trap-focus': !1,
                                'disable-outside-pointer-events': !1,
                                onCloseAutoFocus: (n[0] ||= (e) => {
                                    (e.defaultPrevented ||
                                        (a.value ||
                                            j(i).triggerElement.value?.focus(),
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
                                    (j(i).triggerElement.value?.contains(t) &&
                                        e.preventDefault(),
                                        e.detail.originalEvent.type ===
                                            `focusin` &&
                                            o.value &&
                                            e.preventDefault());
                                }),
                            },
                        ),
                        { default: _(() => [D(t.$slots, `default`)]), _: 3 },
                        16,
                        [`present`],
                    )
                )
            );
        },
    }),
    Ut = A({
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
                a = Tt(),
                o = Ve(i),
                { forwardRef: s } = G(),
                c = R(() => n.forceMount || !a.unmountOnHide.value);
            return (t, i) => (
                V(),
                w(
                    j(r),
                    { present: j(a).open.value, 'force-mount': c.value },
                    {
                        default: _(({ present: r }) => [
                            j(a).modal.value
                                ? m(
                                      (V(),
                                      w(
                                          Vt,
                                          b(
                                              {
                                                  key: 0,
                                                  ref: j(s),
                                                  present: !c.value || r,
                                              },
                                              { ...n, ...j(o), ...t.$attrs },
                                          ),
                                          {
                                              default: _(() => [
                                                  D(t.$slots, `default`),
                                              ]),
                                              _: 3,
                                          },
                                          16,
                                          [`present`],
                                      )),
                                      [
                                          [
                                              Se,
                                              e.forceMount ||
                                                  j(a).unmountOnHide.value ||
                                                  r,
                                          ],
                                      ],
                                  )
                                : m(
                                      (V(),
                                      w(
                                          Ht,
                                          b(
                                              {
                                                  key: 1,
                                                  ref: j(s),
                                                  present: !c.value || r,
                                              },
                                              { ...n, ...j(o), ...t.$attrs },
                                          ),
                                          {
                                              default: _(() => [
                                                  D(t.$slots, `default`),
                                              ]),
                                              _: 3,
                                          },
                                          16,
                                          [`present`],
                                      )),
                                      [
                                          [
                                              Se,
                                              e.forceMount ||
                                                  j(a).unmountOnHide.value ||
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
    Wt = A({
        __name: `DialogDescription`,
        props: {
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1, default: `p` },
        },
        setup(e) {
            let t = e;
            G();
            let n = Tt();
            return (e, r) => (
                V(),
                w(
                    j(M),
                    b(t, { id: j(n).descriptionId }),
                    { default: _(() => [D(e.$slots, `default`)]), _: 3 },
                    16,
                    [`id`],
                )
            );
        },
    }),
    Gt = A({
        __name: `DialogOverlayImpl`,
        props: {
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
            present: { type: Boolean, required: !1, default: !0 },
        },
        setup(e) {
            let t = e,
                n = Tt(),
                r = we(t.present);
            return (
                P(
                    () => t.present,
                    (e) => (r.value = e),
                ),
                G(),
                (t, r) => (
                    V(),
                    w(
                        j(M),
                        {
                            as: e.as,
                            'as-child': e.asChild,
                            'data-state': j(n).open.value ? `open` : `closed`,
                            style: { 'pointer-events': `auto` },
                            onPointerdown: (r[0] ||= y(() => {}, [
                                `left`,
                                `self`,
                                `prevent`,
                            ])),
                        },
                        { default: _(() => [D(t.$slots, `default`)]), _: 3 },
                        8,
                        [`as`, `as-child`, `data-state`],
                    )
                )
            );
        },
    }),
    Kt = A({
        __name: `DialogOverlay`,
        props: {
            forceMount: { type: Boolean, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
        },
        setup(e) {
            let t = e,
                n = Tt(),
                { forwardRef: i } = G(),
                a = R(() => t.forceMount || !n.unmountOnHide.value);
            return (t, o) =>
                j(n)?.modal.value
                    ? (V(),
                      w(
                          j(r),
                          {
                              key: 0,
                              present: j(n).open.value,
                              'force-mount': a.value,
                          },
                          {
                              default: _(({ present: r }) => [
                                  m(
                                      F(
                                          Gt,
                                          b(t.$attrs, {
                                              ref: j(i),
                                              as: e.as,
                                              'as-child': e.asChild,
                                              present: !a.value || r,
                                          }),
                                          {
                                              default: _(() => [
                                                  D(t.$slots, `default`),
                                              ]),
                                              _: 3,
                                          },
                                          16,
                                          [`as`, `as-child`, `present`],
                                      ),
                                      [
                                          [
                                              Se,
                                              e.forceMount ||
                                                  j(n).unmountOnHide.value ||
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
                    : le(`v-if`, !0);
        },
    }),
    qt = A({
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
                V(),
                w(
                    j(ke),
                    W(u(t)),
                    { default: _(() => [D(e.$slots, `default`)]), _: 3 },
                    16,
                )
            );
        },
    }),
    Jt = A({
        __name: `DialogTitle`,
        props: {
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1, default: `h2` },
        },
        setup(e) {
            let t = e,
                n = Tt();
            return (
                G(),
                (e, r) => (
                    V(),
                    w(
                        j(M),
                        b(t, { id: j(n).titleId }),
                        { default: _(() => [D(e.$slots, `default`)]), _: 3 },
                        16,
                        [`id`],
                    )
                )
            );
        },
    }),
    Yt = `data-reka-collection-item`;
function Xt(e = {}) {
    let { key: t = ``, isProvider: n = !1 } = e,
        r = `${t}CollectionProvider`,
        a;
    if (n) {
        let e = C(new Map());
        ((a = { collectionRef: C(), itemMap: e }), me(r, a));
    } else a = d(r);
    let s = (e, t = !1) => {
            if (!a.collectionRef.value) return;
            let n = a.itemMap.value.get(e);
            return n && (t || n.ref.dataset.disabled !== ``) ? n : void 0;
        },
        c = (e = !1) => {
            let t = a.collectionRef.value;
            if (!t) return [];
            let n = Array.from(t.querySelectorAll(`[${Yt}]`)),
                r = new Map(n.map((e, t) => [e, t])),
                i = Array.from(a.itemMap.value.values()).sort(
                    (e, t) => (r.get(e.ref) ?? -1) - (r.get(t.ref) ?? -1),
                );
            return e ? i : i.filter((e) => e.ref.dataset.disabled !== ``);
        },
        u = A({
            name: `CollectionSlot`,
            inheritAttrs: !1,
            setup(e, { slots: t, attrs: n }) {
                let { primitiveElement: r, currentElement: i } = wt();
                return (
                    P(i, () => {
                        a.collectionRef.value = i.value;
                    }),
                    () => l(S, { ref: r, ...n }, t)
                );
            },
        }),
        f = A({
            name: `CollectionItem`,
            inheritAttrs: !1,
            props: { value: { validator: () => !0 } },
            setup(e, { slots: t, attrs: n }) {
                let { primitiveElement: r, currentElement: s } = wt();
                return (
                    o((t) => {
                        if (s.value) {
                            let n = i(s.value);
                            (a.itemMap.value.set(n, {
                                ref: s.value,
                                value: e.value,
                            }),
                                t(() => a.itemMap.value.delete(n)));
                        }
                    }),
                    () => l(S, { ...n, [Yt]: ``, ref: r }, t)
                );
            },
        });
    return {
        getItems: c,
        getItem: s,
        reactiveItems: R(() => Array.from(a.itemMap.value.values())),
        itemMapSize: R(() => a.itemMap.value.size),
        CollectionSlot: u,
        CollectionItem: f,
    };
}
var Zt = A({
        __name: `VisuallyHidden`,
        props: {
            feature: { type: String, required: !1, default: `focusable` },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1, default: `span` },
        },
        setup(e) {
            return (t, n) => (
                V(),
                w(
                    j(M),
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
                    { default: _(() => [D(t.$slots, `default`)]), _: 3 },
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
    Qt = `rovingFocusGroup.onEntryFocus`,
    $t = { bubbles: !1, cancelable: !0 },
    en = {
        ArrowLeft: `prev`,
        ArrowUp: `prev`,
        ArrowRight: `next`,
        ArrowDown: `next`,
        PageUp: `first`,
        Home: `first`,
        PageDown: `last`,
        End: `last`,
    };
function tn(e, t) {
    return t === `rtl`
        ? e === `ArrowLeft`
            ? `ArrowRight`
            : e === `ArrowRight`
              ? `ArrowLeft`
              : e
        : e;
}
function nn(e, t, n) {
    let r = tn(e.key, n);
    if (
        !(t === `vertical` && [`ArrowLeft`, `ArrowRight`].includes(r)) &&
        !(t === `horizontal` && [`ArrowUp`, `ArrowDown`].includes(r))
    )
        return en[r];
}
function rn(e, n = !1) {
    let r = t();
    for (let i of e)
        if (i === r || (i.focus({ preventScroll: n }), t() !== r)) return;
}
function an(e, t) {
    return e.map((n, r) => e[(t + r) % e.length]);
}
var [on, sn] = e(`PopperRoot`),
    cn = A({
        inheritAttrs: !1,
        __name: `PopperRoot`,
        setup(e) {
            let t = C();
            return (
                sn({ anchor: t, onAnchorChange: (e) => (t.value = e) }),
                (e, t) => D(e.$slots, `default`)
            );
        },
    }),
    ln = A({
        __name: `PopperAnchor`,
        props: {
            reference: { type: null, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
        },
        setup(e) {
            let t = e,
                { forwardRef: n, currentElement: r } = G(),
                i = on();
            return (
                oe(() => {
                    i.onAnchorChange(t.reference ?? r.value);
                }),
                (t, r) => (
                    V(),
                    w(
                        j(M),
                        { ref: j(n), as: e.as, 'as-child': e.asChild },
                        { default: _(() => [D(t.$slots, `default`)]), _: 3 },
                        8,
                        [`as`, `as-child`],
                    )
                )
            );
        },
    }),
    un = { key: 0, d: `M0 0L6 6L12 0` },
    dn = {
        key: 1,
        d: `M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0`,
    },
    fn = A({
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
                    V(),
                    w(
                        j(M),
                        b(t, {
                            width: e.width,
                            height: e.height,
                            viewBox: e.asChild ? void 0 : `0 0 12 6`,
                            preserveAspectRatio: e.asChild ? void 0 : `none`,
                        }),
                        {
                            default: _(() => [
                                D(n.$slots, `default`, {}, () => [
                                    e.rounded
                                        ? (V(), B(`path`, dn))
                                        : (V(), B(`path`, un)),
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
function pn(e) {
    return e !== null;
}
function mn(e) {
    return {
        name: `transformOrigin`,
        options: e,
        fn(t) {
            let { placement: n, rects: r, middlewareData: i } = t,
                a = i.arrow?.centerOffset !== 0,
                o = a ? 0 : e.arrowWidth,
                s = a ? 0 : e.arrowHeight,
                [c, l] = hn(n),
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
function hn(e) {
    let [t, n = `center`] = e.split(`-`);
    return [t, n];
}
var gn = [`top`, `right`, `bottom`, `left`],
    _n = Math.min,
    vn = Math.max,
    yn = Math.round,
    bn = Math.floor,
    xn = (e) => ({ x: e, y: e }),
    Sn = { left: `right`, right: `left`, bottom: `top`, top: `bottom` };
function Cn(e, t, n) {
    return vn(e, _n(t, n));
}
function wn(e, t) {
    return typeof e == `function` ? e(t) : e;
}
function Tn(e) {
    return e.split(`-`)[0];
}
function En(e) {
    return e.split(`-`)[1];
}
function Dn(e) {
    return e === `x` ? `y` : `x`;
}
function On(e) {
    return e === `y` ? `height` : `width`;
}
function kn(e) {
    let t = e[0];
    return t === `t` || t === `b` ? `y` : `x`;
}
function An(e) {
    return Dn(kn(e));
}
function jn(e, t, n) {
    n === void 0 && (n = !1);
    let r = En(e),
        i = An(e),
        a = On(i),
        o =
            i === `x`
                ? r === (n ? `end` : `start`)
                    ? `right`
                    : `left`
                : r === `start`
                  ? `bottom`
                  : `top`;
    return (t.reference[a] > t.floating[a] && (o = Bn(o)), [o, Bn(o)]);
}
function Mn(e) {
    let t = Bn(e);
    return [Nn(e), t, Nn(t)];
}
function Nn(e) {
    return e.includes(`start`)
        ? e.replace(`start`, `end`)
        : e.replace(`end`, `start`);
}
var Pn = [`left`, `right`],
    Fn = [`right`, `left`],
    In = [`top`, `bottom`],
    Ln = [`bottom`, `top`];
function Rn(e, t, n) {
    switch (e) {
        case `top`:
        case `bottom`:
            return n ? (t ? Fn : Pn) : t ? Pn : Fn;
        case `left`:
        case `right`:
            return t ? In : Ln;
        default:
            return [];
    }
}
function zn(e, t, n, r) {
    let i = En(e),
        a = Rn(Tn(e), n === `start`, r);
    return (
        i && ((a = a.map((e) => e + `-` + i)), t && (a = a.concat(a.map(Nn)))),
        a
    );
}
function Bn(e) {
    let t = Tn(e);
    return Sn[t] + e.slice(t.length);
}
function Vn(e) {
    return {
        top: e.top ?? 0,
        right: e.right ?? 0,
        bottom: e.bottom ?? 0,
        left: e.left ?? 0,
    };
}
function Hn(e) {
    return typeof e == `number`
        ? { top: e, right: e, bottom: e, left: e }
        : Vn(e);
}
function Un(e) {
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
function Wn(e, t, n) {
    let { reference: r, floating: i } = e,
        a = kn(t),
        o = An(t),
        s = On(o),
        c = Tn(t),
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
    let m = En(t);
    return (m && (p[o] += f * (m === `end` ? 1 : -1) * (n && l ? -1 : 1)), p);
}
async function Gn(e, t) {
    t === void 0 && (t = {});
    let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e,
        {
            boundary: c = `clippingAncestors`,
            rootBoundary: l = `viewport`,
            elementContext: u = `floating`,
            altBoundary: d = !1,
            padding: f = 0,
        } = wn(t, e),
        p = Hn(f),
        m = o[d ? (u === `floating` ? `reference` : `floating`) : u],
        h = Un(
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
        y = Un(
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
var Kn = 50,
    qn = async (e, t, n) => {
        let {
                placement: r = `bottom`,
                strategy: i = `absolute`,
                middleware: a = [],
                platform: o,
            } = n,
            s = o.detectOverflow ? o : { ...o, detectOverflow: Gn },
            c = await (o.isRTL == null ? void 0 : o.isRTL(t)),
            l = await o.getElementRects({
                reference: e,
                floating: t,
                strategy: i,
            }),
            { x: u, y: d } = Wn(l, r, c),
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
                    p < Kn &&
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
                        ({ x: u, y: d } = Wn(l, f, c))),
                    (n = -1)));
        }
        return { x: u, y: d, placement: f, strategy: i, middlewareData: m };
    },
    Jn = (e) => ({
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
                { element: l, padding: u = 0 } = wn(e, t) || {};
            if (l == null) return {};
            let d = Hn(u),
                f = { x: n, y: r },
                p = An(i),
                m = On(p),
                h = await o.getDimensions(l),
                g = p === `y`,
                _ = g ? `top` : `left`,
                v = g ? `bottom` : `right`,
                y = g ? `clientHeight` : `clientWidth`,
                b = a.reference[m] + a.reference[p] - f[p] - a.floating[m],
                x = f[p] - a.reference[p],
                ee = await (o.getOffsetParent == null
                    ? void 0
                    : o.getOffsetParent(l)),
                S = ee ? ee[y] : 0;
            (S && (await (o.isElement == null ? void 0 : o.isElement(ee)))) ||
                (S = s.floating[y] || a.floating[m]);
            let C = b / 2 - x / 2,
                w = S / 2 - h[m] / 2 - 1,
                T = _n(d[_], w),
                te = _n(d[v], w),
                E = S - h[m] - te,
                D = S / 2 - h[m] / 2 + C,
                O = Cn(T, D, E),
                k =
                    !c.arrow &&
                    En(i) != null &&
                    D !== O &&
                    a.reference[m] / 2 - (D < T ? T : te) - h[m] / 2 < 0,
                ne = k ? (D < T ? D - T : D - E) : 0;
            return {
                [p]: f[p] + ne,
                data: {
                    [p]: O,
                    centerOffset: D - O - ne,
                    ...(k && { alignmentOffset: ne }),
                },
                reset: k,
            };
        },
    }),
    Yn = function (e) {
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
                        } = wn(e, t);
                    if ((n = i.arrow) != null && n.alignmentOffset) return {};
                    let g = Tn(r),
                        _ = kn(o),
                        v = Tn(o) === o,
                        y = await (s.isRTL == null
                            ? void 0
                            : s.isRTL(c.floating)),
                        b = d || (v || !m ? [Bn(o)] : Mn(o)),
                        x = p !== `none`;
                    !d && x && b.push(...zn(o, m, p, y));
                    let ee = [o, ...b],
                        S = await s.detectOverflow(t, h),
                        C = [],
                        w = i.flip?.overflows || [];
                    if ((l && C.push(S[g]), u)) {
                        let e = jn(r, a, y);
                        C.push(S[e[0]], S[e[1]]);
                    }
                    if (
                        ((w = [...w, { placement: r, overflows: C }]),
                        !C.every((e) => e <= 0))
                    ) {
                        let e = (i.flip?.index || 0) + 1,
                            t = ee[e];
                        if (
                            t &&
                            (u !== `alignment` ||
                                _ === kn(t) ||
                                w.every(
                                    (e) =>
                                        kn(e.placement) !== _ ||
                                        e.overflows[0] > 0,
                                ))
                        )
                            return {
                                data: { index: e, overflows: w },
                                reset: { placement: t },
                            };
                        let n = w
                            .filter((e) => e.overflows[0] <= 0)
                            .sort(
                                (e, t) => e.overflows[1] - t.overflows[1],
                            )[0]?.placement;
                        if (!n)
                            switch (f) {
                                case `bestFit`: {
                                    let e = w
                                        .filter((e) => {
                                            if (x) {
                                                let t = kn(e.placement);
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
function Xn(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width,
    };
}
function Zn(e) {
    return gn.some((t) => e[t] >= 0);
}
var Qn = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: `hide`,
                options: e,
                async fn(t) {
                    let { rects: n, platform: r } = t,
                        { strategy: i = `referenceHidden`, ...a } = wn(e, t);
                    switch (i) {
                        case `referenceHidden`: {
                            let e = Xn(
                                await r.detectOverflow(t, {
                                    ...a,
                                    elementContext: `reference`,
                                }),
                                n.reference,
                            );
                            return {
                                data: {
                                    referenceHiddenOffsets: e,
                                    referenceHidden: Zn(e),
                                },
                            };
                        }
                        case `escaped`: {
                            let e = Xn(
                                await r.detectOverflow(t, {
                                    ...a,
                                    altBoundary: !0,
                                }),
                                n.floating,
                            );
                            return {
                                data: { escapedOffsets: e, escaped: Zn(e) },
                            };
                        }
                        default:
                            return {};
                    }
                },
            }
        );
    },
    $n = new Set([`left`, `top`]);
async function er(e, t) {
    let { placement: n, platform: r, elements: i } = e,
        a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)),
        o = Tn(n),
        s = En(n),
        c = kn(n) === `y`,
        l = $n.has(o) ? -1 : 1,
        u = a && c ? -1 : 1,
        d = wn(t, e),
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
var tr = function (e) {
        return (
            e === void 0 && (e = 0),
            {
                name: `offset`,
                options: e,
                async fn(t) {
                    var n;
                    let { x: r, y: i, placement: a, middlewareData: o } = t,
                        s = await er(t, e);
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
    nr = function (e) {
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
                        } = wn(e, t),
                        u = { x: n, y: r },
                        d = await a.detectOverflow(t, l),
                        f = kn(i),
                        p = Dn(f),
                        m = u[p],
                        h = u[f],
                        g = (e, t) =>
                            Cn(
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
    rr = function (e) {
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
                        } = wn(e, t),
                        u = { x: n, y: r },
                        d = kn(i),
                        f = Dn(d),
                        p = u[f],
                        m = u[d],
                        h = wn(s, t),
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
                            t = $n.has(Tn(i)),
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
    ir = function (e) {
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
                        { apply: o = () => {}, ...s } = wn(e, t),
                        c = await i.detectOverflow(t, s),
                        l = Tn(n),
                        u = En(n),
                        d = kn(n) === `y`,
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
                        v = _n(p - c[m], g),
                        y = _n(f - c[h], _),
                        b = t.middlewareData.shift,
                        x = !b,
                        ee = v,
                        S = y;
                    (b != null && b.enabled.x && (S = _),
                        b != null && b.enabled.y && (ee = g),
                        x &&
                            !u &&
                            (d
                                ? (S = f - 2 * vn(c.left, c.right))
                                : (ee = p - 2 * vn(c.top, c.bottom))),
                        await o({
                            ...t,
                            availableWidth: S,
                            availableHeight: ee,
                        }));
                    let C = await i.getDimensions(a.floating);
                    return f !== C.width || p !== C.height
                        ? { reset: { rects: !0 } }
                        : {};
                },
            }
        );
    };
function ar() {
    return typeof window < `u`;
}
function or(e) {
    return lr(e) ? (e.nodeName || ``).toLowerCase() : `#document`;
}
function sr(e) {
    var t;
    return (
        (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
        window
    );
}
function cr(e) {
    return ((lr(e) ? e.ownerDocument : e.document) || window.document)
        ?.documentElement;
}
function lr(e) {
    return ar() ? e instanceof Node || e instanceof sr(e).Node : !1;
}
function ur(e) {
    return ar() ? e instanceof Element || e instanceof sr(e).Element : !1;
}
function dr(e) {
    return ar()
        ? e instanceof HTMLElement || e instanceof sr(e).HTMLElement
        : !1;
}
function fr(e) {
    return !ar() || typeof ShadowRoot > `u`
        ? !1
        : e instanceof ShadowRoot || e instanceof sr(e).ShadowRoot;
}
function pr(e) {
    let { overflow: t, overflowX: n, overflowY: r, display: i } = wr(e);
    return (
        /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
        i !== `inline` &&
        i !== `contents`
    );
}
function mr(e) {
    return /^(table|td|th)$/.test(or(e));
}
function hr(e) {
    try {
        if (e.matches(`:popover-open`)) return !0;
    } catch {}
    try {
        return e.matches(`:modal`);
    } catch {
        return !1;
    }
}
var gr = /transform|translate|scale|rotate|perspective|filter/,
    _r = /paint|layout|strict|content/,
    vr = (e) => !!e && e !== `none`,
    yr;
function br(e) {
    let t = ur(e) ? wr(e) : e;
    return (
        vr(t.transform) ||
        vr(t.translate) ||
        vr(t.scale) ||
        vr(t.rotate) ||
        vr(t.perspective) ||
        (!Sr() && (vr(t.backdropFilter) || vr(t.filter))) ||
        gr.test(t.willChange || ``) ||
        _r.test(t.contain || ``)
    );
}
function xr(e) {
    let t = Er(e);
    for (; dr(t) && !Cr(t);) {
        if (br(t)) return t;
        if (hr(t)) return null;
        t = Er(t);
    }
    return null;
}
function Sr() {
    return (
        (yr ??=
            typeof CSS < `u` &&
            CSS.supports &&
            CSS.supports(`-webkit-backdrop-filter`, `none`)),
        yr
    );
}
function Cr(e) {
    return /^(html|body|#document)$/.test(or(e));
}
function wr(e) {
    return sr(e).getComputedStyle(e);
}
function Tr(e) {
    return ur(e)
        ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
        : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Er(e) {
    if (or(e) === `html`) return e;
    let t = e.assignedSlot || e.parentNode || (fr(e) && e.host) || cr(e);
    return fr(t) ? t.host : t;
}
function Dr(e) {
    let t = Er(e);
    return Cr(t) ? (e.ownerDocument || e).body : dr(t) && pr(t) ? t : Dr(t);
}
function Or(e, t, n) {
    (t === void 0 && (t = []), n === void 0 && (n = !0));
    let r = Dr(e),
        i = r === e.ownerDocument?.body,
        a = sr(r);
    if (i) {
        let e = kr(a);
        return t.concat(
            a,
            a.visualViewport || [],
            pr(r) ? r : [],
            e && n ? Or(e) : [],
        );
    }
    return t.concat(r, Or(r, [], n));
}
function kr(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ar(e) {
    let t = wr(e),
        n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0,
        i = dr(e),
        a = i ? e.offsetWidth : n,
        o = i ? e.offsetHeight : r,
        s = yn(n) !== a || yn(r) !== o;
    return (s && ((n = a), (r = o)), { width: n, height: r, $: s });
}
function jr(e) {
    return ur(e) ? e : e.contextElement;
}
function Mr(e) {
    let t = jr(e);
    if (!dr(t)) return xn(1);
    let n = t.getBoundingClientRect(),
        { width: r, height: i, $: a } = Ar(t),
        o = (a ? yn(n.width) : n.width) / r,
        s = (a ? yn(n.height) : n.height) / i;
    return (
        (o && Number.isFinite(o)) || (o = 1),
        (s && Number.isFinite(s)) || (s = 1),
        { x: o, y: s }
    );
}
var Nr = xn(0);
function Pr(e) {
    let t = sr(e);
    return !Sr() || !t.visualViewport
        ? Nr
        : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Fr(e, t, n) {
    return (t === void 0 && (t = !1), !!n && t && n === sr(e));
}
function Ir(e, t, n, r) {
    (t === void 0 && (t = !1), n === void 0 && (n = !1));
    let i = e.getBoundingClientRect(),
        a = jr(e),
        o = xn(1);
    t && (r ? ur(r) && (o = Mr(r)) : (o = Mr(e)));
    let s = Fr(a, n, r) ? Pr(a) : xn(0),
        c = (i.left + s.x) / o.x,
        l = (i.top + s.y) / o.y,
        u = i.width / o.x,
        d = i.height / o.y;
    if (a && r) {
        let e = sr(a),
            t = ur(r) ? sr(r) : r,
            n = e,
            i = kr(n);
        for (; i && t !== n;) {
            let e = Mr(i),
                t = i.getBoundingClientRect(),
                r = wr(i),
                a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
            ((c *= e.x),
                (l *= e.y),
                (u *= e.x),
                (d *= e.y),
                (c += a),
                (l += o),
                (n = sr(i)),
                (i = kr(n)));
        }
    }
    return Un({ width: u, height: d, x: c, y: l });
}
function Lr(e, t) {
    let n = Tr(e).scrollLeft;
    return t ? t.left + n : Ir(cr(e)).left + n;
}
function Rr(e, t) {
    let n = e.getBoundingClientRect();
    return { x: n.left + t.scrollLeft - Lr(e, n), y: n.top + t.scrollTop };
}
function zr(e) {
    let { elements: t, rect: n, offsetParent: r, strategy: i } = e,
        a = i === `fixed`,
        o = cr(r),
        s = t ? hr(t.floating) : !1;
    if (r === o || (s && a)) return n;
    let c = { scrollLeft: 0, scrollTop: 0 },
        l = xn(1),
        u = xn(0),
        d = dr(r);
    if ((d || !a) && ((or(r) !== `body` || pr(o)) && (c = Tr(r)), d)) {
        let e = Ir(r);
        ((l = Mr(r)), (u.x = e.x + r.clientLeft), (u.y = e.y + r.clientTop));
    }
    let f = o && !d && !a ? Rr(o, c) : xn(0);
    return {
        width: n.width * l.x,
        height: n.height * l.y,
        x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
        y: n.y * l.y - c.scrollTop * l.y + u.y + f.y,
    };
}
function Br(e) {
    return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function Vr(e) {
    let t = Tr(e),
        n = e.ownerDocument.body,
        r = vn(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth),
        i = vn(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight),
        a = -t.scrollLeft + Lr(e),
        o = -t.scrollTop;
    return (
        wr(n).direction === `rtl` &&
            (a += vn(e.clientWidth, n.clientWidth) - r),
        { width: r, height: i, x: a, y: o }
    );
}
var Hr = 25;
function Ur(e, t, n) {
    n === void 0 && (n = `viewport`);
    let r = n === `layoutViewport`,
        i = sr(e),
        a = cr(e),
        o = i.visualViewport,
        s = a.clientWidth,
        c = a.clientHeight,
        l = 0,
        u = 0;
    if (o) {
        let e = !Sr() || t === `fixed`;
        r
            ? e || ((l = -o.offsetLeft), (u = -o.offsetTop))
            : ((s = o.width),
              (c = o.height),
              e && ((l = o.offsetLeft), (u = o.offsetTop)));
    }
    if (Lr(a) <= 0) {
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
        o <= Hr && (s -= o);
    }
    return { width: s, height: c, x: l, y: u };
}
function Wr(e, t) {
    let n = Ir(e, !0, t === `fixed`),
        r = n.top + e.clientTop,
        i = n.left + e.clientLeft,
        a = Mr(e);
    return {
        width: e.clientWidth * a.x,
        height: e.clientHeight * a.y,
        x: i * a.x,
        y: r * a.y,
    };
}
function Gr(e, t, n) {
    let r;
    if (t === `viewport` || t === `layoutViewport`) r = Ur(e, n, t);
    else if (t === `document`) r = Vr(cr(e));
    else if (ur(t)) r = Wr(t, n);
    else {
        let n = Pr(e);
        r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
    }
    return Un(r);
}
function Kr(e, t) {
    let n = t.get(e);
    if (n) return n;
    let r = Or(e, [], !1).filter((e) => ur(e) && or(e) !== `body`),
        i = null,
        a = wr(e).position === `fixed`,
        o = a ? Er(e) : e;
    for (; ur(o) && !Cr(o);) {
        let e = wr(o),
            t = br(o),
            n = i ? i.position : a ? `fixed` : ``;
        (!t && (n === `fixed` || (n === `absolute` && e.position === `static`))
            ? (r = r.filter((e) => e !== o))
            : (i = e),
            (o = Er(o)));
    }
    return (t.set(e, r), r);
}
function qr(e) {
    let { element: t, boundary: n, rootBoundary: r, strategy: i } = e,
        a = [
            ...(n === `clippingAncestors`
                ? hr(t)
                    ? []
                    : Kr(t, this._c)
                : [].concat(n)),
            r,
        ],
        o = Gr(t, a[0], i),
        s = o.top,
        c = o.right,
        l = o.bottom,
        u = o.left;
    for (let e = 1; e < a.length; e++) {
        let n = Gr(t, a[e], i);
        ((s = vn(n.top, s)),
            (c = _n(n.right, c)),
            (l = _n(n.bottom, l)),
            (u = vn(n.left, u)));
    }
    return { width: c - u, height: l - s, x: u, y: s };
}
function Jr(e) {
    let { width: t, height: n } = Ar(e);
    return { width: t, height: n };
}
function Yr(e, t, n) {
    let r = dr(t),
        i = cr(t),
        a = n === `fixed`,
        o = Ir(e, !0, a, t),
        s = { scrollLeft: 0, scrollTop: 0 },
        c = xn(0);
    if ((r || !a) && ((or(t) !== `body` || pr(i)) && (s = Tr(t)), r)) {
        let e = Ir(t, !0, a, t);
        ((c.x = e.x + t.clientLeft), (c.y = e.y + t.clientTop));
    }
    !r && i && (c.x = Lr(i));
    let l = i && !r && !a ? Rr(i, s) : xn(0);
    return {
        x: o.left + s.scrollLeft - c.x - l.x,
        y: o.top + s.scrollTop - c.y - l.y,
        width: o.width,
        height: o.height,
    };
}
function Xr(e) {
    return wr(e).position === `static`;
}
function Zr(e, t) {
    if (!dr(e) || wr(e).position === `fixed`) return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return (cr(e) === n && (n = n.ownerDocument.body), n);
}
function Qr(e, t) {
    let n = sr(e);
    if (hr(e)) return n;
    if (!dr(e)) {
        let t = Er(e);
        for (; t && !Cr(t);) {
            if (ur(t) && !Xr(t)) return t;
            t = Er(t);
        }
        return n;
    }
    let r = Zr(e, t);
    for (; r && mr(r) && Xr(r);) r = Zr(r, t);
    return r && Cr(r) && Xr(r) && !br(r) ? n : r || xr(e) || n;
}
var $r = async function (e) {
    let t = this.getOffsetParent || Qr,
        n = this.getDimensions,
        r = await n(e.floating);
    return {
        reference: Yr(e.reference, await t(e.floating), e.strategy),
        floating: { x: 0, y: 0, width: r.width, height: r.height },
    };
};
function ei(e) {
    return wr(e).direction === `rtl`;
}
var ti = {
    convertOffsetParentRelativeRectToViewportRelativeRect: zr,
    getDocumentElement: cr,
    getClippingRect: qr,
    getOffsetParent: Qr,
    getElementRects: $r,
    getClientRects: Br,
    getDimensions: Jr,
    getScale: Mr,
    isElement: ur,
    isRTL: ei,
};
function ni(e, t) {
    return (
        e.x === t.x &&
        e.y === t.y &&
        e.width === t.width &&
        e.height === t.height
    );
}
function ri(e, t, n) {
    let r = null,
        i,
        a = cr(e);
    function o() {
        var e;
        (clearTimeout(i), (e = r) == null || e.disconnect(), (r = null));
    }
    function s(n, c) {
        (n === void 0 && (n = !1), c === void 0 && (c = 1), o());
        let l = e.getBoundingClientRect(),
            { left: u, top: d, width: f, height: p } = l;
        if ((n || t(), !f || !p)) return;
        let m = bn(d),
            h = bn(a.clientWidth - (u + f)),
            g = bn(a.clientHeight - (d + p)),
            _ = bn(u),
            v = {
                rootMargin: -m + `px ` + -h + `px ` + -g + `px ` + -_ + `px`,
                threshold: vn(0, _n(1, c)) || 1,
            },
            y = !0;
        function b(t) {
            let n = t[0].intersectionRatio;
            if (!ni(l, e.getBoundingClientRect())) return s();
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
    let c = sr(e),
        l = () => s(n);
    return (
        c.addEventListener(`resize`, l),
        s(!0),
        () => {
            (c.removeEventListener(`resize`, l), o());
        }
    );
}
function ii(e, t, n, r) {
    r === void 0 && (r = {});
    let {
            ancestorScroll: i = !0,
            ancestorResize: a = !0,
            elementResize: o = typeof ResizeObserver == `function`,
            layoutShift: s = typeof IntersectionObserver == `function`,
            animationFrame: c = !1,
        } = r,
        l = jr(e),
        u = i || a ? [...(l ? Or(l) : []), ...(t ? Or(t) : [])] : [];
    u.forEach((e) => {
        (i && e.addEventListener(`scroll`, n),
            a && e.addEventListener(`resize`, n));
    });
    let d = l && s ? ri(l, n, a) : null,
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
        h = c ? Ir(e) : null;
    c && g();
    function g() {
        let t = Ir(e);
        (h && !ni(h, t) && n(), (h = t), (m = requestAnimationFrame(g)));
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
var ai = tr,
    oi = nr,
    si = Yn,
    ci = ir,
    li = Qn,
    ui = Jn,
    di = rr,
    fi = (e, t, n) => {
        let r = new Map(),
            i = n ?? {},
            a = { ...ti, ...i.platform, _c: r };
        return qn(e, t, { ...i, platform: a });
    };
function pi(e) {
    return typeof e == `object` && !!e && `$el` in e;
}
function mi(e) {
    if (pi(e)) {
        let t = e.$el;
        return lr(t) && or(t) === `#comment` ? null : t;
    }
    return e;
}
function hi(e) {
    return {
        name: `arrow`,
        options: e,
        fn(t) {
            let n = mi(de(e.element));
            return n == null
                ? {}
                : ui({ element: n, padding: e.padding }).fn(t);
        },
    };
}
function gi(e) {
    return typeof window > `u`
        ? 1
        : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function _i(e, t) {
    let n = gi(e);
    return Math.round(t * n) / n;
}
function vi(e, t, n) {
    n === void 0 && (n = {});
    let r = n.whileElementsMounted,
        i = R(() => de(n.open) ?? !0),
        a = R(() => de(n.middleware)),
        o = R(() => de(n.placement) ?? `bottom`),
        s = R(() => de(n.strategy) ?? `absolute`),
        c = R(() => de(n.transform) ?? !0),
        l = R(() => mi(e.value)),
        u = R(() => mi(t.value)),
        d = C(0),
        f = C(0),
        p = C(s.value),
        m = C(o.value),
        g = O({}),
        _ = C(!1),
        v = R(() => {
            let e = { position: p.value, left: `0`, top: `0` };
            if (!u.value) return e;
            let t = _i(u.value, d.value),
                n = _i(u.value, f.value);
            return c.value
                ? {
                      ...e,
                      transform: `translate(` + t + `px, ` + n + `px)`,
                      ...(gi(u.value) >= 1.5 && { willChange: `transform` }),
                  }
                : { position: p.value, left: t + `px`, top: n + `px` };
        }),
        y;
    function b() {
        if (l.value == null || u.value == null) return;
        let e = i.value;
        fi(l.value, u.value, {
            middleware: a.value,
            placement: o.value,
            strategy: s.value,
        }).then((t) => {
            ((d.value = t.x),
                (f.value = t.y),
                (p.value = t.strategy),
                (m.value = t.placement),
                (g.value = t.middlewareData),
                (_.value = e !== !1));
        });
    }
    function x() {
        typeof y == `function` && (y(), (y = void 0));
    }
    function ee() {
        (x(),
            r === void 0
                ? b()
                : l.value != null &&
                  u.value != null &&
                  (y = r(l.value, u.value, b)));
    }
    function S() {
        i.value || (_.value = !1);
    }
    return (
        P([a, o, s, i], b, { flush: `sync` }),
        P([l, u], ee, { flush: `sync` }),
        P(i, S, { flush: `sync` }),
        h() && ne(x),
        {
            x: ge(d),
            y: ge(f),
            strategy: ge(p),
            placement: ge(m),
            middlewareData: ge(g),
            isPositioned: ge(_),
            floatingStyles: v,
            update: b,
        }
    );
}
var yi = [`dir`],
    bi = {
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
    [xi, Si] = e(`PopperContent`),
    Ci = A({
        inheritAttrs: !1,
        __name: `PopperContent`,
        props: Ce(
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
            { ...bi },
        ),
        emits: [`placed`],
        setup(e, { emit: t }) {
            let n = e,
                r = t,
                i = on(),
                { forwardRef: a, currentElement: s } = G(),
                c = ze(R(() => n.dir)),
                l = C(),
                u = C(),
                { width: d, height: f } = bt(u),
                p = R(
                    () => n.side + (n.align === `center` ? `` : `-${n.align}`),
                ),
                m = R(() =>
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
                h = R(() =>
                    Array.isArray(n.collisionBoundary)
                        ? n.collisionBoundary
                        : [n.collisionBoundary],
                ),
                v = R(() => ({
                    padding: m.value,
                    boundary: h.value.filter(pn),
                    altBoundary: h.value.length > 0,
                })),
                y = R(() => ({ mainAxis: n.sideFlip, crossAxis: n.alignFlip })),
                x = R(() => [
                    ai({
                        mainAxis: n.sideOffset + f.value,
                        alignmentAxis: n.alignOffset,
                    }),
                    n.prioritizePosition &&
                        n.avoidCollisions &&
                        si({ ...v.value, ...y.value }),
                    n.avoidCollisions &&
                        oi({
                            mainAxis: !0,
                            crossAxis: !!n.prioritizePosition,
                            limiter: n.sticky === `partial` ? di() : void 0,
                            ...v.value,
                        }),
                    !n.prioritizePosition &&
                        n.avoidCollisions &&
                        si({ ...v.value, ...y.value }),
                    ci({
                        ...v.value,
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
                    u.value &&
                        hi({ element: u.value, padding: n.arrowPadding }),
                    mn({
                        arrowWidth: d.value,
                        arrowHeight: f.value,
                        dir: c.value,
                    }),
                    n.hideWhenDetached &&
                        li({ strategy: `referenceHidden`, ...v.value }),
                ]),
                {
                    floatingStyles: ee,
                    placement: S,
                    isPositioned: T,
                    middlewareData: E,
                    update: O,
                } = vi(
                    R(() => n.reference ?? i.anchor.value),
                    l,
                    {
                        strategy: n.positionStrategy,
                        placement: p,
                        whileElementsMounted: (...e) =>
                            ii(...e, {
                                layoutShift: !n.disableUpdateOnLayoutShift,
                                animationFrame:
                                    n.updatePositionStrategy === `always`,
                            }),
                        middleware: x,
                    },
                ),
                k = R(() => hn(S.value)[0]),
                ne = R(() => hn(S.value)[1]);
            oe(() => {
                T.value && r(`placed`);
            });
            let re = R(() => {
                    let e = E.value.arrow?.centerOffset !== 0;
                    return n.hideShiftedArrow && e;
                }),
                ie = C(``);
            return (
                o(() => {
                    s.value &&
                        (ie.value = window.getComputedStyle(s.value).zIndex);
                }),
                Si({
                    placedSide: k,
                    onArrowChange: (e) => (u.value = e),
                    arrowX: R(() => E.value.arrow?.x ?? 0),
                    arrowY: R(() => E.value.arrow?.y ?? 0),
                    shouldHideArrow: re,
                }),
                (e, t) => (
                    V(),
                    B(
                        `div`,
                        {
                            ref_key: `floatingRef`,
                            ref: l,
                            'data-reka-popper-content-wrapper': ``,
                            dir: j(c),
                            style: te({
                                ...j(ee),
                                transform: j(T)
                                    ? j(ee).transform
                                    : `translate(0, -200%)`,
                                minWidth: `max-content`,
                                zIndex: ie.value,
                                '--reka-popper-transform-origin': [
                                    j(E).transformOrigin?.x,
                                    j(E).transformOrigin?.y,
                                ].join(` `),
                                ...(j(E).hide?.referenceHidden && {
                                    visibility: `hidden`,
                                    pointerEvents: `none`,
                                }),
                            }),
                        },
                        [
                            n.memoDependencies
                                ? g(
                                      [
                                          n.asChild,
                                          n.as,
                                          k.value,
                                          ne.value,
                                          j(T),
                                          ...Object.values(e.$attrs),
                                          ...n.memoDependencies,
                                      ],
                                      () => (
                                          V(),
                                          w(
                                              j(M),
                                              b(
                                                  { key: 0, ref: j(a) },
                                                  e.$attrs,
                                                  {
                                                      'as-child': n.asChild,
                                                      as: n.as,
                                                      'data-side': k.value,
                                                      'data-align': ne.value,
                                                      style: {
                                                          animation: j(T)
                                                              ? void 0
                                                              : `none`,
                                                      },
                                                  },
                                              ),
                                              {
                                                  default: _(() => [
                                                      D(e.$slots, `default`),
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
                                : (V(),
                                  w(
                                      j(M),
                                      b({ key: 1, ref: j(a) }, e.$attrs, {
                                          'as-child': n.asChild,
                                          as: n.as,
                                          'data-side': k.value,
                                          'data-align': ne.value,
                                          dir: j(c),
                                          style: {
                                              animation: j(T) ? void 0 : `none`,
                                          },
                                      }),
                                      {
                                          default: _(() => [
                                              D(e.$slots, `default`),
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
                        yi,
                    )
                )
            );
        },
    }),
    wi = { top: `bottom`, right: `left`, bottom: `top`, left: `right` },
    Ti = A({
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
                n = xi(),
                r = R(() => wi[n.placedSide.value]);
            return (i, a) => (
                V(),
                B(
                    `span`,
                    {
                        ref: (e) => {
                            j(n).onArrowChange(e ?? void 0);
                        },
                        style: te({
                            position: `absolute`,
                            left: j(n).arrowX?.value
                                ? `${j(n).arrowX?.value}px`
                                : void 0,
                            top: j(n).arrowY?.value
                                ? `${j(n).arrowY?.value}px`
                                : void 0,
                            [r.value]: 0,
                            transformOrigin: {
                                top: ``,
                                right: `0 0`,
                                bottom: `center 0`,
                                left: `100% 0`,
                            }[j(n).placedSide.value],
                            transform: {
                                top: `translateY(100%)`,
                                right: `translateY(50%) rotate(90deg) translateX(-50%)`,
                                bottom: `rotate(180deg)`,
                                left: `translateY(50%) rotate(-90deg) translateX(50%)`,
                            }[j(n).placedSide.value],
                            visibility: j(n).shouldHideArrow.value
                                ? `hidden`
                                : void 0,
                        }),
                    },
                    [
                        F(
                            fn,
                            b(i.$attrs, {
                                ref: j(t),
                                style: { display: `block` },
                                as: e.as,
                                'as-child': e.asChild,
                                rounded: e.rounded,
                                width: e.width,
                                height: e.height,
                            }),
                            {
                                default: _(() => [D(i.$slots, `default`)]),
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
    [Ei, Di] = e(`AvatarRoot`),
    Oi = A({
        __name: `AvatarRoot`,
        props: {
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1, default: `span` },
        },
        setup(e) {
            return (
                G(),
                Di({ imageLoadingStatus: C(`idle`) }),
                (t, n) => (
                    V(),
                    w(
                        j(M),
                        { 'as-child': e.asChild, as: e.as },
                        { default: _(() => [D(t.$slots, `default`)]), _: 3 },
                        8,
                        [`as-child`, `as`],
                    )
                )
            );
        },
    }),
    ki = A({
        __name: `AvatarFallback`,
        props: {
            delayMs: { type: Number, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1, default: `span` },
        },
        setup(e) {
            let t = e,
                n = Ei();
            G();
            let r = C(t.delayMs === void 0);
            return (
                o((e) => {
                    if (t.delayMs && Ne) {
                        let n = window.setTimeout(() => {
                            r.value = !0;
                        }, t.delayMs);
                        e(() => {
                            window.clearTimeout(n);
                        });
                    }
                }),
                (t, i) =>
                    r.value && j(n).imageLoadingStatus.value !== `loaded`
                        ? (V(),
                          w(
                              j(M),
                              { key: 0, 'as-child': e.asChild, as: e.as },
                              {
                                  default: _(() => [D(t.$slots, `default`)]),
                                  _: 3,
                              },
                              8,
                              [`as-child`, `as`],
                          ))
                        : le(`v-if`, !0)
            );
        },
    });
function Ai(e, t) {
    return e
        ? t
            ? (e.src !== t && (e.src = t),
              e.complete && e.naturalWidth > 0 ? `loaded` : `loading`)
            : `error`
        : `idle`;
}
function ji(e, { referrerPolicy: t, crossOrigin: n } = {}) {
    let r = C(!1),
        i = C(null),
        s = R(() =>
            r.value
                ? (!i.value && Ne && (i.value = new window.Image()), i.value)
                : null,
        ),
        c = C(Ai(s.value, e.value)),
        l = (e) => () => {
            r.value && (c.value = e);
        };
    return (
        x(() => {
            ((r.value = !0),
                o((r) => {
                    let i = s.value;
                    if (!i) return;
                    c.value = Ai(i, e.value);
                    let a = l(`loaded`),
                        o = l(`error`);
                    (i.addEventListener(`load`, a),
                        i.addEventListener(`error`, o),
                        t?.value && (i.referrerPolicy = t.value),
                        typeof n?.value == `string` &&
                            (i.crossOrigin = n.value),
                        r(() => {
                            (i.removeEventListener(`load`, a),
                                i.removeEventListener(`error`, o));
                        }));
                }));
        }),
        a(() => {
            r.value = !1;
        }),
        c
    );
}
var Mi = A({
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
                { src: i, referrerPolicy: a, crossOrigin: o } = re(n);
            G();
            let s = Ei(),
                c = ji(i, { referrerPolicy: a, crossOrigin: o });
            return (
                P(
                    c,
                    (e) => {
                        (r(`loadingStatusChange`, e),
                            e !== `idle` && (s.imageLoadingStatus.value = e));
                    },
                    { immediate: !0 },
                ),
                (t, n) =>
                    m(
                        (V(),
                        w(
                            j(M),
                            {
                                role: `img`,
                                'as-child': e.asChild,
                                as: e.as,
                                src: j(i),
                                referrerpolicy: j(a),
                                crossorigin: j(o),
                            },
                            {
                                default: _(() => [D(t.$slots, `default`)]),
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
                        [[Se, j(c) === `loaded`]],
                    )
            );
        },
    }),
    [Ni, Pi] = e(`RovingFocusGroup`),
    Fi = A({
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
                { loop: a, orientation: o, dir: s } = re(r),
                c = ze(s),
                l = Le(r, `currentTabStopId`, i, {
                    defaultValue: r.defaultCurrentTabStopId,
                    passive: r.currentTabStopId === void 0,
                }),
                u = C(!1),
                d = C(!1),
                f = C(0),
                { getItems: p, CollectionSlot: m } = Xt({ isProvider: !0 });
            function h(e) {
                let t = !d.value;
                if (
                    e.currentTarget &&
                    e.target === e.currentTarget &&
                    t &&
                    !u.value
                ) {
                    let t = new CustomEvent(Qt, $t);
                    if (
                        (e.currentTarget.dispatchEvent(t),
                        i(`entryFocus`, t),
                        !t.defaultPrevented)
                    ) {
                        let e = p()
                            .map((e) => e.ref)
                            .filter((e) => e.dataset.disabled !== ``);
                        rn(
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
            function g() {
                setTimeout(() => {
                    d.value = !1;
                }, 1);
            }
            return (
                t({ getItems: p }),
                Pi({
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
                    V(),
                    w(j(m), null, {
                        default: _(() => [
                            F(
                                j(M),
                                {
                                    tabindex: u.value || f.value === 0 ? -1 : 0,
                                    'data-orientation': j(o),
                                    as: e.as,
                                    'as-child': e.asChild,
                                    dir: j(c),
                                    style: { outline: `none` },
                                    onMousedown: (n[0] ||= (e) =>
                                        (d.value = !0)),
                                    onMouseup: g,
                                    onFocus: h,
                                    onBlur: (n[1] ||= (e) => (u.value = !1)),
                                },
                                {
                                    default: _(() => [D(t.$slots, `default`)]),
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
    Ii = A({
        __name: `MenuAnchor`,
        props: {
            reference: { type: null, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
        },
        setup(e) {
            let t = e;
            return (e, n) => (
                V(),
                w(
                    j(ln),
                    W(u(t)),
                    { default: _(() => [D(e.$slots, `default`)]), _: 3 },
                    16,
                )
            );
        },
    });
function Li() {
    let e = C(!1);
    return (
        x(() => {
            (je(
                `keydown`,
                () => {
                    e.value = !0;
                },
                { capture: !0, passive: !0 },
            ),
                je(
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
var Ri = Re(Li),
    [zi, Bi] = e([`MenuRoot`, `MenuSub`], `MenuContext`),
    [Vi, Hi] = e(`MenuRoot`),
    Ui = A({
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
                { modal: i, dir: a } = re(n),
                o = ze(a),
                s = Le(n, `open`, r),
                c = C(),
                l = Ri();
            return (
                Bi({
                    open: s,
                    onOpenChange: (e) => {
                        s.value = e;
                    },
                    content: c,
                    onContentChange: (e) => {
                        c.value = e;
                    },
                }),
                Hi({
                    onClose: () => {
                        s.value = !1;
                    },
                    isUsingKeyboardRef: l,
                    dir: o,
                    modal: i,
                }),
                (e, t) => (
                    V(),
                    w(j(cn), null, {
                        default: _(() => [D(e.$slots, `default`)]),
                        _: 3,
                    })
                )
            );
        },
    }),
    [Wi, Gi] = e(`MenuContent`),
    Ki = A({
        __name: `MenuContentImpl`,
        props: Ce(
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
            { ...bi },
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
                o = zi(),
                s = Vi(),
                {
                    trapFocus: c,
                    disableOutsidePointerEvents: l,
                    loop: u,
                } = re(r);
            (dt(), we(l.value));
            let d = C(``),
                f = C(0),
                p = C(0),
                m = C(null),
                h = C(`right`),
                g = C(0),
                v = C(null),
                y = C(),
                { forwardRef: b, currentElement: x } = G(),
                { handleTypeaheadSearch: ee } = xt(),
                S = C();
            function T(e) {
                let n = ct(e, S.value || t(), x.value, {
                    loop: u.value,
                    arrowKeyOptions: `vertical`,
                    dir: s?.dir.value,
                    focus: !1,
                    attributeName: `[data-reka-collection-item]:not([data-disabled])`,
                });
                n && ((S.value = n), n.scrollIntoView({ block: `nearest` }));
            }
            function te() {
                S.value && S.value.click();
            }
            let E = C(),
                O = C();
            (P(S, (e) => {
                if (O.value && (e === void 0 || e !== O.value.trigger.value)) {
                    if (e === void 0) return;
                    (O.value.onOpenChange(!1), (O.value = void 0));
                }
            }),
                P(x, (e) => {
                    o.onContentChange(e);
                }),
                a(() => {
                    window.clearTimeout(f.value);
                }));
            function k(e) {
                return h.value === m.value?.side && Rt(e, m.value?.area);
            }
            async function ne(e) {
                (i(`openAutoFocus`, e),
                    !e.defaultPrevented &&
                        (e.preventDefault(),
                        x.value?.focus({ preventScroll: !0 })));
            }
            function ie(e) {
                if (e.defaultPrevented) return;
                let n = e.target,
                    r =
                        n.closest(`[data-reka-menu-content]`) ===
                        e.currentTarget,
                    i = [`input`, `textarea`].includes(n.tagName.toLowerCase()),
                    a = e.ctrlKey || e.altKey || e.metaKey,
                    o = e.key.length === 1,
                    c = ct(e, t(), x.value, {
                        loop: u.value,
                        arrowKeyOptions: `vertical`,
                        dir: s?.dir.value,
                        focus: !0,
                        attributeName: `[data-reka-collection-item]:not([data-disabled])`,
                    });
                if (c) return c?.focus();
                if (e.code === `Space`) return;
                let l = y.value?.getItems() ?? [];
                if (
                    (r &&
                        (e.key === `Tab` && s.modal.value && e.preventDefault(),
                        !a && o && !i && ee(e.key, l)),
                    e.target !== x.value || !Nt.includes(e.key))
                )
                    return;
                e.preventDefault();
                let d = [...l.map((e) => e.ref)];
                (Mt.includes(e.key) && d.reverse(), It(d));
            }
            function A(e) {
                e?.currentTarget?.contains?.(e.target) ||
                    (window.clearTimeout(f.value), (d.value = ``));
            }
            function M(e) {
                if (!zt(e)) return;
                let t = e.target,
                    n = g.value !== e.clientX;
                if (e?.currentTarget?.contains(t) && n) {
                    let t = e.clientX > g.value ? `right` : `left`;
                    ((h.value = t), (g.value = e.clientX));
                }
            }
            function ae(e) {
                zt(e) && E.value && E.value.focus();
            }
            return (
                Gi({
                    onItemEnter: (e) => !!k(e),
                    onItemLeave: (e) =>
                        k(e)
                            ? !0
                            : ([`INPUT`, `TEXTAREA`].includes(
                                  t()?.tagName || ``,
                              ) || x.value?.focus(),
                              (v.value = null),
                              !1),
                    onTriggerLeave: (e) => !!k(e),
                    searchRef: d,
                    highlightedElement: S,
                    onKeydownNavigation: T,
                    onKeydownEnter: te,
                    filterElement: E,
                    onFilterElementChange: (e) => {
                        E.value = e;
                    },
                    activeSubmenuContext: O,
                    pointerGraceTimerRef: p,
                    onPointerGraceIntentChange: (e) => {
                        m.value = e;
                    },
                }),
                (t, n) => (
                    V(),
                    w(
                        j(Ee),
                        {
                            'as-child': ``,
                            trapped: j(c),
                            onMountAutoFocus: ne,
                            onUnmountAutoFocus: (n[7] ||= (e) =>
                                i(`closeAutoFocus`, e)),
                        },
                        {
                            default: _(() => [
                                F(
                                    j(Oe),
                                    {
                                        'as-child': ``,
                                        'disable-outside-pointer-events': j(l),
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
                                        default: _(() => [
                                            F(
                                                j(Fi),
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
                                                    dir: j(s).dir.value,
                                                    loop: j(u),
                                                    onEntryFocus: (n[1] ||= (
                                                        e,
                                                    ) => {
                                                        (i(`entryFocus`, e),
                                                            j(s)
                                                                .isUsingKeyboardRef
                                                                .value ||
                                                                e.preventDefault());
                                                    }),
                                                },
                                                {
                                                    default: _(() => [
                                                        F(
                                                            j(Ci),
                                                            {
                                                                ref: j(b),
                                                                role: `menu`,
                                                                as: e.as,
                                                                'as-child':
                                                                    e.asChild,
                                                                'aria-orientation': `vertical`,
                                                                'data-reka-menu-content': ``,
                                                                'data-state': j(
                                                                    Pt,
                                                                )(
                                                                    j(o).open
                                                                        .value,
                                                                ),
                                                                dir: j(s).dir
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
                                                                onKeydown: ie,
                                                                onBlur: A,
                                                                onPointermove:
                                                                    M,
                                                                onPointerenter:
                                                                    ae,
                                                            },
                                                            {
                                                                default: _(
                                                                    () => [
                                                                        D(
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
    qi = A({
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
                r = Wi(),
                { forwardRef: i, currentElement: a } = G(),
                { CollectionItem: o } = Xt(),
                s = C(!1),
                c = R(
                    () =>
                        s.value ||
                        (a.value != null &&
                            r.highlightedElement.value === a.value),
                );
            async function l(e) {
                if (!e.defaultPrevented && zt(e)) {
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
            async function u(e) {
                (await p(),
                    !e.defaultPrevented &&
                        zt(e) &&
                        r.highlightedElement.value === a.value &&
                        !r.onItemLeave(e) &&
                        r.highlightedElement.value === a.value &&
                        (r.highlightedElement.value = void 0));
            }
            return (t, n) => (
                V(),
                w(
                    j(o),
                    { value: { textValue: e.textValue } },
                    {
                        default: _(() => [
                            F(
                                j(M),
                                b(
                                    {
                                        ref: j(i),
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
                                        'data-highlighted': c.value
                                            ? ``
                                            : void 0,
                                        onPointermove: l,
                                        onPointerleave: u,
                                        onFocus: (n[0] ||= async (t) => {
                                            let n = t.currentTarget;
                                            (await p(),
                                                !(
                                                    t.defaultPrevented ||
                                                    e.disabled
                                                ) &&
                                                    ((s.value = !0),
                                                    (j(
                                                        r,
                                                    ).highlightedElement.value =
                                                        n)));
                                        }),
                                        onBlur: (n[1] ||= async (e) => {
                                            (await p(),
                                                !e.defaultPrevented &&
                                                    (s.value = !1));
                                        }),
                                    },
                                ),
                                {
                                    default: _(() => [D(t.$slots, `default`)]),
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
    Ji = A({
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
                o = Vi(),
                s = Wi(),
                c = C(!1);
            async function l() {
                let e = a.value;
                if (!n.disabled && e) {
                    let e = new CustomEvent(kt, {
                        bubbles: !0,
                        cancelable: !0,
                    });
                    (r(`select`, e),
                        await p(),
                        e.defaultPrevented ? (c.value = !1) : o.onClose());
                }
            }
            return (t, r) => (
                V(),
                w(
                    qi,
                    b(n, {
                        ref: j(i),
                        onClick: l,
                        onPointerdown: (r[0] ||= () => {
                            c.value = !0;
                        }),
                        onPointerup: (r[1] ||= async (e) => {
                            (await p(),
                                e.defaultPrevented ||
                                    c.value ||
                                    e.currentTarget?.click());
                        }),
                        onKeydown: (r[2] ||= async (t) => {
                            let n = j(s).searchRef.value !== ``;
                            e.disabled ||
                                (n && t.key === ` `) ||
                                (j(At).includes(t.key) &&
                                    (t.currentTarget?.click(),
                                    t.preventDefault()));
                        }),
                    }),
                    { default: _(() => [D(t.$slots, `default`)]), _: 3 },
                    16,
                )
            );
        },
    }),
    Yi = A({
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
                i = He(n, r),
                a = zi(),
                { forwardRef: o, currentElement: s } = G();
            return (
                Te(s),
                (e, t) => (
                    V(),
                    w(
                        Ki,
                        b(j(i), {
                            ref: j(o),
                            'trap-focus': j(a).open.value,
                            'disable-outside-pointer-events': j(a).open.value,
                            'disable-outside-scroll': !0,
                            onDismiss: (t[0] ||= (e) => j(a).onOpenChange(!1)),
                            onFocusOutside: (t[1] ||= y(
                                (e) => r(`focusOutside`, e),
                                [`prevent`],
                            )),
                        }),
                        { default: _(() => [D(e.$slots, `default`)]), _: 3 },
                        16,
                        [`trap-focus`, `disable-outside-pointer-events`],
                    )
                )
            );
        },
    }),
    Xi = A({
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
            let n = He(e, t),
                r = zi();
            return (e, t) => (
                V(),
                w(
                    Ki,
                    b(j(n), {
                        'trap-focus': !1,
                        'disable-outside-pointer-events': !1,
                        'disable-outside-scroll': !1,
                        onDismiss: (t[0] ||= (e) => j(r).onOpenChange(!1)),
                    }),
                    { default: _(() => [D(e.$slots, `default`)]), _: 3 },
                    16,
                )
            );
        },
    }),
    Zi = A({
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
            let n = He(e, t),
                i = zi(),
                a = Vi();
            return (t, o) => (
                V(),
                w(
                    j(r),
                    { present: e.forceMount || j(i).open.value },
                    {
                        default: _(() => [
                            j(a).modal.value
                                ? (V(),
                                  w(
                                      Yi,
                                      W(
                                          b(
                                              { key: 0 },
                                              { ...t.$attrs, ...j(n) },
                                          ),
                                      ),
                                      {
                                          default: _(() => [
                                              D(t.$slots, `default`),
                                          ]),
                                          _: 3,
                                      },
                                      16,
                                  ))
                                : (V(),
                                  w(
                                      Xi,
                                      W(
                                          b(
                                              { key: 1 },
                                              { ...t.$attrs, ...j(n) },
                                          ),
                                      ),
                                      {
                                          default: _(() => [
                                              D(t.$slots, `default`),
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
    [Qi, $i] = e(`MenuGroup`),
    ea = A({
        __name: `MenuGroup`,
        props: {
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
        },
        setup(e) {
            let t = e,
                r = n(void 0, `reka-menu-group`);
            return (
                $i({ id: r }),
                (e, n) => (
                    V(),
                    w(
                        j(M),
                        b({ role: `group` }, t, { 'aria-labelledby': j(r) }),
                        { default: _(() => [D(e.$slots, `default`)]), _: 3 },
                        16,
                        [`aria-labelledby`],
                    )
                )
            );
        },
    }),
    ta = A({
        __name: `MenuLabel`,
        props: {
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1, default: `div` },
        },
        setup(e) {
            let t = e,
                n = Qi({ id: `` });
            return (e, r) => (
                V(),
                w(
                    j(M),
                    b(t, { id: j(n).id || void 0 }),
                    { default: _(() => [D(e.$slots, `default`)]), _: 3 },
                    16,
                    [`id`],
                )
            );
        },
    }),
    na = A({
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
                V(),
                w(
                    j(ke),
                    W(u(t)),
                    { default: _(() => [D(e.$slots, `default`)]), _: 3 },
                    16,
                )
            );
        },
    }),
    ra = A({
        __name: `MenuSeparator`,
        props: {
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
        },
        setup(e) {
            let t = e;
            return (e, n) => (
                V(),
                w(
                    j(M),
                    b(t, {
                        role: `separator`,
                        'aria-orientation': `horizontal`,
                    }),
                    { default: _(() => [D(e.$slots, `default`)]), _: 3 },
                    16,
                )
            );
        },
    }),
    [ia, aa] = e(`DropdownMenuRoot`),
    oa = A({
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
            let i = Le(n, `open`, r, {
                    defaultValue: n.defaultOpen,
                    passive: n.open === void 0,
                }),
                a = C(),
                { modal: o, dir: s } = re(n),
                c = ze(s);
            return (
                aa({
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
                    V(),
                    w(
                        j(Ui),
                        {
                            open: j(i),
                            'onUpdate:open': (t[0] ||= (e) =>
                                ee(i) ? (i.value = e) : null),
                            dir: j(c),
                            modal: j(o),
                        },
                        {
                            default: _(() => [
                                D(e.$slots, `default`, { open: j(i) }),
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
    sa = A({
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
            let r = He(e, t);
            G();
            let i = ia(),
                a = C(!1);
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
                    V(),
                    w(
                        j(Zi),
                        b(
                            {
                                id: j(i).contentId,
                                'aria-labelledby': j(i)?.triggerId,
                                style: {
                                    '--reka-dropdown-menu-content-transform-origin': `var(--reka-popper-transform-origin)`,
                                    '--reka-dropdown-menu-content-available-width': `var(--reka-popper-available-width)`,
                                    '--reka-dropdown-menu-content-available-height': `var(--reka-popper-available-height)`,
                                    '--reka-dropdown-menu-trigger-width': `var(--reka-popper-anchor-width)`,
                                    '--reka-dropdown-menu-trigger-height': `var(--reka-popper-anchor-height)`,
                                },
                            },
                            { ...j(r), ...j(Ft)(e.$attrs) },
                            {
                                onCloseAutoFocus: o,
                                onInteractOutside: (t[0] ||= (e) => {
                                    if (e.defaultPrevented) return;
                                    let t = e.detail.originalEvent,
                                        n = t.button === 0 && t.ctrlKey === !0,
                                        r = t.button === 2 || n;
                                    ((!j(i).modal.value || r) && (a.value = !0),
                                        j(i).triggerElement.value?.contains(
                                            e.target,
                                        ) && e.preventDefault());
                                }),
                            },
                        ),
                        { default: _(() => [D(e.$slots, `default`)]), _: 3 },
                        16,
                        [`id`, `aria-labelledby`],
                    )
                )
            );
        },
    }),
    ca = A({
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
                    V(),
                    w(
                        j(ea),
                        W(u(t)),
                        { default: _(() => [D(e.$slots, `default`)]), _: 3 },
                        16,
                    )
                )
            );
        },
    }),
    la = A({
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
                r = Ve(t);
            return (
                G(),
                (e, t) => (
                    V(),
                    w(
                        j(Ji),
                        W(u({ ...n, ...j(r) })),
                        { default: _(() => [D(e.$slots, `default`)]), _: 3 },
                        16,
                    )
                )
            );
        },
    }),
    ua = A({
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
                    V(),
                    w(
                        j(ta),
                        W(u(t)),
                        { default: _(() => [D(e.$slots, `default`)]), _: 3 },
                        16,
                    )
                )
            );
        },
    }),
    da = A({
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
                V(),
                w(
                    j(na),
                    W(u(t)),
                    { default: _(() => [D(e.$slots, `default`)]), _: 3 },
                    16,
                )
            );
        },
    }),
    fa = A({
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
                    V(),
                    w(
                        j(ra),
                        W(u(t)),
                        { default: _(() => [D(e.$slots, `default`)]), _: 3 },
                        16,
                    )
                )
            );
        },
    }),
    pa = A({
        __name: `DropdownMenuTrigger`,
        props: {
            disabled: { type: Boolean, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1, default: `button` },
        },
        setup(e) {
            let t = e,
                r = ia(),
                { forwardRef: i, currentElement: a } = G();
            return (
                x(() => {
                    r.triggerElement = a;
                }),
                (r.triggerId ||= n(void 0, `reka-dropdown-menu-trigger`)),
                (n, a) => (
                    V(),
                    w(
                        j(Ii),
                        { 'as-child': `` },
                        {
                            default: _(() => [
                                F(
                                    j(M),
                                    {
                                        id: j(r).triggerId,
                                        ref: j(i),
                                        type:
                                            e.as === `button`
                                                ? `button`
                                                : void 0,
                                        'as-child': t.asChild,
                                        as: e.as,
                                        'aria-haspopup': `menu`,
                                        'aria-expanded': j(r).open.value,
                                        'aria-controls': j(r).open.value
                                            ? j(r).contentId
                                            : void 0,
                                        'data-disabled': e.disabled
                                            ? ``
                                            : void 0,
                                        disabled: e.disabled,
                                        'data-state': j(r).open.value
                                            ? `open`
                                            : `closed`,
                                        onClick: (a[0] ||= async (t) => {
                                            t.defaultPrevented ||
                                                (!e.disabled &&
                                                    t.button === 0 &&
                                                    t.ctrlKey === !1 &&
                                                    (j(r)?.onOpenToggle(),
                                                    await p(),
                                                    j(r).open.value &&
                                                        t.preventDefault()));
                                        }),
                                        onKeydown: (a[1] ||= s(
                                            (t) => {
                                                e.disabled ||
                                                    t.defaultPrevented ||
                                                    ([`Enter`, ` `].includes(
                                                        t.key,
                                                    ) && j(r).onOpenToggle(),
                                                    t.key === `ArrowDown` &&
                                                        j(r).onOpenChange(!0),
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
                                        default: _(() => [
                                            D(n.$slots, `default`),
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
    ma = A({
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
            let i = R(() => (r(t.orientation) ? t.orientation : `horizontal`)),
                a = R(() => (i.value === `vertical` ? t.orientation : void 0)),
                o = R(() =>
                    t.decorative
                        ? { role: `none` }
                        : { 'aria-orientation': a.value, role: `separator` },
                );
            return (t, n) => (
                V(),
                w(
                    j(M),
                    b(
                        {
                            as: e.as,
                            'as-child': e.asChild,
                            'data-orientation': i.value,
                        },
                        o.value,
                    ),
                    { default: _(() => [D(t.$slots, `default`)]), _: 3 },
                    16,
                    [`as`, `as-child`, `data-orientation`],
                )
            );
        },
    }),
    ha = A({
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
                V(),
                w(
                    ma,
                    W(u(t)),
                    { default: _(() => [D(e.$slots, `default`)]), _: 3 },
                    16,
                )
            );
        },
    }),
    ga = A({
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
                    V(),
                    w(
                        j(Ti),
                        W(u(t)),
                        { default: _(() => [D(e.$slots, `default`)]), _: 3 },
                        16,
                    )
                )
            );
        },
    }),
    [_a, va] = e(`TooltipProvider`),
    ya = A({
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
            } = re(e);
            G();
            let c = C(!0),
                l = C(!1),
                { start: u, stop: d } = Ae(
                    () => {
                        c.value = !0;
                    },
                    n,
                    { immediate: !1 },
                );
            return (
                va({
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
                (e, t) => D(e.$slots, `default`)
            );
        },
    }),
    ba = `tooltip.open`,
    [xa, Sa] = e(`TooltipRoot`),
    Ca = A({
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
            let i = _a(),
                a = R(
                    () =>
                        n.disableHoverableContent ??
                        i.disableHoverableContent.value,
                ),
                o = R(
                    () =>
                        n.disableClosingTrigger ??
                        i.disableClosingTrigger.value,
                ),
                s = R(() => n.disabled ?? i.disabled.value),
                c = R(() => n.delayDuration ?? i.delayDuration.value),
                l = R(
                    () =>
                        n.ignoreNonKeyboardFocus ??
                        i.ignoreNonKeyboardFocus.value,
                ),
                u = Le(n, `open`, r, {
                    defaultValue: n.defaultOpen,
                    passive: n.open === void 0,
                });
            P(u, (e) => {
                i.onClose &&
                    (e
                        ? (i.onOpen(),
                          document.dispatchEvent(new CustomEvent(ba)))
                        : i.onClose());
            });
            let d = C(!1),
                f = C(),
                p = R(() =>
                    u.value
                        ? d.value
                            ? `delayed-open`
                            : `instant-open`
                        : `closed`,
                ),
                { start: m, stop: h } = Ae(
                    () => {
                        ((d.value = !0), (u.value = !0));
                    },
                    c,
                    { immediate: !1 },
                );
            function g() {
                (h(), (d.value = !1), (u.value = !0));
            }
            function v() {
                (h(), (u.value = !1));
            }
            function y() {
                m();
            }
            return (
                Sa({
                    contentId: ``,
                    open: u,
                    stateAttribute: p,
                    trigger: f,
                    onTriggerChange(e) {
                        f.value = e;
                    },
                    onTriggerEnter() {
                        i.isOpenDelayed.value ? y() : g();
                    },
                    onTriggerLeave() {
                        a.value ? v() : h();
                    },
                    onOpen: g,
                    onClose: v,
                    disableHoverableContent: a,
                    disableClosingTrigger: o,
                    disabled: s,
                    ignoreNonKeyboardFocus: l,
                }),
                (e, t) => (
                    V(),
                    w(j(cn), null, {
                        default: _(() => [
                            D(e.$slots, `default`, { open: j(u) }),
                        ]),
                        _: 3,
                    })
                )
            );
        },
    }),
    wa = A({
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
                i = xa(),
                a = _a(),
                { forwardRef: o, currentElement: s } = G(),
                c = R(() => n.ariaLabel || s.value?.textContent),
                l = R(() => {
                    let { ariaLabel: e, ...t } = n;
                    return De(t, a.content.value ?? {}, {
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
                x(() => {
                    (je(
                        window,
                        `scroll`,
                        (e) => {
                            e.target?.contains(i.trigger.value) && i.onClose();
                        },
                        { capture: !0 },
                    ),
                        je(document, ba, i.onClose));
                }),
                (e, t) => (
                    V(),
                    w(
                        j(Oe),
                        {
                            'as-child': ``,
                            'disable-outside-pointer-events': !1,
                            onEscapeKeyDown: (t[0] ||= (e) =>
                                r(`escapeKeyDown`, e)),
                            onPointerDownOutside: (t[1] ||= (e) => {
                                (j(i).disableClosingTrigger.value &&
                                    j(i).trigger.value?.contains(e.target) &&
                                    e.preventDefault(),
                                    r(`pointerDownOutside`, e));
                            }),
                            onFocusOutside: (t[2] ||= y(() => {}, [`prevent`])),
                            onDismiss: (t[3] ||= (e) => j(i).onClose()),
                        },
                        {
                            default: _(() => [
                                F(
                                    j(Ci),
                                    b(
                                        {
                                            ref: j(o),
                                            'data-state':
                                                j(i).stateAttribute.value,
                                        },
                                        { ...e.$attrs, ...l.value },
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
                                        default: _(() => [
                                            D(e.$slots, `default`),
                                            F(
                                                j(Zt),
                                                {
                                                    id: j(i).contentId,
                                                    role: `tooltip`,
                                                },
                                                {
                                                    default: _(() => [
                                                        fe(U(c.value), 1),
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
    Ta = A({
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
            let t = Be(e),
                { forwardRef: n, currentElement: r } = G(),
                { trigger: i, onClose: a } = xa(),
                o = _a(),
                { isPointerInTransit: s, onPointerExit: c } = pt(i, r);
            return (
                (o.isPointerInTransitRef = s),
                c(() => {
                    a();
                }),
                je(r, `pointermove`, (e) => {
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
                    V(),
                    w(
                        wa,
                        b({ ref: j(n) }, j(t)),
                        { default: _(() => [D(e.$slots, `default`)]), _: 3 },
                        16,
                    )
                )
            );
        },
    }),
    Ea = A({
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
                a = xa(),
                o = He(n, i),
                { forwardRef: s } = G();
            return (t, n) => (
                V(),
                w(
                    j(r),
                    { present: e.forceMount || j(a).open.value },
                    {
                        default: _(() => [
                            (V(),
                            w(
                                k(j(a).disableHoverableContent.value ? wa : Ta),
                                b({ ref: j(s) }, j(o)),
                                {
                                    default: _(() => [D(t.$slots, `default`)]),
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
    Da = A({
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
                V(),
                w(
                    j(ke),
                    W(u(t)),
                    { default: _(() => [D(e.$slots, `default`)]), _: 3 },
                    16,
                )
            );
        },
    }),
    Oa = A({
        __name: `TooltipTrigger`,
        props: {
            reference: { type: null, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1, default: `button` },
        },
        setup(e) {
            let t = e,
                r = xa(),
                i = _a();
            r.contentId ||= n(void 0, `reka-tooltip-content`);
            let { forwardRef: a, currentElement: o } = G(),
                s = C(!1),
                c = C(!1),
                l = R(() =>
                    r.disabled.value
                        ? {}
                        : {
                              click: g,
                              focus: m,
                              pointermove: f,
                              pointerleave: p,
                              pointerdown: d,
                              blur: h,
                          },
                );
            P(
                o,
                (e) => {
                    r.onTriggerChange(e);
                },
                { immediate: !0 },
            );
            function u() {
                setTimeout(() => {
                    s.value = !1;
                }, 1);
            }
            function d() {
                (r.open && !r.disableClosingTrigger.value && r.onClose(),
                    (s.value = !0),
                    document.addEventListener(`pointerup`, u, { once: !0 }));
            }
            function f(e) {
                e.pointerType !== `touch` &&
                    !c.value &&
                    !i.isPointerInTransitRef.value &&
                    (r.onTriggerEnter(), (c.value = !0));
            }
            function p() {
                (r.onTriggerLeave(), (c.value = !1));
            }
            function m(e) {
                s.value ||
                    ((!r.ignoreNonKeyboardFocus.value ||
                        e.target.matches?.(`:focus-visible`)) &&
                        r.onOpen());
            }
            function h() {
                r.onClose();
            }
            function g() {
                r.disableClosingTrigger.value || r.onClose();
            }
            return (n, i) => (
                V(),
                w(
                    j(ln),
                    { 'as-child': ``, reference: e.reference ?? j(o) },
                    {
                        default: _(() => [
                            F(
                                j(M),
                                b(
                                    {
                                        ref: j(a),
                                        'aria-describedby': j(r).open.value
                                            ? j(r).contentId
                                            : void 0,
                                        'data-state': j(r).stateAttribute.value,
                                        as: e.as,
                                        'as-child': t.asChild,
                                        'data-grace-area-trigger': ``,
                                    },
                                    be(l.value),
                                ),
                                {
                                    default: _(() => [D(n.$slots, `default`)]),
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
    ka = A({
        __name: `Sheet`,
        props: {
            open: { type: Boolean },
            defaultOpen: { type: Boolean },
            modal: { type: Boolean },
            unmountOnHide: { type: Boolean },
        },
        emits: [`update:open`],
        setup(e, { emit: t }) {
            let n = He(e, t);
            return (e, t) => (
                V(),
                w(
                    j(Dt),
                    b({ 'data-slot': `sheet` }, j(n)),
                    {
                        default: _((t) => [D(e.$slots, `default`, W(u(t)))]),
                        _: 3,
                    },
                    16,
                )
            );
        },
    }),
    Aa = K({
        name: `chevron-right`,
        size: 24,
        node: [[`path`, { d: `m9 18 6-6-6-6`, key: `mthhwq` }]],
    }),
    ja = K({
        name: `chevrons-up-down`,
        size: 24,
        node: [
            [`path`, { d: `m7 15 5 5 5-5`, key: `1hf1tw` }],
            [`path`, { d: `m7 9 5-5 5 5`, key: `sgt6xg` }],
        ],
    }),
    Ma = K({
        name: `circle-check`,
        size: 24,
        node: [
            [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
            [`path`, { d: `m16 9-5.5 5.5L8 12`, key: `xofnsj` }],
        ],
        aliases: [`check-circle-2`],
    }),
    Na = K({
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
    Pa = K({
        name: `info`,
        size: 24,
        node: [
            [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
            [`path`, { d: `M12 16v-4`, key: `1dtifu` }],
            [`path`, { d: `M12 8h.01`, key: `e9boi3` }],
        ],
    }),
    Fa = K({
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
    Ia = K({
        name: `loader-circle`,
        size: 24,
        node: [[`path`, { d: `M21 12a9 9 0 1 1-6.219-8.56`, key: `13zald` }]],
        aliases: [`loader-2`],
    }),
    La = K({
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
    Ra = K({
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
    za = K({
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
    Ba = K({
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
    Va = K({
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
    Ha = K({
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
    Ua = K({
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
    Wa = K({
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
    Ga = K({
        name: `x`,
        size: 24,
        node: [
            [`path`, { d: `M18 6 6 18`, key: `1bl5f8` }],
            [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }],
        ],
    }),
    Ka = Ze ? window : void 0,
    qa = Ze ? window.document : void 0,
    Ja = Ze ? window.navigator : void 0;
Ze && window.location;
function Ya(e) {
    let t = de(e);
    return t?.$el ?? t;
}
function Xa(...e) {
    let t = [],
        n = () => {
            (t.forEach((e) => e()), (t.length = 0));
        },
        r = (e, t, n, r) => (
            e.addEventListener(t, n, r),
            () => e.removeEventListener(t, n, r)
        ),
        i = R(() => {
            let t = We(de(e[0])).filter((e) => e != null);
            return t.every((e) => typeof e != `string`) ? t : void 0;
        }),
        a = Ke(
            () => [
                i.value?.map((e) => Ya(e)) ?? [Ka].filter((e) => e != null),
                We(de(i.value ? e[1] : e[0])),
                We(j(i.value ? e[2] : e[1])),
                de(i.value ? e[3] : e[2]),
            ],
            ([e, i, a, o]) => {
                if ((n(), !e?.length || !i?.length || !a?.length)) return;
                let s = Ue(o) ? { ...o } : o;
                t.push(
                    ...e.flatMap((e) =>
                        i.flatMap((t) => a.map((n) => r(e, t, n, s))),
                    ),
                );
            },
            { flush: `post` },
        );
    return (
        et(n),
        () => {
            (a(), n());
        }
    );
}
function Za() {
    let e = O(!1),
        t = xe();
    return (
        t &&
            x(() => {
                e.value = !0;
            }, t),
        e
    );
}
function Qa(e) {
    let t = Za();
    return R(() => (t.value, !!e()));
}
var $a = Symbol(`vueuse-ssr-width`);
function eo() {
    let e = se() ? Ye($a, null) : null;
    return typeof e == `number` ? e : void 0;
}
function to(e, t = {}) {
    let { window: n = Ka, ssrWidth: r = eo() } = t,
        i = Qa(
            () => n && `matchMedia` in n && typeof n.matchMedia == `function`,
        ),
        a = O(typeof r == `number`),
        s = O(),
        c = O(!1);
    return (
        o(() => {
            if (a.value) {
                a.value = !i.value;
                let t = de(e).split(`,`);
                c.value = t.some((e) => {
                    let t = e.includes(`not all`),
                        n = e.match(
                            /\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/,
                        ),
                        i = e.match(
                            /\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/,
                        ),
                        a = !!(n || i);
                    return (
                        n && a && (a = r >= Xe(n[1])),
                        i && a && (a = r <= Xe(i[1])),
                        t ? !a : a
                    );
                });
            } else
                i.value &&
                    ((s.value = n.matchMedia(de(e))),
                    (c.value = s.value.matches));
        }),
        Xa(
            s,
            `change`,
            (e) => {
                c.value = e.matches;
            },
            { passive: !0 },
        ),
        R(() => c.value)
    );
}
function no(e, t = {}) {
    let { controls: n = !1, navigator: r = Ja } = t,
        i = Qa(() => r && `permissions` in r),
        a = O(),
        o = typeof e == `string` ? { name: e } : e,
        s = O(),
        c = () => {
            s.value = a.value?.state ?? `prompt`;
        };
    Xa(a, `change`, c, { passive: !0 });
    let l = $e(async () => {
        if (i.value) {
            if (!a.value)
                try {
                    a.value = await r.permissions.query(o);
                } catch {
                    a.value = void 0;
                } finally {
                    c();
                }
            if (n) return ye(a.value);
        }
    });
    return (l(), n ? { state: s, isSupported: i, query: l } : s);
}
function ro(e = {}) {
    let {
            navigator: t = Ja,
            read: n = !1,
            source: r,
            copiedDuring: i = 1500,
            legacy: a = !1,
        } = e,
        o = Qa(() => t && `clipboard` in t),
        s = no(`clipboard-read`),
        c = no(`clipboard-write`),
        l = R(() => o.value || a),
        u = O(``),
        d = O(!1),
        f = Ge(() => (d.value = !1), i, { immediate: !1 });
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
    l.value && n && Xa([`copy`, `cut`], p, { passive: !0 });
    async function m(e = de(r)) {
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
function io(e) {
    return JSON.parse(JSON.stringify(e));
}
function ao(e, t) {
    let n = O(t);
    return (
        P(
            Je(e),
            (e, t) => {
                n.value = t;
            },
            { flush: `sync` },
        ),
        ae(n)
    );
}
function oo(e, t, n, r = {}) {
    let {
            clone: i = !1,
            passive: a = !1,
            eventName: o,
            deep: s = !1,
            defaultValue: c,
            shouldEmit: l,
        } = r,
        u = xe(),
        d =
            n ||
            u?.emit ||
            u?.$emit?.bind(u) ||
            u?.proxy?.$emit?.bind(u?.proxy),
        f = o;
    ((t ||= `modelValue`), (f ||= `update:${t.toString()}`));
    let m = (e) => (i ? (typeof i == `function` ? i(e) : io(e)) : e),
        h = () => (qe(e[t]) ? m(e[t]) : c),
        g = (e) => {
            l ? l(e) && d(f, e) : d(f, e);
        };
    if (a) {
        let n = h(),
            r = C(n),
            i = !1;
        return (
            P(
                () => e[t],
                (e) => {
                    i || ((i = !0), (r.value = m(e)), p(() => (i = !1)));
                },
            ),
            P(
                r,
                (n) => {
                    !i && (n !== e[t] || s) && g(n);
                },
                { deep: s },
            ),
            r
        );
    }
    return R({
        get() {
            return h();
        },
        set(e) {
            g(e);
        },
    });
}
var so = A({
        __name: `SheetOverlay`,
        props: {
            forceMount: { type: Boolean },
            asChild: { type: Boolean },
            as: {},
            class: { type: [Boolean, null, String, Object, Array] },
        },
        setup(e) {
            let t = e,
                n = Qe(t, `class`);
            return (e, r) => (
                V(),
                w(
                    j(Kt),
                    b(
                        {
                            'data-slot': `sheet-overlay`,
                            class: j(z)(
                                `data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80`,
                                t.class,
                            ),
                        },
                        j(n),
                    ),
                    { default: _(() => [D(e.$slots, `default`)]), _: 3 },
                    16,
                    [`class`],
                )
            );
        },
    }),
    co = A({
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
                i = Qe(n, `class`, `side`),
                a = He(i, r);
            return (t, r) => (
                V(),
                w(j(qt), null, {
                    default: _(() => [
                        F(so),
                        F(
                            j(Ut),
                            b(
                                {
                                    'data-slot': `sheet-content`,
                                    class: j(z)(
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
                                { ...t.$attrs, ...j(a) },
                            ),
                            {
                                default: _(() => [
                                    D(t.$slots, `default`),
                                    F(
                                        j(Ot),
                                        {
                                            class: `ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none`,
                                        },
                                        {
                                            default: _(() => [
                                                F(j(Ga), { class: `size-4` }),
                                                (r[0] ||= N(
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
    lo = A({
        __name: `SheetDescription`,
        props: {
            asChild: { type: Boolean },
            as: {},
            class: { type: [Boolean, null, String, Object, Array] },
        },
        setup(e) {
            let t = e,
                n = Qe(t, `class`);
            return (e, r) => (
                V(),
                w(
                    j(Wt),
                    b(
                        {
                            'data-slot': `sheet-description`,
                            class: j(z)(
                                `text-muted-foreground text-sm`,
                                t.class,
                            ),
                        },
                        j(n),
                    ),
                    { default: _(() => [D(e.$slots, `default`)]), _: 3 },
                    16,
                    [`class`],
                )
            );
        },
    }),
    uo = A({
        __name: `SheetHeader`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                V(),
                B(
                    `div`,
                    {
                        'data-slot': `sheet-header`,
                        class: H(j(z)(`flex flex-col gap-1.5 p-4`, t.class)),
                    },
                    [D(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    fo = A({
        __name: `SheetTitle`,
        props: {
            asChild: { type: Boolean },
            as: {},
            class: { type: [Boolean, null, String, Object, Array] },
        },
        setup(e) {
            let t = e,
                n = Qe(t, `class`);
            return (e, r) => (
                V(),
                w(
                    j(Jt),
                    b(
                        {
                            'data-slot': `sheet-title`,
                            class: j(z)(
                                `text-foreground font-semibold`,
                                t.class,
                            ),
                        },
                        j(n),
                    ),
                    { default: _(() => [D(e.$slots, `default`)]), _: 3 },
                    16,
                    [`class`],
                )
            );
        },
    }),
    po = `sidebar_state`,
    mo = 604800,
    ho = `16rem`,
    go = `18rem`,
    _o = `3rem`,
    [vo, yo] = e(`Sidebar`),
    bo = { class: `flex h-full w-full flex-col` },
    xo = [`data-state`, `data-collapsible`, `data-variant`, `data-side`],
    So = {
        'data-sidebar': `sidebar`,
        class: `bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm`,
    },
    Co = A({
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
                } = vo();
            return (o, s) =>
                e.collapsible === `none`
                    ? (V(),
                      B(
                          `div`,
                          b(
                              {
                                  key: 0,
                                  'data-slot': `sidebar`,
                                  class: j(z)(
                                      `bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col`,
                                      t.class,
                                  ),
                              },
                              o.$attrs,
                          ),
                          [D(o.$slots, `default`)],
                          16,
                      ))
                    : j(n)
                      ? (V(),
                        w(
                            j(ka),
                            b({ key: 1, open: j(i) }, o.$attrs, {
                                'onUpdate:open': j(a),
                            }),
                            {
                                default: _(() => [
                                    F(
                                        j(co),
                                        {
                                            'data-sidebar': `sidebar`,
                                            'data-slot': `sidebar`,
                                            'data-mobile': `true`,
                                            side: e.side,
                                            class: `bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden`,
                                            style: te({
                                                '--sidebar-width': j(go),
                                            }),
                                        },
                                        {
                                            default: _(() => [
                                                F(
                                                    uo,
                                                    { class: `sr-only` },
                                                    {
                                                        default: _(() => [
                                                            F(fo, null, {
                                                                default: _(
                                                                    () => [
                                                                        ...(s[0] ||=
                                                                            [
                                                                                fe(
                                                                                    `Sidebar`,
                                                                                    -1,
                                                                                ),
                                                                            ]),
                                                                    ],
                                                                ),
                                                                _: 1,
                                                            }),
                                                            F(lo, null, {
                                                                default: _(
                                                                    () => [
                                                                        ...(s[1] ||=
                                                                            [
                                                                                fe(
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
                                                N(`div`, bo, [
                                                    D(o.$slots, `default`),
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
                      : (V(),
                        B(
                            `div`,
                            {
                                key: 2,
                                class: `group peer text-sidebar-foreground hidden md:block`,
                                'data-slot': `sidebar`,
                                'data-state': j(r),
                                'data-collapsible':
                                    j(r) === `collapsed` ? e.collapsible : ``,
                                'data-variant': e.variant,
                                'data-side': e.side,
                            },
                            [
                                N(
                                    `div`,
                                    {
                                        class: H(
                                            j(z)(
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
                                N(
                                    `div`,
                                    b(
                                        {
                                            class: j(z)(
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
                                    [N(`div`, So, [D(o.$slots, `default`)])],
                                    16,
                                ),
                            ],
                            8,
                            xo,
                        ));
        },
    }),
    wo = A({
        __name: `SidebarContent`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                V(),
                B(
                    `div`,
                    {
                        'data-slot': `sidebar-content`,
                        'data-sidebar': `content`,
                        class: H(
                            j(z)(
                                `flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden`,
                                t.class,
                            ),
                        ),
                    },
                    [D(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    To = A({
        __name: `SidebarFooter`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                V(),
                B(
                    `div`,
                    {
                        'data-slot': `sidebar-footer`,
                        'data-sidebar': `footer`,
                        class: H(j(z)(`flex flex-col gap-2 p-2`, t.class)),
                    },
                    [D(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    Eo = A({
        __name: `SidebarGroup`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                V(),
                B(
                    `div`,
                    {
                        'data-slot': `sidebar-group`,
                        'data-sidebar': `group`,
                        class: H(
                            j(z)(
                                `relative flex w-full min-w-0 flex-col p-2`,
                                t.class,
                            ),
                        ),
                    },
                    [D(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    Do = A({
        __name: `SidebarGroupLabel`,
        props: {
            asChild: { type: Boolean },
            as: {},
            class: { type: [Boolean, null, String, Object, Array] },
        },
        setup(e) {
            let t = e;
            return (n, r) => (
                V(),
                w(
                    j(M),
                    {
                        'data-slot': `sidebar-group-label`,
                        'data-sidebar': `group-label`,
                        as: e.as,
                        'as-child': e.asChild,
                        class: H(
                            j(z)(
                                `text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0`,
                                `group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0`,
                                t.class,
                            ),
                        ),
                    },
                    { default: _(() => [D(n.$slots, `default`)]), _: 3 },
                    8,
                    [`as`, `as-child`, `class`],
                )
            );
        },
    }),
    Oo = A({
        __name: `SidebarHeader`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                V(),
                B(
                    `div`,
                    {
                        'data-slot': `sidebar-header`,
                        'data-sidebar': `header`,
                        class: H(j(z)(`flex flex-col gap-2 p-2`, t.class)),
                    },
                    [D(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    ko = A({
        __name: `SidebarInset`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                V(),
                B(
                    `main`,
                    {
                        'data-slot': `sidebar-inset`,
                        class: H(
                            j(z)(
                                `bg-background relative flex w-full flex-1 flex-col`,
                                `md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2`,
                                t.class,
                            ),
                        ),
                    },
                    [D(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    Ao = A({
        __name: `SidebarMenu`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                V(),
                B(
                    `ul`,
                    {
                        'data-slot': `sidebar-menu`,
                        'data-sidebar': `menu`,
                        class: H(
                            j(z)(`flex w-full min-w-0 flex-col gap-1`, t.class),
                        ),
                    },
                    [D(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    jo = A({
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
            let n = He(e, t);
            return (e, t) => (
                V(),
                w(
                    j(Ca),
                    b({ 'data-slot': `tooltip` }, j(n)),
                    {
                        default: _((t) => [D(e.$slots, `default`, W(u(t)))]),
                        _: 3,
                    },
                    16,
                )
            );
        },
    }),
    Mo = A({
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
                i = Qe(n, `class`),
                a = He(i, r);
            return (e, t) => (
                V(),
                w(j(Da), null, {
                    default: _(() => [
                        F(
                            j(Ea),
                            b(
                                { 'data-slot': `tooltip-content` },
                                { ...j(a), ...e.$attrs },
                                {
                                    class: j(z)(
                                        `bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance`,
                                        n.class,
                                    ),
                                },
                            ),
                            {
                                default: _(() => [
                                    D(e.$slots, `default`),
                                    F(j(ga), {
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
    No = A({
        __name: `TooltipTrigger`,
        props: { reference: {}, asChild: { type: Boolean }, as: {} },
        setup(e) {
            let t = e;
            return (e, n) => (
                V(),
                w(
                    j(Oa),
                    b({ 'data-slot': `tooltip-trigger` }, t),
                    { default: _(() => [D(e.$slots, `default`)]), _: 3 },
                    16,
                )
            );
        },
    }),
    Po = A({
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
                V(),
                w(
                    j(M),
                    b(
                        {
                            'data-slot': `sidebar-menu-button`,
                            'data-sidebar': `menu-button`,
                            'data-size': e.size,
                            'data-active': e.isActive,
                            class: j(z)(
                                j(Bo)({ variant: e.variant, size: e.size }),
                                t.class,
                            ),
                            as: e.as,
                            'as-child': e.asChild,
                        },
                        n.$attrs,
                    ),
                    { default: _(() => [D(n.$slots, `default`)]), _: 3 },
                    16,
                    [`data-size`, `data-active`, `class`, `as`, `as-child`],
                )
            );
        },
    }),
    Fo = A({
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
                { isMobile: n, state: r } = vo(),
                i = Qe(t, `tooltip`);
            return (t, a) =>
                e.tooltip
                    ? (V(),
                      w(
                          j(jo),
                          { key: 1 },
                          {
                              default: _(() => [
                                  F(
                                      j(No),
                                      { 'as-child': `` },
                                      {
                                          default: _(() => [
                                              F(
                                                  Po,
                                                  W(
                                                      u({
                                                          ...j(i),
                                                          ...t.$attrs,
                                                      }),
                                                  ),
                                                  {
                                                      default: _(() => [
                                                          D(
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
                                  F(
                                      j(Mo),
                                      {
                                          side: `right`,
                                          align: `center`,
                                          hidden: j(r) !== `collapsed` || j(n),
                                      },
                                      {
                                          default: _(() => [
                                              typeof e.tooltip == `string`
                                                  ? (V(),
                                                    B(
                                                        L,
                                                        { key: 0 },
                                                        [fe(U(e.tooltip), 1)],
                                                        64,
                                                    ))
                                                  : (V(),
                                                    w(k(e.tooltip), {
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
                    : (V(),
                      w(
                          Po,
                          W(b({ key: 0 }, { ...j(i), ...t.$attrs })),
                          { default: _(() => [D(t.$slots, `default`)]), _: 3 },
                          16,
                      ));
        },
    }),
    Io = A({
        __name: `SidebarMenuItem`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                V(),
                B(
                    `li`,
                    {
                        'data-slot': `sidebar-menu-item`,
                        'data-sidebar': `menu-item`,
                        class: H(j(z)(`group/menu-item relative`, t.class)),
                    },
                    [D(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    Lo = A({
        __name: `SidebarProvider`,
        props: {
            defaultOpen: {
                type: Boolean,
                default: !qa?.cookie.includes(`${po}=false`),
            },
            open: { type: Boolean, default: void 0 },
            class: { type: [Boolean, null, String, Object, Array] },
        },
        emits: [`update:open`],
        setup(e, { emit: t }) {
            let n = e,
                r = t,
                i = to(`(max-width: 768px)`),
                a = C(!1),
                o = oo(n, `open`, r, {
                    defaultValue: n.defaultOpen ?? !1,
                    passive: n.open === void 0,
                });
            function s(e) {
                ((o.value = e),
                    (document.cookie = `${po}=${o.value}; path=/; max-age=${mo}`));
            }
            function c(e) {
                a.value = e;
            }
            function l() {
                return i.value ? c(!a.value) : s(!o.value);
            }
            return (
                Xa(`keydown`, (e) => {
                    e.key === `b` &&
                        (e.metaKey || e.ctrlKey) &&
                        (e.preventDefault(), l());
                }),
                yo({
                    state: R(() => (o.value ? `expanded` : `collapsed`)),
                    open: o,
                    setOpen: s,
                    isMobile: i,
                    openMobile: a,
                    setOpenMobile: c,
                    toggleSidebar: l,
                }),
                (e, t) => (
                    V(),
                    w(
                        j(ya),
                        { 'delay-duration': 0 },
                        {
                            default: _(() => [
                                N(
                                    `div`,
                                    b(
                                        {
                                            'data-slot': `sidebar-wrapper`,
                                            style: {
                                                '--sidebar-width': j(ho),
                                                '--sidebar-width-icon': j(_o),
                                            },
                                            class: j(z)(
                                                `group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full`,
                                                n.class,
                                            ),
                                        },
                                        e.$attrs,
                                    ),
                                    [D(e.$slots, `default`)],
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
    Ro = A({
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
                n = Qe(t, `class`);
            return (e, r) => (
                V(),
                w(
                    j(ha),
                    b({ 'data-slot': `separator` }, j(n), {
                        class: j(z)(
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
    zo = A({
        __name: `SidebarTrigger`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e,
                { isMobile: n, state: r, toggleSidebar: i } = vo();
            return (e, a) => (
                V(),
                w(
                    j(pe),
                    {
                        'data-sidebar': `trigger`,
                        'data-slot': `sidebar-trigger`,
                        variant: `ghost`,
                        size: `icon`,
                        class: H(j(z)(`h-7 w-7`, t.class)),
                        onClick: j(i),
                    },
                    {
                        default: _(() => [
                            j(n) || j(r) === `collapsed`
                                ? (V(), w(j(Va), { key: 0 }))
                                : (V(), w(j(Ba), { key: 1 })),
                            (a[0] ||= N(
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
    Bo = ce(
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
    Vo = A({
        __name: `AppContent`,
        setup(e) {
            return (e, t) => (
                V(),
                w(
                    j(ko),
                    {
                        id: `main-content`,
                        tabindex: `-1`,
                        class: `outline-none`,
                    },
                    { default: _(() => [D(e.$slots, `default`)]), _: 3 },
                )
            );
        },
    }),
    Ho = A({
        __name: `AppShell`,
        setup(e) {
            let t = ie().props.sidebarOpen;
            return (e, n) => (
                V(),
                w(
                    j(Lo),
                    { 'default-open': j(t) },
                    { default: _(() => [D(e.$slots, `default`)]), _: 3 },
                    8,
                    [`default-open`],
                )
            );
        },
    }),
    Uo = { class: `flex items-center gap-2` },
    Wo = A({
        __name: `AppLogo`,
        setup(e) {
            return (e, t) => (
                V(),
                B(`div`, Uo, [
                    F(j(Na), {
                        class: `size-6 shrink-0 text-brand`,
                        'aria-hidden': `true`,
                    }),
                    (t[0] ||= N(
                        `span`,
                        {
                            class: `text-lg font-semibold tracking-tight group-data-[collapsible=icon]:hidden`,
                        },
                        [
                            N(`span`, { class: `text-foreground` }, `Pay`),
                            N(
                                `span`,
                                { class: `font-light text-muted-foreground` },
                                `Hub`,
                            ),
                            N(
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
    Go = ie(),
    Ko = R(
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
            i = E(e),
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
        currentUrl: ae(Ko),
        isCurrentUrl: e,
        isCurrentOrParentUrl: t,
        whenCurrentUrl: n,
    };
}
var Jo = A({
        __name: `NavMain`,
        props: { items: {} },
        setup(e) {
            let { currentUrl: t } = qo();
            function n(e) {
                let n = E(e);
                return t.value === n || t.value.startsWith(`${n}/`);
            }
            return (t, r) => (
                V(),
                w(
                    j(Eo),
                    { class: `px-2 py-0` },
                    {
                        default: _(() => [
                            F(j(Do), null, {
                                default: _(() => [
                                    ...(r[0] ||= [fe(`Platform`, -1)]),
                                ]),
                                _: 1,
                            }),
                            F(j(Ao), null, {
                                default: _(() => [
                                    (V(!0),
                                    B(
                                        L,
                                        null,
                                        he(
                                            e.items,
                                            (e) => (
                                                V(),
                                                w(
                                                    j(Io),
                                                    { key: e.title },
                                                    {
                                                        default: _(() => [
                                                            F(
                                                                j(Fo),
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
                                                                    default: _(
                                                                        () => [
                                                                            F(
                                                                                j(
                                                                                    ue,
                                                                                ),
                                                                                {
                                                                                    href: e.href,
                                                                                },
                                                                                {
                                                                                    default:
                                                                                        _(
                                                                                            () => [
                                                                                                (V(),
                                                                                                w(
                                                                                                    k(
                                                                                                        e.icon,
                                                                                                    ),
                                                                                                )),
                                                                                                N(
                                                                                                    `span`,
                                                                                                    null,
                                                                                                    U(
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
    Yo = A({
        __name: `DropdownMenu`,
        props: {
            defaultOpen: { type: Boolean },
            open: { type: Boolean },
            dir: {},
            modal: { type: Boolean },
        },
        emits: [`update:open`],
        setup(e, { emit: t }) {
            let n = He(e, t);
            return (e, t) => (
                V(),
                w(
                    j(oa),
                    b({ 'data-slot': `dropdown-menu` }, j(n)),
                    {
                        default: _((t) => [D(e.$slots, `default`, W(u(t)))]),
                        _: 3,
                    },
                    16,
                )
            );
        },
    }),
    Xo = A({
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
                i = Qe(n, `class`),
                a = He(i, r);
            return (e, t) => (
                V(),
                w(j(da), null, {
                    default: _(() => [
                        F(
                            j(sa),
                            b(
                                { 'data-slot': `dropdown-menu-content` },
                                { ...e.$attrs, ...j(a) },
                                {
                                    class: j(z)(
                                        `bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md`,
                                        n.class,
                                    ),
                                },
                            ),
                            {
                                default: _(() => [D(e.$slots, `default`)]),
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
    Zo = A({
        __name: `DropdownMenuGroup`,
        props: { asChild: { type: Boolean }, as: {} },
        setup(e) {
            let t = e;
            return (e, n) => (
                V(),
                w(
                    j(ca),
                    b({ 'data-slot': `dropdown-menu-group` }, t),
                    { default: _(() => [D(e.$slots, `default`)]), _: 3 },
                    16,
                )
            );
        },
    }),
    Qo = A({
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
                n = Qe(t, `inset`, `variant`, `class`),
                r = Be(n);
            return (n, i) => (
                V(),
                w(
                    j(la),
                    b(
                        {
                            'data-slot': `dropdown-menu-item`,
                            'data-inset': e.inset ? `` : void 0,
                            'data-variant': e.variant,
                        },
                        j(r),
                        {
                            class: j(z)(
                                `focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
                                t.class,
                            ),
                        },
                    ),
                    { default: _(() => [D(n.$slots, `default`)]), _: 3 },
                    16,
                    [`data-inset`, `data-variant`, `class`],
                )
            );
        },
    }),
    $o = A({
        __name: `DropdownMenuLabel`,
        props: {
            asChild: { type: Boolean },
            as: {},
            class: { type: [Boolean, null, String, Object, Array] },
            inset: { type: Boolean },
        },
        setup(e) {
            let t = e,
                n = Qe(t, `class`, `inset`),
                r = Be(n);
            return (n, i) => (
                V(),
                w(
                    j(ua),
                    b(
                        {
                            'data-slot': `dropdown-menu-label`,
                            'data-inset': e.inset ? `` : void 0,
                        },
                        j(r),
                        {
                            class: j(z)(
                                `px-2 py-1.5 text-sm font-medium data-[inset]:pl-8`,
                                t.class,
                            ),
                        },
                    ),
                    { default: _(() => [D(n.$slots, `default`)]), _: 3 },
                    16,
                    [`data-inset`, `class`],
                )
            );
        },
    }),
    es = A({
        __name: `DropdownMenuSeparator`,
        props: {
            asChild: { type: Boolean },
            as: {},
            class: { type: [Boolean, null, String, Object, Array] },
        },
        setup(e) {
            let t = e,
                n = Qe(t, `class`);
            return (e, r) => (
                V(),
                w(
                    j(fa),
                    b({ 'data-slot': `dropdown-menu-separator` }, j(n), {
                        class: j(z)(`bg-border -mx-1 my-1 h-px`, t.class),
                    }),
                    null,
                    16,
                    [`class`],
                )
            );
        },
    }),
    ts = A({
        __name: `DropdownMenuTrigger`,
        props: {
            disabled: { type: Boolean },
            asChild: { type: Boolean },
            as: {},
        },
        setup(e) {
            let t = Be(e);
            return (e, n) => (
                V(),
                w(
                    j(pa),
                    b({ 'data-slot': `dropdown-menu-trigger` }, j(t)),
                    { default: _(() => [D(e.$slots, `default`)]), _: 3 },
                    16,
                )
            );
        },
    }),
    ns = A({
        __name: `Avatar`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                V(),
                w(
                    j(Oi),
                    {
                        'data-slot': `avatar`,
                        class: H(
                            j(z)(
                                `relative flex size-8 shrink-0 overflow-hidden rounded-full`,
                                t.class,
                            ),
                        ),
                    },
                    { default: _(() => [D(e.$slots, `default`)]), _: 3 },
                    8,
                    [`class`],
                )
            );
        },
    }),
    rs = A({
        __name: `AvatarFallback`,
        props: {
            delayMs: {},
            asChild: { type: Boolean },
            as: {},
            class: { type: [Boolean, null, String, Object, Array] },
        },
        setup(e) {
            let t = e,
                n = Qe(t, `class`);
            return (e, r) => (
                V(),
                w(
                    j(ki),
                    b({ 'data-slot': `avatar-fallback` }, j(n), {
                        class: j(z)(
                            `bg-muted flex size-full items-center justify-center rounded-full`,
                            t.class,
                        ),
                    }),
                    { default: _(() => [D(e.$slots, `default`)]), _: 3 },
                    16,
                    [`class`],
                )
            );
        },
    }),
    is = A({
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
                V(),
                w(
                    j(Mi),
                    b({ 'data-slot': `avatar-image` }, t, {
                        class: `aspect-square size-full`,
                    }),
                    { default: _(() => [D(e.$slots, `default`)]), _: 3 },
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
    ds = A({
        __name: `UserInfo`,
        props: { user: {}, showEmail: { type: Boolean, default: !1 } },
        setup(e) {
            let t = e,
                { getInitials: n } = ss(),
                r = R(() => t.user.avatar && t.user.avatar !== ``);
            return (t, i) => (
                V(),
                B(
                    L,
                    null,
                    [
                        F(
                            j(ns),
                            { class: `h-8 w-8 overflow-hidden rounded-lg` },
                            {
                                default: _(() => [
                                    r.value
                                        ? (V(),
                                          w(
                                              j(is),
                                              {
                                                  key: 0,
                                                  src: e.user.avatar,
                                                  alt: e.user.name,
                                              },
                                              null,
                                              8,
                                              [`src`, `alt`],
                                          ))
                                        : le(``, !0),
                                    F(
                                        j(rs),
                                        {
                                            class: `rounded-lg text-black dark:text-white`,
                                        },
                                        {
                                            default: _(() => [
                                                fe(U(j(n)(e.user.name)), 1),
                                            ]),
                                            _: 1,
                                        },
                                    ),
                                ]),
                                _: 1,
                            },
                        ),
                        N(`div`, cs, [
                            N(`span`, ls, U(e.user.name), 1),
                            e.showEmail
                                ? (V(), B(`span`, us, U(e.user.email), 1))
                                : le(``, !0),
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
var _s = (e) => ({ url: _s.url(e), method: `get` });
((_s.definition = { methods: [`get`, `head`], url: `/dashboard` }),
    (_s.url = (e) => _s.definition.url + I(e)),
    (_s.get = (e) => ({ url: _s.url(e), method: `get` })),
    (_s.head = (e) => ({ url: _s.url(e), method: `head` })));
var vs = (e) => ({ action: _s.url(e), method: `get` });
((vs.get = (e) => ({ action: _s.url(e), method: `get` })),
    (vs.head = (e) => ({
        action: _s.url({
            [e?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(e?.query ?? e?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (_s.form = vs));
var J = (e) => ({ url: J.url(e), method: `get` });
((J.definition = { methods: [`get`, `head`], url: `/settings/profile` }),
    (J.url = (e) => J.definition.url + I(e)),
    (J.get = (e) => ({ url: J.url(e), method: `get` })),
    (J.head = (e) => ({ url: J.url(e), method: `head` })));
var ys = (e) => ({ action: J.url(e), method: `get` });
((ys.get = (e) => ({ action: J.url(e), method: `get` })),
    (ys.head = (e) => ({
        action: J.url({
            [e?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(e?.query ?? e?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (J.form = ys));
var bs = (e) => ({ url: bs.url(e), method: `patch` });
((bs.definition = { methods: [`patch`], url: `/settings/profile` }),
    (bs.url = (e) => bs.definition.url + I(e)),
    (bs.patch = (e) => ({ url: bs.url(e), method: `patch` })));
var xs = (e) => ({
    action: bs.url({
        [e?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `PATCH`,
            ...(e?.query ?? e?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
});
((xs.patch = (e) => ({
    action: bs.url({
        [e?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `PATCH`,
            ...(e?.query ?? e?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
})),
    (bs.form = xs),
    Object.assign(J, J),
    Object.assign(bs, bs));
var Ss = { class: `flex items-center gap-2 px-1 py-1.5 text-left text-sm` },
    Cs = A({
        __name: `UserMenuContent`,
        props: { user: {} },
        setup(e) {
            let t = () => {
                c.flushAll();
            };
            return (n, r) => (
                V(),
                B(
                    L,
                    null,
                    [
                        F(
                            j($o),
                            { class: `p-0 font-normal` },
                            {
                                default: _(() => [
                                    N(`div`, Ss, [
                                        F(
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
                        F(j(es)),
                        F(j(Zo), null, {
                            default: _(() => [
                                F(
                                    j(Qo),
                                    { 'as-child': !0 },
                                    {
                                        default: _(() => [
                                            F(
                                                j(ue),
                                                {
                                                    class: `block w-full cursor-pointer`,
                                                    href: j(J)(),
                                                    prefetch: ``,
                                                },
                                                {
                                                    default: _(() => [
                                                        F(j(Ha), {
                                                            class: `mr-2 h-4 w-4`,
                                                        }),
                                                        (r[0] ||= fe(
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
                        F(j(es)),
                        F(
                            j(Qo),
                            { 'as-child': !0 },
                            {
                                default: _(() => [
                                    F(
                                        j(ue),
                                        {
                                            class: `block w-full cursor-pointer`,
                                            href: j(ms)(),
                                            onClick: t,
                                            as: `button`,
                                            'data-test': `logout-button`,
                                        },
                                        {
                                            default: _(() => [
                                                F(j(Ra), {
                                                    class: `mr-2 h-4 w-4`,
                                                }),
                                                (r[1] ||= fe(` Log out `, -1)),
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
    ws = A({
        __name: `NavUser`,
        setup(e) {
            let t = ie(),
                n = R(() => t.props.auth.user),
                { isMobile: r, state: i } = vo();
            return (e, t) => (
                V(),
                w(j(Ao), null, {
                    default: _(() => [
                        F(j(Io), null, {
                            default: _(() => [
                                F(j(Yo), null, {
                                    default: _(() => [
                                        F(
                                            j(ts),
                                            { 'as-child': `` },
                                            {
                                                default: _(() => [
                                                    F(
                                                        j(Fo),
                                                        {
                                                            size: `lg`,
                                                            class: `data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground`,
                                                            'data-test': `sidebar-menu-button`,
                                                        },
                                                        {
                                                            default: _(() => [
                                                                F(
                                                                    ds,
                                                                    {
                                                                        user: n.value,
                                                                    },
                                                                    null,
                                                                    8,
                                                                    [`user`],
                                                                ),
                                                                F(j(ja), {
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
                                        F(
                                            j(Xo),
                                            {
                                                class: `w-(--reka-dropdown-menu-trigger-width) min-w-56 rounded-lg`,
                                                side: j(r)
                                                    ? `bottom`
                                                    : j(i) === `collapsed`
                                                      ? `left`
                                                      : `bottom`,
                                                align: `end`,
                                                'side-offset': 4,
                                            },
                                            {
                                                default: _(() => [
                                                    F(
                                                        Cs,
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
    Y = (e) => ({ url: Y.url(e), method: `get` });
((Y.definition = { methods: [`get`, `head`], url: `/deployments` }),
    (Y.url = (e) => Y.definition.url + I(e)),
    (Y.get = (e) => ({ url: Y.url(e), method: `get` })),
    (Y.head = (e) => ({ url: Y.url(e), method: `head` })));
var Ts = (e) => ({ action: Y.url(e), method: `get` });
((Ts.get = (e) => ({ action: Y.url(e), method: `get` })),
    (Ts.head = (e) => ({
        action: Y.url({
            [e?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(e?.query ?? e?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (Y.form = Ts));
var Es = (e) => ({ url: Es.url(e), method: `get` });
((Es.definition = { methods: [`get`, `head`], url: `/deployments/create` }),
    (Es.url = (e) => Es.definition.url + I(e)),
    (Es.get = (e) => ({ url: Es.url(e), method: `get` })),
    (Es.head = (e) => ({ url: Es.url(e), method: `head` })));
var Ds = (e) => ({ action: Es.url(e), method: `get` });
((Ds.get = (e) => ({ action: Es.url(e), method: `get` })),
    (Ds.head = (e) => ({
        action: Es.url({
            [e?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(e?.query ?? e?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (Es.form = Ds));
var Os = (e) => ({ url: Os.url(e), method: `post` });
((Os.definition = { methods: [`post`], url: `/deployments` }),
    (Os.url = (e) => Os.definition.url + I(e)),
    (Os.post = (e) => ({ url: Os.url(e), method: `post` })));
var ks = (e) => ({ action: Os.url(e), method: `post` });
((ks.post = (e) => ({ action: Os.url(e), method: `post` })), (Os.form = ks));
var X = (e, t) => ({ url: X.url(e, t), method: `get` });
((X.definition = {
    methods: [`get`, `head`],
    url: `/deployments/{deployment}`,
}),
    (X.url = (e, t) => {
        ((typeof e == `string` || typeof e == `number`) &&
            (e = { deployment: e }),
            Array.isArray(e) && (e = { deployment: e[0] }),
            (e = _e(e)));
        let n = { deployment: e.deployment };
        return (
            X.definition.url
                .replace(`{deployment}`, n.deployment.toString())
                .replace(/\/+$/, ``) + I(t)
        );
    }),
    (X.get = (e, t) => ({ url: X.url(e, t), method: `get` })),
    (X.head = (e, t) => ({ url: X.url(e, t), method: `head` })));
var As = (e, t) => ({ action: X.url(e, t), method: `get` });
((As.get = (e, t) => ({ action: X.url(e, t), method: `get` })),
    (As.head = (e, t) => ({
        action: X.url(e, {
            [t?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(t?.query ?? t?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (X.form = As));
var js = (e, t) => ({ url: js.url(e, t), method: `get` });
((js.definition = {
    methods: [`get`, `head`],
    url: `/deployments/{deployment}/edit`,
}),
    (js.url = (e, t) => {
        ((typeof e == `string` || typeof e == `number`) &&
            (e = { deployment: e }),
            Array.isArray(e) && (e = { deployment: e[0] }),
            (e = _e(e)));
        let n = { deployment: e.deployment };
        return (
            js.definition.url
                .replace(`{deployment}`, n.deployment.toString())
                .replace(/\/+$/, ``) + I(t)
        );
    }),
    (js.get = (e, t) => ({ url: js.url(e, t), method: `get` })),
    (js.head = (e, t) => ({ url: js.url(e, t), method: `head` })));
var Ms = (e, t) => ({ action: js.url(e, t), method: `get` });
((Ms.get = (e, t) => ({ action: js.url(e, t), method: `get` })),
    (Ms.head = (e, t) => ({
        action: js.url(e, {
            [t?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(t?.query ?? t?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (js.form = Ms));
var Ns = (e, t) => ({ url: Ns.url(e, t), method: `put` });
((Ns.definition = {
    methods: [`put`, `patch`],
    url: `/deployments/{deployment}`,
}),
    (Ns.url = (e, t) => {
        ((typeof e == `string` || typeof e == `number`) &&
            (e = { deployment: e }),
            Array.isArray(e) && (e = { deployment: e[0] }),
            (e = _e(e)));
        let n = { deployment: e.deployment };
        return (
            Ns.definition.url
                .replace(`{deployment}`, n.deployment.toString())
                .replace(/\/+$/, ``) + I(t)
        );
    }),
    (Ns.put = (e, t) => ({ url: Ns.url(e, t), method: `put` })),
    (Ns.patch = (e, t) => ({ url: Ns.url(e, t), method: `patch` })));
var Ps = (e, t) => ({
    action: Ns.url(e, {
        [t?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `PUT`,
            ...(t?.query ?? t?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
});
((Ps.put = (e, t) => ({
    action: Ns.url(e, {
        [t?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `PUT`,
            ...(t?.query ?? t?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
})),
    (Ps.patch = (e, t) => ({
        action: Ns.url(e, {
            [t?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `PATCH`,
                ...(t?.query ?? t?.mergeQuery ?? {}),
            },
        }),
        method: `post`,
    })),
    (Ns.form = Ps));
var Fs = (e, t) => ({ url: Fs.url(e, t), method: `delete` });
((Fs.definition = { methods: [`delete`], url: `/deployments/{deployment}` }),
    (Fs.url = (e, t) => {
        ((typeof e == `string` || typeof e == `number`) &&
            (e = { deployment: e }),
            Array.isArray(e) && (e = { deployment: e[0] }),
            (e = _e(e)));
        let n = { deployment: e.deployment };
        return (
            Fs.definition.url
                .replace(`{deployment}`, n.deployment.toString())
                .replace(/\/+$/, ``) + I(t)
        );
    }),
    (Fs.delete = (e, t) => ({ url: Fs.url(e, t), method: `delete` })));
var Is = (e, t) => ({
    action: Fs.url(e, {
        [t?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `DELETE`,
            ...(t?.query ?? t?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
});
((Is.delete = (e, t) => ({
    action: Fs.url(e, {
        [t?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `DELETE`,
            ...(t?.query ?? t?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
})),
    (Fs.form = Is));
var Ls = (e, t) => ({ url: Ls.url(e, t), method: `patch` });
((Ls.definition = {
    methods: [`patch`],
    url: `/deployments/{deployment}/active`,
}),
    (Ls.url = (e, t) => {
        ((typeof e == `string` || typeof e == `number`) &&
            (e = { deployment: e }),
            Array.isArray(e) && (e = { deployment: e[0] }),
            (e = _e(e)));
        let n = { deployment: e.deployment };
        return (
            Ls.definition.url
                .replace(`{deployment}`, n.deployment.toString())
                .replace(/\/+$/, ``) + I(t)
        );
    }),
    (Ls.patch = (e, t) => ({ url: Ls.url(e, t), method: `patch` })));
var Rs = (e, t) => ({
    action: Ls.url(e, {
        [t?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `PATCH`,
            ...(t?.query ?? t?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
});
((Rs.patch = (e, t) => ({
    action: Ls.url(e, {
        [t?.mergeQuery ? `mergeQuery` : `query`]: {
            _method: `PATCH`,
            ...(t?.query ?? t?.mergeQuery ?? {}),
        },
    }),
    method: `post`,
})),
    (Ls.form = Rs),
    Object.assign(Y, Y),
    Object.assign(Es, Es),
    Object.assign(Os, Os),
    Object.assign(X, X),
    Object.assign(js, js),
    Object.assign(Ns, Ns),
    Object.assign(Fs, Fs),
    Object.assign(Ls, Ls));
var Z = (e) => ({ url: Z.url(e), method: `get` });
((Z.definition = { methods: [`get`, `head`], url: `/staff` }),
    (Z.url = (e) => Z.definition.url + I(e)),
    (Z.get = (e) => ({ url: Z.url(e), method: `get` })),
    (Z.head = (e) => ({ url: Z.url(e), method: `head` })));
var zs = (e) => ({ action: Z.url(e), method: `get` });
((zs.get = (e) => ({ action: Z.url(e), method: `get` })),
    (zs.head = (e) => ({
        action: Z.url({
            [e?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(e?.query ?? e?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (Z.form = zs));
var Bs = (e) => ({ url: Bs.url(e), method: `get` });
((Bs.definition = { methods: [`get`, `head`], url: `/staff/create` }),
    (Bs.url = (e) => Bs.definition.url + I(e)),
    (Bs.get = (e) => ({ url: Bs.url(e), method: `get` })),
    (Bs.head = (e) => ({ url: Bs.url(e), method: `head` })));
var Vs = (e) => ({ action: Bs.url(e), method: `get` });
((Vs.get = (e) => ({ action: Bs.url(e), method: `get` })),
    (Vs.head = (e) => ({
        action: Bs.url({
            [e?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(e?.query ?? e?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (Bs.form = Vs));
var Hs = (e) => ({ url: Hs.url(e), method: `post` });
((Hs.definition = { methods: [`post`], url: `/staff` }),
    (Hs.url = (e) => Hs.definition.url + I(e)),
    (Hs.post = (e) => ({ url: Hs.url(e), method: `post` })));
var Us = (e) => ({ action: Hs.url(e), method: `post` });
((Us.post = (e) => ({ action: Hs.url(e), method: `post` })), (Hs.form = Us));
var Q = (e, t) => ({ url: Q.url(e, t), method: `get` });
((Q.definition = { methods: [`get`, `head`], url: `/staff/{user}/edit` }),
    (Q.url = (e, t) => {
        ((typeof e == `string` || typeof e == `number`) && (e = { user: e }),
            typeof e == `object` &&
                !Array.isArray(e) &&
                `id` in e &&
                (e = { user: e.id }),
            Array.isArray(e) && (e = { user: e[0] }),
            (e = _e(e)));
        let n = { user: typeof e.user == `object` ? e.user.id : e.user };
        return (
            Q.definition.url
                .replace(`{user}`, n.user.toString())
                .replace(/\/+$/, ``) + I(t)
        );
    }),
    (Q.get = (e, t) => ({ url: Q.url(e, t), method: `get` })),
    (Q.head = (e, t) => ({ url: Q.url(e, t), method: `head` })));
var Ws = (e, t) => ({ action: Q.url(e, t), method: `get` });
((Ws.get = (e, t) => ({ action: Q.url(e, t), method: `get` })),
    (Ws.head = (e, t) => ({
        action: Q.url(e, {
            [t?.mergeQuery ? `mergeQuery` : `query`]: {
                _method: `HEAD`,
                ...(t?.query ?? t?.mergeQuery ?? {}),
            },
        }),
        method: `get`,
    })),
    (Q.form = Ws));
var Gs = (e, t) => ({ url: Gs.url(e, t), method: `put` });
((Gs.definition = { methods: [`put`, `patch`], url: `/staff/{user}` }),
    (Gs.url = (e, t) => {
        ((typeof e == `string` || typeof e == `number`) && (e = { user: e }),
            typeof e == `object` &&
                !Array.isArray(e) &&
                `id` in e &&
                (e = { user: e.id }),
            Array.isArray(e) && (e = { user: e[0] }),
            (e = _e(e)));
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
            (e = _e(e)));
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
            (e = _e(e)));
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
    Object.assign(Z, Z),
    Object.assign(Bs, Bs),
    Object.assign(Hs, Hs),
    Object.assign(Q, Q),
    Object.assign(Gs, Gs),
    Object.assign(qs, qs),
    Object.assign(Ys, Ys));
var Zs = A({
        __name: `AppSidebar`,
        setup(e) {
            let t = [
                { title: `Home`, href: _s(), icon: Fa },
                { title: `Deployments`, href: Y(), icon: La },
                { title: `Staff`, href: Z(), icon: Wa },
            ];
            return (e, n) => (
                V(),
                B(
                    L,
                    null,
                    [
                        F(
                            j(Co),
                            { collapsible: `icon`, variant: `inset` },
                            {
                                default: _(() => [
                                    F(j(Oo), null, {
                                        default: _(() => [
                                            F(j(Ao), null, {
                                                default: _(() => [
                                                    F(j(Io), null, {
                                                        default: _(() => [
                                                            F(
                                                                j(Fo),
                                                                {
                                                                    size: `lg`,
                                                                    'as-child': ``,
                                                                },
                                                                {
                                                                    default: _(
                                                                        () => [
                                                                            F(
                                                                                j(
                                                                                    ue,
                                                                                ),
                                                                                {
                                                                                    href: j(
                                                                                        _s,
                                                                                    )(),
                                                                                    'aria-label': `PayHub Central home`,
                                                                                },
                                                                                {
                                                                                    default:
                                                                                        _(
                                                                                            () => [
                                                                                                F(
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
                                    F(j(wo), null, {
                                        default: _(() => [F(Jo, { items: t })]),
                                        _: 1,
                                    }),
                                    F(j(To), null, {
                                        default: _(() => [F(ws)]),
                                        _: 1,
                                    }),
                                ]),
                                _: 1,
                            },
                        ),
                        D(e.$slots, `default`),
                    ],
                    64,
                )
            );
        },
    }),
    Qs = A({
        __name: `Breadcrumb`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                V(),
                B(
                    `nav`,
                    {
                        'aria-label': `breadcrumb`,
                        'data-slot': `breadcrumb`,
                        class: H(t.class),
                    },
                    [D(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    $s = A({
        __name: `BreadcrumbItem`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                V(),
                B(
                    `li`,
                    {
                        'data-slot': `breadcrumb-item`,
                        class: H(
                            j(z)(`inline-flex items-center gap-1.5`, t.class),
                        ),
                    },
                    [D(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    ec = A({
        __name: `BreadcrumbLink`,
        props: {
            asChild: { type: Boolean },
            as: { default: `a` },
            class: { type: [Boolean, null, String, Object, Array] },
        },
        setup(e) {
            let t = e;
            return (n, r) => (
                V(),
                w(
                    j(M),
                    {
                        'data-slot': `breadcrumb-link`,
                        as: e.as,
                        'as-child': e.asChild,
                        class: H(
                            j(z)(
                                `hover:text-foreground transition-colors`,
                                t.class,
                            ),
                        ),
                    },
                    { default: _(() => [D(n.$slots, `default`)]), _: 3 },
                    8,
                    [`as`, `as-child`, `class`],
                )
            );
        },
    }),
    tc = A({
        __name: `BreadcrumbList`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                V(),
                B(
                    `ol`,
                    {
                        'data-slot': `breadcrumb-list`,
                        class: H(
                            j(z)(
                                `text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5`,
                                t.class,
                            ),
                        ),
                    },
                    [D(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    nc = A({
        __name: `BreadcrumbPage`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                V(),
                B(
                    `span`,
                    {
                        'data-slot': `breadcrumb-page`,
                        role: `link`,
                        'aria-disabled': `true`,
                        'aria-current': `page`,
                        class: H(j(z)(`text-foreground font-normal`, t.class)),
                    },
                    [D(e.$slots, `default`)],
                    2,
                )
            );
        },
    }),
    rc = A({
        __name: `BreadcrumbSeparator`,
        props: { class: { type: [Boolean, null, String, Object, Array] } },
        setup(e) {
            let t = e;
            return (e, n) => (
                V(),
                B(
                    `li`,
                    {
                        'data-slot': `breadcrumb-separator`,
                        role: `presentation`,
                        'aria-hidden': `true`,
                        class: H(j(z)(`[&>svg]:size-3.5`, t.class)),
                    },
                    [D(e.$slots, `default`, {}, () => [F(j(Aa))])],
                    2,
                )
            );
        },
    }),
    ic = A({
        __name: `Breadcrumbs`,
        props: { breadcrumbs: {} },
        setup(e) {
            return (t, n) => (
                V(),
                w(j(Qs), null, {
                    default: _(() => [
                        F(j(tc), null, {
                            default: _(() => [
                                (V(!0),
                                B(
                                    L,
                                    null,
                                    he(
                                        e.breadcrumbs,
                                        (t, n) => (
                                            V(),
                                            B(
                                                L,
                                                { key: n },
                                                [
                                                    F(
                                                        j($s),
                                                        null,
                                                        {
                                                            default: _(() => [
                                                                n ===
                                                                e.breadcrumbs
                                                                    .length -
                                                                    1
                                                                    ? (V(),
                                                                      w(
                                                                          j(nc),
                                                                          {
                                                                              key: 0,
                                                                          },
                                                                          {
                                                                              default:
                                                                                  _(
                                                                                      () => [
                                                                                          fe(
                                                                                              U(
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
                                                                    : (V(),
                                                                      w(
                                                                          j(ec),
                                                                          {
                                                                              key: 1,
                                                                              'as-child': ``,
                                                                          },
                                                                          {
                                                                              default:
                                                                                  _(
                                                                                      () => [
                                                                                          F(
                                                                                              j(
                                                                                                  ue,
                                                                                              ),
                                                                                              {
                                                                                                  href: t.href,
                                                                                              },
                                                                                              {
                                                                                                  default:
                                                                                                      _(
                                                                                                          () => [
                                                                                                              fe(
                                                                                                                  U(
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
                                                        ? le(``, !0)
                                                        : (V(),
                                                          w(j(rc), { key: 0 })),
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
    sc = A({
        __name: `AppSidebarHeader`,
        props: { breadcrumbs: { default: () => [] } },
        setup(e) {
            return (t, n) => (
                V(),
                B(`header`, ac, [
                    N(`div`, oc, [
                        F(j(zo), { class: `-ml-1` }),
                        e.breadcrumbs && e.breadcrumbs.length > 0
                            ? (V(),
                              w(
                                  ic,
                                  { key: 0, breadcrumbs: e.breadcrumbs },
                                  null,
                                  8,
                                  [`breadcrumbs`],
                              ))
                            : le(``, !0),
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
    lc = A({
        __name: `SchedulerBanner`,
        setup(e) {
            let t = ie(),
                n = R(() => t.props.scheduler?.stale === !0);
            return (e, t) =>
                n.value
                    ? (V(),
                      B(`div`, cc, [
                          F(j(Ua), {
                              class: `mt-0.5 size-4 shrink-0`,
                              'aria-hidden': `true`,
                          }),
                          (t[0] ||= N(
                              `p`,
                              null,
                              ` Numbers are not updating: scheduled pulls have stopped. Ask the developer to check the server cron. `,
                              -1,
                          )),
                      ]))
                    : le(``, !0);
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
                        if (((a = [`resolve`, e]), v(e)))
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
                                    typeof r == `object` && !v(r)
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
                                    typeof r == `object` && !v(r)
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
                                    typeof r == `object` && !v(r)
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
                                    typeof r == `object` && !v(r)
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
    let e = C(!1);
    return (
        o(() => {
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
    Ac = A({
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
                i = C(null),
                a = C(null),
                s = C(!1),
                c = C(!1),
                l = C(!1),
                u = C(!1),
                d = C(!1),
                m = C(0),
                h = C(0),
                g = C(n.toast.duration || n.duration || yc),
                _ = C(null),
                v = C(null),
                y = R(() => n.index === 0),
                ee = R(() => n.index + 1 <= n.visibleToasts),
                S = R(() => n.toast.type),
                T = R(() => n.toast.dismissible !== !1),
                E = R(() => n.toast.class || ``),
                O = R(() => n.descriptionClass || ``),
                ne = R(() => {
                    let e = n.toast.position || n.position,
                        t = n.heights
                            .filter((t) => t.position === e)
                            .findIndex((e) => e.toastId === n.toast.id);
                    return t >= 0 ? t : 0;
                }),
                re = R(() => {
                    let e = n.toast.position || n.position;
                    return n.heights
                        .filter((t) => t.position === e)
                        .reduce(
                            (e, t, n) => (n >= ne.value ? e : e + t.height),
                            0,
                        );
                }),
                ie = R(() => ne.value * n.gap + re.value || 0),
                A = R(() => n.toast.closeButton ?? n.closeButton),
                M = R(() => n.toast.duration || n.duration || yc),
                ae = C(0),
                oe = C(0),
                se = C(null),
                ce = R(() => n.position.split(`-`)),
                F = R(() => ce.value[0]),
                I = R(() => ce.value[1]),
                ue = R(() => typeof n.toast.title != `string`),
                de = R(() => typeof n.toast.description != `string`),
                { isDocumentHidden: pe } = wc(),
                me = R(() => S.value && S.value === `loading`);
            (x(() => {
                ((s.value = !0), (g.value = M.value));
            }),
                o(async () => {
                    if (!s.value || !v.value) return;
                    await p();
                    let e = v.value,
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
            function z() {
                ((c.value = !0),
                    (m.value = ie.value),
                    setTimeout(() => {
                        r(`removeToast`, n.toast);
                    }, Cc));
            }
            function he() {
                if (me.value || !T.value) return {};
                (z(), n.toast.onDismiss?.(n.toast));
            }
            function ge(e) {
                e.button !== 2 &&
                    !me.value &&
                    T.value &&
                    ((_.value = new Date()),
                    (m.value = ie.value),
                    e.target.setPointerCapture(e.pointerId),
                    e.target.tagName !== `BUTTON` &&
                        ((l.value = !0),
                        (se.value = { x: e.clientX, y: e.clientY })));
            }
            function _e() {
                if (u.value || !T.value) return;
                se.value = null;
                let e = Number(
                        v.value?.style
                            .getPropertyValue(`--swipe-amount-x`)
                            .replace(`px`, ``) || 0,
                    ),
                    t = Number(
                        v.value?.style
                            .getPropertyValue(`--swipe-amount-y`)
                            .replace(`px`, ``) || 0,
                    ),
                    r = new Date().getTime() - (_.value?.getTime() || 0),
                    o = i.value === `x` ? e : t,
                    s = Math.abs(o) / r;
                Math.abs(o) >= Sc || s > 0.11
                    ? ((m.value = ie.value),
                      n.toast.onDismiss?.(n.toast),
                      i.value === `x`
                          ? (a.value = e > 0 ? `right` : `left`)
                          : (a.value = t > 0 ? `down` : `up`),
                      z(),
                      (u.value = !0))
                    : (v.value?.style.setProperty(`--swipe-amount-x`, `0px`),
                      v.value?.style.setProperty(`--swipe-amount-y`, `0px`),
                      (d.value = !1),
                      (l.value = !1),
                      (i.value = null));
            }
            function ve(e) {
                if (
                    !se.value ||
                    !T.value ||
                    (window?.getSelection()?.toString()?.length ?? !1)
                )
                    return;
                let t = e.clientY - se.value.y,
                    r = e.clientX - se.value.x,
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
                    v.value?.style.setProperty(`--swipe-amount-x`, `${o.x}px`),
                    v.value?.style.setProperty(`--swipe-amount-y`, `${o.y}px`));
            }
            (x(() => {
                if (((s.value = !0), !v.value)) return;
                let e = v.value.getBoundingClientRect().height;
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
                f(() => {
                    v.value && r(`removeToast`, n.toast);
                }),
                o((e) => {
                    if (
                        (n.toast.promise && S.value === `loading`) ||
                        n.toast.duration === 1 / 0 ||
                        n.toast.type === `loading`
                    )
                        return;
                    let t;
                    (n.expanded || n.interacting || pe.value
                        ? (() => {
                              if (oe.value < ae.value) {
                                  let e = new Date().getTime() - ae.value;
                                  g.value -= e;
                              }
                              oe.value = new Date().getTime();
                          })()
                        : g.value !== 1 / 0 &&
                          ((ae.value = new Date().getTime()),
                          (t = setTimeout(() => {
                              (n.toast.onAutoClose?.(n.toast), z());
                          }, g.value))),
                        e(() => {
                            clearTimeout(t);
                        }));
                }),
                P(
                    () => n.toast.delete,
                    (e) => {
                        e !== void 0 &&
                            e &&
                            (z(), n.toast.onDismiss?.(n.toast));
                    },
                    { deep: !0 },
                ));
            function ye() {
                ((l.value = !1), (i.value = null), (se.value = null));
            }
            return (e, t) => (
                V(),
                B(
                    `li`,
                    {
                        tabindex: `0`,
                        ref_key: `toastRef`,
                        ref: v,
                        class: H(
                            j(Tc)(
                                n.class,
                                E.value,
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
                        'data-mounted': s.value,
                        'data-promise': !!e.toast.promise,
                        'data-swiped': d.value,
                        'data-removed': c.value,
                        'data-visible': ee.value,
                        'data-y-position': F.value,
                        'data-x-position': I.value,
                        'data-index': e.index,
                        'data-front': y.value,
                        'data-swiping': l.value,
                        'data-dismissible': T.value,
                        'data-type': S.value,
                        'data-invert': e.toast.invert || e.invert,
                        'data-swipe-out': u.value,
                        'data-swipe-direction': a.value,
                        'data-expanded': !!(
                            e.expanded ||
                            (e.expandByDefault && s.value)
                        ),
                        'data-testid': e.toast.testId,
                        style: te({
                            '--index': e.index,
                            '--toasts-before': e.index,
                            '--z-index': e.toasts.length - e.index,
                            '--offset': `${c.value ? m.value : ie.value}px`,
                            '--initial-height': e.expandByDefault
                                ? `auto`
                                : `${h.value}px`,
                            ...e.style,
                            ...n.toast.style,
                        }),
                        onDragend: ye,
                        onPointerdown: ge,
                        onPointerup: _e,
                        onPointermove: ve,
                    },
                    [
                        A.value && !e.toast.component && S.value !== `loading`
                            ? (V(),
                              B(
                                  `button`,
                                  {
                                      key: 0,
                                      'aria-label':
                                          e.closeButtonAriaLabel ||
                                          `Close toast`,
                                      'data-disabled': me.value,
                                      'data-close-button': `true`,
                                      'data-close-button-position':
                                          e.closeButtonPosition,
                                      class: H(
                                          j(Tc)(
                                              e.classes?.closeButton,
                                              e.toast?.classes?.closeButton,
                                          ),
                                      ),
                                      onClick: he,
                                  },
                                  [
                                      e.icons?.close
                                          ? (V(),
                                            w(k(e.icons?.close), { key: 0 }))
                                          : D(e.$slots, `close-icon`, {
                                                key: 1,
                                            }),
                                  ],
                                  10,
                                  kc,
                              ))
                            : le(`v-if`, !0),
                        e.toast.component
                            ? (V(),
                              w(
                                  k(e.toast.component),
                                  b({ key: 1 }, e.toast.componentProps, {
                                      onCloseToast: he,
                                      isPaused:
                                          e.$props.expanded ||
                                          e.$props.interacting ||
                                          j(pe),
                                  }),
                                  null,
                                  16,
                                  [`isPaused`],
                              ))
                            : (V(),
                              B(
                                  L,
                                  { key: 2 },
                                  [
                                      S.value !== 'default' ||
                                      e.toast.icon ||
                                      e.toast.promise
                                          ? (V(),
                                            B(
                                                `div`,
                                                {
                                                    key: 0,
                                                    'data-icon': ``,
                                                    class: H(
                                                        j(Tc)(
                                                            e.classes?.icon,
                                                            e.toast?.classes
                                                                ?.icon,
                                                        ),
                                                    ),
                                                },
                                                [
                                                    e.toast.icon
                                                        ? (V(),
                                                          w(k(e.toast.icon), {
                                                              key: 0,
                                                          }))
                                                        : (V(),
                                                          B(
                                                              L,
                                                              { key: 1 },
                                                              [
                                                                  S.value ===
                                                                  `loading`
                                                                      ? D(
                                                                            e.$slots,
                                                                            `loading-icon`,
                                                                            {
                                                                                key: 0,
                                                                            },
                                                                        )
                                                                      : S.value ===
                                                                          `success`
                                                                        ? D(
                                                                              e.$slots,
                                                                              `success-icon`,
                                                                              {
                                                                                  key: 1,
                                                                              },
                                                                          )
                                                                        : S.value ===
                                                                            `error`
                                                                          ? D(
                                                                                e.$slots,
                                                                                `error-icon`,
                                                                                {
                                                                                    key: 2,
                                                                                },
                                                                            )
                                                                          : S.value ===
                                                                              `warning`
                                                                            ? D(
                                                                                  e.$slots,
                                                                                  `warning-icon`,
                                                                                  {
                                                                                      key: 3,
                                                                                  },
                                                                              )
                                                                            : S.value ===
                                                                                `info`
                                                                              ? D(
                                                                                    e.$slots,
                                                                                    `info-icon`,
                                                                                    {
                                                                                        key: 4,
                                                                                    },
                                                                                )
                                                                              : le(
                                                                                    `v-if`,
                                                                                    !0,
                                                                                ),
                                                              ],
                                                              64,
                                                          )),
                                                ],
                                                2,
                                            ))
                                          : le(`v-if`, !0),
                                      N(
                                          `div`,
                                          {
                                              'data-content': ``,
                                              class: H(
                                                  j(Tc)(
                                                      e.classes?.content,
                                                      e.toast?.classes?.content,
                                                  ),
                                              ),
                                          },
                                          [
                                              N(
                                                  `div`,
                                                  {
                                                      'data-title': ``,
                                                      class: H(
                                                          j(Tc)(
                                                              e.classes?.title,
                                                              e.toast.classes
                                                                  ?.title,
                                                          ),
                                                      ),
                                                  },
                                                  [
                                                      ue.value
                                                          ? (V(),
                                                            w(
                                                                k(
                                                                    e.toast
                                                                        .title,
                                                                ),
                                                                W(
                                                                    b(
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
                                                          : (V(),
                                                            B(
                                                                L,
                                                                { key: 1 },
                                                                [
                                                                    fe(
                                                                        U(
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
                                                  ? (V(),
                                                    B(
                                                        `div`,
                                                        {
                                                            key: 0,
                                                            'data-description': ``,
                                                            class: H(
                                                                j(Tc)(
                                                                    e.descriptionClass,
                                                                    O.value,
                                                                    e.classes
                                                                        ?.description,
                                                                    e.toast
                                                                        .classes
                                                                        ?.description,
                                                                ),
                                                            ),
                                                        },
                                                        [
                                                            de.value
                                                                ? (V(),
                                                                  w(
                                                                      k(
                                                                          e
                                                                              .toast
                                                                              .description,
                                                                      ),
                                                                      W(
                                                                          b(
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
                                                                : (V(),
                                                                  B(
                                                                      L,
                                                                      {
                                                                          key: 1,
                                                                      },
                                                                      [
                                                                          fe(
                                                                              U(
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
                                                  : le(`v-if`, !0),
                                          ],
                                          2,
                                      ),
                                      e.toast.cancel
                                          ? (V(),
                                            B(
                                                `button`,
                                                {
                                                    key: 1,
                                                    style: te(
                                                        e.toast
                                                            .cancelButtonStyle ||
                                                            e.cancelButtonStyle,
                                                    ),
                                                    class: H(
                                                        j(Tc)(
                                                            e.classes
                                                                ?.cancelButton,
                                                            e.toast.classes
                                                                ?.cancelButton,
                                                        ),
                                                    ),
                                                    'data-button': ``,
                                                    'data-cancel': ``,
                                                    onClick: (t[0] ||= (t) => {
                                                        j(hc)(e.toast.cancel) &&
                                                            T.value &&
                                                            (e.toast.cancel.onClick?.(
                                                                t,
                                                            ),
                                                            z());
                                                    }),
                                                },
                                                U(
                                                    j(hc)(e.toast.cancel)
                                                        ? e.toast.cancel?.label
                                                        : e.toast.cancel,
                                                ),
                                                7,
                                            ))
                                          : le(`v-if`, !0),
                                      e.toast.action
                                          ? (V(),
                                            B(
                                                `button`,
                                                {
                                                    key: 2,
                                                    style: te(
                                                        e.toast
                                                            .actionButtonStyle ||
                                                            e.actionButtonStyle,
                                                    ),
                                                    class: H(
                                                        j(Tc)(
                                                            e.classes
                                                                ?.actionButton,
                                                            e.toast.classes
                                                                ?.actionButton,
                                                        ),
                                                    ),
                                                    'data-button': ``,
                                                    'data-action': ``,
                                                    onClick: (t[1] ||= (t) => {
                                                        j(hc)(e.toast.action) &&
                                                            (e.toast.action.onClick?.(
                                                                t,
                                                            ),
                                                            !t.defaultPrevented &&
                                                                z());
                                                    }),
                                                },
                                                U(
                                                    j(hc)(e.toast.action)
                                                        ? e.toast.action?.label
                                                        : e.toast.action,
                                                ),
                                                7,
                                            ))
                                          : le(`v-if`, !0),
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
        V(),
        B(
            `svg`,
            Nc,
            (t[0] ||= [
                N(`line`, { x1: `18`, y1: `6`, x2: `6`, y2: `18` }, null, -1),
                N(`line`, { x1: `6`, y1: `6`, x2: `18`, y2: `18` }, null, -1),
            ]),
        )
    );
}
var Fc = jc(Mc, [[`render`, Pc]]),
    Ic = [`data-visible`],
    Lc = { class: `sonner-spinner` },
    Rc = A({
        __name: `Loader`,
        props: { visible: { type: Boolean } },
        setup(e) {
            let t = Array(12).fill(0);
            return (e, n) => (
                V(),
                B(
                    `div`,
                    {
                        class: `sonner-loading-wrapper`,
                        'data-visible': e.visible,
                    },
                    [
                        N(`div`, Lc, [
                            (V(!0),
                            B(
                                L,
                                null,
                                he(
                                    j(t),
                                    (e) => (
                                        V(),
                                        B(`div`, {
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
        V(),
        B(
            `svg`,
            Bc,
            (t[0] ||= [
                N(
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
        V(),
        B(
            `svg`,
            Wc,
            (t[0] ||= [
                N(
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
        V(),
        B(
            `svg`,
            Jc,
            (t[0] ||= [
                N(
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
        V(),
        B(
            `svg`,
            Qc,
            (t[0] ||= [
                N(
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
var al = A({
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
                n = T(),
                r = C([]),
                i = R(() =>
                    t.id
                        ? r.value.filter((e) => e.toasterId === t.id)
                        : r.value.filter((e) => !e.toasterId),
                );
            function a(e, t) {
                return i.value.filter(
                    (n) => (!n.position && t === 0) || n.position === e,
                );
            }
            let s = R(() => {
                    let e = i.value
                        .filter((e) => e.position)
                        .map((e) => e.position);
                    return e.length > 0
                        ? Array.from(new Set([t.position].concat(e)))
                        : [t.position];
                }),
                c = R(() => {
                    let e = {};
                    return (
                        s.value.forEach((t) => {
                            e[t] = r.value.filter((e) => e.position === t);
                        }),
                        e
                    );
                }),
                l = C([]),
                u = C({}),
                d = C(!1);
            o(() => {
                s.value.forEach((e) => {
                    e in u.value || (u.value[e] = !1);
                });
            });
            let f = C(
                    t.theme === `system`
                        ? typeof window < `u` &&
                          window.matchMedia &&
                          window.matchMedia(`(prefers-color-scheme: dark)`)
                              .matches
                            ? `dark`
                            : `light`
                        : t.theme,
                ),
                m = C(null),
                h = C(null),
                g = C(!1),
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
            function x(e) {
                g.value &&
                    !e.currentTarget?.contains?.(e.relatedTarget) &&
                    ((g.value = !1),
                    (h.value &&= (h.value.focus({ preventScroll: !0 }), null)));
            }
            function ee(e) {
                (e.target instanceof HTMLElement &&
                    e.target.dataset.dismissible === `false`) ||
                    g.value ||
                    ((g.value = !0), (h.value = e.relatedTarget));
            }
            function S(e) {
                (e.target &&
                    e.target instanceof HTMLElement &&
                    e.target.dataset.dismissible === `false`) ||
                    (d.value = !0);
            }
            (o((e) => {
                e(
                    dc.subscribe((e) => {
                        e.dismiss
                            ? requestAnimationFrame(() => {
                                  r.value = r.value.map((t) =>
                                      t.id === e.id ? { ...t, delete: !0 } : t,
                                  );
                              })
                            : p(() => {
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
                o((e) => {
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
                o(() => {
                    m.value &&
                        h.value &&
                        (h.value.focus({ preventScroll: !0 }),
                        (h.value = null),
                        (g.value = !1));
                }),
                o(() => {
                    r.value.length <= 1 &&
                        Object.keys(u.value).forEach((e) => {
                            u.value[e] = !1;
                        });
                }),
                o((e) => {
                    function n(e) {
                        let n = t.hotkey.every((t) => e[t] || e.code === t),
                            r = Array.isArray(m.value) ? m.value[0] : m.value;
                        n &&
                            (s.value.forEach((e) => {
                                u.value[e] = !0;
                            }),
                            r?.focus());
                        let i =
                            document.activeElement === m.value ||
                            r?.contains(document.activeElement);
                        e.code === `Escape` &&
                            i &&
                            s.value.forEach((e) => {
                                u.value[e] = !1;
                            });
                    }
                    rl &&
                        (document.addEventListener(`keydown`, n),
                        e(() => {
                            document.removeEventListener(`keydown`, n);
                        }));
                }));
            function E(e) {
                let t = e.currentTarget,
                    n =
                        t.getAttribute(`data-y-position`) +
                        `-` +
                        t.getAttribute(`data-x-position`);
                u.value[n] = !0;
            }
            function O(e) {
                if (!d.value) {
                    let t = e.currentTarget,
                        n =
                            t.getAttribute(`data-y-position`) +
                            `-` +
                            t.getAttribute(`data-x-position`);
                    u.value[n] = !1;
                }
            }
            function k() {
                Object.keys(u.value).forEach((e) => {
                    u.value[e] = !1;
                });
            }
            function ne() {
                d.value = !1;
            }
            function re(e) {
                l.value = e;
            }
            function ie(e) {
                let t = l.value.findIndex((t) => t.toastId === e.toastId);
                if (t !== -1) l.value[t] = e;
                else {
                    let t = l.value.findIndex((t) => t.position === e.position);
                    t === -1 ? l.value.unshift(e) : l.value.splice(t, 0, e);
                }
            }
            return (e, r) => (
                V(),
                B(
                    L,
                    null,
                    [
                        le(
                            ` Remove item from normal navigation flow, only available via hotkey `,
                        ),
                        N(
                            `section`,
                            {
                                'aria-label': `${e.containerAriaLabel} ${j(v)}`,
                                tabIndex: -1,
                                'aria-live': `polite`,
                                'aria-relevant': `additions text`,
                                'aria-atomic': `false`,
                            },
                            [
                                (V(!0),
                                B(
                                    L,
                                    null,
                                    he(
                                        s.value,
                                        (r, i) => (
                                            V(),
                                            B(
                                                `ol`,
                                                b(
                                                    {
                                                        key: r,
                                                        ref_for: !0,
                                                        ref_key: `listRef`,
                                                        ref: m,
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
                                                            '--width': `${j(bc)}px`,
                                                            '--gap': `${e.gap}px`,
                                                            ...e.style,
                                                            ...j(n).style,
                                                            ...j(Dc)(
                                                                e.offset,
                                                                e.mobileOffset,
                                                            ),
                                                        },
                                                    },
                                                    { ref_for: !0 },
                                                    e.$attrs,
                                                    {
                                                        onBlur: x,
                                                        onFocus: ee,
                                                        onMouseenter: E,
                                                        onMousemove: E,
                                                        onMouseleave: O,
                                                        onDragend: k,
                                                        onPointerdown: S,
                                                        onPointerup: ne,
                                                    },
                                                ),
                                                [
                                                    (V(!0),
                                                    B(
                                                        L,
                                                        null,
                                                        he(
                                                            a(r, i),
                                                            (n, i) => (
                                                                V(),
                                                                w(
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
                                                                        class: H(
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
                                                                        style: te(
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
                                                                            re,
                                                                        'onUpdate:height':
                                                                            ie,
                                                                        onRemoveToast:
                                                                            y,
                                                                    },
                                                                    {
                                                                        'close-icon':
                                                                            _(
                                                                                () => [
                                                                                    D(
                                                                                        e.$slots,
                                                                                        `close-icon`,
                                                                                        {},
                                                                                        () => [
                                                                                            F(
                                                                                                Fc,
                                                                                            ),
                                                                                        ],
                                                                                    ),
                                                                                ],
                                                                            ),
                                                                        'loading-icon':
                                                                            _(
                                                                                () => [
                                                                                    D(
                                                                                        e.$slots,
                                                                                        `loading-icon`,
                                                                                        {},
                                                                                        () => [
                                                                                            F(
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
                                                                            _(
                                                                                () => [
                                                                                    D(
                                                                                        e.$slots,
                                                                                        `success-icon`,
                                                                                        {},
                                                                                        () => [
                                                                                            F(
                                                                                                Hc,
                                                                                            ),
                                                                                        ],
                                                                                    ),
                                                                                ],
                                                                            ),
                                                                        'error-icon':
                                                                            _(
                                                                                () => [
                                                                                    D(
                                                                                        e.$slots,
                                                                                        `error-icon`,
                                                                                        {},
                                                                                        () => [
                                                                                            F(
                                                                                                el,
                                                                                            ),
                                                                                        ],
                                                                                    ),
                                                                                ],
                                                                            ),
                                                                        'warning-icon':
                                                                            _(
                                                                                () => [
                                                                                    D(
                                                                                        e.$slots,
                                                                                        `warning-icon`,
                                                                                        {},
                                                                                        () => [
                                                                                            F(
                                                                                                Xc,
                                                                                            ),
                                                                                        ],
                                                                                    ),
                                                                                ],
                                                                            ),
                                                                        'info-icon':
                                                                            _(
                                                                                () => [
                                                                                    D(
                                                                                        e.$slots,
                                                                                        `info-icon`,
                                                                                        {},
                                                                                        () => [
                                                                                            F(
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
    ol = A({
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
                V(),
                w(
                    j(al),
                    b(
                        {
                            class: j(z)(`toaster group`, t.class),
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
                        'success-icon': _(() => [
                            F(j(Ma), { class: `size-4` }),
                        ]),
                        'info-icon': _(() => [F(j(Pa), { class: `size-4` })]),
                        'warning-icon': _(() => [
                            F(j(Ua), { class: `size-4` }),
                        ]),
                        'error-icon': _(() => [F(j(za), { class: `size-4` })]),
                        'loading-icon': _(() => [
                            N(`div`, null, [
                                F(j(Ia), { class: `size-4 animate-spin` }),
                            ]),
                        ]),
                        'close-icon': _(() => [F(j(Ga), { class: `size-4` })]),
                        _: 1,
                    },
                    16,
                    [`class`],
                )
            );
        },
    }),
    sl = A({
        __name: `AppSidebarLayout`,
        props: { breadcrumbs: { default: () => [] } },
        setup(e) {
            return (t, n) => (
                V(),
                B(
                    L,
                    null,
                    [
                        (n[0] ||= N(
                            `a`,
                            {
                                href: `#main-content`,
                                class: `sr-only z-50 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus:not-sr-only focus:fixed focus:top-2 focus:left-2`,
                            },
                            ` Skip to main content `,
                            -1,
                        )),
                        F(Ho, null, {
                            default: _(() => [
                                F(Zs),
                                F(
                                    Vo,
                                    { class: `min-w-0 overflow-x-clip` },
                                    {
                                        default: _(() => [
                                            F(
                                                sc,
                                                { breadcrumbs: e.breadcrumbs },
                                                null,
                                                8,
                                                [`breadcrumbs`],
                                            ),
                                            F(lc),
                                            D(t.$slots, `default`),
                                        ]),
                                        _: 3,
                                    },
                                ),
                                F(j(ol)),
                            ]),
                            _: 3,
                        }),
                    ],
                    64,
                )
            );
        },
    }),
    cl = A({
        __name: `AppLayout`,
        props: { breadcrumbs: { default: () => [] } },
        setup(e) {
            return (t, n) => (
                V(),
                w(
                    sl,
                    { breadcrumbs: e.breadcrumbs },
                    { default: _(() => [D(t.$slots, `default`)]), _: 3 },
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
    gl = A({
        __name: `AuthSimpleLayout`,
        props: { title: {}, description: {} },
        setup(e) {
            return (t, n) => (
                V(),
                B(`div`, ll, [
                    N(`div`, ul, [
                        N(`div`, dl, [
                            F(
                                j(ue),
                                {
                                    href: j(q)(),
                                    class: `flex items-center justify-center gap-2 text-2xl font-bold`,
                                },
                                {
                                    default: _(() => [
                                        F(j(Na), {
                                            class: `size-7 text-brand`,
                                        }),
                                        (n[0] ||= N(
                                            `span`,
                                            null,
                                            [
                                                fe(`Pay`),
                                                N(
                                                    `span`,
                                                    {
                                                        class: `text-muted-foreground`,
                                                    },
                                                    `Hub`,
                                                ),
                                                fe(` Central`),
                                            ],
                                            -1,
                                        )),
                                    ]),
                                    _: 1,
                                },
                                8,
                                [`href`],
                            ),
                            N(`div`, fl, [
                                N(`div`, pl, [
                                    N(`h1`, ml, U(e.title), 1),
                                    N(`p`, hl, U(e.description), 1),
                                ]),
                                D(t.$slots, `default`),
                            ]),
                        ]),
                    ]),
                ])
            );
        },
    }),
    _l = A({
        __name: `AuthLayout`,
        props: { title: { default: `` }, description: { default: `` } },
        setup(e) {
            return (t, n) => (
                V(),
                w(
                    gl,
                    { title: e.title, description: e.description },
                    { default: _(() => [D(t.$slots, `default`)]), _: 3 },
                    8,
                    [`title`, `description`],
                )
            );
        },
    }),
    vl = { key: 0, class: `text-sm text-muted-foreground` },
    yl = A({
        __name: `Heading`,
        props: { title: {}, description: {}, variant: { default: `default` } },
        setup(e) {
            return (t, n) => (
                V(),
                B(
                    `header`,
                    {
                        class: H(
                            e.variant === `small` ? `` : `mb-8 space-y-0.5`,
                        ),
                    },
                    [
                        N(
                            `h2`,
                            {
                                class: H(
                                    e.variant === `small`
                                        ? `mb-0.5 text-base font-medium`
                                        : `text-xl font-semibold tracking-tight`,
                                ),
                            },
                            U(e.title),
                            3,
                        ),
                        e.description
                            ? (V(), B(`p`, vl, U(e.description), 1))
                            : le(``, !0),
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
    Dl = A({
        __name: `Layout`,
        setup(e) {
            let t = [
                    { title: `Profile`, href: J() },
                    { title: `Security`, href: $() },
                ],
                { isCurrentOrParentUrl: n } = qo();
            return (e, r) => (
                V(),
                B(`div`, xl, [
                    F(yl, {
                        title: `Settings`,
                        description: `Manage your profile and account settings`,
                    }),
                    N(`div`, Sl, [
                        N(`aside`, Cl, [
                            N(`nav`, wl, [
                                (V(),
                                B(
                                    L,
                                    null,
                                    he(t, (e) =>
                                        F(
                                            j(pe),
                                            {
                                                key: j(E)(e.href),
                                                variant: `ghost`,
                                                class: H([
                                                    `w-full justify-start`,
                                                    {
                                                        'bg-muted': j(n)(
                                                            e.href,
                                                        ),
                                                    },
                                                ]),
                                                'as-child': ``,
                                            },
                                            {
                                                default: _(() => [
                                                    F(
                                                        j(ue),
                                                        { href: e.href },
                                                        {
                                                            default: _(() => [
                                                                (V(),
                                                                w(k(e.icon), {
                                                                    class: `h-4 w-4`,
                                                                })),
                                                                fe(
                                                                    ` ` +
                                                                        U(
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
                        F(j(Ro), { class: `my-6 lg:hidden` }),
                        N(`div`, Tl, [
                            N(`section`, El, [D(e.$slots, `default`)]),
                        ]),
                    ]),
                ])
            );
        },
    });
function Ol() {
    c.on(`flash`, (e) => {
        let t = e.detail?.flash?.toast;
        t && mc[t.type](t.message);
    });
}
var kl = `PayHub Central`;
(ve({
    resolve: async (e, t) => {
        let n = Object.assign({
                './pages/Dashboard.vue': () =>
                    ot(
                        () => import(`./Dashboard-B02nNHOV.js`),
                        __vite__mapDeps([
                            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
                            15,
                        ]),
                    ),
                './pages/auth/ConfirmPassword.vue': () =>
                    ot(
                        () => import(`./ConfirmPassword-CrlTHOCC.js`),
                        __vite__mapDeps([16, 1, 17, 4, 7, 18, 10, 19, 20]),
                    ),
                './pages/auth/Login.vue': () =>
                    ot(
                        () => import(`./Login-BQL4tikK.js`),
                        __vite__mapDeps([
                            21, 1, 22, 3, 4, 6, 23, 10, 7, 17, 18, 19, 20,
                        ]),
                    ),
                './pages/auth/TwoFactorChallenge.vue': () =>
                    ot(
                        () => import(`./TwoFactorChallenge-D0K5A_WX.js`),
                        __vite__mapDeps([24, 1, 19, 25, 6, 7]),
                    ),
                './pages/auth/VerifyEmail.vue': () =>
                    ot(
                        () => import(`./VerifyEmail-DqtrWDCp.js`),
                        __vite__mapDeps([26, 1, 20]),
                    ),
                './pages/deployments/Create.vue': () =>
                    ot(
                        () => import(`./Create-Cuaba8_p.js`),
                        __vite__mapDeps([
                            27, 1, 22, 3, 4, 6, 23, 10, 7, 17, 18, 19, 15, 20,
                            28,
                        ]),
                    ),
                './pages/deployments/Edit.vue': () =>
                    ot(
                        () => import(`./Edit-B5IWUAIw.js`),
                        __vite__mapDeps([
                            29, 1, 17, 4, 7, 18, 10, 19, 15, 20, 28, 30, 31, 6,
                        ]),
                    ),
                './pages/deployments/Index.vue': () =>
                    ot(
                        () => import(`./Index-1BzhGERv.js`),
                        __vite__mapDeps([
                            32, 1, 9, 10, 11, 7, 33, 13, 14, 15, 20, 30, 31, 6,
                        ]),
                    ),
                './pages/deployments/Show.vue': () =>
                    ot(
                        () => import(`./Show-CZL51fwp.js`),
                        __vite__mapDeps([
                            34, 3, 1, 4, 6, 2, 5, 7, 8, 10, 11, 33, 13, 15, 20,
                        ]),
                    ),
                './pages/settings/Profile.vue': () =>
                    ot(
                        () => import(`./Profile-DvmWCZzG.js`),
                        __vite__mapDeps([35, 1, 17, 4, 7, 19]),
                    ),
                './pages/settings/Security.vue': () =>
                    ot(
                        () => import(`./Security-DUdyPqxr.js`),
                        __vite__mapDeps([
                            36, 1, 17, 4, 7, 10, 23, 18, 19, 12, 20, 25, 6, 31,
                        ]),
                    ),
                './pages/staff/Create.vue': () =>
                    ot(
                        () => import(`./Create-DdM91x7U.js`),
                        __vite__mapDeps([
                            37, 1, 17, 4, 7, 18, 10, 19, 15, 20, 38,
                        ]),
                    ),
                './pages/staff/Edit.vue': () =>
                    ot(
                        () => import(`./Edit-BCbp_noN.js`),
                        __vite__mapDeps([
                            39, 1, 17, 4, 7, 18, 10, 19, 15, 20, 38,
                        ]),
                    ),
                './pages/staff/Index.vue': () =>
                    ot(
                        () => import(`./Index-B5cc47AA.js`),
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
    Zt as A,
    dt as B,
    Ni as C,
    rn as D,
    cn as E,
    Wt as F,
    Ut as I,
    Ot as L,
    Jt as M,
    qt as N,
    nn as O,
    Kt as P,
    Dt as R,
    Ia as S,
    ln as T,
    ao as _,
    Q as a,
    Wa as b,
    Y as c,
    _s as d,
    ms as f,
    Xa as g,
    ro as h,
    qs as i,
    Xt as j,
    an as k,
    X as l,
    Ka as m,
    yl as n,
    Z as o,
    qa as p,
    Bs as r,
    Es as s,
    $ as t,
    J as u,
    oo as v,
    Ci as w,
    Ua as x,
    Ga as y,
    wt as z,
};
