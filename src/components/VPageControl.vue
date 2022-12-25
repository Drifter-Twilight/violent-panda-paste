<template>
  <div
    class="absolute left-1/2 top-1/2 translate-half flex justify-between items-center h-12vh w-full z-10"
    :class="{ 'pl-3 pr-3': active }">
    <el-tooltip
      :content="leftTip ? leftTip : '空'"
      placement="top">
      <v-switch-button
        size="12vh"
        :disabled="!leftTip"
        @click="leftPath && changeModel(leftPath)"
        :class="{ '-translate-x-half': !active }">
        <el-icon><ArrowLeftBold /></el-icon>
      </v-switch-button>
    </el-tooltip>

    <el-tooltip
      :content="rightTip ? rightTip : '空'"
      placement="top">
      <v-switch-button
        size="12vh"
        :disabled="!rightTip"
        @click="rightPath && changeModel(rightPath)"
        :class="{ 'translate-x-half': !active }">
        <el-icon><ArrowRightBold /></el-icon>
      </v-switch-button>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useRouter } from "vue-router"
import { useMouse, useWindowSize } from "@vueuse/core"
import VSwitchButton from "./VSwitchButton.vue"
import { ArrowLeftBold, ArrowRightBold } from "@element-plus/icons-vue"

const pageControlProps = defineProps<{
  leftTip?: string
  rightTip?: string
  leftPath?: string
  rightPath?: string
}>()

const mouse = useMouse()
const { width } = useWindowSize()

let active = computed(() =>
  mouse.x.value <= 100 || mouse.x.value >= width.value - 100 ? true : false
)

const router = useRouter()
function changeModel(targetPath: string) {
  router.push(targetPath)
}
</script>

<style scoped></style>
