import express from "express";
import { upload } from "../middleware/multer.upload.middleware.js";
import { writeBlogPostMethod, showJsonBlogData, showBlogDataFromDB } from "../controllers/index.js";

const postBlogRouter = express.Router();

postBlogRouter
    .get("/blogs/json", showJsonBlogData)
    .get("/blogs/db", showBlogDataFromDB)
    .post('/blogs/create', writeBlogPostMethod)

export default postBlogRouter;











/**
 * @param {just for testing purposes}
 */




// import express from "express";
// import Post from "../model/post.model.js";
// import { upload } from "../middleware/multer.upload.middleware.js";
// import jsonData from "../index.js"

// const postBlogRouter = express.Router();

// const middleware = upload.fields([
//     {
//         name: "coverImage",
//         maxCount: 1
//     }
// ])
// postBlogRouter.post('/post', middleware, async (req, res) => {
//     const { title } = req.body;
//     const files = req.files;
//     const postCreated = await Post.create({ title, })
//     res.send(files)
// }).get("/get", async (req, res) => {
//     res.json(files)
// })

// export default postBlogRouter;