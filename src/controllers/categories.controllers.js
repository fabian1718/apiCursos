const CategoriesServices = require('../services/categories.services');

const getCategories = async (req, res) =>{
    try {
        const result = await CategoriesServices.getCategories();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
};

const createCategories = async (req, res) => {
   try {
    const newCategory = req.body;
    const result = await CategoriesServices.createCategories(newCategory);
    res.status(200).json(result);
   } catch (error) {
    console.log(error);
   }
};

const deleteCategories = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await CategoriesServices.deleteCategories(id);
        res.status(204).json(result);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getCategories,
    createCategories,
    deleteCategories
};