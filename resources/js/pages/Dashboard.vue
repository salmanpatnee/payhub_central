<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import { Inbox } from '@lucide/vue';
import EmptyState from '@/components/EmptyState.vue';
import PageHeader from '@/components/PageHeader.vue';
import { Button } from '@/components/ui/button';
import { dashboard } from '@/routes';
import { create } from '@/routes/deployments';

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
    </div>
</template>
