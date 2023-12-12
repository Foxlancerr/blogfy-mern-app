import express from "express"
import User from "../model/user.model.js"
import { generateAccessToken } from "../utils/accessToken.js";
// import { decrptPassword, hashedPassward } from "../utils/passwordHashed.js";

const router = express.Router();

router.route('/signup').post(async (req, res) => {
    try {
        console.log(req.body);
        const { username, password, email } = req.body;

        if (username.length === 0) {
            res.json({ message: "username is required" })
            return
        }
        if (email.length === 0) {
            res.json({ message: "email is required" })
            return
        }
        if (password.length === 0) {
            res.json({ message: "password is required" })
            return
        }


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

        res.json({ message: "New user created successfully" })
    } catch (error) {
        console.log(error.message);
        res.json({ message: error.message })
    }


})


router.route('/signin')
    .post(async (req, res) => {
        const { email, password } = req.body;
        // res.json(req.body)

        if (email.length === 0) {
            res.json({ message: "email is required" })
            return
        }
        if (password.length === 0) {
            res.json({ message: "password is required" })
            return
        }

        try {
            const userValid = await User.findOne({
                email: email
            })

            console.log(userValid);
            if (!userValid) {
                return res.status(404).json({ message: "No User is found with this Email !" })
            }

            const passwordAuth = await userValid.isPasswordCorrect(req.body.password)
            if (!passwordAuth) {
                return res.status(404).json({ "message": "password is incorrect" })
            }

            const token = generateAccessToken(userValid._id, userValid.email, userValid.username)

            res.json({ "message": "user is successfully Login", token })
        } catch (err) {
            res.json({ "message": err.message })
        }


    })


export default router;