const { Router } = require('express');
const { getAllUsers, getUser, getUserCourses, 
    createUser, updateUser, deleteUser } = require('../Controllers/users.controllers');
const router = Router();

/**
 * @openapi
 * /api/v1/users:
 *   get:
 *     summary: optener todos los usuarios
 *     tags: [users]
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

/**
 * @openapi
 * /api/v1/users:
 *   post:
 *     summary: Register a new user into the app
 *     tags: [users]
 *     requestBody:
 *       description: To register a new user you need a firstname, lastname, email, phone and password
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/register"
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
 *                     $ref: "#/components/schemas/users"
 *
 */


// optener todos los usuarios
router.get('/users', getAllUsers);

// optener un usuario por su ID
router.get('/users/:id', getUser);

//Obtener a un usuario junto con los cursos donde esta suscrito 
router.get('/users/:id/courses', getUserCourses);

//crear un usuario
router.post('/users', createUser);

//Actualizar los usuarios
router.put('/users/:id', updateUser);

//Eliminar los usuarios
router.delete('/users/:id', deleteUser);

module.exports = router;