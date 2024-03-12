import express from "express";
import { memberRegister, memberLogin } from "../controllers/userController";

const userRouter = express.Router();

userRouter.post("/register", memberRegister);
userRouter.post("/login", memberLogin);

export default userRouter;
