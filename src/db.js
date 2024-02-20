// mongoose 라이브러리를 가져옵니다.
import mongoose from "mongoose";

// MongoDB 서버에 연결하기 위한 URL을 환경변수에서 가져와서 사용합니다.(mongodb://localhost:27017)
mongoose.connect(`${process.env.DB_URL}/yj4-express`);

// mongoose의 connection 객체를 변수에 저장합니다.
const db = mongoose.connection;

// 에러가 발생할 경우 에러 메시지를 출력합니다.
db.on("error", (error) => console.log(error));

// 연결이 성공적으로 이루어졌을 때 한 번만 실행되는 이벤트 핸들러입니다.
db.once("open", () => console.log("Connected on DB"));
