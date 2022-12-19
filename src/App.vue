<template>
  <el-container
    direction="vertical"
    class="min-w-[375px]">
    <router-view></router-view>
  </el-container>
</template>

<script setup lang="ts">
import { onMounted } from "vue"
import { useStorage } from "@vueuse/core"

onMounted(() => {
  let theme = useStorage("theme-mode", "auto")
  if (theme.value == "auto") {
    document.documentElement.className = "auto"
  } else {
    document.documentElement.className = "dark"
  }
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
