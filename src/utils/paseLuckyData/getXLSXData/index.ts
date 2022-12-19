import { read, utils } from "xlsx"

interface LuckyXLSX {
  [P: string]: string | number
}

export default function parseXLSXData(xlsxData: ArrayBuffer, thRange: number) {
  const wb = read(xlsxData)
  const sheet0 = wb.Sheets[wb.SheetNames[0]]
  const sheet_0_Data: LuckyXLSX[] = utils.sheet_to_json(sheet0, {
    header: "A",
    range: thRange,
  })

  let contentKey = sheet_0_Data[0]["A"] === "内容" ? "A" : "B"
  let valueKey = sheet_0_Data[0]["A"] === "概率" ? "A" : "B"
  let luckyData: LuckyDraw.LuckyData[] = []
  sheet_0_Data.forEach(item => {
    luckyData.push({
      name: item[contentKey],
      value: item[valueKey],
    })
  })

  return luckyData
}
