const express = require('express');
const router = express.Router();
const {
    getAllCourses,
    registerCourse,
    dropCourse,
    getRegisteredCourses
} = require('../controllers/courseController');

router.get('/courses', getAllCourses);
router.post('/register', registerCourse);
router.post('/drop', dropCourse);
router.get('/registered-courses/:studentId', getRegisteredCourses);

module.exports = router;