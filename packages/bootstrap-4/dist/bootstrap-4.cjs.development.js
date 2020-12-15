'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var core = require('@rjsf/core');
var React = _interopDefault(require('react'));
var Button = _interopDefault(require('react-bootstrap/Button'));
var Row = _interopDefault(require('react-bootstrap/Row'));
var Col = _interopDefault(require('react-bootstrap/Col'));
var Container = _interopDefault(require('react-bootstrap/Container'));
var bs = require('react-icons/bs');
var io = require('react-icons/io');
var gr = require('react-icons/gr');
var ai = require('react-icons/ai');
var Card = _interopDefault(require('react-bootstrap/Card'));
var ListGroup = _interopDefault(require('react-bootstrap/ListGroup'));
var Form$1 = _interopDefault(require('react-bootstrap/Form'));
var FormControl = _interopDefault(require('react-bootstrap/FormControl'));
var InputGroup = _interopDefault(require('react-bootstrap/InputGroup'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var AddButton = function AddButton(props) {
  return React.createElement(Button, Object.assign({}, props, {
    color: "primary",
    style: {
      width: "100%"
    },
    className: "ml-1"
  }), React.createElement(bs.BsPlus, null));
};

var mappings = {
  remove:
  /*#__PURE__*/
  React.createElement(io.IoIosRemove, null),
  plus:
  /*#__PURE__*/
  React.createElement(gr.GrAdd, null),
  "arrow-up":
  /*#__PURE__*/
  React.createElement(ai.AiOutlineArrowUp, null),
  "arrow-down":
  /*#__PURE__*/
  React.createElement(ai.AiOutlineArrowDown, null)
};

var IconButton = function IconButton(props) {
  var icon = props.icon,
      otherProps = _objectWithoutPropertiesLoose(props, ["icon", "className"]);

  return React.createElement(Button, Object.assign({}, otherProps, {
    variant: "light",
    size: "sm"
  }), mappings[icon]);
};

var isMultiSelect = core.utils.isMultiSelect,
    getDefaultRegistry = core.utils.getDefaultRegistry;

var ArrayFieldTemplate = function ArrayFieldTemplate(props) {
  var schema = props.schema,
      _props$registry = props.registry,
      registry = _props$registry === void 0 ? getDefaultRegistry() : _props$registry; // TODO: update types so we don't have to cast registry as any

  if (isMultiSelect(schema, registry.rootSchema)) {
    return React.createElement(DefaultFixedArrayFieldTemplate, Object.assign({}, props));
  } else {
    return React.createElement(DefaultNormalArrayFieldTemplate, Object.assign({}, props));
  }
};

var ArrayFieldTitle = function ArrayFieldTitle(_ref) {
  var TitleField = _ref.TitleField,
      idSchema = _ref.idSchema,
      title = _ref.title,
      required = _ref.required;

  if (!title) {
    return null;
  }

  var id = idSchema.$id + "__title";
  return React.createElement(TitleField, {
    id: id,
    title: title,
    required: required
  });
};

var ArrayFieldDescription = function ArrayFieldDescription(_ref2) {
  var DescriptionField = _ref2.DescriptionField,
      idSchema = _ref2.idSchema,
      description = _ref2.description;

  if (!description) {
    return null;
  }

  var id = idSchema.$id + "__description";
  return React.createElement(DescriptionField, {
    id: id,
    description: description
  });
}; // Used in the two templates


var DefaultArrayItem = function DefaultArrayItem(props) {
  var btnStyle = {
    flex: 1,
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: "bold"
  };
  return React.createElement("div", {
    key: props.key
  }, React.createElement(Row, {
    className: "mb-2  d-flex align-items-center"
  }, React.createElement(Col, {
    xs: "9",
    lg: "9"
  }, props.children), React.createElement(Col, {
    xs: "3",
    lg: "3",
    className: "py-4"
  }, props.hasToolbar && React.createElement("div", {
    className: "d-flex flex-row"
  }, (props.hasMoveUp || props.hasMoveDown) && React.createElement("div", {
    className: "m-0 p-0"
  }, React.createElement(IconButton, {
    icon: "arrow-up",
    className: "array-item-move-up",
    tabIndex: -1,
    style: btnStyle,
    disabled: props.disabled || props.readonly || !props.hasMoveUp,
    onClick: props.onReorderClick(props.index, props.index - 1)
  })), (props.hasMoveUp || props.hasMoveDown) && React.createElement("div", {
    className: "m-0 p-0"
  }, React.createElement(IconButton, {
    icon: "arrow-down",
    tabIndex: -1,
    style: btnStyle,
    disabled: props.disabled || props.readonly || !props.hasMoveDown,
    onClick: props.onReorderClick(props.index, props.index + 1)
  })), props.hasRemove && React.createElement("div", {
    className: "m-0 p-0"
  }, React.createElement(IconButton, {
    icon: "remove",
    tabIndex: -1,
    style: btnStyle,
    disabled: props.disabled || props.readonly,
    onClick: props.onDropIndexClick(props.index)
  }))))));
};

var DefaultFixedArrayFieldTemplate = function DefaultFixedArrayFieldTemplate(props) {
  return React.createElement("fieldset", {
    className: props.className
  }, React.createElement(ArrayFieldTitle, {
    key: "array-field-title-" + props.idSchema.$id,
    TitleField: props.TitleField,
    idSchema: props.idSchema,
    title: props.uiSchema["ui:title"] || props.title,
    required: props.required
  }), (props.uiSchema["ui:description"] || props.schema.description) && React.createElement("div", {
    className: "field-description",
    key: "field-description-" + props.idSchema.$id
  }, props.uiSchema["ui:description"] || props.schema.description), React.createElement("div", {
    className: "row array-item-list",
    key: "array-item-list-" + props.idSchema.$id
  }, props.items && props.items.map(DefaultArrayItem)), props.canAdd && React.createElement(AddButton, {
    className: "array-item-add",
    onClick: props.onAddClick,
    disabled: props.disabled || props.readonly
  }));
};

var DefaultNormalArrayFieldTemplate = function DefaultNormalArrayFieldTemplate(props) {
  return React.createElement("div", null, React.createElement(Row, {
    className: "p-0 m-0"
  }, React.createElement(Col, {
    className: "p-0 m-0"
  }, React.createElement(ArrayFieldTitle, {
    key: "array-field-title-" + props.idSchema.$id,
    TitleField: props.TitleField,
    idSchema: props.idSchema,
    title: props.uiSchema["ui:title"] || props.title,
    required: props.required
  }), (props.uiSchema["ui:description"] || props.schema.description) && React.createElement(ArrayFieldDescription, {
    key: "array-field-description-" + props.idSchema.$id,
    DescriptionField: props.DescriptionField,
    idSchema: props.idSchema,
    description: props.uiSchema["ui:description"] || props.schema.description
  }), React.createElement(Container, {
    fluid: true,
    key: "array-item-list-" + props.idSchema.$id,
    className: "p-0 m-0"
  }, props.items && props.items.map(function (p) {
    return DefaultArrayItem(p);
  }), props.canAdd && React.createElement(Container, {
    className: ""
  }, React.createElement(Row, {
    className: "mt-2"
  }, React.createElement(Col, {
    xs: 9
  }), React.createElement(Col, {
    xs: 3,
    className: "py-4 col-lg-3 col-3"
  }, " ", React.createElement(AddButton, {
    className: "array-item-add",
    onClick: props.onAddClick,
    disabled: props.disabled || props.readonly
  }))))))));
};

var ErrorList = function ErrorList(_ref) {
  var errors = _ref.errors;
  return React.createElement(Card, {
    border: "danger",
    className: "mb-4"
  }, React.createElement(Card.Header, {
    className: "alert-danger"
  }, "Errors"), React.createElement(Card.Body, {
    className: "p-0"
  }, React.createElement(ListGroup, null, errors.map(function (error, i) {
    return React.createElement(ListGroup.Item, {
      key: i,
      className: "border-0"
    }, React.createElement("span", null, error.stack));
  }))));
};

var DescriptionField = function DescriptionField(_ref) {
  var description = _ref.description;

  if (description) {
    return React.createElement("div", null, React.createElement("div", {
      className: "mb-3"
    }, description));
  }

  return null;
};

var TitleField = function TitleField(_ref) {
  var title = _ref.title;
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "my-1"
  }, React.createElement("h5", null, title), React.createElement("hr", {
    className: "border-0 bg-secondary",
    style: {
      height: "1px"
    }
  })));
};

