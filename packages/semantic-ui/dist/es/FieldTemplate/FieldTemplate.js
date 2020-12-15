import _objectWithoutProperties from "@babel/runtime-corejs2/helpers/esm/objectWithoutProperties";

/* eslint-disable react/prop-types */
import React from "react";
import { Form } from "semantic-ui-react";
import DescriptionField from "../DescriptionField";
import HelpField from "../HelpField";
import RawErrors from "../RawErrors";
import { getSemanticProps, MaybeWrap } from "../util";

function FieldTemplate(_ref) {
  var id = _ref.id,
      children = _ref.children,
      className = _ref.className,
      classNames = _ref.classNames,
      displayLabel = _ref.displayLabel,
      label = _ref.label,
      _ref$rawErrors = _ref.rawErrors,
      rawErrors = _ref$rawErrors === void 0 ? [] : _ref$rawErrors,
      rawHelp = _ref.rawHelp,
      rawDescription = _ref.rawDescription,
      props = _objectWithoutProperties(_ref, ["id", "children", "className", "classNames", "displayLabel", "label", "rawErrors", "rawHelp", "rawDescription"]);

  var semanticProps = getSemanticProps(props);
  var wrapLabel = semanticProps.wrapLabel,
      wrapContent = semanticProps.wrapContent,
      errorOptions = semanticProps.errorOptions;
  return React.createElement(Form.Group, {
    key: id,
    widths: "equal",
    grouped: true
  }, React.createElement(MaybeWrap, {
    wrap: wrapContent,
    className: "sui-field-content"
  }, children, displayLabel && rawDescription && React.createElement(MaybeWrap, {
    wrap: wrapLabel,
    className: "sui-field-label"
  }, rawDescription && React.createElement(DescriptionField, {
    description: rawDescription
  })), React.createElement(HelpField, {
    helpText: rawHelp,
    id: id
  }), React.createElement(RawErrors, {
    errors: rawErrors,
    options: errorOptions
  })));
}

export default FieldTemplate;