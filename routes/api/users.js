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



//login route

router.post("/login", (req,res) => {

    const {errors, isValid} = validateRegisterInput(req.body);

    //validations 
    if(!isValid) {
        return res.status(400).json(errors)
    }
    const email = req.body.email;
    const password = req.body.password;

    //user find by email
    User.findOne({email }).then(user => {
        //either user exist or not check it
        if(!user){
            return res.status(400).json({emailnotfound: "email not found" })
        }

        //check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if(isMatch){
                //user found now create jwt payload
                const payload = {
                    id: user.id,
                    name: user.name
                }

                //sign token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 31556926 // this number is year in seconds
                    },
                    (err,token) => {
                        res.json({
                            success: true,
                            token: "Bearer" + token
                        });

                    }
                );
            }
            else{
                return res
                .status(400)
                .json({passwordincorrect: "password incorrect "});

            }
        })
    })
})


module.exports = router;