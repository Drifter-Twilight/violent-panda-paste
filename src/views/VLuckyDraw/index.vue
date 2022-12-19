<template>
  <v-main height="100vh">
    <el-row v-if="isBig">
      <el-col
        :span="24"
        class="relative overflow-hidden flex-center h-screen flex-wrap">
        <router-view></router-view>
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
import VScreenTip from "@/components/VscreenTip.vue"
import "element-plus/theme-chalk/display.css"

const { greater } = useBreakpoints(breakpointsTailwind)
let isBig = greater("sm")
</script>
