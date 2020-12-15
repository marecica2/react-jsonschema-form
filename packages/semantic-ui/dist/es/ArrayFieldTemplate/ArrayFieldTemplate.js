import _Object$defineProperty from "@babel/runtime-corejs2/core-js/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs2/core-js/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs2/core-js/object/get-own-property-descriptors";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs2/core-js/object/get-own-property-descriptor";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs2/core-js/object/get-own-property-symbols";
import _Object$keys from "@babel/runtime-corejs2/core-js/object/keys";
import _extends from "@babel/runtime-corejs2/helpers/esm/extends";
import _defineProperty from "@babel/runtime-corejs2/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable react/prop-types,react/destructuring-assignment */
import React from "react";
import PropTypes from "prop-types";
import { Button, Grid, Segment } from "semantic-ui-react";
import { utils } from '@rjsf/core';
import AddButton from "../AddButton";
import { cleanClassNames, getSemanticProps, MaybeWrap } from "../util";
var isFixedItems = utils.isFixedItems;

var ArrayFieldTitle = function ArrayFieldTitle(_ref) {
  var TitleField = _ref.TitleField,
      idSchema = _ref.idSchema,
      uiSchema = _ref.uiSchema,
      title = _ref.title;

  if (!title) {
    return null;
  }

  var id = "".concat(idSchema.$id, "__title");
  return React.createElement(TitleField, {
    id: id,
    title: title,
    options: uiSchema["ui:options"]
  });
};

function ArrayFieldDescription(_ref2) {
  var DescriptionField = _ref2.DescriptionField,
      idSchema = _ref2.idSchema,
      description = _ref2.description;

  if (!description) {
    // See #312: Ensure compatibility with old versions of React.
    return null;
  }

  var id = "".concat(idSchema.$id, "__description");
  return React.createElement(DescriptionField, {
    id: id,
    description: description
  });
}

var gridStyle = function gridStyle(vertical) {
  return {
    display: "grid",
    gridTemplateColumns: "1fr ".concat(vertical ? 65 : 110, "px")
  };
}; // checks if its the first array item


function isInitialArrayItem(props) {
  // no underscore because im not sure if we want to import a library here
  var idSchema = props.children.props.idSchema;
  return idSchema.target && idSchema.conditions;
} // Used in the two templates


function DefaultArrayItem(props) {
  return React.createElement("div", {
    className: "array-item",
    key: props.key
  }, React.createElement(MaybeWrap, {
    wrap: props.wrapItem,
    component: Segment
  }, React.createElement(Grid, {
    style: !isInitialArrayItem(props) ? _objectSpread({}, gridStyle(!props.horizontalButtons), {
      alignItems: "center"
    }) : gridStyle(!props.horizontalButtons)
  }, React.createElement(Grid.Column, {
    width: 16,
    verticalAlign: "middle"
  }, props.children), props.hasToolbar && React.createElement(Grid.Column, null, (props.hasMoveUp || props.hasMoveDown || props.hasRemove) && React.createElement(Button.Group, {
    size: "mini",
    vertical: !props.horizontalButtons
  }, (props.hasMoveUp || props.hasMoveDown) && React.createElement(Button, {
    icon: "angle up",
    className: "array-item-move-up",
    tabIndex: "-1",
    disabled: props.disabled || props.readOnly || !props.hasMoveUp,
    onClick: props.onReorderClick(props.index, props.index - 1)
  }), (props.hasMoveUp || props.hasMoveDown) && React.createElement(Button, {
    icon: "angle down",
    className: "array-item-move-down",
    tabIndex: "-1",
    disabled: props.disabled || props.readOnly || !props.hasMoveDown,
    onClick: props.onReorderClick(props.index, props.index + 1)
  }), props.hasRemove && React.createElement(Button, {
    icon: "trash",
    className: "array-item-remove",
    tabIndex: "-1",
    disabled: props.disabled || props.readOnly,
    onClick: props.onDropIndexClick(props.index)
  }))))));
} // Used for arrays that are represented as multiple selection fields
// (displayed as a multi select or checkboxes)


