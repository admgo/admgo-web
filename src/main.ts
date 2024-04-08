import { createApp } from 'vue'
import '@/assets/index.css'
import App from './App.vue'
import { router } from '@/router'
import { createPinia } from 'pinia'
import VueCookies from 'vue-cookies'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(VueCookies)
app.mount('#app')
