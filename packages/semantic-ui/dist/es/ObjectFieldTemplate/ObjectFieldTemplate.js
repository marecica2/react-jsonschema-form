/* eslint-disable react/prop-types */
import React from "react";

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
  return React.createElement(React.Fragment, null, fieldTitle && React.createElement(TitleField, {
    id: "".concat(idSchema.$id, "-title"),
    title: fieldTitle,
    options: uiSchema["ui:options"],
    required: required
  }), fieldDescription && React.createElement(DescriptionField, {
    id: "".concat(idSchema.$id, "-description"),
    description: fieldDescription
  }), properties.map(function (prop) {
    return prop.content;
  }));
}

export default ObjectFieldTemplate;