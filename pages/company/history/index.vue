<template>
  <v-container :fluid="true" class="d-block pa-0 ma-0">
    <v-row class="pa-0">

    </v-row>
  </v-container>
</template>

<script setup>
import { useHeaderStore } from "~/store/header";
const header = useHeaderStore()

definePageMeta({
  breadcrumb: 'История компании'
})

header.setHeader('История компании')

</script>

<style lang="scss" scoped>

</style>