var Fields = {
  DescriptionField: DescriptionField,
  TitleField: TitleField
};

var FieldTemplate = function FieldTemplate(_ref) {
  var id = _ref.id,
      children = _ref.children,
      displayLabel = _ref.displayLabel,
      _ref$rawErrors = _ref.rawErrors,
      rawErrors = _ref$rawErrors === void 0 ? [] : _ref$rawErrors,
      rawHelp = _ref.rawHelp,
      rawDescription = _ref.rawDescription;
  return React.createElement(Form$1.Group, null, children, displayLabel && rawDescription ? React.createElement(Form$1.Text, {
    className: rawErrors.length > 0 ? "text-danger" : "text-muted"
  }, rawDescription) : null, rawErrors.length > 0 && React.createElement(ListGroup, {
    as: "ul"
  }, rawErrors.map(function (error) {
    return React.createElement(ListGroup.Item, {
      as: "li",
      key: error,
      className: "border-0 m-0 p-0"
    }, React.createElement("small", {
      className: "m-0 text-danger"
    }, error));
  })), rawHelp && React.createElement(Form$1.Text, {
    className: rawErrors.length > 0 ? "text-danger" : "text-muted",
    id: id
  }, rawHelp));
};

var ObjectFieldTemplate = function ObjectFieldTemplate(_ref) {
  var DescriptionField = _ref.DescriptionField,
      description = _ref.description,
      TitleField = _ref.TitleField,
      title = _ref.title,
      properties = _ref.properties,
      required = _ref.required,
      uiSchema = _ref.uiSchema,
      idSchema = _ref.idSchema;
  return React.createElement(React.Fragment, null, (uiSchema["ui:title"] || title) && React.createElement(TitleField, {
    id: idSchema.$id + "-title",
    title: title,
    required: required
  }), description && React.createElement(DescriptionField, {
    id: idSchema.$id + "-description",
    description: description
  }), React.createElement(Container, {
    fluid: true,
    className: "p-0"
  }, properties.map(function (element, index) {
    return React.createElement(Row, {
      key: index,
      style: {
        marginBottom: "10px"
      }
    }, React.createElement(Col, {
      xs: 12
    }, " ", element.content));
  })));
};

