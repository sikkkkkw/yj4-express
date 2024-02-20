import Notice from "../models/notice";

// noticeList 컨트롤러 함수 정의
export const noticeList = async (req, res) => {
  try {
    // Notice 모델을 사용하여 데이터베이스에서 모든 공지사항을 검색합니다.
    // 주의: 현재 코드는 결과를 사용하지 않고 있으며, 데이터를 검색만 하고 있습니다.
    // await Notice.find({}); //find 불러오기
    // 서버 응답으로 JSON 데이터를 보냅니다. (임시로 { name: "list" }를 보냅니다.)
    return res.send({ name: "list" });
  } catch (error) {
    console.log(error);
  }
};
export const noticeWrite = async (req, res) => {
  try {
    console.log(req.body);
    const { title, description, writer } = req.body;

    const data = await Notice.create({
      title,
      description,
      writer,
      createdAt: Date.now(),
    });
    return res.send({ result: true, data });
  } catch (error) {
    console.log(error);
    return res.send({ result: false });
  }
};
export const noticeDetail = (req, res) => res.send({ name: "detail" });
export const noticeedit = (req, res) => res.send({ name: "edit" });
export const notdelete = (req, res) => res.send({ name: "delete" });
