import mongoose from "mongoose";
import bcrypt from "bcrypt";

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

userSchema.pre("save", async function (){
    await bcrypt.hash(this.password,10)
})

const User = mongoose.model('user', userSchema);

export default User;