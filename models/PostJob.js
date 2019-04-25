const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const postJob = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    education: {
        type: String,
        required: true
    },
    socialMediaProfile:{
        type: String,
        
    },
    workingProfile:{
        type: String,
        
    },
    register_date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Posted = mongoose.model("posted", postJob);
    
