import { findUISchema, getFirstPrimitiveProp, Resolve, composePaths, createDefaultValue, rankWith, schemaTypeIs, isDescriptionHidden, computeLabel, isStringControl, and, isMultiLineControl, isNumberControl, isIntegerControl, isEnumControl, isOneOfEnumControl, isDateControl, isDateTimeControl, isTimeControl, isBooleanControl, isLayout, uiTypeIs, isObjectControl, Generate, createCombinatorRenderInfos, isOneOfControl } from '@jsonforms/core';
import { inject, computed, ref, defineComponent, openBlock, createElementBlock, normalizeClass, createElementVNode, toDisplayString, renderSlot, resolveComponent, Fragment, renderList, createVNode, withCtx, createCommentVNode, createBlock, mergeProps, nextTick } from 'vue';
import { DispatchRenderer, rendererProps, useJsonFormsArrayControl, useJsonFormsControl, useJsonFormsEnumControl, useJsonFormsOneOfEnumControl, useJsonFormsLayout, useJsonFormsControlWithDetail, useJsonFormsOneOfControl, useJsonFormsLabel } from '@jsonforms/vue';
import merge from 'lodash/merge';
import cloneDeep from 'lodash/cloneDeep';
import mergeWith from 'lodash/mergeWith';
import { isEmpty } from 'lodash';
import isEmpty$1 from 'lodash/isEmpty';
import omit from 'lodash/omit';

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : String(i);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var defaultStyles = {
  control: {
    root: 'control',
    wrapper: 'wrapper',
    label: 'label',
    description: 'description',
    input: 'input',
    error: 'error',
    textarea: 'text-area',
    select: 'select',
    option: 'option'
  },
  verticalLayout: {
    root: 'vertical-layout',
    item: 'vertical-layout-item'
  },
  horizontalLayout: {
    root: 'horizontal-layout',
    item: 'horizontal-layout-item'
  },
  group: {
    root: 'group',
    label: 'group-label',
    item: 'group-item'
  },
  arrayList: {
    root: 'array-list',
    legend: 'array-list-legend',
    addButton: 'array-list-add',
    label: 'array-list-label',
    itemWrapper: 'array-list-item-wrapper',
    noData: 'array-list-no-data',
    item: 'array-list-item',
    itemToolbar: 'array-list-item-toolbar',
    itemLabel: 'array-list-item-label',
    itemContent: 'array-list-item-content',
    itemExpanded: 'expanded',
    itemMoveUp: 'array-list-item-move-up',
    itemMoveDown: 'array-list-item-move-down',
    itemDelete: 'array-list-item-delete'
  },
  label: {
    root: 'label-element'
  },
  dialog: {
    root: 'dialog-root',
    title: 'dialog-title',
    body: 'dialog-body',
    actions: 'dialog-actions',
    buttonPrimary: 'dialog-button-primary',
    buttonSecondary: 'dialog-button-secondary'
  }
};

var createEmptyStyles = function createEmptyStyles() {
  return {
    control: {},
    verticalLayout: {},
    horizontalLayout: {},
    group: {},
    arrayList: {},
    label: {},
    dialog: {}
  };
};
var useStyles = function useStyles(element) {
  var _element$options, _element$options2;
  var userStyles = inject('styles', defaultStyles);
  if (!(element !== null && element !== void 0 && (_element$options = element.options) !== null && _element$options !== void 0 && _element$options.styles)) {
    return userStyles;
  }
  var styles = createEmptyStyles();
  if (userStyles) {
    merge(styles, userStyles);
  } else {
    merge(styles, defaultStyles);
  }
  if (element !== null && element !== void 0 && (_element$options2 = element.options) !== null && _element$options2 !== void 0 && _element$options2.styles) {
    merge(styles, element.options.styles);
  }
  return styles;
};

var classes = function classes(strings) {
  for (var _len = arguments.length, variables = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    variables[_key - 1] = arguments[_key];
  }
  return strings.reduce(function (acc, curr, index) {
    return "".concat(acc).concat(curr).concat(variables[index] || '');
  }, '').trim();
};
var mergeStyles = function mergeStyles(stylesA, stylesB) {
  var styles = cloneDeep(stylesA);
  mergeWith(styles, stylesB, function (aValue, bValue) {
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return "".concat(aValue, " ").concat(bValue);
    }
    return undefined;
  });
  return styles;
};

var useVanillaControl = function useVanillaControl(input) {
  var adaptTarget = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (v) {
    return v.value;
  };
  var appliedOptions = computed(function () {
    return merge({}, cloneDeep(input.control.value.config), cloneDeep(input.control.value.uischema.options));
  });
  var isFocused = ref(false);
  var onChange = function onChange(event) {
    input.handleChange(input.control.value.path, adaptTarget(event.target));
  };
  var controlWrapper = computed(function () {
    var _input$control$value = input.control.value,
      id = _input$control$value.id,
      description = _input$control$value.description,
      errors = _input$control$value.errors,
      label = _input$control$value.label,
      visible = _input$control$value.visible,
      required = _input$control$value.required;
    return {
      id: id,
      description: description,
      errors: errors,
      label: label,
      visible: visible,
      required: required
    };
  });
  return _objectSpread2(_objectSpread2({}, input), {}, {
    styles: useStyles(input.control.value.uischema),
    isFocused: isFocused,
    appliedOptions: appliedOptions,
    controlWrapper: controlWrapper,
    onChange: onChange
  });
};
var useVanillaLayout = function useVanillaLayout(input) {
  var appliedOptions = computed(function () {
    return merge({}, cloneDeep(input.layout.value.config), cloneDeep(input.layout.value.uischema.options));
  });
  return _objectSpread2(_objectSpread2({}, input), {}, {
    styles: useStyles(input.layout.value.uischema),
    appliedOptions: appliedOptions
  });
};
var useVanillaLabel = function useVanillaLabel(input) {
  var appliedOptions = computed(function () {
    return merge({}, cloneDeep(input.label.value.config), cloneDeep(input.label.value.uischema.options));
  });
  return _objectSpread2(_objectSpread2({}, input), {}, {
    styles: useStyles(input.label.value.uischema),
    appliedOptions: appliedOptions
  });
};
var useVanillaArrayControl = function useVanillaArrayControl(input) {
  var appliedOptions = computed(function () {
    return merge({}, cloneDeep(input.control.value.config), cloneDeep(input.control.value.uischema.options));
  });
  var childUiSchema = computed(function () {
    return findUISchema(input.control.value.uischemas, input.control.value.schema, input.control.value.uischema.scope, input.control.value.path, undefined, input.control.value.uischema, input.control.value.rootSchema);
  });
  var childLabelForIndex = function childLabelForIndex(index) {
    var _input$control$value$, _input$control$value$2;
    var childLabelProp = (_input$control$value$ = (_input$control$value$2 = input.control.value.uischema.options) === null || _input$control$value$2 === void 0 ? void 0 : _input$control$value$2.childLabelProp) !== null && _input$control$value$ !== void 0 ? _input$control$value$ : getFirstPrimitiveProp(input.control.value.schema);
    if (!childLabelProp) {
      return "".concat(index);
    }
    var labelValue = Resolve.data(input.control.value.data, composePaths("".concat(index), childLabelProp));
    if (labelValue === undefined || labelValue === null || Number.isNaN(labelValue)) {
      return '';
    }
    return "".concat(labelValue);
  };
  return _objectSpread2(_objectSpread2({}, input), {}, {
    styles: useStyles(input.control.value.uischema),
    appliedOptions: appliedOptions,
    childUiSchema: childUiSchema,
    childLabelForIndex: childLabelForIndex
  });
};

