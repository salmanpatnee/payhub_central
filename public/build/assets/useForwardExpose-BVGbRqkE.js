import {
    Gn as e,
    Gt as t,
    Ht as n,
    Kn as r,
    Un as i,
    Yt as a,
    Zn as o,
    ar as s,
    cr as c,
    en as l,
    er as u,
    fr as d,
    hr as f,
    kn as p,
    mr as m,
    pr as h,
    rr as g,
    rt as _,
    sr as v,
    wt as y,
} from './wayfinder-DOENF6-v.js';
function b(e, t) {
    return r() ? (u(e, t), !0) : !1;
}
function x() {
    let e = new Set(),
        t = (t) => {
            e.delete(t);
        };
    return {
        on: (n) => {
            e.add(n);
            let r = () => t(n);
            return (b(r), { off: r });
        },
        off: t,
        trigger: (...t) => Promise.all(Array.from(e).map((e) => e(...t))),
        clear: () => {
            e.clear();
        },
    };
}
function S(t) {
    let n = !1,
        r,
        i = e(!0);
    return (...e) => ((n ||= ((r = i.run(() => t(...e))), !0)), r);
}
var C = typeof window < `u` && typeof document < `u`;
typeof WorkerGlobalScope < `u` && globalThis instanceof WorkerGlobalScope;
var w = (e) => e !== void 0,
    T = Object.prototype.toString,
    E = (e) => T.call(e) === `[object Object]`,
    D = O();
