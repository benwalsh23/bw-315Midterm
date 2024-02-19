const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  department: { type: String, required: true },
  timeOfDay: { type: String, required: true },
  capacity: { type: Number, required: true },
  enrolledStudents: { type: [mongoose.Types.ObjectId], default: [] }
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;