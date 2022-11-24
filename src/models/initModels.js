const Categories = require('./categories.models');
const Courses = require('./courses.models');
const User_courses = require('./userCourses.model');
const Users = require('./users.models');
const Videos = require('./videos.models');


const initModels = ()=> {
    //relacion uno a muchos
    Videos.belongsTo(Courses, { as: 'courses', foreignKey: 'course_id'}); // un video pertenece a un curso
    Courses.hasMany(Videos, { as: 'videos', foreignKey: 'course_id',}); // un curso tiene muchos videos
    //relacion uno a muchos
    Courses.belongsTo(Categories, { as: 'categories', foreignKey: 'categories_id'});
    Categories.hasMany(Courses, { as: 'courses', foreignKey: 'categories_id',}); // un curso tiene muchos videos
    
    //relacion de muchos a muchos
    User_courses.belongsTo(Users, {as: 'users', foreignKey: 'user_id'});
    Users.hasMany(User_courses, {as: 'courses', foreignKey: 'user_id'});

    User_courses.belongsTo(Courses, {as: 'courses', foreignKey: 'course_id'});
    Courses.hasMany(User_courses, {as: 'users', foreignKey: 'user_id'});

};

module.exports = initModels;