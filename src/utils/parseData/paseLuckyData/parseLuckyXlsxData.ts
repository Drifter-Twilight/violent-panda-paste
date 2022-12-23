export default function parseLuckyXLSXData(sheet_0_Data: any[]) {
  console.log(sheet_0_Data)
  let contentKey = sheet_0_Data[0]["A"] === "内容" ? "A" : "B"
  let valueKey = sheet_0_Data[0]["A"] === "概率" ? "A" : "B"
  let luckyData: LuckyDraw.LuckyData[] = []
  sheet_0_Data.forEach((item, index) => {
    if (index >= 1) {
      luckyData.push({
        name: item[contentKey],
        value: item[valueKey],
      })
    }
  })

  return luckyData
}
