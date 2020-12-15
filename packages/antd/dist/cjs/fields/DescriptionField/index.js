"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var DescriptionField = function DescriptionField(_ref) {
  var description = _ref.description,
      id = _ref.id;
  return /*#__PURE__*/_react.default.createElement("span", {
    id: id
  }, description);
};

var _default = DescriptionField;
exports.default = _default;