/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import { Label, List } from "semantic-ui-react";
/**
 *
 * @param errors
 * @param displayError
 * @returns {*}
 * @constructor
 * @return {null}
 */

function RawErrors(_ref) {
  var errors = _ref.errors,
      options = _ref.options;
  var pointing = options.pointing,
      size = options.size;

  if (errors && errors.length > 0) {
    return React.createElement(Label, {
      color: "red",
      pointing: pointing || "above",
      size: size || "small",
      basic: true
    }, React.createElement(List, {
      bulleted: true
    }, errors.map(function (error) {
      return React.createElement(List.Item, {
        key: shortid.generate(),
        content: error
      });
    })));
  }

  return null;
}

RawErrors.defaultProps = {
  options: {
    pointing: "above",
    size: "small"
  }
};
RawErrors.propTypes = {
  options: PropTypes.object,
  errors: PropTypes.array
};
export default RawErrors;