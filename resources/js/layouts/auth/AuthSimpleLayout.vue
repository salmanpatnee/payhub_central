<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { CreditCard } from '@lucide/vue';
import { home } from '@/routes';

defineProps<{
    title?: string;
    description?: string;
}>();
</script>

<template>
    <div
        class="flex min-h-svh flex-col items-center justify-center gap-6 bg-auth-bg bg-[radial-gradient(var(--auth-dot)_1px,transparent_1px)] bg-[length:20px_20px] p-6 md:p-10"
    >
        <div class="w-full max-w-sm">
            <div class="flex flex-col gap-6">
                <Link
                    :href="home()"
                    class="flex items-center justify-center gap-2 text-2xl font-bold"
                >
                    <CreditCard class="size-7 text-brand" />
                    <span
                        >Pay<span class="text-muted-foreground">Hub</span>
                        Central</span
                    >
                </Link>
                <div class="rounded-2xl bg-card p-6 shadow-lg">
                    <div class="mb-6 space-y-1">
                        <h1 class="text-lg font-semibold">{{ title }}</h1>
                        <p class="text-sm text-muted-foreground">
                            {{ description }}
                        </p>
                    </div>
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>
