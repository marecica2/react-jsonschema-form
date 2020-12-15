/* eslint-disable react/prop-types */
import React from "react";

function DescriptionField(_ref) {
  var className = _ref.className,
      description = _ref.description;

  if (description) {
    return React.createElement("p", {
      className: className || "sui-description"
    }, description);
  }
}

export default DescriptionField;