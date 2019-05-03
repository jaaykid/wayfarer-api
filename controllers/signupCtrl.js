const express = require('express');
const router = express.Router();
const db = require('../models'); 
const bcrypt = require('bcryptjs')


router.post('/', (req, res) => {
    if (!req.body.username) {
        res.status(400)
    }
    if (!req.body.password) {
        res.status(400)
    }
    bcrypt.genSalt(11, (err, salt) => {
        if (err) return res.status(400)
        bcrypt.hash(req.body.password, salt, (err, hash) => {
            if (err) return res.status(500)
            let newProfile = new db.Profile({
                username: req.body.username,
                password: hash, 
            })
            db.Profile.create(newProfile, (err, savedProfile) => {
                if(err) return res.status(400).json({message: "Sorry you are not a user"})
                res.json(savedProfile);
            })
        })
    })


})


module.exports = router

