const express = require("express");
const router = express.Router();

const Posted = require('../../models/PostJob');



// @access  Private
router.delete('/', (req, res) => {
  // const {email} = req.body
  const {email}  = req.body

  console.log(req.body,"ye wala")
    // console.log(req.params.id,"id ")
    Posted.findOneAndDelete(email)
      .then(user => {user.remove().then(() => res.json({ success: true,user }))})
      .catch(err => res.status(404).json({ success: false }));
  });

  // router.delete('/post', (req, res) => {
  //   const {email} = req.body
  //   console.log(email,"ye wala")
  //     // console.log(req.params.id,"id ")
  //     User.findOneAndDelete(email)
  //       .then(user => {user.remove().then(() => res.json({ success: true,user }))})
  //       .catch(err => res.status(404).json({ success: false }));
  //   });


// router.post('/', (req, res) => {

//     const {email} = req.body
//     console.log(req.body,"EMAIL SY DELETE")

//     if(!email){
//         res.status(400).json({msg: "Error from delete"})
//     }
   

//     User.findOneAndDelete({email}, (err) => {
//         if(err) res.status(500).json({msg: "error from deleting"})

//         return res.status(200).json({msg: "succesfuly delted"})
//     } )
//     // .then(res => console.log("job ban gai", res))
//     // .catch(err  => console.log("job ka error", err.message))
//     // console.log(newJob.allounce,"new job if job created");


// })




module.exports = router 