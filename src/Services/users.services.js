const Courses = require("../models/courses.models");
const User_courses = require("../models/userCourses.model");
const Users = require("../models/users.models")

class UserServices {
    static async getAll() {
        try {
            const result = await Users.findAll({attributes: ['id', 'firstName', 'lastName', 'email']}); // select * users
            return result;
        } catch (error) {
            throw(error);
        }
    }

    static async getUser(id){
        try {
            const result = await Users.findByPk(id, {attributes: ['id', 'firstName', 'lastName', 'email']}); // select * users
            return result;
        } catch (error) {
            throw(error);
        }
    }

    static async getUserJoinCourses(id){
        try {
            const result = await Users.findOne({
                where: { id },
                attributes: ['id', 'firstName', 'lastName', 'email'],
                include: {
                    model: User_courses,
                    as: "courses",
                    attributes: ["id"],
                    include: {
                        model: Courses,
                        as: "courses",
                        attributes: ["title"],
                    },
                },
            }); 
            return result;
        } catch (error) {
            throw(error);
        }
    }

    static async createUser(newUser) {
        try {
            const result = await Users.create(newUser); 
            return result;
        } catch (error) {
            throw(error);
        }
    }

    static async updateUser(bodyUser, id) {
        try {
            const result = await Users.update(bodyUser, {
                where: { id },
            }); 
            return result;
        } catch (error) {
            throw(error);
        }
    }

    static async deleteUser(id) {
        try {
            const result = await Users.destroy({where: { id }}); 
            return result;
        } catch (error) {
            throw(error);
        }
    }
}

module.exports = UserServices;


