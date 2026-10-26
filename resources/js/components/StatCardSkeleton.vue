<script setup lang="ts">
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

// Same size as StatCard: same padding, label row and value area minimum.
defineProps<{
    footer?: boolean;
}>();
</script>

<template>
    <Card
        class="gap-0 border-border/70 p-4"
        aria-busy="true"
        aria-label="Loading"
    >
        <div class="flex h-4 items-center justify-between gap-2">
            <Skeleton class="h-3 w-24" />
            <Skeleton class="size-4" />
        </div>
        <div class="mt-2 min-h-24 space-y-1">
            <Skeleton class="h-7 w-full" />
            <Skeleton class="h-7 w-3/4" />
        </div>
        <div v-if="footer" class="mt-3 border-t border-border/50 pt-2">
            <Skeleton class="h-4 w-1/2" />
        </div>
    </Card>
</template>
