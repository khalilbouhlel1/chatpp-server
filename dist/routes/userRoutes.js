"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _userController = require("../controllers/userController.js");
var _auth = require("../middleware/auth.js");
var _multer = require("../lib/multer.js");
var _validate = require("../middleware/validate.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
router.get("/my-profile", _auth.protectRoute, _userController.getUserProfile);
router.put("/update-profile", _auth.protectRoute, _multer.upload.single("profilepic"), _validate.validateProfile, _userController.updateUserProfile);
var _default = exports["default"] = router;