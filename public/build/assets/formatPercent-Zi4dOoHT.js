import { a as e, n as t, t as n } from './Presence-L0dip4UT.js';
import {
    $t as r,
    Et as i,
    Gt as a,
    Pn as o,
    V as s,
    Vt as c,
    Wt as l,
    Yt as u,
    ar as d,
    at as f,
    cn as p,
    fr as m,
    gt as h,
    hr as g,
    it as _,
    mt as v,
    pt as y,
    rt as b,
    s as x,
    st as S,
    tn as C,
    xr as w,
    yr as T,
} from './wayfinder-DOENF6-v.js';
import {
    a as E,
    i as D,
    n as ee,
    r as te,
    t as ne,
} from './Teleport-BA16l1x9.js';
import { p as re, s as O, t as k } from './useForwardExpose-BVGbRqkE.js';
import { n as A, t as j } from './useForwardPropsEmits-BQsdb9GW.js';
import { s as M } from './shared-CHjORj-0.js';
import { B as N, E as P, T as F, w as I } from './app-D8hkYQeO.js';
import { n as L, r as R } from './formatRelative-D-S37FvD.js';
var [z, B] = e(`PopoverRoot`),
    V = h({
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
                { modal: i } = m(n),
                a = O(n, `open`, r, {
                    defaultValue: n.defaultOpen,
                    passive: n.open === void 0,
                });
            return (
                B({
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
                    triggerElement: d(),
                    hasCustomAnchor: d(!1),
                }),
                (e, t) => (
                    C(),
                    f(g(P), null, {
                        default: o(() => [
                            p(e.$slots, `default`, {
                                open: g(a),
                                close: () => (a.value = !1),
                            }),
                        ]),
                        _: 3,
                    })
                )
            );
        },
    }),
    H = h({
        __name: `PopoverAnchor`,
        props: {
            reference: { type: null, required: !1 },
            asChild: { type: Boolean, required: !1 },
            as: { type: null, required: !1 },
        },
        setup(e) {
            let t = e;
            k();
            let n = z();
            return (
                l(() => {
                    n.hasCustomAnchor.value = !0;
                }),
                r(() => {
                    n.hasCustomAnchor.value = !1;
                }),
                (e, n) => (
                    C(),
                    f(
                        g(F),
                        T(i(t)),
                        { default: o(() => [p(e.$slots, `default`)]), _: 3 },
                        16,
                    )
                )
            );
        },
    }),
    U = h({
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
                i = A(re(n, `trapFocus`, `disableOutsidePointerEvents`)),
                { forwardRef: a } = k(),
                s = z();
            return (
                N(),
                (t, n) => (
                    C(),
                    f(
                        g(ee),
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
                                v(
                                    g(te),
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
                                            g(s).onOpenChange(!1)),
                                    },
                                    {
                                        default: o(() => [
                                            v(
                                                g(I),
                                                c(g(i), {
                                                    id: g(s).contentId,
                                                    ref: g(a),
                                                    'data-state': g(s).open
                                                        .value
                                                        ? `open`
                                                        : `closed`,
                                                    'aria-labelledby':
                                                        g(s).triggerId,
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
                                                        p(t.$slots, `default`),
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
    ie = h({
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
                r = t,
                i = z(),
                a = d(!1);
            E(!0);
            let l = j(n, r),
                { forwardRef: u, currentElement: m } = k();
            return (
                D(m),
                (e, t) => (
                    C(),
                    f(
                        U,
                        c(g(l), {
                            ref: g(u),
                            'trap-focus': g(i).open.value,
                            'disable-outside-pointer-events': ``,
                            onCloseAutoFocus: (t[0] ||= s(
                                (e) => {
                                    (r(`closeAutoFocus`, e),
                                        a.value ||
                                            g(i).triggerElement.value?.focus());
                                },
                                [`prevent`],
                            )),
                            onPointerDownOutside: (t[1] ||= (e) => {
                                r(`pointerDownOutside`, e);
                                let t = e.detail.originalEvent,
                                    n = t.button === 0 && t.ctrlKey === !0,
                                    i = t.button === 2 || n;
                                a.value = i;
                            }),
                            onFocusOutside: (t[2] ||= s(() => {}, [`prevent`])),
                        }),
                        { default: o(() => [p(e.$slots, `default`)]), _: 3 },
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
                i = z(),
                a = d(!1),
                s = d(!1),
                l = j(n, r);
            return (e, t) => (
                C(),
                f(
                    U,
                    c(g(l), {
                        'trap-focus': !1,
                        'disable-outside-pointer-events': !1,
                        onCloseAutoFocus: (t[0] ||= (e) => {
                            (r(`closeAutoFocus`, e),
                                e.defaultPrevented ||
                                    (a.value ||
                                        g(i).triggerElement.value?.focus(),
                                    e.preventDefault()),
                                (a.value = !1),
                                (s.value = !1));
                        }),
                        onInteractOutside: (t[1] ||= async (e) => {
                            (r(`interactOutside`, e),
                                e.defaultPrevented ||
                                    ((a.value = !0),
                                    e.detail.originalEvent.type ===
                                        `pointerdown` && (s.value = !0)));
                            let t = e.target;
                            (g(i).triggerElement.value?.contains(t) &&
                                e.preventDefault(),
                                e.detail.originalEvent.type === `focusin` &&
                                    s.value &&
                                    e.preventDefault());
                        }),
                    }),
                    { default: o(() => [p(e.$slots, `default`)]), _: 3 },
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
            let i = e,
                a = r,
                s = z(),
                l = j(i, a),
                { forwardRef: u } = k();
            return (
                (s.contentId ||= t(void 0, `reka-popover-content`)),
                (t, r) => (
                    C(),
                    f(
                        g(n),
                        { present: e.forceMount || g(s).open.value },
                        {
                            default: o(() => [
                                g(s).modal.value
                                    ? (C(),
                                      f(
                                          ie,
                                          c({ key: 0 }, g(l), { ref: g(u) }),
                                          {
                                              default: o(() => [
                                                  p(t.$slots, `default`),
                                              ]),
                                              _: 3,
                                          },
                                          16,
                                      ))
                                    : (C(),
                                      f(
                                          W,
                                          c({ key: 1 }, g(l), { ref: g(u) }),
                                          {
                                              default: o(() => [
                                                  p(t.$slots, `default`),
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
                C(),
                f(
                    g(ne),
                    T(i(t)),
                    { default: o(() => [p(e.$slots, `default`)]), _: 3 },
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
            let n = j(e, t);
            return (e, t) => (
                C(),
                f(
                    g(V),
                    c({ 'data-slot': `popover` }, g(n)),
                    { default: o(() => [p(e.$slots, `default`)]), _: 3 },
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
                C(),
                f(
                    g(H),
                    c({ 'data-slot': `popover-anchor` }, t),
                    { default: o(() => [p(e.$slots, `default`)]), _: 3 },
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
                i = M(n, `class`),
                a = j(i, r);
            return (e, t) => (
                C(),
                f(g(K), null, {
                    default: o(() => [
                        v(
                            g(G),
                            c(
                                { 'data-slot': `popover-content` },
                                { ...g(a), ...e.$attrs },
                                {
                                    class: g(x)(
                                        `bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-md outline-hidden`,
                                        n.class,
                                    ),
                                },
                            ),
                            {
                                default: o(() => [p(e.$slots, `default`)]),
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
    X = d(Date.now()),
    Z = 0,
    Q = null;
function oe() {
    return (
        u(() => {
            ((X.value = Date.now()),
                (Z += 1),
                Q === null &&
                    (Q = setInterval(() => {
                        X.value = Date.now();
                    }, ae)));
        }),
        a(() => {
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
                r = d(!1),
                i = b(() => R(t.at, n.value)),
                a = b(() => (t.at ? L(t.at, t.timezone) : null));
            function c(e) {
                e.pointerType === `mouse` && (r.value = !0);
            }
            function l(e) {
                e.pointerType === `mouse` && (r.value = !1);
            }
            return (t, n) =>
                e.at
                    ? (C(),
                      f(
                          g(q),
                          {
                              key: 1,
                              open: r.value,
                              'onUpdate:open': (n[5] ||= (e) => (r.value = e)),
                          },
                          {
                              default: o(() => [
                                  v(
                                      g(J),
                                      { 'as-child': `` },
                                      {
                                          default: o(() => [
                                              _(
                                                  `time`,
                                                  {
                                                      datetime: e.at,
                                                      tabindex: `0`,
                                                      class: `cursor-help rounded-sm underline decoration-dotted underline-offset-4`,
                                                      onPointerenter: c,
                                                      onPointerleave: l,
                                                      onFocus: (n[0] ||= (e) =>
                                                          (r.value = !0)),
                                                      onBlur: (n[1] ||= (e) =>
                                                          (r.value = !1)),
                                                      onClick: (n[2] ||= (e) =>
                                                          (r.value = !0)),
                                                  },
                                                  [
                                                      y(w(i.value) + ` `, 1),
                                                      _(
                                                          `span`,
                                                          le,
                                                          `, exact time ` +
                                                              w(a.value),
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
                                  v(
                                      g(Y),
                                      {
                                          class: `w-auto px-3 py-2 text-xs tabular-nums`,
                                          onOpenAutoFocus: (n[3] ||=
                                              s(() => {}, [`prevent`])),
                                          onCloseAutoFocus: (n[4] ||=
                                              s(() => {}, [`prevent`])),
                                      },
                                      {
                                          default: o(() => [y(w(a.value), 1)]),
                                          _: 1,
                                      },
                                  ),
                              ]),
                              _: 1,
                          },
                          8,
                          [`open`],
                      ))
                    : (C(), S(`span`, se, w(i.value), 1));
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
