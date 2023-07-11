<template>
  <v-container :fluid="true" class="d-block pa-0 ma-0">
    <v-row class="pa-0 ma-0">
      <v-col cols="12" class="single-product__container page__padding">
        <template v-if="mobile">
          <nuxt-img :alt="product.title" provider="strapi" :src="product.image" fit="cover"
                    :width="width - 30"
                    height="100%"></nuxt-img>
        </template>
        <template v-else>
          <nuxt-img :alt="product.title" provider="strapi" :src="product.image" fit="cover" width="540"
                    height="540"></nuxt-img>
        </template>
        <div class="single-product__description">
          <article v-html="product.description"></article>
        </div>
      </v-col>
    </v-row>
    <template v-if="hasMaterials">
      <v-row class="ma-0 pa-0" style="background-color: #F7F7F7">
        <v-col cols="12" class="single-product-materials__container page__padding ma-0">
          <template v-for="(material, index) of product['materials']" :key="index">
            <material-card :material="material"/>
          </template>
        </v-col>
      </v-row>
    </template>
    <template v-if="hasExamples">
      <v-row class="single-product-examples__container page__padding bg-primary ma-0">
        <v-col cols="12" class="ma-0 pa-0">
          <template v-if="mobile">
            <div class="title__container">
              <div class="d-flex flex-column justify-center align-center" style="row-gap: 15px">
                <h2 class="text-center text-white">Примеры работ</h2>
                <v-divider color="secondary" style="height: 1px; width: 300px; opacity: 1"/>
                <template v-if="product['benefit']">
                  <h3 class="text-center text-white text-uppercase">{{ product['benefit'] }}</h3>
                </template>
              </div>
              <div class="d-flex align-center my-6">
                <v-btn :flat="true"
                       :height="13"
                       :ripple="false"
                       class="example--button d-flex justify-start align-center"
                       variant="plain"
                       @click="$refs.examplesCarousel.previous()">
                  <svg-icon size="32" :path="mdiChevronLeft" type="mdi"/>
                </v-btn>
                <v-btn :flat="true"
                       :height="13"
                       :ripple="false"
                       class="example--button d-flex justify-start align-center"
                       variant="plain"
                       @click="$refs.examplesCarousel.next()">
                  <svg-icon size="32" :path="mdiChevronRight" type="mdi"/>
                </v-btn>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="title__container">
              <v-btn :flat="true"
                     :height="13"
                     :ripple="false"
                     class="example--button d-flex justify-start align-center"
                     variant="plain"
                     @click="$refs.examplesCarousel.previous()">
                <svg-icon :path="mdiArrowLeftThin" type="mdi"/>
                <span>Предыдущие</span>
              </v-btn>
              <div class="d-flex flex-column justify-center align-center" style="row-gap: 15px">
                <h2 class="text-center text-white">Примеры работ</h2>
                <v-divider color="secondary" style="height: 1px; width: 300px; opacity: 1"/>
                <template v-if="product['benefit']">
                  <h3 class="text-center text-white text-uppercase">{{ product['benefit'] }}</h3>
                </template>
              </div>
              <v-btn :flat="true"
                     :height="13"
                     :ripple="false"
                     class="example--button d-flex justify-start align-center"
                     variant="plain"
                     @click="$refs.examplesCarousel.next()">
                <span>Следующие</span>
                <svg-icon :path="mdiArrowRightThin" type="mdi"/>
              </v-btn>
            </div>
          </template>
          <template v-if="mobile">
            <div class="d-flex justify-center align-baseline"
                 style="min-height: 600px; position: relative">
              <div style="position: absolute; width: 200%;">
                <vueper-slides
                    ref="examplesCarousel"
                    :arrows="false"
                    :bullets="false"
                    :dragging-distance="30"
                    :gap="3"
                    :slide-ratio="1 / 4"
                    :visible-slides="xl ? 4 : 3"
                    class="no-shadow mt-6"
                    fixed-height="390px"
                    slide-multiple>
                  <vueper-slide v-for="(example, index) in product.examples" :key="index" class="pa-0">
                    <template #content>
                      <example-card :example="example"/>
                    </template>
                  </vueper-slide>
                </vueper-slides>
              </div>
            </div>
          </template>
          <template v-else>
            <vueper-slides
                ref="examplesCarousel"
                :arrows="false"
                :bullets="false"
                :dragging-distance="30"
                :gap="xl ? 1 : 3"
                :slide-ratio="1 / 4"
                :visible-slides="xl ? 4 : 3"
                class="no-shadow mt-6"
                fixed-height="390px"
                slide-multiple>
              <vueper-slide v-for="(example, index) in product.examples" :key="index" class="pa-0">
                <template #content>
                  <example-card :example="example"/>
                </template>
              </vueper-slide>
            </vueper-slides>
          </template>
        </v-col>
      </v-row>
    </template>
    <v-row class="single-product-others__products-container page__padding ma-0">
      <v-col cols="12" class="pa-0 ma-0">
        <h2 class="text-center primary--text">Другая продукция</h2>
        <v-row class="mx-0 pa-0 mt-6">
          <v-col class="products-wrapper" cols="12">
            <template v-for="(other, index) of product['others']" :key="index">
              <product-card :product="other"/>
            </template>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import _ from 'lodash'
import SvgIcon from "@jamescoyle/vue-icon";
import {computed} from "vue"
import {useRoute} from "vue-router"
import {useHeaderStore} from "~/store/header";
import {VueperSlide, VueperSlides} from "vueperslides";
import {mdiArrowLeftThin, mdiArrowRightThin, mdiChevronLeft, mdiChevronRight} from "@mdi/js";
import ExampleCard from "~/components/cards/ExampleCard.vue";
import ProductCard from "~/components/cards/ProductCard.vue";
import MaterialCard from "~/components/cards/MaterialCard.vue";
import {useDisplay} from "vuetify";

const router = useRoute()
const headerStore = useHeaderStore()
const {data: result} = await useAsyncData(
    'result',
    () => $fetch(`https://proxy.macroprint.site/api/products/${useRoute().params.slug}`)
)
const xl = computed(() => {
  return useDisplay().xlAndUp.value
})
const mobile = computed(() => {
  return useDisplay().mdAndDown.value
})
const width = computed(() => {
  return useDisplay().width.value
})
const product = computed(() => {
  return result.value
})

const hasMaterials = computed(() => {
  return !_.isEmpty(product.value['materials'])
})
const hasExamples = computed(() => {
  return !_.isEmpty(product.value['examples'])
})

useServerSeoMeta({
  title: product.value['title'],
  description: product.value['shortDescription'],
  ogTitle: product.value['title'],
  ogType: 'website',
  ogUrl: router.fullPath,
  ogImage: product.value['image'],
  ogLocale: 'ru_RU'
})

headerStore.setHeader(product.value['title'])


</script>

<style lang="scss" scoped>

</style>
