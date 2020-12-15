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

var _core = require("@rjsf/core");

var _semanticUiReact = require("semantic-ui-react");

var _ArrayFieldTemplate = _interopRequireDefault(require("../ArrayFieldTemplate"));

var _ErrorList = _interopRequireDefault(require("../ErrorList"));

var _Fields = _interopRequireDefault(require("../Fields"));

var _FieldTemplate = _interopRequireDefault(require("../FieldTemplate"));

var _ObjectFieldTemplate = _interopRequireDefault(require("../ObjectFieldTemplate"));

var _Widgets = _interopRequireDefault(require("../Widgets"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { ownKeys(Object(source)).forEach(function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

var getDefaultRegistry = _core.utils.getDefaultRegistry;

var _getDefaultRegistry = getDefaultRegistry(),
    fields = _getDefaultRegistry.fields,
    widgets = _getDefaultRegistry.widgets;

var Theme = {
  ArrayFieldTemplate: _ArrayFieldTemplate.default,
  ErrorList: _ErrorList.default,
  fields: _objectSpread({}, fields, {}, _Fields.default),
  FieldTemplate: _FieldTemplate.default,
  ObjectFieldTemplate: _ObjectFieldTemplate.default,
  tagName: _semanticUiReact.Form,
  widgets: _objectSpread({}, widgets, {}, _Widgets.default)
};
var _default = Theme;
exports.default = _default;