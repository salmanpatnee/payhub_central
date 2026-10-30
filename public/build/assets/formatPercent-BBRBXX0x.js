import { a as e, n as t, t as n } from './Presence-CKGYlb9k.js';
import {
    B as r,
    Bt as i,
    Jt as a,
    Nn as o,
    Qt as s,
    Tt as c,
    Ut as l,
    Wt as u,
    br as d,
    dr as f,
    en as p,
    ft as m,
    ht as h,
    ir as g,
    it as _,
    mr as v,
    nt as y,
    o as b,
    ot as x,
    pt as S,
    rt as C,
    sn as w,
    vr as T,
} from './wayfinder-BZPu7hPl.js';
import {
    a as ee,
    i as te,
    n as ne,
    r as re,
    t as ie,
} from './Teleport-fCOREVeW.js';
import { p as E, s as D, t as O } from './useForwardExpose-B78G7oXS.js';
import { n as k, t as A } from './useForwardPropsEmits-CqoMAl8h.js';
import { s as j } from './shared-D-a4oNoz.js';
import { D as M, E as N, H as P, O as F } from './app-B62nLDgs.js';
import { n as I, r as L } from './formatRelative-D-S37FvD.js';
var [R, z] = e(`PopoverRoot`),
    B = h({
        __name: `PopoverRoot`,
        props: {
            defaultOpen: { type: Boolean, required: !1, default: !1 },
            open: { type: Boolean, required: !1, default: void 0 },
            modal: { type: Boolean, required: !1, default: !1 },
        },
        emits: [`update:open`],
        setup(e, { emit: t }) {
            let n = e,
                r = t,
                { modal: i } = f(n),
                a = D(n, `open`, r, {
                    defaultValue: n.defaultOpen,
                    passive: n.open === void 0,
                });
            return (
                z({
                    contentId: ``,
                    triggerId: ``,
                    modal: i,
                    open: a,
                    onOpenChange: (e) => {
                        a.value = e;
                    },
                    onOpenToggle: () => {
                        a.value = !a.value;
                    },
                    triggerElement: g(),
                    hasCustomAnchor: g(!1),
                }),
                (e, t) => (
                    p(),
                    _(v(F), null, {
                        default: o(() => [
                            w(e.$slots, `default`, {
                                open: v(a),
                                close: () => (a.value = !1),
                            }),
                        ]),
                        _: 3,
                    })
                )
            );
        },
    }),
    V = h({
        __name: `PopoverAnchor`,
        props: {
            reference: { type: null, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
        },
        setup(e) {
            let t = e;
            O();
            let n = R();
            return (
                l(() => {
                    n.hasCustomAnchor.value = !0;
                }),
                s(() => {
                    n.hasCustomAnchor.value = !1;
                }),
                (e, n) => (
                    p(),
                    _(
                        v(M),
                        T(c(t)),
                        { default: o(() => [w(e.$slots, `default`)]), _: 3 },
                        16,
                    )
                )
            );
        },
    }),
    H = h({
        __name: `PopoverContentImpl`,
        props: {
            trapFocus: { type: Boolean, required: !1 },
            memoDependencies: { type: Array, required: !1 },
            side: { type: null, required: !1 },
            sideOffset: { type: Number, required: !1 },
            sideFlip: { type: Boolean, required: !1 },
            align: { type: null, required: !1 },
            alignOffset: { type: Number, required: !1 },
            alignFlip: { type: Boolean, required: !1 },
            avoidCollisions: { type: Boolean, required: !1 },
            collisionBoundary: { type: null, required: !1 },
            collisionPadding: { type: [Number, Object], required: !1 },
            arrowPadding: { type: Number, required: !1 },
            hideShiftedArrow: { type: Boolean, required: !1 },
            sticky: { type: String, required: !1 },
            hideWhenDetached: { type: Boolean, required: !1 },
            positionStrategy: { type: String, required: !1 },
            updatePositionStrategy: { type: String, required: !1 },
            disableUpdateOnLayoutShift: { type: Boolean, required: !1 },
            prioritizePosition: { type: Boolean, required: !1 },
            reference: { type: null, required: !1 },
            dir: { type: String, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
            disableOutsidePointerEvents: { type: Boolean, required: !1 },
        },
        emits: [
            `escapeKeyDown`,
            `pointerDownOutside`,
            `focusOutside`,
            `interactOutside`,
            `openAutoFocus`,
            `closeAutoFocus`,
        ],
        setup(e, { emit: t }) {
            let n = e,
                r = t,
                a = k(E(n, `trapFocus`, `disableOutsidePointerEvents`)),
                { forwardRef: s } = O(),
                c = R();
            return (
                P(),
                (t, n) => (
                    p(),
                    _(
                        v(ne),
                        {
                            'as-child': ``,
                            loop: ``,
                            trapped: e.trapFocus,
                            onMountAutoFocus: (n[5] ||= (e) =>
                                r(`openAutoFocus`, e)),
                            onUnmountAutoFocus: (n[6] ||= (e) =>
                                r(`closeAutoFocus`, e)),
                        },
                        {
                            default: o(() => [
                                S(
                                    v(re),
                                    {
                                        'as-child': ``,
                                        'disable-outside-pointer-events':
                                            e.disableOutsidePointerEvents,
                                        onPointerDownOutside: (n[0] ||= (e) =>
                                            r(`pointerDownOutside`, e)),
                                        onInteractOutside: (n[1] ||= (e) =>
                                            r(`interactOutside`, e)),
                                        onEscapeKeyDown: (n[2] ||= (e) =>
                                            r(`escapeKeyDown`, e)),
                                        onFocusOutside: (n[3] ||= (e) =>
                                            r(`focusOutside`, e)),
                                        onDismiss: (n[4] ||= (e) =>
                                            v(c).onOpenChange(!1)),
                                    },
                                    {
                                        default: o(() => [
                                            S(
                                                v(N),
                                                i(v(a), {
                                                    id: v(c).contentId,
                                                    ref: v(s),
                                                    'data-state': v(c).open
                                                        .value
                                                        ? `open`
                                                        : `closed`,
                                                    'aria-labelledby':
                                                        v(c).triggerId,
                                                    style: {
                                                        '--reka-popover-content-transform-origin': `var(--reka-popper-transform-origin)`,
                                                        '--reka-popover-content-available-width': `var(--reka-popper-available-width)`,
                                                        '--reka-popover-content-available-height': `var(--reka-popper-available-height)`,
                                                        '--reka-popover-trigger-width': `var(--reka-popper-anchor-width)`,
                                                        '--reka-popover-trigger-height': `var(--reka-popper-anchor-height)`,
                                                    },
                                                    role: `dialog`,
                                                }),
                                                {
                                                    default: o(() => [
                                                        w(t.$slots, `default`),
                                                    ]),
                                                    _: 3,
                                                },
                                                16,
                                                [
                                                    `id`,
                                                    `data-state`,
                                                    `aria-labelledby`,
                                                ],
                                            ),
                                        ]),
                                        _: 3,
                                    },
                                    8,
                                    [`disable-outside-pointer-events`],
                                ),
                            ]),
                            _: 3,
                        },
                        8,
                        [`trapped`],
                    )
                )
            );
        },
    }),
    U = h({
        __name: `PopoverContentModal`,
        props: {
            memoDependencies: { type: Array, required: !1 },
            side: { type: null, required: !1 },
            sideOffset: { type: Number, required: !1 },
            sideFlip: { type: Boolean, required: !1 },
            align: { type: null, required: !1 },
            alignOffset: { type: Number, required: !1 },
            alignFlip: { type: Boolean, required: !1 },
            avoidCollisions: { type: Boolean, required: !1 },
            collisionBoundary: { type: null, required: !1 },
            collisionPadding: { type: [Number, Object], required: !1 },
            arrowPadding: { type: Number, required: !1 },
            hideShiftedArrow: { type: Boolean, required: !1 },
            sticky: { type: String, required: !1 },
            hideWhenDetached: { type: Boolean, required: !1 },
            positionStrategy: { type: String, required: !1 },
            updatePositionStrategy: { type: String, required: !1 },
            disableUpdateOnLayoutShift: { type: Boolean, required: !1 },
            prioritizePosition: { type: Boolean, required: !1 },
            reference: { type: null, required: !1 },
            dir: { type: String, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
            disableOutsidePointerEvents: { type: Boolean, required: !1 },
        },
        emits: [
            `escapeKeyDown`,
            `pointerDownOutside`,
            `focusOutside`,
            `interactOutside`,
            `openAutoFocus`,
            `closeAutoFocus`,
        ],
        setup(e, { emit: t }) {
            let n = e,
                a = t,
                s = R(),
                c = g(!1);
            ee(!0);
            let l = A(n, a),
                { forwardRef: u, currentElement: d } = O();
            return (
                te(d),
                (e, t) => (
                    p(),
                    _(
                        H,
                        i(v(l), {
                            ref: v(u),
                            'trap-focus': v(s).open.value,
                            'disable-outside-pointer-events': ``,
                            onCloseAutoFocus: (t[0] ||= r(
                                (e) => {
                                    (a(`closeAutoFocus`, e),
                                        c.value ||
                                            v(s).triggerElement.value?.focus());
                                },
                                [`prevent`],
                            )),
                            onPointerDownOutside: (t[1] ||= (e) => {
                                a(`pointerDownOutside`, e);
                                let t = e.detail.originalEvent,
                                    n = t.button === 0 && t.ctrlKey === !0,
                                    r = t.button === 2 || n;
                                c.value = r;
                            }),
                            onFocusOutside: (t[2] ||= r(() => {}, [`prevent`])),
                        }),
                        { default: o(() => [w(e.$slots, `default`)]), _: 3 },
                        16,
                        [`trap-focus`],
                    )
                )
            );
        },
    }),
    W = h({
        __name: `PopoverContentNonModal`,
        props: {
            memoDependencies: { type: Array, required: !1 },
            side: { type: null, required: !1 },
            sideOffset: { type: Number, required: !1 },
            sideFlip: { type: Boolean, required: !1 },
            align: { type: null, required: !1 },
            alignOffset: { type: Number, required: !1 },
            alignFlip: { type: Boolean, required: !1 },
            avoidCollisions: { type: Boolean, required: !1 },
            collisionBoundary: { type: null, required: !1 },
            collisionPadding: { type: [Number, Object], required: !1 },
            arrowPadding: { type: Number, required: !1 },
            hideShiftedArrow: { type: Boolean, required: !1 },
            sticky: { type: String, required: !1 },
            hideWhenDetached: { type: Boolean, required: !1 },
            positionStrategy: { type: String, required: !1 },
            updatePositionStrategy: { type: String, required: !1 },
            disableUpdateOnLayoutShift: { type: Boolean, required: !1 },
            prioritizePosition: { type: Boolean, required: !1 },
            reference: { type: null, required: !1 },
            dir: { type: String, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
            disableOutsidePointerEvents: { type: Boolean, required: !1 },
        },
        emits: [
            `escapeKeyDown`,
            `pointerDownOutside`,
            `focusOutside`,
            `interactOutside`,
            `openAutoFocus`,
            `closeAutoFocus`,
        ],
        setup(e, { emit: t }) {
            let n = e,
                r = t,
                a = R(),
                s = g(!1),
                c = g(!1),
                l = A(n, r);
            return (e, t) => (
                p(),
                _(
                    H,
                    i(v(l), {
                        'trap-focus': !1,
                        'disable-outside-pointer-events': !1,
                        onCloseAutoFocus: (t[0] ||= (e) => {
                            (r(`closeAutoFocus`, e),
                                e.defaultPrevented ||
                                    (s.value ||
                                        v(a).triggerElement.value?.focus(),
                                    e.preventDefault()),
                                (s.value = !1),
                                (c.value = !1));
                        }),
                        onInteractOutside: (t[1] ||= async (e) => {
                            (r(`interactOutside`, e),
                                e.defaultPrevented ||
                                    ((s.value = !0),
                                    e.detail.originalEvent.type ===
                                        `pointerdown` && (c.value = !0)));
                            let t = e.target;
                            (v(a).triggerElement.value?.contains(t) &&
                                e.preventDefault(),
                                e.detail.originalEvent.type === `focusin` &&
                                    c.value &&
                                    e.preventDefault());
                        }),
                    }),
                    { default: o(() => [w(e.$slots, `default`)]), _: 3 },
                    16,
                )
            );
        },
    }),
    G = h({
        __name: `PopoverContent`,
        props: {
            forceMount: { type: Boolean, required: !1 },
            memoDependencies: { type: Array, required: !1 },
            side: { type: null, required: !1 },
            sideOffset: { type: Number, required: !1 },
            sideFlip: { type: Boolean, required: !1 },
            align: { type: null, required: !1 },
            alignOffset: { type: Number, required: !1 },
            alignFlip: { type: Boolean, required: !1 },
            avoidCollisions: { type: Boolean, required: !1 },
            collisionBoundary: { type: null, required: !1 },
            collisionPadding: { type: [Number, Object], required: !1 },
            arrowPadding: { type: Number, required: !1 },
            hideShiftedArrow: { type: Boolean, required: !1 },
            sticky: { type: String, required: !1 },
            hideWhenDetached: { type: Boolean, required: !1 },
            positionStrategy: { type: String, required: !1 },
            updatePositionStrategy: { type: String, required: !1 },
            disableUpdateOnLayoutShift: { type: Boolean, required: !1 },
            prioritizePosition: { type: Boolean, required: !1 },
            reference: { type: null, required: !1 },
            dir: { type: String, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
            disableOutsidePointerEvents: { type: Boolean, required: !1 },
        },
        emits: [
            `escapeKeyDown`,
            `pointerDownOutside`,
            `focusOutside`,
            `interactOutside`,
            `openAutoFocus`,
            `closeAutoFocus`,
        ],
        setup(e, { emit: r }) {
            let a = e,
                s = r,
                c = R(),
                l = A(a, s),
                { forwardRef: u } = O();
            return (
                (c.contentId ||= t(void 0, `reka-popover-content`)),
                (t, r) => (
                    p(),
                    _(
                        v(n),
                        { present: e.forceMount || v(c).open.value },
                        {
                            default: o(() => [
                                v(c).modal.value
                                    ? (p(),
                                      _(
                                          U,
                                          i({ key: 0 }, v(l), { ref: v(u) }),
                                          {
                                              default: o(() => [
                                                  w(t.$slots, `default`),
                                              ]),
                                              _: 3,
                                          },
                                          16,
                                      ))
                                    : (p(),
                                      _(
                                          W,
                                          i({ key: 1 }, v(l), { ref: v(u) }),
                                          {
                                              default: o(() => [
                                                  w(t.$slots, `default`),
                                              ]),
                                              _: 3,
                                          },
                                          16,
                                      )),
                            ]),
                            _: 3,
                        },
                        8,
                        [`present`],
                    )
                )
            );
        },
    }),
    K = h({
        __name: `PopoverPortal`,
        props: {
            to: { type: null, required: !1 },
            disabled: { type: Boolean, required: !1 },
            defer: { type: Boolean, required: !1 },
            forceMount: { type: Boolean, required: !1 },
        },
        setup(e) {
            let t = e;
            return (e, n) => (
                p(),
                _(
                    v(ie),
                    T(c(t)),
                    { default: o(() => [w(e.$slots, `default`)]), _: 3 },
                    16,
                )
            );
        },
    }),
    q = h({
        __name: `Popover`,
        props: {
            defaultOpen: { type: Boolean },
            open: { type: Boolean },
            modal: { type: Boolean },
        },
        emits: [`update:open`],
        setup(e, { emit: t }) {
            let n = A(e, t);
            return (e, t) => (
                p(),
                _(
                    v(B),
                    i({ 'data-slot': `popover` }, v(n)),
                    { default: o(() => [w(e.$slots, `default`)]), _: 3 },
                    16,
                )
            );
        },
    }),
    J = h({
        __name: `PopoverAnchor`,
        props: { reference: {}, asChild: { type: Boolean }, as: {} },
        setup(e) {
            let t = e;
            return (e, n) => (
                p(),
                _(
                    v(V),
                    i({ 'data-slot': `popover-anchor` }, t),
                    { default: o(() => [w(e.$slots, `default`)]), _: 3 },
                    16,
                )
            );
        },
    }),
    Y = h({
        inheritAttrs: !1,
        __name: `PopoverContent`,
        props: {
            forceMount: { type: Boolean },
            memoDependencies: {},
            side: {},
            sideOffset: { default: 4 },
            sideFlip: { type: Boolean },
            align: { default: `center` },
            alignOffset: {},
            alignFlip: { type: Boolean },
            avoidCollisions: { type: Boolean },
            collisionBoundary: {},
            collisionPadding: {},
            arrowPadding: {},
            hideShiftedArrow: { type: Boolean },
            sticky: {},
            hideWhenDetached: { type: Boolean },
            positionStrategy: {},
            updatePositionStrategy: {},
            disableUpdateOnLayoutShift: { type: Boolean },
            prioritizePosition: { type: Boolean },
            reference: {},
            dir: {},
            asChild: { type: Boolean },
            as: {},
            disableOutsidePointerEvents: { type: Boolean },
            class: { type: [Boolean, null, String, Object, Array] },
        },
        emits: [
            `escapeKeyDown`,
            `pointerDownOutside`,
            `focusOutside`,
            `interactOutside`,
            `openAutoFocus`,
            `closeAutoFocus`,
        ],
        setup(e, { emit: t }) {
            let n = e,
                r = t,
                a = j(n, `class`),
                s = A(a, r);
            return (e, t) => (
                p(),
                _(v(K), null, {
                    default: o(() => [
                        S(
                            v(G),
                            i(
                                { 'data-slot': `popover-content` },
                                { ...v(s), ...e.$attrs },
                                {
                                    class: v(b)(
                                        `bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-md outline-hidden`,
                                        n.class,
                                    ),
                                },
                            ),
                            {
                                default: o(() => [w(e.$slots, `default`)]),
                                _: 3,
                            },
                            16,
                            [`class`],
                        ),
                    ]),
                    _: 3,
                })
            );
        },
    }),
    ae = 3e4,
    X = g(Date.now()),
    Z = 0,
    Q = null;
function oe() {
    return (
        a(() => {
            ((X.value = Date.now()),
                (Z += 1),
                Q === null &&
                    (Q = setInterval(() => {
                        X.value = Date.now();
                    }, ae)));
        }),
        u(() => {
            (--Z, Z === 0 && Q !== null && (clearInterval(Q), (Q = null)));
        }),
        X
    );
}
var se = { key: 0, class: `text-muted-foreground` },
    ce = [`datetime`],
    le = { class: `sr-only` },
    $ = h({
        __name: `RelativeTime`,
        props: { at: {}, timezone: {} },
        setup(e) {
            let t = e,
                n = oe(),
                i = g(!1),
                a = y(() => L(t.at, n.value)),
                s = y(() => (t.at ? I(t.at, t.timezone) : null));
            function c(e) {
                e.pointerType === `mouse` && (i.value = !0);
            }
            function l(e) {
                e.pointerType === `mouse` && (i.value = !1);
            }
            return (t, n) =>
                e.at
                    ? (p(),
                      _(
                          v(q),
                          {
                              key: 1,
                              open: i.value,
                              'onUpdate:open': (n[5] ||= (e) => (i.value = e)),
                          },
                          {
                              default: o(() => [
                                  S(
                                      v(J),
                                      { 'as-child': `` },
                                      {
                                          default: o(() => [
                                              C(
                                                  `time`,
                                                  {
                                                      datetime: e.at,
                                                      tabindex: `0`,
                                                      class: `cursor-help rounded-sm underline decoration-dotted underline-offset-4`,
                                                      onPointerenter: c,
                                                      onPointerleave: l,
                                                      onFocus: (n[0] ||= (e) =>
                                                          (i.value = !0)),
                                                      onBlur: (n[1] ||= (e) =>
                                                          (i.value = !1)),
                                                      onClick: (n[2] ||= (e) =>
                                                          (i.value = !0)),
                                                  },
                                                  [
                                                      m(d(a.value) + ` `, 1),
                                                      C(
                                                          `span`,
                                                          le,
                                                          `, exact time ` +
                                                              d(s.value),
                                                          1,
                                                      ),
                                                  ],
                                                  40,
                                                  ce,
                                              ),
                                          ]),
                                          _: 1,
                                      },
                                  ),
                                  S(
                                      v(Y),
                                      {
                                          class: `w-auto px-3 py-2 text-xs tabular-nums`,
                                          onOpenAutoFocus: (n[3] ||=
                                              r(() => {}, [`prevent`])),
                                          onCloseAutoFocus: (n[4] ||=
                                              r(() => {}, [`prevent`])),
                                      },
                                      {
                                          default: o(() => [m(d(s.value), 1)]),
                                          _: 1,
                                      },
                                  ),
                              ]),
                              _: 1,
                          },
                          8,
                          [`open`],
                      ))
                    : (p(), x(`span`, se, d(a.value), 1));
        },
    });
function ue(e, t) {
    if (t <= 0) return `–`;
    let n = Math.floor((e * 1e3) / t + 0.5);
    return n >= 100
        ? `${Math.floor((e * 100) / t + 0.5)}%`
        : `${(n / 10).toFixed(1)}%`;
}
export { $ as n, ue as t };
