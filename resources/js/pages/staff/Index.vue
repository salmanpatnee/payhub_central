<script setup lang="ts">
import { Head, Link, router } from '@inertiajs/vue3';
import { nextTick, ref } from 'vue';
import EmptyState from '@/components/EmptyState.vue';
import PageHeader from '@/components/PageHeader.vue';
import RemoveStaffDialog from '@/components/RemoveStaffDialog.vue';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { formatDate } from '@/lib/formatRelative';
import { dashboard } from '@/routes';
import { create, destroy, edit, index } from '@/routes/staff';
import type { StaffRow } from '@/types';
import { Users } from '@lucide/vue';

defineProps<{
    staff: StaffRow[];
}>();

defineOptions({
    layout: {
        breadcrumbs: [
            { title: 'Dashboard', href: dashboard() },
            { title: 'Staff', href: index() },
        ],
    },
});

// One dialog for the whole table. It follows the row that opened it.
const selected = ref<StaffRow | null>(null);
const dialogOpen = ref(false);

function askRemove(row: StaffRow): void {
    selected.value = row;
    dialogOpen.value = true;
}

function refresh(): void {
    router.reload({ only: ['staff'] });
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
    <Head title="Staff" />

    <div class="mx-auto w-full max-w-7xl space-y-6 p-4 md:p-6">
        <PageHeader
            title="Staff"
            description="Everyone who can sign in to this dashboard."
        >
            <template #actions>
                <Button as-child>
                    <Link :href="create()">Add staff</Link>
                </Button>
            </template>
        </PageHeader>

        <EmptyState
            v-if="staff.length === 0"
            :icon="Users"
            title="No staff yet."
            description="Add a login for a colleague."
        />

        <section
            v-else
            class="overflow-hidden rounded-xl border border-border/70 bg-card shadow-sm"
        >
            <div class="overflow-x-auto">
                <Table>
                    <TableCaption class="sr-only">
                        Every login, by name.
                    </TableCaption>
                    <TableHeader class="bg-muted/40">
                        <TableRow class="hover:bg-transparent">
                            <TableHead scope="col" class="px-4">Name</TableHead>
                            <TableHead scope="col" class="px-4">
                                Email
                            </TableHead>
                            <TableHead scope="col" class="px-4"
                                >Added</TableHead
                            >
                            <TableHead scope="col" class="px-4 text-right">
                                Actions
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow
                            v-for="row in staff"
                            :key="row.id"
                            class="border-border/50"
                        >
                            <TableCell class="px-4 py-3 text-sm font-medium">
                                {{ row.name }}
                                <Badge v-if="row.isYou" class="ml-2">You</Badge>
                            </TableCell>
                            <TableCell class="px-4 py-3 text-sm">
                                {{ row.email }}
                            </TableCell>
                            <TableCell class="px-4 py-3 text-sm">
                                {{ formatDate(row.createdAt) }}
                            </TableCell>
                            <TableCell class="px-4 py-3">
                                <div
                                    v-if="!row.isYou"
                                    class="flex items-center justify-end gap-2"
                                >
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        as-child
                                    >
                                        <Link
                                            :href="edit(row.id)"
                                            :aria-label="`Edit ${row.name}`"
                                        >
                                            Edit
                                        </Link>
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        class="text-danger hover:text-danger"
                                        :aria-label="`Remove ${row.name}`"
                                        @click="askRemove(row)"
                                    >
                                        Remove
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </section>

        <RemoveStaffDialog
            v-if="selected"
            v-model:open="dialogOpen"
            :name="selected.name"
            :remove-href="destroy(selected.id).url"
            @missing="refresh"
            @removed="focusTitle"
        />
    </div>
</template>
