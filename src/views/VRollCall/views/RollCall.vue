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
        <Suspense>
          <template #fallback>
            <el-icon
              size="3rem"
              color="#615da4"
              class="is-loading"
              ><Loading
            /></el-icon>
          </template>

          <Transition enter-active-class="animate__animated animate__zoomIn">
            <v-lottie
              v-show="rollCallEnd"
              lottie="roll-call-end"
              class="h-10vh md:h-15vh ml-0" />
          </Transition>
        </Suspense>
      </div>
    </div>

    <el-button
      type="primary"
      round
      size="large"
      :disabled="disabledBtn"
      class="!p-6 !md:p-8 mb-5"
      @click="startRollCall">
      开始点名
    </el-button>
  </el-col>
</template>

<script setup lang="ts">
import {
  Transition,
  onUnmounted,
  computed,
  Suspense,
  defineAsyncComponent,
} from "vue"
import { storeToRefs } from "pinia"
import { Loading } from "@element-plus/icons-vue"
import { usePageDataStore } from "@/stores/usePageDataStore"
import getRandom from "@/utils/getRandom"
const VLottie = defineAsyncComponent(() => import("@/components/VLottie.vue"))

let rollCallEnd = $ref(false)
let disabledBtn = $ref(false)

const { pageData } = storeToRefs(usePageDataStore())

let interval: NodeJS.Timer
let timeout: NodeJS.Timeout
let id = $ref<number>(0)
let name = $ref<string>("---")

let sId = computed(() => (id >= 10 ? id : `0${id}`))
function startRollCall() {
  rollCallEnd = false
  disabledBtn = true

  let item = 0
  interval = setInterval(() => {
    item = getRandom(1, pageData.value.rollCall.length - 1)
    id = pageData.value.rollCall[item]["id"]
    name = pageData.value.rollCall[item]["name"]
  }, 50)

  timeout = setTimeout(() => {
    clearInterval(interval)
    clearTimeout(timeout)
    rollCallEnd = true
    disabledBtn = false
  }, 3000)
}

onUnmounted(() => {
  clearInterval(interval)
  clearTimeout(timeout)
})
</script>

<style scoped></style>