var CheckboxWidget = function CheckboxWidget(props) {
  var id = props.id,
      value = props.value,
      required = props.required,
      disabled = props.disabled,
      readonly = props.readonly,
      label = props.label,
      schema = props.schema,
      autofocus = props.autofocus,
      onChange = props.onChange,
      onBlur = props.onBlur,
      onFocus = props.onFocus;

  var _onChange = function _onChange(_ref) {
    var checked = _ref.target.checked;
    return onChange(checked);
  };

  var _onBlur = function _onBlur(_ref2) {
    var checked = _ref2.target.checked;
    return onBlur(id, checked);
  };

  var _onFocus = function _onFocus(_ref3) {
    var checked = _ref3.target.checked;
    return onFocus(id, checked);
  };

  var desc = label || schema.description;
  return React.createElement(Form$1.Group, {
    className: "checkbox " + (disabled || readonly ? "disabled" : "")
  }, React.createElement(Form$1.Check, {
    id: id,
    label: desc,
    checked: typeof value === "undefined" ? false : value,
    required: required,
    disabled: disabled,
    readOnly: readonly,
    autoFocus: autofocus,
    onChange: _onChange,
    type: "checkbox",
    onBlur: _onBlur,
    onFocus: _onFocus
  }));
};

var selectValue = function selectValue(value, selected, all) {
  var at = all.indexOf(value);
  var updated = selected.slice(0, at).concat(value, selected.slice(at)); // As inserting values at predefined index positions doesn't work with empty
  // arrays, we need to reorder the updated selection to match the initial order

  return updated.sort(function (a, b) {
    return all.indexOf(a) > all.indexOf(b);
  });
};

