import type { RouteRecordRaw } from "vue-router"

const routes: readonly RouteRecordRaw[] = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: () => import("@/views/VHome.vue") },
  {
    path: "/lucky-draw",
    redirect: "/lucky-draw/form",
    component: () => import("@/views/VLuckyDraw/index.vue"),
    children: [
      {
        path: "form",
        name: "form",
        component: () => import("@/views/VLuckyDraw/views/LuckyForm.vue"),
      },
      {
        path: "file",
        name: "file",
        component: () => import("@/views/VLuckyDraw/views/LuckyFile.vue"),
      },
    ],
  },
]

export default routes
