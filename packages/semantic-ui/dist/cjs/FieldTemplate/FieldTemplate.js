"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _DescriptionField = _interopRequireDefault(require("../DescriptionField"));

var _HelpField = _interopRequireDefault(require("../HelpField"));

var _RawErrors = _interopRequireDefault(require("../RawErrors"));

var _util = require("../util");

/* eslint-disable react/prop-types */
function FieldTemplate(_ref) {
  var id = _ref.id,
      children = _ref.children,
      className = _ref.className,
      classNames = _ref.classNames,
      displayLabel = _ref.displayLabel,
      label = _ref.label,
      _ref$rawErrors = _ref.rawErrors,
      rawErrors = _ref$rawErrors === void 0 ? [] : _ref$rawErrors,
      rawHelp = _ref.rawHelp,
      rawDescription = _ref.rawDescription,
      props = (0, _objectWithoutProperties2.default)(_ref, ["id", "children", "className", "classNames", "displayLabel", "label", "rawErrors", "rawHelp", "rawDescription"]);
  var semanticProps = (0, _util.getSemanticProps)(props);
  var wrapLabel = semanticProps.wrapLabel,
      wrapContent = semanticProps.wrapContent,
      errorOptions = semanticProps.errorOptions;
  return _react.default.createElement(_semanticUiReact.Form.Group, {
    key: id,
    widths: "equal",
    grouped: true
  }, _react.default.createElement(_util.MaybeWrap, {
    wrap: wrapContent,
    className: "sui-field-content"
  }, children, displayLabel && rawDescription && _react.default.createElement(_util.MaybeWrap, {
    wrap: wrapLabel,
    className: "sui-field-label"
  }, rawDescription && _react.default.createElement(_DescriptionField.default, {
    description: rawDescription
  })), _react.default.createElement(_HelpField.default, {
    helpText: rawHelp,
    id: id
  }), _react.default.createElement(_RawErrors.default, {
    errors: rawErrors,
    options: errorOptions
  })));
}

var _default = FieldTemplate;
exports.default = _default;