<script setup lang="ts">
import { Form, Head, Link } from '@inertiajs/vue3';
import StaffController from '@/actions/App/Http/Controllers/StaffController';
import InputError from '@/components/InputError.vue';
import PageHeader from '@/components/PageHeader.vue';
import PasswordInput from '@/components/PasswordInput.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { dashboard } from '@/routes';
import { create, index } from '@/routes/staff';

defineProps<{
    passwordRules: string;
}>();

defineOptions({
    layout: {
        breadcrumbs: [
            { title: 'Home', href: dashboard() },
            { title: 'Staff', href: index() },
            { title: 'Add staff', href: create() },
        ],
    },
});
</script>

<template>
    <Head title="Add staff" />

    <div class="mx-auto w-full max-w-7xl space-y-6 p-4 md:p-6">
        <PageHeader
            title="Add staff"
            description="Type a password and pass it to the person yourself. No email is sent."
        />

        <Form
            v-bind="StaffController.store.form()"
            reset-on-success
            :reset-on-error="['password']"
            class="max-w-xl space-y-6"
            v-slot="{ errors, processing }"
        >
            <div class="grid gap-2">
                <Label for="name">Name</Label>
                <Input
                    id="name"
                    name="name"
                    required
                    autofocus
                    maxlength="255"
                    autocomplete="off"
                />
                <InputError :message="errors.name" />
            </div>

            <div class="grid gap-2">
                <Label for="email">Email</Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxlength="255"
                    autocomplete="off"
                />
                <InputError :message="errors.email" />
            </div>

            <div class="grid gap-2">
                <Label for="password">Password</Label>
                <PasswordInput
                    id="password"
                    name="password"
                    required
                    autocomplete="new-password"
                    data-1p-ignore="true"
                    data-lpignore="true"
                    :passwordrules="passwordRules"
                />
                <InputError :message="errors.password" />
            </div>

            <div class="flex flex-wrap items-center gap-3">
                <Button type="submit" :disabled="processing">
                    <Spinner v-if="processing" />
                    Add staff
                </Button>
                <Button variant="outline" as-child>
                    <Link :href="index()">Cancel</Link>
                </Button>
            </div>
        </Form>
    </div>
</template>
