import _Object$defineProperty from "@babel/runtime-corejs2/core-js/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs2/core-js/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs2/core-js/object/get-own-property-descriptors";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs2/core-js/object/get-own-property-descriptor";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs2/core-js/object/get-own-property-symbols";
import _Object$keys from "@babel/runtime-corejs2/core-js/object/keys";
import _defineProperty from "@babel/runtime-corejs2/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime-corejs2/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import { utils } from '@rjsf/core';
import FixedArrayFieldTemplate from './FixedArrayFieldTemplate';
import NormalArrayFieldTemplate from './NormalArrayFieldTemplate';
var getDefaultRegistry = utils.getDefaultRegistry,
    getUiOptions = utils.getUiOptions,
    getWidget = utils.getWidget,
    isFilesArray = utils.isFilesArray,
    isFixedItems = utils.isFixedItems,
    isMultiSelect = utils.isMultiSelect,
    optionsList = utils.optionsList,
    retrieveSchema = utils.retrieveSchema;

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
        options = _objectWithoutProperties(_getUiOptions, ["widget"]);

    var Widget = getWidget(schema, widget, widgets);
    return /*#__PURE__*/React.createElement(Widget, {
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
        options = _objectWithoutProperties(_getUiOptions$enumOpt, ["widget"]);

    var Widget = getWidget(schema, widget, widgets);
    return /*#__PURE__*/React.createElement(Widget, {
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
    return /*#__PURE__*/React.createElement(UnsupportedField, {
      idSchema: idSchema,
      reason: "Missing items definition",
      schema: schema
    });
  }

  if (isFixedItems(schema)) {
    return /*#__PURE__*/React.createElement(FixedArrayFieldTemplate, {
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

  return /*#__PURE__*/React.createElement(NormalArrayFieldTemplate, {
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

export default ArrayFieldTemplate;