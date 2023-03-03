require("../../config/Database");
const mongoose = require("mongoose");

const User = mongoose.Schema({
    username : String,
    email :  String,
    password : String
})

module.exports = mongoose.model("user", User);