"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

/* eslint-disable react/prop-types */
function DescriptionField(_ref) {
  var className = _ref.className,
      description = _ref.description;

  if (description) {
    return _react.default.createElement("p", {
      className: className || "sui-description"
    }, description);
  }
}

var _default = DescriptionField;
exports.default = _default;