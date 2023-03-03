const routes = require("express").Router();

routes.use("/api/user", require("../controllers/userController"));
module.exports = routes;
