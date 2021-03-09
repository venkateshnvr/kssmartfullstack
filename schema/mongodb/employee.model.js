const mongoose = require('mongoose');

const employee = new mongoose.Schema({
    employeeName: {
        type: String,
        trim: true,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female"]
    },
    degination: {
        type: String,
        trim: true,
        required: true
    },
    city: {
        type: String,
        trim: true,
        required: true
    },
    admin: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('employee', employee)