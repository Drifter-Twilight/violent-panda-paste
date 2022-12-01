<template>
  <el-row class="pl-5 pr-5 content-start">
    <el-col :span="24">
      <el-descriptions
        title="文件信息"
        :column="1"
        border>
        <el-descriptions-item>
          <template #label>
            <div class="flex-center">文件名</div>
          </template>
          {{ fileInfo.fileName }}
        </el-descriptions-item>

        <el-descriptions-item>
          <template #label>
            <div class="flex-center">文件大小</div>
          </template>
          {{ fileInfo.fileSize }}
        </el-descriptions-item>

        <el-descriptions-item>
          <template #label>
            <div class="flex-center">MIME类型</div>
          </template>
          {{ fileInfo.fileMIME }}
        </el-descriptions-item>

        <el-descriptions-item label="文件最后修改时间">
          <template #label>
            <div class="flex-center">最新修改时间</div>
          </template>
          {{ fileInfo.lastModified }}
        </el-descriptions-item>
      </el-descriptions>
    </el-col>

    <el-form
      :model="fileForm"
      label-position="top"
      class="mt-3 w-full">
      <el-form-item
        prop="theadLevel"
        label="表头级数">
        <el-input-number
          v-model="fileForm.theadLevel"
          :min="0" />
      </el-form-item>

      <slot></slot>

      <el-form-item label="数据预览">
        <el-col :span="24">
          <el-card
            shadow="always"
            class="flex-center cursor-pointer"
            >点击预览数据</el-card
          >
        </el-col>
      </el-form-item>

      <el-form-item>
        <el-col
          :span="24"
          class="flex justify-evenly items-center">
          <el-button
            type="primary"
            size="large"
            round
            >确定数据</el-button
          >
          <el-button
            size="large"
            round
            >重新上传</el-button
          >
        </el-col>
      </el-form-item>
    </el-form>
  </el-row>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import type { LuckyFile } from "@/types/luckyDraw/luckyFile"

interface FileDetailProps {
  fileInfo: LuckyFile.hasData
}

const fileDetailProps = defineProps<FileDetailProps>()

const fileForm = reactive({
  theadLevel: 1,
})
</script>

<style scoped></style>
