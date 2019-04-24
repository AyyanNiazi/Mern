const express = require("express");
const router = express.Router();

const NewJob = require('../../models/NewJob');


router.post('/', (req, res) => {

    let {allounce,title,descrip,salary} = req.body

    if(!allounce || !salary || !descrip || !title){
        res.status(400).json({msg: "Error from new job"})
    }
//  allounce = allounce[0];
//  title[0];
//  salary[0];
//  descrip[0]
    console.log(allounce[0],salary[0],title,salary);

    const newJob = new NewJob({
       title:title[0],
       salary:salary[0],
       descrip:descrip[0],
       allounce:allounce[0],
    });

    newJob.save()
    .then(res => console.log("job ban gai", res))
    .catch(err  => console.log("job ka error", err.message))
    console.log(newJob.allounce,"new job if job created");


})




module.exports = router 