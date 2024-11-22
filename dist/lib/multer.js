"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upload = void 0;
var _multer = _interopRequireDefault(require("multer"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var storage = _multer["default"].memoryStorage();
var fileFilter = function fileFilter(req, file, cb) {
  var allowed = ['image/jpeg', 'image/png', 'image/webp'];

  // Check file size before processing (in bytes)
  if (file.size > 5 * 1024 * 1024) {
    cb(new Error('File size exceeds 5MB limit'), false);
    return;
  }
  if (!allowed.includes(file.mimetype)) {
    cb(new Error('Invalid file type. Only JPG, PNG and WebP images are allowed'), false);
    return;
  }
  cb(null, true);
};
var upload = exports.upload = (0, _multer["default"])({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024,
    // 5MB
    files: 1 // Only allow 1 file upload at a time
  }
});