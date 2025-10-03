<template>
  <div>
    <!-- Trigger Button -->
    <button
      @click="open = true"
      class="px-2 py-1 bg-white border border-secondary-500/20 rounded-lg hover:border-elysia-primary flex items-center cursor-pointer dark:bg-secondary-700/50 dark:text-white"
    >
      <span class="mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-search-icon lucide-search w-4 h-4"
        >
          <path d="m21 21-4.34-4.34" />
          <circle cx="11" cy="11" r="8" />
        </svg>
      </span>
      <span class="text-secondary-900/20 dark:text-white font-display"
        >Quick Search ...</span
      >
      <kbd class="ml-2 text-sm">CTRL+K</kbd>
    </button>

    <!-- Modal -->
    <Teleport to="body">
      <div
        v-if="open"
        class="fixed inset-0 bg-secondary-800/50 flex items-start justify-center z-50 p-4"
      >
        <div
          class="bg-white dark:bg-gray-700 w-full max-w-xl rounded-lg shadow-lg overflow-hidden"
        >
          <!-- Input -->
          <div class="relative font-display">
            <span
              class="absolute inset-y-0 left-3 flex items-center text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.34-4.34" />
              </svg>
            </span>
            <input
              v-model="query"
              type="text"
              placeholder="Search Component ..."
              class="w-full pl-10 pr-4 py-3 border-b border-gray-200 dark:border-gray-700 outline-none bg-transparent dark:text-white"
            />
          </div>

          <!-- Hasil Pencarian -->
          <div
            v-if="query && Object.keys(groupedResults).length"
            class="max-h-72 overflow-y-auto"
            ref="resultsContainer"
          >
            <div v-for="(group, category) in groupedResults" :key="category">
              <!-- Header Kategori -->
              <div
                class="px-4 py-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800"
              >
                {{ category }}
              </div>
              <!-- Item -->
              <ul>
                <li v-for="(item, idx) in group" :key="item.url">
                  <NuxtLink
                    :to="item.url"
                    ref="resultItems"
                    class="flex items-center gap-3 px-4 py-2"
                    :class="{
                      'bg-gray-200 dark:bg-gray-600':
                        flatResults[selectedIndex] === item,
                      'hover:bg-gray-100 dark:hover:bg-gray-800': true,
                      'text-gray-700 dark:text-white': true,
                    }"
                  >
                    <component :is="item.icon" class="w-4 h-4" />
                    <span>{{ item.title }}</span>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>

          <!-- Pesan jika tidak ada hasil -->
          <div
            v-else-if="query"
            class="px-4 py-6 text-center text-gray-500 dark:text-gray-400"
          >
            Tidak ada hasil untuk "<strong>{{ query }}</strong
            >"
          </div>

          <!-- Footer -->
          <div
            class="flex justify-between items-center px-4 py-3 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800"
          >
            <span
              >Press <kbd class="px-1 py-0.5 border rounded">ESC</kbd> to
              close</span
            >
            <span
              >Use <kbd class="px-1 py-0.5 border rounded">↑</kbd> /
              <kbd class="px-1 py-0.5 border rounded">↓</kbd></span
            >
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import {
  ref,
  computed,
  onMounted,
  onBeforeUnmount,
  watch,
  nextTick,
} from "vue";
import { useRouter } from "vue-router";
import { Book, FileText } from "lucide-vue-next";

const router = useRouter();

const open = ref(false);
const query = ref("");
const selectedIndex = ref(-1);

const resultsContainer = ref(null);
const resultItems = ref([]);

// Data (pastikan url selalu diawali "/")
const items = [
  {
    title: "Introduction",
    url: "/docs/introduction",
    category: "Docs",
    icon: FileText,
  },
  {
    title: "Get Started",
    url: "/docs/getting-started",
    category: "Docs",
    icon: Book,
  },
];

const groupedResults = computed(() => {
  const result = {};
  items
    .filter((item) =>
      item.title.toLocaleLowerCase().includes(query.value.toLowerCase())
    )
    .forEach((item) => {
      if (!result[item.category]) result[item.category] = [];
      result[item.category].push(item);
    });
  return result;
});

// Flatten hasil pencarian untuk index navigasi
const flatResults = computed(() => Object.values(groupedResults.value).flat());

// Auto scroll ke item aktif
watch(selectedIndex, async (newIndex) => {
  await nextTick();
  const el = resultItems.value[newIndex];
  if (el && resultsContainer.value) {
    el.scrollIntoView({ block: "nearest" });
  }
});

// Keyboard Shortcuts
const handleKeydown = (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    open.value = !open.value;
    selectedIndex.value = -1;
  }

  if (e.key === "Escape") {
    open.value = false;
    selectedIndex.value = -1;
  }

  if (open.value && flatResults.value.length > 0) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      selectedIndex.value =
        (selectedIndex.value + 1) % flatResults.value.length;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      selectedIndex.value =
        (selectedIndex.value - 1 + flatResults.value.length) %
        flatResults.value.length;
    }
    if (e.key === "Enter" && selectedIndex.value >= 0) {
      e.preventDefault();
      router.push(flatResults.value[selectedIndex.value].url);
      open.value = false;
      selectedIndex.value = -1;
    }
  }
};

onMounted(() => window.addEventListener("keydown", handleKeydown));
onBeforeUnmount(() => window.removeEventListener("keydown", handleKeydown));
</script>
