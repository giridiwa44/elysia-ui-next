<template>
  <div
    id="page-container"
    class="mx-auto flex min-h-dvh w-full min-w-[320px] flex-col bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-200"
  >
    <div id="page-content" class="flex h-full max-w-full flex-auto flex-col">
      <Navbar @toggleSidebar="isOpen = !isOpen" />
      <main
        class="grow bg-white dark:bg-secondary-900 pt-[4.5rem] dark:text-secondary-100"
      >
        <div class="bg-white dark:bg-secondary-900">
          <div class="container mx-auto xl:max-w-7xl relative flex">
            <Sidebar :isOpen="isOpen" />
            <div
              v-if="isOpen"
              class="fixed inset-0 bg-black/40 backdrop-blur-sm z-10 lg:hidden"
              @click="isOpen = false"
            ></div>
            <div class="max-w-full grow overflow-hidden p-4 lg:ml-48 xl:ml-60">
              <slot />
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script setup>
import Navbar from "~/components/base/Navbar.vue";
import Sidebar from "~/components/base/Sidebar.vue";

const isOpen = ref(false);
</script>
