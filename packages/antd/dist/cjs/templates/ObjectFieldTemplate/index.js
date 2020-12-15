"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash"));

var _core = require("@rjsf/core");

var _button = _interopRequireDefault(require("antd/lib/button"));

var _col = _interopRequireDefault(require("antd/lib/col"));

var _row = _interopRequireDefault(require("antd/lib/row"));

var _context = require("antd/lib/config-provider/context");

var _PlusCircleOutlined = _interopRequireDefault(require("@ant-design/icons/PlusCircleOutlined"));

var canExpand = _core.utils.canExpand;
var DESCRIPTION_COL_STYLE = {
  paddingBottom: '8px'
};

var ObjectFieldTemplate = function ObjectFieldTemplate(_ref) {
  var DescriptionField = _ref.DescriptionField,
      TitleField = _ref.TitleField,
      description = _ref.description,
      disabled = _ref.disabled,
      formContext = _ref.formContext,
      formData = _ref.formData,
      idSchema = _ref.idSchema,
      onAddClick = _ref.onAddClick,
      prefixCls = _ref.prefixCls,
      properties = _ref.properties,
      readonly = _ref.readonly,
      required = _ref.required,
      schema = _ref.schema,
      title = _ref.title,
      uiSchema = _ref.uiSchema;
  var _formContext$colSpan = formContext.colSpan,
      colSpan = _formContext$colSpan === void 0 ? 24 : _formContext$colSpan,
      _formContext$labelAli = formContext.labelAlign,
      labelAlign = _formContext$labelAli === void 0 ? 'right' : _formContext$labelAli,
      _formContext$rowGutte = formContext.rowGutter,
      rowGutter = _formContext$rowGutte === void 0 ? 24 : _formContext$rowGutte;
  var labelClsBasic = "".concat(prefixCls, "-item-label");
  var labelColClassName = (0, _classnames.default)(labelClsBasic, labelAlign === 'left' && "".concat(labelClsBasic, "-left") // labelCol.className,
  );

  var findSchema = function findSchema(element) {
    return element.content.props.schema;
  };

  var findSchemaType = function findSchemaType(element) {
    return findSchema(element).type;
  };

  var findUiSchema = function findUiSchema(element) {
    return element.content.props.uiSchema;
  };

  var findUiSchemaField = function findUiSchemaField(element) {
    return findUiSchema(element)['ui:field'];
  };

  var findUiSchemaWidget = function findUiSchemaWidget(element) {
    return findUiSchema(element)['ui:widget'];
  };

  var calculateColSpan = function calculateColSpan(element) {
    var type = findSchemaType(element);
    var field = findUiSchemaField(element);
    var widget = findUiSchemaWidget(element);
    var defaultColSpan = properties.length < 2 || // Single or no field in object.
    type === 'object' || type === 'array' || widget === 'textarea' ? 24 : 12;

    if (_lodash.default.isObject(colSpan)) {
      return colSpan[widget] || colSpan[field] || colSpan[type] || defaultColSpan;
    }

    if (_lodash.default.isNumber(colSpan)) {
      return colSpan;
    }

    return defaultColSpan;
  };

  var filterHidden = function filterHidden(element) {
    return element.content.props.uiSchema['ui:widget'] !== 'hidden';
  };

  return /*#__PURE__*/_react.default.createElement("fieldset", {
    id: idSchema.$id
  }, /*#__PURE__*/_react.default.createElement(_row.default, {
    gutter: rowGutter
  }, uiSchema['ui:title'] !== false && (uiSchema['ui:title'] || title) && /*#__PURE__*/_react.default.createElement(_col.default, {
    className: labelColClassName,
    span: 24
  }, /*#__PURE__*/_react.default.createElement(TitleField, {
    id: "".concat(idSchema.$id, "-title"),
    required: required,
    title: uiSchema['ui:title'] || title
  })), uiSchema['ui:description'] !== false && (uiSchema['ui:description'] || description) && /*#__PURE__*/_react.default.createElement(_col.default, {
    span: 24,
    style: DESCRIPTION_COL_STYLE
  }, /*#__PURE__*/_react.default.createElement(DescriptionField, {
    description: uiSchema['ui:description'] || description,
    id: "".concat(idSchema.$id, "-description")
  })), properties.filter(filterHidden).map(function (element) {
    return /*#__PURE__*/_react.default.createElement(_col.default, {
      key: element.name,
      span: calculateColSpan(element)
    }, element.content);
  })), canExpand(schema, uiSchema, formData) && /*#__PURE__*/_react.default.createElement(_col.default, {
    span: 24
  }, /*#__PURE__*/_react.default.createElement(_row.default, {
    gutter: rowGutter,
    justify: "end"
  }, /*#__PURE__*/_react.default.createElement(_col.default, {
    flex: "192px"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    block: true,
    className: "object-property-expand",
    disabled: disabled || readonly,
    onClick: onAddClick(schema),
    type: "primary"
  }, /*#__PURE__*/_react.default.createElement(_PlusCircleOutlined.default, null), " Add Item")))));
};

var _default = (0, _context.withConfigConsumer)({
  prefixCls: 'form'
})(ObjectFieldTemplate);

exports.default = _default;