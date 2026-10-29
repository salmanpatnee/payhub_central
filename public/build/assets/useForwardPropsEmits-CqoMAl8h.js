import {
    Ct as e,
    hr as t,
    nt as n,
    ur as r,
    xr as i,
} from './wayfinder-BZPu7hPl.js';
function a(n) {
    let r = e(),
        a = r?.type.emits,
        o = {};
    return (
        a?.length ||
            console.warn(
                `No emitted event found. Please check component: ${r?.type.__name}`,
            ),
        a?.forEach((e) => {
            o[i(t(e))] = (...t) => n(e, ...t);
        }),
        o
    );
}
function o(i) {
    let a = e(),
        o = Object.keys(a?.type.props ?? {}).reduce((e, t) => {
            let n = (a?.type.props[t]).default;
            return (n !== void 0 && (e[t] = n), e);
        }, {}),
        s = r(i);
    return n(() => {
        let e = {},
            n = a?.vnode.props ?? {};
        return (
            Object.keys(n).forEach((r) => {
                e[t(r)] = n[r];
            }),
            Object.keys({ ...o, ...e }).reduce(
                (e, t) => (s.value[t] !== void 0 && (e[t] = s.value[t]), e),
                {},
            )
        );
    });
}
function s(e, t) {
    let r = o(e),
        i = t ? a(t) : {};
    return n(() => ({ ...r.value, ...i }));
}
export { o as n, a as r, s as t };
