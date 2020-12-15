import _defineProperty from "@babel/runtime-corejs2/helpers/esm/defineProperty";
import React from 'react';
import classNames from 'classnames';
import { withConfigConsumer } from 'antd/lib/config-provider/context';

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

  var labelClassName = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-item-required"), required), _defineProperty(_classNames, "".concat(prefixCls, "-item-no-colon"), !colon), _classNames));

  var handleLabelClick = function handleLabelClick() {
    if (!id) {
      return;
    }

    var control = document.querySelector("[id=\"".concat(id, "\"]"));

    if (control && control.focus) {
      control.focus();
    }
  };

  return title ? /*#__PURE__*/React.createElement("label", {
    className: labelClassName,
    htmlFor: id,
    onClick: handleLabelClick,
    title: typeof title === 'string' ? title : ''
  }, labelChildren) : null;
};

TitleField.defaultProps = {
  formContext: {}
};
export default withConfigConsumer({
  prefixCls: 'form'
})(TitleField);