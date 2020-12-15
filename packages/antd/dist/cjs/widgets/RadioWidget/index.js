"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _radio = _interopRequireDefault(require("antd/lib/radio"));

/* eslint-disable no-else-return */
var RadioWidget = function RadioWidget(_ref) {
  var autofocus = _ref.autofocus,
      disabled = _ref.disabled,
      formContext = _ref.formContext,
      id = _ref.id,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      options = _ref.options,
      readonly = _ref.readonly,
      schema = _ref.schema,
      value = _ref.value;
  var _formContext$readonly = formContext.readonlyAsDisabled,
      readonlyAsDisabled = _formContext$readonly === void 0 ? true : _formContext$readonly;
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled;

  var handleChange = function handleChange(_ref2) {
    var nextValue = _ref2.target.value;
    return onChange(schema.type === 'boolean' ? nextValue !== 'false' : nextValue);
  };

  var handleBlur = function handleBlur(_ref3) {
    var target = _ref3.target;
    return onBlur(id, target.value);
  };

  var handleFocus = function handleFocus(_ref4) {
    var target = _ref4.target;
    return onFocus(id, target.value);
  };

  return /*#__PURE__*/_react.default.createElement(_radio.default.Group, {
    disabled: disabled || readonlyAsDisabled && readonly,
    id: id,
    name: id,
    onBlur: !readonly ? handleBlur : undefined,
    onChange: !readonly ? handleChange : undefined,
    onFocus: !readonly ? handleFocus : undefined,
    value: "".concat(value)
  }, enumOptions.map(function (_ref5, i) {
    var optionValue = _ref5.value,
        optionLabel = _ref5.label;
    return /*#__PURE__*/_react.default.createElement(_radio.default, {
      autoFocus: i === 0 ? autofocus : false,
      disabled: enumDisabled && enumDisabled.indexOf(value) !== -1,
      key: "".concat(optionValue),
      value: "".concat(optionValue)
    }, optionLabel);
  }));
};

var _default = RadioWidget;
exports.default = _default;