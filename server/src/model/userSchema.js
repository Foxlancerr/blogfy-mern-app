import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require:[true,"The username is required"]
    },
    email: {
        type: String,
        require:[true,"The email is required"]
    },
    password: {
        type: String,
        require:[true,"The password is required"]
    }
})

const User = mongoose.model('user', userSchema);

module.exports = User;