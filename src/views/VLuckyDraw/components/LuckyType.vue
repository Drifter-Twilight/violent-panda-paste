<template>
  <el-scrollbar
    height="100vh"
    class="box w-[35vw]">
    <h1 class="flex-center box h-8vh text-xl font-bold">{{ title }}</h1>
    <slot></slot>
  </el-scrollbar>
</template>

<script lang="ts" setup>
const luckyTypeProps = defineProps({
  title: String,
})
</script>
