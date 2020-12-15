import _objectWithoutProperties from "@babel/runtime-corejs2/helpers/esm/objectWithoutProperties";
import _Set from "@babel/runtime-corejs2/core-js/set";
import _toConsumableArray from "@babel/runtime-corejs2/helpers/esm/toConsumableArray";
import _Object$assign from "@babel/runtime-corejs2/core-js/object/assign";
import React from "react";
/**
 * Extract props meant for semantic UI components from props that are
 * passed to Widgets, Templates and Fields.
 * @param {Object} params
 * @param {Object} params.formContext
 * @param {Object} params.uiSchema
 * @param {Object} params.options
 * @returns {any}
 */

export function getSemanticProps(_ref) {
  var _ref$formContext = _ref.formContext,
      formContext = _ref$formContext === void 0 ? {} : _ref$formContext,
      _ref$uiSchema = _ref.uiSchema,
      uiSchema = _ref$uiSchema === void 0 ? {} : _ref$uiSchema,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options;
  return _Object$assign({}, formContext.semantic || {}, uiSchema["ui:options"] ? uiSchema["ui:options"].semantic : {}, options.semantic || {});
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

export function cleanClassNames(classNameArr) {
  var omit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  // Split each arg on whitespace, and add it to an array. Skip false-y args
  // like "" and undefined.
  var classList = classNameArr.filter(Boolean).reduce(function (previous, current) {
    return previous.concat(current.trim().split(/\s+/));
  }, []); // Remove any class names from omit, and make the rest unique before
  // returning them as a string

  return _toConsumableArray(new _Set(classList.filter(function (cn) {
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

export function MaybeWrap(_ref2) {
  var wrap = _ref2.wrap,
      _ref2$component = _ref2.component,
      Component = _ref2$component === void 0 ? "div" : _ref2$component,
      props = _objectWithoutProperties(_ref2, ["wrap", "component"]);

  return wrap ? React.createElement(Component, props) : props.children;
}