import {
    Bt as e,
    Fn as t,
    K as n,
    Nn as r,
    br as i,
    d as a,
    en as o,
    ft as s,
    ht as c,
    ir as l,
    it as u,
    kn as d,
    ln as f,
    mr as p,
    nt as m,
    on as h,
    ot as g,
    p as _,
    pt as v,
    rt as y,
    u as b,
} from './wayfinder-BZPu7hPl.js';
import { n as x, t as S } from './InputError-Ctqc1R_X.js';
import { p as C } from './app-DTu1UyN-.js';
import { a as w, i as T, n as E, r as D } from './login-Dvq_-_y_.js';
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
            let I = l(!1),
                L = l(``),
                R = m(() =>
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
            d(() => {
                _({ title: R.value.title, description: R.value.description });
            });
            let z = (e) => {
                ((I.value = !I.value), e(), (L.value = ``));
            };
            return (c, l) => {
                let d = f(`focus`);
                return (
                    o(),
                    g(
                        n,
                        null,
                        [
                            v(p(a), { title: `Two-factor authentication` }),
                            y(`div`, O, [
                                I.value
                                    ? (o(),
                                      u(
                                          p(b),
                                          e({ key: 1 }, p(E).form(), {
                                              class: `space-y-4`,
                                              'reset-on-error': ``,
                                          }),
                                          {
                                              default: r(
                                                  ({
                                                      errors: e,
                                                      processing: n,
                                                      clearErrors: a,
                                                  }) => [
                                                      t(
                                                          v(
                                                              p(x),
                                                              {
                                                                  name: `recovery_code`,
                                                                  type: `text`,
                                                                  placeholder: `Enter recovery code`,
                                                                  required: ``,
                                                              },
                                                              null,
                                                              512,
                                                          ),
                                                          [[d]],
                                                      ),
                                                      v(
                                                          S,
                                                          {
                                                              message:
                                                                  e.recovery_code,
                                                          },
                                                          null,
                                                          8,
                                                          [`message`],
                                                      ),
                                                      v(
                                                          p(C),
                                                          {
                                                              type: `submit`,
                                                              class: `w-full`,
                                                              disabled: n,
                                                          },
                                                          {
                                                              default: r(() => [
                                                                  ...(l[4] ||= [
                                                                      s(
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
                                                      y(`div`, P, [
                                                          (l[5] ||= y(
                                                              `span`,
                                                              null,
                                                              `or you can `,
                                                              -1,
                                                          )),
                                                          y(
                                                              `button`,
                                                              {
                                                                  type: `button`,
                                                                  class: `text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500`,
                                                                  onClick: () =>
                                                                      z(a),
                                                              },
                                                              i(
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
                                    : (o(),
                                      u(
                                          p(b),
                                          e({ key: 0 }, p(E).form(), {
                                              class: `space-y-4`,
                                              'reset-on-error': ``,
                                              onError: (l[1] ||= (e) =>
                                                  (L.value = ``)),
                                          }),
                                          {
                                              default: r(
                                                  ({
                                                      errors: e,
                                                      processing: t,
                                                      clearErrors: a,
                                                  }) => [
                                                      y(
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
                                                      y(`div`, A, [
                                                          y(`div`, j, [
                                                              v(
                                                                  p(w),
                                                                  {
                                                                      id: `otp`,
                                                                      modelValue:
                                                                          L.value,
                                                                      'onUpdate:modelValue':
                                                                          (l[0] ||=
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
                                                                          r(
                                                                              () => [
                                                                                  v(
                                                                                      p(
                                                                                          T,
                                                                                      ),
                                                                                      null,
                                                                                      {
                                                                                          default:
                                                                                              r(
                                                                                                  () => [
                                                                                                      (o(),
                                                                                                      g(
                                                                                                          n,
                                                                                                          null,
                                                                                                          h(
                                                                                                              6,
                                                                                                              (
                                                                                                                  e,
                                                                                                              ) =>
                                                                                                                  v(
                                                                                                                      p(
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
                                                          v(
                                                              S,
                                                              {
                                                                  message:
                                                                      e.code,
                                                              },
                                                              null,
                                                              8,
                                                              [`message`],
                                                          ),
                                                      ]),
                                                      v(
                                                          p(C),
                                                          {
                                                              type: `submit`,
                                                              class: `w-full`,
                                                              disabled: t,
                                                          },
                                                          {
                                                              default: r(() => [
                                                                  ...(l[2] ||= [
                                                                      s(
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
                                                      y(`div`, M, [
                                                          (l[3] ||= y(
                                                              `span`,
                                                              null,
                                                              `or you can `,
                                                              -1,
                                                          )),
                                                          y(
                                                              `button`,
                                                              {
                                                                  type: `button`,
                                                                  class: `text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500`,
                                                                  onClick: () =>
                                                                      z(a),
                                                              },
                                                              i(
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
