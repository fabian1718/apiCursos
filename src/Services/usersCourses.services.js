const User_courses = require("../models/userCourses.model");

class UserCoursesService {

    static async addCourseToUser(newRelation){
        try {
            const result = await User_courses.create(newRelation);
            return result;
        } catch (error) {
            throw (error);
        }
    }

}

module.exports = UserCoursesService;