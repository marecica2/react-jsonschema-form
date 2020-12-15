import _extends from "@babel/runtime-corejs2/helpers/esm/extends";

/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { Input } from "semantic-ui-react";
import { utils } from '@rjsf/core';
import { getSemanticProps } from "../util";
var rangeSpec = utils.rangeSpec;

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
  var semanticProps = getSemanticProps({
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

  return React.createElement(React.Fragment, null, React.createElement(Input, _extends({
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
  })), React.createElement("span", null, value));
}

RangeWidget.defaultProps = {
  options: {
    semantic: {
      fluid: true
    }
  }
};
RangeWidget.propTypes = {
  options: PropTypes.object
};
export default RangeWidget;