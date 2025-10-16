<template>
    <client-only>
        <div v-html ="banner"></div>
    </client-only>
</template>
<script setup>
import { ref } from 'vue';

const banner = ref(`
<div x-data="{ show: true }" x-show="show" x-transition  class="bg-white shadow-sm px-4 py-3 rounded-md">
  <div class="flex justify-between items-center">
    <span class="text-sm font-normal dark:text-secondary-900"> 🌠 New Component  Available ! Checkout This Update </span>
     <button @click="show = false" class="p-1 hover:bg-indigo-500 rounded-full text-secondary-400 cursor-pointer hover:text-white">          
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
     </svg>
    </button>
  </div>
</div>
`)
</script>