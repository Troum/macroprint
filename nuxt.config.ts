import vuetify from 'vite-plugin-vuetify';

export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            htmlAttrs: {
                lang: 'ru'
            },
            link: [
                { rel: 'icon', type: 'image/ico', sizes: '32x32', href: '/favicon-32x32.ico' },
                { rel: 'icon', type: 'image/ico', sizes: '16x16', href: '/favicon-16x16.icon' },
                { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
                { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
            ],
            script: [
                { src: 'https://api-maps.yandex.ru/3.0/?apikey=0845768b-3f33-453f-970b-be8e7b249bd7&lang=ru_RU' }
            ]
        }
    },
    runtimeConfig: {
        public: {
            baseURL: 'http://localhost:1337'
        }
    },
    devtools: {enabled: true},
    css: [
        '~/assets/styles/main.scss'
    ],
    components: true,
    build: {
        transpile: ['vuetify'],
    },
    modules: [
        async (options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                config?.plugins?.push(vuetify());
            });
        },
        '@nuxtjs/google-fonts',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxt/image',
        '@nuxtjs/strapi',
        '@vueuse/nuxt'
    ],
    image: {
        strapi: {
            baseURL: 'http://localhost:1337'
        }
    },
    googleFonts: {
        families: {
            'Roboto Condensed': true
        }
    },
    piniaPersistedstate: {
        storage: 'localStorage'
    }
})
