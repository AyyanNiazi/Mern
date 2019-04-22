const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const config = require('config');
//get input validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

//get user model
const User = require('../../models/User');





//login route

router.post("/login", (req,res) => {

    const {email,password} = req.body;

    //validations 
    if(!name || !password) {
        return res.status(400).json({message: "User didn't found"});
    }
    // const email = email;
    // const password = password;

    //user find by email
    User.findOne({email }).then(user => {
        //either user exist or not check it
        if(!user){
            return res.status(400).json({emailnotfound: "email not found" })
        }

        //check password
        bcrypt.compare(password, user.password).then(isMatch => { //here we compare coming data into existing data
            if(isMatch){

                jwt.sign( //its need three things for complete its signature on the behalf of jwt
                    {id: user.id,}, //here is 
                    config.get('secretOrKey'),// here is ecret key
                    {expiresIn: 3600},// here is time when token will expires
                     (err,token) => {
                         if(err) throw err;
                         res.json({
                             token, // save user with special token which is verified with special sign
                             user : {
                             id:user.id,
                             name: user.name,
                             email: user.email,
                     } })
                     }    
                )
                
                //user found now create jwt payload
                // const payload = {
                //     id: user.id,
                //     name: user.name
                // }

                // //sign token
                // jwt.sign(
                //     payload,
                //     config.get('secretOrKey'),
                //     {
                //         expiresIn: 31556926 // this number is year in seconds
                //     },
                //     (err,token) => {
                //         res.json({
                //             success: true,
                //             token: "Bearer" + token
                //         });

                //     }
                // );
            }
            else{
                return res
                .status(400).json({message: "password  incorrect "});

            }
        })
    })
})


module.exports = router;