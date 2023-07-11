<template>
  <v-card :elevation="0" :height="120" class="pa-0" color="transparent" style="position: relative">
    <v-card-text class="file__container">
      <v-avatar class="rounded-circle bg-primary" :size="93">
        <v-img max-width="27" src="/assets/images/vectors/file.svg"/>
      </v-avatar>
      <v-card-title class="px-0">
        <v-btn :href="`${url}${file['link']}`" :ripple="false"
               variant="plain" style="width: max-content; opacity: 1" class="text-primary px-0" >
          <span class="file--title">
            {{ file['title'] }}
          </span>
        </v-btn>
      </v-card-title>
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({
  file: {
    type: Object,
    default: {
      title: null,
      file: null
    }
  }
})
const config = useRuntimeConfig()
const url = config.public['baseURL']
</script>

<style lang="scss" scoped>
.file {
  &__container {
    display: grid;
    grid-template-columns: 96px 1fr;
    grid-template-rows: 96px;
    grid-column-gap: 15px;
    align-items: center;

  }
  &--title {
    display: block;
    white-space: break-spaces;
    font-family: "DIN Pro", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
}
</style>
