const express = require('express');
const logIn = require('./../schema/mongodb/logIn.model');
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/login', async (req, res) => {
    const password = await bcrypt.hash(req.body.password, 10)
    const { userName, fullName } = req.body;
    const logInObject = { userName, password, fullName };
    const logInSave = new logIn(logInObject);
    logInSave.save()
    // .catch(err => console.log(err))
    res.json(logInSave);
})

module.exports = router



