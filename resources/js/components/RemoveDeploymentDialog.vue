<script setup lang="ts">
import { router } from '@inertiajs/vue3';
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Spinner } from '@/components/ui/spinner';

const props = withDefaults(
    defineProps<{
        name: string;
        // The Deployment page path. DELETE to it removes the deployment.
        removeHref: string;
        // Inertia keeps the page state on a DELETE, which also skips the layout props reset. A page that sets
        // breadcrumbs with setLayoutProps and is left by the removal passes false, or its crumbs follow it.
        preserveState?: boolean;
    }>(),
    { preserveState: true },
);

const emit = defineEmits<{
    // The delete got a 404: it was already removed somewhere else.
    missing: [];
    // The delete worked and the dialog has closed. The opener row is gone, so the page picks where focus goes.
    removed: [];
}>();

const open = defineModel<boolean>('open', { default: false });

const removing = ref(false);
const done = ref(false);

function remove(): void {
    router.delete(props.removeHref, {
        preserveState: props.preserveState,
        onStart: () => (removing.value = true),
        onSuccess: () => (done.value = true),
        onHttpException: (response) => {
            if (response.status === 404) {
                emit('missing');

                return false;
            }
        },
        onFinish: () => {
            removing.value = false;
            open.value = false;
        },
    });
}

// Cancel and Escape return focus to the opener. After a removal that button no longer exists.
function onCloseAutoFocus(event: Event): void {
    if (done.value) {
        event.preventDefault();
        done.value = false;
        emit('removed');
    }
}
</script>

<template>
    <Dialog v-model:open="open">
        <DialogContent @close-auto-focus="onCloseAutoFocus">
            <DialogHeader>
                <DialogTitle>Remove {{ name }}?</DialogTitle>
                <DialogDescription as="div">
                    <ul class="list-disc space-y-1 pl-5">
                        <li>
                            The token is wiped here and cannot be recovered.
                        </li>
                        <li>The key can never be used again.</li>
                        <li>
                            This does not revoke the token inside PayHub. Revoke
                            it there too.
                        </li>
                    </ul>
                </DialogDescription>
            </DialogHeader>
            <DialogFooter>
                <Button
                    variant="outline"
                    :disabled="removing"
                    @click="open = false"
                >
                    Cancel
                </Button>
                <Button
                    variant="destructive"
                    :disabled="removing"
                    @click="remove"
                >
                    <Spinner v-if="removing" />
                    Remove
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>
