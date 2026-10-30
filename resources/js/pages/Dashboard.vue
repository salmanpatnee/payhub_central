<script setup lang="ts">
import { Head, Link, usePoll } from '@inertiajs/vue3';
import { Inbox } from '@lucide/vue';
import { computed, ref } from 'vue';
import DeploymentCard from '@/components/DeploymentCard.vue';
import EmptyState from '@/components/EmptyState.vue';
import PageHeader from '@/components/PageHeader.vue';
import { Button } from '@/components/ui/button';
import { formatMoney } from '@/lib/formatMoney';
import { dashboard } from '@/routes';
import { create } from '@/routes/deployments';
import type { DeploymentCard as DeploymentCardData, PeriodKey } from '@/types';

const props = defineProps<{
    deployments: DeploymentCardData[];
}>();

const periods: { key: PeriodKey; label: string; empty: string }[] = [
    { key: 'today', label: 'Today', empty: 'No payments today' },
    { key: 'thisMonth', label: 'This month', empty: 'No payments this month' },
    {
        key: 'last30Days',
        label: 'Last 30 days',
        empty: 'No payments in the last 30 days',
    },
];

// Kept in the page only: all three periods are already in the data, so
// switching makes no request and a poll does not reset it.
const period = ref<PeriodKey>('today');
const current = computed(
    () => periods.find((option) => option.key === period.value) ?? periods[0],
);

// Paid money per currency across all deployments. Never adds across currencies.
const totals = computed(() => {
    const paid: Record<string, number> = {};
    let payments = 0;

    for (const card of props.deployments) {
        const stats = card.periods?.[period.value];

        if (!stats) {
            continue;
        }

        payments += stats.paidCount;

        for (const [code, cents] of Object.entries(stats.completed)) {
            paid[code] = (paid[code] ?? 0) + cents;
        }
    }

    return {
        payments,
        paid: Object.entries(paid)
            .map(([code, cents]) => formatMoney(cents, code))
            .sort((a, b) => a.code.localeCompare(b.code)),
    };
});

// Reload only the cards, quietly, once a minute.
usePoll(60000, { only: ['deployments'] });

defineOptions({
    layout: {
        breadcrumbs: [
            {
                title: 'Dashboard',
                href: dashboard(),
            },
        ],
    },
});
</script>

<template>
    <Head title="Dashboard" />

    <div class="mx-auto w-full max-w-7xl space-y-6 p-4 md:p-6">
        <PageHeader title="Dashboard">
            <template v-if="deployments.length > 0" #actions>
                <div
                    role="group"
                    aria-label="Period"
                    class="inline-flex w-full gap-0.5 rounded-xl border border-border bg-card p-1 shadow-sm sm:w-auto"
                >
                    <button
                        v-for="option in periods"
                        :key="option.key"
                        type="button"
                        :aria-pressed="period === option.key"
                        class="flex-1 rounded-lg px-4 py-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:outline-none aria-pressed:bg-foreground aria-pressed:text-background sm:flex-none"
                        @click="period = option.key"
                    >
                        {{ option.label }}
                    </button>
                </div>
            </template>
        </PageHeader>

        <EmptyState
            v-if="deployments.length === 0"
            :icon="Inbox"
            title="No deployments yet"
            description="Once a PayHub deployment is added, its payment numbers will show up here."
        >
            <template #actions>
                <Button as-child>
                    <Link :href="create()">Add deployment</Link>
                </Button>
            </template>
        </EmptyState>

        <template v-else>
            <div
                class="grid grid-cols-1 gap-3.5 sm:grid-cols-[repeat(auto-fit,minmax(14rem,1fr))]"
            >
                <div
                    v-for="money in totals.paid"
                    :key="money.code"
                    class="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3.5 shadow-sm"
                >
                    <span
                        class="grid size-10 shrink-0 place-items-center rounded-xl bg-info-soft text-xs font-bold text-info"
                    >
                        {{ money.code }}
                    </span>
                    <div class="min-w-0">
                        <p class="text-xs text-muted-foreground">
                            Paid, all deployments
                        </p>
                        <p
                            class="text-2xl leading-tight font-bold tracking-tight tabular-nums"
                        >
                            {{ money.amount }}
                        </p>
                    </div>
                </div>
                <div
                    class="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3.5 shadow-sm"
                >
                    <span
                        class="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-xs font-bold text-primary"
                    >
                        #
                    </span>
                    <div class="min-w-0">
                        <p class="text-xs text-muted-foreground">Payments</p>
                        <p
                            class="text-2xl leading-tight font-bold tracking-tight tabular-nums"
                        >
                            {{ totals.payments }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <DeploymentCard
                    v-for="card in deployments"
                    :key="card.id"
                    :card="card"
                    :period="period"
                    :period-label="current.label"
                    :empty-line="current.empty"
                />
            </div>
            <p class="text-xs text-muted-foreground">
                Links are counted by the date they were created. Money is
                counted by the date it was paid. Each currency is shown on its
                own.
            </p>
        </template>
    </div>
</template>
