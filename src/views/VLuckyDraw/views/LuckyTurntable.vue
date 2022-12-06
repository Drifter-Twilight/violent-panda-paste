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
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue"
import * as echarts from "echarts/core"
import { TooltipComponent } from "echarts/components"
import { PieChart } from "echarts/charts"
import { LabelLayout } from "echarts/features"
import { CanvasRenderer } from "echarts/renderers"
import { ElMessageBox } from "element-plus"
import getRandom from "@/utils/getRandom"

echarts.use([TooltipComponent, PieChart, CanvasRenderer, LabelLayout])

let pieData = reactive([
  {
    value: 100,
    name: "现金十元",
    startAngel: 0,
    endAngel: 59,
    selected: false,
    label: { rotate: 330 },
  },
  {
    value: 100,
    name: "现金五元",
    startAngel: 60,
    endAngel: 119,
    selected: false,
    label: { rotate: 270 },
  },
  {
    value: 100,
    name: "棒棒糖一根",
    startAngel: 120,
    endAngel: 179,
    selected: false,
    label: { rotate: 210 },
  },
  {
    value: 100,
    name: "棒棒糖两根",
    startAngel: 180,
    endAngel: 239,
    selected: false,
    label: { rotate: 150 },
  },
  {
    value: 100,
    name: "背诵出师表",
    startAngel: 240,
    endAngel: 299,
    selected: false,
    label: { rotate: 90 },
  },
  {
    value: 100,
    name: "背诵滕王阁序",
    startAngel: 300,
    endAngel: 359,
    selected: false,
    label: { rotate: 30 },
  },
])

let option = reactive({
  series: [
    {
      type: "pie",
      radius: ["20%", "95%"],
      startAngle: 90,
      label: {
        show: true,
        position: "inside",
        fontSize: 20,
        color: "#fff",
        overflow: "break",
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
  pieChart!.classList.remove("duration-[0ms]")
  pieChart!.classList.add("duration-[5000ms]")
  randomDeg = getRandom(0, 360)
  rotateDeg = 3600 + randomDeg
  pieChart!.style.transform = `rotate(${rotateDeg}deg)`
}

function getResult() {
  rotateDeg = randomDeg
  pieChart!.classList.replace("duration-[5000ms]", "duration-[0ms]")
  pieChart!.style.transform = `rotate(${rotateDeg}deg)`
  let targetData = pieData.filter(
    item =>
      360 - rotateDeg >= item.startAngel && 360 - rotateDeg <= item.endAngel
  )
  ElMessageBox.confirm(targetData[0].name, "抽奖结果", {
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
