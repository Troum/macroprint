<template>
  <v-container :fluid="true" class="d-block pa-0 ma-0">
    <client-only>
      <v-row class="pa-0">
        <v-col class="pa-0 ma-0 index-page__slider-container" cols="12">
          <template v-if="mobile">
            <vueper-slides :arrows="false" :autoplay="true" :fade="true" :slide-ratio="4"
                           class="no-shadow pa-0 greeting">
              <vueper-slide v-for="(slide, index) in page.slides" :key="index" class="pa-0">
                <template #content>
                  <nuxt-img provider="strapi" :height="388"
                            fit="fill"
                            :src="slide.image"></nuxt-img>
                </template>
              </vueper-slide>
            </vueper-slides>
            <div class="index-page__slider-container--greeting">
              <h1 class="text-uppercase text-white">Добро пожаловать</h1>
              <h2 class="text-white">Мы сделаем Ваш мир ярче.</h2>
              <v-btn :elevation="0" :height="48" :width="185" class="mt-8"
                     color="secondary"
                     style="text-transform: initial" to="company"
                     variant="elevated">
                О Компании
              </v-btn>
            </div>
          </template>
          <template v-else>
            <vueper-slides :arrows="false" :autoplay="true" :fade="true" :slide-ratio="1 / 2"
                           class="no-shadow pa-0 greeting"
                           fixed-height="388px">
              <vueper-slide v-for="(slide, index) in page.slides" :key="index" class="pa-0">
                <template #content>
                  <nuxt-img provider="strapi" :width="width"
                            fit="cover"
                            :src="slide.image"></nuxt-img>
                </template>
              </vueper-slide>
            </vueper-slides>
            <div class="index-page__slider-container--greeting">
              <h1 class="text-uppercase text-white">Добро пожаловать</h1>
              <h2 class="text-white">Мы сделаем Ваш мир ярче.</h2>
              <v-btn :elevation="0" :height="48" :width="185" class="mt-8"
                     color="secondary"
                     style="text-transform: initial" to="company"
                     variant="elevated">
                О Компании
              </v-btn>
            </div>
          </template>
        </v-col>
      </v-row>
      <v-row class="index-page__products-container page__padding">
        <v-col cols="12">
          <h3 class="text-center primary--text">Продукция</h3>
          <v-row class="mx-0 pa-0 mt-6">
            <v-col class="products-wrapper" :style="xl ? `--count: ${page['products'].length}` : ''" cols="12">
              <template v-for="(product, index) of page['products']" :key="index">
                <product-card :product="product"/>
              </template>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <template v-if="page['articles'].length">
        <template v-if="mobile">
          <v-row class="index-page__articles-container page__padding bg-primary">
            <v-col cols="12" class="d-flex justify-start flex-column d-lg-block"
                   style="position: relative; min-height: 770px">
              <div class="title__container">
                <h3 class="text-center text-white" style="width: 100%">Новости компании</h3>
                <template v-if="page['articles'].length > 1">
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
              <template v-if="page['articles'].length > 2">
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
                      <vueper-slide v-for="(article, index) in page['articles']" :key="index" class="pa-0">
                        <template #content>
                          <article-card :article="article"/>
                        </template>
                      </vueper-slide>
                    </vueper-slides>
                  </div>
                </div>
              </template>
              <template v-else-if="page['articles'].length === 2">
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
                    <vueper-slide v-for="(article, index) in page['articles']" :key="index" class="pa-0">
                      <template #content>
                        <article-card :article="article"/>
                      </template>
                    </vueper-slide>
                  </vueper-slides>
                </div>
              </template>
              <template v-else>
                <div style="position: relative;" class="d-flex justify-center align-center w-full mt-8">
                  <article-card :article="page['articles'][0]"/>
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
                <vueper-slide v-for="(article, index) in page['articles']" :key="index" class="pa-0">
                  <template #content>
                    <article-card :article="article"/>
                  </template>
                </vueper-slide>
              </vueper-slides>
            </v-col>
          </v-row>
        </template>
      </template>
      <template v-if="mobile">
        <v-row class="ma-0 pa-0" style="margin-top: 576px">
          <v-col cols="12" class="ma-0 pa-0">
            <template v-if="page['vacancies'].length">
              <v-row class="index-page__vacancies-container page__padding">
                <v-col cols="12">
                  <h3 class="text-center primary--text">Список вакансий</h3>
                  <v-row class="mx-0 pa-0 mt-6">
                    <v-col class="" cols="12">
                      <v-expansion-panels class="rounded">
                        <template v-for="(product, index) of page['vacancies']" :key="index">
                          <v-expansion-panel class="my-4">
                            <v-expansion-panel-title class="bg-primary text-white rounded pr-0">
                              <template v-slot:default="{ expanded }">
                                <div class="d-flex align-center justify-space-between" style="width: 100%">
                                  <span>{{ product.title }}</span>
                                  <svg-icon :path="expanded ? mdiChevronDown : mdiChevronLeft" type="mdi"/>
                                </div>
                              </template>
                            </v-expansion-panel-title>
                            <v-expansion-panel-text class="rounded" v-html="product.description">
                            </v-expansion-panel-text>
                          </v-expansion-panel>
                        </template>
                      </v-expansion-panels>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </template>
          </v-col>
        </v-row>
      </template>
      <template v-else>
        <template v-if="page['vacancies'].length">
          <v-row class="index-page__vacancies-container page__padding">
            <v-col cols="12">
              <h3 class="text-center primary--text">Список вакансий</h3>
              <v-row class="mx-0 pa-0 mt-6">
                <v-col class="" cols="12">
                  <v-expansion-panels class="rounded">
                    <template v-for="(product, index) of page['vacancies']" :key="index">
                      <v-expansion-panel class="my-4">
                        <v-expansion-panel-title class="bg-primary text-white rounded pr-0">
                          <template v-slot:default="{ expanded }">
                            <div class="d-flex align-center justify-space-between" style="width: 100%">
                              <span>{{ product.title }}</span>
                              <svg-icon :path="expanded ? mdiChevronDown : mdiChevronLeft" type="mdi"/>
                            </div>
                          </template>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text class="rounded pa-4" v-html="product.description">
                        </v-expansion-panel-text>
                      </v-expansion-panel>
                    </template>
                  </v-expansion-panels>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </template>
      </template>
      <v-row class="index-page__map-container">
        <v-col class="pa-0 ma-0" cols="12">
          <map-component/>
        </v-col>
      </v-row>
    </client-only>
  </v-container>
