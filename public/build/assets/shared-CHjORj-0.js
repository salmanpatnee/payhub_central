import {
    Ft as e,
    Kn as t,
    Un as n,
    Zn as r,
    ar as i,
    cr as a,
    dr as o,
    er as s,
    fr as c,
    hr as l,
    ir as u,
    kn as d,
    kt as f,
    pr as p,
    rr as m,
    rt as h,
    wt as g,
} from './wayfinder-DOENF6-v.js';
function _(e) {
    return t() ? (s(e), !0) : !1;
}
var v = new WeakMap(),
    y = (...t) => {
        let n = t[0],
            r = g()?.proxy;
        if (r == null && !f())
            throw Error(`injectLocal must be called in setup`);
        return r && v.has(r) && n in v.get(r) ? v.get(r)[n] : e(...t);
    };
function b(e) {
    if (!r(e)) return m(e);
    let t = new Proxy(
        {},
        {
            get(t, n, r) {
                return l(Reflect.get(e.value, n, r));
            },
            set(t, n, i) {
                return (
                    r(e.value[n]) && !r(i)
                        ? (e.value[n].value = i)
                        : (e.value[n] = i),
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
    return m(t);
}
function x(e) {
    return b(h(e));
}
function S(e, ...t) {
    let n = t.flat(),
        r = n[0];
    return x(() =>
        Object.fromEntries(
            typeof r == `function`
                ? Object.entries(c(e)).filter(([e, t]) => !r(p(t), e))
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
    if (e.length !== 1) return o(...e);
    let t = e[0];
    return typeof t == `function` ? u(n(() => ({ get: t, set: D }))) : i(t);
}
function M(e, t, n = {}) {
    let { immediate: r = !0, immediateCallback: i = !1 } = n,
        o = a(!1),
        s = null;
    function c() {
        s &&= (clearTimeout(s), null);
    }
    function l() {
        ((o.value = !1), c());
    }
    function d(...n) {
        (i && e(),
            c(),
            (o.value = !0),
            (s = setTimeout(() => {
                ((o.value = !1), (s = null), e(...n));
            }, p(t))));
    }
    return (
        r && ((o.value = !0), C && d()),
        _(l),
        { isPending: u(o), start: d, stop: l }
    );
}
function N(e, t, n) {
    return d(e, t, { ...n, immediate: !0 });
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
