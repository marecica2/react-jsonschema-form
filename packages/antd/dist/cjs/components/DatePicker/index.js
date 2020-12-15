"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _dayjs = _interopRequireDefault(require("rc-picker/lib/generate/dayjs"));

var _generatePicker = _interopRequireDefault(require("antd/lib/date-picker/generatePicker"));

var DatePicker = (0, _generatePicker.default)(_dayjs.default);
var _default = DatePicker;
exports.default = _default;