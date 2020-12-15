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
function TextareaWidget(_ref) {
  var id = _ref.id,
      placeholder = _ref.placeholder,
      value = _ref.value,
      required = _ref.required,
      disabled = _ref.disabled,
      autofocus = _ref.autofocus,
      label = _ref.label,
      name = _ref.name,
      readonly = _ref.readonly,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      onChange = _ref.onChange,
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

  return _react.default.createElement(_semanticUiReact.Form.TextArea, (0, _extends2.default)({
    id: id,
    key: id,
    label: schema.title || label,
    placeholder: placeholder,
    autoFocus: autofocus,
    required: required,
    disabled: disabled || readonly,
    name: name
  }, semanticProps, {
    value: value || "",
    rows: options.rows || 5,
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }));
}

TextareaWidget.defaultProps = {
  options: {
    semantic: {
      inverted: false
    }
  }
};
TextareaWidget.propTypes = {
  options: _propTypes.default.object
};
var _default = TextareaWidget;
exports.default = _default;