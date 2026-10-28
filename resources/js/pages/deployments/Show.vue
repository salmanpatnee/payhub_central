<script setup lang="ts">
import { Head, setLayoutProps, usePage, usePoll } from '@inertiajs/vue3';
import { computed, watchEffect } from 'vue';
import PageHeader from '@/components/PageHeader.vue';
import RelativeTime from '@/components/RelativeTime.vue';
import { Badge } from '@/components/ui/badge';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { statusBadge, statusNotes } from '@/lib/deploymentStatus';
import { formatMoney } from '@/lib/formatMoney';
import { formatWindowRange } from '@/lib/formatWindowRange';
import { dashboard } from '@/routes';
import type { DeploymentDetail, WindowDetail, WindowKey } from '@/types';

const props = defineProps<{
    deployment: DeploymentDetail;
}>();

const page = usePage();

const columns: { key: WindowKey; label: string }[] = [
    { key: 'allTime', label: 'All time' },
    { key: 'today', label: 'Today' },
    { key: 'thisMonth', label: 'This month' },
    { key: 'last30Days', label: 'Last 30 days' },
];

const linkRows: { label: string; pick: (w: WindowDetail) => number }[] = [
    { label: 'Links created', pick: (w) => w.links.total },
    { label: 'Completed', pick: (w) => w.links.completed },
    { label: 'Pending', pick: (w) => w.links.pending },
    { label: 'Failed', pick: (w) => w.links.failed },
    { label: 'Cancelled', pick: (w) => w.links.cancelled },
    { label: 'Expired', pick: (w) => w.links.expired },
];

const badge = computed(() => statusBadge(props.deployment.state));

const notes = computed(() =>
    statusNotes(
        props.deployment.state,
        props.deployment.reason,
        props.deployment.windows !== null,
    ),
);

// A currency gets a group when it has paid or pending money in any window.
const groups = computed(() => {
    const windows = props.deployment.windows;

    if (!windows) {
        return [];
    }

    const all = columns.map((column) => windows[column.key]);
    const codes = new Set(
        all.flatMap((w) => [
            ...Object.keys(w.completed),
            ...Object.keys(w.pending),
        ]),
    );

    return [...codes]
        .filter((code) =>
            all.some(
                (w) =>
                    (w.completed[code] ?? 0) > 0 || (w.pending[code] ?? 0) > 0,
            ),
        )
        .map((code) => ({
            code: code.toUpperCase(),
            paid: all.map(
                (w) => formatMoney(w.completed[code] ?? 0, code).amount,
            ),
            pending: all.map(
                (w) => formatMoney(w.pending[code] ?? 0, code).amount,
            ),
        }))
        .sort((a, b) => a.code.localeCompare(b.code));
});

function range(key: WindowKey): string | null {
    const window = props.deployment.windows?.[key];

    return key === 'allTime' || !window
        ? null
        : formatWindowRange(window.from, window.to);
}

// The layout breadcrumb is fixed per page, so it is set from the polled prop.
watchEffect(() => {
    setLayoutProps({
        breadcrumbs: [
            { title: 'Home', href: dashboard() },
            { title: props.deployment.name, href: page.url },
        ],
    });
});

// Reload only the deployment, quietly, once a minute.
usePoll(60000, { only: ['deployment'] });

const stickyHead = 'sticky left-0 z-10 bg-card';
const rowHead =
    'sticky left-0 z-10 h-auto bg-card px-4 py-2 text-sm font-medium tracking-normal text-foreground normal-case';
const numberCell = 'px-4 py-2 text-right text-sm tabular-nums';
</script>

