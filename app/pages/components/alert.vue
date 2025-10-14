<template>
<h1 class="dark:text-secondary-100">{{ pageTitle }}</h1>
<p>A warning component that serves to attract attention</p>
<div class="flex items-center gap-2 py-2 px-2 border rounded-xl bg-green-400/20 border-green-400/20 font-sans dark:border-green-400/20 dark:bg-green-400/20 dark:text-white max-w-2xl">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-alert-icon lucide-triangle-alert"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg> 
    <div class="">Tailwind css component only</div>
</div>

<div class="max-w-2xl mx-auto bg-white dark:bg-secondary-900 rounded-2xl overflow-hiden border border-secondary-200 dark:border-secondary-800">
    <div class="flex justify-between items-center p-4 border-b border-secondary-200 dark:border-secondary-800">
        <div class="flex items-center gap-2">
          <button @click="showCode = !showCode" class="text-xs bg-secondary-100 px-2 py-2 rounded-md hover:bg-secondary-200 transition dark:bg-secondary-700 dark:hover:bg-secondary-800 dark:text-secondary-100 cursor-pointer">
            {{ showCode ? 'Hide Code' : 'Show Code' }}
          </button>  
        </div>

        <button class="text-xs bg-secondary-100 px-2 py-2 rounded-md hover:bg-secondary-200 transition dark:bg-secondary-700">Copy It</button>

    </div>
    <div class="p-6">
        <Alert />
    </div>
    <transition enter-active-class="transition-all duration-300 ease-in-out" leave-active-class="transition-all duration-300 ease-in-out" enter-from-class="max-h-0 opacity-0" enter-to-class="max-h-[800px] opacity-100" leave-from-class="max-h-[800px] opacity-100" leave-to-class="max-h-0 opacity-0">
        <div v-if="showCode" class="bg-secondary-900 text-gray-100 text-sm border-t border-secondary-700">
          <pre class="overflow-x-auto p-6"><code ref="codeBlock" class="language-html">{{ code }}</code></pre>
        </div>
    </transition>
</div>

<h2> Alert Variant </h2>
<p>Variant of alert</p>

<div class="max-w-2xl mx-auto bg-white dark:bg-secondary-900 rounded-2xl overflow-hiden border border-secondary-200 dark:border-secondary-800">
    <div class="flex justify-between items-center p-4 border-b border-secondary-200 dark:border-secondary-800">
        <div class="flex items-center gap-2">
          <button @click="expandCode = !expandCode" class="text-xs bg-secondary-100 px-2 py-2 rounded-md hover:bg-secondary-200 transition dark:bg-secondary-700 dark:hover:bg-secondary-800 dark:text-secondary-100 cursor-pointer">
            {{ expandCode ? 'Hide Code' : 'Show Code' }}
          </button>  
        </div>

        <button class="text-xs bg-secondary-100 px-2 py-2 rounded-md hover:bg-secondary-200 transition dark:bg-secondary-700">Copy It</button>

    </div>
    <div class="p-6">
        <div class="relative w-full rounded-lg border border-transparent bg-blue-600 p-4 [&>svg]:absolute [&>svg]:text-foreground [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11 text-white mb-2 ">
            <svg class="w-5 h-5 -translate-y-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" /></svg>
            <h5 class="mb-1 font-medium leading-none tracking-tight">Alert Message Headline</h5>
            <div class="text-sm opacity-80">This is the subtext for your alert message, providing important information or instructions.</div>
        </div>
        <div class="relative w-full rounded-lg border border-transparent bg-red-600 p-4 [&>svg]:absolute [&>svg]:text-foreground [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11 text-white mb-2">
            <svg class="w-5 h-5 -translate-y-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>
            <h5 class="mb-1 font-medium leading-none tracking-tight">Alert Message Headline</h5>
            <div class="text-sm opacity-80">This is the subtext for your alert message, providing important information or instructions.</div>
        </div>
        <div class="relative w-full rounded-lg border border-transparent bg-green-500 p-4 [&>svg]:absolute [&>svg]:text-foreground [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11 text-white mb-2">
            <svg class="w-5 h-5 -translate-y-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <h5 class="mb-1 font-medium leading-none tracking-tight">Alert Message Headline</h5>
            <div class="text-sm opacity-80">This is the subtext for your alert message, providing important information or instructions.</div>
        </div>
        <div class="relative w-full rounded-lg border border-transparent bg-yellow-500 p-4 [&>svg]:absolute [&>svg]:text-foreground [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11 text-white mb-2">
            <svg class="w-5 h-5 -translate-y-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
            <h5 class="mb-1 font-medium leading-none tracking-tight">Alert Message Headline</h5>
            <div class="text-sm opacity-80">This is the subtext for your alert message, providing important information or instructions.</div>
        </div>
    </div>
    <transition enter-active-class="transition-all duration-300 ease-in-out" leave-active-class="transition-all duration-300 ease-in-out" enter-from-class="max-h-0 opacity-0" enter-to-class="max-h-[800px] opacity-100" leave-from-class="max-h-[800px] opacity-100" leave-to-class="max-h-0 opacity-0">
        <div v-if="expandCode" class="bg-secondary-900 text-gray-100 text-sm border-t border-secondary-700">
          <pre class="overflow-x-auto p-6"><code ref="codeBlock" class="language-html">{{ variant }}</code></pre>
        </div>
    </transition>
