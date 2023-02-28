const routes = require("express").Router();
const User = require("../models/users/User");

routes.post("/", (req,res)=> {
    console.log(req.body)
    return
    User.create(req.body, (error,result)=> {
        res.send({success : true, status : 200});
    })
})
routes.post("/loginauth", (req,res)=> {
    console.log(req.body)
})

module.exports = routes;