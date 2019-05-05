const express = require('express');
const router = express.Router();
const db = require('../models'); 
const bcrypt = require('bcryptjs')


router.post('/', (req, res) => {
    if (!req.body.username || !req.body.password) {
        return res.status(200).json({errors:'Please enter your username and password'});
    }
    db.Profile.findOne( {username: req.body.username}, (err, foundProfile) => {

        if (err) return res.status(400).json({error: "profile doesn't exist"})
        
        bcrypt.compare(req.body.password, foundProfile.password, (err, match) => {
            if (err) return res.status(400).json({error: 'this did not work'})
            if (match) {
                req.session.currentProfile = foundProfile._id
                req.session.currentProfile = {
                username: foundProfile.username,
                }
                console.log(req.session.currentProfile)
                return res.status(200).json({success: 'this worked wow!'})
            } else {
                res.status(400).json({password: 'incorrect password'})
            }
        })
    })
})


module.exports = router