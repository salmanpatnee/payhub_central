import {
    An as e,
    In as t,
    Pn as n,
    Vt as r,
    ar as i,
    at as a,
    d as o,
    f as s,
    gt as c,
    hr as l,
    it as u,
    m as d,
    mt as f,
    pt as p,
    q as m,
    r as h,
    rt as g,
    sn as _,
    st as v,
    tn as y,
    un as b,
    xr as x,
} from './wayfinder-DOENF6-v.js';
import { n as S, t as C } from './InputError-BZLNDWJz.js';
import { a as w, i as T, n as E, r as D } from './login-HNcrD4uR.js';
var O = { class: `space-y-6` },
    k = [`value`],
    A = {
        class: `flex flex-col items-center justify-center space-y-3 text-center`,
    },
    j = { class: `flex w-full items-center justify-center` },
    M = { class: `text-center text-sm text-muted-foreground` },
    N = [`onClick`],
    P = { class: `text-center text-sm text-muted-foreground` },
    F = [`onClick`],
    I = c({
        __name: `TwoFactorChallenge`,
        setup(c) {
            let I = i(!1),
                L = i(``),
                R = g(() =>
                    I.value
                        ? {
                              title: `Recovery code`,
                              description: `Please confirm access to your account by entering one of your emergency recovery codes.`,
                              buttonText: `login using an authentication code`,
                          }
                        : {
                              title: `Authentication code`,
                              description: `Enter the authentication code provided by your authenticator application.`,
                              buttonText: `login using a recovery code`,
                          },
                );
            e(() => {
                d({ title: R.value.title, description: R.value.description });
            });
            let z = (e) => {
                ((I.value = !I.value), e(), (L.value = ``));
            };
            return (e, i) => {
                let c = b(`focus`);
                return (
                    y(),
                    v(
                        m,
                        null,
                        [
                            f(l(s), { title: `Two-factor authentication` }),
                            u(`div`, O, [
                                I.value
                                    ? (y(),
                                      a(
                                          l(o),
                                          r({ key: 1 }, l(E).form(), {
                                              class: `space-y-4`,
                                              'reset-on-error': ``,
                                          }),
                                          {
                                              default: n(
                                                  ({
                                                      errors: e,
                                                      processing: r,
                                                      clearErrors: a,
                                                  }) => [
                                                      t(
                                                          f(
                                                              l(S),
                                                              {
                                                                  name: `recovery_code`,
                                                                  type: `text`,
                                                                  placeholder: `Enter recovery code`,
                                                                  required: ``,
                                                              },
                                                              null,
                                                              512,
                                                          ),
                                                          [[c]],
                                                      ),
                                                      f(
                                                          C,
                                                          {
                                                              message:
                                                                  e.recovery_code,
                                                          },
                                                          null,
                                                          8,
                                                          [`message`],
                                                      ),
                                                      f(
                                                          l(h),
                                                          {
                                                              type: `submit`,
                                                              class: `w-full`,
                                                              disabled: r,
                                                          },
                                                          {
                                                              default: n(() => [
                                                                  ...(i[4] ||= [
                                                                      p(
                                                                          `Continue`,
                                                                          -1,
                                                                      ),
                                                                  ]),
                                                              ]),
                                                              _: 1,
                                                          },
                                                          8,
                                                          [`disabled`],
                                                      ),
                                                      u(`div`, P, [
                                                          (i[5] ||= u(
                                                              `span`,
                                                              null,
                                                              `or you can `,
                                                              -1,
                                                          )),
                                                          u(
                                                              `button`,
                                                              {
                                                                  type: `button`,
                                                                  class: `text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500`,
                                                                  onClick: () =>
                                                                      z(a),
                                                              },
                                                              x(
                                                                  R.value
                                                                      .buttonText,
                                                              ),
                                                              9,
                                                              F,
                                                          ),
                                                      ]),
                                                  ],
                                              ),
                                              _: 1,
                                          },
                                          16,
                                      ))
                                    : (y(),
                                      a(
                                          l(o),
                                          r({ key: 0 }, l(E).form(), {
                                              class: `space-y-4`,
                                              'reset-on-error': ``,
                                              onError: (i[1] ||= (e) =>
                                                  (L.value = ``)),
                                          }),
                                          {
                                              default: n(
                                                  ({
                                                      errors: e,
                                                      processing: t,
                                                      clearErrors: r,
                                                  }) => [
                                                      u(
                                                          `input`,
                                                          {
                                                              type: `hidden`,
                                                              name: `code`,
                                                              value: L.value,
                                                          },
                                                          null,
                                                          8,
                                                          k,
                                                      ),
                                                      u(`div`, A, [
                                                          u(`div`, j, [
                                                              f(
                                                                  l(w),
                                                                  {
                                                                      id: `otp`,
                                                                      modelValue:
                                                                          L.value,
                                                                      'onUpdate:modelValue':
                                                                          (i[0] ||=
                                                                              (
                                                                                  e,
                                                                              ) =>
                                                                                  (L.value =
                                                                                      e)),
                                                                      maxlength: 6,
                                                                      disabled:
                                                                          t,
                                                                      autofocus: ``,
                                                                  },
                                                                  {
                                                                      default:
                                                                          n(
                                                                              () => [
                                                                                  f(
                                                                                      l(
                                                                                          T,
                                                                                      ),
                                                                                      null,
                                                                                      {
                                                                                          default:
                                                                                              n(
                                                                                                  () => [
                                                                                                      (y(),
                                                                                                      v(
                                                                                                          m,
                                                                                                          null,
                                                                                                          _(
                                                                                                              6,
                                                                                                              (
                                                                                                                  e,
                                                                                                              ) =>
                                                                                                                  f(
                                                                                                                      l(
                                                                                                                          D,
                                                                                                                      ),
                                                                                                                      {
                                                                                                                          key: e,
                                                                                                                          index:
                                                                                                                              e -
                                                                                                                              1,
                                                                                                                      },
                                                                                                                      null,
                                                                                                                      8,
                                                                                                                      [
                                                                                                                          `index`,
                                                                                                                      ],
                                                                                                                  ),
                                                                                                          ),
                                                                                                          64,
                                                                                                      )),
                                                                                                  ],
                                                                                              ),
                                                                                          _: 1,
                                                                                      },
                                                                                  ),
                                                                              ],
                                                                          ),
                                                                      _: 1,
                                                                  },
                                                                  8,
                                                                  [
                                                                      `modelValue`,
                                                                      `disabled`,
                                                                  ],
                                                              ),
                                                          ]),
                                                          f(
                                                              C,
                                                              {
                                                                  message:
                                                                      e.code,
                                                              },
                                                              null,
                                                              8,
                                                              [`message`],
                                                          ),
                                                      ]),
                                                      f(
                                                          l(h),
                                                          {
                                                              type: `submit`,
                                                              class: `w-full`,
                                                              disabled: t,
                                                          },
                                                          {
                                                              default: n(() => [
                                                                  ...(i[2] ||= [
                                                                      p(
                                                                          `Continue`,
                                                                          -1,
                                                                      ),
                                                                  ]),
                                                              ]),
                                                              _: 1,
                                                          },
                                                          8,
                                                          [`disabled`],
                                                      ),
                                                      u(`div`, M, [
                                                          (i[3] ||= u(
                                                              `span`,
                                                              null,
                                                              `or you can `,
                                                              -1,
                                                          )),
                                                          u(
                                                              `button`,
                                                              {
                                                                  type: `button`,
                                                                  class: `text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500`,
                                                                  onClick: () =>
                                                                      z(r),
                                                              },
                                                              x(
                                                                  R.value
                                                                      .buttonText,
                                                              ),
                                                              9,
                                                              N,
                                                          ),
                                                      ]),
                                                  ],
                                              ),
                                              _: 1,
                                          },
                                          16,
                                      )),
                            ]),
                        ],
                        64,
                    )
                );
            };
        },
    });
export { I as default };
