"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.getSemanticProps = getSemanticProps;
exports.cleanClassNames = cleanClassNames;
exports.MaybeWrap = MaybeWrap;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectWithoutProperties"));

var _set = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/set"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/toConsumableArray"));

var _assign = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/assign"));

var _react = _interopRequireDefault(require("react"));

/**
 * Extract props meant for semantic UI components from props that are
 * passed to Widgets, Templates and Fields.
 * @param {Object} params
 * @param {Object} params.formContext
 * @param {Object} params.uiSchema
 * @param {Object} params.options
 * @returns {any}
 */
function getSemanticProps(_ref) {
  var _ref$formContext = _ref.formContext,
      formContext = _ref$formContext === void 0 ? {} : _ref$formContext,
      _ref$uiSchema = _ref.uiSchema,
      uiSchema = _ref$uiSchema === void 0 ? {} : _ref$uiSchema,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options;
  return (0, _assign.default)({}, formContext.semantic || {}, uiSchema["ui:options"] ? uiSchema["ui:options"].semantic : {}, options.semantic || {});
}
/**
 * Combine multiple strings containing class names into a single string,
 * removing duplicates. E.g.
 * cleanClassNames('bar', 'baz bar', 'x y ', undefined)
 * // 'bar baz x y'
 * @param {Array} classNameArr
 * @param {Array} omit
 * @returns {string}
 */


function cleanClassNames(classNameArr) {
  var omit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  // Split each arg on whitespace, and add it to an array. Skip false-y args
  // like "" and undefined.
  var classList = classNameArr.filter(Boolean).reduce(function (previous, current) {
    return previous.concat(current.trim().split(/\s+/));
  }, []); // Remove any class names from omit, and make the rest unique before
  // returning them as a string

  return (0, _toConsumableArray2.default)(new _set.default(classList.filter(function (cn) {
    return !omit.includes(cn);
  }))).join(" ");
}
/**
 *
 * @param wrap
 * @param Component
 * @param props
 * @returns {*}
 * @constructor
 */


function MaybeWrap(_ref2) {
  var wrap = _ref2.wrap,
      _ref2$component = _ref2.component,
      Component = _ref2$component === void 0 ? "div" : _ref2$component,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["wrap", "component"]);
  return wrap ? _react.default.createElement(Component, props) : props.children;
}