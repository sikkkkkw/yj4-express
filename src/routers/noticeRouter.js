import express from "express";
import {
  notdelete,
  noticeDetail,
  noticeList,
  noticeWrite,
  noticeedit,
} from "../controllers/noticeController";

const noticeRouter = express.Router();

// notice/list -> 리스트페이지
noticeRouter.get("", noticeList);
// notice/write -> 글쓰기페이지
noticeRouter.post("/write", noticeWrite);
// notice/{게시물아이디} -> 디테일페이지
noticeRouter.get("/:id", noticeDetail);
// notice/{게시물아이디}/edit -> 수정페이지
noticeRouter.post("/:id/edit", noticeedit);
// notice/{게시물아이디}/delete -> 삭제페이지
noticeRouter.post("/:id/delete", notdelete);

export default noticeRouter;
