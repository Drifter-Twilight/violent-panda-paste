<template>
  <lucky-img img-path="lucky-draw-file.jpg" />
  <lucky-container title="文件读取">
    <v-file-read
      tip="一份TXT或XLSX"
      class="h-92vh" />
  </lucky-container>

  <v-file-detail
    :radio-list="luckyFormPlayMethods"
    :to-target="luckyFormPlayMethods.redpacket" />
</template>

<script setup lang="ts">
import VFileRead from "@/components/VFile/FileRead.vue"
import LuckyContainer from "../components/LuckyContainer.vue"
import LuckyImg from "../components/LuckyImg.vue"
import VFileDetail from "@/components/VFile/FileDetail.vue"
import { luckyFormPlayMethods } from "@/constants/lucky-draw/"
</script>

<style scoped></style>
