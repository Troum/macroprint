<template>
  <v-card :elevation="0" :height="390" class="pa-0" color="transparent" style="position: relative">
    <nuxt-img provider="strapi" :height="219" :src="example['image']" fit="cover"></nuxt-img>
    <v-card-title class="example--title text-white px-0">
      {{ example['title'] }}
    </v-card-title>
    <v-card-subtitle class="px-0 text-secondary" style="opacity: 1">{{ example['material'] }}</v-card-subtitle>
    <v-card-text class="example--description px-0" v-html="truncated">
    </v-card-text>
  </v-card>
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon'
import {mdiCalendar} from "@mdi/js";
import {computed} from "vue";
import truncate from "truncate-html";

const props = defineProps({
  example: {
    type: Object,
    default: {
      title: null,
      image: null,
      description: null,
    }
  }
})
const truncated = computed(() => {
  return truncate(props.example.description, 8, {byWords: true})
})
</script>

<style lang="scss" scoped>
.example {
  &--title {
    display: block;
    white-space: normal;
    word-break: initial;
    font-family: "DIN Pro", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    font-feature-settings: 'pnum' on, 'lnum' on;
  }

  &--description {
    bottom: 45px;
    font-family: "DIN Pro", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
