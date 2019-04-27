const express = require('express');
const router = express.Router();

const NewJob = require('../../models/NewJob')

router.get('/', (req,res) => {
    NewJob.find()
    .then(resolve => {res.json(resolve)})
    .catch(err => console.log("new job ka error", err.message))
} )


module.exports = router