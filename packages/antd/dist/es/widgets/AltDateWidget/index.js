import _Object$defineProperty from "@babel/runtime-corejs2/core-js/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs2/core-js/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs2/core-js/object/get-own-property-descriptors";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs2/core-js/object/get-own-property-descriptor";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs2/core-js/object/get-own-property-symbols";
import _defineProperty from "@babel/runtime-corejs2/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime-corejs2/helpers/esm/slicedToArray";
import _Object$keys from "@babel/runtime-corejs2/core-js/object/keys";

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { useEffect, useState } from "react";
import { utils } from '@rjsf/core';
import Button from 'antd/lib/button';
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
var pad = utils.pad,
    parseDateString = utils.parseDateString,
    toDateString = utils.toDateString;

var rangeOptions = function rangeOptions(start, stop) {
  var options = [];

  for (var i = start; i <= stop; i++) {
    options.push({
      value: i,
      label: pad(i, 2)
    });
  }

  return options;
};

var readyForChange = function readyForChange(state) {
  return _Object$keys(state).every(function (key) {
    return typeof state[key] !== "undefined" && state[key] !== -1;
  });
};

var AltDateWidget = function AltDateWidget(_ref) {
  var autofocus = _ref.autofocus,
      disabled = _ref.disabled,
      formContext = _ref.formContext,
      id = _ref.id,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      options = _ref.options,
      readonly = _ref.readonly,
      registry = _ref.registry,
      showTime = _ref.showTime,
      value = _ref.value;
  var SelectWidget = registry.widgets.SelectWidget;
  var _formContext$rowGutte = formContext.rowGutter,
      rowGutter = _formContext$rowGutte === void 0 ? 24 : _formContext$rowGutte;

  var _useState = useState(parseDateString(value, showTime)),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  useEffect(function () {
    setState(parseDateString(value, showTime));
  }, [showTime, value]);

  var handleChange = function handleChange(property, nextValue) {
    var nextState = _objectSpread({}, state, _defineProperty({}, property, typeof nextValue === "undefined" ? -1 : nextValue));

    if (readyForChange(nextState)) {
      onChange(toDateString(nextState, showTime));
    } else {
      setState(nextState);
    }
  };

  var handleNow = function handleNow(event) {
    event.preventDefault();

    if (disabled || readonly) {
      return;
    }

    var nextState = parseDateString(new Date().toJSON(), showTime);
    onChange(toDateString(nextState, showTime));
  };

  var handleClear = function handleClear(event) {
    event.preventDefault();

    if (disabled || readonly) {
      return;
    }

    onChange(undefined);
  };

  var dateElementProps = function dateElementProps() {
    var year = state.year,
        month = state.month,
        day = state.day,
        hour = state.hour,
        minute = state.minute,
        second = state.second;
    var data = [{
      type: "year",
      range: options.yearsRange,
      value: year
    }, {
      type: "month",
      range: [1, 12],
      value: month
    }, {
      type: "day",
      range: [1, 31],
      value: day
    }];

    if (showTime) {
      data.push({
        type: "hour",
        range: [0, 23],
        value: hour
      }, {
        type: "minute",
        range: [0, 59],
        value: minute
      }, {
        type: "second",
        range: [0, 59],
        value: second
      });
    }

    return data;
  };

  var renderDateElement = function renderDateElement(elemProps) {
    return /*#__PURE__*/React.createElement(SelectWidget, {
      autofocus: elemProps.autofocus,
      className: "form-control",
      disabled: elemProps.disabled,
      id: elemProps.id,
      onBlur: elemProps.onBlur,
      onChange: function onChange(elemValue) {
        return elemProps.select(elemProps.type, elemValue);
      },
      onFocus: elemProps.onFocus,
      options: {
        enumOptions: rangeOptions(elemProps.range[0], elemProps.range[1])
      },
      placeholder: elemProps.type,
      readonly: elemProps.readonly,
      schema: {
        type: "integer"
      },
      value: elemProps.value
    });
  };

  return /*#__PURE__*/React.createElement(Row, {
    gutter: [Math.floor(rowGutter / 2), Math.floor(rowGutter / 2)]
  }, dateElementProps().map(function (elemProps, i) {
    var elemId = id + "_" + elemProps.type;
    return /*#__PURE__*/React.createElement(Col, {
      flex: "88px",
      key: elemId
    }, renderDateElement(_objectSpread({}, elemProps, {
      autofocus: autofocus && i === 0,
      disabled: disabled,
      id: elemId,
      onBlur: onBlur,
      onFocus: onFocus,
      readonly: readonly,
      registry: registry,
      select: handleChange,
      // NOTE: antd components accept -1 rather than issue a warning
      // like material-ui, so we need to convert -1 to undefined here.
      value: elemProps.value < 0 ? undefined : elemProps.value
    })));
  }), !options.hideNowButton && /*#__PURE__*/React.createElement(Col, {
    flex: "88px"
  }, /*#__PURE__*/React.createElement(Button, {
    block: true,
    className: "btn-now",
    onClick: handleNow,
    type: "primary"
  }, "Now")), !options.hideClearButton && /*#__PURE__*/React.createElement(Col, {
    flex: "88px"
  }, /*#__PURE__*/React.createElement(Button, {
    block: true,
    className: "btn-clear",
    danger: true,
    onClick: handleClear,
    type: "primary"
  }, "Clear")));
};

AltDateWidget.defaultProps = {
  autofocus: false,
  disabled: false,
  options: {
    yearsRange: [1900, new Date().getFullYear() + 2]
  },
  readonly: false,
  showTime: false
};
export default AltDateWidget;