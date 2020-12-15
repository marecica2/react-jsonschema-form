import _extends from "@babel/runtime-corejs2/helpers/esm/extends";

/* eslint-disable react/jsx-no-undef,react/no-array-index-key,react/prop-types */
import React from "react";
import { Form, Radio } from "semantic-ui-react";
import PropTypes from "prop-types";
import { getSemanticProps } from "../util";

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
  var semanticProps = getSemanticProps({
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
  return React.createElement(Form.Group, inlineOption, enumOptions.map(function (option, i) {
    var itemDisabled = enumDisabled && enumDisabled.indexOf(option.value) !== -1;
    return React.createElement(Form.Field, _extends({
      required: required,
      control: Radio,
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
  options: PropTypes.object
};
export default RadioWidget;