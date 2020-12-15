"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _button = _interopRequireDefault(require("antd/lib/button"));

var _col = _interopRequireDefault(require("antd/lib/col"));

var _row = _interopRequireDefault(require("antd/lib/row"));

var _ArrowDownOutlined = _interopRequireDefault(require("@ant-design/icons/ArrowDownOutlined"));

var _ArrowUpOutlined = _interopRequireDefault(require("@ant-design/icons/ArrowUpOutlined"));

var _DeleteOutlined = _interopRequireDefault(require("@ant-design/icons/DeleteOutlined"));

var BTN_GRP_STYLE = {
  width: '100%'
};
var BTN_STYLE = {
  width: 'calc(100% / 3)'
};

var ArrayFieldTemplateItem = function ArrayFieldTemplateItem(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      formContext = _ref.formContext,
      hasMoveDown = _ref.hasMoveDown,
      hasMoveUp = _ref.hasMoveUp,
      hasRemove = _ref.hasRemove,
      hasToolbar = _ref.hasToolbar,
      index = _ref.index,
      onDropIndexClick = _ref.onDropIndexClick,
      onReorderClick = _ref.onReorderClick,
      readonly = _ref.readonly;
  var _formContext$rowGutte = formContext.rowGutter,
      rowGutter = _formContext$rowGutte === void 0 ? 24 : _formContext$rowGutte,
      _formContext$toolbarA = formContext.toolbarAlign,
      toolbarAlign = _formContext$toolbarA === void 0 ? 'top' : _formContext$toolbarA;
  return /*#__PURE__*/_react.default.createElement(_row.default, {
    align: toolbarAlign,
    key: "array-item-".concat(index),
    gutter: rowGutter
  }, /*#__PURE__*/_react.default.createElement(_col.default, {
    flex: "1"
  }, children), hasToolbar && /*#__PURE__*/_react.default.createElement(_col.default, {
    flex: "192px"
  }, /*#__PURE__*/_react.default.createElement(_button.default.Group, {
    style: BTN_GRP_STYLE
  }, (hasMoveUp || hasMoveDown) && /*#__PURE__*/_react.default.createElement(_button.default, {
    disabled: disabled || readonly || !hasMoveUp,
    icon: /*#__PURE__*/_react.default.createElement(_ArrowUpOutlined.default, null),
    onClick: onReorderClick(index, index - 1),
    style: BTN_STYLE,
    type: "default"
  }), (hasMoveUp || hasMoveDown) && /*#__PURE__*/_react.default.createElement(_button.default, {
    disabled: disabled || readonly || !hasMoveDown,
    icon: /*#__PURE__*/_react.default.createElement(_ArrowDownOutlined.default, null),
    onClick: onReorderClick(index, index + 1),
    style: BTN_STYLE,
    type: "default"
  }), hasRemove && /*#__PURE__*/_react.default.createElement(_button.default, {
    danger: true,
    disabled: disabled || readonly,
    icon: /*#__PURE__*/_react.default.createElement(_DeleteOutlined.default, null),
    onClick: onDropIndexClick(index),
    style: BTN_STYLE,
    type: "primary"
  }))));
};

ArrayFieldTemplateItem.defaultProps = {
  formContext: {}
};
var _default = ArrayFieldTemplateItem;
exports.default = _default;