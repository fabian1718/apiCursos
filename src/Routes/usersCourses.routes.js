const { Router } = require('express');
const { addCourseToUser } = require('../controllers/usersCourses.controllers');
const router = Router();

//Agregar cursos a un usuario
router.post('/userscourses', addCourseToUser);


module.exports = router;