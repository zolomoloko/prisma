import express from "express";
import { createUser } from "../controller/user/create-user.controller";
import { getUsers } from "../controller/user/get-users.controller";
import { getUsersWithPost } from "../controller/user/get-user-with-post.controller";
const userRouter = express.Router();

userRouter.post("/create-user", createUser);

userRouter.post("/get-users", getUsers);
userRouter.get("/get-users-with-post", getUsersWithPost);
export default userRouter;