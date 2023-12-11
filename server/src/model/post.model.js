import mongoose from "mongoose";


// arrangeDataFromSavingInDB(title, tagline, keywords, coverImage, [
//     { paragraphs: [paragraph] },
//     { paragraphs: [paragraph1], heading: heading1 },
//     { heading: heading2, paragraphs: [paragraph2] },
//   ])


const postBlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "the title is required"],
        index: true
    },
    tagline: {
        type: String,
        index: true
    },
    keywords: [String],
    coverImage: {
        type: String,
    },
    contents: [
        { mainParagraphs: [String] },
        { heading1: [String], paragragh1: [String] },
        { heading2: [String], paragragh2: [String] },
    ],
    auther: {
        type: mongoose.Schema.ObjectId,
        ref: "users"
    }
})

const Post = mongoose.model('Post', postBlogSchema);

export default Post;