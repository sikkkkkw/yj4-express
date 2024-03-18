import express from "express";
import {
  memberRegister,
  memberLogin,
  loginSuccess,
  logout,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.post("/register", memberRegister);
userRouter.post("/login", memberLogin);
userRouter.get("/login-success", loginSuccess);
userRouter.post("/logout", logout);

export default userRouter;
