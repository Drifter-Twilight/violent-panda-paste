import { luckyFormRadio } from "@/constants/luckyDraw/luckyDrawForm"

declare module LuckyDraw {
  type proType = typeof luckyFormRadio

  interface LuckyData {
    id?: number
    name: string | number
    value: string | number
  }
}
