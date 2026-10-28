<script setup lang="ts">
import { Form, Head, Link, router, setLayoutProps } from '@inertiajs/vue3';
import { ref, watchEffect } from 'vue';
import DeploymentController from '@/actions/App/Http/Controllers/DeploymentController';
import InputError from '@/components/InputError.vue';
import PageHeader from '@/components/PageHeader.vue';
import PasswordInput from '@/components/PasswordInput.vue';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { dashboard } from '@/routes';
import { show } from '@/routes/deployments';

const props = defineProps<{
    deployment: { key: string; name: string; baseUrl: string };
}>();

const removing = ref(false);
const confirmOpen = ref(false);

watchEffect(() => {
    setLayoutProps({
        breadcrumbs: [
            { title: 'Home', href: dashboard() },
            {
                title: props.deployment.name,
                href: show(props.deployment.key),
            },
            { title: 'Edit', href: '#' },
        ],
    });
});

function remove(): void {
    router.delete(DeploymentController.destroy.url(props.deployment.key), {
        onStart: () => (removing.value = true),
        onFinish: () => {
            removing.value = false;
            confirmOpen.value = false;
        },
    });
}
</script>

<template>
    <Head :title="`Edit ${deployment.name}`" />

    <div class="mx-auto w-full max-w-7xl space-y-8 p-4 md:p-6">
        <PageHeader
            :title="`Edit ${deployment.name}`"
            description="Change the name, the address or the token. Leave the token blank to keep the current one."
        />

        <Form
            v-bind="DeploymentController.update.form(deployment.key)"
            :reset-on-error="['token']"
            class="max-w-xl space-y-6"
            v-slot="{ errors, processing }"
        >
            <div class="grid gap-2">
                <Label>Key</Label>
                <p class="text-sm font-medium">{{ deployment.key }}</p>
                <p class="text-sm text-muted-foreground">
                    The key cannot be changed.
                </p>
            </div>

            <div class="grid gap-2">
                <Label for="name">Name</Label>
                <Input
                    id="name"
                    name="name"
                    required
                    autofocus
                    maxlength="255"
                    autocomplete="off"
                    :default-value="deployment.name"
                />
                <InputError :message="errors.name" />
            </div>

            <div class="grid gap-2">
                <Label for="base_url">Base URL</Label>
                <Input
                    id="base_url"
                    name="base_url"
                    type="url"
                    required
                    maxlength="255"
                    autocomplete="off"
                    :default-value="deployment.baseUrl"
                />
                <InputError :message="errors.base_url" />
            </div>

            <div class="grid gap-2">
                <Label for="token">New token</Label>
                <PasswordInput
                    id="token"
                    name="token"
                    autocomplete="new-password"
                    data-1p-ignore="true"
                    data-lpignore="true"
                    aria-label="New token"
                    placeholder="64 character token"
                />
                <p class="text-sm text-muted-foreground">
                    Leave blank to keep the current token.
                </p>
                <InputError :message="errors.token" />
            </div>

            <div class="flex flex-wrap items-center gap-3">
                <Button type="submit" :disabled="processing">
                    <Spinner v-if="processing" />
                    Save
                </Button>
                <Button variant="outline" as-child>
                    <Link :href="show(deployment.key)">Cancel</Link>
                </Button>
            </div>
        </Form>

        <section
            class="max-w-xl space-y-3 rounded-xl border border-danger-border bg-danger-soft p-4"
            aria-labelledby="remove-title"
        >
            <h2
                id="remove-title"
                class="text-sm font-semibold tracking-tight text-danger"
            >
                Remove deployment
            </h2>
            <p class="text-sm text-foreground">
                The token is wiped here and the deployment disappears from every
                page. This cannot be undone.
            </p>

            <Dialog v-model:open="confirmOpen">
                <DialogTrigger as-child>
                    <Button variant="destructive">Remove deployment</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Remove {{ deployment.name }}?</DialogTitle>
                        <DialogDescription as="div">
                            <ul class="list-disc space-y-1 pl-5">
                                <li>
                                    The token is wiped here and cannot be
                                    recovered.
                                </li>
                                <li>The key can never be used again.</li>
                                <li>
                                    This does not revoke the token inside
                                    PayHub. Revoke it there too.
                                </li>
                            </ul>
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button
                            variant="outline"
                            :disabled="removing"
                            @click="confirmOpen = false"
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
        </section>
    </div>
</template>
