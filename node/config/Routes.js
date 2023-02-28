const routes = require("express").Router();

routes.use("/user", require("../controllers/userController"));
module.exports = routes;
