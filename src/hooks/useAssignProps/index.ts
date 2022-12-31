export function useAssignProps(target: File.Xlsxsheet, props: string[]) {
  let targetEntries = Object.entries(target)

  let targetKeys: string[] = Array(props.length).fill("")
  targetEntries.forEach(item => {
    let keyIndex = props.indexOf(item[1])
    if (keyIndex !== -1) {
      targetKeys[keyIndex] = item[0]
    }
  })

  return targetKeys
}
