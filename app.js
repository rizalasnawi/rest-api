const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const userRoute = require('./routes/userroutes');
const port = process.env.PORT || 3000;

require('dotenv').config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', userRoute);


app.listen(port, () => {
    console.log(`Listen to port ${port}`);
})