import {
    $n as e,
    $t as t,
    Ct as n,
    Gn as r,
    Hn as i,
    Jt as a,
    On as o,
    Vt as s,
    Wn as c,
    Wt as l,
    Xn as u,
    dr as d,
    fr as f,
    ir as p,
    mr as m,
    nr as h,
    nt as g,
    or as _,
    pr as v,
    sr as y,
} from './wayfinder-BZPu7hPl.js';
function b(t, n) {
    return r() ? (e(t, n), !0) : !1;
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
function S(e) {
    let t = !1,
        n,
        r = c(!0);
    return (...i) => ((t ||= ((n = r.run(() => e(...i))), !0)), n);
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
    return e || n();
}
function j(e) {
    if (!C) return e;
    let t = 0,
        n,
        r,
        i = () => {
            (--t, r && t <= 0 && (r.stop(), (n = void 0), (r = void 0)));
        };
    return (...a) => (
        (t += 1),
        r || ((r = c(!0)), (n = r.run(() => e(...a)))),
        b(i),
        n
    );
}
function M(e) {
    return u(e)
        ? h(
              new Proxy(
                  {},
                  {
                      get(t, n, r) {
                          return m(Reflect.get(e.value, n, r));
                      },
                      set(t, n, r) {
                          return (
                              u(e.value[n]) && !u(r)
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
        : h(e);
}
function N(e) {
    return M(g(e));
}
function P(e, ...t) {
    let n = t.flat(),
        r = n[0];
    return N(() =>
        Object.fromEntries(
            typeof r == `function`
                ? Object.entries(d(e)).filter(([e, t]) => !r(f(t), e))
                : Object.entries(d(e)).filter((e) => !n.includes(e[0])),
        ),
    );
}
function F(e, t = 1e4) {
    return i((n, r) => {
        let i = f(e),
            a,
            o = () =>
                setTimeout(() => {
                    ((i = f(e)), r());
                }, f(t));
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
function I(e, t) {
    A(t) && l(e, t);
}
function L(e, t, n = {}) {
    let { immediate: r = !0, immediateCallback: i = !1 } = n,
        a = y(!1),
        o;
    function s() {
        o &&= (clearTimeout(o), void 0);
    }
    function c() {
        ((a.value = !1), s());
    }
    function l(...n) {
        (i && e(),
            s(),
            (a.value = !0),
            (o = setTimeout(() => {
                ((a.value = !1), (o = void 0), e(...n));
            }, f(t))));
    }
    return (
        r && ((a.value = !0), C && l()),
        b(c),
        { isPending: _(a), start: l, stop: c }
    );
}
function R(e, t, n) {
    return o(e, t, { ...n, immediate: !0 });
}
var z = C ? window : void 0;
(C && window.document, C && window.navigator, C && window.location);
function B(e) {
    let t = f(e);
    return t?.$el ?? t;
}
function V(...e) {
    let t = (e, t, n, r) => (
            e.addEventListener(t, n, r),
            () => e.removeEventListener(t, n, r)
        ),
        n = g(() => {
            let t = k(f(e[0])).filter((e) => e != null);
            return t.every((e) => typeof e != `string`) ? t : void 0;
        });
    return R(
        () => [
            n.value?.map((e) => B(e)) ?? [z].filter((e) => e != null),
            k(f(n.value ? e[1] : e[0])),
            k(m(n.value ? e[2] : e[1])),
            f(n.value ? e[3] : e[2]),
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
    let e = y(!1),
        t = n();
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
            (e.repeat && f(s)) || (c(e) && n(e));
        },
        o,
    );
}
function G(e) {
    return JSON.parse(JSON.stringify(e));
}
function K(e, t, r, i = {}) {
    var a, c;
    let {
            clone: l = !1,
            passive: u = !1,
            eventName: d,
            deep: f = !1,
            defaultValue: m,
            shouldEmit: h,
        } = i,
        _ = n(),
        v =
            r ||
            _?.emit ||
            (_ == null || (a = _.$emit) == null ? void 0 : a.bind(_)) ||
            (_ == null || (c = _.proxy) == null || (c = c.$emit) == null
                ? void 0
                : c.bind(_?.proxy)),
        y = d;
    ((t ||= `modelValue`), (y ||= `update:${t.toString()}`));
    let b = (e) => (l ? (typeof l == `function` ? l(e) : G(e)) : e),
        x = () => (w(e[t]) ? b(e[t]) : m),
        S = (e) => {
            h ? h(e) && v(y, e) : v(y, e);
        };
    if (u) {
        let n = p(x()),
            r = !1;
        return (
            o(
                () => e[t],
                (e) => {
                    r || ((r = !0), (n.value = b(e)), s(() => (r = !1)));
                },
            ),
            o(
                n,
                (n) => {
                    !r && (n !== e[t] || f) && S(n);
                },
                { deep: f },
            ),
            n
        );
    }
    return g({
        get() {
            return x();
        },
        set(e) {
            S(e);
        },
    });
}
function q() {
    let e = n(),
        r = p(),
        i = g(() => a());
    t(() => {
        i.value !== a() && v(r);
    });
    function a() {
        return r.value &&
            `$el` in r.value &&
            [`#text`, `#comment`].includes(r.value.$el.nodeName)
            ? r.value.$el.nextElementSibling
            : B(r);
    }
    let o = Object.assign({}, e.exposed),
        s = {};
    for (let t in e.props)
        Object.defineProperty(s, t, {
            enumerable: !0,
            configurable: !0,
            get: () => e.props[t],
        });
    if (Object.keys(o).length > 0)
        for (let e in o)
            Object.defineProperty(s, e, {
                enumerable: !0,
                configurable: !0,
                get: () => o[e],
            });
    (Object.defineProperty(s, '$el', {
        enumerable: !0,
        configurable: !0,
        get: () => e.vnode.el,
    }),
        (e.exposed = s));
    function c(t) {
        if (
            ((r.value = t),
            t &&
                (Object.defineProperty(s, '$el', {
                    enumerable: !0,
                    configurable: !0,
                    get: () => (t instanceof Element ? t : t.$el),
                }),
                !(t instanceof Element) && !Object.hasOwn(t, `$el`)))
        ) {
            let n = t.$.exposed,
                r = Object.assign({}, s);
            for (let e in n)
                Object.defineProperty(r, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: () => n[e],
                });
            e.exposed = r;
        }
    }
    return { forwardRef: c, currentRef: r, currentElement: i };
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
