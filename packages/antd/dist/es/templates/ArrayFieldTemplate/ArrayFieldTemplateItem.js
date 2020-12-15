import React from 'react';
import Button from 'antd/lib/button';
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import ArrowDownOutlined from '@ant-design/icons/ArrowDownOutlined';
import ArrowUpOutlined from '@ant-design/icons/ArrowUpOutlined';
import DeleteOutlined from '@ant-design/icons/DeleteOutlined';
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
  return /*#__PURE__*/React.createElement(Row, {
    align: toolbarAlign,
    key: "array-item-".concat(index),
    gutter: rowGutter
  }, /*#__PURE__*/React.createElement(Col, {
    flex: "1"
  }, children), hasToolbar && /*#__PURE__*/React.createElement(Col, {
    flex: "192px"
  }, /*#__PURE__*/React.createElement(Button.Group, {
    style: BTN_GRP_STYLE
  }, (hasMoveUp || hasMoveDown) && /*#__PURE__*/React.createElement(Button, {
    disabled: disabled || readonly || !hasMoveUp,
    icon: /*#__PURE__*/React.createElement(ArrowUpOutlined, null),
    onClick: onReorderClick(index, index - 1),
    style: BTN_STYLE,
    type: "default"
  }), (hasMoveUp || hasMoveDown) && /*#__PURE__*/React.createElement(Button, {
    disabled: disabled || readonly || !hasMoveDown,
    icon: /*#__PURE__*/React.createElement(ArrowDownOutlined, null),
    onClick: onReorderClick(index, index + 1),
    style: BTN_STYLE,
    type: "default"
  }), hasRemove && /*#__PURE__*/React.createElement(Button, {
    danger: true,
    disabled: disabled || readonly,
    icon: /*#__PURE__*/React.createElement(DeleteOutlined, null),
    onClick: onDropIndexClick(index),
    style: BTN_STYLE,
    type: "primary"
  }))));
};

ArrayFieldTemplateItem.defaultProps = {
  formContext: {}
};
export default ArrayFieldTemplateItem;