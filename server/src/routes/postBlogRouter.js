import express from "express";
import PostBlog from "../model/post.model.js";
import { upload } from "../middleware/multer.upload.middleware.js";
import { arrangeDataFromSavingInDB } from "../utils/formatWritePostForDB.js";
import dummyJsonData from "../dummyJsonData.js"

const postBlogRouter = express.Router();

postBlogRouter
    .post('/blogs/create', async (req, res) => {
        try {

            const { title, tagline, keywords, coverImage, mainParagraph, paragraph1, paragraph2, heading1, heading2 } = req.body;

            const dataSaveinDB = arrangeDataFromSavingInDB(req.body)
            console.log(dataSaveinDB);
            await PostBlog.create({ ...dataSaveinDB });
            res.json(dataSaveinDB);
        } catch (err) {
            console.log(err.message);
        }
    }).
    get("/blogs", async (req, res) => {
        res.json(dummyJsonData)
    })

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