var _templateObject, _templateObject2;
var listItem = defineComponent({
  name: 'ArrayListElement',
  props: {
    initiallyExpanded: {
      required: false,
      type: Boolean,
      "default": false
    },
    label: {
      required: false,
      type: String,
      "default": ''
    },
    moveUpEnabled: {
      required: false,
      type: Boolean,
      "default": true
    },
    moveDownEnabled: {
      required: false,
      type: Boolean,
      "default": true
    },
    moveUp: {
      required: false,
      type: Function,
      "default": undefined
    },
    moveDown: {
      required: false,
      type: Function,
      "default": undefined
    },
    deleteEnabled: {
      required: false,
      type: Boolean,
      "default": true
    },
    "delete": {
      required: false,
      type: Function,
      "default": undefined
    },
    styles: {
      required: true,
      type: Object
    }
  },
  data: function data() {
    return {
      expanded: this.initiallyExpanded
    };
  },
  computed: {
    contentClasses: function contentClasses() {
      return classes(_templateObject || (_templateObject = _taggedTemplateLiteral(["", " ", ""])), this.styles.arrayList.itemContent, this.expanded && this.styles.arrayList.itemExpanded);
    },
    toolbarClasses: function toolbarClasses() {
      return classes(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["", " ", ""])), this.styles.arrayList.itemToolbar, this.expanded && this.styles.arrayList.itemExpanded);
    }
  },
  methods: {
    expandClicked: function expandClicked() {
      this.expanded = !this.expanded;
    },
    moveUpClicked: function moveUpClicked(event) {
      var _this$moveUp;
      event.stopPropagation();
      (_this$moveUp = this.moveUp) === null || _this$moveUp === void 0 || _this$moveUp.call(this);
    },
    moveDownClicked: function moveDownClicked(event) {
      var _this$moveDown;
      event.stopPropagation();
      (_this$moveDown = this.moveDown) === null || _this$moveDown === void 0 || _this$moveDown.call(this);
    },
    deleteClicked: function deleteClicked(event) {
      var _this$delete;
      event.stopPropagation();
      (_this$delete = this["delete"]) === null || _this$delete === void 0 || _this$delete.call(this);
    }
  }
});

var _hoisted_1$f = ["disabled"];
var _hoisted_2$4 = ["disabled"];
var _hoisted_3$1 = ["disabled"];
function render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    "class": normalizeClass(_ctx.styles.arrayList.item)
  }, [createElementVNode("div", {
    "class": normalizeClass(_ctx.toolbarClasses),
    onClick: _cache[3] || (_cache[3] = function () {
      return _ctx.expandClicked && _ctx.expandClicked.apply(_ctx, arguments);
    })
  }, [createElementVNode("div", {
    "class": normalizeClass(_ctx.styles.arrayList.itemLabel)
  }, toDisplayString(_ctx.label), 3), createElementVNode("button", {
    disabled: !_ctx.moveUpEnabled,
    "class": normalizeClass(_ctx.styles.arrayList.itemMoveUp),
    type: "button",
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.moveUpClicked && _ctx.moveUpClicked.apply(_ctx, arguments);
    })
  }, " ↑ ", 10, _hoisted_1$f), createElementVNode("button", {
    disabled: !_ctx.moveDownEnabled,
    "class": normalizeClass(_ctx.styles.arrayList.itemMoveDown),
    type: "button",
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.moveDownClicked && _ctx.moveDownClicked.apply(_ctx, arguments);
    })
  }, " ↓ ", 10, _hoisted_2$4), createElementVNode("button", {
    disabled: !_ctx.deleteEnabled,
    "class": normalizeClass(_ctx.styles.arrayList.itemDelete),
    type: "button",
    onClick: _cache[2] || (_cache[2] = function () {
      return _ctx.deleteClicked && _ctx.deleteClicked.apply(_ctx, arguments);
    })
  }, " 🗙 ", 10, _hoisted_3$1)], 2), createElementVNode("div", {
    "class": normalizeClass(_ctx.contentClasses)
  }, [renderSlot(_ctx.$slots, "default")], 2)], 2);
}

listItem.render = render$i;

var controlRenderer$c = defineComponent({
  name: 'ArrayListRenderer',
  components: {
    ArrayListElement: listItem,
    DispatchRenderer: DispatchRenderer
  },
  props: _objectSpread2({}, rendererProps()),
  setup: function setup(props) {
    return useVanillaArrayControl(useJsonFormsArrayControl(props));
  },
  computed: {
    noData: function noData() {
      return !this.control.data || this.control.data.length === 0;
    },
    arraySchema: function arraySchema() {
      return Resolve.schema(this.schema, this.control.uischema.scope, this.control.rootSchema);
    },
    maxItemsReached: function maxItemsReached() {
      return this.arraySchema !== undefined && this.arraySchema.maxItems !== undefined && this.control.data !== undefined && this.control.data.length >= this.arraySchema.maxItems;
    },
    minItemsReached: function minItemsReached() {
      return this.arraySchema !== undefined && this.arraySchema.minItems !== undefined && this.control.data !== undefined && this.control.data.length <= this.arraySchema.minItems;
    }
  },
  methods: {
    composePaths: composePaths,
    createDefaultValue: createDefaultValue,
    addButtonClick: function addButtonClick() {
      this.addItem(this.control.path, createDefaultValue(this.control.schema, this.control.rootSchema))();
    }
  }
});
var entry$f = {
  renderer: controlRenderer$c,
  tester: rankWith(2, schemaTypeIs('array'))
};