var deselectValue = function deselectValue(value, selected) {
  return selected.filter(function (v) {
    return v !== value;
  });
};

var CheckboxesWidget = function CheckboxesWidget(_ref) {
  var schema = _ref.schema,
      label = _ref.label,
      id = _ref.id,
      disabled = _ref.disabled,
      options = _ref.options,
      value = _ref.value,
      autofocus = _ref.autofocus,
      readonly = _ref.readonly,
      required = _ref.required,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus;
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled,
      inline = options.inline;

  var _onChange = function _onChange(option) {
    return function (_ref2) {
      var checked = _ref2.target.checked;
      var all = enumOptions.map(function (_ref3) {
        var value = _ref3.value;
        return value;
      });

      if (checked) {
        onChange(selectValue(option.value, value, all));
      } else {
        onChange(deselectValue(option.value, value));
      }
    };
  };

  var _onBlur = function _onBlur(_ref4) {
    var value = _ref4.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref5) {
    var value = _ref5.target.value;
    return onFocus(id, value);
  };

  return React.createElement(React.Fragment, null, React.createElement(Form$1.Label, {
    htmlFor: id
  }, label || schema.title), React.createElement(Form$1.Group, null, enumOptions.map(function (option, index) {
    var checked = value.indexOf(option.value) !== -1;
    var itemDisabled = enumDisabled && enumDisabled.indexOf(option.value) != -1;
    return inline ? React.createElement(Form$1, {
      key: index
    }, React.createElement(Form$1.Check, {
      required: required,
      inline: true,
      className: "bg-transparent border-0",
      custom: true,
      checked: checked,
      type: "checkbox",
      id: id + "_" + index,
      label: option.label,
      autoFocus: autofocus && index === 0,
      onChange: _onChange(option),
      onBlur: _onBlur,
      onFocus: _onFocus,
      disabled: disabled || itemDisabled || false,
      readOnly: readonly
    })) : React.createElement(Form$1, {
      key: index
    }, React.createElement(Form$1.Check, {
      custom: true,
      required: required,
      checked: checked,
      className: "bg-transparent border-0",
      type: "checkbox",
      id: id + "_" + index,
      label: option.label,
      autoFocus: autofocus && index === 0,
      onChange: _onChange(option),
      onBlur: _onBlur,
      onFocus: _onFocus,
      disabled: disabled || itemDisabled || false,
      readOnly: readonly
    }));
  })));
};

var TextWidget = function TextWidget(_ref) {
  var id = _ref.id,
      required = _ref.required,
      readonly = _ref.readonly,
      disabled = _ref.disabled,
      type = _ref.type,
      label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      autofocus = _ref.autofocus,
      options = _ref.options,
      schema = _ref.schema,
      _ref$rawErrors = _ref.rawErrors,
      rawErrors = _ref$rawErrors === void 0 ? [] : _ref$rawErrors;

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value === "" ? options.emptyValue : value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  }; // const classNames = [rawErrors.length > 0 ? "is-invalid" : "", type === 'file' ? 'custom-file-label': ""]


  return React.createElement(Form$1.Group, {
    className: "mb-0"
  }, React.createElement(Form$1.Label, {
    className: rawErrors.length > 0 ? "text-danger" : ""
  }, label || schema.title, (label || schema.title) && required ? "*" : null), React.createElement(Form$1.Control, {
    id: id,
    autoFocus: autofocus,
    required: required,
    disabled: disabled,
    readOnly: readonly,
    className: rawErrors.length > 0 ? "is-invalid" : "",
    list: schema.examples ? "examples_" + id : undefined,
    type: type || schema.type,
    value: value || value === 0 ? value : "",
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }), schema.examples ? React.createElement("datalist", {
    id: "examples_" + id
  }, schema.examples.concat(schema["default"] ? [schema["default"]] : []).map(function (example) {
    return React.createElement("option", {
      key: example,
      value: example
    });
  })) : null);
};

