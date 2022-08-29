import { createI18n } from "vue-i18n"
import en from "./lib/en"
import cn from "./lib/cn"

const i18n = createI18n({
    locale: localStorage.getItem('lang') || 'cn',
    fallbackLocale: 'cn',
    messages: {
        cn,
        en,
    },
})

export default i18n