function O() {
    var e, t;
    return (
        C &&
        !!((e = window) != null && (e = e.navigator) != null && e.userAgent) &&
        (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) ||
            (((t = window) == null || (t = t.navigator) == null
                ? void 0
                : t.maxTouchPoints) > 2 &&
                /iPad|Macintosh/.test(window?.navigator.userAgent)))
    );
}
function k(e) {
    return Array.isArray(e) ? e : [e];
}
function A(e) {
    return e || y();
}
function j(t) {
    if (!C) return t;
    let n = 0,
        r,
        i,
        a = () => {
            (--n, i && n <= 0 && (i.stop(), (r = void 0), (i = void 0)));
        };
    return (...o) => (
        (n += 1),
        i || ((i = e(!0)), (r = i.run(() => t(...o)))),
        b(a),
        r
    );
}
function M(e) {
    return o(e)
        ? g(
              new Proxy(
                  {},
                  {
                      get(t, n, r) {
                          return f(Reflect.get(e.value, n, r));
                      },
                      set(t, n, r) {
                          return (
                              o(e.value[n]) && !o(r)
                                  ? (e.value[n].value = r)
                                  : (e.value[n] = r),
                              !0
                          );
                      },
                      deleteProperty(t, n) {
                          return Reflect.deleteProperty(e.value, n);
                      },
                      has(t, n) {
                          return Reflect.has(e.value, n);
                      },
                      ownKeys() {
                          return Object.keys(e.value);
                      },
                      getOwnPropertyDescriptor() {
                          return { enumerable: !0, configurable: !0 };
                      },
                  },
              ),
          )
        : g(e);
}
function N(e) {
    return M(_(e));
}
function P(e, ...t) {
    let n = t.flat(),
        r = n[0];
    return N(() =>
        Object.fromEntries(
            typeof r == `function`
                ? Object.entries(d(e)).filter(([e, t]) => !r(h(t), e))
                : Object.entries(d(e)).filter((e) => !n.includes(e[0])),
        ),
    );
}
function F(e, t = 1e4) {
    return i((n, r) => {
        let i = h(e),
            a,
            o = () =>
                setTimeout(() => {
                    ((i = h(e)), r());
                }, h(t));
        return (
            b(() => {
                clearTimeout(a);
            }),
            {
                get() {
                    return (n(), i);
                },
                set(e) {
                    ((i = e), r(), clearTimeout(a), (a = o()));
                },
            }
        );
    });
}
function I(e, n) {
    A(n) && t(e, n);
}
function L(e, t, n = {}) {
    let { immediate: r = !0, immediateCallback: i = !1 } = n,
        a = c(!1),
        o;
    function s() {
        o &&= (clearTimeout(o), void 0);
    }
    function l() {
        ((a.value = !1), s());
    }
    function u(...n) {
        (i && e(),
            s(),
            (a.value = !0),
            (o = setTimeout(() => {
                ((a.value = !1), (o = void 0), e(...n));
            }, h(t))));
    }
    return (
        r && ((a.value = !0), C && u()),
        b(l),
        { isPending: v(a), start: u, stop: l }
    );
}
function R(e, t, n) {
    return p(e, t, { ...n, immediate: !0 });
}
var z = C ? window : void 0;
(C && window.document, C && window.navigator, C && window.location);
function B(e) {
    let t = h(e);
    return t?.$el ?? t;
}
function V(...e) {
    let t = (e, t, n, r) => (
            e.addEventListener(t, n, r),
            () => e.removeEventListener(t, n, r)
        ),
        n = _(() => {
            let t = k(h(e[0])).filter((e) => e != null);
            return t.every((e) => typeof e != `string`) ? t : void 0;
        });
    return R(
        () => [
            n.value?.map((e) => B(e)) ?? [z].filter((e) => e != null),
            k(h(n.value ? e[1] : e[0])),
            k(f(n.value ? e[2] : e[1])),
            h(n.value ? e[3] : e[2]),
        ],
        ([e, n, r, i], a, o) => {
            if (!e?.length || !n?.length || !r?.length) return;
            let s = E(i) ? { ...i } : i,
                c = e.flatMap((e) =>
                    n.flatMap((n) => r.map((r) => t(e, n, r, s))),
                );
            o(() => {
                c.forEach((e) => e());
            });
        },
        { flush: `post` },
    );
}
function H() {
    let e = c(!1),
        t = y();
    return (
        t &&
            a(() => {
                e.value = !0;
            }, t),
        e
    );
}
function U(e) {
    return typeof e == `function`
        ? e
        : typeof e == `string`
          ? (t) => t.key === e
          : Array.isArray(e)
            ? (t) => e.includes(t.key)
            : () => !0;
}
function W(...e) {
    let t,
        n,
        r = {};
    e.length === 3
        ? ((t = e[0]), (n = e[1]), (r = e[2]))
        : e.length === 2
          ? typeof e[1] == `object`
              ? ((t = !0), (n = e[0]), (r = e[1]))
              : ((t = e[0]), (n = e[1]))
          : ((t = !0), (n = e[0]));
    let {
            target: i = z,
            eventName: a = `keydown`,
            passive: o = !1,
            dedupe: s = !1,
        } = r,
        c = U(t);
    return V(
        i,
        a,
        (e) => {
            (e.repeat && h(s)) || (c(e) && n(e));
        },
        o,
    );
}
function G(e) {
    return JSON.parse(JSON.stringify(e));
}
function K(e, t, r, i = {}) {
    var a, o;
    let {
            clone: c = !1,
            passive: l = !1,
            eventName: u,
            deep: d = !1,
            defaultValue: f,
            shouldEmit: m,
        } = i,
        h = y(),
        g =
            r ||
            h?.emit ||
            (h == null || (a = h.$emit) == null ? void 0 : a.bind(h)) ||
            (h == null || (o = h.proxy) == null || (o = o.$emit) == null
                ? void 0
                : o.bind(h?.proxy)),
        v = u;
    ((t ||= `modelValue`), (v ||= `update:${t.toString()}`));
    let b = (e) => (c ? (typeof c == `function` ? c(e) : G(e)) : e),
        x = () => (w(e[t]) ? b(e[t]) : f),
        S = (e) => {
            m ? m(e) && g(v, e) : g(v, e);
        };
    if (l) {
        let r = s(x()),
            i = !1;
        return (
            p(
                () => e[t],
                (e) => {
                    i || ((i = !0), (r.value = b(e)), n(() => (i = !1)));
                },
            ),
            p(
                r,
                (n) => {
                    !i && (n !== e[t] || d) && S(n);
                },
                { deep: d },
            ),
            r
        );
    }
    return _({
        get() {
            return x();
        },
        set(e) {
            S(e);
        },
    });
}
function q() {
    let e = y(),
        t = s(),
        n = _(() => r());
    l(() => {
        n.value !== r() && m(t);
    });
    function r() {
        return t.value &&
            `$el` in t.value &&
            [`#text`, `#comment`].includes(t.value.$el.nodeName)
            ? t.value.$el.nextElementSibling
            : B(t);
    }
    let i = Object.assign({}, e.exposed),
        a = {};
    for (let t in e.props)
        Object.defineProperty(a, t, {
            enumerable: !0,
            configurable: !0,
            get: () => e.props[t],
        });
    if (Object.keys(i).length > 0)
        for (let e in i)
            Object.defineProperty(a, e, {
                enumerable: !0,
                configurable: !0,
                get: () => i[e],
            });
    (Object.defineProperty(a, '$el', {
        enumerable: !0,
        configurable: !0,
        get: () => e.vnode.el,
    }),
        (e.exposed = a));
    function o(n) {
        if (
            ((t.value = n),
            n &&
                (Object.defineProperty(a, '$el', {
                    enumerable: !0,
                    configurable: !0,
                    get: () => (n instanceof Element ? n : n.$el),
                }),
                !(n instanceof Element) && !Object.hasOwn(n, `$el`)))
        ) {
            let t = n.$.exposed,
                r = Object.assign({}, a);
            for (let e in t)
                Object.defineProperty(r, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: () => t[e],
                });
            e.exposed = r;
        }
    }
    return { forwardRef: o, currentRef: t, currentElement: n };
}
export {
    L as _,
    V as a,
    x as c,
    C as d,
    D as f,
    b as g,
    I as h,
    B as i,
    S as l,
    F as m,
    z as n,
    H as o,
    P as p,
    W as r,
    K as s,
    q as t,
    j as u,
};
