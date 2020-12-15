import _extends from "@babel/runtime-corejs2/helpers/esm/extends";

/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { Form } from "semantic-ui-react";
import { getSemanticProps } from "../util";

function TextWidget(_ref) {
  var id = _ref.id,
      required = _ref.required,
      readonly = _ref.readonly,
      disabled = _ref.disabled,
      name = _ref.name,
      label = _ref.label,
      schema = _ref.schema,
      value = _ref.value,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      autofocus = _ref.autofocus,
      options = _ref.options,
      formContext = _ref.formContext;
  var semanticProps = getSemanticProps({
    formContext: formContext,
    options: options
  }); // eslint-disable-next-line no-shadow

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value === "" ? options.emptyValue : value);
  };

  var _onBlur = function _onBlur() {
    return onBlur && onBlur(id, value);
  };

  var _onFocus = function _onFocus() {
    return onFocus && onFocus(id, value);
  };

  return React.createElement(Form.Input, _extends({
    key: id,
    id: id,
    type: schema.type,
    label: schema.title || label,
    required: required,
    autoFocus: autofocus,
    disabled: disabled || readonly,
    name: name
  }, semanticProps, {
    value: value || value === 0 ? value : "",
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }));
}

TextWidget.defaultProps = {
  options: {
    semantic: {
      fluid: true,
      inverted: false
    }
  }
};
TextWidget.propTypes = {
  options: PropTypes.object
};
export default TextWidget;