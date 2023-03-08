require("../../config/Database");
const mongoose = require("mongoose");

const Admin = mongoose.Schema({
    username : String,
    name :  String,
    password : String,
    rights: String,
    image : String
})

module.exports = mongoose.model("admin", Admin);