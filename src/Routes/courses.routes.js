const { Router } = require('express');
const { getAllCourses, createCourses, updateCourses } = require('../controllers/courses.controllers');
const router = Router();

//Get all course
/**
 * @openapi
 * /api/v1/courses:
 *   get:
 *     summary: optiene todos los usuarios
 *     tags: [courses]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 */

//POST user
/**
 * @openapi
 * /api/v1/courses:
 *   post:
 *     summary: Crea un nuevo curso
 *     tags: [courses]
 *     requestBody:
 *       description: To register a new course you need a title, description, instructor and categoriesId
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/register1"
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/users1"
 *
 */

//UPDATE user
/**
 * @openapi
 * /api/v1/courses/{id}:
 *   put:
 *     summary: Actualiza un curso
 *     tags: [courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         require: true
 *         schema: 
 *           type: integer
 *           minimum: 1
 *         description: este es el id del curso
 *     requestBody:
 *       description: Permite actualizar la descripcion del curso
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/registerUpdateCourse"
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/courseUpdate"
 *
 */

// optener todos los cursos
router.get('/courses', getAllCourses);

//crear un nuevo curso
router.post('/courses', createCourses);

//editar un curso
router.put('/courses/:id', updateCourses);

module.exports = router;