</div>
</template>
<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import menu from "~/menu";
import Alert from "~/components/ui/Alert.vue";
import { ref, onMounted, watch } from 'vue'
import Prism from 'prismjs'
import 'prismjs/components/prism-markup'
import 'prismjs/themes/prism-tomorrow.css'

const showCode = ref(false)
const expandCode = ref(false)

const code = ref(`
    <div class="relative w-full rounded-lg border border-secondary-200 bg-white p-4 [&>svg]:absolute [&>svg]:text-foreground [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11 text-neutral-900">
        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg>
        <h5 class="mb-1 font-medium leading-none tracking-tight">Alert Message Headline</h5>
        <div class="text-sm opacity-70">This is the subtext for your alert message, providing important information or instructions.</div>
    </div>
`)

const variant = ref(`
    <div class="relative w-full rounded-lg border border-transparent bg-blue-600 p-4 [&>svg]:absolute [&>svg]:text-foreground [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11 text-white mb-2 ">
        <svg class="w-5 h-5 -translate-y-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" /></svg>
        <h5 class="mb-1 font-medium leading-none tracking-tight">Alert Message Headline</h5>
        <div class="text-sm opacity-80">This is the subtext for your alert message, providing important information or instructions.</div>
    </div>
    <div class="relative w-full rounded-lg border border-transparent bg-red-600 p-4 [&>svg]:absolute [&>svg]:text-foreground [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11 text-white mb-2">
        <svg class="w-5 h-5 -translate-y-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>
        <h5 class="mb-1 font-medium leading-none tracking-tight">Alert Message Headline</h5>
        <div class="text-sm opacity-80">This is the subtext for your alert message, providing important information or instructions.</div>
    </div>
    <div class="relative w-full rounded-lg border border-transparent bg-green-500 p-4 [&>svg]:absolute [&>svg]:text-foreground [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11 text-white mb-2">
        <svg class="w-5 h-5 -translate-y-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <h5 class="mb-1 font-medium leading-none tracking-tight">Alert Message Headline</h5>
        <div class="text-sm opacity-80">This is the subtext for your alert message, providing important information or instructions.</div>
    </div>
    <div class="relative w-full rounded-lg border border-transparent bg-yellow-500 p-4 [&>svg]:absolute [&>svg]:text-foreground [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11 text-white mb-2">
        <svg class="w-5 h-5 -translate-y-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
        <h5 class="mb-1 font-medium leading-none tracking-tight">Alert Message Headline</h5>
        <div class="text-sm opacity-80">This is the subtext for your alert message, providing important information or instructions.</div>
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

watch(expandCode, (val) => {
   if (val) setTimeout(() => Prism.highlightAll(), 100)
})
definePageMeta({
  layout: "docs",
});

const route = useRoute();

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
</style>