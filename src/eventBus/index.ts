import mitt from "mitt"
import type { Emitter } from "mitt"

export const bus: Emitter<Events> = mitt<Events>()
