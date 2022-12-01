<template>
  <el-row
    justify="center"
    align="middle"
    class="content-center">
    <el-col
      :span="24"
      class="ratio-1 relative flex-center">
      <v-lottie
        lottie="file-read"
        class="file_lottie ratio-1 absolute left-1/2 top-1/2 z-0 w-full" />

      <div
        class="box flex-center flex-col z-10 w-1/2 h-1/2 rounded-full cursor-pointer"
        @click="readFile">
        <el-icon
          size="2rem"
          color="white"
          class="font-bold text-shadow-xl"
          ><Document
        /></el-icon>
      </div>
    </el-col>

    <el-col
      :span="20"
      class="file_tip rounded-full p-3 outline bg-[#615da4]">
      <p class="text-center text-sm tracking-widest text-white">
        Tips: 请上传一份{{ desc }}文件
      </p>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { useFileSystemAccess } from "@vueuse/core"
import { Document } from "@element-plus/icons-vue"
import VLottie from "@/components/VLottie.vue"

const fileProps = defineProps({
  desc: String,
})
const fileEmits = defineEmits(["getFileData"])

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
        "application/vnd.ms-excel": [".xlsx"],
      },
    },
  ],
  excludeAcceptAllOption: true,
})

async function readFile() {
  await res.open()
  if (res.data.value) {
    fileEmits("getFileData", {
      fileName: res.fileName.value,
      data: res.data.value,
      fileSize: res.fileSize.value,
      fileMIME: res.fileMIME.value,
      lastModified: res.fileLastModified.value,
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
    transparent 46% 100%
  );
}

.file_tip {
  outline: #615da4 solid 2px;
  outline-offset: 3px;
}
</style>
