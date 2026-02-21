import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import { initLocale } from './stores/locale'

const app = createApp(App)

initLocale()

app.use(createPinia())
app.use(router)

app.mount('#app')
