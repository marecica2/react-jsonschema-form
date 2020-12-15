"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _Object$keys = require("@babel/runtime-corejs2/core-js/object/keys");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var _exportNames = {};

_Object$defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _TextareaWidget.default;
  }
});

var _TextareaWidget = _interopRequireWildcard(require("./TextareaWidget"));

_Object$keys(_TextareaWidget).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TextareaWidget[key];
    }
  });
});