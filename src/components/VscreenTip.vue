<template>
  <el-row>
    <el-col
      :span="24"
      class="screen_tip flex justify-evenly items-center flex-col h-screen">
      <img
        src="@/assets/images/unvisible.svg"
        alt="unvisible"
        class="w-1/2" />
      <p>该模块不支持当前屏幕尺寸，将于{{ closeTime }}秒后返回</p>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue"
import { useRouter } from "vue-router"

const screenTipProps = defineProps({
  height: String,
})

const router = useRouter()
let closeTime = $ref(5)
let interval: NodeJS.Timer
let timeout: NodeJS.Timeout
onMounted(() => {
  interval = setInterval(() => {
    closeTime--
  }, 1000)
  timeout = setTimeout(() => {
    router.back()
  }, 5000)
})

onUnmounted(() => {
  clearInterval(interval)
  clearTimeout(timeout)
})
</script>

<style scoped>
.screen_tip {
  height: v-bind("screenTipProps.height");
}
</style>
