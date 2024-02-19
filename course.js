const mongoose = require('mongoose');

const course = new mongoose.Schema({
    courseName: String,
    department: String,
    timeOfDay: String,
    capacity: Number,
    enrolledStudents: [mongoose.Types.ObjectId]
});

module.exports = mongoose.model('Course', course);