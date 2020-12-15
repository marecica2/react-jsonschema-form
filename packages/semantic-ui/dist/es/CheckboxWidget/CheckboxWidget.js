import _extends from "@babel/runtime-corejs2/helpers/esm/extends";

/* eslint-disable react/prop-types */
import React from "react";
import { Form } from "semantic-ui-react";
import { getSemanticProps } from "../util";

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
  var semanticProps = getSemanticProps({
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
  return React.createElement(Form.Checkbox, _extends({
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
export default CheckboxWidget;