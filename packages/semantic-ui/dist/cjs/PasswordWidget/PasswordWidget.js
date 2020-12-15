"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _semanticUiReact = require("semantic-ui-react");

var _util = require("../util");

/* eslint-disable react/prop-types */
function PasswordWidget(_ref) {
  var id = _ref.id,
      required = _ref.required,
      readonly = _ref.readonly,
      disabled = _ref.disabled,
      label = _ref.label,
      name = _ref.name,
      value = _ref.value,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      autofocus = _ref.autofocus,
      options = _ref.options,
      schema = _ref.schema,
      formContext = _ref.formContext;
  var semanticProps = (0, _util.getSemanticProps)({
    formContext: formContext,
    options: options
  }); // eslint-disable-next-line no-shadow

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange && onChange(value === "" ? options.emptyValue : value);
  };

  var _onBlur = function _onBlur() {
    return onBlur && onBlur(id, value);
  };

  var _onFocus = function _onFocus() {
    return onFocus && onFocus(id, value);
  };

  return _react.default.createElement(_semanticUiReact.Form.Input, (0, _extends2.default)({
    id: id,
    key: id,
    label: label || schema.title,
    autoFocus: autofocus,
    required: required,
    disabled: disabled || readonly,
    name: name
  }, semanticProps, {
    type: "password",
    value: value || "",
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }));
}

PasswordWidget.defaultProps = {
  options: {
    semantic: {
      inverted: false,
      fluid: true
    }
  }
};
PasswordWidget.propTypes = {
  options: _propTypes.default.object
};
var _default = PasswordWidget;
exports.default = _default;