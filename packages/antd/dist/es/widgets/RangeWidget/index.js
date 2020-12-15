/* eslint-disable no-else-return */
import React from 'react';
import { utils } from '@rjsf/core';
import Slider from 'antd/lib/slider';
var rangeSpec = utils.rangeSpec;

var RangeWidget = function RangeWidget(_ref) {
  var autofocus = _ref.autofocus,
      disabled = _ref.disabled,
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

  var _rangeSpec = rangeSpec(schema),
      min = _rangeSpec.min,
      max = _rangeSpec.max,
      step = _rangeSpec.step;

  var emptyValue = options.emptyValue || '';

  var handleChange = function handleChange(nextValue) {
    return onChange(nextValue === '' ? emptyValue : nextValue);
  };

  var handleBlur = function handleBlur() {
    return onBlur(id, value);
  };

  var handleFocus = function handleFocus() {
    return onFocus(id, value);
  };

  return /*#__PURE__*/React.createElement(Slider, {
    autoFocus: autofocus,
    disabled: disabled || readonlyAsDisabled && readonly,
    id: id,
    max: max,
    min: min,
    onBlur: !readonly ? handleBlur : undefined,
    onChange: !readonly ? handleChange : undefined,
    onFocus: !readonly ? handleFocus : undefined,
    placeholder: placeholder,
    range: false,
    step: step,
    value: value
  });
};

export default RangeWidget;