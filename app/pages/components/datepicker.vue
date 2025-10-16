<template>
    <h1>{{ pageTitle }}</h1>
    <p>Custom Datepicker For User Select</p>
</template>
<script setup>
import Datepicker from "~/components/ui/Datepicker.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import menu from "~/menu";
import { ref, onMounted, watch } from 'vue'
import Prism from 'prismjs'
import 'prismjs/components/prism-markup'
import 'prismjs/themes/prism-tomorrow.css'

const showCode = ref(false);

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