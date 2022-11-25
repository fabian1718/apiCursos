const { Router } = require('express');
const { createVideos, getAllVideos, deleteVideos } = require('../controllers/videos.controllers');
const router = Router();

//Get all Videos
/**
 * @openapi
 * /api/v1/videos:
 *   get:
 *     summary: optiene todos los videos
 *     tags: [videos]
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

//POST videos
/**
 * @openapi
 * /api/v1/videos:
 *   post:
 *     summary: Agrega un nuevo video
 *     tags: [videos]
 *     requestBody:
 *       description: To register a new video you need a title, url and course_id
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/registerVideo"
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
 *                     $ref: "#/components/schemas/video"
 *
 */

//DELETE video
/**
 * @openapi
 * /api/v1/videos/{id}:
 *   delete:
 *     summary: Elimina un video
 *     tags: [videos]
 *     parameters:
 *       - in: path
 *         name: id
 *         require: true
 *         schema: 
 *           type: integer
 *           minimum: 1
 *         description: este es el id del video a eliminar
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

//Optener todos los videos
router.get('/videos', getAllVideos);

//crear un videos
router.post('/videos', createVideos);

//crear un videos
router.delete('/videos/:id', deleteVideos);

module.exports = router;
