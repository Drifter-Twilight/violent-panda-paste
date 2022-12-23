<template>
  <el-scrollbar
    height="100vh"
    class="box w-[35vw]">
    <h1 class="lucky_containier-title flex-center box h-8vh text-xl font-bold">
      - {{ title }} -
    </h1>
    <slot></slot>
  </el-scrollbar>
</template>

<script lang="ts" setup>
const luckyContainierProps = defineProps<{
  title: string
}>()
</script>

<style scoped>
.lucky_containier-title {
  color: var(--el-color-primary);
}
</style>
