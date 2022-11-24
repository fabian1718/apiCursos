const { Router } = require('express');
const { getAllCourses, createCourses, updateCourses } = require('../controllers/courses.controllers');
const router = Router();

// optener todos los cursos
router.get('/courses', getAllCourses);

//crear un nuevo curso
router.post('/courses', createCourses);

//editar un curso
router.put('/courses/:id', updateCourses);

module.exports = router;