import { useAssignProps } from "@/hooks/useAssignProps/"

export default function parseXlsxData(sheet_0_Data: any[]) {
  let assignProps = useAssignProps(sheet_0_Data[0], ["学号", "姓名"])

  let idKey = assignProps[0]
  let nameKey = assignProps[1]
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
