<template>
  <div v-html="html" class="rounded-lg overflow-hidden text-sm"></div>
</template>

<script setup lang="ts">
import { useShiki } from '../../composables/useShiki'

const props = defineProps<{
  code: string
  lang?: string
}>()

const { highlight } = await useShiki()
const html = highlight(props.code, props.lang)
</script>