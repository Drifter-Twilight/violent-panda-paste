<template>
  <v-main height="100vh">
    <el-row v-if="isBig">
      <el-col
        :span="24"
        class="relative flex items-center h-screen"
        :class="
          route.path == '/lucky-draw/form' ? 'justify-start' : 'justify-end'
        ">
        <router-view></router-view>
        <lucky-img />
        <lucky-switch />
      </el-col>
    </el-row>

    <v-screen-tip
      v-else
      height="100vh" />
  </v-main>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router"
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core"
import VMain from "@/components/VContainer/VMain.vue"
import LuckyImg from "./components/LuckyImg.vue"
import LuckySwitch from "./components/LuckySwitch.vue"
import VScreenTip from "@/components/VscreenTip.vue"
import "element-plus/theme-chalk/display.css"

const route = useRoute()
const { greater } = useBreakpoints(breakpointsTailwind)
let isBig = greater("sm")
</script>
