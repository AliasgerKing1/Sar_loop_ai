require("../../config/Database");
const mongoose = require("mongoose");

const screenShots = mongoose.Schema({
    company : String,
    description : String,
    featured : String,
    quality : String,
    category : String,
    upload_date : Date,
    image : String
})

module.exports = mongoose.model("screenshot", screenShots);