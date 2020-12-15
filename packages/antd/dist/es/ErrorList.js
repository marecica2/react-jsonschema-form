import React from 'react';
import Alert from 'antd/lib/alert';
import List from 'antd/lib/list';
import Space from 'antd/lib/space';
import ExclamationCircleOutlined from '@ant-design/icons/ExclamationCircleOutlined';

var ErrorList = function ErrorList(_ref) {
  var errors = _ref.errors;

  var renderErrors = function renderErrors() {
    return /*#__PURE__*/React.createElement(List, {
      className: "list-group",
      size: "small"
    }, errors.map(function (error, index) {
      return /*#__PURE__*/React.createElement(List.Item, {
        key: index
      }, /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement(ExclamationCircleOutlined, null), error.stack));
    }));
  };

  return /*#__PURE__*/React.createElement(Alert, {
    className: "panel panel-danger errors",
    description: renderErrors(),
    message: "Errors",
    type: "error"
  });
};

export default ErrorList;