import getTXTData from "./getTXTData/"
import getXLSXData from "./getXLSXData"
import { fileType } from "@/constants/fileType/"

export function parseLuckyData(
  type: string,
  rawData: ArrayBuffer,
  thRange: number
) {
  switch (type) {
    case fileType.TXT:
      return getTXTData(rawData)

    case fileType.XLSX:
    case fileType.XLS:
      return getXLSXData(rawData, thRange)

    default:
      return getTXTData(rawData)
  }
}
