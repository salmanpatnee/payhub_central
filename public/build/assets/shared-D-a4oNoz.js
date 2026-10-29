import {
    $n as e,
    Ct as t,
    Gn as n,
    Hn as r,
    On as i,
    Ot as a,
    Pt as o,
    Xn as s,
    dr as c,
    fr as l,
    ir as u,
    mr as d,
    nr as f,
    nt as p,
    rr as m,
    sr as h,
    ur as g,
} from './wayfinder-BZPu7hPl.js';
function _(t) {
    return n() ? (e(t), !0) : !1;
}
var v = new WeakMap(),
    y = (...e) => {
        let n = e[0],
            r = t()?.proxy;
        if (r == null && !a())
            throw Error(`injectLocal must be called in setup`);
        return r && v.has(r) && n in v.get(r) ? v.get(r)[n] : o(...e);
    };
function b(e) {
    if (!s(e)) return f(e);
    let t = new Proxy(
        {},
        {
            get(t, n, r) {
                return d(Reflect.get(e.value, n, r));
            },
            set(t, n, r) {
                return (
                    s(e.value[n]) && !s(r)
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
    );
    return f(t);
}
function x(e) {
    return b(p(e));
}
function S(e, ...t) {
    let n = t.flat(),
        r = n[0];
    return x(() =>
        Object.fromEntries(
            typeof r == `function`
                ? Object.entries(c(e)).filter(([e, t]) => !r(l(t), e))
                : Object.entries(c(e)).filter((e) => !n.includes(e[0])),
        ),
    );
}
var C = typeof window < `u` && typeof document < `u`;
typeof WorkerGlobalScope < `u` && globalThis instanceof WorkerGlobalScope;
var w = (e) => e !== void 0,
    T = Object.prototype.toString,
    E = (e) => T.call(e) === `[object Object]`,
    D = () => {};
function O(e) {
    let t;
    function n() {
        return ((t ||= e()), t);
    }
    return (
        (n.reset = async () => {
            let e = t;
            ((t = void 0), e && (await e));
        }),
        n
    );
}
function k(e) {
    return e.endsWith(`rem`) ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function A(e) {
    return Array.isArray(e) ? e : [e];
}
function j(...e) {
    if (e.length !== 1) return g(...e);
    let t = e[0];
    return typeof t == `function` ? m(r(() => ({ get: t, set: D }))) : u(t);
}
function M(e, t, n = {}) {
    let { immediate: r = !0, immediateCallback: i = !1 } = n,
        a = h(!1),
        o = null;
    function s() {
        o &&= (clearTimeout(o), null);
    }
    function c() {
        ((a.value = !1), s());
    }
    function u(...n) {
        (i && e(),
            s(),
            (a.value = !0),
            (o = setTimeout(() => {
                ((a.value = !1), (o = null), e(...n));
            }, l(t))));
    }
    return (
        r && ((a.value = !0), C && u()),
        _(c),
        { isPending: m(a), start: u, stop: c }
    );
}
function N(e, t, n) {
    return i(e, t, { ...n, immediate: !0 });
}
export {
    E as a,
    A as c,
    M as d,
    N as f,
    w as i,
    j as l,
    y as n,
    k as o,
    C as r,
    S as s,
    O as t,
    _ as u,
};