</template>

<script setup>
import {computed, ref, watch} from 'vue'
import SvgIcon from '@jamescoyle/vue-icon'
import {VueperSlide, VueperSlides} from "vueperslides";
import {mdiArrowLeftThin, mdiArrowRightThin, mdiChevronDown, mdiChevronLeft} from "@mdi/js";
import ProductCard from "~/components/cards/ProductCard.vue";
import ArticleCard from "~/components/cards/ArticleCard.vue";
import MapComponent from "~/components/MapComponent.vue";
import {useDisplay} from "vuetify";

definePageMeta({
  breadcrumb: 'Главная'
})

const {data: result} = await useFetch('/api/index', {
  baseURL: 'https://proxy.macroprint.site',
  method: 'GET'
})

const page = computed(() => {
  return result.value
})

const width = computed(() => {
  return useDisplay().width.value
})

const { xlAndUp } = useDisplay()

const xl = ref(false)

const { mdAndDown } = useDisplay()

const mobile = ref(false)

watch(mdAndDown, (val) => {
  mobile.value = !!val
}, {immediate: true})

watch(xlAndUp, (val) => {
  xl.value = !!val
}, {immediate: true})

useServerSeoMeta({
  ogTitle: () => page.value['seo']['og_title'],
  title: () => page.value['seo'].title,
  description: () => page.value['seo'].description,
  ogDescription: () => page.value['seo']['og_description'],
  ogImage: () => 'http://macroprint.by/img/mainLogo.png',
  ogUrl: () => 'http://macroprint.by'
})

</script>

<style lang="scss" scoped>

</style>
