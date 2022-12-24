<template>
  <el-col
    :xs="20"
    :sm="18"
    :md="16"
    :lg="14"
    class="!flex flex-col justify-between items-center h-80vh pt-5">
    <div
      class="box flex justify-evenly items-center w-full text-3xl md:text-5xl tracking-wider">
      <p class="flex justify-end items-center flex-1 h-15vh text-right">
        {{ sId }}
      </p>
      <p class="flex-center flex-[1.3] h-15vh font-semibold text-center">
        {{ name }}
      </p>
      <div class="flex justify-start items-center flex-1">
        <Transition enter-active-class="animate__animated animate__zoomIn">
          <v-lottie
            v-show="rollCallEnd"
            lottie="roll-call-end"
            class="h-10vh md:h-15vh ml-0" />
        </Transition>
      </div>
    </div>

    <el-button
      type="primary"
      round
      size="large"
      class="!p-6 !md:p-8 mb-5"
      @click="startRollCall">
      开始点名
    </el-button>
  </el-col>
</template>

<script setup lang="ts">
import { Transition, onUnmounted, computed } from "vue"
import VLottie from "@/components/VLottie.vue"
import { storeToRefs } from "pinia"
import { useRollCallStore } from "@/stores/useRollCallStore/"
import getRandom from "@/utils/getRandom"

let rollCallEnd = $ref(false)

const { rollCallData } = storeToRefs(useRollCallStore())

let interval: NodeJS.Timer
let timeout: NodeJS.Timeout
let id = $ref<number | undefined>(0)
let name = $ref<string>("---")

let sId = computed(() => (id && id >= 10 ? id : `0${id}`))
function startRollCall() {
  rollCallEnd = false

  let item = 0
  interval = setInterval(() => {
    item = getRandom(1, rollCallData.value.length - 1)
    id = rollCallData.value[item]["id"]
    name = rollCallData.value[item]["name"]
  }, 50)

  timeout = setTimeout(() => {
    clearInterval(interval)
    clearTimeout(timeout)
    rollCallEnd = true
  }, 3000)
}

onUnmounted(() => {
  clearInterval(interval)
  clearTimeout(timeout)
})
</script>

<style scoped></style>