var _hoisted_1$e = ["disabled"];
function render$h(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_dispatch_renderer = resolveComponent("dispatch-renderer");
  var _component_array_list_element = resolveComponent("array-list-element");
  return _ctx.control.visible ? (openBlock(), createElementBlock("fieldset", {
    key: 0,
    "class": normalizeClass(_ctx.styles.arrayList.root)
  }, [createElementVNode("legend", {
    "class": normalizeClass(_ctx.styles.arrayList.legend)
  }, [createElementVNode("button", {
    "class": normalizeClass(_ctx.styles.arrayList.addButton),
    type: "button",
    disabled: !_ctx.control.enabled || _ctx.appliedOptions.restrict && _ctx.maxItemsReached,
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.addButtonClick && _ctx.addButtonClick.apply(_ctx, arguments);
    })
  }, " + ", 10, _hoisted_1$e), createElementVNode("label", {
    "class": normalizeClass(_ctx.styles.arrayList.label)
  }, toDisplayString(_ctx.control.label), 3)], 2), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.control.data, function (element, index) {
    return openBlock(), createElementBlock("div", {
      key: "".concat(_ctx.control.path, "-").concat(index),
      "class": normalizeClass(_ctx.styles.arrayList.itemWrapper)
    }, [createVNode(_component_array_list_element, {
      "move-up": _ctx.moveUp(_ctx.control.path, index),
      "move-up-enabled": _ctx.control.enabled && index > 0,
      "move-down": _ctx.moveDown(_ctx.control.path, index),
      "move-down-enabled": _ctx.control.enabled && index < _ctx.control.data.length - 1,
      "delete-enabled": _ctx.control.enabled && !_ctx.minItemsReached,
      "delete": _ctx.removeItems(_ctx.control.path, [index]),
      label: _ctx.childLabelForIndex(index),
      styles: _ctx.styles
    }, {
      "default": withCtx(function () {
        return [createVNode(_component_dispatch_renderer, {
          schema: _ctx.control.schema,
          uischema: _ctx.childUiSchema,
          path: _ctx.composePaths(_ctx.control.path, "".concat(index)),
          enabled: _ctx.control.enabled,
          renderers: _ctx.control.renderers,
          cells: _ctx.control.cells
        }, null, 8, ["schema", "uischema", "path", "enabled", "renderers", "cells"])];
      }),
      _: 2
    }, 1032, ["move-up", "move-up-enabled", "move-down", "move-down-enabled", "delete-enabled", "delete", "label", "styles"])], 2);
  }), 128)), _ctx.noData ? (openBlock(), createElementBlock("div", {
    key: 0,
    "class": normalizeClass(_ctx.styles.arrayList.noData)
  }, toDisplayString(_ctx.control.translations.noDataMessage), 3)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true);
}

controlRenderer$c.render = render$h;

var arrayRenderers = [entry$f];

var script$1 = defineComponent({
  name: 'ControlWrapper',
  props: {
    id: {
      required: true,
      type: String
    },
    description: {
      required: false,
      type: String,
      "default": undefined
    },
    errors: {
      required: false,
      type: String,
      "default": undefined
    },
    label: {
      required: false,
      type: String,
      "default": undefined
    },
    appliedOptions: {
      required: false,
      type: Object,
      "default": undefined
    },
    visible: {
      required: false,
      type: Boolean,
      "default": true
    },
    required: {
      required: false,
      type: Boolean,
      "default": false
    },
    isFocused: {
      required: false,
      type: Boolean,
      "default": false
    },
    styles: {
      required: true,
      type: Object
    }
  },
  computed: {
    showDescription: function showDescription() {
      var _this$appliedOptions;
      return !isDescriptionHidden(this.visible, this.description, this.isFocused, !!((_this$appliedOptions = this.appliedOptions) !== null && _this$appliedOptions !== void 0 && _this$appliedOptions.showUnfocusedDescription));
    },
    computedLabel: function computedLabel() {
      var _this$appliedOptions2;
      return computeLabel(this.label, this.required, !!((_this$appliedOptions2 = this.appliedOptions) !== null && _this$appliedOptions2 !== void 0 && _this$appliedOptions2.hideRequiredAsterisk));
    }
  }
});

var _hoisted_1$d = ["id"];
var _hoisted_2$3 = ["for"];
function render$g(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.visible ? (openBlock(), createElementBlock("div", {
    key: 0,
    id: _ctx.id,
    "class": normalizeClass(_ctx.styles.control.root)
  }, [createElementVNode("label", {
    "for": _ctx.id + '-input',
    "class": normalizeClass(_ctx.styles.control.label)
  }, toDisplayString(_ctx.computedLabel), 11, _hoisted_2$3), createElementVNode("div", {
    "class": normalizeClass(_ctx.styles.control.wrapper)
  }, [renderSlot(_ctx.$slots, "default")], 2), createElementVNode("div", {
    "class": normalizeClass(_ctx.errors ? _ctx.styles.control.error : _ctx.styles.control.description)
  }, toDisplayString(_ctx.errors ? _ctx.errors : _ctx.showDescription ? _ctx.description : null), 3)], 10, _hoisted_1$d)) : createCommentVNode("", true);
}

script$1.render = render$g;

var controlRenderer$b = defineComponent({
  name: 'StringControlRenderer',
  components: {
    ControlWrapper: script$1
  },
  props: _objectSpread2({}, rendererProps()),
  setup: function setup(props) {
    return useVanillaControl(useJsonFormsControl(props), function (target) {
      return target.value || undefined;
    });
  }
});
var entry$e = {
  renderer: controlRenderer$b,
  tester: rankWith(1, isStringControl)
};

var _hoisted_1$c = ["id", "value", "disabled", "autofocus", "placeholder"];
function render$f(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_control_wrapper = resolveComponent("control-wrapper");
  return openBlock(), createBlock(_component_control_wrapper, mergeProps(_ctx.controlWrapper, {
    styles: _ctx.styles,
    "is-focused": _ctx.isFocused,
    "applied-options": _ctx.appliedOptions
  }), {
    "default": withCtx(function () {
      return [createElementVNode("input", {
        id: _ctx.control.id + '-input',
        "class": normalizeClass(_ctx.styles.control.input),
        value: _ctx.control.data,
        disabled: !_ctx.control.enabled,
        autofocus: _ctx.appliedOptions.focus,
        placeholder: _ctx.appliedOptions.placeholder,
        onChange: _cache[0] || (_cache[0] = function () {
          return _ctx.onChange && _ctx.onChange.apply(_ctx, arguments);
        }),
        onFocus: _cache[1] || (_cache[1] = function ($event) {
          return _ctx.isFocused = true;
        }),
        onBlur: _cache[2] || (_cache[2] = function ($event) {
          return _ctx.isFocused = false;
        })
      }, null, 42, _hoisted_1$c)];
    }),
    _: 1
  }, 16, ["styles", "is-focused", "applied-options"]);
}

