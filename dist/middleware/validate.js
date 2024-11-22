"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateProfile = void 0;
var _expressValidator = require("express-validator");
var HandleValidationErrors = function HandleValidationErrors(req, res, next) {
  var errors = (0, _expressValidator.validationResult)(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
      message: 'Validation failed'
    });
  }
  next();
};
var validateProfile = exports.validateProfile = [(0, _expressValidator.body)("fullname").optional().isString().trim().isLength({
  min: 2,
  max: 50
}).withMessage("Full name must be between 2 and 50 characters"), (0, _expressValidator.body)("password").optional().isLength({
  min: 6
}).matches(/^(?=.*[A-Za-z])(?=.*\d)/).withMessage("Password must be at least 6 characters and contain both letters and numbers"), (0, _expressValidator.body)("profilepic").optional().custom(function (value, _ref) {
  var req = _ref.req;
  if (req.file) {
    if (req.file.size > 5 * 1024 * 1024) {
      throw new Error('File size exceeds 5MB limit');
    }
    return true;
  }
  if (value && !value.match(/^data:image\/(jpeg|png|jpg);base64,/)) {
    throw new Error('Invalid image format');
  }
  return true;
}), HandleValidationErrors];