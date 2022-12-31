<template>
  <el-button
    circle
    :disabled="disabled"
    class="flex-center box relative vtag_container shadow-lg transition-all"
    :class="{ 'btn-active': active }">
    <slot></slot>
  </el-button>
</template>

<script setup lang="ts">
const tagProps = defineProps<{
  size: string
  active?: boolean
  disabled?: boolean
}>()
</script>

<style scoped>
.vtag_container {
  width: v-bind("tagProps.size") !important;
  height: v-bind("tagProps.size") !important;
  background-color: var(--el-bg-color);
}

.btn-active::after {
  z-index: -1;
  position: absolute;
  content: "";
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(1);
  width: 50%;
  height: 50%;
  border-radius: 50%;
  background-color: var(--el-color-primary);
  opacity: 0.7;
  animation: scale-circle 1.5s linear infinite;
}

@keyframes scale-circle {
  to {
    transform: translate(-50%, -50%) scale(3);
    opacity: 0;
  }
}
</style>
