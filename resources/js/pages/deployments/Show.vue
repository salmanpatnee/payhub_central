<script setup lang="ts">
import {
    Head,
    router,
    setLayoutProps,
    usePage,
    usePoll,
} from '@inertiajs/vue3';
import { ChevronDown, CircleCheck, ExternalLink } from '@lucide/vue';
import { computed, ref, watchEffect } from 'vue';
import RelativeTime from '@/components/RelativeTime.vue';
import { Badge } from '@/components/ui/badge';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
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
import { formatPercent } from '@/lib/formatPercent';
import { formatWindowRange } from '@/lib/formatWindowRange';
import { dashboard } from '@/routes';
import { index } from '@/routes/deployments';
import type { DeploymentDetail, PullRow, WindowKey } from '@/types';

const props = defineProps<{
    deployment: DeploymentDetail;
    // Loaded once when the page opens. The poll does not reload it.
    pulls: PullRow[];
}>();

const page = usePage();

const columns: { key: WindowKey; label: string }[] = [
    { key: 'today', label: 'Today' },
    { key: 'thisMonth', label: 'This month' },
    { key: 'last30Days', label: 'Last 30 days' },
    { key: 'allTime', label: 'All time' },
];

type LinkStatus = 'completed' | 'pending' | 'failed' | 'cancelled' | 'expired';

const statuses: { key: LinkStatus; label: string; bar: string }[] = [
    { key: 'completed', label: 'Completed', bar: 'bg-success' },
    { key: 'pending', label: 'Pending', bar: 'bg-warning' },
    { key: 'failed', label: 'Failed', bar: 'bg-danger' },
    { key: 'cancelled', label: 'Cancelled', bar: 'bg-muted-foreground/60' },
    { key: 'expired', label: 'Expired', bar: 'bg-muted-foreground/30' },
];

// Kept in the page only: all four windows are already in the data, so
// switching makes no request and a poll does not reset it.
const period = ref<WindowKey>('today');

const badge = computed(() => statusBadge(props.deployment.state));

const notes = computed(() =>
    statusNotes(
        props.deployment.state,
        props.deployment.reason,
        props.deployment.windows !== null,
    ),
);

const current = computed(() => props.deployment.windows?.[period.value]);

const currentLabel = computed(
    () => columns.find((column) => column.key === period.value)?.label ?? '',
);

// A currency is listed when it has paid or pending money in the window.
const currentMoney = computed(() => {
    const window = current.value;

    if (!window) {
        return [];
    }

    return [
        ...new Set([
            ...Object.keys(window.completed),
            ...Object.keys(window.pending),
        ]),
    ]
        .filter(
            (code) =>
                (window.completed[code] ?? 0) > 0 ||
                (window.pending[code] ?? 0) > 0,
        )
        .sort()
        .map((code) => ({
            code: code.toUpperCase(),
            paid: formatMoney(window.completed[code] ?? 0, code).amount,
            pending: window.pending[code] ?? 0,
            pendingText: formatMoney(window.pending[code] ?? 0, code).amount,
        }));
});

const attention = computed(() =>
    current.value
        ? current.value.links.failed + current.value.links.pending
        : 0,
);

// A currency gets a compare row when it has paid money in any window.
const compareCodes = computed(() => {
    const windows = props.deployment.windows;

    if (!windows) {
        return [];
    }

    const all = columns.map((column) => windows[column.key]);

    return [...new Set(all.flatMap((w) => Object.keys(w.completed)))]
        .filter((code) => all.some((w) => (w.completed[code] ?? 0) > 0))
        .sort();
});

function barWidth(count: number): string {
    const total = current.value?.links.total ?? 0;

    return total > 0 ? `${(count / total) * 100}%` : '0%';
}

// The layout breadcrumb is fixed per page, so it is set from the polled prop.
watchEffect(() => {
    setLayoutProps({
        breadcrumbs: [
            { title: 'Dashboard', href: dashboard() },
            { title: 'Deployments', href: index() },
            { title: props.deployment.name, href: page.url },
        ],
    });
});

