'use strict'
// pakages
const express = require('express');
const path = require("path");
const bodyParser = require('body-parser')
const cors = require('cors');

//custom modules
const connectDb = require("./mongodb.connection.js");
connectDb();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

//routes
app.use('/api', require('./apis/employee.api'));
app.use('/post', require('./apis/logIn.api'));

const port = process.env.PORT || 4001;

app.use(express.static(path.join(__dirname, 'client1/dist')));
app.get('/*', (req, res) => {
    // if(process.env.NODE_ENV === production)
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
    return console.log(`connected port ${port}`)
})
