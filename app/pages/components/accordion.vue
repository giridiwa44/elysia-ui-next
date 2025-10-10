<template>
  <section class="py-10">
    <h1 class="text-2xl font-bold text-center mb-6">Accordion Showcase</h1>
    <Accordion :items="accordionItems" />
  </section>
</template>

<script setup>
import Accordion from '@/components/ui/Accordion.vue'
import { computed } from "vue";
import { useRoute } from "vue-router";
import menu from "~/menu";

const accordionItems = [
  { title: 'Apa itu Elysia UI?', content: 'Elysia UI adalah kumpulan komponen AlpineJS + TailwindCSS yang sederhana namun kuat.' },
  { title: 'Apakah mendukung dark mode?', content: 'Ya! Semua komponen sudah dioptimalkan dengan Tailwind dark mode class.' },
  { title: 'Apakah bisa digunakan di Nuxt atau Vue?', content: 'Bisa banget, karena tidak tergantung reaktivitas Vue — murni HTML + Alpine.' },
]

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