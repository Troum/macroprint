import { p as propsFactory, g as getCurrentInstance } from '../server.mjs';

const makeComponentProps = propsFactory({
  class: [String, Array],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component");
function useRender(render) {
  const vm = getCurrentInstance("useRender");
  vm.render = render;
}
const makeTagProps = propsFactory({
  tag: {
    type: String,
    default: "div"
  }
}, "tag");

export { makeTagProps as a, makeComponentProps as m, useRender as u };
//# sourceMappingURL=tag-eb37962f.mjs.map
