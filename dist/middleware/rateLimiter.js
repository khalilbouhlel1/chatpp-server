"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authLimiter = exports.apiLimiter = void 0;
var _expressRateLimit = _interopRequireDefault(require("express-rate-limit"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var authLimiter = exports.authLimiter = (0, _expressRateLimit["default"])({
  windowMs: 5 * 60 * 1000,
  // 5 minutes
  max: 10,
  // Limit each IP to 10 requests per windowMs
  message: {
    message: 'Too many attempts, please try again after 5 minutes'
  },
  standardHeaders: true,
  legacyHeaders: false
});
var apiLimiter = exports.apiLimiter = (0, _expressRateLimit["default"])({
  windowMs: 15 * 60 * 1000,
  max: 100
});