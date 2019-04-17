const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

//get input validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

//get user model
const User = require('../../models/User');


router.post("/register", (req,res) => {
    //form validation
    const {errors, isValid} = validateRegisterInput(req.body);
    
    //check validation others
    if(!isValid){
        return res.status(400).json(errors)
    }

    User.findOne({ email: req.body.email}).then((user) => {
        if(user){
            return res.status(400).json({email: "Email already exist "})
        }

        const newUser = new User({
            name : req.body.name,
            email: req.body.email,
            password: req.body.password,

        });

        // Password hashes for encrypting pass
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser.save()
                .then(user => res.json(user))
                .catch(err => console.log("error raised from genrating hashes for new user users.js file: ", err))
            })
        })

    })
})