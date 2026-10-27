<script setup lang="ts">
import { Form, Head } from '@inertiajs/vue3';
import DeploymentController from '@/actions/App/Http/Controllers/DeploymentController';
import InputError from '@/components/InputError.vue';
import PageHeader from '@/components/PageHeader.vue';
import PasswordInput from '@/components/PasswordInput.vue';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { create } from '@/routes/deployments';

const urlExample = 'https://payhub.example.com';

defineOptions({
    layout: {
        breadcrumbs: [
            {
                title: 'Add deployment',
                href: create(),
            },
        ],
    },
});
</script>

<template>
    <Head title="Add deployment" />

    <div class="mx-auto w-full max-w-7xl space-y-6 p-4 md:p-6">
        <PageHeader
            title="Add deployment"
            description="Connect one PayHub deployment. The token is stored encrypted and is never shown again."
        />

        <Form
            v-bind="DeploymentController.store.form()"
            :reset-on-error="['token']"
            class="max-w-xl space-y-6"
            v-slot="{ errors, processing }"
        >
            <div class="grid gap-2">
                <Label for="slug">Key</Label>
                <Input
                    id="slug"
                    name="slug"
                    required
                    autofocus
                    maxlength="32"
                    autocomplete="off"
                    placeholder="payhub1"
                />
                <p class="text-sm text-muted-foreground">
                    Must match the key PayHub sends back. Lowercase letters,
                    numbers and hyphens only.
                </p>
                <InputError :message="errors.slug" />
            </div>

            <div class="grid gap-2">
                <Label for="name">Name</Label>
                <Input
                    id="name"
                    name="name"
                    required
                    maxlength="255"
                    autocomplete="off"
                    placeholder="PayHub Main"
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
                    :placeholder="urlExample"
                />
                <InputError :message="errors.base_url" />
            </div>

            <div class="grid gap-2">
                <Label for="token">Token</Label>
                <PasswordInput
                    id="token"
                    name="token"
                    required
                    autocomplete="off"
                    data-1p-ignore="true"
                    data-lpignore="true"
                    aria-label="Token"
                    placeholder="64 character token"
                />
                <InputError :message="errors.token" />
            </div>

            <div class="grid gap-2">
                <Label for="is_active" class="flex items-center space-x-3">
                    <Checkbox
                        id="is_active"
                        name="is_active"
                        :default-value="true"
                        value="1"
                    />
                    <span>Pull this deployment</span>
                </Label>
                <InputError :message="errors.is_active" />
            </div>

            <Button type="submit" :disabled="processing">
                <Spinner v-if="processing" />
                Add deployment
            </Button>
        </Form>
    </div>
</template>
