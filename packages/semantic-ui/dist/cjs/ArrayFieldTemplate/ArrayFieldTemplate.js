"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptors"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/keys"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _semanticUiReact = require("semantic-ui-react");

var _core = require("@rjsf/core");

var _AddButton = _interopRequireDefault(require("../AddButton"));

var _util = require("../util");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { ownKeys(Object(source)).forEach(function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

var isFixedItems = _core.utils.isFixedItems;

var ArrayFieldTitle = function ArrayFieldTitle(_ref) {
  var TitleField = _ref.TitleField,
      idSchema = _ref.idSchema,
      uiSchema = _ref.uiSchema,
      title = _ref.title;

  if (!title) {
    return null;
  }

  var id = "".concat(idSchema.$id, "__title");
  return _react.default.createElement(TitleField, {
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
  return _react.default.createElement(DescriptionField, {
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
  return _react.default.createElement("div", {
    className: "array-item",
    key: props.key
  }, _react.default.createElement(_util.MaybeWrap, {
    wrap: props.wrapItem,
    component: _semanticUiReact.Segment
  }, _react.default.createElement(_semanticUiReact.Grid, {
    style: !isInitialArrayItem(props) ? _objectSpread({}, gridStyle(!props.horizontalButtons), {
      alignItems: "center"
    }) : gridStyle(!props.horizontalButtons)
  }, _react.default.createElement(_semanticUiReact.Grid.Column, {
    width: 16,
    verticalAlign: "middle"
  }, props.children), props.hasToolbar && _react.default.createElement(_semanticUiReact.Grid.Column, null, (props.hasMoveUp || props.hasMoveDown || props.hasRemove) && _react.default.createElement(_semanticUiReact.Button.Group, {
    size: "mini",
    vertical: !props.horizontalButtons
  }, (props.hasMoveUp || props.hasMoveDown) && _react.default.createElement(_semanticUiReact.Button, {
    icon: "angle up",
    className: "array-item-move-up",
    tabIndex: "-1",
    disabled: props.disabled || props.readOnly || !props.hasMoveUp,
    onClick: props.onReorderClick(props.index, props.index - 1)
  }), (props.hasMoveUp || props.hasMoveDown) && _react.default.createElement(_semanticUiReact.Button, {
    icon: "angle down",
    className: "array-item-move-down",
    tabIndex: "-1",
    disabled: props.disabled || props.readOnly || !props.hasMoveDown,
    onClick: props.onReorderClick(props.index, props.index + 1)
  }), props.hasRemove && _react.default.createElement(_semanticUiReact.Button, {
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
  return _react.default.createElement("div", {
    className: (0, _util.cleanClassNames)([className, classNames])
  }, _react.default.createElement(ArrayFieldTitle, {
    key: "array-field-title-".concat(idSchema.$id),
    TitleField: TitleField,
    idSchema: idSchema,
    uiSchema: uiSchema,
    title: fieldTitle,
    required: required
  }), fieldDescription && _react.default.createElement("div", {
    className: "field-description",
    key: "field-description-".concat(idSchema.$id)
  }, fieldDescription), _react.default.createElement("div", {
    key: "array-item-list-".concat(idSchema.$id)
  }, _react.default.createElement("div", {
    className: "row array-item-list"
  }, items && items.map(function (p) {
    return DefaultArrayItem(_objectSpread({}, p, {}, itemProps));
  })), canAdd && _react.default.createElement("div", {
    style: {
      marginTop: "1rem",
      position: "relative",
      textAlign: "right"
    }
  }, _react.default.createElement(_AddButton.default, {
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
  return _react.default.createElement("div", {
    className: (0, _util.cleanClassNames)([className, classNames, "sortable-form-fields"])
  }, _react.default.createElement(ArrayFieldTitle, {
    key: "array-field-title-".concat(idSchema.$id),
    TitleField: TitleField,
    idSchema: idSchema,
    uiSchema: uiSchema,
    title: fieldTitle,
    required: required
  }), fieldDescription && _react.default.createElement(ArrayFieldDescription, {
    key: "array-field-description-".concat(idSchema.$id),
    DescriptionField: DescriptionField,
    idSchema: idSchema,
    description: fieldDescription
  }), _react.default.createElement("div", {
    key: "array-item-list-".concat(idSchema.$id)
  }, _react.default.createElement("div", {
    className: "row array-item-list"
  }, items && items.map(function (p) {
    return DefaultArrayItem(_objectSpread({}, p, {}, itemProps));
  })), canAdd && _react.default.createElement("div", {
    style: {
      marginTop: "1rem",
      position: "relative",
      textAlign: "right"
    }
  }, _react.default.createElement(_AddButton.default, {
    onClick: onAddClick,
    disabled: disabled || readOnly
  }))));
}

function ArrayFieldTemplate(props) {
  var schema = props.schema;

  var _getSemanticProps = (0, _util.getSemanticProps)(props),
      horizontalButtons = _getSemanticProps.horizontalButtons,
      wrapItem = _getSemanticProps.wrapItem;

  var itemProps = {
    horizontalButtons: horizontalButtons,
    wrapItem: wrapItem
  };

  if (isFixedItems(schema)) {
    return _react.default.createElement(DefaultFixedArrayFieldTemplate, (0, _extends2.default)({}, props, {
      itemProps: itemProps
    }));
  }

  return _react.default.createElement(DefaultNormalArrayFieldTemplate, (0, _extends2.default)({}, props, {
    itemProps: itemProps
  }));
}

ArrayFieldTemplate.defaultProps = {
  options: {}
};
ArrayFieldTemplate.propTypes = {
  options: _propTypes.default.object
};
var _default = ArrayFieldTemplate;
exports.default = _default;