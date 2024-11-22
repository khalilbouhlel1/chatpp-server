"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;
exports.getReceiverSocketId = getReceiverSocketId;
exports.server = exports.io = void 0;
var _socket = require("socket.io");
var _http = _interopRequireDefault(require("http"));
var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var app = exports.app = (0, _express["default"])();
var server = exports.server = _http["default"].createServer(app);
var io = exports.io = new _socket.Server(server, {
  cors: {
    origin: "http://localhost:5173"
  }
});
var userSocketMap = new Map();
function getReceiverSocketId(userId) {
  return userSocketMap.get(userId);
}
io.on("connection", function (socket) {
  console.log("User connected:", socket.id);
  var userId = socket.handshake.query.userId;
  if (userId) {
    userSocketMap.set(userId, socket.id);
    io.emit("getOnlineUsers", Array.from(userSocketMap.keys()));
  }
  socket.on("disconnect", function () {
    console.log("User disconnected:", socket.id);
    if (userId) {
      userSocketMap["delete"](userId);
      io.emit("getOnlineUsers", Array.from(userSocketMap.keys()));
    }
  });
});