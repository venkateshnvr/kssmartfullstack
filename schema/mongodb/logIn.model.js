const mongoose = require('mongoose');

const logIn = new mongoose.Schema({
    userName: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        trim: true,
        required: true
    }
});

module.exports = mongoose.model('logIn', logIn);