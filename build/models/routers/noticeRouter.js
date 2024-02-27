"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _noticeController = require("../../controllers/noticeController");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var noticeRouter = _express["default"].Router();

// notice/list -> 리스트페이지
noticeRouter.get("", _noticeController.noticeList);
// notice/write -> 글쓰기페이지
noticeRouter.post("/write", _noticeController.noticeWrite);
// notice/{게시물아이디} -> 디테일페이지
noticeRouter.get("/:id", _noticeController.noticeDetail);
// notice/{게시물아이디}/edit -> 수정페이지
noticeRouter.post("/:id/edit", noticeedit);
// notice/{게시물아이디}/delete -> 삭제페이지
noticeRouter.post("/:id/delete", notdelete);
var _default = exports["default"] = noticeRouter;