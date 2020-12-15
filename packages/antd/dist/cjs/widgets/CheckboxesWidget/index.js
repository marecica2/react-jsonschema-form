"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var _checkbox = _interopRequireDefault(require("antd/lib/checkbox"));

var CheckboxesWidget = function CheckboxesWidget(_ref) {
  var autofocus = _ref.autofocus,
      disabled = _ref.disabled,
      formContext = _ref.formContext,
      id = _ref.id,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      options = _ref.options,
      readonly = _ref.readonly,
      value = _ref.value;
  var _formContext$readonly = formContext.readonlyAsDisabled,
      readonlyAsDisabled = _formContext$readonly === void 0 ? true : _formContext$readonly;
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled,
      inline = options.inline;

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

  return !_lodash.default.isEmpty(enumOptions) ? /*#__PURE__*/_react.default.createElement(_checkbox.default.Group, {
    disabled: disabled || readonlyAsDisabled && readonly,
    id: id,
    name: id,
    onBlur: !readonly ? handleBlur : undefined,
    onChange: !readonly ? handleChange : undefined,
    onFocus: !readonly ? handleFocus : undefined,
    value: value
  }, enumOptions.map(function (_ref4, i) {
    var optionValue = _ref4.value,
        optionLabel = _ref4.label;
    return /*#__PURE__*/_react.default.createElement("span", {
      key: optionValue
    }, /*#__PURE__*/_react.default.createElement(_checkbox.default, {
      autoFocus: i === 0 ? autofocus : false,
      disabled: enumDisabled && enumDisabled.indexOf(value) !== -1,
      value: optionValue
    }, optionLabel), !inline && /*#__PURE__*/_react.default.createElement("br", null));
  })) : null;
};

var _default = CheckboxesWidget;
exports.default = _default;