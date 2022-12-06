<template>
  <v-main height="100vh">
    <el-row v-if="isBig">
      <el-col
        :span="24"
        class="relative flex items-center h-screen flex-wrap">
        <router-view #="{ Component, route }">
          <lucky-container
            v-if="route.meta.position"
            :title="`${route.meta.title}`">
            <template v-slot:[`${route.meta.position}`]>
              <lucky-img></lucky-img>
            </template>
            <component :is="Component"></component>
          </lucky-container>

          <component
            v-else
            :is="Component"></component>
        </router-view>
      </el-col>
    </el-row>

    <v-screen-tip
      v-else
      height="100vh" />
  </v-main>
</template>

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core"
import VMain from "@/components/VContainer/VMain.vue"
// import LuckyTarget from "./views/LuckyTarget.vue"
import LuckyContainer from "./components/LuckyContainer.vue"
import LuckyImg from "./components/LuckyImg.vue"
import VScreenTip from "@/components/VscreenTip.vue"
import "element-plus/theme-chalk/display.css"

const { greater } = useBreakpoints(breakpointsTailwind)
let isBig = greater("sm")
</script>
