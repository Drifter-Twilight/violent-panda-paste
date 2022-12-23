<template>
  <lucky-img img-path="lucky-draw-file.jpg" />
  <lucky-container title="文件读取">
    <v-file-read
      tip="一份TXT或XLSX"
      class="h-92vh" />
  </lucky-container>

  <v-file-detail
    :radio-list="luckyDrawModel"
    :callback="getLuckyData" />
</template>

<script setup lang="ts">
import LuckyContainer from "../components/LuckyContainer.vue"
import LuckyImg from "../components/LuckyImg.vue"
import VFileRead from "@/components/VFile/FileRead.vue"
import VFileDetail from "@/components/VFile/FileDetail.vue"
import { luckyDrawModel, luckyFormRadio } from "@/constants/lucky-draw/"
import { useLuckyStore } from "@/stores/luckyDraw/"
import { parseLuckyData } from "@/utils/parseData/paseLuckyData/"

const { setProType, setLuckyData } = useLuckyStore()
function getLuckyData(data: ArrayBuffer, fileMIME: string, theadLevel: number) {
  setProType(luckyFormRadio.DIVPRO)
  setLuckyData(new parseLuckyData(data, fileMIME).getData(theadLevel))
}
</script>

<style scoped></style>
