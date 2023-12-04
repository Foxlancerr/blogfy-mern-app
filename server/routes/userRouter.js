const express = require('express');
const User = require("../model/userdSchema")

const router = express.Router();

router.route('/')
    .get(async (req, res) => {
        res.send("hello world");
    })


module.exports = router;