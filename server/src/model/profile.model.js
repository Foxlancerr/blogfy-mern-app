import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    intro: {
        type: String,
        required: [true, "write something about to yourself"]
    },
    address: {
        type: String,
    },
    mobileNumber: {
        type: Number,
    }
})

const Profile = mongoose.model('profile', profileSchema);
export default Profile;