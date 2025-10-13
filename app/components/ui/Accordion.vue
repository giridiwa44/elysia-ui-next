<template>
  <client-only>
    <div v-html="accordion"></div>
  </client-only>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const accordion = ref(`
  <div x-data="{ open: 1 }" class="bg-white border border-gray-300 rounded-xl divide-y dark:bg-secondary-900 dark:border-secondary-800 divide-y divide-secondary-300 dark:divide-secondary-800">
  
  <!-- Item 1 -->
  <div>
    <button @click="open = open === 1 ? null : 1"
      class="w-full flex justify-between items-center p-4 text-left focus:outline-none">
      <span class="font-medium text-gray-900 dark:text-secondary-100">What is Elysia UI?</span>
      <svg :class="open === 1 ? 'rotate-180' : ''"
        class="w-5 h-5 text-gray-500 transition-transform duration-200"
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </button>
    <div x-show="open === 1" x-cloak class="px-4 pb-4 text-gray-600 text-sm dark:text-secondary-100">
      Elysia UI is a component built on top of the Tailwind CSS Utilities and the Alphine JS JavaScript Library.
    </div>
  </div>

  <!-- Item 2 -->
  <div>
    <button @click="open = open === 2 ? null : 2"
      class="w-full flex justify-between items-center p-4 text-left focus:outline-none">
      <span class="font-medium text-gray-900 dark:text-secondary-100">Is Elysia UI Free?</span>
      <svg :class="open === 2 ? 'rotate-180' : ''"
        class="w-5 h-5 text-gray-500 transition-transform duration-200"
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </button>
    <div x-show="open === 2" x-cloak class="px-4 pb-4 text-gray-600 text-sm dark:text-secondary-100">
      Yes, it's free. We made elysia ui free so that anyone can enjoy it.
    </div>
  </div>
  <!-- Item 3 -->
  <div>
    <button @click="open = open === 3 ? null : 3"
      class="w-full flex justify-between items-center p-4 text-left focus:outline-none">
      <span class="font-medium text-gray-900 dark:text-secondary-100">How do you use Elysia UI?</span>
      <svg :class="open === 3 ? 'rotate-180' : ''"
        class="w-5 h-5 text-gray-500 transition-transform duration-200"
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </button>
    <div x-show="open === 3"  x-cloak class="px-4 pb-4 text-gray-600 text-sm dark:text-secondary-100">
      You can copy the component code provided, and paste it into your project.
    </div>
  </div>
  </div>

</div>
`)

onMounted(() => {
  // Pastikan Alpine tahu ada elemen baru
  if (window.Alpine) {
    window.Alpine.initTree(document.body)
  }
})
</script>
