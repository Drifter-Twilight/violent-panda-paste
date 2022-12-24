export default function parseTxtData(transit: string[]) {
  let contentKey = transit.indexOf("内容")
  let valueKey = transit.indexOf("概率")
  let luckyTxtData: LuckyDraw.LuckyData[] = []
  for (let i = 0; i < transit.length - 1; i += 2) {
    if (i > 1) {
      luckyTxtData.push({
        name: transit[contentKey + i],
        value: transit[valueKey + i],
      })
    }
  }

  return luckyTxtData
}
