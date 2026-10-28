<script setup lang="ts">
import { computed } from 'vue';
import { formatMoney } from '@/lib/formatMoney';

// Whole cents by currency code. One row per currency; amounts are never added
// together across currencies.
const props = withDefaults(
    defineProps<{
        amounts: Record<string, number>;
        size?: 'default' | 'small';
    }>(),
    { size: 'default' },
);

const rows = computed(() =>
    Object.entries(props.amounts)
        .map(([currency, cents]) => ({
            key: currency,
            ...formatMoney(cents, currency),
        }))
        .sort((a, b) => a.code.localeCompare(b.code)),
);
</script>

<template>
    <p v-if="rows.length === 0" class="text-sm text-muted-foreground">
        No payments
    </p>
    <dl v-else class="space-y-1">
        <div
            v-for="row in rows"
            :key="row.key"
            class="flex items-baseline justify-between gap-4"
        >
            <dt
                class="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase"
            >
                {{ row.code }}
            </dt>
            <dd
                :class="
                    size === 'small'
                        ? 'text-sm font-medium tabular-nums'
                        : 'text-xl font-semibold tracking-tight tabular-nums'
                "
            >
                {{ row.amount }}
            </dd>
        </div>
    </dl>
</template>