controlRenderer$b.render = render$f;

var controlRenderer$a = defineComponent({
  name: 'MultiStringControlRenderer',
  components: {
    ControlWrapper: script$1
  },
  props: _objectSpread2({}, rendererProps()),
  setup: function setup(props) {
    return useVanillaControl(useJsonFormsControl(props), function (target) {
      return target.value || undefined;
    });
  }
});
var entry$d = {
  renderer: controlRenderer$a,
  tester: rankWith(2, and(isStringControl, isMultiLineControl))
};

var _hoisted_1$b = ["id", "value", "disabled", "autofocus", "placeholder"];
function render$e(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_control_wrapper = resolveComponent("control-wrapper");
  return openBlock(), createBlock(_component_control_wrapper, mergeProps(_ctx.controlWrapper, {
    styles: _ctx.styles,
    "is-focused": _ctx.isFocused,
    "applied-options": _ctx.appliedOptions
  }), {
    "default": withCtx(function () {
      return [createElementVNode("textarea", {
        id: _ctx.control.id + '-input',
        "class": normalizeClass(_ctx.styles.control.textarea),
        value: _ctx.control.data,
        disabled: !_ctx.control.enabled,
        autofocus: _ctx.appliedOptions.focus,
        placeholder: _ctx.appliedOptions.placeholder,
        onChange: _cache[0] || (_cache[0] = function () {
          return _ctx.onChange && _ctx.onChange.apply(_ctx, arguments);
        }),
        onFocus: _cache[1] || (_cache[1] = function ($event) {
          return _ctx.isFocused = true;
        }),
        onBlur: _cache[2] || (_cache[2] = function ($event) {
          return _ctx.isFocused = false;
        })
      }, null, 42, _hoisted_1$b)];
    }),
    _: 1
  }, 16, ["styles", "is-focused", "applied-options"]);
}

controlRenderer$a.render = render$e;

var controlRenderer$9 = defineComponent({
  name: 'NumberControlRenderer',
  components: {
    ControlWrapper: script$1
  },
  props: _objectSpread2({}, rendererProps()),
  setup: function setup(props) {
    return useVanillaControl(useJsonFormsControl(props), function (target) {
      return target.value === '' ? undefined : Number(target.value);
    });
  },
  computed: {
    step: function step() {
      var _options$step;
      var options = this.appliedOptions;
      return (_options$step = options.step) !== null && _options$step !== void 0 ? _options$step : 0.1;
    }
  }
});
var entry$c = {
  renderer: controlRenderer$9,
  tester: rankWith(1, isNumberControl)
};

var _hoisted_1$a = ["id", "step", "value", "disabled", "autofocus", "placeholder"];
function render$d(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_control_wrapper = resolveComponent("control-wrapper");
  return openBlock(), createBlock(_component_control_wrapper, mergeProps(_ctx.controlWrapper, {
    styles: _ctx.styles,
    "is-focused": _ctx.isFocused,
    "applied-options": _ctx.appliedOptions
  }), {
    "default": withCtx(function () {
      return [createElementVNode("input", {
        id: _ctx.control.id + '-input',
        type: "number",
        step: _ctx.step,
        "class": normalizeClass(_ctx.styles.control.input),
        value: _ctx.control.data,
        disabled: !_ctx.control.enabled,
        autofocus: _ctx.appliedOptions.focus,
        placeholder: _ctx.appliedOptions.placeholder,
        onChange: _cache[0] || (_cache[0] = function () {
          return _ctx.onChange && _ctx.onChange.apply(_ctx, arguments);
        }),
        onFocus: _cache[1] || (_cache[1] = function ($event) {
          return _ctx.isFocused = true;
        }),
        onBlur: _cache[2] || (_cache[2] = function ($event) {
          return _ctx.isFocused = false;
        })
      }, null, 42, _hoisted_1$a)];
    }),
    _: 1
  }, 16, ["styles", "is-focused", "applied-options"]);
}

controlRenderer$9.render = render$d;

var controlRenderer$8 = defineComponent({
  name: 'IntegerControlRenderer',
  components: {
    ControlWrapper: script$1
  },
  props: _objectSpread2({}, rendererProps()),
  setup: function setup(props) {
    return useVanillaControl(useJsonFormsControl(props), function (target) {
      return target.value === '' ? undefined : parseInt(target.value, 10);
    });
  }
});
var entry$b = {
  renderer: controlRenderer$8,
  tester: rankWith(1, isIntegerControl)
};

var _hoisted_1$9 = ["id", "value", "disabled", "autofocus", "placeholder"];
function render$c(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_control_wrapper = resolveComponent("control-wrapper");
  return openBlock(), createBlock(_component_control_wrapper, mergeProps(_ctx.controlWrapper, {
    styles: _ctx.styles,
    "is-focused": _ctx.isFocused,
    "applied-options": _ctx.appliedOptions
  }), {
    "default": withCtx(function () {
      return [createElementVNode("input", {
        id: _ctx.control.id + '-input',
        type: "number",
        step: 1,
        "class": normalizeClass(_ctx.styles.control.input),
        value: _ctx.control.data,
        disabled: !_ctx.control.enabled,
        autofocus: _ctx.appliedOptions.focus,
        placeholder: _ctx.appliedOptions.placeholder,
        onChange: _cache[0] || (_cache[0] = function () {
          return _ctx.onChange && _ctx.onChange.apply(_ctx, arguments);
        }),
        onFocus: _cache[1] || (_cache[1] = function ($event) {
          return _ctx.isFocused = true;
        }),
        onBlur: _cache[2] || (_cache[2] = function ($event) {
          return _ctx.isFocused = false;
        })
      }, null, 42, _hoisted_1$9)];
    }),
    _: 1
  }, 16, ["styles", "is-focused", "applied-options"]);
}

controlRenderer$8.render = render$c;

var controlRenderer$7 = defineComponent({
  name: 'EnumControlRenderer',
  components: {
    ControlWrapper: script$1
  },
  props: _objectSpread2({}, rendererProps()),
  setup: function setup(props) {
    return useVanillaControl(useJsonFormsEnumControl(props), function (target) {
      return target.selectedIndex === 0 ? undefined : target.value;
    });
  }
});
var entry$a = {
  renderer: controlRenderer$7,
  tester: rankWith(2, isEnumControl)
};

