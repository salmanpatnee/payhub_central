<script setup lang="ts">
import { CreditCard } from '@lucide/vue';
</script>

<template>
    <div class="flex items-center gap-2">
        <CreditCard class="size-6 shrink-0 text-brand" aria-hidden="true" />
        <span
            class="text-lg font-semibold tracking-tight group-data-[collapsible=icon]:hidden"
        >
            <span class="text-foreground">Pay</span
            ><span class="font-light text-muted-foreground">Hub</span>
            <span class="ml-1 font-light text-muted-foreground">Central</span>
        </span>
    </div>
</template>
