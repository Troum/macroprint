import { M as MapComponent } from './MapComponent-a1f9412b.mjs';
import { ref, computed, toRef, watch, shallowRef, watchEffect, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext, provide, withDirectives, vShow, unref, resolveDirective, cloneVNode, nextTick, vModelText, inject } from 'vue';
import { useRoute } from 'vue-router';
import { u as useServerSeoMeta, V as VCol } from './VCol-9e15a614.mjs';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useHeaderStore } from './header-5532b7d3.mjs';
import { f as forwardRefs, n as nullifyTransforms, a as animate, u as useCommonStore, s as standardEasing } from './forwardRefs-f7ca489d.mjs';
import { V as VContainer, a as VRow } from './VRow-5d27b55a.mjs';
import { V as VBtn } from './VBtn-f750a874.mjs';
import { m as makeComponentProps, u as useRender } from './tag-d4286d97.mjs';
import { p as propsFactory, g as genericComponent, m as makeThemeProps, I as IconValue, E as EventProp, l as provideTheme, e as useRtl, F as getUid, v as convertToUnit, J as wrapInArray, y as useProxiedModel, b as useDisplay, C as consoleWarn, D as useLocale, t as getCurrentInstanceName, K as useToggleScope, L as filterInputAttrs, G as isOn, H as pick, M as callEvent, N as clamp } from '../server.mjs';
import { V as VCard, a as VCardText, b as VCardActions } from './VCard-cc02c7f0.mjs';
import { V as VSlideYTransition, a as VExpandXTransition } from './index-c766c4c7.mjs';
import { m as makeTransitionProps, a as makeLoaderProps, b as makeRoundedProps, u as useLoader, c as useRounded, d as useBackgroundColor, e as useTextColor, f as makeDensityProps, g as useDensity, I as Intersect$1, M as MaybeTransition, L as LoaderSlot, V as VIcon } from './index-646df174.mjs';
import 'unhead';
import './asyncData-cccf8739.mjs';
import '@mdi/js';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import 'h3';
import '@unhead/ssr';
import '@unhead/shared';
import 'ufo';
import 'cookie-es';
import 'ohash';
import 'qs';
import 'vue-3-breadcrumbs';
import 'pinia-plugin-persistedstate';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'defu';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'ipx';

