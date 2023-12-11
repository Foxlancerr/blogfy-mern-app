import express from "express";
import { upload } from "../middleware/multer.upload.middleware.js";
import { arrangeDataFromSavingInDB } from "../utils/formatWritePostForDB.js";
import { writeBlogPostMethod, showJsonBlogData, showBlogDataFromDB } from "../controllers/index.js";

const postBlogRouter = express.Router();

// const savedData = async (req, res) => {
//     try {
//         const { title, tagline, keywords, coverImage, mainParagraph, paragraph1, paragraph2, heading1, heading2 } = req.body;

//         // Construct the contents array based on the presence of headings
//         let keywordCheck = [];
//         if (!keywords?.includes(",")) {
//             keywordCheck = [keywords];
//         } else {
//             // Split the string with a comma and trim each keyword
//             keywordCheck = keywords?.split(",").map((word) => word.trim());
//             // console.log(keywordCheck);
//         }
//         const contents = [];
//         if (mainParagraph) {
//             contents.push({ paragraphs: [mainParagraph] });
//         }
//         if (paragraph1 || heading1) {
//             contents.push({ paragraphs: paragraph1 ? [paragraph1] : [], heading: heading1 });
//         }
//         if (paragraph2 || heading2) {
//             contents.push({ paragraphs: paragraph2 ? [paragraph2] : [], heading: heading2 });
//         }

//         // Create the document to be saved in the database
//         const post = new PostBlog({
//             title,
//             tagline,
//             keywords,
//             coverImage,
//             contents,
//             // author: req.user._id // Assuming you have authentication middleware storing user information in req.user
//         });

//         // Save the document to the database
//         const savedPost = await post.save();
//         console.log(savedPost);

//         res.status(201).json(savedPost);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };

postBlogRouter
    // .post('/blogs/create', async (req, res) => {
    //     try {

    //         const { title, tagline, keywords, coverImage, mainParagraph, paragraph1, paragraph2, heading1, heading2 } = req.body;

    //         const dataSaveinDB = arrangeDataFromSavingInDB(req.body)
    //         console.log(dataSaveinDB);
    //         await PostBlog.create({ ...dataSaveinDB });
    //         res.json(dataSaveinDB);
    //     } catch (err) {
    //         console.log(err.message);
    //     }
    // }).
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