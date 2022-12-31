import type { LuckyDraw } from "@/types/luckyDraw"
import { useAssignProps } from "@/hooks/useAssignProps/"

export default function parseXlsxData(sheet_0_Data: any[]) {
  let assignProps = useAssignProps(sheet_0_Data[0], ["内容", "概率"])

  let contentKey = assignProps[0]
  let valueKey = assignProps[1]
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
