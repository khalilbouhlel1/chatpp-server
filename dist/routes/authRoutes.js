"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _authController = require("../controllers/authController.js");
var _rateLimiter = require("../middleware/rateLimiter.js");
var _auth = require("../middleware/auth.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
router.post("/register", _rateLimiter.authLimiter, _authController.registerUser);
router.post("/login", _rateLimiter.authLimiter, _authController.loginUser);
router.post("/logout", _authController.logoutUser);
router.get("/check", _auth.protectRoute, _authController.checkAuth);
var _default = exports["default"] = router;