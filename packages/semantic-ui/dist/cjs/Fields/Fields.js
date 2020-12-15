"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _DescriptionField = _interopRequireDefault(require("../DescriptionField/DescriptionField"));

var _TitleField = _interopRequireDefault(require("../TitleField/TitleField"));

var _default = {
  DescriptionField: _DescriptionField.default,
  TitleField: _TitleField.default
};
exports.default = _default;