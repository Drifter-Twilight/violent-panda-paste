<template>
  <el-main class="v_main">
    <slot></slot>
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
