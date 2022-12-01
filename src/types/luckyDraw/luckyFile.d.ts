import { Ref } from "vue"

declare module LuckyFile {
  type hasData = {
    fileName: string
    data: ArrayBuffer | undefined
    fileSize: number
    fileMIME: string
    lastModified: number
  }
}
