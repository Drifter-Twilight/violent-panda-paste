<template>
  <el-main class="v_main">
    <el-scrollbar :height="height">
      <slot></slot>
    </el-scrollbar>
  </el-main>
</template>

<script setup lang="ts">
const mainProps = defineProps({
  height: String,
})
</script>

<style scoped>
.v_main {
  height: v-bind("mainProps.height");
  padding: 0;
}
</style>
