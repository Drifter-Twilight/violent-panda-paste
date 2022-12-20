import { ref } from "vue"
import { defineStore } from "pinia"

export const useRollCallStore = defineStore("luckyStore", () => {
  let rollCallData = ref<RandomRollCall.RollCallData[]>()

  function setRollCallData(newData: RandomRollCall.RollCallData[]) {
    rollCallData.value = newData
  }

  return { rollCallData, setRollCallData }
})
