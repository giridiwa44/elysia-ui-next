<template>
<div class="relative inline-block text-left">
    <!-- Trigger -->
    <button
      @click="open = !open"
      class="flex items-center px-3 py-2 text-secondary-900 dark:text-secondary-100 rounded-md cursor-pointer"
    >
      <component :is="currentIcon" class="w-5 h-5" stroke-width="1" />
    </button>

    <!-- Dropdown -->
    <div
      v-if="open"
      class="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
    >
      <ul class="py-1">
        <li>
          <button
            @click="setTheme('light')"
            class="flex items-center w-full px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Sun class="w-4 h-4 mr-2" stroke-width="1" /> Light
          </button>
        </li>
        <li>
          <button
            @click="setTheme('dark')"
            class="flex items-center w-full px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Moon class="w-4 h-4 mr-2" stroke-width="1" /> Dark
          </button>
        </li>
        <li>
          <button
            @click="setTheme('system')"
            class="flex items-center w-full px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Monitor class="w-4 h-4 mr-2" stroke-width="1" /> System
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";
import { Sun, Moon, Monitor } from "lucide-vue-next";

const open = ref(false);

// default dulu "system", nanti di onMounted di-replace dari localStorage
const theme = ref("system");

// computed icon
const currentIcon = computed(() => {
  if (theme.value === "light") return Sun;
  if (theme.value === "dark") return Moon;
  return Monitor;
});

// fungsi apply theme ke document
const applyTheme = () => {
  const root = document.documentElement;

  if (theme.value === "system") {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.classList.toggle("dark", prefersDark);
  } else {
    root.classList.toggle("dark", theme.value === "dark");
  }
};

// set theme dari pilihan user
const setTheme = (mode) => {
  theme.value = mode;
  if (process.client) {
    localStorage.setItem("theme", mode);
  }
  applyTheme();
  open.value = false;
};

// hanya jalan di browser
onMounted(() => {
  // ambil value dari localStorage kalau ada
  if (process.client) {
    const saved = localStorage.getItem("theme");
    if (saved) theme.value = saved;
  }

  applyTheme();

  // listen kalau system theme berubah
  if (process.client) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
      if (theme.value === "system") applyTheme();
    });
  }
});
</script>
