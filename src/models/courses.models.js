const db = require('../utils/database');
const { DataTypes } = require('sequelize');

/**
 * @openapi
 * components:
 *   schemas:
 *     users:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           example: Frond End
 *         description:
 *           type: string
 *           example: Aplicaciones web con react
 *        instructor:
 *           type: string
 *           example: Andres Mendoza
 *         categoriesId:
 *           type: string
 *           example: 1
 *     registerCourses:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           example: Frond End
 *         description:
 *           type: string
 *           example: Aplicaciones web con react
 *         instructor:
 *           type: string
 *           example: Andres Mendoza
 *         categoriesId:
 *           type: integer
 *           example: 1
 */


/**
 * @openapi
 * components:
 *   schemas:
 *     courseUpdate:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           example: Frond End
 *         description:
 *           type: string
 *           example: Aplicaciones web con react
 *         instructor:
 *           type: string
 *           example: Andres Mendoza
 *         categoriesId:
 *           type: integer
 *           example: 1
 *     registerUpdateCourse:
 *       type: object
 *       properties:
 *         description:
 *           type: string
 *           example: Aplicaciones web con react
 */

const Courses = db.define("courses", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    instructor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    categoriesId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'categories_id',
    },
});

module.exports = Courses;