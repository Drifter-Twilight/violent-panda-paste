import { read, utils } from "xlsx"

export default function parseXLSXData(xlsxData: ArrayBuffer, thRange: number) {
  const wb = read(xlsxData)
  const sheet0 = wb.Sheets[wb.SheetNames[0]]
  const sheet_0_Data = utils.sheet_to_json(sheet0, {
    header: "A",
    range: thRange - 1,
  })

  return sheet_0_Data
}
