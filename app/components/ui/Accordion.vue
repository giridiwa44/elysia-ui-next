<template>
  <div
    x-data="{ openIndex: null }"
    class="w-full max-w-md mx-auto divide-y divide-gray-200 border rounded-xl shadow-sm bg-white dark:bg-gray-800"
  >
    <template x-for="(item, index) in items" :key="index">
      <div>
        <!-- Header -->
        <button
          @click="openIndex = openIndex === index ? null : index"
          class="flex justify-between w-full px-4 py-3 text-left font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition"
        >
          <span x-text="item.title"></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 transform transition-transform duration-200"
            :class="openIndex === index ? 'rotate-180' : 'rotate-0'"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <!-- Content -->
        <div
          x-show="openIndex === index"
          x-transition
          class="px-4 pb-4 text-sm text-gray-600 dark:text-gray-300"
        >
          <p x-text="item.content"></p>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
// Alpine.js harus di-load di global (biasanya lewat app.vue atau layout)
defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>
