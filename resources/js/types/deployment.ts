// Whole cents by lowercase currency code.
export type Money = Record<string, number>;

export type CardSection = { completed: Money; pending: Money };

// Mirrors the array built by App\Actions\Home\BuildDeploymentCards.
export type DeploymentCard = {
    id: number;
    name: string;
    state: 'live' | 'unavailable' | 'paused' | 'new';
    reason: string | null;
    updatedAt: string | null;
    timezone: string | null;
    today: CardSection | null;
    thisMonth: CardSection | null;
};
