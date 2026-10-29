import {
    In as e,
    R as t,
    Zn as n,
    gt as r,
    hr as i,
    it as a,
    s as o,
    st as s,
    tn as c,
    vr as l,
    xr as u,
    z as d,
} from './wayfinder-DOENF6-v.js';
import { v as f } from './app-B5f9dLA_.js';
var p = r({
        __name: `Input`,
        props: {
            defaultValue: {},
            modelValue: {},
            class: { type: [Boolean, null, String, Object, Array] },
        },
        emits: [`update:modelValue`],
        setup(r, { emit: a }) {
            let u = r,
                d = f(u, `modelValue`, a, {
                    passive: !0,
                    defaultValue: u.defaultValue,
                });
            return (r, a) =>
                e(
                    (c(),
                    s(
                        `input`,
                        {
                            'onUpdate:modelValue': (a[0] ||= (e) =>
                                n(d) ? (d.value = e) : null),
                            'data-slot': `input`,
                            class: l(
                                i(o)(
                                    `file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`,
                                    `focus-visible:border-ring focus-visible:ring-ring focus-visible:ring-[3px]`,
                                    `aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive`,
                                    u.class,
                                ),
                            ),
                        },
                        null,
                        2,
                    )),
                    [[t, i(d)]],
                );
        },
    }),
    m = { class: `text-sm text-red-600 dark:text-red-500` },
    h = r({
        __name: `InputError`,
        props: { message: {} },
        setup(t) {
            return (n, r) =>
                e((c(), s(`div`, null, [a(`p`, m, u(t.message), 1)], 512)), [
                    [d, t.message],
                ]);
        },
    });
export { p as n, h as t };
