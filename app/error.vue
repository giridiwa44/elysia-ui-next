<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6"
  >
    <div class="max-w-lg w-full text-center">
      <template v-if="props.error?.statusCode === 404">
        <!-- SVG Ilustrasi -->
        <svg
          class="mx-auto w-40 h-40 mb-6 text-gray-400 dark:text-gray-600"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <h1 class="text-7xl font-extrabold mb-4">404</h1>
        <h2 class="text-2xl font-semibold mb-2">Halaman tidak ditemukan</h2>
        <p class="mb-6 text-gray-600 dark:text-gray-300">
          Sepertinya link yang kamu cari sudah dipindah atau tidak tersedia
          lagi.
        </p>

        <!-- Search Bar -->
        <form @submit.prevent="goSearch" class="flex items-center gap-2 mb-6">
          <input
            v-model="query"
            type="text"
            placeholder="Cari halaman..."
            class="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-search-icon lucide-search"
            >
              <path d="m21 21-4.34-4.34" />
              <circle cx="11" cy="11" r="8" />
            </svg>
          </button>
        </form>

        <!-- Tombol -->
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-2 px-5 py-2 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          ⬅ Kembali ke Beranda
        </NuxtLink>
      </template>

      <template v-else>
        <h1 class="text-5xl font-bold mb-4">Terjadi Kesalahan</h1>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
          {{ props.error?.statusCode || "" }} —
          {{ props.error?.message || "Something went wrong." }}
        </p>
        <NuxtLink
          to="/"
          class="inline-block px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Kembali ke Beranda
        </NuxtLink>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps<{
  error?: { statusCode?: number; message?: string };
}>();

const query = ref("");
const router = useRouter();

function goSearch() {
  if (query.value.trim()) {
    router.push(`/search?q=${encodeURIComponent(query.value)}`);
  }
}
</script>
