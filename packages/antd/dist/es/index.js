import _Object$defineProperty from "@babel/runtime-corejs2/core-js/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs2/core-js/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs2/core-js/object/get-own-property-descriptors";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs2/core-js/object/get-own-property-descriptor";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs2/core-js/object/get-own-property-symbols";
import _Object$keys from "@babel/runtime-corejs2/core-js/object/keys";
import _defineProperty from "@babel/runtime-corejs2/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { utils } from '@rjsf/core';
import DescriptionField from './fields/DescriptionField';
import TitleField from './fields/TitleField';
import FieldTemplate from './templates/FieldTemplate';
import ObjectFieldTemplate from './templates/ObjectFieldTemplate';
import ArrayFieldTemplate from './templates/ArrayFieldTemplate';
import AltDateTimeWidget from './widgets/AltDateTimeWidget';
import AltDateWidget from './widgets/AltDateWidget';
import CheckboxesWidget from './widgets/CheckboxesWidget';
import CheckboxWidget from './widgets/CheckboxWidget';
import ColorWidget from './widgets/ColorWidget';
import DateTimeWidget from './widgets/DateTimeWidget';
import DateWidget from './widgets/DateWidget';
import EmailWidget from './widgets/EmailWidget';
import PasswordWidget from './widgets/PasswordWidget';
import RadioWidget from './widgets/RadioWidget';
import RangeWidget from './widgets/RangeWidget';
import SelectWidget from './widgets/SelectWidget';
import TextareaWidget from './widgets/TextareaWidget';
import TextWidget from './widgets/TextWidget';
import UpDownWidget from './widgets/UpDownWidget';
import URLWidget from './widgets/URLWidget';
import ErrorList from './ErrorList'; // import './index.less';

var getDefaultRegistry = utils.getDefaultRegistry;

var _getDefaultRegistry = getDefaultRegistry(),
    fields = _getDefaultRegistry.fields,
    widgets = _getDefaultRegistry.widgets;

export var Fields = {
  DescriptionField: DescriptionField,
  TitleField: TitleField
};
export var Widgets = {
  AltDateTimeWidget: AltDateTimeWidget,
  AltDateWidget: AltDateWidget,
  CheckboxesWidget: CheckboxesWidget,
  CheckboxWidget: CheckboxWidget,
  ColorWidget: ColorWidget,
  DateTimeWidget: DateTimeWidget,
  DateWidget: DateWidget,
  EmailWidget: EmailWidget,
  PasswordWidget: PasswordWidget,
  RadioWidget: RadioWidget,
  RangeWidget: RangeWidget,
  SelectWidget: SelectWidget,
  TextareaWidget: TextareaWidget,
  TextWidget: TextWidget,
  UpDownWidget: UpDownWidget,
  URLWidget: URLWidget
};
export var Theme = {
  ArrayFieldTemplate: ArrayFieldTemplate,
  fields: _objectSpread({}, fields, {}, Fields),
  FieldTemplate: FieldTemplate,
  ObjectFieldTemplate: ObjectFieldTemplate,
  widgets: _objectSpread({}, widgets, {}, Widgets),
  ErrorList: ErrorList
};