<script setup lang="ts">
import { SidebarInset } from '@/components/ui/sidebar';
</script>

<template>
    <SidebarInset id="main-content" tabindex="-1" class="outline-none">
        <slot />
    </SidebarInset>
</template>