var ColorWidget = function ColorWidget(props) {
  return React.createElement(TextWidget, Object.assign({}, props, {
    type: "color"
  }));
};

var DateWidget = function DateWidget(props) {
  return React.createElement(TextWidget, Object.assign({}, props, {
    type: "date"
  }));
};

var localToUTC = core.utils.localToUTC,
    utcToLocal = core.utils.utcToLocal;

var DateTimeWidget = function DateTimeWidget(props) {
  var value = utcToLocal(props.value);

  var onChange = function onChange(value) {
    props.onChange(localToUTC(value));
  };

  return React.createElement(TextWidget, Object.assign({}, props, {
    type: "datetime-local",
    value: value,
    onChange: onChange
  }));
};

var EmailWidget = function EmailWidget(props) {
  return React.createElement(TextWidget, Object.assign({}, props, {
    type: "email"
  }));
};

var PasswordWidget = function PasswordWidget(_ref) {
  var id = _ref.id,
      required = _ref.required,
      readonly = _ref.readonly,
      disabled = _ref.disabled,
      value = _ref.value,
      label = _ref.label,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      options = _ref.options,
      autofocus = _ref.autofocus,
      schema = _ref.schema,
      _ref$rawErrors = _ref.rawErrors,
      rawErrors = _ref$rawErrors === void 0 ? [] : _ref$rawErrors;

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value === "" ? options.emptyValue : value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  return React.createElement(Form$1.Group, {
    className: "mb-0"
  }, React.createElement(Form$1.Label, {
    className: rawErrors.length > 0 ? "text-danger" : ""
  }, label || schema.title, (label || schema.title) && required ? "*" : null), React.createElement(Form$1.Control, {
    id: id,
    autoFocus: autofocus,
    className: rawErrors.length > 0 ? "is-invalid" : "",
    required: required,
    disabled: disabled,
    readOnly: readonly,
    type: "password",
    value: value ? value : "",
    onFocus: _onFocus,
    onBlur: _onBlur,
    onChange: _onChange
  }));
};

