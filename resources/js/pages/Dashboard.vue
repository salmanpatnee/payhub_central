<script setup lang="ts">
import { Head, Link, usePoll } from '@inertiajs/vue3';
import { Inbox } from '@lucide/vue';
import DeploymentCard from '@/components/DeploymentCard.vue';
import EmptyState from '@/components/EmptyState.vue';
import PageHeader from '@/components/PageHeader.vue';
import { Button } from '@/components/ui/button';
import { dashboard } from '@/routes';
import { create } from '@/routes/deployments';
import type { DeploymentCard as DeploymentCardData } from '@/types';

defineProps<{
    deployments: DeploymentCardData[];
}>();

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
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <DeploymentCard
                    v-for="card in deployments"
                    :key="card.id"
                    :card="card"
                />
            </div>
            <p class="text-xs text-muted-foreground">
                Money is counted by the date it was paid. Each currency is shown
                on its own.
            </p>
        </template>
    </div>
</template>
