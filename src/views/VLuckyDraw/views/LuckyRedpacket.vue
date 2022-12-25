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
        class="redpacket_content flex-center text-black write-vertical-left w-[70%] h-[95%] rounded-lg shadow-2xl">
        {{ item }}
      </div>
    </Transition>
  </div>

  <el-button
    v-if="turnedOn"
    type="primary"
    size="large"
    :icon="RefreshRight"
    @click="refresh"
    class="absolute left-[1/2] top-[1/2] -translate-x-1/2 -translate-y-1/2 z-10"
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
import { useLuckyStore } from "@/stores/useLuckyStore"
import getRandom from "@/utils/getRandom"
import { luckyFormRadio } from "@/constants/luckyDraw/"

const { proType, luckyData } = storeToRefs(useLuckyStore())

let redpacketList = $ref(Array(8).fill(""))
let turnedOn = $ref(false)
function showContent(item: number) {
  if (redpacketList[item] === "") {
    redpacketList[item] =
      proType.value == luckyFormRadio.PROEQUAL ? proEqual() : proDiY()
  }

  if (redpacketList.every(item => item)) {
    turnedOn = true
  }
}

function proEqual() {
  return luckyData.value?.[getRandom(0, luckyData.value?.length - 1)].name
}

let i: number
let proList = luckyData.value?.map(item => item.value)
let randomVal: number
let result: number
function proDiY() {
  randomVal = Math.random()

  i = 0
  result = proList!.findIndex(item => {
    i += +item
    return randomVal < i
  })
  return luckyData.value?.[result!].name
}

function refresh() {
  turnedOn = false
  redpacketList = redpacketList.map((item: string) => (item = ""))
}
</script>

<style scoped>
.redpacket_content {
  background-image: url("@/assets/images/redpacket-textbg.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.redpacket {
  background-image: url("@/assets/images/redpacket.svg");
  background-size: 75%;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
