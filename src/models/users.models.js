const db = require("../utils/database");
const { DataTypes } = require("sequelize");

//para el GET y para el POST
/**
 * @openapi
 * components:
 *   schemas:
 *     users:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *           example: Fabian
 *         lastName:
 *           type: string
 *           example: Gonzalez
 *         email:
 *           type: string
 *           example: Fabian@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *     register:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *           example: Fabian
 *         lastName:
 *           type: string
 *           example: Gonzalez
 *         email:
 *           type: string
 *           example: fabian@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     usersUpdate:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *           example: Virginia
 *         lastName:
 *           type: string
 *           example: Barco
 *         email:
 *           type: string
 *           example: virginia@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *     registerUpdate:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *           example: Carlos
 *         password:
 *           type: string
 *           example: 54321
 */

const Users = db.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "first_name",
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "last_name",
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Users;
