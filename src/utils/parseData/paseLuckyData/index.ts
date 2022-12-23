import { parseData } from "../"
import parseLuckyTXTData from "./parseLuckyTxtData"
import parseLuckyXLSXData from "./parseLuckyXlsxData"
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
      return parseLuckyTXTData(transitArr)
    }
  }

  getXlsxData(thRange: number) {
    let sheet_0_data = super.getXlsxData(thRange)
    return parseLuckyXLSXData(sheet_0_data)
  }
}
