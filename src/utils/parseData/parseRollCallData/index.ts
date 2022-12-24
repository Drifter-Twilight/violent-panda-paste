import { parseData } from "../"
import parseXlsxData from "./parseXlsxData"

export class parseRollCallData extends parseData {
  constructor(rawData: ArrayBuffer) {
    super(rawData)
  }

  getXlsxData(thRange: number) {
    let sheet_0_data = super.getXlsxData(thRange)
    return parseXlsxData(sheet_0_data)
  }
}
