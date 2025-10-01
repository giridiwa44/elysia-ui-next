<template>
  <header
    id="page-header"
    class="fixed inset-x-0 top-0 z-30 flex flex-none items-center border-b border-zinc-100 bg-white/90 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/90 h-[4.5rem] dark:text-secondary-100"
  >
    <div
      class="container mx-auto xl:max-w-7xl px-4 lg:px-8 flex grow items-center justify-between gap-2"
    >
      <div class="flex items-center gap-3">
        <a
          href="/"
          class="group inline-flex items center gap-1.5 text-lg font-bold text-secondary-950 hover:text-secondary-600 dark:text-secondary-100 dark:hober:text-secondary-300"
        >
          <span>🌸</span>
          <span
            class="hidden transition-opacity duration-150 ease-out group-hover:opacity-75 sm:inline-block font-display"
            >Elysia UI</span
          >
        </a>
      </div>
      <div class="flex items-center">
        <nav class="mr-1.5 hidden items-center gap-7 lg:flex">
          <a
            href="/docs/introduction"
            class="group relative text-sm font-semibold text-secondary-900 hover:text-black dark:text-secondary-100 dark:hover:text-white"
            ><span
              class="absolute -inset-x-2.5 -inset-y-1.5 rounded-xl bg-secondary-100 dark:bg-secondary-700/50 scale-0 transition ease-out group-hover:scale-100 group-active:scale-105 group-active:bg-secondary-200 dark:group-active:bg-secondary-700/75"
            ></span>
            <span class="relative grow font-display">Docs</span>
          </a>
          <a
            class="group relative text-sm font-semibold text-secondary-900 hover:text-black dark:text-secondary-100 dark:hover:text-white"
            href="/"
            ><span
              class="absolute -inset-x-2.5 -inset-y-1.5 rounded-xl bg-secondary-100 dark:bg-secondary-700/50 scale-0 transition ease-out group-hover:scale-100 group-active:scale-105 group-active:bg-secondary-200 dark:group-active:bg-secondary-700/75"
            ></span>
            <span class="relative grow font-display">Component</span>
          </a>
          <SearchModal />
        </nav>
        <div
          class="mx-6 hidden h-8 w-px bg-linear-to-b from-transparent via-secondary-200 to-transparent lg:block dark:via-secondary-700"
        ></div>
        <ThemeDropdown />
        <a
          href="https://github.com/giridiwa44/elysia-ui-laravel"
          class="md:flex hidden hover:text-elysia-hover"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-github-icon lucide-github w-5 h-5"
          >
            <path
              d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
            />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </a>
        <div
          class="mx-6 lg:hidden flex h-8 w-px bg-linear-to-b from-transparent via-secondary-200 to-transparent dark:via-secondary-700"
        ></div>
        <div class="flex gap-3">
          <button
            @click="$emit('toggleSidebar')"
            class="lg:hidden flex bg-white text-secondary-800 dark:text-secondary-200 cursor-pointer mr-1 py-3 px-3 rounded-md border border-secondary-100 dark:bg-secondary-900 dark:border-secondary-900 dark:hover:border-secondary-100 shadow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-text-align-end-icon lucide-text-align-end w-5 h-5"
            >
              <path d="M21 5H3" />
              <path d="M21 12H9" />
              <path d="M21 19H7" />
            </svg>
          </button>
          <button
            @click="mobileOpen = true"
            class="md:hidden flex bg-white text-secondary-800 dark:text-secondary-200 cursor-pointer mr-1 py-3 px-3 rounded-md border border-secondary-100 dark:bg-secondary-900 dark:border-secondary-900 dark:hover:border-secondary-100 shadow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-menu-icon lucide-menu w-5 h-5"
            >
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
  <MobileNavbar v-model:isOpen="mobileOpen" />
</template>

<script setup>
import MobileNavbar from "./MobileNavbar.vue";
import SearchModal from "./SearchModal.vue";
import ThemeDropdown from "./ThemeDropdown.vue";
import { ref, onMounted } from "vue";

const mobileOpen = ref(false);

onMounted(() => {
  // pastikan hanya di client jalan
  mobileOpen.value = false;
});

defineEmits(["toggleSidebar"]);
</script>
