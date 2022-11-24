const { Router } = require('express');
const { createVideos, getAllVideos, deleteVideos } = require('../controllers/videos.controllers');
const router = Router();


//Optener todos los videos
router.get('/videos', getAllVideos);

//crear un videos
router.post('/videos', createVideos);

//crear un videos
router.delete('/videos/:id', deleteVideos);

module.exports = router;
