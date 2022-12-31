import { ref } from "vue"
import { defineStore } from "pinia"

export const usePageDataStore = defineStore("pageDataStore", () => {
  let pageData = ref<Global.PageData>({
    luckyDraw: {
      proType: "",
      data: [],
    },
    rollCall: [],
  })

  function setPageData(newData: Partial<Global.PageData>) {
    pageData.value = { ...pageData.value, ...newData }
  }

  return { pageData, setPageData }
})
