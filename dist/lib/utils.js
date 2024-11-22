"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateToken = exports.createResponse = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var generateToken = exports.generateToken = function generateToken(userId) {
  return _jsonwebtoken["default"].sign({
    userId: userId
  }, process.env.JWT_SECRET, {
    expiresIn: "7d"
  });
};
var createResponse = exports.createResponse = function createResponse(success, message) {
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var response = {
    success: success,
    message: message
  };
  if (data) response.data = data;
  return response;
};