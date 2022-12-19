declare module EventBus {
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

  type Events = {
    getFileDetail: FileDetail
  }
}
