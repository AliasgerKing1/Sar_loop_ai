const routes = require("express").Router();
const screenShot = require("../../models/admin/screenShot")
const sha1 = require("sha1")
const jwt = require("jsonwebtoken")
const randstr = require("random-string");
const path = require("path");

routes.post("/", async(req, res) => {
  let body = JSON.parse(req.body.data);
  let image = req.files.files;
  let obj = []; // create an empty array outside the map() function
  image.map((x,i)=> {
    let random_string = randstr({ length: 100 });
    let original_name = image[i].name;
    let array = original_name.split(".");
    let extension = array[array.length - 1];
    let new_name = random_string + "." + extension;
    body.image = new_name;
    image[i].mv(path.resolve() + "/assets/screenShots/" + new_name, async(error) => {
      try {
        const result = await screenShot.create(body);
        obj.push(result); // push the result object into the array
        if (obj.length === image.length) { // check if all images are processed
          res.send(obj); // send the array in the response
        }
      }
      catch (error){
        console.log(error)
      }
    });
  });
});

module.exports = routes;
