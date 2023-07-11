<template>
  <v-card :elevation="0" :height="175" class="pa-0" color="transparent" style="position: relative">
    <v-card-title class="requirement--title text-primary px-0">
      {{ requirement['title'] }}
    </v-card-title>
    <v-card-text class="requirement--description px-0" v-html="truncated"></v-card-text>
  </v-card>
</template>

<script setup>
import {computed} from "vue";
import truncate from "truncate-html";

const props = defineProps({
  requirement: {
    type: Object,
    default: {
      title: null,
      image: null,
      description: null,
    }
  }
})
const truncated = computed(() => {
  return truncate(props.requirement.description, 20, {byWords: true})
})
</script>

<style lang="scss" scoped>
.requirement {
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
