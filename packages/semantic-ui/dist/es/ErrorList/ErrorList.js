/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";
import { Message } from "semantic-ui-react";
/**
 *
 * @param errors
 * @returns {*}
 * @constructor
 */

function ErrorList(_ref) {
  var errors = _ref.errors;
  return React.createElement(Message, {
    negative: true
  }, React.createElement(Message.Header, null, "Errors"), React.createElement(Message.List, null, errors.map(function (error, index) {
    return React.createElement(Message.Item, {
      key: "error-".concat(index)
    }, error.stack);
  })));
}

ErrorList.propTypes = {
  errors: PropTypes.array
};
export default ErrorList;