var _hoisted_1$8 = ["id", "value", "disabled", "autofocus"];
var _hoisted_2$2 = ["value", "label"];
function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_control_wrapper = resolveComponent("control-wrapper");
  return openBlock(), createBlock(_component_control_wrapper, mergeProps(_ctx.controlWrapper, {
    styles: _ctx.styles,
    "is-focused": _ctx.isFocused,
    "applied-options": _ctx.appliedOptions
  }), {
    "default": withCtx(function () {
      return [createElementVNode("select", {
        id: _ctx.control.id + '-select',
        "class": normalizeClass(_ctx.styles.control.select),
        value: _ctx.control.data,
        disabled: !_ctx.control.enabled,
        autofocus: _ctx.appliedOptions.focus,
        onChange: _cache[0] || (_cache[0] = function () {
          return _ctx.onChange && _ctx.onChange.apply(_ctx, arguments);
        }),
        onFocus: _cache[1] || (_cache[1] = function ($event) {
          return _ctx.isFocused = true;
        }),
        onBlur: _cache[2] || (_cache[2] = function ($event) {
          return _ctx.isFocused = false;
        })
      }, [createElementVNode("option", {
        key: "empty",
        value: "",
        "class": normalizeClass(_ctx.styles.control.option)
      }, null, 2), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.control.options, function (optionElement) {
        return openBlock(), createElementBlock("option", {
          key: optionElement.value,
          value: optionElement.value,
          label: optionElement.label,
          "class": normalizeClass(_ctx.styles.control.option)
        }, null, 10, _hoisted_2$2);
      }), 128))], 42, _hoisted_1$8)];
    }),
    _: 1
  }, 16, ["styles", "is-focused", "applied-options"]);
}

controlRenderer$7.render = render$b;

var controlRenderer$6 = defineComponent({
  name: 'EnumOneofControlRenderer',
  components: {
    ControlWrapper: script$1
  },
  props: _objectSpread2({}, rendererProps()),
  setup: function setup(props) {
    return useVanillaControl(useJsonFormsOneOfEnumControl(props), function (target) {
      return target.selectedIndex === 0 ? undefined : target.value;
    });
  }
});
var entry$9 = {
  renderer: controlRenderer$6,
  tester: rankWith(5, isOneOfEnumControl)
};

var _hoisted_1$7 = ["id", "value", "disabled", "autofocus"];
var _hoisted_2$1 = ["value", "label"];
function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_control_wrapper = resolveComponent("control-wrapper");
  return openBlock(), createBlock(_component_control_wrapper, mergeProps(_ctx.controlWrapper, {
    styles: _ctx.styles,
    "is-focused": _ctx.isFocused,
    "applied-options": _ctx.appliedOptions
  }), {
    "default": withCtx(function () {
      return [createElementVNode("select", {
        id: _ctx.control.id + '-input',
        "class": normalizeClass(_ctx.styles.control.select),
        value: _ctx.control.data,
        disabled: !_ctx.control.enabled,
        autofocus: _ctx.appliedOptions.focus,
        onChange: _cache[0] || (_cache[0] = function () {
          return _ctx.onChange && _ctx.onChange.apply(_ctx, arguments);
        }),
        onFocus: _cache[1] || (_cache[1] = function ($event) {
          return _ctx.isFocused = true;
        }),
        onBlur: _cache[2] || (_cache[2] = function ($event) {
          return _ctx.isFocused = false;
        })
      }, [createElementVNode("option", {
        key: "empty",
        value: "",
        "class": normalizeClass(_ctx.styles.control.option)
      }, null, 2), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.control.options, function (optionElement) {
        return openBlock(), createElementBlock("option", {
          key: optionElement.value,
          value: optionElement.value,
          label: optionElement.label,
          "class": normalizeClass(_ctx.styles.control.option)
        }, null, 10, _hoisted_2$1);
      }), 128))], 42, _hoisted_1$7)];
    }),
    _: 1
  }, 16, ["styles", "is-focused", "applied-options"]);
}

controlRenderer$6.render = render$a;

var controlRenderer$5 = defineComponent({
  name: 'DateControlRenderer',
  components: {
    ControlWrapper: script$1
  },
  props: _objectSpread2({}, rendererProps()),
  setup: function setup(props) {
    return useVanillaControl(useJsonFormsControl(props), function (target) {
      return target.value || undefined;
    });
  }
});
var entry$8 = {
  renderer: controlRenderer$5,
  tester: rankWith(2, isDateControl)
};

var _hoisted_1$6 = ["id", "value", "disabled", "autofocus", "placeholder"];
function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_control_wrapper = resolveComponent("control-wrapper");
  return openBlock(), createBlock(_component_control_wrapper, mergeProps(_ctx.controlWrapper, {
    styles: _ctx.styles,
    "is-focused": _ctx.isFocused,
    "applied-options": _ctx.appliedOptions
  }), {
    "default": withCtx(function () {
      return [createElementVNode("input", {
        id: _ctx.control.id + '-input',
        type: "date",
        "class": normalizeClass(_ctx.styles.control.input),
        value: _ctx.control.data,
        disabled: !_ctx.control.enabled,
        autofocus: _ctx.appliedOptions.focus,
        placeholder: _ctx.appliedOptions.placeholder,
        onChange: _cache[0] || (_cache[0] = function () {
          return _ctx.onChange && _ctx.onChange.apply(_ctx, arguments);
        }),
        onFocus: _cache[1] || (_cache[1] = function ($event) {
          return _ctx.isFocused = true;
        }),
        onBlur: _cache[2] || (_cache[2] = function ($event) {
          return _ctx.isFocused = false;
        })
      }, null, 42, _hoisted_1$6)];
    }),
    _: 1
  }, 16, ["styles", "is-focused", "applied-options"]);
}

controlRenderer$5.render = render$9;

var toISOString = function toISOString(inputDateTime) {
  return inputDateTime === '' ? undefined : inputDateTime + ':00.000Z';
};
var controlRenderer$4 = defineComponent({
  name: 'DatetimeControlRenderer',
  components: {
    ControlWrapper: script$1
  },
  props: _objectSpread2({}, rendererProps()),
  setup: function setup(props) {
    return useVanillaControl(useJsonFormsControl(props), function (target) {
      return toISOString(target.value);
    });
  },
  computed: {
    dataTime: function dataTime() {
      var _this$control$data;
      return ((_this$control$data = this.control.data) !== null && _this$control$data !== void 0 ? _this$control$data : '').substr(0, 16);
    }
  }
});
var entry$7 = {
  renderer: controlRenderer$4,
  tester: rankWith(2, isDateTimeControl)
};

