<template>
  <el-col
    :xs="22"
    :sm="18"
    :md="16"
    :lg="12"
    class="h-95vh">
    <h1 class="text-2xl font-bold text-center">随机点名</h1>

    <v-file-read class="h-90vh" />
    <v-file-detail
      :radio-list="rollCallModel"
      :to-target="rollCallModel.default" />
  </el-col>
</template>

<script setup lang="ts">
import VFileRead from "@/components/VFile/FileRead.vue"
import VFileDetail from "@/components/VFile/FileDetail.vue"
import { rollCallModel } from "@/constants/random-roll-call/"
// import VLottie from "@/components/VLottie.vue"
</script>

<style scoped></style>
