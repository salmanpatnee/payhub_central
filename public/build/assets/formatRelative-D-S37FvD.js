function e(e, t) {
    let n = t.toUpperCase();
    if (typeof e != `number` || !Number.isSafeInteger(e))
        return { code: n, amount: `—` };
    let r = Math.abs(e).toString().padStart(3, `0`),
        i = r.slice(0, -2).replace(/\B(?=(\d{3})+$)/g, `,`),
        a = r.slice(-2);
    return { code: n, amount: `${e < 0 ? `-` : ``}${i}.${a}` };
}
var t = 3600,
    n = 24 * t;
function r(e, r) {
    if (!e) return `Never`;
    let i = Date.parse(e);
    if (Number.isNaN(i)) return `—`;
    let a = (r - i) / 1e3;
    if (a < 45) return `just now`;
    if (a < t) return `${Math.max(1, Math.floor(a / 60))} min ago`;
    if (a < n) {
        let e = Math.floor(a / t);
        return `${e} ${e === 1 ? `hour` : `hours`} ago`;
    }
    let o = Math.floor(a / n);
    return `${o} ${o === 1 ? `day` : `days`} ago`;
}
function i(e) {
    let t = e ? new Date(e) : null;
    return !t || Number.isNaN(t.getTime())
        ? `—`
        : new Intl.DateTimeFormat(`en-US`, {
              dateStyle: `medium`,
              timeZone: `UTC`,
          }).format(t);
}
function a(e, t) {
    let n = new Date(e);
    if (Number.isNaN(n.getTime())) return `—`;
    let r = (e) =>
        new Intl.DateTimeFormat(`en-US`, {
            dateStyle: `medium`,
            timeStyle: `medium`,
            timeZone: e,
        })
            .format(n)
            .replace(/ /g, ` `);
    if (t)
        try {
            return `${r(t)} (${t})`;
        } catch {}
    return `${r(`UTC`)} (UTC)`;
}
export { e as i, a as n, r, i as t };
