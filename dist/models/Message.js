"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var messageSchema = new _mongoose["default"].Schema({
  senderId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  receiverId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  text: {
    type: String
  },
  image: {
    type: String
  }
}, {
  timestamps: true
});
var Message = _mongoose["default"].model("Message", messageSchema);
var _default = exports["default"] = Message;