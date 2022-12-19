<template>
  <el-row
    justify="center"
    align="middle"
    class="content-center overflow-hidden">
    <el-col
      :span="24"
      class="relative flex-center">
      <v-lottie
        lottie="file-read"
        class="file_lottie ratio-1 absolute left-1/2 top-1/2 z-0 w-full" />

      <div
        class="ratio-1 box flex-center flex-col z-10 w-1/2 h-1/2 rounded-full cursor-pointer"
        @click="readFile">
        <el-icon
          size="2.5rem"
          color="white"
          class="font-bold text-shadow-xl mb-5"
          ><Plus
        /></el-icon>
        <p class="text-xs">请选择{{ tip ? tip : "一份XLSX" }}文件</p>
      </div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { useFileSystemAccess } from "@vueuse/core"
import { Plus } from "@element-plus/icons-vue"
import VLottie from "@/components/VLottie.vue"
import { bus } from "@/eventBus/"

const fileReadProps = defineProps<{
  tip?: string
}>()

const res = useFileSystemAccess({
  dataType: "ArrayBuffer",
  types: [
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
  ],
  excludeAcceptAllOption: true,
})

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
  transform: translate(-50%, -50%);
  background-image: radial-gradient(
    50% 50%,
    #615da4b9 0 45%,
    transparent 50% 100%
  );
}

.file_tip {
  outline: #615da4 solid 2px;
  outline-offset: 3px;
}
</style>
