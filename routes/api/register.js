const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require('config');


//get user model
const User = require('../../models/User');

// router.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
  
router.post("/", (req,res) => {
    //form validation
    const {name,email,pass,selector} = req.body;
    console.log("server error",name,email,pass)
    //check validation others
    if( !name || !email || !pass || !selector ){
         return res.status(400).json("register error")
          
          //res.status(400).json({msg: "enter all field"})
    }

    User.findOne({email}).then((user) => {
        if(user){ //user exist already if
            return res.status(400).json({email: "Email already exist "})
        }
        console.log(user,"user",pass)

        const newUser = new User({
            name,
            email,
            password:pass,
            userType:selector,
        });
        console.log("user ban gaya", newUser.password)
      
        // Password hashes for encrypting pass
        bcrypt.genSalt(10, (err, salt) => { //here 10 represnt how hash should be long
          if(err){
              console.log(err.message,"upper wala")
          }
            bcrypt.hash(newUser.password, salt, (err, hash) => { //bcrypt.hash get plain pasword
                if (err)
                    throw err
                    // console.log(err.message)
                
                // console.log("error hash", err.message)
                newUser.password = hash;
                newUser.save()
                .then(user => { 
                    console.log(user," sign wala jwt")
                   jwt.sign( //its need three things for complete its signature on the behalf of jwt
                       {id: user.id,}, //here is 
                       config.get('secretOrKey'),// here is ecret key
                       {expiresIn: 3600},// here is time when token will expires
                        (err,token) => {
                            if(err) throw err;
                            console.log("token", token)
                            res.json({
                                token, // save user with special token which is verified with special sign
                                user : {
                                id:user.id,
                                name: user.name,
                                email: user.email,
                        } })
                        }    
                   )
                    
            })
                .catch(err => console.log("error raised from genrating hashes for new user users.js file: ", err))
        
            })
        })

    })
    .catch(err => res.status(400).json({msg:err.message,}))
})



//login route




module.exports = router;