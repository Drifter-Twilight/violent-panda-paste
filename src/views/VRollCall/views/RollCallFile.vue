<template>
  <el-col
    :xs="22"
    :sm="12"
    :md="10"
    :lg="8"
    :xl="10"
    class="h-95vh">
    <h1
      class="relative rollcall-title text-3xl 2xl:text-4xl font-bold text-center">
      随机点名
    </h1>

    <v-file-read
      :types-list="rollCallTypes"
      class="h-90vh" />
    <v-file-detail
      :radio-list="rollCallModel"
      :callback="getRollCallData" />
  </el-col>

  <v-format
    :example-list="['rollcall-xlsx-example']"
    class="!absolute right-5 bottom-32" />
</template>

<script setup lang="ts">
import VFileRead from "@/components/VFile/FileRead.vue"
import VFileDetail from "@/components/VFile/FileDetail.vue"
import VFormat from "@/components/VFormat.vue"
import { usePageDataStore } from "@/stores/usePageDataStore"
import { parseRollCallData } from "@/utils/parseData/parseRollCallData/"
import { rollCallModel } from "@/constants/randomRollCall/"

const rollCallTypes = $ref<File.typesOption>([
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
function getRollCallData(
  data: ArrayBuffer,
  fileMIME: string,
  theadLevel: number
) {
  setPageData({
    rollCall: new parseRollCallData(data).getXlsxData(theadLevel),
  })
}
</script>

<style scoped>
.rollcall-title::after {
  z-index: -1;
  position: absolute;
  content: "";
  width: 40%;
  height: 100%;
  background-color: var(--el-color-primary);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  opacity: 0.7;
}
</style>
