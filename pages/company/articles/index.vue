<template>
  <v-container :fluid="true" class="d-block pa-0 ma-0">
    <v-row class="pa-0">
      <template v-if="articles.length">
        <v-row class="page__padding">
          <v-col cols="12" class="articles__container">
            <template v-for="(article, index) of articles" :key="index">
              <article-card :article="article"/>
            </template>
          </v-col>
        </v-row>
      </template>
    </v-row>
  </v-container>
</template>

<script setup>
import {computed} from "vue";
import {useHeaderStore} from "~/store/header";
import ArticleCard from "~/components/cards/ArticleCard.vue";

const headerStore = useHeaderStore()

const { data: result } = await useFetch('/api/articles', {
  baseURL: 'https://proxy.macroprint.site',
  method: 'GET'
})

const page = computed(() => {
  return result.value.page
})

const articles = computed(() => {
  return result.value['articles']
})

headerStore.setHeader(page.value['title'])

useServerSeoMeta({
  ogTitle: () => page.value['seo']['og_title'],
  title: () => page.value['seo'].title,
  description: () => page.value['seo'].description,
  ogDescription: () => page.value['seo']['og_description'],
  ogImage: () => 'http://macroprint.by/img/mainLogo.png',
  ogImageUrl: () => 'http://macroprint.by/img/mainLogo.png',
  twitterCard: () => 'summary_large_image',
  twitterTitle: () => page.value['seo'].title,
  twitterDescription: () => page.value['seo'].description,
  twitterImage: () => 'http://macroprint.by/img/mainLogo.png'
})

definePageMeta({
  breadcrumb: 'Новости компании'
})
</script>

<style lang="scss" scoped>

</style>
