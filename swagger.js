
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options ={
    definition: {
        openapi:"3.0.0",
        info: {
            title: "Api Cursos",
            version: "1.0.0",
            description: "API para crear un aplicacion de cursos"
        }
    },
    //rutas y modelos de tablas a documentar 
    apis: [
        "./src/routes/users.routes.js",
        "./src/routes/courses.routes.js",
        "./src/routes/categories.routes.js",
        "./src/routes/videos.routes.js",
        "./src/routes/usersCourses.routes.js",
        "./src/models/users.models.js",
        "./src/models/courses.models.js",
        "./src/models/categories.models.js",
        "./src/models/videos.models.js",
        "./src/models/usersCourses.models.js"
    ]
}

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
    // manejador para la ruta de nuestro manejador
    app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    // podemos que esta disponible la info en formato json
    app.get("/api/v1/docs.json", (req, res) => {
        res.setHeader("ContentType", "application/json");
        res.send(swaggerSpec);
    });
    console.log(
        `Documentacion disponible en http://localhost:${port}/api/v1/docs`
    )
}

module.exports = swaggerDocs;
