import { ref } from "vue"
import { defineStore } from "pinia"
import { luckyFormRadio } from "@/constants/lucky-draw/"

export const useLuckyStore = defineStore("luckyStore", () => {
  let proType = ref<luckyFormRadio>(luckyFormRadio.PROEQUAL)
  let luckyData = ref<LuckyDraw.LuckyData[]>()

  function setProType(type: luckyFormRadio) {
    proType.value = type
  }

  function setLuckyData(newData: LuckyDraw.LuckyData[]) {
    luckyData.value = newData
  }

  return { proType, luckyData, setProType, setLuckyData }
})
