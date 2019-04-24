const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require('config');
const auth = require("../../customMiddleware/auth")
//get input validation

//get user model
const User = require('../../models/User');


//login route

router.post("/", (req,res) => {

    const {email,password} = req.body;
    console.log(email,password,"login sy uper wala")
    //validations 
    if(!email || !password) {
        return res.status(400).json({msg: "User didn't found"});
    }
    // const email = email;

    // const password = password;
console.log(email,"login sy");
    //user find by email
    User.findOne({email }).then(user => {
        //either user exist or not check it
        if(!user){
            return res.status(400).json({emailnotfound: "email not found" })
        }
        console.log(user)
        //check password
        bcrypt.compare(password, user.password).then(isMatch => { //here we compare coming data into existing data
           console.log("login server sy ", User.password)
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

//user 
// router.get('/user', auth, (req,res) => {
//     User.findById(req.user.id).select("-password")
//     .then(user => res.json(user))
//     .catch(e => res.status(400).json({msg: "failed finding user by token"}))
// })

module.exports = router;