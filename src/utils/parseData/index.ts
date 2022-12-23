import parseTxtData from "./parseTxtData"
import parseXlsxData from "./parseXlsxData"

export class parseData {
  rawData: ArrayBuffer
  constructor(rawData: ArrayBuffer) {
    this.rawData = rawData
  }

  getTxtData() {
    return parseTxtData(this.rawData)
  }

  getXlsxData(thRange: number) {
    return parseXlsxData(this.rawData, thRange)
  }
}
