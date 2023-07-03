<template>
  <client-only>
    <template v-if="mobile">
      <v-system-bar id="systemBar" color="primary" class="px-0">
        <div class="top-info-header">
          <div class="address-info-block px-4 py-3">
            <div class="map-container">
              <svg-icon size="12" :path="mdiMapLegend" class="map" type="mdi"></svg-icon>
              <span class="address">РБ, г. Минск, ул.Корженевского 14В</span>
            </div>
          </div>
          <div class="bg-secondary d-flex flex-wrap justify-center"
               style="padding: 16px 5%; row-gap: 6px;">
            <template v-for="(phone, index) of phones" :key="index">
              <v-btn :flat="true" :href="phone.href"
                     style="flex: 0 0 50%; font-size: 12px; height: fit-content"
                     :ripple="false"
                     class="d-flex align-center justify-center phone-button"
                     variant="plain">
                <svg-icon size="12" :path="mdiCellphone" type="mdi"></svg-icon>
                <span>{{ phone.number }}</span>
              </v-btn>
            </template>
          </div>
        </div>
      </v-system-bar>
      <v-app-bar elevation="0" color="white" :height="64" :style="`margin-top: 65px`">
        <div class="d-flex justify-space-between align-center px-4" style="width: 100%">
          <RouterLink to="/">
            <v-img :max-width="110" src="/logo.svg"></v-img>
          </RouterLink>
          <v-btn
              id="menu-activator"
              variant="flat"
              icon
              :ripple="false"
              style="opacity: 1"
          >
            <svg-icon class="text-black" :path="mdiMenu" size="24" type="mdi"></svg-icon>
          </v-btn>
          <v-menu :close-on-content-click="false" activator="#menu-activator">
            <v-list v-model:opened="open" elevation="1">
              <template v-for="(item, index) of menu" :key="index">
                <v-list-group :ripple="false"
                              :value="`${submenuExist(item)}_${item.title}`">
                  <template v-slot:activator="{ props, isOpen }">
                    <template v-if="submenuExist(item)">
                      <v-list-item
                          :ripple="false"
                          v-bind="props"
                      >
                        <v-list-item-title class="d-flex justify-start align-center">
                          <svg-icon :path="isOpen? mdiChevronDown : mdiChevronRight" type="mdi"/>
                          <span class="d-inline-block ml-2">{{ item.title }}</span>
                        </v-list-item-title>
                      </v-list-item>
                    </template>
                    <template v-else>
                      <v-list-item
                          :ripple="false"
                          v-bind="props"
                          :to="item.route"
                      >
                        <v-list-item-title class="d-flex justify-start align-center">
                          <svg-icon :path="isOpen? mdiChevronDown : mdiChevronRight" type="mdi"/>
                          <span class="d-inline-block ml-2">{{ item.title }}</span>
                        </v-list-item-title>
                      </v-list-item>
                    </template>
                  </template>

                  <v-list-item
                      active-class="mobile_menu_item_active"
                      :ripple="false"
                      v-for="(subitem, i) of item.submenu"
                      :key="i"
                      :to="subitem.route"
                  >
                    <v-list-item-title class="d-flex justify-start align-center">
                      <svg-icon :path="mdiCircleSmall" type="mdi"/>
                      <span class="d-inline-block ml-2">{{ subitem.title }}</span>
                    </v-list-item-title>
                  </v-list-item>
                </v-list-group>
              </template>
            </v-list>
          </v-menu>
        </div>
      </v-app-bar>
      <template v-if="notIndex">
        <v-img style="margin-top: 150px" gradient="to top right, rgba(0,26,49,0.75), rgba(0,26,49,0.75)"
               :cover="true"
               :min-height="130"
               src="/breadcrumbs_background.png">
          <div class="d-flex flex-column justify-center align-start w-full fill-height page__padding">
            <div>
              <template v-for="breadcrumb of breadcrumbs">
                <router-link
                    class="text-white font-weight-bold breadcrumb"
                    :to="breadcrumb.link"
                >
                  {{ breadcrumb.label }}
                </router-link>
              </template>
            </div>
            <h1 class="text-white" style="line-height: 32px; letter-spacing: -1.44px;">
              {{ title }}
            </h1>
          </div>
        </v-img>
      </template>
    </template>
    <template v-else>
      <v-system-bar class="page__padding" :height="40" absolute color="primary">
        <div class="top-info-header">
          <div class="address-info-block">
            <div class="map-container">
              <svg-icon :path="mdiMapLegend" class="map" type="mdi"></svg-icon>
              <span class="address">РБ, г. Минск, ул.Корженевского 14В</span>
            </div>
          </div>
          <div class="phones-info-block">
            <template v-for="(phone, index) of phones" :key="index">
              <v-btn :flat="true" :href="phone.href"
                     :ripple="false"
                     class="d-flex align-center justify-space-between phone-button"
                     variant="plain">
                <svg-icon :path="mdiCellphone" type="mdi"></svg-icon>
                <span>{{ phone.number }}</span>
              </v-btn>
            </template>
          </div>
        </div>
      </v-system-bar>
      <v-app-bar :elevation="0" :height="78" absolute>
        <div class="top-bar">
          <RouterLink to="/">
            <v-img :max-width="210" src="/logo.svg"></v-img>
          </RouterLink>
          <div class="d-flex justify-space-between">
            <template v-for="(item, index) of menu" :key="index">
              <template v-if="submenuExist(item)">
                <v-menu content-class="main__menu">
                  <template v-slot:activator="{ props }">
                    <v-btn
                        :active="active(item.route)"
                        style="opacity: 1;"
                        :flat="true"
                        :height="48"
                        :ripple="false"
                        v-bind="props"
                        variant="plain"
                    >
                      {{ item.title }}
                      <svg-icon :path="mdiChevronDown" size="12" type="mdi"/>
                    </v-btn>
                  </template>

                  <v-list class="submenu__container" elevation="1">
                    <v-list-item
                        :ripple="false"
                        active-class="submenu__container__item__active"
                        class="submenu__container__item"
                        v-for="(subitem, i) of item.submenu"
                        :to="subitem.route"
                        :key="i"
                    >
                      <v-list-item-title class="submenu__container__item__title">{{ subitem.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </template>
              <template v-else>
                <v-btn :flat="true"
                       :height="48"
                       style="opacity: 1"
                       variant="plain"
                       color="primary"
                       :ripple="false">
                  <NuxtLink
                      style="text-decoration: none"
                      :to="item.route"
                      class="text-primary"
                      active-class="menu__item__active-class"
                  >
                    {{ item.title }}
                  </NuxtLink>
                </v-btn>
              </template>
            </template>
            <v-btn :href="findUs" target="_blank"
                   :ripple="false"
                   :elevation="0"
                   :height="48"
                   color="primary"
                   variant="elevated">
              Как нас найти?
            </v-btn>
          </div>
        </div>
      </v-app-bar>
      <template v-if="notIndex">
        <v-img style="margin-top: 118px" gradient="to top right, rgba(0,26,49,0.75), rgba(0,26,49,0.75)"
               :cover="true"
               :min-height="160"
               :max-height="160"
               src="/breadcrumbs_background.png">
          <div class="d-flex flex-column justify-center align-start w-full fill-height page__padding">
            <div>
              <template v-for="breadcrumb of breadcrumbs">
                <router-link
                    class="text-white font-weight-bold breadcrumb"
                    :to="breadcrumb.link"
                >
                  {{ breadcrumb.label }}
                </router-link>
              </template>
            </div>
            <h1 class="text-white" style="line-height: 32px; letter-spacing: -1.44px;">
              {{ title }}
            </h1>
          </div>
        </v-img>
      </template>
    </template>
  </client-only>
</template>

<script setup>
import _ from 'lodash'
import SvgIcon from '@jamescoyle/vue-icon'
import {
  mdiCellphone,
  mdiChevronDown,
  mdiChevronRight,
  mdiCircleSmall,
  mdiMapLegend,
  mdiMenu
} from "@mdi/js";
import {computed, ref, watch} from "vue";
import {useRoute} from "vue-router"
import {useBreadcrumbsStore} from "~/store/breadcrumbs";
import {useHeaderStore} from "~/store/header";
import {useDisplay} from "vuetify";
import {useGeolocation} from "@vueuse/core";

defineProps({
  menu: {
    type: Array,
    default: []
  },
  phones: {
    type: Array,
    default: []
  }
})
const open = ref([''])
const {$breadcrumbs} = useNuxtApp()
const breadcrumbsStore = useBreadcrumbsStore()
const headerStore = useHeaderStore()
const {coords} = useGeolocation()

if (!_.isEmpty($breadcrumbs.value)) {
  breadcrumbsStore.addBreadcrumbToBreadcrumbs($breadcrumbs.value)
}

const position = computed(() => {
  return {
    latitude: coords.value.latitude,
    longitude: coords.value.longitude,
  }
})

const findUs = computed(() => {
  return useDisplay().mobile.value ? 'yandexmaps://maps.yandex.ru/?ll=27.515747,53.843235&z=17&l=map' : `https://yandex.by/maps/157/minsk/?ll=27.515747,53.843235&mode=routes&rtext=${position.value['latitude']},${position.value['longitude']}~53.843235,27.515747`
})

const submenuExist = (item) => {
  return Object.hasOwn(item, 'submenu')
}
const notIndex = computed(() => {
  return useRoute().name !== 'index'
})

const active = (route) => {
  return useRoute().fullPath.includes(route)
}

const breadcrumbs = computed(() => {
  return $breadcrumbs.value.length ? $breadcrumbs.value : breadcrumbsStore.list
})

const title = computed(() => {
  return headerStore.title
})

const { mdAndDown } = useDisplay()

const mobile = ref(false)

watch(mdAndDown, (val) => {
  mobile.value = !!val
}, {immediate: true})

</script>

<style lang="scss" scoped>
.menu__item__active-class {
  color: #D24829 !important;
}

.submenu {
  &__container {
    position: relative;
    margin-top: 32px !important;
    padding: 20px;

    &__item {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      column-gap: 12px;
      padding: 0 !important;

      &__active {
        position: relative;

        & :deep > .v-list-item__overlay {
          opacity: 0 !important;
        }

        & .submenu__container__item__title {
          &::after {
            content: '';
            display: block;
            bottom: 0;
            width: 100%;
            height: 1px;
            background-color: #001A31;
          }
        }
      }

      &:hover {
        & :deep > .v-list-item__overlay {
          opacity: 0 !important;
        }
      }

      &::before {
        content: '';
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 6px;
        background-color: #001A31;
      }
    }
  }
}

.breadcrumb {
  font-family: DIN Pro, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 115%;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.4em;

  &::after {
    display: inline-block;
    content: '/';
    margin-left: 5px;
    margin-right: 5px;
    height: 18px;
    width: 10px;
  }

  &:last-of-type {
    &::after {
      content: '';
    }
  }
}
</style>
