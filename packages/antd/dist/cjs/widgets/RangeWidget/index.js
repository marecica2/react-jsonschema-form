"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@rjsf/core");

var _slider = _interopRequireDefault(require("antd/lib/slider"));

/* eslint-disable no-else-return */
var rangeSpec = _core.utils.rangeSpec;

var RangeWidget = function RangeWidget(_ref) {
  var autofocus = _ref.autofocus,
      disabled = _ref.disabled,
      formContext = _ref.formContext,
      id = _ref.id,
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

  var _rangeSpec = rangeSpec(schema),
      min = _rangeSpec.min,
      max = _rangeSpec.max,
      step = _rangeSpec.step;

  var emptyValue = options.emptyValue || '';

  var handleChange = function handleChange(nextValue) {
    return onChange(nextValue === '' ? emptyValue : nextValue);
  };

  var handleBlur = function handleBlur() {
    return onBlur(id, value);
  };

  var handleFocus = function handleFocus() {
    return onFocus(id, value);
  };

  return /*#__PURE__*/_react.default.createElement(_slider.default, {
    autoFocus: autofocus,
    disabled: disabled || readonlyAsDisabled && readonly,
    id: id,
    max: max,
    min: min,
    onBlur: !readonly ? handleBlur : undefined,
    onChange: !readonly ? handleChange : undefined,
    onFocus: !readonly ? handleFocus : undefined,
    placeholder: placeholder,
    range: false,
    step: step,
    value: value
  });
};

var _default = RangeWidget;
exports.default = _default;