<script setup>
import SvgIcon from '@jamescoyle/vue-icon'
import {VueperSlide, VueperSlides} from "vueperslides";
import {mdiArrowLeftThin, mdiArrowRightThin, mdiChevronDown, mdiChevronLeft} from "@mdi/js";
import ArticleCard from "~/components/cards/ArticleCard.vue";
import {useRoute, useRouter} from "vue-router";
import {useDisplay} from "vuetify";
import {useHeaderStore} from "~/store/header";

const router = useRouter()

const {data: result} = await useAsyncData(
    'result',
    () => $fetch(`https://proxy.macroprint.site/api/articles/${useRoute().params.slug}`)
)
const article = computed(() => {
  return result.value
})

const xl = computed(() => {
  return useDisplay().xlAndUp.value
})
const mobile = computed(() => {
  return useDisplay().mdAndDown.value
})
const headerStore = useHeaderStore()

useServerSeoMeta({
  title: article.value.article['title'],
  description: article.value.article.seo['description'],
  ogDescription: article.value.article.seo['og_description'],
  ogTitle: article.value.article.seo['og_title'],
  ogType: 'website',
  ogUrl: router.fullPath,
  ogLocale: 'ru_RU'
})

headerStore.setHeader(article.value.article['title'])

</script>

<template>
  <v-container :fluid="true" class="d-block pa-0 ma-0">
    <v-row class="pa-0 ma-0">
      <v-col cols="12" class="single-product__container page__padding">
        <article v-html="article.article.description"></article>
      </v-col>
    </v-row>
    <template v-if="article['others'].length">
      <template v-if="mobile">
        <v-row class="index-page__articles-container page__padding bg-primary">
          <v-col cols="12" class="d-flex justify-start flex-column d-lg-block"
                 style="position: relative; min-height: 770px">
            <div class="title__container">
              <h3 class="text-center text-white" style="width: 100%">Новости компании</h3>
              <template v-if="article['others'].length > 1">
                <div class="d-flex justify-space-between align-center px-4" style="width: 100%;">
                  <v-btn :flat="true"
                         :ripple="false"
                         class="article--button d-flex justify-start align-center px-0"
                         variant="plain"
                         style="width: fit-content; height: fit-content"
                         @click="$refs.articlesCarousel.previous()">
                    <svg-icon :path="mdiArrowLeftThin" type="mdi"/>
                    <span>Предыдущие</span>
                  </v-btn>
                  <v-btn :flat="true"
                         :ripple="false"
                         class="article--button d-flex justify-start align-center px-0"
                         style="width: fit-content; height: fit-content"
                         variant="plain"
                         @click="$refs.articlesCarousel.next()">
                    <span>Следующие</span>
                    <svg-icon :path="mdiArrowRightThin" type="mdi"/>
                  </v-btn>
                </div>
              </template>
            </div>
            <template v-if="article['others'].length > 2">
              <div style="position: relative;" class="w-full">
                <div style="position: absolute; width: 200%; left: -50%">
                  <vueper-slides
                      ref="articlesCarousel"
                      :arrows="false"
                      :bullets="false"
                      :dragging-distance="70"
                      :gap="3"
                      :slide-ratio="1 / 4"
                      :visible-slides="3"
                      class="no-shadow mt-6"
                      fixed-height="600px"
                      slide-multiple>
                    <vueper-slide v-for="(item, index) in page['articles']" :key="index" class="pa-0">
                      <template #content>
                        <article-card :article="item"/>
                      </template>
                    </vueper-slide>
                  </vueper-slides>
                </div>
              </div>
            </template>
            <template v-else-if="article['others'].length === 2">
              <div style="position: relative;" class="w-full">
                <vueper-slides
                    ref="articlesCarousel"
                    :arrows="false"
                    :bullets="false"
                    :dragging-distance="70"
                    class="no-shadow"
                    :visible-slides="2"
                    :slide-ratio="1 / 4"
                    :gap="5"
                    :arrows-outside="false"
                    fixed-height="600px"
                    slide-multiple>
                  <vueper-slide v-for="(item, index) in article['others']" :key="index" class="pa-0">
                    <template #content>
                      <article-card :article="item"/>
                    </template>
                  </vueper-slide>
                </vueper-slides>
              </div>
            </template>
            <template v-else>
              <div style="position: relative;" class="d-flex justify-center align-center w-full mt-8">
                <article-card :article="article['others'][0]"/>
              </div>
            </template>
          </v-col>
        </v-row>
      </template>
      <template v-else>
        <v-row class="index-page__articles-container page__padding bg-primary">
          <v-col cols="12" class="d-flex justify-start flex-column d-lg-block">
            <div class="title__container">
              <v-btn :flat="true"
                     :height="13"
                     :ripple="false"
                     class="article--button d-flex justify-start align-center"
                     variant="plain"
                     @click="$refs.articlesCarousel.previous()">
                <svg-icon :path="mdiArrowLeftThin" type="mdi"/>
                <span>Предыдущие</span>
              </v-btn>
              <h3 class="text-center text-white">Новости компании</h3>
              <v-btn :flat="true"
                     :height="13"
                     :ripple="false"
                     class="article--button d-flex justify-start align-center"
                     variant="plain"
                     @click="$refs.articlesCarousel.next()">
                <span>Следующие</span>
                <svg-icon :path="mdiArrowRightThin" type="mdi"/>
              </v-btn>
            </div>
            <vueper-slides
                ref="articlesCarousel"
                :arrows="false"
                :bullets="false"
                :dragging-distance="30"
                :gap="xl ? 1 : 3"
                :slide-ratio="1 / 4"
                :visible-slides="xl ? 7 : 3"
                class="no-shadow mt-6"
                fixed-height="567px"
                slide-multiple>
              <vueper-slide v-for="(item, index) in article['others']" :key="index" class="pa-0">
                <template #content>
                  <article-card :article="item"/>
                </template>
              </vueper-slide>
            </vueper-slides>
          </v-col>
        </v-row>
      </template>
    </template>
  </v-container>
</template>

<style scoped lang="scss">

</style>