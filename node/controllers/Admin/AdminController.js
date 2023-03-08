const routes = require("express").Router();
const Admin = require("../../models/admin/Admin");
const User = require("../../models/users/User");
const sha1 = require("sha1")
const jwt = require("jsonwebtoken")

routes.post("/loginauth", async(req,res)=> {
  let username = req.body.username;
  let password = sha1(req.body.password);
  try {
    const result = await Admin.find({ username: username });
    if (result.length == 1) {
      if (result[0].password == password) {
        let obj = {id : result[0]._id, username : result[0].username};
        let Admintoken = jwt.sign(obj , "Aliasger web");
        res.send({success : true, status : 200, Admintoken : Admintoken});
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

routes.get("/", async(req,res)=> {
  try {
    const result = await Admin.find({});
    res.send(result)
  }
  catch (error){
console.log(error)
  }
})

routes.get("/user", async(req,res)=> {
try {
  const result = await User.find({});

  res.send(result)
}
catch (error) {
  console.error(error);
}
})
routes.get("/total", async(req,res)=> {
try {
  const result = await User.count();
  res.send({total : result})
}
catch (error) {
  console.error(error);
}
})

module.exports = routes;