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

export type DeploymentState = 'live' | 'unavailable' | 'paused' | 'new';

// Mirrors the array built by App\Actions\Home\BuildDeploymentCards.
export type DeploymentCard = {
    id: number;
    name: string;
    // Ready made path to the deployment page.
    href: string;
    // Host of the base URL only.
    domain: string | null;
    state: DeploymentState;
    reason: string | null;
    updatedAt: string | null;
    timezone: string | null;
    // Null when there is no good pull.
    periods: Record<PeriodKey, PeriodStats> | null;
};

export type WindowKey = 'allTime' | 'today' | 'thisMonth' | 'last30Days';

export type WindowDetail = {
    // starts_at and ends_at as received. Null for all time. The end is excluded.
    from: string | null;
    to: string | null;
    links: {
        total: number;
        completed: number;
        pending: number;
        failed: number;
        cancelled: number;
        expired: number;
    };
    // Payments paid in the window, all currencies together.
    paidCount: number;
    completed: Money;
    pending: Money;
};

// Mirrors the array built by App\Actions\Deployments\BuildDeploymentDetail.
export type DeploymentDetail = {
    name: string;
    // Host of the base URL only.
    domain: string | null;
    state: DeploymentState;
    reason: string | null;
    updatedAt: string | null;
    timezone: string | null;
    // Null when there is no good pull.
    windows: Record<WindowKey, WindowDetail> | null;
};

// Mirrors the array built by App\Actions\Deployments\BuildRecentPulls.
export type PullRow = {
    id: number;
    // pulled_at, ISO 8601.
    at: string;
    // True when the pull was good.
    ok: boolean;
    source: 'scheduled' | 'manual';
    // The saved message of a failed pull, else null.
    reason: string | null;
};
