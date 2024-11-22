"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.securityMiddleware = void 0;
var _helmet = _interopRequireDefault(require("helmet"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var securityMiddleware = exports.securityMiddleware = [(0, _helmet["default"])(), _helmet["default"].hidePoweredBy(), _helmet["default"].noSniff(), _helmet["default"].xssFilter()];