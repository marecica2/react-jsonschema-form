import _extends from "@babel/runtime-corejs2/helpers/esm/extends";

/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { Form } from "semantic-ui-react";
import { getSemanticProps } from '../util';

function UpDownWidget(_ref) {
  var id = _ref.id,
      required = _ref.required,
      readonly = _ref.readonly,
      disabled = _ref.disabled,
      label = _ref.label,
      name = _ref.name,
      value = _ref.value,
      options = _ref.options,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      autofocus = _ref.autofocus,
      rawErrors = _ref.rawErrors,
      formContext = _ref.formContext;
  var semanticProps = getSemanticProps({
    formContext: formContext,
    options: options
  }); // eslint-disable-next-line no-shadow

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange && onChange(value);
  };

  var _onBlur = function _onBlur() {
    return onBlur && onBlur(id, value);
  };

  var _onFocus = function _onFocus() {
    return onFocus && onFocus(id, value);
  };

  return React.createElement(React.Fragment, null, React.createElement(Form.Input, _extends({
    id: id,
    key: id,
    autoFocus: autofocus,
    required: required,
    type: "number",
    label: label,
    disabled: disabled || readonly,
    name: name
  }, semanticProps, {
    value: value || value === 0 ? value : "",
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  })));
}

UpDownWidget.defaultProps = {
  options: {
    semantic: {
      inverted: false,
      fluid: true
    }
  }
};
UpDownWidget.propTypes = {
  options: PropTypes.object
};
export default UpDownWidget;