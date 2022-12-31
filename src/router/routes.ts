import type { RouteRecordRaw } from "vue-router"

const routes: readonly RouteRecordRaw[] = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    meta: { title: "首页·暴力熊猫贴" },
    component: () => import("@/views/VHome.vue"),
  },
  {
    path: "/lucky-draw",
    redirect: "/lucky-draw/form",
    component: () => import("@/views/VLuckyDraw/index.vue"),
    children: [
      {
        path: "form",
        meta: { title: "表单填写·幸运时刻" },
        component: () => import("@/views/VLuckyDraw/views/LuckyForm.vue"),
      },
      {
        path: "file",
        meta: { title: "文件读取·幸运时刻" },
        component: () => import("@/views/VLuckyDraw/views/LuckyFile.vue"),
      },
      {
        path: "redpacket",
        meta: { title: "红包抽奖·幸运时刻" },
        component: () => import("@/views/VLuckyDraw/views/LuckyRedpacket.vue"),
      },
      {
        path: "turntable",
        meta: { title: "大转盘·幸运时刻" },
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
        meta: { title: "文件读取·随机点名" },
        component: () => import("@/views/VRollCall/views/RollCallFile.vue"),
      },
      {
        path: "roll-call",
        meta: { title: "默认点名·随机点名" },
        component: () => import("@/views/VRollCall/views/RollCall.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/VNotFound.vue"),
  },
]

export default routes
