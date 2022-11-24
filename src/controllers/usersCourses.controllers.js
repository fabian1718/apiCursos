const UserCoursesService = require('../services/usersCourses.services');

const addCourseToUser = async (req, res) => {
    try {
        const newRelation = req.body;
        const result = await UserCoursesService.addCourseToUser(newRelation);
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    addCourseToUser,
}