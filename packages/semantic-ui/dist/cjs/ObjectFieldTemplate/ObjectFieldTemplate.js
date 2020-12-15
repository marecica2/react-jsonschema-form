"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

/* eslint-disable react/prop-types */
function ObjectFieldTemplate(_ref) {
  var DescriptionField = _ref.DescriptionField,
      description = _ref.description,
      TitleField = _ref.TitleField,
      title = _ref.title,
      properties = _ref.properties,
      required = _ref.required,
      uiSchema = _ref.uiSchema,
      idSchema = _ref.idSchema;
  var fieldTitle = uiSchema["ui:title"] || title;
  var fieldDescription = uiSchema["ui:description"] || description;
  return _react.default.createElement(_react.default.Fragment, null, fieldTitle && _react.default.createElement(TitleField, {
    id: "".concat(idSchema.$id, "-title"),
    title: fieldTitle,
    options: uiSchema["ui:options"],
    required: required
  }), fieldDescription && _react.default.createElement(DescriptionField, {
    id: "".concat(idSchema.$id, "-description"),
    description: fieldDescription
  }), properties.map(function (prop) {
    return prop.content;
  }));
}

var _default = ObjectFieldTemplate;
exports.default = _default;