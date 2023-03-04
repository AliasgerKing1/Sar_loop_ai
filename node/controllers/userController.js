const routes = require("express").Router();
const User = require("../models/users/User");
const sha1 = require("sha1")
const jwt = require("jsonwebtoken")

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

routes.post("/loginauth", async(req,res)=> {
  let email = req.body.email;
  let password = sha1(req.body.password);

  try {
    const result = await User.find({ email: email });

    if (result.length == 1) {
      if (result[0].password == password) {
        let obj = {id : result[0]._id, email : result[0].email};
        let token = jwt.sign(obj , "Aliasger web");
        res.send({success : true, status : 200, token : token});
      } else {
        res.send({success : false,status: 401, errType : 2});
      }
    } else {
      res.send({success : false,status: 401, errType : 1});
    }
  } catch (error) {
    console.error(error);
    res.send({ success: false, status: 500, errType: 3 });
  }
})


routes.delete("/" , async(req,res)=> {
  try {
    const error = await  User.deleteMany({});
      res.send({success : true})
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, error: error.message });
  }
})

module.exports = routes;