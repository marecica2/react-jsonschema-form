import _Array$isArray from "@babel/runtime-corejs2/core-js/array/is-array";
import _Set from "@babel/runtime-corejs2/core-js/set";

/* eslint-disable no-else-return */
import React from 'react';
import { utils } from '@rjsf/core';
import Select from 'antd/lib/select';
var asNumber = utils.asNumber,
    guessType = utils.guessType;
var SELECT_STYLE = {
  width: '100%'
};
var nums = new _Set(['number', 'integer']);
/**
 * This is a silly limitation in the DOM where option change event values are
 * always retrieved as strings.
 */

var processValue = function processValue(schema, value) {
  // "enum" is a reserved word, so only "type" and "items" can be destructured
  var type = schema.type,
      items = schema.items;

  if (value === '') {
    return undefined;
  } else if (type === 'array' && items && nums.has(items.type)) {
    return value.map(asNumber);
  } else if (type === 'boolean') {
    return value === 'true';
  } else if (type === 'number') {
    return asNumber(value);
  } // If type is undefined, but an enum is present, try and infer the type from
  // the enum values


  if (schema.enum) {
    if (schema.enum.every(function (x) {
      return guessType(x) === 'number';
    })) {
      return asNumber(value);
    } else if (schema.enum.every(function (x) {
      return guessType(x) === 'boolean';
    })) {
      return value === 'true';
    }
  }

  return value;
};

var SelectWidget = function SelectWidget(_ref) {
  var autofocus = _ref.autofocus,
      disabled = _ref.disabled,
      formContext = _ref.formContext,
      id = _ref.id,
      multiple = _ref.multiple,
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
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled;

  var handleChange = function handleChange(nextValue) {
    return onChange(processValue(schema, nextValue));
  };

  var handleBlur = function handleBlur() {
    return onBlur(id, processValue(schema, value));
  };

  var handleFocus = function handleFocus() {
    return onFocus(id, processValue(schema, value));
  };

  var getPopupContainer = function getPopupContainer(node) {
    return node.parentNode;
  };

  var stringify = function stringify(currentValue) {
    return _Array$isArray(currentValue) ? value.map(String) : String(value);
  };

  console.log(placeholder);
  return /*#__PURE__*/React.createElement(Select, {
    autoFocus: autofocus,
    disabled: disabled || readonlyAsDisabled && readonly,
    getPopupContainer: getPopupContainer,
    id: id,
    mode: typeof multiple !== 'undefined' ? 'multiple' : undefined,
    name: id,
    onBlur: !readonly ? handleBlur : undefined,
    onChange: !readonly ? handleChange : undefined,
    onFocus: !readonly ? handleFocus : undefined,
    placeholder: placeholder,
    style: SELECT_STYLE,
    value: typeof value !== 'undefined' ? stringify(value) : undefined
  }, enumOptions.map(function (_ref2) {
    var optionValue = _ref2.value,
        optionLabel = _ref2.label;
    return /*#__PURE__*/React.createElement(Select.Option, {
      disabled: enumDisabled && enumDisabled.indexOf(optionValue) !== -1,
      key: String(optionValue),
      value: String(optionValue)
    }, optionLabel);
  }));
};

SelectWidget.defaultProps = {
  formContext: {}
};
export default SelectWidget;