const express = require('express');
const User = require("../model/userdSchema")

const router = express.Router();

router.route('/')
    .get(async (req, res) => {
        res.send("hello world");
    })

router.route('/signup')
    .post(async (req, res) => {
        console.log(req.body);

        try {
            User.create({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
            })
        } catch (err) {
            console.log(err.message);
        }

        res.json({"message": "New user created successfully"})
    })
router.route('/login')
    .post(async (req, res) => {
        console.log(req.body);

        try {
            const userValid = await User.findOne({
                email: req.body.email,
            })

            console.log(userValid);
            if (userValid == null) return res.status(404).json({"message": "successfully login"})
            res.json({"message": "successfully login"})
        } catch (err) {
            console.log(err.message);
        }


    })


module.exports = router;