var _hoisted_1$5 = ["id", "value", "disabled", "autofocus", "placeholder"];
function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_control_wrapper = resolveComponent("control-wrapper");
  return openBlock(), createBlock(_component_control_wrapper, mergeProps(_ctx.controlWrapper, {
    styles: _ctx.styles,
    "is-focused": _ctx.isFocused,
    "applied-options": _ctx.appliedOptions
  }), {
    "default": withCtx(function () {
      return [createElementVNode("input", {
        id: _ctx.control.id + '-input',
        type: "datetime-local",
        "class": normalizeClass(_ctx.styles.control.input),
        value: _ctx.dataTime,
        disabled: !_ctx.control.enabled,
        autofocus: _ctx.appliedOptions.focus,
        placeholder: _ctx.appliedOptions.placeholder,
        onChange: _cache[0] || (_cache[0] = function () {
          return _ctx.onChange && _ctx.onChange.apply(_ctx, arguments);
        }),
        onFocus: _cache[1] || (_cache[1] = function ($event) {
          return _ctx.isFocused = true;
        }),
        onBlur: _cache[2] || (_cache[2] = function ($event) {
          return _ctx.isFocused = false;
        })
      }, null, 42, _hoisted_1$5)];
    }),
    _: 1
  }, 16, ["styles", "is-focused", "applied-options"]);
}

controlRenderer$4.render = render$8;

var controlRenderer$3 = defineComponent({
  name: 'TimeControlRenderer',
  components: {
    ControlWrapper: script$1
  },
  props: _objectSpread2({}, rendererProps()),
  setup: function setup(props) {
    return useVanillaControl(useJsonFormsControl(props), function (target) {
      return target.value || undefined;
    });
  }
});
var entry$6 = {
  renderer: controlRenderer$3,
  tester: rankWith(2, isTimeControl)
};

var _hoisted_1$4 = ["id", "value", "disabled", "autofocus", "placeholder"];
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_control_wrapper = resolveComponent("control-wrapper");
  return openBlock(), createBlock(_component_control_wrapper, mergeProps(_ctx.controlWrapper, {
    styles: _ctx.styles,
    "is-focused": _ctx.isFocused,
    "applied-options": _ctx.appliedOptions
  }), {
    "default": withCtx(function () {
      return [createElementVNode("input", {
        id: _ctx.control.id + '-input',
        type: "time",
        "class": normalizeClass(_ctx.styles.control.input),
        value: _ctx.control.data,
        disabled: !_ctx.control.enabled,
        autofocus: _ctx.appliedOptions.focus,
        placeholder: _ctx.appliedOptions.placeholder,
        onChange: _cache[0] || (_cache[0] = function () {
          return _ctx.onChange && _ctx.onChange.apply(_ctx, arguments);
        }),
        onFocus: _cache[1] || (_cache[1] = function ($event) {
          return _ctx.isFocused = true;
        }),
        onBlur: _cache[2] || (_cache[2] = function ($event) {
          return _ctx.isFocused = false;
        })
      }, null, 42, _hoisted_1$4)];
    }),
    _: 1
  }, 16, ["styles", "is-focused", "applied-options"]);
}

controlRenderer$3.render = render$7;

var controlRenderer$2 = defineComponent({
  name: 'BooleanControlRenderer',
  components: {
    ControlWrapper: script$1
  },
  props: _objectSpread2({}, rendererProps()),
  setup: function setup(props) {
    return useVanillaControl(useJsonFormsControl(props), function (target) {
      return target.checked;
    });
  }
});
var entry$5 = {
  renderer: controlRenderer$2,
  tester: rankWith(1, isBooleanControl)
};

var _hoisted_1$3 = ["id", "checked", "disabled", "autofocus", "placeholder"];
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_control_wrapper = resolveComponent("control-wrapper");
  return openBlock(), createBlock(_component_control_wrapper, mergeProps(_ctx.controlWrapper, {
    styles: _ctx.styles,
    "is-focused": _ctx.isFocused,
    "applied-options": _ctx.appliedOptions
  }), {
    "default": withCtx(function () {
      return [createElementVNode("input", {
        id: _ctx.control.id + '-input',
        type: "checkbox",
        "class": normalizeClass(_ctx.styles.control.input),
        checked: !!_ctx.control.data,
        disabled: !_ctx.control.enabled,
        autofocus: _ctx.appliedOptions.focus,
        placeholder: _ctx.appliedOptions.placeholder,
        onChange: _cache[0] || (_cache[0] = function () {
          return _ctx.onChange && _ctx.onChange.apply(_ctx, arguments);
        }),
        onFocus: _cache[1] || (_cache[1] = function ($event) {
          return _ctx.isFocused = true;
        }),
        onBlur: _cache[2] || (_cache[2] = function ($event) {
          return _ctx.isFocused = false;
        })
      }, null, 42, _hoisted_1$3)];
    }),
    _: 1
  }, 16, ["styles", "is-focused", "applied-options"]);
}

controlRenderer$2.render = render$6;

var controlRenderers = [entry$e, entry$d, entry$c, entry$b, entry$a, entry$9, entry$8, entry$7, entry$6, entry$5];

var layoutRenderer$1 = defineComponent({
  name: 'LayoutRenderer',
  components: {
    DispatchRenderer: DispatchRenderer
  },
  props: _objectSpread2({}, rendererProps()),
  setup: function setup(props) {
    return useVanillaLayout(useJsonFormsLayout(props));
  },
  computed: {
    layoutClassObject: function layoutClassObject() {
      return this.layout.direction === 'row' ? this.styles.horizontalLayout : this.styles.verticalLayout;
    }
  }
});
var entry$4 = {
  renderer: layoutRenderer$1,
  tester: rankWith(1, isLayout)
};

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_dispatch_renderer = resolveComponent("dispatch-renderer");
  return _ctx.layout.visible ? (openBlock(), createElementBlock("div", {
    key: 0,
    "class": normalizeClass(_ctx.layoutClassObject.root)
  }, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.layout.uischema.elements, function (element, index) {
    return openBlock(), createElementBlock("div", {
      key: "".concat(_ctx.layout.path, "-").concat(index),
      "class": normalizeClass(_ctx.layoutClassObject.item)
    }, [createVNode(_component_dispatch_renderer, {
      schema: _ctx.layout.schema,
      uischema: element,
      path: _ctx.layout.path,
      enabled: _ctx.layout.enabled,
      renderers: _ctx.layout.renderers,
      cells: _ctx.layout.cells
    }, null, 8, ["schema", "uischema", "path", "enabled", "renderers", "cells"])], 2);
  }), 128))], 2)) : createCommentVNode("", true);
}

layoutRenderer$1.render = render$5;

