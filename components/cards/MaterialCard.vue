<template>
  <v-card :elevation="0" class="pa-0" color="white">
    <nuxt-img provider="strapi" :height="200" :src="material['image']" fit="cover"></nuxt-img>
    <v-card-title class="material--title primary--text">
      {{ material['title'] }}
    </v-card-title>
    <v-card-text class="material--description" v-html="truncated">
    </v-card-text>
  </v-card>
</template>

<script setup>
import {computed} from "vue";
import truncate from "truncate-html";

const props = defineProps({
  material: {
    type: Object,
    default: {
      title: null,
      image: null,
      description: null
    }
  }
})
const truncated = computed(() => {
  return truncate(props.material['description'], 50, {byWords: true})
})
</script>

<style lang="scss" scoped>
.material {

  &--title {
    display: inline-block;
    white-space: normal;
    word-break: break-word;
    font-family: DIN Pro, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    padding-left: 20px;
    padding-right: 20px;
  }

  &--description {
    font-family: DIN Pro, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
