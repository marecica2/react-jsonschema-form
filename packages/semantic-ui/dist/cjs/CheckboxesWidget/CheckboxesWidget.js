"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _util = require("../util");

var _TitleField = _interopRequireDefault(require("../TitleField"));

/* eslint-disable react/prop-types,react/no-array-index-key */
function selectValue(value, selected, all) {
  var at = all.indexOf(value);
  var updated = selected.slice(0, at).concat(value, selected.slice(at)); // As inserting values at predefined index positions doesn't work with empty
  // arrays, we need to reorder the updated selection to match the initial order

  return updated.sort(function (a, b) {
    return all.indexOf(a) > all.indexOf(b);
  });
}

function deselectValue(value, selected) {
  return selected.filter(function (v) {
    return v !== value;
  });
}

function CheckboxesWidget(_ref) {
  var id = _ref.id,
      disabled = _ref.disabled,
      options = _ref.options,
      value = _ref.value,
      autofocus = _ref.autofocus,
      readonly = _ref.readonly,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      formContext = _ref.formContext,
      schema = _ref.schema;
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled,
      inline = options.inline;
  var title = schema.title;
  var semanticProps = (0, _util.getSemanticProps)({
    formContext: formContext,
    options: options
  });

  var _onChange = function _onChange(option) {
    return function (_ref2) {
      var checked = _ref2.target.checked;
      // eslint-disable-next-line no-shadow
      var all = enumOptions.map(function (_ref3) {
        var value = _ref3.value;
        return value;
      });

      if (checked) {
        onChange(selectValue(option.value, value, all));
      } else {
        onChange(deselectValue(option.value, value));
      }
    };
  };

  var _onBlur = function _onBlur() {
    return onBlur && onBlur(id, value);
  };

  var _onFocus = function _onFocus() {
    return onFocus && onFocus(id, value);
  };

  var inlineOption = inline ? {
    inline: true
  } : {
    grouped: true
  };
  return _react.default.createElement(_react.default.Fragment, null, title && _react.default.createElement(_TitleField.default, {
    title: title
  }), _react.default.createElement(_semanticUiReact.Form.Group, inlineOption, enumOptions.map(function (option, index) {
    var checked = value.indexOf(option.value) !== -1;
    var itemDisabled = enumDisabled && enumDisabled.indexOf(option.value) !== -1;
    return _react.default.createElement(_semanticUiReact.Form.Checkbox, (0, _extends2.default)({
      id: "".concat(id, "_").concat(index),
      key: "".concat(id, "_").concat(index),
      label: option.label
    }, semanticProps, {
      checked: checked,
      disabled: disabled || itemDisabled || readonly,
      autoFocus: autofocus && index === 0,
      onChange: _onChange(option),
      onBlur: _onBlur,
      onFocus: _onFocus
    }));
  })));
}

CheckboxesWidget.defaultProps = {
  options: {
    semantic: {
      inverted: false
    }
  }
};
var _default = CheckboxesWidget;
exports.default = _default;