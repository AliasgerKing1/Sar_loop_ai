const routes = require("express").Router();

routes.use("/api/user", require("../controllers/userController"));
routes.use("/api/admin", require("../controllers/Admin/AdminController"));

module.exports = routes