<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { home } from '@/routes';

defineProps<{
    title?: string;
    description?: string;
}>();
</script>

<template>
    <div
        class="page-glow flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10"
    >
        <div class="w-full max-w-sm">
            <div class="flex flex-col gap-8">
                <Link
                    :href="home()"
                    class="flex flex-col items-center gap-3 rounded-lg text-2xl font-bold tracking-tight"
                >
                    <img
                        src="/favicon.svg"
                        alt=""
                        class="size-12 rounded-2xl shadow-lg"
                    />
                    <span
                        >Pay<span class="font-light text-muted-foreground"
                            >Hub</span
                        >
                        Central</span
                    >
                </Link>
                <div
                    class="rounded-3xl border border-border bg-card p-8 shadow-xl"
                >
                    <div class="mb-6 space-y-1">
                        <h1 class="text-xl font-semibold tracking-tight">
                            {{ title }}
                        </h1>
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
