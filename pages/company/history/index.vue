<template>
  <v-container :fluid="true" class="d-block pa-0 ma-0">
    <v-row class="pa-0">
      <v-col cols="12" class="history__page page__padding py-10" v-html="page.description"></v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import {computed} from "vue";
import {useHeaderStore} from "~/store/header";

const headerStore = useHeaderStore()

const { data: result } = await useFetch('/api/history', {
  baseURL: 'https://proxy.macroprint.site',
  method: 'GET'
})

const page = computed(() => {
  return result.value
})

headerStore.setHeader(page.value['title'])

useServerSeoMeta({
  ogTitle: () => page.value['title'],
  title: () => page.value['title'],
  description: () => 'Первая в Беларуси фабрика широкоформатной печати!',
  ogDescription: () => 'Первая в Беларуси фабрика широкоформатной печати!',
  ogImage: () => 'http://macroprint.by/img/mainLogo.png',
  ogImageUrl: () => 'http://macroprint.by/img/mainLogo.png',
  twitterCard: () => 'summary_large_image',
  twitterTitle: () => page.value['title'],
  twitterDescription: () => 'Первая в Беларуси фабрика широкоформатной печати!',
  twitterImage: () => 'http://macroprint.by/img/mainLogo.png'
})

</script>

<style lang="scss" scoped>
  .history__page {
    & p {
      &:first-of-type {
        margin-top: 40px !important;
        margin-bottom: 40px !important;
      }
    }
  }
</style>
