<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { TriangleAlert } from '@lucide/vue';
import { computed } from 'vue';
import RelativeTime from '@/components/RelativeTime.vue';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { cardWarnings } from '@/lib/cardWarnings';
import { statusBadge, statusNotes } from '@/lib/deploymentStatus';
import { formatMoney } from '@/lib/formatMoney';
import { formatPercent } from '@/lib/formatPercent';
import type { DeploymentCard, PeriodKey } from '@/types';

const props = defineProps<{
    card: DeploymentCard;
    period: PeriodKey;
    periodLabel: string;
    emptyLine: string;
}>();

const badge = computed(() => statusBadge(props.card.state));

// Only a card with a good pull has numbers; a missing value is never shown as zero.
const stats = computed(() => props.card.periods?.[props.period] ?? null);

const warnings = computed(() => (stats.value ? cardWarnings(stats.value) : []));

// One row per currency with any activity in the period, sorted by code.
const rows = computed(() => {
    if (!stats.value) {
        return [];
    }

    const codes = new Set([
        ...Object.keys(stats.value.completed),
        ...Object.keys(stats.value.pending),
    ]);

    return [...codes]
        .map((code) => ({
            paidCents: stats.value?.completed[code] ?? 0,
            pendingCents: stats.value?.pending[code] ?? 0,
            code,
        }))
        .filter((row) => row.paidCents > 0 || row.pendingCents > 0)
        .map((row) => ({
            code: row.code,
            paid: formatMoney(row.paidCents, row.code),
            pending: formatMoney(row.pendingCents, row.code),
        }))
        .sort((a, b) => a.paid.code.localeCompare(b.paid.code));
});

const cells = computed(() => {
    if (!stats.value) {
        return [];
    }

    const { links } = stats.value;

    return [
        {
            label: 'Links',
            value: links.total,
            hint: '',
            danger: false,
        },
        {
            label: 'Completed',
            value: links.completed,
            hint: `${formatPercent(links.completed, links.total)} of links`,
            danger: false,
        },
        {
            label: 'Pending',
            value: links.pending,
            hint:
                links.expired > 0 ? `${links.expired} expired` : 'none expired',
            danger: false,
        },
        {
            label: 'Failed',
            value: links.failed,
            hint: `${formatPercent(links.failed, links.total)} of links`,
            danger: links.failed > 0,
        },
    ];
});

const paymentsText = computed(() => {
    const count = stats.value?.paidCount ?? 0;

    return `${count} ${count === 1 ? 'payment' : 'payments'}`;
});

const notes = computed(() =>
    statusNotes(props.card.state, props.card.reason, stats.value !== null),
);
</script>

<template>
    <Card class="gap-0 rounded-xl border-border/70 p-0">
        <div class="flex items-start justify-between gap-2 p-4 pb-3">
            <div class="min-w-0">
                <h2 class="text-base font-semibold tracking-tight break-words">
                    <Link
                        :href="card.href"
                        class="rounded-sm hover:underline focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:outline-none"
                    >
                        {{ card.name }}
                    </Link>
                </h2>
                <p
                    v-if="card.domain"
                    class="text-xs break-all text-muted-foreground"
                >
                    {{ card.domain }}
                </p>
            </div>
            <Badge v-if="badge" :variant="badge.variant">
                {{ badge.label }}
            </Badge>
        </div>

        <p
            v-if="!stats"
            class="border-t border-border/50 p-4 text-sm text-muted-foreground"
        >
            No data yet
        </p>
        <template v-else>
            <dl
                class="grid grid-cols-2 border-t border-border/50 xl:grid-cols-4"
            >
                <div
                    v-for="(cell, index) in cells"
                    :key="cell.label"
                    class="border-border/50 p-4 py-3"
                    :class="[
                        index % 2 === 0 ? 'border-r' : '',
                        index < 2 ? 'border-b xl:border-b-0' : '',
                        index < 3 ? 'xl:border-r' : 'xl:border-r-0',
                    ]"
                >
                    <dd
                        class="text-xl font-semibold tracking-tight tabular-nums"
                        :class="cell.danger ? 'text-danger' : ''"
                    >
                        {{ cell.value }}
                    </dd>
                    <dt
                        class="text-[11px] font-semibold tracking-widest text-muted-foreground uppercase"
                    >
                        {{ cell.label }}
                    </dt>
                    <p v-if="cell.hint" class="text-xs text-muted-foreground">
                        {{ cell.hint }}
                    </p>
                </div>
            </dl>

            <div class="border-t border-border/50">
                <p
                    v-if="rows.length === 0"
                    class="p-4 text-sm text-muted-foreground"
                >
                    {{ emptyLine }}
                </p>
                <Table v-else>
                    <TableHeader>
                        <TableRow>
                            <TableHead class="pl-4">
                                {{ periodLabel }}
                            </TableHead>
                            <TableHead class="text-right">Paid</TableHead>
                            <TableHead class="pr-4 text-right">
                                Pending
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow v-for="row in rows" :key="row.code">
                            <TableCell
                                class="pl-4 text-xs font-semibold tracking-wider text-muted-foreground uppercase"
                            >
                                {{ row.paid.code }}
                            </TableCell>
                            <TableCell
                                class="text-right text-sm font-medium tabular-nums"
                            >
                                {{ row.paid.amount }}
                            </TableCell>
                            <TableCell
                                class="pr-4 text-right text-sm tabular-nums"
                            >
                                {{ row.pending.amount }}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </template>

        <div
            v-if="card.updatedAt || warnings.length || notes.length"
            class="space-y-2 border-t border-border/50 p-4 py-3 text-xs text-muted-foreground"
        >
            <div
                v-if="card.updatedAt"
                class="flex flex-wrap items-center justify-between gap-x-4"
            >
                <p>
                    Last updated
                    <RelativeTime
                        :at="card.updatedAt"
                        :timezone="card.timezone"
                    />
                </p>
                <p>{{ paymentsText }}</p>
            </div>
            <ul v-if="warnings.length" class="flex flex-wrap gap-2">
                <li
                    v-for="warning in warnings"
                    :key="warning"
                    class="inline-flex items-center gap-1 rounded-full bg-warning-soft px-2 py-0.5 font-medium text-warning ring-1 ring-warning-border ring-inset"
                >
                    <TriangleAlert class="size-3" aria-hidden="true" />
                    {{ warning }}
                </li>
            </ul>
            <p v-for="note in notes" :key="note">{{ note }}</p>
        </div>
    </Card>
</template>
