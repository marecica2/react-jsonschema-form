"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _set = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/set"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _form = _interopRequireDefault(require("antd/lib/form"));

var _WrapIfAdditional = _interopRequireDefault(require("./WrapIfAdditional"));

var VERTICAL_LABEL_COL = {
  span: 24
};
var VERTICAL_WRAPPER_COL = {
  span: 24
};

var FieldTemplate = function FieldTemplate(_ref) {
  var children = _ref.children,
      classNames = _ref.classNames,
      description = _ref.description,
      disabled = _ref.disabled,
      displayLabel = _ref.displayLabel,
      formContext = _ref.formContext,
      help = _ref.help,
      hidden = _ref.hidden,
      id = _ref.id,
      label = _ref.label,
      onDropPropertyClick = _ref.onDropPropertyClick,
      onKeyChange = _ref.onKeyChange,
      rawDescription = _ref.rawDescription,
      rawErrors = _ref.rawErrors,
      rawHelp = _ref.rawHelp,
      readonly = _ref.readonly,
      required = _ref.required,
      schema = _ref.schema;
  var colon = formContext.colon,
      _formContext$labelCol = formContext.labelCol,
      labelCol = _formContext$labelCol === void 0 ? VERTICAL_LABEL_COL : _formContext$labelCol,
      _formContext$wrapperC = formContext.wrapperCol,
      wrapperCol = _formContext$wrapperC === void 0 ? VERTICAL_WRAPPER_COL : _formContext$wrapperC,
      wrapperStyle = formContext.wrapperStyle;

  if (hidden) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "field-hidden"
    }, children);
  }

  var renderFieldErrors = function renderFieldErrors() {
    return (0, _toConsumableArray2.default)(new _set.default(rawErrors)).map(function (error) {
      return /*#__PURE__*/_react.default.createElement("div", {
        key: "field-".concat(id, "-error-").concat(error)
      }, error);
    });
  };

  return /*#__PURE__*/_react.default.createElement(_WrapIfAdditional.default, {
    classNames: classNames,
    disabled: disabled,
    formContext: formContext,
    id: id,
    label: label,
    onDropPropertyClick: onDropPropertyClick,
    onKeyChange: onKeyChange,
    readonly: readonly,
    required: required,
    schema: schema
  }, id === 'root' ? children : /*#__PURE__*/_react.default.createElement(_form.default.Item, {
    colon: colon // extra={!!rawDescription && description}
    ,
    hasFeedback: schema.type !== 'array' && schema.type !== 'object',
    help: !!rawHelp && help || !!rawErrors && renderFieldErrors(),
    htmlFor: id,
    label: displayLabel && label,
    labelCol: labelCol,
    required: required,
    style: wrapperStyle,
    validateStatus: rawErrors ? 'error' : undefined,
    wrapperCol: wrapperCol
  }, children));
};

var _default = FieldTemplate;
exports.default = _default;