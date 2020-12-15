"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _context = require("antd/lib/config-provider/context");

var TitleField = function TitleField(_ref) {
  var _classNames;

  var formContext = _ref.formContext,
      id = _ref.id,
      prefixCls = _ref.prefixCls,
      required = _ref.required,
      title = _ref.title;
  var _formContext$colon = formContext.colon,
      colon = _formContext$colon === void 0 ? true : _formContext$colon;
  var labelChildren = title;

  if (colon && typeof title === 'string' && title.trim() !== '') {
    labelChildren = title.replace(/[：:]\s*$/, '');
  }

  var labelClassName = (0, _classnames.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-item-required"), required), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-item-no-colon"), !colon), _classNames));

  var handleLabelClick = function handleLabelClick() {
    if (!id) {
      return;
    }

    var control = document.querySelector("[id=\"".concat(id, "\"]"));

    if (control && control.focus) {
      control.focus();
    }
  };

  return title ? /*#__PURE__*/_react.default.createElement("label", {
    className: labelClassName,
    htmlFor: id,
    onClick: handleLabelClick,
    title: typeof title === 'string' ? title : ''
  }, labelChildren) : null;
};

TitleField.defaultProps = {
  formContext: {}
};

var _default = (0, _context.withConfigConsumer)({
  prefixCls: 'form'
})(TitleField);

exports.default = _default;