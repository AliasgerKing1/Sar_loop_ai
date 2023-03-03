const routes = require("express").Router();
const User = require("../models/users/User");
const sha1 = require("sha1")

routes.post("/", async(req,res)=> {
try {
    delete req.body.confPass;
    req.body.password = sha1(req.body.password);
    const user = await User.create({ ...req.body, password: req.body.password});
    res.send({ success: true, data: user });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, error: error.message });
  }
});

routes.post("/loginauth", (req,res)=> {
    console.log(req.body)
})

module.exports = routes;