var layoutRenderer = defineComponent({
  name: 'GroupRenderer',
  components: {
    DispatchRenderer: DispatchRenderer
  },
  props: _objectSpread2({}, rendererProps()),
  setup: function setup(props) {
    return useVanillaLayout(useJsonFormsLayout(props));
  }
});
var entry$3 = {
  renderer: layoutRenderer,
  tester: rankWith(2, and(isLayout, uiTypeIs('Group')))
};

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_dispatch_renderer = resolveComponent("dispatch-renderer");
  return _ctx.layout.visible ? (openBlock(), createElementBlock("fieldset", {
    key: 0,
    "class": normalizeClass(_ctx.styles.group.root)
  }, [_ctx.layout.label ? (openBlock(), createElementBlock("legend", {
    key: 0,
    "class": normalizeClass(_ctx.styles.group.label)
  }, toDisplayString(_ctx.layout.label), 3)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.layout.uischema.elements, function (element, index) {
    return openBlock(), createElementBlock("div", {
      key: "".concat(_ctx.layout.path, "-").concat(index),
      "class": normalizeClass(_ctx.styles.group.item)
    }, [createVNode(_component_dispatch_renderer, {
      schema: _ctx.layout.schema,
      uischema: element,
      path: _ctx.layout.path,
      enabled: _ctx.layout.enabled,
      renderers: _ctx.layout.renderers,
      cells: _ctx.layout.cells
    }, null, 8, ["schema", "uischema", "path", "enabled", "renderers", "cells"])], 2);
  }), 128))], 2)) : createCommentVNode("", true);
}

layoutRenderer.render = render$4;

var layoutRenderers = [entry$4, entry$3];

var controlRenderer$1 = defineComponent({
  name: 'ObjectRenderer',
  components: {
    DispatchRenderer: DispatchRenderer
  },
  props: _objectSpread2({}, rendererProps()),
  setup: function setup(props) {
    var control = useVanillaControl(useJsonFormsControlWithDetail(props));
    return _objectSpread2(_objectSpread2({}, control), {}, {
      input: control
    });
  },
  computed: {
    detailUiSchema: function detailUiSchema() {
      var _this = this;
      var uiSchemaGenerator = function uiSchemaGenerator() {
        var uiSchema = Generate.uiSchema(_this.control.schema, 'Group', undefined, _this.control.rootSchema);
        if (isEmpty(_this.control.path)) {
          uiSchema.type = 'VerticalLayout';
        } else {
          uiSchema.label = _this.control.label;
        }
        return uiSchema;
      };
      var result = findUISchema(this.control.uischemas, this.control.schema, this.control.uischema.scope, this.control.path, uiSchemaGenerator, this.control.uischema, this.control.rootSchema);
      return result;
    }
  }
});
var entry$2 = {
  renderer: controlRenderer$1,
  tester: rankWith(2, isObjectControl)
};

var _hoisted_1$2 = {
  key: 0
};
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_dispatch_renderer = resolveComponent("dispatch-renderer");
  return _ctx.control.visible ? (openBlock(), createElementBlock("div", _hoisted_1$2, [createVNode(_component_dispatch_renderer, {
    visible: _ctx.control.visible,
    enabled: _ctx.control.enabled,
    schema: _ctx.control.schema,
    uischema: _ctx.detailUiSchema,
    path: _ctx.control.path,
    renderers: _ctx.control.renderers,
    cells: _ctx.control.cells
  }, null, 8, ["visible", "enabled", "schema", "uischema", "path", "renderers", "cells"])])) : createCommentVNode("", true);
}

controlRenderer$1.render = render$3;

var script = defineComponent({
  name: 'CombinatorProperties',
  components: {
    DispatchRenderer: DispatchRenderer
  },
  props: {
    schema: {
      type: Object,
      required: true
    },
    combinatorKeyword: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    },
    rootSchema: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props) {
    var otherProps = omit(props.schema, props.combinatorKeyword);
    var foundUISchema = Generate.uiSchema(otherProps, 'VerticalLayout', undefined, props.rootSchema);
    var isLayout = function isLayout(uischema) {
      return Object.prototype.hasOwnProperty.call(uischema, 'elements');
    };
    var isLayoutWithElements = false;
    if (foundUISchema !== null && isLayout(foundUISchema)) {
      isLayoutWithElements = foundUISchema.elements.length > 0;
    }
    return {
      otherProps: otherProps,
      foundUISchema: foundUISchema,
      isLayoutWithElements: isLayoutWithElements
    };
  }
});

var _hoisted_1$1 = {
  key: 0
};
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_dispatch_renderer = resolveComponent("dispatch-renderer");
  return _ctx.isLayoutWithElements ? (openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(_component_dispatch_renderer, {
    schema: _ctx.otherProps,
    path: _ctx.path,
    uischema: _ctx.foundUISchema
  }, null, 8, ["schema", "path", "uischema"])])) : createCommentVNode("", true);
}

script.render = render$2;

var controlRenderer = defineComponent({
  name: 'OneOfRenderer',
  components: {
    ControlWrapper: script$1,
    DispatchRenderer: DispatchRenderer,
    CombinatorProperties: script
  },
  props: _objectSpread2({}, rendererProps()),
  setup: function setup(props) {
    var input = useJsonFormsOneOfControl(props);
    var control = input.control.value;
    var selectedIndex = ref(control.indexOfFittingSchema);
    var selectIndex = ref(selectedIndex.value);
    var newSelectedIndex = ref(0);
    var dialog = ref();
    var confirm = ref();
    return _objectSpread2(_objectSpread2({}, useVanillaControl(input)), {}, {
      selectedIndex: selectedIndex,
      selectIndex: selectIndex,
      newSelectedIndex: newSelectedIndex,
      dialog: dialog,
      confirm: confirm
    });
  },
  computed: {
    indexedOneOfRenderInfos: function indexedOneOfRenderInfos() {
      var result = createCombinatorRenderInfos(
      this.control.schema.oneOf, this.control.rootSchema, 'oneOf', this.control.uischema, this.control.path, this.control.uischemas);
      return result.filter(function (info) {
        return info.uischema;
      }).map(function (info, index) {
        return _objectSpread2(_objectSpread2({}, info), {}, {
          index: index
        });
      });
    }
  },
  methods: {
    handleSelectChange: function handleSelectChange(event) {
      var _this = this;
      var target = event.target;
      this.selectIndex = target.value;
      if (this.control.enabled && !isEmpty$1(this.control.data)) {
        this.showDialog();
        nextTick(function () {
          var _this$confirm;
          _this.newSelectedIndex = _this.selectIndex;
          _this.selectIndex = _this.selectedIndex;
          (_this$confirm = _this.confirm) === null || _this$confirm === void 0 || _this$confirm.focus();
        });
      } else {
        nextTick(function () {
          _this.selectedIndex = _this.selectIndex;
        });
      }
    },
    showDialog: function showDialog() {
      var _this$dialog;
      (_this$dialog = this.dialog) === null || _this$dialog === void 0 || _this$dialog.showModal();
    },
    closeDialog: function closeDialog() {
      var _this$dialog2;
      (_this$dialog2 = this.dialog) === null || _this$dialog2 === void 0 || _this$dialog2.close();
    },
    onConfirm: function onConfirm() {
      this.newSelection();
      this.closeDialog();
    },
    onCancel: function onCancel() {
      this.newSelectedIndex = this.selectedIndex;
      this.closeDialog();
    },
    newSelection: function newSelection() {
      this.handleChange(this.control.path, this.newSelectedIndex !== undefined && this.newSelectedIndex !== null ? createDefaultValue(this.indexedOneOfRenderInfos[this.newSelectedIndex].schema, this.control.rootSchema) : {});
      this.selectIndex = this.newSelectedIndex;
      this.selectedIndex = this.newSelectedIndex;
    }
  }
});
var entry$1 = {
  renderer: controlRenderer,
  tester: rankWith(3, isOneOfControl)
};