var RadioWidget = function RadioWidget(_ref) {
  var id = _ref.id,
      schema = _ref.schema,
      options = _ref.options,
      value = _ref.value,
      required = _ref.required,
      disabled = _ref.disabled,
      readonly = _ref.readonly,
      label = _ref.label,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus;
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled;

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(schema.type == "boolean" ? value !== "false" : value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  var inline = Boolean(options && options.inline);
  return React.createElement(Form$1.Group, {
    className: "mb-0"
  }, React.createElement(Form$1.Label, {
    className: "d-block"
  }, label || schema.title, (label || schema.title) && required ? "*" : null), enumOptions.map(function (option, i) {
    var itemDisabled = Array.isArray(enumDisabled) && enumDisabled.indexOf(option.value) !== -1;
    var checked = option.value == value;
    var radio = React.createElement(Form$1.Check, {
      inline: inline,
      label: option.label,
      id: option.label,
      key: i,
      name: id,
      type: "radio",
      disabled: disabled || itemDisabled || readonly,
      checked: checked,
      required: required,
      value: option.value,
      onChange: _onChange,
      onBlur: _onBlur,
      onFocus: _onFocus
    });
    return radio;
  }));
};

var rangeSpec = core.utils.rangeSpec;

var RangeWidget = function RangeWidget(_ref) {
  var value = _ref.value,
      readonly = _ref.readonly,
      disabled = _ref.disabled,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      options = _ref.options,
      schema = _ref.schema,
      onChange = _ref.onChange,
      required = _ref.required,
      label = _ref.label,
      id = _ref.id;

  var sliderProps = _extends({
    value: value,
    label: label,
    id: id
  }, rangeSpec(schema));

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value === "" ? options.emptyValue : value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  return React.createElement(Form$1.Group, {
    className: "mb-0"
  }, React.createElement(Form$1.Label, null, label, label && required ? "*" : null), React.createElement(Form$1.Control, Object.assign({
    type: "range",
    required: required,
    disabled: disabled,
    readOnly: readonly,
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }, sliderProps)), React.createElement("span", {
    className: "range-view"
  }, value));
};

var asNumber = core.utils.asNumber,
    guessType = core.utils.guessType;
var nums =
/*#__PURE__*/
new Set(["number", "integer"]);
/**
 * This is a silly limitation in the DOM where option change event values are
 * always retrieved as strings.
 */

var processValue = function processValue(schema, value) {
  // "enum" is a reserved word, so only "type" and "items" can be destructured
  var type = schema.type,
      items = schema.items;

  if (value === "") {
    return undefined;
  } else if (type === "array" && items && nums.has(items.type)) {
    return value.map(asNumber);
  } else if (type === "boolean") {
    return value === "true";
  } else if (type === "number") {
    return asNumber(value);
  } // If type is undefined, but an enum is present, try and infer the type from
  // the enum values


  if (schema["enum"]) {
    if (schema["enum"].every(function (x) {
      return guessType(x) === "number";
    })) {
      return asNumber(value);
    } else if (schema["enum"].every(function (x) {
      return guessType(x) === "boolean";
    })) {
      return value === "true";
    }
  }

  return value;
};

var SelectWidget = function SelectWidget(_ref) {
  var schema = _ref.schema,
      id = _ref.id,
      options = _ref.options,
      label = _ref.label,
      required = _ref.required,
      disabled = _ref.disabled,
      readonly = _ref.readonly,
      value = _ref.value,
      multiple = _ref.multiple,
      autofocus = _ref.autofocus,
      _onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      placeholder = _ref.placeholder,
      _ref$rawErrors = _ref.rawErrors,
      rawErrors = _ref$rawErrors === void 0 ? [] : _ref$rawErrors;
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled;
  var emptyValue = multiple ? [] : "";

  function getValue(event, multiple) {
    if (multiple) {
      return [].slice.call(event.target.options).filter(function (o) {
        return o.selected;
      }).map(function (o) {
        return o.value;
      });
    } else {
      return event.target.value;
    }
  }

  return React.createElement(Form$1.Group, null, React.createElement(Form$1.Label, {
    className: rawErrors.length > 0 ? "text-danger" : ""
  }, label || schema.title, (label || schema.title) && required ? "*" : null), React.createElement(Form$1.Control, {
    as: "select",
    custom: true,
    id: id,
    value: typeof value === "undefined" ? emptyValue : value,
    required: required,
    multiple: multiple,
    disabled: disabled,
    readOnly: readonly,
    autoFocus: autofocus,
    className: rawErrors.length > 0 ? "is-invalid" : "",
    onBlur: onBlur && function (event) {
      var newValue = getValue(event, multiple);
      onBlur(id, processValue(schema, newValue));
    },
    onFocus: onFocus && function (event) {
      var newValue = getValue(event, multiple);
      onFocus(id, processValue(schema, newValue));
    },
    onChange: function onChange(event) {
      var newValue = getValue(event, multiple);

      _onChange(processValue(schema, newValue));
    }
  }, !multiple && schema["default"] === undefined && React.createElement("option", {
    value: ""
  }, placeholder), enumOptions.map(function (_ref2, i) {
    var value = _ref2.value,
        label = _ref2.label;
    var disabled = Array.isArray(enumDisabled) && enumDisabled.indexOf(value) != -1;
    return React.createElement("option", {
      key: i,
      id: label,
      value: value,
      disabled: disabled
    }, label);
  })));
};

var TextareaWidget = function TextareaWidget(_ref) {
  var id = _ref.id,
      placeholder = _ref.placeholder,
      value = _ref.value,
      required = _ref.required,
      disabled = _ref.disabled,
      autofocus = _ref.autofocus,
      label = _ref.label,
      readonly = _ref.readonly,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      onChange = _ref.onChange,
      options = _ref.options,
      schema = _ref.schema,
      _ref$rawErrors = _ref.rawErrors,
      rawErrors = _ref$rawErrors === void 0 ? [] : _ref$rawErrors;

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value === "" ? options.emptyValue : value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  return React.createElement(React.Fragment, null, React.createElement("label", {
    htmlFor: id
  }, label || schema.title, required && React.createElement("span", {
    "aria-hidden": true,
    className: rawErrors.length > 0 ? "text-danger ml-1" : "ml-1"
  }, "\u2009", "*")), React.createElement(InputGroup, null, React.createElement(FormControl, {
    id: id,
    as: "textarea",
    placeholder: placeholder,
    disabled: disabled,
    readOnly: readonly,
    value: value,
    required: required,
    autoFocus: autofocus,
    rows: options.rows || 5,
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  })));
};

var UpDownWidget = function UpDownWidget(_ref) {
  var id = _ref.id,
      required = _ref.required,
      readonly = _ref.readonly,
      disabled = _ref.disabled,
      label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      autofocus = _ref.autofocus;

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  return React.createElement(Form$1.Group, {
    className: "mb-0"
  }, React.createElement(Form$1.Label, null, label, label && required ? "*" : null), React.createElement(Form$1.Control, {
    id: id,
    autoFocus: autofocus,
    required: required,
    type: "number",
    disabled: disabled,
    readOnly: readonly,
    value: value ? value : "",
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }));
};

var URLWidget = function URLWidget(props) {
  return React.createElement(TextWidget, Object.assign({}, props, {
    type: "url"
  }));
};

var FileWidget = function FileWidget(props) {
  return React.createElement(TextWidget, Object.assign({}, props, {
    type: "file"
  }));
};

var Widgets = {
  CheckboxWidget: CheckboxWidget,
  CheckboxesWidget: CheckboxesWidget,
  ColorWidget: ColorWidget,
  DateWidget: DateWidget,
  DateTimeWidget: DateTimeWidget,
  EmailWidget: EmailWidget,
  PasswordWidget: PasswordWidget,
  RadioWidget: RadioWidget,
  RangeWidget: RangeWidget,
  SelectWidget: SelectWidget,
  TextareaWidget: TextareaWidget,
  TextWidget: TextWidget,
  UpDownWidget: UpDownWidget,
  URLWidget: URLWidget,
  FileWidget: FileWidget
};

var getDefaultRegistry$1 = core.utils.getDefaultRegistry;

var _getDefaultRegistry =
/*#__PURE__*/
getDefaultRegistry$1(),
    fields = _getDefaultRegistry.fields,
    widgets = _getDefaultRegistry.widgets;

var DefaultChildren = function DefaultChildren() {
  return React.createElement("div", null, React.createElement(Button, {
    variant: "primary",
    type: "submit"
  }, "Submit"));
};

var Theme = {
  children:
  /*#__PURE__*/
  React.createElement(DefaultChildren, null),
  ArrayFieldTemplate: ArrayFieldTemplate,
  fields:
  /*#__PURE__*/
  _extends({}, fields, {}, Fields),
  FieldTemplate: FieldTemplate,
  ObjectFieldTemplate: ObjectFieldTemplate,
  widgets:
  /*#__PURE__*/
  _extends({}, widgets, {}, Widgets),
  ErrorList: ErrorList
};

var Form =
/*#__PURE__*/
core.withTheme(Theme);

exports.FieldTemplate = FieldTemplate;
exports.Fields = Fields;
exports.Form = Form;
exports.ObjectFieldTemplate = ObjectFieldTemplate;
exports.Theme = Theme;
exports.Widgets = Widgets;
exports.default = Form;
//# sourceMappingURL=bootstrap-4.cjs.development.js.map
