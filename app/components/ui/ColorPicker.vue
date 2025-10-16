<template>
<client-only>
  <div v-pre x-data="{ color: '#14b8a6' }" class="relative w-full">
    <label class="block text-sm font-medium text-gray-700 mb-2 dark:text-secondary-200">Pilih Warna</label>

    <div
      class="flex items-center gap-3 border border-gray-300 rounded-lg px-3 py-2 
             hover:border-elysia-300 transition cursor-pointer bg-white w-full dark:bg-secondary-900 dark:border-secondary-700 dark:text-white"
    >

      <!-- Input color bawaan browser -->
      <input
        type="color"
        x-model="color"
        class="appearance-none bg-transparent border-none p-0 w-6 h-6 cursor-pointer"
      />

      <!-- Input teks HEX -->
      <input
        type="text"
        x-model="color"
        id="inputWarna"
        class="flex-1 border-none focus:ring-0 text-gray-700 dark:text-secondary-200 bg-transparent 
               focus:outline-none w-full"
      />
    </div>

    <!-- Preview -->
    <p class="text-sm text-gray-500 mt-2">
      Color Choose : <span x-text="color" class="font-display"></span>
    </p>
  </div>
</client-only>


</template>
<script setup>

</script>