var _hoisted_1 = {
  key: 0
};
var _hoisted_2 = ["id", "value", "disabled", "autofocus"];
var _hoisted_3 = ["value", "label"];
var _hoisted_4 = ["onclick"];
var _hoisted_5 = ["onclick"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_combinator_properties = resolveComponent("combinator-properties");
  var _component_control_wrapper = resolveComponent("control-wrapper");
  var _component_dispatch_renderer = resolveComponent("dispatch-renderer");
  return _ctx.control.visible ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(_component_combinator_properties, {
    schema: _ctx.control.schema,
    "combinator-keyword": "oneOf",
    path: _ctx.path
  }, null, 8, ["schema", "path"]), createVNode(_component_control_wrapper, mergeProps(_ctx.controlWrapper, {
    styles: _ctx.styles,
    "is-focused": _ctx.isFocused,
    "applied-options": _ctx.appliedOptions
  }), {
    "default": withCtx(function () {
      return [createElementVNode("select", {
        id: _ctx.control.id + '-input',
        "class": normalizeClass(_ctx.styles.control.select),
        value: _ctx.selectIndex,
        disabled: !_ctx.control.enabled,
        autofocus: _ctx.appliedOptions.focus,
        onChange: _cache[0] || (_cache[0] = function () {
          return _ctx.handleSelectChange && _ctx.handleSelectChange.apply(_ctx, arguments);
        }),
        onFocus: _cache[1] || (_cache[1] = function ($event) {
          return _ctx.isFocused = true;
        }),
        onBlur: _cache[2] || (_cache[2] = function ($event) {
          return _ctx.isFocused = false;
        })
      }, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.indexedOneOfRenderInfos, function (optionElement) {
        return openBlock(), createElementBlock("option", {
          key: optionElement.index,
          value: optionElement.index,
          label: optionElement.label,
          "class": normalizeClass(_ctx.styles.control.option)
        }, null, 10, _hoisted_3);
      }), 128))], 42, _hoisted_2)];
    }),
    _: 1
  }, 16, ["styles", "is-focused", "applied-options"]), _ctx.selectedIndex !== undefined && _ctx.selectedIndex !== null ? (openBlock(), createBlock(_component_dispatch_renderer, {
    key: 0,
    schema: _ctx.indexedOneOfRenderInfos[_ctx.selectedIndex].schema,
    uischema: _ctx.indexedOneOfRenderInfos[_ctx.selectedIndex].uischema,
    path: _ctx.control.path,
    renderers: _ctx.control.renderers,
    cells: _ctx.control.cells,
    enabled: _ctx.control.enabled
  }, null, 8, ["schema", "uischema", "path", "renderers", "cells", "enabled"])) : createCommentVNode("", true), createElementVNode("dialog", {
    ref: "dialog",
    "class": normalizeClass(_ctx.styles.dialog.root)
  }, [createElementVNode("h1", {
    "class": normalizeClass(_ctx.styles.dialog.title)
  }, toDisplayString(_ctx.control.translations.clearDialogTitle), 3), createElementVNode("p", {
    "class": normalizeClass(_ctx.styles.dialog.body)
  }, toDisplayString(_ctx.control.translations.clearDialogMessage), 3), createElementVNode("div", {
    "class": normalizeClass(_ctx.styles.dialog.actions)
  }, [createElementVNode("button", {
    onclick: _ctx.onCancel,
    "class": normalizeClass(_ctx.styles.dialog.buttonSecondary)
  }, toDisplayString(_ctx.control.translations.clearDialogDecline), 11, _hoisted_4), createElementVNode("button", {
    ref: "confirm",
    onclick: _ctx.onConfirm,
    "class": normalizeClass(_ctx.styles.dialog.buttonPrimary)
  }, toDisplayString(_ctx.control.translations.clearDialogAccept), 11, _hoisted_5)], 2)], 2)])) : createCommentVNode("", true);
}

controlRenderer.render = render$1;

var complexRenderers = [entry$2, entry$1];

var labelRenderer = defineComponent({
  name: 'LabelRenderer',
  props: _objectSpread2({}, rendererProps()),
  setup: function setup(props) {
    return useVanillaLabel(useJsonFormsLabel(props));
  }
});
var entry = {
  renderer: labelRenderer,
  tester: rankWith(1, uiTypeIs('Label'))
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.label.visible ? (openBlock(), createElementBlock("label", {
    key: 0,
    "class": normalizeClass(_ctx.styles.label.root)
  }, toDisplayString(_ctx.label.text), 3)) : createCommentVNode("", true);
}

labelRenderer.render = render;

var labelRenderers = [entry];

var vanillaRenderers = [].concat(_toConsumableArray(controlRenderers), _toConsumableArray(layoutRenderers), _toConsumableArray(complexRenderers), _toConsumableArray(arrayRenderers), _toConsumableArray(labelRenderers));

export { controlRenderer$c as ArrayListRenderer, controlRenderer$2 as BooleanControlRenderer, script$1 as ControlWrapper, controlRenderer$5 as DateControlRenderer, controlRenderer$4 as DateTimeControlRenderer, controlRenderer$7 as EnumControlRenderer, layoutRenderer as GroupRenderer, controlRenderer$8 as IntegerControlRenderer, labelRenderer as LabelRenderer, layoutRenderer$1 as LayoutRenderer, controlRenderer$a as MultiStringControlRenderer, controlRenderer$9 as NumberControlRenderer, controlRenderer$b as StringControlRenderer, controlRenderer$3 as TimeControlRenderer, arrayRenderers, classes, controlRenderers, defaultStyles, labelRenderers, layoutRenderers, mergeStyles, controlRenderer$6 as oneOfEnumControlRenderer, useStyles, useVanillaArrayControl, useVanillaControl, useVanillaLabel, useVanillaLayout, vanillaRenderers };
//# sourceMappingURL=jsonforms-vue-vanilla.esm.js.map
