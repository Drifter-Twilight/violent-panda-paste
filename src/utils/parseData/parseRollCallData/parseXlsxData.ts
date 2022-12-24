export default function parseXlsxData(sheet_0_Data: any[]) {
  let idKey = sheet_0_Data[0]["A"] === "学号" ? "A" : "B"
  let nameKey = sheet_0_Data[0]["A"] === "姓名" ? "A" : "B"
  let rollCallData: RandomRollCall.RollCallData[] = []
  sheet_0_Data.forEach((item, index) => {
    if (index >= 1) {
      rollCallData.push({
        id: item[idKey],
        name: item[nameKey],
      })
    }
  })

  return rollCallData
}
