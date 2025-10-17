<template>
  <client-only>
    <div x-data="{ open: false }" class="mx-3 mr-3 mt-3">
      <button x-on:click="open = !open" 
              class="inline-flex items-center justify-between w-full py-2 px-4 border border-gray-300 hover:bg-white dark:border-secondary-600 rounded-md shadow-sm bg-white dark:hover:bg-secondary-950 focus:outline-none focus:ring-1 focus:ring-elysia-500 focus:border-elysia-500 transition-colors duration-150 cursor-pointer dark:bg-secondary-900">
        <span class="font-medium text-gray-700">Toggle Dropdown</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             class="lucide lucide-chevron-up w-5 h-5 transform transition-transform duration-200"
             x-bind:class="{ 'rotate-180': open }">
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </button>

      <div x-show="open" 
           x-transition:enter="transition ease-out duration-200"
           x-transition:enter-start="opacity-0 transform -translate-y-2"
           x-transition:enter-end="opacity-100 transform translate-y-0"
           x-transition:leave="transition ease-in duration-150"
           x-transition:leave-start="opacity-100 transform translate-y-0"
           x-transition:leave-end="opacity-0 transform -translate-y-2"
           class="py-2 px-3 border border-gray-200 rounded-md max-w-2xl mt-2 bg-white shadow-lg dark:bg-secondary-900 dark:border-secondary-800">
        <ul class="space-y-2 list-none">
          <li class="px-2 py-1 rounded dark:hover:bg-gray-900 hover:bg-secondary-400 dark:hover:text-secondary-100 cursor-pointer dark:text-secondary-300">Accounts</li>
          <li class="px-2 py-1 rounded dark:hover:bg-gray-900 hover:bg-secondary-300 dark:hover:text-secondary-100 cursor-pointer dark:text-secondary-300">Profile</li>
          <li class="px-2 py-1 rounded dark:hover:bg-gray-900 hover:bg-secondary-300 dark:hover:text-secondary-100  cursor-pointer dark:text-secondary-300">Theme</li>
        </ul>
      </div>
    </div>
  </client-only>
</template>



<script setup>

</script>
<style>
ul{
    list-style-type: none !important;
    padding-left: 0px !important;
}

</style>
