<template>
  <h1 class=" dark:text-secondary-100">
    {{ pageTitle }}
  </h1>
  <p
  
  >
    Thank you so much for trying out our free Alphine components! We're working
    on expanding our Alphine.js and Tailwind CSS libraries with more examples in
    the future, so stay tuned for more updates.
  </p>
  <p
  
  >
    To use Elysia UI, there are several requirements that you must fulfill,
    including:
  </p>
  <ul
    
  >
    <li>
      <a href="https://alphine.dev" class="font-bold underline"
        >Alphine JS 3.x</a
      >
    </li>
    <li>
      <a href="https://alphine.dev/plugins/focus" class="font-bold underline"
        >Focus Plugins Alphine</a
      >
    </li>
    <li>
      <a href="https://tailwindcss.com/" class="font-bold underline"
        >TailwindCSS V4</a
      >
    </li>
  </ul>

  <p
  >
    Let's see how you can use it in your project!
  </p>

  <h2>1. Tailwind CSS Installation</h2>
  <p
  >
    The first step is to install Tailwind CSS 4.x in your project. Installation
    instructions can be found in the official documentation
    <a href="https://tailwindcss.com/docs/installation" class="font-bold"
      >Tailwind CSS Installation</a
    >. The process is quite easy and may vary slightly depending on the
    technology you use.
  </p>

  <p
  
  >
    If it is already installed in your project, you can skip this step and go
    directly to the next step
  </p>

  <h2>2. Install the required plugins:</h2>
  <p
  >
    In addition to requiring Tailwindcss, there are several plugins you'll need
    to install in your project for the Elysia UI Component to run properly,
    including:
  </p>
  <ul
  >
    <li>
      <a href="https://alpinejs.dev/plugins/focus" class="font-bold underline"
        >Alphine JS focus Plugins</a
      >
    </li>
  </ul>
  <div data-prism-copy-timeout="500">
    <pre
      class="overflow-x-auto p-6"
    ><code ref="codeBlock" class="language-shell">{{ code }}</code></pre>
  </div>

  <h2>3. TailwindCSS Configuration</h2>
  <p
  >
    After installing tailwind css and the required plugins, you should use the
    following configuration in your default css file to enable all the required
    customizations.
  </p>
  <div data-prism-copy-timeout="500">
    <pre
      class="overflow-x-auto p-6"
    ><code ref="codeBlock" class="language-css">
    {{ twcode }}
    </code></pre>
  </div>

  <h2>4. Alphine JS</h2>
  <p >You can install Alphine JS via NPM And add it your bundle like so</p>
  <pre
      class="overflow-x-auto p-6"
    ><code ref="codeBlock" class="language-javascript">
    {{ impcode }}
  </code></pre>

  <p>Or you can also use the CDN version provided by Alphine JS</p>

  <pre class="overflow-x-auto p-6"><code ref="codeBlock" class="language-markup" v-html="htmlcode"></code></pre>
  <h2>5. Inter Font (Optional) </h2>
  <p>Finally, you can include the font we are using by default in the head section of your HTML:</p>
  <pre class="overflow-x-auto p-6"><code ref="codeBlock" class="language-markup" v-html="intercode"></code></pre>
  <h2>6. Done, you are ready</h2>
  <p>Be sure to contact us on the contact form provided for any suggestions on improvements or new components you would like to see.</p>
  <p>Thank you for using our free components, have fun and have a nice day.</p>
  <h2>Credits</h2>
  <p>Our thanks to everyone who has worked hard to help us create our free Alphine JS components: </p>
  <ul>
    <li><a href="https://alphinejs.dev">Alphine JS (MIT License)</a></li>
    <li><a href="https://tailwindcss.com">Tailwindcss (MIT License)</a></li>
    <li><a href="https://devdojo.com/pines">Pines UI (MIT License)</a></li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import menu from "~/menu";
import { ref, onMounted, watch } from 'vue'
import Prism from 'prismjs'
import 'prismjs/components/prism-markup'
import 'prismjs/themes/prism-tomorrow.css'

definePageMeta({
  layout: "docs",
});

const code = ref(`npm install @alphinejs/focus`)
const twcode = ref(`
    /** Tailwind Css **/
    @import "tailwindcss";

    /** Class Based Dark Mode **/
    @custom-variant dark (&:where(.dark, .dark *));

    /* Settings Root and Darkmode **/
    :root{
      --background:#fff;
    }

    .dark{
      --background: var(--color-zinc-900);
    }

    /* Theme Default */
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

    --color-primary-100: var(--color-teal-100);
    --color-primary-200: var(--color-teal-200);
    --color-primary-300: var(--color-teal-300);
    --color-primary-400: var(--color-teal-400);
    --color-primary-500: var(--color-teal-500);
    --color-primary-600: var(--color-teal-600);
    --color-primary-700: var(--color-teal-700);
    --color-primary-800: var(--color-teal-800);
    --color-primary-900: var(--color-teal-900);
    --color-primary-950: var(--color-teal-950);

    --color-elysia-50: #fcf3f9;
    --color-elysia-100: #fbe8f5;
    --color-elysia-200: #f9d1ec;
    --color-elysia-300: #f4a9d9;
    --color-elysia-400: #ed79c1;
    --color-elysia-500: #e351a7;
    --color-elysia-600: #d13187;
    --color-elysia-700: #b5216d;
    --color-elysia-800: #951f59;
    --color-elysia-900: #7d1e4d;
    --color-elysia-950: #4c0b2b;
    
    --font-display: "Inter",sans-serif;
    }`)

const impcode = ref(`
    import Alpine from "alpinejs";
    import focus from "@alpinejs/focus";


    window.Alpine = Alpine;

    Alpine.plugin(focus);
    Alpine.start();
`)

const htmlcode = ref(`
   /** Alphine Focus Plugins **/
   &lt;script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/focus@3.x.x/dist/cdn.min.js"&gt;&lt;/script&gt;
   /** Alphine Core Plugins **/
   &lt;script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"&gt;&lt;/script&gt;
`)

const intercode = ref(`
  /** Input Font Inter **/
  &lt;rel="preconnect" href="https://fonts.bunny.net"/&gt;
  &lt;href="https://fonts.bunny.net/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
  rel="stylesheet"/&gt;
`)
const codeBlock = ref(null)

onMounted(() => {
  Prism.highlightAll()
});

// re-highlight saat showCode diubah
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
  color: #f8f8f2; /* rounded bawah */
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