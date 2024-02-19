const Course = require('../models/course');


exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
 
exports.registerCourse = async (req, res) => {
    const { studentId, courseId } = req.body;
    try {
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        if (course.enrolledStudents.includes(studentId)) {
            return res.status(400).json({ message: 'Student already registered for this course' });
        }
        course.enrolledStudents.push(studentId);
        await course.save();
        res.status(201).json({ message: 'Course registration successful' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.dropCourse = async (req, res) => {
    const { studentId, courseId } = req.body;
    try {
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        const index = course.enrolledStudents.indexOf(studentId);
        if (index === -1) {
            return res.status(400).json({ message: 'Student is not registered for this course' });
        }
        course.enrolledStudents.splice(index, 1);
        await course.save();
        res.json({ message: 'Course dropped successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.getRegisteredCourses = async (req, res) => {
    const { studentId } = req.params;
    try {
        const courses = await Course.find({ enrolledStudents: studentId });
        res.json(courses);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};