const FormKey = Symbol.for("vuetify:form");
const makeFormProps = propsFactory({
  disabled: Boolean,
  fastFail: Boolean,
  readonly: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  validateOn: {
    type: String,
    default: "input"
  }
}, "form");
function createForm(props) {
  const model = useProxiedModel(props, "modelValue");
  const isDisabled = computed(() => props.disabled);
  const isReadonly = computed(() => props.readonly);
  const isValidating = shallowRef(false);
  const items = ref([]);
  const errors = ref([]);
  async function validate() {
    const results = [];
    let valid = true;
    errors.value = [];
    isValidating.value = true;
    for (const item of items.value) {
      const itemErrorMessages = await item.validate();
      if (itemErrorMessages.length > 0) {
        valid = false;
        results.push({
          id: item.id,
          errorMessages: itemErrorMessages
        });
      }
      if (!valid && props.fastFail)
        break;
    }
    errors.value = results;
    isValidating.value = false;
    return {
      valid,
      errors: errors.value
    };
  }
  function reset() {
    items.value.forEach((item) => item.reset());
  }
  function resetValidation() {
    items.value.forEach((item) => item.resetValidation());
  }
  watch(items, () => {
    let valid = 0;
    let invalid = 0;
    const results = [];
    for (const item of items.value) {
      if (item.isValid === false) {
        invalid++;
        results.push({
          id: item.id,
          errorMessages: item.errorMessages
        });
      } else if (item.isValid === true)
        valid++;
    }
    errors.value = results;
    model.value = invalid > 0 ? false : valid === items.value.length ? true : null;
  }, {
    deep: true
  });
  provide(FormKey, {
    register: (_ref) => {
      let {
        id,
        validate: validate2,
        reset: reset2,
        resetValidation: resetValidation2
      } = _ref;
      if (items.value.some((item) => item.id === id)) {
        consoleWarn(`Duplicate input name "${id}"`);
      }
      items.value.push({
        id,
        validate: validate2,
        reset: reset2,
        resetValidation: resetValidation2,
        isValid: null,
        errorMessages: []
      });
    },
    unregister: (id) => {
      items.value = items.value.filter((item) => {
        return item.id !== id;
      });
    },
    update: (id, isValid, errorMessages) => {
      const found = items.value.find((item) => item.id === id);
      if (!found)
        return;
      found.isValid = isValid;
      found.errorMessages = errorMessages;
    },
    isDisabled,
    isReadonly,
    isValidating,
    isValid: model,
    items,
    validateOn: toRef(props, "validateOn")
  });
  return {
    errors,
    isDisabled,
    isReadonly,
    isValidating,
    isValid: model,
    items,
    validate,
    reset,
    resetValidation
  };
}
function useForm() {
  return inject(FormKey, null);
}
const makeVFormProps = propsFactory({
  ...makeComponentProps(),
  ...makeFormProps()
}, "VForm");
const VForm = genericComponent()({
  name: "VForm",
  props: makeVFormProps(),
  emits: {
    "update:modelValue": (val) => true,
    submit: (e) => true
  },
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const form = createForm(props);
    const formRef = ref();
    function onReset(e) {
      e.preventDefault();
      form.reset();
    }
    function onSubmit(_e) {
      const e = _e;
      const ready = form.validate();
      e.then = ready.then.bind(ready);
      e.catch = ready.catch.bind(ready);
      e.finally = ready.finally.bind(ready);
      emit("submit", e);
      if (!e.defaultPrevented) {
        ready.then((_ref2) => {
          var _a;
          let {
            valid
          } = _ref2;
          if (valid) {
            (_a = formRef.value) == null ? void 0 : _a.submit();
          }
        });
      }
      e.preventDefault();
    }
    useRender(() => {
      var _a;
      return createVNode("form", {
        "ref": formRef,
        "class": ["v-form", props.class],
        "style": props.style,
        "novalidate": true,
        "onReset": onReset,
        "onSubmit": onSubmit
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots, form)]);
    });
    return forwardRefs(form, formRef);
  }
});
const makeVCounterProps = propsFactory({
  active: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ...makeComponentProps(),
  ...makeTransitionProps({
    transition: {
      component: VSlideYTransition
    }
  })
}, "VCounter");
const VCounter = genericComponent()({
  name: "VCounter",
  functional: true,
  props: makeVCounterProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const counter = computed(() => {
      return props.max ? `${props.value} / ${props.max}` : String(props.value);
    });
    useRender(() => createVNode(MaybeTransition, {
      "transition": props.transition
    }, {
      default: () => [withDirectives(createVNode("div", {
        "class": ["v-counter", props.class],
        "style": props.style
      }, [slots.default ? slots.default({
        counter: counter.value,
        max: props.max,
        value: props.value
      }) : counter.value]), [[vShow, props.active]])]
    }));
    return {};
  }
});
const makeVLabelProps = propsFactory({
  text: String,
  clickable: Boolean,
  ...makeComponentProps(),
  ...makeThemeProps()
}, "VLabel");
const VLabel = genericComponent()({
  name: "VLabel",
  props: makeVLabelProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      var _a;
      return createVNode("label", {
        "class": ["v-label", {
          "v-label--clickable": props.clickable
        }, props.class],
        "style": props.style
      }, [props.text, (_a = slots.default) == null ? void 0 : _a.call(slots)]);
    });
    return {};
  }
});
const makeVFieldLabelProps = propsFactory({
  floating: Boolean,
  ...makeComponentProps()
}, "VFieldLabel");
const VFieldLabel = genericComponent()({
  name: "VFieldLabel",
  props: makeVFieldLabelProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => createVNode(VLabel, {
      "class": ["v-field-label", {
        "v-field-label--floating": props.floating
      }, props.class],
      "style": props.style,
      "aria-hidden": props.floating || void 0
    }, slots));
    return {};
  }
});
function useInputIcon(props) {
  const {
    t
  } = useLocale();
  function InputIcon(_ref) {
    var _a;
    let {
      name
    } = _ref;
    const localeKey = {
      prepend: "prependAction",
      prependInner: "prependAction",
      append: "appendAction",
      appendInner: "appendAction",
      clear: "clear"
    }[name];
    const listener = props[`onClick:${name}`];
    const label = listener && localeKey ? t(`$vuetify.input.${localeKey}`, (_a = props.label) != null ? _a : "") : void 0;
    return createVNode(VIcon, {
      "icon": props[`${name}Icon`],
      "aria-label": label,
      "onClick": listener
    }, null);
  }
  return {
    InputIcon
  };
}
const makeFocusProps = propsFactory({
  focused: Boolean,
  "onUpdate:focused": EventProp()
}, "focus");
function useFocus(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const isFocused = useProxiedModel(props, "focused");
  const focusClasses = computed(() => {
    return {
      [`${name}--focused`]: isFocused.value
    };
  });
  function focus() {
    isFocused.value = true;
  }
  function blur() {
    isFocused.value = false;
  }
  return {
    focusClasses,
    isFocused,
    focus,
    blur
  };
}
const allowedVariants = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"];
const makeVFieldProps = propsFactory({
  appendInnerIcon: IconValue,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: IconValue,
    default: "$clear"
  },
  active: Boolean,
  centerAffix: {
    type: Boolean,
    default: void 0
  },
  color: String,
  baseColor: String,
  dirty: Boolean,
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  flat: Boolean,
  label: String,
  persistentClear: Boolean,
  prependInnerIcon: IconValue,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: "filled",
    validator: (v) => allowedVariants.includes(v)
  },
  "onClick:clear": EventProp(),
  "onClick:appendInner": EventProp(),
  "onClick:prependInner": EventProp(),
  ...makeComponentProps(),
  ...makeLoaderProps(),
  ...makeRoundedProps(),
  ...makeThemeProps()
}, "VField");
const VField = genericComponent()({
  name: "VField",
  inheritAttrs: false,
  props: {
    id: String,
    ...makeFocusProps(),
    ...makeVFieldProps()
  },
  emits: {
    "update:focused": (focused) => true,
    "update:modelValue": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      loaderClasses
    } = useLoader(props);
    const {
      focusClasses,
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const {
      InputIcon
    } = useInputIcon(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      rtlClasses
    } = useRtl();
    const isActive = computed(() => props.dirty || props.active);
    const hasLabel = computed(() => !props.singleLine && !!(props.label || slots.label));
    const uid = getUid();
    const id = computed(() => props.id || `input-${uid}`);
    const messagesId = computed(() => `${id.value}-messages`);
    const labelRef = ref();
    const floatingLabelRef = ref();
    const controlRef = ref();
    const isPlainOrUnderlined = computed(() => ["plain", "underlined"].includes(props.variant));
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "bgColor"));
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(computed(() => {
      return props.error || props.disabled ? void 0 : isActive.value && isFocused.value ? props.color : props.baseColor;
    }));
    watch(isActive, (val) => {
      if (hasLabel.value) {
        const el = labelRef.value.$el;
        const targetEl = floatingLabelRef.value.$el;
        requestAnimationFrame(() => {
          const rect = nullifyTransforms(el);
          const targetRect = targetEl.getBoundingClientRect();
          const x = targetRect.x - rect.x;
          const y = targetRect.y - rect.y - (rect.height / 2 - targetRect.height / 2);
          const targetWidth = targetRect.width / 0.75;
          const width = Math.abs(targetWidth - rect.width) > 1 ? {
            maxWidth: convertToUnit(targetWidth)
          } : void 0;
          const style = getComputedStyle(el);
          const targetStyle = getComputedStyle(targetEl);
          const duration = parseFloat(style.transitionDuration) * 1e3 || 150;
          const scale = parseFloat(targetStyle.getPropertyValue("--v-field-label-scale"));
          const color = targetStyle.getPropertyValue("color");
          el.style.visibility = "visible";
          targetEl.style.visibility = "hidden";
          animate(el, {
            transform: `translate(${x}px, ${y}px) scale(${scale})`,
            color,
            ...width
          }, {
            duration,
            easing: standardEasing,
            direction: val ? "normal" : "reverse"
          }).finished.then(() => {
            el.style.removeProperty("visibility");
            targetEl.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const slotProps = computed(() => ({
      isActive,
      isFocused,
      controlRef,
      blur,
      focus
    }));
    function onClick(e) {
      if (e.target !== document.activeElement) {
        e.preventDefault();
      }
    }
    useRender(() => {
      var _a2;
      var _a, _b, _c;
      const isOutlined = props.variant === "outlined";
      const hasPrepend = slots["prepend-inner"] || props.prependInnerIcon;
      const hasClear = !!(props.clearable || slots.clear);
      const hasAppend = !!(slots["append-inner"] || props.appendInnerIcon || hasClear);
      const label = slots.label ? slots.label({
        ...slotProps.value,
        label: props.label,
        props: {
          for: id.value
        }
      }) : props.label;
      return createVNode("div", mergeProps({
        "class": ["v-field", {
          "v-field--active": isActive.value,
          "v-field--appended": hasAppend,
          "v-field--center-affix": (_a2 = props.centerAffix) != null ? _a2 : !isPlainOrUnderlined.value,
          "v-field--disabled": props.disabled,
          "v-field--dirty": props.dirty,
          "v-field--error": props.error,
          "v-field--flat": props.flat,
          "v-field--has-background": !!props.bgColor,
          "v-field--persistent-clear": props.persistentClear,
          "v-field--prepended": hasPrepend,
          "v-field--reverse": props.reverse,
          "v-field--single-line": props.singleLine,
          "v-field--no-label": !label,
          [`v-field--variant-${props.variant}`]: true
        }, themeClasses.value, backgroundColorClasses.value, focusClasses.value, loaderClasses.value, roundedClasses.value, rtlClasses.value, props.class],
        "style": [backgroundColorStyles.value, textColorStyles.value, props.style],
        "onClick": onClick
      }, attrs), [createVNode("div", {
        "class": "v-field__overlay"
      }, null), createVNode(LoaderSlot, {
        "name": "v-field",
        "active": !!props.loading,
        "color": props.error ? "error" : props.color
      }, {
        default: slots.loader
      }), hasPrepend && createVNode("div", {
        "key": "prepend",
        "class": "v-field__prepend-inner"
      }, [props.prependInnerIcon && createVNode(InputIcon, {
        "key": "prepend-icon",
        "name": "prependInner"
      }, null), (_a = slots["prepend-inner"]) == null ? void 0 : _a.call(slots, slotProps.value)]), createVNode("div", {
        "class": "v-field__field",
        "data-no-activator": ""
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(props.variant) && hasLabel.value && createVNode(VFieldLabel, {
        "key": "floating-label",
        "ref": floatingLabelRef,
        "class": [textColorClasses.value],
        "floating": true,
        "for": id.value
      }, {
        default: () => [label]
      }), createVNode(VFieldLabel, {
        "ref": labelRef,
        "for": id.value
      }, {
        default: () => [label]
      }), (_b = slots.default) == null ? void 0 : _b.call(slots, {
        ...slotProps.value,
        props: {
          id: id.value,
          class: "v-field__input",
          "aria-describedby": messagesId.value
        },
        focus,
        blur
      })]), hasClear && createVNode(VExpandXTransition, {
        "key": "clear"
      }, {
        default: () => [withDirectives(createVNode("div", {
          "class": "v-field__clearable",
          "onMousedown": (e) => {
            e.preventDefault();
            e.stopPropagation();
          }
        }, [slots.clear ? slots.clear() : createVNode(InputIcon, {
          "name": "clear"
        }, null)]), [[vShow, props.dirty]])]
      }), hasAppend && createVNode("div", {
        "key": "append",
        "class": "v-field__append-inner"
      }, [(_c = slots["append-inner"]) == null ? void 0 : _c.call(slots, slotProps.value), props.appendInnerIcon && createVNode(InputIcon, {
        "key": "append-icon",
        "name": "appendInner"
      }, null)]), createVNode("div", {
        "class": ["v-field__outline", textColorClasses.value]
      }, [isOutlined && createVNode(Fragment, null, [createVNode("div", {
        "class": "v-field__outline__start"
      }, null), hasLabel.value && createVNode("div", {
        "class": "v-field__outline__notch"
      }, [createVNode(VFieldLabel, {
        "ref": floatingLabelRef,
        "floating": true,
        "for": id.value
      }, {
        default: () => [label]
      })]), createVNode("div", {
        "class": "v-field__outline__end"
      }, null)]), isPlainOrUnderlined.value && hasLabel.value && createVNode(VFieldLabel, {
        "ref": floatingLabelRef,
        "floating": true,
        "for": id.value
      }, {
        default: () => [label]
      })])]);
    });
    return {
      controlRef
    };
  }
});
function filterFieldProps(attrs) {
  const keys = Object.keys(VField.props).filter((k) => !isOn(k) && k !== "class" && k !== "style");
  return pick(attrs, keys);
}
const makeVMessagesProps = propsFactory({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...makeComponentProps(),
  ...makeTransitionProps({
    transition: {
      component: VSlideYTransition,
      leaveAbsolute: true,
      group: true
    }
  })
}, "VMessages");
const VMessages = genericComponent()({
  name: "VMessages",
  props: makeVMessagesProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const messages = computed(() => wrapInArray(props.messages));
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(computed(() => props.color));
    useRender(() => createVNode(MaybeTransition, {
      "transition": props.transition,
      "tag": "div",
      "class": ["v-messages", textColorClasses.value, props.class],
      "style": [textColorStyles.value, props.style],
      "role": "alert",
      "aria-live": "polite"
    }, {
      default: () => [props.active && messages.value.map((message, i) => createVNode("div", {
        "class": "v-messages__message",
        "key": `${i}-${messages.value}`
      }, [slots.message ? slots.message({
        message
      }) : message]))]
    }));
    return {};
  }
});
const makeValidationProps = propsFactory({
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  errorMessages: {
    type: [Array, String],
    default: () => []
  },
  maxErrors: {
    type: [Number, String],
    default: 1
  },
  name: String,
  label: String,
  readonly: {
    type: Boolean,
    default: null
  },
  rules: {
    type: Array,
    default: () => []
  },
  modelValue: null,
  validateOn: String,
  validationValue: null,
  ...makeFocusProps()
}, "validation");
function useValidation(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  let id = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : getUid();
  const model = useProxiedModel(props, "modelValue");
  const validationModel = computed(() => props.validationValue === void 0 ? model.value : props.validationValue);
  const form = useForm();
  const internalErrorMessages = ref([]);
  const isPristine = shallowRef(true);
  const isDirty = computed(() => !!(wrapInArray(model.value === "" ? null : model.value).length || wrapInArray(validationModel.value === "" ? null : validationModel.value).length));
  const isDisabled = computed(() => {
    var _a;
    return !!((_a = props.disabled) != null ? _a : form == null ? void 0 : form.isDisabled.value);
  });
  const isReadonly = computed(() => {
    var _a;
    return !!((_a = props.readonly) != null ? _a : form == null ? void 0 : form.isReadonly.value);
  });
  const errorMessages = computed(() => {
    return props.errorMessages.length ? wrapInArray(props.errorMessages).slice(0, Math.max(0, +props.maxErrors)) : internalErrorMessages.value;
  });
  const validateOn = computed(() => {
    var _a, _b;
    let value = ((_a = props.validateOn) != null ? _a : form == null ? void 0 : form.validateOn.value) || "input";
    if (value === "lazy")
      value = "input lazy";
    const set = new Set((_b = value == null ? void 0 : value.split(" ")) != null ? _b : []);
    return {
      blur: set.has("blur") || set.has("input"),
      input: set.has("input"),
      submit: set.has("submit"),
      lazy: set.has("lazy")
    };
  });
  const isValid = computed(() => {
    if (props.error || props.errorMessages.length)
      return false;
    if (!props.rules.length)
      return true;
    if (isPristine.value) {
      return internalErrorMessages.value.length || validateOn.value.lazy ? null : true;
    } else {
      return !internalErrorMessages.value.length;
    }
  });
  const isValidating = shallowRef(false);
  const validationClasses = computed(() => {
    return {
      [`${name}--error`]: isValid.value === false,
      [`${name}--dirty`]: isDirty.value,
      [`${name}--disabled`]: isDisabled.value,
      [`${name}--readonly`]: isReadonly.value
    };
  });
  const uid = computed(() => {
    var _a;
    return (_a = props.name) != null ? _a : unref(id);
  });
  useToggleScope(() => validateOn.value.input, () => {
    watch(validationModel, () => {
      if (validationModel.value != null) {
        validate();
      } else if (props.focused) {
        const unwatch = watch(() => props.focused, (val) => {
          if (!val)
            validate();
          unwatch();
        });
      }
    });
  });
  useToggleScope(() => validateOn.value.blur, () => {
    watch(() => props.focused, (val) => {
      if (!val)
        validate();
    });
  });
  watch(isValid, () => {
    form == null ? void 0 : form.update(uid.value, isValid.value, errorMessages.value);
  });
  function reset() {
    model.value = null;
    nextTick(resetValidation);
  }
  function resetValidation() {
    isPristine.value = true;
    if (!validateOn.value.lazy) {
      validate(true);
    } else {
      internalErrorMessages.value = [];
    }
  }
  async function validate() {
    var _a;
    let silent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    const results = [];
    isValidating.value = true;
    for (const rule of props.rules) {
      if (results.length >= +((_a = props.maxErrors) != null ? _a : 1)) {
        break;
      }
      const handler = typeof rule === "function" ? rule : () => rule;
      const result = await handler(validationModel.value);
      if (result === true)
        continue;
      if (typeof result !== "string") {
        console.warn(`${result} is not a valid value. Rule functions must return boolean true or a string.`);
        continue;
      }
      results.push(result);
    }
    internalErrorMessages.value = results;
    isValidating.value = false;
    isPristine.value = silent;
    return internalErrorMessages.value;
  }
  return {
    errorMessages,
    isDirty,
    isDisabled,
    isReadonly,
    isPristine,
    isValid,
    isValidating,
    reset,
    resetValidation,
    validate,
    validationClasses
  };
}
const makeVInputProps = propsFactory({
  id: String,
  appendIcon: IconValue,
  centerAffix: {
    type: Boolean,
    default: true
  },
  prependIcon: IconValue,
  hideDetails: [Boolean, String],
  hint: String,
  persistentHint: Boolean,
  messages: {
    type: [Array, String],
    default: () => []
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (v) => ["horizontal", "vertical"].includes(v)
  },
  "onClick:prepend": EventProp(),
  "onClick:append": EventProp(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeValidationProps()
}, "VInput");
const VInput = genericComponent()({
  name: "VInput",
  props: {
    ...makeVInputProps()
  },
  emits: {
    "update:modelValue": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots,
      emit
    } = _ref;
    const {
      densityClasses
    } = useDensity(props);
    const {
      rtlClasses
    } = useRtl();
    const {
      InputIcon
    } = useInputIcon(props);
    const uid = getUid();
    const id = computed(() => props.id || `input-${uid}`);
    const messagesId = computed(() => `${id.value}-messages`);
    const {
      errorMessages,
      isDirty,
      isDisabled,
      isReadonly,
      isPristine,
      isValid,
      isValidating,
      reset,
      resetValidation,
      validate,
      validationClasses
    } = useValidation(props, "v-input", id);
    const slotProps = computed(() => ({
      id,
      messagesId,
      isDirty,
      isDisabled,
      isReadonly,
      isPristine,
      isValid,
      isValidating,
      reset,
      resetValidation,
      validate
    }));
    const messages = computed(() => {
      var _a;
      if (((_a = props.errorMessages) == null ? void 0 : _a.length) || !isPristine.value && errorMessages.value.length) {
        return errorMessages.value;
      } else if (props.hint && (props.persistentHint || props.focused)) {
        return props.hint;
      } else {
        return props.messages;
      }
    });
    useRender(() => {
      var _a, _b, _c, _d;
      const hasPrepend = !!(slots.prepend || props.prependIcon);
      const hasAppend = !!(slots.append || props.appendIcon);
      const hasMessages = messages.value.length > 0;
      const hasDetails = !props.hideDetails || props.hideDetails === "auto" && (hasMessages || !!slots.details);
      return createVNode("div", {
        "class": ["v-input", `v-input--${props.direction}`, {
          "v-input--center-affix": props.centerAffix
        }, densityClasses.value, rtlClasses.value, validationClasses.value, props.class],
        "style": props.style
      }, [hasPrepend && createVNode("div", {
        "key": "prepend",
        "class": "v-input__prepend"
      }, [(_a = slots.prepend) == null ? void 0 : _a.call(slots, slotProps.value), props.prependIcon && createVNode(InputIcon, {
        "key": "prepend-icon",
        "name": "prepend"
      }, null)]), slots.default && createVNode("div", {
        "class": "v-input__control"
      }, [(_b = slots.default) == null ? void 0 : _b.call(slots, slotProps.value)]), hasAppend && createVNode("div", {
        "key": "append",
        "class": "v-input__append"
      }, [props.appendIcon && createVNode(InputIcon, {
        "key": "append-icon",
        "name": "append"
      }, null), (_c = slots.append) == null ? void 0 : _c.call(slots, slotProps.value)]), hasDetails && createVNode("div", {
        "class": "v-input__details"
      }, [createVNode(VMessages, {
        "id": messagesId.value,
        "active": hasMessages,
        "messages": messages.value
      }, {
        message: slots.message
      }), (_d = slots.details) == null ? void 0 : _d.call(slots, slotProps.value)])]);
    });
    return {
      reset,
      resetValidation,
      validate
    };
  }
});
const activeTypes = ["color", "file", "time", "date", "datetime-local", "week", "month"];
const makeVTextFieldProps = propsFactory({
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: Function,
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  suffix: String,
  type: {
    type: String,
    default: "text"
  },
  modelModifiers: Object,
  ...makeVInputProps(),
  ...makeVFieldProps()
}, "VTextField");
const VTextField = genericComponent()({
  name: "VTextField",
  directives: {
    Intersect: Intersect$1
  },
  inheritAttrs: false,
  props: makeVTextFieldProps(),
  emits: {
    "click:control": (e) => true,
    "mousedown:control": (e) => true,
    "update:focused": (focused) => true,
    "update:modelValue": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const counterValue = computed(() => {
      var _a;
      return typeof props.counterValue === "function" ? props.counterValue(model.value) : ((_a = model.value) != null ? _a : "").toString().length;
    });
    const max = computed(() => {
      if (attrs.maxlength)
        return attrs.maxlength;
      if (!props.counter || typeof props.counter !== "number" && typeof props.counter !== "string")
        return void 0;
      return props.counter;
    });
    const isPlainOrUnderlined = computed(() => ["plain", "underlined"].includes(props.variant));
    function onIntersect(isIntersecting, entries) {
      var _a, _b;
      if (!props.autofocus || !isIntersecting)
        return;
      (_b = (_a = entries[0].target) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    }
    const vInputRef = ref();
    const vFieldRef = ref();
    const inputRef = ref();
    const isActive = computed(() => activeTypes.includes(props.type) || props.persistentPlaceholder || isFocused.value || props.active);
    function onFocus() {
      var _a;
      if (inputRef.value !== document.activeElement) {
        (_a = inputRef.value) == null ? void 0 : _a.focus();
      }
      if (!isFocused.value)
        focus();
    }
    function onControlMousedown(e) {
      emit("mousedown:control", e);
      if (e.target === inputRef.value)
        return;
      onFocus();
      e.preventDefault();
    }
    function onControlClick(e) {
      onFocus();
      emit("click:control", e);
    }
    function onClear(e) {
      e.stopPropagation();
      onFocus();
      nextTick(() => {
        model.value = null;
        callEvent(props["onClick:clear"], e);
      });
    }
    function onInput(e) {
      var _a;
      const el = e.target;
      model.value = el.value;
      if (((_a = props.modelModifiers) == null ? void 0 : _a.trim) && ["text", "search", "password", "tel", "url"].includes(props.type)) {
        const caretPosition = [el.selectionStart, el.selectionEnd];
        nextTick(() => {
          el.selectionStart = caretPosition[0];
          el.selectionEnd = caretPosition[1];
        });
      }
    }
    useRender(() => {
      const hasCounter = !!(slots.counter || props.counter || props.counterValue);
      const hasDetails = !!(hasCounter || slots.details);
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      const [{
        modelValue: _,
        ...inputProps
      }] = VInput.filterProps(props);
      const [fieldProps] = filterFieldProps(props);
      return createVNode(VInput, mergeProps({
        "ref": vInputRef,
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-text-field", {
          "v-text-field--prefixed": props.prefix,
          "v-text-field--suffixed": props.suffix,
          "v-text-field--plain-underlined": ["plain", "underlined"].includes(props.variant)
        }, props.class],
        "style": props.style
      }, rootAttrs, inputProps, {
        "centerAffix": !isPlainOrUnderlined.value,
        "focused": isFocused.value
      }), {
        ...slots,
        default: (_ref2) => {
          let {
            id,
            isDisabled,
            isDirty,
            isReadonly,
            isValid
          } = _ref2;
          return createVNode(VField, mergeProps({
            "ref": vFieldRef,
            "onMousedown": onControlMousedown,
            "onClick": onControlClick,
            "onClick:clear": onClear,
            "onClick:prependInner": props["onClick:prependInner"],
            "onClick:appendInner": props["onClick:appendInner"],
            "role": "textbox"
          }, fieldProps, {
            "id": id.value,
            "active": isActive.value || isDirty.value,
            "dirty": isDirty.value || props.dirty,
            "disabled": isDisabled.value,
            "focused": isFocused.value,
            "error": isValid.value === false
          }), {
            ...slots,
            default: (_ref3) => {
              let {
                props: {
                  class: fieldClass,
                  ...slotProps
                }
              } = _ref3;
              const inputNode = withDirectives(createVNode("input", mergeProps({
                "ref": inputRef,
                "value": model.value,
                "onInput": onInput,
                "autofocus": props.autofocus,
                "readonly": isReadonly.value,
                "disabled": isDisabled.value,
                "name": props.name,
                "placeholder": props.placeholder,
                "size": 1,
                "type": props.type,
                "onFocus": onFocus,
                "onBlur": blur
              }, slotProps, inputAttrs), null), [[resolveDirective("intersect"), {
                handler: onIntersect
              }, null, {
                once: true
              }]]);
              return createVNode(Fragment, null, [props.prefix && createVNode("span", {
                "class": "v-text-field__prefix"
              }, [props.prefix]), slots.default ? createVNode("div", {
                "class": fieldClass,
                "data-no-activator": ""
              }, [slots.default(), inputNode]) : cloneVNode(inputNode, {
                class: fieldClass
              }), props.suffix && createVNode("span", {
                "class": "v-text-field__suffix"
              }, [props.suffix])]);
            }
          });
        },
        details: hasDetails ? (slotProps) => {
          var _a;
          return createVNode(Fragment, null, [(_a = slots.details) == null ? void 0 : _a.call(slots, slotProps), hasCounter && createVNode(Fragment, null, [createVNode("span", null, null), createVNode(VCounter, {
            "active": props.persistentCounter || isFocused.value,
            "value": counterValue.value,
            "max": max.value
          }, slots.counter)])]);
        } : void 0
      });
    });
    return forwardRefs({}, vInputRef, vFieldRef, inputRef);
  }
});
const makeVTextareaProps = propsFactory({
  autoGrow: Boolean,
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: Function,
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  noResize: Boolean,
  rows: {
    type: [Number, String],
    default: 5,
    validator: (v) => !isNaN(parseFloat(v))
  },
  maxRows: {
    type: [Number, String],
    validator: (v) => !isNaN(parseFloat(v))
  },
  suffix: String,
  modelModifiers: Object,
  ...makeVInputProps(),
  ...makeVFieldProps()
}, "VTextarea");
const VTextarea = genericComponent()({
  name: "VTextarea",
  directives: {
    Intersect: Intersect$1
  },
  inheritAttrs: false,
  props: makeVTextareaProps(),
  emits: {
    "click:control": (e) => true,
    "mousedown:control": (e) => true,
    "update:focused": (focused) => true,
    "update:modelValue": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const counterValue = computed(() => {
      return typeof props.counterValue === "function" ? props.counterValue(model.value) : (model.value || "").toString().length;
    });
    const max = computed(() => {
      if (attrs.maxlength)
        return attrs.maxlength;
      if (!props.counter || typeof props.counter !== "number" && typeof props.counter !== "string")
        return void 0;
      return props.counter;
    });
    function onIntersect(isIntersecting, entries) {
      var _a, _b;
      if (!props.autofocus || !isIntersecting)
        return;
      (_b = (_a = entries[0].target) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    }
    const vInputRef = ref();
    const vFieldRef = ref();
    const controlHeight = shallowRef("");
    const textareaRef = ref();
    const isActive = computed(() => props.persistentPlaceholder || isFocused.value || props.active);
    function onFocus() {
      var _a;
      if (textareaRef.value !== document.activeElement) {
        (_a = textareaRef.value) == null ? void 0 : _a.focus();
      }
      if (!isFocused.value)
        focus();
    }
    function onControlClick(e) {
      onFocus();
      emit("click:control", e);
    }
    function onControlMousedown(e) {
      emit("mousedown:control", e);
    }
    function onClear(e) {
      e.stopPropagation();
      onFocus();
      nextTick(() => {
        model.value = "";
        callEvent(props["onClick:clear"], e);
      });
    }
    function onInput(e) {
      var _a;
      const el = e.target;
      model.value = el.value;
      if ((_a = props.modelModifiers) == null ? void 0 : _a.trim) {
        const caretPosition = [el.selectionStart, el.selectionEnd];
        nextTick(() => {
          el.selectionStart = caretPosition[0];
          el.selectionEnd = caretPosition[1];
        });
      }
    }
    const sizerRef = ref();
    const rows = ref(+props.rows);
    const isPlainOrUnderlined = computed(() => ["plain", "underlined"].includes(props.variant));
    watchEffect(() => {
      if (!props.autoGrow)
        rows.value = +props.rows;
    });
    function calculateInputHeight() {
      if (!props.autoGrow)
        return;
      nextTick(() => {
        if (!sizerRef.value || !vFieldRef.value)
          return;
        const style = getComputedStyle(sizerRef.value);
        const fieldStyle = getComputedStyle(vFieldRef.value.$el);
        const padding = parseFloat(style.getPropertyValue("--v-field-padding-top")) + parseFloat(style.getPropertyValue("--v-input-padding-top")) + parseFloat(style.getPropertyValue("--v-field-padding-bottom"));
        const height = sizerRef.value.scrollHeight;
        const lineHeight = parseFloat(style.lineHeight);
        const minHeight = Math.max(parseFloat(props.rows) * lineHeight + padding, parseFloat(fieldStyle.getPropertyValue("--v-input-control-height")));
        const maxHeight = parseFloat(props.maxRows) * lineHeight + padding || Infinity;
        const newHeight = clamp(height != null ? height : 0, minHeight, maxHeight);
        rows.value = Math.floor((newHeight - padding) / lineHeight);
        controlHeight.value = convertToUnit(newHeight);
      });
    }
    watch(model, calculateInputHeight);
    watch(() => props.rows, calculateInputHeight);
    watch(() => props.maxRows, calculateInputHeight);
    watch(() => props.density, calculateInputHeight);
    let observer;
    watch(sizerRef, (val) => {
      if (val) {
        observer = new ResizeObserver(calculateInputHeight);
        observer.observe(sizerRef.value);
      } else {
        observer == null ? void 0 : observer.disconnect();
      }
    });
    useRender(() => {
      const hasCounter = !!(slots.counter || props.counter || props.counterValue);
      const hasDetails = !!(hasCounter || slots.details);
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      const [{
        modelValue: _,
        ...inputProps
      }] = VInput.filterProps(props);
      const [fieldProps] = filterFieldProps(props);
      return createVNode(VInput, mergeProps({
        "ref": vInputRef,
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-textarea v-text-field", {
          "v-textarea--prefixed": props.prefix,
          "v-textarea--suffixed": props.suffix,
          "v-text-field--prefixed": props.prefix,
          "v-text-field--suffixed": props.suffix,
          "v-textarea--auto-grow": props.autoGrow,
          "v-textarea--no-resize": props.noResize || props.autoGrow,
          "v-text-field--plain-underlined": isPlainOrUnderlined.value
        }, props.class],
        "style": props.style
      }, rootAttrs, inputProps, {
        "centerAffix": rows.value === 1 && !isPlainOrUnderlined.value,
        "focused": isFocused.value
      }), {
        ...slots,
        default: (_ref2) => {
          let {
            isDisabled,
            isDirty,
            isReadonly,
            isValid
          } = _ref2;
          return createVNode(VField, mergeProps({
            "ref": vFieldRef,
            "style": {
              "--v-textarea-control-height": controlHeight.value
            },
            "onClick": onControlClick,
            "onMousedown": onControlMousedown,
            "onClick:clear": onClear,
            "onClick:prependInner": props["onClick:prependInner"],
            "onClick:appendInner": props["onClick:appendInner"],
            "role": "textbox"
          }, fieldProps, {
            "active": isActive.value || isDirty.value,
            "centerAffix": rows.value === 1 && !isPlainOrUnderlined.value,
            "dirty": isDirty.value || props.dirty,
            "disabled": isDisabled.value,
            "focused": isFocused.value,
            "error": isValid.value === false
          }), {
            ...slots,
            default: (_ref3) => {
              let {
                props: {
                  class: fieldClass,
                  ...slotProps
                }
              } = _ref3;
              return createVNode(Fragment, null, [props.prefix && createVNode("span", {
                "class": "v-text-field__prefix"
              }, [props.prefix]), withDirectives(createVNode("textarea", mergeProps({
                "ref": textareaRef,
                "class": fieldClass,
                "value": model.value,
                "onInput": onInput,
                "autofocus": props.autofocus,
                "readonly": isReadonly.value,
                "disabled": isDisabled.value,
                "placeholder": props.placeholder,
                "rows": props.rows,
                "name": props.name,
                "onFocus": onFocus,
                "onBlur": blur
              }, slotProps, inputAttrs), null), [[resolveDirective("intersect"), {
                handler: onIntersect
              }, null, {
                once: true
              }]]), props.autoGrow && withDirectives(createVNode("textarea", {
                "class": [fieldClass, "v-textarea__sizer"],
                "onUpdate:modelValue": ($event) => model.value = $event,
                "ref": sizerRef,
                "readonly": true,
                "aria-hidden": "true"
              }, null), [[vModelText, model.value]]), props.suffix && createVNode("span", {
                "class": "v-text-field__suffix"
              }, [props.suffix])]);
            }
          });
        },
        details: hasDetails ? (slotProps) => {
          var _a;
          return createVNode(Fragment, null, [(_a = slots.details) == null ? void 0 : _a.call(slots, slotProps), hasCounter && createVNode(Fragment, null, [createVNode("span", null, null), createVNode(VCounter, {
            "active": props.persistentCounter || isFocused.value,
            "value": counterValue.value,
            "max": max.value
          }, slots.counter)])]);
        } : void 0
      });
    });
    return forwardRefs({}, vInputRef, vFieldRef, textareaRef);
  }
});
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c, _d;
    const common = useCommonStore();
    const header = useHeaderStore();
    const route = useRoute();
    const page = computed(() => {
      return {};
    });
    const mobile = computed(() => {
      return useDisplay().mdAndDown.value;
    });
    const phones = computed(() => {
      return common.getPhones;
    });
    useServerSeoMeta({
      title: (_a = page.value["title"]) != null ? _a : null,
      description: (_b = page.value["shortDescription"]) != null ? _b : null,
      ogTitle: (_c = page.value["title"]) != null ? _c : null,
      ogType: "website",
      ogUrl: route.fullPath,
      ogImage: (_d = page.value["image"]) != null ? _d : null,
      ogLocale: "ru_RU"
    });
    header.setHeader("\u041A\u0430\u043A \u043D\u0430\u0441 \u043D\u0430\u0439\u0442\u0438");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_map_component = MapComponent;
      _push(ssrRenderComponent(VContainer, mergeProps({
        fluid: true,
        class: "d-block pa-0 ma-0"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { class: "contacts-page__map-container ma-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    class: "pa-0 ma-0",
                    cols: "12"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_map_component, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_map_component)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      class: "pa-0 ma-0",
                      cols: "12"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_map_component)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, {
              class: "page__padding ma-0",
              style: { "background": "#F7F7F7" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    class: "contacts-page__form-container"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="contacts-page__info"${_scopeId3}><h2${_scopeId3}>\u041A\u0430\u043A \u043D\u0430\u0441 \u043D\u0430\u0439\u0442\u0438?</h2><p class="text-body-1"${_scopeId3}> \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0432\u0441\u0435\u0445 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0430 \u0434\u043E \u043E\u0444\u0438\u0441\u0430. \u041D\u0430 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435, \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u043C \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0435, \u043F\u0435\u0448\u043A\u043E\u043C \u043E\u0442 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043E\u043A, \u0441\u0442\u0430\u043D\u0446\u0438\u0439 \u043C\u0435\u0442\u0440\u043E. \u0423\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u0430\u0445\u043E\u0434\u044F\u0449\u0438\u0435\u0441\u044F \u0440\u044F\u0434\u043E\u043C \u043E\u0431\u044A\u0435\u043A\u0442\u044B. \u041E\u043F\u0438\u0441\u0430\u0442\u044C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043F\u0430\u0440\u043A\u043E\u0432\u043A\u0438 </p>`);
                        if (mobile.value) {
                          _push4(`<div class="d-flex flex-column justify-start mb-10" style="${ssrRenderStyle({ "row-gap": "20px" })}"${_scopeId3}><div style="${ssrRenderStyle({ "display": "grid", "grid-template-columns": "repeat(2, 50%)", "grid-column-gap": "20px" })}"${_scopeId3}><p class="font-weight-bold text-dark"${_scopeId3}>\u0410\u0434\u0440\u0435\u0441:</p><p class="font-weight-light text-secondary"${_scopeId3}>\u0420\u0411, \u0433. \u041C\u0438\u043D\u0441\u043A \u0443\u043B. \u041A\u043E\u0440\u0436\u0435\u043D\u0435\u0432\u0441\u043A\u043E\u0433\u043E 14\u0412</p></div><div style="${ssrRenderStyle({ "display": "grid", "grid-template-columns": "repeat(2, 50%)", "grid-column-gap": "20px" })}"${_scopeId3}><p class="font-weight-bold text-dark"${_scopeId3}>\u0422\u0435\u043B\u0435\u0444\u043E\u043D\u044B:</p><div class="d-flex flex-column align-start justify-start" style="${ssrRenderStyle({ "row-gap": "10px" })}"${_scopeId3}><!--[-->`);
                          ssrRenderList(phones.value, (phone, index) => {
                            _push4(ssrRenderComponent(VBtn, {
                              style: { "opacity": "1", "height": "fit-content", "width": "fit-content" },
                              ripple: false,
                              variant: "plain",
                              href: phone.href,
                              class: "font-weight-regular text-secondary px-0"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(phone.number)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(phone.number), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]--></div></div><div style="${ssrRenderStyle({ "display": "grid", "grid-template-columns": "repeat(2, 50%)", "grid-column-gap": "20px" })}"${_scopeId3}><p class="font-weight-bold text-dark"${_scopeId3}>\u0412\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B:</p><p class="font-weight-light text-secondary"${_scopeId3}>9 <sup${_scopeId3}>00</sup>\u201418 <sup${_scopeId3}>00</sup></p></div><div style="${ssrRenderStyle({ "display": "grid", "grid-template-columns": "repeat(2, 50%)", "grid-column-gap": "20px" })}"${_scopeId3}><p class="font-weight-bold text-dark"${_scopeId3}>\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E:</p><p class="font-weight-light text-secondary"${_scopeId3}>24 / 7</p></div></div>`);
                        } else {
                          _push4(`<div class="contacts-page__info__wrapper"${_scopeId3}><div class="d-flex justify-start align-center" style="${ssrRenderStyle({ "column-gap": "30px" })}"${_scopeId3}><p class="font-weight-bold text-dark" style="${ssrRenderStyle({ "width": "150px" })}"${_scopeId3}>\u0410\u0434\u0440\u0435\u0441:</p><p class="font-weight-light text-secondary"${_scopeId3}>\u0420\u0411, \u0433. \u041C\u0438\u043D\u0441\u043A \u0443\u043B. \u041A\u043E\u0440\u0436\u0435\u043D\u0435\u0432\u0441\u043A\u043E\u0433\u043E 14\u0412</p></div><div class="d-flex justify-start align-start" style="${ssrRenderStyle({ "column-gap": "30px" })}"${_scopeId3}><p class="font-weight-bold text-dark" style="${ssrRenderStyle({ "width": "150px" })}"${_scopeId3}>\u0422\u0435\u043B\u0435\u0444\u043E\u043D\u044B:</p><div class="d-flex flex-column align-start justify-start" style="${ssrRenderStyle({ "row-gap": "10px" })}"${_scopeId3}><!--[-->`);
                          ssrRenderList(phones.value, (phone, index) => {
                            _push4(ssrRenderComponent(VBtn, {
                              style: { "opacity": "1", "height": "fit-content", "width": "fit-content" },
                              ripple: false,
                              variant: "plain",
                              href: phone.href,
                              class: "font-weight-regular text-secondary px-0"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(phone.number)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(phone.number), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]--></div></div><div class="d-flex justify-start align-center" style="${ssrRenderStyle({ "column-gap": "30px" })}"${_scopeId3}><p class="font-weight-bold text-dark" style="${ssrRenderStyle({ "width": "150px" })}"${_scopeId3}>\u0412\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B:</p><p class="font-weight-light text-secondary"${_scopeId3}>9 <sup${_scopeId3}>00</sup>\u201418 <sup${_scopeId3}>00</sup></p></div><div class="d-flex justify-start align-center" style="${ssrRenderStyle({ "column-gap": "30px" })}"${_scopeId3}><p class="font-weight-bold text-dark" style="${ssrRenderStyle({ "width": "150px" })}"${_scopeId3}>\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E:</p><p class="font-weight-light text-secondary"${_scopeId3}>24 / 7</p></div></div>`);
                        }
                        _push4(`</div><div class="contacts-page__feedback-form"${_scopeId3}>`);
                        _push4(ssrRenderComponent(VForm, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCard, {
                                flat: "",
                                class: "pa-8"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCardText, {
                                      class: "d-flex flex-column px-0",
                                      style: { "row-gap": "15px" }
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="d-flex flex-column" style="${ssrRenderStyle({ "row-gap": "10px" })}"${_scopeId6}><label class="font-weight-bold"${_scopeId6}>\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0418\u043C\u044F \u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E</label>`);
                                          _push7(ssrRenderComponent(VTextField, {
                                            variant: "outlined",
                                            placeholder: "\u0418\u0432\u0430\u043D\u043E\u0432 \u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div><div class="d-flex flex-column" style="${ssrRenderStyle({ "row-gap": "10px" })}"${_scopeId6}><label class="font-weight-bold"${_scopeId6}>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438</label>`);
                                          _push7(ssrRenderComponent(VTextField, {
                                            variant: "outlined",
                                            placeholder: "FCB"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div><div class="d-flex flex-column" style="${ssrRenderStyle({ "row-gap": "10px" })}"${_scopeId6}><label class="font-weight-bold"${_scopeId6}>Email \u0438\u043B\u0438 \u0442\u0435\u043B\u0435\u0444\u043E\u043D</label>`);
                                          _push7(ssrRenderComponent(VTextField, {
                                            variant: "outlined",
                                            placeholder: "+375 (29) 110 00 00"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div><div class="d-flex flex-column" style="${ssrRenderStyle({ "row-gap": "10px" })}"${_scopeId6}><label class="font-weight-bold"${_scopeId6}>\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435</label>`);
                                          _push7(ssrRenderComponent(VTextarea, {
                                            variant: "outlined",
                                            placeholder: "\u0412\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            createVNode("div", {
                                              class: "d-flex flex-column",
                                              style: { "row-gap": "10px" }
                                            }, [
                                              createVNode("label", { class: "font-weight-bold" }, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0418\u043C\u044F \u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E"),
                                              createVNode(VTextField, {
                                                variant: "outlined",
                                                placeholder: "\u0418\u0432\u0430\u043D\u043E\u0432 \u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447"
                                              })
                                            ]),
                                            createVNode("div", {
                                              class: "d-flex flex-column",
                                              style: { "row-gap": "10px" }
                                            }, [
                                              createVNode("label", { class: "font-weight-bold" }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"),
                                              createVNode(VTextField, {
                                                variant: "outlined",
                                                placeholder: "FCB"
                                              })
                                            ]),
                                            createVNode("div", {
                                              class: "d-flex flex-column",
                                              style: { "row-gap": "10px" }
                                            }, [
                                              createVNode("label", { class: "font-weight-bold" }, "Email \u0438\u043B\u0438 \u0442\u0435\u043B\u0435\u0444\u043E\u043D"),
                                              createVNode(VTextField, {
                                                variant: "outlined",
                                                placeholder: "+375 (29) 110 00 00"
                                              })
                                            ]),
                                            createVNode("div", {
                                              class: "d-flex flex-column",
                                              style: { "row-gap": "10px" }
                                            }, [
                                              createVNode("label", { class: "font-weight-bold" }, "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"),
                                              createVNode(VTextarea, {
                                                variant: "outlined",
                                                placeholder: "\u0412\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"
                                              })
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCardActions, { class: "d-flex justify-end align-center px-0 py-0" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VBtn, {
                                            "min-height": 48,
                                            elevation: "0",
                                            variant: "elevated",
                                            dark: "",
                                            color: "secondary",
                                            style: { "opacity": "1" },
                                            class: "px-12 py-3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<span class="font-weight-medium" style="${ssrRenderStyle({ "text-transform": "initial" })}"${_scopeId7}>\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C</span>`);
                                              } else {
                                                return [
                                                  createVNode("span", {
                                                    class: "font-weight-medium",
                                                    style: { "text-transform": "initial" }
                                                  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VBtn, {
                                              "min-height": 48,
                                              elevation: "0",
                                              variant: "elevated",
                                              dark: "",
                                              color: "secondary",
                                              style: { "opacity": "1" },
                                              class: "px-12 py-3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("span", {
                                                  class: "font-weight-medium",
                                                  style: { "text-transform": "initial" }
                                                }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCardText, {
                                        class: "d-flex flex-column px-0",
                                        style: { "row-gap": "15px" }
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", {
                                            class: "d-flex flex-column",
                                            style: { "row-gap": "10px" }
                                          }, [
                                            createVNode("label", { class: "font-weight-bold" }, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0418\u043C\u044F \u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E"),
                                            createVNode(VTextField, {
                                              variant: "outlined",
                                              placeholder: "\u0418\u0432\u0430\u043D\u043E\u0432 \u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447"
                                            })
                                          ]),
                                          createVNode("div", {
                                            class: "d-flex flex-column",
                                            style: { "row-gap": "10px" }
                                          }, [
                                            createVNode("label", { class: "font-weight-bold" }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"),
                                            createVNode(VTextField, {
                                              variant: "outlined",
                                              placeholder: "FCB"
                                            })
                                          ]),
                                          createVNode("div", {
                                            class: "d-flex flex-column",
                                            style: { "row-gap": "10px" }
                                          }, [
                                            createVNode("label", { class: "font-weight-bold" }, "Email \u0438\u043B\u0438 \u0442\u0435\u043B\u0435\u0444\u043E\u043D"),
                                            createVNode(VTextField, {
                                              variant: "outlined",
                                              placeholder: "+375 (29) 110 00 00"
                                            })
                                          ]),
                                          createVNode("div", {
                                            class: "d-flex flex-column",
                                            style: { "row-gap": "10px" }
                                          }, [
                                            createVNode("label", { class: "font-weight-bold" }, "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"),
                                            createVNode(VTextarea, {
                                              variant: "outlined",
                                              placeholder: "\u0412\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"
                                            })
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCardActions, { class: "d-flex justify-end align-center px-0 py-0" }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            "min-height": 48,
                                            elevation: "0",
                                            variant: "elevated",
                                            dark: "",
                                            color: "secondary",
                                            style: { "opacity": "1" },
                                            class: "px-12 py-3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("span", {
                                                class: "font-weight-medium",
                                                style: { "text-transform": "initial" }
                                              }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCard, {
                                  flat: "",
                                  class: "pa-8"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCardText, {
                                      class: "d-flex flex-column px-0",
                                      style: { "row-gap": "15px" }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", {
                                          class: "d-flex flex-column",
                                          style: { "row-gap": "10px" }
                                        }, [
                                          createVNode("label", { class: "font-weight-bold" }, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0418\u043C\u044F \u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E"),
                                          createVNode(VTextField, {
                                            variant: "outlined",
                                            placeholder: "\u0418\u0432\u0430\u043D\u043E\u0432 \u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447"
                                          })
                                        ]),
                                        createVNode("div", {
                                          class: "d-flex flex-column",
                                          style: { "row-gap": "10px" }
                                        }, [
                                          createVNode("label", { class: "font-weight-bold" }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"),
                                          createVNode(VTextField, {
                                            variant: "outlined",
                                            placeholder: "FCB"
                                          })
                                        ]),
                                        createVNode("div", {
                                          class: "d-flex flex-column",
                                          style: { "row-gap": "10px" }
                                        }, [
                                          createVNode("label", { class: "font-weight-bold" }, "Email \u0438\u043B\u0438 \u0442\u0435\u043B\u0435\u0444\u043E\u043D"),
                                          createVNode(VTextField, {
                                            variant: "outlined",
                                            placeholder: "+375 (29) 110 00 00"
                                          })
                                        ]),
                                        createVNode("div", {
                                          class: "d-flex flex-column",
                                          style: { "row-gap": "10px" }
                                        }, [
                                          createVNode("label", { class: "font-weight-bold" }, "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"),
                                          createVNode(VTextarea, {
                                            variant: "outlined",
                                            placeholder: "\u0412\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"
                                          })
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCardActions, { class: "d-flex justify-end align-center px-0 py-0" }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          "min-height": 48,
                                          elevation: "0",
                                          variant: "elevated",
                                          dark: "",
                                          color: "secondary",
                                          style: { "opacity": "1" },
                                          class: "px-12 py-3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("span", {
                                              class: "font-weight-medium",
                                              style: { "text-transform": "initial" }
                                            }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "contacts-page__info" }, [
                            createVNode("h2", null, "\u041A\u0430\u043A \u043D\u0430\u0441 \u043D\u0430\u0439\u0442\u0438?"),
                            createVNode("p", { class: "text-body-1" }, " \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0432\u0441\u0435\u0445 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0430 \u0434\u043E \u043E\u0444\u0438\u0441\u0430. \u041D\u0430 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435, \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u043C \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0435, \u043F\u0435\u0448\u043A\u043E\u043C \u043E\u0442 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043E\u043A, \u0441\u0442\u0430\u043D\u0446\u0438\u0439 \u043C\u0435\u0442\u0440\u043E. \u0423\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u0430\u0445\u043E\u0434\u044F\u0449\u0438\u0435\u0441\u044F \u0440\u044F\u0434\u043E\u043C \u043E\u0431\u044A\u0435\u043A\u0442\u044B. \u041E\u043F\u0438\u0441\u0430\u0442\u044C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043F\u0430\u0440\u043A\u043E\u0432\u043A\u0438 "),
                            mobile.value ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "d-flex flex-column justify-start mb-10",
                              style: { "row-gap": "20px" }
                            }, [
                              createVNode("div", { style: { "display": "grid", "grid-template-columns": "repeat(2, 50%)", "grid-column-gap": "20px" } }, [
                                createVNode("p", { class: "font-weight-bold text-dark" }, "\u0410\u0434\u0440\u0435\u0441:"),
                                createVNode("p", { class: "font-weight-light text-secondary" }, "\u0420\u0411, \u0433. \u041C\u0438\u043D\u0441\u043A \u0443\u043B. \u041A\u043E\u0440\u0436\u0435\u043D\u0435\u0432\u0441\u043A\u043E\u0433\u043E 14\u0412")
                              ]),
                              createVNode("div", { style: { "display": "grid", "grid-template-columns": "repeat(2, 50%)", "grid-column-gap": "20px" } }, [
                                createVNode("p", { class: "font-weight-bold text-dark" }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D\u044B:"),
                                createVNode("div", {
                                  class: "d-flex flex-column align-start justify-start",
                                  style: { "row-gap": "10px" }
                                }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(phones.value, (phone, index) => {
                                    return openBlock(), createBlock(VBtn, {
                                      key: index,
                                      style: { "opacity": "1", "height": "fit-content", "width": "fit-content" },
                                      ripple: false,
                                      variant: "plain",
                                      href: phone.href,
                                      class: "font-weight-regular text-secondary px-0"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(phone.number), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["href"]);
                                  }), 128))
                                ])
                              ]),
                              createVNode("div", { style: { "display": "grid", "grid-template-columns": "repeat(2, 50%)", "grid-column-gap": "20px" } }, [
                                createVNode("p", { class: "font-weight-bold text-dark" }, "\u0412\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B:"),
                                createVNode("p", { class: "font-weight-light text-secondary" }, [
                                  createTextVNode("9 "),
                                  createVNode("sup", null, "00"),
                                  createTextVNode("\u201418 "),
                                  createVNode("sup", null, "00")
                                ])
                              ]),
                              createVNode("div", { style: { "display": "grid", "grid-template-columns": "repeat(2, 50%)", "grid-column-gap": "20px" } }, [
                                createVNode("p", { class: "font-weight-bold text-dark" }, "\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E:"),
                                createVNode("p", { class: "font-weight-light text-secondary" }, "24 / 7")
                              ])
                            ])) : (openBlock(), createBlock("div", {
                              key: 1,
                              class: "contacts-page__info__wrapper"
                            }, [
                              createVNode("div", {
                                class: "d-flex justify-start align-center",
                                style: { "column-gap": "30px" }
                              }, [
                                createVNode("p", {
                                  class: "font-weight-bold text-dark",
                                  style: { "width": "150px" }
                                }, "\u0410\u0434\u0440\u0435\u0441:"),
                                createVNode("p", { class: "font-weight-light text-secondary" }, "\u0420\u0411, \u0433. \u041C\u0438\u043D\u0441\u043A \u0443\u043B. \u041A\u043E\u0440\u0436\u0435\u043D\u0435\u0432\u0441\u043A\u043E\u0433\u043E 14\u0412")
                              ]),
                              createVNode("div", {
                                class: "d-flex justify-start align-start",
                                style: { "column-gap": "30px" }
                              }, [
                                createVNode("p", {
                                  class: "font-weight-bold text-dark",
                                  style: { "width": "150px" }
                                }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D\u044B:"),
                                createVNode("div", {
                                  class: "d-flex flex-column align-start justify-start",
                                  style: { "row-gap": "10px" }
                                }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(phones.value, (phone, index) => {
                                    return openBlock(), createBlock(VBtn, {
                                      key: index,
                                      style: { "opacity": "1", "height": "fit-content", "width": "fit-content" },
                                      ripple: false,
                                      variant: "plain",
                                      href: phone.href,
                                      class: "font-weight-regular text-secondary px-0"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(phone.number), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["href"]);
                                  }), 128))
                                ])
                              ]),
                              createVNode("div", {
                                class: "d-flex justify-start align-center",
                                style: { "column-gap": "30px" }
                              }, [
                                createVNode("p", {
                                  class: "font-weight-bold text-dark",
                                  style: { "width": "150px" }
                                }, "\u0412\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B:"),
                                createVNode("p", { class: "font-weight-light text-secondary" }, [
                                  createTextVNode("9 "),
                                  createVNode("sup", null, "00"),
                                  createTextVNode("\u201418 "),
                                  createVNode("sup", null, "00")
                                ])
                              ]),
                              createVNode("div", {
                                class: "d-flex justify-start align-center",
                                style: { "column-gap": "30px" }
                              }, [
                                createVNode("p", {
                                  class: "font-weight-bold text-dark",
                                  style: { "width": "150px" }
                                }, "\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E:"),
                                createVNode("p", { class: "font-weight-light text-secondary" }, "24 / 7")
                              ])
                            ]))
                          ]),
                          createVNode("div", { class: "contacts-page__feedback-form" }, [
                            createVNode(VForm, null, {
                              default: withCtx(() => [
                                createVNode(VCard, {
                                  flat: "",
                                  class: "pa-8"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCardText, {
                                      class: "d-flex flex-column px-0",
                                      style: { "row-gap": "15px" }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", {
                                          class: "d-flex flex-column",
                                          style: { "row-gap": "10px" }
                                        }, [
                                          createVNode("label", { class: "font-weight-bold" }, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0418\u043C\u044F \u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E"),
                                          createVNode(VTextField, {
                                            variant: "outlined",
                                            placeholder: "\u0418\u0432\u0430\u043D\u043E\u0432 \u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447"
                                          })
                                        ]),
                                        createVNode("div", {
                                          class: "d-flex flex-column",
                                          style: { "row-gap": "10px" }
                                        }, [
                                          createVNode("label", { class: "font-weight-bold" }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"),
                                          createVNode(VTextField, {
                                            variant: "outlined",
                                            placeholder: "FCB"
                                          })
                                        ]),
                                        createVNode("div", {
                                          class: "d-flex flex-column",
                                          style: { "row-gap": "10px" }
                                        }, [
                                          createVNode("label", { class: "font-weight-bold" }, "Email \u0438\u043B\u0438 \u0442\u0435\u043B\u0435\u0444\u043E\u043D"),
                                          createVNode(VTextField, {
                                            variant: "outlined",
                                            placeholder: "+375 (29) 110 00 00"
                                          })
                                        ]),
                                        createVNode("div", {
                                          class: "d-flex flex-column",
                                          style: { "row-gap": "10px" }
                                        }, [
                                          createVNode("label", { class: "font-weight-bold" }, "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"),
                                          createVNode(VTextarea, {
                                            variant: "outlined",
                                            placeholder: "\u0412\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"
                                          })
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCardActions, { class: "d-flex justify-end align-center px-0 py-0" }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          "min-height": 48,
                                          elevation: "0",
                                          variant: "elevated",
                                          dark: "",
                                          color: "secondary",
                                          style: { "opacity": "1" },
                                          class: "px-12 py-3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("span", {
                                              class: "font-weight-medium",
                                              style: { "text-transform": "initial" }
                                            }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      class: "contacts-page__form-container"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "contacts-page__info" }, [
                          createVNode("h2", null, "\u041A\u0430\u043A \u043D\u0430\u0441 \u043D\u0430\u0439\u0442\u0438?"),
                          createVNode("p", { class: "text-body-1" }, " \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0432\u0441\u0435\u0445 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0430 \u0434\u043E \u043E\u0444\u0438\u0441\u0430. \u041D\u0430 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435, \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u043C \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0435, \u043F\u0435\u0448\u043A\u043E\u043C \u043E\u0442 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043E\u043A, \u0441\u0442\u0430\u043D\u0446\u0438\u0439 \u043C\u0435\u0442\u0440\u043E. \u0423\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u0430\u0445\u043E\u0434\u044F\u0449\u0438\u0435\u0441\u044F \u0440\u044F\u0434\u043E\u043C \u043E\u0431\u044A\u0435\u043A\u0442\u044B. \u041E\u043F\u0438\u0441\u0430\u0442\u044C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043F\u0430\u0440\u043A\u043E\u0432\u043A\u0438 "),
                          mobile.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "d-flex flex-column justify-start mb-10",
                            style: { "row-gap": "20px" }
                          }, [
                            createVNode("div", { style: { "display": "grid", "grid-template-columns": "repeat(2, 50%)", "grid-column-gap": "20px" } }, [
                              createVNode("p", { class: "font-weight-bold text-dark" }, "\u0410\u0434\u0440\u0435\u0441:"),
                              createVNode("p", { class: "font-weight-light text-secondary" }, "\u0420\u0411, \u0433. \u041C\u0438\u043D\u0441\u043A \u0443\u043B. \u041A\u043E\u0440\u0436\u0435\u043D\u0435\u0432\u0441\u043A\u043E\u0433\u043E 14\u0412")
                            ]),
                            createVNode("div", { style: { "display": "grid", "grid-template-columns": "repeat(2, 50%)", "grid-column-gap": "20px" } }, [
                              createVNode("p", { class: "font-weight-bold text-dark" }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D\u044B:"),
                              createVNode("div", {
                                class: "d-flex flex-column align-start justify-start",
                                style: { "row-gap": "10px" }
                              }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(phones.value, (phone, index) => {
                                  return openBlock(), createBlock(VBtn, {
                                    key: index,
                                    style: { "opacity": "1", "height": "fit-content", "width": "fit-content" },
                                    ripple: false,
                                    variant: "plain",
                                    href: phone.href,
                                    class: "font-weight-regular text-secondary px-0"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(phone.number), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["href"]);
                                }), 128))
                              ])
                            ]),
                            createVNode("div", { style: { "display": "grid", "grid-template-columns": "repeat(2, 50%)", "grid-column-gap": "20px" } }, [
                              createVNode("p", { class: "font-weight-bold text-dark" }, "\u0412\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B:"),
                              createVNode("p", { class: "font-weight-light text-secondary" }, [
                                createTextVNode("9 "),
                                createVNode("sup", null, "00"),
                                createTextVNode("\u201418 "),
                                createVNode("sup", null, "00")
                              ])
                            ]),
                            createVNode("div", { style: { "display": "grid", "grid-template-columns": "repeat(2, 50%)", "grid-column-gap": "20px" } }, [
                              createVNode("p", { class: "font-weight-bold text-dark" }, "\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E:"),
                              createVNode("p", { class: "font-weight-light text-secondary" }, "24 / 7")
                            ])
                          ])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "contacts-page__info__wrapper"
                          }, [
                            createVNode("div", {
                              class: "d-flex justify-start align-center",
                              style: { "column-gap": "30px" }
                            }, [
                              createVNode("p", {
                                class: "font-weight-bold text-dark",
                                style: { "width": "150px" }
                              }, "\u0410\u0434\u0440\u0435\u0441:"),
                              createVNode("p", { class: "font-weight-light text-secondary" }, "\u0420\u0411, \u0433. \u041C\u0438\u043D\u0441\u043A \u0443\u043B. \u041A\u043E\u0440\u0436\u0435\u043D\u0435\u0432\u0441\u043A\u043E\u0433\u043E 14\u0412")
                            ]),
                            createVNode("div", {
                              class: "d-flex justify-start align-start",
                              style: { "column-gap": "30px" }
                            }, [
                              createVNode("p", {
                                class: "font-weight-bold text-dark",
                                style: { "width": "150px" }
                              }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D\u044B:"),
                              createVNode("div", {
                                class: "d-flex flex-column align-start justify-start",
                                style: { "row-gap": "10px" }
                              }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(phones.value, (phone, index) => {
                                  return openBlock(), createBlock(VBtn, {
                                    key: index,
                                    style: { "opacity": "1", "height": "fit-content", "width": "fit-content" },
                                    ripple: false,
                                    variant: "plain",
                                    href: phone.href,
                                    class: "font-weight-regular text-secondary px-0"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(phone.number), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["href"]);
                                }), 128))
                              ])
                            ]),
                            createVNode("div", {
                              class: "d-flex justify-start align-center",
                              style: { "column-gap": "30px" }
                            }, [
                              createVNode("p", {
                                class: "font-weight-bold text-dark",
                                style: { "width": "150px" }
                              }, "\u0412\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B:"),
                              createVNode("p", { class: "font-weight-light text-secondary" }, [
                                createTextVNode("9 "),
                                createVNode("sup", null, "00"),
                                createTextVNode("\u201418 "),
                                createVNode("sup", null, "00")
                              ])
                            ]),
                            createVNode("div", {
                              class: "d-flex justify-start align-center",
                              style: { "column-gap": "30px" }
                            }, [
                              createVNode("p", {
                                class: "font-weight-bold text-dark",
                                style: { "width": "150px" }
                              }, "\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E:"),
                              createVNode("p", { class: "font-weight-light text-secondary" }, "24 / 7")
                            ])
                          ]))
                        ]),
                        createVNode("div", { class: "contacts-page__feedback-form" }, [
                          createVNode(VForm, null, {
                            default: withCtx(() => [
                              createVNode(VCard, {
                                flat: "",
                                class: "pa-8"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCardText, {
                                    class: "d-flex flex-column px-0",
                                    style: { "row-gap": "15px" }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", {
                                        class: "d-flex flex-column",
                                        style: { "row-gap": "10px" }
                                      }, [
                                        createVNode("label", { class: "font-weight-bold" }, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0418\u043C\u044F \u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E"),
                                        createVNode(VTextField, {
                                          variant: "outlined",
                                          placeholder: "\u0418\u0432\u0430\u043D\u043E\u0432 \u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447"
                                        })
                                      ]),
                                      createVNode("div", {
                                        class: "d-flex flex-column",
                                        style: { "row-gap": "10px" }
                                      }, [
                                        createVNode("label", { class: "font-weight-bold" }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"),
                                        createVNode(VTextField, {
                                          variant: "outlined",
                                          placeholder: "FCB"
                                        })
                                      ]),
                                      createVNode("div", {
                                        class: "d-flex flex-column",
                                        style: { "row-gap": "10px" }
                                      }, [
                                        createVNode("label", { class: "font-weight-bold" }, "Email \u0438\u043B\u0438 \u0442\u0435\u043B\u0435\u0444\u043E\u043D"),
                                        createVNode(VTextField, {
                                          variant: "outlined",
                                          placeholder: "+375 (29) 110 00 00"
                                        })
                                      ]),
                                      createVNode("div", {
                                        class: "d-flex flex-column",
                                        style: { "row-gap": "10px" }
                                      }, [
                                        createVNode("label", { class: "font-weight-bold" }, "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"),
                                        createVNode(VTextarea, {
                                          variant: "outlined",
                                          placeholder: "\u0412\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"
                                        })
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardActions, { class: "d-flex justify-end align-center px-0 py-0" }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        "min-height": 48,
                                        elevation: "0",
                                        variant: "elevated",
                                        dark: "",
                                        color: "secondary",
                                        style: { "opacity": "1" },
                                        class: "px-12 py-3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("span", {
                                            class: "font-weight-medium",
                                            style: { "text-transform": "initial" }
                                          }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, { class: "contacts-page__map-container ma-0" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    class: "pa-0 ma-0",
                    cols: "12"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_map_component)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VRow, {
                class: "page__padding ma-0",
                style: { "background": "#F7F7F7" }
              }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    class: "contacts-page__form-container"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "contacts-page__info" }, [
                        createVNode("h2", null, "\u041A\u0430\u043A \u043D\u0430\u0441 \u043D\u0430\u0439\u0442\u0438?"),
                        createVNode("p", { class: "text-body-1" }, " \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0432\u0441\u0435\u0445 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0430 \u0434\u043E \u043E\u0444\u0438\u0441\u0430. \u041D\u0430 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435, \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u043C \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0435, \u043F\u0435\u0448\u043A\u043E\u043C \u043E\u0442 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043E\u043A, \u0441\u0442\u0430\u043D\u0446\u0438\u0439 \u043C\u0435\u0442\u0440\u043E. \u0423\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u0430\u0445\u043E\u0434\u044F\u0449\u0438\u0435\u0441\u044F \u0440\u044F\u0434\u043E\u043C \u043E\u0431\u044A\u0435\u043A\u0442\u044B. \u041E\u043F\u0438\u0441\u0430\u0442\u044C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043F\u0430\u0440\u043A\u043E\u0432\u043A\u0438 "),
                        mobile.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "d-flex flex-column justify-start mb-10",
                          style: { "row-gap": "20px" }
                        }, [
                          createVNode("div", { style: { "display": "grid", "grid-template-columns": "repeat(2, 50%)", "grid-column-gap": "20px" } }, [
                            createVNode("p", { class: "font-weight-bold text-dark" }, "\u0410\u0434\u0440\u0435\u0441:"),
                            createVNode("p", { class: "font-weight-light text-secondary" }, "\u0420\u0411, \u0433. \u041C\u0438\u043D\u0441\u043A \u0443\u043B. \u041A\u043E\u0440\u0436\u0435\u043D\u0435\u0432\u0441\u043A\u043E\u0433\u043E 14\u0412")
                          ]),
                          createVNode("div", { style: { "display": "grid", "grid-template-columns": "repeat(2, 50%)", "grid-column-gap": "20px" } }, [
                            createVNode("p", { class: "font-weight-bold text-dark" }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D\u044B:"),
                            createVNode("div", {
                              class: "d-flex flex-column align-start justify-start",
                              style: { "row-gap": "10px" }
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(phones.value, (phone, index) => {
                                return openBlock(), createBlock(VBtn, {
                                  key: index,
                                  style: { "opacity": "1", "height": "fit-content", "width": "fit-content" },
                                  ripple: false,
                                  variant: "plain",
                                  href: phone.href,
                                  class: "font-weight-regular text-secondary px-0"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(phone.number), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["href"]);
                              }), 128))
                            ])
                          ]),
                          createVNode("div", { style: { "display": "grid", "grid-template-columns": "repeat(2, 50%)", "grid-column-gap": "20px" } }, [
                            createVNode("p", { class: "font-weight-bold text-dark" }, "\u0412\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B:"),
                            createVNode("p", { class: "font-weight-light text-secondary" }, [
                              createTextVNode("9 "),
                              createVNode("sup", null, "00"),
                              createTextVNode("\u201418 "),
                              createVNode("sup", null, "00")
                            ])
                          ]),
                          createVNode("div", { style: { "display": "grid", "grid-template-columns": "repeat(2, 50%)", "grid-column-gap": "20px" } }, [
                            createVNode("p", { class: "font-weight-bold text-dark" }, "\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E:"),
                            createVNode("p", { class: "font-weight-light text-secondary" }, "24 / 7")
                          ])
                        ])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "contacts-page__info__wrapper"
                        }, [
                          createVNode("div", {
                            class: "d-flex justify-start align-center",
                            style: { "column-gap": "30px" }
                          }, [
                            createVNode("p", {
                              class: "font-weight-bold text-dark",
                              style: { "width": "150px" }
                            }, "\u0410\u0434\u0440\u0435\u0441:"),
                            createVNode("p", { class: "font-weight-light text-secondary" }, "\u0420\u0411, \u0433. \u041C\u0438\u043D\u0441\u043A \u0443\u043B. \u041A\u043E\u0440\u0436\u0435\u043D\u0435\u0432\u0441\u043A\u043E\u0433\u043E 14\u0412")
                          ]),
                          createVNode("div", {
                            class: "d-flex justify-start align-start",
                            style: { "column-gap": "30px" }
                          }, [
                            createVNode("p", {
                              class: "font-weight-bold text-dark",
                              style: { "width": "150px" }
                            }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D\u044B:"),
                            createVNode("div", {
                              class: "d-flex flex-column align-start justify-start",
                              style: { "row-gap": "10px" }
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(phones.value, (phone, index) => {
                                return openBlock(), createBlock(VBtn, {
                                  key: index,
                                  style: { "opacity": "1", "height": "fit-content", "width": "fit-content" },
                                  ripple: false,
                                  variant: "plain",
                                  href: phone.href,
                                  class: "font-weight-regular text-secondary px-0"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(phone.number), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["href"]);
                              }), 128))
                            ])
                          ]),
                          createVNode("div", {
                            class: "d-flex justify-start align-center",
                            style: { "column-gap": "30px" }
                          }, [
                            createVNode("p", {
                              class: "font-weight-bold text-dark",
                              style: { "width": "150px" }
                            }, "\u0412\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B:"),
                            createVNode("p", { class: "font-weight-light text-secondary" }, [
                              createTextVNode("9 "),
                              createVNode("sup", null, "00"),
                              createTextVNode("\u201418 "),
                              createVNode("sup", null, "00")
                            ])
                          ]),
                          createVNode("div", {
                            class: "d-flex justify-start align-center",
                            style: { "column-gap": "30px" }
                          }, [
                            createVNode("p", {
                              class: "font-weight-bold text-dark",
                              style: { "width": "150px" }
                            }, "\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E:"),
                            createVNode("p", { class: "font-weight-light text-secondary" }, "24 / 7")
                          ])
                        ]))
                      ]),
                      createVNode("div", { class: "contacts-page__feedback-form" }, [
                        createVNode(VForm, null, {
                          default: withCtx(() => [
                            createVNode(VCard, {
                              flat: "",
                              class: "pa-8"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardText, {
                                  class: "d-flex flex-column px-0",
                                  style: { "row-gap": "15px" }
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", {
                                      class: "d-flex flex-column",
                                      style: { "row-gap": "10px" }
                                    }, [
                                      createVNode("label", { class: "font-weight-bold" }, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0418\u043C\u044F \u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E"),
                                      createVNode(VTextField, {
                                        variant: "outlined",
                                        placeholder: "\u0418\u0432\u0430\u043D\u043E\u0432 \u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447"
                                      })
                                    ]),
                                    createVNode("div", {
                                      class: "d-flex flex-column",
                                      style: { "row-gap": "10px" }
                                    }, [
                                      createVNode("label", { class: "font-weight-bold" }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"),
                                      createVNode(VTextField, {
                                        variant: "outlined",
                                        placeholder: "FCB"
                                      })
                                    ]),
                                    createVNode("div", {
                                      class: "d-flex flex-column",
                                      style: { "row-gap": "10px" }
                                    }, [
                                      createVNode("label", { class: "font-weight-bold" }, "Email \u0438\u043B\u0438 \u0442\u0435\u043B\u0435\u0444\u043E\u043D"),
                                      createVNode(VTextField, {
                                        variant: "outlined",
                                        placeholder: "+375 (29) 110 00 00"
                                      })
                                    ]),
                                    createVNode("div", {
                                      class: "d-flex flex-column",
                                      style: { "row-gap": "10px" }
                                    }, [
                                      createVNode("label", { class: "font-weight-bold" }, "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"),
                                      createVNode(VTextarea, {
                                        variant: "outlined",
                                        placeholder: "\u0412\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"
                                      })
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardActions, { class: "d-flex justify-end align-center px-0 py-0" }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      "min-height": 48,
                                      elevation: "0",
                                      variant: "elevated",
                                      dark: "",
                                      color: "secondary",
                                      style: { "opacity": "1" },
                                      class: "px-12 py-3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", {
                                          class: "font-weight-medium",
                                          style: { "text-transform": "initial" }
                                        }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contacts/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-0b738d2c.mjs.map