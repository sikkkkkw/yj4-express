"use strict";

require("dotenv/config");
require("./db");
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _appleRouter = _interopRequireDefault(require("./models/routers/appleRouter"));
var _noticeRouter = _interopRequireDefault(require("./models/routers/noticeRouter"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var corsOptions = {
  origin: ["http://localhost:5172", "http://localhost:5173", "http://localhost:3000"]
};
var PORT = process.env.PORT;
var app = (0, _express["default"])();
//json 형식으로 주고 받겠다.
app.use(_express["default"].json());
app.use((0, _morgan["default"])("dev"));
app.use((0, _cors["default"])());

// notice/list -> 리스트페이지
// notice/write -> 글쓰기페이지
// notice/{게시물아이디} -> 디테일페이지
// notice/{게시물아이디}/edit -> 수정페이지
// notice/{게시물아이디}/delete -> 삭제페이지

//apple/character
//apple/comics
app.get("/", function (req, res) {
  return res.send({
    name: "kenJo"
  });
});
app.use("/apple", _appleRouter["default"]);
app.use("/notice", _noticeRouter["default"]);
// app.get("/apple", (req, res) => res.send({ name: "apple" }));

app.listen(PORT, function () {
  return console.log("http://localhost:".concat(PORT));
});