<template>
  <v-app class="default__layout">
    <header-component :menu="headerMenu" :phones="phones"/>
    <v-main :class="paddingClass">
      <v-container :fluid="true" class="d-block pa-0 ma-0">
        <v-row class="pa-0 ma-0">
          <v-col cols="12" class="d-flex flex-column align-center justify-center page__padding py-16"
                 style="row-gap: 40px">
            <template v-if="error.statusCode === 404 || '404'">
              <p>Страница, на которую вы перешли была удалена, либо отсутствует. Возможно ссылка устарела либо введена
                неверно. Вернитесь на
                <v-btn variant="plain" :ripple="false" color="secondary" class="px-0" @click="handleError">главную
                  страницу
                </v-btn>
                либо свяжитесь с нами по телефонам в шапке сайта.
              </p>
              <v-img max-width="75%" src="/404.svg"></v-img>
            </template>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <footer-component :menu="footerMenu" :networks="networks" :phones="phones"/>
  </v-app>

</template>

<script setup>

import {computed, watch} from 'vue'
import {useRoute} from "vue-router";
import HeaderComponent from "~/components/sections/HeaderComponent.vue";
import FooterComponent from "~/components/sections/FooterComponent.vue";
import {useCommonStore} from "~/store/common";
import {useHeaderStore} from "~/store/header";

const props = defineProps({
  error: Object
})

const headerStore = useHeaderStore()
headerStore.setHeader('Страница не найдена')

const route = useRoute()

const name = computed(() => {
  return route.name
})

const fullPath = computed(() => {
  return route.fullPath
})

const commonStore = useCommonStore()

const result = ref({})

commonStore.getHeader()
    .then((response) => {
      result.value = response.data.value
    })

watch(fullPath, (val) => {
  commonStore.getHeader()
}, {immediate: true})

const paddingClass = computed(() => {
  return name.value === 'index' ? '' : 'pa-0'
})
const phones = computed(() => {
  return commonStore.getPhones
})
const headerMenu = computed(() => {
  return commonStore.getHeaderMenu.map((item) => {
    if (item.key) {
      return {
        title: item.title,
        submenu: result.value['products_links']
      }
    }
    if (Object.hasOwn(item, 'submenu')) {
      return {
        title: item.title,
        submenu: item.submenu
      }
    }
    return {
      title: item.title,
      route: item.route
    }
  })
})
const footerMenu = computed(() => {
  return commonStore.getFooterMenu
})
const networks = computed(() => {
  return commonStore.getNetworks
})

const handleError = () => clearError({redirect: '/'})
</script>