import type { DeploymentState } from '@/types';

// One badge per state, shared by the Home card and the Deployment page.
// A new deployment has no badge.
const badges = {
    live: { variant: 'success', label: 'Live' },
    unavailable: { variant: 'danger', label: 'Unavailable' },
    paused: { variant: 'neutral', label: 'Paused' },
} as const;

export function statusBadge(state: DeploymentState) {
    return state === 'new' ? null : badges[state];
}

// The lines under the header: the same words on Home and on the page.
export function statusNotes(
    state: DeploymentState,
    reason: string | null,
    hasNumbers: boolean,
): string[] {
    const lines: string[] = [];

    if (state === 'paused') {
        lines.push('Not being pulled.');
    } else if (state === 'new') {
        lines.push('Waiting for the first pull.');
    } else if (state === 'unavailable') {
        if (hasNumbers) {
            lines.push('Showing the last good numbers.');
        }
        if (reason) {
            lines.push(reason);
        }
    }

    return lines;
}
