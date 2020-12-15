"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _alert = _interopRequireDefault(require("antd/lib/alert"));

var _list = _interopRequireDefault(require("antd/lib/list"));

var _space = _interopRequireDefault(require("antd/lib/space"));

var _ExclamationCircleOutlined = _interopRequireDefault(require("@ant-design/icons/ExclamationCircleOutlined"));

var ErrorList = function ErrorList(_ref) {
  var errors = _ref.errors;

  var renderErrors = function renderErrors() {
    return /*#__PURE__*/_react.default.createElement(_list.default, {
      className: "list-group",
      size: "small"
    }, errors.map(function (error, index) {
      return /*#__PURE__*/_react.default.createElement(_list.default.Item, {
        key: index
      }, /*#__PURE__*/_react.default.createElement(_space.default, null, /*#__PURE__*/_react.default.createElement(_ExclamationCircleOutlined.default, null), error.stack));
    }));
  };

  return /*#__PURE__*/_react.default.createElement(_alert.default, {
    className: "panel panel-danger errors",
    description: renderErrors(),
    message: "Errors",
    type: "error"
  });
};

var _default = ErrorList;
exports.default = _default;