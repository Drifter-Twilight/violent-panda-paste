<template>
  <div
    class="redpacket flex-center box p-5 h-50vh w-25vw"
    v-for="(item, index) in redpacketList"
    :key="`${index}redpacket`"
    @click="showContent(index)">
    <Transition
      appear
      enter-active-class="animate__animated animate__flip">
      <div
        v-if="item"
        class="redpacket_content box flex-center p-3 text-black write-vertical-left write-orient-upright w-[70%] h-[90%] !rounded-lg shadow-2xl font-semibold text-lg 2xl:text-xl">
        {{ item }}
      </div>
    </Transition>
  </div>

  <el-button
    v-if="turnedOn"
    type="primary"
    size="large"
    round
    :icon="RefreshRight"
    @click="refresh"
    class="absolute left-[1/2] top-[1/2] -translate-x-1/2 -translate-y-1/2 z-20 !p-5"
    >刷新</el-button
  >

  <v-page-control
    right-tip="大转盘"
    right-path="turntable" />
</template>

<script setup lang="ts">
import { Transition } from "vue"
import { storeToRefs } from "pinia"
import { RefreshRight } from "@element-plus/icons-vue"
import VPageControl from "@/components/VPageControl.vue"
import { usePageDataStore } from "@/stores/usePageDataStore"
import getRandom from "@/utils/getRandom"
import { luckyFormRadio } from "@/constants/luckyDraw/"

const { pageData } = storeToRefs(usePageDataStore())

let redpacketList = $ref(Array(8).fill(""))
let turnedOn = $ref(false)
function showContent(item: number) {
  if (redpacketList[item] === "") {
    redpacketList[item] =
      pageData.value.luckyDraw.proType == luckyFormRadio.PROEQUAL
        ? proEqual()
        : proDiY()
  }

  if (redpacketList.every(item => item)) {
    turnedOn = true
  }
}

function proEqual() {
  return pageData.value.luckyDraw.data[
    getRandom(0, pageData.value.luckyDraw.data.length - 1)
  ].name
}

let i: number
let proList = pageData.value.luckyDraw.data.map(item => item.value)
let randomVal: number
let result: number
function proDiY() {
  randomVal = Math.random()

  i = 0
  result = proList.findIndex(item => {
    i += +item
    return randomVal < i
  })
  return pageData.value.luckyDraw.data[result].name
}

function refresh() {
  turnedOn = false
  redpacketList = redpacketList.map((item: string) => (item = ""))
}
</script>

<style scoped>
.redpacket {
  background-image: url("@/assets/images/redpacket.svg");
  background-size: 75%;
  background-repeat: no-repeat;
  background-position: center;
}

.redpacket_content {
  background-image: url("@/assets/images/redpacket-textbg.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
