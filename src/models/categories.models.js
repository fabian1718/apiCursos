const db = require('../utils/database');
const { DataTypes } = require('sequelize');

/**
 * @openapi
 * components:
 *   schemas:
 *     category:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: finanzas
 *     registerCategory:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: finanzas
 */

const Categories = db.define("categories", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
});

module.exports = Categories;