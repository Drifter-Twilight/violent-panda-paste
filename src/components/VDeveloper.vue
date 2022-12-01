<template>
  <v-main>
    <el-row>
      <el-col
        :span="24"
        class="flex justify-evenly items-center flex-col h-screen">
        <img
          src="@/assets/images/developer.svg"
          alt="developer"
          class="h-1/2" />
        <p>该模块正在开发中...</p>
      </el-col>
    </el-row>
  </v-main>
</template>

<script setup lang="ts">
import VMain from "./VContainer/VMain.vue"
</script>

<style scoped></style>
