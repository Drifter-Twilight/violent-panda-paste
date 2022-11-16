<template>
  <el-container
    direction="vertical"
    class="min-w-[375px]">
    <v-header />
    <el-main class="h-[calc(100vh-64px)] p-0">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import VHeader from "@/components/VHeader.vue"
</script>

<style scoped></style>
