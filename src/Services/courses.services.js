const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");

class CourseServices {
    static async getAll() {
        try {
            const result = await Courses.findAll({
                attributes: ["id", "title", "description", "instructor"],
                include: {
                    model: Categories,
                    as: "categories",
                    attributes: ["name"],
                },
                
                // include: {
                //     model: Videos,
                //     as: "videos",
                //     attributes: ["title", "url"],
                // },

            }); // select * courses
            return result;
        } catch (error) {
            throw(error);
        }
    }

    static async createCourses(newCourse) {
        try {
            const result = await Courses.create(newCourse); 
            return result;
        } catch (error) {
            throw(error);
        }
    }

    static async updateCourses(bodyCourse, id) {
        try {
            const result = await Courses.update(bodyCourse, {
                where: { id },
            }); 
            return result;
        } catch (error) {
            throw(error);
        }
    }


}

module.exports = CourseServices;