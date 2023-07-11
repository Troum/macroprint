import plugin from 'vue-yandex-maps'
import { defineNuxtPlugin } from 'nuxt/app'

const settings = {
    apiKey: '0845768b-3f33-453f-970b-be8e7b249bd7', // Индивидуальный ключ API
    lang: 'ru_RU',
    coordorder: 'latlong',
    debug: false,
    version: '2.1'
}

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(plugin, settings)
})