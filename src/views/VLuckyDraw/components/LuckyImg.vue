<template>
  <div class="relative w-65vw h-screen z-10 shadow-2xl">
    <img
      :src="importImg(imgPath)"
      class="object-cover transition-all object-center w-full h-full" />

    <div
      class="absolute flex box justify-between items-center left-1/2 top-1/2 translate-half h-10vw w-[95%] z-20">
      <v-switch-button
        :active="'/lucky-draw/form' == route.path"
        size="6vw"
        @click="switchType('form')">
        <el-icon size="1.25rem"><EditPen /></el-icon>
      </v-switch-button>

      <v-switch-button
        :active="'/lucky-draw/file' == route.path"
        size="6vw"
        @click="switchType('file')">
        <el-icon size="1.25rem"><Reading /></el-icon>
      </v-switch-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router"
import { EditPen, Reading } from "@element-plus/icons-vue"
import VSwitchButton from "@/components/VSwitchButton.vue"
import importImg from "@/utils/importImg"

const luckyImgProps = defineProps<{
  imgPath: string
}>()

const router = useRouter()
const route = useRoute()

function switchType(type: string) {
  router.push(type)
}
</script>

<style scoped></style>
