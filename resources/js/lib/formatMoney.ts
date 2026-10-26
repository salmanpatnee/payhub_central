export type FormattedMoney = {
    /** Currency code in uppercase, for display. */
    code: string;
    /** Amount with 2 decimals and thousands grouping, no symbol. "—" when not a whole number of cents. */
    amount: string;
};

export const NO_VALUE = '—';

/**
 * Turns whole cents into display text. Works on the integer's digits, so
 * there is no float division. Anything that is not a whole number shows "—",
 * never 0. The contract sends hundredths for every currency.
 */
export function formatMoney(cents: unknown, currency: string): FormattedMoney {
    const code = currency.toUpperCase();

    if (typeof cents !== 'number' || !Number.isSafeInteger(cents)) {
        return { code, amount: NO_VALUE };
    }

    const digits = Math.abs(cents).toString().padStart(3, '0');
    const whole = digits.slice(0, -2).replace(/\B(?=(\d{3})+$)/g, ',');
    const fraction = digits.slice(-2);

    return {
        code,
        amount: `${cents < 0 ? '-' : ''}${whole}.${fraction}`,
    };
}
