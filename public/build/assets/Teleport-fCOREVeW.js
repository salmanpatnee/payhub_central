import { i as e, r as t } from './Presence-CKGYlb9k.js';
import {
    Nn as n,
    On as r,
    Qt as i,
    Vt as a,
    X as o,
    at as s,
    en as c,
    fr as l,
    ht as u,
    ir as d,
    it as f,
    kn as p,
    mr as m,
    nr as h,
    nt as g,
    r as _,
    sn as v,
    yr as y,
} from './wayfinder-BZPu7hPl.js';
import {
    a as b,
    d as x,
    f as S,
    h as C,
    i as ee,
    l as te,
    o as ne,
    r as re,
    t as w,
    u as ie,
} from './useForwardExpose-B78G7oXS.js';
function T(e, t, n) {
    let r = n.originalEvent.target,
        i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
    (t && r.addEventListener(e, t, { once: !0 }), r.dispatchEvent(i));
}
var E = new WeakMap();
function D(e, t) {
    let n = E.get(e);
    (n ||
        ((n = { owners: new Set(), original: e.body.style.pointerEvents }),
        E.set(e, n)),
        n.owners.add(t),
        (e.body.style.pointerEvents = `none`));
}
function O(e, t) {
    let n = E.get(e);
    n?.owners.delete(t) &&
        n.owners.size === 0 &&
        (E.delete(e), (e.body.style.pointerEvents = n.original));
}
function k(e) {
    if (typeof e != `object` || !e) return !1;
    let t = Object.getPrototypeOf(e);
    return (t !== null &&
        t !== Object.prototype &&
        Object.getPrototypeOf(t) !== null) ||
        Symbol.iterator in e
        ? !1
        : Symbol.toStringTag in e
          ? Object.prototype.toString.call(e) === `[object Module]`
          : !0;
}
function A(e, t, n = `.`, r) {
    if (!k(t)) return A(e, {}, n, r);
    let i = { ...t };
    for (let t of Object.keys(e)) {
        if (t === `__proto__` || t === `constructor`) continue;
        let a = e[t];
        a != null &&
            ((r && r(i, t, a, n)) ||
                (i[t] =
                    Array.isArray(a) && Array.isArray(i[t])
                        ? [...a, ...i[t]]
                        : k(a) && k(i[t])
                          ? A(a, i[t], (n ? `${n}.` : ``) + t.toString(), r)
                          : a));
    }
    return i;
}
function j(e) {
    return (...t) => t.reduce((t, n) => A(t, n, ``, e), {});
}
var M = j(),
    N = Symbol(`useBodyScrollLock`),
    ae = ie(() => {
        let e = d(new Map()),
            n = d(),
            i = g(() => {
                for (let t of e.value.values()) if (t) return !0;
                return !1;
            }),
            o = t({ scrollBody: d(!0) }),
            s = null,
            c = () => {
                ((document.body.style.paddingRight = ``),
                    (document.body.style.marginRight = ``),
                    O(document, N),
                    document.documentElement.style.removeProperty(
                        `--scrollbar-width`,
                    ),
                    (document.body.style.overflow = n.value ?? ``),
                    S && s?.(),
                    (n.value = void 0));
            };
        return (
            r(
                i,
                (e, t) => {
                    if (!x) return;
                    if (!e) {
                        t && c();
                        return;
                    }
                    n.value === void 0 &&
                        (n.value = document.body.style.overflow);
                    let r =
                            window.innerWidth -
                            document.documentElement.clientWidth,
                        l = { padding: r, margin: 0 },
                        u = o.scrollBody?.value
                            ? typeof o.scrollBody.value == `object`
                                ? M(
                                      {
                                          padding:
                                              o.scrollBody.value.padding === !0
                                                  ? r
                                                  : o.scrollBody.value.padding,
                                          margin:
                                              o.scrollBody.value.margin === !0
                                                  ? r
                                                  : o.scrollBody.value.margin,
                                      },
                                      l,
                                  )
                                : l
                            : { padding: 0, margin: 0 };
                    (r > 0 &&
                        ((document.body.style.paddingRight =
                            typeof u.padding == `number`
                                ? `${u.padding}px`
                                : String(u.padding)),
                        (document.body.style.marginRight =
                            typeof u.margin == `number`
                                ? `${u.margin}px`
                                : String(u.margin)),
                        document.documentElement.style.setProperty(
                            `--scrollbar-width`,
                            `${r}px`,
                        ),
                        (document.body.style.overflow = `hidden`)),
                        S &&
                            (s = b(document, `touchmove`, (e) => se(e), {
                                passive: !1,
                            })),
                        a(() => {
                            i.value &&
                                (D(document, N),
                                (document.body.style.overflow = `hidden`));
                        }));
                },
                { immediate: !0, flush: `sync` },
            ),
            e
        );
    });
