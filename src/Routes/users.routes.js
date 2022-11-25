const { Router } = require('express');
const { getAllUsers, getUser, getUserCourses, 
    createUser, updateUser, deleteUser } = require('../Controllers/users.controllers');
const router = Router();

//Get all users
/**
 * @openapi
 * /api/v1/users:
 *   get:
 *     summary: optiene todos los usuarios
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

//Get one user
/**
 * @openapi
 * /api/v1/users/{id}:
 *   get:
 *     summary: optiene un usuario por id
 *     tags: [users]
 *     parameters:
 *       - in: path
 *         name: id
 *         require: true
 *         schema: 
 *           type: integer
 *           minimum: 1
 *         description: este es el id del ususario a optener
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
 * /api/v1/users:
 *   post:
 *     summary: Ingresa un nuevo usuario a la DB
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


//UPDATE user
/**
 * @openapi
 * /api/v1/users/{id}:
 *   put:
 *     summary: Actualiza la informacion de un usuario
 *     tags: [users]
 *     parameters:
 *       - in: path
 *         name: id
 *         require: true
 *         schema: 
 *           type: integer
 *           minimum: 1
 *         description: este es el id del ususario
 *     requestBody:
 *       description: Permite actualizar nombre y password
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/registerUpdate"
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
 *                     $ref: "#/components/schemas/usersUpdate"
 *
 */

//DELETE user
/**
 * @openapi
 * /api/v1/users/{id}:
 *   delete:
 *     summary: Elimina un usuario
 *     tags: [users]
 *     parameters:
 *       - in: path
 *         name: id
 *         require: true
 *         schema: 
 *           type: integer
 *           minimum: 1
 *         description: este es el id del ususario a eliminar
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