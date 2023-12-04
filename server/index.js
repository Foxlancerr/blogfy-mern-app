const express = require('express');
const cors = require('cors');
require('./model/ConnectDB.js')();

const app = express();
app.use(cors())
const PORT = 3000;

// port listening
app.listen(PORT, () => {
    console.log("connected to port " + PORT);
})
