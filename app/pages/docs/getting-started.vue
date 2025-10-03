<template>
  <h1>{{ pageTitle }}</h1>
  <p>
    Terimakasih banyak telah mencoba komponen Alphine gratis kami! Kami sedang
    berupaya memperluas pustaka Alphine.js dan Tailwind CSS kami dengan lebih
    banyak contoh di masa mendatang, jadi nantikan terus informasi terbarunya.
  </p>
</template>
<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import menu from "~/menu";

definePageMeta({
  layout: "docs",
});

const route = useRoute();

const pageTitle = computed(() => {
  return menu.find((m) => m.path === route.path)?.title || "Docs";
});
</script>
