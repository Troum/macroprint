<template>
  <v-card :elevation="0" class="pa-0" color="white" style="position: relative">
    <nuxt-img provider="strapi" :src="product['image']" fit="fill"></nuxt-img>
    <div class="product--icon__wrapper bg-secondary">
      <nuxt-img provider="strapi" :width="60" :src="product['icon']"></nuxt-img>
    </div>
    <v-card-title class="product--title primary--text">
      {{ product['title'] }}
    </v-card-title>
    <v-card-text class="product--description" v-html="truncated">
    </v-card-text>
    <v-card-actions class="product--actions">
      <v-btn
          :flat="true"
          :height="13"
          :ripple="false"
          :to="`/products/${product['slug']}`"
          class="product--actions__detailed-button"
          variant="plain"
      >
        <span class="text-secondary">Подробнее</span>
      </v-btn>
      <v-img :max-width="104" src="/assets/images/vectors/horizontal.svg"></v-img>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import {computed} from "vue";
import { useDisplay } from "vuetify";
import truncate from "truncate-html";

const props = defineProps({
  product: {
    type: Object,
    default: {
      title: null,
      icon: null,
      image: null,
      description: null,
      slug: null
    }
  }
})
const truncated = computed(() => {
  return truncate(props.product['shortDescription'], 4, {byWords: true})
})

</script>

<style lang="scss" scoped>
.product {
  &--icon__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    position: absolute;
    top: calc(((148 * 100) / 500) * 1%);
    left: 20px;
    border-radius: 8px;
  }

  &--title {
    display: inline-block;
    white-space: normal;
    word-break: break-word;
    margin-top: calc(((148 * 100) / 500) * 1%);
    font-family: "DIN Pro", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px !important;
    padding-left: 20px;
    padding-right: 20px;
    @media (max-width: 1220px) {
      font-size: 18px;
      line-height: 22px !important;
    }
  }

  &--description {
    font-family: "DIN Pro", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    padding-left: 20px;
    padding-right: 20px;
  }

  &--actions {
    position: absolute;
    bottom: 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    left: 0;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    @media (max-width: 1220px) {
      bottom: 8px;
    }

    &__detailed-button {
      display: block;
      opacity: 1;
      font-family: "DIN Pro", sans-serif;
      font-style: normal;
      font-weight: 500;
      line-height: 13px;
      padding: 0 !important;
    }
  }
}
</style>
