const db = require('../utils/database');
const { DataTypes } = require('sequelize');

//para el GET y para el POST
/**
 * @openapi
 * components:
 *   schemas:
 *     video:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           example: reading
 *         url:
 *           type: string
 *           example: url15
 *         course_id:
 *           type: integer
 *           example: 1
 *     registerVideo:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           example: reading
 *         url:
 *           type: string
 *           example: url15
 *         course_id:
 *           type: integer
 *           example: 1
 */

// para el POST del video al usuario
/**
 * @openapi
 * components:
 *   schemas:
 *     courseToUser:
 *       type: object
 *       properties:
 *         userId:
 *           type: integer
 *           example: 1
 *         courseId:
 *           type: integer
 *           example: 4
 *     registerVideo12:
 *       type: object
 *       properties:
 *         userId:
 *           type: integer
 *           example: 1
 *         courseId:
 *           type: integer
 *           example: 4
 */

const Videos = db.define("videos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    courseId: {
        type: DataTypes.INTEGER,
        // allowNull: false,
        // references:{
        //     key: "id",
        //     model: "courses",
        // },
        field: 'course_id',
    },
    
});

module.exports = Videos;