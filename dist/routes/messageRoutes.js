"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _messageController = require("../controllers/messageController.js");
var _auth = require("../middleware/auth.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
router.get("/users", _auth.protectRoute, _messageController.getUserforChat); // This should come before the /:Id route
router.get("/:Id", _auth.protectRoute, _messageController.getMessages);
router.post("/send/:Id", _auth.protectRoute, _messageController.createMessage);
var _default = exports["default"] = router;