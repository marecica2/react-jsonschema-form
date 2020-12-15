import _extends from "@babel/runtime-corejs2/helpers/esm/extends";
import React from "react";
import { Button, Icon } from "semantic-ui-react";

function AddButton(props) {
  return React.createElement(Button, _extends({}, props, {
    icon: true,
    size: "tiny",
    labelPosition: "left"
  }), React.createElement(Icon, {
    name: "plus"
  }), "Add Item");
}

export default AddButton;