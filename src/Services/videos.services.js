const Videos = require("../models/videos.models");

class VideoServices {

    static async getAll() {
        try {
            const result = await Videos.findAll({
                attributes: ["id", "title", "url"
            ]}); 
            return result;
        } catch (error) {
            throw(error);
        }
    }

    static async createVideos(newVideo) {
        try {
            const result = await Videos.create(newVideo); 
            return result;
        } catch (error) {
            throw(error);
        }
    }

    static async deleteVideos (id){
        try {
            const result = await Videos.destroy({where: {id}});
        } catch (error) {
            
        }
    }

}

module.exports = VideoServices;
