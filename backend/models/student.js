const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    studentId: String // Changed to String type to match the provided data
});

module.exports = mongoose.model('Student', studentSchema);