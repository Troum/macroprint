<template>
  <v-card :elevation="0" :height="567" class="pa-0" color="white" style="position: relative">
    <nuxt-img provider="strapi" :height="274" :src="article['image']" fit="cover"></nuxt-img>
    <v-card-subtitle class="article--subtitle">
      <svg-icon :path="mdiCalendar" :size="16" type="mdi"/>
      <span>{{ article['date'] }}</span>
    </v-card-subtitle>
    <v-card-title class="article--title text-secondary">
      {{ article['title'] }}
    </v-card-title>
    <v-card-text class="article--description" v-html="truncated">
    </v-card-text>
  </v-card>
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon'
import {mdiCalendar} from "@mdi/js";
import {computed} from "vue";
import truncate from "truncate-html";
import {useDisplay} from "vuetify";
const mobile = computed(() => {
  return useDisplay().mdAndDown.value
})
const props = defineProps({
  article: {
    type: Object,
    default: {
      title: null,
      date: null,
      image: null,
      description: null,
      slug: null
    }
  }
})
const truncated = computed(() => {
  const count = mobile ? 10 : 20
  return truncate(props.article.description, count, {byWords: true})
})
</script>

<style lang="scss" scoped>
.article {
  &--subtitle {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 10px;
    margin-top: 32px;
    white-space: normal;
    word-break: break-word;
    font-family: "DIN Pro", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    padding-left: 20px;
    padding-right: 20px;
  }

  &--title {
    display: block;
    white-space: normal;
    word-break: break-word;
    font-family: "DIN Pro", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    padding-left: 20px;
    padding-right: 20px;
    @media (min-width: 1920px) {
      font-size: 22px;
    }
  }

  &--description {
    position: absolute;
    bottom: 45px;
    font-family: "DIN Pro", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
