export const NO_PERCENT = '–';

/**
 * Turns a part and a whole into display text: a whole number at 10% and
 * above, one decimal below 10%, rounded half up. "–" when the whole is 0.
 */
export function formatPercent(part: number, whole: number): string {
    if (whole <= 0) {
        return NO_PERCENT;
    }

    // Maths on tenths of a percent so 8.75 rounds half up to 8.8.
    const tenths = Math.floor((part * 1000) / whole + 0.5);

    if (tenths >= 100) {
        return `${Math.floor((part * 100) / whole + 0.5)}%`;
    }

    return `${(tenths / 10).toFixed(1)}%`;
}
