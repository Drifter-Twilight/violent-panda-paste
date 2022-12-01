<template>
  <v-file-read
    v-if="!hasData"
    desc="TXT或XLSX"
    class="h-92vh"
    @get-file-data="getFileData" />

  <v-file-detail
    v-else
    :fileInfo="file">
    <el-form-item
      label="玩法"
      prop="playMethods"
      :rules="{
        required: true,
        message: '请选择一种玩法',
        trigger: 'blur',
      }">
      <el-radio-group v-model="playMethods">
        <el-radio
          v-for="item in luckyFormPlayMethods"
          :key="item"
          :label="item" />
      </el-radio-group>
    </el-form-item>
  </v-file-detail>
</template>

<script setup lang="ts">
import VFileRead from "@/components/VFile/VFileRead.vue"
import VFileDetail from "@/components/VFile/VFileDetail.vue"
import { luckyFormPlayMethods } from "@/constants/lucky-draw/"
import type { LuckyFile } from "@/types/luckyDraw/luckyFile"

let hasData = $ref(false)
let playMethods = $ref(luckyFormPlayMethods.REDPACKET)

let file = $ref<LuckyFile.hasData>({
  fileName: "",
  data: new ArrayBuffer(0),
  fileSize: 0,
  fileMIME: "",
  lastModified: 0,
})

function getFileData(fileInfo: LuckyFile.hasData) {
  hasData = true
  file = fileInfo
}
</script>

<style scoped></style>
