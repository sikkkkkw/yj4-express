import "dotenv/config";
import "./db";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import appleRouter from "./routers/appleRouter";
import noticeRouter from "./routers/noticeRouter";

const corsOptions = {
  origin: [
    "http://localhost:5172",
    "http://localhost:5173",
    "http://localhost:3000",
  ],
};
const PORT = process.env.PORT;
const app = express();
//json 형식으로 주고 받겠다.
app.use(express.json());
app.use(morgan("dev"));
app.use(cors(corsOptions));

// notice/list -> 리스트페이지
// notice/write -> 글쓰기페이지
// notice/{게시물아이디} -> 디테일페이지
// notice/{게시물아이디}/edit -> 수정페이지
// notice/{게시물아이디}/delete -> 삭제페이지

//apple/character
//apple/comics
app.get("/", (req, res) => res.send({ name: "kenJo" }));
app.use("/apple", appleRouter);
app.use("/notice", noticeRouter);
// app.get("/apple", (req, res) => res.send({ name: "apple" }));

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
