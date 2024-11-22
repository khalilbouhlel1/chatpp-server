"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorHandler = void 0;
var _multer = _interopRequireDefault(require("multer"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// New file: server/src/middleware/errorHandler.js

var errorHandler = exports.errorHandler = function errorHandler(err, req, res, next) {
  console.error(err.stack);
  if (err instanceof _multer["default"].MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        success: false,
        message: 'File is too large. Maximum size allowed is 5MB',
        error: 'FILE_TOO_LARGE'
      });
    }
    return res.status(400).json({
      success: false,
      message: 'File upload error',
      error: err.message
    });
  }
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error'
  });
};