<template>
  <h1>{{ pageTitle }}</h1>
  <p>
    Thank you so much for trying out our free Alphine components! We're working
    on expanding our Alphine.js and Tailwind CSS libraries with more examples in
    the future, so stay tuned for more updates.
  </p>
  <p>
    To use Elysia UI, there are several requirements that you must fulfill,
    including:
  </p>
  <ul>
    <li><a href="https://alphine.dev" class="font-bold">Alphine JS 3.x</a></li>
    <li>
      <a href="https://alphine.dev/plugins/focus" class="font-bold"
        >Focus Plugins Alphine</a
      >
    </li>
    <li>
      <a href="https://tailwindcss.com/" class="font-bold">TailwindCSS V4</a>
    </li>
  </ul>

  <p>Let's see how you can use it in your project!</p>

  <h2>1. Tailwind CSS Installation</h2>
  <p>
    The first step is to install Tailwind CSS 4.x in your project. Installation
    instructions can be found in the official documentation
    <a href="https://tailwindcss.com/docs/installation" class="font-bold"
      >Tailwind CSS Installation</a
    >. The process is quite easy and may vary slightly depending on the
    technology you use.
  </p>

  <p>
    If it is already installed in your project, you can skip this step and go
    directly to the next step
  </p>

  <h2>2. Install the required plugins:</h2>
  <p> In addition to requiring plugins from Tailwindcss, there are several plugins that you must install in your project so that Elysia UI can run properly, including:</p>
  <ul>
    <li><a href="https://alpinejs.dev/plugins/focus" class="font-bold">Alphine JS focus Plugins</a></li>
  </ul>
  <div>
    <Shiki lang="bash" :code="vueExample" class="mt-6" />
  </div>

  <h2>3. TailwindCSS Configuration</h2>

  <p>After installing Tailwindcss and some required plugins, you will need to follow some configurations into your Default CSS to enable some required customizations.</p>
  <div>
   <Shiki lang="bash" :code="tailwindExample" class="mt-6"/>
  </div>

  <h2>4. Alphine JS</h2>

  <p>You can install it using Npm</p>
  <Shiki lang="bash" :code="bashExample" class="mb-3" />
  <p>And you can include in your bundle such as:</p>
  <Shiki lang="bash" :code="alphineExamples" class="mb-3" />

  <p>Use the Alternative function by placing it in the Start Tag of your HTML Document:</p>

  <Shiki lang="bash" :code="bashExamples" class="mb-3" />

  <p>Don't forget to add defer in the script you call</p>
  

</template>
<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import menu from "~/menu";
import { CodeBlock } from "~/components/CodeBlock.vue";

definePageMeta({
  layout: "docs",
});

const route = useRoute();

const pageTitle = computed(() => {
  return menu.find((m) => m.path === route.path)?.title || "Docs";
});

const vueExample = `
  npm install @alpinejs/focus
`
const tailwindExample = `
  /* Tailwind CSS */
  @import "tailwindcss";

  /* Dark Mode */
  @custom-variant dark (&:where(.dark, .dark *));

  :root{
    --background: #ffff;
  }

  .dark {
    --background: var(--color-zinc-900);
  }

  /* Customizations */
  @theme{
    --color-elysia-primary:#F4A9D9;
    --color-elysia-hover:#ca72a5;
    
    --color-secondary-50: var(--color-zinc-50);
    --color-secondary-100: var(--color-zinc-100);
    --color-secondary-200: var(--color-zinc-200);
    --color-secondary-300: var(--color-zinc-300);
    --color-secondary-400: var(--color-zinc-400);
    --color-secondary-500: var(--color-zinc-500);
    --color-secondary-600: var(--color-zinc-600);
    --color-secondary-700: var(--color-zinc-700);
    --color-secondary-800: var(--color-zinc-800);
    --color-secondary-900: var(--color-zinc-900);
    --color-secondary-950: var(--color-zinc-950);

    --font-display: "Inter",sans-serif;
  }
`

const bashExample = `
  npm install alphinejs
`

const alphineExamples = `
  import Alpine from "alpinejs";
  import focus from "@alpinejs/focus";

  window.Alpine = Alpine;

  Alpine.plugin(focus);
  Alpine.start();
`

const bashExamples = `https://cdn.jsdelivr.net/npm/alpinejs@3.15.0/dist/cdn.min.js`
</script>
