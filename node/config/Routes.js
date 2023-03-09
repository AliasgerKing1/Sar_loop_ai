const routes = require("express").Router();

routes.use("/api/user", require("../controllers/userController"));
routes.use("/api/admin", require("../controllers/Admin/AdminController"));
routes.use("/api/admin/screenshot", require("../controllers/Admin/ScreenShotController"));

module.exports = routes