declare module File {
  type typesOption = Array<{
    description?: string
    accept: Record<string, string[]>
  }>

  interface FileInfo {
    fileName: string
    data: ArrayBuffer
    fileSize: number
    fileMIME: string
    lastModified: number
  }

  interface FileDetail {
    showDrawer: boolean
    fileInfo: FileInfo
  }

  interface Xlsxsheet {
    [K: string]: any
  }
}
