"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _semanticUiReact = require("semantic-ui-react");

function IconButton(props) {
  var icon = props.icon,
      className = props.className,
      otherProps = (0, _objectWithoutProperties2.default)(props, ["icon", "className"]);
  return _react.default.createElement(_semanticUiReact.Button, (0, _extends2.default)({
    icon: icon,
    className: className
  }, otherProps));
}

IconButton.propTypes = {
  icon: _propTypes.default.string.isRequired,
  className: _propTypes.default.string
};
var _default = IconButton;
exports.default = _default;