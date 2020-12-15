import _extends from "@babel/runtime-corejs2/helpers/esm/extends";
import React from "react";
import PropTypes from "prop-types";
import { Header } from "semantic-ui-react";

function TitleField(_ref) {
  var title = _ref.title,
      options = _ref.options;
  var semantic = options.semantic;

  if (title) {
    return React.createElement(Header, _extends({}, semantic, {
      as: "h5"
    }), title);
  }
}

TitleField.defaultProps = {
  options: {
    semantic: {
      inverted: false,
      dividing: true
    }
  }
};
TitleField.propTypes = {
  options: PropTypes.object
};
export default TitleField;