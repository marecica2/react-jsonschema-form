"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _semanticUiReact = require("semantic-ui-react");

/* eslint-disable react/prop-types */

/**
 * @return {null}
 */
function HelpField(_ref) {
  var helpText = _ref.helpText,
      id = _ref.id;

  if (helpText) {
    return _react.default.createElement(_semanticUiReact.Message, {
      size: "mini",
      info: true,
      id: id,
      content: helpText
    });
  }

  return null;
}

HelpField.propTypes = {
  helpText: _propTypes.default.string,
  id: _propTypes.default.string
};
var _default = HelpField;
exports.default = _default;