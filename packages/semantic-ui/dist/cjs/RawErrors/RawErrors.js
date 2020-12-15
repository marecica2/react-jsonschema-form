"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _shortid = _interopRequireDefault(require("shortid"));

var _semanticUiReact = require("semantic-ui-react");

/* eslint-disable react/no-array-index-key */

/**
 *
 * @param errors
 * @param displayError
 * @returns {*}
 * @constructor
 * @return {null}
 */
function RawErrors(_ref) {
  var errors = _ref.errors,
      options = _ref.options;
  var pointing = options.pointing,
      size = options.size;

  if (errors && errors.length > 0) {
    return _react.default.createElement(_semanticUiReact.Label, {
      color: "red",
      pointing: pointing || "above",
      size: size || "small",
      basic: true
    }, _react.default.createElement(_semanticUiReact.List, {
      bulleted: true
    }, errors.map(function (error) {
      return _react.default.createElement(_semanticUiReact.List.Item, {
        key: _shortid.default.generate(),
        content: error
      });
    })));
  }

  return null;
}

RawErrors.defaultProps = {
  options: {
    pointing: "above",
    size: "small"
  }
};
RawErrors.propTypes = {
  options: _propTypes.default.object,
  errors: _propTypes.default.array
};
var _default = RawErrors;
exports.default = _default;