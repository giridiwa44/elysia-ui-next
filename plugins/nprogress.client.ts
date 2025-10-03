import NProgress from "nprogress"
import "nprogress/nprogress.css"
import { defineNuxtPlugin } from "nuxt/app"
import { useRouter } from "vue-router"

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter()

  router.beforeEach(() => {
    NProgress.start()
  })

  router.afterEach(() => {
    NProgress.done()
  })
})