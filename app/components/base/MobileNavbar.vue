<template>
  <transition name="fade-zoom">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-start justify-center bg-black/40 backdrop-blur-sm p-4 sm:pt-20"
      @click.self="isOpen = false"
    >
      <!-- Modal Box -->
      <div
        class="w-full max-w-lg rounded-xl bg-white dark:bg-zinc-900 shadow-2xl ring-1 ring-black/10 dark:ring-white/10 overflow-hidden"
      >
        <!-- Header -->
        <div class="flex items-center justify-between px-4 py-3 border-b border-zinc-200 dark:border-zinc-700">
          <h2 class="text-sm font-semibold text-zinc-900 dark:text-zinc-100 font-display">
            🌸 <span>Elysia UI</span>
          </h2>
          <button
            @click="isOpen = false"
            class="text-zinc-500 hover:text-zinc-900 dark:hover:text-white cursor-pointer"
          >
            ✕
          </button>
        </div>

        <!-- Menu Items -->
        <nav class="flex flex-col p-4 gap-2 font-display">
          <a
            href="/"
            class="rounded-md px-3 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            Docs
          </a>
          <a
            href="/components"
            class="rounded-md px-3 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            Components
          </a>
        </nav>
      </div>
    </div>
  </transition>
</template>

<script setup>
const isOpen = defineModel("isOpen", { type: Boolean, default: false });
</script>

<style scoped>
.fade-zoom-enter-active,
.fade-zoom-leave-active {
  transition: all 0.2s ease;
}
.fade-zoom-enter-from {
  opacity: 0;
  transform: scale(0.95);
}
.fade-zoom-enter-to {
  opacity: 1;
  transform: scale(1);
}
.fade-zoom-leave-from {
  opacity: 1;
  transform: scale(1);
}
.fade-zoom-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
