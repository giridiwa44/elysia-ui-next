import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  if (!window.Alpine) {
    Alpine.plugin(collapse)
    window.Alpine = Alpine
    Alpine.start()
  }

})