export default function parseTXTData(rawData: ArrayBuffer) {
  let arrView = new Uint8Array(rawData)
  let decodeData = new TextDecoder().decode(arrView)
  const transitArr = decodeData.split(/\s*\|\s*/).filter(item => item)

  return transitArr
}
