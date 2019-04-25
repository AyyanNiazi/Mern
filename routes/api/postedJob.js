const express = require('express');
const router = express.Router();

const Posted = require('../../models/PostJob')

router.post('/', (req,res) => {
    
    const {workingProfile,socialMediaProfile,education,name,email,id}  = req.body
    
    console.log(id, "iddd")
    if(!education || !email || !name){
        return res.status(400).json("register error")
    }

    Posted.findOne({_id:id})
    .then(user => {
        if(user)
        return res.status(400).json({email: "Email already exist "})

        const newPost = new Posted({
            name:name[0],
            email:email[0],
            education:education[0],
            socialMediaProfile:socialMediaProfile[0],
            workingProfile:workingProfile[0],
        })
        console.log("posted job ", newPost);
        newPost.save()
        .then(res => console.log(res,"respnse new job post wala server database sy"))
        .catch(err => console.log(err.message,"job post ka error"))
    } )
    .catch(err => console.log("new job ka error", err.message))
} )


module.exports = router