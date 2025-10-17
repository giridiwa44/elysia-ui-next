<template>
<h1 class=" dark:text-secondary-100">
    {{ pageTitle }}
</h1>
<p>A component that allows users to select data from a list.</p>

<div class="max-w-2xl mx-auto bg-white dark:bg-secondary-900 rounded-2xl overflow-hidden border border-secondary-200 dark:border-secondary-800 mb-2">
   <div class="flex justify-between items-center p-4 border-b border-secondary-200 dark:border-secondary-800">
     <div class="flex items-center gap-2">
        <button @click="showCode = !showCode" class="text-xs bg-secondary-100 px-2 py-2 rounded-md hover:bg-secondary-200 transition dark:bg-secondary-700 dark:hover:bg-secondary-800 cursor-pointer">
            {{ showCode ? 'Hide Code' : 'Show Code' }}
        </button>
     </div>
     <button class="text-xs bg-secondary-100 px-2 py-2 rounded-md hover:bg-secondary-200 transition dark:bg-secondary-700">Copy It</button>
   </div>

   <div class="p-6">
        <Dropdown />
   </div>
   <transition enter-active-class="transition-all duration-300 ease-in-out" leave-active-class="transition-all duration-300 ease-in-out" enter-from-class="max-h-0 opacity-0" enter-to-class="max-h-[800px] opacity-100" leave-from-class="max-h-[800px] opacity-100" leave-to-class="max-h-0 opacity-0">
        <div v-if="showCode" class="bg-secondary-900 text-gray-100 text-sm border-t border-secondary-700">
            <pre class="overflow-x-auto p-6"><code ref="codeBlock" class="language-html">{{ code }}</code></pre>
        </div>
    </transition>
</div>

 <div>
    <h2 class="text-lg font-bold">Props</h2>
    <p>The Available Data Propeties for this component</p>
    <div class="min-w-full overflow-auto ronded-sm border border-secondary-100 dark:border-secondary-800">

      <table class="min-w-full align-middle text-sm whitespace-nowrap">
        <thead>
          <tr class="border-b border-secondary-100 dark:border-secondary-900">
            <th class="w-36 bg-secondary-50 p-4 text-left font-semibold text-secondary-900 dark:bg-secondary-700/25 dark:text-secondary-50">Property</th>
            <th class="w-36 bg-secondary-50 p-4 text-left font-semibold text-secondary-900 dark:bg-secondary-700/25 dark:text-secondary-50">Default</th>
            <th class="bg-secondary-50 p-4 text-left font-semibold text-secondary-900 dark:bg-secondary-700/25 dark:text-secondary-50">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr class>
            <td class="p-4">
              <span class="inline-flex min-w-8 justify-center rounded-full border border-transparent bg-primary-100 px-2 py-1 text-sm/4 font-medium text-primary-900 dark:border-primary-900 dark:bg-primary-700/10 dark:text-primary-200">
                Open
              </span>
            </td>
            <td class="p-4 text-secondary-500 dark:text-secondary-400">
              <span class="inline-flex min-w-8 justify-center rounded-lg border border-transparent bg-secondary-100 px-2 py-1 text-sm/4 font-medium text-wrap text-secondary-900 dark:border-secondary-900 dark:bg-secondary-700/50 dark:text-secondary-200">false</span>
            </td>
            <td class="p-4 leading-relaxed text-secondary-600 sm:text-wrap dark:text-secondary-400">
             Sets the dropdown menu default visibility
 
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import menu from "~/menu";
import Dropdown from "~/components/ui/Dropdown.vue";
import { ref, onMounted, watch } from 'vue'
import Prism from 'prismjs'
import 'prismjs/components/prism-markup'
import 'prismjs/themes/prism-tomorrow.css'

definePageMeta({
  layout: "docs",
});

const route = useRoute();
const showCode = ref(false);
const codeBlock = ref(null);

const code = ref(`
 <div x-data="{ open: false }" class="mx-3 mr-3 mt-3">
      <button x-on:click="open = !open" 
              class="inline-flex items-center justify-between w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-elysia-500 focus:border-elysia-500 transition-colors duration-150 cursor-pointer">
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
           class="py-2 px-3 border border-gray-200 rounded-md max-w-2xl mt-2 bg-white shadow-lg">
        <ul class="space-y-2 list-none">
          <li class="py-1 rounded hover:bg-gray-100 cursor-pointer">Accounts</li>
          <li class="py-1 rounded hover:bg-gray-100 cursor-pointer">Profile</li>
          <li class="py-1 rounded hover:bg-gray-100 cursor-pointer">Theme</li>
        </ul>
      </div>
    </div>
`)
onMounted(() => {
    Prism.highlightAll()
})

// re-light saat showCode di ubah
watch(showCode, (val) => {
    if(val) setTimeout(() => Prism.highlightAll(), 100)
})

const pageTitle = computed(() => {
  // Ambil semua items dari setiap grup, jadi array datar
  const allItems = menu.flatMap(group => group.items || [])

  // Cari item berdasarkan path
  const found = allItems.find(item => item?.path === route?.path)

  // Ambil title, atau fallback ke "Docs"
  return found?.title || 'Docs'
})
</script>
<style scoped>
pre[class*="language-"] {
  background: #1e1e1e; /* Warna Prism Tomorrow Night */
  color: #f8f8f2;
  border-radius: 0 0 0.75rem 0.75rem; /* rounded bawah */
  margin: 0;
  padding: 1rem 1.25rem;
  overflow-x: auto;
  font-size: 0.85rem;
  line-height: 1.6;
  scrollbar-width: thin;
  scrollbar-color: #555 #2b2b2b;
}

pre[class*="language-"]::-webkit-scrollbar {
  height: 8px;
}
pre[class*="language-"]::-webkit-scrollbar-thumb {
  background-color: #555;
  border-radius: 10px;
}
pre[class*="language-"]::-webkit-scrollbar-track {
  background: #2b2b2b;
}

code[class*="language-"] {
  font-family: "Fira Code", monospace;
  white-space: pre;
}

.slide-fade-enter-active {
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-15px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>