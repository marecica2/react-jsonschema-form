"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _semanticUiReact = require("semantic-ui-react");

function TitleField(_ref) {
  var title = _ref.title,
      options = _ref.options;
  var semantic = options.semantic;

  if (title) {
    return _react.default.createElement(_semanticUiReact.Header, (0, _extends2.default)({}, semantic, {
      as: "h5"
    }), title);
  }
}

TitleField.defaultProps = {
  options: {
    semantic: {
      inverted: false,
      dividing: true
    }
  }
};
TitleField.propTypes = {
  options: _propTypes.default.object
};
var _default = TitleField;
exports.default = _default;