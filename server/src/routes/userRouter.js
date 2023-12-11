import express from "express"
import User from "../model/user.model.js"

const router = express.Router();








router.route('/signup').post(async (req, res) => {
    try {
        console.log(req.body);
        const { username, password, email } = req.body;

        const userPresent = await User.findOne({ email: email });
        if (userPresent) {
            res.json({ message: "user is already exist" })
            return
        }

        const newUser = await User.create({
            username,
            email,
            password
        })

        res.json({ "message": "New user created successfully" })
    } catch (err) {
        console.log(err.message);
    }


})


router.route('/signin').post(async (req, res) => {
    console.log(req.body);

    try {
        const userValid = await User.findOne({
            email: req.body.email,
        })

        console.log(userValid);
        if (!userValid) return res.status(404).json({ "message": "Not found the user login" })
        else res.json({ "message": "successfully login" })
    } catch (err) {
        console.log(err.message);
    }


})


export default router;