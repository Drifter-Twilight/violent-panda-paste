<template>
  <div class="relative w-70vw h-screen z-10 shadow-2xl">
    <img
      :src="importImg(luckyImg)"
      class="object-cover transition-all object-center w-full h-full" />

    <div
      class="absolute flex box justify-between items-center left-1/2 top-1/2 h-10vw w-[95%] z-20 lucky_control">
      <v-switch-type
        height="6vw"
        width="6vw"
        @click="switchType('form')">
        <el-icon size="1.25rem"><EditPen /></el-icon>
      </v-switch-type>

      <v-switch-type
        height="6vw"
        width="6vw"
        @click="switchType('file')">
        <el-icon size="1.25rem"><Reading /></el-icon>
      </v-switch-type>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useRoute, useRouter } from "vue-router"
import { EditPen, Reading } from "@element-plus/icons-vue"
import VSwitchType from "@/components/VSwitchType.vue"
import importImg from "@/utils/importImg"

const route = useRoute()
let luckyImg = computed(() => `lucky-draw-${String(route.name)}.jpg`)

const router = useRouter()
function switchType(type: string) {
  router.push(type)
}
</script>

<style scoped>
.lucky_control {
  transform: translate(-50%, -50%);
}
</style>
