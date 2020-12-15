"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _inputNumber = _interopRequireDefault(require("antd/lib/input-number"));

var INPUT_STYLE = {
  width: '100%'
};

var UpDownWidget = function UpDownWidget(_ref) {
  var disabled = _ref.disabled,
      formContext = _ref.formContext,
      id = _ref.id,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      placeholder = _ref.placeholder,
      readonly = _ref.readonly,
      value = _ref.value;
  var _formContext$readonly = formContext.readonlyAsDisabled,
      readonlyAsDisabled = _formContext$readonly === void 0 ? true : _formContext$readonly;

  var handleChange = function handleChange(nextValue) {
    return onChange(nextValue);
  };

  var handleBlur = function handleBlur(_ref2) {
    var target = _ref2.target;
    return onBlur(id, target.value);
  };

  var handleFocus = function handleFocus(_ref3) {
    var target = _ref3.target;
    return onFocus(id, target.value);
  };

  return /*#__PURE__*/_react.default.createElement(_inputNumber.default, {
    disabled: disabled || readonlyAsDisabled && readonly,
    id: id,
    name: id,
    onBlur: !readonly ? handleBlur : undefined,
    onChange: !readonly ? handleChange : undefined,
    onFocus: !readonly ? handleFocus : undefined,
    placeholder: placeholder,
    style: INPUT_STYLE,
    type: "number",
    value: value
  });
};

var _default = UpDownWidget;
exports.default = _default;