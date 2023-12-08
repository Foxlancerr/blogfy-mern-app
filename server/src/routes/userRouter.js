import express from "express"
import User from "../model/user.model.js"

const router = express.Router();

router.route('/signup')
    .post(async (req, res) => {
        const { username, password, email } = req.body;

        const userOne = await User.create({ username, password, email });
        console.log(userOne)

        // if ([username, password, email].some(val => val?.trim() === undefined)) {
        //     res.send("no data is entered");
        // }

    })





// router.route('/signup').post(async (req, res) => {
//     console.log(req.body);
//     console.log(req.body);
//     console.log(req.body);

//     try {
//         User.create({
//             username: req.body.username,
//             email: req.body.email,
//             password: req.body.password,
//         })
//     } catch (err) {
//         console.log(err.message);
//     }

//     res.json({ "message": "New user created successfully" })
// })


// router.route('/login').post(async (req, res) => {
//     console.log(req.body);

//     try {
//         const userValid = await User.findOne({
//             email: req.body.email,
//         })

//         console.log(userValid);
//         if (!userValid) return res.status(404).json({ "message": "Not found the user login" })
//         else res.json({ "message": "successfully login" })
//     } catch (err) {
//         console.log(err.message);
//     }


// })


export default router;