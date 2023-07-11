import { defineStore } from 'pinia'
import {mdiFacebook, mdiInstagram, mdiTwitter} from "@mdi/js";

export const useCommonStore = defineStore({
    id: 'common-store',
    state: () => {
        return {
            phones: [
                {
                    number: '+375 (17) 336-11-00',
                    href: 'tel:+375173361100'
                },
                {
                    number: '+375 (17) 336-66-00',
                    href: 'tel:+375173366600'
                },
                {
                    number: '+375 (29) 153-19-00',
                    href: 'tel:+375291531900'
                }
            ],
            headerMenu: [
                {
                    title: 'Продукция',
                    key: true,
                    submenu: []
                },
                {
                    title: 'Клиентам',
                    route: 'for-clients',
                    submenu: [
                        {
                            title: 'Реквизиты',
                            route: '/for-clients/requisites'
                        },
                        {
                            title: 'Технические требования',
                            route: '/for-clients/requirements'
                        }
                    ]
                },
                {
                    title: 'О компании',
                    route: 'company',
                    submenu: [
                        {
                            title: 'Новости компании',
                            route: '/company/articles'
                        },
                        {
                            title: 'История компании',
                            route: '/company/history'
                        }
                    ]
                },
                {
                    title: 'Вакансии',
                    route: '/vacancies'
                }
            ],
            footerMenu: [
                {
                    title: 'Продукция',
                    route: 'products'
                },
                {
                    title: 'Новости',
                    route: 'company/articles'
                },
                {
                    title: 'Клиентам',
                    route: 'for-clients'
                },
                {
                    title: 'О компании',
                    route: 'company'
                },
                {
                    title: 'Вакансии',
                    route: 'vacancies'
                },
                {
                    title: 'Контакты',
                    route: 'contacts'
                }
            ],
            networks: [
                {
                    icon: mdiFacebook,
                    href: 'https://facebook.com'
                },
                {
                    icon: mdiInstagram,
                    href: 'https://instagram.com'
                },
                {
                    icon: mdiTwitter,
                    href: 'https://twitter.com'
                }
            ]
        }
    },
    getters: {
        getPhones: state => state.phones,
        getHeaderMenu: state => state.headerMenu,
        getFooterMenu: state => state.footerMenu,
        getNetworks: state => state.networks,
    },
    actions: {
        async getHeader() {
            const { data } = await useAsyncData(
                'result',
                () => $fetch(`https://proxy.macroprint.site/api/sections/header`)
            )
            return { data }
        }
    }
})
