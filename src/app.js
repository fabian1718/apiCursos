const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./utils/database");
const handleError = require("./middlewares/error.middleware");
const initModels = require("./models/initModels");
const Users = require("./models/users.models");
const userRoutes = require('./Routes/users.routes');
const courseRoutes = require("./Routes/courses.routes");
const videoRoutes = require("./Routes/videos.routes");
const categorieRoutes = require("./Routes/categories.routes");
const userCourseRouters = require("./Routes/usersCourses.routes");
const { application } = require("express");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

  initModels();

db.sync({ force: false }) //force: true sobreescribe las tablas; vacio no hace nada si ya xisten
  .then(() => console.log("Base de datos sincronizada"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  console.log("Bienvenido al server");
});

app.use('/api/v1', userRoutes);

app.use('/api/v1/', courseRoutes);

app.use('/api/v1/', videoRoutes);

app.use('/api/v1/', categorieRoutes);

app.use('/api/v1/', userCourseRouters);

app.use(handleError);

module.exports = app;
