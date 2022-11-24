const VideoServices = require('../Services/videos.services');


const getAllVideos = async (req, res) =>{
    try {
        const result = await VideoServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

const createVideos = async (req, res) =>{
    try {
        const newVideo = req.body;
        const result = await VideoServices.createVideos(newVideo);
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
    }
}

const deleteVideos = async (req, res) =>{
    try {
        const { id } = req.params;
        const result = await VideoServices.deleteVideos(id);
        res.status(204).json(result);
    } catch (error) {
        
    }
};


module.exports = {
    getAllVideos,
    createVideos,
    deleteVideos,
}