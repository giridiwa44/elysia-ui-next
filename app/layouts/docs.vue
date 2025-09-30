<template>
 <div class="flex min-h-screen flex-col">
    <!-- Navbar tetap ada -->
    <Navbar />

    <div class="flex flex-1">
      <!-- Konten docs -->
      <main class="grow bg-white dark:bg-secondary-900 pt-[4.5rem]">
        <slot />
      </main>
    </div>
  </div>
</template>
<script setup >
import Navbar from 'import Navbar from '~/components/base/Navbar.vue'

</script>