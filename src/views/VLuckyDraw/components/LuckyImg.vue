<template>
  <div
    class="absolute top-0 w-65vw h-screen transition-all z-10 shadow-2xl"
    :class="route.path == '/lucky-draw/form' ? 'right-0' : 'left-0'">
    <img
      :src="importImg(luckyImg)"
      class="object-cover transition-all object-center w-full h-full" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useRoute } from "vue-router"
import importImg from "@/utils/importImg"

const route = useRoute()
let luckyImg = computed(() => `lucky-draw-${String(route.name)}.jpg`)
</script>

<style scoped></style>
