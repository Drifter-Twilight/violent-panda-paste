import { parseData } from "../"
import parseTxtData from "./parseTxtData"
import parseXlsxData from "./parseXlsxData"
import { fileType } from "@/constants/fileType/"

export class parseLuckyData extends parseData {
  type: string
  constructor(rawData: ArrayBuffer, type: string) {
    super(rawData)
    this.type = type
  }

  getData(th: number) {
    switch (this.type) {
      case fileType.TXT:
        return this.getTxtData()
      case fileType.XLSX:
        return this.getXlsxData(th)

      default:
        return this.getTxtData()
    }
  }

  getTxtData(callback?: (transit: string[]) => any) {
    let transitArr = super.getTxtData()

    if (callback) {
      return callback(transitArr)
    } else {
      return parseTxtData(transitArr)
    }
  }

  getXlsxData(thRange: number) {
    let sheet_0_data = super.getXlsxData(thRange)
    return parseXlsxData(sheet_0_data)
  }
}
