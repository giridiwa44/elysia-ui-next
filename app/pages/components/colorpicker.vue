<template>
    <section>
        <h1>{{ pageTitle }}</h1>
        <p>Special Component For user to choose color</p>

        <div class="max-w-2xl mx-auto bg-white dark:bg-secondary-900 rounded-2xl overflow-hidden border border-secondary-200 dark:border-secondary-800">
            <div class="flex justify-between items-center p-4 border-b border-secondary-200 dark:border-secondary-800">
                <div class="flex items-center gap-2">
                    <button @click="showCode = !showCode" class="text-xs bg-secondary-100 px-2 py-2 rounded-md hover:bg-secondary-200 transition dark:bg-secondary-700 dark:hover:bg-secondary-800 dark:text-secondary-100 cursor-pointer">
                        {{ showCode ? 'Hide Code' : 'Show Code' }}
                    </button>
                </div>
                <button class="text-xs bg-secondary-100 px-2 py-2 rounded-md hover:bg-secondary-300 transition dark:bg-secondary-700 cursor-pointer">Copy It</button>
            </div>
            <div class="p-6">
                <ColorPicker />
            </div>
            <transition enter-active-class="transition-all duration-300 ease-in-out" leave-active-class="transition-all duration-300 ease-in-out" enter-from-class="max-h-0 opacity-0" enter-to-class="max-h-[800px] opacity-100" leave-from-class="max-h-[800px] opacity-100" leave-to-class="max-h-0 opacity-0">
                <div v-if="showCode" class="bg-secondary-900 text-gray-100 text-sm border-t border-secondary-700">
                    <pre class="overflow-x-auto p-6"><code ref="codeBlock" class="language-html">{{ code }}</code></pre>
                </div>
            </transition>
        </div>
    </section>
    <div>
        <h2 class="text-lg font-bold">Props</h2>
        <p>The Available Data Properties for this component</p>
        <div class="min-w-full overflow-auto rounded-sm border border-secondary-100 dark:border-secondary-800">
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
                color
              </span>
            </td>
            <td class="p-4 text-secondary-500 dark:text-secondary-400">
              <span class="inline-flex min-w-8 justify-center rounded-lg border border-transparent bg-secondary-100 px-2 py-1 text-sm/4 font-medium text-wrap text-secondary-900 dark:border-secondary-900 dark:bg-secondary-700/50 dark:text-secondary-200">#14b8a6</span>
            </td>
            <td class="p-4 leading-relaxed text-secondary-600 sm:text-wrap dark:text-secondary-400">
             Default Color Picker 
            </td>
          </tr>
          
        </tbody>
      </table>
        </div>
    </div>
</template>
<script setup>
import ColorPicker from '~/components/ui/ColorPicker.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import menu from '~/menu';
import { ref, onMounted, watch } from 'vue'
import Prism from 'prismjs'
import 'prismjs/components/prism-markup'
import 'prismjs/themes/prism-tomorrow.css'

const showCode = ref(false)

const code = ref(`
<div v-pre x-data="{ color: '#14b8a6' }" class="relative w-full max-w-md">
    <label class="block text-sm font-medium text-gray-700 mb-2">Pilih Warna</label>

    <div
      class="flex items-center gap-3 border border-gray-300 rounded-lg px-3 py-2 
            hover:border-elysia-300 transition cursor-pointer bg-white w-full"
    >

      <!-- Input color bawaan browser -->
      <input
        type="color"
        x-model="color"
        class="appearance-none bg-transparent border-none p-0 w-6 h-6 cursor-pointer"
      />

      <!-- Input teks HEX -->
      <input
        type="text"
        x-model="color"
        class="flex-1 border-none focus:ring-0 text-gray-700 bg-transparent 
               focus:outline-none w-full"
      />
    </div>

    <!-- Preview -->
    <p class="text-sm text-gray-500 mt-2">
      Warna terpilih: <span x-text="color" class="font-mono"></span>
    </p>
  </div>
`)

const codeBlock = ref(null)

onMounted(() => {
  Prism.highlightAll()
})

// re-highlight saat showCode diubah
watch(showCode, (val) => {
  if (val) setTimeout(() => Prism.highlightAll(), 100)
})

definePageMeta({
    layout: "docs",
})

const route = useRoute();

const pageTitle = computed(() => {
    // Ambil Semua Items dari Setiap Grup, jadi array datar
    const allItems = menu.flatMap(group => group.items || [])

    // Cari Item Berdasarkan Path
    const found = allItems.find(item => item?.path === route?.path)

    // Ambil Title, atau Fallback ke "DOCS"
    return found?.title || "Docs"
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
</style>