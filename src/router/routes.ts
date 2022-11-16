import type { RouteRecordRaw } from "vue-router"

const routes: readonly RouteRecordRaw[] = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: () => import("@/views/VHome.vue") },
  { path: "/lucky-draw", component: () => import("@/views/VLuckyDraw.vue") },
]

export default routes
