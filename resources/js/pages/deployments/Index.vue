<script setup lang="ts">
import { Head, Link, router } from '@inertiajs/vue3';
import { Inbox, Pause, Pencil, Play, Trash2 } from '@lucide/vue';
import { nextTick, ref } from 'vue';
import EmptyState from '@/components/EmptyState.vue';
import PageHeader from '@/components/PageHeader.vue';
import RemoveDeploymentDialog from '@/components/RemoveDeploymentDialog.vue';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { statusBadge } from '@/lib/deploymentStatus';
import { dashboard } from '@/routes';
import { create, index } from '@/routes/deployments';
import type { DeploymentRow } from '@/types';

defineProps<{
    deployments: DeploymentRow[];
}>();

defineOptions({
    layout: {
        breadcrumbs: [
            { title: 'Dashboard', href: dashboard() },
            { title: 'Deployments', href: index() },
        ],
    },
});

// One dialog for the whole table. It follows the row that opened it.
const selected = ref<DeploymentRow | null>(null);
const dialogOpen = ref(false);
const togglingId = ref<number | null>(null);

function askRemove(row: DeploymentRow): void {
    selected.value = row;
    dialogOpen.value = true;
}

function refresh(): void {
    router.reload({ only: ['deployments'] });
}

// Sends the wanted state, not a flip, and stays on the list with its scroll.
function toggleActive(row: DeploymentRow): void {
    router.patch(
        row.activeHref,
        { is_active: row.state === 'paused' },
        {
            preserveState: true,
            preserveScroll: true,
            onStart: () => (togglingId.value = row.id),
            onHttpException: (response) => {
                if (response.status === 404) {
                    refresh();

                    return false;
                }
            },
            onFinish: () => (togglingId.value = null),
        },
    );
}

// The row that opened the dialog is gone, so focus goes to the page title.
function focusTitle(): void {
    void nextTick(() => {
        const title = document.querySelector<HTMLElement>('h1');

        title?.setAttribute('tabindex', '-1');
        title?.focus();
    });
}
</script>

<template>
    <Head title="Deployments" />

    <div class="mx-auto w-full max-w-7xl space-y-6 p-4 md:p-6">
        <PageHeader
            title="Deployments"
            description="Every PayHub deployment, with its status and the actions you can take."
        >
            <template #actions>
                <Button as-child>
                    <Link :href="create()">Add deployment</Link>
                </Button>
            </template>
        </PageHeader>

        <EmptyState
            v-if="deployments.length === 0"
            :icon="Inbox"
            title="No deployments yet."
            description="Add a PayHub deployment to start pulling its payment numbers."
        >
            <template #actions>
                <Button as-child>
                    <Link :href="create()">Add deployment</Link>
                </Button>
            </template>
        </EmptyState>

        <section
            v-else
            class="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm"
        >
            <div class="overflow-x-auto">
                <Table>
                    <TableCaption class="sr-only">
                        Every deployment, by name.
                    </TableCaption>
                    <TableHeader>
                        <TableRow class="hover:bg-transparent">
                            <TableHead scope="col" class="px-4">Name</TableHead>
                            <TableHead scope="col" class="px-4">
                                Status
                            </TableHead>
                            <TableHead scope="col" class="px-4 text-right">
                                Actions
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow
                            v-for="row in deployments"
                            :key="row.id"
                            class="border-border/50"
                        >
                            <TableCell class="px-4 py-3">
                                <Link
                                    :href="row.href"
                                    class="text-sm font-medium text-foreground underline-offset-4 hover:underline focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:outline-none"
                                >
                                    {{ row.name }}
                                </Link>
                                <p
                                    v-if="row.domain"
                                    class="text-xs text-muted-foreground"
                                >
                                    {{ row.domain }}
                                </p>
                            </TableCell>
                            <TableCell class="px-4 py-3 text-sm">
                                <Badge
                                    v-if="statusBadge(row.state)"
                                    :variant="statusBadge(row.state)?.variant"
                                >
                                    {{ statusBadge(row.state)?.label }}
                                </Badge>
                                <span v-else class="text-muted-foreground">
                                    Waiting for the first pull.
                                </span>
                            </TableCell>
                            <TableCell class="px-4 py-3">
                                <div
                                    class="flex items-center justify-end gap-2"
                                >
                                    <Button
                                        variant="outline"
                                        size="icon-sm"
                                        as-child
                                    >
                                        <Link
                                            :href="row.editHref"
                                            :aria-label="`Edit ${row.name}`"
                                            title="Edit"
                                        >
                                            <Pencil />
                                        </Link>
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="icon-sm"
                                        :disabled="togglingId === row.id"
                                        :aria-label="`${row.state === 'paused' ? 'Resume' : 'Pause'} ${row.name}`"
                                        :title="
                                            row.state === 'paused'
                                                ? 'Resume'
                                                : 'Pause'
                                        "
                                        @click="toggleActive(row)"
                                    >
                                        <Spinner v-if="togglingId === row.id" />
                                        <Play
                                            v-else-if="row.state === 'paused'"
                                        />
                                        <Pause v-else />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="icon-sm"
                                        class="text-danger hover:text-danger"
                                        :aria-label="`Remove ${row.name}`"
                                        title="Remove"
                                        @click="askRemove(row)"
                                    >
                                        <Trash2 />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </section>

        <RemoveDeploymentDialog
            v-if="selected"
            v-model:open="dialogOpen"
            :name="selected.name"
            :remove-href="selected.href"
            @missing="refresh"
            @removed="focusTitle"
        />
    </div>
</template>
