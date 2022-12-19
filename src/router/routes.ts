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
        component: () => import("@/views/VLuckyDraw/views/LuckyForm.vue"),
      },
      {
        path: "file",
        component: () => import("@/views/VLuckyDraw/views/LuckyFile.vue"),
      },
      {
        path: "redpacket",
        component: () => import("@/views/VLuckyDraw/views/LuckyRedpacket.vue"),
        props: true,
      },
      {
        path: "turntable",
        component: () => import("@/views/VLuckyDraw/views/LuckyTurntable.vue"),
      },
    ],
  },
  {
    path: "/random-roll-call",
    redirect: "/random-roll-call/file",
    component: () => import("@/views/VRollCall/index.vue"),
    children: [
      {
        path: "file",
        component: () => import("@/views/VRollCall/views/RollCallFile.vue"),
      },
      {
        path: "roll-call",
        component: () => import("@/views/VRollCall/views/RollCall.vue"),
      },
    ],
  },
]

export default routes
