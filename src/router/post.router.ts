import express from "express";
import { createPost } from "../controller/post/create-post.controller";

const postRouter = express.Router();

postRouter.post("/create-post", createPost);

export default postRouter;