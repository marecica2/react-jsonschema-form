import React from 'react';
import dayjs from 'dayjs';
import DatePicker from '../../components/DatePicker';
var DATE_PICKER_STYLE = {
  width: '100%'
};

var DateTimeWidget = function DateTimeWidget(_ref) {
  var disabled = _ref.disabled,
      formContext = _ref.formContext,
      id = _ref.id,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      placeholder = _ref.placeholder,
      readonly = _ref.readonly,
      value = _ref.value;
  var _formContext$readonly = formContext.readonlyAsDisabled,
      readonlyAsDisabled = _formContext$readonly === void 0 ? true : _formContext$readonly;

  var handleChange = function handleChange(nextValue) {
    return onChange(nextValue && nextValue.toISOString());
  };

  var handleBlur = function handleBlur() {
    return onBlur(id, value);
  };

  var handleFocus = function handleFocus() {
    return onFocus(id, value);
  };

  var getPopupContainer = function getPopupContainer(node) {
    return node.parentNode;
  };

  return /*#__PURE__*/React.createElement(DatePicker, {
    disabled: disabled || readonlyAsDisabled && readonly,
    getPopupContainer: getPopupContainer,
    id: id,
    name: id,
    onBlur: !readonly ? handleBlur : undefined,
    onChange: !readonly ? handleChange : undefined,
    onFocus: !readonly ? handleFocus : undefined,
    placeholder: placeholder,
    showTime: true,
    style: DATE_PICKER_STYLE,
    value: value && dayjs(value)
  });
};

export default DateTimeWidget;