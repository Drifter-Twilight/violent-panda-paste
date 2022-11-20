<template>
  <lucky-type title="文件读取">
    <el-form
      label-position="top"
      class="box overflow-auto h-92vh p-5">
      <el-form-item label="文件类型">
        <el-radio-group
          v-model="luckyFileForm.fileType"
          @change="selectFileType"
          size="large">
          <el-radio
            v-for="item in luckyFile"
            :key="item"
            :label="item" />
        </el-radio-group>
      </el-form-item>

      <el-form-item label="选择文件">
        <div
          class="upload flex-center transition-all w-full h-[20vh] rounded cursor-pointer">
          <el-icon size="30px"><Plus /></el-icon>
        </div>
      </el-form-item>

      <el-form-item label="配置">
        <el-col :span="24">
          <el-form-item label="表头级数">
            <el-input-number
              v-model="luckyFileForm.numIpt"
              :step="1"
              :min="0" />
          </el-form-item>
        </el-col>
      </el-form-item>

      <el-form-item label="结果预览">
        <el-col
          :span="24"
          class="preview box flex justify-between items-center rounded p-2 cursor-pointer">
          <p class="w-[80%] overflow-hidden">文件名</p>
          <p class="w-[20%]">预览→</p>
        </el-col>
      </el-form-item>

      <el-button
        type="primary"
        round
        size="large"
        class="w-full mt-2"
        >提交</el-button
      >
    </el-form>
  </lucky-type>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import { Plus } from "@element-plus/icons-vue"
import LuckyType from "../components/LuckyType.vue"
import { luckyFile } from "@/constants/lucky-draw"

let luckyFileForm = reactive({
  fileType: luckyFile.TXT,
  numIpt: 1,
})

function selectFileType(target: luckyFile) {
  luckyFileForm.fileType = target
}
</script>

<style scoped>
.upload {
  color: var(--el-text-color-secondary);
  border: 1.5px dashed var(--el-border-color-darker);
}

.upload:hover {
  color: var(--el-color-primary);
  border: 1.5px dashed var(--el-color-primary);
}

.preview {
  border: 1px solid var(--el-border-color-darker);
}
</style>
