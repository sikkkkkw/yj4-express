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
    "https://singular-stroopwafel-98f70c.netlify.app/",
  ],
};
const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(morgan("dev"));
//corsOptions 지우면 모드 허용
app.use(cors(corsOptions));

app.get("/", (req, res) => res.send({ name: "kenJo" }));
app.use("/notice", noticeRouter);
app.use("/apple", appleRouter);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
