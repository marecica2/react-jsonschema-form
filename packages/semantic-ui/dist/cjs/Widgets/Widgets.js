"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _CheckboxWidget = _interopRequireDefault(require("../CheckboxWidget/CheckboxWidget"));

var _CheckboxesWidget = _interopRequireDefault(require("../CheckboxesWidget/CheckboxesWidget"));

var _PasswordWidget = _interopRequireDefault(require("../PasswordWidget/PasswordWidget"));

var _RadioWidget = _interopRequireDefault(require("../RadioWidget/RadioWidget"));

var _RangeWidget = _interopRequireDefault(require("../RangeWidget/RangeWidget"));

var _SelectWidget = _interopRequireDefault(require("../SelectWidget/SelectWidget"));

var _TextareaWidget = _interopRequireDefault(require("../TextareaWidget/TextareaWidget"));

var _TextWidget = _interopRequireDefault(require("../TextWidget/TextWidget"));

var _UpDownWidget = _interopRequireDefault(require("../UpDownWidget/UpDownWidget"));

var _default = {
  CheckboxWidget: _CheckboxWidget.default,
  CheckboxesWidget: _CheckboxesWidget.default,
  PasswordWidget: _PasswordWidget.default,
  RadioWidget: _RadioWidget.default,
  RangeWidget: _RangeWidget.default,
  SelectWidget: _SelectWidget.default,
  TextareaWidget: _TextareaWidget.default,
  TextWidget: _TextWidget.default,
  UpDownWidget: _UpDownWidget.default
};
exports.default = _default;