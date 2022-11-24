const CourseServices = require("../Services/courses.services");

const getAllCourses = async (req, res) =>{
    try {
        const result = await CourseServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

const createCourses = async (req, res) =>{
    try {
        const newCourse = req.body;
        const result = await CourseServices.createCourses(newCourse);
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
    }
}

const updateCourses = async (req, res) =>{
    try {
        const {id} = req.params;
        const bodyCourse = req.body;
        const result = await CourseServices.updateCourses(bodyCourse, id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllCourses,
    createCourses,
    createCourses,
    updateCourses
}