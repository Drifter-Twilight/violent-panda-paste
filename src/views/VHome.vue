<template>
  <el-row>
    <v-card
      v-for="item in list"
      :key="item.title"
      :card-title="item.title"
      :card-desc="item.desc"
      :card-color="item.cardColor">
      <template #cardBg>
        <v-lottie :lottie="'card-bg'" />
      </template>
      <template #lottie>
        <v-lottie :lottie="item.lottie" />
      </template>
    </v-card>
  </el-row>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import VCard from "@/components/VCard.vue"
import VLottie from "@/components/VLottie.vue"

const list = reactive([
  {
    title: "幸运时刻",
    desc: "来放松一下吧~",
    lottie: "lucky-draw",
    cardColor: ["#fa709a", "#fee140"],
  },
  {
    title: "随机点名",
    desc: "小公鸡点到谁我就选谁~",
    lottie: "random-roll-call",
    cardColor: ["#16a085", "#f4d03f"],
  },
])
</script>

<style scoped></style>
