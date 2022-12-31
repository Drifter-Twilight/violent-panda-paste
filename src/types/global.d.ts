declare module Global {
  interface TargetModel {
    name: string
    path: string
  }

  interface PageData {
    luckyDraw: {
      proType: LuckyDraw.proType
      data: LuckyDraw.LuckyData[]
    }
    rollCall: RandomRollCall.RollCallData[]
  }
}