// Reload only the deployment, quietly, once a minute. A 404 means it was removed elsewhere.
usePoll(60000, {
    only: ['deployment'],
    onHttpException: (response) => {
        if (response.status === 404) {
            router.visit(index());

            return false;
        }
    },
});

const sourceLabels: Record<PullRow['source'], string> = {
    scheduled: 'Scheduled',
    manual: 'Manual',
};

function reasonText(pull: PullRow): string {
    if (pull.ok) {
        return 'None';
    }

    return pull.reason ?? 'No reason saved';
}

const eyebrow =
    'text-[11px] font-semibold tracking-widest text-muted-foreground uppercase';
const chipBase =
    'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset';
const compareHead = 'h-auto px-3 py-2 text-right';
const compareCell = 'px-3 py-2 text-right text-sm tabular-nums';
const compareLabel =
    'px-3 py-2 text-sm font-normal tracking-normal text-muted-foreground normal-case';
</script>

<template>
    <Head :title="deployment.name" />

    <div class="mx-auto w-full max-w-7xl space-y-6 p-4 md:p-6">
        <header class="space-y-2.5">
            <div
                class="flex flex-wrap items-center justify-between gap-x-4 gap-y-3"
            >
                <div class="flex min-w-0 flex-wrap items-center gap-3">
                    <h1
                        class="text-3xl leading-tight font-bold tracking-tight break-words"
                    >
                        {{ deployment.name }}
                    </h1>
                    <Badge v-if="badge" :variant="badge.variant">{{
                        badge.label
                    }}</Badge>
                </div>
                <div
                    v-if="deployment.windows && current"
                    role="group"
                    aria-label="Period"
                    class="inline-flex w-full max-w-full gap-0.5 overflow-x-auto rounded-xl border border-border bg-card p-1 shadow-sm sm:w-auto"
                >
                    <button
                        v-for="column in columns"
                        :key="column.key"
                        type="button"
                        :aria-pressed="period === column.key"
                        class="flex-1 rounded-lg px-4 py-1.5 text-sm font-semibold whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:outline-none aria-pressed:bg-linear-to-br aria-pressed:from-brand-from aria-pressed:to-brand-to aria-pressed:text-white aria-pressed:shadow-sm sm:flex-none"
                        @click="period = column.key"
                    >
                        {{ column.label }}
                    </button>
                </div>
            </div>
            <div
                class="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground"
            >
                <a
                    v-if="deployment.domain"
                    :href="`https://${deployment.domain}`"
                    target="_blank"
                    rel="noopener noreferrer"
                    :aria-label="`Open ${deployment.domain} in a new tab`"
                    class="group/link inline-flex items-center gap-1.5 rounded-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:outline-none"
                >
                    {{ deployment.domain }}
                    <ExternalLink
                        class="size-3.5 opacity-80 transition-transform group-hover/link:translate-x-px group-hover/link:-translate-y-px motion-reduce:transition-none"
                        aria-hidden="true"
                    />
                </a>
                <template v-if="deployment.updatedAt">
                    <span
                        v-if="deployment.domain"
                        class="size-1 rounded-full bg-border"
                        aria-hidden="true"
                    ></span>
                    <p>
                        Last updated
                        <RelativeTime
                            :at="deployment.updatedAt"
                            :timezone="deployment.timezone"
                        />
                    </p>
                </template>
            </div>
            <p
                v-for="note in notes"
                :key="note"
                class="text-sm text-muted-foreground"
            >
                {{ note }}
            </p>
        </header>

        <p
            v-if="!deployment.windows || !current"
            class="rounded-xl border border-dashed border-border p-6 text-sm text-muted-foreground"
        >
            No data yet
        </p>

        <template v-else>
            <div class="grid gap-4 md:grid-cols-[1.5fr_1fr_1fr]">
                <section
                    class="space-y-3 rounded-xl border border-border/70 bg-card p-4 shadow-sm"
                    aria-labelledby="paid-title"
                >
                    <h2 id="paid-title" :class="eyebrow">
                        Money paid · {{ currentLabel }}
                    </h2>
                    <p
                        v-if="currentMoney.length === 0"
                        class="text-sm text-muted-foreground"
                    >
                        No payments
                    </p>
                    <ul v-else class="divide-y divide-border/50">
                        <li
                            v-for="row in currentMoney"
                            :key="row.code"
                            class="flex items-baseline justify-between gap-3 py-2 first:pt-0 last:pb-0"
                        >
                            <span
                                class="w-9 shrink-0 text-xs font-semibold tracking-wider text-muted-foreground uppercase"
                            >
                                {{ row.code }}
                            </span>
                            <span
                                class="mr-auto text-2xl font-semibold tracking-tight tabular-nums"
                            >
                                {{ row.paid }}
                            </span>
                            <span
                                class="text-xs text-muted-foreground tabular-nums"
                            >
                                {{
                                    row.pending > 0
                                        ? `${row.pendingText} pending`
                                        : 'none pending'
                                }}
                            </span>
                        </li>
                    </ul>
                    <p class="text-xs text-muted-foreground">
                        Counted by the date each payment was paid. This includes
                        links created earlier.
                    </p>
                </section>

                <section
                    class="space-y-3 rounded-xl border border-border/70 bg-card p-4 shadow-sm"
                    aria-labelledby="links-title"
                >
                    <h2 id="links-title" :class="eyebrow">Links created</h2>
                    <p
                        class="text-4xl font-semibold tracking-tight tabular-nums"
                    >
                        {{ current.links.total }}
                    </p>
                    <p>
                        <span
                            v-if="current.links.total > 0"
                            :class="[
                                chipBase,
                                'bg-success-soft text-success tabular-nums ring-success-border',
                            ]"
                        >
                            {{
                                formatPercent(
                                    current.links.completed,
                                    current.links.total,
                                )
                            }}
                            completed
                        </span>
                        <span
                            v-else
                            :class="[
                                chipBase,
                                'bg-muted text-muted-foreground ring-border',
                            ]"
                        >
                            No links yet
                        </span>
                    </p>
                    <p class="text-xs text-muted-foreground">
                        Counted by the date each link was created.
                    </p>
                </section>

                <section
                    class="space-y-3 rounded-xl border border-border/70 bg-card p-4 shadow-sm"
                    aria-labelledby="attention-title"
                >
                    <h2 id="attention-title" :class="eyebrow">
                        Needs attention
                    </h2>
                    <template v-if="attention > 0">
                        <p
                            class="text-4xl font-semibold tracking-tight tabular-nums"
                        >
                            {{ attention }}
                        </p>
                        <p class="flex flex-wrap gap-2">
                            <span
                                v-if="current.links.failed > 0"
                                :class="[
                                    chipBase,
                                    'bg-danger-soft text-danger tabular-nums ring-danger-border',
                                ]"
                            >
                                {{ current.links.failed }} failed
                            </span>
                            <span
                                v-if="current.links.pending > 0"
                                :class="[
                                    chipBase,
                                    'bg-warning-soft text-warning tabular-nums ring-warning-border',
                                ]"
                            >
                                {{ current.links.pending }} pending
                            </span>
                        </p>
                    </template>
                    <template v-else>
                        <div class="flex items-center gap-3">
                            <span
                                class="flex size-11 shrink-0 items-center justify-center rounded-full bg-success-soft ring-1 ring-success-border ring-inset"
                            >
                                <CircleCheck
                                    class="size-6 text-success"
                                    aria-hidden="true"
                                />
                            </span>
                            <div>
                                <p
                                    class="text-2xl leading-tight font-semibold tracking-tight text-success"
                                >
                                    All clear
                                </p>
                                <p class="text-sm text-muted-foreground">
                                    Nothing failed or waiting
                                </p>
                            </div>
                        </div>
                    </template>
                    <p class="text-xs text-muted-foreground">
                        Failed links and links still waiting for payment.
                    </p>
                </section>
            </div>

            <div class="grid gap-4 lg:grid-cols-[1fr_1.25fr]">
                <section
                    class="space-y-4 rounded-xl border border-border/70 bg-card p-4 shadow-sm"
                    aria-labelledby="outcomes-title"
                >
                    <h2 id="outcomes-title" :class="eyebrow">Link outcomes</h2>
                    <div
                        class="flex h-2.5 gap-0.5 overflow-hidden rounded-full bg-muted"
                        aria-hidden="true"
                    >
                        <template v-for="status in statuses" :key="status.key">
                            <span
                                v-if="current.links[status.key] > 0"
                                :class="['block min-w-[3px]', status.bar]"
                                :style="{
                                    width: barWidth(current.links[status.key]),
                                }"
                            />
                        </template>
                    </div>
                    <ul class="divide-y divide-border/50">
                        <li
                            v-for="status in statuses"
                            :key="status.key"
                            class="grid grid-cols-[auto_1fr_auto_3.5rem] items-center gap-3 py-2 first:pt-0 last:pb-0"
                        >
                            <span
                                :class="['size-2 rounded-sm', status.bar]"
                                aria-hidden="true"
                            />
                            <span class="text-sm">{{ status.label }}</span>
                            <span class="text-base font-semibold tabular-nums">
                                {{ current.links[status.key] }}
                            </span>
                            <span
                                class="text-right text-xs text-muted-foreground tabular-nums"
                            >
                                {{
                                    formatPercent(
                                        current.links[status.key],
                                        current.links.total,
                                    )
                                }}
                            </span>
                        </li>
                    </ul>
                </section>

                <section
                    class="space-y-3 rounded-xl border border-border/70 bg-card p-4 shadow-sm"
                    aria-labelledby="compare-title"
                >
                    <h2 id="compare-title" :class="eyebrow">All periods</h2>
                    <div class="overflow-x-auto">
                        <Table>
                            <TableCaption class="sr-only">
                                Links and money for every period
                            </TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead scope="col" class="px-3">
                                        <span class="sr-only">Measure</span>
                                    </TableHead>
                                    <TableHead
                                        v-for="column in columns"
                                        :key="column.key"
                                        scope="col"
                                        :class="[
                                            compareHead,
                                            period === column.key &&
                                                'bg-primary/5 text-primary',
                                        ]"
                                    >
                                        {{ column.label }}
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableHead
                                        scope="row"
                                        :class="compareLabel"
                                    >
                                        Links created
                                    </TableHead>
                                    <TableCell
                                        v-for="column in columns"
                                        :key="column.key"
                                        :class="[
                                            compareCell,
                                            period === column.key &&
                                                'bg-primary/5',
                                        ]"
                                    >
                                        {{
                                            deployment.windows[column.key].links
                                                .total
                                        }}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableHead
                                        scope="row"
                                        :class="compareLabel"
                                    >
                                        Completed rate
                                    </TableHead>
                                    <TableCell
                                        v-for="column in columns"
                                        :key="column.key"
                                        :class="[
                                            compareCell,
                                            period === column.key &&
                                                'bg-primary/5',
                                        ]"
                                    >
                                        {{
                                            formatPercent(
                                                deployment.windows[column.key]
                                                    .links.completed,
                                                deployment.windows[column.key]
                                                    .links.total,
                                            )
                                        }}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableHead
                                        scope="row"
                                        :class="compareLabel"
                                    >
                                        Failed
                                    </TableHead>
                                    <TableCell
                                        v-for="column in columns"
                                        :key="column.key"
                                        :class="[
                                            compareCell,
                                            period === column.key &&
                                                'bg-primary/5',
                                            deployment.windows[column.key].links
                                                .failed > 0 &&
                                                'font-semibold text-danger',
                                        ]"
                                    >
                                        {{
                                            deployment.windows[column.key].links
                                                .failed
                                        }}
                                    </TableCell>
                                </TableRow>
                                <TableRow
                                    v-for="code in compareCodes"
                                    :key="code"
                                >
                                    <TableHead
                                        scope="row"
                                        :class="compareLabel"
                                    >
                                        Paid {{ code.toUpperCase() }}
                                    </TableHead>
                                    <TableCell
                                        v-for="column in columns"
                                        :key="column.key"
                                        :class="[
                                            compareCell,
                                            period === column.key &&
                                                'bg-primary/5',
                                        ]"
                                    >
                                        {{
                                            formatMoney(
                                                deployment.windows[column.key]
                                                    .completed[code] ?? 0,
                                                code,
                                            ).amount
                                        }}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableHead
                                        scope="row"
                                        :class="compareLabel"
                                    >
                                        Payments
                                    </TableHead>
                                    <TableCell
                                        v-for="column in columns"
                                        :key="column.key"
                                        :class="[
                                            compareCell,
                                            period === column.key &&
                                                'bg-primary/5',
                                        ]"
                                    >
                                        {{
                                            deployment.windows[column.key]
                                                .paidCount
                                        }}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </section>
            </div>
        </template>

        <Collapsible
            as="section"
            class="overflow-hidden rounded-xl border border-border/70 bg-card shadow-sm"
            aria-labelledby="pulls-title"
        >
            <h2 id="pulls-title" class="m-0">
                <CollapsibleTrigger as-child>
                    <button
                        type="button"
                        class="group flex w-full items-center justify-between gap-4 px-4 py-3 text-left outline-none hover:bg-muted/40 focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:ring-inset"
                    >
                        <span class="space-y-0.5">
                            <span :class="[eyebrow, 'block']"
                                >Recent pulls</span
                            >
                            <span
                                v-if="pulls.length === 0"
                                class="block text-sm font-normal text-muted-foreground"
                            >
                                No pulls yet.
                            </span>
                        </span>
                        <ChevronDown
                            class="size-4 shrink-0 text-muted-foreground transition-transform group-data-[state=open]:rotate-180"
                            aria-hidden="true"
                        />
                    </button>
                </CollapsibleTrigger>
            </h2>
            <CollapsibleContent v-if="pulls.length > 0">
                <div class="overflow-x-auto border-t border-border/60">
                    <Table>
                        <TableCaption class="sr-only">
                            The 10 most recent pulls, newest first.
                        </TableCaption>
                        <TableHeader class="bg-muted/40">
                            <TableRow class="hover:bg-transparent">
                                <TableHead scope="col" class="px-4"
                                    >Time</TableHead
                                >
                                <TableHead scope="col" class="px-4"
                                    >Result</TableHead
                                >
                                <TableHead scope="col" class="px-4">
                                    How it started
                                </TableHead>
                                <TableHead scope="col" class="px-4"
                                    >Reason</TableHead
                                >
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow
                                v-for="pull in pulls"
                                :key="pull.id"
                                :class="
                                    pull.ok
                                        ? 'border-border/50'
                                        : 'border-danger-border/60 bg-danger-soft hover:bg-danger-soft'
                                "
                            >
                                <TableCell
                                    :class="[
                                        'px-4 py-3 text-sm font-medium tabular-nums',
                                        !pull.ok &&
                                            'shadow-[inset_3px_0_0_var(--color-danger)]',
                                    ]"
                                >
                                    <RelativeTime
                                        :at="pull.at"
                                        :timezone="deployment.timezone"
                                    />
                                </TableCell>
                                <TableCell class="px-4 py-3">
                                    <Badge
                                        :variant="
                                            pull.ok ? 'success' : 'danger'
                                        "
                                    >
                                        {{ pull.ok ? 'Good' : 'Failed' }}
                                    </Badge>
                                </TableCell>
                                <TableCell class="px-4 py-3 text-sm">
                                    <span
                                        class="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-semibold text-foreground"
                                    >
                                        {{ sourceLabels[pull.source] }}
                                    </span>
                                </TableCell>
                                <TableCell
                                    :class="[
                                        'min-w-64 px-4 py-3 text-sm whitespace-normal',
                                        pull.ok
                                            ? 'text-muted-foreground'
                                            : 'text-foreground',
                                    ]"
                                >
                                    {{ reasonText(pull) }}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </CollapsibleContent>
        </Collapsible>

        <p
            v-if="deployment.windows && current"
            class="text-xs text-muted-foreground"
        >
            A link made yesterday and paid today counts in yesterday's links and
            in today's money, so the completed links and the payments of a
            window can differ.
        </p>
    </div>
</template>
