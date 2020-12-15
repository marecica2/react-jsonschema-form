import _extends from "@babel/runtime-corejs2/helpers/esm/extends";
import React from 'react';
import classNames from 'classnames';
import Button from 'antd/lib/button';
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import { withConfigConsumer } from 'antd/lib/config-provider/context';
import PlusCircleOutlined from '@ant-design/icons/PlusCircleOutlined';
import ArrayFieldTemplateItem from './ArrayFieldTemplateItem';
var DESCRIPTION_COL_STYLE = {
  paddingBottom: '8px'
};

var NormalArrayFieldTemplate = function NormalArrayFieldTemplate(_ref) {
  var canAdd = _ref.canAdd,
      className = _ref.className,
      DescriptionField = _ref.DescriptionField,
      disabled = _ref.disabled,
      formContext = _ref.formContext,
      idSchema = _ref.idSchema,
      items = _ref.items,
      onAddClick = _ref.onAddClick,
      prefixCls = _ref.prefixCls,
      readonly = _ref.readonly,
      required = _ref.required,
      schema = _ref.schema,
      title = _ref.title,
      TitleField = _ref.TitleField,
      uiSchema = _ref.uiSchema;
  var _formContext$labelAli = formContext.labelAlign,
      labelAlign = _formContext$labelAli === void 0 ? 'right' : _formContext$labelAli,
      _formContext$rowGutte = formContext.rowGutter,
      rowGutter = _formContext$rowGutte === void 0 ? 24 : _formContext$rowGutte;
  var labelClsBasic = "".concat(prefixCls, "-item-label");
  var labelColClassName = classNames(labelClsBasic, labelAlign === 'left' && "".concat(labelClsBasic, "-left") // labelCol.className,
  );
  return /*#__PURE__*/React.createElement("fieldset", {
    className: className,
    id: idSchema.$id
  }, /*#__PURE__*/React.createElement(Row, {
    gutter: rowGutter
  }, title && /*#__PURE__*/React.createElement(Col, {
    className: labelColClassName,
    span: 24
  }, /*#__PURE__*/React.createElement(TitleField, {
    id: "".concat(idSchema.$id, "__title"),
    key: "array-field-title-".concat(idSchema.$id),
    required: required,
    title: uiSchema['ui:title'] || title
  })), (uiSchema['ui:description'] || schema.description) && /*#__PURE__*/React.createElement(Col, {
    span: 24,
    style: DESCRIPTION_COL_STYLE
  }, /*#__PURE__*/React.createElement(DescriptionField, {
    description: uiSchema['ui:description'] || schema.description,
    id: "".concat(idSchema.$id, "__description"),
    key: "array-field-description-".concat(idSchema.$id)
  })), /*#__PURE__*/React.createElement(Col, {
    className: "row array-item-list",
    span: 24
  }, items && items.map(function (itemProps) {
    return /*#__PURE__*/React.createElement(ArrayFieldTemplateItem, _extends({}, itemProps, {
      formContext: formContext
    }));
  })), canAdd && /*#__PURE__*/React.createElement(Col, {
    span: 24
  }, /*#__PURE__*/React.createElement(Row, {
    gutter: rowGutter,
    justify: "end"
  }, /*#__PURE__*/React.createElement(Col, {
    flex: "192px"
  }, /*#__PURE__*/React.createElement(Button, {
    block: true,
    className: "array-item-add",
    disabled: disabled || readonly,
    onClick: onAddClick,
    type: "primary"
  }, /*#__PURE__*/React.createElement(PlusCircleOutlined, null), " Add Item"))))));
};

export default withConfigConsumer({
  prefixCls: 'form'
})(NormalArrayFieldTemplate);