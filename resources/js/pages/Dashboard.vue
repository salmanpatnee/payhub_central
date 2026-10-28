<script setup lang="ts">
import { Head, Link, usePoll } from '@inertiajs/vue3';
import { Inbox } from '@lucide/vue';
import { computed, ref } from 'vue';
import DeploymentCard from '@/components/DeploymentCard.vue';
import EmptyState from '@/components/EmptyState.vue';
import PageHeader from '@/components/PageHeader.vue';
import { Button } from '@/components/ui/button';
import { dashboard } from '@/routes';
import { create } from '@/routes/deployments';
import type { DeploymentCard as DeploymentCardData, PeriodKey } from '@/types';

defineProps<{
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
const period = ref<PeriodKey>('thisMonth');
const current = computed(
    () => periods.find((option) => option.key === period.value) ?? periods[1],
);

// Reload only the cards, quietly, once a minute.
usePoll(60000, { only: ['deployments'] });

defineOptions({
    layout: {
        breadcrumbs: [
            {
                title: 'Home',
                href: dashboard(),
            },
        ],
    },
});
</script>

<template>
    <Head title="Home" />

    <div class="mx-auto w-full max-w-7xl space-y-6 p-4 md:p-6">
        <PageHeader
            title="Home"
            description="Payment numbers from every PayHub deployment, in one place."
        />

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
            <div class="flex sm:justify-end">
                <div
                    role="group"
                    aria-label="Period"
                    class="inline-flex w-full rounded-lg bg-muted p-1 sm:w-auto"
                >
                    <button
                        v-for="option in periods"
                        :key="option.key"
                        type="button"
                        :aria-pressed="period === option.key"
                        class="flex-1 rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:outline-none aria-pressed:bg-card aria-pressed:text-foreground aria-pressed:shadow-sm sm:flex-none"
                        @click="period = option.key"
                    >
                        {{ option.label }}
                    </button>
                </div>
            </div>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
