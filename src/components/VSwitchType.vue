<template>
  <el-button
    circle
    class="flex-center box vtag_container hover:shadow-lg transition-all">
    <slot></slot>
  </el-button>
</template>

<script setup lang="ts">
import { useStorage } from "@vueuse/core"

interface TagProps {
  width: string
  height: string
}
const tagProps = defineProps<TagProps>()

const isDark = useStorage("theme-mode", "auto")
</script>

<style scoped>
.vtag_container {
  width: v-bind("tagProps.width") !important;
  height: v-bind("tagProps.height") !important;
  background-color: var(--el-bg-color);
}
</style>