<template>
    <Head :title="deployment.name" />

    <div class="mx-auto w-full max-w-7xl space-y-6 p-4 md:p-6">
        <div class="space-y-2">
            <PageHeader
                :title="deployment.name"
                :description="deployment.domain ?? undefined"
            >
                <template v-if="badge" #actions>
                    <Badge :variant="badge.variant">{{ badge.label }}</Badge>
                </template>
            </PageHeader>
            <p
                v-if="deployment.updatedAt"
                class="text-sm text-muted-foreground"
            >
                Last updated
                <RelativeTime
                    :at="deployment.updatedAt"
                    :timezone="deployment.timezone"
                />
            </p>
            <p
                v-for="note in notes"
                :key="note"
                class="text-sm text-muted-foreground"
            >
                {{ note }}
            </p>
        </div>

        <section class="space-y-2" aria-labelledby="links-title">
            <h2 id="links-title" class="text-base font-semibold tracking-tight">
                Links
            </h2>
            <p class="text-sm text-muted-foreground">
                Counted by the date each link was created.
            </p>
            <p
                v-if="!deployment.windows"
                class="rounded-xl border border-dashed border-border p-4 text-sm text-muted-foreground"
            >
                No data yet
            </p>
            <div
                v-else
                class="overflow-hidden rounded-xl border border-border/70 bg-card shadow-sm"
            >
                <Table>
                    <TableCaption class="sr-only">
                        Links by window, counted by created date
                    </TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead
                                scope="col"
                                :class="[stickyHead, 'pl-4']"
                            >
                                <span class="sr-only">Link status</span>
                            </TableHead>
                            <TableHead
                                v-for="column in columns"
                                :key="column.key"
                                scope="col"
                                class="h-auto px-4 py-2 text-right"
                            >
                                {{ column.label }}
                                <span
                                    v-if="range(column.key)"
                                    class="block text-xs font-normal tracking-normal normal-case"
                                >
                                    {{ range(column.key) }}
                                </span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow v-for="row in linkRows" :key="row.label">
                            <TableHead scope="row" :class="rowHead">
                                {{ row.label }}
                            </TableHead>
                            <TableCell
                                v-for="column in columns"
                                :key="column.key"
                                :class="numberCell"
                            >
                                {{ row.pick(deployment.windows[column.key]) }}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </section>

        <section class="space-y-2" aria-labelledby="money-title">
            <h2 id="money-title" class="text-base font-semibold tracking-tight">
                Money
            </h2>
            <p class="text-sm text-muted-foreground">
                Counted by the date each payment was paid. This includes links
                created earlier.
            </p>
            <p
                v-if="!deployment.windows"
                class="rounded-xl border border-dashed border-border p-4 text-sm text-muted-foreground"
            >
                No data yet
            </p>
            <div
                v-else
                class="overflow-hidden rounded-xl border border-border/70 bg-card shadow-sm"
            >
                <Table>
                    <TableCaption class="sr-only">
                        Money by currency and window, counted by paid date
                    </TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead
                                scope="col"
                                :class="[stickyHead, 'pl-4']"
                            >
                                <span class="sr-only">Currency and amount</span>
                            </TableHead>
                            <TableHead
                                v-for="column in columns"
                                :key="column.key"
                                scope="col"
                                class="h-auto px-4 py-2 text-right"
                            >
                                {{ column.label }}
                                <span
                                    v-if="range(column.key)"
                                    class="block text-xs font-normal tracking-normal normal-case"
                                >
                                    {{ range(column.key) }}
                                </span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <tr v-if="groups.length === 0" class="border-b">
                            <th
                                scope="row"
                                :class="[rowHead, 'text-left']"
                                colspan="5"
                            >
                                No payments yet
                            </th>
                        </tr>
                        <template v-for="group in groups" :key="group.code">
                            <tr class="border-b bg-muted">
                                <th
                                    scope="rowgroup"
                                    colspan="5"
                                    class="px-4 py-1.5 text-left text-xs font-semibold tracking-wider text-muted-foreground uppercase"
                                >
                                    {{ group.code }}
                                </th>
                            </tr>
                            <TableRow>
                                <TableHead
                                    scope="row"
                                    :class="[rowHead, 'pl-8']"
                                >
                                    Paid
                                </TableHead>
                                <TableCell
                                    v-for="(amount, index) in group.paid"
                                    :key="index"
                                    :class="[numberCell, 'font-medium']"
                                >
                                    {{ amount }}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableHead
                                    scope="row"
                                    :class="[rowHead, 'pl-8']"
                                >
                                    Pending
                                </TableHead>
                                <TableCell
                                    v-for="(amount, index) in group.pending"
                                    :key="index"
                                    :class="numberCell"
                                >
                                    {{ amount }}
                                </TableCell>
                            </TableRow>
                        </template>
                        <TableRow>
                            <TableHead scope="row" :class="rowHead">
                                Payments (all currencies)
                            </TableHead>
                            <TableCell
                                v-for="column in columns"
                                :key="column.key"
                                :class="numberCell"
                            >
                                {{ deployment.windows[column.key].paidCount }}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </section>

        <p class="text-xs text-muted-foreground">
            A link made yesterday and paid today counts in yesterday's links and
            in today's money, so the completed links and the payments of a
            window can differ.
        </p>
    </div>
</template>
