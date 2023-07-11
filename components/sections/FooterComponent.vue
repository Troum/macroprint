<template>
  <v-footer class="bg-primary footer">
    <client-only>
      <div class="d-flex flex-column align-baseline justify-start" style="row-gap: 20px">
        <v-img src="/white_logo.svg" style="width: max-content"/>
        <div class="address__container">
          <small class="address">
            РБ, г. Минск<br/>
            ул. Корженевского 14В
          </small>
          <v-btn
              @click="openMap"
              :flat="true"
              :height="24"
              :ripple="false"
              class="d-block px-0"
              style="opacity: 1; text-decoration: none"
              variant="plain">
            <span style="text-transform: initial; font-weight: 200;">Смотреть на карте</span>
          </v-btn>
        </div>
        <div class="contacts__container">
          <template v-for="(phone, index) of phones" :key="index">
            <v-btn
                :flat="true"
                :height="24"
                :href="phone.href"
                :ripple="false"
                class="d-block px-0"
                color="secondary"
                style="opacity: 1"
                variant="plain">
              {{ phone.number }}
            </v-btn>
          </template>
          <v-btn
              :flat="true"
              :height="24"
              :ripple="false"
              class="d-block px-0 mt-5"
              color="secondary"
              href="mailto:retail@macroprint.by"
              style="opacity: 1"
              variant="plain">
            <span style="text-transform: lowercase">retail@macroprint.by</span>
          </v-btn>
        </div>
      </div>
      <div class="d-flex flex-column align-baseline justify-start" style="row-gap: 20px">
        <h5 class="footer__title">
          Время работы
        </h5>
        <div class="schedule__container">
          <p class="text-secondary font-weight-light">Время работы:<br class="d-block d-lg-none"> 9:00 -18:00</p>
          <p class="text-secondary font-weight-light">Без выходных</p>
          <p class="text-secondary font-weight-light">Производство: 24/7</p>
        </div>
      </div>
      <div class="d-flex flex-column align-baseline justify-start"
           :style="`row-gap: ${mobile ? 10 : 20}px`">
        <h5 class="footer__title">
          Меню
        </h5>
        <template v-for="(item, index) of menu" :key="index">
          <v-btn
              :flat="true"
              :ripple="false"
              :to="`/${item.route}`"
              class="px-0"
              style="opacity: 1; text-transform: initial; height: fit-content; width: fit-content"
              variant="plain"
          >
            <span class="text-secondary font-weight-light" style="font-size: 16px">{{ item.title }}</span>
          </v-btn>
        </template>
      </div>
      <div class="d-flex flex-column align-baseline justify-start" style="row-gap: 20px">
        <h5 class="footer__title">
          Информация
        </h5>
        <div class="d-flex flex-column text-secondary font-weight-light"
             style="white-space: initial; width: max-content; row-gap: 6px">
          <span>ООО Макпропринт</span>
          <span>УНП 190478452</span>
          <span>Лицензия № 000 00 00<br>выдана 00/00/0000</span>
          <br>
          <span>Все права защищены<br class="d-block d-lg-none"> © {{ new Date().getFullYear() }}</span>
        </div>
        <div class="d-flex justify-start align-center" style="column-gap: 32px">
          <template v-for="(network, index) of networks" :key="index">
            <v-btn :elevation="0" :height="28" :href="network.href" :ripple="false"
                   class="px-0" color="transparent" style="opacity: 1; min-width: max-content" variant="plain">
              <svg-icon :path="network.icon" :size="mobile ? 22 : 28" color="#FFF" type="mdi"/>
            </v-btn>
          </template>
        </div>
      </div>
    </client-only>
  </v-footer>
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon'
import { computed } from "vue";
import { useDisplay } from "vuetify";

defineProps({
  menu: {
    type: Array,
    default: []
  },
  networks: {
    type: Array,
    default: []
  },
  phones: {
    type: Array,
    default: []
  }
})
const openMap = () => {
  location.replace('https://yandex.by/maps/-/CCU9zAxbxC')
}
const mobile = computed(() => {
  return useDisplay().mdAndDown.value
})
</script>

<style scoped>

</style>
