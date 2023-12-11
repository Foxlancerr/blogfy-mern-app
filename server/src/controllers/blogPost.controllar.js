import dummyJsonData from "../dummyJsonData.js"
import PostBlog from "../model/post.model.js";


export const writeBlogPostMethod = async (req, res) => {
    try {
        const { title, tagline, keywords, coverImage, mainParagraph, paragraph1, paragraph2, heading1, heading2 } = req.body;
        console.log(req.body);


        // if ([title, tagline, keywords, coverImage, mainParagraph, paragraph1, paragraph2, heading1, heading2].some(val => val?.trim() === undefined)) {
        //     res.json({ error: "All field are required to filled it" });
        // }

        // Construct the contents array based on the presence of headings
        let keywordCheck = [];
        if (!keywords?.includes(",")) {
            keywordCheck = [keywords];
        } else {
            // Split the string with a comma and trim each keyword
            keywordCheck = keywords?.split(",").map((word) => word.trim());
            // console.log(keywordCheck);
        }
        const contents = [];
        if (mainParagraph) {
            contents.push({ paragraphs: [mainParagraph] });
        }
        if (paragraph1 || heading1) {
            contents.push({ paragraphs: paragraph1 ? [paragraph1] : [], heading: heading1 });
        }
        if (paragraph2 || heading2) {
            contents.push({ paragraphs: paragraph2 ? [paragraph2] : [], heading: heading2 });
        }

        // Create the document to be saved in the database
        const post = new PostBlog({
            title,
            tagline,
            keywords: keywordCheck,
            coverImage,
            contents,
            // author: req.user._id // Assuming you have authentication middleware storing user information in req.user
        });

        // Save the document to the database
        const savedPost = await post.save();
        console.log(savedPost);

        res.status(201).json(savedPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

export const showJsonBlogData = async (req, res) => {
    res.json(dummyJsonData)
}

export const showBlogDataFromDB = async (req, res) => {
    try {

        const data = await PostBlog.find({})
        if (data.length === 0) {
            res.status(404).json({ error: '404 Not Data Found in DB' })
            return
        }
        res.json(data)
    } catch (error) {
        res.status(500).json({ error: err.message })
    }
}