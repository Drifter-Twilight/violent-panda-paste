<template>
  <el-container
    direction="vertical"
    class="min-w-[375px]">
    <router-view></router-view>
  </el-container>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, watchEffect, type WatchStopHandle } from "vue"
import { storeToRefs } from "pinia"
import { useThemeStore } from "@/stores/themeStore/"

let themeStore = storeToRefs(useThemeStore())
let unwatch: WatchStopHandle
onMounted(() => {
  unwatch = watchEffect(() => {
    if (themeStore.darkMode.value == false) {
      document.documentElement.className = "auto"
    } else {
      document.documentElement.className = "dark"
    }
  })
})

onUnmounted(() => {
  unwatch()
})
</script>

<style scoped>
:deep(.el-input__inner) {
  background-color: transparent;
  font-size: smaller;
  padding-left: 0;
  padding-right: 0;
}

:deep(.el-input__inner:focus) {
  box-shadow: none;
}
</style>
