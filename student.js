const mongoose = require('mongoose');

const student = new mongoose.Schema({
    name: String,
    email: String
});

module.exports = mongoose.model('Student', student);