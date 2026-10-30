<script setup lang="ts">
import { Form, Head, Link, setLayoutProps } from '@inertiajs/vue3';
import { watchEffect } from 'vue';
import StaffController from '@/actions/App/Http/Controllers/StaffController';
import InputError from '@/components/InputError.vue';
import PageHeader from '@/components/PageHeader.vue';
import PasswordInput from '@/components/PasswordInput.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { dashboard } from '@/routes';
import { index } from '@/routes/staff';

const props = defineProps<{
    person: { id: number; name: string; email: string };
    passwordRules: string;
}>();

watchEffect(() => {
    setLayoutProps({
        breadcrumbs: [
            { title: 'Dashboard', href: dashboard() },
            { title: 'Staff', href: index() },
            { title: props.person.name, href: '#' },
        ],
    });
});
</script>

<template>
    <Head :title="`Edit ${person.name}`" />

    <div class="mx-auto w-full max-w-7xl space-y-8 p-4 md:p-6">
        <PageHeader
            :title="`Edit ${person.name}`"
            description="Change the name or email. Their password and sessions are not touched."
        />

        <Form
            v-bind="StaffController.update.form(person.id)"
            :options="{ preserveState: 'errors' }"
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
                    :default-value="person.name"
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
                    :default-value="person.email"
                />
                <InputError :message="errors.email" />
            </div>

            <div class="flex flex-wrap items-center gap-3">
                <Button type="submit" :disabled="processing">
                    <Spinner v-if="processing" />
                    Save
                </Button>
                <Button variant="outline" as-child>
                    <Link :href="index()">Cancel</Link>
                </Button>
            </div>
        </Form>

        <section class="max-w-xl space-y-4" aria-labelledby="password-title">
            <h2
                id="password-title"
                class="text-sm font-semibold tracking-tight"
            >
                Set new password
            </h2>
            <p class="text-sm text-muted-foreground">
                The old password stops working and {{ person.name }} is signed
                out everywhere. Pass the new password to them yourself.
            </p>

            <Form
                v-bind="StaffController.password.form(person.id)"
                :options="{ preserveState: 'errors' }"
                reset-on-success
                :reset-on-error="['password']"
                class="space-y-6"
                v-slot="{ errors, processing }"
            >
                <div class="grid gap-2">
                    <Label for="password">New password</Label>
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

                <Button type="submit" :disabled="processing">
                    <Spinner v-if="processing" />
                    Set new password
                </Button>
            </Form>
        </section>
    </div>
</template>
