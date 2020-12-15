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

function AddButton(props) {
  return _react.default.createElement(_semanticUiReact.Button, (0, _extends2.default)({}, props, {
    icon: true,
    size: "tiny",
    labelPosition: "left"
  }), _react.default.createElement(_semanticUiReact.Icon, {
    name: "plus"
  }), "Add Item");
}

var _default = AddButton;
exports.default = _default;