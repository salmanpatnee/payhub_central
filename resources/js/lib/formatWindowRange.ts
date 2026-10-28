const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];

const DAY_MS = 86_400_000;

type Parsed = { at: number; midnight: boolean };

// Reads the calendar date from the text as received. No time zone shift.
function parse(text: string | null): Parsed | null {
    const match = text?.match(
        /^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2}):(\d{2}))?/,
    );

    if (!match) {
        return null;
    }

    const [year, month, day] = [match[1], match[2], match[3]].map(Number);
    const at = Date.UTC(year, month - 1, day);
    const check = new Date(at);

    if (
        check.getUTCFullYear() !== year ||
        check.getUTCMonth() !== month - 1 ||
        check.getUTCDate() !== day
    ) {
        return null;
    }

    const midnight =
        match[4] === undefined ||
        (match[4] === '00' && match[5] === '00' && match[6] === '00');

    return { at, midnight };
}

function label(at: number, withYear: boolean): string {
    const date = new Date(at);
    const text = `${date.getUTCDate()} ${MONTHS[date.getUTCMonth()]}`;

    return withYear ? `${text} ${date.getUTCFullYear()}` : text;
}

/**
 * The dates a window covers, such as "28 Oct" or "1 Oct to 31 Oct".
 * The end is excluded in the data, so the last shown day is the day before it.
 * Null when there is nothing to show (all time, or text that cannot be read).
 */
export function formatWindowRange(
    from: string | null,
    to: string | null,
): string | null {
    const start = parse(from);
    const end = parse(to);

    if (!start || !end) {
        return null;
    }

    const last = end.midnight ? end.at - DAY_MS : end.at;

    if (last < start.at) {
        return null;
    }

    if (last === start.at) {
        return label(start.at, false);
    }

    const withYear =
        new Date(start.at).getUTCFullYear() !== new Date(last).getUTCFullYear();

    return `${label(start.at, withYear)} to ${label(last, withYear)}`;
}
