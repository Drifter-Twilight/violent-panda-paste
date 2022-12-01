<template>
  <slot name="left"></slot>
  <el-scrollbar
    height="100vh"
    class="box w-[30vw]">
    <h1 class="flex-center box h-8vh text-xl font-bold">{{ title }}</h1>
    <slot></slot>
  </el-scrollbar>
  <slot name="right"></slot>
</template>

<script lang="ts" setup>
const luckyContainierProps = defineProps({
  title: String,
})
</script>
