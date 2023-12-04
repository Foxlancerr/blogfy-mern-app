
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/userRouter.js')
const app = express();

//mongoDB connection
require('./model/ConnectDB.js')();

//middleware which read the body data
app.use(express.json());
app.use(cors())


//middleware which can handle routes
app.use('/', router)

app.listen(3000, () => {
    console.log('listening on post 3000');
})