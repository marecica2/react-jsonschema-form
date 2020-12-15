"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.Theme = exports.Widgets = exports.Fields = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptors"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/keys"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _core = require("@rjsf/core");

var _DescriptionField = _interopRequireDefault(require("./fields/DescriptionField"));

var _TitleField = _interopRequireDefault(require("./fields/TitleField"));

var _FieldTemplate = _interopRequireDefault(require("./templates/FieldTemplate"));

var _ObjectFieldTemplate = _interopRequireDefault(require("./templates/ObjectFieldTemplate"));

var _ArrayFieldTemplate = _interopRequireDefault(require("./templates/ArrayFieldTemplate"));

var _AltDateTimeWidget = _interopRequireDefault(require("./widgets/AltDateTimeWidget"));

var _AltDateWidget = _interopRequireDefault(require("./widgets/AltDateWidget"));

var _CheckboxesWidget = _interopRequireDefault(require("./widgets/CheckboxesWidget"));

var _CheckboxWidget = _interopRequireDefault(require("./widgets/CheckboxWidget"));

var _ColorWidget = _interopRequireDefault(require("./widgets/ColorWidget"));

var _DateTimeWidget = _interopRequireDefault(require("./widgets/DateTimeWidget"));

var _DateWidget = _interopRequireDefault(require("./widgets/DateWidget"));

var _EmailWidget = _interopRequireDefault(require("./widgets/EmailWidget"));

var _PasswordWidget = _interopRequireDefault(require("./widgets/PasswordWidget"));

var _RadioWidget = _interopRequireDefault(require("./widgets/RadioWidget"));

var _RangeWidget = _interopRequireDefault(require("./widgets/RangeWidget"));

var _SelectWidget = _interopRequireDefault(require("./widgets/SelectWidget"));

var _TextareaWidget = _interopRequireDefault(require("./widgets/TextareaWidget"));

var _TextWidget = _interopRequireDefault(require("./widgets/TextWidget"));

var _UpDownWidget = _interopRequireDefault(require("./widgets/UpDownWidget"));

var _URLWidget = _interopRequireDefault(require("./widgets/URLWidget"));

var _ErrorList = _interopRequireDefault(require("./ErrorList"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { ownKeys(Object(source)).forEach(function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

// import './index.less';
var getDefaultRegistry = _core.utils.getDefaultRegistry;

var _getDefaultRegistry = getDefaultRegistry(),
    fields = _getDefaultRegistry.fields,
    widgets = _getDefaultRegistry.widgets;

var Fields = {
  DescriptionField: _DescriptionField.default,
  TitleField: _TitleField.default
};
exports.Fields = Fields;
var Widgets = {
  AltDateTimeWidget: _AltDateTimeWidget.default,
  AltDateWidget: _AltDateWidget.default,
  CheckboxesWidget: _CheckboxesWidget.default,
  CheckboxWidget: _CheckboxWidget.default,
  ColorWidget: _ColorWidget.default,
  DateTimeWidget: _DateTimeWidget.default,
  DateWidget: _DateWidget.default,
  EmailWidget: _EmailWidget.default,
  PasswordWidget: _PasswordWidget.default,
  RadioWidget: _RadioWidget.default,
  RangeWidget: _RangeWidget.default,
  SelectWidget: _SelectWidget.default,
  TextareaWidget: _TextareaWidget.default,
  TextWidget: _TextWidget.default,
  UpDownWidget: _UpDownWidget.default,
  URLWidget: _URLWidget.default
};
exports.Widgets = Widgets;
var Theme = {
  ArrayFieldTemplate: _ArrayFieldTemplate.default,
  fields: _objectSpread({}, fields, {}, Fields),
  FieldTemplate: _FieldTemplate.default,
  ObjectFieldTemplate: _ObjectFieldTemplate.default,
  widgets: _objectSpread({}, widgets, {}, Widgets),
  ErrorList: _ErrorList.default
};
exports.Theme = Theme;