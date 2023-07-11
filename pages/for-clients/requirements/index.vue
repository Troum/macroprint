<template>
  <v-container :fluid="true" class="d-block pa-0 ma-0">
    <v-row class="pa-0 page__padding">
      <v-col cols="12" class="py-16">
        <article class="requirement__container" v-html="page.description"></article>
      </v-col>
    </v-row>
    <v-row class="pa-0 page__padding" style="background-color: #f7f7f7">
      <v-col cols="12" class="py-16 requirements__container">
        <template v-for="(requirement, index) of page['requirements']" :key="index">
          <requirement-card :requirement="requirement" />
        </template>
      </v-col>
    </v-row>
    <v-row class="pa-0 page__padding py-16" style="background-color: #fff">
      <v-col cols="12">
        <h2 class="text-center">Библиотека файлов</h2>
        <h3 class="text-center" style="font-size: 10px; line-height: 13px;">
          мануалы и учебники с техническими требованиями
        </h3>
      </v-col>
      <v-col cols="12" class="requirement__files__container">
        <template v-for="(file, index) of page['files']" :key="index">
          <file-card :file="file" />
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import {computed} from "vue";
import {useHeaderStore} from "~/store/header";
import RequirementCard from "~/components/cards/RequirementCard.vue";
import FileCard from "~/components/cards/FileCard.vue";

const headerStore = useHeaderStore()

const { data: result } = await useFetch('/api/requirements', {
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
  ogUrl: () => 'http://macroprint.by'
})
</script>

<style lang="scss" scoped>

</style>