function DefaultFixedArrayFieldTemplate(_ref3) {
  var uiSchema = _ref3.uiSchema,
      idSchema = _ref3.idSchema,
      canAdd = _ref3.canAdd,
      className = _ref3.className,
      classNames = _ref3.classNames,
      disabled = _ref3.disabled,
      items = _ref3.items,
      onAddClick = _ref3.onAddClick,
      readOnly = _ref3.readOnly,
      required = _ref3.required,
      schema = _ref3.schema,
      title = _ref3.title,
      TitleField = _ref3.TitleField,
      itemProps = _ref3.itemProps;
  var fieldTitle = uiSchema["ui:title"] || title;
  var fieldDescription = uiSchema["ui:description"] || schema.description;
  return React.createElement("div", {
    className: cleanClassNames([className, classNames])
  }, React.createElement(ArrayFieldTitle, {
    key: "array-field-title-".concat(idSchema.$id),
    TitleField: TitleField,
    idSchema: idSchema,
    uiSchema: uiSchema,
    title: fieldTitle,
    required: required
  }), fieldDescription && React.createElement("div", {
    className: "field-description",
    key: "field-description-".concat(idSchema.$id)
  }, fieldDescription), React.createElement("div", {
    key: "array-item-list-".concat(idSchema.$id)
  }, React.createElement("div", {
    className: "row array-item-list"
  }, items && items.map(function (p) {
    return DefaultArrayItem(_objectSpread({}, p, {}, itemProps));
  })), canAdd && React.createElement("div", {
    style: {
      marginTop: "1rem",
      position: "relative",
      textAlign: "right"
    }
  }, React.createElement(AddButton, {
    onClick: onAddClick,
    disabled: disabled || readOnly
  }))));
}

function DefaultNormalArrayFieldTemplate(_ref4) {
  var uiSchema = _ref4.uiSchema,
      idSchema = _ref4.idSchema,
      canAdd = _ref4.canAdd,
      className = _ref4.className,
      classNames = _ref4.classNames,
      disabled = _ref4.disabled,
      DescriptionField = _ref4.DescriptionField,
      items = _ref4.items,
      onAddClick = _ref4.onAddClick,
      readOnly = _ref4.readOnly,
      required = _ref4.required,
      schema = _ref4.schema,
      title = _ref4.title,
      TitleField = _ref4.TitleField,
      itemProps = _ref4.itemProps;
  var fieldTitle = uiSchema["ui:title"] || title;
  var fieldDescription = uiSchema["ui:description"] || schema.description;
  return React.createElement("div", {
    className: cleanClassNames([className, classNames, "sortable-form-fields"])
  }, React.createElement(ArrayFieldTitle, {
    key: "array-field-title-".concat(idSchema.$id),
    TitleField: TitleField,
    idSchema: idSchema,
    uiSchema: uiSchema,
    title: fieldTitle,
    required: required
  }), fieldDescription && React.createElement(ArrayFieldDescription, {
    key: "array-field-description-".concat(idSchema.$id),
    DescriptionField: DescriptionField,
    idSchema: idSchema,
    description: fieldDescription
  }), React.createElement("div", {
    key: "array-item-list-".concat(idSchema.$id)
  }, React.createElement("div", {
    className: "row array-item-list"
  }, items && items.map(function (p) {
    return DefaultArrayItem(_objectSpread({}, p, {}, itemProps));
  })), canAdd && React.createElement("div", {
    style: {
      marginTop: "1rem",
      position: "relative",
      textAlign: "right"
    }
  }, React.createElement(AddButton, {
    onClick: onAddClick,
    disabled: disabled || readOnly
  }))));
}

function ArrayFieldTemplate(props) {
  var schema = props.schema;

  var _getSemanticProps = getSemanticProps(props),
      horizontalButtons = _getSemanticProps.horizontalButtons,
      wrapItem = _getSemanticProps.wrapItem;

  var itemProps = {
    horizontalButtons: horizontalButtons,
    wrapItem: wrapItem
  };

  if (isFixedItems(schema)) {
    return React.createElement(DefaultFixedArrayFieldTemplate, _extends({}, props, {
      itemProps: itemProps
    }));
  }

  return React.createElement(DefaultNormalArrayFieldTemplate, _extends({}, props, {
    itemProps: itemProps
  }));
}

ArrayFieldTemplate.defaultProps = {
  options: {}
};
ArrayFieldTemplate.propTypes = {
  options: PropTypes.object
};
export default ArrayFieldTemplate;