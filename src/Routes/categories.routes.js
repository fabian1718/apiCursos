const { Router } = require('express');
const { getCategories, createCategories, deleteCategories } = require('../controllers/categories.controllers');
const router = Router();

//Optener todas las categorias
router.get('/categories', getCategories);

//Crear una categoria
router.post('/categories', createCategories)

//eliminar categorias
router.delete('/categories/:id', deleteCategories);


module.exports = router;