<template>
  <h1>{{ pageTitle }}</h1>
  <p>Welcome to Elysia UI, nice to have you here 😄</p>
  <p>
   Elysia UI is a free, ready-to-use component built on Alphine and TailwindCSS, designed to enrich and add interactivity to your web projects with just a few clicks.
  </p>
  <h2>Key Features </h2>
  <ul>
    <li>
      <b>Completely Free : </b> All Alphine components are completely free to use in your open source, personal, or even commercial projects. Be sure to check the <a href="" class="font-bold">License</a> for more information.
    </li>
    <li>
      <b>Built with Alphine.js : </b> Leveraging <a href="https://alpinejs.dev/" class="font-bold">Alphine.js</a> in Elysia UI components makes our components lightweight and reactive. This ensures a smooth and dynamic user experience without the burden of using a larger JS framework.
    </li>
    <li>
      <b>Designed with TailwindCSS : </b> Elysia UI components are designed with <a href="https://tailwindcss.com" class="font-bold">Tailwind CSS </a>, a fast, utility-based CSS framework that is clean and easy to maintain, ensuring a plug-and-play approach for all types of projects already using Alphine.js and TailwindCSS.
    </li>
    <li><b>Responsive Design :</b> Each component is made as responsive as possible to adapt to various devices.</li>
    <li><b>Dark Mode Support :</b> Elysia UI components come with dark mode support out of the box, so if you already use dark mode in your project, the components will automatically adapt to your dark mode.</li>
    <li><b>Accessibility :</b> All Alpine components are built with accessibility in mind to ensure that they can be used by people with disabilities, providing an inclusive experience for all users.</li>
  </ul>
  <h2>How to use</h2>
  <p>To use these components, simply follow our <a href="/docs/getting-started" class="font-bold">Getting Started</a> guide, navigate to the component of your choice, then copy and paste the code into your project, Happy using! 😄</p>
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
