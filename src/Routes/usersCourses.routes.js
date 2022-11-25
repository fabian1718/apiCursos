const { Router } = require('express');
const { addCourseToUser } = require('../controllers/usersCourses.controllers');
const router = Router();

//POST courseToUser
/**
 * @openapi
 * /api/v1/userscourses:
 *   post:
 *     summary: Agrega un video a un usuario
 *     tags: [courseToUser]
 *     requestBody:
 *       description: To register a new video you need a title, userId and courseId
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/registerVideo12"
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
 *                     $ref: "#/components/schemas/courseToUser"
 *
 */

//Agregar cursos a un usuario
router.post('/userscourses', addCourseToUser);


module.exports = router;