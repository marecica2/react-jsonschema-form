import React from 'react';
import Input from 'antd/lib/input';
import InputNumber from 'antd/lib/input-number';
var INPUT_STYLE = {
  width: '100%'
};

var TextWidget = function TextWidget(_ref) {
  var disabled = _ref.disabled,
      formContext = _ref.formContext,
      id = _ref.id,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      options = _ref.options,
      placeholder = _ref.placeholder,
      readonly = _ref.readonly,
      schema = _ref.schema,
      value = _ref.value;
  var _formContext$readonly = formContext.readonlyAsDisabled,
      readonlyAsDisabled = _formContext$readonly === void 0 ? true : _formContext$readonly;

  var handleNumberChange = function handleNumberChange(nextValue) {
    return onChange(nextValue);
  };

  var handleTextChange = function handleTextChange(_ref2) {
    var target = _ref2.target;
    return onChange(target.value === '' ? options.emptyValue : target.value);
  };

  var handleBlur = function handleBlur(_ref3) {
    var target = _ref3.target;
    return onBlur(id, target.value);
  };

  var handleFocus = function handleFocus(_ref4) {
    var target = _ref4.target;
    return onFocus(id, target.value);
  };

  return schema.type === 'number' || schema.type === 'integer' ? /*#__PURE__*/React.createElement(InputNumber, {
    disabled: disabled || readonlyAsDisabled && readonly,
    id: id,
    name: id,
    onBlur: !readonly ? handleBlur : undefined,
    onChange: !readonly ? handleNumberChange : undefined,
    onFocus: !readonly ? handleFocus : undefined,
    placeholder: placeholder,
    style: INPUT_STYLE,
    type: "number",
    value: value
  }) : /*#__PURE__*/React.createElement(Input, {
    disabled: disabled || readonlyAsDisabled && readonly,
    id: id,
    name: id,
    onBlur: !readonly ? handleBlur : undefined,
    onChange: !readonly ? handleTextChange : undefined,
    onFocus: !readonly ? handleFocus : undefined,
    placeholder: placeholder,
    style: INPUT_STYLE,
    type: options.inputType || 'text',
    value: value
  });
};

export default TextWidget;