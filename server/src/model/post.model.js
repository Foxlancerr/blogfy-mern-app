import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "the title is required"],
        index: true
    },
    slug: {
        type: String,
        index: true
    },
    coverImage: {
        type: String,
    },
    contents: {
        type: String,
        minLength: 10
    },
    isPublished: Boolean,
    auther: {
        type: mongoose.Schema.ObjectId,
        ref: "users"
    }
})

const Post = mongoose.model('Post', postSchema)