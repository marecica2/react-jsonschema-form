"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _util = require("../util");

/* eslint-disable react/prop-types */
function CheckboxWidget(props) {
  var id = props.id,
      value = props.value,
      required = props.required,
      disabled = props.disabled,
      readonly = props.readonly,
      label = props.label,
      autofocus = props.autofocus,
      onChange = props.onChange,
      onBlur = props.onBlur,
      options = props.options,
      onFocus = props.onFocus,
      formContext = props.formContext;
  var semanticProps = (0, _util.getSemanticProps)({
    formContext: formContext,
    options: options
  });

  var _onChange = function _onChange(event, data) {
    return onChange && onChange(data.checked);
  };

  var _onBlur = function _onBlur() {
    return onBlur && onBlur(id, value);
  };

  var _onFocus = function _onFocus() {
    return onFocus && onFocus(id, value);
  };

  var checked = value == "true" || value == true;
  return _react.default.createElement(_semanticUiReact.Form.Checkbox, (0, _extends2.default)({
    id: id,
    disabled: disabled || readonly,
    autoFocus: autofocus
  }, semanticProps, {
    checked: typeof value === "undefined" ? false : checked,
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus,
    required: required,
    label: label
  }));
}

CheckboxWidget.defaultProps = {
  options: {
    semantic: {
      inverted: false
    }
  }
};
var _default = CheckboxWidget;
exports.default = _default;