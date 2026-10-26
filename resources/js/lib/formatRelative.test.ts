import { describe, expect, it } from 'vite-plus/test';
import { formatExactTime, formatRelative } from '@/lib/formatRelative';

const NOW = Date.parse('2026-10-26T12:00:00Z');
const ago = (seconds: number): string =>
    new Date(NOW - seconds * 1000).toISOString();

describe('formatRelative', () => {
    it.each([
        [10, 'just now'],
        [44, 'just now'],
        [45, '1 min ago'],
        [5 * 60, '5 min ago'],
        [59 * 60 + 59, '59 min ago'],
        [60 * 60, '1 hour ago'],
        [3 * 3600, '3 hours ago'],
        [23 * 3600 + 3599, '23 hours ago'],
        [24 * 3600, '1 day ago'],
        [2 * 86400, '2 days ago'],
    ])('%i seconds ago reads "%s"', (seconds, expected) => {
        expect(formatRelative(ago(seconds), NOW)).toBe(expected);
    });

    it('shows Never for an empty time', () => {
        expect(formatRelative(null, NOW)).toBe('Never');
        expect(formatRelative(undefined, NOW)).toBe('Never');
        expect(formatRelative('', NOW)).toBe('Never');
    });

    it('shows just now for a time in the future', () => {
        expect(formatRelative(ago(-300), NOW)).toBe('just now');
    });

    it('shows a dash for text that is not a time', () => {
        expect(formatRelative('not a date', NOW)).toBe('—');
    });
});

describe('formatExactTime', () => {
    it('shows the time in the zone of the reply, with the zone name', () => {
        expect(formatExactTime('2026-10-26T09:05:09Z', 'Asia/Karachi')).toBe(
            'Oct 26, 2026, 2:05:09 PM (Asia/Karachi)',
        );
    });

    it('falls back to UTC when the zone is missing or invalid', () => {
        const expected = 'Oct 26, 2026, 9:05:09 AM (UTC)';

        expect(formatExactTime('2026-10-26T09:05:09Z', null)).toBe(expected);
        expect(formatExactTime('2026-10-26T09:05:09Z', 'Mars/Base')).toBe(
            expected,
        );
    });
});
