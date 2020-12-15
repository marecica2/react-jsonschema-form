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

/* eslint-disable react/no-array-index-key */

/**
 *
 * @param errors
 * @returns {*}
 * @constructor
 */
function ErrorList(_ref) {
  var errors = _ref.errors;
  return _react.default.createElement(_semanticUiReact.Message, {
    negative: true
  }, _react.default.createElement(_semanticUiReact.Message.Header, null, "Errors"), _react.default.createElement(_semanticUiReact.Message.List, null, errors.map(function (error, index) {
    return _react.default.createElement(_semanticUiReact.Message.Item, {
      key: "error-".concat(index)
    }, error.stack);
  })));
}

ErrorList.propTypes = {
  errors: _propTypes.default.array
};
var _default = ErrorList;
exports.default = _default;