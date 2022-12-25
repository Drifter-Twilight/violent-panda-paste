import { defineStore } from "pinia"

export const usePageDataStore = defineStore("pageDataStore", () => {
  let _cacheData: unknown
  let pageData = function <T>(newData?: T) {
    if (!newData) {
      return _cacheData
    } else {
      _cacheData = newData
    }
  }

  return { pageData }
})
