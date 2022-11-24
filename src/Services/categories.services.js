const Categories = require('../models/categories.models');

class CategoriesServices {

    static async getCategories() {
        try {
            const result = await Categories.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async createCategories(newCategory) {
        try {
            const result = await Categories.create(newCategory);
            return result;
        } catch (error) {
            throw (error);
        }
    }

    static async deleteCategories(id){
        try {
            const result = await Categories.destroy({where: {id}});
            return result;
        } catch (error) {
            throw(error);
        }
    }

}

module.exports = CategoriesServices;