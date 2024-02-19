const express = require('express');
const router = express.Router();
const {
    getAllCourses,
    registerCourse,
    dropCourse,
    getRegisteredCourses
} = require('../controllers/courseController');

router.get('/api/courses', getAllCourses);
router.post('/api/register', registerCourse);
router.post('/api/drop', dropCourse);
router.get('/api/registered-courses/:studentId', getRegisteredCourses);

module.exports = router;