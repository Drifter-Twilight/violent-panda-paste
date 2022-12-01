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
        meta: { position: "right", title: "表单填写" },
      },
      {
        path: "file",
        name: "file",
        component: () => import("@/views/VLuckyDraw/views/LuckyFile.vue"),
        meta: { position: "left", title: "文件读取" },
      },
    ],
  },
  {
    path: "/random-roll-call",
    redirect: "/random-roll-call/file",
    component: () => import("@/views/VCallRoll/index.vue"),
    children: [
      {
        path: "file",
        component: () => import("@/views/VCallRoll/views/RollCallFile.vue"),
      },
    ],
  },
]

export default routes
