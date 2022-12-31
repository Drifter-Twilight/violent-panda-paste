<template>
  <div
    class="turntable_pointer relative flex-center overflow-hidden w-90vh h-90vh mx-auto rounded-full bg-[#615da4]">
    <div
      ref="pieChart"
      id="pieChart"
      class="absolute left-0 top-0 w-full h-90vh z-0 rounded-full transition-all ease-out"
      @transitionend="getResult"></div>
    <el-button
      type="primary"
      circle
      size="large"
      class="!p-10 shadow-lg z-10"
      @click="startDraw"
      >开始</el-button
    >
  </div>

  <v-page-control
    left-tip="红包抽奖"
    left-path="redpacket" />
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue"
import { storeToRefs } from "pinia"
import * as echarts from "echarts/core"
import { TooltipComponent } from "echarts/components"
import { PieChart } from "echarts/charts"
import { LabelLayout } from "echarts/features"
import { CanvasRenderer } from "echarts/renderers"
import { ElMessageBox } from "element-plus"
import VPageControl from "@/components/VPageControl.vue"
import { usePageDataStore } from "@/stores/usePageDataStore"
import getRandom from "@/utils/getRandom"

const { pageData } = storeToRefs(usePageDataStore())

function formatData() {
  let itemDeg = 0
  let startDeg = 0
  let endDeg = 0

  return pageData.value.luckyDraw.data.map((item, index) => {
    itemDeg = 360 * +item.value
    startDeg = index == 0 ? 0 : endDeg + 1
    endDeg = startDeg + itemDeg - 1

    return {
      ...item,
      startDeg,
      endDeg,
      label: {
        rotate: 360 - (endDeg + startDeg) / 2,
      },
    }
  })
}

let pieData = $ref(formatData())

let option = reactive({
  series: [
    {
      type: "pie",
      radius: ["20%", "95%"],
      startAngle: 90,
      label: {
        show: true,
        position: "inside",
        fontSize: 18,
        color: "#fff",
      },
      itemStyle: {
        color: (params: any) =>
          params.dataIndex % 2 == 0 ? "#f03752" : "#ed5a65",
      },
      data: pieData,
    },
  ],
})

onMounted(() => {
  echarts.use([TooltipComponent, PieChart, CanvasRenderer, LabelLayout])
  let pieChart = document.getElementById("pieChart")
  let myChart = echarts.init(pieChart!)
  option && myChart.setOption(option)

  window.addEventListener("resize", () => {
    myChart.resize()
  })
})

let pieChart = $ref<HTMLDivElement>()
let rotateDeg = 0
let randomDeg = 0
function startDraw() {
  pieChart?.classList.remove("duration-[0ms]")
  pieChart?.classList.add("duration-[5000ms]")
  randomDeg = getRandom(0, 360)
  rotateDeg = 3600 + randomDeg
  pieChart!.style.transform = `rotate(${rotateDeg}deg)`
}

let targetData: typeof pieData
function getResult() {
  rotateDeg = randomDeg
  pieChart?.classList.replace("duration-[5000ms]", "duration-[0ms]")
  pieChart!.style.transform = `rotate(${rotateDeg}deg)`
  targetData = pieData?.filter(
    item => 360 - rotateDeg >= item.startDeg && 360 - rotateDeg <= item.endDeg
  )

  ElMessageBox.confirm(`${targetData?.[0].name}`, "抽奖结果", {
    confirmButtonText: "确定",
    type: "success",
    showCancelButton: false,
  })
}
</script>

<style scoped>
.turntable_pointer::after {
  z-index: 10;
  position: absolute;
  content: "";
  left: 50%;
  top: 0;
  transform: translateX(-50%) rotate(180deg);
  width: 10%;
  height: 10%;
  background-image: url("@/assets/images/turntable-pointer.svg");
  background-repeat: no-repeat;
}
</style>
