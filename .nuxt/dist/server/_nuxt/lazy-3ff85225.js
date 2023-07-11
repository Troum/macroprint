import { shallowRef, computed, watch } from "vue";
import { p as propsFactory } from "../server.mjs";
const makeLazyProps = propsFactory({
  eager: Boolean
}, "lazy");
function useLazy(props, active) {
  const isBooted = shallowRef(false);
  const hasContent = computed(() => isBooted.value || props.eager || active.value);
  watch(active, () => isBooted.value = true);
  function onAfterLeave() {
    if (!props.eager)
      isBooted.value = false;
  }
  return {
    isBooted,
    hasContent,
    onAfterLeave
  };
}
export {
  makeLazyProps as m,
  useLazy as u
};
//# sourceMappingURL=lazy-3ff85225.js.map
