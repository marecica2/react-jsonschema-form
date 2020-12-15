"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptors"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-symbols"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/slicedToArray"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/keys"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@rjsf/core");

var _button = _interopRequireDefault(require("antd/lib/button"));

var _col = _interopRequireDefault(require("antd/lib/col"));

var _row = _interopRequireDefault(require("antd/lib/row"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { ownKeys(Object(source)).forEach(function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

var pad = _core.utils.pad,
    parseDateString = _core.utils.parseDateString,
    toDateString = _core.utils.toDateString;

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
  return (0, _keys.default)(state).every(function (key) {
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

  var _useState = (0, _react.useState)(parseDateString(value, showTime)),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  (0, _react.useEffect)(function () {
    setState(parseDateString(value, showTime));
  }, [showTime, value]);

  var handleChange = function handleChange(property, nextValue) {
    var nextState = _objectSpread({}, state, (0, _defineProperty3.default)({}, property, typeof nextValue === "undefined" ? -1 : nextValue));

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
    return /*#__PURE__*/_react.default.createElement(SelectWidget, {
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

  return /*#__PURE__*/_react.default.createElement(_row.default, {
    gutter: [Math.floor(rowGutter / 2), Math.floor(rowGutter / 2)]
  }, dateElementProps().map(function (elemProps, i) {
    var elemId = id + "_" + elemProps.type;
    return /*#__PURE__*/_react.default.createElement(_col.default, {
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
  }), !options.hideNowButton && /*#__PURE__*/_react.default.createElement(_col.default, {
    flex: "88px"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    block: true,
    className: "btn-now",
    onClick: handleNow,
    type: "primary"
  }, "Now")), !options.hideClearButton && /*#__PURE__*/_react.default.createElement(_col.default, {
    flex: "88px"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
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
var _default = AltDateWidget;
exports.default = _default;