/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { Message } from "semantic-ui-react";
/**
 * @return {null}
 */

function HelpField(_ref) {
  var helpText = _ref.helpText,
      id = _ref.id;

  if (helpText) {
    return React.createElement(Message, {
      size: "mini",
      info: true,
      id: id,
      content: helpText
    });
  }

  return null;
}

HelpField.propTypes = {
  helpText: PropTypes.string,
  id: PropTypes.string
};
export default HelpField;