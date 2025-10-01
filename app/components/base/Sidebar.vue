<template>
  <aside
    id="simplebar"
    :class="[
      'fixed left-0 z-20 w-64 border-secondary-100 bg-white p-6 transition-transform duration-300 ease-out will-change-transform lg:left-auto lg:w-48 lg:translate-x-0 lg:border-r lg:p-8 xl:w-60 xl:pr-3 dark:border-secondary-800 dark:bg-secondary-900 -translate-x-full h-[calc(100dvh-4.5rem)]',
      isOpen ? 'translate-x-0' : '-translate-x-full',
      'lg:translate-x-0',
    ]"
  >
    <simplebar>
      <nav class="flex w-full flex-col items-start">
        <h5
          class="mb-3 pb-0.5 text-sm font-medium font-display text-secondary-800 dark:text-secondary-200"
        >
          Docs
        </h5>
        <a
          href="/docs/introduction"
          class="flex items-center border-l-2 pl-3 text-sm leading-6 border-elysia-hover font-semibold font-display text-secondary-950 dark:border-elysia-primary dark:text-white"
          >Introduction</a
        >
        <a
          href="/"
          class="flex items-center border-l-2 pl-3 text-sm leading-6 border-secondary-300 font-normal text-secondary-300 font-display dark:text-white"
          >Getting Started</a
        >
      </nav>
    </simplebar>
  </aside>
</template>
<script setup>
import simplebar from "simplebar-vue";
import "simplebar-vue/dist/simplebar.min.css";

defineProps({
  isOpen: Boolean
})
</script>
