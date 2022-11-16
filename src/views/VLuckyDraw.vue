<template>
  <div class="relative w-full h-[calc(100vh-64px)]">
    <div
      class="flex justify-between items-center absolute left-0 top-0 w-screen h-[calc(100vh-64px)] -z-1">
      <div class="w-[25vw] h-[calc(100vh-64px)]">表单填写</div>
      <div class="w-[25vw] h-[calc(100vh-64px)]">文件上传</div>
    </div>

    <div
      class="hidden-xs-only absolute top-0 w-[75vw] h-[calc(100vh-64px)] transition-all z-10 shadow-2xl"
      :class="[
        lucky['lucky_col-img'],
        { 'left-0': type == FILE },
        { 'right-0': type == FORM },
      ]">
      <img
        :src="importImg(getImg)"
        :alt="type"
        class="object-cover transition-all object-center w-full h-full" />
    </div>

    <div
      class="absolute flex box justify-between items-center top-1/2 h-10vw w-[71.5vw] z-20"
      :class="[
        lucky['lucky_control'],
        { 'left-0 pl-5': type == FILE },
        { 'right-0 pr-5': type == FORM },
      ]">
      <v-tag
        :height="type == FORM ? '8vw' : '6vw'"
        :width="type == FORM ? '8vw' : '6vw'"
        @click="toForm">
        <el-icon size="1.25rem"><EditPen /></el-icon>
      </v-tag>
      <v-tag
        :height="type == FORM ? '6vw' : '8vw'"
        :width="type == FORM ? '6vw' : '8vw'"
        @click="toUpload">
        <el-icon size="1.25rem"><Reading /></el-icon>
      </v-tag>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { EditPen, Reading } from "@element-plus/icons-vue"
import { getDataType } from "@/constants/lucky-draw"
import importImg from "@/utils/importImg"
import VTag from "@/components/VTag.vue"
import "element-plus/theme-chalk/display.css"

const { FORM, FILE } = getDataType

let type = $ref(FORM)
const getImg = computed(() => `${type == FORM ? "form" : "file"}.jpg`)
function toForm() {
  type = FORM
}

function toUpload() {
  type = FILE
}
</script>

<style scoped module="lucky">
.lucky_col-img {
  clip-path: polygon(
    0 0,
    100% 0,
    v-bind("type == FORM ? '100%' : '80%'") 100%,
    v-bind("type == FORM ? '20%' : 0") 100%
  );
}

.lucky_control {
  transform: translateY(-50%);
}
</style>
