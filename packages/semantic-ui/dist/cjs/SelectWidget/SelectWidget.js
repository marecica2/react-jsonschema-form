"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _set = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/set"));

var _react = _interopRequireDefault(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var _semanticUiReact = require("semantic-ui-react");

var _core = require("@rjsf/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _util = require("../util");

/* eslint-disable react/prop-types */
var asNumber = _core.utils.asNumber,
    guessType = _core.utils.guessType;
var nums = new _set.default(["number", "integer"]);
/**
 * * Returns and creates an array format required for semantic drop down
 * @param {array} enumOptions- array of items for the dropdown
 * @param {array} enumDisabled - array of enum option values to disable
 * @returns {*}
 */

function createDefaultValueOptionsForDropDown(enumOptions, enumDisabled) {
  var disabledOptions = enumDisabled || [];
  var options = []; // eslint-disable-next-line no-shadow

  options = _lodash.default.map(enumOptions, function (_ref) {
    var label = _ref.label,
        value = _ref.value;
    return {
      disabled: disabledOptions.indexOf(value) !== -1,
      key: label,
      text: label,
      value: value
    };
  });
  return options;
}
/**
 * This is a silly limitation in the DOM where option change event values are
 * always retrieved as strings.
 */


var processValue = function processValue(schema, value) {
  // "enum" is a reserved word, so only "type" and "items" can be destructured
  var type = schema.type,
      items = schema.items;

  if (value === "") {
    return undefined;
  } else if (type === "array" && items && nums.has(items.type)) {
    return value.map(asNumber);
  } else if (type === "boolean") {
    return value === "true" || value === true;
  } else if (type === "number") {
    return asNumber(value);
  } // If type is undefined, but an enum is present, try and infer the type from
  // the enum values


  if (schema.enum) {
    if (schema.enum.every(function (x) {
      return guessType(x) === "number";
    })) {
      return asNumber(value);
    } else if (schema.enum.every(function (x) {
      return guessType(x) === "boolean";
    })) {
      return value === "true";
    }
  }

  return value;
};

function SelectWidget(_ref2) {
  var schema = _ref2.schema,
      id = _ref2.id,
      options = _ref2.options,
      name = _ref2.name,
      required = _ref2.required,
      disabled = _ref2.disabled,
      readonly = _ref2.readonly,
      value = _ref2.value,
      multiple = _ref2.multiple,
      placeholder = _ref2.placeholder,
      autofocus = _ref2.autofocus,
      onChange = _ref2.onChange,
      onBlur = _ref2.onBlur,
      onFocus = _ref2.onFocus;
  var semanticProps = (0, _util.getSemanticProps)({
    options: options
  });
  var enumDisabled = options.enumDisabled,
      enumOptions = options.enumOptions;
  var emptyValue = multiple ? [] : "";
  var dropdownOptions = createDefaultValueOptionsForDropDown(enumOptions, enumDisabled);

  var _onChange = function _onChange(event, // eslint-disable-next-line no-shadow
  _ref3) {
    var value = _ref3.value;
    return onChange && onChange(processValue(schema, value));
  }; // eslint-disable-next-line no-shadow


  var _onBlur = function _onBlur(_ref4) {
    var value = _ref4.target.value;
    return onBlur && onBlur(id, processValue(schema, value));
  };

  var _onFocus = function _onFocus(_ref5) {
    var value = _ref5.target.value;
    return onFocus && onFocus(id, processValue(schema, value));
  };

  return _react.default.createElement(_semanticUiReact.Form.Dropdown, (0, _extends2.default)({
    key: id,
    name: name,
    multiple: typeof multiple === "undefined" ? false : multiple,
    value: typeof value === "undefined" ? emptyValue : value,
    disabled: disabled,
    placeholder: placeholder
  }, semanticProps, {
    required: required,
    autoFocus: autofocus,
    readOnly: readonly,
    options: dropdownOptions,
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }));
}

SelectWidget.defaultProps = {
  options: {
    semantic: {
      inverted: "false",
      fluid: true,
      selection: true,
      scrolling: true,
      upward: false
    }
  }
};
SelectWidget.propTypes = {
  options: _propTypes.default.object
};
var _default = SelectWidget;
exports.default = _default;