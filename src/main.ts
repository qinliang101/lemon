import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import router from './router'
import store from './store'
import http from './http'
import i18n from './lang'

const app = createApp(App)
app.config.globalProperties.$http = http
app.use(router)
app.use(store)
app.use(i18n)
app.mount('#app')