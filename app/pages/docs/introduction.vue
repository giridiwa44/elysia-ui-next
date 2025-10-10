<template>
  <h1 class="text-3xl font-bold text-secondary-900 dark:text-secondary-100">{{ pageTitle }}</h1>
  <p class="text-sm leading-relaxed text-secondary-700 dark:text-secondary-300 ">Welcome to Elysia UI, nice to have you here 😄</p>
  <p class="text-sm leading-relaxed text-secondary-700 dark:text-secondary-300">
   Elysia Ui is a free ready-to-use component created using Alphine JS and Tailwind CSS designed to enrich and add interactivity to your website with just one copy and paste component.
  </p>
  <h2 class="text-2xl font-semibold mt-6">Key Features </h2>
  <ul class="list-disc list-inside space-y-1 text-secondary-700 dark:text-secondary-100 text-sm text-justify leading-relaxed">
    <li>
      <b>Completely Free : </b> All components we build using Aplhine JS are completely free and you can use them for open source, personal, or even commercial projects, be sure to always check the <a href="" class="font-bold">License</a> for more information.
    </li>
    <li>
      <b>Built with Alphine.js : </b> Built with <a href="https://alphinejs.dev" class="font-bold"> Alphine JS</a>, Elysia UI components are reactive, ensuring a smooth and dynamic user experience without the heavy workload of a Javascript framework itself.
    </li>
    <li>
      <b>Designed with TailwindCSS : </b> Elysia UI components are designed with <a href="https://tailwindcss.com" class="font-bold">Tailwind CSS </a>, a fast, utility-based CSS framework that is clean and easy to maintain, ensuring a plug-and-play approach for all types of projects already using Alphine.js and TailwindCSS.
    </li>
    <li><b>Responsive Design :</b> Each component is made as responsive as possible to adapt to various devices.</li>
    <li><b>Dark Mode Support :</b> Elysia UI components come with dark mode support out of the box, so if you already use dark mode in your project, the components will automatically adapt to your dark mode.</li>
    <li><b>Accessibility :</b> All Alpine components are built with accessibility in mind to ensure that they can be used by people with disabilities, providing an inclusive experience for all users.</li>
  </ul>
  <h2 class="text-2xl font-semibold mt-6">How to use</h2>
  <p class="text-sm leading-relaxed text-secondary-700 dark:text-secondary-300">To use these components, simply follow our <a href="/docs/getting-started" class="font-bold">Getting Started</a> guide, navigate to the component of your choice, then copy and paste the code into your project, Happy using! 😄</p>
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
  // Ambil semua items dari setiap grup, jadi array datar
  const allItems = menu.flatMap(group => group.items || [])

  // Cari item berdasarkan path
  const found = allItems.find(item => item?.path === route?.path)

  // Ambil title, atau fallback ke "Docs"
  return found?.title || 'Docs'
})
</script>
