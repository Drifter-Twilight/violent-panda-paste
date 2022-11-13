import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import "virtual:windi.css"
import "@/main.less"

const app = createApp(App)

app.use(createPinia())

app.mount("#app")
