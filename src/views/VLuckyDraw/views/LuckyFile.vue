<template>
  <div class="relative flex-center w-full h-screen">
    <lucky-img img-path="lucky-draw-file.jpg" />
    <lucky-container title="文件读取">
      <v-file-read
        tip="一份TXT或XLSX"
        :types-list="typesOption"
        class="h-92vh" />
    </lucky-container>

    <v-file-detail
      :radio-list="luckyDrawModel"
      :callback="getLuckyData" />

    <v-format
      class="!absolute right-3 bottom-28 xl:bottom-40"
      :example-list="['lucky-txt-example', 'lucky-xlsx-example']" />
  </div>
</template>

<script setup lang="ts">
import LuckyContainer from "../components/LuckyContainer.vue"
import LuckyImg from "../components/LuckyImg.vue"
import VFileRead from "@/components/VFile/FileRead.vue"
import VFileDetail from "@/components/VFile/FileDetail.vue"
import VFormat from "@/components/VFormat.vue"
import { usePageDataStore } from "@/stores/usePageDataStore"
import { parseLuckyData } from "@/utils/parseData/paseLuckyData/"
import { luckyDrawModel, luckyFormRadio } from "@/constants/luckyDraw/"

const typesOption = $ref<File.typesOption>([
  {
    description: "text",
    accept: {
      "text/plain": [".txt"],
    },
  },
  {
    description: "xlsx",
    accept: {
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
    },
  },
])

const { setPageData } = usePageDataStore()
function getLuckyData(data: ArrayBuffer, fileMIME: string, theadLevel: number) {
  setPageData({
    luckyDraw: {
      proType: luckyFormRadio.DIYPRO,
      data: new parseLuckyData(data, fileMIME).getData(theadLevel),
    },
  })
}
</script>

<style scoped></style>
