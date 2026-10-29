var e = {
    live: { variant: `success`, label: `Live` },
    unavailable: { variant: `danger`, label: `Unavailable` },
    paused: { variant: `neutral`, label: `Paused` },
};
function t(t) {
    return t === `new` ? null : e[t];
}
function n(e, t, n) {
    let r = [];
    return (
        e === `paused`
            ? r.push(`Not being pulled.`)
            : e === `new`
              ? r.push(`Waiting for the first pull.`)
              : e === `unavailable` &&
                (n && r.push(`Showing the last good numbers.`), t && r.push(t)),
        r
    );
}
export { n, t };
