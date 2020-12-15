import _Object$defineProperty from "@babel/runtime-corejs2/core-js/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs2/core-js/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs2/core-js/object/get-own-property-descriptors";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs2/core-js/object/get-own-property-descriptor";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs2/core-js/object/get-own-property-symbols";
import _Object$keys from "@babel/runtime-corejs2/core-js/object/keys";
import _defineProperty from "@babel/runtime-corejs2/helpers/esm/defineProperty";
import _extends from "@babel/runtime-corejs2/helpers/esm/extends";

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from "react";
import _AltDateWidget from "../AltDateWidget";

var AltDateTimeWidget = function AltDateTimeWidget(props) {
  var AltDateWidget = props.registry.widgets.AltDateWidget;
  return /*#__PURE__*/React.createElement(AltDateWidget, _extends({
    showTime: true
  }, props));
};

AltDateTimeWidget.defaultProps = _objectSpread({}, _AltDateWidget.defaultProps, {
  showTime: true
});
export default AltDateTimeWidget;