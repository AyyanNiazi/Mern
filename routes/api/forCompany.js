const express = require('express');
const router = express.Router();

const PostJob = require('../../models/PostJob')

router.get('/', (req,res) => {
    PostJob.find()
    .then(resolve => {res.json(resolve)})
    .catch(err => console.log("new job ka error", err.message))
} )


module.exports = router