"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptors"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/keys"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@rjsf/core");

var _FixedArrayFieldTemplate = _interopRequireDefault(require("./FixedArrayFieldTemplate"));

var _NormalArrayFieldTemplate = _interopRequireDefault(require("./NormalArrayFieldTemplate"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { ownKeys(Object(source)).forEach(function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

var getDefaultRegistry = _core.utils.getDefaultRegistry,
    getUiOptions = _core.utils.getUiOptions,
    getWidget = _core.utils.getWidget,
    isFilesArray = _core.utils.isFilesArray,
    isFixedItems = _core.utils.isFixedItems,
    isMultiSelect = _core.utils.isMultiSelect,
    optionsList = _core.utils.optionsList,
    retrieveSchema = _core.utils.retrieveSchema;

var ArrayFieldTemplate = function ArrayFieldTemplate(_ref) {
  var DescriptionField = _ref.DescriptionField,
      TitleField = _ref.TitleField,
      autofocus = _ref.autofocus,
      canAdd = _ref.canAdd,
      className = _ref.className,
      disabled = _ref.disabled,
      formContext = _ref.formContext,
      formData = _ref.formData,
      idSchema = _ref.idSchema,
      items = _ref.items,
      label = _ref.label,
      name = _ref.name,
      onAddClick = _ref.onAddClick,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      placeholder = _ref.placeholder,
      rawErrors = _ref.rawErrors,
      readonly = _ref.readonly,
      _ref$registry = _ref.registry,
      registry = _ref$registry === void 0 ? getDefaultRegistry() : _ref$registry,
      required = _ref.required,
      schema = _ref.schema,
      title = _ref.title,
      uiSchema = _ref.uiSchema;
  var fields = registry.fields,
      rootSchema = registry.rootSchema,
      widgets = registry.widgets;
  var UnsupportedField = fields.UnsupportedField;

  var renderFiles = function renderFiles() {
    var _getUiOptions = getUiOptions(uiSchema),
        _getUiOptions$widget = _getUiOptions.widget,
        widget = _getUiOptions$widget === void 0 ? 'files' : _getUiOptions$widget,
        options = (0, _objectWithoutProperties2.default)(_getUiOptions, ["widget"]);

    var Widget = getWidget(schema, widget, widgets);
    return /*#__PURE__*/_react.default.createElement(Widget, {
      autofocus: autofocus,
      disabled: disabled,
      formContext: formContext,
      id: idSchema && idSchema.$id,
      multiple: true,
      onBlur: onBlur,
      onChange: onChange,
      onFocus: onFocus,
      options: options,
      rawErrors: rawErrors,
      readonly: readonly,
      schema: schema,
      title: schema.title || name // Why not props.title?
      ,
      value: formData
    });
  };

  var renderMultiSelect = function renderMultiSelect() {
    var itemsSchema = retrieveSchema(schema.items, rootSchema, formData);
    var enumOptions = optionsList(itemsSchema);

    var _getUiOptions$enumOpt = _objectSpread({}, getUiOptions(uiSchema), {
      enumOptions: enumOptions
    }),
        _getUiOptions$enumOpt2 = _getUiOptions$enumOpt.widget,
        widget = _getUiOptions$enumOpt2 === void 0 ? 'select' : _getUiOptions$enumOpt2,
        options = (0, _objectWithoutProperties2.default)(_getUiOptions$enumOpt, ["widget"]);

    var Widget = getWidget(schema, widget, widgets);
    return /*#__PURE__*/_react.default.createElement(Widget, {
      autofocus: autofocus,
      disabled: disabled,
      formContext: formContext,
      id: idSchema && idSchema.$id,
      label: label,
      multiple: true,
      onBlur: onBlur,
      onChange: onChange,
      onFocus: onFocus,
      options: options,
      placeholder: placeholder,
      rawErrors: rawErrors,
      readonly: readonly,
      registry: registry,
      required: required,
      schema: schema,
      value: formData
    });
  };

  if (!Object.prototype.hasOwnProperty.call(schema, 'items')) {
    return /*#__PURE__*/_react.default.createElement(UnsupportedField, {
      idSchema: idSchema,
      reason: "Missing items definition",
      schema: schema
    });
  }

  if (isFixedItems(schema)) {
    return /*#__PURE__*/_react.default.createElement(_FixedArrayFieldTemplate.default, {
      canAdd: canAdd,
      className: className,
      DescriptionField: DescriptionField,
      disabled: disabled,
      formContext: formContext,
      formData: formData,
      idSchema: idSchema,
      items: items,
      onAddClick: onAddClick,
      readonly: readonly,
      registry: registry,
      required: required,
      schema: schema,
      title: title,
      TitleField: TitleField,
      uiSchema: uiSchema
    });
  }

  if (isFilesArray(schema, uiSchema, rootSchema)) {
    return renderFiles();
  }

  if (isMultiSelect(schema, rootSchema)) {
    return renderMultiSelect();
  }

  return /*#__PURE__*/_react.default.createElement(_NormalArrayFieldTemplate.default, {
    canAdd: canAdd,
    className: className,
    DescriptionField: DescriptionField,
    disabled: disabled,
    formContext: formContext,
    formData: formData,
    idSchema: idSchema,
    items: items,
    onAddClick: onAddClick,
    readonly: readonly,
    registry: registry,
    required: required,
    schema: schema,
    title: title,
    TitleField: TitleField,
    uiSchema: uiSchema
  });
};

var _default = ArrayFieldTemplate;
exports.default = _default;