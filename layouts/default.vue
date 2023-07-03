<template>
  <v-app class="default__layout">
    <header-component :menu="headerMenu" :phones="phones"/>
    <v-main :class="paddingClass">
      <NuxtPage/>
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

const route = useRoute()

const name = computed(() => {
  return route.name
})

const commonStore = useCommonStore()

const result = ref({})

commonStore.getHeader()
    .then((response) => {
      result.value = response.data.value
    })

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
</script>
