import express from "express";
import Post from "../model/post.model.js";
import { upload } from "../middleware/multer.upload.middleware.js";

const postRouter = express.Router();

const middleware = upload.fields([
    {
        name: "coverImage",
        maxCount: 1
    }
])
postRouter.post('/post', middleware, async (req, res) => {
    const { title } = req.body;
    const files = req.files;
    const postCreated = await Post.create({ title })
    res.send(files)
})

export default postRouter;