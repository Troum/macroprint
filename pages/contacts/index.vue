<template>
  <v-container :fluid="true" class="d-block pa-0 ma-0">
    <v-row class="contacts-page__map-container ma-0">
      <v-col class="pa-0 ma-0" cols="12">
        <map-component/>
      </v-col>
    </v-row>
    <v-row class="page__padding ma-0" style="background: #F7F7F7;">
      <v-col cols="12" class="contacts-page__form-container">
        <div class="contacts-page__info">
          <h2>Как нас найти?</h2>
          <p class="text-body-1">
            Максимально подробное описание всех вариантов маршрута до офиса. На автомобиле, общественном транспорте,
            пешком от остановок, станций метро. Указать находящиеся рядом объекты. Описать возможность парковки
          </p>
          <template v-if="mobile">
            <div class="d-flex flex-column justify-start mb-10" style="row-gap: 20px">
              <div style="display: grid; grid-template-columns: repeat(2, 50%); grid-column-gap: 20px">
                <p class="font-weight-bold text-dark">Адрес:</p>
                <p class="font-weight-light text-secondary">РБ, г. Минск ул. Корженевского 14В</p>
              </div>
              <div style="display: grid; grid-template-columns: repeat(2, 50%); grid-column-gap: 20px">
                <p class="font-weight-bold text-dark">Телефоны:</p>
                <div class="d-flex flex-column align-start justify-start" style="row-gap: 10px">
                  <template v-for="(phone, index) of phones" :key="index">
                    <v-btn style="opacity: 1; height: fit-content; width: fit-content" :ripple="false" variant="plain"
                           :href="phone.href"
                           class="font-weight-regular text-secondary px-0">
                      {{ phone.number }}
                    </v-btn>
                  </template>
                </div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(2, 50%); grid-column-gap: 20px">
                <p class="font-weight-bold text-dark">Время работы:</p>
                <p class="font-weight-light text-secondary">9 <sup>00</sup>&mdash;18 <sup>00</sup></p>
              </div>
              <div style="display: grid; grid-template-columns: repeat(2, 50%); grid-column-gap: 20px">
                <p class="font-weight-bold text-dark">Производство:</p>
                <p class="font-weight-light text-secondary">24 / 7</p>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="contacts-page__info__wrapper">
              <div class="d-flex justify-start align-center" style="column-gap: 30px">
                <p class="font-weight-bold text-dark" style="width: 150px">Адрес:</p>
                <p class="font-weight-light text-secondary">РБ, г. Минск ул. Корженевского 14В</p>
              </div>
              <div class="d-flex justify-start align-start" style="column-gap: 30px">
                <p class="font-weight-bold text-dark" style="width: 150px">Телефоны:</p>
                <div class="d-flex flex-column align-start justify-start" style="row-gap: 10px">
                  <template v-for="(phone, index) of phones" :key="index">
                    <v-btn style="opacity: 1; height: fit-content; width: fit-content" :ripple="false" variant="plain"
                           :href="phone.href"
                           class="font-weight-regular text-secondary px-0">
                      {{ phone.number }}
                    </v-btn>
                  </template>
                </div>
              </div>
              <div class="d-flex justify-start align-center" style="column-gap: 30px">
                <p class="font-weight-bold text-dark" style="width: 150px">Время работы:</p>
                <p class="font-weight-light text-secondary">9 <sup>00</sup>&mdash;18 <sup>00</sup></p>
              </div>
              <div class="d-flex justify-start align-center" style="column-gap: 30px">
                <p class="font-weight-bold text-dark" style="width: 150px">Производство:</p>
                <p class="font-weight-light text-secondary">24 / 7</p>
              </div>
            </div>
          </template>
        </div>
        <div class="contacts-page__feedback-form">
          <v-form>
            <v-card flat class="pa-8">
              <v-card-text class="d-flex flex-column px-0" style="row-gap: 15px">
                <div class="d-flex flex-column" style="row-gap: 10px">
                  <label class="font-weight-bold">Фамилия Имя Отчество</label>
                  <v-text-field variant="outlined" placeholder="Иванов Иван Иванович"></v-text-field>
                </div>
                <div class="d-flex flex-column" style="row-gap: 10px">
                  <label class="font-weight-bold">Название компании</label>
                  <v-text-field variant="outlined" placeholder="FCB"></v-text-field>
                </div>
                <div class="d-flex flex-column" style="row-gap: 10px">
                  <label class="font-weight-bold">Email или телефон</label>
                  <v-text-field variant="outlined" placeholder="+375 (29) 110 00 00"></v-text-field>
                </div>
                <div class="d-flex flex-column" style="row-gap: 10px">
                  <label class="font-weight-bold">Сообщение</label>
                  <v-textarea variant="outlined" placeholder="Ваше сообщение"></v-textarea>
                </div>
              </v-card-text>
              <v-card-actions class="d-flex justify-end align-center px-0 py-0">
                <v-btn :min-height="48" elevation="0" variant="elevated" dark color="secondary" style="opacity: 1"
                       class="px-12 py-3">
                  <span class="font-weight-medium" style="text-transform: initial">Отправить</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import {computed} from "vue";
import {useRoute} from "vue-router";
import {useHeaderStore} from "~/store/header";
import {useCommonStore} from "~/store/common";
import {useDisplay} from "vuetify";

definePageMeta({
  breadcrumb: 'Контакты'
})
const common = useCommonStore()
const header = useHeaderStore()

const route = useRoute()

const page = computed(() => {
  return {}
})

const mobile = computed(() => {
  return useDisplay().mdAndDown.value
})

const phones = computed(() => {
  return common.getPhones
})

useServerSeoMeta({
  title: page.value['title'] ?? null,
  description: page.value['shortDescription'] ?? null,
  ogTitle: page.value['title'] ?? null,
  ogType: 'website',
  ogUrl: route.fullPath,
  ogImage: page.value['image'] ?? null,
  ogLocale: 'ru_RU'
})

header.setHeader('Как нас найти')
</script>

<style lang="scss" scoped>

</style>
