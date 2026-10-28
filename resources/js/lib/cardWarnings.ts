import { formatPercent } from '@/lib/formatPercent';
import type { PeriodStats } from '@/types';

// Starting guesses, tune after real use.
export const MIN_LINKS = 3;
export const FAILED_SHARE = 0.05;
export const EXPIRED_SHARE = 0.25;

/**
 * Warning texts for one period. Both rules compare the raw ratio,
 * never the rounded one.
 */
export function cardWarnings({ links }: PeriodStats): string[] {
    const warnings: string[] = [];

    if (
        links.failed >= MIN_LINKS &&
        links.failed >= links.total * FAILED_SHARE
    ) {
        warnings.push(
            `${formatPercent(links.failed, links.total)} of links failed`,
        );
    }

    if (
        links.expired >= MIN_LINKS &&
        links.expired >= links.pending * EXPIRED_SHARE
    ) {
        warnings.push(
            `${links.expired} of ${links.pending} pending links expired`,
        );
    }

    return warnings;
}
