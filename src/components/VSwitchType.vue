<template>
  <el-button
    circle
    class="flex-center box vtag_container hover:shadow-lg transition-all">
    <slot></slot>
  </el-button>
</template>

<script setup lang="ts">
interface TagProps {
  size: string
}
const tagProps = defineProps<TagProps>()
</script>

<style scoped>
.vtag_container {
  width: v-bind("tagProps.size") !important;
  height: v-bind("tagProps.size") !important;
  background-color: var(--el-bg-color);
}
</style>
