<script setup lang="ts">
import { computed, ref } from 'vue';
import {
    Popover,
    PopoverAnchor,
    PopoverContent,
} from '@/components/ui/popover';
import { useNow } from '@/composables/useNow';
import { formatExactTime, formatRelative } from '@/lib/formatRelative';

// `at` is a UTC ISO time (pulled_at). `timezone` is the zone from the reply.
const props = defineProps<{
    at: string | null;
    timezone?: string | null;
}>();

const now = useNow();
const open = ref(false);

const relative = computed(() => formatRelative(props.at, now.value));
const exact = computed(() =>
    props.at ? formatExactTime(props.at, props.timezone) : null,
);

// Mouse hover, keyboard focus and a tap (which focuses) all show the exact
// time. Only a mouse leaving closes it, so a tap or focus is not undone.
function onPointerEnter(event: PointerEvent): void {
    if (event.pointerType === 'mouse') {
        open.value = true;
    }
}

function onPointerLeave(event: PointerEvent): void {
    if (event.pointerType === 'mouse') {
        open.value = false;
    }
}
</script>

<template>
    <span v-if="!at" class="text-muted-foreground">{{ relative }}</span>
    <Popover v-else v-model:open="open">
        <PopoverAnchor as-child>
            <time
                :datetime="at"
                tabindex="0"
                class="cursor-help rounded-sm underline decoration-dotted underline-offset-4"
                @pointerenter="onPointerEnter"
                @pointerleave="onPointerLeave"
                @focus="open = true"
                @blur="open = false"
                @click="open = true"
            >
                {{ relative }}
                <span class="sr-only">, exact time {{ exact }}</span>
            </time>
        </PopoverAnchor>
        <PopoverContent
            class="w-auto px-3 py-2 text-xs tabular-nums"
            @open-auto-focus.prevent
            @close-auto-focus.prevent
        >
            {{ exact }}
        </PopoverContent>
    </Popover>
</template>
