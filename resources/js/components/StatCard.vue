<script setup lang="ts">
import type { Component } from 'vue';
import { Card } from '@/components/ui/card';

defineProps<{
    label: string;
    icon?: Component;
}>();
</script>

<template>
    <Card class="gap-0 border-border/70 p-4">
        <div class="flex items-center justify-between gap-2">
            <h3
                class="text-[11px] font-semibold tracking-widest text-muted-foreground uppercase"
            >
                {{ label }}
            </h3>
            <component
                :is="icon"
                v-if="icon"
                class="size-4 text-muted-foreground"
                aria-hidden="true"
            />
        </div>
        <!-- Room for 3 currency rows so the card does not jump when data arrives. -->
        <div class="mt-2 min-h-24">
            <slot />
        </div>
        <div
            v-if="$slots.footer"
            class="mt-3 border-t border-border/50 pt-2 text-xs text-muted-foreground"
        >
            <slot name="footer" />
        </div>
    </Card>
</template>
