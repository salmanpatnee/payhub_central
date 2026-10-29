import { NO_VALUE } from '@/lib/formatMoney';

const MINUTE = 60;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

/**
 * Short English text such as "5 min ago". Whole numbers rounded down, with a
 * minimum of 1. A time in the future (clock difference) shows "just now".
 */
export function formatRelative(
    at: string | null | undefined,
    now: number,
): string {
    if (!at) {
        return 'Never';
    }

    const time = Date.parse(at);

    if (Number.isNaN(time)) {
        return NO_VALUE;
    }

    const seconds = (now - time) / 1000;

    if (seconds < 45) {
        return 'just now';
    }

    if (seconds < HOUR) {
        return `${Math.max(1, Math.floor(seconds / MINUTE))} min ago`;
    }

    if (seconds < DAY) {
        const hours = Math.floor(seconds / HOUR);

        return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    }

    const days = Math.floor(seconds / DAY);

    return `${days} ${days === 1 ? 'day' : 'days'} ago`;
}

/**
 * A date with no time, for example `Oct 26, 2026`, in UTC so it does not
 * move with the viewer's zone. A missing or invalid value shows the empty mark.
 */
export function formatDate(at: string | null | undefined): string {
    const date = at ? new Date(at) : null;

    if (!date || Number.isNaN(date.getTime())) {
        return NO_VALUE;
    }

    return new Intl.DateTimeFormat('en-US', {
        dateStyle: 'medium',
        timeZone: 'UTC',
    }).format(date);
}

/**
 * The exact time with the zone name, for example
 * `Oct 26, 2026, 2:05:09 PM (Asia/Karachi)`. A missing or invalid timezone
 * falls back to UTC.
 */
export function formatExactTime(at: string, timezone?: string | null): string {
    const date = new Date(at);

    if (Number.isNaN(date.getTime())) {
        return NO_VALUE;
    }

    const render = (timeZone: string): string =>
        new Intl.DateTimeFormat('en-US', {
            dateStyle: 'medium',
            timeStyle: 'medium',
            timeZone,
        })
            .format(date)
            // Newer engines put a narrow no-break space before AM/PM.
            .replace(/ /g, ' ');

    if (timezone) {
        try {
            return `${render(timezone)} (${timezone})`;
        } catch {
            // Invalid zone name: fall through to UTC.
        }
    }

    return `${render('UTC')} (UTC)`;
}
