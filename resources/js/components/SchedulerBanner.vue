<script setup lang="ts">
import { usePage } from '@inertiajs/vue3';
import { TriangleAlert } from '@lucide/vue';
import { computed } from 'vue';

// Feature 9 writes the `scheduler.stale` shared prop. Until it exists the
// banner stays hidden.
const page = usePage();
const stale = computed(() => page.props.scheduler?.stale === true);
</script>

<template>
    <div
        v-if="stale"
        role="status"
        class="flex items-start gap-2 border-b border-warning-border bg-warning-soft px-4 py-2 text-sm font-medium text-warning md:px-6"
    >
        <TriangleAlert class="mt-0.5 size-4 shrink-0" aria-hidden="true" />
        <p>
            Numbers are not updating: scheduled pulls have stopped. Ask the
            developer to check the server cron.
        </p>
    </div>
</template>
