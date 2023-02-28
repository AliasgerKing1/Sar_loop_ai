require("../../config/Database");
const mongoose = require("mongoose");

const User = mongoose.Schema({
    fname : {
        type : String
    },
    lname : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    }
})

module.exports = mongoose.model("user", User);