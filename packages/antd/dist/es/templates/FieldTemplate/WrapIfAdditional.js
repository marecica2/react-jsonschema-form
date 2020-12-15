import React from 'react';
import { utils } from '@rjsf/core';
import Button from 'antd/lib/button';
import Col from 'antd/lib/col';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Row from 'antd/lib/row';
import DeleteOutlined from '@ant-design/icons/DeleteOutlined';
var ADDITIONAL_PROPERTY_FLAG = utils.ADDITIONAL_PROPERTY_FLAG;
var VERTICAL_LABEL_COL = {
  span: 24
};
var VERTICAL_WRAPPER_COL = {
  span: 24
};
var INPUT_STYLE = {
  width: '100%'
};

var WrapIfAdditional = function WrapIfAdditional(_ref) {
  var children = _ref.children,
      classNames = _ref.classNames,
      disabled = _ref.disabled,
      formContext = _ref.formContext,
      id = _ref.id,
      label = _ref.label,
      onDropPropertyClick = _ref.onDropPropertyClick,
      onKeyChange = _ref.onKeyChange,
      readonly = _ref.readonly,
      required = _ref.required,
      schema = _ref.schema;
  var colon = formContext.colon,
      _formContext$labelCol = formContext.labelCol,
      labelCol = _formContext$labelCol === void 0 ? VERTICAL_LABEL_COL : _formContext$labelCol,
      _formContext$readonly = formContext.readonlyAsDisabled,
      readonlyAsDisabled = _formContext$readonly === void 0 ? true : _formContext$readonly,
      _formContext$rowGutte = formContext.rowGutter,
      rowGutter = _formContext$rowGutte === void 0 ? 24 : _formContext$rowGutte,
      _formContext$toolbarA = formContext.toolbarAlign,
      toolbarAlign = _formContext$toolbarA === void 0 ? 'top' : _formContext$toolbarA,
      _formContext$wrapperC = formContext.wrapperCol,
      wrapperCol = _formContext$wrapperC === void 0 ? VERTICAL_WRAPPER_COL : _formContext$wrapperC,
      wrapperStyle = formContext.wrapperStyle;
  var keyLabel = "".concat(label, " Key"); // i18n ?

  var additional = schema.hasOwnProperty(ADDITIONAL_PROPERTY_FLAG);

  if (!additional) {
    return /*#__PURE__*/React.createElement("div", {
      className: classNames
    }, children);
  }

  var handleBlur = function handleBlur(_ref2) {
    var target = _ref2.target;
    return onKeyChange(target.value);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: classNames
  }, /*#__PURE__*/React.createElement(Row, {
    align: toolbarAlign,
    gutter: rowGutter
  }, /*#__PURE__*/React.createElement(Col, {
    className: "form-additional",
    flex: "1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement(Form.Item, {
    colon: colon,
    className: "form-group",
    hasFeedback: true,
    htmlFor: "".concat(id, "-key"),
    label: keyLabel,
    labelCol: labelCol,
    required: required,
    style: wrapperStyle,
    wrapperCol: wrapperCol
  }, /*#__PURE__*/React.createElement(Input, {
    className: "form-control",
    defaultValue: label,
    disabled: disabled || readonlyAsDisabled && readonly,
    id: "".concat(id, "-key"),
    name: "".concat(id, "-key"),
    onBlur: !readonly ? handleBlur : undefined,
    style: INPUT_STYLE,
    type: "text"
  })))), /*#__PURE__*/React.createElement(Col, {
    className: "form-additional",
    flex: "1"
  }, children), /*#__PURE__*/React.createElement(Col, {
    flex: "192px"
  }, /*#__PURE__*/React.createElement(Button, {
    block: true,
    className: "array-item-remove",
    danger: true,
    disabled: disabled || readonly,
    icon: /*#__PURE__*/React.createElement(DeleteOutlined, null),
    onClick: onDropPropertyClick(label),
    type: "primary"
  }))));
};

export default WrapIfAdditional;