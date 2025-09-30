<template>
<div id="page-container" class="mx-auto flex min-h-dvh w-full min-w-[320px] flex-col bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-200">
    <div id="page-content" class="flex h-full max-w-full flex-auto flex-col">
        <Navbar />

        <slot />
    </div>
</div>
</template>

<script setup>
import Navbar from '~/components/base/Navbar.vue';
import realm from '@/assets/img/realm.webp'; 
</script>