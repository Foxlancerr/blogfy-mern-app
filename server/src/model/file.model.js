

import mongoose from "mongoose";

// Mongoose model
const FileModel = mongoose.model('File', {
    filename: String,
    // Add more fields as needed
});

export default FileModel;



