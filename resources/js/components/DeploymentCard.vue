<script setup lang="ts">
import { computed } from 'vue';
import MoneyByCurrency from '@/components/MoneyByCurrency.vue';
import RelativeTime from '@/components/RelativeTime.vue';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import type { DeploymentCard } from '@/types';

const props = defineProps<{
    card: DeploymentCard;
}>();

const badges = {
    live: { variant: 'success', label: 'Live' },
    unavailable: { variant: 'danger', label: 'Unavailable' },
    paused: { variant: 'neutral', label: 'Paused' },
} as const;

const badge = computed(() =>
    props.card.state === 'new' ? null : badges[props.card.state],
);

const sections = computed(() => [
    { label: 'Today', data: props.card.today },
    { label: 'This month', data: props.card.thisMonth },
]);

// Only a card with a good pull has numbers; a missing value is never shown as zero.
const hasData = computed(() => props.card.today !== null);

const notes = computed(() => {
    const lines: string[] = [];

    if (props.card.state === 'paused') {
        lines.push('Not being pulled.');
    } else if (props.card.state === 'new') {
        lines.push('Waiting for the first pull.');
    } else if (props.card.state === 'unavailable') {
        if (hasData.value) {
            lines.push('Showing the last good numbers.');
        }
        if (props.card.reason) {
            lines.push(props.card.reason);
        }
    }

    return lines;
});
</script>

<template>
    <Card class="gap-0 border-border/70 p-4">
        <div class="flex items-start justify-between gap-2">
            <h2 class="text-base font-semibold tracking-tight break-words">
                {{ card.name }}
            </h2>
            <Badge v-if="badge" :variant="badge.variant">
                {{ badge.label }}
            </Badge>
        </div>

        <div class="mt-3 space-y-4 border-t border-border/50 pt-3">
            <p v-if="!hasData" class="text-sm text-muted-foreground">
                No data yet
            </p>
            <template v-else>
                <section
                    v-for="section in sections"
                    :key="section.label"
                    class="space-y-2"
                >
                    <h3
                        class="text-[11px] font-semibold tracking-widest text-muted-foreground uppercase"
                    >
                        {{ section.label }}
                    </h3>
                    <div v-if="section.data" class="space-y-2">
                        <div>
                            <p class="mb-1 text-xs text-muted-foreground">
                                Completed
                            </p>
                            <MoneyByCurrency
                                :amounts="section.data.completed"
                            />
                        </div>
                        <div>
                            <p class="mb-1 text-xs text-muted-foreground">
                                Pending
                            </p>
                            <MoneyByCurrency
                                :amounts="section.data.pending"
                                size="small"
                            />
                        </div>
                    </div>
                </section>
            </template>
        </div>

        <div
            v-if="card.updatedAt || notes.length"
            class="mt-3 space-y-1 border-t border-border/50 pt-2 text-xs text-muted-foreground"
        >
            <p v-if="card.updatedAt">
                Last updated
                <RelativeTime :at="card.updatedAt" :timezone="card.timezone" />
            </p>
            <p v-for="note in notes" :key="note">{{ note }}</p>
        </div>
    </Card>
</template>
