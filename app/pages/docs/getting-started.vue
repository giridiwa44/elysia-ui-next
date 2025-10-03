<template>
  <h1>{{ pageTitle }}</h1>
  <p>
    Thank you so much for trying out our free Alphine components! We're working
    on expanding our Alphine.js and Tailwind CSS libraries with more examples in
    the future, so stay tuned for more updates.
  </p>
  <p>Untuk Menggunakan UI Kami Ada beberapa Persyaratan yang harus Anda Penuhi Di antaranya :</p>
  <ul>
  <li><a href="https://alphine.dev" class="font-bold">Alphine JS 3.x</a></li>
  <li><a href="https://alphine.dev/plugins/focus" class="font-bold">Focus Plugins Alphine</a></li>
  </ul>

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
