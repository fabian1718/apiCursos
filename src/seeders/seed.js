const Categories = require('../models/categories.models');
const Courses = require('../models/courses.models');
const User_courses = require('../models/userCourses.model');
const Users = require('../models/users.models');
const Videos = require('../models/videos.models');
const db = require('../utils/database');
const initModels = require('../models/initModels');

initModels();

const users = [
    { firstName: "Fabian", lastName: 'Gonzalez', email: "fabian@gmail.com", password: "1234" },
    { firstName: "Alvis", lastName: 'Echeverria', email: "alvis@gmail.com", password: "1234" },
    { firstName: "Karla", lastName: 'Diaz', email: "karla@gmail.com", password: "1234" },
  ];

  const categories = [
    { name: "programacion" }, // 1
    { name: "diseño" }, // 2
    { name: "ingles" }, // 3
  ];

  const courses = [
    {
      title: "Fundamentos de programacion",
      description: "Instrucciones en el terminal, html, css, javascript",
      instructor: "Ian Rosas",
      categoriesId: 1,
    },
    {
      title: "Master Renders",
      description: "Diseño en scketUp y renderizacion en Vray",
      instructor: "Robson Jackosen",
      categoriesId: 2,
    },
    {
      title: "Ingles Basico",
      instructor: "Charlie Gatcia",
      description: "El curso inicia con conceptos basicos del verbo ToBe",
      categoriesId: 3,
    },
  ];

  const videos = [
    { title: "Comando en la terminal", url: "url1", course_id: 1 },
    { title: "ScketchUp Basico", url: "url2", course_id: 2 },
    { title: "Verbo ToBe", url: "url2", course_id: 3 },
  ];

  const user_courses = [
    {userId: 1, courseId: 1,},
    {userId: 1, courseId: 2,},
    {userId: 1, courseId: 3,},
    {userId: 2, courseId: 2,},
    {userId: 2, courseId: 3,},
    {userId: 3, courseId: 3,},
    {userId: 3, courseId: 1,},
  ];

  db.sync({ force: true })
  .then(() => {
		console.log("Iniciando la plantación de Información");
		// información de usuarios
		users.forEach((user) => Users.create(user));
		setTimeout(() => {
			categories.forEach((categorie) => Categories.create(categorie));
		}, 100);
        setTimeout(() => {
			courses.forEach((course) => Courses.create(course));
		}, 200);
        setTimeout(() => {
			videos.forEach((video) => Videos.create(video));
		}, 300);
        setTimeout(() => {
			user_courses.forEach((uc) => User_courses.create(uc));
		}, 400);
	})
	.catch((error) => console.log(error));