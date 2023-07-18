import { composableNames, unpackMeta } from 'unhead';
import { V as resolveUnrefHeadInput, W as useHead } from '../server.mjs';
import { ref, watchEffect } from 'vue';

function useSeoMeta(input, options) {
  const headInput = ref({});
  watchEffect(() => {
    const resolvedMeta = resolveUnrefHeadInput(input);
    const { title, titleTemplate, ...meta } = resolvedMeta;
    headInput.value = {
      title,
      titleTemplate,
      meta: unpackMeta(meta)
    };
  });
  return useHead(headInput, options);
}
function useServerSeoMeta(input, options) {
  return useSeoMeta(input, { ...options || {}, mode: "server" });
}
const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});

export { useServerSeoMeta as u };
//# sourceMappingURL=index-e31e4a76.mjs.map
