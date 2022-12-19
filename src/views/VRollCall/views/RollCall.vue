<template>
  <el-col
    :xs="20"
    :sm="18"
    :md="16"
    :lg="14"
    class="!flex flex-col justify-between items-center h-80vh pt-5">
    <div
      class="box flex justify-evenly items-center w-full text-3xl md:text-5xl tracking-wider">
      <p class="flex justify-end items-center flex-1 h-15vh text-right">00</p>
      <p class="flex-center flex-[1.5] h-15vh font-semibold text-center">
        韩梅梅
      </p>
      <div class="flex justify-start items-center flex-1">
        <v-lottie
          v-show="rollCallEnd"
          lottie="roll-call-end"
          class="h-10vh md:h-15vh ml-0" />
      </div>
    </div>

    <el-button
      type="primary"
      round
      size="large"
      class="!p-6 !md:p-8 mb-5"
      @click="rollCallEnd = !rollCallEnd">
      开始点名
    </el-button>
  </el-col>
</template>

<script setup lang="ts">
import VLottie from "@/components/VLottie.vue"

let rollCallEnd = $ref(false)
</script>

<style scoped></style>
