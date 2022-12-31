<template>
  <el-row
    justify="center"
    align="middle"
    class="content-center overflow-hidden">
    <Suspense>
      <template #fallback>
        <el-col
          :span="24"
          class="ratio-1 flex-center">
          <el-icon
            size="3rem"
            color="#615da4"
            class="is-loading"
            ><Loading
          /></el-icon>
        </el-col>
      </template>

      <el-col
        :span="24"
        class="relative flex-center ratio-1">
        <v-lottie
          lottie="file-read"
          class="file_lottie z-0 w-full" />

        <div
          class="ratio-1 box flex-center translate-half absolute left-1/2 top-1/2 z-10 w-1/2 h-1/2 rounded-full cursor-pointer"
          @click="readFile">
          <el-icon
            size="2.5rem"
            color="white"
            class="font-bold text-shadow-xl"
            ><Plus
          /></el-icon>
        </div>
      </el-col>
    </Suspense>

    <el-col :span="20">
      <p
        class="file_read-tip rounded-full p-2 md:p-3 text-center sm:text-xs md:text-sm text-white">
        TIP： 请选择{{ tip ? tip : "一份XLSX" }}文件
      </p>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { defineAsyncComponent, Suspense } from "vue"
import { Plus, Loading } from "@element-plus/icons-vue"
import { useReadFile } from "@/hooks/useReadFile/"
import { bus } from "@/eventBus/"
const VLottie = defineAsyncComponent(() => import("@/components/VLottie.vue"))

const fileReadProps = defineProps<{
  tip?: string
  typesList: File.typesOption
}>()

const res = useReadFile(fileReadProps.typesList)
async function readFile() {
  await res.open()
  if (res.data.value) {
    bus.emit("getFileDetail", {
      showDrawer: true,
      fileInfo: {
        fileName: res.fileName.value,
        data: res.data.value,
        fileSize: res.fileSize.value,
        fileMIME: res.fileMIME.value,
        lastModified: res.fileLastModified.value,
      },
    })
  }
}
</script>

<style scoped>
.ratio-1 {
  aspect-ratio: 1 / 1;
}

.file_lottie {
  background-image: radial-gradient(
    50% 50%,
    #615da4b9 0 45%,
    transparent 50% 100%
  );
}

.file_read-tip {
  background-color: var(--el-color-primary);
  outline: var(--el-color-primary) solid 2px;
  outline-offset: 3px;
}
</style>
