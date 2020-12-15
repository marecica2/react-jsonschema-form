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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _util = require("../util");

/* eslint-disable react/jsx-no-undef,react/no-array-index-key,react/prop-types */
function RadioWidget(_ref) {
  var id = _ref.id,
      schema = _ref.schema,
      options = _ref.options,
      value = _ref.value,
      required = _ref.required,
      disabled = _ref.disabled,
      readonly = _ref.readonly,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      formContext = _ref.formContext;
  // Generating a unique field name to identify this set of radio buttons
  var name = Math.random().toString();
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled;
  var semanticProps = (0, _util.getSemanticProps)({
    formContext: formContext,
    options: options
  }); // eslint-disable-next-line no-shadow

  var _onChange = function _onChange(event, _ref2) {
    var value = _ref2.value;
    return onChange && onChange(schema.type === "boolean" ? value !== "false" : value);
  };

  var _onBlur = function _onBlur() {
    return onBlur && onBlur(id, value);
  };

  var _onFocus = function _onFocus() {
    return onFocus && onFocus(id, value);
  };

  var inlineOption = options.inline ? {
    inline: true
  } : {
    grouped: true
  };
  return _react.default.createElement(_semanticUiReact.Form.Group, inlineOption, enumOptions.map(function (option, i) {
    var itemDisabled = enumDisabled && enumDisabled.indexOf(option.value) !== -1;
    return _react.default.createElement(_semanticUiReact.Form.Field, (0, _extends2.default)({
      required: required,
      control: _semanticUiReact.Radio,
      name: name
    }, semanticProps, {
      onFocus: _onFocus,
      onBlur: _onBlur,
      label: "".concat(option.label),
      value: "".concat(option.value),
      key: "".concat(option.value, "-").concat(i),
      checked: value === option.value,
      onChange: _onChange,
      disabled: disabled || itemDisabled || readonly
    }));
  }));
}

RadioWidget.defaultProps = {
  options: {
    semantic: {
      inverted: false,
      fluid: true
    }
  }
};
RadioWidget.propTypes = {
  options: _propTypes.default.object
};
var _default = RadioWidget;
exports.default = _default;