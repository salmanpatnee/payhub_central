import type { Ref } from 'vue';
import { onBeforeUnmount, onMounted, ref } from 'vue';

const TICK_MS = 30_000;

// One clock shared by every component that shows a relative time, so a page
// with many of them runs a single timer.
const now = ref(Date.now());
let subscribers = 0;
let timer: ReturnType<typeof setInterval> | null = null;

export function useNow(): Readonly<Ref<number>> {
    onMounted(() => {
        now.value = Date.now();
        subscribers += 1;

        if (timer === null) {
            timer = setInterval(() => {
                now.value = Date.now();
            }, TICK_MS);
        }
    });

    onBeforeUnmount(() => {
        subscribers -= 1;

        if (subscribers === 0 && timer !== null) {
            clearInterval(timer);
            timer = null;
        }
    });

    return now;
}
