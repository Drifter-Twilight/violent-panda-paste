<template>
  <v-switch-button
    size="3.5rem"
    @click="showFormat = true"
    v-bind="$attrs"
    class="!whitespace-pre-line"
    >文件格式预览</v-switch-button
  >

  <el-dialog
    v-model="showFormat"
    title="文件格式预览"
    align-center
    append-to-body
    :width="isLargeScreen ? '50%' : '85%'">
    <el-carousel
      :autoplay="false"
      :height="isLargeScreen ? '50vh' : isLargeScreen ? '30vh' : '23vh'">
      <el-carousel-item
        v-for="item in exampleList"
        :key="item"
        class="!flex justify-center items-start">
        <img
          :src="importImg(`example/${item}.png`)"
          class="object-center object-contain w-full" />
      </el-carousel-item>
    </el-carousel>
    <div class="flex justify-start items-center">
      <el-icon
        size="1rem"
        color="#E6A23C"
        ><Warning
      /></el-icon>
      <div class="waring-tip text-xs ml-2 space-y-1">
        <p>1、请注意文件内容保持与上述格式一致，否则会显示奇怪的效果。</p>
        <p>2、不同的模块只会匹配其需要的字段，其他字段将会被忽略。</p>
        <p>3、选择XLSX文件时，请注意填写相应的表头级数哦。</p>
      </div>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core"
import { Warning } from "@element-plus/icons-vue"
import VSwitchButton from "./VSwitchButton.vue"
import importImg from "@/utils/importImg"

const formatProps = defineProps<{
  exampleList: string[]
}>()

let showFormat = $ref(false)
let isLargeScreen = useMediaQuery("(min-width: 992px)")
let isSmallScreen = useMediaQuery("(min-width: 640px)")
</script>

<style scoped>
.waring-tip {
  transform: scale(0.8);
  transform-origin: 0 50%;
}
</style>
