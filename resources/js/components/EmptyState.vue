<script setup lang="ts">
import type { Component } from 'vue';

defineProps<{
    title: string;
    description: string;
    icon?: Component;
}>();
</script>

<template>
    <div
        class="flex flex-col items-center gap-3 rounded-xl border border-dashed border-border px-6 py-12 text-center"
    >
        <div
            v-if="icon"
            class="flex size-10 items-center justify-center rounded-full bg-muted text-muted-foreground"
        >
            <component :is="icon" class="size-5" aria-hidden="true" />
        </div>
        <div class="space-y-1">
            <h2 class="text-base font-medium">{{ title }}</h2>
            <p class="max-w-md text-sm text-muted-foreground">
                {{ description }}
            </p>
        </div>
        <div v-if="$slots.actions" class="mt-1">
            <slot name="actions" />
        </div>
    </div>
</template>
