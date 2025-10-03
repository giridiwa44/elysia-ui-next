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
              <article
                class="prose prose-sm prose-zinc dark:prose-invert prose-h1:text-secondary-900 dark:prose-h1:text-white prose-h2:text-secondary-800 dark:prose-h2:text-secondary-100 prose-p:text-secondary-800 dark:prose-p:text-secondary-200 prose-a:text-secondary-700 prose-a:decoration-secondary-500/50 prose-a:underline-offset-2 prose-a:hover:text-black dark:prose-a:text-secondary-300 dark:prose-a:decoration-secondary-400/50 dark:prose-a:hover:text-white prose-pre:p-0 prose-pre:text-sm max-w-2xl font-display"
              >              
                <slot />
              </article>
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
