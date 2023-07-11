import { _ as __nuxt_component_0 } from './index-c766c4c7.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {
  data() {
    return {
      loaded: false
    };
  },
  mounted() {
    try {
      let init = function() {
        const markerElement = document.createElement("img");
        markerElement.src = "/images/vectors/marker.svg";
        const map = new ymaps3.YMap(
          document.getElementById("map"),
          {
            location: {
              center: [27.515747, 53.843235],
              zoom: 17
            },
            behaviors: []
          }
        );
        map.addChild(new ymaps3.YMapDefaultSchemeLayer());
        map.addChild(new ymaps3.YMapDefaultFeaturesLayer({ zIndex: 1800 }));
        map.addChild(new ymaps3.YMapMarker(
          {
            coordinates: [27.515747, 53.843235],
            draggable: false
          },
          markerElement
        ));
      };
      this.loaded = true;
      ymaps3.ready.then(init);
    } catch (error) {
      this.loaded = false;
    }
  },
  computed: {
    width() {
      return this.$vuetify.display.width;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_client_only = __nuxt_component_0;
  _push(ssrRenderComponent(_component_client_only, _attrs, {}, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MapComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MapComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { MapComponent as M };
//# sourceMappingURL=MapComponent-a1f9412b.mjs.map
