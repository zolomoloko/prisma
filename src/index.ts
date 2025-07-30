import express from "express";
import userRouter from "./router/user.router";
import postRouter from "./router/post.router";

const app = express();
const port = 3002;
app.use(express.json());

app.use("/users", userRouter);
app.use("/post", postRouter);

app.listen(port, async () => {
  console.log(`hello prisma listening on port http://localhost:${port}`);
});
