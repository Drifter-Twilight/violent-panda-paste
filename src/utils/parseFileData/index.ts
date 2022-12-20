import { read, utils } from "xlsx"

interface RollCallData {
  [P: string]: string | number
}

export default function parseFileData(data: ArrayBuffer, thRange: number) {
  const wb = read(data)
  const sheet0 = wb.Sheets[wb.SheetNames[0]]
  const sheet_0_Data: RollCallData[] = utils.sheet_to_json(sheet0, {
    header: "A",
    range: thRange - 1,
  })

  let idKey = sheet_0_Data[0]["A"] === "学号" ? "A" : "B"
  let nameKey = sheet_0_Data[0]["A"] === "姓名" ? "A" : "B"
  let rollCallData: RandomRollCall.RollCallData[] = []
  sheet_0_Data.forEach(item => {
    rollCallData.push({
      id: item[idKey],
      name: item[nameKey],
    })
  })

  return rollCallData
}
