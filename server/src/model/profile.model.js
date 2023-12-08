import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    intro: {
        type: String,
        required: true
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