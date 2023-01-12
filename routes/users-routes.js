const express = require('express')
const User = require('../models/users')
const router = express.Router();

router.post('/users', (req,res) => {
    const { name, password } = req.body;
    const createdUser = new User({
        name,
        password
    })

    createdUser.save()
    res.send(200)
    //  console.log('created')
})
router.get

module.exports = router