function oe(e) {
    let t = Math.random().toString(36).substring(2, 7),
        n = ae();
    n.value.set(t, e ?? !1);
    let r = g({
        get: () => n.value.get(t) ?? !1,
        set: (e) => n.value.set(t, e),
    });
    return (
        C(() => {
            n.value.delete(t);
        }),
        r
    );
}
function P(e) {
    let t = window.getComputedStyle(e);
    if (
        t.overflowX === `scroll` ||
        t.overflowY === `scroll` ||
        (t.overflowX === `auto` && e.clientWidth < e.scrollWidth) ||
        (t.overflowY === `auto` && e.clientHeight < e.scrollHeight)
    )
        return !0;
    {
        let t = e.parentNode;
        return !(t instanceof Element) || t.tagName === `BODY` ? !1 : P(t);
    }
}
function se(e) {
    let t = e || window.event,
        n = t.target;
    return n instanceof Element && P(n)
        ? !1
        : t.touches.length > 1 ||
              (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
var ce = function (e) {
        return typeof document > `u`
            ? null
            : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
    },
    F = new WeakMap(),
    I = new WeakMap(),
    L = {},
    R = 0,
    z = function (e) {
        return e && (e.host || z(e.parentNode));
    },
    le = function (e, t) {
        return t
            .map(function (t) {
                if (e.contains(t)) return t;
                var n = z(t);
                return n && e.contains(n)
                    ? n
                    : (console.error(
                          `aria-hidden`,
                          t,
                          `in not contained inside`,
                          e,
                          `. Doing nothing`,
                      ),
                      null);
            })
            .filter(function (e) {
                return !!e;
            });
    },
    B = function (e, t, n, r) {
        var i = le(t, Array.isArray(e) ? e : [e]);
        L[n] || (L[n] = new WeakMap());
        var a = L[n],
            o = [],
            s = new Set(),
            c = new Set(i),
            l = function (e) {
                e && !s.has(e) && (s.add(e), l(e.parentNode));
            };
        i.forEach(l);
        var u = function (e) {
            e &&
                !c.has(e) &&
                Array.prototype.forEach.call(e.children, function (e) {
                    if (s.has(e)) u(e);
                    else
                        try {
                            var t = e.getAttribute(r),
                                i = t !== null && t !== `false`,
                                c = (F.get(e) || 0) + 1,
                                l = (a.get(e) || 0) + 1;
                            (F.set(e, c),
                                a.set(e, l),
                                o.push(e),
                                c === 1 && i && I.set(e, !0),
                                l === 1 && e.setAttribute(n, `true`),
                                i || e.setAttribute(r, `true`));
                        } catch (t) {
                            console.error(
                                `aria-hidden: cannot operate on `,
                                e,
                                t,
                            );
                        }
                });
        };
        return (
            u(t),
            s.clear(),
            R++,
            function () {
                (o.forEach(function (e) {
                    var t = F.get(e) - 1,
                        i = a.get(e) - 1;
                    (F.set(e, t),
                        a.set(e, i),
                        t || (I.has(e) || e.removeAttribute(r), I.delete(e)),
                        i || e.removeAttribute(n));
                }),
                    R--,
                    R ||
                        ((F = new WeakMap()),
                        (F = new WeakMap()),
                        (I = new WeakMap()),
                        (L = {})));
            }
        );
    },
    V = function (e, t, n) {
        n === void 0 && (n = `data-aria-hidden`);
        var r = Array.from(Array.isArray(e) ? e : [e]),
            i = t || ce(e);
        return i
            ? (r.push.apply(
                  r,
                  Array.from(i.querySelectorAll(`[aria-live], script`)),
              ),
              B(r, i, n, `aria-hidden`))
            : function () {
                  return null;
              };
    };
function H(e) {
    let t;
    (r(
        () => ee(e),
        (e) => {
            let n = !1;
            try {
                n = !!e?.closest(`[popover]:not(:popover-open)`);
            } catch {}
            e && !n ? (t = V(e)) : t && t();
        },
    ),
        i(() => {
            t && t();
        }));
}
var U = `dismissableLayer.pointerDownOutside`,
    ue = `dismissableLayer.focusOutside`;
function W(e) {
    if (typeof e != `object` || !e) return !1;
    let t = e.ownerDocument?.defaultView;
    return (
        (typeof Element < `u` && e instanceof Element) ||
        (!!t && e instanceof t.Element)
    );
}
function G(e, t) {
    if (!W(t)) return !1;
    if (e.contains(t)) return !0;
    let n = t.closest(`[data-dismissable-layer]`),
        r =
            e.dataset.dismissableLayer === ``
                ? e
                : e.querySelector(`[data-dismissable-layer]`),
        i = Array.from(
            e.ownerDocument.querySelectorAll(`[data-dismissable-layer]`),
        );
    return !!(n && (r === n || i.indexOf(r) < i.indexOf(n)));
}
function de(e, t, n = !0) {
    let r = d(!1),
        i = d(() => {});
    return (
        p((a) => {
            if (!x || !l(n)) return;
            let o = t?.value?.ownerDocument ?? globalThis.document,
                s = async (n) => {
                    let a = n.target;
                    if (t?.value && a) {
                        if (G(t.value, a))
                            (o.removeEventListener(`click`, i.value),
                                (r.value = !1));
                        else {
                            if (n.target && !r.value) {
                                let t = { originalEvent: n };
                                function r() {
                                    T(U, e, t);
                                }
                                n.pointerType === `touch`
                                    ? (o.removeEventListener(`click`, i.value),
                                      (i.value = r),
                                      o.addEventListener(`click`, i.value, {
                                          once: !0,
                                      }))
                                    : r();
                            } else o.removeEventListener(`click`, i.value);
                            r.value = !1;
                        }
                    }
                },
                c = window.setTimeout(() => {
                    o.addEventListener(`pointerdown`, s);
                }, 0);
            a(() => {
                (window.clearTimeout(c),
                    o.removeEventListener(`pointerdown`, s),
                    o.removeEventListener(`click`, i.value));
            });
        }),
        {
            onPointerDownCapture: () => {
                l(n) && (r.value = !0);
            },
        }
    );
}
function fe(e, t, n = !0) {
    let r = d(!1);
    return (
        p((i) => {
            if (!x || !l(n)) return;
            let o = t?.value?.ownerDocument ?? globalThis.document,
                s = async (n) => {
                    if (!t?.value) return;
                    (await a(), await a());
                    let i = n.target;
                    t.value &&
                        i &&
                        !G(t.value, i) &&
                        n.target &&
                        !r.value &&
                        T(ue, e, { originalEvent: n });
                };
            (o.addEventListener(`focusin`, s),
                i(() => o.removeEventListener(`focusin`, s)));
        }),
        {
            onFocusCapture: () => {
                l(n) && (r.value = !0);
            },
            onBlurCapture: () => {
                l(n) && (r.value = !1);
            },
        }
    );
}
var K = h({
        layersRoot: new Set(),
        layersWithOutsidePointerEventsDisabled: new Set(),
        branches: new Set(),
    }),
    pe = u({
        __name: `DismissableLayer`,
        props: {
            disableOutsidePointerEvents: {
                type: Boolean,
                required: !1,
                default: !1,
            },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
            present: { type: Boolean, required: !1, default: !0 },
        },
        emits: [
            `escapeKeyDown`,
            `pointerDownOutside`,
            `focusOutside`,
            `interactOutside`,
            `dismiss`,
        ],
        setup(e, { emit: t }) {
            let i = e,
                o = t,
                { forwardRef: s, currentElement: l } = w(),
                u = g(() => l.value?.ownerDocument ?? globalThis.document),
                d = g(() => K.layersRoot),
                h = g(() =>
                    l.value ? Array.from(d.value).indexOf(l.value) : -1,
                ),
                b = g(() => K.layersWithOutsidePointerEventsDisabled.size > 0),
                x = g(() => {
                    let e = Array.from(d.value),
                        [t] = [
                            ...K.layersWithOutsidePointerEventsDisabled,
                        ].slice(-1),
                        n = e.indexOf(t);
                    return h.value >= n;
                }),
                S = de(
                    async (e) => {
                        let t = [...K.branches].some((t) =>
                            t?.contains(e.target),
                        );
                        i.present &&
                            x.value &&
                            !t &&
                            (o(`pointerDownOutside`, e),
                            o(`interactOutside`, e),
                            await a(),
                            e.defaultPrevented || o(`dismiss`));
                    },
                    l,
                    () => i.present,
                ),
                C = fe((e) => {
                    let t = [...K.branches].some((t) => t?.contains(e.target));
                    i.present &&
                        !t &&
                        (o(`focusOutside`, e),
                        o(`interactOutside`, e),
                        e.defaultPrevented || o(`dismiss`));
                }, l);
            return (
                re(
                    `Escape`,
                    (e) => {
                        i.present &&
                            h.value === d.value.size - 1 &&
                            (o(`escapeKeyDown`, e),
                            e.defaultPrevented || o(`dismiss`));
                    },
                    { target: () => u.value?.defaultView ?? globalThis.window },
                ),
                r(
                    [l, () => i.disableOutsidePointerEvents, () => i.present],
                    ([e, t, n], r, i) => {
                        if (e && n && t) {
                            let t = e.ownerDocument;
                            (D(t, e),
                                K.layersWithOutsidePointerEventsDisabled.add(e),
                                i(() => {
                                    (K.layersWithOutsidePointerEventsDisabled.delete(
                                        e,
                                    ),
                                        O(t, e));
                                }));
                        }
                    },
                    { immediate: !0 },
                ),
                r(
                    [l, () => i.present],
                    ([e, t], n, r) => {
                        e &&
                            t &&
                            (d.value.add(e),
                            r(() => {
                                d.value.delete(e);
                            }));
                    },
                    { immediate: !0 },
                ),
                p((e) => {
                    e(() => {
                        l.value &&
                            (d.value.delete(l.value),
                            K.layersWithOutsidePointerEventsDisabled.delete(
                                l.value,
                            ));
                    });
                }),
                (t, r) => (
                    c(),
                    f(
                        m(_),
                        {
                            ref: m(s),
                            'as-child': e.asChild,
                            as: e.as,
                            'data-dismissable-layer': ``,
                            style: y({
                                pointerEvents: b.value
                                    ? x.value
                                        ? `auto`
                                        : `none`
                                    : void 0,
                            }),
                            onFocusCapture: m(C).onFocusCapture,
                            onBlurCapture: m(C).onBlurCapture,
                            onPointerdownCapture: m(S).onPointerDownCapture,
                        },
                        { default: n(() => [v(t.$slots, `default`)]), _: 3 },
                        8,
                        [
                            `as-child`,
                            `as`,
                            `style`,
                            `onFocusCapture`,
                            `onBlurCapture`,
                            `onPointerdownCapture`,
                        ],
                    )
                )
            );
        },
    }),
    me = te(() => d([]));
function he() {
    let e = me();
    return {
        add(t) {
            let n = e.value[0];
            (t !== n && n?.pause(),
                (e.value = q(e.value, t)),
                e.value.unshift(t));
        },
        remove(t) {
            ((e.value = q(e.value, t)), e.value[0]?.resume());
        },
    };
}
function q(e, t) {
    let n = [...e],
        r = n.indexOf(t);
    return (r !== -1 && n.splice(r, 1), n);
}
var J = `focusScope.autoFocusOnMount`,
    Y = `focusScope.autoFocusOnUnmount`,
    X = { bubbles: !1, cancelable: !0 };
function ge(e, t) {
    let n = t;
    for (; n;) {
        if (e.contains(n)) return !0;
        n = n.getRootNode().host ?? null;
    }
    return !1;
}
function _e(t, { select: n = !1 } = {}) {
    let r = e();
    for (let i of t) if (($(i, { select: n }), e() !== r)) return !0;
}
function ve(e) {
    let t = Z(e);
    return [Q(t, e), Q(t.reverse(), e)];
}
function Z(e) {
    let t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
                let t = e.tagName === `INPUT` && e.type === `hidden`;
                return e.disabled || e.hidden || t
                    ? NodeFilter.FILTER_SKIP
                    : e.tabIndex >= 0
                      ? NodeFilter.FILTER_ACCEPT
                      : NodeFilter.FILTER_SKIP;
            },
        });
    for (; n.nextNode();) t.push(n.currentNode);
    return t.sort((e, t) =>
        e.tabIndex === t.tabIndex
            ? 0
            : e.tabIndex === 0
              ? 1
              : t.tabIndex === 0
                ? -1
                : e.tabIndex - t.tabIndex,
    );
}
function Q(e, t) {
    for (let n of e) if (!ye(n, { upTo: t })) return n;
}
function ye(e, { upTo: t }) {
    if (getComputedStyle(e).visibility === `hidden`) return !0;
    for (; e;) {
        if (t !== void 0 && e === t) return !1;
        if (getComputedStyle(e).display === `none`) return !0;
        e = e.parentElement;
    }
    return !1;
}
function be(e) {
    return e instanceof HTMLInputElement && `select` in e;
}
function $(t, { select: n = !1 } = {}) {
    if (t && t.focus) {
        let r = e();
        (t.focus({ preventScroll: !0 }), t !== r && be(t) && n && t.select());
    }
}
var xe = u({
        __name: `FocusScope`,
        props: {
            loop: { type: Boolean, required: !1, default: !1 },
            trapped: { type: Boolean, required: !1, default: !1 },
            present: { type: Boolean, required: !1, default: !0 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
        },
        emits: [`mountAutoFocus`, `unmountAutoFocus`],
        setup(t, { emit: i }) {
            let o = t,
                s = i,
                { currentRef: l, currentElement: u } = w(),
                g = d(null),
                y = he(),
                b = h({
                    paused: !1,
                    pause() {
                        this.paused = !0;
                    },
                    resume() {
                        this.paused = !1;
                    },
                });
            p((t) => {
                if (!x) return;
                let n = u.value;
                if (!o.trapped) return;
                let r = n?.ownerDocument ?? document,
                    i = n ? n.getRootNode() : r;
                function a(e) {
                    if (b.paused || !n) return;
                    let t = e.target;
                    n.contains(t) ? (g.value = t) : $(g.value, { select: !0 });
                }
                function s(e) {
                    if (b.paused || !n) return;
                    let t = e.relatedTarget;
                    t !== null && (n.contains(t) || $(g.value, { select: !0 }));
                }
                function c(t) {
                    let r = g.value;
                    if (r === null || !t.some((e) => e.removedNodes.length > 0))
                        return;
                    let i = e();
                    (i && n.contains(i)) || n.contains(r) || $(n);
                }
                function l(e) {
                    if (b.paused || !n) return;
                    let t = e.composedPath()[0];
                    ge(n, t) || $(g.value, { select: !0 });
                }
                (i.addEventListener(`focusin`, a),
                    i.addEventListener(`focusout`, s),
                    i !== r && r.addEventListener(`focusin`, l));
                let d = new MutationObserver(c);
                (n && d.observe(n, { childList: !0, subtree: !0 }),
                    t(() => {
                        (i.removeEventListener(`focusin`, a),
                            i.removeEventListener(`focusout`, s),
                            i !== r && r.removeEventListener(`focusin`, l),
                            d.disconnect());
                    }));
            });
            function S(t, n) {
                let r = new CustomEvent(J, X),
                    i = (e) => s(`mountAutoFocus`, e);
                (t.addEventListener(J, i),
                    t.dispatchEvent(r),
                    t.removeEventListener(J, i),
                    r.defaultPrevented ||
                        (_e(Z(t), { select: !0 }), e() === n && $(t)));
            }
            (p(async (t) => {
                let n = u.value;
                if ((await a(), !n)) return;
                o.present !== !1 && y.add(b);
                let r = e();
                (!n.contains(r) && o.present !== !1 && S(n, r),
                    t(() => {
                        let e = new CustomEvent(Y, X),
                            t = (e) => {
                                s(`unmountAutoFocus`, e);
                            };
                        (n.addEventListener(Y, t),
                            n.dispatchEvent(e),
                            n.setAttribute(`data-focus-scope-unmounting`, ``),
                            setTimeout(() => {
                                (e.defaultPrevented ||
                                    $(r ?? document.body, { select: !0 }),
                                    n.removeEventListener(Y, t),
                                    y.remove(b),
                                    n.removeAttribute(
                                        `data-focus-scope-unmounting`,
                                    ));
                            }, 0));
                    }));
            }),
                r(
                    () => o.present,
                    async (t, n) => {
                        if (!x) return;
                        if (t === !1 && n === !0) {
                            y.remove(b);
                            return;
                        }
                        if (t !== !0 || n !== !1) return;
                        (y.add(b), await a());
                        let r = u.value;
                        if (!r) return;
                        let i = e();
                        r.contains(i) || S(r, i);
                    },
                ));
            function C(t) {
                if ((!o.loop && !o.trapped) || b.paused) return;
                let n =
                        t.key === `Tab` &&
                        !t.altKey &&
                        !t.ctrlKey &&
                        !t.metaKey,
                    r = e();
                if (n && r) {
                    let e = t.currentTarget,
                        [n, i] = ve(e);
                    n && i
                        ? !t.shiftKey && r === i
                            ? (t.preventDefault(),
                              o.loop && $(n, { select: !0 }))
                            : t.shiftKey &&
                              r === n &&
                              (t.preventDefault(),
                              o.loop && $(i, { select: !0 }))
                        : r === e && t.preventDefault();
                }
            }
            return (e, r) => (
                c(),
                f(
                    m(_),
                    {
                        ref_key: `currentRef`,
                        ref: l,
                        tabindex: `-1`,
                        'as-child': t.asChild,
                        as: t.as,
                        onKeydown: C,
                    },
                    { default: n(() => [v(e.$slots, `default`)]), _: 3 },
                    8,
                    [`as-child`, `as`],
                )
            );
        },
    }),
    Se = u({
        __name: `Teleport`,
        props: {
            to: { type: null, required: !1 },
            disabled: { type: Boolean, required: !1 },
            defer: { type: Boolean, required: !1 },
            forceMount: { type: Boolean, required: !1 },
        },
        setup(e) {
            let n = e,
                r = t({}),
                i = g(() => n.to ?? r.teleportTo?.value ?? `body`),
                a = ne();
            return (t, n) =>
                m(a) || e.forceMount
                    ? (c(),
                      f(
                          o,
                          {
                              key: 0,
                              to: i.value,
                              disabled: e.disabled,
                              defer: e.defer,
                          },
                          [v(t.$slots, `default`)],
                          8,
                          [`to`, `disabled`, `defer`],
                      ))
                    : s(`v-if`, !0);
        },
    });
export { oe as a, H as i, xe as n, M as o, pe as r, Se as t };
