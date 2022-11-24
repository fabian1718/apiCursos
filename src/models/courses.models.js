const db = require('../utils/database');
const { DataTypes } = require('sequelize');

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