import User from "../models/user";
import bcrypt from "bcrypt";

// 회원가입
export const memberRegister = async (req, res) => {
  try {
    const {
      body: { username, email, password },
    } = req;

    // 아이디 중복처리
    const exist = await User.exists({ $or: [{ username }, { email }] });
    console.log(exist);
    if (exist) {
      return res.send({
        result: false,
        message: "입력하신 아이디가 이미 있습니다.",
      });
    }

    // 패스워드 암호화
    const hashedPassword = bcrypt.hashSync(password, 5);
    console.log("password: ", hashedPassword);

    const data = User.create({
      username: username,
      email: email,
      password: hashedPassword,
      createdAt: new Date(),
    });

    res.send({ result: true, data });
  } catch (error) {
    console.log(error);
  }
};

// 로그인
export const memberLogin = async (req, res) => {
  // 데이터 가져오기
  const {
    body: { username, password },
  } = req;

  // 아이디 중복체크
  const user = await User.findOne({ username: username });
  if (!user) {
    return res.send({ result: false, message: "해당하는 유저가 없습니다" });
  }
  // bcrypt를 사용자가 입력한 패스워드와 DB에 있는 패스워드 확인
  const ok = bcrypt.compareSync(password, user.password);
  if (!ok) {
    return res.send({ result: false, message: "패스워드가 다릅니다." });
  }
  // 패스워드가 맞으면 로그인\
  if (ok) {
    // session 로그인
    req.session.save(() => {
      req.session.user = {
        username: user.username,
        email: user.email,
      };
      const data = req.session;
      console.log(data);
      res.send({ result: true, data: data });
    });
  }
};
//로그인 성공
export const loginSuccess = async (req, res) => {
  try {
    if (req.session.user) {
      res.send({ result: true, user: req.session.user, isLogin: true });
    } else {
      res.send({ result: true, isLogin: false });
    }
  } catch (error) {
    console.log(error);
  }
};
// 로그아웃
export const logout = async (req, res) => {
  try {
    req.session.destroy(() => {
      res.send({ result: true, message: "로그아웃 성공" });
    });
  } catch (error) {
    console.log(error);
  }
};

//findOne -> 데이터를 다 불러옴
//exists -> 데이터 있는것만 불러옴
//hashSync -> 암호화
//compareSync -> 암호화된 비번 비교
