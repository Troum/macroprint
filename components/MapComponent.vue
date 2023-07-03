<template>
  <client-only>
    <div id="map" class="d-flex justify-center align-center" :style="`width: ${width}px; height: 500px`">
      <template v-if="!loaded">
        <h2 class="text-center text-green-accent-4">Карта не загружена</h2>
      </template>
    </div>
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      loaded: false
    }
  },
  mounted() {
    try {
      this.loaded = true
      ymaps3.ready.then(init)

      function init() {
        const markerElement = document.createElement('img')
        markerElement.src = '/assets/images/vectors/marker.svg'
        // Создание карты
        const map = new ymaps3.YMap(document.getElementById('map'), {
              location: {
                center: [27.515747, 53.843235],
                zoom: 17
              },
              behaviors: []
            }
        )
        map.addChild(new ymaps3.YMapDefaultSchemeLayer())
        map.addChild(new ymaps3.YMapDefaultFeaturesLayer({zIndex: 1800}))
        map.addChild(new ymaps3.YMapMarker({
              coordinates: [27.515747, 53.843235],
              draggable: false
            },
            markerElement
        ))
      }
    } catch (error) {
      this.loaded = false
    }
  },
  computed: {
    width() {
      return this.$vuetify.display.width
    }
  }
}
</script>

<style scoped>

</style>
