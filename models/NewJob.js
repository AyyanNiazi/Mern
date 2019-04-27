const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const newJob = new Schema({
    title: {
        type: String,
        required: true
    },
    salary:{
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    descrip:{
        type: String,
        required: true
    },
    allounce: {
        type: String,
        required: true
    },
})


module.exports = NewJob = mongoose.model("newJob", newJob)