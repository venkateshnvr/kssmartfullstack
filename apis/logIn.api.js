const express = require('express');
const logIn = require('./../schema/mongodb/logIn.model');
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/register', async (req, res) => {
    const password = await bcrypt.hash(req.body.password, 10)
    const { userName, fullName } = req.body;
    const logInObject = { userName, password, fullName };
    const logInSave = new logIn(logInObject);
    logInSave.save()
    .then(() => {
        res.status(201).json({
            message: "save login data"
        })
    })
    .catch(err => {
        res.status(400).json({
            err: err
        })
    })
    res.json(logInSave);
})

router.post('/login', async (req, res) => {
    logIn.find({userName: req.body.userName})
    .then(data => {
        let compare = bcrypt.compare(req.body.password, data.password)
        if(compare) {
            res.status(200).json(data)
        }
    })
    .catch(err => res.status(400).send("userName and password wrong"))
})

module.exports = router;



