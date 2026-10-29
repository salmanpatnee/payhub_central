var e =
    (typeof globalThis == `object` && globalThis) ||
    (typeof window == `object` && window) ||
    (typeof self == `object` && self) ||
    (typeof global == `object` && global) ||
    (function () {
        return this;
    })();
function t(e, t, { signal: n, edges: r } = {}) {
    let i,
        a = null,
        o = r != null && r.includes(`leading`),
        s = r == null || r.includes(`trailing`),
        c = () => {
            a !== null && (e.apply(i, a), (i = void 0), (a = null));
        },
        l = () => {
            (s && c(), p());
        },
        u = null,
        d = () => {
            (u != null && clearTimeout(u),
                (u = setTimeout(() => {
                    ((u = null), l());
                }, t)));
        },
        f = () => {
            u !== null && (clearTimeout(u), (u = null));
        },
        p = () => {
            (f(), (i = void 0), (a = null));
        },
        m = () => {
            c();
        },
        h = function (...e) {
            if (n?.aborted) return;
            ((i = this), (a = e));
            let t = u == null;
            (d(), o && t && c());
        };
    return (
        (h.schedule = d),
        (h.cancel = p),
        (h.flush = m),
        n?.addEventListener(`abort`, p, { once: !0 }),
        h
    );
}
function n() {}
function r(e) {
    return e == null || (typeof e != `object` && typeof e != `function`);
}
function i(e) {
    return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function a(t) {
    return e.Buffer !== void 0 && e.Buffer.isBuffer(t);
}
function o(e) {
    return Object.getOwnPropertySymbols(e).filter((t) =>
        Object.prototype.propertyIsEnumerable.call(e, t),
    );
}
function s(e) {
    return e == null
        ? e === void 0
            ? `[object Undefined]`
            : `[object Null]`
        : Object.prototype.toString.call(e);
}
var c = `[object RegExp]`,
    l = `[object String]`,
    u = `[object Number]`,
    d = `[object Boolean]`,
    f = `[object Arguments]`,
    p = `[object Symbol]`,
    m = `[object Date]`,
    h = `[object Map]`,
    g = `[object Set]`,
    _ = `[object Array]`,
    v = `[object Function]`,
    y = `[object ArrayBuffer]`,
    b = `[object Object]`,
    x = `[object Error]`,
    S = `[object DataView]`,
    C = `[object Uint8Array]`,
    w = `[object Uint8ClampedArray]`,
    T = `[object Uint16Array]`,
    E = `[object Uint32Array]`,
    D = `[object BigUint64Array]`,
    ee = `[object Int8Array]`,
    te = `[object Int16Array]`,
    ne = `[object Int32Array]`,
    O = `[object BigInt64Array]`,
    re = `[object Float32Array]`,
    ie = `[object Float64Array]`;
function ae(e, t, n, o = new Map(), s = void 0) {
    let c = s?.(e, t, n, o);
    if (c !== void 0) return c;
    if (r(e)) return e;
    if (o.has(e)) return o.get(e);
    if (Array.isArray(e)) {
        let t = Array(e.length);
        o.set(e, t);
        for (let r = 0; r < e.length; r++) t[r] = ae(e[r], r, n, o, s);
        return (
            Object.hasOwn(e, `index`) && (t.index = e.index),
            Object.hasOwn(e, `input`) && (t.input = e.input),
            t
        );
    }
    if (e instanceof Date) return new Date(e.getTime());
    if (e instanceof RegExp) {
        let t = new RegExp(e.source, e.flags);
        return ((t.lastIndex = e.lastIndex), t);
    }
    if (e instanceof Map) {
        let t = new Map();
        o.set(e, t);
        for (let [r, i] of e) t.set(r, ae(i, r, n, o, s));
        return t;
    }
    if (e instanceof Set) {
        let t = new Set();
        o.set(e, t);
        for (let r of e) t.add(ae(r, void 0, n, o, s));
        return t;
    }
    if (a(e)) return e.subarray();
    if (i(e)) {
        let t = new (Object.getPrototypeOf(e).constructor)(e.length);
        o.set(e, t);
        for (let r = 0; r < e.length; r++) t[r] = ae(e[r], r, n, o, s);
        return t;
    }
    if (
        e instanceof ArrayBuffer ||
        (typeof SharedArrayBuffer < `u` && e instanceof SharedArrayBuffer)
    )
        return e.slice(0);
    if (e instanceof DataView) {
        let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
        return (o.set(e, t), oe(t, e, n, o, s), t);
    }
    if (typeof File < `u` && e instanceof File) {
        let t = new File([e], e.name, { type: e.type });
        return (o.set(e, t), oe(t, e, n, o, s), t);
    }
    if (typeof Blob < `u` && e instanceof Blob) {
        let t = new Blob([e], { type: e.type });
        return (o.set(e, t), oe(t, e, n, o, s), t);
    }
    if (e instanceof Error) {
        let t = structuredClone(e);
        return (
            o.set(e, t),
            (t.message = e.message),
            (t.name = e.name),
            (t.stack = e.stack),
            (t.cause = e.cause),
            (t.constructor = e.constructor),
            oe(t, e, n, o, s),
            t
        );
    }
    if (e instanceof Boolean) {
        let t = new Boolean(e.valueOf());
        return (o.set(e, t), oe(t, e, n, o, s), t);
    }
    if (e instanceof Number) {
        let t = new Number(e.valueOf());
        return (o.set(e, t), oe(t, e, n, o, s), t);
    }
    if (e instanceof String) {
        let t = new String(e.valueOf());
        return (o.set(e, t), oe(t, e, n, o, s), t);
    }
    if (typeof e == `object` && k(e)) {
        let t = Object.create(Object.getPrototypeOf(e));
        return (o.set(e, t), oe(t, e, n, o, s), t);
    }
    return e;
}
function oe(e, t, n = e, r, i) {
    let a = [...Object.keys(t), ...o(t)];
    for (let o = 0; o < a.length; o++) {
        let s = a[o],
            c = Object.getOwnPropertyDescriptor(e, s);
        (c == null || c.writable) && (e[s] = ae(t[s], s, n, r, i));
    }
}
function k(e) {
    switch (s(e)) {
        case f:
        case _:
        case y:
        case S:
        case d:
        case m:
        case re:
        case ie:
        case ee:
        case te:
        case ne:
        case h:
        case u:
        case b:
        case c:
        case g:
        case l:
        case p:
        case C:
        case w:
        case T:
        case E:
            return !0;
        default:
            return !1;
    }
}
function A(e) {
    return ae(e, void 0, e, new Map(), void 0);
}
function se(e) {
    if (!e || typeof e != `object`) return !1;
    let t = Object.getPrototypeOf(e);
    return t !== null &&
        t !== Object.prototype &&
        Object.getPrototypeOf(t) !== null
        ? !1
        : Object.prototype.toString.call(e) === `[object Object]`;
}
function ce(e) {
    return e === `__proto__`;
}
function le(e) {
    if (typeof e != `object` || !e) return !1;
    if (Object.getPrototypeOf(e) === null) return !0;
    if (Object.prototype.toString.call(e) !== `[object Object]`) {
        let t = e[Symbol.toStringTag];
        return t == null ||
            !Object.getOwnPropertyDescriptor(e, Symbol.toStringTag)?.writable
            ? !1
            : e.toString() === `[object ${t}]`;
    }
    let t = e;
    for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t;
}
function ue(e, t) {
    return e === t || (Number.isNaN(e) && Number.isNaN(t));
}
function j(e, t, n) {
    return de(e, t, void 0, void 0, void 0, void 0, n);
}
function de(e, t, n, r, i, a, o) {
    let s = o(e, t, n, r, i, a);
    if (s !== void 0) return s;
    if (typeof e == typeof t)
        switch (typeof e) {
            case `bigint`:
            case `string`:
            case `boolean`:
            case `symbol`:
            case `undefined`:
                return e === t;
            case `number`:
                return e === t || Object.is(e, t);
            case `function`:
                return e === t;
            case `object`:
                return fe(e, t, a, o);
        }
    return fe(e, t, a, o);
}
function fe(e, t, n, r) {
    if (Object.is(e, t)) return !0;
    let i = s(e),
        f = s(t);
    if (
        (i === `[object Arguments]` && (i = b),
        f === `[object Arguments]` && (f = b),
        i !== f)
    )
        return !1;
    switch (i) {
        case l:
            return e.toString() === t.toString();
        case u:
            return ue(e.valueOf(), t.valueOf());
        case d:
        case m:
        case p:
            return Object.is(e.valueOf(), t.valueOf());
        case c:
            return e.source === t.source && e.flags === t.flags;
        case v:
            return e === t;
    }
    n ??= new Map();
    let ae = n.get(e),
        oe = n.get(t);
    if (ae != null && oe != null) return ae === t;
    (n.set(e, t), n.set(t, e));
    try {
        switch (i) {
            case h:
                if (e.size !== t.size) return !1;
                for (let [i, a] of e.entries())
                    if (!t.has(i) || !de(a, t.get(i), i, e, t, n, r)) return !1;
                return !0;
            case g: {
                if (e.size !== t.size) return !1;
                let i = Array.from(e.values()),
                    a = Array.from(t.values());
                for (let o = 0; o < i.length; o++) {
                    let s = i[o],
                        c = a.findIndex((i) => de(s, i, void 0, e, t, n, r));
                    if (c === -1) return !1;
                    a.splice(c, 1);
                }
                return !0;
            }
            case _:
            case C:
            case w:
            case T:
            case E:
            case D:
            case ee:
            case te:
            case ne:
            case O:
            case re:
            case ie:
                if (a(e) !== a(t) || e.length !== t.length) return !1;
                for (let i = 0; i < e.length; i++)
                    if (!de(e[i], t[i], i, e, t, n, r)) return !1;
                return !0;
            case y:
                return (
                    e.byteLength === t.byteLength &&
                    fe(new Uint8Array(e), new Uint8Array(t), n, r)
                );
            case S:
                return e.byteLength !== t.byteLength ||
                    e.byteOffset !== t.byteOffset
                    ? !1
                    : fe(new Uint8Array(e), new Uint8Array(t), n, r);
            case x:
                return e.name === t.name && e.message === t.message;
            case b: {
                if (
                    !(
                        fe(e.constructor, t.constructor, n, r) ||
                        (se(e) && se(t))
                    )
                )
                    return !1;
                let i = [...Object.keys(e), ...o(e)],
                    a = [...Object.keys(t), ...o(t)];
                if (i.length !== a.length) return !1;
                for (let a = 0; a < i.length; a++) {
                    let o = i[a],
                        s = e[o];
                    if (!Object.hasOwn(t, o)) return !1;
                    let c = t[o];
                    if (!de(s, c, o, e, t, n, r)) return !1;
                }
                return !0;
            }
            default:
                return !1;
        }
    } finally {
        (n.delete(e), n.delete(t));
    }
}
function M(e, t) {
    return j(e, t, n);
}
function pe(e) {
    return Number.isSafeInteger(e) && e >= 0;
}
var me = {
    '&': `&amp;`,
    '<': `&lt;`,
    '>': `&gt;`,
    '"': `&quot;`,
    "'": `&#39;`,
};
function he(e) {
    return e.replace(/[&<>"']/g, (e) => me[e]);
}
function ge(e) {
    return e != null && typeof e != `function` && pe(e.length);
}
function _e(e) {
    return typeof e == `symbol` || e instanceof Symbol;
}
function ve(e) {
    if (typeof e == `string`) return e;
    if (Array.isArray(e)) {
        let t = ``;
        for (let n = 0; n < e.length; n++)
            (n > 0 && (t += `,`), (t += ve(e[n])));
        return t;
    }
    if (_e(e)) return e.toString();
    let t = e + ``;
    return t === `0` && Object.is(Number(e), -0) ? `-0` : t;
}
function ye(e) {
    return e == null ? `` : ve(e);
}
function be(e) {
    var t;
    return typeof e == `string` || typeof e == `symbol`
        ? e
        : Object.is(
                e == null || (t = e.valueOf) == null ? void 0 : t.call(e),
                -0,
            )
          ? `-0`
          : String(e);
}
function xe(e) {
    if (Array.isArray(e)) return e.map(be);
    if (typeof e == `symbol`) return [e];
    e = ye(e);
    let t = [],
        n = e.length;
    if (n === 0) return t;
    let r = 0,
        i = ``,
        a = ``,
        o = !1,
        s = !1,
        c = /^-?\d+(?:\.\d+)?$/;
    for (e.charCodeAt(0) === 46 && t.push(``); r < n;) {
        let l = e[r];
        if (a)
            l === `\\` && r + 1 < n
                ? (r++, (i += e[r]))
                : l === a
                  ? (a = ``)
                  : (i += l);
        else if (o) {
            if (l === `"` || l === `'`) ((a = l), (s = !0));
            else if (l === `]`) {
                if (((o = !1), !s && i.includes(`.`) && !c.test(i))) {
                    let e = i.split(`.`);
                    for (let n = 0; n < e.length; n++)
                        e[n] !== `` && t.push(e[n]);
                } else t.push(i);
                i = ``;
            } else i += l;
        } else if (l === `[`) ((o = !0), (s = !1), (i &&= (t.push(i), ``)));
        else if (l === `.`) {
            i &&= (t.push(i), ``);
            let n = e[r + 1];
            (n === void 0 || n === `.`) && t.push(``);
        } else i += l;
        r++;
    }
    return (i && t.push(i), t);
}
var Se = Object.prototype.hasOwnProperty;
function Ce(e, t) {
    return Se.call(e, t);
}
var we = /\.|(\[(?:[^[\]]*|(["'])(?:(?!\2)[^\\]|\\.)*?\2)\])/;
function Te(e) {
    switch (typeof e) {
        case `number`:
        case `symbol`:
            return !1;
        case `string`:
            return e === `` || e.startsWith(`.`) || e.endsWith(`.`)
                ? !1
                : we.test(e);
        default:
            return !1;
    }
}
function N(e, t, n) {
    if (e == null) return n;
    switch (typeof t) {
        case `string`: {
            if (ce(t)) return n;
            let r = e[t];
            return r === void 0 ? (Te(t) && !Ce(e, t) ? N(e, xe(t), n) : n) : r;
        }
        case `number`:
        case `symbol`: {
            typeof t == `number` && (t = be(t));
            let r = e[t];
            return r === void 0 ? n : r;
        }
        default: {
            if (Array.isArray(t)) return Ee(e, t, n);
            if (((t = Object.is(t?.valueOf(), -0) ? `-0` : String(t)), ce(t)))
                return n;
            let r = e[t];
            return r === void 0 ? n : r;
        }
    }
}
function Ee(e, t, n) {
    if (t.length === 0) return n;
    let r = e;
    for (let e = 0; e < t.length; e++) {
        if (r == null || ce(t[e])) return n;
        r = r[t[e]];
    }
    return r === void 0 ? n : r;
}
function De(e) {
    return e !== null && (typeof e == `object` || typeof e == `function`);
}
function Oe(e) {
    return a(e);
}
function ke(e) {
    return i(e);
}
function Ae(e, t) {
    return je(e, void 0, e, new Map(), t);
}
function je(e, t, n, i, a) {
    if (a != null) {
        let r = a(e, t, n, i);
        if (r !== void 0) return r;
    }
    if (r(e)) return e;
    if (i.has(e)) return i.get(e);
    if (Array.isArray(e)) {
        let t = Array(e.length);
        i.set(e, t);
        for (let r = 0; r < e.length; r++) t[r] = je(e[r], r, n, i, a);
        return (
            Ce(e, `index`) && (t.index = e.index),
            Ce(e, `input`) && (t.input = e.input),
            t
        );
    }
    if (e instanceof Date) return new Date(e.getTime());
    if (e instanceof RegExp) {
        let t = new RegExp(e.source, e.flags);
        return ((t.lastIndex = e.lastIndex), t);
    }
    if (e instanceof Map) {
        let t = new Map();
        return (
            i.set(e, t),
            e.forEach((e, r) => {
                t.set(r, je(e, r, n, i, a));
            }),
            t
        );
    }
    if (e instanceof Set) {
        let t = new Set();
        return (
            i.set(e, t),
            e.forEach((e) => {
                t.add(je(e, void 0, n, i, a));
            }),
            t
        );
    }
    if (Oe(e)) return e.subarray();
    if (ke(e)) {
        let t = new (Object.getPrototypeOf(e).constructor)(e.length);
        i.set(e, t);
        for (let r = 0; r < e.length; r++) t[r] = je(e[r], r, n, i, a);
        return t;
    }
    if (
        e instanceof ArrayBuffer ||
        (typeof SharedArrayBuffer < `u` && e instanceof SharedArrayBuffer)
    )
        return e.slice(0);
    if (e instanceof DataView) {
        let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
        return (i.set(e, t), Me(t, e, n, i, a), t);
    }
    if (typeof File < `u` && e instanceof File) {
        let t = new File([e], e.name, { type: e.type });
        return (i.set(e, t), Me(t, e, n, i, a), t);
    }
    if (typeof Blob < `u` && e instanceof Blob) {
        let t = new Blob([e], { type: e.type });
        return (i.set(e, t), Me(t, e, n, i, a), t);
    }
    let o = s(e);
    if (o === `[object Error]`) return e === n ? {} : e;
    switch (o) {
        case u:
        case l:
        case d: {
            let t = new e.constructor(e.valueOf());
            return (i.set(e, t), Me(t, e, n, i, a), t);
        }
        case f: {
            let t = {};
            return (
                i.set(e, t),
                Me(t, e, n, i, a),
                (t.length = e.length),
                (t[Symbol.iterator] = e[Symbol.iterator]),
                t
            );
        }
    }
    if (typeof e == `object` && Ne(o)) {
        let t =
            o === `[object Object]` && typeof e.constructor != `function`
                ? {}
                : Object.create(Object.getPrototypeOf(e));
        return (i.set(e, t), Me(t, e, n, i, a), t);
    }
    return e;
}
function Me(e, t, n, r, i) {
    let a = [...Object.keys(t), ...o(t)];
    for (let o = 0; o < a.length; o++) {
        let s = a[o],
            c = Object.getOwnPropertyDescriptor(e, s);
        (c == null || c.writable) && (e[s] = je(t[s], s, n, r, i));
    }
}
function Ne(e) {
    switch (e) {
        case f:
        case _:
        case y:
        case S:
        case d:
        case m:
        case re:
        case ie:
        case ee:
        case te:
        case ne:
        case h:
        case u:
        case b:
        case c:
        case g:
        case l:
        case p:
        case C:
        case w:
        case T:
        case E:
            return !0;
        default:
            return !1;
    }
}
function Pe(e) {
    return Ae(e);
}
function Fe(e) {
    return typeof e == `object` && !!e && s(e) === `[object Arguments]`;
}
var Ie = /^(?:0|[1-9]\d*)$/;
function Le(e, t = 2 ** 53 - 1) {
    switch (typeof e) {
        case `number`:
            return Number.isInteger(e) && e >= 0 && e < t;
        case `symbol`:
            return !1;
        case `string`:
            return Ie.test(e);
    }
}
function Re(e, t) {
    let n;
    if (
        ((n = Array.isArray(t)
            ? t
            : typeof t == `string` && Te(t) && !(t in Object(e))
              ? xe(t)
              : [t]),
        n.length === 0)
    )
        return !1;
    let r = e;
    for (let e = 0; e < n.length; e++) {
        let t = be(n[e]);
        if (
            (r == null || !Ce(r, t)) &&
            !((Array.isArray(r) || Fe(r)) && Le(t) && Number(t) < r.length)
        )
            return !1;
        r = r[t];
    }
    return !0;
}
function ze(e) {
    return typeof e == `object` && !!e;
}
function Be(e) {
    return ze(e) && ge(e);
}
var Ve = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    He = /^\w*$/;
function Ue(e, t) {
    return Array.isArray(e)
        ? !1
        : typeof e == `number` || typeof e == `boolean` || e == null || _e(e)
          ? !0
          : (typeof e == `string` && (He.test(e) || !Ve.test(e))) ||
            (t != null && Ce(t, e));
}
var We = (e, t, n) => {
    let r = e[t];
    (!(Ce(e, t) && ue(r, n)) || (n === void 0 && !(t in e))) && (e[t] = n);
};
function Ge(e) {
    return e === `__proto__` || e === `constructor` || e === `prototype`;
}
function Ke(e, t, n, r) {
    if (e == null && !De(e)) return e;
    let i;
    i = Ue(t, e) ? [t] : Array.isArray(t) ? t : xe(t);
    let a = n(N(e, i)),
        o = e;
    for (let t = 0; t < i.length && o != null; t++) {
        let n = be(i[t]);
        if (Ge(n)) return e;
        let s;
        if (t === i.length - 1) s = a;
        else {
            let a = o[n],
                c = r?.(a, n, e);
            s = c === void 0 ? (De(a) ? a : Le(i[t + 1]) ? [] : {}) : c;
        }
        (We(o, n, s), (o = o[n]));
    }
    return e;
}
function qe(e, t, n) {
    return Ke(
        e,
        t,
        () => n,
        () => void 0,
    );
}
function Je(e, n = 0, r = {}) {
    typeof r != `object` && (r = {});
    let { leading: i = !1, trailing: a = !0, maxWait: o } = r,
        s = [, ,];
    (i && (s[0] = `leading`), a && (s[1] = `trailing`));
    let c,
        l = null,
        u = t(
            function (...t) {
                ((c = e.apply(this, t)), (l = null));
            },
            n,
            { edges: s },
        ),
        d = function (...t) {
            return o != null &&
                (l === null && (l = Date.now()), Date.now() - l >= o)
                ? ((i || a) && (c = e.apply(this, t)),
                  (l = Date.now()),
                  u.cancel(),
                  u.schedule(),
                  c)
                : (u.apply(this, t), c);
        };
    return ((d.cancel = u.cancel), (d.flush = () => (u.flush(), c)), d);
}
function Ye(e) {
    if (r(e)) return e;
    if (
        Array.isArray(e) ||
        i(e) ||
        e instanceof ArrayBuffer ||
        (typeof SharedArrayBuffer < `u` && e instanceof SharedArrayBuffer)
    )
        return e.slice(0);
    let t = Object.getPrototypeOf(e);
    if (t == null) return Object.assign(Object.create(t), e);
    let n = t.constructor;
    if (e instanceof Date || e instanceof Map || e instanceof Set)
        return new n(e);
    if (e instanceof RegExp) {
        let t = new n(e);
        return ((t.lastIndex = e.lastIndex), t);
    }
    if (e instanceof DataView) return new n(e.buffer.slice(0));
    if (e instanceof Error) {
        let t;
        return (
            (t =
                typeof AggregateError < `u` && e instanceof AggregateError
                    ? new n(e.errors, e.message, { cause: e.cause })
                    : new n(e.message, { cause: e.cause })),
            (t.stack = e.stack),
            Object.assign(t, e),
            t
        );
    }
    if (typeof File < `u` && e instanceof File)
        return new n([e], e.name, {
            type: e.type,
            lastModified: e.lastModified,
        });
    if (typeof e == `object`) {
        let n = Object.create(t);
        return Object.assign(n, e);
    }
    return e;
}
function Xe(e, ...t) {
    let n = t.slice(0, -1),
        r = t[t.length - 1],
        i = e;
    for (let e = 0; e < n.length; e++) {
        let t = n[e];
        i = Ze(i, t, r, new Map());
    }
    return i;
}
function Ze(e, t, n, i) {
    if ((r(e) && (e = Object(e)), typeof t != `object` || !t)) return e;
    if (i.has(t)) return Ye(i.get(t));
    if ((i.set(t, e), Array.isArray(t))) {
        t = t.slice();
        for (let e = 0; e < t.length; e++) e in t || (t[e] = void 0);
    }
    let s = [...Object.keys(t), ...o(t)];
    for (let r = 0; r < s.length; r++) {
        let o = s[r];
        if (ce(o)) continue;
        let c = t[o],
            l = e[o];
        if (
            (Fe(c) && (c = Object.assign({}, c)),
            Fe(l) && (l = Object.assign({}, l)),
            a(c) && (c = Pe(c)),
            Array.isArray(c))
        ) {
            if (Array.isArray(l)) {
                let e = [],
                    t = Reflect.ownKeys(l);
                for (let n = 0; n < t.length; n++) {
                    let r = t[n];
                    e[r] = l[r];
                }
                l = e;
            } else if (Be(l)) {
                let e = [];
                for (let t = 0; t < l.length; t++) e[t] = l[t];
                l = e;
            } else l = [];
        }
        let u = n(l, c, o, e, t, i);
        u === void 0
            ? Array.isArray(c) ||
              (ze(l) && ze(c) && (le(l) || le(c) || ke(l) || ke(c)))
                ? (e[o] = Ze(l, c, n, i))
                : l == null && le(c)
                  ? (e[o] = Ze({}, c, n, i))
                  : l == null && ke(c)
                    ? (e[o] = Pe(c))
                    : (l === void 0 || c !== void 0) && (e[o] = c)
            : (e[o] = u);
    }
    return e;
}
function Qe(e, ...t) {
    return Xe(e, ...t, n);
}
function $e(e) {
    return he(ye(e));
}
var et = (e) =>
        (typeof File < `u` && e instanceof File) ||
        e instanceof Blob ||
        (typeof FileList < `u` && e instanceof FileList && e.length > 0),
    tt = (e) =>
        e instanceof FormData ||
        et(e) ||
        (typeof e == `object` && !!e && Object.values(e).some((e) => tt(e))),
    nt = class extends Error {
        response;
        constructor(e) {
            (super(`HTTP error ${e.status}`),
                (this.name = `HttpResponseError`),
                (this.response = e));
        }
    },
    rt = class extends Error {
        constructor(e = `Request was cancelled`) {
            (super(e), (this.name = `HttpCancelledError`));
        }
    },
    it = class extends Error {
        constructor(e = `Network error`) {
            (super(e), (this.name = `HttpNetworkError`));
        }
    };
function at(e) {
    let t = new URLSearchParams();
    return (
        Object.entries(e).forEach(([e, n]) => {
            n != null &&
                (Array.isArray(n)
                    ? n.forEach((n) => t.append(`${e}[]`, String(n)))
                    : typeof n == `object`
                      ? t.append(e, JSON.stringify(n))
                      : t.append(e, String(n)));
        }),
        t.toString()
    );
}
function ot(e, t, n) {
    if (
        (t &&
            !e.startsWith(`http://`) &&
            !e.startsWith(`https://`) &&
            (e = t.replace(/\/$/, ``) + `/` + e.replace(/^\//, ``)),
        n && Object.keys(n).length > 0)
    ) {
        let t = at(n);
        t && (e += (e.includes(`?`) ? `&` : `?`) + t);
    }
    return e;
}
function st() {
    return typeof window > `u`
        ? null
        : (window.axios?.defaults?.headers?.common?.[`X-Requested-With`] ??
              null);
}
function ct(e, t = new FormData(), n = null) {
    for (let r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
            lt(t, n ? `${n}[${r}]` : r, e[r]);
    return t;
}
function lt(e, t, n) {
    if (Array.isArray(n)) return n.forEach((n, r) => lt(e, `${t}[${r}]`, n));
    if (n instanceof Date) return e.append(t, n.toISOString());
    if (typeof File < `u` && n instanceof File) return e.append(t, n, n.name);
    if (n instanceof Blob) return e.append(t, n);
    if (typeof n == `boolean`) return e.append(t, n ? `1` : `0`);
    if (typeof n == `string`) return e.append(t, n);
    if (typeof n == `number`) return e.append(t, `${n}`);
    if (typeof n == `bigint`) return e.append(t, n.toString());
    if (n == null) return e.append(t, ``);
    ct(n, e, t);
}
function ut(e, t, n) {
    if (e != null)
        return e instanceof FormData
            ? e
            : typeof e == `object` && tt(e)
              ? ct(e)
              : typeof e == `object` ||
                  t[`Content-Type`]?.includes(`application/json`)
                ? n(e)
                : String(e);
}
function dt(e) {
    let t = {};
    return (
        e.forEach((e, n) => {
            t[n.toLowerCase()] = e;
        }),
        t
    );
}
function ft(e = {}) {
    let t = e.xsrfCookieName ?? `XSRF-TOKEN`,
        n = e.xsrfHeaderName ?? `X-XSRF-TOKEN`,
        r = e.serializer ?? JSON.stringify;
    function i() {
        if (typeof document > `u`) return null;
        let e = document.cookie.match(RegExp(`(^|;\\s*)` + t + `=([^;]*)`));
        return e ? decodeURIComponent(e[2]) : null;
    }
    return {
        setXsrfCookieName(e) {
            t = e;
        },
        setXsrfHeaderName(e) {
            n = e;
        },
        setSerializer(e) {
            r = e;
        },
        async request(e) {
            let t = ot(e.url, e.baseURL, e.params),
                a = e.method.toUpperCase(),
                o = {},
                s = st();
            (s && (o[`X-Requested-With`] = s),
                e.data === void 0 ||
                    [`GET`, `DELETE`].includes(a) ||
                    e.data instanceof FormData ||
                    tt(e.data) ||
                    (o[`Content-Type`] = `application/json`),
                e.headers &&
                    Object.entries(e.headers).forEach(([e, t]) => {
                        t !== void 0 && (o[e] = String(t));
                    }));
            let c = i();
            c && ![`GET`, `HEAD`, `OPTIONS`].includes(a) && (o[n] = c);
            let l = e.signal,
                u,
                d = e.timeout ?? 3e4;
            if (d > 0 && !l) {
                let e = new AbortController();
                ((l = e.signal), (u = setTimeout(() => e.abort(), d)));
            }
            let f = [`GET`, `DELETE`].includes(a) ? void 0 : ut(e.data, o, r);
            f instanceof FormData && delete o[`Content-Type`];
            try {
                let n = await fetch(t, {
                    method: a,
                    headers: o,
                    body: f,
                    signal: l,
                    credentials: e.credentials ?? `same-origin`,
                });
                u && clearTimeout(u);
                let r;
                r = n.headers.get(`content-type`)?.includes(`application/json`)
                    ? await n.json()
                    : await n.text();
                let i = { status: n.status, data: r, headers: dt(n.headers) };
                if (!n.ok) throw new nt(i);
                return i;
            } catch (e) {
                throw (
                    u && clearTimeout(u),
                    e instanceof nt
                        ? e
                        : e instanceof DOMException && e.name === `AbortError`
                          ? new rt()
                          : e instanceof TypeError
                            ? new it(e.message)
                            : e
                );
            }
        },
    };
}
var pt = ft(),
    mt = pt,
    ht = void 0,
    gt = void 0,
    _t = `same-origin`,
    vt = (e) => `${e.method}:${e.baseURL ?? ht ?? ``}${e.url}`,
    yt = (e) =>
        e.status === 204 && e.headers[`precognition-success`] === `true`,
    bt = {},
    xt = {
        get: (e, t = {}, n = {}) => Ct(St(`get`, e, t, n)),
        post: (e, t = {}, n = {}) => Ct(St(`post`, e, t, n)),
        patch: (e, t = {}, n = {}) => Ct(St(`patch`, e, t, n)),
        put: (e, t = {}, n = {}) => Ct(St(`put`, e, t, n)),
        delete: (e, t = {}, n = {}) => Ct(St(`delete`, e, t, n)),
        query: (e, t = {}, n = {}) => Ct(St(`query`, e, t, n)),
        useHttpClient(e) {
            return ((mt = e), xt);
        },
        withBaseURL(e) {
            return ((ht = e), xt);
        },
        withTimeout(e) {
            return ((gt = e), xt);
        },
        withCredentials(e) {
            return (
                (_t = typeof e == `string` ? e : e ? `include` : `omit`), xt
            );
        },
        fingerprintRequestsUsing(e) {
            return ((vt = e === null ? () => null : e), xt);
        },
        determineSuccessUsing(e) {
            return ((yt = e), xt);
        },
        withXsrfCookieName(e) {
            return (pt.setXsrfCookieName(e), xt);
        },
        withXsrfHeaderName(e) {
            return (pt.setXsrfHeaderName(e), xt);
        },
        withSerializer(e) {
            return (pt.setSerializer(e), xt);
        },
    },
    St = (e, t, n, r) => ({
        url: t,
        method: e,
        ...r,
        ...([`get`, `delete`].includes(e)
            ? { params: Qe({}, n, r?.params) }
            : { data: Qe({}, n, r?.data) }),
    }),
    Ct = (e = {}) => {
        let t = [wt, Et, Dt].reduce((e, t) => t(e), e);
        return (t.onBefore ?? (() => !0))() === !1
            ? Promise.resolve(null)
            : ((t.onStart ?? (() => null))(),
              mt
                  .request({
                      method: t.method,
                      url: t.url,
                      baseURL: t.baseURL ?? ht,
                      data: t.data,
                      params: t.params,
                      headers: t.headers,
                      signal: t.signal,
                      timeout: t.timeout,
                      credentials: _t,
                  })
                  .then(
                      async (e) => {
                          t.precognitive && Ot(e);
                          let n = e.status,
                              r = e;
                          return (
                              t.precognitive &&
                                  t.onPrecognitionSuccess &&
                                  yt(e) &&
                                  (r = await Promise.resolve(
                                      t.onPrecognitionSuccess(e) ?? r,
                                  )),
                              t.onSuccess &&
                                  Tt(n) &&
                                  (r = await Promise.resolve(
                                      t.onSuccess(r) ?? r,
                                  )),
                              (At(t, n) ?? ((e) => e))(r) ?? r
                          );
                      },
                      (e) => {
                          if (kt(e)) return Promise.reject(e);
                          let n = e;
                          return (
                              t.precognitive && Ot(n.response),
                              (
                                  At(t, n.response.status) ??
                                  ((e, t) => Promise.reject(t))
                              )(n.response, n)
                          );
                      },
                  )
                  .finally(t.onFinish ?? (() => null)));
    },
    wt = (e) => {
        let t = e.only ?? e.validate;
        return {
            ...e,
            timeout: e.timeout ?? gt,
            precognitive: e.precognitive !== !1,
            fingerprint: e.fingerprint === void 0 ? vt(e, mt) : e.fingerprint,
            headers: {
                ...e.headers,
                Accept: `application/json`,
                'Content-Type': jt(e),
                ...(e.precognitive === !1 ? {} : { Precognition: !0 }),
                ...(t
                    ? { 'Precognition-Validate-Only': Array.from(t).join() }
                    : {}),
            },
        };
    },
    Tt = (e) => e >= 200 && e < 300,
    Et = (e) => (
        typeof e.fingerprint == `string` &&
            (bt[e.fingerprint]?.abort(), delete bt[e.fingerprint]),
        e
    ),
    Dt = (e) =>
        typeof e.fingerprint != `string` || e.signal || !e.precognitive
            ? e
            : ((bt[e.fingerprint] = new AbortController()),
              { ...e, signal: bt[e.fingerprint].signal }),
    Ot = (e) => {
        if (e.headers?.precognition !== `true`)
            throw Error(
                `Did not receive a Precognition response. Ensure you have the Precognition middleware in place for the route.`,
            );
    },
    kt = (e) => !(e instanceof nt) || typeof e.response?.status != `number`,
    At = (e, t) =>
        ({
            401: e.onUnauthorized,
            403: e.onForbidden,
            404: e.onNotFound,
            409: e.onConflict,
            422: e.onValidationError,
            423: e.onLocked,
        })[t],
    jt = (e) =>
        e.headers?.[`Content-Type`] ??
        e.headers?.[`Content-type`] ??
        e.headers?.[`content-type`] ??
        (tt(e.data) ? `multipart/form-data` : `application/json`),
    Mt = (e, t) => {
        if (!e.includes(`*`)) return [e];
        let n = e.split(`.`),
            r = [``];
        for (let e of n)
            if (e === `*`) {
                let e = [];
                for (let n of r) {
                    let r = n ? N(t, n) : t;
                    if (Array.isArray(r))
                        for (let t = 0; t < r.length; t++)
                            e.push(n ? `${n}.${t}` : String(t));
                    else if (typeof r == `object` && r)
                        for (let t of Object.keys(r))
                            e.push(n ? `${n}.${t}` : t);
                }
                r = e;
            } else r = r.map((t) => (t ? `${t}.${e}` : e));
        return r;
    },
    Nt = (e, t) =>
        t.includes(`*`)
            ? RegExp(
                  `^` + t.replace(/\./g, `\\.`).replace(/\*/g, `[^.]+`) + `$`,
              ).test(e)
            : e === t,
    Pt = (e, t) =>
        Object.fromEntries(
            Object.entries(e).filter(([e]) => !t.some((t) => Nt(e, t))),
        ),
    Ft = (e, t = {}) => {
        let n = {
                errorsChanged: [],
                touchedChanged: [],
                validatingChanged: [],
                validatedChanged: [],
            },
            r = !1,
            i = !1,
            a = (e) => (e === i ? [] : ((i = e), n.validatingChanged)),
            o = [],
            s = (e) => {
                let t = [...new Set(e)];
                return o.length !== t.length || !t.every((e) => o.includes(e))
                    ? ((o = t), n.validatedChanged)
                    : [];
            },
            c = () => o.filter((e) => d[e] === void 0),
            l = [],
            u = (e) => {
                let t = [...new Set(e)];
                return l.length !== t.length || !t.every((e) => l.includes(e))
                    ? ((l = t), n.touchedChanged)
                    : [];
            },
            d = {},
            f = (e) => {
                let t = Lt(e);
                return M(d, t) ? [] : ((d = t), n.errorsChanged);
            },
            p = (e) => {
                let t = { ...d };
                return (delete t[Rt(e)], f(t));
            },
            m = () => Object.keys(d).length > 0,
            h = 1500,
            g = (e) => {
                ((h = e), S.cancel(), (S = x()));
            },
            _ = t,
            v = null,
            y = [],
            b = null,
            x = () =>
                Je(
                    (t) => {
                        e({
                            get: (e, n = {}, r = {}) =>
                                xt.get(e, T(n), C(r, t, n)),
                            post: (e, n = {}, r = {}) =>
                                xt.post(e, T(n), C(r, t, n)),
                            patch: (e, n = {}, r = {}) =>
                                xt.patch(e, T(n), C(r, t, n)),
                            put: (e, n = {}, r = {}) =>
                                xt.put(e, T(n), C(r, t, n)),
                            delete: (e, n = {}, r = {}) =>
                                xt.delete(e, T(n), C(r, t, n)),
                            query: (e, n = {}, r = {}) =>
                                xt.query(e, T(n), C(r, t, n)),
                        }).catch((e) =>
                            e instanceof rt ||
                            (e instanceof nt && e.response?.status === 422)
                                ? null
                                : Promise.reject(e),
                        );
                    },
                    h,
                    { leading: !0, trailing: !0 },
                ),
            S = x(),
            C = (e, t, n = {}) => {
                let r = { ...e, ...t },
                    i = Array.from(r.only ?? r.validate ?? l);
                return {
                    ...t,
                    ...Qe({}, e, t),
                    only: i,
                    timeout: r.timeout ?? 5e3,
                    onValidationError: (e, t) => (
                        [
                            ...s([...o, ...i]),
                            ...f(Qe(Pt({ ...d }, i), e.data.errors)),
                        ].forEach((e) => e()),
                        r.onValidationError
                            ? r.onValidationError(e, t)
                            : Promise.reject(t)
                    ),
                    onSuccess: (e) => (
                        s([...o, ...i]).forEach((e) => e()),
                        r.onSuccess ? r.onSuccess(e) : e
                    ),
                    onPrecognitionSuccess: (e) => (
                        [...s([...o, ...i]), ...f(Pt({ ...d }, i))].forEach(
                            (e) => e(),
                        ),
                        r.onPrecognitionSuccess ? r.onPrecognitionSuccess(e) : e
                    ),
                    onBefore: () => {
                        let e = l.some((e) => e.includes(`*`)),
                            t = e
                                ? [...new Set(l.flatMap((e) => Mt(e, n)))]
                                : l;
                        return (r.onBeforeValidation &&
                            r.onBeforeValidation(
                                { data: n, touched: t },
                                { data: _, touched: y },
                            ) === !1) ||
                            (r.onBefore || (() => !0))() === !1
                            ? !1
                            : (e && u(t).forEach((e) => e()),
                              (b = l),
                              (v = n),
                              !0);
                    },
                    onStart: () => {
                        (a(!0).forEach((e) => e()),
                            (r.onStart ?? (() => null))());
                    },
                    onFinish: () => {
                        (a(!1).forEach((e) => e()),
                            (y = b),
                            (_ = v),
                            (b = v = null),
                            (r.onFinish ?? (() => null))());
                    },
                };
            },
            w = (e, t, n) => {
                if (e === void 0) {
                    let e = Array.from(n?.only ?? n?.validate ?? []);
                    (u([...l, ...e]).forEach((e) => e()), S(n ?? {}));
                } else
                    et(t) && !r
                        ? console.warn(
                              `Precognition file validation is not active. Call the "validateFiles" function on your form to enable it.`,
                          )
                        : ((e = Rt(e)),
                          (e.includes(`*`) || N(_, e) !== t) &&
                              (u([e, ...l]).forEach((e) => e()), S(n ?? {})));
            },
            T = (e) => (r === !1 ? zt(e) : e),
            E = {
                touched: () => l,
                validate(e, t, n) {
                    return (
                        typeof e == `object` &&
                            !(`target` in e) &&
                            ((n = e), (e = t = void 0)),
                        w(e, t, n),
                        E
                    );
                },
                touch(e) {
                    let t = Array.isArray(e) ? e : [Rt(e)];
                    return (u([...l, ...t]).forEach((e) => e()), E);
                },
                validating: () => i,
                valid: c,
                errors: () => d,
                hasErrors: m,
                setErrors(e) {
                    return (f(e).forEach((e) => e()), E);
                },
                forgetError(e) {
                    return (p(e).forEach((e) => e()), E);
                },
                defaults(e) {
                    return ((t = e), (_ = e), E);
                },
                reset(...e) {
                    if (e.length === 0) u([]).forEach((e) => e());
                    else {
                        let n = [...l];
                        (e.forEach((e) => {
                            (n.includes(e) && n.splice(n.indexOf(e), 1),
                                qe(_, e, N(t, e)));
                        }),
                            u(n).forEach((e) => e()));
                    }
                    return E;
                },
                setTimeout(e) {
                    return (g(e), E);
                },
                on(e, t) {
                    return (n[e].push(t), E);
                },
                validateFiles() {
                    return ((r = !0), E);
                },
                withoutFileValidation() {
                    return ((r = !1), E);
                },
            };
        return E;
    },
    It = (e) =>
        Object.keys(e).reduce(
            (t, n) => ({ ...t, [n]: Array.isArray(e[n]) ? e[n][0] : e[n] }),
            {},
        ),
    Lt = (e) =>
        Object.keys(e).reduce(
            (t, n) => ({ ...t, [n]: typeof e[n] == `string` ? [e[n]] : e[n] }),
            {},
        ),
    Rt = (e) => (typeof e == `string` ? e : e.target.name),
    zt = (e) => {
        let t = { ...e };
        return (
            Object.keys(t).forEach((e) => {
                let n = t[e];
                n !== null &&
                    (et(n)
                        ? delete t[e]
                        : Array.isArray(n)
                          ? (t[e] = Object.values(zt({ ...n })))
                          : typeof n == `object` && (t[e] = zt(t[e])));
            }),
            t
        );
    },
    Bt = new (class {
        config = {};
        defaults;
        constructor(e) {
            this.defaults = e;
        }
        extend(e) {
            return (e && (this.defaults = { ...this.defaults, ...e }), this);
        }
        replace(e) {
            this.config = e;
        }
        get(e) {
            return Re(this.config, e) ? N(this.config, e) : N(this.defaults, e);
        }
        set(e, t) {
            typeof e == `string`
                ? qe(this.config, e, t)
                : Object.entries(e).forEach(([e, t]) => {
                      qe(this.config, e, t);
                  });
        }
    })({
        form: {
            recentlySuccessfulDuration: 2e3,
            forceIndicesArrayFormatInFormData: !0,
            withAllErrors: !1,
        },
        prefetch: { cacheFor: 3e4, hoverDelay: 75 },
    });
function Vt(e, t) {
    let n,
        r = function (...r) {
            (clearTimeout(n), (n = setTimeout(() => e.apply(this, r), t)));
        };
    return ((r.cancel = () => clearTimeout(n)), r);
}
function Ht(e, t) {
    return document.dispatchEvent(new CustomEvent(`inertia:${e}`, t));
}
var Ut = (e) => Ht(`before`, { cancelable: !0, detail: { visit: e } }),
    Wt = (e, { page: t, visitId: n } = {}) =>
        Ht(`error`, { detail: { errors: e, page: t, visitId: n } }),
    Gt = (e) => Ht(`networkError`, { cancelable: !0, detail: { error: e } }),
    Kt = (e) => Ht(`finish`, { detail: { visit: e } }),
    qt = (e) =>
        Ht(`httpException`, { cancelable: !0, detail: { response: e } }),
    Jt = (e) => Ht(`beforeUpdate`, { detail: { page: e } }),
    Yt = (e, { type: t, cached: n = !1, visitId: r }) =>
        Ht(`navigate`, { detail: { page: e, type: t, cached: n, visitId: r } }),
    Xt = (e, { replace: t, visitId: n }) =>
        Ht(`clientVisit`, { detail: { page: e, replace: t, visitId: n } }),
    Zt = (e) => Ht(`progress`, { detail: { progress: e } }),
    Qt = (e) => Ht(`start`, { detail: { visit: e } }),
    $t = (e, { visitId: t } = {}) =>
        Ht(`success`, { detail: { page: e, visitId: t } }),
    en = (e, t) =>
        Ht(`prefetched`, {
            detail: { fetchedAt: Date.now(), response: e, visit: t },
        }),
    tn = (e) => Ht(`prefetching`, { detail: { visit: e } }),
    nn = (e) => Ht(`flash`, { detail: { flash: e } }),
    rn = (e, t) =>
        Ht(`location`, {
            cancelable: !0,
            detail: { url: e, versionChange: t },
        }),
    an = `$bigint`,
    on = (e, t) => (typeof t == `bigint` ? { [an]: t.toString() } : t),
    sn = (e, t) => (typeof t == `bigint` ? t.toString() : t);
function cn(e) {
    let t = JSON.parse(e);
    return (t?.preserveBigIntegers === !0 && e.includes(`"${an}"`) && ln(t), t);
}
function ln(e) {
    if (Array.isArray(e)) for (let t = 0; t < e.length; t++) e[t] = un(e[t]);
    else for (let t of Object.keys(e)) e[t] = un(e[t]);
}
function un(e) {
    return typeof e != `object` || !e
        ? e
        : typeof e[an] == `string`
          ? BigInt(e[an])
          : (ln(e), e);
}
function dn(e) {
    return pn(e, () => ({ ...e, preserveBigIntegers: !0 }), on);
}
function fn(e) {
    return pn(e, () => e, sn);
}
function pn(e, t, n) {
    try {
        return JSON.stringify(e);
    } catch (e) {
        try {
            return JSON.stringify(t(), n);
        } catch {
            throw e;
        }
    }
}
function mn(e, t = new WeakSet()) {
    return typeof e == `bigint`
        ? !0
        : typeof e != `object` || !e || t.has(e)
          ? !1
          : (t.add(e),
            (Array.isArray(e) ? e : Object.values(e)).some((e) => mn(e, t)));
}
var hn = class {
        static locationVisitKey = `inertiaLocationVisit`;
        static set(e, t) {
            typeof window < `u` &&
                window.sessionStorage.setItem(e, JSON.stringify(t));
        }
        static get(e) {
            if (typeof window < `u`)
                return JSON.parse(window.sessionStorage.getItem(e) || `null`);
        }
        static merge(e, t) {
            let n = this.get(e);
            n === null ? this.set(e, t) : this.set(e, { ...n, ...t });
        }
        static remove(e) {
            typeof window < `u` && window.sessionStorage.removeItem(e);
        }
        static removeNested(e, t) {
            let n = this.get(e);
            n !== null && (delete n[t], this.set(e, n));
        }
        static exists(e) {
            try {
                return this.get(e) !== null;
            } catch {
                return !1;
            }
        }
        static clear() {
            typeof window < `u` && window.sessionStorage.clear();
        }
    },
    gn = 12,
    _n = async (e) => {
        if (typeof window > `u`) throw Error(`Unable to encrypt history`);
        hn.exists(vn.iv) && (hn.remove(vn.key), hn.remove(vn.iv));
        let t = await wn(await Tn());
        if (!t) throw Error(`Unable to encrypt history`);
        let n = window.crypto.getRandomValues(new Uint8Array(gn)),
            r = new Uint8Array(await bn(n, t, e)),
            i = new Uint8Array(n.length + r.length);
        return (i.set(n), i.set(r, n.length), i.buffer);
    },
    vn = { key: `historyKey`, iv: `historyIv` },
    yn = async (e) => {
        let t = await Tn();
        if (!t) throw Error(`Unable to decrypt history`);
        let n = new Uint8Array(e);
        return await xn(n.subarray(0, gn), t, n.subarray(gn));
    },
    bn = async (e, t, n) => {
        if (typeof window > `u`) throw Error(`Unable to encrypt history`);
        if (window.crypto.subtle === void 0)
            return (
                console.warn(
                    `Encryption is not supported in this environment. SSL is required.`,
                ),
                Promise.resolve(n)
            );
        let r = new TextEncoder(),
            i = dn(n),
            a = new Uint8Array(i.length * 3),
            o = r.encodeInto(i, a);
        return window.crypto.subtle.encrypt(
            { name: `AES-GCM`, iv: e },
            t,
            a.subarray(0, o.written),
        );
    },
    xn = async (e, t, n) => {
        if (window.crypto.subtle === void 0)
            return (
                console.warn(
                    `Decryption is not supported in this environment. SSL is required.`,
                ),
                Promise.resolve(n)
            );
        let r = await window.crypto.subtle.decrypt(
            { name: `AES-GCM`, iv: e },
            t,
            n,
        );
        return cn(new TextDecoder().decode(r));
    },
    Sn = async () =>
        window.crypto.subtle === void 0
            ? (console.warn(
                  `Encryption is not supported in this environment. SSL is required.`,
              ),
              Promise.resolve(null))
            : window.crypto.subtle.generateKey(
                  { name: `AES-GCM`, length: 256 },
                  !0,
                  [`encrypt`, `decrypt`],
              ),
    Cn = async (e) => {
        if (window.crypto.subtle === void 0)
            return (
                console.warn(
                    `Encryption is not supported in this environment. SSL is required.`,
                ),
                Promise.resolve()
            );
        let t = await window.crypto.subtle.exportKey(`raw`, e);
        hn.set(vn.key, Array.from(new Uint8Array(t)));
    },
    wn = async (e) => {
        if (e) return e;
        let t = await Sn();
        return t ? (await Cn(t), t) : null;
    },
    Tn = async () => {
        let e = hn.get(vn.key);
        return e
            ? await window.crypto.subtle.importKey(
                  `raw`,
                  new Uint8Array(e),
                  { name: `AES-GCM`, length: 256 },
                  !0,
                  [`encrypt`, `decrypt`],
              )
            : null;
    },
    En = class extends Error {
        code;
        url;
        constructor(e, t, n) {
            (super(n ? `${e} (${n})` : e),
                (this.name = `HttpError`),
                (this.code = t),
                (this.url = n));
        }
    },
    Dn = class extends En {
        response;
        constructor(e, t, n) {
            (super(e, `ERR_HTTP_RESPONSE`, n),
                (this.name = `HttpResponseError`),
                (this.response = t));
        }
    },
    On = class extends En {
        constructor(e = `Request was cancelled`, t) {
            (super(e, `ERR_CANCELLED`, t), (this.name = `HttpCancelledError`));
        }
    },
    kn = class extends En {
        cause;
        constructor(e, t, n) {
            (super(e, `ERR_NETWORK`, t),
                (this.name = `HttpNetworkError`),
                (this.cause = n));
        }
    },
    An = (e) => {
        let t = {};
        for (let n of Object.keys(e)) e[n] !== void 0 && (t[n] = e[n]);
        return t;
    },
    jn = (e, t, n) => {
        if (e === t) return !0;
        for (let r in e)
            if (!n.includes(r) && e[r] !== t[r] && !Mn(e[r], t[r])) return !1;
        for (let r in t) if (!n.includes(r) && !(r in e)) return !1;
        return !0;
    },
    Mn = (e, t) => {
        switch (typeof e) {
            case `object`:
                return jn(e, t, []);
            case `function`:
                return e.toString() === t.toString();
            default:
                return e === t;
        }
    },
    Nn = (e, t, n) => {
        let r = xe(t);
        if (r.length === 0) return e;
        let i = (e, t) => {
            if (t === r.length) return n;
            let a = r[t],
                o = Array.isArray(e)
                    ? [...e]
                    : e && typeof e == `object`
                      ? { ...e }
                      : /^(?:0|[1-9]\d*)$/.test(a)
                        ? []
                        : {};
            return ((o[a] = i(e?.[a], t + 1)), o);
        };
        return i(e, 0);
    },
    Pn = { ms: 1, s: 1e3, m: 6e4, h: 36e5, d: 864e5 },
    Fn = (e) => {
        if (typeof e == `number`) return e;
        for (let [t, n] of Object.entries(Pn))
            if (e.endsWith(t)) return parseFloat(e) * n;
        return parseInt(e);
    },
    In = new (class {
        cached = [];
        inFlightRequests = [];
        removalTimers = [];
        currentUseId = null;
        add(e, t, { cacheFor: n, cacheTags: r }) {
            if (this.findInFlight(e)) return Promise.resolve();
            let i = this.findCached(e);
            if (!e.fresh && i && i.staleTimestamp > Date.now())
                return Promise.resolve();
            let [a, o] = this.extractStaleValues(n),
                s = !1,
                c = new Promise((n, r) => {
                    t({
                        ...e,
                        onCancel: () => {
                            ((s = !0),
                                this.remove(e),
                                this.removeFromInFlight(e.id),
                                e.onCancel(),
                                r(new On()));
                        },
                        onError: (t) => {
                            (this.remove(e), e.onError(t), r(t));
                        },
                        onPrefetching(t) {
                            e.onPrefetching(t);
                        },
                        onPrefetched(t, n) {
                            e.onPrefetched(t, n);
                        },
                        onPrefetchResponse(e) {
                            n(e);
                        },
                        onPrefetchError: (t) => {
                            (this.removeFromInFlight(e.id), r(t));
                        },
                    });
                }).then((t) => {
                    if (!this.isInFlight(e.id)) return t;
                    this.remove(e);
                    let n = t.getPageResponse();
                    (P.mergeOncePropsIntoResponse(n),
                        this.cached.push({
                            params: { ...e },
                            staleTimestamp: Date.now() + a,
                            expiresAt: Date.now() + o,
                            response: c,
                            singleUse: o === 0,
                            timestamp: Date.now(),
                            inFlight: !1,
                            tags: Array.isArray(r) ? r : [r],
                        }));
                    let i = this.getShortestOncePropTtl(n);
                    return (
                        this.scheduleForRemoval(e, i ? Math.min(o, i) : o),
                        this.removeFromInFlight(e.id),
                        t.handlePrefetch(),
                        t
                    );
                });
            return (
                s ||
                    this.inFlightRequests.push({
                        params: { ...e },
                        response: c,
                        staleTimestamp: null,
                        inFlight: !0,
                    }),
                c.catch((t) => {
                    if ((this.removeFromInFlight(e.id), !(t instanceof On)))
                        throw t;
                })
            );
        }
        removeAll() {
            ((this.cached = []),
                (this.inFlightRequests = []),
                this.removalTimers.forEach((e) => {
                    clearTimeout(e.timer);
                }),
                (this.removalTimers = []));
        }
        removeByTags(e) {
            this.cached = this.cached.filter(
                (t) => !t.tags.some((t) => e.includes(t)),
            );
        }
        remove(e) {
            ((this.cached = this.cached.filter(
                (t) => !this.paramsAreEqual(t.params, e),
            )),
                this.clearTimer(e));
        }
        isInFlight(e) {
            return this.inFlightRequests.some((t) => t.params.id === e);
        }
        removeFromInFlight(e) {
            this.inFlightRequests = this.inFlightRequests.filter(
                (t) => t.params.id !== e,
            );
        }
        extractStaleValues(e) {
            let [t, n] = this.cacheForToStaleAndExpires(e);
            return [Fn(t), Fn(n)];
        }
        cacheForToStaleAndExpires(e) {
            if (!Array.isArray(e)) return [e, e];
            switch (e.length) {
                case 0:
                    return [0, 0];
                case 1:
                    return [e[0], e[0]];
                default:
                    return [e[0], e[1]];
            }
        }
        clearTimer(e) {
            let t = this.removalTimers.find((t) =>
                this.paramsAreEqual(t.params, e),
            );
            t &&
                (clearTimeout(t.timer),
                (this.removalTimers = this.removalTimers.filter(
                    (e) => e !== t,
                )));
        }
        scheduleForRemoval(e, t) {
            if (typeof window < `u` && (this.clearTimer(e), t > 0)) {
                let n = window.setTimeout(() => this.remove(e), t);
                this.removalTimers.push({ params: e, timer: n });
            }
        }
        get(e) {
            return this.findCached(e) || this.findInFlight(e);
        }
        use(e, t) {
            let n = `${t.url.pathname}-${Date.now()}-${Math.random().toString(36).substring(7)}`;
            this.currentUseId = n;
            let r = { ...t, cached: !0 };
            return e.response.then(
                (e) => {
                    if (this.currentUseId === n)
                        return (
                            e.mergeParams({ ...r, onPrefetched: () => {} }),
                            this.removeSingleUseItems(t),
                            e.handle()
                        );
                },
                (e) => {
                    if (!(e instanceof On)) throw e;
                    (r.onCancel(), (r.cancelled = !0), r.onFinish(r));
                },
            );
        }
        removeSingleUseItems(e) {
            this.cached = this.cached.filter(
                (t) => !this.paramsAreEqual(t.params, e) || !t.singleUse,
            );
        }
        findCached(e) {
            return (
                this.cached.find((t) => this.paramsAreEqual(t.params, e)) ||
                null
            );
        }
        findInFlight(e) {
            return (
                this.inFlightRequests.find((t) =>
                    this.paramsAreEqual(t.params, e),
                ) || null
            );
        }
        withoutPurposePrefetchHeader(e) {
            let t = A(e);
            return (
                t.headers.Purpose === `prefetch` && delete t.headers.Purpose, t
            );
        }
        paramsAreEqual(e, t) {
            return jn(
                this.withoutPurposePrefetchHeader(e),
                this.withoutPurposePrefetchHeader(t),
                `id.showProgress.replace.prefetch.preserveScroll.preserveState.onBefore.onBeforeUpdate.onStart.onProgress.onFinish.onCancel.onSuccess.onError.onHttpException.onNetworkError.onFlash.onPrefetched.onCancelToken.onPrefetching.async.viewTransition.optimistic.component.pageProps.cached`.split(
                    `.`,
                ),
            );
        }
        updateCachedOncePropsFromCurrentPage() {
            this.cached.forEach((e) => {
                e.response.then((t) => {
                    let n = t.getPageResponse();
                    P.mergeOncePropsIntoResponse(n, { force: !0 });
                    for (let [e, t] of Object.entries(n.deferredProps ?? {})) {
                        let r = t.filter((e) => N(n.props, e) === void 0);
                        r.length > 0
                            ? (n.deferredProps[e] = r)
                            : delete n.deferredProps[e];
                    }
                    let r = this.getShortestOncePropTtl(n);
                    if (r === null) return;
                    let i = e.expiresAt - Date.now(),
                        a = Math.min(i, r);
                    a > 0
                        ? this.scheduleForRemoval(e.params, a)
                        : this.remove(e.params);
                });
            });
        }
        getShortestOncePropTtl(e) {
            let t = Object.values(e.onceProps ?? {})
                .map((e) => e.expiresAt)
                .filter((e) => !!e);
            return t.length === 0 ? null : Math.min(...t) - Date.now();
        }
    })(),
    Ln = (e, t = 1) => {
        window.requestAnimationFrame(() => {
            t > 1 ? Ln(e, t - 1) : e();
        });
    },
    Rn = (e) => {
        if (typeof window > `u`) return null;
        let t = document.querySelector(
            `script[data-page="${e}"][type="application/json"]`,
        );
        return t?.textContent ? cn(t.textContent) : null;
    },
    zn = typeof window > `u`,
    Bn = !zn && /Firefox/i.test(window.navigator.userAgent),
    Vn = class {
        static save() {
            F.saveScrollPositions(this.getScrollRegions());
        }
        static getScrollRegions() {
            return Array.from(this.regions()).map((e) => ({
                top: e.scrollTop,
                left: e.scrollLeft,
            }));
        }
        static regions() {
            return document.querySelectorAll(`[scroll-region]`);
        }
        static scrollToTop() {
            if (
                Bn &&
                getComputedStyle(document.documentElement).scrollBehavior ===
                    `smooth`
            )
                return Ln(() => window.scrollTo(0, 0), 2);
            window.scrollTo(0, 0);
        }
        static reset() {
            ((zn || !window.location.hash) && this.scrollToTop(),
                this.regions().forEach((e) => {
                    typeof e.scrollTo == `function`
                        ? e.scrollTo(0, 0)
                        : ((e.scrollTop = 0), (e.scrollLeft = 0));
                }),
                this.save(),
                this.scrollToAnchor());
        }
        static scrollToAnchor() {
            let e = zn ? null : window.location.hash;
            e &&
                setTimeout(() => {
                    let t = document.getElementById(e.slice(1));
                    t ? t.scrollIntoView() : this.scrollToTop();
                });
        }
        static restore(e) {
            zn ||
                window.requestAnimationFrame(() => {
                    (this.restoreDocument(), this.restoreScrollRegions(e));
                });
        }
        static restoreScrollRegions(e) {
            zn ||
                this.regions().forEach((t, n) => {
                    let r = e[n];
                    r &&
                        (typeof t.scrollTo == `function`
                            ? t.scrollTo(r.left, r.top)
                            : ((t.scrollTop = r.top), (t.scrollLeft = r.left)));
                });
        }
        static restoreDocument() {
            let e = F.getDocumentScrollPosition();
            window.scrollTo(e.left, e.top);
        }
        static onScroll(e) {
            let t = e.target;
            typeof t.hasAttribute == `function` &&
                t.hasAttribute(`scroll-region`) &&
                this.save();
        }
        static onWindowScroll() {
            F.saveDocumentScrollPosition({
                top: window.scrollY,
                left: window.scrollX,
            });
        }
    },
    Hn = (e) =>
        (typeof File < `u` && e instanceof File) ||
        e instanceof Blob ||
        (typeof FileList < `u` && e instanceof FileList && e.length > 0);
function Un(e) {
    return (
        Hn(e) ||
        (e instanceof FormData && Array.from(e.values()).some((e) => Un(e))) ||
        (typeof e == `object` && !!e && Object.values(e).some((e) => Un(e)))
    );
}
var Wn = (e) => e instanceof FormData;
function Gn(e, t = new FormData(), n = null, r = `brackets`) {
    e ||= {};
    for (let i in e)
        Object.prototype.hasOwnProperty.call(e, i) &&
            qn(t, Kn(n, i, `indices`), e[i], r);
    return t;
}
function Kn(e, t, n) {
    return e ? (n === `brackets` ? `${e}[]` : `${e}[${t}]`) : t;
}
function qn(e, t, n, r) {
    if (Array.isArray(n))
        return Array.from(n.keys()).forEach((i) =>
            qn(e, Kn(t, i.toString(), r), n[i], r),
        );
    if (n instanceof Date) return e.append(t, n.toISOString());
    if (n instanceof File) return e.append(t, n, n.name);
    if (n instanceof Blob) return e.append(t, n);
    if (typeof n == `boolean`) return e.append(t, n ? `1` : `0`);
    if (typeof n == `string`) return e.append(t, n);
    if (typeof n == `number`) return e.append(t, `${n}`);
    if (typeof n == `bigint`) return e.append(t, n.toString());
    if (n == null) return e.append(t, ``);
    Gn(n, e, t, r);
}
function Jn(e) {
    return /\[\d+\]/.test(decodeURIComponent(e.search));
}
function Yn(e) {
    if (!e || e === `?`) return {};
    let t = {};
    return (
        e
            .replace(/^\?/, ``)
            .split(`&`)
            .filter(Boolean)
            .forEach((e) => {
                let [n, r] = Zn(e);
                $n(t, Qn(n), Qn(r));
            }),
        t
    );
}
function Xn(e, t) {
    let n = [];
    return (tr(e, ``, n, t), n.length ? `?` + n.join(`&`) : ``);
}
function Zn(e) {
    let t = e.indexOf(`=`);
    return t === -1 ? [e, ``] : [e.substring(0, t), e.substring(t + 1)];
}
function Qn(e) {
    return decodeURIComponent(e.replace(/\+/g, ` `));
}
function $n(e, t, n) {
    let r = er(t);
    if (r.some((e) => e === `__proto__`)) return;
    let i = e;
    for (; r.length > 1;) {
        let e = r.shift(),
            t = r[0] === ``;
        ((typeof i[e] != `object` || i[e] === null) && (i[e] = t ? [] : {}),
            (i = i[e]));
    }
    let a = r.shift();
    a === `` && Array.isArray(i) ? i.push(n) : (i[a] = n);
}
function er(e) {
    let t = [],
        n = e.split(`[`)[0];
    n && t.push(n);
    let r,
        i = /\[([^\]]*)\]/g;
    for (; (r = i.exec(e)) !== null;) t.push(r[1]);
    return t;
}
function tr(e, t, n, r) {
    e !== void 0 &&
        (e === null
            ? n.push(`${t}=`)
            : Array.isArray(e)
              ? e.forEach((e, i) => {
                    tr(e, r === `indices` ? `${t}[${i}]` : `${t}[]`, n, r);
                })
              : typeof e == `object`
                ? Object.keys(e).forEach((i) => {
                      tr(e[i], t ? `${t}[${i}]` : i, n, r);
                  })
                : n.push(`${t}=${encodeURIComponent(String(e))}`));
}
function nr(e) {
    return new URL(
        e.toString(),
        typeof window > `u` ? void 0 : window.location.toString(),
    );
}
var rr = (e, t, n, r, i) => {
    let a = typeof e == `string` ? nr(e) : e;
    if (
        ((Un(t) || r) &&
            !Wn(t) &&
            (Bt.get(`form.forceIndicesArrayFormatInFormData`) &&
                (i = `indices`),
            (t = Gn(t, new FormData(), null, i))),
        Wn(t))
    )
        return [a, t];
    let [o, s] = ir(n, a, t, i);
    return [nr(o), s];
};
function ir(e, t, n, r = `brackets`) {
    let i = e === `get` && !Wn(n) && Object.keys(n).length > 0,
        a = dr(t.toString()),
        o = a || t.toString().startsWith(`/`) || t.toString() === ``,
        s =
            !o &&
            !t.toString().startsWith(`#`) &&
            !t.toString().startsWith(`?`),
        c = /^[.]{1,2}([/]|$)/.test(t.toString()),
        l = t.toString().includes(`?`) || i,
        u = t.toString().includes(`#`),
        d = new URL(
            t.toString(),
            typeof window > `u`
                ? `http://localhost`
                : window.location.toString(),
        );
    if (i) {
        let e = Jn(d) ? `indices` : r;
        d.search = Xn({ ...Yn(d.search), ...n }, e);
    }
    return [
        [
            a ? `${d.protocol}//${d.host}` : ``,
            o ? d.pathname : ``,
            s ? d.pathname.substring(+!c) : ``,
            l ? d.search : ``,
            u ? d.hash : ``,
        ].join(``),
        i ? {} : n,
    ];
}
function ar(e) {
    return ((e = new URL(e.href)), (e.hash = ``), e);
}
var or = (e, t) => {
        e.hash && !t.hash && ar(e).href === t.href && (t.hash = e.hash);
    },
    sr = (e, t) => ar(e).href === ar(t).href,
    cr = (e, t) => e.origin === t.origin && e.pathname === t.pathname;
function lr(e) {
    return (
        typeof e == `object` &&
        !!e &&
        e !== void 0 &&
        `url` in e &&
        `method` in e
    );
}
function ur(e) {
    return e.component
        ? typeof e.component == `string`
            ? e.component
            : (console.error(
                  `The "component" property on the URL method pair received multiple components (${Object.keys(e.component).join(`, `)}), but only a single component string is supported for instant visits. Use the withComponent() method to specify which component to use.`,
              ),
              null)
        : null;
}
function dr(e) {
    return /^([a-z][a-z0-9+.-]*:)?\/\/[^/]/i.test(e);
}
var P = new (class {
        page;
        swapComponent;
        resolveComponent;
        onFlashCallback;
        componentId = {};
        listeners = [];
        isFirstPageLoad = !0;
        cleared = !1;
        pendingDeferredProps = null;
        historyQuotaExceeded = !1;
        optimisticBaseline = {};
        pendingOptimistics = [];
        optimisticCounter = 0;
        confirmedOptimisticId = 0;
        init({
            initialPage: e,
            swapComponent: t,
            resolveComponent: n,
            onFlash: r,
        }) {
            return (
                (this.page = {
                    ...e,
                    flash: e.flash ?? {},
                    rescuedProps: e.rescuedProps ?? [],
                }),
                (this.swapComponent = t),
                (this.resolveComponent = n),
                (this.onFlashCallback = r),
                _r.on(`historyQuotaExceeded`, () => {
                    this.historyQuotaExceeded = !0;
                }),
                this
            );
        }
        set(
            e,
            {
                replace: t = !1,
                preserveScroll: n = !1,
                preserveState: r = !1,
                viewTransition: i = !1,
                cached: a = !1,
                initialRender: o = !1,
                visitId: s,
            } = {},
        ) {
            (Object.keys(e.deferredProps || {}).length &&
                ((this.pendingDeferredProps = {
                    deferredProps: e.deferredProps,
                    component: e.component,
                    url: e.url,
                }),
                e.initialDeferredProps === void 0 &&
                    (e.initialDeferredProps = e.deferredProps)),
                (this.componentId = {}));
            let c = this.componentId;
            return (
                e.clearHistory && (F.clear(), In.removeAll()),
                this.resolve(e.component, e).then((l) => {
                    if (c !== this.componentId) return;
                    e.rememberedState ??= {};
                    let u = typeof window > `u`,
                        d = u ? new URL(e.url) : window.location,
                        f = !u && n ? Vn.getScrollRegions() : [];
                    t ||= sr(nr(e.url), d);
                    let p = { ...e, flash: {} };
                    return (
                        F.clearInitialState(F.rememberedState),
                        new Promise((e) =>
                            t ? F.replaceState(p, e) : F.pushState(p, e),
                        ).then(() => {
                            let c = !this.isTheSame(e);
                            if (
                                (!c &&
                                    Object.keys(e.props.errors || {}).length >
                                        0 &&
                                    (i = !1),
                                (this.page = e),
                                (this.cleared = !1),
                                this.hasOnceProps() &&
                                    In.updateCachedOncePropsFromCurrentPage(),
                                c && this.fireEventsFor(`newComponent`),
                                this.isFirstPageLoad &&
                                    this.fireEventsFor(`firstLoad`),
                                (this.isFirstPageLoad = !1),
                                this.historyQuotaExceeded)
                            )
                                this.historyQuotaExceeded = !1;
                            else
                                return this.swap({
                                    component: l,
                                    page: e,
                                    preserveState: r,
                                    viewTransition: i,
                                    initialRender: o,
                                }).then(() => {
                                    (n
                                        ? window.requestAnimationFrame(() =>
                                              Vn.restoreScrollRegions(f),
                                          )
                                        : Vn.reset(),
                                        this.pendingDeferredProps &&
                                            this.pendingDeferredProps
                                                .component === e.component &&
                                            this.pendingDeferredProps.url ===
                                                e.url &&
                                            _r.fireInternalEvent(
                                                `loadDeferredProps`,
                                                this.pendingDeferredProps
                                                    .deferredProps,
                                            ),
                                        (this.pendingDeferredProps = null),
                                        t ||
                                            Yt(e, {
                                                type: `visit`,
                                                cached: a,
                                                visitId: s,
                                            }));
                                });
                        })
                    );
                })
            );
        }
        setQuietly(e, { preserveState: t = !1 } = {}) {
            return (
                (this.componentId = {}),
                this.resolve(e.component, e).then(
                    (n) => (
                        (this.page = e),
                        (this.cleared = !1),
                        F.setCurrent(e),
                        this.swap({
                            component: n,
                            page: e,
                            preserveState: t,
                            viewTransition: !1,
                        })
                    ),
                )
            );
        }
        clear() {
            this.cleared = !0;
        }
        isCleared() {
            return this.cleared;
        }
        get() {
            return this.page;
        }
        getWithoutFlashData() {
            return { ...this.page, flash: {} };
        }
        hasOnceProps() {
            return Object.keys(this.page.onceProps ?? {}).length > 0;
        }
        merge(e) {
            this.page = { ...this.page, ...e };
        }
        setPropsQuietly(e) {
            return (
                (this.page = { ...this.page, props: e }),
                this.resolve(this.page.component, this.page).then((e) =>
                    this.swap({
                        component: e,
                        page: this.page,
                        preserveState: !0,
                        viewTransition: !1,
                    }),
                )
            );
        }
        setFlash(e) {
            ((this.page = { ...this.page, flash: e }),
                this.onFlashCallback?.(e));
        }
        setUrlHash(e) {
            this.page.url.includes(e) || (this.page.url += e);
        }
        remember(e) {
            this.page.rememberedState = e;
        }
        swap({
            component: e,
            page: t,
            preserveState: n,
            viewTransition: r,
            initialRender: i = !1,
        }) {
            let a = () =>
                this.swapComponent({
                    component: e,
                    page: t,
                    preserveState: n,
                    initialRender: i,
                });
            if (
                !r ||
                !document?.startViewTransition ||
                document.visibilityState === `hidden`
            )
                return a();
            let o = typeof r == `boolean` ? () => null : r,
                s = (e) => {
                    e.catch((e) => {
                        if (!(e instanceof DOMException)) throw e;
                    });
                };
            return new Promise((e) => {
                let t = document.startViewTransition(() => a().then(e));
                (s(t.ready), s(t.finished), s(t.updateCallbackDone), o(t));
            });
        }
        resolve(e, t) {
            return Promise.resolve(this.resolveComponent(e, t));
        }
        nextOptimisticId() {
            return ++this.optimisticCounter;
        }
        markOptimisticConfirmed(e) {
            this.confirmedOptimisticId = Math.max(
                this.confirmedOptimisticId,
                e,
            );
        }
        hasConfirmedOptimisticAfter(e) {
            return this.confirmedOptimisticId > e;
        }
        setBaseline(e, t) {
            e in this.optimisticBaseline || (this.optimisticBaseline[e] = t);
        }
        updateBaseline(e, t) {
            e in this.optimisticBaseline && (this.optimisticBaseline[e] = t);
        }
        hasBaseline(e) {
            return e in this.optimisticBaseline;
        }
        registerOptimistic(e, t) {
            this.pendingOptimistics.push({ id: e, callback: t });
        }
        unregisterOptimistic(e) {
            this.pendingOptimistics = this.pendingOptimistics.filter(
                (t) => t.id !== e,
            );
        }
        replayOptimistics() {
            let e = Object.keys(this.optimisticBaseline);
            if (e.length === 0) return {};
            let t = A(this.page.props);
            for (let n of e) t[n] = A(this.optimisticBaseline[n]);
            for (let { callback: e } of this.pendingOptimistics) {
                let n = e(A(t));
                n && Object.assign(t, n);
            }
            let n = {};
            for (let r of e) n[r] = t[r];
            return n;
        }
        pendingOptimisticCount() {
            return this.pendingOptimistics.length;
        }
        clearOptimisticState() {
            ((this.optimisticBaseline = {}),
                (this.pendingOptimistics = []),
                (this.confirmedOptimisticId = 0));
        }
        isTheSame(e) {
            return this.page.component === e.component;
        }
        on(e, t) {
            return (
                this.listeners.push({ event: e, callback: t }),
                () => {
                    this.listeners = this.listeners.filter(
                        (n) => n.event !== e && n.callback !== t,
                    );
                }
            );
        }
        fireEventsFor(e) {
            this.listeners
                .filter((t) => t.event === e)
                .forEach((e) => e.callback());
        }
        mergeOncePropsIntoResponse(e, { force: t = !1 } = {}) {
            Object.entries(e.onceProps ?? {}).forEach(([n, r]) => {
                let i = this.page.onceProps?.[n];
                i !== void 0 &&
                    (t || N(e.props, r.prop) === void 0) &&
                    (qe(e.props, r.prop, N(this.page.props, i.prop)),
                    (e.onceProps[n].expiresAt = i.expiresAt));
            });
        }
    })(),
    fr = class {
        items = [];
        processingPromise = null;
        add(e) {
            return (this.items.push(e), this.process());
        }
        process() {
            return (
                (this.processingPromise ??= this.processNext().then(
                    () => {
                        if (
                            ((this.processingPromise = null),
                            this.items.length > 0)
                        )
                            return this.process();
                    },
                    (e) => {
                        throw ((this.processingPromise = null), e);
                    },
                )),
                this.processingPromise
            );
        }
        processNext() {
            let e = this.items.shift();
            return e
                ? Promise.resolve(e()).then(() => this.processNext())
                : Promise.resolve();
        }
    },
    pr = typeof window > `u`,
    mr = new fr(),
    hr = !pr && /CriOS/.test(window.navigator.userAgent),
    gr = class {
        rememberedState = `rememberedState`;
        scrollRegions = `scrollRegions`;
        preserveUrl = !1;
        current = {};
        initialState = null;
        remember(e, t) {
            this.replaceState({
                ...P.getWithoutFlashData(),
                rememberedState: {
                    ...(P.get()?.rememberedState ?? {}),
                    [t]: e,
                },
            });
        }
        restore(e) {
            if (!pr)
                return this.current[this.rememberedState]?.[e] === void 0
                    ? this.initialState?.[this.rememberedState]?.[e]
                    : this.current[this.rememberedState]?.[e];
        }
        pushState(e, t = null) {
            pr ||
                (this.preserveUrl
                    ? t && t()
                    : ((this.current = e),
                      mr.add(() =>
                          this.getPageData(e).then((n) => {
                              let r = () =>
                                  this.doPushState({ page: n }, e.url).then(
                                      () => t?.(),
                                  );
                              return hr
                                  ? new Promise((e) => {
                                        setTimeout(() => r().then(e));
                                    })
                                  : r();
                          }),
                      )));
        }
        clonePageProps(e) {
            try {
                return (structuredClone(e.props), e);
            } catch {
                return { ...e, props: A(e.props) };
            }
        }
        getPageData(e) {
            let t = this.clonePageProps(e);
            return new Promise((n) =>
                e.encryptHistory ? _n(t).then(n) : n(t),
            );
        }
        processQueue() {
            return mr.process();
        }
        decrypt(e = null) {
            if (pr) return Promise.resolve(e ?? P.get());
            let t = e ?? window.history.state?.page;
            return this.decryptPageData(t).then((e) => {
                if (!e) throw Error(`Unable to decrypt history`);
                return (
                    this.initialState === null
                        ? (this.initialState = e ?? void 0)
                        : (this.current = e ?? {}),
                    e
                );
            });
        }
        decryptPageData(e) {
            return e instanceof ArrayBuffer ? yn(e) : Promise.resolve(e);
        }
        saveScrollPositions(e) {
            mr.add(() =>
                Promise.resolve().then(() => {
                    if (
                        window.history.state?.page &&
                        !M(this.getScrollRegions(), e)
                    )
                        return this.doReplaceState({
                            page: window.history.state.page,
                            scrollRegions: e,
                        });
                }),
            );
        }
        saveDocumentScrollPosition(e) {
            mr.add(() =>
                Promise.resolve().then(() => {
                    if (
                        window.history.state?.page &&
                        !M(this.getDocumentScrollPosition(), e)
                    )
                        return this.doReplaceState({
                            page: window.history.state.page,
                            documentScrollPosition: e,
                        });
                }),
            );
        }
        getScrollRegions() {
            return window.history.state?.scrollRegions || [];
        }
        getDocumentScrollPosition() {
            return (
                window.history.state?.documentScrollPosition || {
                    top: 0,
                    left: 0,
                }
            );
        }
        replaceState(e, t = null) {
            if (M(this.current, e)) {
                t && t();
                return;
            }
            let { flash: n, ...r } = e;
            (P.merge(r),
                !pr &&
                    (this.preserveUrl
                        ? t && t()
                        : ((this.current = e),
                          mr.add(() =>
                              this.getPageData(e).then((n) => {
                                  let r = () =>
                                      this.doReplaceState(
                                          { page: n },
                                          e.url,
                                      ).then(() => t?.());
                                  return hr
                                      ? new Promise((e) => {
                                            setTimeout(() => r().then(e));
                                        })
                                      : r();
                              }),
                          ))));
        }
        isHistoryThrottleError(e) {
            return (
                e instanceof Error &&
                e.name === `SecurityError` &&
                (e.message.includes(`history.pushState`) ||
                    e.message.includes(`history.replaceState`))
            );
        }
        isQuotaExceededError(e) {
            return e instanceof Error && e.name === `QuotaExceededError`;
        }
        withThrottleProtection(e) {
            return Promise.resolve().then(() => {
                try {
                    return e();
                } catch (e) {
                    if (!this.isHistoryThrottleError(e)) throw e;
                    console.error(e.message);
                }
            });
        }
        doReplaceState(e, t) {
            return this.withThrottleProtection(() => {
                try {
                    window.history.replaceState(
                        {
                            ...e,
                            scrollRegions:
                                e.scrollRegions ??
                                window.history.state?.scrollRegions,
                            documentScrollPosition:
                                e.documentScrollPosition ??
                                window.history.state?.documentScrollPosition,
                        },
                        ``,
                        t,
                    );
                } catch (e) {
                    if (!this.isQuotaExceededError(e)) throw e;
                    console.error(e.message);
                }
            });
        }
        doPushState(e, t) {
            return this.withThrottleProtection(() => {
                try {
                    window.history.pushState(e, ``, t);
                } catch (e) {
                    if (!this.isQuotaExceededError(e)) throw e;
                    _r.fireInternalEvent(`historyQuotaExceeded`, t);
                }
            });
        }
        getState(e, t) {
            return this.current?.[e] ?? t;
        }
        deleteState(e) {
            this.current[e] !== void 0 &&
                (delete this.current[e], this.replaceState(this.current));
        }
        clearInitialState(e) {
            this.initialState &&
                this.initialState[e] !== void 0 &&
                (this.initialState = { ...this.initialState, [e]: void 0 });
        }
        browserHasHistoryEntry() {
            return !pr && !!window.history.state?.page;
        }
        clear() {
            (hn.remove(vn.key), hn.remove(vn.iv));
        }
        setCurrent(e) {
            this.current = e;
        }
        isValidState(e) {
            return !!e.page;
        }
        getAllState() {
            return this.current;
        }
    };
typeof window < `u` &&
    window.history.scrollRestoration &&
    (window.history.scrollRestoration = `manual`);
var F = new gr(),
    _r = new (class {
        internalListeners = [];
        init() {
            (typeof window < `u` &&
                (window.addEventListener(
                    `popstate`,
                    this.handlePopstateEvent.bind(this),
                ),
                window.addEventListener(
                    `pageshow`,
                    this.handlePageshowEvent.bind(this),
                ),
                window.addEventListener(
                    `scroll`,
                    Vt(Vn.onWindowScroll.bind(Vn), 100),
                    !0,
                )),
                typeof document < `u` &&
                    document.addEventListener(
                        `scroll`,
                        Vt(Vn.onScroll.bind(Vn), 100),
                        !0,
                    ));
        }
        onGlobalEvent(e, t) {
            return this.registerListener(`inertia:${e}`, (e) => {
                let n = t(e);
                e.cancelable &&
                    !e.defaultPrevented &&
                    n === !1 &&
                    e.preventDefault();
            });
        }
        on(e, t) {
            return (
                this.internalListeners.push({ event: e, listener: t }),
                () => {
                    this.internalListeners = this.internalListeners.filter(
                        (e) => e.listener !== t,
                    );
                }
            );
        }
        onMissingHistoryItem() {
            (P.clear(), this.fireInternalEvent(`missingHistoryItem`));
        }
        fireInternalEvent(e, ...t) {
            this.internalListeners
                .filter((t) => t.event === e)
                .forEach((e) => e.listener(...t));
        }
        registerListener(e, t) {
            return (
                document.addEventListener(e, t),
                () => document.removeEventListener(e, t)
            );
        }
        handlePageshowEvent(e) {
            e.persisted && F.decrypt().catch(() => this.onMissingHistoryItem());
        }
        handlePopstateEvent(e) {
            let t = e.state || null;
            if (t === null) {
                let e = nr(P.get().url);
                ((e.hash = window.location.hash),
                    F.replaceState({ ...P.getWithoutFlashData(), url: e.href }),
                    Vn.reset());
            } else {
                if (!F.isValidState(t)) return this.onMissingHistoryItem();
                F.decrypt(t.page)
                    .then((e) => {
                        P.get().version === e.version
                            ? (L.cancelAll({ prefetch: !1 }),
                              P.setQuietly(e, { preserveState: !1 }).then(
                                  () => {
                                      (Vn.restore(F.getScrollRegions()),
                                          Yt(P.get(), { type: `history` }));
                                      let t = {},
                                          n = P.get().props;
                                      for (let [r, i] of Object.entries(
                                          e.initialDeferredProps ??
                                              e.deferredProps ??
                                              {},
                                      )) {
                                          let e = i.filter(
                                              (e) => N(n, e) === void 0,
                                          );
                                          e.length > 0 && (t[r] = e);
                                      }
                                      Object.keys(t).length > 0 &&
                                          this.fireInternalEvent(
                                              `loadDeferredProps`,
                                              t,
                                          );
                                  },
                              ))
                            : this.onMissingHistoryItem();
                    })
                    .catch(() => {
                        this.onMissingHistoryItem();
                    });
            }
        }
    })(),
    vr = new (class {
        type;
        constructor() {
            this.type = this.resolveType();
        }
        resolveType() {
            return typeof window > `u`
                ? `navigate`
                : (window.performance?.getEntriesByType(`navigation`)[0]
                      ?.type ?? `navigate`);
        }
        get() {
            return this.type;
        }
        isBackForward() {
            return this.type === `back_forward`;
        }
        isReload() {
            return this.type === `reload`;
        }
    })();
function yr() {
    let e = typeof window < `u` ? window.crypto : void 0;
    if (e?.randomUUID) return e.randomUUID();
    let t = () =>
        e?.getRandomValues
            ? e.getRandomValues(new Uint8Array(1))[0]
            : Math.floor(Math.random() * 256);
    return `10000000-1000-4000-8000-100000000000`.replace(/[018]/g, (e) =>
        (+e ^ (t() & (15 >> (e / 4)))).toString(16),
    );
}
var br = class {
        static handle() {
            (this.clearRememberedStateOnReload(),
                [
                    this.handleBackForward,
                    this.handleLocation,
                    this.handleDefault,
                ].find((e) => e.bind(this)()));
        }
        static clearRememberedStateOnReload() {
            vr.isReload() &&
                (F.deleteState(F.rememberedState),
                F.clearInitialState(F.rememberedState));
        }
        static handleBackForward() {
            if (!vr.isBackForward() || !F.browserHasHistoryEntry()) return !1;
            let e = F.getScrollRegions();
            return (
                F.decrypt()
                    .then((t) => {
                        if (P.get().version !== t.version) {
                            this.handleDefault();
                            return;
                        }
                        let n = yr();
                        P.set(t, {
                            preserveScroll: !0,
                            preserveState: !0,
                            visitId: n,
                        }).then(() => {
                            (Vn.restore(e),
                                Yt(P.get(), { type: `history`, visitId: n }));
                        });
                    })
                    .catch(() => {
                        _r.onMissingHistoryItem();
                    }),
                !0
            );
        }
        static handleLocation() {
            if (!hn.exists(hn.locationVisitKey)) return !1;
            let e = hn.get(hn.locationVisitKey) || {};
            return (
                hn.remove(hn.locationVisitKey),
                typeof window < `u` && P.setUrlHash(window.location.hash),
                F.decrypt(P.get())
                    .then(() => {
                        let t = yr(),
                            n = F.getState(F.rememberedState, {}),
                            r = F.getScrollRegions();
                        (P.remember(n),
                            P.set(P.get(), {
                                preserveScroll: e.preserveScroll,
                                preserveState: !0,
                                initialRender: !0,
                                visitId: t,
                            }).then(() => {
                                (e.preserveScroll && Vn.restore(r),
                                    this.fireInitialEvents(t));
                            }));
                    })
                    .catch(() => {
                        _r.onMissingHistoryItem();
                    }),
                !0
            );
        }
        static handleDefault() {
            typeof window < `u` && P.setUrlHash(window.location.hash);
            let e = yr();
            P.set(P.get(), {
                preserveScroll: !0,
                preserveState: !0,
                initialRender: !0,
                visitId: e,
            }).then(() => {
                (vr.isReload()
                    ? Vn.restore(F.getScrollRegions())
                    : Vn.scrollToAnchor(),
                    this.fireInitialEvents(e));
            });
        }
        static fireInitialEvents(e) {
            let t = P.get();
            (Yt(t, { type: `initial`, visitId: e }),
                Object.keys(t.flash).length > 0 &&
                    queueMicrotask(() => nn(t.flash)));
        }
    },
    xr = class {
        intervalId = null;
        timeoutId = null;
        hidden = !1;
        background;
        cb;
        interval;
        cbCount = 0;
        mode;
        inFlight = !1;
        currentCancel = null;
        stopped = !0;
        instanceId = 0;
        lastPolledAt = 0;
        constructor(e, t, n) {
            ((this.background =
                n.background ?? (n.keepAlive ? `continue` : `throttle`)),
                (this.hidden = typeof document < `u` && document.hidden),
                (this.mode = n.mode ?? `overlap`),
                (this.cb = t),
                (this.interval = e),
                (n.autoStart ?? !0) && this.start());
        }
        stop() {
            ((this.stopped = !0),
                this.instanceId++,
                (this.inFlight = !1),
                (this.currentCancel = null),
                this.clearTimers());
        }
        start() {
            typeof window < `u` &&
                (this.stop(),
                (this.stopped = !1),
                (this.lastPolledAt = Date.now()),
                !this.isPaused() &&
                    (this.mode === `rest`
                        ? this.scheduleNext()
                        : this.startInterval()));
        }
        isInBackground(e) {
            e !== this.hidden &&
                ((this.hidden = e),
                this.isThrottled() && (this.cbCount = 0),
                this.background === `pause` &&
                    (e ? this.clearTimers() : this.resume()));
        }
        isThrottled() {
            return this.hidden && this.background === `throttle`;
        }
        isPaused() {
            return this.hidden && this.background === `pause`;
        }
        resume() {
            if (this.stopped || (this.mode === `rest` && this.inFlight)) return;
            let e = this.interval - (Date.now() - this.lastPolledAt);
            e > 0
                ? (this.timeoutId = window.setTimeout(() => {
                      ((this.timeoutId = null), this.resume());
                  }, e))
                : (this.fire(), this.mode !== `rest` && this.startInterval());
        }
        startInterval() {
            this.intervalId = window.setInterval(
                () => this.tick(),
                this.interval,
            );
        }
        clearTimers() {
            ((this.intervalId &&= (clearInterval(this.intervalId), null)),
                (this.timeoutId &&= (clearTimeout(this.timeoutId), null)));
        }
        scheduleNext() {
            this.stopped ||
                this.isPaused() ||
                (this.timeoutId = window.setTimeout(() => {
                    ((this.timeoutId = null), this.tick());
                }, this.interval));
        }
        tick() {
            let e = this.isThrottled();
            (!e || this.cbCount % 10 == 0
                ? this.fire()
                : this.mode === `rest` && this.scheduleNext(),
                e && this.cbCount++);
        }
        fire() {
            (this.inFlight && this.mode === `cancel` && this.currentCancel?.(),
                (this.lastPolledAt = Date.now()));
            let e = this.instanceId;
            this.cb({
                onStart: (t) => {
                    e === this.instanceId &&
                        ((this.inFlight = !0), (this.currentCancel = t));
                },
                onFinish: () => {
                    e === this.instanceId &&
                        ((this.inFlight = !1),
                        (this.currentCancel = null),
                        this.mode === `rest` &&
                            ((this.lastPolledAt = Date.now()),
                            this.scheduleNext()));
                },
            });
        }
    },
    Sr = new (class {
        polls = [];
        constructor() {
            this.setupVisibilityListener();
        }
        get count() {
            return this.polls.length;
        }
        add(e, t, n) {
            let r = new xr(e, t, n);
            return (
                this.polls.push(r),
                {
                    stop: () => r.stop(),
                    start: () => r.start(),
                    destroy: () => {
                        (r.stop(),
                            (this.polls = this.polls.filter((e) => e !== r)));
                    },
                }
            );
        }
        clear() {
            (this.polls.forEach((e) => e.stop()), (this.polls = []));
        }
        setupVisibilityListener() {
            typeof document < `u` &&
                document.addEventListener(
                    `visibilitychange`,
                    () => {
                        this.polls.forEach((e) =>
                            e.isInBackground(document.hidden),
                        );
                    },
                    !1,
                );
        }
    })(),
    Cr = new (class {
        requestHandlers = [];
        responseHandlers = [];
        errorHandlers = [];
        onRequest(e) {
            return (
                this.requestHandlers.push(e),
                () => {
                    this.requestHandlers = this.requestHandlers.filter(
                        (t) => t !== e,
                    );
                }
            );
        }
        onResponse(e) {
            return (
                this.responseHandlers.push(e),
                () => {
                    this.responseHandlers = this.responseHandlers.filter(
                        (t) => t !== e,
                    );
                }
            );
        }
        onError(e) {
            return (
                this.errorHandlers.push(e),
                () => {
                    this.errorHandlers = this.errorHandlers.filter(
                        (t) => t !== e,
                    );
                }
            );
        }
        async processRequest(e) {
            let t = e;
            for (let e of this.requestHandlers) t = await e(t);
            return t;
        }
        async processResponse(e) {
            let t = e;
            for (let e of this.responseHandlers) t = await e(t);
            return t;
        }
        async processError(e) {
            for (let t of this.errorHandlers) await t(e);
        }
    })();
function wr(e) {
    let t = document.cookie.match(RegExp(`(^|;\\s*)(` + e + `)=([^;]*)`));
    return t ? decodeURIComponent(t[3]) : null;
}
function Tr(e) {
    return new URL(e, window.location.href).origin === window.location.origin;
}
function Er(e) {
    let t = {};
    return (
        e
            .getAllResponseHeaders()
            .split(`\r
`)
            .forEach((e) => {
                let n = e.indexOf(`:`);
                n > 0 &&
                    (t[e.slice(0, n).toLowerCase().trim()] = e
                        .slice(n + 1)
                        .trim());
            }),
        t
    );
}
function Dr(e) {
    return typeof FormData < `u` && e instanceof FormData;
}
function Or(e) {
    return (
        typeof e == `string` ||
        Dr(e) ||
        (typeof Blob < `u` && e instanceof Blob) ||
        (typeof ArrayBuffer < `u` && e instanceof ArrayBuffer) ||
        (typeof ArrayBuffer < `u` && ArrayBuffer.isView(e)) ||
        (typeof URLSearchParams < `u` && e instanceof URLSearchParams)
    );
}
function kr(e, t) {
    if (!t.headers) return;
    let n = Dr(t.data);
    Object.entries(t.headers).forEach(([t, r]) => {
        (t.toLowerCase() === `content-type` && n) ||
            e.setRequestHeader(t, String(r));
    });
}
function Ar(e, t) {
    if (!t || Object.keys(t).length === 0) return e;
    let [n] = ir(`get`, e, t);
    return n;
}
var jr = class {
        xsrfCookieName;
        xsrfHeaderName;
        constructor(e = {}) {
            ((this.xsrfCookieName = e.xsrfCookieName ?? `XSRF-TOKEN`),
                (this.xsrfHeaderName = e.xsrfHeaderName ?? `X-XSRF-TOKEN`));
        }
        async request(e) {
            let t = await Cr.processRequest(e);
            try {
                let e = await this.doRequest(t);
                return await Cr.processResponse(e);
            } catch (e) {
                throw (
                    (e instanceof Dn || e instanceof kn || e instanceof On) &&
                        (await Cr.processError(e)),
                    e
                );
            }
        }
        doRequest(e) {
            return new Promise((t, n) => {
                if (e.signal?.aborted) {
                    n(new On(`Request was cancelled`, e.url));
                    return;
                }
                let r = new XMLHttpRequest(),
                    i = Ar(e.url, e.params);
                r.open(e.method.toUpperCase(), i, !0);
                let a = Tr(i) ? wr(this.xsrfCookieName) : null;
                (a && r.setRequestHeader(this.xsrfHeaderName, a),
                    Object.keys(e.headers ?? {}).some(
                        (e) => e.toLowerCase() === `x-requested-with`,
                    ) ||
                        r.setRequestHeader(
                            `X-Requested-With`,
                            `XMLHttpRequest`,
                        ));
                let o = null;
                (e.data !== null &&
                    e.data !== void 0 &&
                    (Or(e.data)
                        ? (o = e.data)
                        : typeof e.data == `object`
                          ? ((o = JSON.stringify(e.data)),
                            !e.headers?.[`Content-Type`] &&
                                !e.headers?.[`content-type`] &&
                                r.setRequestHeader(
                                    `Content-Type`,
                                    `application/json`,
                                ))
                          : (o = String(e.data))),
                    kr(r, e),
                    e.onUploadProgress &&
                        (r.upload.onprogress = (t) => {
                            let n = t.lengthComputable
                                ? t.loaded / t.total
                                : void 0;
                            e.onUploadProgress({
                                progress: n,
                                percentage: n ? Math.round(n * 100) : 0,
                                loaded: t.loaded,
                                total: t.lengthComputable ? t.total : void 0,
                            });
                        }),
                    e.signal &&
                        e.signal.addEventListener(`abort`, () => r.abort()),
                    (r.onabort = () =>
                        n(new On(`Request was cancelled`, e.url))),
                    (r.onerror = () => n(new kn(`Network error`, e.url))),
                    (r.onload = () => {
                        let i = {
                            status: r.status,
                            data: r.responseText,
                            headers: Er(r),
                        };
                        r.status >= 400
                            ? n(
                                  new Dn(
                                      `Request failed with status ${r.status}`,
                                      i,
                                      e.url,
                                  ),
                              )
                            : t(i);
                    }),
                    r.send(o));
            });
        }
    },
    Mr = new jr();
xt.withSerializer(fn);
var Nr = Mr;
function Pr(e) {
    return !(`request` in e);
}
var Fr = {
        getClient() {
            return Nr;
        },
        setClient(e) {
            Pr(e)
                ? ((Nr = new jr(e)),
                  e.xsrfCookieName && xt.withXsrfCookieName(e.xsrfCookieName),
                  e.xsrfHeaderName && xt.withXsrfHeaderName(e.xsrfHeaderName))
                : (Nr = e);
        },
        onRequest: Cr.onRequest.bind(Cr),
        onResponse: Cr.onResponse.bind(Cr),
        onError: Cr.onError.bind(Cr),
        processRequest: Cr.processRequest.bind(Cr),
        processResponse: Cr.processResponse.bind(Cr),
        processError: Cr.processError.bind(Cr),
    },
    Ir = new (class {
        requestHandlers = [];
        responseHandlers = [];
        onVisitRequest(e) {
            return (
                this.requestHandlers.push(e),
                () => {
                    this.requestHandlers = this.requestHandlers.filter(
                        (t) => t !== e,
                    );
                }
            );
        }
        onVisitResponse(e) {
            return (
                this.responseHandlers.push(e),
                () => {
                    this.responseHandlers = this.responseHandlers.filter(
                        (t) => t !== e,
                    );
                }
            );
        }
        async processRequest(e, t) {
            let n = t;
            for (let t of this.requestHandlers) n = await t(e, n);
            return n;
        }
        async processResponse(e, t) {
            let n = t;
            for (let t of this.responseHandlers) n = await t(e, n);
            return n;
        }
    })();
function Lr() {
    typeof window < `u` && (window.__inertia_interceptors__ = Ir);
}
var Rr = class e {
        callbacks = [];
        params;
        constructor(e) {
            if (!e.prefetch) this.params = e;
            else {
                let t = {
                    onBefore: this.wrapCallback(e, `onBefore`),
                    onBeforeUpdate: this.wrapCallback(e, `onBeforeUpdate`),
                    onStart: this.wrapCallback(e, `onStart`),
                    onProgress: this.wrapCallback(e, `onProgress`),
                    onFinish: this.wrapCallback(e, `onFinish`),
                    onCancel: this.wrapCallback(e, `onCancel`),
                    onSuccess: this.wrapCallback(e, `onSuccess`),
                    onError: this.wrapCallback(e, `onError`),
                    onHttpException: this.wrapCallback(e, `onHttpException`),
                    onNetworkError: this.wrapCallback(e, `onNetworkError`),
                    onFlash: this.wrapCallback(e, `onFlash`),
                    onCancelToken: this.wrapCallback(e, `onCancelToken`),
                    onPrefetched: this.wrapCallback(e, `onPrefetched`),
                    onPrefetching: this.wrapCallback(e, `onPrefetching`),
                };
                this.params = {
                    ...e,
                    ...t,
                    onPrefetchResponse: e.onPrefetchResponse || (() => {}),
                    onPrefetchError: e.onPrefetchError || (() => {}),
                };
            }
        }
        static create(t) {
            return new e(t);
        }
        data() {
            return this.params.method === `get` ? null : this.params.data;
        }
        queryParams() {
            return this.params.method === `get` ? this.params.data : {};
        }
        isPartial() {
            return (
                this.params.only.length > 0 ||
                this.params.except.length > 0 ||
                this.params.reset.length > 0
            );
        }
        isPrefetch() {
            return this.params.prefetch === !0;
        }
        isDeferredPropsRequest() {
            return this.params.deferredProps === !0;
        }
        isPollRequest() {
            return this.params.poll === !0;
        }
        onCancelToken(e) {
            this.params.onCancelToken({ cancel: e });
        }
        markAsFinished() {
            ((this.params.completed = !0),
                (this.params.cancelled = !1),
                (this.params.interrupted = !1));
        }
        markAsCancelled({ cancelled: e = !0, interrupted: t = !1 }) {
            (this.params.onCancel(),
                (this.params.completed = !1),
                (this.params.cancelled = e),
                (this.params.interrupted = t));
        }
        wasCancelledAtAll() {
            return this.params.cancelled || this.params.interrupted;
        }
        onFinish() {
            this.params.onFinish(this.params);
        }
        onStart() {
            this.params.onStart(this.params);
        }
        onPrefetching() {
            this.params.onPrefetching(this.params);
        }
        onPrefetchResponse(e) {
            this.params.onPrefetchResponse && this.params.onPrefetchResponse(e);
        }
        onPrefetchError(e) {
            this.params.onPrefetchError && this.params.onPrefetchError(e);
        }
        all() {
            return this.params;
        }
        headers() {
            let e = { ...this.params.headers };
            this.isPartial() &&
                (e[`X-Inertia-Partial-Component`] = P.get().component);
            let t = this.params.only.concat(this.params.reset);
            return (
                t.length > 0 && (e[`X-Inertia-Partial-Data`] = t.join(`,`)),
                this.params.except.length > 0 &&
                    (e[`X-Inertia-Partial-Except`] =
                        this.params.except.join(`,`)),
                this.params.reset.length > 0 &&
                    (e[`X-Inertia-Reset`] = this.params.reset.join(`,`)),
                this.params.errorBag &&
                    this.params.errorBag.length > 0 &&
                    (e[`X-Inertia-Error-Bag`] = this.params.errorBag),
                e
            );
        }
        setPreserveOptions(t) {
            ((this.params.preserveScroll = e.resolvePreserveOption(
                this.params.preserveScroll,
                t,
            )),
                (this.params.preserveState = e.resolvePreserveOption(
                    this.params.preserveState,
                    t,
                )));
        }
        runCallbacks() {
            this.callbacks.forEach(({ name: e, args: t }) => {
                this.params[e](...t);
            });
        }
        merge(e) {
            this.params = { ...this.params, ...e };
        }
        wrapCallback(e, t) {
            return (...n) => {
                (this.recordCallback(t, n), e[t](...n));
            };
        }
        recordCallback(e, t) {
            this.callbacks.push({ name: e, args: t });
        }
        static resolvePreserveOption(e, t) {
            return typeof e == `function`
                ? e(t)
                : e === `errors`
                  ? Object.keys(t.props.errors || {}).length > 0
                  : e;
        }
    },
    zr = {
        createIframeAndPage(e) {
            typeof e == `object` &&
                (e = `All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>${JSON.stringify(e)}`);
            let t = document.createElement(`html`);
            ((t.innerHTML = e),
                t
                    .querySelectorAll(`a`)
                    .forEach((e) => e.setAttribute(`target`, `_top`)));
            let n = document.createElement(`iframe`);
            return (
                (n.style.backgroundColor = `white`),
                (n.style.borderRadius = `5px`),
                (n.style.width = `100%`),
                (n.style.height = `100%`),
                n.setAttribute(`sandbox`, `allow-scripts`),
                { iframe: n, page: t }
            );
        },
        show(e) {
            let { iframe: t, page: n } = this.createIframeAndPage(e);
            ((t.style.boxSizing = `border-box`), (t.style.display = `block`));
            let r = document.createElement(`dialog`);
            ((r.id = `inertia-error-dialog`),
                Object.assign(r.style, {
                    width: `calc(100vw - 100px)`,
                    height: `calc(100vh - 100px)`,
                    padding: `0`,
                    margin: `auto`,
                    border: `none`,
                    backgroundColor: `transparent`,
                }));
            let i = document.createElement(`style`);
            i.textContent = `
      dialog#inertia-error-dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.6);
      }

      dialog#inertia-error-dialog:focus {
        outline: none;
      }
    `;
            let a = Bt.get(`nonce`);
            (a && (i.nonce = a),
                document.head.appendChild(i),
                r.addEventListener(`click`, (e) => {
                    e.target === r && r.close();
                }),
                r.addEventListener(`close`, () => {
                    (i.remove(), r.remove());
                }),
                r.appendChild(t),
                document.body.prepend(r),
                r.showModal(),
                r.focus(),
                (t.srcdoc = n.outerHTML));
        },
    },
    Br = (e, t) => e === t || e.startsWith(`${t}.`),
    Vr = (e, t) => {
        let { only: n, except: r } = e;
        return !(
            (n.length === 0 && r.length === 0) ||
            (n.length > 0 && !n.some((e) => Br(t, e))) ||
            (r.length > 0 && r.some((e) => Br(t, e)))
        );
    },
    Hr = new fr(),
    Ur = class e {
        constructor(e, t, n, r = null) {
            ((this.requestParams = e),
                (this.response = t),
                (this.originatingPage = n),
                (this.optimisticId = r));
        }
        requestParams;
        response;
        originatingPage;
        optimisticId;
        wasPrefetched = !1;
        processed = !1;
        static create(t, n, r, i = null) {
            return new e(t, n, r, i);
        }
        isProcessed() {
            return this.processed;
        }
        async handlePrefetch() {
            sr(this.requestParams.all().url, window.location) && this.handle();
        }
        async handle() {
            return Hr.add(() => this.process());
        }
        async process() {
            if (this.requestParams.all().prefetch)
                return (
                    (this.wasPrefetched = !0),
                    (this.requestParams.all().prefetch = !1),
                    this.requestParams
                        .all()
                        .onPrefetched(this.response, this.requestParams.all()),
                    en(this.response, this.requestParams.all()),
                    Promise.resolve()
                );
            if (
                (this.requestParams.runCallbacks(),
                (this.processed = !0),
                !this.isInertiaResponse())
            )
                return this.handleNonInertiaResponse();
            if (this.isHttpException()) {
                let e = {
                    ...this.response,
                    data: this.getDataFromResponse(this.response.data),
                };
                if (
                    this.requestParams.all().onHttpException(e) === !1 ||
                    !qt(e)
                )
                    return;
            }
            (await F.processQueue(),
                (F.preserveUrl = this.requestParams.all().preserveUrl),
                await this.setPage());
            let { flash: e } = P.get();
            Object.keys(e).length > 0 &&
                !this.requestParams.isDeferredPropsRequest() &&
                (nn(e), this.requestParams.all().onFlash(e));
            let t = P.get().props.errors || {};
            if (Object.keys(t).length > 0) {
                let e = this.getScopedErrors(t);
                return (
                    Wt(e, {
                        page: P.get(),
                        visitId: this.requestParams.all().id,
                    }),
                    this.requestParams.all().onError(e)
                );
            }
            (L.flushByCacheTags(
                this.requestParams.all().invalidateCacheTags || [],
            ),
                this.wasPrefetched || L.flush(P.get().url),
                $t(P.get(), { visitId: this.requestParams.all().id }),
                await this.requestParams.all().onSuccess(P.get()),
                (F.preserveUrl = !1));
        }
        mergeParams(e) {
            this.requestParams.merge(e);
        }
        getPageResponse() {
            let e = this.getDataFromResponse(this.response.data);
            return typeof e == `object`
                ? (this.response.data = {
                      ...e,
                      flash: e.flash ?? {},
                      rescuedProps: e.rescuedProps ?? [],
                  })
                : (this.response.data = e);
        }
        async handleNonInertiaResponse() {
            if (this.isInertiaRedirect()) {
                L.visit(this.getHeader(`x-inertia-redirect`), {
                    ...this.requestParams.all(),
                    method: `get`,
                    data: {},
                });
                return;
            }
            if (this.isLocationVisit()) {
                let e = nr(this.getHeader(`x-inertia-location`));
                return (
                    or(this.requestParams.all().url, e), this.locationVisit(e)
                );
            }
            let e = {
                ...this.response,
                data: this.getDataFromResponse(this.response.data),
            };
            if (this.requestParams.all().onHttpException(e) !== !1 && qt(e))
                return zr.show(e.data);
        }
        isInertiaResponse() {
            return this.hasHeader(`x-inertia`);
        }
        isHttpException() {
            return this.response.status >= 400;
        }
        hasStatus(e) {
            return this.response.status === e;
        }
        getHeader(e) {
            return this.response.headers[e];
        }
        hasHeader(e) {
            return this.getHeader(e) !== void 0;
        }
        isInertiaRedirect() {
            return this.hasStatus(409) && this.hasHeader(`x-inertia-redirect`);
        }
        isLocationVisit() {
            return this.hasStatus(409) && this.hasHeader(`x-inertia-location`);
        }
        locationVisit(e) {
            try {
                if (typeof window > `u`) return;
                let t = this.getHeader(`x-inertia-version`),
                    n = !!t && t !== P.get().version;
                if (!rn(e, n) || (n && this.requestParams.all().async)) return;
                (hn.set(hn.locationVisitKey, {
                    preserveScroll:
                        this.requestParams.all().preserveScroll === !0,
                }),
                    sr(window.location, e)
                        ? window.location.reload()
                        : (window.location.href = e.href));
            } catch {
                return !1;
            }
        }
        async setPage() {
            let e = this.getPageResponse();
            return this.shouldSetPage(e)
                ? ((this.response = await Ir.processResponse(
                      this.requestParams.all(),
                      this.response,
                  )),
                  this.mergeProps(e),
                  P.mergeOncePropsIntoResponse(e),
                  this.preserveOptimisticProps(e),
                  this.preserveEqualProps(e),
                  await this.setRememberedState(e),
                  this.requestParams.setPreserveOptions(e),
                  (e.url = F.preserveUrl ? P.get().url : this.pageUrl(e)),
                  this.requestParams.all().onBeforeUpdate(e),
                  Jt(e),
                  P.set(e, {
                      replace: this.requestParams.all().replace,
                      preserveScroll: this.requestParams.all().preserveScroll,
                      preserveState: this.requestParams.all().preserveState,
                      viewTransition: this.requestParams.all().viewTransition,
                      cached: this.requestParams.all().cached,
                      visitId: this.requestParams.all().id,
                  }))
                : Promise.resolve();
        }
        getDataFromResponse(e) {
            if (typeof e != `string`) return e;
            try {
                return cn(e);
            } catch {
                return e;
            }
        }
        shouldSetPage(e) {
            if (
                !this.requestParams.all().async ||
                this.originatingPage.component !== e.component
            )
                return !0;
            if (this.originatingPage.component !== P.get().component) return !1;
            let t = nr(this.originatingPage.url),
                n = nr(P.get().url);
            return t.origin === n.origin && t.pathname === n.pathname;
        }
        pageUrl(e) {
            let t = nr(e.url);
            return (
                e.preserveFragment
                    ? (t.hash = this.requestParams.all().url.hash)
                    : or(this.requestParams.all().url, t),
                t.pathname + t.search + t.hash
            );
        }
        preserveOptimisticProps(e) {
            if (L.hasPendingOptimistic() || this.isStaleOptimisticResponse())
                for (let t of Object.keys(e.props))
                    P.hasBaseline(t) &&
                        (P.updateBaseline(t, e.props[t]),
                        (e.props[t] = P.get().props[t]));
        }
        isStaleOptimisticResponse() {
            return (
                this.optimisticId !== null &&
                P.hasConfirmedOptimisticAfter(this.optimisticId)
            );
        }
        preserveEqualProps(e) {
            if (e.component !== P.get().component) return;
            let t = P.get().props;
            Object.entries(e.props).forEach(([n, r]) => {
                M(r, t[n]) && (e.props[n] = t[n]);
            });
        }
        mergeProps(e) {
            if (
                !this.requestParams.isPartial() ||
                e.component !== P.get().component
            )
                return;
            let t = e.mergeProps || [],
                n = e.prependProps || [],
                r = e.deepMergeProps || [],
                i = e.matchPropsOn || [],
                a = (t, n) => {
                    let r = N(P.get().props, t),
                        a = N(e.props, t);
                    if (Array.isArray(a)) {
                        let o = this.mergeOrMatchItems(r || [], a, t, i, n);
                        qe(e.props, t, o);
                    } else if (typeof a == `object` && a) {
                        let n = { ...(r || {}), ...a };
                        qe(e.props, t, n);
                    }
                };
            (t.forEach((e) => a(e, !0)),
                n.forEach((e) => a(e, !1)),
                r.forEach((t) => {
                    let n = N(P.get().props, t),
                        r = N(e.props, t),
                        a = (e, t, n) =>
                            Array.isArray(t)
                                ? this.mergeOrMatchItems(e, t, n, i)
                                : typeof t == `object` && t
                                  ? Object.keys(t).reduce(
                                        (r, i) => (
                                            (r[i] = a(
                                                e ? e[i] : void 0,
                                                t[i],
                                                `${n}.${i}`,
                                            )),
                                            r
                                        ),
                                        { ...e },
                                    )
                                  : t;
                    qe(e.props, t, a(n, r, t));
                }));
            let o = new Set(
                [
                    ...this.requestParams.all().only,
                    ...this.requestParams.all().except,
                ]
                    .filter((e) => e.includes(`.`))
                    .map((e) => e.split(`.`)[0]),
            );
            for (let t of o) {
                let n = P.get().props[t];
                this.isObject(n) &&
                    this.isObject(e.props[t]) &&
                    (e.props[t] = this.deepMergeObjects(n, e.props[t]));
            }
            ((e.props = { ...P.get().props, ...e.props }),
                this.shouldPreserveErrors(e) &&
                    (e.props.errors = P.get().props.errors),
                P.get().scrollProps &&
                    (e.scrollProps = {
                        ...(P.get().scrollProps || {}),
                        ...(e.scrollProps || {}),
                    }),
                P.hasOnceProps() &&
                    (e.onceProps = {
                        ...(P.get().onceProps || {}),
                        ...(e.onceProps || {}),
                    }),
                this.requestParams.isDeferredPropsRequest() &&
                    (e.flash = { ...P.get().flash }));
            let s = P.get().initialDeferredProps;
            (s && Object.keys(s).length > 0 && (e.initialDeferredProps = s),
                (e.rescuedProps = this.mergeRescuedProps(e)));
        }
        mergeRescuedProps(e) {
            let t = P.get().rescuedProps ?? [],
                n = e.rescuedProps ?? [],
                r = new Set(t.filter((e) => !Vr(this.requestParams.all(), e)));
            return (n.forEach((e) => r.add(e)), Array.from(r));
        }
        shouldPreserveErrors(e) {
            if (!this.requestParams.all().preserveErrors) return !1;
            let t = P.get().props.errors;
            if (!t || Object.keys(t).length === 0) return !1;
            let n = e.props.errors;
            return !(n && Object.keys(n).length > 0);
        }
        isObject(e) {
            return e && typeof e == `object` && !Array.isArray(e);
        }
        deepMergeObjects(e, t) {
            let n = { ...e };
            for (let r of Object.keys(t)) {
                let i = e[r],
                    a = t[r];
                n[r] =
                    this.isObject(i) && this.isObject(a)
                        ? this.deepMergeObjects(i, a)
                        : a;
            }
            return n;
        }
        mergeOrMatchItems(e, t, n, r, i = !0) {
            let a = Array.isArray(e) ? e : [],
                o = r.find((e) => e.split(`.`).slice(0, -1).join(`.`) === n);
            if (!o) return i ? [...a, ...t] : [...t, ...a];
            let s = o.split(`.`).pop() || ``,
                c = new Map();
            return (
                t.forEach((e) => {
                    this.hasUniqueProperty(e, s) && c.set(e[s], e);
                }),
                i
                    ? this.appendWithMatching(a, t, c, s)
                    : this.prependWithMatching(a, t, c, s)
            );
        }
        appendWithMatching(e, t, n, r) {
            let i = e.map((e) =>
                    this.hasUniqueProperty(e, r) && n.has(e[r])
                        ? n.get(e[r])
                        : e,
                ),
                a = t.filter(
                    (t) =>
                        !this.hasUniqueProperty(t, r) ||
                        !e.some(
                            (e) =>
                                this.hasUniqueProperty(e, r) && e[r] === t[r],
                        ),
                );
            return [...i, ...a];
        }
        prependWithMatching(e, t, n, r) {
            let i = e.filter(
                (e) => !this.hasUniqueProperty(e, r) || !n.has(e[r]),
            );
            return [...t, ...i];
        }
        hasUniqueProperty(e, t) {
            return e && typeof e == `object` && t in e;
        }
        async setRememberedState(e) {
            let t = await F.getState(F.rememberedState, {});
            this.requestParams.all().preserveState &&
                t &&
                e.component === P.get().component &&
                (e.rememberedState = t);
        }
        getScopedErrors(e) {
            return this.requestParams.all().errorBag
                ? e[this.requestParams.all().errorBag || ``] || {}
                : e;
        }
    },
    Wr = class e {
        constructor(e, t, { optimisticId: n = null } = {}) {
            ((this.page = t),
                (this.requestParams = Rr.create(e)),
                (this.cancelToken = new AbortController()),
                (this.optimisticId = n));
        }
        page;
        response;
        cancelToken;
        requestParams;
        requestHasFinished = !1;
        optimisticId;
        static create(t, n, r) {
            return new e(t, n, r);
        }
        isPrefetch() {
            return this.requestParams.isPrefetch();
        }
        getUrl() {
            return this.requestParams.all().url;
        }
        isOptimistic() {
            return this.optimisticId !== null;
        }
        isPendingOptimistic() {
            return (
                this.isOptimistic() &&
                (!this.response || !this.response.isProcessed())
            );
        }
        async send() {
            (this.requestParams.onCancelToken(() => {
                this.response || this.cancel({ cancelled: !0 });
            }),
                Qt(this.requestParams.all()),
                this.requestParams.onStart(),
                this.requestParams.all().prefetch &&
                    (this.requestParams.onPrefetching(),
                    tn(this.requestParams.all())));
            let e = this.requestParams.all().prefetch,
                t = {
                    method: this.requestParams.all().method,
                    url: ar(this.requestParams.all().url).href,
                    data: this.requestParams.data(),
                    signal: this.cancelToken.signal,
                    headers: this.getHeaders(),
                    onUploadProgress: this.onProgress.bind(this),
                };
            mn(t.data) &&
                ((t.data = fn(t.data)),
                (t.headers = {
                    'Content-Type': `application/json`,
                    ...t.headers,
                }));
            let n = await Ir.processRequest(this.requestParams.all(), t);
            return Fr.getClient()
                .request(n)
                .then(
                    (e) => (
                        (this.response = Ur.create(
                            this.requestParams,
                            e,
                            this.page,
                            this.optimisticId,
                        )),
                        this.response.handle()
                    ),
                )
                .catch((e) =>
                    e instanceof Dn
                        ? ((this.response = Ur.create(
                              this.requestParams,
                              e.response,
                              this.page,
                              this.optimisticId,
                          )),
                          this.response.handle())
                        : Promise.reject(e),
                )
                .catch((t) => {
                    if (
                        !(t instanceof On) &&
                        this.requestParams.all().onNetworkError(t) !== !1 &&
                        Gt(t)
                    )
                        return (
                            e && this.requestParams.onPrefetchError(t),
                            Promise.reject(t)
                        );
                })
                .finally(() => {
                    (this.finish(),
                        e &&
                            this.response &&
                            this.requestParams.onPrefetchResponse(
                                this.response,
                            ));
                });
        }
        finish() {
            this.requestParams.wasCancelledAtAll() ||
                (this.requestParams.markAsFinished(), this.fireFinishEvents());
        }
        fireFinishEvents() {
            this.requestHasFinished ||
                ((this.requestHasFinished = !0),
                Kt(this.requestParams.all()),
                this.requestParams.onFinish());
        }
        cancel({ cancelled: e = !1, interrupted: t = !1 }) {
            this.requestHasFinished ||
                (this.cancelToken.abort(),
                this.requestParams.markAsCancelled({
                    cancelled: e,
                    interrupted: t,
                }),
                this.fireFinishEvents());
        }
        onProgress(e) {
            this.requestParams.data() instanceof FormData &&
                (Zt(e), this.requestParams.all().onProgress(e));
        }
        getHeaders() {
            let e = {
                    ...this.requestParams.headers(),
                    Accept: `text/html, application/xhtml+xml`,
                    'X-Requested-With': `XMLHttpRequest`,
                    'X-Inertia': !0,
                },
                t = P.get();
            t.version && (e[`X-Inertia-Version`] = t.version);
            let n = Object.entries(t.onceProps || {})
                .filter(([, e]) =>
                    N(t.props, e.prop) === void 0
                        ? !1
                        : !e.expiresAt || e.expiresAt > Date.now(),
                )
                .map(([e]) => e);
            return (
                n.length > 0 &&
                    (e[`X-Inertia-Except-Once-Props`] = n.join(`,`)),
                e
            );
        }
    },
    Gr = class {
        requests = [];
        maxConcurrent;
        interruptible;
        constructor({ maxConcurrent: e, interruptible: t }) {
            ((this.maxConcurrent = e), (this.interruptible = t));
        }
        send(e) {
            (this.requests.push(e),
                e.send().finally(() => {
                    this.requests = this.requests.filter((t) => t !== e);
                }));
        }
        interruptInFlight() {
            this.cancel({ interrupted: !0 }, !1);
        }
        cancelInFlight(e = {}) {
            let t =
                typeof e == `function`
                    ? e
                    : (t) => {
                          let { prefetch: n = !0, optimistic: r = !0 } = e;
                          return (
                              (n || !t.isPrefetch()) && (r || !t.isOptimistic())
                          );
                      };
            this.requests.filter(t).forEach((e) => e.cancel({ cancelled: !0 }));
        }
        cancel({ cancelled: e = !1, interrupted: t = !1 } = {}, n = !1) {
            (n || this.shouldCancel()) &&
                this.requests.shift()?.cancel({ cancelled: e, interrupted: t });
        }
        shouldCancel() {
            return (
                this.interruptible && this.requests.length >= this.maxConcurrent
            );
        }
        hasPendingOptimistic() {
            return this.requests.some((e) => e.isPendingOptimistic());
        }
    },
    Kr = () => {},
    qr = class {
        syncRequestStream = new Gr({ maxConcurrent: 1, interruptible: !0 });
        asyncRequestStream = new Gr({
            maxConcurrent: 1 / 0,
            interruptible: !1,
        });
        clientVisitQueue = new fr();
        pendingOptimisticCallback = void 0;
        init({
            initialPage: e,
            resolveComponent: t,
            swapComponent: n,
            onFlash: r,
        }) {
            (P.init({
                initialPage: e,
                resolveComponent: t,
                swapComponent: n,
                onFlash: r,
            }),
                br.handle(),
                _r.init(),
                _r.on(`missingHistoryItem`, () => {
                    typeof window < `u` &&
                        this.visit(window.location.href, {
                            preserveState: !0,
                            preserveScroll: !0,
                            replace: !0,
                        });
                }),
                _r.on(`loadDeferredProps`, (e) => {
                    this.loadDeferredProps(e);
                }),
                _r.on(`historyQuotaExceeded`, (e) => {
                    window.location.href = e;
                }));
        }
        optimistic(e) {
            return ((this.pendingOptimisticCallback = e), this);
        }
        get(e, t = {}, n = {}) {
            return this.visit(e, { ...n, method: `get`, data: t });
        }
        post(e, t = {}, n = {}) {
            return this.visit(e, {
                preserveState: !0,
                ...n,
                method: `post`,
                data: t,
            });
        }
        put(e, t = {}, n = {}) {
            return this.visit(e, {
                preserveState: !0,
                ...n,
                method: `put`,
                data: t,
            });
        }
        patch(e, t = {}, n = {}) {
            return this.visit(e, {
                preserveState: !0,
                ...n,
                method: `patch`,
                data: t,
            });
        }
        delete(e, t = {}) {
            return this.visit(e, { preserveState: !0, ...t, method: `delete` });
        }
        reload(e = {}) {
            return this.doReload(e);
        }
        doReload(e = {}) {
            if (typeof window < `u`)
                return this.visit(window.location.href, {
                    ...e,
                    preserveScroll: !0,
                    preserveState: !0,
                    async: !0,
                    headers: {
                        ...(e.headers || {}),
                        'Cache-Control': `no-cache`,
                    },
                });
        }
        remember(e, t = `default`) {
            F.remember(e, t);
        }
        restore(e = `default`) {
            return F.restore(e);
        }
        on(e, t) {
            return typeof window > `u` ? () => {} : _r.onGlobalEvent(e, t);
        }
        once(e, t) {
            if (typeof window > `u`) return () => {};
            let n = this.on(e, (e) => (n(), t(e)));
            return n;
        }
        hasPendingOptimistic() {
            return this.asyncRequestStream.hasPendingOptimistic();
        }
        get activePolls() {
            return Sr.count;
        }
        cancelAll({ async: e = !0, prefetch: t = !0, sync: n = !0 } = {}) {
            (e && this.asyncRequestStream.cancelInFlight({ prefetch: t }),
                n && this.syncRequestStream.cancelInFlight());
        }
        poll(e, t = {}, n = {}) {
            return Sr.add(
                e,
                ({ onStart: e, onFinish: n }) => {
                    let r = typeof t == `function` ? t() : t;
                    this.doReload({
                        poll: !0,
                        preserveErrors: !0,
                        ...r,
                        onCancelToken: (t) => {
                            (e(t.cancel), r.onCancelToken?.(t));
                        },
                        onFinish: (e) => {
                            (n(), r.onFinish?.(e));
                        },
                    });
                },
                {
                    autoStart: n.autoStart ?? !0,
                    background: n.background,
                    keepAlive: n.keepAlive ?? !1,
                    mode: n.mode,
                },
            );
        }
        visit(e, t = {}) {
            ((t.optimistic = t.optimistic ?? this.pendingOptimisticCallback),
                (this.pendingOptimisticCallback = void 0),
                t.optimistic && (t.async = t.async ?? !0));
            let n = this.getPendingVisit(e, {
                    ...t,
                    showProgress:
                        t.showProgress ?? (!t.async || !!t.optimistic),
                }),
                r = this.getVisitEvents(t);
            if (r.onBefore(n) === !1 || !Ut(n)) return;
            let i = nr(P.get().url);
            ((n.only.length > 0 || n.except.length > 0 || n.reset.length > 0
                ? cr(n.url, i)
                : sr(n.url, i)) ||
                this.asyncRequestStream.cancelInFlight(
                    (e) =>
                        !e.isPrefetch() &&
                        !e.isOptimistic() &&
                        cr(e.getUrl(), i),
                ),
                n.async || this.syncRequestStream.interruptInFlight());
            let a = null;
            (t.optimistic &&
                ((a = P.nextOptimisticId()),
                this.applyOptimisticUpdate(t.optimistic, r, a)),
                !P.isCleared() && !n.preserveUrl && Vn.save());
            let o = { ...n, ...r },
                s = () => {
                    let e = In.get(o);
                    e
                        ? (zi.reveal(e.inFlight), In.use(e, o))
                        : (zi.reveal(!0),
                          (n.async
                              ? this.asyncRequestStream
                              : this.syncRequestStream
                          ).send(Wr.create(o, P.get(), { optimisticId: a })));
                };
            (Array.isArray(n.component) &&
                (console.error(
                    `The "component" prop received an array of components (${n.component.join(`, `)}), but only a single component string is supported for instant visits. Pass an explicit component name instead.`,
                ),
                (n.component = null)),
                n.component
                    ? F.processQueue().then(() => {
                          this.performInstantSwap(n).then(() => {
                              ((o.preserveScroll = !0),
                                  (o.preserveState = !0),
                                  (o.replace = !0),
                                  (o.viewTransition = !1),
                                  s());
                          });
                      })
                    : s());
        }
        getCached(e, t = {}) {
            return In.findCached(this.getPrefetchParams(e, t));
        }
        flush(e, t = {}) {
            In.remove(this.getPrefetchParams(e, t));
        }
        flushAll() {
            In.removeAll();
        }
        flushByCacheTags(e) {
            In.removeByTags(Array.isArray(e) ? e : [e]);
        }
        getPrefetching(e, t = {}) {
            return In.findInFlight(this.getPrefetchParams(e, t));
        }
        prefetch(e, t = {}, n = {}) {
            if ((t.method ?? (lr(e) ? e.method : `get`)) !== `get`)
                throw Error(`Prefetch requests must use the GET method`);
            let r = this.getPendingVisit(e, {
                ...t,
                async: !0,
                showProgress: !1,
                prefetch: !0,
                viewTransition: !1,
            });
            if (
                r.url.origin + r.url.pathname + r.url.search ===
                window.location.origin +
                    window.location.pathname +
                    window.location.search
            )
                return;
            let i = this.getVisitEvents(t);
            if (i.onBefore(r) === !1 || !Ut(r)) return;
            (zi.hide(), this.asyncRequestStream.interruptInFlight());
            let a = { ...r, ...i };
            new Promise((e) => {
                let t = () => {
                    P.get() ? e() : setTimeout(t, 50);
                };
                t();
            }).then(() => {
                In.add(
                    a,
                    (e) => {
                        this.asyncRequestStream.send(Wr.create(e, P.get()));
                    },
                    {
                        cacheFor: Bt.get(`prefetch.cacheFor`),
                        cacheTags: [],
                        ...n,
                    },
                );
            });
        }
        clearHistory() {
            (F.clear(), In.removeAll());
        }
        decryptHistory() {
            return F.decrypt();
        }
        resolveComponent(e, t) {
            return P.resolve(e, t);
        }
        replace(e) {
            this.clientVisit(e, { replace: !0 });
        }
        replaceProp(e, t, n) {
            this.replace({
                preserveScroll: !0,
                preserveState: !0,
                props(n) {
                    return Nn(n, e, typeof t == `function` ? t(N(n, e), n) : t);
                },
                ...(n || {}),
            });
        }
        appendToProp(e, t, n) {
            this.replaceProp(
                e,
                (e, n) => {
                    let r = typeof t == `function` ? t(e, n) : t;
                    return (
                        Array.isArray(e) || (e = e === void 0 ? [] : [e]),
                        [...e, r]
                    );
                },
                n,
            );
        }
        prependToProp(e, t, n) {
            this.replaceProp(
                e,
                (e, n) => {
                    let r = typeof t == `function` ? t(e, n) : t;
                    return (
                        Array.isArray(e) || (e = e === void 0 ? [] : [e]),
                        [r, ...e]
                    );
                },
                n,
            );
        }
        push(e) {
            this.clientVisit(e);
        }
        flash(e, t) {
            let n = P.get().flash,
                r;
            if (typeof e == `function`) r = e(n);
            else if (typeof e == `string`) r = { ...n, [e]: t };
            else if (e && Object.keys(e).length) r = { ...n, ...e };
            else return;
            (P.setFlash(r), Object.keys(r).length && nn(r));
        }
        clientVisit(e, { replace: t = !1 } = {}) {
            this.clientVisitQueue.add(() =>
                this.performClientVisit(e, { replace: t }),
            );
        }
        performClientVisit(e, { replace: t = !1 } = {}) {
            let n = P.get(),
                r =
                    typeof e.props == `function`
                        ? Object.fromEntries(
                              Object.values(n.onceProps ?? {}).map((e) => [
                                  e.prop,
                                  N(n.props, e.prop),
                              ]),
                          )
                        : {},
                i =
                    typeof e.props == `function`
                        ? e.props(n.props, r)
                        : (e.props ?? n.props),
                a = typeof e.flash == `function` ? e.flash(n.flash) : e.flash,
                {
                    viewTransition: o,
                    onError: s,
                    onFinish: c,
                    onFlash: l,
                    onSuccess: u,
                    ...d
                } = e,
                f = { ...n, ...d, flash: a ?? {}, props: i },
                p = Rr.resolvePreserveOption(e.preserveScroll ?? !1, f),
                m = Rr.resolvePreserveOption(e.preserveState ?? !1, f),
                h = this.createVisitId();
            return P.set(f, {
                replace: t,
                preserveScroll: p,
                preserveState: m,
                viewTransition: o,
                visitId: h,
            })
                .then(() => {
                    Xt(P.get(), { replace: t, visitId: h });
                    let n = P.get().flash;
                    Object.keys(n).length > 0 && (nn(n), l?.(n));
                    let r = P.get().props.errors || {};
                    if (Object.keys(r).length === 0) {
                        u?.(P.get());
                        return;
                    }
                    let i = e.errorBag ? r[e.errorBag || ``] || {} : r;
                    s?.(i);
                })
                .finally(() => c?.(e));
        }
        performInstantSwap(e) {
            let t = P.get(),
                n = Object.fromEntries(
                    (t.sharedProps ?? [])
                        .filter((e) => e in t.props)
                        .map((e) => [e, t.props[e]]),
                ),
                r =
                    typeof e.pageProps == `function`
                        ? e.pageProps(A(t.props), A(n))
                        : e.pageProps,
                i = r === null ? { ...n } : { ...r },
                a = this.preserveOncePropsOnInstantVisit(t, i),
                o = {
                    component: e.component,
                    url: e.url.pathname + e.url.search + e.url.hash,
                    version: t.version,
                    props: { ...i, errors: {} },
                    flash: {},
                    rescuedProps: [],
                    clearHistory: !1,
                    encryptHistory: t.encryptHistory,
                    sharedProps: t.sharedProps,
                    onceProps: a,
                    rememberedState: {},
                };
            return P.set(o, {
                replace: e.replace,
                preserveScroll: Rr.resolvePreserveOption(e.preserveScroll, o),
                preserveState: !1,
                viewTransition: e.viewTransition,
                visitId: e.id,
            });
        }
        preserveOncePropsOnInstantVisit(e, t) {
            let n = {};
            return (
                Object.entries(e.onceProps ?? {}).forEach(([r, i]) => {
                    if (N(t, i.prop) !== void 0) return;
                    let a = N(e.props, i.prop);
                    a !== void 0 && (qe(t, i.prop, a), (n[r] = i));
                }),
                n
            );
        }
        getPrefetchParams(e, t) {
            return {
                ...this.getPendingVisit(e, {
                    ...t,
                    async: !0,
                    showProgress: !1,
                    prefetch: !0,
                    viewTransition: !1,
                }),
                ...this.getVisitEvents(t),
            };
        }
        createVisitId() {
            return yr();
        }
        getPendingVisit(e, t) {
            if (lr(e)) {
                let n = e;
                ((e = n.url), (t.method = t.method ?? n.method));
            }
            let n = Bt.get(`visitOptions`),
                r = (n && n(e.toString(), A(t))) || {},
                i = {
                    method: `get`,
                    data: {},
                    replace: !1,
                    preserveScroll: !1,
                    preserveState: !1,
                    only: [],
                    except: [],
                    headers: {},
                    errorBag: ``,
                    forceFormData: !1,
                    queryStringArrayFormat: `brackets`,
                    async: !1,
                    showProgress: !0,
                    fresh: !1,
                    reset: [],
                    preserveUrl: !1,
                    preserveErrors: !1,
                    prefetch: !1,
                    invalidateCacheTags: [],
                    viewTransition: !1,
                    component: null,
                    pageProps: null,
                    cached: !1,
                    ...An(t),
                    ...An(r),
                },
                [a, o] = rr(
                    e,
                    i.data,
                    i.method,
                    i.forceFormData,
                    i.queryStringArrayFormat,
                ),
                s = {
                    id: this.createVisitId(),
                    cancelled: !1,
                    completed: !1,
                    interrupted: !1,
                    ...i,
                    url: a,
                    data: o,
                };
            return (s.prefetch && (s.headers.Purpose = `prefetch`), s);
        }
        getVisitEvents(e) {
            return {
                onCancelToken: e.onCancelToken || Kr,
                onBefore: e.onBefore || Kr,
                onBeforeUpdate: e.onBeforeUpdate || Kr,
                onStart: e.onStart || Kr,
                onProgress: e.onProgress || Kr,
                onFinish: e.onFinish || Kr,
                onCancel: e.onCancel || Kr,
                onSuccess: e.onSuccess || Kr,
                onError: e.onError || Kr,
                onHttpException: e.onHttpException || Kr,
                onNetworkError: e.onNetworkError || Kr,
                onFlash: e.onFlash || Kr,
                onPrefetched: e.onPrefetched || Kr,
                onPrefetching: e.onPrefetching || Kr,
            };
        }
        applyOptimisticUpdate(e, t, n) {
            let r = P.get().props,
                i = e(A(r));
            if (!i) return;
            let a = [];
            for (let e of Object.keys(i)) M(r[e], i[e]) || a.push(e);
            if (a.length === 0) return;
            let o = P.get().component;
            for (let e of a) P.setBaseline(e, A(r[e]));
            (P.registerOptimistic(n, e), P.setPropsQuietly({ ...r, ...i }));
            let s = !0,
                c = t.onSuccess;
            t.onSuccess = (e) => ((s = !1), P.markOptimisticConfirmed(n), c(e));
            let l = t.onFinish;
            t.onFinish = (e) => {
                if ((P.unregisterOptimistic(n), s && P.get().component === o)) {
                    let e = P.replayOptimistics();
                    Object.keys(e).length > 0 &&
                        P.setPropsQuietly({ ...P.get().props, ...e });
                }
                return (
                    P.pendingOptimisticCount() === 0 &&
                        P.clearOptimisticState(),
                    l(e)
                );
            };
        }
        loadDeferredProps(e) {
            e &&
                Object.values(e).forEach((e) => {
                    this.doReload({
                        only: e,
                        deferredProps: !0,
                        preserveErrors: !0,
                    });
                });
        }
    },
    Jr = class {
        static createWayfinderCallback(...e) {
            return () =>
                e.length === 1
                    ? lr(e[0])
                        ? e[0]
                        : e[0]()
                    : {
                          method: typeof e[0] == `function` ? e[0]() : e[0],
                          url: typeof e[1] == `function` ? e[1]() : e[1],
                      };
        }
        static parseUseFormArguments(...e) {
            return e.length === 0
                ? { rememberKey: null, data: {}, precognitionEndpoint: null }
                : e.length === 1
                  ? {
                        rememberKey: null,
                        data: e[0],
                        precognitionEndpoint: null,
                    }
                  : e.length === 2
                    ? typeof e[0] == `string`
                        ? {
                              rememberKey: e[0],
                              data: e[1],
                              precognitionEndpoint: null,
                          }
                        : {
                              rememberKey: null,
                              data: e[1],
                              precognitionEndpoint:
                                  this.createWayfinderCallback(e[0]),
                          }
                    : {
                          rememberKey: null,
                          data: e[2],
                          precognitionEndpoint: this.createWayfinderCallback(
                              e[0],
                              e[1],
                          ),
                      };
        }
        static parseSubmitArguments(e, t) {
            return e.length === 3 || (e.length === 2 && typeof e[0] == `string`)
                ? { method: e[0], url: e[1], options: e[2] ?? {} }
                : lr(e[0])
                  ? { ...e[0], options: e[1] ?? {} }
                  : { ...t(), options: e[0] ?? {} };
        }
        static mergeHeadersForValidation(e, t, n) {
            let r = (e) => (
                (e.headers = { ...(n ?? {}), ...(e.headers ?? {}) }),
                e
            );
            return (
                e && typeof e == `object` && !(`target` in e)
                    ? (e = r(e))
                    : t && typeof t == `object`
                      ? (t = r(t))
                      : typeof e == `string`
                        ? (t = r(t ?? {}))
                        : (e = r(e ?? {})),
                [e, t]
            );
        }
    };
function Yr(e) {
    return e.includes(`.`)
        ? e
              .replace(/\\\./g, `__ESCAPED_DOT__`)
              .split(/(\[[^\]]*\])/)
              .filter(Boolean)
              .map((e) =>
                  e.startsWith(`[`) && e.endsWith(`]`)
                      ? e
                      : e
                            .split(`.`)
                            .reduce((e, t, n) => (n === 0 ? t : `${e}[${t}]`)),
              )
              .join(``)
              .replace(/__ESCAPED_DOT__/g, `.`)
        : e;
}
function Xr(e) {
    let t = [],
        n = /([^\[\]]+)|\[(\d*)\]/g,
        r;
    for (; (r = n.exec(e)) !== null;)
        r[1] === void 0
            ? r[2] !== void 0 && t.push(r[2] === `` ? `` : Number(r[2]))
            : t.push(r[1]);
    return t;
}
function Zr(e, t, n) {
    let r = e;
    for (let e = 0; e < t.length - 1; e++)
        (t[e] in r || (r[t[e]] = {}), (r = r[t[e]]));
    r[t[t.length - 1]] = n;
}
function Qr(e) {
    let t = Object.keys(e),
        n = t
            .filter((e) => /^\d+$/.test(e))
            .map(Number)
            .sort((e, t) => e - t);
    return (
        t.length === n.length &&
        n.length > 0 &&
        n[0] === 0 &&
        n.every((e, t) => e === t)
    );
}
function $r(e) {
    if (Array.isArray(e)) return e.map($r);
    if (typeof e != `object` || !e || Hn(e)) return e;
    if (Qr(e)) {
        let t = [];
        for (let n = 0; n < Object.keys(e).length; n++) t[n] = $r(e[n]);
        return t;
    }
    let t = {};
    for (let n in e) t[n] = $r(e[n]);
    return t;
}
function ei(e) {
    let t = {};
    for (let [n, r] of e.entries()) {
        if (r instanceof File && r.size === 0 && r.name === ``) continue;
        let e = Xr(Yr(n));
        if (e[e.length - 1] === ``) {
            let n = e.slice(0, -1),
                i = N(t, n);
            if (Array.isArray(i)) i.push(r);
            else if (i && typeof i == `object` && !Hn(i)) {
                let e = Object.keys(i)
                    .filter((e) => /^\d+$/.test(e))
                    .map(Number)
                    .sort((e, t) => e - t);
                qe(t, n, e.length > 0 ? [...e.map((e) => i[e]), r] : [r]);
            } else qe(t, n, [r]);
        } else Zr(t, e.map(String), r);
    }
    return $r(t);
}
var ti = `server`;
function ni(e, t) {
    return e.match(/\sdata-inertia(=|\s|>)/)
        ? e
        : e.replace(
              /^<([a-zA-Z][^\s/>]*)/,
              `<$1 data-inertia="server-head-${t}"`,
          );
}
function ri(e, t) {
    if (!t) return [];
    let n = typeof t == `function` ? t(e) : e.props[t === !0 ? `head` : t];
    return Array.isArray(n)
        ? n
              .map((e) => (typeof e == `string` ? e.trim() : e))
              .filter((e) => typeof e == `string` && e.length > 0)
              .map(ni)
        : [];
}
var ii = {
    buildDOMElement(e) {
        let t = document.createElement(`template`);
        t.innerHTML = e;
        let n = t.content.firstChild;
        if (!e.startsWith(`<script `)) return n;
        let r = document.createElement(`script`);
        return (
            (r.innerHTML = n.innerHTML),
            n.getAttributeNames().forEach((e) => {
                r.setAttribute(e, n.getAttribute(e) || ``);
            }),
            r
        );
    },
    isInertiaManagedElement(e) {
        return (
            e.nodeType === Node.ELEMENT_NODE &&
            e.getAttribute(`data-inertia`) !== null
        );
    },
    findMatchingElementIndex(e, t) {
        let n = e.getAttribute(`data-inertia`);
        return n === null
            ? -1
            : t.findIndex((e) => e.getAttribute(`data-inertia`) === n);
    },
    update: Vt(function (e) {
        let t = e.map((e) => this.buildDOMElement(e)),
            n = Array.from(document.head.childNodes).filter((e) =>
                this.isInertiaManagedElement(e),
            );
        (t.some((e) => e instanceof HTMLTitleElement) &&
            document.head
                .querySelectorAll(`title:not([data-inertia])`)
                .forEach((e) => e.remove()),
            n.forEach((e) => {
                let n = this.findMatchingElementIndex(e, t);
                if (n === -1) {
                    e.remove();
                    return;
                }
                let r = t.splice(n, 1)[0];
                r && !e.isEqualNode(r) && e.replaceWith(r);
            }),
            t.forEach((e) => {
                document.head.appendChild(e);
            }));
    }, 1),
};
function ai(e, t, n, r = []) {
    let i = r.length ? { [ti]: r } : {},
        a = 0;
    function o() {
        let e = (a += 1);
        return ((i[e] = []), e.toString());
    }
    function s(e) {
        e !== null && Object.keys(i).indexOf(e) !== -1 && (delete i[e], f());
    }
    function c(e) {
        Object.keys(i).indexOf(e) === -1 && (i[e] = []);
    }
    function l(e, t = []) {
        (e !== null && Object.keys(i).indexOf(e) > -1 && (i[e] = t), f());
    }
    function u(e = []) {
        (e.length ? (i[ti] = e) : delete i[ti], f());
    }
    function d() {
        let e = t(``),
            n = i[ti] || [],
            r = Object.keys(i)
                .filter((e) => e !== ti)
                .flatMap((e) => i[e]),
            a = {
                ...(e ? { title: `<title data-inertia="">${e}</title>` } : {}),
            },
            o = n.concat(r).reduce((e, n) => {
                if (n.indexOf(`<`) === -1) return e;
                if (n.indexOf(`<title `) === 0) {
                    let r = n.match(/(<title [^>]+>)(.*?)(<\/title>)/s);
                    return ((e.title = r ? `${r[1]}${t(r[2])}${r[3]}` : n), e);
                }
                let r = n.match(/ data-inertia=(["'])[^"']+\1/);
                return (r ? (e[r[0]] = n) : (e[Object.keys(e).length] = n), e);
            }, a);
        return Object.values(o);
    }
    function f() {
        e ? n(d()) : ii.update(d());
    }
    return (
        f(),
        {
            forceUpdate: f,
            updateServerHead: u,
            createProvider: function () {
                let e = o();
                return {
                    reconnect: () => c(e),
                    update: (t) => l(e, t),
                    disconnect: () => s(e),
                };
            },
        }
    );
}
new fr();
function oi() {
    let e = {},
        t = {},
        n = { shared: e, named: t },
        r = new Set(),
        i = !1,
        a = () => {
            n = { shared: e, named: t };
        },
        o = () => {
            i ||
                ((i = !0),
                queueMicrotask(() => {
                    ((i = !1), r.forEach((e) => e()));
                }));
        };
    return {
        set(t) {
            let n = { ...e, ...t };
            M(e, n) || ((e = n), a(), o());
        },
        setFor(e, n) {
            let r = t[e] || {},
                i = { ...r, ...n };
            M(r, i) || ((t = { ...t, [e]: i }), a(), o());
        },
        reset() {
            ((e = {}), (t = {}), a(), o());
        },
        subscribe(e) {
            return (r.add(e), () => r.delete(e));
        },
        get: () => n,
    };
}
function si(e) {
    return typeof e == `object` && !!e && !Array.isArray(e);
}
function ci(e) {
    return si(e) && `component` in e;
}
function li(e, t) {
    return `component` in e && t(e.component);
}
function ui(e, t) {
    return !si(e) || t(e) || li(e, t)
        ? !1
        : Object.values(e).every(
              (e) =>
                  t(e) ||
                  (Array.isArray(e) && t(e[0])) ||
                  (ci(e) && t(e.component)),
          );
}
function di(e, t) {
    return si(e) && !t(e) && !li(e, t) && !ui(e, t);
}
function fi(e, t) {
    if (di(e, t)) return !0;
    if (!si(e) || t(e) || li(e, t)) return !1;
    let n = Object.values(e);
    return n.length > 0 && n.every((e) => typeof e == `function`);
}
function pi(e, t) {
    return (
        Array.isArray(e) && e.length === 2 && t(e[0]) && si(e[1]) && !t(e[1])
    );
}
function mi(e, t) {
    if (Array.isArray(e) && t(e[0]))
        return { component: e[0], props: e[1] ?? {} };
    if (ci(e) && t(e.component))
        return { component: e.component, props: e.props ?? {} };
    if (t(e)) return { component: e, props: {} };
    throw Error(`Invalid layout definition: received ${typeof e}`);
}
function hi(e, t, n) {
    return !e || (n && n(e))
        ? []
        : ui(e, t)
          ? Object.entries(e).map(([e, n]) => ({ ...mi(n, t), name: e }))
          : pi(e, t)
            ? [{ component: e[0], props: e[1] ?? {} }]
            : Array.isArray(e)
              ? e.map((e) => mi(e, t))
              : ci(e) && t(e.component)
                ? [{ component: e.component, props: e.props ?? {} }]
                : t(e)
                  ? [{ component: e, props: {} }]
                  : [];
}
function gi(e) {
    return (
        (e.target instanceof HTMLElement && e.target.isContentEditable) ||
        e.defaultPrevented
    );
}
function _i(e) {
    let t = e.currentTarget.tagName.toLowerCase() === `a`,
        n = t ? e.currentTarget.target : ``;
    return !(
        gi(e) ||
        (t && e.altKey) ||
        (t && e.ctrlKey) ||
        (t && e.metaKey) ||
        (t && e.shiftKey) ||
        (t && n !== `` && n !== `_self`) ||
        (t && `button` in e && e.button !== 0)
    );
}
function vi(e) {
    let t = e.currentTarget.tagName.toLowerCase() === `button`;
    return !gi(e) && (e.key === `Enter` || (t && e.key === ` `));
}
var yi = `nprogress`,
    bi,
    I,
    xi = {
        minimum: 0.08,
        easing: `linear`,
        speed: 200,
        trickle: !0,
        trickleSpeed: 200,
        showSpinner: !0,
        barSelector: `.bar, [role="bar"]`,
        spinnerSelector: `.spinner, [role="spinner"]`,
        parent: `body`,
        color: `#29d`,
        includeCSS: !0,
        popover: null,
        template: `<div class="bar"><div class="peg"></div></div><div class="spinner"><div class="spinner-icon"></div></div>`,
    },
    Si = null,
    Ci = !1,
    wi = (e) => {
        (Object.assign(xi, e),
            (bi = xi.popover ?? `popover` in HTMLElement.prototype),
            xi.includeCSS && Li(xi.color),
            (I = document.createElement(`div`)),
            (I.id = yi),
            I.setAttribute(`aria-hidden`, `true`),
            (I.innerHTML = xi.template),
            bi && (I.popover = `manual`));
    },
    Ti = (e) => {
        let t = Ei();
        ((e = Pi(e, xi.minimum, 1)), (Si = e === 1 ? null : e));
        let n = Ai(!t),
            r = n.querySelector(xi.barSelector),
            i = xi.speed,
            a = xi.easing;
        (n.offsetWidth,
            Ii((t) => {
                let o = {
                    transition: `all ${i}ms ${a}`,
                    transform: `translate3d(${Fi(e)}%,0,0)`,
                };
                for (let e in o) r.style[e] = o[e];
                if (e !== 1) return setTimeout(t, i);
                ((n.style.transition = `none`),
                    (n.style.opacity = `1`),
                    n.offsetWidth,
                    setTimeout(() => {
                        ((n.style.transition = `all ${i}ms linear`),
                            (n.style.opacity = `0`),
                            setTimeout(() => {
                                (Mi(),
                                    (n.style.transition = ``),
                                    (n.style.opacity = ``),
                                    t());
                            }, i));
                    }, i));
            }));
    },
    Ei = () => typeof Si == `number`,
    Di = () => {
        Si || Ti(0);
        let e = function () {
            setTimeout(function () {
                Si && (ki(), e());
            }, xi.trickleSpeed);
        };
        xi.trickle && e();
    },
    Oi = (e) => {
        (e || Si) && (ki(0.3 + 0.5 * Math.random()), Ti(1));
    },
    ki = (e) => {
        let t = Si;
        if (t === null) return Di();
        if (!(t > 1))
            return (
                (e =
                    typeof e == `number`
                        ? e
                        : (() => {
                              let e = {
                                  0.1: [0, 0.2],
                                  0.04: [0.2, 0.5],
                                  0.02: [0.5, 0.8],
                                  0.005: [0.8, 0.99],
                              };
                              for (let n in e)
                                  if (t >= e[n][0] && t < e[n][1])
                                      return parseFloat(n);
                              return 0;
                          })()),
                Ti(Pi(t + e, 0, 0.994))
            );
    },
    Ai = (e) => {
        if (Ni()) return document.getElementById(yi);
        document.documentElement.classList.add(`${yi}-busy`);
        let t = I.querySelector(xi.barSelector),
            n = e ? `-100` : Fi(Si || 0);
        if (
            ((t.style.transition = `all 0 linear`),
            (t.style.transform = `translate3d(${n}%,0,0)`),
            xi.showSpinner || I.querySelector(xi.spinnerSelector)?.remove(),
            bi)
        )
            (document.body.appendChild(I), Ci || I.showPopover());
        else {
            let e = ji();
            (e !== document.body && e.classList.add(`${yi}-custom-parent`),
                e.appendChild(I),
                Ci && (I.style.display = `none`));
        }
        return I;
    },
    ji = () => document.querySelector(xi.parent),
    Mi = () => {
        if (
            (document.documentElement.classList.remove(`${yi}-busy`),
            bi && I?.isConnected)
        )
            try {
                I.hidePopover();
            } catch {}
        (bi || ji().classList.remove(`${yi}-custom-parent`), I?.remove());
    },
    Ni = () => document.getElementById(yi) !== null;
function Pi(e, t, n) {
    return e < t ? t : e > n ? n : e;
}
var Fi = (e) => (-1 + e) * 100,
    Ii = (() => {
        let e = [],
            t = () => {
                let n = e.shift();
                n && n(t);
            };
        return (n) => {
            (e.push(n), e.length === 1 && t());
        };
    })(),
    Li = (e) => {
        let t = document.createElement(`style`),
            n = Bt.get(`nonce`);
        (n && (t.nonce = n),
            (t.textContent = `
    #${yi} {
      pointer-events: none;
      background: none;
      border: none;
      margin: 0;
      padding: 0;
      overflow: visible;
      inset: unset;
      width: 100%;
      height: 0;
      position: fixed;
      top: 0;
      left: 0;
    }

    #${yi}::backdrop {
      display: none;
    }

    #${yi} .bar {
      background: ${e};

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    #${yi} .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${e}, 0 0 5px ${e};
      opacity: 1.0;

      transform: rotate(3deg) translate(0px, -4px);
    }

    #${yi} .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    #${yi} .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: ${e};
      border-left-color: ${e};
      border-radius: 50%;

      animation: ${yi}-spinner 400ms linear infinite;
    }

    .${yi}-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .${yi}-custom-parent #${yi} .spinner,
    .${yi}-custom-parent #${yi} .bar {
      position: absolute;
    }

    @keyframes ${yi}-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `),
            document.head.appendChild(t));
    },
    Ri = {
        configure: wi,
        isStarted: Ei,
        done: Oi,
        set: Ti,
        remove: Mi,
        start: Di,
        status: Si,
        show: () => {
            if (((Ci = !1), I?.isConnected)) {
                if (bi)
                    try {
                        I.showPopover();
                    } catch {}
                else I.style.display = ``;
            }
        },
        hide: () => {
            if (((Ci = !0), I?.isConnected)) {
                if (bi)
                    try {
                        I.hidePopover();
                    } catch {}
                else I.style.display = `none`;
            }
        },
    },
    zi = new (class {
        hideCount = 0;
        start() {
            Ri.start();
        }
        reveal(e = !1) {
            ((this.hideCount = Math.max(0, this.hideCount - 1)),
                (e || this.hideCount === 0) && Ri.show());
        }
        hide() {
            (this.hideCount++, Ri.hide());
        }
        set(e) {
            Ri.set(Math.max(0, Math.min(1, e)));
        }
        finish() {
            Ri.done();
        }
        reset() {
            Ri.set(0);
        }
        remove() {
            (Ri.done(), Ri.remove());
        }
        isStarted() {
            return Ri.isStarted();
        }
        getStatus() {
            return Ri.status;
        }
    })();
function Bi(e) {
    (document.addEventListener(`inertia:start`, (t) => Vi(t, e)),
        document.addEventListener(`inertia:progress`, Hi));
}
function Vi(e, t) {
    e.detail.visit.showProgress || zi.hide();
    let n = setTimeout(() => zi.start(), t);
    document.addEventListener(`inertia:finish`, (e) => Ui(e, n), { once: !0 });
}
function Hi(e) {
    zi.isStarted() &&
        e.detail.progress?.percentage &&
        zi.set(
            Math.max(
                zi.getStatus(),
                (e.detail.progress.percentage / 100) * 0.9,
            ),
        );
}
function Ui(e, t) {
    (clearTimeout(t),
        zi.isStarted() &&
            (e.detail.visit.completed
                ? zi.finish()
                : e.detail.visit.interrupted
                  ? zi.reset()
                  : e.detail.visit.cancelled && zi.remove()));
}
function Wi({
    delay: e = 250,
    color: t = `#29d`,
    includeCSS: n = !0,
    showSpinner: r = !1,
    popover: i = null,
} = {}) {
    (Bi(e),
        Ri.configure({ showSpinner: r, includeCSS: n, color: t, popover: i }));
}
var Gi = Symbol(`FormComponentReset`);
function Ki(e) {
    return (
        e instanceof HTMLInputElement ||
        e instanceof HTMLSelectElement ||
        e instanceof HTMLTextAreaElement
    );
}
function qi(e, t) {
    let n = e.value,
        r = e.checked;
    switch (e.type.toLowerCase()) {
        case `checkbox`:
            e.checked = t.includes(e.value);
            break;
        case `radio`:
            e.checked = t[0] === e.value;
            break;
        case `file`:
            e.value = ``;
            break;
        case `button`:
        case `submit`:
        case `reset`:
        case `image`:
            break;
        default:
            e.value = t[0] !== null && t[0] !== void 0 ? String(t[0]) : ``;
    }
    return e.value !== n || e.checked !== r;
}
function Ji(e, t) {
    let n = e.value,
        r = Array.from(e.selectedOptions).map((e) => e.value);
    if (e.multiple) {
        let n = t.map((e) => String(e));
        Array.from(e.options).forEach((e) => {
            e.selected = n.includes(e.value);
        });
    } else e.value = t[0] === void 0 ? `` : String(t[0]);
    let i = Array.from(e.selectedOptions).map((e) => e.value);
    return e.multiple
        ? JSON.stringify(r.sort()) !== JSON.stringify(i.sort())
        : e.value !== n;
}
function Yi(e, t) {
    if (e.disabled) {
        if (e instanceof HTMLInputElement) {
            let t = e.value,
                n = e.checked;
            switch (e.type.toLowerCase()) {
                case `checkbox`:
                case `radio`:
                    return ((e.checked = e.defaultChecked), e.checked !== n);
                case `file`:
                    return ((e.value = ``), t !== ``);
                case `button`:
                case `submit`:
                case `reset`:
                case `image`:
                    return !1;
                default:
                    return ((e.value = e.defaultValue), e.value !== t);
            }
        } else if (e instanceof HTMLSelectElement) {
            let t = Array.from(e.selectedOptions).map((e) => e.value);
            Array.from(e.options).forEach((e) => {
                e.selected = e.defaultSelected;
            });
            let n = Array.from(e.selectedOptions).map((e) => e.value);
            return JSON.stringify(t.sort()) !== JSON.stringify(n.sort());
        } else if (e instanceof HTMLTextAreaElement) {
            let t = e.value;
            return ((e.value = e.defaultValue), e.value !== t);
        }
        return !1;
    }
    if (e instanceof HTMLInputElement) return qi(e, t);
    if (e instanceof HTMLSelectElement) return Ji(e, t);
    if (e instanceof HTMLTextAreaElement) {
        let n = e.value;
        return ((e.value = t[0] === void 0 ? `` : String(t[0])), e.value !== n);
    }
    return !1;
}
function Xi(e, t) {
    let n = !1;
    return (
        e instanceof RadioNodeList || e instanceof HTMLCollection
            ? Array.from(e).forEach((e, r) => {
                  e instanceof Element &&
                      Ki(e) &&
                      (e instanceof HTMLInputElement &&
                      [`checkbox`, `radio`].includes(e.type.toLowerCase())
                          ? Yi(e, t) && (n = !0)
                          : Yi(
                                e,
                                t[r] === void 0
                                    ? [t[0] ?? null].filter(Boolean)
                                    : [t[r]],
                            ) && (n = !0));
              })
            : Ki(e) && (n = Yi(e, t)),
        n
    );
}
function Zi(e, t, n) {
    if (!e) return;
    let r = !n || n.length === 0;
    if (r) {
        let r = new FormData(e),
            i = Array.from(e.elements)
                .map((e) => (Ki(e) ? e.name : ``))
                .filter(Boolean);
        n = [...new Set([...t.keys(), ...r.keys(), ...i])];
    }
    let i = !1;
    (n.forEach((n) => {
        let r = e.elements.namedItem(n);
        r && Xi(r, t.getAll(n)) && (i = !0);
    }),
        i &&
            r &&
            e.dispatchEvent(
                new CustomEvent(`reset`, {
                    bubbles: !0,
                    cancelable: !0,
                    detail: { [Gi]: !0 },
                }),
            ));
}
function Qi(e, t, n) {
    return `<script data-page="${e}" type="application/json">${dn(t).replace(/\//g, `\\/`).replace(/</g, `\\u003c`)}<\/script><div data-server-rendered="true" id="${e}">${n}</div>`;
}
var L = new qr();
function $i(e) {
    let t = Object.create(null);
    for (let n of e.split(`,`)) t[n] = 1;
    return (e) => e in t;
}
var R = {},
    ea = [],
    ta = () => {},
    na = () => !1,
    ra = (e) =>
        e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    ia = (e) => e.startsWith(`onUpdate:`),
    z = Object.assign,
    aa = (e, t) => {
        let n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
    },
    oa = Object.prototype.hasOwnProperty,
    B = (e, t) => oa.call(e, t),
    V = Array.isArray,
    sa = (e) => ma(e) === `[object Map]`,
    ca = (e) => ma(e) === `[object Set]`,
    la = (e) => ma(e) === `[object Date]`,
    ua = (e) => ma(e) === `[object RegExp]`,
    H = (e) => typeof e == `function`,
    U = (e) => typeof e == `string`,
    da = (e) => typeof e == `symbol`,
    W = (e) => typeof e == `object` && !!e,
    fa = (e) => (W(e) || H(e)) && H(e.then) && H(e.catch),
    pa = Object.prototype.toString,
    ma = (e) => pa.call(e),
    ha = (e) => ma(e).slice(8, -1),
    ga = (e) => ma(e) === `[object Object]`,
    _a = (e) =>
        U(e) && e !== `NaN` && e[0] !== `-` && `` + parseInt(e, 10) === e,
    va = $i(
        `,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`,
    ),
    ya = (e) => {
        let t = Object.create(null);
        return (n) => t[n] || (t[n] = e(n));
    },
    ba = /-\w/g,
    xa = ya((e) => e.replace(ba, (e) => e.slice(1).toUpperCase())),
    Sa = /\B([A-Z])/g,
    Ca = ya((e) => e.replace(Sa, `-$1`).toLowerCase()),
    wa = ya((e) => e.charAt(0).toUpperCase() + e.slice(1)),
    Ta = ya((e) => (e ? `on${wa(e)}` : ``)),
    Ea = (e, t) => !Object.is(e, t),
    Da = (e, ...t) => {
        for (let n = 0; n < e.length; n++) e[n](...t);
    },
    Oa = (e, t, n, r = !1) => {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            writable: r,
            value: n,
        });
    },
    ka = (e) => {
        let t = parseFloat(e);
        return isNaN(t) ? e : t;
    },
    Aa = (e) => {
        let t = U(e) ? Number(e) : NaN;
        return isNaN(t) ? e : t;
    },
    ja,
    Ma = () =>
        (ja ||=
            typeof globalThis < `u`
                ? globalThis
                : typeof self < `u`
                  ? self
                  : typeof window < `u`
                    ? window
                    : typeof global < `u`
                      ? global
                      : {}),
    Na = $i(
        `Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol`,
    );
function Pa(e) {
    if (V(e)) {
        let t = {};
        for (let n = 0; n < e.length; n++) {
            let r = e[n],
                i = U(r) ? Ra(r) : Pa(r);
            if (i) for (let e in i) t[e] = i[e];
        }
        return t;
    }
    if (U(e) || W(e)) return e;
}
var Fa = /;(?![^(]*\))/g,
    Ia = /:([^]+)/,
    La = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function Ra(e) {
    let t = {};
    return (
        e
            .replace(La, (e) => (e.startsWith(`/*`) ? `` : e))
            .split(Fa)
            .forEach((e) => {
                if (e) {
                    let n = e.split(Ia);
                    n.length > 1 && (t[n[0].trim()] = n[1].trim());
                }
            }),
        t
    );
}
function za(e) {
    let t = ``;
    if (U(e)) t = e;
    else if (V(e))
        for (let n = 0; n < e.length; n++) {
            let r = za(e[n]);
            r && (t += r + ` `);
        }
    else if (W(e)) for (let n in e) e[n] && (t += n + ` `);
    return t.trim();
}
function Ba(e) {
    if (!e) return null;
    let { class: t, style: n } = e;
    return (t && !U(t) && (e.class = za(t)), n && (e.style = Pa(n)), e);
}
var Va = $i(
    `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly`,
);
function Ha(e) {
    return !!e || e === ``;
}
function Ua(e, t, n) {
    if (e.length !== t.length) return !1;
    let r = !0;
    for (let i = 0; r && i < e.length; i++) r = qa(e[i], t[i], n);
    return r;
}
function Wa(e, t, n) {
    if (e.size !== t.size) return !1;
    let r = Array.from(t),
        i = new Uint8Array(r.length);
    for (let t of e) {
        let e = -1;
        for (let a = 0; a < r.length; a++)
            if (!i[a] && qa(t, r[a], n)) {
                e = a;
                break;
            }
        if (e < 0) return !1;
        i[e] = 1;
    }
    return !0;
}
function Ga(e, t, n) {
    let r = sa(e),
        i = sa(t);
    if (r || i || ((r = ca(e)), (i = ca(t)), r || i))
        return r && i ? Wa(e, t, n) : !1;
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (let r in e) {
        let i = e.hasOwnProperty(r),
            a = t.hasOwnProperty(r);
        if ((i && !a) || (!i && a) || !qa(e[r], t[r], n)) return !1;
    }
    return String(e) === String(t);
}
function Ka(e, t, n, r) {
    n ||= [new Map(), new Map()];
    let [i, a] = n;
    if (i.has(e) || a.has(t)) return i.get(e) === t && a.get(t) === e;
    (i.set(e, t), a.set(t, e));
    let o = r(e, t, n);
    return (i.delete(e), a.delete(t), o);
}
function qa(e, t, n) {
    if (e === t) return !0;
    let r = la(e),
        i = la(t);
    return r || i
        ? r && i
            ? e.getTime() === t.getTime()
            : !1
        : ((r = da(e)),
          (i = da(t)),
          r || i
              ? e === t
              : ((r = V(e)),
                (i = V(t)),
                r || i
                    ? r && i
                        ? Ka(e, t, n, Ua)
                        : !1
                    : ((r = W(e)),
                      (i = W(t)),
                      r || i
                          ? !r || !i
                              ? !1
                              : Ka(e, t, n, Ga)
                          : String(e) === String(t))));
}
function Ja(e, t) {
    return e.findIndex((e) => qa(e, t));
}
var Ya = (e) => !!(e && e.__v_isRef === !0),
    Xa = (e) =>
        U(e)
            ? e
            : e == null
              ? ``
              : V(e) || (W(e) && (e.toString === pa || !H(e.toString)))
                ? Ya(e)
                    ? Xa(e.value)
                    : JSON.stringify(e, Za, 2)
                : String(e),
    Za = (e, t) =>
        Ya(t)
            ? Za(e, t.value)
            : sa(t)
              ? {
                    [`Map(${t.size})`]: [...t.entries()].reduce(
                        (e, [t, n], r) => ((e[Qa(t, r) + ` =>`] = n), e),
                        {},
                    ),
                }
              : ca(t)
                ? { [`Set(${t.size})`]: [...t.values()].map((e) => Qa(e)) }
                : da(t)
                  ? Qa(t)
                  : W(t) && !V(t) && !ga(t)
                    ? String(t)
                    : t,
    Qa = (e, t = ``) => (da(e) ? `Symbol(${e.description ?? t})` : e);
function $a(e) {
    return e == null
        ? `initial`
        : typeof e == `string`
          ? e === ``
              ? ` `
              : e
          : String(e);
}
var eo,
    to = class {
        constructor(e = !1) {
            ((this.detached = e),
                (this._active = !0),
                (this._on = 0),
                (this.effects = []),
                (this.cleanups = []),
                (this._isPaused = !1),
                (this._warnOnRun = !0),
                (this.__v_skip = !0),
                !e &&
                    eo &&
                    (eo.active
                        ? ((this.parent = eo),
                          (this.index =
                              (eo.scopes || (eo.scopes = [])).push(this) - 1))
                        : ((this._active = !1), (this._warnOnRun = !1))));
        }
        get active() {
            return this._active;
        }
        pause() {
            if (this._active) {
                this._isPaused = !0;
                let e, t;
                if (this.scopes) {
                    let n = this.scopes.slice();
                    for (e = 0, t = n.length; e < t; e++) n[e].pause();
                }
                for (e = 0, t = this.effects.length; e < t; e++)
                    this.effects[e].pause();
            }
        }
        resume() {
            if (this._active && this._isPaused) {
                this._isPaused = !1;
                let e, t;
                if (this.scopes) {
                    let n = this.scopes.slice();
                    for (e = 0, t = n.length; e < t; e++) n[e].resume();
                }
                let n = this.effects.slice();
                for (e = 0, t = n.length; e < t; e++) n[e].resume();
            }
        }
        run(e) {
            if (this._active) {
                let t = eo;
                try {
                    return ((eo = this), e());
                } finally {
                    eo = t;
                }
            }
        }
        on() {
            ++this._on === 1 && ((this.prevScope = eo), (eo = this));
        }
        off() {
            if (this._on > 0 && --this._on === 0) {
                if (eo === this) eo = this.prevScope;
                else {
                    let e = eo;
                    for (; e;) {
                        if (e.prevScope === this) {
                            e.prevScope = this.prevScope;
                            break;
                        }
                        e = e.prevScope;
                    }
                }
                this.prevScope = void 0;
            }
        }
        stop(e) {
            if (this._active) {
                this._active = !1;
                let t, n;
                for (t = 0, n = this.effects.length; t < n; t++)
                    this.effects[t].stop();
                for (
                    this.effects.length = 0, t = 0, n = this.cleanups.length;
                    t < n;
                    t++
                )
                    this.cleanups[t]();
                if (((this.cleanups.length = 0), this.scopes)) {
                    let e = this.scopes.slice();
                    for (t = 0, n = e.length; t < n; t++) e[t].stop(!0);
                    this.scopes.length = 0;
                }
                if (!this.detached && this.parent && !e) {
                    let e = this.parent.scopes.pop();
                    e &&
                        e !== this &&
                        ((this.parent.scopes[this.index] = e),
                        (e.index = this.index));
                }
                this.parent = void 0;
            }
        }
    };
function no(e) {
    return new to(e);
}
function ro() {
    return eo;
}
function io(e, t = !1) {
    eo && eo.cleanups.push(e);
}
var G,
    ao = new WeakSet(),
    oo = class {
        constructor(e) {
            ((this.fn = e),
                (this.deps = void 0),
                (this.depsTail = void 0),
                (this.flags = 5),
                (this.next = void 0),
                (this.cleanup = void 0),
                (this.scheduler = void 0),
                eo && (eo.active ? eo.effects.push(this) : (this.flags &= -2)));
        }
        pause() {
            this.flags |= 64;
        }
        resume() {
            this.flags & 64 &&
                ((this.flags &= -65),
                ao.has(this) && (ao.delete(this), this.trigger()));
        }
        notify() {
            (this.flags & 2 && !(this.flags & 32)) ||
                this.flags & 8 ||
                uo(this);
        }
        run() {
            if (!(this.flags & 1)) return this.fn();
            ((this.flags |= 2), Eo(this), mo(this));
            let e = G,
                t = So;
            ((G = this), (So = !0));
            try {
                return this.fn();
            } finally {
                (ho(this), (G = e), (So = t), (this.flags &= -3));
            }
        }
        stop() {
            if (this.flags & 1) {
                for (let e = this.deps; e; e = e.nextDep) vo(e);
                ((this.deps = this.depsTail = void 0),
                    Eo(this),
                    this.onStop && this.onStop(),
                    (this.flags &= -2));
            }
        }
        trigger() {
            this.flags & 64
                ? ao.add(this)
                : this.scheduler
                  ? this.scheduler()
                  : this.runIfDirty();
        }
        runIfDirty() {
            go(this) && this.run();
        }
        get dirty() {
            return go(this);
        }
    },
    so = 0,
    co,
    lo;
function uo(e, t = !1) {
    ((e.flags |= 8), t ? ((e.next = lo), (lo = e)) : ((e.next = co), (co = e)));
}
function fo() {
    so++;
}
function po() {
    if (--so > 0) return;
    if (lo) {
        let e = lo;
        for (lo = void 0; e;) {
            let t = e.next;
            ((e.next = void 0), (e.flags &= -9), (e = t));
        }
    }
    let e;
    for (; co;) {
        let t = co;
        for (co = void 0; t;) {
            let n = t.next;
            if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
                try {
                    t.trigger();
                } catch (t) {
                    e ||= t;
                }
            t = n;
        }
    }
    if (e) throw e;
}
function mo(e) {
    for (let t = e.deps; t; t = t.nextDep)
        ((t.version = -1),
            (t.prevActiveLink = t.dep.activeLink),
            (t.dep.activeLink = t));
}
function ho(e) {
    let t,
        n = e.depsTail,
        r = n;
    for (; r;) {
        let e = r.prevDep;
        (r.version === -1 ? (r === n && (n = e), vo(r), yo(r)) : (t = r),
            (r.dep.activeLink = r.prevActiveLink),
            (r.prevActiveLink = void 0),
            (r = e));
    }
    ((e.deps = t), (e.depsTail = n));
}
function go(e) {
    for (let t = e.deps; t; t = t.nextDep)
        if (
            t.dep.version !== t.version ||
            (t.dep.computed &&
                (_o(t.dep.computed) || t.dep.version !== t.version))
        )
            return !0;
    return !!e._dirty;
}
function _o(e) {
    if (
        (e.flags & 4 && !(e.flags & 16)) ||
        ((e.flags &= -17), e.globalVersion === Do) ||
        ((e.globalVersion = Do),
        !e.isSSR && e.flags & 128 && ((!e.deps && !e._dirty) || !go(e)))
    )
        return;
    e.flags |= 2;
    let t = e.dep,
        n = G,
        r = So;
    ((G = e), (So = !0));
    try {
        mo(e);
        let n = e.fn(e._value);
        (t.version === 0 || Ea(n, e._value)) &&
            ((e.flags |= 128), (e._value = n), t.version++);
    } catch (e) {
        throw (t.version++, e);
    } finally {
        ((G = n), (So = r), ho(e), (e.flags &= -3));
    }
}
function vo(e, t = !1) {
    let { dep: n, prevSub: r, nextSub: i } = e;
    if (
        (r && ((r.nextSub = i), (e.prevSub = void 0)),
        i && ((i.prevSub = r), (e.nextSub = void 0)),
        n.subs === e && ((n.subs = r), !r && n.computed))
    ) {
        n.computed.flags &= -5;
        for (let e = n.computed.deps; e; e = e.nextDep) vo(e, !0);
    }
    !t && !--n.sc && n.map && n.map.delete(n.key);
}
function yo(e) {
    let { prevDep: t, nextDep: n } = e;
    (t && ((t.nextDep = n), (e.prevDep = void 0)),
        n && ((n.prevDep = t), (e.nextDep = void 0)));
}
function bo(e, t) {
    e.effect instanceof oo && (e = e.effect.fn);
    let n = new oo(e);
    t && z(n, t);
    try {
        n.run();
    } catch (e) {
        throw (n.stop(), e);
    }
    let r = n.run.bind(n);
    return ((r.effect = n), r);
}
function xo(e) {
    e.effect.stop();
}
var So = !0,
    Co = [];
function wo() {
    (Co.push(So), (So = !1));
}
function To() {
    let e = Co.pop();
    So = e === void 0 || e;
}
function Eo(e) {
    let { cleanup: t } = e;
    if (((e.cleanup = void 0), t)) {
        let e = G;
        G = void 0;
        try {
            t();
        } finally {
            G = e;
        }
    }
}
var Do = 0,
    Oo = class {
        constructor(e, t) {
            ((this.sub = e),
                (this.dep = t),
                (this.version = t.version),
                (this.nextDep =
                    this.prevDep =
                    this.nextSub =
                    this.prevSub =
                    this.prevActiveLink =
                        void 0));
        }
    },
    ko = class {
        constructor(e) {
            ((this.computed = e),
                (this.version = 0),
                (this.activeLink = void 0),
                (this.subs = void 0),
                (this.map = void 0),
                (this.key = void 0),
                (this.sc = 0),
                (this.__v_skip = !0));
        }
        track(e) {
            if (!G || !So || G === this.computed) return;
            let t = this.activeLink;
            if (t === void 0 || t.sub !== G)
                ((t = this.activeLink = new Oo(G, this)),
                    G.deps
                        ? ((t.prevDep = G.depsTail),
                          (G.depsTail.nextDep = t),
                          (G.depsTail = t))
                        : (G.deps = G.depsTail = t),
                    Ao(t));
            else if (
                t.version === -1 &&
                ((t.version = this.version), t.nextDep)
            ) {
                let e = t.nextDep;
                ((e.prevDep = t.prevDep),
                    t.prevDep && (t.prevDep.nextDep = e),
                    (t.prevDep = G.depsTail),
                    (t.nextDep = void 0),
                    (G.depsTail.nextDep = t),
                    (G.depsTail = t),
                    G.deps === t && (G.deps = e));
            }
            return t;
        }
        trigger(e) {
            (this.version++, Do++, this.notify(e));
        }
        notify(e) {
            fo();
            try {
                for (let e = this.subs; e; e = e.prevSub)
                    e.sub.notify() && e.sub.dep.notify();
            } finally {
                po();
            }
        }
    };
function Ao(e) {
    if ((e.dep.sc++, e.sub.flags & 4)) {
        let t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let e = t.deps; e; e = e.nextDep) Ao(e);
        }
        let n = e.dep.subs;
        (n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e));
    }
}
var jo = new WeakMap(),
    Mo = Symbol(``),
    No = Symbol(``),
    Po = Symbol(``);
function Fo(e, t, n) {
    if (So && G) {
        let t = jo.get(e);
        t || jo.set(e, (t = new Map()));
        let r = t.get(n);
        (r || (t.set(n, (r = new ko())), (r.map = t), (r.key = n)), r.track());
    }
}
function Io(e, t, n, r, i, a) {
    let o = jo.get(e);
    if (!o) {
        Do++;
        return;
    }
    let s = (e) => {
        e && e.trigger();
    };
    if ((fo(), t === `clear`)) o.forEach(s);
    else {
        let i = V(e),
            a = i && _a(n);
        if (i && n === `length`) {
            let e = Number(r);
            o.forEach((t, n) => {
                (n === `length` || n === Po || (!da(n) && n >= e)) && s(t);
            });
        } else
            switch (
                ((n !== void 0 || o.has(void 0)) && s(o.get(n)),
                a && s(o.get(Po)),
                t)
            ) {
                case `add`:
                    i
                        ? a && s(o.get(`length`))
                        : (s(o.get(Mo)), sa(e) && s(o.get(No)));
                    break;
                case `delete`:
                    i || (s(o.get(Mo)), sa(e) && s(o.get(No)));
                    break;
                case `set`:
                    sa(e) && s(o.get(Mo));
            }
    }
    po();
}
function Lo(e, t) {
    let n = jo.get(e);
    return n && n.get(t);
}
function Ro(e) {
    let t = K(e);
    return t === e || (Fo(t, `iterate`, Po), Ds(e))
        ? t
        : Es(e)
          ? Ts(e)
              ? t.map((e) => js(As(e)))
              : t.map(js)
          : t.map(As);
}
function zo(e) {
    return (Fo((e = K(e)), `iterate`, Po), e);
}
function Bo(e, t) {
    return Es(e) ? js(Ts(e) ? As(t) : t) : As(t);
}
var Vo = {
    __proto__: null,
    [Symbol.iterator]() {
        return Ho(this, Symbol.iterator, (e) => Bo(this, e));
    },
    concat(...e) {
        return Ro(this).concat(...e.map((e) => (V(e) ? Ro(e) : e)));
    },
    entries() {
        return Ho(this, `entries`, (e) => ((e[1] = Bo(this, e[1])), e));
    },
    every(e, t) {
        return Go(this, `every`, e, t, void 0, arguments);
    },
    filter(e, t) {
        return Go(
            this,
            `filter`,
            e,
            t,
            (e) => e.map((e) => Bo(this, e)),
            arguments,
        );
    },
    find(e, t) {
        return Go(this, `find`, e, t, (e) => Bo(this, e), arguments);
    },
    findIndex(e, t) {
        return Go(this, `findIndex`, e, t, void 0, arguments);
    },
    findLast(e, t) {
        return Go(this, `findLast`, e, t, (e) => Bo(this, e), arguments);
    },
    findLastIndex(e, t) {
        return Go(this, `findLastIndex`, e, t, void 0, arguments);
    },
    forEach(e, t) {
        return Go(this, `forEach`, e, t, void 0, arguments);
    },
    includes(...e) {
        return qo(this, `includes`, e);
    },
    indexOf(...e) {
        return qo(this, `indexOf`, e);
    },
    join(e) {
        return Ro(this).join(e);
    },
    lastIndexOf(...e) {
        return qo(this, `lastIndexOf`, e);
    },
    map(e, t) {
        return Go(this, `map`, e, t, void 0, arguments);
    },
    pop() {
        return Jo(this, `pop`);
    },
    push(...e) {
        return Jo(this, `push`, e);
    },
    reduce(e, ...t) {
        return Ko(this, `reduce`, e, t);
    },
    reduceRight(e, ...t) {
        return Ko(this, `reduceRight`, e, t);
    },
    shift() {
        return Jo(this, `shift`);
    },
    some(e, t) {
        return Go(this, `some`, e, t, void 0, arguments);
    },
    splice(...e) {
        return Jo(this, `splice`, e);
    },
    toReversed() {
        return Ro(this).toReversed();
    },
    toSorted(e) {
        return Ro(this).toSorted(e);
    },
    toSpliced(...e) {
        return Ro(this).toSpliced(...e);
    },
    unshift(...e) {
        return Jo(this, `unshift`, e);
    },
    values() {
        return Ho(this, `values`, (e) => Bo(this, e));
    },
};
function Ho(e, t, n) {
    let r = zo(e),
        i = r[t],
        a = i.call(r);
    if (r !== e && !Ds(e)) {
        if (a[Symbol.toStringTag] === `Array Iterator`) {
            let e = Object.create(Object.getPrototypeOf(a));
            return (
                (e.next = () => Uo(a.next(), n)),
                i !== Wo[t] &&
                    Object.defineProperties(e, {
                        return: {
                            get() {
                                let e = a.return;
                                return typeof e == `function` ? e.bind(a) : e;
                            },
                        },
                        throw: {
                            get() {
                                let e = a.throw;
                                return typeof e == `function` ? e.bind(a) : e;
                            },
                        },
                    }),
                e
            );
        }
        ((a._next = a.next), (a.next = () => Uo(a._next(), n)));
    }
    return a;
}
function Uo(e, t) {
    return (e.done || (e.value = t(e.value)), e);
}
var Wo = Array.prototype;
function Go(e, t, n, r, i, a) {
    let o = zo(e),
        s = o !== e && !Ds(e),
        c = o[t];
    if (c !== Wo[t]) {
        let t = c.apply(e, a);
        return s ? As(t) : t;
    }
    let l = n;
    o !== e &&
        (s
            ? (l = function (t, r) {
                  return n.call(this, Bo(e, t), r, e);
              })
            : n.length > 2 &&
              (l = function (t, r) {
                  return n.call(this, t, r, e);
              }));
    let u = c.call(o, l, r);
    return s && i ? i(u) : u;
}
function Ko(e, t, n, r) {
    let i = zo(e),
        a = i !== e && !Ds(e),
        o = n,
        s = !1;
    i !== e &&
        (a
            ? ((s = r.length === 0),
              (o = function (t, r, i) {
                  return (
                      s && ((s = !1), (t = Bo(e, t))),
                      n.call(this, t, Bo(e, r), i, e)
                  );
              }))
            : n.length > 3 &&
              (o = function (t, r, i) {
                  return n.call(this, t, r, i, e);
              }));
    let c = i[t](o, ...r);
    return s ? Bo(e, c) : c;
}
function qo(e, t, n) {
    let r = K(e);
    Fo(r, `iterate`, Po);
    let i = r[t](...n);
    return (i === -1 || i === !1) && Os(n[0])
        ? ((n[0] = K(n[0])), r[t](...n))
        : i;
}
function Jo(e, t, n = []) {
    (wo(), fo());
    let r = K(e)[t].apply(e, n);
    return (po(), To(), r);
}
var Yo = $i(`__proto__,__v_isRef,__isVue`),
    Xo = new Set(
        Object.getOwnPropertyNames(Symbol)
            .filter((e) => e !== `arguments` && e !== `caller`)
            .map((e) => Symbol[e])
            .filter(da),
    );
function Zo(e) {
    da(e) || (e = String(e));
    let t = K(this);
    return (Fo(t, `has`, e), t.hasOwnProperty(e));
}
var Qo = class {
        constructor(e = !1, t = !1) {
            ((this._isReadonly = e), (this._isShallow = t));
        }
        get(e, t, n) {
            if (t === `__v_skip`) return e.__v_skip;
            let r = this._isReadonly,
                i = this._isShallow;
            if (t === `__v_isReactive`) return !r;
            if (t === `__v_isReadonly`) return r;
            if (t === `__v_isShallow`) return i;
            if (t === `__v_raw`)
                return n === (r ? (i ? vs : _s) : i ? gs : hs).get(e) ||
                    Object.getPrototypeOf(e) === Object.getPrototypeOf(n)
                    ? e
                    : void 0;
            let a = V(e);
            if (!r) {
                let e;
                if (a && (e = Vo[t])) return e;
                if (t === `hasOwnProperty`) return Zo;
            }
            let o = Reflect.get(e, t, Ms(e) ? e : n);
            if ((da(t) ? Xo.has(t) : Yo(t)) || (r || Fo(e, `get`, t), i))
                return o;
            if (Ms(o)) {
                let e = a && _a(t) ? o : o.value;
                return r && W(e) ? Ss(e) : e;
            }
            return W(o) ? (r ? Ss(o) : bs(o)) : o;
        }
    },
    $o = class extends Qo {
        constructor(e = !1) {
            super(!1, e);
        }
        set(e, t, n, r) {
            let i = e[t],
                a = V(e) && _a(t);
            if (!this._isShallow) {
                let e = Es(i);
                if (
                    (!Ds(n) && !Es(n) && ((i = K(i)), (n = K(n))),
                    !a && Ms(i) && !Ms(n))
                )
                    return (e || (i.value = n), !0);
            }
            let o = a ? Number(t) < e.length : B(e, t),
                s = Reflect.set(e, t, n, Ms(e) ? e : r);
            return (
                e === K(r) &&
                    s &&
                    (o
                        ? Ea(n, i) && Io(e, `set`, t, n, i)
                        : Io(e, `add`, t, n)),
                s
            );
        }
        deleteProperty(e, t) {
            let n = B(e, t),
                r = e[t],
                i = Reflect.deleteProperty(e, t);
            return (i && n && Io(e, `delete`, t, void 0, r), i);
        }
        has(e, t) {
            let n = Reflect.has(e, t);
            return ((da(t) && Xo.has(t)) || Fo(e, `has`, t), n);
        }
        ownKeys(e) {
            return (Fo(e, `iterate`, V(e) ? `length` : Mo), Reflect.ownKeys(e));
        }
    },
    es = class extends Qo {
        constructor(e = !1) {
            super(!0, e);
        }
        set(e, t) {
            return !0;
        }
        deleteProperty(e, t) {
            return !0;
        }
    },
    ts = new $o(),
    ns = new es(),
    rs = new $o(!0),
    is = new es(!0),
    as = (e) => e,
    os = (e) => Reflect.getPrototypeOf(e);
function ss(e, t, n) {
    return function (...r) {
        let i = this.__v_raw,
            a = K(i),
            o = sa(a),
            s = e === `entries` || (e === Symbol.iterator && o),
            c = e === `keys` && o,
            l = i[e](...r),
            u = n ? as : t ? js : As;
        return (
            !t && Fo(a, `iterate`, c ? No : Mo),
            z(Object.create(l), {
                next() {
                    let { value: e, done: t } = l.next();
                    return t
                        ? { value: e, done: t }
                        : { value: s ? [u(e[0]), u(e[1])] : u(e), done: t };
                },
            })
        );
    };
}
function cs(e) {
    return function (...t) {
        return e === `delete` ? !1 : e === `clear` ? void 0 : this;
    };
}
function ls(e, t) {
    let n = {
        get(n) {
            let r = this.__v_raw,
                i = K(r),
                a = K(n);
            e || (Ea(n, a) && Fo(i, `get`, n), Fo(i, `get`, a));
            let { has: o } = os(i),
                s = t ? as : e ? js : As;
            if (o.call(i, n)) return s(r.get(n));
            if (o.call(i, a)) return s(r.get(a));
            r !== i && r.get(n);
        },
        get size() {
            let t = this.__v_raw;
            return (!e && Fo(K(t), `iterate`, Mo), t.size);
        },
        has(t) {
            let n = this.__v_raw,
                r = K(n),
                i = K(t);
            return (
                e || (Ea(t, i) && Fo(r, `has`, t), Fo(r, `has`, i)),
                t === i ? n.has(t) : n.has(t) || n.has(i)
            );
        },
        forEach(n, r) {
            let i = this,
                a = i.__v_raw,
                o = K(a),
                s = t ? as : e ? js : As;
            return (
                !e && Fo(o, `iterate`, Mo),
                a.forEach((e, t) => n.call(r, s(e), s(t), i))
            );
        },
    };
    return (
        z(
            n,
            e
                ? {
                      add: cs(`add`),
                      set: cs(`set`),
                      delete: cs(`delete`),
                      clear: cs(`clear`),
                  }
                : {
                      add(e) {
                          let n = K(this),
                              r = os(n),
                              i = K(e),
                              a = !t && !Ds(e) && !Es(e) ? i : e;
                          return (
                              r.has.call(n, a) ||
                                  (Ea(e, a) && r.has.call(n, e)) ||
                                  (Ea(i, a) && r.has.call(n, i)) ||
                                  (n.add(a), Io(n, `add`, a, a)),
                              this
                          );
                      },
                      set(e, n) {
                          t || Ds(n) || Es(n) || (n = K(n));
                          let r = K(this),
                              { has: i, get: a } = os(r),
                              o = i.call(r, e);
                          o ||= ((e = K(e)), i.call(r, e));
                          let s = a.call(r, e);
                          return (
                              r.set(e, n),
                              o
                                  ? Ea(n, s) && Io(r, `set`, e, n, s)
                                  : Io(r, `add`, e, n),
                              this
                          );
                      },
                      delete(e) {
                          let t = K(this),
                              { has: n, get: r } = os(t),
                              i = n.call(t, e);
                          i ||= ((e = K(e)), n.call(t, e));
                          let a = r ? r.call(t, e) : void 0,
                              o = t.delete(e);
                          return (i && Io(t, `delete`, e, void 0, a), o);
                      },
                      clear() {
                          let e = K(this),
                              t = e.size !== 0,
                              n = e.clear();
                          return (
                              t && Io(e, `clear`, void 0, void 0, void 0), n
                          );
                      },
                  },
        ),
        [`keys`, `values`, `entries`, Symbol.iterator].forEach((r) => {
            n[r] = ss(r, e, t);
        }),
        n
    );
}
function us(e, t) {
    let n = ls(e, t);
    return (r, i, a) =>
        i === `__v_isReactive`
            ? !e
            : i === `__v_isReadonly`
              ? e
              : i === `__v_isShallow`
                ? t
                : i === `__v_raw`
                  ? r
                  : Reflect.get(B(n, i) && i in r ? n : r, i, a);
}
var ds = { get: us(!1, !1) },
    fs = { get: us(!1, !0) },
    ps = { get: us(!0, !1) },
    ms = { get: us(!0, !0) },
    hs = new WeakMap(),
    gs = new WeakMap(),
    _s = new WeakMap(),
    vs = new WeakMap();
function ys(e) {
    switch (e) {
        case `Object`:
        case `Array`:
            return 1;
        case `Map`:
        case `Set`:
        case `WeakMap`:
        case `WeakSet`:
            return 2;
        default:
            return 0;
    }
}
function bs(e) {
    return Es(e) ? e : ws(e, !1, ts, ds, hs);
}
function xs(e) {
    return ws(e, !1, rs, fs, gs);
}
function Ss(e) {
    return ws(e, !0, ns, ps, _s);
}
function Cs(e) {
    return ws(e, !0, is, ms, vs);
}
function ws(e, t, n, r, i) {
    if (
        !W(e) ||
        (e.__v_raw && !(t && e.__v_isReactive)) ||
        e.__v_skip ||
        !Object.isExtensible(e)
    )
        return e;
    let a = i.get(e);
    if (a) return a;
    let o = ys(ha(e));
    if (o === 0) return e;
    let s = new Proxy(e, o === 2 ? r : n);
    return (i.set(e, s), s);
}
function Ts(e) {
    return Es(e) ? Ts(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Es(e) {
    return !!(e && e.__v_isReadonly);
}
function Ds(e) {
    return !!(e && e.__v_isShallow);
}
function Os(e) {
    return e ? !!e.__v_raw : !1;
}
function K(e) {
    let t = e && e.__v_raw;
    return t ? K(t) : e;
}
function ks(e) {
    return (
        !B(e, `__v_skip`) && Object.isExtensible(e) && Oa(e, `__v_skip`, !0), e
    );
}
var As = (e) => (W(e) ? bs(e) : e),
    js = (e) => (W(e) ? Ss(e) : e);
function Ms(e) {
    return e ? e.__v_isRef === !0 : !1;
}
function Ns(e) {
    return Fs(e, !1);
}
function Ps(e) {
    return Fs(e, !0);
}
function Fs(e, t) {
    return Ms(e) ? e : new Is(e, t);
}
var Is = class {
    constructor(e, t) {
        ((this.dep = new ko()),
            (this.__v_isRef = !0),
            (this.__v_isShallow = !1),
            (this._rawValue = t ? e : K(e)),
            (this._value = t ? e : As(e)),
            (this.__v_isShallow = t));
    }
    get value() {
        return (this.dep.track(), this._value);
    }
    set value(e) {
        let t = this._rawValue,
            n = this.__v_isShallow || Ds(e) || Es(e);
        ((e = n ? e : K(e)),
            Ea(e, t) &&
                ((this._rawValue = e),
                (this._value = n ? e : As(e)),
                this.dep.trigger()));
    }
};
function Ls(e) {
    e.dep && e.dep.trigger();
}
function Rs(e) {
    return Ms(e) ? e.value : e;
}
function zs(e) {
    return H(e) ? e() : Rs(e);
}
var Bs = {
    get: (e, t, n) => (t === `__v_raw` ? e : Rs(Reflect.get(e, t, n))),
    set: (e, t, n, r) => {
        let i = e[t];
        return Ms(i) && !Ms(n) ? ((i.value = n), !0) : Reflect.set(e, t, n, r);
    },
};
function Vs(e) {
    return Ts(e) ? e : new Proxy(e, Bs);
}
var Hs = class {
    constructor(e) {
        ((this.__v_isRef = !0), (this._value = void 0));
        let t = (this.dep = new ko()),
            { get: n, set: r } = e(t.track.bind(t), t.trigger.bind(t));
        ((this._get = n), (this._set = r));
    }
    get value() {
        return (this._value = this._get());
    }
    set value(e) {
        this._set(e);
    }
};
function Us(e) {
    return new Hs(e);
}
function Ws(e) {
    let t = V(e) ? Array(e.length) : {};
    for (let n in e) t[n] = Js(e, n);
    return t;
}
var Gs = class {
        constructor(e, t, n) {
            ((this._object = e),
                (this._defaultValue = n),
                (this.__v_isRef = !0),
                (this._value = void 0),
                (this._key = da(t) ? t : String(t)),
                (this._raw = K(e)));
            let r = !0,
                i = e;
            if (!V(e) || da(this._key) || !_a(this._key))
                do r = !Os(i) || Ds(i);
                while (r && (i = i.__v_raw));
            this._shallow = r;
        }
        get value() {
            let e = this._object[this._key];
            return (
                this._shallow && (e = Rs(e)),
                (this._value = e === void 0 ? this._defaultValue : e)
            );
        }
        set value(e) {
            if (this._shallow && Ms(this._raw[this._key])) {
                let t = this._object[this._key];
                if (Ms(t)) {
                    t.value = e;
                    return;
                }
            }
            this._object[this._key] = e;
        }
        get dep() {
            return Lo(this._raw, this._key);
        }
    },
    Ks = class {
        constructor(e) {
            ((this._getter = e),
                (this.__v_isRef = !0),
                (this.__v_isReadonly = !0),
                (this._value = void 0));
        }
        get value() {
            return (this._value = this._getter());
        }
    };
function qs(e, t, n) {
    return Ms(e)
        ? e
        : H(e)
          ? new Ks(e)
          : W(e) && arguments.length > 1
            ? Js(e, t, n)
            : Ns(e);
}
function Js(e, t, n) {
    return new Gs(e, t, n);
}
var Ys = class {
    constructor(e, t, n) {
        ((this.fn = e),
            (this.setter = t),
            (this._value = void 0),
            (this.dep = new ko(this)),
            (this.__v_isRef = !0),
            (this.deps = void 0),
            (this.depsTail = void 0),
            (this.flags = 16),
            (this.globalVersion = Do - 1),
            (this.next = void 0),
            (this.effect = this),
            (this.__v_isReadonly = !t),
            (this.isSSR = n));
    }
    notify() {
        if (((this.flags |= 16), !(this.flags & 8) && G !== this))
            return (uo(this, !0), !0);
    }
    get value() {
        let e = this.dep.track();
        return (_o(this), e && (e.version = this.dep.version), this._value);
    }
    set value(e) {
        this.setter && this.setter(e);
    }
};
function Xs(e, t, n = !1) {
    let r, i;
    return (H(e) ? (r = e) : ((r = e.get), (i = e.set)), new Ys(r, i, n));
}
var Zs = { GET: `get`, HAS: `has`, ITERATE: `iterate` },
    Qs = { SET: `set`, ADD: `add`, DELETE: `delete`, CLEAR: `clear` },
    $s = {},
    ec = new WeakMap(),
    tc = void 0;
function nc() {
    return tc;
}
function rc(e, t = !1, n = tc) {
    if (n) {
        let t = ec.get(n);
        (t || ec.set(n, (t = [])), t.push(e));
    }
}
function ic(e, t, n = R) {
    let {
            immediate: r,
            deep: i,
            once: a,
            scheduler: o,
            augmentJob: s,
            call: c,
        } = n,
        l = (e) => (i ? e : Ds(e) || i === !1 || i === 0 ? ac(e, 1) : ac(e)),
        u,
        d,
        f,
        p,
        m = !1,
        h = !1;
    if (
        (Ms(e)
            ? ((d = () => e.value), (m = Ds(e)))
            : Ts(e)
              ? ((d = () => l(e)), (m = !0))
              : V(e)
                ? ((h = !0),
                  (m = e.some((e) => Ts(e) || Ds(e))),
                  (d = () =>
                      e.map((e) => {
                          if (Ms(e)) return e.value;
                          if (Ts(e)) return l(e);
                          if (H(e)) return c ? c(e, 2) : e();
                      })))
                : (d = H(e)
                      ? t
                          ? c
                              ? () => c(e, 2)
                              : e
                          : () => {
                                if (f) {
                                    wo();
                                    try {
                                        f();
                                    } finally {
                                        To();
                                    }
                                }
                                let t = tc;
                                tc = u;
                                try {
                                    return c ? c(e, 3, [p]) : e(p);
                                } finally {
                                    tc = t;
                                }
                            }
                      : ta),
        t && i)
    ) {
        let e = d,
            t = i === !0 ? 1 / 0 : i;
        d = () => ac(e(), t);
    }
    let g = ro(),
        _ = () => {
            (u.stop(), g && g.active && aa(g.effects, u));
        };
    if (a && t) {
        let e = t;
        t = (...t) => {
            try {
                return e(...t);
            } finally {
                _();
            }
        };
    }
    let v = h ? Array(e.length).fill($s) : $s,
        y = (e) => {
            if (u.flags & 1 && (u.dirty || e)) {
                if (t) {
                    let n = u.run();
                    if (
                        e ||
                        i ||
                        m ||
                        (h ? n.some((e, t) => Ea(e, v[t])) : Ea(n, v))
                    ) {
                        let e = tc;
                        wo();
                        try {
                            (f && f(), (tc = u));
                            let e = [
                                n,
                                v === $s ? void 0 : h && v[0] === $s ? [] : v,
                                p,
                            ];
                            ((v = n), c ? c(t, 3, e) : t(...e));
                        } finally {
                            ((tc = e), To());
                        }
                    }
                } else u.run();
            }
        };
    return (
        s && s(y),
        (u = new oo(d)),
        (u.scheduler = o ? () => o(y, !1) : y),
        (p = (e) => rc(e, !1, u)),
        (f = u.onStop =
            () => {
                let e = ec.get(u);
                if (e) {
                    if (c) c(e, 4);
                    else for (let t of e) t();
                    ec.delete(u);
                }
            }),
        t ? (r ? y(!0) : (v = u.run())) : o ? o(y.bind(null, !0), !0) : u.run(),
        (_.pause = u.pause.bind(u)),
        (_.resume = u.resume.bind(u)),
        (_.stop = _),
        _
    );
}
function ac(e, t = 1 / 0, n) {
    if (
        t <= 0 ||
        !W(e) ||
        e.__v_skip ||
        ((n ||= new Map()), (n.get(e) || 0) >= t)
    )
        return e;
    if ((n.set(e, t), t--, Ms(e))) ac(e.value, t, n);
    else if (V(e)) for (let r = 0; r < e.length; r++) ac(e[r], t, n);
    else if (ca(e) || sa(e))
        e.forEach((e) => {
            ac(e, t, n);
        });
    else if (ga(e)) {
        for (let r in e) ac(e[r], t, n);
        for (let r of Object.getOwnPropertySymbols(e))
            Object.prototype.propertyIsEnumerable.call(e, r) && ac(e[r], t, n);
    }
    return e;
}
var oc = [];
function sc(e) {
    oc.push(e);
}
function cc() {
    oc.pop();
}
function lc(e, t) {}
var uc = {
        SETUP_FUNCTION: 0,
        0: `SETUP_FUNCTION`,
        RENDER_FUNCTION: 1,
        1: `RENDER_FUNCTION`,
        NATIVE_EVENT_HANDLER: 5,
        5: `NATIVE_EVENT_HANDLER`,
        COMPONENT_EVENT_HANDLER: 6,
        6: `COMPONENT_EVENT_HANDLER`,
        VNODE_HOOK: 7,
        7: `VNODE_HOOK`,
        DIRECTIVE_HOOK: 8,
        8: `DIRECTIVE_HOOK`,
        TRANSITION_HOOK: 9,
        9: `TRANSITION_HOOK`,
        APP_ERROR_HANDLER: 10,
        10: `APP_ERROR_HANDLER`,
        APP_WARN_HANDLER: 11,
        11: `APP_WARN_HANDLER`,
        FUNCTION_REF: 12,
        12: `FUNCTION_REF`,
        ASYNC_COMPONENT_LOADER: 13,
        13: `ASYNC_COMPONENT_LOADER`,
        SCHEDULER: 14,
        14: `SCHEDULER`,
        COMPONENT_UPDATE: 15,
        15: `COMPONENT_UPDATE`,
        APP_UNMOUNT_CLEANUP: 16,
        16: `APP_UNMOUNT_CLEANUP`,
    },
    dc = {
        sp: `serverPrefetch hook`,
        bc: `beforeCreate hook`,
        c: `created hook`,
        bm: `beforeMount hook`,
        m: `mounted hook`,
        bu: `beforeUpdate hook`,
        u: `updated`,
        bum: `beforeUnmount hook`,
        um: `unmounted hook`,
        a: `activated hook`,
        da: `deactivated hook`,
        ec: `errorCaptured hook`,
        rtc: `renderTracked hook`,
        rtg: `renderTriggered hook`,
        0: `setup function`,
        1: `render function`,
        2: `watcher getter`,
        3: `watcher callback`,
        4: `watcher cleanup function`,
        5: `native event handler`,
        6: `component event handler`,
        7: `vnode hook`,
        8: `directive hook`,
        9: `transition hook`,
        10: `app errorHandler`,
        11: `app warnHandler`,
        12: `ref function`,
        13: `async component loader`,
        14: `scheduler flush`,
        15: `component update`,
        16: `app unmount cleanup function`,
    };
function fc(e, t, n, r) {
    try {
        return r ? e(...r) : e();
    } catch (e) {
        mc(e, t, n);
    }
}
function pc(e, t, n, r) {
    if (H(e)) {
        let i = fc(e, t, n, r);
        return (
            i &&
                fa(i) &&
                i.catch((e) => {
                    mc(e, t, n);
                }),
            i
        );
    }
    if (V(e)) {
        let i = [];
        for (let a = 0; a < e.length; a++) i.push(pc(e[a], t, n, r));
        return i;
    }
}
function mc(e, t, n, r = !0) {
    let i = t ? t.vnode : null,
        { errorHandler: a, throwUnhandledErrorInProduction: o } =
            (t && t.appContext.config) || R;
    if (t) {
        let r = t.parent,
            i = t.proxy,
            o = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; r;) {
            let t = r.ec;
            if (t) {
                for (let n = 0; n < t.length; n++)
                    if (t[n](e, i, o) === !1) return;
            }
            r = r.parent;
        }
        if (a) {
            (wo(), fc(a, null, 10, [e, i, o]), To());
            return;
        }
    }
    hc(e, n, i, r, o);
}
function hc(e, t, n, r = !0, i = !1) {
    if (i) throw e;
    console.error(e);
}
var gc = [],
    _c = -1,
    vc = [],
    yc = null,
    bc = 0,
    xc = Promise.resolve(),
    Sc = null;
function Cc(e) {
    let t = Sc || xc;
    return e ? t.then(this ? e.bind(this) : e) : t;
}
function wc(e) {
    let t = _c + 1,
        n = gc.length;
    for (; t < n;) {
        let r = (t + n) >>> 1,
            i = gc[r],
            a = Mc(i);
        a < e || (a === e && i.flags & 2) ? (t = r + 1) : (n = r);
    }
    return t;
}
function Tc(e) {
    if (!(e.flags & 1)) {
        let t = Mc(e),
            n = gc[gc.length - 1];
        (!n || (!(e.flags & 2) && t >= Mc(n))
            ? gc.push(e)
            : gc.splice(wc(t), 0, e),
            (e.flags |= 1),
            Ec());
    }
}
function Ec() {
    Sc ||= xc.then(Nc);
}
function Dc(e) {
    if (!V(e))
        yc && e.id === -1
            ? yc.splice(bc + 1, 0, e)
            : e.flags & 1 || (vc.push(e), (e.flags |= 1));
    else for (let t = 0; t < e.length; t++) vc.push(e[t]);
    Ec();
}
function Oc(e, t, n, r = _c + 1) {
    for (; r < gc.length; r++) {
        let n = gc[r];
        if (n && n.flags & 2) {
            if ((e && n.id !== e.uid) || (t !== void 0 && !(n.id >= t)))
                continue;
            (gc.splice(r, 1),
                (r = e ? r - 1 : _c),
                n.flags & 4 && (n.flags &= -2),
                n(),
                n.flags & 4 || (n.flags &= -2));
        }
    }
}
function kc(e, t, n = 0) {
    if (vc.length) {
        let e = vc,
            r = 0;
        if (t) {
            e = [];
            for (let i = 0; i < vc.length; i++) {
                let a = vc[i];
                (a.i === void 0 ? t.has(a) : !a.i || a.i.uid < n)
                    ? (vc[r++] = a)
                    : e.push(a);
            }
        }
        let i = [...new Set(e)].sort((e, t) => Mc(e) - Mc(t));
        if (((vc.length = r), yc)) {
            for (let e = 0; e < i.length; e++) yc.push(i[e]);
            return;
        }
        for (yc = i, bc = 0; bc < yc.length; bc++) {
            let e = yc[bc];
            (e.flags & 4 && (e.flags &= -2),
                e.flags & 8 || e(),
                (e.flags &= -2));
        }
        ((yc = null), (bc = 0));
    }
}
var Ac = !1;
function jc(e, t) {
    if (Ac) {
        e();
        return;
    }
    let n = t === void 0 ? void 0 : new Set(vc);
    (e(), (Ac = !0));
    try {
        (Oc(void 0, t), kc(void 0, n, t));
    } finally {
        Ac = !1;
    }
}
var Mc = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function Nc(e) {
    try {
        for (_c = 0; _c < gc.length; _c++) {
            let e = gc[_c];
            e &&
                !(e.flags & 8) &&
                (e.flags & 4 && (e.flags &= -2),
                fc(e, e.i, e.i ? 15 : 14),
                e.flags & 4 || (e.flags &= -2));
        }
    } finally {
        for (; _c < gc.length; _c++) {
            let e = gc[_c];
            e && (e.flags &= -2);
        }
        ((_c = -1),
            (gc.length = 0),
            kc(e),
            (Sc = null),
            (gc.length || vc.length) && Nc(e));
    }
}
var Pc,
    Fc = [];
function Ic(e, t) {
    ((Pc = e),
        Pc
            ? ((Pc.enabled = !0),
              Fc.forEach(({ event: e, args: t }) => Pc.emit(e, ...t)),
              (Fc = []))
            : typeof window < `u` &&
                window.HTMLElement &&
                !window.navigator?.userAgent?.includes(`jsdom`)
              ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ =
                    t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((e) => {
                    Ic(e, t);
                }),
                setTimeout(() => {
                    Pc || ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null), (Fc = []));
                }, 3e3))
              : (Fc = []));
}
var Lc = null,
    Rc = null;
function zc(e) {
    let t = Lc;
    return ((Lc = e), (Rc = (e && e.type.__scopeId) || null), t);
}
function Bc(e) {
    Rc = e;
}
function Vc() {
    Rc = null;
}
var Hc = (e) => Uc;
function Uc(e, t = Lc, n) {
    if (!t || e._n) return e;
    let r = (...n) => {
        r._d && Gf(-1);
        let i = zc(t),
            a = Bf.length,
            o;
        try {
            o = e(...n);
        } finally {
            for (let e = Bf.length; e > a; e--) Uf();
            (zc(i), r._d && Gf(1));
        }
        return o;
    };
    return ((r._n = !0), (r._c = !0), (r._d = !0), r);
}
function Wc(e, t) {
    if (Lc === null) return e;
    let n = Pp(Lc),
        r = (e.dirs ||= []);
    for (let e = 0; e < t.length; e++) {
        let [i, a, o, s = R] = t[e];
        i &&
            (H(i) && (i = { mounted: i, updated: i }),
            i.deep && ac(a),
            r.push({
                dir: i,
                instance: n,
                value: a,
                oldValue: void 0,
                arg: o,
                modifiers: s,
            }));
    }
    return e;
}
function Gc(e, t, n, r) {
    let i = e.dirs,
        a = t && t.dirs;
    for (let o = 0; o < i.length; o++) {
        let s = i[o];
        a && (s.oldValue = a[o].value);
        let c = s.dir[r];
        c && (wo(), pc(c, n, 8, [e.el, s, e, t]), To());
    }
}
function Kc(e, t) {
    if (gp) {
        let n = gp.provides,
            r = gp.parent && gp.parent.provides;
        (r === n && (n = gp.provides = Object.create(r)), (n[e] = t));
    }
}
function qc(e, t, n = !1) {
    let r = _p();
    if (r || Md) {
        let i = Md
            ? Md._context.provides
            : r
              ? r.parent == null || r.ce
                  ? r.vnode.appContext && r.vnode.appContext.provides
                  : r.parent.provides
              : void 0;
        if (i && e in i) return i[e];
        if (arguments.length > 1) return n && H(t) ? t.call(r && r.proxy) : t;
    }
}
function Jc() {
    return !!(_p() || Md);
}
var Yc = Symbol.for(`v-scx`),
    Xc = () => qc(Yc);
function Zc(e, t) {
    return tl(e, null, t);
}
function Qc(e, t) {
    return tl(e, null, { flush: `post` });
}
function $c(e, t) {
    return tl(e, null, { flush: `sync` });
}
function el(e, t, n) {
    return tl(e, t, n);
}
function tl(e, t, n = R) {
    let { immediate: r, deep: i, flush: a, once: o } = n,
        s = z({}, n),
        c = (t && r) || (!t && a !== `post`),
        l;
    if (Cp) {
        if (a === `sync`) {
            let e = Xc();
            l = e.__watcherHandles ||= [];
        } else if (!c) {
            let e = () => {};
            return ((e.stop = ta), (e.resume = ta), (e.pause = ta), e);
        }
    }
    let u = gp;
    s.call = (e, t, n) => pc(e, u, t, n);
    let d = !1;
    (a === `post`
        ? (s.scheduler = (e) => {
              ((e.i = u), ff(e, u && u.suspense));
          })
        : a !== `sync` &&
          ((d = !0),
          (s.scheduler = (e, t) => {
              t ? e() : Tc(e);
          })),
        (s.augmentJob = (e) => {
            (t && (e.flags |= 4),
                d && ((e.flags |= 2), u && ((e.id = u.uid), (e.i = u))));
        }));
    let f = ic(e, t, s);
    return (Cp && (l ? l.push(f) : c && f()), f);
}
function nl(e, t, n) {
    let r = this.proxy,
        i = U(e) ? (e.includes(`.`) ? rl(r, e) : () => r[e]) : e.bind(r, r),
        a;
    H(t) ? (a = t) : ((a = t.handler), (n = t));
    let o = bp(this),
        s = tl(i, a.bind(r), n);
    return (o(), s);
}
function rl(e, t) {
    let n = t.split(`.`);
    return () => {
        let t = e;
        for (let e = 0; e < n.length && t; e++) t = t[n[e]];
        return t;
    };
}
var il = new WeakMap(),
    al = Symbol(`_vte`),
    ol = (e) => e.__isTeleport,
    sl = (e) => e && (e.disabled || e.disabled === ``),
    cl = (e) => e && (e.defer || e.defer === ``),
    ll = (e) => typeof SVGElement < `u` && e instanceof SVGElement,
    ul = (e) =>
        typeof MathMLElement == `function` && e instanceof MathMLElement,
    dl = (e, t) => {
        let n = e && e.to;
        return U(n) ? (t ? t(n) : null) : n;
    },
    fl = {
        name: `Teleport`,
        __isTeleport: !0,
        process(e, t, n, r, i, a, o, s, c, l) {
            let {
                    mc: u,
                    pc: d,
                    pbc: f,
                    o: {
                        insert: p,
                        querySelector: m,
                        createText: h,
                        createComment: g,
                        parentNode: _,
                    },
                } = l,
                v = sl(t.props),
                { dynamicChildren: y } = t,
                b = (e, t, n) => {
                    e.shapeFlag & 16 && u(e.children, t, n, i, a, o, s, c);
                },
                x = (e = t) => {
                    let n = sl(e.props),
                        r = (e.target = dl(e.props, m)),
                        a = _l(r, e, h, p);
                    r &&
                        (o !== `svg` && ll(r)
                            ? (o = `svg`)
                            : o !== `mathml` && ul(r) && (o = `mathml`),
                        i &&
                            i.isCE &&
                            (
                                i.ce._teleportTargets ||
                                (i.ce._teleportTargets = new Set())
                            ).add(r),
                        n || (b(e, r, a), gl(e, !1)));
                },
                S = (e) => {
                    let t = () => {
                        if (il.get(e) === t) {
                            if ((il.delete(e), sl(e.props))) {
                                let t = _(e.el) || n;
                                (b(e, t, e.anchor), gl(e, !0));
                            }
                            x(e);
                        }
                    };
                    (il.set(e, t), ff(t, a));
                };
            if (e == null) {
                let e = (t.el = h(``)),
                    i = (t.anchor = h(``));
                if (
                    (p(e, n, r),
                    p(i, n, r),
                    cl(t.props) || (a && a.pendingBranch))
                ) {
                    S(t);
                    return;
                }
                (v && (b(t, n, i), gl(t, !0)), x());
            } else {
                t.el = e.el;
                let r = (t.anchor = e.anchor),
                    u = il.get(e);
                if (u) {
                    ((u.flags |= 8), il.delete(e), S(t));
                    return;
                }
                t.targetStart = e.targetStart;
                let p = (t.target = e.target),
                    h = (t.targetAnchor = e.targetAnchor),
                    g = sl(e.props),
                    _ = g ? n : p,
                    b = g ? r : h;
                if (
                    (o === `svg` || ll(p)
                        ? (o = `svg`)
                        : (o === `mathml` || ul(p)) && (o = `mathml`),
                    y
                        ? (f(e.dynamicChildren, y, _, i, a, o, s), yf(e, t, !0))
                        : c || d(e, t, _, b, i, a, o, s, !1),
                    v)
                )
                    g
                        ? t.props &&
                          e.props &&
                          t.props.to !== e.props.to &&
                          (t.props.to = e.props.to)
                        : pl(t, n, r, l, 1);
                else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                    let e = dl(t.props, m);
                    e && ((t.target = e), pl(t, e, null, l, 0));
                } else g && pl(t, p, h, l, 1);
                gl(t, v);
            }
        },
        remove(e, t, n, { um: r, o: { remove: i } }, a) {
            let {
                    shapeFlag: o,
                    children: s,
                    anchor: c,
                    targetStart: l,
                    targetAnchor: u,
                    target: d,
                    props: f,
                } = e,
                p = sl(f),
                m = a || !p,
                h = il.get(e);
            if (
                (h && ((h.flags |= 8), il.delete(e)),
                d && (i(l), i(u)),
                a && i(c),
                !h && (p || d) && o & 16)
            )
                for (let e = 0; e < s.length; e++) {
                    let i = s[e];
                    r(i, t, n, m, !!i.dynamicChildren);
                }
        },
        move: pl,
        hydrate: ml,
    };
function pl(e, t, n, { o: { insert: r }, m: i }, a = 2) {
    a === 0 &&
        (e.targetStart && r(e.targetStart, t, n),
        r(e.targetAnchor, t, n),
        (n = e.targetAnchor));
    let { el: o, anchor: s, shapeFlag: c, children: l, props: u } = e,
        d = a === 2;
    if ((d && r(o, t, n), !il.has(e) && (!d || sl(u)) && c & 16))
        for (let e = 0; e < l.length; e++) i(l[e], t, n, 2);
    d && r(s, t, n);
}
function ml(
    e,
    t,
    n,
    r,
    i,
    a,
    {
        o: {
            nextSibling: o,
            parentNode: s,
            querySelector: c,
            insert: l,
            createText: u,
        },
    },
    d,
) {
    function f(e, n) {
        let r = n;
        for (; r;) {
            if (r && r.nodeType === 8) {
                if (r.data === `teleport start anchor`) t.targetStart = r;
                else if (r.data === `teleport anchor`) {
                    ((t.targetAnchor = r),
                        (e._lpa = t.targetAnchor && o(t.targetAnchor)));
                    break;
                }
            }
            r = o(r);
        }
    }
    function p(e, t) {
        t.anchor = d(o(e), t, s(e), n, r, i, a);
    }
    let m = (t.target = dl(t.props, c)),
        h = sl(t.props);
    if (m) {
        let c = m._lpa || m.firstChild;
        (t.shapeFlag & 16 &&
            (h
                ? (p(e, t),
                  f(m, c),
                  t.targetAnchor || _l(m, t, u, l, s(e) === m ? e : null))
                : ((t.anchor = o(e)),
                  f(m, c),
                  t.targetAnchor || _l(m, t, u, l),
                  d(c && o(c), t, m, n, r, i, a))),
            gl(t, h));
    } else
        h &&
            t.shapeFlag & 16 &&
            (p(e, t), (t.targetStart = e), (t.targetAnchor = o(e)));
    return t.anchor && o(t.anchor);
}
var hl = fl;
function gl(e, t) {
    let n = e.ctx;
    if (n && n.ut) {
        let r, i;
        for (
            t
                ? ((r = e.el), (i = e.anchor))
                : ((r = e.targetStart), (i = e.targetAnchor));
            r && r !== i;
        )
            (r.nodeType === 1 && r.setAttribute(`data-v-owner`, n.uid),
                (r = r.nextSibling));
        n.ut();
    }
}
function _l(e, t, n, r, i = null) {
    let a = (t.targetStart = n(``)),
        o = (t.targetAnchor = n(``));
    return ((a[al] = o), e && (r(a, e, i), r(o, e, i)), o);
}
var vl = Symbol(`_leaveCb`),
    yl = Symbol(`_enterCb`);
function bl() {
    let e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map(),
    };
    return (
        Eu(() => {
            e.isMounted = !0;
        }),
        ku(() => {
            e.isUnmounting = !0;
        }),
        e
    );
}
var xl = [Function, Array],
    Sl = {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: xl,
        onEnter: xl,
        onAfterEnter: xl,
        onEnterCancelled: xl,
        onBeforeLeave: xl,
        onLeave: xl,
        onAfterLeave: xl,
        onLeaveCancelled: xl,
        onBeforeAppear: xl,
        onAppear: xl,
        onAfterAppear: xl,
        onAppearCancelled: xl,
    },
    Cl = {
        name: `BaseTransition`,
        props: Sl,
        setup(e, { slots: t }) {
            let n = _p(),
                r = bl();
            return () => {
                let i = t.default && jl(t.default(), !0),
                    a = i && i.length ? wl(i) : n.subTree ? op() : void 0;
                if (!a) return;
                let o = K(e),
                    { mode: s } = o;
                if (r.isLeaving) return Ol(a);
                let c = kl(a);
                if (!c) return Ol(a);
                let l = Dl(c, o, r, n, (e) => (l = e));
                c.type !== q && Al(c, l);
                let u = n.subTree && kl(n.subTree);
                if (u && u.type !== q && !Xf(u, c) && Ml(n.subTree)) {
                    let e = Dl(u, o, r, n);
                    if ((Al(u, e), s === `out-in` && c.type !== q))
                        return (
                            (r.isLeaving = !0),
                            (e.afterLeave = () => {
                                ((r.isLeaving = !1),
                                    n.job.flags & 8 || n.update(),
                                    delete e.afterLeave,
                                    (u = void 0));
                            }),
                            Ol(a)
                        );
                    s === `in-out` && c.type !== q
                        ? (e.delayLeave = (e, t, n) => {
                              let i = El(r, u);
                              ((i[String(u.key)] = u),
                                  (e[vl] = () => {
                                      (t(),
                                          (e[vl] = void 0),
                                          delete l.delayedLeave,
                                          (u = void 0));
                                  }),
                                  (l.delayedLeave = () => {
                                      (n(),
                                          delete l.delayedLeave,
                                          (u = void 0));
                                  }));
                          })
                        : (u = void 0);
                } else u &&= void 0;
                return a;
            };
        },
    };
function wl(e) {
    let t = e[0];
    if (e.length > 1) {
        for (let n of e)
            if (n.type !== q) {
                t = n;
                break;
            }
    }
    return t;
}
var Tl = Cl;
function El(e, t) {
    let { leavingVNodes: n } = e,
        r = n.get(t.type);
    return (r || ((r = Object.create(null)), n.set(t.type, r)), r);
}
function Dl(e, t, n, r, i) {
    let {
            appear: a,
            mode: o,
            persisted: s = !1,
            onBeforeEnter: c,
            onEnter: l,
            onAfterEnter: u,
            onEnterCancelled: d,
            onBeforeLeave: f,
            onLeave: p,
            onAfterLeave: m,
            onLeaveCancelled: h,
            onBeforeAppear: g,
            onAppear: _,
            onAfterAppear: v,
            onAppearCancelled: y,
        } = t,
        b = String(e.key),
        x = El(n, e),
        S = (e, t) => {
            e && pc(e, r, 9, t);
        },
        C = (e, t) => {
            let n = t[1];
            (S(e, t),
                V(e)
                    ? e.every((e) => e.length <= 1) && n()
                    : e.length <= 1 && n());
        },
        w = {
            mode: o,
            persisted: s,
            beforeEnter(t) {
                let r = c;
                if (!n.isMounted) {
                    if (a) r = g || c;
                    else return;
                }
                t[vl] && t[vl](!0);
                let i = x[b];
                if (i && Xf(e, i)) {
                    let e = i.el[vl];
                    if (!e) {
                        let t = Ml(i);
                        e = t && t.el[vl];
                    }
                    e && e();
                }
                S(r, [t]);
            },
            enter(t) {
                if (x[b] === e) return;
                let r = l,
                    i = u,
                    o = d;
                if (!n.isMounted) {
                    if (a) ((r = _ || l), (i = v || u), (o = y || d));
                    else return;
                }
                let s = !1;
                t[yl] = (e) => {
                    s ||
                        ((s = !0),
                        S(e ? o : i, [t]),
                        w.delayedLeave && w.delayedLeave(),
                        (t[yl] = void 0));
                };
                let c = t[yl].bind(null, !1);
                r ? C(r, [t, c]) : c();
            },
            leave(t, r) {
                let i = String(e.key);
                if ((t[yl] && t[yl](!0), n.isUnmounting)) return r();
                S(f, [t]);
                let a = !1;
                t[vl] = (n) => {
                    a ||
                        ((a = !0),
                        r(),
                        S(n ? h : m, [t]),
                        (t[vl] = void 0),
                        x[i] === e && delete x[i]);
                };
                let o = t[vl].bind(null, !1);
                ((x[i] = e), p ? C(p, [t, o]) : o());
            },
            clone(e) {
                let a = Dl(e, t, n, r, i);
                return (i && i(a), a);
            },
        };
    return w;
}
function Ol(e) {
    if (mu(e)) return ((e = rp(e)), (e.children = null), e);
}
function kl(e) {
    if (!mu(e)) return ol(e.type) && e.children ? wl(e.children) : e;
    if (e.component) return e.component.subTree;
    let { shapeFlag: t, children: n } = e;
    if (n) {
        if (t & 16) return n[0];
        if (t & 32 && H(n.default)) return n.default();
    }
}
function Al(e, t) {
    if (e.shapeFlag & 6 && e.component) {
        e.transition = t;
        let n = e.component.subTree;
        Al((ol(n.type) && kl(n)) || n, t);
    } else if (e.shapeFlag & 128)
        ((e.ssContent.transition = t.clone(e.ssContent)),
            (e.ssFallback.transition = t.clone(e.ssFallback)));
    else if (((e.transition = t), e.type === Lf && V(e.children))) {
        let n = Bd(e.children, !1);
        n && Al(n, t);
    }
}
function jl(e, t = !1, n) {
    let r = [],
        i = 0;
    for (let a = 0; a < e.length; a++) {
        let o = e[a],
            s =
                n == null
                    ? o.key
                    : String(n) + String(o.key == null ? a : o.key);
        o.type === Lf
            ? (o.patchFlag & 128 && i++, (r = r.concat(jl(o.children, t, s))))
            : (t || o.type !== q) && r.push(s == null ? o : rp(o, { key: s }));
    }
    if (i > 1) for (let e = 0; e < r.length; e++) r[e].patchFlag = -2;
    return r;
}
function Ml(e) {
    if (e.component) return Ml(e.component.subTree);
    if (e.type === Lf) {
        let t = V(e.children) && Bd(e.children, !1);
        return t ? Ml(t) : void 0;
    }
    if (e.type !== q) return e;
}
function Nl(e, t) {
    return H(e) ? z({ name: e.name }, t, { setup: e }) : e;
}
function Pl() {
    let e = _p();
    return e
        ? (e.appContext.config.idPrefix || `v`) + `-` + e.ids[0] + e.ids[1]++
        : ``;
}
function Fl(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + `-`, 0, 0];
}
function Il(e) {
    let t = _p(),
        n = Ps(null);
    if (t) {
        let r = t.refs === R ? (t.refs = {}) : t.refs;
        Object.defineProperty(r, e, {
            enumerable: !0,
            get: () => n.value,
            set: (e) => (n.value = e),
        });
    }
    return n;
}
function Ll(e, t) {
    let n;
    return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var Rl = new WeakMap();
function zl(e, t, n, r, i = !1) {
    if (V(e)) {
        e.forEach((e, a) => zl(e, t && (V(t) ? t[a] : t), n, r, i));
        return;
    }
    if (du(r) && !i) {
        r.shapeFlag & 512 &&
            r.type.__asyncResolved &&
            r.component.subTree.component &&
            zl(e, t, n, r.component.subTree);
        return;
    }
    let a = r.shapeFlag & 4 ? Pp(r.component) : r.el,
        o = i ? null : a,
        { i: s, r: c } = e,
        l = t && t.r,
        u = s.refs === R ? (s.refs = {}) : s.refs,
        d = s.setupState,
        f = K(d),
        p = d === R ? na : (e) => !Ll(u, e) && B(f, e),
        m = (e, t) => !(t && Ll(u, t));
    if (l != null && l !== c) {
        if ((Bl(t), U(l))) ((u[l] = null), p(l) && (d[l] = null));
        else if (Ms(l)) {
            let e = t;
            (m(l, e.k) && (l.value = null), e.k && (u[e.k] = null));
        }
    }
    if (H(c)) fc(c, s, 12, [o, u]);
    else {
        let t = U(c),
            r = Ms(c);
        if (t || r) {
            let s = () => {
                if (e.f) {
                    let n = t
                        ? p(c)
                            ? d[c]
                            : u[c]
                        : m(c) || !e.k
                          ? c.value
                          : u[e.k];
                    if (i) V(n) && aa(n, a);
                    else if (V(n)) n.includes(a) || n.push(a);
                    else if (t) ((u[c] = [a]), p(c) && (d[c] = u[c]));
                    else {
                        let t = [a];
                        (m(c, e.k) && (c.value = t), e.k && (u[e.k] = t));
                    }
                } else
                    t
                        ? ((u[c] = o), p(c) && (d[c] = o))
                        : r &&
                          (m(c, e.k) && (c.value = o), e.k && (u[e.k] = o));
            };
            if (o) {
                let t = () => {
                    (s(), Rl.delete(e));
                };
                ((t.id = -1), Rl.set(e, t), ff(t, n));
            } else (Bl(e), s());
        }
    }
}
function Bl(e) {
    let t = Rl.get(e);
    t && ((t.flags |= 8), Rl.delete(e));
}
var Vl = !1,
    Hl = () => {
        Vl ||=
            (console.error(`Hydration completed but contains mismatches.`), !0);
    },
    Ul = (e) => e.namespaceURI.includes(`svg`) && e.tagName !== `foreignObject`,
    Wl = (e) => e.namespaceURI.includes(`MathML`),
    Gl = (e) => {
        if (e.nodeType === 1) {
            if (Ul(e)) return `svg`;
            if (Wl(e)) return `mathml`;
        }
    },
    Kl = (e) => e.nodeType === 8;
function ql(e) {
    let {
            mt: t,
            p: n,
            o: {
                patchProp: r,
                createText: i,
                nextSibling: a,
                parentNode: o,
                remove: s,
                insert: c,
                createComment: l,
            },
        } = e,
        u = (e, t) => {
            t.hasChildNodes()
                ? (d(t.firstChild, e, null, null, null), kc(), (t._vnode = e))
                : (n(null, e, t), kc(), (t._vnode = e));
        },
        d = (n, r, s, l, u, y = !1) => {
            y ||= !!r.dynamicChildren;
            let b = Kl(n) && n.data === `[`,
                x = () => h(n, r, s, l, u, b),
                { type: S, ref: C, shapeFlag: w, patchFlag: T } = r,
                E = n.nodeType;
            ((r.el = n), T === -2 && ((y = !1), (r.dynamicChildren = null)));
            let D = null;
            switch (S) {
                case Rf:
                    E === 3
                        ? (n.data !== r.children &&
                              (Hl(), (n.data = r.children)),
                          (D = a(n)))
                        : r.children === ``
                          ? (c((r.el = i(``)), o(n), n), (D = n))
                          : (D = x());
                    break;
                case q:
                    v(n)
                        ? ((D = a(n)), _((r.el = n.content.firstChild), n, s))
                        : (D = E !== 8 || b ? x() : a(n));
                    break;
                case zf:
                    if (
                        (b && ((n = a(n)), (E = n.nodeType)),
                        E === 1 || E === 3)
                    ) {
                        D = n;
                        let e = !r.children.length;
                        for (let t = 0; t < r.staticCount; t++)
                            (e &&
                                (r.children +=
                                    D.nodeType === 1 ? D.outerHTML : D.data),
                                t === r.staticCount - 1 && (r.anchor = D),
                                (D = a(D)));
                        return b ? a(D) : D;
                    }
                    x();
                    break;
                case Lf:
                    D = b ? m(n, r, s, l, u, y) : x();
                    break;
                default:
                    if (w & 1)
                        D =
                            (E !== 1 ||
                                r.type.toLowerCase() !==
                                    n.tagName.toLowerCase()) &&
                            !v(n)
                                ? x()
                                : f(n, r, s, l, u, y);
                    else if (w & 6) {
                        r.slotScopeIds = u;
                        let e = o(n);
                        if (
                            ((D = b
                                ? g(n)
                                : Kl(n) && n.data === `teleport start`
                                  ? g(n, n.data, `teleport end`)
                                  : a(n)),
                            t(r, e, null, s, l, Gl(e), y),
                            (du(r) || r.component.asyncDep) &&
                                !r.component.subTree)
                        ) {
                            let t;
                            (b
                                ? ((t = J(zf)),
                                  (t.anchor = D
                                      ? D.previousSibling
                                      : e.lastChild))
                                : (t =
                                      n.nodeType === 3
                                          ? ip(``)
                                          : J(n.nodeType === 8 ? q : `div`)),
                                (t.el = n),
                                (r.component.subTree = t));
                        }
                    } else
                        w & 64
                            ? (D =
                                  E === 8
                                      ? r.type.hydrate(n, r, s, l, u, y, e, p)
                                      : x())
                            : w & 128 &&
                              (D = r.type.hydrate(
                                  n,
                                  r,
                                  s,
                                  l,
                                  Gl(o(n)),
                                  u,
                                  y,
                                  e,
                                  d,
                              ));
            }
            return (C != null && zl(C, null, l, r), D);
        },
        f = (e, t, n, i, a, o) => {
            o ||= !!t.dynamicChildren;
            let {
                    type: c,
                    dynamicProps: l,
                    props: u,
                    patchFlag: d,
                    shapeFlag: f,
                    dirs: m,
                    transition: h,
                } = t,
                g = c === `input` || c === `option`,
                y = !!l;
            if (g || y || d !== -1) {
                m && Gc(t, null, n, `created`);
                let c = !1;
                if (v(e)) {
                    c =
                        vf(null, h) &&
                        n &&
                        n.vnode.props &&
                        n.vnode.props.appear;
                    let r = e.content.firstChild;
                    if (c) {
                        let e = r.getAttribute(`class`);
                        (e && (r.$cls = e), h.beforeEnter(r));
                    }
                    (_(r, e, n), (t.el = e = r));
                }
                if (f & 16 && !(u && (u.innerHTML || u.textContent))) {
                    let r = p(e.firstChild, t, e, n, i, a, o);
                    for (r && !Ql(e, 1) && Hl(); r;) {
                        let e = r;
                        ((r = r.nextSibling), s(e));
                    }
                } else if (f & 8) {
                    let n = t.children;
                    n[0] ===
                        `
` &&
                        (e.tagName === `PRE` || e.tagName === `TEXTAREA`) &&
                        (n = n.slice(1));
                    let { textContent: r } = e;
                    r !== n &&
                        r !==
                            n.replace(
                                /\r\n|\r/g,
                                `
`,
                            ) &&
                        (Ql(e, 0) || Hl(), (e.textContent = t.children));
                }
                if (u) {
                    if (g || y || !o || d & 48) {
                        let t = e.tagName.includes(`-`),
                            i = e.namespaceURI.includes(`svg`)
                                ? `svg`
                                : e.namespaceURI.includes(`MathML`)
                                  ? `mathml`
                                  : void 0;
                        for (let a in u)
                            if (
                                (g &&
                                    (a.endsWith(`value`) ||
                                        a === `indeterminate`)) ||
                                (ra(a) && !va(a)) ||
                                a[0] === `.` ||
                                (t && !va(a)) ||
                                (l && l.includes(a))
                            ) {
                                if (Yl(e, a, u[a])) continue;
                                r(e, a, null, u[a], i, n);
                            }
                    } else if (u.onClick)
                        r(e, `onClick`, null, u.onClick, void 0, n);
                    else if (d & 4 && Ts(u.style))
                        for (let e in u.style) u.style[e];
                }
                let b;
                ((b = u && u.onVnodeBeforeMount) && dp(b, n, t),
                    m && Gc(t, null, n, `beforeMount`),
                    ((b = u && u.onVnodeMounted) || m || c) &&
                        Pf(() => {
                            (b && dp(b, n, t),
                                c && h.enter(e),
                                m && Gc(t, null, n, `mounted`));
                        }, i));
            }
            return e.nextSibling;
        },
        p = (e, t, r, o, s, l, u) => {
            u ||= !!t.dynamicChildren;
            let f = t.children,
                p = f.length,
                m = !1;
            for (let t = 0; t < p; t++) {
                let h = u ? f[t] : (f[t] = sp(f[t])),
                    g = h.type === Rf;
                e
                    ? (g &&
                          !u &&
                          t + 1 < p &&
                          sp(f[t + 1]).type === Rf &&
                          (c(i(e.data.slice(h.children.length)), r, a(e)),
                          (e.data = h.children)),
                      (e = d(e, h, o, s, l, u)))
                    : g && !h.children
                      ? c((h.el = i(``)), r)
                      : (m || ((m = !0), Ql(r, 1) || Hl()),
                        n(null, h, r, null, o, s, Gl(r), l));
            }
            return e;
        },
        m = (e, t, n, r, i, s) => {
            let { slotScopeIds: u } = t;
            u && (i = i ? i.concat(u) : u);
            let d = o(e),
                f = p(a(e), t, d, n, r, i, s);
            return f && Kl(f) && f.data === `]`
                ? a((t.anchor = f))
                : (Hl(), c((t.anchor = l(`]`)), d, f), f);
        },
        h = (e, t, r, i, c, l) => {
            if ((eu(e, t) || Hl(), (t.el = null), l)) {
                let t = g(e);
                for (;;) {
                    let n = a(e);
                    if (n && n !== t) s(n);
                    else break;
                }
            }
            let u = a(e),
                d = o(e);
            return (
                s(e),
                n(null, t, d, u, r, i, Gl(d), c),
                r && ((r.vnode.el = t.el), Kd(r, t.el)),
                u
            );
        },
        g = (e, t = `[`, n = `]`) => {
            let r = 0;
            for (; e;)
                if (
                    ((e = a(e)),
                    e && Kl(e) && (e.data === t && r++, e.data === n))
                ) {
                    if (r === 0) return a(e);
                    r--;
                }
            return e;
        },
        _ = (e, t, n) => {
            let r = t.parentNode;
            r && r.replaceChild(e, t);
            let i = n;
            for (; i;)
                (i.vnode.el === t && (i.vnode.el = i.subTree.el = e),
                    (i = i.parent));
        },
        v = (e) => e.nodeType === 1 && e.tagName === `TEMPLATE`;
    return [u, d];
}
var Jl = new Set([`src`, `srcset`, `href`, `poster`]);
function Yl(e, t, n) {
    return Jl.has(t) ? e.getAttribute(t) === (n == null ? null : `${n}`) : !1;
}
var Xl = `data-allow-mismatch`,
    Zl = { 0: `text`, 1: `children`, 2: `class`, 3: `style`, 4: `attribute` };
function Ql(e, t) {
    if (t === 0 || t === 1)
        for (; e && !e.hasAttribute(Xl);) e = e.parentElement;
    return $l(e && e.getAttribute(Xl), t);
}
function $l(e, t) {
    if (e == null) return !1;
    if (e === ``) return !0;
    {
        let n = e.split(`,`);
        return t === 0 && n.includes(`children`) ? !0 : n.includes(Zl[t]);
    }
}
function eu(e, t) {
    return Ql(e.parentElement, 1) || tu(e) || nu(t);
}
function tu(e) {
    return e.nodeType === 1 && $l(e.getAttribute(Xl), 1);
}
function nu({ props: e }) {
    let t = e && e[Xl];
    return typeof t == `string` && $l(t, 1);
}
var ru = Ma().requestIdleCallback || ((e) => setTimeout(e, 1)),
    iu = Ma().cancelIdleCallback || ((e) => clearTimeout(e)),
    au =
        (e = 1e4) =>
        (t) => {
            let n = ru(t, { timeout: e });
            return () => iu(n);
        };
function ou(e) {
    let { top: t, left: n, bottom: r, right: i } = e.getBoundingClientRect(),
        { innerHeight: a, innerWidth: o } = window;
    return (
        ((t > 0 && t < a) || (r > 0 && r < a)) &&
        ((n > 0 && n < o) || (i > 0 && i < o))
    );
}
var su = (e) => (t, n) => {
        let r = new IntersectionObserver((e) => {
                for (let n of e)
                    if (n.isIntersecting) {
                        (r.disconnect(), t());
                        break;
                    }
            }, e),
            i = (e) => {
                if (ou(e)) return (t(), r.disconnect(), !1);
                if (getComputedStyle(e).display === `contents`) {
                    for (let t = 0; t < e.children.length; t++)
                        if (i(e.children[t]) === !1) return !1;
                }
                r.observe(e);
            };
        return (
            n((e) => {
                if (e instanceof Element) return i(e);
            }),
            () => r.disconnect()
        );
    },
    cu = (e) => (t) => {
        if (e) {
            let n = matchMedia(e);
            if (n.matches) t();
            else
                return (
                    n.addEventListener(`change`, t, { once: !0 }),
                    () => n.removeEventListener(`change`, t)
                );
        }
    },
    lu =
        (e = []) =>
        (t, n) => {
            U(e) && (e = [e]);
            let r = !1,
                i = (e) => {
                    r ||
                        ((r = !0),
                        a(),
                        t(),
                        e.target.dispatchEvent(new e.constructor(e.type, e)));
                },
                a = () => {
                    n((t) => {
                        for (let n of e) t.removeEventListener(n, i);
                    });
                };
            return (
                n((t) => {
                    for (let n of e) t.addEventListener(n, i, { once: !0 });
                }),
                a
            );
        };
function uu(e, t) {
    if (Kl(e) && e.data === `[`) {
        let n = 1,
            r = e.nextSibling;
        for (; r;) {
            if (r.nodeType === 1) {
                if (t(r) === !1) break;
            } else if (Kl(r)) {
                if (r.data === `]`) {
                    if (--n === 0) break;
                } else r.data === `[` && n++;
            }
            r = r.nextSibling;
        }
    } else t(e);
}
var du = (e) => !!e.type.__asyncLoader;
function fu(e) {
    H(e) && (e = { loader: e });
    let {
            loader: t,
            loadingComponent: n,
            errorComponent: r,
            delay: i = 200,
            hydrate: a,
            timeout: o,
            suspensible: s = !0,
            onError: c,
        } = e,
        l = null,
        u,
        d = 0,
        f = () => (d++, (l = null), p()),
        p = () => {
            let e;
            return (
                l ||
                (e = l =
                    t()
                        .catch((e) => {
                            if (
                                ((e =
                                    e instanceof Error ? e : Error(String(e))),
                                c)
                            )
                                return new Promise((t, n) => {
                                    c(
                                        e,
                                        () => t(f()),
                                        () => n(e),
                                        d + 1,
                                    );
                                });
                            throw e;
                        })
                        .then((t) =>
                            e !== l && l
                                ? l
                                : (t &&
                                      (t.__esModule ||
                                          t[Symbol.toStringTag] === `Module`) &&
                                      (t = t.default),
                                  (u = t),
                                  t),
                        ))
            );
        };
    return Nl({
        name: `AsyncComponentWrapper`,
        __asyncLoader: p,
        __asyncHydrate(e, t, n) {
            let r = e.isConnected,
                i = !1;
            (t.bu ||= []).push(() => (i = !0));
            let o = () => {
                    i || !e.parentNode || (r && !e.isConnected) || n();
                },
                s = a
                    ? () => {
                          let n = a(o, (t) => uu(e, t));
                          n && (t.bum ||= []).push(n);
                      }
                    : o;
            u ? s() : p().then(() => !t.isUnmounted && s());
        },
        get __asyncResolved() {
            return u;
        },
        setup() {
            let e = gp;
            if ((Fl(e), u)) return () => pu(u, e);
            let t = (t) => {
                ((l = null), mc(t, e, 13, !r));
            };
            if ((s && e.suspense) || Cp)
                return p()
                    .then((t) => () => pu(t, e))
                    .catch(
                        (e) => (t(e), () => (r ? J(r, { error: e }) : null)),
                    );
            let a = Ns(!1),
                c = Ns(),
                d = Ns(!!i),
                f,
                m;
            return (
                Au(() => {
                    (f != null && clearTimeout(f),
                        m != null && clearTimeout(m));
                }),
                i &&
                    (m = setTimeout(() => {
                        e.isUnmounted || (d.value = !1);
                    }, i)),
                o != null &&
                    (f = setTimeout(() => {
                        if (!e.isUnmounted && !a.value && !c.value) {
                            let e = Error(
                                `Async component timed out after ${o}ms.`,
                            );
                            (t(e), (c.value = e));
                        }
                    }, o)),
                p()
                    .then(() => {
                        e.isUnmounted ||
                            ((a.value = !0),
                            e.parent &&
                                mu(e.parent.vnode) &&
                                e.parent.update());
                    })
                    .catch((n) => {
                        e.isUnmounted ? (l = null) : (t(n), (c.value = n));
                    }),
                () => {
                    if (a.value && u) return pu(u, e);
                    if (c.value && r) return J(r, { error: c.value });
                    if (n && !d.value) return pu(n, e);
                }
            );
        },
    });
}
function pu(e, t) {
    let { ref: n, props: r, children: i, ce: a } = t.vnode,
        o = J(e, r, i);
    return ((o.ref = n), (o.ce = a), delete t.vnode.ce, o);
}
var mu = (e) => e.type.__isKeepAlive,
    hu = {
        name: `KeepAlive`,
        __isKeepAlive: !0,
        props: {
            include: [String, RegExp, Array],
            exclude: [String, RegExp, Array],
            max: [String, Number],
        },
        setup(e, { slots: t }) {
            let n = _p(),
                r = n.ctx;
            if (!r.renderer)
                return () => {
                    let e = t.default && t.default();
                    return e && e.length === 1 ? e[0] : e;
                };
            let i = new Map(),
                a = new Set(),
                o = null,
                s = n.suspense,
                {
                    renderer: {
                        p: c,
                        m: l,
                        um: u,
                        o: { createElement: d },
                    },
                } = r,
                f = d(`div`);
            ((r.activate = (e, t, n, r, i) => {
                let a = e.component;
                (l(e, t, n, 0, s),
                    c(a.vnode, e, t, n, a, s, r, e.slotScopeIds, i),
                    ff(() => {
                        ((a.isDeactivated = !1), a.a && Da(a.a));
                        let t = e.props && e.props.onVnodeMounted;
                        t && dp(t, a.parent, e);
                    }, s));
            }),
                (r.deactivate = (e) => {
                    let t = e.component;
                    (Sf(t.m),
                        Sf(t.a),
                        l(e, f, null, 1, s),
                        ff(() => {
                            t.da && Da(t.da);
                            let n = e.props && e.props.onVnodeUnmounted;
                            (n && dp(n, t.parent, e), (t.isDeactivated = !0));
                        }, s));
                }));
            function p(e) {
                (xu(e), u(e, n, s, !0));
            }
            function m(e) {
                i.forEach((t, n) => {
                    let r = Fp(du(t) ? t.type.__asyncResolved || {} : t.type);
                    r && !e(r) && h(n);
                });
            }
            function h(e) {
                let t = i.get(e);
                (t && (!o || !Xf(t, o)) ? p(t) : o && (xu(o), t && xu(t)),
                    i.delete(e),
                    a.delete(e));
            }
            el(
                () => [e.include, e.exclude],
                ([e, t]) => {
                    (e && m((t) => gu(e, t)), t && m((e) => !gu(t, e)));
                },
                { flush: `post`, deep: !0 },
            );
            let g = null,
                _ = () => {
                    g != null &&
                        (wf(n.subTree.type)
                            ? ff(() => {
                                  let e = Su(n.subTree);
                                  e.component && i.set(g, e);
                              }, n.subTree.suspense)
                            : i.set(g, Su(n.subTree)));
                };
            return (
                Eu(_),
                Ou(_),
                ku(() => {
                    i.forEach((e) => {
                        let { subTree: t, suspense: r } = n,
                            i = Su(t);
                        if (e.type === i.type && e.key === i.key) {
                            xu(i);
                            let e = i.component.da;
                            e && ff(e, r);
                        } else p(e);
                    });
                }),
                () => {
                    if (((g = null), !t.default)) return (o = null);
                    let n = t.default(),
                        r = n[0];
                    if (n.length > 1) return ((o = null), n);
                    if (!Yf(r) || (!(r.shapeFlag & 4) && !(r.shapeFlag & 128)))
                        return ((o = null), r);
                    let s = Su(r);
                    if (s.type === q) return ((o = null), s);
                    let c = s.type,
                        l = Fp(du(s) ? s.type.__asyncResolved || {} : c),
                        { include: u, exclude: d, max: f } = e;
                    if ((u && (!l || !gu(u, l))) || (d && l && gu(d, l)))
                        return ((s.shapeFlag &= -257), (o = s), r);
                    let p = s.key == null ? c : s.key,
                        m = i.get(p);
                    return (
                        s.el &&
                            ((s = rp(s)),
                            r.shapeFlag & 128 && (r.ssContent = s)),
                        (g = p),
                        m
                            ? ((s.el = m.el),
                              (s.component = m.component),
                              s.transition && Al(s, s.transition),
                              (s.shapeFlag |= 512),
                              a.delete(p),
                              a.add(p))
                            : (a.add(p),
                              f &&
                                  a.size > parseInt(f, 10) &&
                                  h(a.values().next().value)),
                        (s.shapeFlag |= 256),
                        (o = s),
                        wf(r.type) ? r : s
                    );
                }
            );
        },
    };
function gu(e, t) {
    return V(e)
        ? e.some((e) => gu(e, t))
        : U(e)
          ? e.split(`,`).includes(t)
          : ua(e)
            ? ((e.lastIndex = 0), e.test(t))
            : !1;
}
function _u(e, t) {
    yu(e, `a`, t);
}
function vu(e, t) {
    yu(e, `da`, t);
}
function yu(e, t, n = gp) {
    let r = (e.__wdc ||= () => {
        let t = n;
        for (; t;) {
            if (t.isDeactivated) return;
            t = t.parent;
        }
        return e();
    });
    if ((Cu(t, r, n), n)) {
        let e = n.parent;
        for (; e && e.parent;)
            (mu(e.parent.vnode) && bu(r, t, n, e), (e = e.parent));
    }
}
function bu(e, t, n, r) {
    let i = Cu(t, e, r, !0);
    Au(() => {
        aa(r[t], i);
    }, n);
}
function xu(e) {
    ((e.shapeFlag &= -257), (e.shapeFlag &= -513));
}
function Su(e) {
    return e.shapeFlag & 128 ? e.ssContent : e;
}
function Cu(e, t, n = gp, r = !1) {
    if (n) {
        let i = n[e] || (n[e] = []),
            a = (t.__weh ||= (...r) => {
                wo();
                let i = bp(n),
                    a = pc(t, n, e, r);
                return (i(), To(), a);
            });
        return (r ? i.unshift(a) : i.push(a), a);
    }
}
var wu =
        (e) =>
        (t, n = gp) => {
            (Cp && e !== `sp`) || Cu(e, (...e) => t(...e), n);
        },
    Tu = wu(`bm`),
    Eu = wu(`m`),
    Du = wu(`bu`),
    Ou = wu(`u`),
    ku = wu(`bum`),
    Au = wu(`um`),
    ju = wu(`sp`),
    Mu = wu(`rtg`),
    Nu = wu(`rtc`);
function Pu(e, t = gp) {
    Cu(`ec`, e, t);
}
var Fu = `components`,
    Iu = `directives`;
function Lu(e, t) {
    return Vu(Fu, e, !0, t) || e;
}
var Ru = Symbol.for(`v-ndc`);
function zu(e) {
    return U(e) ? Vu(Fu, e, !1) || e : e || Ru;
}
function Bu(e) {
    return Vu(Iu, e);
}
function Vu(e, t, n = !0, r = !1) {
    let i = Lc || gp;
    if (i) {
        let n = i.type;
        if (e === Fu) {
            let e = Fp(n, !1);
            if (e && (e === t || e === xa(t) || e === wa(xa(t)))) return n;
        }
        let a = Hu(i[e] || n[e], t) || Hu(i.appContext[e], t);
        return !a && r ? n : a;
    }
}
function Hu(e, t) {
    return e && (e[t] || e[xa(t)] || e[wa(xa(t))]);
}
function Uu(e, t, n, r) {
    let i,
        a = n && n[r],
        o = V(e);
    if (o || U(e)) {
        let n = o && Ts(e),
            r = !1,
            s = !1;
        (n && ((r = !Ds(e)), (s = Es(e)), (e = zo(e))), (i = Array(e.length)));
        for (let n = 0, o = e.length; n < o; n++)
            i[n] = t(
                r ? (s ? js(As(e[n])) : As(e[n])) : e[n],
                n,
                void 0,
                a && a[n],
            );
    } else if (typeof e == `number`) {
        if (!Number.isInteger(e) || e < 0) i = [];
        else {
            i = Array(e);
            for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
        }
    } else if (W(e)) {
        if (e[Symbol.iterator])
            i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
        else {
            let n = Object.keys(e);
            i = Array(n.length);
            for (let r = 0, o = n.length; r < o; r++) {
                let o = n[r];
                i[r] = t(e[o], o, r, a && a[r]);
            }
        }
    } else i = [];
    return (n && (n[r] = i), i);
}
function Wu(e, t) {
    for (let n = 0; n < t.length; n++) {
        let r = t[n];
        if (V(r)) for (let t = 0; t < r.length; t++) e[r[t].name] = r[t].fn;
        else
            r &&
                (e[r.name] = r.key
                    ? (...e) => {
                          let t = r.fn(...e);
                          return (t && (t.key = r.key), t);
                      }
                    : r.fn);
    }
    return e;
}
function Gu(e, t, n, r, i, a) {
    if (((n ??= {}), Lc.ce || (Lc.parent && du(Lc.parent) && Lc.parent.ce))) {
        let e = a != null && n.key == null ? z({}, n, { key: a }) : n,
            i = Object.keys(e).length > 0;
        return (
            t !== 'default' && (e.name = t),
            Hf(),
            Jf(Lf, null, [J(`slot`, e, r && r())], i ? -2 : 64)
        );
    }
    let o = e[t];
    o && o._c && (o._d = !1);
    let s = Bf.length;
    Hf();
    let c;
    try {
        let i = o && Ku(o(n)),
            s = n.key || a || (i && i.key);
        c = Jf(
            Lf,
            { key: (s && !da(s) ? s : `_${t}`) + (!i && r ? `_fb` : ``) },
            i || (r ? r() : []),
            i && e._ === 1 ? 64 : -2,
        );
    } catch (e) {
        for (let e = Bf.length; e > s; e--) Uf();
        throw e;
    } finally {
        o && o._c && (o._d = !0);
    }
    return (!i && c.scopeId && (c.slotScopeIds = [c.scopeId + `-s`]), c);
}
function Ku(e) {
    return e.some(
        (e) => !Yf(e) || !(e.type === q || (e.type === Lf && !Ku(e.children))),
    )
        ? e
        : null;
}
function qu(e, t) {
    let n = {};
    for (let r in e) n[t && /[A-Z]/.test(r) ? `on:${r}` : Ta(r)] = e[r];
    return n;
}
var Ju = (e) => (e ? (Sp(e) ? Pp(e) : Ju(e.parent)) : null),
    Yu = z(Object.create(null), {
        $: (e) => e,
        $el: (e) => e.vnode.el,
        $data: (e) => e.data,
        $props: (e) => e.props,
        $attrs: (e) => e.attrs,
        $slots: (e) => e.slots,
        $refs: (e) => e.refs,
        $parent: (e) => Ju(e.parent),
        $root: (e) => Ju(e.root),
        $host: (e) => e.ce,
        $emit: (e) => e.emit,
        $options: (e) => yd(e),
        $forceUpdate: (e) =>
            (e.f ||= () => {
                Tc(e.update);
            }),
        $nextTick: (e) => (e.n ||= Cc.bind(e.proxy)),
        $watch: (e) => nl.bind(e),
    }),
    Xu = (e, t) => e !== R && !e.__isScriptSetup && B(e, t),
    Zu = {
        get({ _: e }, t) {
            if (t === `__v_skip`) return !0;
            let {
                ctx: n,
                setupState: r,
                data: i,
                props: a,
                accessCache: o,
                type: s,
                appContext: c,
            } = e;
            if (t[0] !== `$`) {
                let e = o[t];
                if (e !== void 0)
                    switch (e) {
                        case 1:
                            return r[t];
                        case 2:
                            return i[t];
                        case 4:
                            return n[t];
                        case 3:
                            return a[t];
                    }
                else if (Xu(r, t)) return ((o[t] = 1), r[t]);
                else if (i !== R && B(i, t)) return ((o[t] = 2), i[t]);
                else if (B(a, t)) return ((o[t] = 3), a[t]);
                else if (n !== R && B(n, t)) return ((o[t] = 4), n[t]);
                else md && (o[t] = 0);
            }
            let l = Yu[t],
                u,
                d;
            if (l) return (t === `$attrs` && Fo(e.attrs, `get`, ``), l(e));
            if ((u = s.__cssModules) && (u = u[t])) return u;
            if (n !== R && B(n, t)) return ((o[t] = 4), n[t]);
            if (((d = c.config.globalProperties), B(d, t))) return d[t];
        },
        set({ _: e }, t, n) {
            let { data: r, setupState: i, ctx: a } = e;
            return Xu(i, t)
                ? ((i[t] = n), !0)
                : r !== R && B(r, t)
                  ? ((r[t] = n), !0)
                  : B(e.props, t) || (t[0] === `$` && t.slice(1) in e)
                    ? !1
                    : ((a[t] = n), !0);
        },
        has(
            {
                _: {
                    data: e,
                    setupState: t,
                    accessCache: n,
                    ctx: r,
                    appContext: i,
                    props: a,
                    type: o,
                },
            },
            s,
        ) {
            let c;
            return !!(
                n[s] ||
                (e !== R && s[0] !== `$` && B(e, s)) ||
                Xu(t, s) ||
                B(a, s) ||
                B(r, s) ||
                B(Yu, s) ||
                B(i.config.globalProperties, s) ||
                ((c = o.__cssModules) && c[s])
            );
        },
        defineProperty(e, t, n) {
            return (
                n.get == null
                    ? B(n, `value`) && this.set(e, t, n.value, null)
                    : (e._.accessCache[t] = 0),
                Reflect.defineProperty(e, t, n)
            );
        },
    },
    Qu = z({}, Zu, {
        get(e, t) {
            if (t !== Symbol.unscopables) return Zu.get(e, t, e);
        },
        has(e, t) {
            return t[0] !== `_` && !Na(t);
        },
    });
function $u() {
    return null;
}
function ed() {
    return null;
}
function td(e) {}
function nd(e) {}
function rd() {
    return null;
}
function id() {}
function ad(e, t) {
    return null;
}
function od() {
    return cd(`useSlots`).slots;
}
function sd() {
    return cd(`useAttrs`).attrs;
}
function cd(e) {
    let t = _p();
    return (t.setupContext ||= Np(t));
}
function ld(e) {
    return V(e) ? e.reduce((e, t) => ((e[t] = null), e), {}) : e;
}
function ud(e, t) {
    let n = ld(e);
    for (let e in t) {
        if (e.startsWith(`__skip`)) continue;
        let r = n[e];
        (r
            ? V(r) || H(r)
                ? (r = n[e] = { type: r, default: t[e] })
                : (r.default = t[e])
            : r === null && (r = n[e] = { default: t[e] }),
            r && t[`__skip_${e}`] && (r.skipFactory = !0));
    }
    return n;
}
function dd(e, t) {
    return !e || !t ? e || t : V(e) && V(t) ? e.concat(t) : z({}, ld(e), ld(t));
}
function fd(e, t) {
    let n = {};
    for (let r in e)
        t.includes(r) ||
            Object.defineProperty(n, r, { enumerable: !0, get: () => e[r] });
    return n;
}
function pd(e) {
    let t = _p(),
        n = Cp,
        r = e();
    (xp(), n && yp(!1));
    let i = () => {
            (bp(t), n && yp(!0));
        },
        a = () => {
            (_p() !== t && t.scope.off(), xp(), n && yp(!1));
        };
    return (
        fa(r) &&
            (r = r.catch((e) => {
                throw (
                    i(),
                    Promise.resolve().then(() => Promise.resolve().then(a)),
                    e
                );
            })),
        [
            r,
            () => {
                (i(), Promise.resolve().then(a));
            },
        ]
    );
}
var md = !0;
function hd(e) {
    let t = yd(e),
        n = e.proxy,
        r = e.ctx;
    ((md = !1), t.beforeCreate && _d(t.beforeCreate, e, `bc`));
    let {
        data: i,
        computed: a,
        methods: o,
        watch: s,
        provide: c,
        inject: l,
        created: u,
        beforeMount: d,
        mounted: f,
        beforeUpdate: p,
        updated: m,
        activated: h,
        deactivated: g,
        beforeDestroy: _,
        beforeUnmount: v,
        destroyed: y,
        unmounted: b,
        render: x,
        renderTracked: S,
        renderTriggered: C,
        errorCaptured: w,
        serverPrefetch: T,
        expose: E,
        inheritAttrs: D,
        components: ee,
        directives: te,
        filters: ne,
    } = t;
    if ((l && gd(l, r, null), o))
        for (let e in o) {
            let t = o[e];
            H(t) && (r[e] = t.bind(n));
        }
    if (i) {
        let t = i.call(n, n);
        W(t) && (e.data = bs(t));
    }
    if (((md = !0), a))
        for (let e in a) {
            let t = a[e],
                i = Y({
                    get: H(t) ? t.bind(n, n) : H(t.get) ? t.get.bind(n, n) : ta,
                    set: !H(t) && H(t.set) ? t.set.bind(n) : ta,
                });
            Object.defineProperty(r, e, {
                enumerable: !0,
                configurable: !0,
                get: () => i.value,
                set: (e) => (i.value = e),
            });
        }
    if (s) for (let e in s) vd(s[e], r, n, e);
    if (c) {
        let e = H(c) ? c.call(n) : c;
        Reflect.ownKeys(e).forEach((t) => {
            Kc(t, e[t]);
        });
    }
    u && _d(u, e, `c`);
    function O(e, t) {
        V(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
    }
    if (
        (O(Tu, d),
        O(Eu, f),
        O(Du, p),
        O(Ou, m),
        O(_u, h),
        O(vu, g),
        O(Pu, w),
        O(Nu, S),
        O(Mu, C),
        O(ku, v),
        O(Au, b),
        O(ju, T),
        V(E))
    ) {
        if (E.length) {
            let t = (e.exposed ||= {});
            E.forEach((e) => {
                Object.defineProperty(t, e, {
                    get: () => n[e],
                    set: (t) => (n[e] = t),
                    enumerable: !0,
                });
            });
        } else e.exposed ||= {};
    }
    (x && e.render === ta && (e.render = x),
        D != null && (e.inheritAttrs = D),
        ee && (e.components = ee),
        te && (e.directives = te),
        T && Fl(e));
}
function gd(e, t, n = ta) {
    V(e) && (e = wd(e));
    for (let n in e) {
        let r = e[n],
            i;
        ((i = W(r)
            ? `default` in r
                ? qc(r.from || n, r.default, !0)
                : qc(r.from || n)
            : qc(r)),
            Ms(i)
                ? Object.defineProperty(t, n, {
                      enumerable: !0,
                      configurable: !0,
                      get: () => i.value,
                      set: (e) => (i.value = e),
                  })
                : (t[n] = i));
    }
}
function _d(e, t, n) {
    pc(V(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function vd(e, t, n, r) {
    let i = r.includes(`.`) ? rl(n, r) : () => n[r];
    if (U(e)) {
        let n = t[e];
        H(n) && el(i, n);
    } else if (H(e)) el(i, e.bind(n));
    else if (W(e)) {
        if (V(e)) e.forEach((e) => vd(e, t, n, r));
        else {
            let r = H(e.handler) ? e.handler.bind(n) : t[e.handler];
            H(r) && el(i, r, e);
        }
    }
}
function yd(e) {
    let t = e.type,
        { mixins: n, extends: r } = t,
        {
            mixins: i,
            optionsCache: a,
            config: { optionMergeStrategies: o },
        } = e.appContext,
        s = a.get(t),
        c;
    return (
        s
            ? (c = s)
            : !i.length && !n && !r
              ? (c = t)
              : ((c = {}),
                i.length && i.forEach((e) => bd(c, e, o, !0)),
                bd(c, t, o)),
        W(t) && a.set(t, c),
        c
    );
}
function bd(e, t, n, r = !1) {
    let { mixins: i, extends: a } = t;
    (a && bd(e, a, n, !0), i && i.forEach((t) => bd(e, t, n, !0)));
    for (let i in t)
        if (!(r && i === `expose`)) {
            let r = xd[i] || (n && n[i]);
            e[i] = r ? r(e[i], t[i]) : t[i];
        }
    return e;
}
var xd = {
    data: Sd,
    props: Dd,
    emits: Dd,
    methods: Ed,
    computed: Ed,
    beforeCreate: Td,
    created: Td,
    beforeMount: Td,
    mounted: Td,
    beforeUpdate: Td,
    updated: Td,
    beforeDestroy: Td,
    beforeUnmount: Td,
    destroyed: Td,
    unmounted: Td,
    activated: Td,
    deactivated: Td,
    errorCaptured: Td,
    serverPrefetch: Td,
    components: Ed,
    directives: Ed,
    watch: Od,
    provide: Sd,
    inject: Cd,
};
function Sd(e, t) {
    return t
        ? e
            ? function () {
                  return z(
                      H(e) ? e.call(this, this) : e,
                      H(t) ? t.call(this, this) : t,
                  );
              }
            : t
        : e;
}
function Cd(e, t) {
    return Ed(wd(e), wd(t));
}
function wd(e) {
    if (V(e)) {
        let t = {};
        for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
        return t;
    }
    return e;
}
function Td(e, t) {
    return e ? [...new Set([].concat(e, t))] : t;
}
function Ed(e, t) {
    return e ? z(Object.create(null), e, t) : t;
}
function Dd(e, t) {
    return e
        ? V(e) && V(t)
            ? [...new Set([...e, ...t])]
            : z(Object.create(null), ld(e), ld(t ?? {}))
        : t;
}
function Od(e, t) {
    if (!e) return t;
    if (!t) return e;
    let n = z(Object.create(null), e);
    for (let r in t) n[r] = Td(e[r], t[r]);
    return n;
}
function kd() {
    return {
        app: null,
        config: {
            isNativeTag: na,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {},
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap(),
        propsCache: new WeakMap(),
        emitsCache: new WeakMap(),
    };
}
var Ad = 0;
function jd(e, t) {
    return function (n, r = null) {
        (H(n) || (n = z({}, n)), r != null && !W(r) && (r = null));
        let i = kd(),
            a = new WeakSet(),
            o = [],
            s = !1,
            c = (i.app = {
                _uid: Ad++,
                _component: n,
                _props: r,
                _container: null,
                _context: i,
                _instance: null,
                version: Vp,
                get config() {
                    return i.config;
                },
                set config(e) {},
                use(e, ...t) {
                    return (
                        a.has(e) ||
                            (e && H(e.install)
                                ? (a.add(e), e.install(c, ...t))
                                : H(e) && (a.add(e), e(c, ...t))),
                        c
                    );
                },
                mixin(e) {
                    return (i.mixins.includes(e) || i.mixins.push(e), c);
                },
                component(e, t) {
                    return t ? ((i.components[e] = t), c) : i.components[e];
                },
                directive(e, t) {
                    return t ? ((i.directives[e] = t), c) : i.directives[e];
                },
                mount(a, o, l) {
                    if (!s) {
                        let u = c._ceVNode || J(n, r);
                        return (
                            (u.appContext = i),
                            l === !0 ? (l = `svg`) : l === !1 && (l = void 0),
                            o && t ? t(u, a) : e(u, a, l),
                            (s = !0),
                            (c._container = a),
                            (a.__vue_app__ = c),
                            Pp(u.component)
                        );
                    }
                },
                onUnmount(e) {
                    o.push(e);
                },
                unmount() {
                    s &&
                        (pc(o, c._instance, 16),
                        e(null, c._container),
                        delete c._container.__vue_app__);
                },
                provide(e, t) {
                    return ((i.provides[e] = t), c);
                },
                runWithContext(e) {
                    let t = Md;
                    Md = c;
                    try {
                        return e();
                    } finally {
                        Md = t;
                    }
                },
            });
        return c;
    };
}
var Md = null;
function Nd(e, t, n = R) {
    let r = _p(),
        i = xa(t),
        a = Ca(t),
        o = Pd(e, i),
        s = Us((o, s) => {
            let c,
                l = R,
                u;
            return (
                $c(() => {
                    let t = e[i];
                    Ea(c, t) && ((c = t), s());
                }),
                {
                    get() {
                        return (o(), n.get ? n.get(c) : c);
                    },
                    set(e) {
                        let o = n.set ? n.set(e) : e;
                        if (!Ea(o, c) && !(l !== R && Ea(e, l))) return;
                        let d = r.vnode.props,
                            f = !!(
                                d &&
                                (t in d || i in d || a in d) &&
                                (`onUpdate:${t}` in d ||
                                    `onUpdate:${i}` in d ||
                                    `onUpdate:${a}` in d)
                            );
                        (f || ((c = e), s()),
                            r.emit(`update:${t}`, o),
                            Ea(e, l) &&
                                ((Ea(e, o) && !Ea(o, u)) ||
                                    (f && l !== R && !Ea(o, c))) &&
                                s(),
                            (l = e),
                            (u = o));
                    },
                }
            );
        });
    return (
        (s[Symbol.iterator] = () => {
            let e = 0;
            return {
                next() {
                    return e < 2
                        ? { value: e++ ? o || R : s, done: !1 }
                        : { done: !0 };
                },
            };
        }),
        s
    );
}
var Pd = (e, t) =>
    t === `modelValue` || t === `model-value`
        ? e.modelModifiers
        : e[`${t}Modifiers`] ||
          e[`${xa(t)}Modifiers`] ||
          e[`${Ca(t)}Modifiers`];
function Fd(e, t, ...n) {
    if (e.isUnmounted) return;
    let r = e.vnode.props || R,
        i = n,
        a = t.startsWith(`update:`),
        o = a && Pd(r, t.slice(7));
    o &&
        (o.trim && (i = n.map((e) => (U(e) ? e.trim() : e))),
        o.number && (i = i.map(ka)));
    let s,
        c = r[(s = Ta(t))] || r[(s = Ta(xa(t)))];
    (!c && a && (c = r[(s = Ta(Ca(t)))]), c && pc(c, e, 6, i));
    let l = r[s + `Once`];
    if (l) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[s]) return;
        ((e.emitted[s] = !0), pc(l, e, 6, i));
    }
}
var Id = new WeakMap();
function Ld(e, t, n = !1) {
    let r = n ? Id : t.emitsCache,
        i = r.get(e);
    if (i !== void 0) return i;
    let a = e.emits,
        o = {},
        s = !1;
    if (!H(e)) {
        let r = (e) => {
            let n = Ld(e, t, !0);
            n && ((s = !0), z(o, n));
        };
        (!n && t.mixins.length && t.mixins.forEach(r),
            e.extends && r(e.extends),
            e.mixins && e.mixins.forEach(r));
    }
    return !a && !s
        ? (W(e) && r.set(e, null), null)
        : (V(a) ? a.forEach((e) => (o[e] = null)) : z(o, a),
          W(e) && r.set(e, o),
          o);
}
function Rd(e, t) {
    return !e || !ra(t)
        ? !1
        : ((t = t.slice(2)),
          (t = t === `Once` ? t : t.replace(/Once$/, ``)),
          B(e, t[0].toLowerCase() + t.slice(1)) || B(e, Ca(t)) || B(e, t));
}
function zd(e) {
    let {
            type: t,
            vnode: n,
            proxy: r,
            withProxy: i,
            propsOptions: [a],
            slots: o,
            attrs: s,
            emit: c,
            render: l,
            renderCache: u,
            props: d,
            data: f,
            setupState: p,
            ctx: m,
            inheritAttrs: h,
        } = e,
        g = zc(e),
        _,
        v;
    try {
        if (n.shapeFlag & 4) {
            let e = i || r,
                t = e;
            ((_ = sp(l.call(t, e, u, d, p, f, m))), (v = s));
        } else {
            let e = t;
            ((_ = sp(
                e.length > 1
                    ? e(d, { attrs: s, slots: o, emit: c })
                    : e(d, null),
            )),
                (v = t.props ? s : Vd(s)));
        }
    } catch (t) {
        ((Bf.length = 0), mc(t, e, 1), (_ = J(q)));
    }
    let y = _;
    if (v && h !== !1) {
        let e = Object.keys(v),
            { shapeFlag: t } = y;
        e.length &&
            t & 7 &&
            (a && e.some(ia) && (v = Hd(v, a)), (y = rp(y, v, !1, !0)));
    }
    return (
        n.dirs &&
            ((y = rp(y, null, !1, !0)),
            (y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs)),
        n.transition && Al((ol(y.type) && kl(y)) || y, n.transition),
        (_ = y),
        zc(g),
        _
    );
}
function Bd(e, t = !0) {
    let n;
    for (let t = 0; t < e.length; t++) {
        let r = e[t];
        if (Yf(r)) {
            if (r.type !== q || r.children === `v-if`) {
                if (n) return;
                n = r;
            }
        } else return;
    }
    return n;
}
var Vd = (e) => {
        let t;
        for (let n in e)
            (n === `class` || n === `style` || ra(n)) && ((t ||= {})[n] = e[n]);
        return t;
    },
    Hd = (e, t) => {
        let n = {};
        for (let r in e) (ia(r) && r.slice(9) in t) || (n[r] = e[r]);
        return n;
    };
function Ud(e, t, n) {
    let { props: r, children: i, component: a } = e,
        { props: o, children: s, patchFlag: c } = t,
        l = a.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && c >= 0) {
        if (c & 1024) return !0;
        if (c & 16) return r ? Wd(r, o, l) : !!o;
        if (c & 8) {
            let e = t.dynamicProps;
            for (let t = 0; t < e.length; t++) {
                let n = e[t];
                if (Gd(o, r, n) && !Rd(l, n)) return !0;
            }
        }
    } else
        return (i || s) && (!s || !s.$stable)
            ? !0
            : r === o
              ? !1
              : r
                ? !o || Wd(r, o, l)
                : !!o;
    return !1;
}
function Wd(e, t, n) {
    let r = Object.keys(t);
    if (r.length !== Object.keys(e).length) return !0;
    for (let i = 0; i < r.length; i++) {
        let a = r[i];
        if (!B(e, a) || (Gd(t, e, a) && !Rd(n, a))) return !0;
    }
    return !1;
}
function Gd(e, t, n) {
    let r = e[n],
        i = t[n];
    return n === `style` && W(r) && W(i) ? !qa(r, i) : r !== i;
}
function Kd({ vnode: e, parent: t, suspense: n }, r) {
    for (; t;) {
        let n = t.subTree;
        if (
            (n.suspense &&
                n.suspense.activeBranch === e &&
                ((n.suspense.vnode.el = n.el = r), (e = n)),
            n === e)
        )
            (((e = t.vnode).el = r), (t = t.parent));
        else break;
    }
    n && n.activeBranch === e && (n.vnode.el = r);
}
var qd = {},
    Jd = () => Object.create(qd),
    Yd = (e) => Object.getPrototypeOf(e) === qd;
function Xd(e, t, n, r = !1) {
    let i = {},
        a = Jd();
    ((e.propsDefaults = Object.create(null)), Qd(e, t, i, a));
    for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
    ((e.props = n ? (r ? i : xs(i)) : e.type.props ? i : a), (e.attrs = a));
}
function Zd(e, t, n, r) {
    let {
            props: i,
            attrs: a,
            vnode: { patchFlag: o },
        } = e,
        s = K(i),
        [c] = e.propsOptions,
        l = !1;
    if ((r || o > 0) && !(o & 16)) {
        if (o & 8) {
            let n = e.vnode.dynamicProps;
            for (let r = 0; r < n.length; r++) {
                let o = n[r];
                if (Rd(e.emitsOptions, o)) continue;
                let u = t[o];
                if (c) {
                    if (B(a, o)) u !== a[o] && ((a[o] = u), (l = !0));
                    else {
                        let t = xa(o);
                        i[t] = $d(c, s, t, u, e, !1);
                    }
                } else u !== a[o] && ((a[o] = u), (l = !0));
            }
        }
    } else {
        Qd(e, t, i, a) && (l = !0);
        let r;
        for (let a in s)
            (t && (B(t, a) || ((r = Ca(a)) !== a && B(t, r)))) ||
                (c
                    ? n &&
                      (n[a] !== void 0 || n[r] !== void 0) &&
                      (i[a] = $d(c, s, a, void 0, e, !0))
                    : delete i[a]);
        if (a !== s) for (let e in a) (t && B(t, e)) || (delete a[e], (l = !0));
    }
    l && Io(e.attrs, `set`, ``);
}
function Qd(e, t, n, r) {
    let [i, a] = e.propsOptions,
        o = !1,
        s;
    if (t)
        for (let c in t) {
            if (va(c)) continue;
            let l = t[c],
                u;
            i && B(i, (u = xa(c)))
                ? !a || !a.includes(u)
                    ? (n[u] = l)
                    : ((s ||= {})[u] = l)
                : Rd(e.emitsOptions, c) ||
                  (c in r && l === r[c]) ||
                  ((r[c] = l), (o = !0));
        }
    if (a) {
        let t = K(n),
            r = s || R;
        for (let o = 0; o < a.length; o++) {
            let s = a[o];
            n[s] = $d(i, t, s, r[s], e, !B(r, s));
        }
    }
    return o;
}
function $d(e, t, n, r, i, a) {
    let o = e[n];
    if (o != null) {
        let e = B(o, `default`);
        if (e && r === void 0) {
            let e = o.default;
            if (o.type !== Function && !o.skipFactory && H(e)) {
                let { propsDefaults: a } = i;
                if (n in a) r = a[n];
                else {
                    let o = bp(i);
                    ((r = a[n] = e.call(null, t)), o());
                }
            } else r = e;
            i.ce && i.ce._setProp(n, r);
        }
        o[0] &&
            (a && !e
                ? (r = !1)
                : o[1] && (r === `` || r === Ca(n)) && (r = !0));
    }
    return r;
}
var ef = new WeakMap();
function tf(e, t, n = !1) {
    let r = n ? ef : t.propsCache,
        i = r.get(e);
    if (i) return i;
    let a = e.props,
        o = {},
        s = [],
        c = !1;
    if (!H(e)) {
        let r = (e) => {
            c = !0;
            let [n, r] = tf(e, t, !0);
            (z(o, n), r && s.push(...r));
        };
        (!n && t.mixins.length && t.mixins.forEach(r),
            e.extends && r(e.extends),
            e.mixins && e.mixins.forEach(r));
    }
    if (!a && !c) return (W(e) && r.set(e, ea), ea);
    if (V(a))
        for (let e = 0; e < a.length; e++) {
            let t = xa(a[e]);
            nf(t) && (o[t] = R);
        }
    else if (a)
        for (let e in a) {
            let t = xa(e);
            if (nf(t)) {
                let n = a[e],
                    r = (o[t] = V(n) || H(n) ? { type: n } : z({}, n)),
                    i = r.type,
                    c = !1,
                    l = !0;
                if (V(i))
                    for (let e = 0; e < i.length; ++e) {
                        let t = i[e],
                            n = H(t) && t.name;
                        if (n === `Boolean`) {
                            c = !0;
                            break;
                        }
                        n === `String` && (l = !1);
                    }
                else c = H(i) && i.name === `Boolean`;
                ((r[0] = c), (r[1] = l), (c || B(r, `default`)) && s.push(t));
            }
        }
    let l = [o, s];
    return (W(e) && r.set(e, l), l);
}
function nf(e) {
    return e[0] !== `$` && !va(e);
}
var rf = (e) => e === `_` || e === `_ctx` || e === `$stable`,
    af = (e) => (V(e) ? e.map(sp) : [sp(e)]),
    of = (e, t, n) => {
        if (t._n) return t;
        let r = Uc((...e) => af(t(...e)), n);
        return ((r._c = !1), r);
    },
    sf = (e, t, n) => {
        let r = e._ctx;
        for (let n in e) {
            if (rf(n)) continue;
            let i = e[n];
            if (H(i)) t[n] = of(n, i, r);
            else if (i != null) {
                let e = af(i);
                t[n] = () => e;
            }
        }
    },
    cf = (e, t) => {
        let n = af(t);
        e.slots.default = () => n;
    },
    lf = (e, t, n) => {
        for (let r in t) (n || !rf(r)) && (e[r] = t[r]);
    },
    uf = (e, t, n) => {
        let r = (e.slots = Jd());
        if (e.vnode.shapeFlag & 32) {
            let e = t._;
            e ? (lf(r, t, n), n && Oa(r, `_`, e, !0)) : sf(t, r);
        } else t && cf(e, t);
    },
    df = (e, t, n) => {
        let { vnode: r, slots: i } = e,
            a = !0,
            o = R;
        if (r.shapeFlag & 32) {
            let e = t._;
            (e
                ? n && e === 1
                    ? (a = !1)
                    : lf(i, t, n)
                : ((a = !t.$stable), sf(t, i)),
                (o = t));
        } else t && (cf(e, t), (o = { default: 1 }));
        if (a) for (let e in i) !rf(e) && o[e] == null && delete i[e];
    },
    ff = Pf;
function pf(e) {
    return hf(e);
}
function mf(e) {
    return hf(e, ql);
}
function hf(e, t) {
    let n = Ma();
    n.__VUE__ = !0;
    let {
            insert: r,
            remove: i,
            patchProp: a,
            createElement: o,
            createText: s,
            createComment: c,
            setText: l,
            setElementText: u,
            parentNode: d,
            nextSibling: f,
            setScopeId: p = ta,
            insertStaticContent: m,
        } = e,
        h = (
            e,
            t,
            n,
            r = null,
            i = null,
            a = null,
            o = void 0,
            s = null,
            c = !!t.dynamicChildren,
        ) => {
            if (e === t) return;
            (e && !Xf(e, t) && ((r = de(e)), se(e, i, a, !0), (e = null)),
                t.patchFlag === -2 && ((c = !1), (t.dynamicChildren = null)),
                t.dynamicChildren &&
                    e &&
                    e.dynamicChildren &&
                    e.dynamicChildren.hasOnce &&
                    (t.dynamicChildren === ea && (t.dynamicChildren = []),
                    (t.dynamicChildren.hasOnce = !0)));
            let { type: l, ref: u, shapeFlag: d } = t;
            switch (l) {
                case Rf:
                    g(e, t, n, r);
                    break;
                case q:
                    _(e, t, n, r);
                    break;
                case zf:
                    e ?? v(t, n, r, o);
                    break;
                case Lf:
                    ee(e, t, n, r, i, a, o, s, c);
                    break;
                default:
                    d & 1
                        ? x(e, t, n, r, i, a, o, s, c)
                        : d & 6
                          ? te(e, t, n, r, i, a, o, s, c)
                          : (d & 64 || d & 128) &&
                            l.process(e, t, n, r, i, a, o, s, c, M);
            }
            u != null && i
                ? zl(u, e && e.ref, a, t || e, !t)
                : u == null && e && e.ref != null && zl(e.ref, null, a, e, !0);
        },
        g = (e, t, n, i) => {
            if (e == null) r((t.el = s(t.children)), n, i);
            else {
                let n = (t.el = e.el);
                t.children !== e.children && l(n, t.children);
            }
        },
        _ = (e, t, n, i) => {
            e == null ? r((t.el = c(t.children || ``)), n, i) : (t.el = e.el);
        },
        v = (e, t, n, r) => {
            [e.el, e.anchor] = m(e.children, t, n, r, e.el, e.anchor);
        },
        y = ({ el: e, anchor: t }, n, i) => {
            let a;
            for (; e && e !== t;) ((a = f(e)), r(e, n, i), (e = a));
            r(t, n, i);
        },
        b = ({ el: e, anchor: t }) => {
            let n;
            for (; e && e !== t;) ((n = f(e)), i(e), (e = n));
            i(t);
        },
        x = (e, t, n, r, i, a, o, s, c) => {
            if (
                (t.type === `svg`
                    ? (o = `svg`)
                    : t.type === `math` && (o = `mathml`),
                e == null)
            )
                S(t, n, r, i, a, o, s, c);
            else {
                let n = e.el && e.el._isVueCE ? e.el : null;
                try {
                    (n && n._beginPatch(), T(e, t, i, a, o, s, c));
                } finally {
                    n && n._endPatch();
                }
            }
        },
        S = (e, t, n, i, s, c, l, d) => {
            let f,
                p,
                { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
            if (
                ((f = e.el = o(e.type, c, m && m.is, m)),
                h & 8
                    ? u(f, e.children)
                    : h & 16 && w(e.children, f, null, i, s, gf(e, c), l, d),
                _ && Gc(e, null, i, `created`),
                C(f, e, e.scopeId, l, i),
                m)
            ) {
                for (let e in m)
                    e !== `value` && !va(e) && a(f, e, null, m[e], c, i);
                (`value` in m && a(f, `value`, null, m.value, c),
                    (p = m.onVnodeBeforeMount) && dp(p, i, e));
            }
            _ && Gc(e, null, i, `beforeMount`);
            let v = vf(s, g);
            (v && g.beforeEnter(f),
                r(f, t, n),
                ((p = m && m.onVnodeMounted) || v || _) &&
                    ff(() => {
                        try {
                            (p && dp(p, i, e),
                                v && g.enter(f),
                                _ && Gc(e, null, i, `mounted`));
                        } finally {
                        }
                    }, s));
        },
        C = (e, t, n, r, i) => {
            if ((n && p(e, n), r))
                for (let t = 0; t < r.length; t++) p(e, r[t]);
            if (i) {
                let n = i.subTree;
                if (
                    t === n ||
                    (wf(n.type) && (n.ssContent === t || n.ssFallback === t))
                ) {
                    let t = i.vnode;
                    C(e, t, t.scopeId, t.slotScopeIds, i.parent);
                }
            }
        },
        w = (e, t, n, r, i, a, o, s, c = 0) => {
            for (let l = c; l < e.length; l++) {
                let c = (e[l] = s ? cp(e[l]) : sp(e[l]));
                h(null, c, t, n, r, i, a, o, s);
            }
        },
        T = (e, t, n, r, i, o, s) => {
            let c = (t.el = e.el),
                { patchFlag: l, dynamicChildren: d, dirs: f } = t;
            l |= e.patchFlag & 16;
            let p = e.props || R,
                m = t.props || R,
                h;
            if (
                (n && _f(n, !1),
                (h = m.onVnodeBeforeUpdate) && dp(h, n, t, e),
                f && Gc(t, e, n, `beforeUpdate`),
                n && _f(n, !0),
                d &&
                    (!e.dynamicChildren ||
                        e.dynamicChildren.length !== d.length) &&
                    ((l = 0), (s = !1), (d = null)),
                ((p.innerHTML && m.innerHTML == null) ||
                    (p.textContent && m.textContent == null)) &&
                    u(c, ``),
                d
                    ? E(e.dynamicChildren, d, c, n, r, gf(t, i), o)
                    : s || ae(e, t, c, null, n, r, gf(t, i), o, !1),
                l > 0)
            ) {
                if (l & 16) D(c, p, m, n, i);
                else if (
                    (l & 2 &&
                        p.class !== m.class &&
                        a(c, `class`, null, m.class, i),
                    l & 4 && a(c, `style`, p.style, m.style, i),
                    l & 8)
                ) {
                    let e = t.dynamicProps;
                    for (let t = 0; t < e.length; t++) {
                        let r = e[t],
                            o = p[r],
                            s = m[r];
                        (s !== o || r === `value`) && a(c, r, o, s, i, n);
                    }
                }
                l & 1 && e.children !== t.children && u(c, t.children);
            } else !s && d == null && D(c, p, m, n, i);
            ((h = m.onVnodeUpdated) || f) &&
                ff(() => {
                    (h && dp(h, n, t, e), f && Gc(t, e, n, `updated`));
                }, r);
        },
        E = (e, t, n, r, i, a, o) => {
            for (let s = 0; s < t.length; s++) {
                let c = e[s],
                    l = t[s],
                    u = c.el || Cf(c),
                    f =
                        u && (c.type === Lf || !Xf(c, l) || c.shapeFlag & 198)
                            ? d(u)
                            : n;
                h(c, l, f, null, r, i, a, o, !0);
            }
        },
        D = (e, t, n, r, i) => {
            if (t !== n) {
                if (t !== R)
                    for (let o in t)
                        !va(o) && !(o in n) && a(e, o, t[o], null, i, r);
                for (let o in n) {
                    if (va(o)) continue;
                    let s = n[o],
                        c = t[o];
                    s !== c && o !== `value` && a(e, o, c, s, i, r);
                }
                `value` in n && a(e, `value`, t.value, n.value, i);
            }
        },
        ee = (e, t, n, i, a, o, c, l, u) => {
            let d = (t.el = e ? e.el : s(``)),
                f = (t.anchor = e ? e.anchor : s(``)),
                { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
            (h && (l = l ? l.concat(h) : h),
                e == null
                    ? (r(d, n, i),
                      r(f, n, i),
                      w(t.children || [], n, f, a, o, c, l, u))
                    : p > 0 &&
                        p & 64 &&
                        m &&
                        e.dynamicChildren &&
                        e.dynamicChildren.length === m.length
                      ? (E(e.dynamicChildren, m, n, a, o, c, l),
                        (t.key != null || (a && t === a.subTree)) &&
                            yf(e, t, !0))
                      : ae(e, t, n, f, a, o, c, l, u));
        },
        te = (e, t, n, r, i, a, o, s, c) => {
            ((t.slotScopeIds = s),
                e == null
                    ? t.shapeFlag & 512
                        ? i.ctx.activate(t, n, r, o, c)
                        : ne(t, n, r, i, a, o, c)
                    : O(e, t, c));
        },
        ne = (e, t, n, r, i, a, o) => {
            let s = (e.component = hp(e, r, i));
            if ((mu(e) && (s.ctx.renderer = M), wp(s, !1, o), s.asyncDep)) {
                if ((i && i.registerDep(s, re, o, a), !e.el)) {
                    let r = (s.subTree = J(q));
                    (_(null, r, t, n), (e.placeholder = r.el));
                }
            } else re(s, e, t, n, i, a, o);
        },
        O = (e, t, n) => {
            let r = (t.component = e.component);
            if (Ud(e, t, n)) {
                if (r.asyncDep && !r.asyncResolved) {
                    ((t.el = e.el),
                        (t.placeholder = e.placeholder),
                        ie(r, t, n));
                    return;
                }
                ((r.next = t), r.update());
            } else
                ((t.el = e.el), (t.placeholder = e.placeholder), (r.vnode = t));
        },
        re = (e, t, n, r, i, a, o) => {
            let s = () => {
                if (e.isMounted) {
                    let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
                    {
                        let n = xf(e);
                        if (n) {
                            (t && ((t.el = c.el), ie(e, t, o)),
                                n.asyncDep.then(() => {
                                    ff(() => {
                                        e.isUnmounted || l();
                                    }, i);
                                }));
                            return;
                        }
                    }
                    let u = t,
                        f;
                    (_f(e, !1),
                        t ? ((t.el = c.el), ie(e, t, o)) : (t = c),
                        n && Da(n),
                        (f = t.props && t.props.onVnodeBeforeUpdate) &&
                            dp(f, s, t, c),
                        _f(e, !0));
                    let p = zd(e),
                        m = e.subTree;
                    ((e.subTree = p),
                        h(m, p, d(m.el), de(m), e, i, a),
                        (t.el = p.el),
                        u === null && Kd(e, p.el),
                        r && ff(r, i),
                        (f = t.props && t.props.onVnodeUpdated) &&
                            ff(() => dp(f, s, t, c), i));
                } else {
                    let o,
                        { el: s, props: c } = t,
                        { bm: l, m: u, parent: d, root: f, type: p } = e,
                        m = du(t);
                    if (
                        (_f(e, !1),
                        l && Da(l),
                        !m && (o = c && c.onVnodeBeforeMount) && dp(o, d, t),
                        _f(e, !0),
                        s && me)
                    ) {
                        let t = () => {
                            ((e.subTree = zd(e)), me(s, e.subTree, e, i, null));
                        };
                        m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
                    } else {
                        f.ce &&
                            f.ce._hasShadowRoot() &&
                            f.ce._injectChildStyle(
                                p,
                                e.parent ? e.parent.type : void 0,
                            );
                        let o = (e.subTree = zd(e));
                        (h(null, o, n, r, e, i, a), (t.el = o.el));
                    }
                    if ((u && ff(u, i), !m && (o = c && c.onVnodeMounted))) {
                        let e = t;
                        ff(() => dp(o, d, e), i);
                    }
                    ((t.shapeFlag & 256 ||
                        (d && du(d.vnode) && d.vnode.shapeFlag & 256)) &&
                        e.a &&
                        ff(e.a, i),
                        (e.isMounted = !0),
                        (t = n = r = null));
                }
            };
            e.scope.on();
            let c = (e.effect = new oo(s));
            e.scope.off();
            let l = (e.update = c.run.bind(c)),
                u = (e.job = c.runIfDirty.bind(c));
            ((u.i = e),
                (u.id = e.uid),
                (c.scheduler = () => Tc(u)),
                _f(e, !0),
                l());
        },
        ie = (e, t, n) => {
            t.component = e;
            let r = e.vnode.props;
            ((e.vnode = t),
                (e.next = null),
                Zd(e, t.props, r, n),
                df(e, t.children, n),
                wo(),
                Oc(e),
                To());
        },
        ae = (e, t, n, r, i, a, o, s, c = !1) => {
            let l = e && e.children,
                d = e ? e.shapeFlag : 0,
                f = t.children,
                { patchFlag: p, shapeFlag: m } = t;
            if (p > 0) {
                if (p & 128) {
                    k(l, f, n, r, i, a, o, s, c);
                    return;
                }
                if (p & 256) {
                    oe(l, f, n, r, i, a, o, s, c);
                    return;
                }
            }
            m & 8
                ? (d & 16 && j(l, i, a), f !== l && u(n, f))
                : d & 16
                  ? m & 16
                      ? k(l, f, n, r, i, a, o, s, c)
                      : j(l, i, a, !0)
                  : (d & 8 && u(n, ``), m & 16 && w(f, n, r, i, a, o, s, c));
        },
        oe = (e, t, n, r, i, a, o, s, c) => {
            ((e ||= ea), (t ||= ea));
            let l = e.length,
                u = t.length,
                d = Math.min(l, u),
                f = 0;
            for (; f < d; f++) {
                let r = (t[f] = c ? cp(t[f]) : sp(t[f]));
                h(e[f], r, n, null, i, a, o, s, c);
            }
            l > u ? j(e, i, a, !0, !1, d) : w(t, n, r, i, a, o, s, c, d);
        },
        k = (e, t, n, r, i, a, o, s, c) => {
            let l = 0,
                u = t.length,
                d = e.length - 1,
                f = u - 1;
            for (; l <= d && l <= f;) {
                let r = e[l],
                    u = (t[l] = c ? cp(t[l]) : sp(t[l]));
                if (Xf(r, u)) h(r, u, n, null, i, a, o, s, c);
                else break;
                l++;
            }
            for (; l <= d && l <= f;) {
                let r = e[d],
                    l = (t[f] = c ? cp(t[f]) : sp(t[f]));
                if (Xf(r, l)) h(r, l, n, null, i, a, o, s, c);
                else break;
                (d--, f--);
            }
            if (l > d) {
                if (l <= f) {
                    let e = f + 1,
                        d = e < u ? t[e].el : r;
                    for (; l <= f;)
                        (h(
                            null,
                            (t[l] = c ? cp(t[l]) : sp(t[l])),
                            n,
                            d,
                            i,
                            a,
                            o,
                            s,
                            c,
                        ),
                            l++);
                }
            } else if (l > f) for (; l <= d;) (se(e[l], i, a, !0), l++);
            else {
                let p = l,
                    m = l,
                    g = new Map();
                for (l = m; l <= f; l++) {
                    let e = (t[l] = c ? cp(t[l]) : sp(t[l]));
                    e.key != null && g.set(e.key, l);
                }
                let _,
                    v = 0,
                    y = f - m + 1,
                    b = !1,
                    x = 0,
                    S = Array(y);
                for (l = 0; l < y; l++) S[l] = 0;
                for (l = p; l <= d; l++) {
                    let r = e[l];
                    if (v >= y) {
                        se(r, i, a, !0);
                        continue;
                    }
                    let u;
                    if (r.key != null) u = g.get(r.key);
                    else
                        for (_ = m; _ <= f; _++)
                            if (S[_ - m] === 0 && Xf(r, t[_])) {
                                u = _;
                                break;
                            }
                    u === void 0
                        ? se(r, i, a, !0)
                        : ((S[u - m] = l + 1),
                          u >= x ? (x = u) : (b = !0),
                          h(r, t[u], n, null, i, a, o, s, c),
                          v++);
                }
                let C = b ? bf(S) : ea;
                for (_ = C.length - 1, l = y - 1; l >= 0; l--) {
                    let e = m + l,
                        d = t[e],
                        f = t[e + 1],
                        p = e + 1 < u ? f.el || Cf(f) : r;
                    S[l] === 0
                        ? h(null, d, n, p, i, a, o, s, c)
                        : b && (_ < 0 || l !== C[_] ? A(d, n, p, 2) : _--);
                }
            }
        },
        A = (e, t, n, a, o = null) => {
            let {
                el: s,
                type: c,
                transition: l,
                children: u,
                shapeFlag: d,
            } = e;
            if (d & 6) A(e.component.subTree, t, n, a);
            else if (d & 128) e.suspense.move(t, n, a);
            else if (d & 64) c.move(e, t, n, M);
            else if (c === Lf) {
                r(s, t, n);
                for (let e = 0; e < u.length; e++) A(u[e], t, n, a);
                r(e.anchor, t, n);
            } else if (c === zf) y(e, t, n);
            else if (a !== 2 && d & 1 && l) {
                if (a === 0)
                    l.persisted && !s[vl]
                        ? r(s, t, n)
                        : (l.beforeEnter(s),
                          r(s, t, n),
                          ff(() => l.enter(s), o));
                else {
                    let { leave: a, delayLeave: o, afterLeave: c } = l,
                        u = () => {
                            e.ctx.isUnmounted ? i(s) : r(s, t, n);
                        },
                        d = () => {
                            let e = s._isLeaving || !!s[vl];
                            (s._isLeaving && s[vl](!0),
                                l.persisted && !e
                                    ? u()
                                    : a(s, () => {
                                          (u(), c && c());
                                      }));
                        };
                    o ? o(s, u, d) : d();
                }
            } else r(s, t, n);
        },
        se = (e, t, n, r = !1, i = !1) => {
            let {
                type: a,
                props: o,
                ref: s,
                children: c,
                dynamicChildren: l,
                shapeFlag: u,
                patchFlag: d,
                dirs: f,
                cacheIndex: p,
                memo: m,
            } = e;
            if (
                ((d === -2 || (l && l.hasOnce)) && (i = !1),
                s != null && (wo(), zl(s, null, n, e, !0), To()),
                p == null ||
                    (e.ctx && e.ctx !== t) ||
                    (t.renderCache[p] = void 0),
                u & 256)
            ) {
                t.ctx.deactivate(e);
                return;
            }
            let h = u & 1 && f,
                g = !du(e),
                _;
            if ((g && (_ = o && o.onVnodeBeforeUnmount) && dp(_, t, e), u & 6))
                ue(e.component, n, r);
            else {
                if (u & 128) {
                    e.suspense.unmount(n, r);
                    return;
                }
                (h && Gc(e, null, t, `beforeUnmount`),
                    u & 64
                        ? e.type.remove(e, t, n, M, r)
                        : l && !l.hasOnce && (a !== Lf || (d > 0 && d & 64))
                          ? j(l, t, n, !1, !0)
                          : ((a === Lf && d & 384) || (!i && u & 16)) &&
                            j(c, t, n),
                    r && ce(e));
            }
            let v = m != null && p == null;
            ((g && (_ = o && o.onVnodeUnmounted)) || h || v) &&
                ff(() => {
                    (_ && dp(_, t, e),
                        h && Gc(e, null, t, `unmounted`),
                        v && (e.el = null));
                }, n);
        },
        ce = (e) => {
            let { type: t, el: n, anchor: r, transition: a } = e,
                o = t === Lf;
            if (o && !a) {
                le(n, r);
                return;
            }
            if (t === zf) {
                (b(e), a && !a.persisted && a.afterLeave && a.afterLeave());
                return;
            }
            let s = o ? Ml(e) : e,
                c = () => {
                    (o ? d(n) && le(n, r) : i(n),
                        a && !a.persisted && a.afterLeave && a.afterLeave());
                };
            if (s && s.shapeFlag & 1 && a && !a.persisted) {
                let { leave: e, delayLeave: t } = a,
                    n = s.el,
                    r = () => e(n, c);
                t ? t(n, c, r) : r();
            } else c();
        },
        le = (e, t) => {
            let n;
            for (; e !== t;) ((n = f(e)), i(e), (e = n));
            i(t);
        },
        ue = (e, t, n) => {
            let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
            (Sf(c),
                Sf(l),
                r && Da(r),
                i.stop(),
                a
                    ? ((a.flags |= 8), se(o, e, t, n))
                    : e.vnode.el &&
                      o &&
                      ((o.transition = e.vnode.transition), se(o, e, t, n)),
                s && ff(s, t),
                ff(() => {
                    e.isUnmounted = !0;
                }, t));
        },
        j = (e, t, n, r = !1, i = !1, a = 0) => {
            for (let o = a; o < e.length; o++) se(e[o], t, n, r, i);
        },
        de = (e) => {
            if (e.shapeFlag & 6) return de(e.component.subTree);
            if (e.shapeFlag & 128) return e.suspense.next();
            let t = f(e.anchor || e.el),
                n = t && t[al];
            return n ? f(n) : t;
        },
        fe = (e, t, n) => {
            jc(
                () => {
                    (e == null
                        ? t._vnode && se(t._vnode, null, null, !0)
                        : h(t._vnode || null, e, t, null, null, null, n),
                        (t._vnode = e));
                },
                e && t._vnode
                    ? void 0
                    : e && e.component
                      ? e.component.uid
                      : mp(),
            );
        },
        M = {
            p: h,
            um: se,
            m: A,
            r: ce,
            mt: ne,
            mc: w,
            pc: ae,
            pbc: E,
            n: de,
            o: e,
        },
        pe,
        me;
    return (
        t && ([pe, me] = t(M)),
        { render: fe, hydrate: pe, createApp: jd(fe, pe) }
    );
}
function gf({ type: e, props: t }, n) {
    return (n === `svg` && e === `foreignObject`) ||
        (n === `mathml` &&
            e === `annotation-xml` &&
            t &&
            t.encoding &&
            t.encoding.includes(`html`))
        ? void 0
        : n;
}
function _f({ effect: e, job: t }, n) {
    n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function vf(e, t) {
    return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function yf(e, t, n = !1) {
    let r = e.children,
        i = t.children;
    if (V(r) && V(i))
        for (let e = 0; e < r.length; e++) {
            let t = r[e],
                a = i[e];
            (a.shapeFlag & 1 &&
                !a.dynamicChildren &&
                ((a.patchFlag <= 0 || a.patchFlag === 32) &&
                    ((a = i[e] = cp(i[e])), (a.el = t.el)),
                !n && a.patchFlag !== -2 && yf(t, a)),
                a.type === Rf &&
                    (a.patchFlag === -1 && (a = i[e] = cp(a)), (a.el = t.el)),
                a.type === q && !a.el && (a.el = t.el));
        }
}
function bf(e) {
    let t = e.slice(),
        n = [0],
        r,
        i,
        a,
        o,
        s,
        c = e.length;
    for (r = 0; r < c; r++) {
        let c = e[r];
        if (c !== 0) {
            if (((i = n[n.length - 1]), e[i] < c)) {
                ((t[r] = i), n.push(r));
                continue;
            }
            for (a = 0, o = n.length - 1; a < o;)
                ((s = (a + o) >> 1), e[n[s]] < c ? (a = s + 1) : (o = s));
            c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), (n[a] = r));
        }
    }
    for (a = n.length, o = n[a - 1]; a-- > 0;) ((n[a] = o), (o = t[o]));
    return n;
}
function xf(e) {
    let t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : xf(t);
}
function Sf(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Cf(e) {
    if (e.placeholder) return e.placeholder;
    let t = e.component;
    return t ? Cf(t.subTree) : null;
}
var wf = (e) => e.__isSuspense,
    Tf = 0,
    Ef = {
        name: `Suspense`,
        __isSuspense: !0,
        process(e, t, n, r, i, a, o, s, c, l) {
            if (e == null) Of(t, n, r, i, a, o, s, c, l);
            else {
                if (
                    a &&
                    a.deps > 0 &&
                    !e.suspense.isInFallback &&
                    !a.isHydrating
                ) {
                    ((t.suspense = e.suspense),
                        (t.suspense.vnode = t),
                        (t.el = e.el));
                    return;
                }
                kf(e, t, n, r, i, o, s, c, l);
            }
        },
        hydrate: jf,
        normalize: Mf,
    };
function Df(e, t) {
    let n = e.props && e.props[t];
    H(n) && n();
}
function Of(e, t, n, r, i, a, o, s, c) {
    let {
            p: l,
            o: { createElement: u },
        } = c,
        d = u(`div`),
        f = (e.suspense = Af(e, i, r, t, d, n, a, o, s, c));
    (l(null, (f.pendingBranch = e.ssContent), d, null, r, f, a, o),
        f.deps > 0
            ? (Df(e, `onPending`),
              Df(e, `onFallback`),
              l(null, e.ssFallback, t, n, r, null, a, o),
              Ff(f, e.ssFallback))
            : f.resolve(!1, !0));
}
function kf(e, t, n, r, i, a, o, s, { p: c, um: l, o: { createElement: u } }) {
    let d = (t.suspense = e.suspense);
    ((d.vnode = t), (t.el = e.el));
    let f = t.ssContent,
        p = t.ssFallback,
        {
            activeBranch: m,
            pendingBranch: h,
            isInFallback: g,
            isHydrating: _,
        } = d;
    if (h)
        ((d.pendingBranch = f),
            Xf(h, f)
                ? (d.deps++,
                  c(h, f, _ ? n : d.hiddenContainer, null, i, d, a, o, s),
                  d.deps--,
                  d.deps <= 0
                      ? d.resolve()
                      : g &&
                        !_ &&
                        !d.isFallbackMountPending &&
                        (c(m, p, n, r, i, null, a, o, s), Ff(d, p)))
                : ((d.pendingId = Tf++),
                  _ ? ((d.isHydrating = !1), (d.activeBranch = h)) : l(h, i, d),
                  (d.deps = 0),
                  (d.effects.length = 0),
                  (d.hiddenContainer = u(`div`)),
                  g
                      ? (c(null, f, d.hiddenContainer, null, i, d, a, o, s),
                        d.deps <= 0
                            ? d.resolve()
                            : d.isFallbackMountPending ||
                              (c(m, p, n, r, i, null, a, o, s), Ff(d, p)))
                      : m && Xf(m, f)
                        ? (c(m, f, n, r, i, d, a, o, s), d.resolve(!0))
                        : (c(null, f, d.hiddenContainer, null, i, d, a, o, s),
                          d.deps <= 0 && d.resolve())));
    else if (m && Xf(m, f)) (c(m, f, n, r, i, d, a, o, s), Ff(d, f));
    else if (
        (Df(t, `onPending`),
        (d.pendingBranch = f),
        (d.pendingId = f.shapeFlag & 512 ? f.component.suspenseId : Tf++),
        c(null, f, d.hiddenContainer, null, i, d, a, o, s),
        d.deps <= 0)
    )
        d.resolve();
    else {
        let { timeout: e, pendingId: t } = d;
        e > 0
            ? setTimeout(() => {
                  d.pendingId === t && d.fallback(p);
              }, e)
            : e === 0 && d.fallback(p);
    }
}
function Af(e, t, n, r, i, a, o, s, c, l, u = !1) {
    let {
            p: d,
            m: f,
            um: p,
            n: m,
            o: { parentNode: h, remove: g },
        } = l,
        _,
        v = If(e);
    v && t && t.pendingBranch && ((_ = t.pendingId), t.deps++);
    let y = e.props ? Aa(e.props.timeout) : void 0,
        b = a,
        x = {
            vnode: e,
            parent: t,
            parentComponent: n,
            namespace: o,
            container: r,
            hiddenContainer: i,
            deps: 0,
            pendingId: Tf++,
            timeout: typeof y == `number` ? y : -1,
            activeBranch: null,
            isFallbackMountPending: !1,
            pendingBranch: null,
            isInFallback: !u,
            isHydrating: u,
            isUnmounted: !1,
            effects: [],
            resolve(e = !1, n = !1) {
                let {
                        vnode: r,
                        activeBranch: i,
                        pendingBranch: o,
                        pendingId: s,
                        effects: c,
                        parentComponent: l,
                        container: u,
                        isInFallback: d,
                    } = x,
                    g = !1;
                if (x.isHydrating) x.isHydrating = !1;
                else if (!e) {
                    g = i && o.transition && o.transition.mode === `out-in`;
                    let e = !1;
                    (g &&
                        (i.transition.afterLeave = () => {
                            s === x.pendingId &&
                                (f(o, u, a === b && !e ? m(i) : a, 0),
                                Dc(c),
                                d && r.ssFallback && (r.ssFallback.el = null));
                        }),
                        i &&
                            !x.isFallbackMountPending &&
                            (h(i.el) === u && ((a = m(i)), (e = !0)),
                            p(i, l, x, !0),
                            !g &&
                                d &&
                                r.ssFallback &&
                                ff(() => (r.ssFallback.el = null), x)),
                        g || f(o, u, a, 0));
                }
                ((x.isFallbackMountPending = !1),
                    Ff(x, o),
                    (x.pendingBranch = null),
                    (x.isInFallback = !1));
                let y = x.parent,
                    S = !1;
                for (; y;) {
                    if (y.pendingBranch) {
                        for (let e = 0; e < c.length; e++) y.effects.push(c[e]);
                        S = !0;
                        break;
                    }
                    y = y.parent;
                }
                (!S && !g && Dc(c),
                    (x.effects = []),
                    v &&
                        t &&
                        t.pendingBranch &&
                        _ === t.pendingId &&
                        ((_ = void 0),
                        t.deps--,
                        t.deps === 0 && !n && t.resolve()),
                    Df(r, `onResolve`));
            },
            fallback(e) {
                if (!x.pendingBranch) return;
                let {
                    vnode: t,
                    activeBranch: n,
                    parentComponent: r,
                    container: i,
                    namespace: a,
                } = x;
                Df(t, `onFallback`);
                let o = m(n),
                    l = () => {
                        if (((x.isFallbackMountPending = !1), !x.isInFallback))
                            return;
                        let e = x.vnode.ssFallback;
                        (d(null, e, i, o, r, null, a, s, c), Ff(x, e));
                    },
                    u = e.transition && e.transition.mode === `out-in`;
                (u &&
                    ((x.isFallbackMountPending = !0),
                    (n.transition.afterLeave = l)),
                    (x.isInFallback = !0),
                    p(n, r, null, !0),
                    u || l());
            },
            move(e, t, n) {
                (x.activeBranch && f(x.activeBranch, e, t, n),
                    (x.container = e));
            },
            next() {
                return x.activeBranch && m(x.activeBranch);
            },
            registerDep(e, t, n, r) {
                let i = !!x.pendingBranch;
                i && x.deps++;
                let a = e.vnode.el;
                e.asyncDep
                    .catch((t) => {
                        mc(t, e, 0);
                    })
                    .then((o) => {
                        if (
                            e.isUnmounted ||
                            x.isUnmounted ||
                            x.pendingId !== e.suspenseId
                        )
                            return;
                        if ((xp(), !e.scope.active)) {
                            i && --x.deps === 0 && x.resolve();
                            return;
                        }
                        e.asyncResolved = !0;
                        let { vnode: s } = e;
                        (Ep(e, o, !1), a && (s.el = a));
                        let c = !a && e.subTree.el;
                        (t(
                            e,
                            s,
                            h(a || e.subTree.el),
                            a ? null : m(e.subTree),
                            x,
                            r,
                            n,
                        ),
                            c && ((s.placeholder = null), g(c)),
                            Kd(e, s.el),
                            i && --x.deps === 0 && x.resolve());
                    });
            },
            unmount(e, t) {
                ((x.isUnmounted = !0),
                    x.activeBranch && p(x.activeBranch, n, e, t),
                    x.pendingBranch && p(x.pendingBranch, n, e, t));
            },
        };
    return x;
}
function jf(e, t, n, r, i, a, o, s, c) {
    let l = (t.suspense = Af(
            t,
            r,
            n,
            e.parentNode,
            document.createElement(`div`),
            null,
            i,
            a,
            o,
            s,
            !0,
        )),
        u = c(e, (l.pendingBranch = t.ssContent), n, l, a, o);
    return (l.deps === 0 && l.resolve(!1, !0), u);
}
function Mf(e) {
    let { shapeFlag: t, children: n } = e,
        r = t & 32;
    ((e.ssContent = Nf(r ? n.default : n)),
        (e.ssFallback = r ? Nf(n.fallback) : J(q)));
}
function Nf(e) {
    let t;
    if (H(e)) {
        let n = Wf && e._c;
        (n && ((e._d = !1), Hf()),
            (e = e()),
            n && ((e._d = !0), (t = Vf), Uf()));
    }
    return (
        V(e) && (e = Bd(e)),
        (e = sp(e)),
        t &&
            !e.dynamicChildren &&
            (e.dynamicChildren = t.filter((t) => t !== e)),
        e
    );
}
function Pf(e, t) {
    t && t.pendingBranch
        ? V(e)
            ? t.effects.push(...e)
            : t.effects.push(e)
        : Dc(e);
}
function Ff(e, t) {
    e.activeBranch = t;
    let { vnode: n, parentComponent: r } = e,
        i = t.el;
    for (; !i && t.component;) ((t = t.component.subTree), (i = t.el));
    ((n.el = i), r && r.subTree === n && ((r.vnode.el = i), Kd(r, i)));
}
function If(e) {
    let t = e.props && e.props.suspensible;
    return t != null && t !== !1;
}
var Lf = Symbol.for(`v-fgt`),
    Rf = Symbol.for(`v-txt`),
    q = Symbol.for(`v-cmt`),
    zf = Symbol.for(`v-stc`),
    Bf = [],
    Vf = null;
function Hf(e = !1) {
    Bf.push((Vf = e ? null : []));
}
function Uf() {
    (Bf.pop(), (Vf = Bf[Bf.length - 1] || null));
}
var Wf = 1;
function Gf(e, t = !1) {
    ((Wf += e), e < 0 && Vf && t && (Vf.hasOnce = !0));
}
function Kf(e) {
    return (
        (e.dynamicChildren = Wf > 0 ? Vf || ea : null),
        Uf(),
        Wf > 0 && Vf && Vf.push(e),
        e
    );
}
function qf(e, t, n, r, i, a) {
    return Kf(ep(e, t, n, r, i, a, !0));
}
function Jf(e, t, n, r, i) {
    return Kf(J(e, t, n, r, i, !0));
}
function Yf(e) {
    return e ? e.__v_isVNode === !0 : !1;
}
function Xf(e, t) {
    return e.type === t.type && e.key === t.key;
}
function Zf(e) {}
var Qf = ({ key: e }) => e ?? null,
    $f = ({ ref: e, ref_key: t, ref_for: n }) => (
        typeof e == `number` && (e = `` + e),
        e == null
            ? null
            : U(e) || Ms(e) || H(e)
              ? { i: Lc, r: e, k: t, f: !!n }
              : e
    );
function ep(
    e,
    t = null,
    n = null,
    r = 0,
    i = null,
    a = e === Lf ? 0 : 1,
    o = !1,
    s = !1,
) {
    let c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Qf(t),
        ref: t && $f(t),
        scopeId: Rc,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: a,
        patchFlag: r,
        dynamicProps: i,
        dynamicChildren: null,
        appContext: null,
        ctx: Lc,
    };
    return (
        s
            ? (lp(c, n), a & 128 && e.normalize(c))
            : n && (c.shapeFlag |= U(n) ? 8 : 16),
        Wf > 0 &&
            !o &&
            Vf &&
            (c.patchFlag > 0 || a & 6) &&
            c.patchFlag !== 32 &&
            Vf.push(c),
        c
    );
}
var J = tp;
function tp(e, t = null, n = null, r = 0, i = null, a = !1) {
    if (((e && e !== Ru) || (e = q), Yf(e))) {
        let r = rp(e, t, !0);
        return (
            n && lp(r, n),
            Wf > 0 &&
                !a &&
                Vf &&
                (r.shapeFlag & 6 ? (Vf[Vf.indexOf(e)] = r) : Vf.push(r)),
            (r.patchFlag = -2),
            r
        );
    }
    if ((Ip(e) && (e = e.__vccOpts), t)) {
        t = np(t);
        let { class: e, style: n } = t;
        (e && !U(e) && (t.class = za(e)),
            W(n) && (Os(n) && !V(n) && (n = z({}, n)), (t.style = Pa(n))));
    }
    let o = U(e) ? 1 : wf(e) ? 128 : ol(e) ? 64 : W(e) ? 4 : H(e) ? 2 : 0;
    return ep(e, t, n, r, i, o, a, !0);
}
function np(e) {
    return e ? (Os(e) || Yd(e) ? z({}, e) : e) : null;
}
function rp(e, t, n = !1, r = !1) {
    let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e,
        l = t ? up(i || {}, t) : i,
        u = {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e.type,
            props: l,
            key: l && Qf(l),
            ref:
                t && t.ref
                    ? n && a
                        ? V(a)
                            ? a.concat($f(t))
                            : [a, $f(t)]
                        : $f(t)
                    : a,
            scopeId: e.scopeId,
            slotScopeIds: e.slotScopeIds,
            children: s,
            target: e.target,
            targetStart: e.targetStart,
            targetAnchor: e.targetAnchor,
            staticCount: e.staticCount,
            shapeFlag: e.shapeFlag,
            patchFlag: t && e.type !== Lf ? (o === -1 ? 16 : o | 16) : o,
            dynamicProps: e.dynamicProps,
            dynamicChildren: e.dynamicChildren,
            appContext: e.appContext,
            dirs: e.dirs,
            transition: c,
            component: e.component,
            suspense: e.suspense,
            ssContent: e.ssContent && rp(e.ssContent),
            ssFallback: e.ssFallback && rp(e.ssFallback),
            placeholder: e.placeholder,
            el: e.el,
            anchor: e.anchor,
            ctx: e.ctx,
            ce: e.ce,
            cacheIndex: e.cacheIndex,
        };
    return (c && r && Al(u, c.clone(u)), u);
}
function ip(e = ` `, t = 0) {
    return J(Rf, null, e, t);
}
function ap(e, t) {
    let n = J(zf, null, e);
    return ((n.staticCount = t), n);
}
function op(e = ``, t = !1) {
    return t ? (Hf(), Jf(q, null, e)) : J(q, null, e);
}
function sp(e) {
    return e == null || typeof e == `boolean`
        ? J(q)
        : V(e)
          ? J(Lf, null, e.slice())
          : Yf(e)
            ? cp(e)
            : J(Rf, null, String(e));
}
function cp(e) {
    return (e.el === null && e.patchFlag !== -1) || e.memo ? e : rp(e);
}
function lp(e, t) {
    let n = 0,
        { shapeFlag: r } = e;
    if (t == null) t = null;
    else if (V(t)) n = 16;
    else if (typeof t == `object`) {
        if (r & 65) {
            let n = t.default;
            n && (n._c && (n._d = !1), lp(e, n()), n._c && (n._d = !0));
            return;
        }
        {
            n = 32;
            let r = t._;
            !r && !Yd(t)
                ? (t._ctx = Lc)
                : r === 3 &&
                  Lc &&
                  (Lc.slots._ === 1
                      ? (t._ = 1)
                      : ((t._ = 2), (e.patchFlag |= 1024)));
        }
    } else if (H(t)) {
        if (r & 65) {
            lp(e, { default: t });
            return;
        }
        ((t = { default: t, _ctx: Lc }), (n = 32));
    } else ((t = String(t)), r & 64 ? ((n = 16), (t = [ip(t)])) : (n = 8));
    ((e.children = t), (e.shapeFlag |= n));
}
function up(...e) {
    let t = {};
    for (let n = 0; n < e.length; n++) {
        let r = e[n];
        for (let e in r)
            if (e === `class`)
                t.class !== r.class && (t.class = za([t.class, r.class]));
            else if (e === `style`) t.style = Pa([t.style, r.style]);
            else if (ra(e)) {
                let n = t[e],
                    i = r[e];
                i && n !== i && !(V(n) && n.includes(i))
                    ? (t[e] = n ? [].concat(n, i) : i)
                    : i == null && n == null && !ia(e) && (t[e] = i);
            } else e !== `` && (t[e] = r[e]);
    }
    return t;
}
function dp(e, t, n, r = null) {
    pc(e, t, 7, [n, r]);
}
var fp = kd(),
    pp = 0;
function mp() {
    return pp;
}
function hp(e, t, n) {
    let r = e.type,
        i = (t ? t.appContext : e.appContext) || fp,
        a = {
            uid: pp++,
            vnode: e,
            type: r,
            parent: t,
            appContext: i,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            job: null,
            scope: new to(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(i.provides),
            ids: t ? t.ids : [``, 0, 0],
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: tf(r, i),
            emitsOptions: Ld(r, i),
            emit: null,
            emitted: null,
            propsDefaults: R,
            inheritAttrs: r.inheritAttrs,
            ctx: R,
            data: R,
            props: R,
            attrs: R,
            slots: R,
            refs: R,
            setupState: R,
            setupContext: null,
            suspense: n,
            suspenseId: n ? n.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null,
        };
    return (
        (a.ctx = { _: a }),
        (a.root = t ? t.root : a),
        (a.emit = Fd.bind(null, a)),
        e.ce && e.ce(a),
        a
    );
}
var gp = null,
    _p = () => gp || Lc,
    vp,
    yp;
{
    let e = Ma(),
        t = (t, n) => {
            let r;
            return (
                (r = e[t]) || (r = e[t] = []),
                r.push(n),
                (e) => {
                    r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
                }
            );
        };
    ((vp = t(`__VUE_INSTANCE_SETTERS__`, (e) => (gp = e))),
        (yp = t(`__VUE_SSR_SETTERS__`, (e) => (Cp = e))));
}
var bp = (e) => {
        let t = gp;
        return (
            vp(e),
            e.scope.on(),
            () => {
                (e.scope.off(), vp(t));
            }
        );
    },
    xp = () => {
        (gp && gp.scope.off(), vp(null));
    };
function Sp(e) {
    return e.vnode.shapeFlag & 4;
}
var Cp = !1;
function wp(e, t = !1, n = !1) {
    t && yp(t);
    let { props: r, children: i } = e.vnode,
        a = Sp(e);
    (Xd(e, r, a, t), uf(e, i, n || t));
    let o = a ? Tp(e, t) : void 0;
    return (t && yp(!1), o);
}
function Tp(e, t) {
    let n = e.type;
    ((e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Zu)));
    let { setup: r } = n;
    if (r) {
        wo();
        let n = (e.setupContext = r.length > 1 ? Np(e) : null),
            i = bp(e),
            a = fc(r, e, 0, [e.props, n]),
            o = fa(a);
        if ((To(), i(), (o || e.sp) && !du(e) && Fl(e), o)) {
            if ((a.then(xp, xp), t))
                return a
                    .then((n) => {
                        yp(!0);
                        try {
                            Ep(e, n, t);
                        } finally {
                            yp(!1);
                        }
                    })
                    .catch((t) => {
                        mc(t, e, 0);
                    });
            e.asyncDep = a;
        } else Ep(e, a, t);
    } else jp(e, t);
}
function Ep(e, t, n) {
    (H(t)
        ? e.type.__ssrInlineRender
            ? (e.ssrRender = t)
            : (e.render = t)
        : W(t) && (e.setupState = Vs(t)),
        jp(e, n));
}
var Dp, Op;
function kp(e) {
    ((Dp = e),
        (Op = (e) => {
            e.render._rc && (e.withProxy = new Proxy(e.ctx, Qu));
        }));
}
var Ap = () => !Dp;
function jp(e, t, n) {
    let r = e.type;
    if (!e.render) {
        if (!t && Dp && !r.render) {
            let t = r.template || yd(e).template;
            if (t) {
                let { isCustomElement: n, compilerOptions: i } =
                        e.appContext.config,
                    { delimiters: a, compilerOptions: o } = r,
                    s = z(z({ isCustomElement: n, delimiters: a }, i), o);
                r.render = Dp(t, s);
            }
        }
        ((e.render = r.render || ta), Op && Op(e));
    }
    {
        let t = bp(e);
        wo();
        try {
            hd(e);
        } finally {
            (To(), t());
        }
    }
}
var Mp = {
    get(e, t) {
        return (Fo(e, `get`, ``), e[t]);
    },
};
function Np(e) {
    return {
        attrs: new Proxy(e.attrs, Mp),
        slots: e.slots,
        emit: e.emit,
        expose: (t) => {
            e.exposed = t || {};
        },
    };
}
function Pp(e) {
    return e.exposed
        ? (e.exposeProxy ||= new Proxy(Vs(ks(e.exposed)), {
              get(t, n) {
                  if (n in t) return t[n];
                  if (n in Yu) return Yu[n](e);
              },
              has(e, t) {
                  return t in e || t in Yu;
              },
          }))
        : e.proxy;
}
function Fp(e, t = !0) {
    return H(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function Ip(e) {
    return H(e) && `__vccOpts` in e;
}
var Y = (e, t) => Xs(e, t, Cp);
function Lp(e, t, n) {
    try {
        Gf(-1);
        let r = arguments.length;
        return r === 2
            ? W(t) && !V(t)
                ? Yf(t)
                    ? J(e, null, [t])
                    : J(e, t)
                : J(e, null, t)
            : (r > 3
                  ? (n = Array.prototype.slice.call(arguments, 2))
                  : r === 3 && Yf(n) && (n = [n]),
              J(e, t, n));
    } finally {
        Gf(1);
    }
}
function Rp() {}
function zp(e, t, n, r) {
    let i = n[r];
    if (i && Bp(i, e)) return i;
    let a = t();
    return ((a.memo = e.slice()), (a.cacheIndex = r), (n[r] = a));
}
function Bp(e, t) {
    let n = e.memo;
    if (n.length != t.length) return !1;
    for (let e = 0; e < n.length; e++) if (Ea(n[e], t[e])) return !1;
    return (Wf > 0 && Vf && Vf.push(e), !0);
}
var Vp = `3.5.44`,
    Hp = ta,
    Up = dc,
    Wp = Pc,
    Gp = Ic,
    Kp = {
        createComponentInstance: hp,
        setupComponent: wp,
        renderComponentRoot: zd,
        setCurrentRenderingInstance: zc,
        isVNode: Yf,
        normalizeVNode: sp,
        getComponentPublicInstance: Pp,
        ensureValidVNode: Ku,
        pushWarningContext: sc,
        popWarningContext: cc,
    },
    qp = void 0,
    Jp = typeof window < `u` && window.trustedTypes;
if (Jp)
    try {
        qp = Jp.createPolicy(`vue`, { createHTML: (e) => e });
    } catch {}
var Yp = qp ? (e) => qp.createHTML(e) : (e) => e,
    Xp = `http://www.w3.org/2000/svg`,
    Zp = `http://www.w3.org/1998/Math/MathML`,
    Qp = typeof document < `u` ? document : null,
    $p = Qp && Qp.createElement(`template`),
    em = {
        insert: (e, t, n) => {
            t.insertBefore(e, n || null);
        },
        remove: (e) => {
            let t = e.parentNode;
            t && t.removeChild(e);
        },
        createElement: (e, t, n, r) => {
            let i =
                t === `svg`
                    ? Qp.createElementNS(Xp, e)
                    : t === `mathml`
                      ? Qp.createElementNS(Zp, e)
                      : n
                        ? Qp.createElement(e, { is: n })
                        : Qp.createElement(e);
            return (
                e === `select` &&
                    r &&
                    r.multiple != null &&
                    i.setAttribute(`multiple`, r.multiple),
                i
            );
        },
        createText: (e) => Qp.createTextNode(e),
        createComment: (e) => Qp.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t;
        },
        setElementText: (e, t) => {
            e.textContent = t;
        },
        parentNode: (e) => e.parentNode,
        nextSibling: (e) => e.nextSibling,
        querySelector: (e) => Qp.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, ``);
        },
        insertStaticContent(e, t, n, r, i, a) {
            let o = n ? n.previousSibling : t.lastChild;
            if (i && (i === a || i.nextSibling))
                for (
                    ;
                    t.insertBefore(i.cloneNode(!0), n),
                        i !== a && (i = i.nextSibling);
                );
            else {
                $p.innerHTML = Yp(
                    r === `svg`
                        ? `<svg>${e}</svg>`
                        : r === `mathml`
                          ? `<math>${e}</math>`
                          : e,
                );
                let i = $p.content;
                if (r === `svg` || r === `mathml`) {
                    let e = i.firstChild;
                    for (; e.firstChild;) i.appendChild(e.firstChild);
                    i.removeChild(e);
                }
                t.insertBefore(i, n);
            }
            return [
                o ? o.nextSibling : t.firstChild,
                n ? n.previousSibling : t.lastChild,
            ];
        },
    },
    tm = `transition`,
    nm = `animation`,
    rm = Symbol(`_vtc`),
    im = {
        name: String,
        type: String,
        css: { type: Boolean, default: !0 },
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String,
    },
    am = z({}, Sl, im),
    om = ((e) => ((e.displayName = `Transition`), (e.props = am), e))(
        (e, { slots: t }) => Lp(Tl, lm(e), t),
    ),
    sm = (e, t = []) => {
        V(e) ? e.forEach((e) => e(...t)) : e && e(...t);
    },
    cm = (e) => (e ? (V(e) ? e.some((e) => e.length > 1) : e.length > 1) : !1);
function lm(e) {
    let t = {};
    for (let n in e) n in im || (t[n] = e[n]);
    if (e.css === !1) return t;
    let {
            name: n = `v`,
            type: r,
            duration: i,
            enterFromClass: a = `${n}-enter-from`,
            enterActiveClass: o = `${n}-enter-active`,
            enterToClass: s = `${n}-enter-to`,
            appearFromClass: c = a,
            appearActiveClass: l = o,
            appearToClass: u = s,
            leaveFromClass: d = `${n}-leave-from`,
            leaveActiveClass: f = `${n}-leave-active`,
            leaveToClass: p = `${n}-leave-to`,
        } = e,
        m = um(i),
        h = m && m[0],
        g = m && m[1],
        {
            onBeforeEnter: _,
            onEnter: v,
            onEnterCancelled: y,
            onLeave: b,
            onLeaveCancelled: x,
            onBeforeAppear: S = _,
            onAppear: C = v,
            onAppearCancelled: w = y,
        } = t,
        T = (e, t, n, r) => {
            ((e._enterCancelled = r),
                pm(e, t ? u : s),
                pm(e, t ? l : o),
                n && n());
        },
        E = (e, t) => {
            ((e._isLeaving = !1), pm(e, d), pm(e, p), pm(e, f), t && t());
        },
        D = (e) => (t, n) => {
            let i = e ? C : v,
                o = () => T(t, e, n);
            (sm(i, [t, o]),
                mm(() => {
                    (pm(t, e ? c : a),
                        fm(t, e ? u : s),
                        cm(i) || gm(t, r, h, o));
                }));
        };
    return z(t, {
        onBeforeEnter(e) {
            (sm(_, [e]), fm(e, a), fm(e, o));
        },
        onBeforeAppear(e) {
            (sm(S, [e]), fm(e, c), fm(e, l));
        },
        onEnter: D(!1),
        onAppear: D(!0),
        onLeave(e, t) {
            e._isLeaving = !0;
            let n = () => E(e, t);
            (fm(e, d),
                e._enterCancelled ? (fm(e, f), bm(e)) : (bm(e), fm(e, f)),
                mm(() => {
                    e._isLeaving &&
                        (pm(e, d), fm(e, p), cm(b) || gm(e, r, g, n));
                }),
                sm(b, [e, n]));
        },
        onEnterCancelled(e) {
            (T(e, !1, void 0, !0), sm(y, [e]));
        },
        onAppearCancelled(e) {
            (T(e, !0, void 0, !0), sm(w, [e]));
        },
        onLeaveCancelled(e) {
            (E(e), sm(x, [e]));
        },
    });
}
function um(e) {
    if (e == null) return null;
    if (W(e)) return [dm(e.enter), dm(e.leave)];
    {
        let t = dm(e);
        return [t, t];
    }
}
function dm(e) {
    return Aa(e);
}
function fm(e, t) {
    (t.split(/\s+/).forEach((t) => t && e.classList.add(t)),
        (e[rm] || (e[rm] = new Set())).add(t));
}
function pm(e, t) {
    t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
    let n = e[rm];
    n && (n.delete(t), n.size || (e[rm] = void 0));
}
function mm(e) {
    requestAnimationFrame(() => {
        requestAnimationFrame(e);
    });
}
var hm = 0;
function gm(e, t, n, r) {
    let i = (e._endId = ++hm),
        a = () => {
            i === e._endId && r();
        };
    if (n != null) return setTimeout(a, n);
    let { type: o, timeout: s, propCount: c } = _m(e, t);
    if (!o) return r();
    let l = o + `end`,
        u = 0,
        d = () => {
            (e.removeEventListener(l, f), a());
        },
        f = (t) => {
            t.target === e && ++u >= c && d();
        };
    (setTimeout(() => {
        u < c && d();
    }, s + 1),
        e.addEventListener(l, f));
}
function _m(e, t) {
    let n = window.getComputedStyle(e),
        r = (e) => (n[e] || ``).split(`, `),
        i = r(`${tm}Delay`),
        a = r(`${tm}Duration`),
        o = vm(i, a),
        s = r(`${nm}Delay`),
        c = r(`${nm}Duration`),
        l = vm(s, c),
        u = null,
        d = 0,
        f = 0;
    t === tm
        ? o > 0 && ((u = tm), (d = o), (f = a.length))
        : t === nm
          ? l > 0 && ((u = nm), (d = l), (f = c.length))
          : ((d = Math.max(o, l)),
            (u = d > 0 ? (o > l ? tm : nm) : null),
            (f = u ? (u === tm ? a.length : c.length) : 0));
    let p =
        u === tm &&
        /\b(?:transform|all)(?:,|$)/.test(r(`${tm}Property`).toString());
    return { type: u, timeout: d, propCount: f, hasTransform: p };
}
function vm(e, t) {
    for (; e.length < t.length;) e = e.concat(e);
    return Math.max(...t.map((t, n) => ym(t) + ym(e[n])));
}
function ym(e) {
    return e === `auto` ? 0 : Number(e.slice(0, -1).replace(`,`, `.`)) * 1e3;
}
function bm(e) {
    return (e ? e.ownerDocument : document).body.offsetHeight;
}
function xm(e, t, n) {
    let r = e[rm];
    (r && (t = (t ? [t, ...r] : [...r]).join(` `)),
        t == null
            ? e.removeAttribute(`class`)
            : n
              ? e.setAttribute(`class`, t)
              : (e.className = t));
}
var Sm = Symbol(`_vod`),
    Cm = Symbol(`_vsh`),
    wm = {
        name: `show`,
        beforeMount(e, { value: t }, { transition: n }) {
            ((e[Sm] = e.style.display === `none` ? `` : e.style.display),
                n && t ? n.beforeEnter(e) : Tm(e, t));
        },
        mounted(e, { value: t }, { transition: n }) {
            n && t && n.enter(e);
        },
        updated(e, { value: t, oldValue: n }, { transition: r }) {
            !t != !n &&
                (r
                    ? t
                        ? (r.beforeEnter(e), Tm(e, !0), r.enter(e))
                        : r.leave(e, () => {
                              Tm(e, !1);
                          })
                    : Tm(e, t));
        },
        beforeUnmount(e, { value: t }) {
            Tm(e, t);
        },
    };
function Tm(e, t) {
    ((e.style.display = t ? e[Sm] : `none`), (e[Cm] = !t));
}
function Em() {
    wm.getSSRProps = ({ value: e }) => {
        if (!e) return { style: { display: `none` } };
    };
}
var Dm = Symbol(``);
function Om(e) {
    let t = _p();
    if (!t) return;
    let n = (t.ut = (n = e(t.proxy)) => {
            Array.from(
                document.querySelectorAll(`[data-v-owner="${t.uid}"]`),
            ).forEach((e) => Am(e, n));
        }),
        r = () => {
            let r = e(t.proxy);
            (t.ce ? Am(t.ce, r) : km(t.subTree, r), n(r));
        };
    (Du(() => {
        Dc(r);
    }),
        Eu(() => {
            el(r, ta, { flush: `post` });
            let e = new MutationObserver(r);
            (e.observe(t.subTree.el.parentNode, { childList: !0 }),
                Au(() => e.disconnect()));
        }));
}
function km(e, t) {
    if (e.shapeFlag & 128) {
        let n = e.suspense;
        ((e = n.activeBranch),
            n.pendingBranch &&
                !n.isHydrating &&
                n.effects.push(() => {
                    km(n.activeBranch, t);
                }));
    }
    for (; e.component;) e = e.component.subTree;
    if (e.shapeFlag & 1 && e.el) Am(e.el, t);
    else if (e.type === Lf) e.children.forEach((e) => km(e, t));
    else if (e.type === zf) {
        let { el: n, anchor: r } = e;
        for (; n && (Am(n, t), n !== r);) n = n.nextSibling;
    }
}
function Am(e, t) {
    if (e.nodeType === 1) {
        let n = e.style,
            r = ``;
        for (let e in t) {
            let i = $a(t[e]);
            (n.setProperty(`--${e}`, i), (r += `--${e}: ${i};`));
        }
        n[Dm] = r;
    }
}
var jm = /(?:^|;)\s*display\s*:/;
function Mm(e, t, n) {
    let r = e.style,
        i = U(n),
        a = !1;
    if (n && !i) {
        if (t) {
            if (U(t))
                for (let e of t.split(`;`)) {
                    let t = e.slice(0, e.indexOf(`:`)).trim();
                    n[t] ?? Pm(r, t, ``);
                }
            else for (let e in t) n[e] ?? Pm(r, e, ``);
        }
        for (let i in n) {
            i === `display` && (a = !0);
            let o = n[i];
            o == null
                ? Pm(r, i, ``)
                : Rm(e, i, !U(t) && t ? t[i] : void 0, o) || Pm(r, i, o);
        }
    } else if (i) {
        if (t !== n) {
            let e = r[Dm];
            (e && (n += `;` + e), (r.cssText = n), (a = jm.test(n)));
        }
    } else t && e.removeAttribute(`style`);
    Sm in e &&
        ((i && t === n) || (e[Sm] = a ? r.display : ``),
        e[Cm] && (r.display = `none`));
}
var Nm = /\s*!important$/;
function Pm(e, t, n) {
    if (V(n)) n.forEach((n) => Pm(e, t, n));
    else if (((n ??= ``), t.startsWith(`--`)))
        Nm.test(n)
            ? e.setProperty(t, n.replace(Nm, ``), `important`)
            : e.setProperty(t, n);
    else {
        let r = Lm(e, t);
        Nm.test(n)
            ? e.setProperty(Ca(r), n.replace(Nm, ``), `important`)
            : (e[r] = n);
    }
}
var Fm = [`Webkit`, `Moz`, `ms`],
    Im = {};
function Lm(e, t) {
    let n = Im[t];
    if (n) return n;
    let r = xa(t);
    if (r !== `filter` && r in e) return (Im[t] = r);
    r = wa(r);
    for (let n = 0; n < Fm.length; n++) {
        let i = Fm[n] + r;
        if (i in e) return (Im[t] = i);
    }
    return t;
}
function Rm(e, t, n, r) {
    return (
        e.tagName === `TEXTAREA` &&
        (t === `width` || t === `height`) &&
        U(r) &&
        n === r
    );
}
var zm = `http://www.w3.org/1999/xlink`;
function Bm(e, t, n, r, i, a = Va(t)) {
    r && t.startsWith(`xlink:`)
        ? n == null
            ? e.removeAttributeNS(zm, t.slice(6, t.length))
            : e.setAttributeNS(zm, t, n)
        : n == null || (a && !Ha(n))
          ? e.removeAttribute(t)
          : e.setAttribute(t, a ? `` : da(n) ? String(n) : n);
}
function Vm(e, t, n, r, i) {
    if (t === `innerHTML` || t === `textContent`) {
        n != null && (e[t] = t === `innerHTML` ? Yp(n) : n);
        return;
    }
    let a = e.tagName;
    if (t === `value` && a !== `PROGRESS` && !a.includes(`-`)) {
        let r = a === `OPTION` ? e.getAttribute(`value`) || `` : e.value,
            i = n == null ? (e.type === `checkbox` ? `on` : ``) : String(n);
        ((r === i && `_value` in e) || (e.value = i),
            n ?? e.removeAttribute(t),
            (e._value = n));
        return;
    }
    let o = !1;
    if (n === `` || n == null) {
        let r = typeof e[t];
        r === `boolean`
            ? (n = Ha(n))
            : n == null && r === `string`
              ? ((n = ``), (o = !0))
              : r === `number` && ((n = 0), (o = !0));
    }
    try {
        e[t] = n;
    } catch {}
    o && e.removeAttribute(i || t);
}
function Hm(e, t, n, r) {
    e.addEventListener(t, n, r);
}
function Um(e, t, n, r) {
    e.removeEventListener(t, n, r);
}
var Wm = Symbol(`_vei`);
function Gm(e, t, n, r, i = null) {
    let a = e[Wm] || (e[Wm] = {}),
        o = a[t];
    if (r && o) o.value = r;
    else {
        let [n, s] = Jm(t);
        r
            ? Hm(e, n, (a[t] = Qm(r, i)), s)
            : o && (Um(e, n, o, s), (a[t] = void 0));
    }
}
var Km = /(Once|Passive|Capture)$/,
    qm = /^on:?(?:Once|Passive|Capture)$/;
function Jm(e) {
    let t, n;
    for (; (n = e.match(Km)) && !qm.test(e);)
        ((t ||= {}),
            (e = e.slice(0, e.length - n[1].length)),
            (t[n[1].toLowerCase()] = !0));
    return [e[2] === `:` ? e.slice(3) : Ca(e.slice(2)), t];
}
var Ym = 0,
    Xm = Promise.resolve(),
    Zm = () => (Ym ||= (Xm.then(() => (Ym = 0)), Date.now()));
function Qm(e, t) {
    let n = (e) => {
        if (!e._vts) e._vts = Date.now();
        else if (e._vts <= n.attached) return;
        let r = n.value;
        if (V(r)) {
            let n = e.stopImmediatePropagation;
            e.stopImmediatePropagation = () => {
                (n.call(e), (e._stopped = !0));
            };
            let i = r.slice(),
                a = [e];
            for (let n = 0; n < i.length && !e._stopped; n++) {
                let e = i[n];
                e && pc(e, t, 5, a);
            }
        } else pc(r, t, 5, [e]);
    };
    return ((n.value = e), (n.attached = Zm()), n);
}
var $m = (e) =>
        e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) > 96 &&
        e.charCodeAt(2) < 123,
    eh = (e, t, n, r, i, a) => {
        let o = i === `svg`;
        t === `class`
            ? xm(e, r, o)
            : t === `style`
              ? Mm(e, n, r)
              : ra(t)
                ? ia(t) || Gm(e, t, n, r, a)
                : (
                        t[0] === `.`
                            ? ((t = t.slice(1)), 1)
                            : t[0] === `^`
                              ? ((t = t.slice(1)), 0)
                              : th(e, t, r, o)
                    )
                  ? (Vm(e, t, r),
                    e.tagName.includes(`-`) ||
                        (t !== `value` &&
                            t !== `checked` &&
                            t !== `selected`) ||
                        Bm(e, t, r, o, a, t !== `value`))
                  : e._isVueCE &&
                      (nh(e, t) ||
                          (e._def.__asyncLoader && (/[A-Z]/.test(t) || !U(r))))
                    ? Vm(e, xa(t), r, a, t)
                    : (t === `true-value`
                          ? (e._trueValue = r)
                          : t === `false-value` && (e._falseValue = r),
                      Bm(e, t, r, o));
    };
function th(e, t, n, r) {
    if (r)
        return !!(
            t === `innerHTML` ||
            t === `textContent` ||
            (t in e && $m(t) && H(n))
        );
    if (
        t === `spellcheck` ||
        t === `draggable` ||
        t === `translate` ||
        t === `autocorrect` ||
        (t === `sandbox` && e.tagName === `IFRAME`) ||
        t === `form` ||
        (t === `list` && e.tagName === `INPUT`) ||
        (t === `type` && e.tagName === `TEXTAREA`)
    )
        return !1;
    if (t === `width` || t === `height`) {
        let t = e.tagName;
        if (t === `IMG` || t === `VIDEO` || t === `CANVAS` || t === `SOURCE`)
            return !1;
    }
    return $m(t) && U(n) ? !1 : t in e;
}
function nh(e, t) {
    let n = e._def.props;
    if (!n) return !1;
    let r = xa(t);
    return Array.isArray(n)
        ? n.some((e) => xa(e) === r)
        : Object.keys(n).some((e) => xa(e) === r);
}
var rh = {};
function ih(e, t, n) {
    let r = Nl(e, t);
    ga(r) && (r = z({}, r, t));
    class i extends sh {
        constructor(e) {
            super(r, e, n);
        }
    }
    return ((i.def = r), i);
}
var ah = (e, t) => ih(e, t, ig),
    oh = typeof HTMLElement < `u` ? HTMLElement : class {},
    sh = class e extends oh {
        constructor(e, t = {}, n = rg) {
            (super(),
                (this._def = e),
                (this._props = t),
                (this._createApp = n),
                (this._isVueCE = !0),
                (this._instance = null),
                (this._app = null),
                (this._nonce = this._def.nonce),
                (this._connected = !1),
                (this._resolved = !1),
                (this._patching = !1),
                (this._dirty = !1),
                (this._numberProps = null),
                (this._styleChildren = new WeakSet()),
                (this._styleAnchors = new WeakMap()),
                (this._ob = null),
                this.shadowRoot && n !== rg
                    ? (this._root = this.shadowRoot)
                    : e.shadowRoot === !1
                      ? (this._root = this)
                      : (this.attachShadow(
                            z({}, e.shadowRootOptions, { mode: `open` }),
                        ),
                        (this._root = this.shadowRoot)));
        }
        connectedCallback() {
            if (!this.isConnected) return;
            (!this.shadowRoot && !this._resolved && this._parseSlots(),
                (this._connected = !0));
            let t = this;
            for (; (t &&= t.assignedSlot || t.parentNode || t.host);)
                if (t instanceof e) {
                    this._parent = t;
                    break;
                }
            this._instance ||
                (this._resolved
                    ? this._mount(this._def)
                    : t && t._pendingResolve
                      ? (this._pendingResolve = t._pendingResolve.then(() => {
                            if (
                                ((this._pendingResolve = void 0),
                                this.isConnected)
                            )
                                return this._resolveDef();
                        }))
                      : this._resolveDef());
        }
        _setParent(e = this._parent) {
            e &&
                ((this._instance.parent = e._instance),
                this._inheritParentContext(e));
        }
        _inheritParentContext(e = this._parent) {
            e &&
                this._app &&
                Object.setPrototypeOf(
                    this._app._context.provides,
                    e._instance.provides,
                );
        }
        disconnectedCallback() {
            ((this._connected = !1),
                Cc(() => {
                    this._connected ||
                        ((this._ob &&= (this._ob.disconnect(), null)),
                        this._app && this._app.unmount(),
                        this._instance && (this._instance.ce = void 0),
                        (this._app = this._instance = null),
                        (this._teleportTargets &&=
                            (this._teleportTargets.clear(), void 0)));
                }));
        }
        _processMutations(e) {
            for (let t of e) this._setAttr(t.attributeName);
        }
        _resolveDef() {
            if (this._pendingResolve) return this._pendingResolve;
            for (let e = 0; e < this.attributes.length; e++)
                this._setAttr(this.attributes[e].name);
            ((this._ob = new MutationObserver(
                this._processMutations.bind(this),
            )),
                this._ob.observe(this, { attributes: !0 }));
            let e = (e, t = !1) => {
                    ((this._resolved = !0), (this._pendingResolve = void 0));
                    let { props: n, styles: r } = e,
                        i;
                    if (n && !V(n))
                        for (let e in n) {
                            let t = n[e];
                            (t === Number || (t && t.type === Number)) &&
                                (e in this._props &&
                                    (this._props[e] = Aa(this._props[e])),
                                ((i ||= Object.create(null))[xa(e)] = !0));
                        }
                    ((this._numberProps = i),
                        this._resolveProps(e),
                        this.shadowRoot && this._applyStyles(r),
                        this._connected && this._mount(e));
                },
                t = this._def.__asyncLoader;
            if (t)
                return (
                    (this._pendingResolve = t().then((t) => {
                        ((t.configureApp = this._def.configureApp),
                            e((this._def = t), !0));
                    })),
                    this._pendingResolve
                );
            e(this._def);
        }
        _mount(e) {
            ((this._app = this._createApp(e)),
                this._inheritParentContext(),
                e.configureApp && e.configureApp(this._app),
                (this._app._ceVNode = this._createVNode()),
                this._app.mount(this._root));
            let t = this._instance && this._instance.exposed;
            if (t)
                for (let e in t)
                    B(this, e) ||
                        Object.defineProperty(this, e, { get: () => Rs(t[e]) });
        }
        _resolveProps(e) {
            let { props: t } = e,
                n = V(t) ? t : Object.keys(t || {});
            for (let e of Object.keys(this))
                e[0] !== `_` && n.includes(e) && this._setProp(e, this[e]);
            for (let e of n.map(xa))
                Object.defineProperty(this, e, {
                    get() {
                        return this._getProp(e);
                    },
                    set(t) {
                        this._setProp(e, t, !0, !this._patching);
                    },
                });
        }
        _setAttr(e) {
            if (e.startsWith(`data-v-`)) return;
            let t = this.hasAttribute(e),
                n = t ? this.getAttribute(e) : rh,
                r = xa(e);
            (t && this._numberProps && this._numberProps[r] && (n = Aa(n)),
                this._setProp(r, n, !1, !0));
        }
        _getProp(e) {
            return this._props[e];
        }
        _setProp(e, t, n = !0, r = !1) {
            if (
                t !== this._props[e] &&
                ((this._dirty = !0),
                t === rh
                    ? delete this._props[e]
                    : ((this._props[e] = t),
                      e === `key` && this._app && (this._app._ceVNode.key = t)),
                r && this._instance && this._update(),
                n)
            ) {
                let n = this._ob;
                (n && (this._processMutations(n.takeRecords()), n.disconnect()),
                    t === !0
                        ? this.setAttribute(Ca(e), ``)
                        : typeof t == `string` || typeof t == `number`
                          ? this.setAttribute(Ca(e), t + ``)
                          : t || this.removeAttribute(Ca(e)),
                    n && n.observe(this, { attributes: !0 }));
            }
        }
        _update() {
            let e = this._createVNode();
            (this._app && (e.appContext = this._app._context),
                tg(e, this._root));
        }
        _createVNode() {
            let e = {};
            this.shadowRoot ||
                (e.onVnodeMounted = e.onVnodeUpdated =
                    this._renderSlots.bind(this));
            let t = J(this._def, z(e, this._props));
            return (
                this._instance ||
                    (t.ce = (e) => {
                        ((this._instance = e), (e.ce = this), (e.isCE = !0));
                        let t = (e, t) => {
                            this.dispatchEvent(
                                new CustomEvent(
                                    e,
                                    ga(t[0])
                                        ? z({ detail: t }, t[0])
                                        : { detail: t },
                                ),
                            );
                        };
                        ((e.emit = (e, ...n) => {
                            (t(e, n), Ca(e) !== e && t(Ca(e), n));
                        }),
                            this._setParent());
                    }),
                t
            );
        }
        _applyStyles(e, t, n) {
            if (!e) return;
            if (t) {
                if (t === this._def || this._styleChildren.has(t)) return;
                this._styleChildren.add(t);
            }
            let r = this._nonce,
                i = this.shadowRoot,
                a = n
                    ? this._getStyleAnchor(n) || this._getStyleAnchor(this._def)
                    : this._getRootStyleInsertionAnchor(i),
                o = null;
            for (let s = e.length - 1; s >= 0; s--) {
                let c = document.createElement(`style`);
                (r && c.setAttribute(`nonce`, r),
                    (c.textContent = e[s]),
                    i.insertBefore(c, o || a),
                    (o = c),
                    s === 0 &&
                        (n || this._styleAnchors.set(this._def, c),
                        t && this._styleAnchors.set(t, c)));
            }
        }
        _getStyleAnchor(e) {
            if (!e) return null;
            let t = this._styleAnchors.get(e);
            return t && t.parentNode === this.shadowRoot
                ? t
                : (t && this._styleAnchors.delete(e), null);
        }
        _getRootStyleInsertionAnchor(e) {
            for (let t = 0; t < e.childNodes.length; t++) {
                let n = e.childNodes[t];
                if (!(n instanceof HTMLStyleElement)) return n;
            }
            return null;
        }
        _parseSlots() {
            let e = (this._slots = {}),
                t;
            for (; (t = this.firstChild);) {
                let n =
                    (t.nodeType === 1 && t.getAttribute(`slot`)) || `default`;
                ((e[n] || (e[n] = [])).push(t), this.removeChild(t));
            }
        }
        _renderSlots() {
            let e = this._getSlots(),
                t = this._instance.type.__scopeId;
            for (let n = 0; n < e.length; n++) {
                let r = e[n],
                    i = r.getAttribute(`name`) || `default`,
                    a = this._slots[i],
                    o = r.parentNode;
                if (a)
                    for (let e of a) {
                        if (t && e.nodeType === 1) {
                            let n = t + `-s`,
                                r = document.createTreeWalker(e, 1);
                            e.setAttribute(n, ``);
                            let i;
                            for (; (i = r.nextNode());) i.setAttribute(n, ``);
                        }
                        o.insertBefore(e, r);
                    }
                else for (; r.firstChild;) o.insertBefore(r.firstChild, r);
                o.removeChild(r);
            }
        }
        _getSlots() {
            let e = [this];
            this._teleportTargets && e.push(...this._teleportTargets);
            let t = new Set();
            for (let n of e) {
                let e = n.querySelectorAll(`slot`);
                for (let n = 0; n < e.length; n++) t.add(e[n]);
            }
            return Array.from(t);
        }
        _injectChildStyle(e, t) {
            this._applyStyles(e.styles, e, t);
        }
        _beginPatch() {
            ((this._patching = !0), (this._dirty = !1));
        }
        _endPatch() {
            ((this._patching = !1),
                this._dirty && this._instance && this._update());
        }
        _hasShadowRoot() {
            return this._def.shadowRoot !== !1;
        }
        _removeChildStyle(e) {}
    };
function ch(e) {
    let t = _p();
    return (t && t.ce) || null;
}
function lh() {
    let e = ch();
    return e && e.shadowRoot;
}
function uh(e = `$style`) {
    {
        let t = _p();
        if (!t) return R;
        let n = t.type.__cssModules;
        return (n && n[e]) || R;
    }
}
var dh = new WeakMap(),
    fh = new WeakMap(),
    ph = Symbol(`_moveCb`),
    mh = Symbol(`_enterCb`),
    hh = new WeakMap(),
    gh = ((e) => (delete e.props.mode, e))({
        name: `TransitionGroup`,
        props: z({}, am, { tag: String, moveClass: String }),
        setup(e, { slots: t }) {
            let n = _p(),
                r = bl(),
                i,
                a,
                o,
                s,
                c = () => (
                    s === void 0 &&
                        (s = i.length > 0 && Th(i[0].el, n.vnode.el, vh(e))),
                    s
                );
            return (
                Ou(() => {
                    if ((hh.delete(n), !c())) {
                        ((i = []), (o = void 0));
                        return;
                    }
                    let t = vh(e);
                    i.forEach(_h);
                    let r = o && wh(o, n.vnode.el);
                    ((o = void 0), i.forEach((e) => yh(e, r)));
                    let a = i.filter(bh);
                    (bm(n.vnode.el),
                        a.forEach((e) => {
                            let n = e.el,
                                r = n.style;
                            (fm(n, t),
                                (r.transform =
                                    r.webkitTransform =
                                    r.transitionDuration =
                                        ``));
                            let i = (n[ph] = (e) => {
                                (e && e.target !== n) ||
                                    ((!e ||
                                        e.propertyName.endsWith(`transform`)) &&
                                        (n.removeEventListener(
                                            `transitionend`,
                                            i,
                                        ),
                                        (n[ph] = null),
                                        pm(n, t)));
                            });
                            n.addEventListener(`transitionend`, i);
                        }),
                        (i = []));
                }),
                () => {
                    let l = K(e),
                        u = lm(l),
                        d = l.tag || Lf;
                    if (((i = []), (s = void 0), a))
                        for (let e = 0; e < a.length; e++) {
                            let t = a[e];
                            t.el &&
                                t.el instanceof Element &&
                                !t.el[Cm] &&
                                (i.push(t),
                                Al(t, Dl(t, u, r, n)),
                                dh.set(t, xh(t.el)));
                        }
                    a = t.default ? jl(t.default()) : [];
                    for (let e = 0; e < a.length; e++) {
                        let t = a[e];
                        t.key != null && Al(t, Dl(t, u, r, n));
                    }
                    return (
                        i.length && ((o = Sh(n)), hh.set(n, c)), J(d, null, a)
                    );
                }
            );
        },
    });
function _h(e) {
    let t = e.el;
    (t[ph] && t[ph](), t[mh] && t[mh]());
}
function vh(e) {
    return e.moveClass || `${e.name || `v`}-move`;
}
function yh(e, t) {
    fh.set(e, xh(e.el, t));
}
function bh(e) {
    let t = dh.get(e),
        n = fh.get(e),
        r = t.left - n.left,
        i = t.top - n.top;
    if (r || i) {
        let t = e.el,
            n = t.style,
            a = t.getBoundingClientRect(),
            o = 1,
            s = 1;
        return (
            t.offsetWidth && (o = a.width / t.offsetWidth),
            t.offsetHeight && (s = a.height / t.offsetHeight),
            (Number.isFinite(o) && o !== 0) || (o = 1),
            (Number.isFinite(s) && s !== 0) || (s = 1),
            Math.abs(o - 1) < 0.01 && (o = 1),
            Math.abs(s - 1) < 0.01 && (s = 1),
            (n.transform = n.webkitTransform =
                `translate(${r / o}px,${i / s}px)`),
            (n.transitionDuration = `0s`),
            e
        );
    }
}
function xh(e, t) {
    let n = e.getBoundingClientRect();
    return { left: n.left - (t ? t.left : 0), top: n.top - (t ? t.top : 0) };
}
function Sh(e) {
    let t;
    for (let n = e.parent; n; n = n.parent) {
        let r = hh.get(n);
        if (r) {
            let i = Ch(n.vnode.el, e.vnode.el);
            i && (t ||= []).push(z(xh(i), { item: i, willMove: r }));
        }
    }
    return t;
}
function Ch(e, t) {
    let n = e.nodeType === 1 ? e : e.parentNode;
    for (; t && t.parentNode !== n;) t = t.parentNode;
    if (t && t.nodeType === 1) return t;
}
function wh(e, t) {
    let n = e.find((e) => e.willMove() && e.item.contains(t));
    return n && xh(n.item, n);
}
function Th(e, t, n) {
    let r = e.cloneNode(),
        i = e[rm];
    (i &&
        i.forEach((e) => {
            e.split(/\s+/).forEach((e) => e && r.classList.remove(e));
        }),
        n.split(/\s+/).forEach((e) => e && r.classList.add(e)),
        (r.style.display = `none`));
    let a = t.nodeType === 1 ? t : t.parentNode;
    a.appendChild(r);
    let { hasTransform: o } = _m(r);
    return (a.removeChild(r), o);
}
var Eh = (e) => {
    let t = e.props[`onUpdate:modelValue`] || !1;
    return V(t) ? (e) => Da(t, e) : t;
};
function Dh(e) {
    e.target.composing = !0;
}
function Oh(e) {
    let t = e.target;
    t.composing && ((t.composing = !1), t.dispatchEvent(new Event(`input`)));
}
var kh = Symbol(`_assign`),
    Ah = Symbol(`_initialValue`);
function jh(e, t, n) {
    return (t && (e = e.trim()), n && (e = ka(e)), e);
}
var Mh = {
        created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
            (e.parentNode &&
                (e.type === `text`
                    ? (e[Ah] = e.defaultValue.replace(/[\r\n]/g, ``))
                    : e.type === `textarea` &&
                      (e[Ah] = e.defaultValue.replace(
                          /\r\n?/g,
                          `
`,
                      ))),
                (e[kh] = Eh(i)));
            let a = r || (i.props && i.props.type === `number`);
            (Hm(e, t ? `change` : `input`, (t) => {
                t.target.composing || e[kh](jh(e.value, n, a));
            }),
                (n || a) &&
                    Hm(e, `change`, () => {
                        e.value = jh(e.value, n, a);
                    }),
                t ||
                    (Hm(e, `compositionstart`, Dh),
                    Hm(e, `compositionend`, Oh),
                    Hm(e, `change`, Oh)));
        },
        mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
            let i = t ?? ``,
                a = e[Ah];
            (delete e[Ah],
                a !== void 0 &&
                (e.type === `text` || e.type === `textarea`) &&
                e.value !== a
                    ? e[kh](jh(e.value, n, r))
                    : (e.value = i));
        },
        beforeUpdate(
            e,
            {
                value: t,
                oldValue: n,
                modifiers: { lazy: r, trim: i, number: a },
            },
            o,
        ) {
            if (((e[kh] = Eh(o)), e.composing)) return;
            let s =
                    (a || e.type === `number`) && !/^0\d/.test(e.value)
                        ? ka(e.value)
                        : e.value,
                c = t ?? ``;
            if (s === c) return;
            let l = e.getRootNode();
            ((l instanceof Document || l instanceof ShadowRoot) &&
                l.activeElement === e &&
                e.type !== `range` &&
                ((r && t === n) || (i && e.value.trim() === c))) ||
                (e.value = c);
        },
    },
    Nh = {
        deep: !0,
        created(e, t, n) {
            ((e[kh] = Eh(n)),
                Hm(e, `change`, () => {
                    let t = e._modelValue,
                        n = zh(e),
                        r = e.checked,
                        i = e[kh];
                    if (V(t)) {
                        let e = Ja(t, n),
                            a = e !== -1;
                        if (r && !a) i(t.concat(n));
                        else if (!r && a) {
                            let n = [...t];
                            (n.splice(e, 1), i(n));
                        }
                    } else if (ca(t)) {
                        let e = new Set(t);
                        (r ? e.add(n) : e.delete(n), i(e));
                    } else i(Bh(e, r));
                }));
        },
        mounted: Ph,
        beforeUpdate(e, t, n) {
            ((e[kh] = Eh(n)), Ph(e, t, n));
        },
    };
function Ph(e, { value: t, oldValue: n }, r) {
    e._modelValue = t;
    let i;
    if (V(t)) i = Ja(t, r.props.value) > -1;
    else if (ca(t)) i = t.has(r.props.value);
    else {
        if (t === n) return;
        i = qa(t, Bh(e, !0));
    }
    e.checked !== i && (e.checked = i);
}
var Fh = {
        created(e, { value: t }, n) {
            ((e.checked = qa(t, n.props.value)),
                (e[kh] = Eh(n)),
                Hm(e, `change`, () => {
                    e[kh](zh(e));
                }));
        },
        beforeUpdate(e, { value: t, oldValue: n }, r) {
            ((e[kh] = Eh(r)), t !== n && (e.checked = qa(t, r.props.value)));
        },
    },
    Ih = {
        deep: !0,
        created(e, { value: t, modifiers: { number: n } }, r) {
            ((e._modelValue = t),
                Hm(e, `change`, () => {
                    let t = Array.prototype.filter
                            .call(e.options, (e) => e.selected)
                            .map((e) => (n ? ka(zh(e)) : zh(e))),
                        r = e.multiple,
                        i = r ? (ca(e._modelValue) ? new Set(t) : t) : t[0],
                        a = (e._pendingValue = [
                            r,
                            r ? (V(i) ? t.slice() : t) : i,
                        ]);
                    try {
                        e[kh](i);
                    } finally {
                        Cc(() => {
                            e._pendingValue === a && (e._pendingValue = void 0);
                        });
                    }
                }),
                (e[kh] = Eh(r)));
        },
        mounted(e, { value: t }) {
            Rh(e, t);
        },
        beforeUpdate(e, { value: t }, n) {
            ((e._modelValue = t), (e[kh] = Eh(n)));
        },
        updated(e, { value: t }) {
            let n = e._pendingValue;
            ((e._pendingValue = void 0),
                (n && n[0] === e.multiple && Lh(t, n[1], n[0])) || Rh(e, t));
        },
    };
function Lh(e, t, n) {
    if (!n || V(e)) return qa(e, t);
    if (ca(e)) {
        if (e.size !== t.length) return !1;
        for (let n of t) if (!e.has(n)) return !1;
        return !0;
    }
    return !1;
}
function Rh(e, t) {
    let n = e.multiple,
        r = V(t);
    if (!n || r || ca(t)) {
        for (let i = 0, a = e.options.length; i < a; i++) {
            let a = e.options[i],
                o = zh(a);
            if (n) {
                if (r) {
                    let e = typeof o;
                    a.selected =
                        e === `string` || e === `number`
                            ? t.some((e) => String(e) === String(o))
                            : Ja(t, o) > -1;
                } else a.selected = t.has(o);
            } else if (qa(zh(a), t)) {
                e.selectedIndex !== i && (e.selectedIndex = i);
                return;
            }
        }
        !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
    }
}
function zh(e) {
    return `_value` in e ? e._value : e.value;
}
function Bh(e, t) {
    let n = t ? `_trueValue` : `_falseValue`;
    return n in e ? e[n] : t;
}
var Vh = {
    created(e, t, n) {
        Uh(e, t, n, null, `created`);
    },
    mounted(e, t, n) {
        Uh(e, t, n, null, `mounted`);
    },
    beforeUpdate(e, t, n, r) {
        Uh(e, t, n, r, `beforeUpdate`);
    },
    updated(e, t, n, r) {
        Uh(e, t, n, r, `updated`);
    },
};
function Hh(e, t) {
    switch (e) {
        case `SELECT`:
            return Ih;
        case `TEXTAREA`:
            return Mh;
        default:
            switch (t) {
                case `checkbox`:
                    return Nh;
                case `radio`:
                    return Fh;
                default:
                    return Mh;
            }
    }
}
function Uh(e, t, n, r, i) {
    let a = Hh(e.tagName, n.props && n.props.type)[i];
    a && a(e, t, n, r);
}
function Wh() {
    ((Mh.getSSRProps = ({ value: e }) => ({ value: e })),
        (Fh.getSSRProps = ({ value: e }, t) => {
            if (t.props && qa(t.props.value, e)) return { checked: !0 };
        }),
        (Nh.getSSRProps = ({ value: e }, t) => {
            if (V(e)) {
                if (t.props && Ja(e, t.props.value) > -1)
                    return { checked: !0 };
            } else if (ca(e)) {
                if (t.props && e.has(t.props.value)) return { checked: !0 };
            } else if (e) return { checked: !0 };
        }),
        (Vh.getSSRProps = (e, t) => {
            if (typeof t.type != `string`) return;
            let n = Hh(t.type.toUpperCase(), t.props && t.props.type);
            if (n.getSSRProps) return n.getSSRProps(e, t);
        }));
}
var Gh = [`ctrl`, `shift`, `alt`, `meta`],
    Kh = {
        stop: (e) => e.stopPropagation(),
        prevent: (e) => e.preventDefault(),
        self: (e) => e.target !== e.currentTarget,
        ctrl: (e) => !e.ctrlKey,
        shift: (e) => !e.shiftKey,
        alt: (e) => !e.altKey,
        meta: (e) => !e.metaKey,
        left: (e) => `button` in e && e.button !== 0,
        middle: (e) => `button` in e && e.button !== 1,
        right: (e) => `button` in e && e.button !== 2,
        exact: (e, t) => Gh.some((n) => e[`${n}Key`] && !t.includes(n)),
    },
    qh = (e, t) => {
        if (!e) return e;
        let n = (e._withMods ||= {}),
            r = t.join(`.`);
        return (
            n[r] ||
            (n[r] = (n, ...r) => {
                for (let e = 0; e < t.length; e++) {
                    let r = Kh[t[e]];
                    if (r && r(n, t)) return;
                }
                return e(n, ...r);
            })
        );
    },
    Jh = {
        esc: `escape`,
        space: ` `,
        up: `arrow-up`,
        left: `arrow-left`,
        right: `arrow-right`,
        down: `arrow-down`,
        delete: `backspace`,
    },
    Yh = (e, t) => {
        let n = (e._withKeys ||= {}),
            r = t.join(`.`);
        return (
            n[r] ||
            (n[r] = (n) => {
                if (!(`key` in n)) return;
                let r = Ca(n.key);
                if (t.some((e) => e === r || Jh[e] === r)) return e(n);
            })
        );
    },
    Xh = z({ patchProp: eh }, em),
    Zh,
    Qh = !1;
function $h() {
    return (Zh ||= pf(Xh));
}
function eg() {
    return ((Zh = Qh ? Zh : mf(Xh)), (Qh = !0), Zh);
}
var tg = (...e) => {
        $h().render(...e);
    },
    ng = (...e) => {
        eg().hydrate(...e);
    },
    rg = (...e) => {
        let t = $h().createApp(...e),
            { mount: n } = t;
        return (
            (t.mount = (e) => {
                let r = og(e);
                if (!r) return;
                let i = t._component;
                (H(i) || i.render || i.template || (i.template = r.innerHTML),
                    r.nodeType === 1 && (r.textContent = ``));
                let a = n(r, !1, ag(r));
                return (
                    r instanceof Element &&
                        (r.removeAttribute(`v-cloak`),
                        r.setAttribute(`data-v-app`, ``)),
                    a
                );
            }),
            t
        );
    },
    ig = (...e) => {
        let t = eg().createApp(...e),
            { mount: n } = t;
        return (
            (t.mount = (e) => {
                let t = og(e);
                if (t) return n(t, !0, ag(t));
            }),
            t
        );
    };
function ag(e) {
    if (e instanceof SVGElement) return `svg`;
    if (typeof MathMLElement == `function` && e instanceof MathMLElement)
        return `mathml`;
}
function og(e) {
    return U(e) ? document.querySelector(e) : e;
}
var sg = !1,
    cg = () => {
        sg || ((sg = !0), Wh(), Em());
    },
    lg = Symbol(`InertiaHydrationContext`);
function ug(e) {
    Kc(lg, e);
}
var dg = oi(),
    fg = Ns(dg.get());
dg.subscribe(() => {
    fg.value = dg.get();
});
function pg(e, t) {
    typeof e == `string` ? dg.setFor(e, t) : dg.set(e);
}
function mg() {
    (dg.reset(), (fg.value = dg.get()));
}
var hg = {
    created() {
        if (!this.$options.remember) return;
        (Array.isArray(this.$options.remember) &&
            (this.$options.remember = { data: this.$options.remember }),
            typeof this.$options.remember == `string` &&
                (this.$options.remember = { data: [this.$options.remember] }),
            typeof this.$options.remember.data == `string` &&
                (this.$options.remember = {
                    data: [this.$options.remember.data],
                }));
        let e =
                this.$options.remember.key instanceof Function
                    ? this.$options.remember.key.call(this)
                    : this.$options.remember.key,
            t = L.restore(e),
            n = this.$options.remember.data.filter(
                (e) =>
                    this[e] === null ||
                    typeof this[e] != `object` ||
                    this[e].__rememberable !== !1,
            ),
            r = (e) =>
                this[e] !== null &&
                typeof this[e] == `object` &&
                typeof this[e].__remember == `function` &&
                typeof this[e].__restore == `function`;
        n.forEach((i) => {
            (this[i] !== void 0 &&
                t !== void 0 &&
                t[i] !== void 0 &&
                (r(i) ? this[i].__restore(t[i]) : (this[i] = t[i])),
                this.$watch(
                    i,
                    () => {
                        L.remember(
                            n.reduce(
                                (e, t) => ({
                                    ...e,
                                    [t]: A(
                                        r(t) ? this[t].__remember() : this[t],
                                    ),
                                }),
                                {},
                            ),
                            e,
                        );
                    },
                    { immediate: !0, deep: !0 },
                ));
        });
    },
};
function gg(e) {
    let { data: t, rememberKey: n } = e,
        { precognitionEndpoint: r } = e,
        i = typeof t == `function`,
        a = () => (i ? t() : t),
        o = n ? L.restore(n) : null,
        s = A(o?.data ?? A(a())),
        c = (e) => e,
        l = null,
        u = null,
        d = () => u ?? Qg.get(`form.withAllErrors`),
        f,
        p = !1,
        m = [],
        h = bs({
            ...A(s),
            isDirty: !1,
            errors: {},
            hasErrors: !1,
            processing: !1,
            progress: null,
            wasSuccessful: !1,
            recentlySuccessful: !1,
            withPrecognition(...e) {
                r = Jr.createWayfinderCallback(...e);
                let t = this,
                    n = Ft((e) => {
                        let { method: t, url: n } = r(),
                            i = A(c(this.data()));
                        return e[t](n, i);
                    }, A(s));
                ((l = n),
                    n
                        .on(`validatingChanged`, () => {
                            t.validating = n.validating();
                        })
                        .on(`validatedChanged`, () => {
                            t.__valid = n.valid();
                        })
                        .on(`touchedChanged`, () => {
                            t.__touched = n.touched();
                        })
                        .on(`errorsChanged`, () => {
                            let e = d() ? n.errors() : It(n.errors());
                            ((this.errors = {}),
                                this.setError(e),
                                (t.__valid = n.valid()));
                        }));
                let i = (e, t) => (t(e), e);
                return (
                    Object.assign(t, {
                        __touched: [],
                        __valid: [],
                        validating: !1,
                        validator: () => n,
                        withAllErrors: () => i(t, () => (u = !0)),
                        valid: (e) => t.__valid.includes(e),
                        invalid: (e) => e in this.errors,
                        setValidationTimeout: (e) =>
                            i(t, () => n.setTimeout(e)),
                        validateFiles: () => i(t, () => n.validateFiles()),
                        withoutFileValidation: () =>
                            i(t, () => n.withoutFileValidation()),
                        touch: (e, ...r) => (
                            Array.isArray(e)
                                ? n.touch(e)
                                : typeof e == `string`
                                  ? n.touch([e, ...r])
                                  : n.touch(e),
                            t
                        ),
                        touched: (e) =>
                            typeof e == `string`
                                ? t.__touched.includes(e)
                                : t.__touched.length > 0,
                        validate: (e, r) => {
                            if (
                                (typeof e == `object` &&
                                    !(`target` in e) &&
                                    ((r = e), (e = void 0)),
                                e === void 0)
                            )
                                n.validate(r);
                            else {
                                let t = Rt(e),
                                    i = c(this.data());
                                n.validate(t, N(i, t), r);
                            }
                            return t;
                        },
                        setErrors: (e) => i(t, () => this.setError(e)),
                        forgetError: (e) => i(t, () => this.clearErrors(Rt(e))),
                    }),
                    t
                );
            },
            data() {
                return Object.keys(s).reduce(
                    (e, t) => qe(e, t, N(this, t)),
                    {},
                );
            },
            transform(e) {
                return ((c = e), this);
            },
            defaults(e, t) {
                if (i)
                    throw Error(
                        'You cannot call `defaults()` when using a function to define your form data.',
                    );
                return (
                    (p = !0),
                    e === void 0
                        ? ((s = A(this.data())), (this.isDirty = !1))
                        : (s =
                              typeof e == `string`
                                  ? qe(A(s), e, t)
                                  : Object.assign({}, A(s), e)),
                    l?.defaults(s),
                    this
                );
            },
            reset(...e) {
                let t = A(i ? A(a()) : s);
                return (
                    e.length === 0
                        ? (i && (s = t), Object.assign(this, t))
                        : e
                              .filter((e) => Re(t, e))
                              .forEach((e) => {
                                  (i && qe(s, e, N(t, e)),
                                      qe(this, e, N(t, e)));
                              }),
                    l?.reset(...e),
                    this
                );
            },
            setError(e, t) {
                let n = typeof e == `string` ? { [e]: t } : e;
                return (
                    Object.assign(this.errors, n),
                    (this.hasErrors = Object.keys(this.errors).length > 0),
                    l?.setErrors(n),
                    this
                );
            },
            clearErrors(...e) {
                return (
                    (this.errors = Object.keys(this.errors).reduce(
                        (t, n) => ({
                            ...t,
                            ...(e.length > 0 && !e.includes(n)
                                ? { [n]: this.errors[n] }
                                : {}),
                        }),
                        {},
                    )),
                    (this.hasErrors = Object.keys(this.errors).length > 0),
                    l &&
                        (e.length === 0
                            ? l.setErrors({})
                            : e.forEach(l.forgetError)),
                    this
                );
            },
            resetAndClearErrors(...e) {
                return (this.reset(...e), this.clearErrors(...e), this);
            },
            __rememberable: n === null,
            __remember() {
                let e = this.data();
                if (m.length > 0) {
                    let t = { ...e };
                    return (
                        m.forEach((e) => delete t[e]),
                        { data: t, errors: this.errors }
                    );
                }
                return { data: e, errors: this.errors };
            },
            __restore(e) {
                (Object.assign(this, e.data), this.setError(e.errors));
            },
        });
    return (
        o?.errors && h.setError(o.errors),
        el(
            h,
            () => {
                h.isDirty = !M(h.data(), s);
            },
            { immediate: !0, deep: !0 },
        ),
        el(
            h,
            (e) => {
                if (!n) return;
                let t = L.restore(n),
                    r = A(e.__remember());
                M(t, r) || L.remember(r, n);
            },
            { immediate: !0, deep: !0 },
        ),
        r && h.withPrecognition(r),
        {
            form: h,
            setDefaults: (e) => {
                s = e;
            },
            getTransform: () => c,
            getPrecognitionEndpoint: () => r ?? null,
            markAsSuccessful: () => {
                (h.clearErrors(),
                    (h.wasSuccessful = !0),
                    (h.recentlySuccessful = !0),
                    (f = setTimeout(
                        () => (h.recentlySuccessful = !1),
                        Qg.get(`form.recentlySuccessfulDuration`),
                    )));
            },
            wasDefaultsCalledInOnSuccess: () => p,
            resetDefaultsCalledInOnSuccess: () => {
                p = !1;
            },
            setRememberExcludeKeys: (e) => {
                m = e;
            },
            resetBeforeSubmit: () => {
                ((h.wasSuccessful = !1),
                    (h.recentlySuccessful = !1),
                    clearTimeout(f));
            },
            finishProcessing: () => {
                ((h.processing = !1), (h.progress = null));
            },
            withAllErrors: {
                enabled: d,
                enable: () => {
                    u = !0;
                },
            },
        }
    );
}
var _g = null,
    vg = !1;
function yg(e) {
    if (vg) return;
    _g === null && ((vg = !0), (_g = new Set(Object.keys(bg({})))), (vg = !1));
    let t = Object.keys(e).filter((e) => _g.has(e));
    t.length > 0 &&
        console.error(
            `[Inertia] useForm() data contains field(s) that conflict with form properties: ${t.map((e) => `"${e}"`).join(`, `)}. These fields will be overwritten by form methods/properties. Please rename these fields.`,
        );
}
function bg(...e) {
    let {
        rememberKey: t,
        data: n,
        precognitionEndpoint: r,
    } = Jr.parseUseFormArguments(...e);
    yg(A(typeof n == `function` ? n() : n));
    let i = null,
        a = null,
        {
            form: o,
            setDefaults: s,
            getTransform: c,
            getPrecognitionEndpoint: l,
            markAsSuccessful: u,
            wasDefaultsCalledInOnSuccess: d,
            resetDefaultsCalledInOnSuccess: f,
            setRememberExcludeKeys: p,
            resetBeforeSubmit: m,
            finishProcessing: h,
        } = gg({ data: n, rememberKey: t, precognitionEndpoint: r }),
        g = o,
        _ =
            (e) =>
            (t, n = {}) => {
                g.submit(e, t, n);
            };
    return (
        Object.assign(g, {
            submit(...e) {
                let {
                    method: t,
                    url: n,
                    options: r,
                } = Jr.parseSubmitArguments(e, l());
                f();
                let o = {
                    ...r,
                    onCancelToken: (e) => ((i = e), r.onCancelToken?.(e)),
                    onBefore: (e) => (m(), r.onBefore?.(e)),
                    onStart: (e) => ((g.processing = !0), r.onStart?.(e)),
                    onProgress: (e) => (
                        (g.progress = e ?? null),
                        r.onProgress?.(e)
                    ),
                    onSuccess: async (e) => {
                        u();
                        let t = r.onSuccess ? await r.onSuccess(e) : null;
                        return (d() || (s(A(g.data())), (g.isDirty = !1)), t);
                    },
                    onError: (e) => (
                        g.clearErrors().setError(e),
                        r.onError?.(e)
                    ),
                    onCancel: () => r.onCancel?.(),
                    onFinish: (e) => (h(), (i = null), r.onFinish?.(e)),
                };
                ((o.optimistic = o.optimistic ?? a ?? void 0), (a = null));
                let p = c()(g.data());
                t === `delete` ? L.delete(n, { ...o, data: p }) : L[t](n, p, o);
            },
            get: _(`get`),
            post: _(`post`),
            put: _(`put`),
            patch: _(`patch`),
            delete: _(`delete`),
            cancel() {
                i && i.cancel();
            },
            dontRemember(...e) {
                return (p(e), g);
            },
            optimistic(e) {
                return ((a = e), g);
            },
        }),
        l(),
        g
    );
}
function xg(e) {
    if (!e) return !1;
    if (typeof e == `function`) return !0;
    if (typeof e == `object`) {
        let t = e;
        return (
            typeof t.render == `function` ||
            typeof t.setup == `function` ||
            typeof t.template == `string` ||
            `__file` in t ||
            `__name` in t
        );
    }
    return !1;
}
function Sg(e) {
    if (typeof e != `function`) return !1;
    let t = e;
    return t.length === 2 && t.prototype === void 0;
}
var Cg = Ns(void 0),
    X = Ns(),
    wg = null,
    Tg = Ps(null),
    Eg = Ns(void 0),
    Dg,
    Og = Nl({
        name: `Inertia`,
        props: {
            initialPage: { type: Object, required: !0 },
            initialComponent: { type: Object, required: !1 },
            resolveComponent: { type: Function, required: !1 },
            titleCallback: { type: Function, required: !1, default: (e) => e },
            onHeadUpdate: {
                type: Function,
                required: !1,
                default: () => () => {},
            },
            defaultLayout: { type: Function, required: !1 },
            serverHead: { type: [Boolean, String, Function], required: !1 },
            serverRendered: { type: Boolean, required: !1, default: !0 },
        },
        setup({
            initialPage: e,
            initialComponent: t,
            resolveComponent: n,
            titleCallback: r,
            onHeadUpdate: i,
            defaultLayout: a,
            serverHead: o,
            serverRendered: s,
        }) {
            ((Cg.value = t ? ks(t) : void 0),
                (X.value = { ...e, flash: e.flash ?? {} }),
                (Eg.value = void 0));
            let c = typeof window > `u`;
            Dg = ai(
                c,
                (e) => (r ? r(e, X.value) : e),
                i || (() => {}),
                ri(e, o),
            );
            let l = Ns(!s);
            if ((ug(l), !c)) {
                (Eu(() => (l.value = !0)),
                    L.init({
                        initialPage: e,
                        resolveComponent: n,
                        swapComponent: async (e) => {
                            (e.preserveState || mg(),
                                (Cg.value = ks(e.component)),
                                (X.value = e.page),
                                (Eg.value = e.preserveState
                                    ? Eg.value
                                    : Date.now()));
                        },
                        onFlash: (e) => {
                            X.value = { ...X.value, flash: e };
                        },
                    }));
                let t = (e) => {
                    Dg.updateServerHead(ri(e.detail.page, o));
                };
                (L.on(`navigate`, t), L.on(`clientVisit`, t));
            }
            return () => {
                if (Cg.value) {
                    Cg.value.inheritAttrs = !!Cg.value.inheritAttrs;
                    let e = Lp(Cg.value, { ...X.value.props, key: Eg.value });
                    if (
                        ((Tg.value &&= ((Cg.value.layout = Tg.value), null)),
                        Cg.value.layout && Sg(Cg.value.layout))
                    )
                        return Cg.value.layout(Lp, e);
                    let t,
                        n = null,
                        r = Cg.value.layout;
                    if (
                        typeof r == `function` &&
                        r.length <= 1 &&
                        r.prototype === void 0
                    ) {
                        let e = r(X.value.props);
                        fi(e, xg)
                            ? ((t = a?.(X.value.component, X.value)), (n = e))
                            : (t = e);
                    } else
                        di(r, xg)
                            ? ((t = a?.(X.value.component, X.value)), (n = r))
                            : (t = r ?? a?.(X.value.component, X.value));
                    if (t) {
                        let r = hi(t, xg, Cg.value.layout && !n ? Sg : void 0);
                        if (
                            (n &&
                                (r = r.map((e) => ({
                                    ...e,
                                    props: { ...e.props, ...n },
                                }))),
                            r.length > 0)
                        ) {
                            let t = c ? { shared: {}, named: {} } : fg.value;
                            return r.reduceRight((e, n) => {
                                let r = n.component;
                                return (
                                    (r.inheritAttrs = !!r.inheritAttrs),
                                    Lp(
                                        r,
                                        {
                                            ...X.value.props,
                                            ...n.props,
                                            ...t.shared,
                                            ...((n.name && t.named[n.name]) ||
                                                {}),
                                        },
                                        () => e,
                                    )
                                );
                            }, e);
                        }
                    }
                    return e;
                }
            };
        },
    }),
    kg = {
        install(e) {
            ((L.form = bg),
                Object.defineProperty(e.config.globalProperties, '$inertia', {
                    get: () => L,
                }),
                Object.defineProperty(e.config.globalProperties, '$page', {
                    get: () => X.value,
                }),
                Object.defineProperty(
                    e.config.globalProperties,
                    '$headManager',
                    { get: () => Dg },
                ),
                e.mixin(hg));
        },
    };
function Ag() {
    return (
        (wg ||= bs({
            props: Y(() => X.value?.props),
            url: Y(() => X.value?.url),
            component: Y(() => X.value?.component),
            version: Y(() => X.value?.version),
            clearHistory: Y(() => X.value?.clearHistory),
            deferredProps: Y(() => X.value?.deferredProps),
            rescuedProps: Y(() => X.value?.rescuedProps),
            mergeProps: Y(() => X.value?.mergeProps),
            prependProps: Y(() => X.value?.prependProps),
            deepMergeProps: Y(() => X.value?.deepMergeProps),
            matchPropsOn: Y(() => X.value?.matchPropsOn),
            rememberedState: Y(() => X.value?.rememberedState),
            encryptHistory: Y(() => X.value?.encryptHistory),
            scrollProps: Y(() => X.value?.scrollProps),
            flash: Y(() => X.value?.flash),
        })),
        wg
    );
}
async function jg({
    id: e = `app`,
    resolve: t,
    setup: n,
    title: r,
    progress: i = {},
    page: a,
    render: o,
    defaults: s = {},
    nonce: c,
    http: l,
    layout: u,
    serverHead: d,
    withApp: f,
    dev: p = !1,
} = {}) {
    (Qg.replace(s), c && Qg.set(`nonce`, c), l && Fr.setClient(l), p && Lr());
    let m = typeof window > `u`,
        h = (e, n) => Promise.resolve(t(e, n)).then((e) => e.default || e);
    if (m && !a && !o)
        return async (t, i) => {
            let a = [],
                o = {
                    initialPage: t,
                    initialComponent: await h(t.component, t),
                    resolveComponent: h,
                    titleCallback: r,
                    onHeadUpdate: (e) => (a = e),
                    defaultLayout: u,
                    serverHead: d,
                    serverRendered: !0,
                },
                s;
            n
                ? (s = n({ el: null, App: Og, props: o, plugin: kg }))
                : ((s = ig({ render: () => Lp(Og, o) })),
                  s.use(kg),
                  f && f(s, { ssr: !0, page: t }));
            let c = Qi(e, t, await i(s));
            return { head: a, body: c };
        };
    let g = a || Rn(e),
        _ = [],
        v = await Promise.all([
            h(g.component, g),
            L.decryptHistory().catch(() => {}),
        ]).then(([t]) => {
            let i = m ? null : document.getElementById(e),
                a = {
                    initialPage: g,
                    initialComponent: t,
                    resolveComponent: h,
                    titleCallback: r,
                    onHeadUpdate: m ? (e) => (_ = e) : void 0,
                    defaultLayout: u,
                    serverHead: d,
                    serverRendered: m || i.hasAttribute(`data-server-rendered`),
                };
            if (m) return n({ el: null, App: Og, props: a, plugin: kg });
            let o = i,
                s = a.serverRendered;
            if (n) return n({ el: o, App: Og, props: a, plugin: kg });
            if (s) {
                let e = ig({ render: () => Lp(Og, a) });
                (e.use(kg), f && f(e, { ssr: !1, page: g }), e.mount(o));
            } else {
                let e = rg({ render: () => Lp(Og, a) });
                (e.use(kg), f && f(e, { ssr: !1, page: g }), e.mount(o));
            }
        });
    if ((!m && i && Wi(i), m && o && v)) {
        let t = Qi(e, g, await o(v));
        return { head: _, body: t };
    }
}
var Mg = () => void 0,
    Ng = Symbol(`InertiaFormContext`),
    Pg = Nl({
        name: `Form`,
        slots: Object,
        props: {
            action: { type: [String, Object], default: `` },
            method: { type: String, default: `get` },
            headers: { type: Object, default: () => ({}) },
            queryStringArrayFormat: { type: String, default: `brackets` },
            errorBag: { type: [String, null], default: null },
            showProgress: { type: Boolean, default: !0 },
            transform: { type: Function, default: (e) => e },
            options: { type: Object, default: () => ({}) },
            resetOnError: { type: [Boolean, Array], default: !1 },
            resetOnSuccess: { type: [Boolean, Array], default: !1 },
            setDefaultsOnSuccess: { type: Boolean, default: !1 },
            onCancelToken: { type: Function, default: Mg },
            onBefore: { type: Function, default: Mg },
            onStart: { type: Function, default: Mg },
            onProgress: { type: Function, default: Mg },
            onFinish: { type: Function, default: Mg },
            onCancel: { type: Function, default: Mg },
            onSuccess: { type: Function, default: Mg },
            onError: { type: Function, default: Mg },
            onHttpException: { type: Function, default: Mg },
            onNetworkError: { type: Function, default: Mg },
            onFlash: { type: Function, default: Mg },
            onSubmitComplete: { type: Function, default: Mg },
            disableWhileProcessing: { type: Boolean, default: !1 },
            cancelOnUnmount: { type: Boolean, default: !1 },
            invalidateCacheTags: { type: [String, Array], default: () => [] },
            validateFiles: { type: Boolean, default: !1 },
            validationTimeout: { type: Number, default: 1500 },
            optimistic: { type: Function, default: void 0 },
            withAllErrors: { type: Boolean, default: null },
            component: { type: String, default: null },
            instant: { type: Boolean, default: !1 },
        },
        setup(e, { slots: t, attrs: n, expose: r }) {
            let i = () => {
                    let [t, n] = h();
                    return e.transform(n);
                },
                a = bg({})
                    .withPrecognition(
                        () => s.value,
                        () => h()[0],
                    )
                    .transform(i)
                    .setValidationTimeout(e.validationTimeout);
            (e.validateFiles && a.validateFiles(),
                (e.withAllErrors ?? Bt.get(`form.withAllErrors`)) &&
                    a.withAllErrors());
            let o = Ns(),
                s = Y(() =>
                    lr(e.action) ? e.action.method : e.method.toLowerCase(),
                ),
                c = Y(() =>
                    e.component
                        ? e.component
                        : e.instant && lr(e.action)
                          ? ur(e.action)
                          : null,
                ),
                l = Ns(!1),
                u = Ns(new FormData()),
                d = (e) => {
                    (e.type === `reset` && e.detail?.[Gi] && e.preventDefault(),
                        (l.value = e.type !== `reset` && !M(m(), ei(u.value))));
                },
                f = [`input`, `change`, `reset`];
            (Eu(() => {
                ((u.value = p()),
                    a.defaults(m()),
                    f.forEach((e) => o.value.addEventListener(e, d)));
            }),
                el(
                    () => e.validateFiles,
                    (e) => (e ? a.validateFiles() : a.withoutFileValidation()),
                ),
                el(
                    () => e.validationTimeout,
                    (e) => a.setValidationTimeout(e),
                ),
                ku(() => {
                    (f.forEach((e) => o.value?.removeEventListener(e, d)),
                        e.cancelOnUnmount && a.cancel());
                }));
            let p = (e) => new FormData(o.value, e),
                m = (e) => ei(p(e)),
                h = (t) =>
                    ir(
                        s.value,
                        lr(e.action) ? e.action.url : e.action,
                        m(t),
                        e.queryStringArrayFormat,
                    ),
                g = (t) => {
                    let [n, r] = h(t);
                    if (
                        t?.getAttribute(`formtarget`) === `_blank` &&
                        s.value === `get`
                    ) {
                        window.open(n, `_blank`);
                        return;
                    }
                    let o = (e) => {
                            e && (e === !0 ? _() : e.length > 0 && _(...e));
                        },
                        l = {
                            headers: e.headers,
                            queryStringArrayFormat: e.queryStringArrayFormat,
                            errorBag: e.errorBag,
                            showProgress: e.showProgress,
                            invalidateCacheTags: e.invalidateCacheTags,
                            component: c.value,
                            optimistic: e.optimistic
                                ? (t) => e.optimistic(t, r)
                                : void 0,
                            onCancelToken: e.onCancelToken,
                            onBefore: e.onBefore,
                            onStart: e.onStart,
                            onProgress: e.onProgress,
                            onFinish: e.onFinish,
                            onCancel: e.onCancel,
                            onHttpException: e.onHttpException,
                            onNetworkError: e.onNetworkError,
                            onFlash: e.onFlash,
                            onSuccess: async (...t) => {
                                let n = await e.onSuccess?.(...t);
                                return (
                                    e.onSubmitComplete?.(x),
                                    o(e.resetOnSuccess),
                                    e.setDefaultsOnSuccess === !0 && b(),
                                    n
                                );
                            },
                            onError: (...t) => {
                                (e.onError?.(...t), o(e.resetOnError));
                            },
                            ...e.options,
                        };
                    (a.transform(() => e.transform(r)).submit(s.value, n, l),
                        a.transform(i));
                },
                _ = (...e) => {
                    (Zi(o.value, u.value, e), a.reset(...e));
                },
                v = (...e) => {
                    a.clearErrors(...e);
                },
                y = (...e) => {
                    (v(...e), _(...e));
                },
                b = () => {
                    ((u.value = p()), (l.value = !1));
                },
                x = {
                    get errors() {
                        return a.errors;
                    },
                    get hasErrors() {
                        return a.hasErrors;
                    },
                    get processing() {
                        return a.processing;
                    },
                    get progress() {
                        return a.progress;
                    },
                    get wasSuccessful() {
                        return a.wasSuccessful;
                    },
                    get recentlySuccessful() {
                        return a.recentlySuccessful;
                    },
                    get validating() {
                        return a.validating;
                    },
                    clearErrors: v,
                    resetAndClearErrors: y,
                    setError: (e, t) =>
                        a.setError(typeof e == `string` ? { [e]: t } : e),
                    get isDirty() {
                        return l.value;
                    },
                    reset: _,
                    submit: g,
                    cancel: () => a.cancel(),
                    defaults: b,
                    getData: m,
                    getFormData: p,
                    touch: a.touch,
                    valid: a.valid,
                    invalid: a.invalid,
                    touched: a.touched,
                    validate: (t, n) =>
                        a.validate(
                            ...Jr.mergeHeadersForValidation(t, n, e.headers),
                        ),
                    validator: () => a.validator(),
                };
            return (
                r(x),
                Kc(Ng, x),
                () =>
                    Lp(
                        `form`,
                        {
                            ...n,
                            ref: o,
                            action: lr(e.action) ? e.action.url : e.action,
                            method: s.value,
                            onSubmit: (e) => {
                                (e.preventDefault(), g(e.submitter));
                            },
                            inert: e.disableWhileProcessing && a.processing,
                        },
                        t.default ? t.default(x) : [],
                    )
            );
        },
    });
function Fg(e) {
    return (
        typeof e.type == `string` &&
        [
            `area`,
            `base`,
            `br`,
            `col`,
            `embed`,
            `hr`,
            `img`,
            `input`,
            `keygen`,
            `link`,
            `meta`,
            `param`,
            `source`,
            `track`,
            `wbr`,
        ].indexOf(e.type) > -1
    );
}
function Ig(e) {
    ((e.props = e.props || {}),
        (e.props[`data-inertia`] =
            e.props[`head-key`] === void 0 ? `` : e.props[`head-key`]));
    let t = Object.keys(e.props).reduce((t, n) => {
        let r = String(e.props[n]);
        return [`key`, `head-key`].includes(n)
            ? t
            : r === ``
              ? t + ` ${n}`
              : t + ` ${n}="${$e(r)}"`;
    }, ``);
    return `<${String(e.type)}${t}>`;
}
function Lg(e) {
    let { children: t } = e;
    return typeof t == `string`
        ? t
        : Array.isArray(t)
          ? t.reduce((e, t) => e + Ug(t), ``)
          : ``;
}
function Rg(e) {
    return typeof e.type == `function`;
}
function zg(e) {
    return typeof e.type == `object`;
}
function Bg(e) {
    return /(comment|cmt)/i.test(e.type.toString());
}
function Vg(e) {
    return /(fragment|fgt|symbol\(\))/i.test(e.type.toString());
}
function Hg(e) {
    return /(text|txt)/i.test(e.type.toString());
}
function Ug(e) {
    if (Hg(e)) return String(e.children);
    if (Vg(e) || Bg(e)) return ``;
    let t = Ig(e);
    return (
        e.children && (t += Lg(e)), Fg(e) || (t += `</${String(e.type)}>`), t
    );
}
function Wg(e, t) {
    return (
        t &&
            !e.find((e) => e.startsWith(`<title`)) &&
            e.push(`<title data-inertia="">${$e(t)}</title>`),
        e
    );
}
function Gg(e, t) {
    return Wg(
        e
            .flatMap((e) => Kg(e))
            .map((e) => Ug(e))
            .filter((e) => e),
        t,
    );
}
function Kg(e) {
    return Rg(e)
        ? Kg(e.type())
        : zg(e)
          ? (console.warn(
                `Using components in the <Head> component is not supported.`,
            ),
            [])
          : Hg(e) && e.children
            ? e
            : Vg(e) && e.children
              ? e.children.flatMap((e) => Kg(e))
              : Bg(e)
                ? []
                : e;
}
var qg = Nl({
        props: { title: { type: String, required: !1 } },
        setup(e, { slots: t }) {
            let n = Dg.createProvider();
            return (
                ku(() => {
                    n.disconnect();
                }),
                () => {
                    n.update(Gg(t.default ? t.default() : [], e.title));
                }
            );
        },
    }),
    Jg = () => {},
    Yg = Nl({
        name: `Link`,
        props: {
            as: { type: [String, Object], default: `a` },
            data: { type: Object, default: () => ({}) },
            href: { type: [String, Object], default: `` },
            method: { type: String, default: `get` },
            replace: { type: Boolean, default: !1 },
            preserveScroll: { type: [Boolean, String, Function], default: !1 },
            preserveState: { type: [Boolean, String, Function], default: null },
            preserveUrl: { type: Boolean, default: !1 },
            only: { type: Array, default: () => [] },
            except: { type: Array, default: () => [] },
            headers: { type: Object, default: () => ({}) },
            queryStringArrayFormat: { type: String, default: `brackets` },
            async: { type: Boolean, default: !1 },
            prefetch: { type: [Boolean, String, Array], default: !1 },
            cacheFor: { type: [Number, String, Array], default: 0 },
            onStart: { type: Function, default: Jg },
            onProgress: { type: Function, default: Jg },
            onFinish: { type: Function, default: Jg },
            onBefore: { type: Function, default: Jg },
            onCancel: { type: Function, default: Jg },
            onSuccess: { type: Function, default: Jg },
            onHttpException: { type: Function, default: Jg },
            onNetworkError: { type: Function, default: Jg },
            onFlash: { type: Function, default: Jg },
            onError: { type: Function, default: Jg },
            onCancelToken: { type: Function, default: Jg },
            onPrefetching: { type: Function, default: Jg },
            onPrefetched: { type: Function, default: Jg },
            cacheTags: { type: [String, Array], default: () => [] },
            viewTransition: { type: [Boolean, Object], default: !1 },
            component: { type: String, default: null },
            instant: { type: Boolean, default: !1 },
            pageProps: { type: [Object, Function], default: null },
        },
        setup(e, { slots: t, attrs: n }) {
            let r = Ns(0),
                i = Ns(),
                a = Y(() =>
                    e.prefetch === !0
                        ? [`hover`]
                        : e.prefetch === !1
                          ? []
                          : Array.isArray(e.prefetch)
                            ? e.prefetch
                            : [e.prefetch],
                ),
                o = Y(() =>
                    e.cacheFor === 0
                        ? a.value.length === 1 && a.value[0] === `click`
                            ? 0
                            : Qg.get(`prefetch.cacheFor`)
                        : e.cacheFor,
                );
            (Eu(() => {
                a.value.includes(`mount`) && g();
            }),
                Au(() => {
                    clearTimeout(i.value);
                }));
            let s = Y(() =>
                    lr(e.href)
                        ? e.href.method
                        : (e.method ?? `get`).toLowerCase(),
                ),
                c = Y(() =>
                    typeof e.as != `string` || e.as.toLowerCase() !== `a`
                        ? e.as
                        : s.value === `get`
                          ? e.as.toLowerCase()
                          : `button`,
                ),
                l = Y(() =>
                    ir(
                        s.value,
                        lr(e.href) ? e.href.url : e.href,
                        e.data || {},
                        e.queryStringArrayFormat,
                    ),
                ),
                u = Y(() => l.value[0]),
                d = Y(() => l.value[1]),
                f = Y(() =>
                    e.component
                        ? e.component
                        : e.instant && lr(e.href)
                          ? ur(e.href)
                          : null,
                ),
                p = Y(() =>
                    c.value === `button`
                        ? { type: `button` }
                        : c.value === `a` || typeof c.value != `string`
                          ? { href: u.value }
                          : {},
                ),
                m = Y(() => ({
                    data: d.value,
                    method: s.value,
                    replace: e.replace,
                    preserveScroll: e.preserveScroll,
                    preserveState: e.preserveState ?? s.value !== `get`,
                    preserveUrl: e.preserveUrl,
                    only: e.only,
                    except: e.except,
                    headers: e.headers,
                    async: e.async,
                    component: f.value,
                    pageProps: e.pageProps,
                })),
                h = Y(() => ({
                    ...m.value,
                    viewTransition: e.viewTransition,
                    onCancelToken: e.onCancelToken,
                    onBefore: e.onBefore,
                    onStart: (t) => {
                        (r.value++, e.onStart?.(t));
                    },
                    onProgress: e.onProgress,
                    onFinish: (t) => {
                        (r.value--, e.onFinish?.(t));
                    },
                    onCancel: e.onCancel,
                    onSuccess: e.onSuccess,
                    onError: e.onError,
                    onHttpException: e.onHttpException,
                    onNetworkError: e.onNetworkError,
                    onFlash: e.onFlash,
                })),
                g = () => {
                    L.prefetch(
                        u.value,
                        {
                            ...m.value,
                            onPrefetching: e.onPrefetching,
                            onPrefetched: e.onPrefetched,
                        },
                        { cacheFor: o.value, cacheTags: e.cacheTags },
                    );
                },
                _ = {
                    onClick: (e) => {
                        _i(e) &&
                            (e.preventDefault(), L.visit(u.value, h.value));
                    },
                },
                v = {
                    onMouseenter: () => {
                        i.value = setTimeout(() => {
                            g();
                        }, Qg.get(`prefetch.hoverDelay`));
                    },
                    onMouseleave: () => {
                        clearTimeout(i.value);
                    },
                    onClick: (e) => {
                        (clearTimeout(i.value), _.onClick(e));
                    },
                },
                y = {
                    onMousedown: (e) => {
                        _i(e) && (e.preventDefault(), g());
                    },
                    onKeydown: (e) => {
                        vi(e) && (e.preventDefault(), g());
                    },
                    onMouseup: (e) => {
                        _i(e) &&
                            (e.preventDefault(), L.visit(u.value, h.value));
                    },
                    onKeyup: (e) => {
                        vi(e) &&
                            (e.preventDefault(), L.visit(u.value, h.value));
                    },
                    onClick: (e) => {
                        _i(e) && e.preventDefault();
                    },
                };
            return () =>
                Lp(
                    c.value,
                    {
                        ...n,
                        ...p.value,
                        'data-loading': r.value > 0 ? `` : void 0,
                        ...(a.value.includes(`hover`)
                            ? v
                            : a.value.includes(`click`)
                              ? y
                              : _),
                    },
                    t,
                );
        },
    });
function Xg(...e) {
    let {
            rememberKey: t,
            data: n,
            precognitionEndpoint: r,
        } = Jr.parseUseFormArguments(...e),
        i = null,
        a = null,
        {
            form: o,
            setDefaults: s,
            getTransform: c,
            getPrecognitionEndpoint: l,
            markAsSuccessful: u,
            wasDefaultsCalledInOnSuccess: d,
            resetDefaultsCalledInOnSuccess: f,
            setRememberExcludeKeys: p,
            resetBeforeSubmit: m,
            finishProcessing: h,
            withAllErrors: g,
        } = gg({ data: n, rememberKey: t, precognitionEndpoint: r }),
        _ = o;
    _.response = null;
    let v = async (e, t, n) => {
            if (n.onBefore?.() === !1)
                return Promise.reject(Error(`Request cancelled by onBefore`));
            (f(),
                m(),
                (i = new AbortController()),
                n.onCancelToken?.({ cancel: () => i?.abort() }),
                (n.optimistic = n.optimistic ?? a ?? void 0),
                (a = null));
            let r;
            if (n.optimistic) {
                r = A(_.data());
                let e = n.optimistic(A(r));
                e &&
                    Object.keys(e).forEach((t) => {
                        _[t] = e[t];
                    });
            }
            ((_.processing = !0), n.onStart?.());
            let o = c()(_.data()),
                l = Un(o),
                p = t,
                v,
                y;
            if (e === `get`) {
                let [n] = ir(e, t, o);
                p = n;
            } else
                l
                    ? (v = Gn(o))
                    : ((v = JSON.stringify(o)), (y = `application/json`));
            try {
                let r = await Fr.getClient().request({
                        method: e,
                        url: p,
                        data: v,
                        headers: {
                            Accept: `application/json`,
                            ...(y ? { 'Content-Type': y } : {}),
                            ...n.headers,
                        },
                        signal: i.signal,
                        onUploadProgress: (e) => {
                            ((_.progress = e), n.onProgress?.(e));
                        },
                    }),
                    a = r.data ? JSON.parse(r.data) : null;
                if (r.status >= 200 && r.status < 300)
                    return (
                        u(),
                        (_.response = a),
                        n.onSuccess?.(a, r),
                        d() || s(A(_.data())),
                        (_.isDirty = !1),
                        a
                    );
                throw new Dn(`Request failed with status ${r.status}`, r, t);
            } catch (e) {
                if (
                    (r &&
                        Object.keys(r).forEach((e) => {
                            _[e] = r[e];
                        }),
                    e instanceof Dn)
                ) {
                    if (e.response.status === 422) {
                        let t = JSON.parse(e.response.data).errors || {},
                            r = g.enabled() ? t : It(t);
                        (_.clearErrors().setError(r), n.onError?.(r));
                        return;
                    }
                    throw (n.onHttpException?.(e.response), e);
                }
                throw e instanceof On ||
                    (e instanceof Error && e.name === `AbortError`)
                    ? (n.onCancel?.(), new On(`Request was cancelled`, t))
                    : (n.onNetworkError?.(
                          e instanceof Error ? e : Error(`Unknown error`),
                      ),
                      e);
            } finally {
                (h(), (i = null), n.onFinish?.());
            }
        },
        y =
            (e) =>
            async (t, n = {}) =>
                v(e, t, n);
    Object.assign(_, {
        submit(...e) {
            let t = Jr.parseSubmitArguments(e, l());
            return v(t.method, t.url, t.options);
        },
        get: y(`get`),
        post: y(`post`),
        put: y(`put`),
        patch: y(`patch`),
        delete: y(`delete`),
        cancel() {
            i && i.abort();
        },
        dontRemember(...e) {
            return (p(e), _);
        },
        optimistic(e) {
            return ((a = e), _);
        },
        withAllErrors() {
            return (g.enable(), _);
        },
    });
    let b = _.withPrecognition;
    return ((_.withPrecognition = (...e) => (b.call(_, ...e), _)), l(), _);
}
function Zg(e, t = {}, n = { autoStart: !0 }) {
    let r = n.autoStart ?? !0,
        {
            stop: i,
            start: a,
            destroy: o,
        } = L.poll(e, t, { ...n, autoStart: !1 }),
        s = Ns(r);
    return (
        Eu(() => {
            r && a();
        }),
        Au(() => {
            o();
        }),
        {
            polling: s,
            stop: () => {
                (i(), (s.value = !1));
            },
            start: () => {
                (a(), (s.value = !0));
            },
        }
    );
}
var Qg = Bt.extend({});
function $g(e) {
    var t,
        n,
        r = ``;
    if (typeof e == `string` || typeof e == `number`) r += e;
    else if (typeof e == `object`) {
        if (Array.isArray(e)) {
            var i = e.length;
            for (t = 0; t < i; t++)
                e[t] && (n = $g(e[t])) && (r && (r += ` `), (r += n));
        } else for (n in e) e[n] && (r && (r += ` `), (r += n));
    }
    return r;
}
function e_() {
    for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
        (e = arguments[n]) && (t = $g(e)) && (r && (r += ` `), (r += t));
    return r;
}
var t_ = (e) => (typeof e == `boolean` ? `${e}` : e === 0 ? `0` : e),
    n_ = e_,
    r_ = (e, t) => (n) => {
        if (t?.variants == null) return n_(e, n?.class, n?.className);
        let { variants: r, defaultVariants: i } = t,
            a = Object.keys(r).map((e) => {
                let t = n?.[e],
                    a = i?.[e];
                if (t === null) return null;
                let o = t_(t) || t_(a);
                return r[e][o];
            }),
            o =
                n &&
                Object.entries(n).reduce((e, t) => {
                    let [n, r] = t;
                    return (r === void 0 || (e[n] = r), e);
                }, {});
        return n_(
            e,
            a,
            t?.compoundVariants?.reduce((e, t) => {
                let { class: n, className: r, ...a } = t;
                return Object.entries(a).every((e) => {
                    let [t, n] = e;
                    return Array.isArray(n)
                        ? n.includes({ ...i, ...o }[t])
                        : { ...i, ...o }[t] === n;
                })
                    ? [...e, n, r]
                    : e;
            }, []),
            n?.class,
            n?.className,
        );
    },
    i_ = (e, t) => {
        let n = Array(e.length + t.length);
        for (let t = 0; t < e.length; t++) n[t] = e[t];
        for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
        return n;
    },
    a_ = (e, t) => ({ classGroupId: e, validator: t }),
    o_ = (e = new Map(), t = null, n) => ({
        nextPart: e,
        validators: t,
        classGroupId: n,
    }),
    s_ = `-`,
    c_ = [],
    l_ = `arbitrary..`,
    u_ = (e) => {
        let t = p_(e),
            { conflictingClassGroups: n, conflictingClassGroupModifiers: r } =
                e;
        return {
            getClassGroupId: (e) => {
                if (e.startsWith(`[`) && e.endsWith(`]`)) return f_(e);
                let n = e.split(s_);
                return d_(n, +(n[0] === `` && n.length > 1), t);
            },
            getConflictingClassGroupIds: (e, t) => {
                if (t) {
                    let t = r[e],
                        i = n[e];
                    return t ? (i ? i_(i, t) : t) : i || c_;
                }
                return n[e] || c_;
            },
        };
    },
    d_ = (e, t, n) => {
        if (e.length - t === 0) return n.classGroupId;
        let r = e[t],
            i = n.nextPart.get(r);
        if (i) {
            let n = d_(e, t + 1, i);
            if (n) return n;
        }
        let a = n.validators;
        if (a === null) return;
        let o = t === 0 ? e.join(s_) : e.slice(t).join(s_),
            s = a.length;
        for (let e = 0; e < s; e++) {
            let t = a[e];
            if (t.validator(o)) return t.classGroupId;
        }
    },
    f_ = (e) =>
        e.slice(1, -1).indexOf(`:`) === -1
            ? void 0
            : (() => {
                  let t = e.slice(1, -1),
                      n = t.indexOf(`:`),
                      r = t.slice(0, n);
                  return r ? l_ + r : void 0;
              })(),
    p_ = (e) => {
        let { theme: t, classGroups: n } = e;
        return m_(n, t);
    },
    m_ = (e, t) => {
        let n = o_();
        for (let r in e) {
            let i = e[r];
            h_(i, n, r, t);
        }
        return n;
    },
    h_ = (e, t, n, r) => {
        let i = e.length;
        for (let a = 0; a < i; a++) {
            let i = e[a];
            g_(i, t, n, r);
        }
    },
    g_ = (e, t, n, r) => {
        typeof e == `string`
            ? __(e, t, n)
            : typeof e == `function`
              ? v_(e, t, n, r)
              : y_(e, t, n, r);
    },
    __ = (e, t, n) => {
        let r = e === `` ? t : b_(t, e);
        r.classGroupId = n;
    },
    v_ = (e, t, n, r) => {
        x_(e)
            ? h_(e(r), t, n, r)
            : (t.validators === null && (t.validators = []),
              t.validators.push(a_(n, e)));
    },
    y_ = (e, t, n, r) => {
        let i = Object.entries(e),
            a = i.length;
        for (let e = 0; e < a; e++) {
            let [a, o] = i[e];
            h_(o, b_(t, a), n, r);
        }
    },
    b_ = (e, t) => {
        let n = e,
            r = t.split(s_),
            i = r.length;
        for (let e = 0; e < i; e++) {
            let t = r[e],
                i = n.nextPart.get(t);
            (i || ((i = o_()), n.nextPart.set(t, i)), (n = i));
        }
        return n;
    },
    x_ = (e) => `isThemeGetter` in e && e.isThemeGetter === !0,
    S_ = (e) => {
        if (e < 1) return { get: () => void 0, set: () => {} };
        let t = 0,
            n = Object.create(null),
            r = Object.create(null),
            i = (i, a) => {
                ((n[i] = a),
                    t++,
                    t > e && ((t = 0), (r = n), (n = Object.create(null))));
            };
        return {
            get(e) {
                let t = n[e];
                if (t !== void 0) return t;
                if ((t = r[e]) !== void 0) return (i(e, t), t);
            },
            set(e, t) {
                e in n ? (n[e] = t) : i(e, t);
            },
        };
    },
    C_ = `!`,
    w_ = `:`,
    T_ = [],
    E_ = (e, t, n, r, i) => ({
        modifiers: e,
        hasImportantModifier: t,
        baseClassName: n,
        maybePostfixModifierPosition: r,
        isExternal: i,
    }),
    D_ = (e) => {
        let { prefix: t, experimentalParseClassName: n } = e,
            r = (e) => {
                let t = [],
                    n = 0,
                    r = 0,
                    i = 0,
                    a,
                    o = e.length;
                for (let s = 0; s < o; s++) {
                    let o = e[s];
                    if (n === 0 && r === 0) {
                        if (o === w_) {
                            (t.push(e.slice(i, s)), (i = s + 1));
                            continue;
                        }
                        if (o === `/`) {
                            a = s;
                            continue;
                        }
                    }
                    o === `[`
                        ? n++
                        : o === `]`
                          ? n--
                          : o === `(`
                            ? r++
                            : o === `)` && r--;
                }
                let s = t.length === 0 ? e : e.slice(i),
                    c = s,
                    l = !1;
                s.endsWith(C_)
                    ? ((c = s.slice(0, -1)), (l = !0))
                    : s.startsWith(C_) && ((c = s.slice(1)), (l = !0));
                let u = a && a > i ? a - i : void 0;
                return E_(t, l, c, u);
            };
        if (t) {
            let e = t + w_,
                n = r;
            r = (t) =>
                t.startsWith(e)
                    ? n(t.slice(e.length))
                    : E_(T_, !1, t, void 0, !0);
        }
        if (n) {
            let e = r;
            r = (t) => n({ className: t, parseClassName: e });
        }
        return r;
    },
    O_ = (e) => {
        let t = new Map();
        return (
            e.orderSensitiveModifiers.forEach((e, n) => {
                t.set(e, 1e6 + n);
            }),
            (e) => {
                let n = [],
                    r = [];
                for (let i = 0; i < e.length; i++) {
                    let a = e[i],
                        o = a[0] === `[`,
                        s = t.has(a);
                    o || s
                        ? (r.length > 0 && (r.sort(), n.push(...r), (r = [])),
                          n.push(a))
                        : r.push(a);
                }
                return (r.length > 0 && (r.sort(), n.push(...r)), n);
            }
        );
    },
    k_ = (e) => ({
        cache: S_(e.cacheSize),
        parseClassName: D_(e),
        sortModifiers: O_(e),
        postfixLookupClassGroupIds: A_(e),
        ...u_(e),
    }),
    A_ = (e) => {
        let t = Object.create(null),
            n = e.postfixLookupClassGroups;
        if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
        return t;
    },
    j_ = /\s+/,
    M_ = (e, t) => {
        let {
                parseClassName: n,
                getClassGroupId: r,
                getConflictingClassGroupIds: i,
                sortModifiers: a,
                postfixLookupClassGroupIds: o,
            } = t,
            s = [],
            c = e.trim().split(j_),
            l = ``;
        for (let e = c.length - 1; e >= 0; --e) {
            let t = c[e],
                {
                    isExternal: u,
                    modifiers: d,
                    hasImportantModifier: f,
                    baseClassName: p,
                    maybePostfixModifierPosition: m,
                } = n(t);
            if (u) {
                l = t + (l.length > 0 ? ` ` + l : l);
                continue;
            }
            let h = !!m,
                g;
            if (h) {
                g = r(p.substring(0, m));
                let e = g && o[g] ? r(p) : void 0;
                e && e !== g && ((g = e), (h = !1));
            } else g = r(p);
            if (!g) {
                if (!h || ((g = r(p)), !g)) {
                    l = t + (l.length > 0 ? ` ` + l : l);
                    continue;
                }
                h = !1;
            }
            let _ =
                    d.length === 0
                        ? ``
                        : d.length === 1
                          ? d[0]
                          : a(d).join(`:`),
                v = f ? _ + C_ : _,
                y = v + g;
            if (s.indexOf(y) > -1) continue;
            s.push(y);
            let b = i(g, h);
            for (let e = 0; e < b.length; ++e) {
                let t = b[e];
                s.push(v + t);
            }
            l = t + (l.length > 0 ? ` ` + l : l);
        }
        return l;
    },
    N_ = (...e) => {
        let t = 0,
            n,
            r,
            i = ``;
        for (; t < e.length;)
            (n = e[t++]) && (r = P_(n)) && (i && (i += ` `), (i += r));
        return i;
    },
    P_ = (e) => {
        if (typeof e == `string`) return e;
        let t,
            n = ``;
        for (let r = 0; r < e.length; r++)
            e[r] && (t = P_(e[r])) && (n && (n += ` `), (n += t));
        return n;
    },
    F_ = (e, ...t) => {
        let n,
            r,
            i,
            a,
            o = (o) => (
                (n = k_(t.reduce((e, t) => t(e), e()))),
                (r = n.cache.get),
                (i = n.cache.set),
                (a = s),
                s(o)
            ),
            s = (e) => {
                let t = r(e);
                if (t) return t;
                let a = M_(e, n);
                return (i(e, a), a);
            };
        return ((a = o), (...e) => a(N_(...e)));
    },
    I_ = [],
    L_ = (e) => {
        let t = (t) => t[e] || I_;
        return ((t.isThemeGetter = !0), (t.themeKey = e), t);
    },
    R_ = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
    z_ = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
    B_ = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
    V_ = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    H_ =
        /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    U_ = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/,
    W_ = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    G_ =
        /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    K_ = (e) => B_.test(e),
    Z = (e) => !!e && !Number.isNaN(Number(e)),
    q_ = (e) => !!e && Number.isInteger(Number(e)),
    J_ = (e) => e.endsWith(`%`) && Z(e.slice(0, -1)),
    Y_ = (e) => V_.test(e),
    X_ = () => !0,
    Z_ = (e) => H_.test(e) && !U_.test(e),
    Q_ = () => !1,
    $_ = (e) => W_.test(e),
    ev = (e) => G_.test(e),
    tv = (e) => !Q(e) && !$(e),
    nv = (e) =>
        e.startsWith(`@container`) &&
        ((e[10] === `/` && e[11] !== void 0) ||
            (e[11] === `s` && e[16] !== void 0 && e.startsWith(`-size/`, 10)) ||
            (e[11] === `n` &&
                e[18] !== void 0 &&
                e.startsWith(`-normal/`, 10))),
    rv = (e) => vv(e, Sv, Q_),
    Q = (e) => R_.test(e),
    iv = (e) => vv(e, Cv, Z_),
    av = (e) => vv(e, wv, Z),
    ov = (e) => vv(e, Ev, X_),
    sv = (e) => vv(e, Tv, Q_),
    cv = (e) => vv(e, bv, Q_),
    lv = (e) => vv(e, xv, ev),
    uv = (e) => vv(e, Dv, $_),
    $ = (e) => z_.test(e),
    dv = (e) => yv(e, Cv),
    fv = (e) => yv(e, Tv),
    pv = (e) => yv(e, bv),
    mv = (e) => yv(e, Sv),
    hv = (e) => yv(e, xv),
    gv = (e) => yv(e, Dv, !0),
    _v = (e) => yv(e, Ev, !0),
    vv = (e, t, n) => {
        let r = R_.exec(e);
        return r ? (r[1] ? t(r[1]) : n(r[2])) : !1;
    },
    yv = (e, t, n = !1) => {
        let r = z_.exec(e);
        return r ? (r[1] ? t(r[1]) : n) : !1;
    },
    bv = (e) => e === `position` || e === `percentage`,
    xv = (e) => e === `image` || e === `url`,
    Sv = (e) => e === `length` || e === `size` || e === `bg-size`,
    Cv = (e) => e === `length`,
    wv = (e) => e === `number`,
    Tv = (e) => e === `family-name`,
    Ev = (e) => e === `number` || e === `weight`,
    Dv = (e) => e === `shadow`,
    Ov = F_(() => {
        let e = L_(`color`),
            t = L_(`font`),
            n = L_(`text`),
            r = L_(`font-weight`),
            i = L_(`tracking`),
            a = L_(`leading`),
            o = L_(`breakpoint`),
            s = L_(`container`),
            c = L_(`spacing`),
            l = L_(`radius`),
            u = L_(`shadow`),
            d = L_(`inset-shadow`),
            f = L_(`text-shadow`),
            p = L_(`drop-shadow`),
            m = L_(`blur`),
            h = L_(`perspective`),
            g = L_(`aspect`),
            _ = L_(`ease`),
            v = L_(`animate`),
            y = () => [
                `auto`,
                `avoid`,
                `all`,
                `avoid-page`,
                `page`,
                `left`,
                `right`,
                `column`,
            ],
            b = () => [
                `center`,
                `top`,
                `bottom`,
                `left`,
                `right`,
                `top-left`,
                `left-top`,
                `top-right`,
                `right-top`,
                `bottom-right`,
                `right-bottom`,
                `bottom-left`,
                `left-bottom`,
            ],
            x = () => [...b(), $, Q],
            S = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`],
            C = () => [`auto`, `contain`, `none`],
            w = () => [$, Q, c],
            T = () => [K_, `full`, `auto`, ...w()],
            E = () => [q_, `none`, `subgrid`, $, Q],
            D = () => [`auto`, { span: [`full`, q_, $, Q] }, q_, $, Q],
            ee = () => [q_, `auto`, $, Q],
            te = () => [`auto`, `min`, `max`, `fr`, $, Q],
            ne = () => [
                `start`,
                `end`,
                `center`,
                `between`,
                `around`,
                `evenly`,
                `stretch`,
                `baseline`,
                `center-safe`,
                `end-safe`,
            ],
            O = () => [
                `start`,
                `end`,
                `center`,
                `stretch`,
                `center-safe`,
                `end-safe`,
            ],
            re = () => [`auto`, ...w()],
            ie = () => [
                K_,
                `auto`,
                `full`,
                `dvw`,
                `dvh`,
                `lvw`,
                `lvh`,
                `svw`,
                `svh`,
                `min`,
                `max`,
                `fit`,
                ...w(),
            ],
            ae = () => [
                s,
                K_,
                `screen`,
                `full`,
                `dvw`,
                `lvw`,
                `svw`,
                `min`,
                `max`,
                `fit`,
                ...w(),
            ],
            oe = () => [
                K_,
                `screen`,
                `full`,
                `lh`,
                `dvh`,
                `lvh`,
                `svh`,
                `min`,
                `max`,
                `fit`,
                ...w(),
            ],
            k = () => [e, $, Q],
            A = () => [...b(), pv, cv, { position: [$, Q] }],
            se = () => [
                `no-repeat`,
                { repeat: [``, `x`, `y`, `space`, `round`] },
            ],
            ce = () => [`auto`, `cover`, `contain`, mv, rv, { size: [$, Q] }],
            le = () => [J_, dv, iv],
            ue = () => [``, `none`, `full`, l, $, Q],
            j = () => [``, Z, dv, iv],
            de = () => [`solid`, `dashed`, `dotted`, `double`],
            fe = () => [
                `normal`,
                `multiply`,
                `screen`,
                `overlay`,
                `darken`,
                `lighten`,
                `color-dodge`,
                `color-burn`,
                `hard-light`,
                `soft-light`,
                `difference`,
                `exclusion`,
                `hue`,
                `saturation`,
                `color`,
                `luminosity`,
            ],
            M = () => [Z, J_, pv, cv],
            pe = () => [``, `none`, m, $, Q],
            me = () => [`none`, Z, $, Q],
            he = () => [`none`, Z, $, Q],
            ge = () => [Z, $, Q],
            _e = () => [K_, `full`, ...w()];
        return {
            cacheSize: 500,
            theme: {
                animate: [`spin`, `ping`, `pulse`, `bounce`],
                aspect: [`video`],
                blur: [Y_],
                breakpoint: [Y_],
                color: [X_],
                container: [Y_],
                'drop-shadow': [Y_],
                ease: [`in`, `out`, `in-out`],
                font: [tv],
                'font-weight': [
                    `thin`,
                    `extralight`,
                    `light`,
                    `normal`,
                    `medium`,
                    `semibold`,
                    `bold`,
                    `extrabold`,
                    `black`,
                ],
                'inset-shadow': [Y_],
                leading: [
                    `none`,
                    `tight`,
                    `snug`,
                    `normal`,
                    `relaxed`,
                    `loose`,
                ],
                perspective: [
                    `dramatic`,
                    `near`,
                    `normal`,
                    `midrange`,
                    `distant`,
                    `none`,
                ],
                radius: [Y_],
                shadow: [Y_],
                spacing: [`px`, Z],
                text: [Y_],
                'text-shadow': [Y_],
                tracking: [
                    `tighter`,
                    `tight`,
                    `normal`,
                    `wide`,
                    `wider`,
                    `widest`,
                ],
            },
            classGroups: {
                aspect: [{ aspect: [`auto`, `square`, K_, Q, $, g] }],
                container: [`container`],
                'container-type': [
                    { '@container': [``, `normal`, `size`, $, Q] },
                ],
                'container-named': [nv],
                columns: [{ columns: [Z, `auto`, Q, $, s] }],
                'break-after': [{ 'break-after': y() }],
                'break-before': [{ 'break-before': y() }],
                'break-inside': [
                    {
                        'break-inside': [
                            `auto`,
                            `avoid`,
                            `avoid-page`,
                            `avoid-column`,
                        ],
                    },
                ],
                'box-decoration': [{ 'box-decoration': [`slice`, `clone`] }],
                box: [{ box: [`border`, `content`] }],
                display: [
                    `block`,
                    `inline-block`,
                    `inline`,
                    `flex`,
                    `inline-flex`,
                    `table`,
                    `inline-table`,
                    `table-caption`,
                    `table-cell`,
                    `table-column`,
                    `table-column-group`,
                    `table-footer-group`,
                    `table-header-group`,
                    `table-row-group`,
                    `table-row`,
                    `flow-root`,
                    `grid`,
                    `inline-grid`,
                    `contents`,
                    `list-item`,
                    `hidden`,
                ],
                sr: [`sr-only`, `not-sr-only`],
                float: [{ float: [`right`, `left`, `none`, `start`, `end`] }],
                clear: [
                    {
                        clear: [
                            `left`,
                            `right`,
                            `both`,
                            `none`,
                            `start`,
                            `end`,
                        ],
                    },
                ],
                isolation: [`isolate`, `isolation-auto`],
                'object-fit': [
                    {
                        object: [
                            `contain`,
                            `cover`,
                            `fill`,
                            `none`,
                            `scale-down`,
                        ],
                    },
                ],
                'object-position': [{ object: x() }],
                overflow: [{ overflow: S() }],
                'overflow-x': [{ 'overflow-x': S() }],
                'overflow-y': [{ 'overflow-y': S() }],
                overscroll: [{ overscroll: C() }],
                'overscroll-x': [{ 'overscroll-x': C() }],
                'overscroll-y': [{ 'overscroll-y': C() }],
                position: [`static`, `fixed`, `absolute`, `relative`, `sticky`],
                inset: [{ inset: T() }],
                'inset-x': [{ 'inset-x': T() }],
                'inset-y': [{ 'inset-y': T() }],
                start: [{ 'inset-s': T(), start: T() }],
                end: [{ 'inset-e': T(), end: T() }],
                'inset-bs': [{ 'inset-bs': T() }],
                'inset-be': [{ 'inset-be': T() }],
                top: [{ top: T() }],
                right: [{ right: T() }],
                bottom: [{ bottom: T() }],
                left: [{ left: T() }],
                visibility: [`visible`, `invisible`, `collapse`],
                z: [{ z: [q_, `auto`, $, Q] }],
                basis: [{ basis: [K_, `full`, `auto`, s, ...w()] }],
                'flex-direction': [
                    { flex: [`row`, `row-reverse`, `col`, `col-reverse`] },
                ],
                'flex-wrap': [{ flex: [`nowrap`, `wrap`, `wrap-reverse`] }],
                flex: [{ flex: [Z, K_, `auto`, `initial`, `none`, Q] }],
                grow: [{ grow: [``, Z, $, Q] }],
                shrink: [{ shrink: [``, Z, $, Q] }],
                order: [{ order: [q_, `first`, `last`, `none`, $, Q] }],
                'grid-cols': [{ 'grid-cols': E() }],
                'col-start-end': [{ col: D() }],
                'col-start': [{ 'col-start': ee() }],
                'col-end': [{ 'col-end': ee() }],
                'grid-rows': [{ 'grid-rows': E() }],
                'row-start-end': [{ row: D() }],
                'row-start': [{ 'row-start': ee() }],
                'row-end': [{ 'row-end': ee() }],
                'grid-flow': [
                    {
                        'grid-flow': [
                            `row`,
                            `col`,
                            `dense`,
                            `row-dense`,
                            `col-dense`,
                        ],
                    },
                ],
                'auto-cols': [{ 'auto-cols': te() }],
                'auto-rows': [{ 'auto-rows': te() }],
                gap: [{ gap: w() }],
                'gap-x': [{ 'gap-x': w() }],
                'gap-y': [{ 'gap-y': w() }],
                'justify-content': [{ justify: [...ne(), `normal`] }],
                'justify-items': [{ 'justify-items': [...O(), `normal`] }],
                'justify-self': [{ 'justify-self': [`auto`, ...O()] }],
                'align-content': [{ content: [`normal`, ...ne()] }],
                'align-items': [
                    { items: [...O(), { baseline: [``, `last`] }] },
                ],
                'align-self': [
                    { self: [`auto`, ...O(), { baseline: [``, `last`] }] },
                ],
                'place-content': [{ 'place-content': ne() }],
                'place-items': [{ 'place-items': [...O(), `baseline`] }],
                'place-self': [{ 'place-self': [`auto`, ...O()] }],
                p: [{ p: w() }],
                px: [{ px: w() }],
                py: [{ py: w() }],
                ps: [{ ps: w() }],
                pe: [{ pe: w() }],
                pbs: [{ pbs: w() }],
                pbe: [{ pbe: w() }],
                pt: [{ pt: w() }],
                pr: [{ pr: w() }],
                pb: [{ pb: w() }],
                pl: [{ pl: w() }],
                m: [{ m: re() }],
                mx: [{ mx: re() }],
                my: [{ my: re() }],
                ms: [{ ms: re() }],
                me: [{ me: re() }],
                mbs: [{ mbs: re() }],
                mbe: [{ mbe: re() }],
                mt: [{ mt: re() }],
                mr: [{ mr: re() }],
                mb: [{ mb: re() }],
                ml: [{ ml: re() }],
                'space-x': [{ 'space-x': w() }],
                'space-x-reverse': [`space-x-reverse`],
                'space-y': [{ 'space-y': w() }],
                'space-y-reverse': [`space-y-reverse`],
                size: [{ size: ie() }],
                'inline-size': [{ inline: [`auto`, ...ae()] }],
                'min-inline-size': [{ 'min-inline': [`auto`, ...ae()] }],
                'max-inline-size': [{ 'max-inline': [`none`, ...ae()] }],
                'block-size': [{ block: [`auto`, ...oe()] }],
                'min-block-size': [{ 'min-block': [`auto`, ...oe()] }],
                'max-block-size': [{ 'max-block': [`none`, ...oe()] }],
                w: [{ w: [s, `screen`, ...ie()] }],
                'min-w': [{ 'min-w': [s, `screen`, `none`, ...ie()] }],
                'max-w': [
                    {
                        'max-w': [
                            s,
                            `screen`,
                            `none`,
                            `prose`,
                            { screen: [o] },
                            ...ie(),
                        ],
                    },
                ],
                h: [{ h: [`screen`, `lh`, ...ie()] }],
                'min-h': [{ 'min-h': [`screen`, `lh`, `none`, ...ie()] }],
                'max-h': [{ 'max-h': [`screen`, `lh`, `none`, ...ie()] }],
                'font-size': [{ text: [`base`, n, dv, iv] }],
                'font-smoothing': [`antialiased`, `subpixel-antialiased`],
                'font-style': [`italic`, `not-italic`],
                'font-weight': [{ font: [r, _v, ov] }],
                'font-stretch': [
                    {
                        'font-stretch': [
                            `ultra-condensed`,
                            `extra-condensed`,
                            `condensed`,
                            `semi-condensed`,
                            `normal`,
                            `semi-expanded`,
                            `expanded`,
                            `extra-expanded`,
                            `ultra-expanded`,
                            J_,
                            Q,
                        ],
                    },
                ],
                'font-family': [{ font: [fv, sv, t] }],
                'font-features': [{ 'font-features': [Q] }],
                'fvn-normal': [`normal-nums`],
                'fvn-ordinal': [`ordinal`],
                'fvn-slashed-zero': [`slashed-zero`],
                'fvn-figure': [`lining-nums`, `oldstyle-nums`],
                'fvn-spacing': [`proportional-nums`, `tabular-nums`],
                'fvn-fraction': [`diagonal-fractions`, `stacked-fractions`],
                tracking: [{ tracking: [i, $, Q] }],
                'line-clamp': [{ 'line-clamp': [Z, `none`, $, av] }],
                leading: [{ leading: [`none`, a, ...w()] }],
                'list-image': [{ 'list-image': [`none`, $, Q] }],
                'list-style-position': [{ list: [`inside`, `outside`] }],
                'list-style-type': [
                    { list: [`disc`, `decimal`, `none`, $, Q] },
                ],
                'text-alignment': [
                    {
                        text: [
                            `left`,
                            `center`,
                            `right`,
                            `justify`,
                            `start`,
                            `end`,
                        ],
                    },
                ],
                'placeholder-color': [{ placeholder: k() }],
                'text-color': [{ text: k() }],
                'text-decoration': [
                    `underline`,
                    `overline`,
                    `line-through`,
                    `no-underline`,
                ],
                'text-decoration-style': [{ decoration: [...de(), `wavy`] }],
                'text-decoration-thickness': [
                    { decoration: [Z, `from-font`, `auto`, $, iv] },
                ],
                'text-decoration-color': [{ decoration: k() }],
                'underline-offset': [{ 'underline-offset': [Z, `auto`, $, Q] }],
                'text-transform': [
                    `uppercase`,
                    `lowercase`,
                    `capitalize`,
                    `normal-case`,
                ],
                'text-overflow': [`truncate`, `text-ellipsis`, `text-clip`],
                'text-wrap': [
                    { text: [`wrap`, `nowrap`, `balance`, `pretty`] },
                ],
                indent: [{ indent: w() }],
                'tab-size': [{ tab: [q_, $, Q] }],
                'vertical-align': [
                    {
                        align: [
                            `baseline`,
                            `top`,
                            `middle`,
                            `bottom`,
                            `text-top`,
                            `text-bottom`,
                            `sub`,
                            `super`,
                            $,
                            Q,
                        ],
                    },
                ],
                whitespace: [
                    {
                        whitespace: [
                            `normal`,
                            `nowrap`,
                            `pre`,
                            `pre-line`,
                            `pre-wrap`,
                            `break-spaces`,
                        ],
                    },
                ],
                break: [{ break: [`normal`, `words`, `all`, `keep`] }],
                wrap: [{ wrap: [`break-word`, `anywhere`, `normal`] }],
                hyphens: [{ hyphens: [`none`, `manual`, `auto`] }],
                content: [{ content: [`none`, $, Q] }],
                'bg-attachment': [{ bg: [`fixed`, `local`, `scroll`] }],
                'bg-clip': [
                    { 'bg-clip': [`border`, `padding`, `content`, `text`] },
                ],
                'bg-origin': [
                    { 'bg-origin': [`border`, `padding`, `content`] },
                ],
                'bg-position': [{ bg: A() }],
                'bg-repeat': [{ bg: se() }],
                'bg-size': [{ bg: ce() }],
                'bg-image': [
                    {
                        bg: [
                            `none`,
                            {
                                linear: [
                                    {
                                        to: [
                                            `t`,
                                            `tr`,
                                            `r`,
                                            `br`,
                                            `b`,
                                            `bl`,
                                            `l`,
                                            `tl`,
                                        ],
                                    },
                                    q_,
                                    $,
                                    Q,
                                ],
                                radial: [``, $, Q],
                                conic: [``, q_, $, Q],
                            },
                            hv,
                            lv,
                        ],
                    },
                ],
                'bg-color': [{ bg: k() }],
                'gradient-from-pos': [{ from: le() }],
                'gradient-via-pos': [{ via: le() }],
                'gradient-to-pos': [{ to: le() }],
                'gradient-from': [{ from: k() }],
                'gradient-via': [{ via: k() }],
                'gradient-to': [{ to: k() }],
                rounded: [{ rounded: ue() }],
                'rounded-s': [{ 'rounded-s': ue() }],
                'rounded-e': [{ 'rounded-e': ue() }],
                'rounded-t': [{ 'rounded-t': ue() }],
                'rounded-r': [{ 'rounded-r': ue() }],
                'rounded-b': [{ 'rounded-b': ue() }],
                'rounded-l': [{ 'rounded-l': ue() }],
                'rounded-ss': [{ 'rounded-ss': ue() }],
                'rounded-se': [{ 'rounded-se': ue() }],
                'rounded-ee': [{ 'rounded-ee': ue() }],
                'rounded-es': [{ 'rounded-es': ue() }],
                'rounded-tl': [{ 'rounded-tl': ue() }],
                'rounded-tr': [{ 'rounded-tr': ue() }],
                'rounded-br': [{ 'rounded-br': ue() }],
                'rounded-bl': [{ 'rounded-bl': ue() }],
                'border-w': [{ border: j() }],
                'border-w-x': [{ 'border-x': j() }],
                'border-w-y': [{ 'border-y': j() }],
                'border-w-s': [{ 'border-s': j() }],
                'border-w-e': [{ 'border-e': j() }],
                'border-w-bs': [{ 'border-bs': j() }],
                'border-w-be': [{ 'border-be': j() }],
                'border-w-t': [{ 'border-t': j() }],
                'border-w-r': [{ 'border-r': j() }],
                'border-w-b': [{ 'border-b': j() }],
                'border-w-l': [{ 'border-l': j() }],
                'divide-x': [{ 'divide-x': j() }],
                'divide-x-reverse': [`divide-x-reverse`],
                'divide-y': [{ 'divide-y': j() }],
                'divide-y-reverse': [`divide-y-reverse`],
                'border-style': [{ border: [...de(), `hidden`, `none`] }],
                'divide-style': [{ divide: [...de(), `hidden`, `none`] }],
                'border-color': [{ border: k() }],
                'border-color-x': [{ 'border-x': k() }],
                'border-color-y': [{ 'border-y': k() }],
                'border-color-s': [{ 'border-s': k() }],
                'border-color-e': [{ 'border-e': k() }],
                'border-color-bs': [{ 'border-bs': k() }],
                'border-color-be': [{ 'border-be': k() }],
                'border-color-t': [{ 'border-t': k() }],
                'border-color-r': [{ 'border-r': k() }],
                'border-color-b': [{ 'border-b': k() }],
                'border-color-l': [{ 'border-l': k() }],
                'divide-color': [{ divide: k() }],
                'outline-style': [{ outline: [...de(), `none`, `hidden`] }],
                'outline-offset': [{ 'outline-offset': [Z, $, Q] }],
                'outline-w': [{ outline: [``, Z, dv, iv] }],
                'outline-color': [{ outline: k() }],
                shadow: [{ shadow: [``, `inner`, `none`, u, gv, uv] }],
                'shadow-color': [{ shadow: k() }],
                'inset-shadow': [{ 'inset-shadow': [`none`, d, gv, uv] }],
                'inset-shadow-color': [{ 'inset-shadow': k() }],
                'ring-w': [{ ring: j() }],
                'ring-w-inset': [`ring-inset`],
                'ring-color': [{ ring: k() }],
                'ring-offset-w': [{ 'ring-offset': [Z, iv] }],
                'ring-offset-color': [{ 'ring-offset': k() }],
                'inset-ring-w': [{ 'inset-ring': j() }],
                'inset-ring-color': [{ 'inset-ring': k() }],
                'text-shadow': [{ 'text-shadow': [`none`, f, gv, uv] }],
                'text-shadow-color': [{ 'text-shadow': k() }],
                opacity: [{ opacity: [Z, $, Q] }],
                'mix-blend': [
                    { 'mix-blend': [...fe(), `plus-darker`, `plus-lighter`] },
                ],
                'bg-blend': [{ 'bg-blend': fe() }],
                'mask-clip': [
                    {
                        'mask-clip': [
                            `border`,
                            `padding`,
                            `content`,
                            `fill`,
                            `stroke`,
                            `view`,
                        ],
                    },
                    `mask-no-clip`,
                ],
                'mask-composite': [
                    { mask: [`add`, `subtract`, `intersect`, `exclude`] },
                ],
                'mask-image-linear-pos': [{ 'mask-linear': [Z] }],
                'mask-image-linear-from-pos': [{ 'mask-linear-from': M() }],
                'mask-image-linear-to-pos': [{ 'mask-linear-to': M() }],
                'mask-image-linear-from-color': [{ 'mask-linear-from': k() }],
                'mask-image-linear-to-color': [{ 'mask-linear-to': k() }],
                'mask-image-t-from-pos': [{ 'mask-t-from': M() }],
                'mask-image-t-to-pos': [{ 'mask-t-to': M() }],
                'mask-image-t-from-color': [{ 'mask-t-from': k() }],
                'mask-image-t-to-color': [{ 'mask-t-to': k() }],
                'mask-image-r-from-pos': [{ 'mask-r-from': M() }],
                'mask-image-r-to-pos': [{ 'mask-r-to': M() }],
                'mask-image-r-from-color': [{ 'mask-r-from': k() }],
                'mask-image-r-to-color': [{ 'mask-r-to': k() }],
                'mask-image-b-from-pos': [{ 'mask-b-from': M() }],
                'mask-image-b-to-pos': [{ 'mask-b-to': M() }],
                'mask-image-b-from-color': [{ 'mask-b-from': k() }],
                'mask-image-b-to-color': [{ 'mask-b-to': k() }],
                'mask-image-l-from-pos': [{ 'mask-l-from': M() }],
                'mask-image-l-to-pos': [{ 'mask-l-to': M() }],
                'mask-image-l-from-color': [{ 'mask-l-from': k() }],
                'mask-image-l-to-color': [{ 'mask-l-to': k() }],
                'mask-image-x-from-pos': [{ 'mask-x-from': M() }],
                'mask-image-x-to-pos': [{ 'mask-x-to': M() }],
                'mask-image-x-from-color': [{ 'mask-x-from': k() }],
                'mask-image-x-to-color': [{ 'mask-x-to': k() }],
                'mask-image-y-from-pos': [{ 'mask-y-from': M() }],
                'mask-image-y-to-pos': [{ 'mask-y-to': M() }],
                'mask-image-y-from-color': [{ 'mask-y-from': k() }],
                'mask-image-y-to-color': [{ 'mask-y-to': k() }],
                'mask-image-radial': [{ 'mask-radial': [$, Q] }],
                'mask-image-radial-from-pos': [{ 'mask-radial-from': M() }],
                'mask-image-radial-to-pos': [{ 'mask-radial-to': M() }],
                'mask-image-radial-from-color': [{ 'mask-radial-from': k() }],
                'mask-image-radial-to-color': [{ 'mask-radial-to': k() }],
                'mask-image-radial-shape': [
                    { 'mask-radial': [`circle`, `ellipse`] },
                ],
                'mask-image-radial-size': [
                    {
                        'mask-radial': [
                            {
                                closest: [`side`, `corner`],
                                farthest: [`side`, `corner`],
                            },
                        ],
                    },
                ],
                'mask-image-radial-pos': [{ 'mask-radial-at': b() }],
                'mask-image-conic-pos': [{ 'mask-conic': [Z] }],
                'mask-image-conic-from-pos': [{ 'mask-conic-from': M() }],
                'mask-image-conic-to-pos': [{ 'mask-conic-to': M() }],
                'mask-image-conic-from-color': [{ 'mask-conic-from': k() }],
                'mask-image-conic-to-color': [{ 'mask-conic-to': k() }],
                'mask-mode': [{ mask: [`alpha`, `luminance`, `match`] }],
                'mask-origin': [
                    {
                        'mask-origin': [
                            `border`,
                            `padding`,
                            `content`,
                            `fill`,
                            `stroke`,
                            `view`,
                        ],
                    },
                ],
                'mask-position': [{ mask: A() }],
                'mask-repeat': [{ mask: se() }],
                'mask-size': [{ mask: ce() }],
                'mask-type': [{ 'mask-type': [`alpha`, `luminance`] }],
                'mask-image': [{ mask: [`none`, $, Q] }],
                filter: [{ filter: [``, `none`, $, Q] }],
                blur: [{ blur: pe() }],
                brightness: [{ brightness: [Z, $, Q] }],
                contrast: [{ contrast: [Z, $, Q] }],
                'drop-shadow': [{ 'drop-shadow': [``, `none`, p, gv, uv] }],
                'drop-shadow-color': [{ 'drop-shadow': k() }],
                grayscale: [{ grayscale: [``, Z, $, Q] }],
                'hue-rotate': [{ 'hue-rotate': [Z, $, Q] }],
                invert: [{ invert: [``, Z, $, Q] }],
                saturate: [{ saturate: [Z, $, Q] }],
                sepia: [{ sepia: [``, Z, $, Q] }],
                'backdrop-filter': [{ 'backdrop-filter': [``, `none`, $, Q] }],
                'backdrop-blur': [{ 'backdrop-blur': pe() }],
                'backdrop-brightness': [{ 'backdrop-brightness': [Z, $, Q] }],
                'backdrop-contrast': [{ 'backdrop-contrast': [Z, $, Q] }],
                'backdrop-grayscale': [{ 'backdrop-grayscale': [``, Z, $, Q] }],
                'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [Z, $, Q] }],
                'backdrop-invert': [{ 'backdrop-invert': [``, Z, $, Q] }],
                'backdrop-opacity': [{ 'backdrop-opacity': [Z, $, Q] }],
                'backdrop-saturate': [{ 'backdrop-saturate': [Z, $, Q] }],
                'backdrop-sepia': [{ 'backdrop-sepia': [``, Z, $, Q] }],
                'border-collapse': [{ border: [`collapse`, `separate`] }],
                'border-spacing': [{ 'border-spacing': w() }],
                'border-spacing-x': [{ 'border-spacing-x': w() }],
                'border-spacing-y': [{ 'border-spacing-y': w() }],
                'table-layout': [{ table: [`auto`, `fixed`] }],
                caption: [{ caption: [`top`, `bottom`] }],
                transition: [
                    {
                        transition: [
                            ``,
                            `all`,
                            `colors`,
                            `opacity`,
                            `shadow`,
                            `transform`,
                            `none`,
                            $,
                            Q,
                        ],
                    },
                ],
                'transition-behavior': [{ transition: [`normal`, `discrete`] }],
                duration: [{ duration: [Z, `initial`, $, Q] }],
                ease: [{ ease: [`linear`, `initial`, _, $, Q] }],
                delay: [{ delay: [Z, $, Q] }],
                animate: [{ animate: [`none`, v, $, Q] }],
                backface: [{ backface: [`hidden`, `visible`] }],
                perspective: [{ perspective: [h, $, Q] }],
                'perspective-origin': [{ 'perspective-origin': x() }],
                rotate: [{ rotate: me() }],
                'rotate-x': [{ 'rotate-x': me() }],
                'rotate-y': [{ 'rotate-y': me() }],
                'rotate-z': [{ 'rotate-z': me() }],
                scale: [{ scale: he() }],
                'scale-x': [{ 'scale-x': he() }],
                'scale-y': [{ 'scale-y': he() }],
                'scale-z': [{ 'scale-z': he() }],
                'scale-3d': [`scale-3d`],
                skew: [{ skew: ge() }],
                'skew-x': [{ 'skew-x': ge() }],
                'skew-y': [{ 'skew-y': ge() }],
                transform: [{ transform: [$, Q, ``, `none`, `gpu`, `cpu`] }],
                'transform-origin': [{ origin: x() }],
                'transform-style': [{ transform: [`3d`, `flat`] }],
                translate: [{ translate: _e() }],
                'translate-x': [{ 'translate-x': _e() }],
                'translate-y': [{ 'translate-y': _e() }],
                'translate-z': [{ 'translate-z': _e() }],
                'translate-none': [`translate-none`],
                zoom: [{ zoom: [q_, $, Q] }],
                accent: [{ accent: k() }],
                appearance: [{ appearance: [`none`, `auto`] }],
                'caret-color': [{ caret: k() }],
                'color-scheme': [
                    {
                        scheme: [
                            `normal`,
                            `dark`,
                            `light`,
                            `light-dark`,
                            `only-dark`,
                            `only-light`,
                        ],
                    },
                ],
                cursor: [
                    {
                        cursor: [
                            `auto`,
                            `default`,
                            `pointer`,
                            `wait`,
                            `text`,
                            `move`,
                            `help`,
                            `not-allowed`,
                            `none`,
                            `context-menu`,
                            `progress`,
                            `cell`,
                            `crosshair`,
                            `vertical-text`,
                            `alias`,
                            `copy`,
                            `no-drop`,
                            `grab`,
                            `grabbing`,
                            `all-scroll`,
                            `col-resize`,
                            `row-resize`,
                            `n-resize`,
                            `e-resize`,
                            `s-resize`,
                            `w-resize`,
                            `ne-resize`,
                            `nw-resize`,
                            `se-resize`,
                            `sw-resize`,
                            `ew-resize`,
                            `ns-resize`,
                            `nesw-resize`,
                            `nwse-resize`,
                            `zoom-in`,
                            `zoom-out`,
                            $,
                            Q,
                        ],
                    },
                ],
                'field-sizing': [{ 'field-sizing': [`fixed`, `content`] }],
                'pointer-events': [{ 'pointer-events': [`auto`, `none`] }],
                resize: [{ resize: [`none`, ``, `y`, `x`] }],
                'scroll-behavior': [{ scroll: [`auto`, `smooth`] }],
                'scrollbar-thumb-color': [{ 'scrollbar-thumb': k() }],
                'scrollbar-track-color': [{ 'scrollbar-track': k() }],
                'scrollbar-gutter': [
                    { 'scrollbar-gutter': [`auto`, `stable`, `both`] },
                ],
                'scrollbar-w': [{ scrollbar: [`auto`, `thin`, `none`] }],
                'scroll-m': [{ 'scroll-m': w() }],
                'scroll-mx': [{ 'scroll-mx': w() }],
                'scroll-my': [{ 'scroll-my': w() }],
                'scroll-ms': [{ 'scroll-ms': w() }],
                'scroll-me': [{ 'scroll-me': w() }],
                'scroll-mbs': [{ 'scroll-mbs': w() }],
                'scroll-mbe': [{ 'scroll-mbe': w() }],
                'scroll-mt': [{ 'scroll-mt': w() }],
                'scroll-mr': [{ 'scroll-mr': w() }],
                'scroll-mb': [{ 'scroll-mb': w() }],
                'scroll-ml': [{ 'scroll-ml': w() }],
                'scroll-p': [{ 'scroll-p': w() }],
                'scroll-px': [{ 'scroll-px': w() }],
                'scroll-py': [{ 'scroll-py': w() }],
                'scroll-ps': [{ 'scroll-ps': w() }],
                'scroll-pe': [{ 'scroll-pe': w() }],
                'scroll-pbs': [{ 'scroll-pbs': w() }],
                'scroll-pbe': [{ 'scroll-pbe': w() }],
                'scroll-pt': [{ 'scroll-pt': w() }],
                'scroll-pr': [{ 'scroll-pr': w() }],
                'scroll-pb': [{ 'scroll-pb': w() }],
                'scroll-pl': [{ 'scroll-pl': w() }],
                'snap-align': [
                    { snap: [`start`, `end`, `center`, `align-none`] },
                ],
                'snap-stop': [{ snap: [`normal`, `always`] }],
                'snap-type': [{ snap: [`none`, `x`, `y`, `both`] }],
                'snap-strictness': [{ snap: [`mandatory`, `proximity`] }],
                touch: [{ touch: [`auto`, `none`, `manipulation`] }],
                'touch-x': [{ 'touch-pan': [`x`, `left`, `right`] }],
                'touch-y': [{ 'touch-pan': [`y`, `up`, `down`] }],
                'touch-pz': [`touch-pinch-zoom`],
                select: [{ select: [`none`, `text`, `all`, `auto`] }],
                'will-change': [
                    {
                        'will-change': [
                            `auto`,
                            `scroll`,
                            `contents`,
                            `transform`,
                            $,
                            Q,
                        ],
                    },
                ],
                fill: [{ fill: [`none`, ...k()] }],
                'stroke-w': [{ stroke: [Z, dv, iv, av] }],
                stroke: [{ stroke: [`none`, ...k()] }],
                'forced-color-adjust': [
                    { 'forced-color-adjust': [`auto`, `none`] },
                ],
            },
            conflictingClassGroups: {
                'container-named': [`container-type`],
                overflow: [`overflow-x`, `overflow-y`],
                overscroll: [`overscroll-x`, `overscroll-y`],
                inset: [
                    `inset-x`,
                    `inset-y`,
                    `inset-bs`,
                    `inset-be`,
                    `start`,
                    `end`,
                    `top`,
                    `right`,
                    `bottom`,
                    `left`,
                ],
                'inset-x': [`start`, `end`, `right`, `left`],
                'inset-y': [`inset-bs`, `inset-be`, `top`, `bottom`],
                flex: [`basis`, `grow`, `shrink`],
                gap: [`gap-x`, `gap-y`],
                p: [
                    `px`,
                    `py`,
                    `ps`,
                    `pe`,
                    `pbs`,
                    `pbe`,
                    `pt`,
                    `pr`,
                    `pb`,
                    `pl`,
                ],
                px: [`ps`, `pe`, `pr`, `pl`],
                py: [`pbs`, `pbe`, `pt`, `pb`],
                m: [
                    `mx`,
                    `my`,
                    `ms`,
                    `me`,
                    `mbs`,
                    `mbe`,
                    `mt`,
                    `mr`,
                    `mb`,
                    `ml`,
                ],
                mx: [`ms`, `me`, `mr`, `ml`],
                my: [`mbs`, `mbe`, `mt`, `mb`],
                size: [`w`, `h`],
                'font-size': [`leading`],
                'fvn-normal': [
                    `fvn-ordinal`,
                    `fvn-slashed-zero`,
                    `fvn-figure`,
                    `fvn-spacing`,
                    `fvn-fraction`,
                ],
                'fvn-ordinal': [`fvn-normal`],
                'fvn-slashed-zero': [`fvn-normal`],
                'fvn-figure': [`fvn-normal`],
                'fvn-spacing': [`fvn-normal`],
                'fvn-fraction': [`fvn-normal`],
                'line-clamp': [`display`, `overflow`],
                rounded: [
                    `rounded-s`,
                    `rounded-e`,
                    `rounded-t`,
                    `rounded-r`,
                    `rounded-b`,
                    `rounded-l`,
                    `rounded-ss`,
                    `rounded-se`,
                    `rounded-ee`,
                    `rounded-es`,
                    `rounded-tl`,
                    `rounded-tr`,
                    `rounded-br`,
                    `rounded-bl`,
                ],
                'rounded-s': [`rounded-ss`, `rounded-es`],
                'rounded-e': [`rounded-se`, `rounded-ee`],
                'rounded-t': [`rounded-tl`, `rounded-tr`],
                'rounded-r': [`rounded-tr`, `rounded-br`],
                'rounded-b': [`rounded-br`, `rounded-bl`],
                'rounded-l': [`rounded-tl`, `rounded-bl`],
                'border-spacing': [`border-spacing-x`, `border-spacing-y`],
                'border-w': [
                    `border-w-x`,
                    `border-w-y`,
                    `border-w-s`,
                    `border-w-e`,
                    `border-w-bs`,
                    `border-w-be`,
                    `border-w-t`,
                    `border-w-r`,
                    `border-w-b`,
                    `border-w-l`,
                ],
                'border-w-x': [
                    `border-w-s`,
                    `border-w-e`,
                    `border-w-r`,
                    `border-w-l`,
                ],
                'border-w-y': [
                    `border-w-bs`,
                    `border-w-be`,
                    `border-w-t`,
                    `border-w-b`,
                ],
                'border-color': [
                    `border-color-x`,
                    `border-color-y`,
                    `border-color-s`,
                    `border-color-e`,
                    `border-color-bs`,
                    `border-color-be`,
                    `border-color-t`,
                    `border-color-r`,
                    `border-color-b`,
                    `border-color-l`,
                ],
                'border-color-x': [
                    `border-color-s`,
                    `border-color-e`,
                    `border-color-r`,
                    `border-color-l`,
                ],
                'border-color-y': [
                    `border-color-bs`,
                    `border-color-be`,
                    `border-color-t`,
                    `border-color-b`,
                ],
                translate: [`translate-x`, `translate-y`, `translate-none`],
                'translate-none': [
                    `translate`,
                    `translate-x`,
                    `translate-y`,
                    `translate-z`,
                ],
                'scroll-m': [
                    `scroll-mx`,
                    `scroll-my`,
                    `scroll-ms`,
                    `scroll-me`,
                    `scroll-mbs`,
                    `scroll-mbe`,
                    `scroll-mt`,
                    `scroll-mr`,
                    `scroll-mb`,
                    `scroll-ml`,
                ],
                'scroll-mx': [
                    `scroll-ms`,
                    `scroll-me`,
                    `scroll-mr`,
                    `scroll-ml`,
                ],
                'scroll-my': [
                    `scroll-mbs`,
                    `scroll-mbe`,
                    `scroll-mt`,
                    `scroll-mb`,
                ],
                'scroll-p': [
                    `scroll-px`,
                    `scroll-py`,
                    `scroll-ps`,
                    `scroll-pe`,
                    `scroll-pbs`,
                    `scroll-pbe`,
                    `scroll-pt`,
                    `scroll-pr`,
                    `scroll-pb`,
                    `scroll-pl`,
                ],
                'scroll-px': [
                    `scroll-ps`,
                    `scroll-pe`,
                    `scroll-pr`,
                    `scroll-pl`,
                ],
                'scroll-py': [
                    `scroll-pbs`,
                    `scroll-pbe`,
                    `scroll-pt`,
                    `scroll-pb`,
                ],
                touch: [`touch-x`, `touch-y`, `touch-pz`],
                'touch-x': [`touch`],
                'touch-y': [`touch`],
                'touch-pz': [`touch`],
            },
            conflictingClassGroupModifiers: { 'font-size': [`leading`] },
            postfixLookupClassGroups: [`container-type`],
            orderSensitiveModifiers: [
                `*`,
                `**`,
                `after`,
                `backdrop`,
                `before`,
                `details-content`,
                `file`,
                `first-letter`,
                `first-line`,
                `marker`,
                `placeholder`,
                `selection`,
            ],
        };
    });
function kv(...e) {
    return Ov(e_(e));
}
function Av(e) {
    return typeof e == `string` ? e : e?.url;
}
function jv(e) {
    return e ? e.flatMap((e) => (e.type === Lf ? jv(e.children) : [e])) : [];
}
var Mv = Nl({
        name: `PrimitiveSlot`,
        inheritAttrs: !1,
        setup(e, { attrs: t, slots: n }) {
            return () => {
                if (!n.default) return null;
                let e = jv(n.default()),
                    r = e.findIndex((e) => e.type !== q);
                if (r === -1) return e;
                let i = e[r];
                delete i.props?.ref;
                let a = i.props ? up(t, i.props) : t,
                    o = rp({ ...i, props: {} }, a);
                return e.length === 1 ? o : ((e[r] = o), e);
            };
        },
    }),
    Nv = [`area`, `img`, `input`],
    Pv = Nl({
        name: `Primitive`,
        inheritAttrs: !1,
        props: {
            asChild: { type: Boolean, default: !1 },
            as: { type: [String, Object], default: `div` },
        },
        setup(e, { attrs: t, slots: n }) {
            let r = e.asChild ? `template` : e.as;
            return typeof r == `string` && Nv.includes(r)
                ? () => Lp(r, t)
                : r === `template`
                  ? () => Lp(Mv, t, { default: n.default })
                  : () => Lp(e.as, t, { default: n.default });
        },
    }),
    Fv = () => ({}),
    Iv = (e) => (e === !0 ? `1` : e === !1 ? `0` : e.toString()),
    Lv = (e, t, n) => {
        Object.entries(e).forEach(([e, r]) => {
            if (r === void 0) return;
            let i = `${t}[${e}]`;
            Array.isArray(r)
                ? r.forEach((e) => n.append(`${i}[]`, Iv(e)))
                : typeof r == `object` && r
                  ? Lv(r, i, n)
                  : [`string`, `number`, `boolean`].includes(typeof r) &&
                    n.set(i, Iv(r));
        });
    },
    Rv = (e, t) => {
        let n = new Set();
        (e.forEach((e, r) => {
            (r === t || r.startsWith(`${t}[`)) && n.add(r);
        }),
            n.forEach((t) => e.delete(t)));
    },
    zv = (e) => {
        if (!e || (!e.query && !e.mergeQuery)) return ``;
        let t = e.query ?? e.mergeQuery,
            n = e.mergeQuery !== void 0,
            r = new URLSearchParams(
                n && typeof window < `u` ? window.location.search : ``,
            );
        for (let e in t) {
            let i = t[e];
            (n && Rv(r, e),
                i != null &&
                    (Array.isArray(i)
                        ? i.forEach((t) => {
                              r.append(`${e}[]`, t.toString());
                          })
                        : typeof i == `object`
                          ? Lv(i, e, r)
                          : r.set(e, Iv(i))));
        }
        let i = r.toString();
        return i.length > 0 ? `?${i}` : ``;
    },
    Bv = (e) => {
        let t = { ...(e ?? {}) },
            n = Fv();
        for (let e in n) t[e] === void 0 && n[e] !== void 0 && (t[e] = n[e]);
        return t;
    };
export {
    pc as $,
    io as $n,
    Ou as $t,
    Om as A,
    Qc as An,
    lu as At,
    qh as B,
    Zs as Bn,
    up as Bt,
    ah as C,
    od as Cn,
    _p as Ct,
    eh as D,
    Hp as Dn,
    mc as Dt,
    em as E,
    Vp as En,
    Lp as Et,
    Fh as F,
    Wc as Fn,
    Bp as Ft,
    Up as G,
    ro as Gn,
    Du as Gt,
    Sl as H,
    Us as Hn,
    _u as Ht,
    Ih as I,
    zp as In,
    Ap as It,
    zf as J,
    Ts as Jn,
    Eu as Jt,
    Lf as K,
    nc as Kn,
    vu as Kt,
    Mh as L,
    Hc as Ln,
    Yf as Lt,
    lh as M,
    pd as Mn,
    su as Mt,
    Nh as N,
    Uc as Nn,
    Rp as Nt,
    tg as O,
    el as On,
    Jc as Ot,
    Vh as P,
    ad as Pn,
    qc as Pt,
    lc as Q,
    ks as Qn,
    Au as Qt,
    wm as R,
    to as Rn,
    ud as Rt,
    ih as S,
    Xc as Sn,
    L as Sr,
    Wp as St,
    cg as T,
    bl as Tn,
    np as Tt,
    q as U,
    bo as Un,
    Tu as Ut,
    Tl as V,
    Qs as Vn,
    Cc as Vt,
    uc as W,
    no as Wn,
    ku as Wt,
    hl as X,
    Ms as Xn,
    Mu as Xt,
    Ef as Y,
    Es as Yn,
    Nu as Yt,
    Rf as Z,
    Ds as Zn,
    ju as Zt,
    om as _,
    qu as _n,
    za as _r,
    td as _t,
    jv as a,
    kp as an,
    xs as ar,
    op as at,
    rg as b,
    Pl as bn,
    Xa as br,
    $u as bt,
    r_ as c,
    Lu as cn,
    xo as cr,
    fd as ct,
    qg as d,
    Dl as dn,
    Ws as dr,
    ap as dt,
    Hf as en,
    rc as er,
    fc as et,
    Yg as f,
    Gf as fn,
    zs as fr,
    ip as ft,
    Zg as g,
    Kp as gn,
    wa as gr,
    ed as gt,
    Ag as h,
    Yc as hn,
    xa as hr,
    Nl as ht,
    Mv as i,
    Dc as in,
    Ns as ir,
    Jf as it,
    ch as j,
    $c as jn,
    cu as jt,
    uh as k,
    Zc as kn,
    au as kt,
    jg as l,
    Bu as ln,
    K as lr,
    pf as lt,
    Xg as m,
    Al as mn,
    Rs as mr,
    fu as mt,
    zv as n,
    Kc as nn,
    bs as nr,
    Y as nt,
    kv as o,
    Uu as on,
    Cs as or,
    qf as ot,
    pg as p,
    Gp as pn,
    Ls as pr,
    J as pt,
    hu as q,
    Os as qn,
    Pu as qt,
    Pv as r,
    Bc as rn,
    Ss as rr,
    ep as rt,
    Av as s,
    Gu as sn,
    Ps as sr,
    mf as st,
    Bv as t,
    Vc as tn,
    Vs as tr,
    rp as tt,
    Pg as u,
    zu as un,
    qs as ur,
    Wu as ut,
    gh as v,
    Zf as vn,
    Ba as vr,
    id as vt,
    ng as w,
    Il as wn,
    jl as wt,
    ig as x,
    Nd as xn,
    Ta as xr,
    rd as xt,
    sh as y,
    sd as yn,
    Pa as yr,
    nd as yt,
    Yh as z,
    oo as zn,
    dd as zt,
};
