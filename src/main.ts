import { createApp, ref } from "vue"
import { createPinia } from "pinia"
import router from "@/router/"
import App from "./App.vue"
import "virtual:windi.css"
import "element-plus/theme-chalk/dark/css-vars.css"
import "animate.css"
import "@/main.css"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount("#app")
