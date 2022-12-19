export default function getTXTData(txtData: ArrayBuffer) {
  let arrView = new Uint8Array(txtData)
  let decodeData = new TextDecoder().decode(arrView)
  const transitArr = decodeData.split(/\s*\|\s*/).filter(item => item)

  let luckyData: LuckyDraw.LuckyData[] = []
  for (let i = 0; i < transitArr.length - 1; i += 2) {
    let nameIndex = transitArr.indexOf("内容")
    let valueIndex = transitArr.indexOf("概率")

    if (i > 1) {
      luckyData.push({
        name: transitArr[nameIndex + i],
        value: +transitArr[valueIndex + i],
      })
    }
  }

  console.log(1)
  return luckyData
}
