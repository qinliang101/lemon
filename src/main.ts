import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import router from './router'
import i18n from './language'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')