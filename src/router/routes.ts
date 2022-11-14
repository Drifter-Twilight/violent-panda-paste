import type { RouteRecordRaw } from "vue-router"

const routes: readonly RouteRecordRaw[] = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: () => import("@/views/VHome.vue") },
]

export default routes
