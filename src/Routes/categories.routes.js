const { Router } = require('express');
const { getCategories, createCategories, deleteCategories } = require('../controllers/categories.controllers');
const router = Router();

//Get all categories
/**
 * @openapi
 * /api/v1/categories:
 *   get:
 *     summary: optiene todos las categorias
 *     tags: [categories]
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

//POST categories
/**
 * @openapi
 * /api/v1/categories:
 *   post:
 *     summary: Agrega una nueva categoria
 *     tags: [categories]
 *     requestBody:
 *       description: To register a new category you need a name
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/registerCategory"
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
 *                     $ref: "#/components/schemas/category"
 *
 */

//DELETE categories
/**
 * @openapi
 * /api/v1/categories/{id}:
 *   delete:
 *     summary: Elimina una categoria
 *     tags: [categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         require: true
 *         schema: 
 *           type: integer
 *           minimum: 1
 *         description: este es el id de la categoria a eliminar
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

//Optener todas las categorias
router.get('/categories', getCategories);

//Crear una categoria
router.post('/categories', createCategories)

//eliminar categorias
router.delete('/categories/:id', deleteCategories);


module.exports = router;