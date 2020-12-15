'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var core = require('@rjsf/core');
var React = _interopDefault(require('react'));
var react = require('@fluentui/react');
var _pick = _interopDefault(require('lodash/pick'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

var addIcon = {
  iconName: "Add"
};

var AddButton = function AddButton(props) {
  return React.createElement(react.CommandBarButton, {
    style: {
      height: "32px"
    },
    iconProps: addIcon,
    text: "Add item",
    className: props.className,
    onClick: function onClick(e) {
      return props.onClick(e);
    },
    disabled: props.disabled
  });
};

var mappings = {
  remove: "Delete",
  "arrow-up": "Up",
  "arrow-down": "Down"
};
var IconButton = (function (props) {
  return React.createElement(react.IconButton, {
    disabled: props.disabled,
    onClick: function onClick(e) {
      return props.onClick(e);
    },
    iconProps: {
      iconName: mappings[props.icon]
    },
    color: "secondary"
  });
});

var rightJustify = {
  "float": "right"
};
var isMultiSelect = core.utils.isMultiSelect,
    getDefaultRegistry = core.utils.getDefaultRegistry;

var ArrayFieldTemplate = function ArrayFieldTemplate(props) {
  var schema = props.schema,
      _props$registry = props.registry,
      registry = _props$registry === void 0 ? getDefaultRegistry() : _props$registry; // TODO: update types so we don't have to cast registry as any

  if (isMultiSelect(schema, registry.rootSchema)) {
    return React.createElement(DefaultFixedArrayFieldTemplate, Object.assign({}, props));
  } else {
    return React.createElement(DefaultNormalArrayFieldTemplate, Object.assign({}, props));
  }
};

var ArrayFieldTitle = function ArrayFieldTitle(_ref) {
  var TitleField = _ref.TitleField,
      idSchema = _ref.idSchema,
      title = _ref.title,
      required = _ref.required;

  if (!title) {
    return null;
  }

  var id = idSchema.$id + "__title";
  return React.createElement(TitleField, {
    id: id,
    title: title,
    required: required
  });
};

var ArrayFieldDescription = function ArrayFieldDescription(_ref2) {
  var DescriptionField = _ref2.DescriptionField,
      idSchema = _ref2.idSchema,
      description = _ref2.description;

  if (!description) {
    return null;
  }

  var id = idSchema.$id + "__description";
  return React.createElement(DescriptionField, {
    id: id,
    description: description
  });
}; // Used in the two templates


var DefaultArrayItem = function DefaultArrayItem(props) {
  return React.createElement("div", {
    key: props.key,
    className: "ms-Grid",
    dir: "ltr"
  }, React.createElement("div", {
    className: "ms-Grid-row"
  }, React.createElement("div", {
    className: "ms-Grid-col ms-sm6 ms-md8 ms-lg9"
  }, React.createElement("div", {
    className: "ms-Grid-row"
  }, props.children)), React.createElement("div", {
    className: "ms-Grid-col ms-sm6 ms-md4 ms-lg3",
    style: {
      textAlign: "right"
    }
  }, React.createElement(IconButton, {
    icon: "arrow-up",
    className: "array-item-move-up",
    disabled: props.disabled || props.readonly || !props.hasMoveUp,
    onClick: props.onReorderClick(props.index, props.index - 1)
  }), React.createElement(IconButton, {
    icon: "arrow-down",
    className: "array-item-move-down",
    disabled: props.disabled || props.readonly || !props.hasMoveDown,
    onClick: props.onReorderClick(props.index, props.index + 1)
  }), React.createElement(IconButton, {
    icon: "remove",
    className: "array-item-remove",
    disabled: props.disabled || props.readonly,
    onClick: props.onDropIndexClick(props.index)
  }))));
};

var DefaultFixedArrayFieldTemplate = function DefaultFixedArrayFieldTemplate(props) {
  return React.createElement("fieldset", {
    className: props.className
  }, React.createElement(ArrayFieldTitle, {
    key: "array-field-title-" + props.idSchema.$id,
    TitleField: props.TitleField,
    idSchema: props.idSchema,
    title: props.uiSchema["ui:title"] || props.title,
    required: props.required
  }), (props.uiSchema["ui:description"] || props.schema.description) && React.createElement("div", {
    className: "field-description",
    key: "field-description-" + props.idSchema.$id
  }, props.uiSchema["ui:description"] || props.schema.description), React.createElement("div", {
    className: "row array-item-list",
    key: "array-item-list-" + props.idSchema.$id
  }, props.items && props.items.map(DefaultArrayItem)), props.canAdd && React.createElement("span", {
    style: rightJustify
  }, React.createElement(AddButton, {
    className: "array-item-add",
    onClick: props.onAddClick,
    disabled: props.disabled || props.readonly
  })));
};

var DefaultNormalArrayFieldTemplate = function DefaultNormalArrayFieldTemplate(props) {
  return React.createElement(React.Fragment, null, React.createElement(ArrayFieldTitle, {
    key: "array-field-title-" + props.idSchema.$id,
    TitleField: props.TitleField,
    idSchema: props.idSchema,
    title: props.uiSchema["ui:title"] || props.title,
    required: props.required
  }), (props.uiSchema["ui:description"] || props.schema.description) && React.createElement(ArrayFieldDescription, {
    key: "array-field-description-" + props.idSchema.$id,
    DescriptionField: props.DescriptionField,
    idSchema: props.idSchema,
    description: props.uiSchema["ui:description"] || props.schema.description
  }), props.items && props.items.map(function (p) {
    return DefaultArrayItem(p);
  }), props.canAdd && React.createElement("span", {
    style: rightJustify
  }, React.createElement(AddButton, {
    className: "array-item-add",
    onClick: props.onAddClick,
    disabled: props.disabled || props.readonly
  })));
};

var ErrorList = function ErrorList(_ref) {
  var errors = _ref.errors;
  return React.createElement(React.Fragment, null, errors.map(function (error, i) {
    return React.createElement(react.MessageBar, {
      key: i,
      messageBarType: react.MessageBarType.error,
      isMultiline: false,
      dismissButtonAriaLabel: "Close"
    }, error.stack);
  }));
};

var DescriptionField = function DescriptionField(_ref) {
  var description = _ref.description;

  if (description) {
    return React.createElement(react.Text, null, description);
  }

  return null;
};

var styles = {
  root: [{
    fontSize: 24,
    marginBottom: 20,
    paddingBottom: 0
  }]
};

var TitleField = function TitleField(_ref) {
  var title = _ref.title;
  return React.createElement(React.Fragment, null, React.createElement(react.Label, {
    styles: styles
  }, title));
};

var Fields = {
  DescriptionField: DescriptionField,
  TitleField: TitleField
};

var FieldTemplate = function FieldTemplate(_ref) {
  var id = _ref.id,
      children = _ref.children,
      _ref$rawErrors = _ref.rawErrors,
      rawErrors = _ref$rawErrors === void 0 ? [] : _ref$rawErrors,
      rawHelp = _ref.rawHelp,
      rawDescription = _ref.rawDescription,
      classNames = _ref.classNames;
  // TODO: do this better by not returning the form-group class from master.
  classNames = "ms-Grid-col ms-sm12 " + classNames.replace("form-group", "");
  return React.createElement("div", {
    className: classNames,
    style: {
      marginBottom: 15
    }
  }, children, rawDescription && React.createElement(react.Text, null, rawDescription), rawErrors.length > 0 && React.createElement(react.List, {
    items: rawErrors
  }, "})}"), rawHelp && React.createElement(react.Text, {
    id: id
  }, rawHelp));
};

var ObjectFieldTemplate = function ObjectFieldTemplate(_ref) {
  var DescriptionField = _ref.DescriptionField,
      description = _ref.description,
      TitleField = _ref.TitleField,
      title = _ref.title,
      properties = _ref.properties,
      required = _ref.required,
      uiSchema = _ref.uiSchema,
      idSchema = _ref.idSchema;
  return React.createElement(React.Fragment, null, (uiSchema["ui:title"] || title) && React.createElement(TitleField, {
    id: idSchema.$id + "-title",
    title: title,
    required: required
  }), description && React.createElement(DescriptionField, {
    id: idSchema.$id + "-description",
    description: description
  }), React.createElement("div", {
    className: "ms-Grid",
    dir: "ltr"
  }, React.createElement("div", {
    className: "ms-Grid-row"
  }, properties.map(function (element) {
    return element.content;
  }))));
};

var SubmitButton = (function () {
  return React.createElement("div", null, React.createElement("br", null), React.createElement("div", {
    className: "ms-Grid-col ms-sm12"
  }, React.createElement(react.PrimaryButton, {
    text: "Submit",
    type: "submit"
  })));
});

var allowedProps = ["multiline", "resizable", "autoAdjustHeight", "underlined", "borderless", "label", "onRenderLabel", "description", "onRenderDescription", "prefix", "suffix", "onRenderPrefix", "onRenderSuffix", "iconProps", "defaultValue", "value", "disabled", "readOnly", "errorMessage", "onChange", "onNotifyValidationResult", "onGetErrorMessage", "deferredValidationTime", "className", "inputClassName", "ariaLabel", "validateOnFocusIn", "validateOnFocusOut", "validateOnLoad", "theme", "styles", "autoComplete", "mask", "maskChar", "maskFormat", "type"];

var TextWidget = function TextWidget(_ref) {
  var id = _ref.id,
      required = _ref.required,
      readonly = _ref.readonly,
      disabled = _ref.disabled,
      label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      autofocus = _ref.autofocus,
      options = _ref.options,
      schema = _ref.schema,
      rawErrors = _ref.rawErrors;

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value === "" ? options.emptyValue : value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  var uiProps = _pick(options.props || {}, allowedProps);

  return React.createElement(react.TextField, Object.assign({
    id: id,
    label: label || schema.title,
    autoFocus: autofocus,
    required: required,
    disabled: disabled,
    readOnly: readonly,
    name: name,
    type: schema.type,
    value: value ? value : "",
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus,
    errorMessage: (rawErrors || []).join("\n")
  }, uiProps));
};

var AltDateWidget = (function (props) {
  return React.createElement(TextWidget, Object.assign({}, props));
});

var AltDateTimeWidget = (function (props) {
  return React.createElement(TextWidget, Object.assign({}, props));
});

var allowedProps$1 = ["ariaDescribedBy", "ariaLabel", "ariaPositionInSet", "ariaSetSize", "boxSide", "checked", "checkmarkIconProps", "className", "componentRef", "defaultChecked", "defaultIndeterminate", "disabled", "indeterminate", "inputProps", "keytipProps", "label", "onChange", "onRenderLabel", "styles", "theme"];

var CheckboxWidget = function CheckboxWidget(props) {
  var id = props.id,
      value = props.value,
      disabled = props.disabled,
      readonly = props.readonly,
      label = props.label,
      schema = props.schema,
      autofocus = props.autofocus,
      onChange = props.onChange,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      options = props.options;

  var _onChange = React.useCallback(function (_ref, checked) {
    _objectDestructuringEmpty(_ref);

    onChange(checked);
  }, []);

  var _onBlur = function _onBlur(_ref2) {
    var value = _ref2.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref3) {
    var value = _ref3.target.value;
    return onFocus(id, value);
  };

  var uiProps = _pick(options.props || {}, allowedProps$1);

  return React.createElement(React.Fragment, null, React.createElement(react.Checkbox, Object.assign({
    id: id,
    label: label || schema.title,
    disabled: disabled || readonly,
    autoFocus: autofocus,
    onBlur: _onBlur,
    onFocus: _onFocus,
    checked: typeof value === "undefined" ? false : value,
    onChange: _onChange
  }, uiProps)));
};

var styles_red = {
  // TODO: get this color from theme.
  color: "rgb(164, 38, 44)",
  fontSize: 12,
  fontWeight: "normal",
  fontFamily: "\"Segoe UI\", \"Segoe UI Web (West European)\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, Roboto, \"Helvetica Neue\", sans-serif;"
};

var selectValue = function selectValue(value, selected, all) {
  var at = all.indexOf(value);
  var updated = selected.slice(0, at).concat(value, selected.slice(at)); // As inserting values at predefined index positions doesn't work with empty
  // arrays, we need to reorder the updated selection to match the initial order

  return updated.sort(function (a, b) {
    return all.indexOf(a) > all.indexOf(b);
  });
};

var deselectValue = function deselectValue(value, selected) {
  return selected.filter(function (v) {
    return v !== value;
  });
};

var CheckboxesWidget = function CheckboxesWidget(_ref) {
  var schema = _ref.schema,
      label = _ref.label,
      id = _ref.id,
      disabled = _ref.disabled,
      options = _ref.options,
      value = _ref.value,
      autofocus = _ref.autofocus,
      readonly = _ref.readonly,
      required = _ref.required,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      _ref$rawErrors = _ref.rawErrors,
      rawErrors = _ref$rawErrors === void 0 ? [] : _ref$rawErrors;
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled;

  var _onChange = function _onChange(option) {
    return function (_ev, checked) {
      var all = enumOptions.map(function (_ref2) {
        var value = _ref2.value;
        return value;
      });

      if (checked) {
        onChange(selectValue(option.value, value, all));
      } else {
        onChange(deselectValue(option.value, value));
      }
    };
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  var uiProps = _pick(options.props || {}, allowedProps$1);

  return React.createElement(React.Fragment, null, React.createElement(react.Label, null, label || schema.title, required && React.createElement("span", {
    style: styles_red
  }, "\xA0*")), enumOptions.map(function (option, index) {
    var checked = value.indexOf(option.value) !== -1;
    var itemDisabled = enumDisabled && enumDisabled.indexOf(option.value) != -1;
    return React.createElement(react.Checkbox, Object.assign({
      id: id + "_" + index,
      checked: checked,
      label: option.label,
      disabled: disabled || itemDisabled || readonly,
      autoFocus: autofocus && index === 0,
      onChange: _onChange(option),
      onBlur: _onBlur,
      onFocus: _onFocus,
      key: index
    }, uiProps));
  }), React.createElement("span", {
    style: styles_red
  }, (rawErrors || []).join("\n")));
};

var styles_red$1 = {
  // TODO: get this color from theme.
  color: "rgb(164, 38, 44)",
  fontSize: 12,
  fontWeight: "normal",
  fontFamily: "\"Segoe UI\", \"Segoe UI Web (West European)\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, Roboto, \"Helvetica Neue\", sans-serif;"
}; // Keys of IColorPickerProps from @fluentui/react

var allowedProps$2 = ["componentRef", "color", "strings", "onChange", "alphaType", "alphaSliderHidden", "hexLabel", "redLabel", "greenLabel", "blueLabel", "alphaLabel", "className", "theme", "styles", "showPreview"];

var ColorWidget = function ColorWidget(_ref) {
  var schema = _ref.schema,
      options = _ref.options,
      value = _ref.value,
      required = _ref.required,
      label = _ref.label,
      onChange = _ref.onChange;

  var updateColor = function updateColor(ev, colorObj) {
    onChange(colorObj.hex);
  };

  var uiProps = _pick(options.props || {}, allowedProps$2);

  return React.createElement(React.Fragment, null, React.createElement(react.Label, null, label || schema.title, required && React.createElement("span", {
    style: styles_red$1
  }, "\xA0*")), React.createElement(react.ColorPicker, Object.assign({
    color: react.getColorFromString(value),
    onChange: updateColor,
    alphaType: "alpha",
    showPreview: true
  }, uiProps)));
};

var pad = core.utils.pad; // Keys of IDropdownProps from @fluentui/react

var allowedProps$3 = ["componentRef", "styles", "theme", "calloutProps", "calendarProps", "textField", "calendarAs", "onSelectDate", "label", "isRequired", "disabled", "ariaLabel", "underlined", "pickerAriaLabel", "isMonthPickerVisible", "showMonthPickerAsOverlay", "allowTextInput", "disableAutoFocus", "placeholder", "today", "value", "formatDate", "parseDateFromString", "firstDayOfWeek", "strings", "highlightCurrentMonth", "highlightSelectedMonth", "showWeekNumbers", "firstWeekOfYear", "showGoToToday", "borderless", "className", "dateTimeFormatter", "minDate", "maxDate", "initialPickerDate", "allFocusable", "onAfterMenuDismiss", "showCloseButton", "tabIndex"];
var controlClass =
/*#__PURE__*/
react.mergeStyleSets({
  control: {
    margin: "0 0 15px 0"
  }
}); // TODO: move to utils.
// TODO: figure out a standard format for this, as well as
// how we can get this to work with locales.

var formatDate = function formatDate(date) {
  if (!date) {
    return "";
  }

  var yyyy = pad(date.getFullYear(), 4);
  var MM = pad(date.getMonth() + 1, 2);
  var dd = pad(date.getDate(), 2);
  return yyyy + "-" + MM + "-" + dd;
};

var parseDate = function parseDate(dateStr) {
  if (!dateStr) {
    return undefined;
  }

  var _dateStr$split$map = dateStr.split("-").map(function (e) {
    return parseInt(e);
  }),
      year = _dateStr$split$map[0],
      month = _dateStr$split$map[1],
      day = _dateStr$split$map[2];

  var dt = new Date(year, month - 1, day);
  return dt;
};

var DateWidget = function DateWidget(_ref) {
  var id = _ref.id,
      required = _ref.required,
      label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      options = _ref.options,
      placeholder = _ref.placeholder;

  var _onSelectDate = function _onSelectDate(date) {
    if (date) {
      var formatted = formatDate(date);
      formatted && onChange(formatted);
    }
  };

  var _onBlur = function _onBlur(_ref2) {
    var value = _ref2.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref3) {
    var value = _ref3.target.value;
    return onFocus(id, value);
  };

  var uiProps = _pick(options.props || {}, allowedProps$3);

  return React.createElement(react.DatePicker, Object.assign({
    className: controlClass.control,
    firstDayOfWeek: react.DayOfWeek.Sunday,
    placeholder: placeholder,
    ariaLabel: "Select a date",
    isRequired: required,
    label: label,
    onSelectDate: _onSelectDate,
    onBlur: _onBlur,
    onFocus: _onFocus,
    value: parseDate(value)
  }, uiProps));
};

var localToUTC = core.utils.localToUTC,
    utcToLocal = core.utils.utcToLocal;

var DateTimeWidget = function DateTimeWidget(props) {
  var uiProps = props.options["props"] || {};
  var value = utcToLocal(props.value);

  var onChange = function onChange(value) {
    props.onChange(localToUTC(value));
  };

  var options = _extends({}, props.options, {
    props: _extends({
      type: "datetime-local"
    }, uiProps)
  }); // TODO: rows and columns.


  return React.createElement(TextWidget, Object.assign({}, props, {
    options: options,
    value: value,
    onChange: onChange
  }));
};

var EmailWidget = function EmailWidget(props) {
  var uiProps = props.options["props"] || {};

  var options = _extends({}, props.options, {
    props: _extends({
      type: "email"
    }, uiProps)
  });

  return React.createElement(TextWidget, Object.assign({}, props, {
    options: options,
    value: props.value,
    onChange: props.onChange
  }, uiProps));
};

var PasswordWidget = function PasswordWidget(props) {
  var uiProps = props.options["props"] || {};

  var options = _extends({}, props.options, {
    props: _extends({
      type: "password"
    }, uiProps)
  });

  return React.createElement(TextWidget, Object.assign({}, props, {
    options: options,
    value: props.value,
    onChange: props.onChange
  }, uiProps));
};

var allowedProps$4 = ["componentRef", "options", "defaultSelectedKey", "selectedKey", "onChange", "label", "onChanged", "theme", "styles", "ariaLabelledBy"];

var RadioWidget = function RadioWidget(_ref) {
  var id = _ref.id,
      schema = _ref.schema,
      options = _ref.options,
      value = _ref.value,
      required = _ref.required,
      label = _ref.label,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus;
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled;

  function _onChange(ev, option) {
    if (option) {
      onChange(option.key);
    }
  }

  var _onBlur = function _onBlur(_ref2) {
    var value = _ref2.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref3) {
    var value = _ref3.target.value;
    return onFocus(id, value);
  };
  var newOptions = enumOptions.map(function (option) {
    return {
      key: option.value,
      text: option.label,
      disabled: (enumDisabled || []).indexOf(option.value) !== -1
    };
  });

  var uiProps = _pick(options.props || {}, allowedProps$4);

  return React.createElement(react.ChoiceGroup, Object.assign({
    options: newOptions,
    onChange: _onChange,
    onFocus: _onFocus,
    onBlur: _onBlur,
    label: label || schema.title,
    required: required,
    selectedKey: value
  }, uiProps));
};

var rangeSpec = core.utils.rangeSpec;
var styles_red$2 = {
  // TODO: get this color from theme.
  color: "rgb(164, 38, 44)",
  fontSize: 12,
  fontWeight: "normal",
  fontFamily: "\"Segoe UI\", \"Segoe UI Web (West European)\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, Roboto, \"Helvetica Neue\", sans-serif;"
}; // Keys of ISliderProps from @fluentui/react

var allowedProps$5 = ["componentRef", "styles?", "theme", "label", "defaultValue", "value", "min", "max", "step", "showValue", "onChange", "ariaLabel", "ariaValueText", "vertical", "disabled", "snapToStep", "className", "buttonProps", "valueFormat", "originFromZero"];

var RangeWidget = function RangeWidget(_ref) {
  var value = _ref.value,
      readonly = _ref.readonly,
      disabled = _ref.disabled,
      options = _ref.options,
      schema = _ref.schema,
      onChange = _ref.onChange,
      required = _ref.required,
      label = _ref.label,
      id = _ref.id;

  var sliderProps = _extends({
    value: value,
    label: label,
    id: id
  }, rangeSpec(schema));

  var _onChange = function _onChange(value) {
    return onChange(value);
  };

  var uiProps = _pick(options.props || {}, allowedProps$5);

  return React.createElement(React.Fragment, null, React.createElement(react.Label, null, label || schema.title, required && React.createElement("span", {
    style: styles_red$2
  }, "\xA0*")), React.createElement(react.Slider, Object.assign({
    disabled: disabled || readonly,
    min: sliderProps.min,
    max: sliderProps.max,
    step: sliderProps.step,
    onChange: _onChange,
    snapToStep: true
  }, uiProps)));
};

var allowedProps$6 = ["placeHolder", "options", "onChange", "onChanged", "onRenderLabel", "onRenderPlaceholder", "onRenderPlaceHolder", "onRenderTitle", "onRenderCaretDown", "dropdownWidth", "responsiveMode", "defaultSelectedKeys", "selectedKeys", "multiselectDelimiter", "notifyOnReselect", "isDisabled", "keytipProps", "theme", "styles", // ISelectableDroppableTextProps
"componentRef", "label", "ariaLabel", "id", "className", "defaultSelectedKey", "selectedKey", "multiSelect", "options", "onRenderContainer", "onRenderList", "onRenderItem", "onRenderOption", "onDismiss", "disabled", "required", "calloutProps", "panelProps", "errorMessage", "placeholder", "openOnKeyboardFocus"];

var SelectWidget = function SelectWidget(_ref) {
  var schema = _ref.schema,
      id = _ref.id,
      options = _ref.options,
      label = _ref.label,
      required = _ref.required,
      disabled = _ref.disabled,
      readonly = _ref.readonly,
      value = _ref.value,
      multiple = _ref.multiple,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus;
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled;

  var _onChange = function _onChange(_ev, item) {
    if (!item) {
      return;
    }

    if (multiple) {
      var valueOrDefault = value || [];

      if (item.selected) {
        onChange([].concat(valueOrDefault, [item.key]));
      } else {
        onChange(valueOrDefault.filter(function (key) {
          return key !== item.key;
        }));
      }
    } else {
      onChange(item.key);
    }
  };

  var _onBlur = function _onBlur(e) {
    return onBlur(id, e.target.value);
  };

  var _onFocus = function _onFocus(e) {
    return onFocus(id, e.target.value);
  };

  var newOptions = enumOptions.map(function (option) {
    return {
      key: option.value,
      text: option.label,
      disabled: (enumDisabled || []).indexOf(option.value) !== -1
    };
  });

  var uiProps = _pick(options.props || {}, allowedProps$6);

  return React.createElement(React.Fragment, null, React.createElement(react.Label, null, label || schema.title), React.createElement(react.Dropdown, Object.assign({
    multiSelect: multiple,
    defaultSelectedKey: value,
    required: required,
    options: newOptions,
    disabled: disabled || readonly,
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }, uiProps)));
};

var TextareaWidget = function TextareaWidget(props) {
  var uiProps = props.options["props"] || {};

  var options = _extends({}, props.options, {
    "props": _extends({
      multiline: true
    }, uiProps)
  }); // TODO: rows and columns.


  return React.createElement(TextWidget, Object.assign({}, props, {
    options: options
  }));
};

var rangeSpec$1 = core.utils.rangeSpec; // Keys of ISpinButtonProps from @fluentui/react

var allowedProps$7 = ["ariaDescribedBy", "ariaLabel", "ariaPositionInSet", "ariaSetSize", "ariaValueNow", "ariaValueText", "className", "componentRef", "decrementButtonAriaLabel", "decrementButtonIcon", "defaultValue", "disabled", "downArrowButtonStyles", "getClassNames", "iconButtonProps", "iconProps", "incrementButtonAriaLabel", "incrementButtonIcon", "inputProps", "keytipProps", "label", "labelPosition", "max", "min", "onBlur", "onDecrement", "onFocus", "onIncrement", "onValidate", "precision", "step", "styles", "theme", "title", "upArrowButtonStyles", "value"];

var UpDownWidget = function UpDownWidget(_ref) {
  var id = _ref.id,
      required = _ref.required,
      readonly = _ref.readonly,
      disabled = _ref.disabled,
      label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      options = _ref.options,
      schema = _ref.schema;

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(Number(value));
  };

  var _rangeSpec = rangeSpec$1(schema),
      min = _rangeSpec.min,
      max = _rangeSpec.max,
      step = _rangeSpec.step;

  if (min === undefined) {
    min = -1 * Infinity;
  }

  if (max === undefined) {
    max = Infinity;
  }

  if (step === undefined) {
    step = 1;
  }

  var _onIncrement = function _onIncrement(value) {
    if (Number(value) + step <= max) onChange(Number(value) + step);
  };

  var _onDecrement = function _onDecrement(value) {
    if (Number(value) - step >= min) onChange(Number(value) - step);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  var requiredSymbol = required ? "*" : "";

  var uiProps = _pick(options.props || {}, allowedProps$7);

  return React.createElement(React.Fragment, null, React.createElement(react.Label, {
    htmlFor: id
  }, label + requiredSymbol), React.createElement(react.SpinButton, Object.assign({
    id: id,
    min: min,
    max: max,
    step: step,
    incrementButtonAriaLabel: "Increase value by 1",
    decrementButtonAriaLabel: "Decrease value by 1",
    disabled: disabled || readonly,
    value: value || value === 0 ? value : "",
    onBlur: _onBlur,
    onFocus: _onFocus,
    onChange: _onChange,
    onIncrement: _onIncrement,
    onDecrement: _onDecrement,
    "for": ""
  }, uiProps)));
};

var URLWidget = function URLWidget(props) {
  var uiProps = props.options["props"] || {};

  var options = _extends({}, props.options, {
    props: _extends({
      type: "url"
    }, uiProps)
  });

  return React.createElement(TextWidget, Object.assign({}, props, {
    options: options,
    value: props.value,
    onChange: props.onChange
  }, uiProps));
};

var Widgets = {
  AltDateWidget: AltDateWidget,
  AltDateTimeWidget: AltDateTimeWidget,
  CheckboxWidget: CheckboxWidget,
  CheckboxesWidget: CheckboxesWidget,
  ColorWidget: ColorWidget,
  DateWidget: DateWidget,
  DateTimeWidget: DateTimeWidget,
  EmailWidget: EmailWidget,
  PasswordWidget: PasswordWidget,
  RadioWidget: RadioWidget,
  RangeWidget: RangeWidget,
  SelectWidget: SelectWidget,
  TextareaWidget: TextareaWidget,
  TextWidget: TextWidget,
  UpDownWidget: UpDownWidget,
  URLWidget: URLWidget
};

var getDefaultRegistry$1 = core.utils.getDefaultRegistry;

var _getDefaultRegistry =
/*#__PURE__*/
getDefaultRegistry$1(),
    fields = _getDefaultRegistry.fields,
    widgets = _getDefaultRegistry.widgets;

var Theme = {
  ArrayFieldTemplate: ArrayFieldTemplate,
  fields:
  /*#__PURE__*/
  _extends({}, fields, {}, Fields),
  FieldTemplate: FieldTemplate,
  ObjectFieldTemplate: ObjectFieldTemplate,
  widgets:
  /*#__PURE__*/
  _extends({}, widgets, {}, Widgets),
  ErrorList: ErrorList,
  children:
  /*#__PURE__*/
  React.createElement(SubmitButton)
};

var FuiForm =
/*#__PURE__*/
core.withTheme(Theme);

react.initializeIcons();

exports.FieldTemplate = FieldTemplate;
exports.Fields = Fields;
exports.FuiForm = FuiForm;
exports.ObjectFieldTemplate = ObjectFieldTemplate;
exports.Theme = Theme;
exports.Widgets = Widgets;
exports.default = FuiForm;
//# sourceMappingURL=fluent-ui.cjs.development.js.map
