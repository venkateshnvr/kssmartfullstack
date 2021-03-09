'use strict'
const express = require('express');
const employee = require('./../schema/mongodb/employee.model')
const router = express.Router();

router.post('/employee', (req, res) => {
    const { employeeName, gender, degination, city, admin} = req.body;
    let employeeObject = { employeeName, gender, degination, city, admin }
    // employeeObject.employeeName = employeeName;
    // employeeObject.gender = gender;
    // employeeObject.degination = degination;
    // employeeObject.admin = admin;
    // employeeName.city = city
    const employeeSave = new employee(employeeObject)
    employeeSave.save();
    res.json(employeeSave)
})

router.get('/employee/:admin', (req, res) => {
    employee.find({admin: req.params.admin})
    .then(data => res.status(200).send(data))
    .catch(err => res.send("data not found 400"))
})

router.delete('/employee/:id', (req, res) => {
    employee.deleteOne({_id: req.params.id})
    .then(() => res.send("delete one item"))
    .catch(() => res.send("data not found 400"))
})

router.put('/employee/:id', (req, res) => {
    const employee = new employee({
        _id: req.params.id,

    })
    employee.updateOne({_id: req.params.id})
})

module.exports = router;