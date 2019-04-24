const express = require('express');
const router = express.Router();

const User = require('../../models/User')

router.get('/', (req,res) => {
    User.find()
    .then(resolve => {res.json(resolve)})
    .catch(err => console.log("new job ka error", err.message))
} )


module.exports = router