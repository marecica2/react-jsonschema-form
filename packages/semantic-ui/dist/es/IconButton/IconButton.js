import _extends from "@babel/runtime-corejs2/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime-corejs2/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

function IconButton(props) {
  var icon = props.icon,
      className = props.className,
      otherProps = _objectWithoutProperties(props, ["icon", "className"]);

  return React.createElement(Button, _extends({
    icon: icon,
    className: className
  }, otherProps));
}

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string
};
export default IconButton;