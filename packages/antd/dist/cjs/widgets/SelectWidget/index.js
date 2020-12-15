"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/array/is-array"));

var _set = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/set"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@rjsf/core");

var _select = _interopRequireDefault(require("antd/lib/select"));

/* eslint-disable no-else-return */
var asNumber = _core.utils.asNumber,
    guessType = _core.utils.guessType;
var SELECT_STYLE = {
  width: '100%'
};
var nums = new _set.default(['number', 'integer']);
/**
 * This is a silly limitation in the DOM where option change event values are
 * always retrieved as strings.
 */

var processValue = function processValue(schema, value) {
  // "enum" is a reserved word, so only "type" and "items" can be destructured
  var type = schema.type,
      items = schema.items;

  if (value === '') {
    return undefined;
  } else if (type === 'array' && items && nums.has(items.type)) {
    return value.map(asNumber);
  } else if (type === 'boolean') {
    return value === 'true';
  } else if (type === 'number') {
    return asNumber(value);
  } // If type is undefined, but an enum is present, try and infer the type from
  // the enum values


  if (schema.enum) {
    if (schema.enum.every(function (x) {
      return guessType(x) === 'number';
    })) {
      return asNumber(value);
    } else if (schema.enum.every(function (x) {
      return guessType(x) === 'boolean';
    })) {
      return value === 'true';
    }
  }

  return value;
};

var SelectWidget = function SelectWidget(_ref) {
  var autofocus = _ref.autofocus,
      disabled = _ref.disabled,
      formContext = _ref.formContext,
      id = _ref.id,
      multiple = _ref.multiple,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      options = _ref.options,
      placeholder = _ref.placeholder,
      readonly = _ref.readonly,
      schema = _ref.schema,
      value = _ref.value;
  var _formContext$readonly = formContext.readonlyAsDisabled,
      readonlyAsDisabled = _formContext$readonly === void 0 ? true : _formContext$readonly;
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled;

  var handleChange = function handleChange(nextValue) {
    return onChange(processValue(schema, nextValue));
  };

  var handleBlur = function handleBlur() {
    return onBlur(id, processValue(schema, value));
  };

  var handleFocus = function handleFocus() {
    return onFocus(id, processValue(schema, value));
  };

  var getPopupContainer = function getPopupContainer(node) {
    return node.parentNode;
  };

  var stringify = function stringify(currentValue) {
    return (0, _isArray.default)(currentValue) ? value.map(String) : String(value);
  };

  console.log(placeholder);
  return /*#__PURE__*/_react.default.createElement(_select.default, {
    autoFocus: autofocus,
    disabled: disabled || readonlyAsDisabled && readonly,
    getPopupContainer: getPopupContainer,
    id: id,
    mode: typeof multiple !== 'undefined' ? 'multiple' : undefined,
    name: id,
    onBlur: !readonly ? handleBlur : undefined,
    onChange: !readonly ? handleChange : undefined,
    onFocus: !readonly ? handleFocus : undefined,
    placeholder: placeholder,
    style: SELECT_STYLE,
    value: typeof value !== 'undefined' ? stringify(value) : undefined
  }, enumOptions.map(function (_ref2) {
    var optionValue = _ref2.value,
        optionLabel = _ref2.label;
    return /*#__PURE__*/_react.default.createElement(_select.default.Option, {
      disabled: enumDisabled && enumDisabled.indexOf(optionValue) !== -1,
      key: String(optionValue),
      value: String(optionValue)
    }, optionLabel);
  }));
};

SelectWidget.defaultProps = {
  formContext: {}
};
var _default = SelectWidget;
exports.default = _default;