const mongoose = require('mongoose');

async function connectDB() {
    mongoose.connect("mongodb://0.0.0.0:27017/blogify-vite")
        .then(() => {
            console.log("connection is established")
        })
        .catch(err => console.log(err.message))
}

module.exports = connectDB;