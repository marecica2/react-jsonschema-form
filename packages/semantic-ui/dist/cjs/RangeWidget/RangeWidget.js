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

var _core = require("@rjsf/core");

var _util = require("../util");

/* eslint-disable react/prop-types */
var rangeSpec = _core.utils.rangeSpec;

function RangeWidget(_ref) {
  var value = _ref.value,
      readonly = _ref.readonly,
      disabled = _ref.disabled,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      options = _ref.options,
      schema = _ref.schema,
      onChange = _ref.onChange,
      required = _ref.required,
      label = _ref.label,
      name = _ref.name,
      id = _ref.id,
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

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_semanticUiReact.Input, (0, _extends2.default)({
    id: id,
    key: id,
    name: name,
    type: "range",
    required: required,
    disabled: disabled || readonly
  }, rangeSpec(schema), semanticProps, {
    value: value || "",
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  })), _react.default.createElement("span", null, value));
}

RangeWidget.defaultProps = {
  options: {
    semantic: {
      fluid: true
    }
  }
};
RangeWidget.propTypes = {
  options: _propTypes.default.object
};
var _default = RangeWidget;
exports.default = _default;