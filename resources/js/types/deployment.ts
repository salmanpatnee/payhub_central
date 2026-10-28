// Whole cents by lowercase currency code.
export type Money = Record<string, number>;

export type PeriodKey = 'today' | 'thisMonth' | 'last30Days';

export type PeriodStats = {
    links: {
        total: number;
        pending: number;
        completed: number;
        failed: number;
        expired: number;
    };
    // Payments paid in the period (by paid date).
    paidCount: number;
    // Paid money per currency.
    completed: Money;
    // Money on pending links created in the period.
    pending: Money;
};

// Mirrors the array built by App\Actions\Home\BuildDeploymentCards.
export type DeploymentCard = {
    id: number;
    name: string;
    // Host of the base URL only.
    domain: string | null;
    state: 'live' | 'unavailable' | 'paused' | 'new';
    reason: string | null;
    updatedAt: string | null;
    timezone: string | null;
    // Null when there is no good pull.
    periods: Record<PeriodKey, PeriodStats> | null;
};
