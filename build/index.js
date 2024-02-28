"use strict";

require("dotenv/config");
require("./db");
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _appleRouter = _interopRequireDefault(require("./routers/appleRouter"));
var _noticeRouter = _interopRequireDefault(require("./routers/noticeRouter"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var corsOptions = {
  origin: ["http://localhost:5172", "http://localhost:5173", "http://localhost:3000"]
};
var PORT = process.env.PORT;
var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use((0, _morgan["default"])("dev"));
app.use((0, _cors["default"])(corsOptions));
app.get("/", function (req, res) {
  return res.send({
    name: "kenJo"
  });
});
app.use("/notice", _noticeRouter["default"]);
app.use("/apple", _appleRouter["default"]);
app.listen(PORT, function () {
  return console.log("http://localhost:".concat(PORT));
});