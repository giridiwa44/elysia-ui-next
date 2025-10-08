// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  pages: true,
  srcDir: 'app/',
  app:{
    head: {
      title: 'Elysia UI - Beautifully Component Made With Alphine JS and TailwindCss',
      htmlAttrs: {
        lang: 'en',
      }
    },

  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxt/fonts', 'nuxt-shiki'],
  shiki: {
    bundledThemes: ['github-dark', 'github-light'],
    defaultTheme: 'github-dark',
    defaultLang: 'bash',
  },
  css:['~/assets/css/main.css', './assets/css/nprogress.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ]
  },
  
})