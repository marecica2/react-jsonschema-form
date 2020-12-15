"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _button = _interopRequireDefault(require("antd/lib/button"));

var _col = _interopRequireDefault(require("antd/lib/col"));

var _row = _interopRequireDefault(require("antd/lib/row"));

var _context = require("antd/lib/config-provider/context");

var _PlusCircleOutlined = _interopRequireDefault(require("@ant-design/icons/PlusCircleOutlined"));

var _ArrayFieldTemplateItem = _interopRequireDefault(require("./ArrayFieldTemplateItem"));

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
  var labelColClassName = (0, _classnames.default)(labelClsBasic, labelAlign === 'left' && "".concat(labelClsBasic, "-left") // labelCol.className,
  );
  return /*#__PURE__*/_react.default.createElement("fieldset", {
    className: className,
    id: idSchema.$id
  }, /*#__PURE__*/_react.default.createElement(_row.default, {
    gutter: rowGutter
  }, title && /*#__PURE__*/_react.default.createElement(_col.default, {
    className: labelColClassName,
    span: 24
  }, /*#__PURE__*/_react.default.createElement(TitleField, {
    id: "".concat(idSchema.$id, "__title"),
    key: "array-field-title-".concat(idSchema.$id),
    required: required,
    title: uiSchema['ui:title'] || title
  })), (uiSchema['ui:description'] || schema.description) && /*#__PURE__*/_react.default.createElement(_col.default, {
    span: 24,
    style: DESCRIPTION_COL_STYLE
  }, /*#__PURE__*/_react.default.createElement(DescriptionField, {
    description: uiSchema['ui:description'] || schema.description,
    id: "".concat(idSchema.$id, "__description"),
    key: "array-field-description-".concat(idSchema.$id)
  })), /*#__PURE__*/_react.default.createElement(_col.default, {
    className: "row array-item-list",
    span: 24
  }, items && items.map(function (itemProps) {
    return /*#__PURE__*/_react.default.createElement(_ArrayFieldTemplateItem.default, (0, _extends2.default)({}, itemProps, {
      formContext: formContext
    }));
  })), canAdd && /*#__PURE__*/_react.default.createElement(_col.default, {
    span: 24
  }, /*#__PURE__*/_react.default.createElement(_row.default, {
    gutter: rowGutter,
    justify: "end"
  }, /*#__PURE__*/_react.default.createElement(_col.default, {
    flex: "192px"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    block: true,
    className: "array-item-add",
    disabled: disabled || readonly,
    onClick: onAddClick,
    type: "primary"
  }, /*#__PURE__*/_react.default.createElement(_PlusCircleOutlined.default, null), " Add Item"))))));
};

var _default = (0, _context.withConfigConsumer)({
  prefixCls: 'form'
})(NormalArrayFieldTemplate);

exports.default = _default;