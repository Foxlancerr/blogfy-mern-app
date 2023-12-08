import express from 'express';
import Profile from "../model/profile.model.js"

const profileRouter = express.Router();

profileRouter.post('/profile', async (req, res) => {
    const { intro, address } = req.body;
    const profileSet = await Profile.create({
        intro: intro,
        address: address
    })
    res.send(profileSet)
})

export default profileRouter;