<template>
   <section>
     <h1 class="dark:text-secondary-100">
        {{ pageTitle }}
     </h1>
     <p>Component to call Banner either from top or bottom of page.</p>
     <div class="max-w-2xl mx-auto bg-white dark:bg-secondary-900 rounded-2xl overflow-hidden border border-secondary-200 dark:border-secondary-800 mb-2">
        <div class="flex justify-between items-center p-4 border-b border-secondary-200 dark:border-secondary-800">
            <div class="flex items-center gap-2">
                <button @click="showCode = !showCode" class="text-xs bg-secondary-100 px-2 py-2 rounded-md hover:bg-secondary-200 transition dark:bg-secondary-700 dark:hover:bg-secondary-800">
                    {{ showCode ? 'Hide Code' : 'Show Code' }}
                </button>
            </div>
            <button class="text-xs bg-secondary-100 px-2 py-2 rounded-md hover:bg-secondary-200 transition dark:bg-secondary-700">Copy It</button>
        </div>
        <div class="p-6">
            <Banner/>
        </div>
        <transition enter-active-class="transition-all duration-300 ease-in-out" leave-active-class="transition-all duration-300 ease-in-out" enter-from-class="max-h-0 opacity-0" enter-to-class="max-h-[800px] opacity-100" leave-from-class="max-h-[800px] opacity-100" leave-to-class="max-h-0 opacity-0">
            <div v-if="showCode" class="bg-secondary-900 text-gray-100 text-sm border-t border-secondary-700">
             <pre class="overflow-x-auto p-6"><code ref="codeBlock" class="language-html">{{ code }}</code></pre>
            </div>
        </transition>
     </div>
     <div class="max-w-2xl mx-auto bg-white dark:bg-secondary-900 rounded-2xl overflow-hidden border border-secondary-200 dark:border-secondary-800 mb-2">
        <div class="flex justify-between items-center p-4 border-b border-secondary-200 dark:border-secondary-800">
            <div class="flex items-center gap-2">
                <button @click="expandCode = !expandCode" class="text-xs bg-secondary-100 px-2 py-2 rounded-md hover:bg-secondary-200 transition dark:bg-secondary-700 dark:hover:bg-secondary-800">
                    {{ expandCode ? 'Hide Code' : 'Show Code' }}
                </button>
            </div>
            <button class="text-xs bg-secondary-100 px-2 py-2 rounded-md hover:bg-secondary-200 transition dark:bg-secondary-700">Copy It</button>
        </div>
        <div class="p-6">
          
          <transition name="slide-fade">
            <div v-if="showBanner" class="bg-white shadow-sm px-4 py-3 rounded-md">
              <div class="flex justify-between items-center">
                <span class="text-sm font-normal"> 🌠 New Component  Available ! Checkout This Update </span>
                <button @click="showBanner = false" class="p-1 hover:bg-indigo-500 rounded-full text-secondary-400 cursor-pointer hover:text-white">          
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </transition>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Showcase content goes here. The banner will appear right below the
              header when triggered.
            </p>
          <button @click="showBanner = true" class="text-xs bg-indigo-100 text-indigo-700 px-3 py-2 rounded-md hover:bg-indigo-200 transition dark:bg-indigo-700 dark:text-indigo-200 dark:hover:bg-indigo-600 mt-3 cursor-pointer">Open Banner</button>
        </div>
        <transition enter-active-class="transition-all duration-300 ease-in-out" leave-active-class="transition-all duration-300 ease-in-out" enter-from-class="max-h-0 opacity-0" enter-to-class="max-h-[800px] opacity-100" leave-from-class="max-h-[800px] opacity-100" leave-to-class="max-h-0 opacity-0">
            <div v-if="expandCode" class="bg-secondary-900 text-gray-100 text-sm border-t border-secondary-700">
             <pre class="overflow-x-auto p-6"><code ref="codeBlock" class="language-html">{{ variantCode }}</code></pre>
            </div>
        </transition>
     </div>
   </section>
</template>
<script setup>
import Banner from '~/components/ui/Banner.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import menu from '~/menu';
import { ref, onMounted, watch } from 'vue'
import Prism from 'prismjs'
import 'prismjs/components/prism-markup'
import 'prismjs/themes/prism-tomorrow.css'

const showCode = ref(false);
const showBanner = ref(false);

const expandCode = ref(false);
const codeBlock = ref(null)

const code = ref(`
 <div x-data="{ show: true }" x-show="show" x-transition  class="bg-white shadow-sm px-4 py-3 rounded-md">
  <div class="flex justify-between items-center">
    <span class="text-sm font-normal"> 🌠 New Component  Available ! Checkout This Update </span>
     <button @click="show = false" class="p-1 hover:bg-indigo-500 rounded-full text-secondary-400 cursor-pointer hover:text-white">          
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
     </svg>
    </button>
  </div>
</div>
`)

const variantCode = ref(`
  <transition name="slide-fade">
            <div v-if="showBanner" class="bg-white shadow-sm px-4 py-3 rounded-md">
              <div class="flex justify-between items-center">
                <span class="text-sm font-normal"> 🌠 New Component  Available ! Checkout This Update </span>
                <button @click="showBanner = false" class="p-1 hover:bg-indigo-500 rounded-full text-secondary-400 cursor-pointer hover:text-white">          
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </transition>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Showcase content goes here. The banner will appear right below the
              header when triggered.
            </p>
          <button @click="showBanner = true" class="text-xs bg-indigo-100 text-indigo-700 px-3 py-2 rounded-md hover:bg-indigo-200 transition dark:bg-indigo-700 dark:text-indigo-200 dark:hover:bg-indigo-600 mt-3 cursor-pointer">Open Banner</button>
        </div>
`)
onMounted(() => {
    Prism.highlightAll()
})

// re-light saat showCode di ubah
watch(showCode, (val) => {
    if(val) setTimeout(() => Prism.highlightAll(), 100)
})

watch(expandCode, (val) => {
  if(val) setTimeout(() => Prism.highlightAll(), 100)
})
//Layout 
definePageMeta({
    layout: "docs",
});

// Router
const route = useRoute();

const pageTitle = computed(() => {
    //Ambil semua Items dari setiap grup, jadi array datar
    const allItems = menu.flatMap(group => group.items || [])

    // Cari item berdasarkan path
    const found = allItems.find(item => item?.path === route?.path)

    // Ambil Title, atau Fallback ke "Docs"

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