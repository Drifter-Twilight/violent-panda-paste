import { createRouter, createWebHashHistory } from "vue-router"
import routes from "./routes"

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.afterEach(to => {
  document.title = `${to.meta.title}`
})

export default router
