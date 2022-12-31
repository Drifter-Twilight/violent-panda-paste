import { useFileSystemAccess } from "@vueuse/core"

export function useReadFile(types: File.typesOption) {
  const res = useFileSystemAccess({
    dataType: "ArrayBuffer",
    types,
    excludeAcceptAllOption: true,
  })

  return res
}
